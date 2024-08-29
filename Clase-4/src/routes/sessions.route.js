import { Router } from "express";
import { UserModel } from "../models/user.model.js";
import { createHash, isValidPassword } from "../utils.js";
import passport from "passport";

const app = Router();



export default app;
