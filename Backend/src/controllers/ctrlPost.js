import { PostModel } from "../Model/PostModel.js";
import { UserModel } from "../Model/UsersModel.js";

// Creacion de un post
export const ctrlNewPost = async (req, res) => {
  console.log( 'estamos en el controlador ', req.user._id);
  const author = req.user._id
  const {title, description, imageURL}= req.body
  
  try {
  const newPost = new PostModel({
    title,
    description,
    imageURL,
    author: author
  })
 
    // Guardado en PostModel
    await newPost.save()

    // Guardado en el array de UserModel
    const user = await UserModel.findById(author) 
    user.posts.push(newPost) 
    await user.save()

   return res.status(201).json({newPost});
    
    
 } catch (error) {
    return res.status(500).json({ error: Error.message  });
 }

};


// Obtener todos los post propios
export const ctrlGetAllPostsUser = async (req, res) => {
  
  const user = req.user
    
  try {
        const allPost = await PostModel.find({author: user._id}); // esto busca los post de un solo usuario
        res.status(200).json({allPost});
        
     } catch (error) {
        console.error(error);
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

// Buscar todos los post
export const ctrlGetAllPost = async (req, res) => {
  const user = req.user
  const postId = req.params

  try {

    const allPost = await PostModel.findById()
    res.json({allPost, user, postId})

  } catch (error) {
    console.log(error);
    res.sendStatus(500)
  }
}

