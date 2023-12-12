import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { CreateRefund } from "xendit-node/refund/models";
import xenditClient from "@/config/xenditClient";

const { Refund } = xenditClient;

export const CreateRefundPayment = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }

  const ValueRefund: CreateRefund = req.body;

  await Refund.createRefund({ data: ValueRefund })
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

export const GetRefundByID = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }

  const ValueRefundID: string = req.query.refund_id as string;

  await Refund.getRefund({
    refundID: ValueRefundID,
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

export const CancelRefund = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }

  const ValueRefundID: string = req.query.refund_id as string;

  await Refund.cancelRefund({
    refundID: ValueRefundID,
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
