import { Router } from "express";
import passport from "passport";
import { OAuth2Strategy as GoogleStrategy } from "passport-google-oauth";
import { User } from "../models/user/model";
import session from "express-session";
import { db_url } from "../config/database";
// import passport from "passport";
import MongoDBStore from "connect-mongodb-session";

const router = Router();

const mongoStore = MongoDBStore(session);

const store = new mongoStore({
  collection: "userSessions",
  uri: db_url,
  expires: 1000,
});

const sessionOptions: session.SessionOptions = {
  name: "session",
  secret: process.env.SECRET!,
  store: store,
  resave: false,
  saveUninitialized: false,
  cookie: {
    // secure: true, // Set to true if using HTTPS
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    maxAge: 3600,
    sameSite: false,
  },
};
router.use(session(sessionOptions));

router.use(passport.initialize());
router.use(passport.session());

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!;
const CALLBACK_URL = `${process.env.SERVER_DOMAIN!}/auth/callback`;

console.log(`Using google cient id: ${GOOGLE_CLIENT_ID}`);

declare global {
  namespace Express {
    interface User {
      id?: String;
    }
  }
}

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: CALLBACK_URL,
    },
    function (accessToken, refreshToken, profile, cb) {
      // const

      const email = profile.emails![0].value;

      const domain = email.split("@")[1];

      if (domain !== "ashoka.edu.in") {
        return cb(null, false, {
          message: "User email not part of organisation",
        });
      }

      User.findOne({ google_id: profile.id })
        .then((user) => {
          if (!user) {
            throw "User not found";
          }
          return cb(null, { id: user?._id });
        })
        .catch((err) => {
          User.create({
            google_id: profile.id,
            name: profile.displayName,
          }).then((user) => {
            return cb(null, { id: user._id });
          });
        });
    }
  )
);

passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    cb(null, { id: user.id });
  });
});

passport.deserializeUser(function (user: any, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

router.get(
  "/login",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get("/info", (req, res) => {
  if (!req.user) {
    return res.status(401).json({ msg: "User not logged in" });
  }

  const id = req.user.id;

  User.findById(id)
    .then((user) => {
      if (!user) {
        return res.status(401).json({ msg: "User not logged in" });
      }

      return res.json(user.toObject());
    })
    .catch((err) => {
      return res.status(401).json({ msg: "User not logged in" });
    });
});

router.get("/error", (req, res) => {
  res.redirect(`${process.env.FRONTEND_DOMAIN!}/`);
});

router.get(
  "/callback",
  passport.authenticate("google", {
    failureRedirect: "/auth/error",
    failureMessage: true,
  }),
  function (req, res) {
    res.redirect(`${process.env.FRONTEND_DOMAIN!}/`);
  }
);

export default router;
