import { header } from "express-validator";
import { applyValidations } from "../../middlewares/apply-validations.js";

export const authHeaders = [
    header("authorization").exists().withMessage('Primero debe loguearse'),

    applyValidations,
];