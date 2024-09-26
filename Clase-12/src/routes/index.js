import { Router } from "express";
import { ROUTE_PATH } from "../constants/routesPath.js";
import UserRouter from './users.router.js'
import BusinessRouter from './business.router.js'
import OrdersRouter from './orders.router.js'
const app = Router()


app.use(ROUTE_PATH.users, UserRouter)
app.use(ROUTE_PATH.business, BusinessRouter)
app.use(ROUTE_PATH.orders, OrdersRouter)


export default app
