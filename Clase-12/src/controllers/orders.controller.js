export const getOrders = (req, res) => {
    res.send({ status: 'success', result: "getOrders" })
}

export const getOrderById = (req, res) => {
    res.send({ status: 'success', result: "getOrderById" })
}

export const createOrder = (req, res) => {
    res.send({ status: 'success', result: "createOrder" })
}

export const resolveOrder = (req, res) => {
    res.send({ status: 'success', result: "resolveOrder" })
}
