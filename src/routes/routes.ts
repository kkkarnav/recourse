import express from "express";
import controller from "../controllers/controllers";

const router: express.Router = express.Router();

router.get("/course", controller.getCourse);
router.get("/prof", controller.getProf);
router.get("/review", controller.getReview);

router.get("*", (request, response) => {
  response.redirect("/");
});

export = router;
