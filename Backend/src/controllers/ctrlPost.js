import { validationResult } from "express-validator";
import { PostModel } from "../Model/PostModel.js";

// Creacion de un post
export const ctrlNewPost = async (req, res) => {
  // const errors = validationResult(req)
  // if (errors) {
  //     return res.status(400).json(errors)
  // }

 try {
    const newPost = await PostModel.create(req.body);
    res.status(201).json(newPost);
 } catch (error) {
    console.log(error);
    res.sendStatus(500)
 }

};

// Obtener todos los post
export const ctrlGetAllPosts = async (req, res) => {
    try {
        const allPost = await PostModel.find();
        res.status(201).json(allPost);
     } catch (error) {
        console.log(error);
        res.sendStatus(500)
     }
};

// Actualizacion de un post
export const ctrlUpdatePost = async (req, res) => {
  const postId = req.params
  try {
    const updatePost = await PostModel.findOneAndUpdate({_id: postId}, req.body, {new: true})
    res.json(updatePost)
  } catch (error) {
    console.log(error);
    res.sendStatus(500)
  }

}

// Eliminar un post
export const ctrlDeletePost = async (req, res) => {
  const postId = req.params

  try {
    await PostModel.findOneAndDelete(postId)
    res.status(200)

  } catch (error) {
    console.log(error);
    res.sendStatus(500)
  }
}

// Buscar un post
export const ctrlGetOnePost = async (req, res) => {
  const postId = req.params

  try {
    const onePost = await PostModel.findById(postId)
    res.json(onePost)

  } catch (error) {
    console.log(error);
    res.sendStatus(500)
  }
}

