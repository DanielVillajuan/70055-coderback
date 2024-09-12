import express from 'express';
import config from './config.js'
import { fork } from 'child_process';
const app = express();

const PORT = config.PORT;


app.get('/',(req, res) =>{
    res.send('Pagina home');
})

app.get('/suma', (req, res) => {
    const forked = fork('./utils.js'); // fork crea un subproceso cuando se ejecute logica de utils.js
    forked.send('Inicia el proceso') // ejecuta el evento message al hijo
    forked.on('message',(result) => {
        res.send('El resultado de la suma acumulada es:' + result)
    })
})

app.listen(PORT, () => {
    console.log('server on ' + PORT)
})
