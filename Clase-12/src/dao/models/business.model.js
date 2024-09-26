import { model, Schema } from "mongoose";

const BusinessCollection = 'Business';

const BusinessSchema = new Schema({
    name:String,
    products: []
})

export const BusinessModel = model(BusinessCollection, BusinessSchema)
