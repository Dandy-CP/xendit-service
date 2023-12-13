import { body, query } from "express-validator";

const PayoutValidator = (methode: string) => {
  switch (methode) {
    case "CreatePayout": {
      return [
        query("idempotencyKey").notEmpty(),

        body("referenceId", "referenceId is Required").exists().notEmpty(),
        body("referenceId", "referenceId must be string").isString(),

        body("amount", "amount is Required").exists().notEmpty(),
        body("amount", "amount must be number integer").isInt(),

        body("currency", "currency is Required").exists().notEmpty(),
        body("currency", "currency must be IDR").contains("IDR"),

        body("channelCode", "channelCode is Required").exists().notEmpty(),
        body("channelCode", "channelCode must be string").isString(),

        body("description", "description is Required").exists().notEmpty(),
        body("description", "description must be string").isString(),

        body("channelProperties", "channelProperties is Required")
          .exists()
          .notEmpty(),
        body(
          "channelProperties",
          "channelProperties must be object"
        ).isObject(),

        body(
          "channelProperties.accountNumber",
          "channelProperties accountNumber is required"
        )
          .exists()
          .notEmpty(),
        body(
          "channelProperties.accountNumber",
          "channelProperties accountNumber must be string"
        ).isString(),

        body(
          "channelProperties.accountHolderName",
          "channelProperties accountHolderName is required"
        )
          .exists()
          .notEmpty(),
        body(
          "channelProperties.accountHolderName",
          "channelProperties accountHolderName must be string"
        ).isString(),

        body("receiptNotification", "receiptNotification is Required")
          .exists()
          .notEmpty(),
        body(
          "receiptNotification",
          "receiptNotification must be object"
        ).isObject(),

        body(
          "receiptNotification.emailTo",
          "receiptNotification emailTo is Required"
        )
          .exists()
          .notEmpty(),
        body(
          "receiptNotification.emailTo",
          "receiptNotification emailTo must be array string"
        ).isArray({ min: 1 }),
      ];
    }
  }
};

export default PayoutValidator;
