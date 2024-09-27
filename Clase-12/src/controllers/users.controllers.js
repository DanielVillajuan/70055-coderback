import User from "../dao/class/users.dao.js"

const UserServices = new User()

export const getUsers = async (req, res) => {
    const result = await UserServices.getUser()
    if(!result) return res.status(500).json({ status: 'error' })
    res.send({ status: 'success', overwriteMiddlewareResult })
}

export const getUserById = async (req, res) => {
    const { id } = req.params
    const result = await UserServices.getUserById(id)
    if(!result) return res.status(500).json({ status: 'error' })
    res.send({ status: 'success', result })
}

export const saveUser = async (req, res) => {
    const user = req.body
    const result = await UserServices.saveUser(user)
    if(!result) return res.status(500).json({ status: 'error' })
    res.send({ status: 'success', result })
}
