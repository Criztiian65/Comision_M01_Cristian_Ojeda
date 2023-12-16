import { Router } from "express";
import {
  ctrlAllUser,
  ctrlCreateUser,
  ctrlDeleteUser,
  ctrlUpdateUser,
  ctrlLoginUser,
} from "../controllers/ctrlUser.js";
import {
  createUserValidations,
  loginUserValidations,
} from "../Model/Validations/User-Va.js";

const userRoutes = Router();

userRoutes.post("/sing-up", createUserValidations, ctrlCreateUser);   // Registro de nuevo usuario
userRoutes.put("/:userId", ctrlUpdateUser);                           // Actualizar datos de usuario
userRoutes.delete("/:userId", ctrlDeleteUser);                        // Borrar usuario
userRoutes.get("/all-users", ctrlAllUser);                            // Buscar todos los usuarios
userRoutes.post("/log-in", loginUserValidations, ctrlLoginUser);      // Perfil de usuario
// userRoutes.get("/", ctrlUserID);                                   // Inicio de sesion

export { userRoutes };
