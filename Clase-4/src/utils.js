import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'


export const createHash = (pass) => bcrypt.hashSync(pass, bcrypt.genSaltSync(10)); // $salt.hash

export const isValidPassword = (user, pass) => bcrypt.compareSync(pass,user.password) // user.password -> es la contraseña de la bbdd

const __filename = fileURLToPath(import.meta.url)

export const __dirname = dirname(__filename)

const PRIVATE_KEY = 'C0D3RH0US3'


export const generadorToken = (user) => {
    const token = jwt.sign({user},PRIVATE_KEY,{ expiresIn: '24h' })
    return token
}

export const decodeToken = (req, res, next) => {
    const token = req.headers.authorization
    console.log(token)
    if(!token) res.status(400).json({message: 'Error token'});
    jwt.verify(token,PRIVATE_KEY, (err, userDecoded) => {
        if(err) res.status(400).json({message: 'Error token'})
            console.log(userDecoded)
        req.user = userDecoded.user;
        next()
    })
}
