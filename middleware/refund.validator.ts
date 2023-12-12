import { body } from "express-validator";

const ReasonENUM = [
  "REQUESTED_BY_CUSTOMER",
  "CANCELLATION",
  "DUPLICATE",
  "FRAUDULENT",
  "OTHERS",
];

const RefundValidator = (methode: string) => {
  switch (methode) {
    case "CreateRefundPayment": {
      return [
        body("invoiceId", "invoiceId is Required").exists().notEmpty(),
        body("invoiceId", "invoiceId must be string").isString(),

        body("amount", "amount is Required").exists().notEmpty(),
        body("amount", "amount must be number integer").isInt(),

        body("currency", "currency is Required").exists().notEmpty(),
        body("currency", "currency must be IDR").contains("IDR"),

        body("reason", "reason is Required").exists().notEmpty(),
        body(
          "reason",
          "reason must be REQUESTED_BY_CUSTOMER or CANCELLATION or DUPLICATE or FRAUDULENT or OTHERS"
        ).custom((value, { req }) => {
          return ReasonENUM.includes(value);
        }),
      ];
    }
  }
};

export default RefundValidator;
