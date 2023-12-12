import express, { Application } from "express";
import { GetBalance } from "@/controllers/balance.controllers";

const BalanceRouter = (app: Application) => {
  const router = express.Router();

  router.get("/getBalance", GetBalance);

  app.use("/balance", router);
};

export default BalanceRouter;
