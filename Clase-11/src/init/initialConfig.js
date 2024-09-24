import express from 'express';
import dotenv from 'dotenv';
import router from '../routes/index.js';
import { __dirname } from '../utils.js';
import { connectionDB } from '../persistence/mongo/connection.js';

export const AppInit = (app) => {
    dotenv.config()
    connectionDB();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    
    app.use('/', router);
}
