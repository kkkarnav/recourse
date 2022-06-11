import express from "express";
import controller from "../controllers/controllers";

const router: express.Router = express.Router();

router.get("/api/course", controller.getCourse);
router.get("/api/prof", controller.getProf);
router.get("/api/review", controller.getReview);

export = router;
