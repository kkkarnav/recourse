"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const controllers_1 = __importDefault(require("../controllers/controllers"));
const path_1 = __importDefault(require("path"));
const router = express_1.default.Router();
router.get("/", (request, response) => {
    return response
        .status(200)
        .sendFile("index.html", { root: path_1.default.join(__dirname, "../../") });
});
router.get("/api/course", controllers_1.default.getCourse);
router.get("/api/prof", controllers_1.default.getProf);
router.get("/api/review", controllers_1.default.getReview);
router.get("*", (request, response) => {
    response.redirect("/");
});
module.exports = router;
