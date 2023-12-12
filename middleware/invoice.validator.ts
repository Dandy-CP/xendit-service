import { body } from "express-validator";

const InvoiceValidator = (methode: string) => {
  switch (methode) {
    case "CreateInvoiceRequest": {
      return [
        body("externalId", "externalId is Required").exists().notEmpty(),
        body("externalId", "externalId must be string").isString(),

        body("amount", "amount is Required").exists().notEmpty(),
        body("amount", "amount must be number integer").isInt(),

        body("payerEmail", "payerEmail is required").exists().notEmpty(),
        body("payerEmail", "payerEmail must be in Email format").isEmail(),

        body("customer", "customer is required").exists(),
        body("customer", "customer must be in object").isObject().notEmpty(),

        body("customer.id", "customer id is required").exists().notEmpty(),
        body("customer.id", "customer id must be string").isString(),

        body("customer.givenNames", "customer givenNames is required")
          .exists()
          .notEmpty(),
        body(
          "customer.givenNames",
          "customer givenNames must be string"
        ).isString(),

        body("customer.email", "customer email id is required")
          .exists()
          .notEmpty(),
        body(
          "customer.email",
          "customer email must be in email format"
        ).isEmail(),

        body("customer.phoneNumber", "customer phoneNumber is required")
          .exists()
          .notEmpty(),
        body(
          "customer.phoneNumber",
          "customer phoneNumber must be string format"
        ).isString(),
        body(
          "customer.phoneNumber",
          "customer phoneNumber is must be in indonesia format"
        ).isMobilePhone("id-ID"),

        body("customer.addresses", "customer addresses is required")
          .exists()
          .notEmpty(),
        body(
          "customer.addresses",
          "customer addresses must be array format"
        ).isArray({ min: 1 }),

        body(
          "customer.addresses.*.country",
          "customer addresses country is required"
        )
          .exists()
          .notEmpty(),
        body(
          "customer.addresses.*.country",
          "customer addresses country must be string format"
        ).isString(),

        body("customer.addresses.*.city", "customer addresses city is required")
          .exists()
          .notEmpty(),
        body(
          "customer.addresses.*.city",
          "customer addresses city must be string format"
        ).isString(),

        body(
          "customer.addresses.*.province",
          "customer addresses province is required"
        )
          .exists()
          .notEmpty(),
        body(
          "customer.addresses.*.province",
          "customer addresses province must be string format"
        ).isString(),

        body(
          "customer.addresses.*.postalCode",
          "customer addresses postalCode is required"
        )
          .exists()
          .notEmpty(),
        body(
          "customer.addresses.*.postalCode",
          "customer addresses postalCode must be string format"
        ).isString(),

        body(
          "customer.addresses.*.streetLine1",
          "customer addresses streetLine1 is required"
        )
          .exists()
          .notEmpty(),
        body(
          "customer.addresses.*.streetLine1",
          "customer addresses streetLine1 must be string format"
        ).isString(),

        body("description", "description is Required").exists().notEmpty(),
        body("description", "description must be string").isString(),

        body("items", "items is required").exists().notEmpty(),
        body("items", "items must be array format").isArray({ min: 1 }),

        body("items.*.referenceId", "items referenceId is required")
          .exists()
          .notEmpty(),
        body(
          "items.*.referenceId",
          "items referenceId must be string"
        ).isString(),

        body("items.*.name", "items name is required").exists().notEmpty(),
        body("items.*.name", "items name must be string").isString(),

        body("items.*.price", "items price is required").exists().notEmpty(),
        body("items.*.price", "items price must be integer").isInt(),

        body("items.*.quantity", "items quantity is required")
          .exists()
          .notEmpty(),
        body("items.*.quantity", "items quantity must be integer").isInt(),
      ];
    }
  }
};

export default InvoiceValidator;
