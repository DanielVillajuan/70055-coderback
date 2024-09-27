import Business from "../dao/class/business.dao.js";
import Orders from "../dao/class/orders.dao.js";
import User from "../dao/class/users.dao.js";

const OrdersServices = new Orders();
const UserServices = new User();
const BusinessServices = new Business();

export const getOrders = async (req, res) => {
    const result = await OrdersServices.getOrders();
    if(!result) return res.status(500).json({ status: "error" })
    res.send({ status: 'success', result })
}

export const getOrderById = async (req, res) => {
    const { oid } = req.params
    const result = await OrdersServices.getOrderById(oid)
    if(!result) return res.status(500).json({ status: "error" })
    res.send({ status: 'success', result })
}

export const createOrder = async (req, res) => {
    const { userId, businessId, products } = req.body; // products es una lista de productos que tiene la orden
    const resultUser = await UserServices.getUserById(userId);
    const resultBusiness = await BusinessServices.getBusinessById(businessId);
    const actualOrders = resultBusiness.products.filter(product => products.includes(product.id))

    const totalPrice = actualOrders.reduce((acumm, product) => {
        acumm+=product.price
        return acumm;
    },0)
    const orderNumber = new Date().getTime();
    const order = {
        number: orderNumber,
        business: businessId,
        user: userId,
        status: "pending",
        products: actualOrders.map(product => product.id),
        totalPrice
    }
    const createOrder = await OrdersServices.createOrder(order)
    console.log(createOrder)
    if(!createOrder) return res.status(500).json({ status: "error" })

    resultUser.orders.push(createOrder);
    const userUpdated = await UserServices.updateUser(userId, resultUser)
    if(!userUpdated)return res.status(500).json({ status: "error" })

    res.send({ status: 'success', result: createOrder })
}

export const resolveOrder = async (req, res) => {
    const { resolve } = req.query;
    const { oid } = req.params;

    const order = await OrdersServices.getOrderById(oid)
    order.status = resolve;
    const result = await OrdersServices.resolveOrders(order._id, order);
    if(!result)return res.status(500).json({ status: "error" })
    res.send({ status: 'success', result  })
}
