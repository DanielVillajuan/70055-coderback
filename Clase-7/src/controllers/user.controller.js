import { UserModel } from "../models/user.model.js";
import { createHash, generadorToken, isValidPassword } from "../utils.js";


export const login = async (req, res) => {
    
    try{
        const { password, email } = req.body; 

        const userFound = await UserModel.findOne({ email }).lean()

        if(isValidPassword(userFound, password)){            
            const token = generadorToken({ email: userFound.email, nombre: userFound.nombre, rol: userFound.rol })
            return res.success({ token })
        }
        return res.status(400).json({message: 'error login'})
    }catch (e){
        return res.json({ message: e })
    }
}

export const register = async (req, res) => {
    try{
        const { nombre, apellido, email, rol, password } = req.body;
        const userFound = await UserModel.findOne({ email });
        if(userFound) {

            return res.status(400).json({message: 'ya existe el usuario'})
        }

        const newUser = {
            nombre,
            apellido,
            email,
            rol,
            password: createHash(password)
        }

        const user = await UserModel.create(newUser);
        return res.status(201).json({message: 'usuario creado', user})
    }catch (e){
        return res.status(500).json({message: e})
    }
}
