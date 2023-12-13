import { Request, Response } from "express";
import { CreatePayoutRequest } from "xendit-node/payout/models";
import { validationResult } from "express-validator";
import xenditClient from "@/config/xenditClient";

const { Payout } = xenditClient;

export const CreatePayout = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }

  const data: CreatePayoutRequest = req.body;
  const ValueIdempotencyKey: string = req.query.idempotencyKey as string;

  await Payout.createPayout({
    idempotencyKey: ValueIdempotencyKey,
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

export const GetPayoutChannel = async (req: Request, res: Response) => {
  await Payout.getPayoutChannels({
    currency: "IDR",
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

export const GetPayoutById = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }

  const PayoutID: string = req.query.payout_id as string;

  await Payout.getPayoutById({
    id: PayoutID,
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

export const CancelPayout = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }

  const PayoutID: string = req.query.payout_id as string;

  await Payout.cancelPayout({
    id: PayoutID,
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
