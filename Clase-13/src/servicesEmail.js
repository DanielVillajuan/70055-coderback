
import nodemailer from 'nodemailer'


const transport = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: 'danielvillajuan@gmail.com',
        pass: 'tyhi fyap eegi bxjl'
    }
})

export default transport;
