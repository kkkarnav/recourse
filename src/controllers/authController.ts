import { Router } from "express";
import passport from "passport";
import { OAuth2Strategy as GoogleStrategy } from "passport-google-oauth";
import { User } from "../models/user/model";

const router = Router();

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!;
const CALLBACK_URL = `${process.env.SERVER_DOMAIN!}/auth/callback`;

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

router.get(
  "/callback",
  passport.authenticate("google", { failureRedirect: "/error" }),
  function (req, res) {
    res.redirect(`${process.env.FRONTEND_DOMAIN!}/`);
  }
);

export default router;
