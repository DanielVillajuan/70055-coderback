import { Router } from "express";
import * as UserController from '../controllers/users.controllers.js'

const route = Router();

route.get('/',UserController.getUsers)
route.post('/',UserController.saveUser)
route.get('/:id',UserController.getUserById)


export default route;
