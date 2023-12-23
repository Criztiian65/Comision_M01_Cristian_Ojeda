import { UserModel } from "../Model/UsersModel.js";
import * as bcrypt from 'bcrypt';
import { createJWT } from '../utils/jwt.js';

// funcion para crear un usuario
export const ctrlCreateUser = async (req, res) => {
  try {
    
    const newUser = await UserModel.create(req.body);
    await newUser.save()
    res.status(201).json({newUser});


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


// funcion de loguear al usuario
export const ctrlLoginUser = async (req, res) => {
    const {email, password } = req.body
    
    try {

        const user = await UserModel.findOne({email: email}, '-__v')
        // if (!user) return res.status(404).json({error: 'El usuario no existe'})
        !user && res.status(404).json({error: 'El usuario no existe'}) // prueba

        const Mach = await bcrypt.compare(password, user.password)
        
        if (!Mach) return res.status(400).json({error: 'Contraseña invalida'}) 
        

        const token = await createJWT({ userId: user._id })

        res.status(200).json({token, user})
        return
        

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
