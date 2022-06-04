import express from "express";
import controller from "../controllers/controllers";
import { Course } from "../models/course/model";

const router: express.Router = express.Router();

router.get("/api/course", controller.getCourse);
router.get("/api/prof", controller.getProf);
router.get("/api/review", controller.addReview);

export = router;
