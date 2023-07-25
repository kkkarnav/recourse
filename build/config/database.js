"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoose = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.mongoose = mongoose_1.default;
// generate database url from .env
const db_url = "".concat("mongodb+srv://", process.env.DB_USER, ":", process.env.DB_PWD, "@", process.env.DB_HOST, "/?retryWrites=true&w=majority");
const db_name = "recourse";
const connect_options = {
    dbName: db_name,
};
// connect to mongodb
mongoose_1.default.connect(db_url, connect_options, (err) => { });
const db_connection = mongoose_1.default.connection;
// report success or failure
db_connection.on("error", console.error.bind(console, "db connection error:"));
db_connection.once("open", () => {
    console.log("db connected @ " + process.env.DB_HOST);
});
