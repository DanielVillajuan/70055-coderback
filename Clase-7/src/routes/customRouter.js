import { Router } from "express";


export default class CustomRouter { // clase abstracta

    constructor(){
        this.router = Router();
        this.init()
    }

    getRouter(){
        return this.router;
    }

    init(){}

    get(path,...cb){ // ...cb -> rest operator []
        this.router.get(path, this.applyCallbacks(cb))
    }

    post(path,...cb){ // ...cb -> rest operator []
        this.router.post(path, this.applyCallbacks(cb))
    }

    applyCallbacks(cb){
        return cb.map(callback => async (...params) =>{ // req, res, next, err, params, sarasa 
            try{
                await callback.apply(this, params) // ejecuta el callback y le pasa como parametro el array
            }catch (e){
                return params[1].status(500).send(e) // params[1] -> res
            }
        })
    }

}
