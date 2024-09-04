import { Router } from "express";
import { ROUTE_PATH } from "../constants/routesPath.js";
import ViewsRouter from './views.route.js'
import UsersRouter from './users.route.js'

const app = Router()

app.use(ROUTE_PATH.view, ViewsRouter)
app.use(ROUTE_PATH.api_users, UsersRouter)


export default app
