import { Request, Response } from "express";
import { CreateInvoiceRequest } from "xendit-node/invoice/models";
import { validationResult } from "express-validator";
import xenditClient from "@/config/xenditClient";

const { Invoice } = xenditClient;

export const CreateInvoice = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }

  const data: CreateInvoiceRequest = req.body;

  await Invoice.createInvoice({
    data,
  })
    .then((response) => {
      return res.status(200).send(response);
    })
    .catch((error) => {
      return res.status(error.status).send({
        message: error.errorMessage,
        status: error.status,
        errorCode: error.errorCode,
      });
    });
};

export const GetInvoiceByID = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }

  const { invoiceId } = req.query;

  await Invoice.getInvoiceById({
    invoiceId: invoiceId as string,
  })
    .then((response) => {
      return res.status(200).send(response);
    })
    .catch((error) => {
      return res.status(error.status).send({
        message: error.errorMessage,
        status: error.status,
        errorCode: error.errorCode,
      });
    });
};

export const GetListInvoice = async (req: Request, res: Response) => {
  await Invoice.getInvoices()
    .then((response) => {
      return res.status(200).send(response);
    })
    .catch((error) => {
      return res.status(error.status).send({
        message: error.errorMessage,
        status: error.status,
        errorCode: error.errorCode,
      });
    });
};

export const ExpireInvoice = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }

  const { invoiceId } = req.query;

  await Invoice.expireInvoice({
    invoiceId: invoiceId as string,
  })
    .then((response) => {
      return res.status(200).send(response);
    })
    .catch((error) => {
      return res.status(error.status).send({
        message: error.errorMessage,
        status: error.status,
        errorCode: error.errorCode,
      });
    });
};
