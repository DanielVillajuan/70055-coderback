import passport from "passport";
import { UserModel } from "../models/user.model.js";

const initPassport = () => {
   

    passport.serializeUser((user, done) => {
        done(null, user.id)
    })

    passport.deserializeUser(async (id, done) => {
        const user = await UserModel.findById(id)
        done(null, user);
    })
}

export default initPassport;
