import { Router } from "express";
import { UserModel } from "../models/user.model.js";

const app = Router();

app.get('/getSession', (req, res) => {
    res.json({ session: req.session });
})

app.post('/register', async (req ,res) => {
    const { nombre, apellido, email, edad, password } = req.body;
    console.log(req.body)
    if(!nombre || !apellido || !email || !edad || !password) return res.status(400).json({ message: 'Campos incompletos', status: 'error'})
    try{
        await UserModel.create({
            nombre,
            apellido,
            email,
            edad,
            password
        })

        res.status(201).json({ message: 'success' });
    } catch(e){
        res.status(500).json({message: 'Error al crear el recurso'});
    }
   
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if(!email || !password) return res.status(400).json({message: 'Valores no ingresados'})
    try{
        const user = await UserModel.findOne({ email, password}).lean(); 
        if(!user) return res.status(404).json({ message: 'ingreso mal el mail o contraseña' });
        if(!req.session.isLog){
            req.session.isLog = true;
            req.session.user = {
                nombre: user.nombre,
                apellido: user.apellido,
                edad: user.edad
            };
        }
        res.status(200).json({ message: 'logueado' });
    }catch (e){
        res.status(500).json({message: 'error al loguearse'})
    }

})

app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if(err) return res.send('error al desloguear')
        return res.redirect('/')
    })
})

export default app;
