import { body, param, header} from "express-validator";
import { applyValidations } from "../../middlewares/apply-validations.js";

// Validaciones para la creación de un nuevo post
export const validateCreatePost = [
  body("title")
    .notEmpty()
    .isString()
    .withMessage("El título es requerido y debe ser un texto"),

  body("description")
    .notEmpty()
    .isString()
    .withMessage("La descripción es requerida y debe ser un texto"),

  body("imageURL")
    .isURL()
    .notEmpty()
    .withMessage("La URL del avatar es requerida y debe ser una URL valida"),

  applyValidations,
];

// Validaciones para la edición de un post
export const validateEditPost = [
  param("postId")
  .notEmpty()
  .isMongoId()
  .withMessage("ID de post inválido"),

  body("title")
    .optional()
    .isString()
    .withMessage("El título debe ser un texto"),

  body("description")
    .optional()
    .isString()
    .withMessage("La descripción debe ser un texto"),

  body("imageURL")
    .isURL()
    .notEmpty()
    .withMessage("La imagen URL es requerida y debe ser una URL valida"),

  applyValidations,
];

// Validaciones para la eliminación de un post
export const validateDeletePost = [
  param("postId")
  .notEmpty()
  .isMongoId()
  .withMessage("ID de post inválido"),

  applyValidations,
];

// Validaciones para la búsqueda de posts
export const validateOnePost = [
  param("postId")
  .notEmpty()
  .isMongoId()
  .withMessage("ID de post inválido"),
  
  applyValidations
];
