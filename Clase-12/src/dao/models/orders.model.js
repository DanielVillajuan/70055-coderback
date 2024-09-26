import mongoose, { model, Schema } from "mongoose";

const OrdersCollection = 'Orders';

const OrdersSchema = new Schema({
    number:Number,
    totalPrice: Number,
    products: [],
    business: {
        type: mongoose.SchemaType.ObjectId,
        ref: 'Business'
    },
    user: {
        type: mongoose.SchemaType.ObjectId,
        ref: 'Users'
    }
})

export const OrdersModel = model(OrdersCollection, OrdersSchema)
