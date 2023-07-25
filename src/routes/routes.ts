import express from "express";
import controller from "../controllers/controllers";
import path from "path";

const router: express.Router = express.Router();

router.get("/", (request, response) => {
  return response
    .status(200)
    .sendFile("index.html", { root: path.join(__dirname, "../../") });
});
router.get("/api/course", controller.getCourse);
router.get("/api/prof", controller.getProf);
router.get("/api/review", controller.getReview);
router.get("*", (request, response) => {
  response.redirect("/");
});

export = router;
