import { Router } from "express";
import {
  ctrlCreateComment,
  ctrlDeleteComment,
  ctrlGetAllComment,
  ctrlUpdateComment
} from "../controllers/ctrlComment.js";

import { 
  validationCreateComment, 
  validationDeleteComment, 
  validationEditComment 
} from "../Model/Validations/Comment-Va.js";

const commentsRoutes = Router();

commentsRoutes.post("/new-comment", validationCreateComment , ctrlCreateComment);     // Crear un comentario
commentsRoutes.put("/:commentId", validationEditComment, ctrlUpdateComment);       // Actualizar un comentario
commentsRoutes.delete("/:commentId", validationDeleteComment, ctrlDeleteComment);    // Borrar comentario

commentsRoutes.get("/all-comments", ctrlGetAllComment);     // Buscar todos los comentarios


export { commentsRoutes };
