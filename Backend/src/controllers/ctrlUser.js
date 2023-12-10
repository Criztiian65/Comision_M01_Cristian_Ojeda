import { UserModel } from "../Model/UsersModel.js";


// funcion para crear un usuario
export const ctrlCreateUser = async (req, res) => {
  try {
    
    const newUser = await UserModel.create(req.body);
    res.status(201).json(newUser);

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};


// Funcion para buscar todos los usuarios
export const ctrlAllUser = async (req, res) => {
  try {
    const allUsers = await UserModel.find({}, '-__v');
    res.json(allUsers);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};


// funcion de encontrar un usuario
export const ctrlUserID = async (req, res) => {
    const {userId} = req.params

    try {

        const user = await UserModel.findOne({ _id: userId}, '-__v')
        res.json(user)

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

// funcion para borrar el usuario
export const ctrlDeleteUser = async (req, res) => {
    const {userId} = req.params

    try {

        await UserModel.findByIdAndDelete(userId)
        res.sendStatus(200)

    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }
}


// funcion de Actualizar datos
export const ctrlUpdateUser = async (req, res) => {
    const {userId} = req.params

    try {

        const updateUser = await UserModel.findOneAndUpdate({ _id: userId }, req.body, {new: true})
        res.json(updateUser)

    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }

}
