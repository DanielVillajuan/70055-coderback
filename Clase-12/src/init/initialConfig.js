import express from 'express';
import dotenv from 'dotenv';
import router from '../routes/index.js';
import mongoose from 'mongoose';
dotenv.config();

const connectionDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_STRING ,{ dbName: process.env.USE_DB });
        console.log('BBDD conectada')
    } catch (e) {
        console.log('Error al conectarse a la bbdd');
    }
}
export const AppInit = (app) => {
    connectionDB()
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    
    app.use('/', router);
}
