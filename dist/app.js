"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// parsers
app.use(express_1.default.json());
app.use(express_1.default.text());
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
// routers
const userRouter = express_1.default.Router();
const couseRouter = express_1.default.Router();
app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", couseRouter);
userRouter.post("/create-user", logger, (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: "User is created successfully",
        data: user,
    });
});
couseRouter.post("/create-course", logger, (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        message: "course is created successfully",
        data: course,
    });
});
app.get("/", logger, (req, res) => {
    console.log(req.query);
    res.send("Hello Wars!");
});
app.post("/", logger, (req, res) => {
    console.log(req.body);
    res.send({
        message: "successfully data received",
    });
});
exports.default = app;
