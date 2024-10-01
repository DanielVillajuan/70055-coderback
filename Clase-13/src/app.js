import express from 'express';
const app = express()

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/',() => {

} );


app.listen(process.env.PORT, () => {
    console.log('Servidor en 8080')
});

