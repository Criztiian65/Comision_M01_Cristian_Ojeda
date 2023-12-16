import { Router } from "express";
import {
  ctrlDeletePost,
  ctrlGetAllPostsUser,
  ctrlGetAllPost,
  ctrlNewPost,
  ctrlUpdatePost
} from "../controllers/ctrlPost.js";

import { validateCreatePost,
  validateDeletePost,
  validateEditPost, 
  
} from "../Model/Validations/Post-Va.js";


const postRoutes = Router();

postRoutes.post("/newpost", validateCreatePost , ctrlNewPost);           // Crea un nuevo post, Valida los datos subidos
postRoutes.put("/updatepost", validateEditPost ,ctrlUpdatePost);         // Busca el post y lo actualiza según nueva información
postRoutes.delete("/:postId", validateDeletePost ,ctrlDeletePost);       // Borra el post segun id

postRoutes.get("/all-post", ctrlGetAllPostsUser);                            // Buscar todos los post propios

postRoutes.get("/public-posts", ctrlGetAllPost);         // Busca todos los post

export { postRoutes };
