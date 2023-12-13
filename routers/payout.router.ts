import express, { Application } from "express";
import { query } from "express-validator";
import {
  CreatePayout,
  GetPayoutChannel,
  CancelPayout,
  GetPayoutById,
} from "@/controllers/payout.controllers";
import PayoutValidator from "@/middleware/payout.validator";

const PayoutRouter = (app: Application) => {
  const router = express.Router();

  router.post("/createPayout", PayoutValidator("CreatePayout"), CreatePayout);
  router.get("/payoutById", query("payout_id").notEmpty(), GetPayoutById);
  router.post("/cancelPayout", query("payout_id").notEmpty(), CancelPayout);
  router.get("/payoutChannel", GetPayoutChannel);

  app.use("/payout", router);
};

export default PayoutRouter;
