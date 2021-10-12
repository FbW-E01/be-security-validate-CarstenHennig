import { body, header } from "express-validator";

const userValidators = [
  body("species").isLength({ min: 3 }).withMessage("too-short"),
  body("species").isLength({ max: 81 }).withMessage("too-long"),
  body("species").isAlpha().withMessage("not-a-string"),
  body("notes").isLength({ max: 140 }).withMessage("too-long"),
  body("notes")
    .isString()
    .matches(/^[A-Za-z\s]+$/)
    .withMessage("not-a-string"),
  body("estimatedAmount")
    .isInt({ min: 1, max: 100000 })
    .withMessage("not-an-integer"),
];

export default userValidators;
