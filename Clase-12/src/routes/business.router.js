import { Router } from "express";
import * as BusinessController from '../controllers/business.controller.js'

const route = Router();

route.get('/',BusinessController.getBusiness)
route.post('/',BusinessController.createBusiness)
route.get('/:bid',BusinessController.getBusinessById)
route.post('/:bid/product',BusinessController.addProduct) // añade un producto

export default route;
