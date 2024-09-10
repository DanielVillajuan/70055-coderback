import { Router } from "express";
import { ROUTE_PATH } from "../constants/routesPath.js";
import ViewsRouter from './views.route.js'
import UserRouterCustom from "./users.route.js";
const app = Router()

const UserRouter = new UserRouterCustom();

app.use(ROUTE_PATH.view, ViewsRouter)
app.use(ROUTE_PATH.api_users, UserRouter.getRouter())


export default app
