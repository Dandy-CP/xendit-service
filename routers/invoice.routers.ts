import express, { Application } from "express";
import { query } from "express-validator";
import {
  CreateInvoice,
  GetInvoiceByID,
  GetListInvoice,
  ExpireInvoice,
} from "@/controllers/invoice.controllers";
import InvoiceValidator from "@/middleware/invoice.validator";

const InvoiceRouter = (app: Application) => {
  const router = express.Router();

  router.post(
    "/createInvoice",
    InvoiceValidator("CreateInvoiceRequest"),
    CreateInvoice
  );
  router.get("/getInvoice", GetListInvoice);
  router.get("/getInvoiceById", query("invoiceId").notEmpty(), GetInvoiceByID);
  router.post("/expireInvoice", query("invoiceId").notEmpty(), ExpireInvoice);

  app.use("/invoice", router);
};

export default InvoiceRouter;
