import express from 'express';
import config from './config.js'
const app = express();

const PORT = config.PORT;

console.log(PORT)
app.listen(PORT, () => {
    console.log('server on ' + PORT)
})
