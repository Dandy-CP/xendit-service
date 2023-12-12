import { Request, Response } from "express";
import xenditClient from "@/config/xenditClient";

const { Balance } = xenditClient;

export const GetBalance = async (req: Request, res: Response) => {
  await Balance.getBalance()
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
