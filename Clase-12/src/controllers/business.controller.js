import Business from "../dao/class/business.dao.js"

const BusinessServices = new Business()

export const getBusiness = async(req, res) => {
    const result = await BusinessServices.getBusiness();
    if(!result) return res.status(500).send({ status: 'error' })
    res.send({ status: 'success', result })
}

export const getBusinessById = async(req, res) => {
    const { bid } = req.params
    const result = await BusinessServices.getBusinessById(bid);
    if(!result) return res.status(500).send({ status: 'error' })
    res.send({ status: 'success', result })
}

export const createBusiness = async(req, res) => {
    const business = req.body
    const result = await BusinessServices.saveBusiness(business);
    if(!result) return res.status(500).send({ status: 'error' })
    res.send({ status: 'success', result })
}

export const addProduct = async (req, res) => {
    const product = req.body
    const { bid } = req.params
    let business = await BusinessServices.getBusinessById(bid);
    business.products.push(product) 
    const result = await BusinessServices.updateBusiness(business._id, business);
    if(!result) return res.status(500).send({ status: 'error' })
    res.send({ status: 'success', result })
}
