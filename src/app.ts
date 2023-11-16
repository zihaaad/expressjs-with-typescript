import express, {Request, Response} from "express";
const app = express();

// middlewares
app.use(express.json());
app.use(express.text());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Wars!");
});

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.send({
    message: "successfully data received",
  });
});

export default app;
