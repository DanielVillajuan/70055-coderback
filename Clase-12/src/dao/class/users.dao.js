import { UserModel } from "../models/users.model.js"

export default class User {
    getUser = async () => {
        try{
            return await UserModel.find()
        }catch (e){
            console.log(e)
            return null
        }
    }

    getUserById = async(id) => {
        try{
            return await UserModel.findOne({_id: id})
        }catch (e){
            console.log(e)
            return null
        }
    }
    saveUser = async(user) => {
        try{
            return await UserModel.create(user)
        }catch (e){
            console.log(e)
            return null
        }
    }
    updateUser = async(id, user) => {
        try{
            return await UserModel.updateOne({ _id: id }, {$set: user }, {new: true})
        }catch (e){
            console.log(e)
            return null
        }
    }
}
