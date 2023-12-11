import express, { Request, Response, Application, NextFunction } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import helmet from "helmet";
import dotenv from "dotenv";
import validateEnv from "@/utils/validateEnv";

dotenv.config();

validateEnv();

const app: Application = express();
const PORT = process.env.PORT || 8080;

app.use(
  cors({
    origin: "*",
    methods: "GET,PUT,PATCH,POST,DELETE",
  })
);
app.use(helmet());
app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).send({
    statusCode: 200,
    message: "Welcome To Xendit Service",
  });
});

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    message: "Not Found",
    status: 404,
  });
});

app.listen(PORT, async () => {
  console.log(`Server started on PORT ${PORT}`);
});
