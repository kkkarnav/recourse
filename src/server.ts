import http from "http";
import express, { Express } from "express";
import morgan from "morgan";
require("dotenv").config();
import cors from "cors";
import path from "path";
import authController from "./controllers/authController";

import routes from "./routes/routes";

const router: Express = express();

const corsOptions: cors.CorsOptions = {
  origin: process.env.FRONTEND_DOMAIN!,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Enable passing of cookies, authentication headers, etc.
};

router.use(cors(corsOptions));

//logging
router.use(morgan("dev"));
// parse the request
router.use(express.urlencoded({ extended: false }));
// parse incoming json
router.use(express.json());

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
