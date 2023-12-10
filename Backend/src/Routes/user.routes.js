import { Router } from "express";
import {
  ctrlAllUser,
  ctrlCreateUser,
  ctrlDeleteUser,
  ctrlUpdateUser,
  ctrlUserID,
} from "../controllers/ctrlUser.js";

const userRoutes = Router();

userRoutes.post("/log-in", ctrlCreateUser);             // Registro de nuevo usuario
userRoutes.put("/:userId", ctrlUpdateUser);             // Actualizar datos de usuario
userRoutes.delete("/:userId", ctrlDeleteUser);          // Borrar usuario
userRoutes.get("/all-users", ctrlAllUser);              // Buscar todos los usuarios
userRoutes.get("/:userId", ctrlUserID);                 // Perfil de usuario
// userRoutes.get("/", ctrlUserID);                 // Inicio de sesion

export { userRoutes };
