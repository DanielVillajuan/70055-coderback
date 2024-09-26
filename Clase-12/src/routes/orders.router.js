import { Router } from "express";
import * as OrdersController from '../controllers/orders.controller.js'

const route = Router();

route.get('/',OrdersController.getOrders)
route.post('/',OrdersController.createOrder)
route.get('/:oid',OrdersController.getOrderById)
route.put('/:oid',OrdersController.resolveOrder) // resuelve una orden

export default route;
