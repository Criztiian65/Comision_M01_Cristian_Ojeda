import { Router } from "express";
import {
  ctrlCreateComment,
  ctrlDeleteComment,
  ctrlGetAllComment,
  ctrlGetOneComment,
  ctrlUpdateComment,
} from "../controllers/ctrlComment.js";

const commentsRoutes = Router();

commentsRoutes.post("/new-comment", ctrlCreateComment);     // Registro de nuevo usuario
commentsRoutes.put("/:commentId", ctrlUpdateComment);       // Actualizar datos de usuario
commentsRoutes.delete("/:commentId", ctrlDeleteComment);    // Borrar usuario
commentsRoutes.get("/all-comments", ctrlGetAllComment);     // Buscar todos los usuarios
commentsRoutes.get("/:commentId", ctrlGetOneComment);       // Perfil de usuario

export { commentsRoutes };
