import express, { Application } from "express";
import { query } from "express-validator";
import {
  CreateRefundPayment,
  GetRefundByID,
  CancelRefund,
} from "@/controllers/refund.controllers";
import RefundValidator from "@/middleware/refund.validator";

const RefundRouter = (app: Application) => {
  const router = express.Router();

  router.post(
    "/createRefundPayment",
    RefundValidator("CreateRefundPayment"),
    CreateRefundPayment
  );
  router.get("/getRefundByID", query("refund_id").notEmpty(), GetRefundByID);
  router.post("/cancelRefund", query("refund_id").notEmpty(), CancelRefund);

  app.use("/refund", router);
};

export default RefundRouter;
