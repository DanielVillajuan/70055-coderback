import passport from "passport";
import { UserModel } from "../models/user.model.js";
import GHStrategy from 'passport-github2'
const GithubStrategy = GHStrategy.Strategy

const initPassport = () => {

    passport.use(new GithubStrategy({
        clientID: 'Iv23liB5IFqGWlPjeHfI',
        clientSecret: '7f411b86999a9aadb71e331c7267249dc2404cae',
        callbackURL: 'http://127.0.0.1:8080/api/sessions/githubcallback'
    }, async (accToken, refreshToken, profile, done) => {
        console.log(profile)
        try{
            const user = UserModel.find({email: profile.__json.email })
        
            if(!user){
                const newUser = {
                    nombre: '',
                    apellido: '',
                    email: profile.__json.email,
                    password: '',
                    edad: 20
                }
    
                const userCreate = await UserModel.create(newUser);
                done(null, userCreate)
            }else {
                done(null, user)
            }
            return;
        }catch (e){
           return done(e)
        }
    }))
   

    passport.serializeUser((user, done) => {
        done(null, user.id)
    })

    passport.deserializeUser(async (id, done) => {
        const user = await UserModel.findById(id)
        done(null, user);
    })
}

export default initPassport;
