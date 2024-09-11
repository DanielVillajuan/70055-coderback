import express from 'express';
import dotenv from 'dotenv';
import router from '../routes/index.js';
import { __dirname } from '../utils.js';
import { connectionDB } from '../mongo/connection.js';
import cookieParser from 'cookie-parser';

export const AppInit = (app) => {
    dotenv.config()
    connectionDB();
    app.use(cookieParser(process.env.SECRET))
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    
    app.use('/', router);
}
