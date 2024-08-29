import { Router } from "express";
import { isAuth, isLog } from "../middlewares/protectedRoute.js";

const app = Router();


app.get('/', (req, res) => {
    res.render('home', {})
})

app.get('/login', isLog,(req, res) => {
    res.render('login', {})
})

export default app;
