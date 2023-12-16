import { param, body } from "express-validator";
import { applyValidations } from "../../middlewares/apply-validations.js";
import { isValidObjectId } from "mongoose";

// Validación para crear un comentario en un post
export const validationCreateComment = [
  param("postId")
    .notEmpty()
    .isString()
    .custom(isValidObjectId)
    .withMessage("El parametro es requerido y debe ser un ID válido"),

  body("description")
    .notEmpty()
    .isString()
    .withMessage("El campo es requerido y debe ser un texto"),

  applyValidations,
];

// Validación para Buscar los comentarios de un post
export const validationOneComment = [
  param("postId")
    .notEmpty()
    .isString()
    .custom(isValidObjectId)
    .withMessage("El parametro es requerido y debe ser un ID válido"),

  param("commentId")
    .notEmpty()
    .isString()
    .custom(isValidObjectId)
    .withMessage("El parametro es requerido y debe ser un ID válido"),

  applyValidations,
];

// Validación para Borrar el comentario
export const validationDeleteComment = [
  param("commentId")
    .notEmpty()
    .isString()
    .custom(isValidObjectId)
    .withMessage("El parametro es requerido y debe ser una ID válida."),

  applyValidations,
];


// Validación para Editar el comentario
export const validationEditComment = [
  param("commentId")
    .isMongoId()
    .withMessage("El ID del comentario es inválido"),


  body("description")
    .isString()
    .notEmpty()
    .withMessage("El texto del comentario es obligatoria"),

  
  applyValidations,
];
