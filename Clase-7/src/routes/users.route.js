// import { Router } from "express";
import { login, register } from "../controllers/user.controller.js";

import CustomRouter from "./customRouter.js"

// const app = Router();

// app.post('/login', login)
// app.post('/register', register)

// app.get('/:id', (req, res) => {
//     res.send(req.params.id)
// })

export default class UserRouterCustom extends CustomRouter {
    init(){
        this.post('/login',login);
        this.post('/register',register);
        
        this.get('/:id', (req, res) => {
            res.send('Saludos desde el user router custom')
        })
    }
}
