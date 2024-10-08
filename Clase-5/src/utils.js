import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'


export const createHash = (pass) => bcrypt.hashSync(pass, bcrypt.genSaltSync(10));

export const isValidPassword = (user, pass) => bcrypt.compareSync(pass,user.password);

const __filename = fileURLToPath(import.meta.url);

export const __dirname = dirname(__filename);


export const generadorToken = (user) => {
    const token = jwt.sign({ user },process.env.SECRET,{ expiresIn: '24h' })
    return token
}

export const decodeToken = (req, res, next) => {
    const token = req.headers.authorization

    if(!token) return res.status(403).json({ message: 'Error token' });

    jwt.verify(token,process.env.SECRET, (err, userDecoded) => {
        if(err) return  res.status(400).json({message: 'Error token'})
            console.log(userDecoded)
        req.user = userDecoded.user;
        next()
    })
}
