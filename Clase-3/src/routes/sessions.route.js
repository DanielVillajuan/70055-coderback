import { Router } from "express";
import { UserModel } from "../models/user.model.js";
import { createHash, isValidPassword } from "../utils.js";
import passport from "passport";

const app = Router();

app.get('/getSession', (req, res) => {
    res.json({ session: req.session });
})

app.post('/register',passport.authenticate('register',{ failureRedirect: '/failRegister' }), async (req ,res) => {
   res.status(201).json({ message: 'Paso la estrategia de registro y fue exitoso'})
});

app.get('/failRegister', (req, res) => { // esto siempre va a ser ejecutado por passport register en caso de error
    res.status(400).json({message: 'error al momento de registrar'})
})

app.post('/login', passport.authenticate('login',{ failureRedirect: '/failLogin' }), (req, res) => {
    if(!req.user) return res.status(400).json({message: 'ERror en las credenciales'})
    req.session.user = {
        nombre: req.user.nombre,
        apellido: req.user.apellido,
        edad: req.user.edad,
        email: req.user.email
    }

    res.status(200).json({message: 'logueado'})

})

app.get('/failLogin', (req, res) => { // esto siempre va a ser ejecutado por passport register en caso de error
    res.status(400).json({message: 'error al momento de loguear'})
})


app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if(err) return res.send('error al desloguear')
        return res.redirect('/')
    })
})

export default app;
