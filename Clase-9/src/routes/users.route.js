import UserController from "../controllers/user.controller.js";
import CustomRouter from "./customRouter.js"
const userController = new UserController();

export default class UserRouterCustom extends CustomRouter {
    init(){
        this.post('/login',['PUBLIC'],userController.login);
        this.post('/register',['PUBLIC'],userController.register);
        this.get('/:id',['ADMIN'], userController.getById)
        this.get('/',['ADMIN'], userController.getAll)
        this.post('/',['ADMIN'], userController.create)
        this.put('/:id',['ADMIN'], userController.update)
    }
}
