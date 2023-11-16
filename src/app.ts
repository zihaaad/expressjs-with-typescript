import express, {NextFunction, Request, Response} from "express";
const app = express();

// parsers
app.use(express.json());
app.use(express.text());

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.hostname);
  next();
};

// routers
const userRouter = express.Router();
const couseRouter = express.Router();
app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", couseRouter);

userRouter.post("/create-user", logger, (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);
  res.json({
    success: true,
    message: "User is created successfully",
    data: user,
  });
});

couseRouter.post("/create-course", logger, (req: Request, res: Response) => {
  const course = req.body;
  console.log(course);
  res.json({
    success: true,
    message: "course is created successfully",
    data: course,
  });
});

app.get("/", logger, (req: Request, res: Response) => {
  console.log(req.query);
  res.send("Hello Wars!");
});

app.post("/", logger, (req: Request, res: Response) => {
  console.log(req.body);
  res.send({
    message: "successfully data received",
  });
});

export default app;
