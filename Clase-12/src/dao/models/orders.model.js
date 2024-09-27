import mongoose, { model, Schema } from "mongoose";

const OrdersCollection = 'Orders';

const OrdersSchema = new Schema({
    number:Number,
    totalPrice: Number,
    products: [],
    status: String,
    business: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Business'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    }
})

export const OrdersModel = model(OrdersCollection, OrdersSchema)
