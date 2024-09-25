import express from 'express';
import dotenv from 'dotenv';
import router from '../routes/index.js';
import { __dirname } from '../utils.js';

export const AppInit = (app) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    
    app.use('/', router);
}
