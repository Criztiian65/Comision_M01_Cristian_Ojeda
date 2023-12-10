import { CommentModel } from '../Model/CommentModel.js'
//Crea un comentario
export const ctrlCreateComment = async (req, res) => {
try {
    
    const newPost = await CommentModel.create(req.body)
    res.status(201).json(newPost)

} catch (error) {
    console.log(error);
    res.sendStatus(500)
}

}

// Actualiza un comentario
export const ctrlUpdateComment = async (req, res) => {
const commentId = req.params
try {
    
    const updateComment = await CommentModel.findOneAndUpdate({_id: postId}, req.body, {new: true})
    res.status(200).json(updateComment)

} catch (error) {
    console.log(error);
    res.sendStatus(500)
}

}

// Eliminar un comentario
export const ctrlDeleteComment = async (req, res) => {
    const commentId = req.params

  try {
    await CommentModel.findOneAndDelete(commentId)
    res.status(200)

  } catch (error) {
    console.log(error);
    res.sendStatus(500)
  }
}

// Encontrar todos los comentarios
export const ctrlGetAllComment = async (req, res) => {
    try {
    
        const allComments = await CommentModel.find()
        res.status(200).json(allComments)
    
    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }
}

// Encuentra un solo comentario
export const ctrlGetOneComment = async (req, res) => {
    const commentId = req.params
try {
    
    const oneComment = await CommentModel.findOne({_id: commentId},'-__v')
    res.status(200).json(oneComment)

} catch (error) {
    console.log(error);
    res.sendStatus(500)
}
}