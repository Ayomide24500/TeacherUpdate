"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const express_session_1 = __importDefault(require("express-session"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const mainApp_1 = require("./mainApp");
const dbConfig_1 = require("./utils/dbConfig");
dotenv_1.default.config();
// import { rateLimit } from "express-rate-limit";
const connect_mongodb_session_1 = __importDefault(require("connect-mongodb-session"));
const MongoDBStore = (0, connect_mongodb_session_1.default)(express_session_1.default);
const store = new MongoDBStore({
    uri: process.env.MONGO_DB_URL,
    collection: "sessions",
});
const app = (0, express_1.default)();
const portServer = process.env.PORT;
const port = parseInt(portServer);
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", process.env.APP_URL);
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});
// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000,
//   limit: 10,
//   message: "Limit exceeded, please try again in 15mins time!!!",
//   // standardHeaders: "draft-7",
//   // legacyHeaders: false,
// });
app.use((0, cors_1.default)({ origin: process.env.APP_URL }));
app.use(express_1.default.json());
app.use((0, helmet_1.default)());
app.use((0, morgan_1.default)("dev"));
// app.use(limiter);
app.use((0, express_session_1.default)({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 24 * 60,
        sameSite: "lax",
        secure: false,
        httpOnly: true,
    },
    store,
}));
(0, mainApp_1.mainApp)(app);
const server = app.listen(process.env.PORT || port, () => {
    console.clear();
    console.log();
    (0, dbConfig_1.dbConfig)();
});
process.on("uncaughtException", (error) => {
    console.log("uncaughtException: ", error);
    process.exit(1);
});
process.on("unhandledRejection", (reason) => {
    console.log("unhandledRejection: ", reason);
    server.close(() => {
        process.exit(1);
    });
});
