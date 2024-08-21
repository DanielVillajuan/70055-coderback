import express from 'express';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import ViewRouter from './routes/views.route.js';
import SessionsRouter from './routes/sessions.route.js';
import { create } from 'express-handlebars';
import { __dirname } from './utils.js';
import mongoose from 'mongoose';

const hbs = create();
const app = express();

app.use(session({  
    store: MongoStore.create({
        mongoUrl: 'mongodb+srv://danielvillajuan:qpCcWENKy5dp6gRi@coderback.dkldvkl.mongodb.net/?retryWrites=true&w=majority&appName=Coderback',
        dbName: 'users',
        ttl: 360
    }),
    secret: 'C0D3RH0US3',
    resave: true,
    saveUninitialized: false,
}));

app.engine('handlebars', hbs.engine);
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', ViewRouter);
app.use('/api/sessions/', SessionsRouter);

app.listen(8080, () => {
    console.log('Servidor en 8080')
})


mongoose.connect('mongodb+srv://danielvillajuan:qpCcWENKy5dp6gRi@coderback.dkldvkl.mongodb.net/?retryWrites=true&w=majority&appName=Coderback',{dbName: 'users'})
    .then(() => { console.log('BBDD connectada!')})
.catch(() => {
    console.log('Error al conectarse a la bbdd')
})
