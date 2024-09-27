import { OrdersModel } from "../models/orders.model.js"

export default class Orders {
    getOrders = async () => {
        try{
            return await OrdersModel.find()
        }catch (e){
            console.log(e)
            return null
        }
    }

    getOrderById = async(id) => {
        try{
            return await OrdersModel.findOne({_id: id})
        }catch (e){
            console.log(e)
            return null
        }
    }
    createOrder = async(order) => {
        try{
            return await OrdersModel.create(order)
        }catch (e){
            console.log(e)
            return null
        }
    }
    resolveOrders = async(id, order) => {
        try{
            await OrdersModel.updateOne({ _id: id }, {$set: order },{ new: true })
        }catch (e){
            console.log(e)
            return null
        }
    }
}
