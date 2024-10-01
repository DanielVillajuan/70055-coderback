import express from 'express';
import transport from './servicesEmail.js';
import dotenv from 'dotenv';
import { __dirname } from './utils.js';
import client from './servicesTwilio.js';
dotenv.config()
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get('/mail',async (req, res) => {
    await transport.sendMail({
        from: 'CoderMail <danielvillajuan@gmail.com>',
        to: 'danielvillajuan@hotmail.com',
        subject: 'Esto es la clase 13 - hay tabla',
        html: `
            <div>
                <p> Saludos desde nodemailer!</p>
                <a href="https://goole.com.ar" target="__blank"> 
                    <img src="cid:tabla1" />
                </a>
            </div>
        `,
        attachments: [{
            filename: 'haytabla.png',
            path: __dirname + '/img/Hay_tabla.png',
            cid: 'tabla1'
        }]
    })
    res.json({ message: 'Email enviado ahora con imagenes' })
} );

app.get('/send', async (req, res) => {

    await client.messages.create({
        body: ``,
        from: process.env.TWILIO_NUMBER, // el numeor de twilio
        to:'+541167588854'
    })

    res.json({ message: 'SMS ENVIADO' })
})


app.listen(process.env.PORT, () => {
    console.log('Servidor en 8080')
});

