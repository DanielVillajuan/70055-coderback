import { Router } from "express";
import passport from "passport";
import { decodeToken, generadorToken } from "../utils.js";

const app = Router();

app.get('/login', passport.authenticate('github', { scope: ['user:email'] }) ,async (req, res) =>{
    console.log('paso path: login')
})

app.get('/githubcallback', passport.authenticate('github',{ scope: ['user:email'] }), (req, res) => {
    req.session.user = req.user 

    res.redirect('/');
})

app.get('/errorLogin', (req, res) => {
    
})

// app.post('/login', (req, res)=>{

//     // validamos en nuetra base de datos si el usuario existe

//     const token = generadorToken({nombre: 'daniel', apellido: 'villajuan'})
//     res.json({message: 'fue un exito', token })
// })

// app.get('/users', decodeToken ,(req, res) => {
//     res.json({ usuario: req?.user })
// })

export default app;
