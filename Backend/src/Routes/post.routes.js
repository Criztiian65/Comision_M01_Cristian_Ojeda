import { Router } from "express";
import {
  ctrlDeletePost,
  ctrlGetAllPosts,
  ctrlGetOnePost,
  ctrlNewPost,
  ctrlUpdatePost,
} from "../controllers/ctrlPost.js";
import { body } from "express-validator";

const postRoutes = Router();

postRoutes.post("/create-post", ctrlNewPost);           // Crea un nuevo post, Valida los datos subidos
postRoutes.put("/update-post", ctrlUpdatePost);         // Busca el post y lo actualiza según nueva información
postRoutes.delete("/:commentId", ctrlDeletePost);       // Borra el post segun id
postRoutes.get("/all-post", ctrlGetAllPosts);           // Buscar todos los post
postRoutes.get("/one-post", ctrlGetOnePost);         // Buscar un post

export { postRoutes };
