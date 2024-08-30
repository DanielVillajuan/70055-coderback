import { Router } from "express";
import { isAuth, isLog } from "../middlewares/protectedRoute.js";

const app = Router();


app.get('/', (req, res) => {
    res.render('home', {})
})

app.get('/register', isLog, (req, res) => {
    res.render('register', {})
})

app.get('/login', isLog,(req, res) => {
    res.render('login', {})
})

app.get('/perfil', isAuth, (req, res) => {
    const user = req.session.user;
    const isLog = req.session.isLog;

    res.render('perfil', {user, isLog})
})

app.get('/recuperarPassword', (req, res) => {
    res.render('recuperarPassword')
})

export default app;
