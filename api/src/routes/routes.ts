import express from "express";
import controller from "../controllers/controllers";

const router: express.Router = express.Router();

router.get("/", (request, response) => {
	return response.status(200).sendfile('./index.html');
});
router.get("/api/course", controller.getCourse);
router.get("/api/prof", controller.getProf);
router.get("/api/review", controller.getReview);
router.get('*', (request, response) => {
	response.redirect('/');
});

export = router;
