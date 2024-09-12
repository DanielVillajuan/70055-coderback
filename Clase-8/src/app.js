import express from 'express';
const app = express();

const PORT = 8080;

app.get('/', (req, res) => {
    res.send('home')
})

console.log(process.argv)

app.listen(PORT, () => {
    console.log('server on ' + PORT)
})
