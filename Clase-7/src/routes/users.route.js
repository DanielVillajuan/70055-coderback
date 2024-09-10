import { Router } from "express";
import { login, register } from "../controllers/user.controller.js";

const app = Router();

app.post('/login', login)
app.post('/register', register)

app.get('/:id',(req, res) => {
    res.send(req.params.id)
})

export default app
