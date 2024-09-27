import { BusinessModel } from "../models/business.model.js"

export default class Business {
    getBusiness = async () => {
        try{
            return await BusinessModel.find()
        }catch (e){
            console.log(e)
            return null
        }
    }

    getBusinessById = async(id) => {
        try{
            return await BusinessModel.findOne({_id: id})
        }catch (e){
            console.log(e)
            return null
        }
    }
    saveBusiness = async(business) => {
        try{
            return await BusinessModel.create(business)
        }catch (e){
            console.log(e)
            return null
        }
    }
    updateBusiness = async(id, business) => {
        try{
            await BusinessModel.updateOne({ _id: id }, {$set: business })
        }catch (e){
            console.log(e)
            return null
        }
    }
}
