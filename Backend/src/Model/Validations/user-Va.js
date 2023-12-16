import { body } from "express-validator";
import { applyValidations } from "../../middlewares/apply-validations.js";
import { UserModel } from "../UsersModel.js";

// Expresión regular para válidar email
const patternEmail =
  /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}/;

// Expresión regular para válidar contraseña de al menos 8 caracteres de long, que al menos contenga
// 1 mayus, 1 numero y un caracter especial
const patternPassword =
  /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_-])[A-Za-z\d@$!%*?&_-]{8,}$/;

// Validaciones para la creaci+on de un usuario
export const createUserValidations = [
  body("username")
    .notEmpty()
    .trim()
    .isString()
    .withMessage(
      "El nombre de usuario no puede estar vacio y debe ser solo texto"
    )
    .custom(async (value) => {
      const user = await UserModel.findOne({ username: value });
      if (user) throw new Error("Nombre de usuario ya utilizado");
      return true;
    }),

  body("email")
    .notEmpty()
    .trim()
    .matches(patternEmail)
    .withMessage("El email es requerido y debe ser una dirección valida")
    .custom(async (value) => {
      const user = await UserModel.findOne({ email: value });
      if (user) throw new Error("Este email ya esta en uso");
      return true;
    }),

  body("password")
    .notEmpty()
    .matches(patternPassword)
    .withMessage(
      "La contraseña es requerida, debe tener una longitud de 8 caracteres y contener al menos 1 Mayúscula, 1 número y un carácter especial @$!%*?&_-"
    ),

  body("avatarURL")
    .isURL()
    .notEmpty()
    .withMessage("La URL del avatar es requerida y debe ser una URL valida"),

  applyValidations,
];

// Validaciones para el login de un usuario
export const loginUserValidations = [
  body("email")
    .notEmpty()
    .trim()
    .matches(patternEmail)
    .withMessage("El email es requerido y debe ser una dirección valida"),

  body("password")
    .notEmpty()
    .matches(patternPassword)
    .withMessage(
      "La contraseña es requerida, debe tener una longitud de 8 caracteres y contener al menos 1 Mayúscula, 1 número y un carácter especial @$!%*?&_-"
    ),

  applyValidations,
];
