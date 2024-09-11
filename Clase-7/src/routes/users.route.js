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
        this.post('/login',['PUBLIC'],login);
        this.post('/register',['PUBLIC'],register);

        this.get('/:id',['USER'], (req, res) => {
            res.success(req.params.id);
        })
    }
}
