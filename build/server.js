"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
require("dotenv").config();
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes/routes"));
const router = (0, express_1.default)();
router.use((0, cors_1.default)());
//logging
router.use((0, morgan_1.default)("dev"));
// parse the request
router.use(express_1.default.urlencoded({ extended: false }));
// parse incoming json
router.use(express_1.default.json());
// boilerplate
router.use((request, response, next) => {
    // set headers
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (request.method === "OPTIONS") {
        response.header("Access-Control-Allow-Methods", "GET PATCH DELETE POST");
        return response.status(200).json({});
    }
    next();
});
router.use("/", routes_1.default);
// handles 404ing requests
router.use((request, response, next) => {
    const error = new Error("not found");
    return response.status(404).json({
        message: error.message,
    });
});
const server = http_1.default.createServer(router);
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 4004;
server.listen(PORT, () => console.log(`express api @ ${PORT}`));
