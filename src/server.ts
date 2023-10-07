import http from "http";
import express, { Express } from "express";
import morgan from "morgan";
require("dotenv").config();
import cors from "cors";
import session from "express-session";
import path from "path";
import authController from "./controllers/authController";
import { v4 as uuidv4 } from "uuid";

import routes from "./routes/routes";
import passport from "passport";

const router: Express = express();

router.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SECRET!,
    genid: function (req) {
      return uuidv4(); // use UUIDs for session IDs
    },
  })
);

router.use(passport.authenticate("session"));

router.use(cors());

//logging
router.use(morgan("dev"));
// parse the request
router.use(express.urlencoded({ extended: false }));
// parse incoming json
router.use(express.json());

// boilerplate
router.use((request, response, next) => {
  // set headers
  response.header("Access-Control-Allow-Origin", "*");
  response.header(
    "Access-Control-Allow-Headers",
    "origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (request.method === "OPTIONS") {
    response.header("Access-Control-Allow-Methods", "GET PATCH DELETE POST");
    return response.status(200).json({});
  }
  next();
});

router.get("/", (request, response) => {
  return response
    .status(200)
    .sendFile("index.html", { root: path.join(__dirname, "../") });
});

router.use("/auth", authController);
router.use("/api", routes);

// handles 404ing requests
router.use((request, response, next) => {
  const error: Error = new Error("not found");
  return response.status(404).json({
    message: error.message,
  });
});

const server: any = http.createServer(router);
const PORT: any = process.env.PORT ?? 4004;
server.listen(PORT, () => console.log(`express api @ ${PORT}`));
