import mongoose, { ConnectOptions } from "mongoose";

// generate database url from .env
const db_url: string = "".concat(
  "mongodb+srv://",
  process.env.DB_USER!,
  ":",
  process.env.DB_PWD!,
  "@",
  process.env.DB_HOST!,
  "/?retryWrites=true&w=majority"
);

const db_name: string = "recourse";

const connect_options: ConnectOptions = {
  dbName: db_name,
};

// connect to mongodb
mongoose.connect(db_url, connect_options, (err: any) => {});
const db_connection: any = mongoose.connection;

// report success or failure
db_connection.on("error", console.error.bind(console, "db connection error:"));
db_connection.once("open", () => {
  console.log("db connected @ " + process.env.DB_HOST!);
});

export { mongoose };
