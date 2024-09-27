import mongoose, { model, Schema } from "mongoose";

const UserCollection = 'users';

const UserSchema = new Schema({
    name: String,
    email: String,
    role: String,
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Orders'
    }]
})

export const UserModel = model(UserCollection, UserSchema);
