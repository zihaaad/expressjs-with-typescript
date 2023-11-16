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

app.get(
  "/",
  logger,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send(something);
    } catch (error) {
      next(error);
    }
  }
);

app.post("/", logger, (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    message: "successfully data received",
  });
});

app.all("*", (req: Request, res: Response) => {
  res.status(400).json({
    success: false,
    message: "Route is not found",
  });
});

// global error handler
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error) {
    res.status(400).json({
      success: false,
      message: "Something went Wrong!",
    });
  }
});

export default app;
