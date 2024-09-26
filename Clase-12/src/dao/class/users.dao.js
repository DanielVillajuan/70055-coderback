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
            await UserModel.create(user)
        }catch (e){
            console.log(e)
            return null
        }
    }
    updateUser = async(id, user) => {
        try{
            await UserModel.updateOne({ _id: id }, {$set: user })
        }catch (e){
            console.log(e)
            return null
        }
    }
}
