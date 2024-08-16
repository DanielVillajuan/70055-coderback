import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';

const app = express();
// app.use(cookieParser("MiSECRETO")); // va a hashear la cookie 

// app.get('/setCookie', (req, res) => {
    
//     res.cookie('mi primera cookie','Primera clase de Back II',{ maxAge: 60000, signed: true }).send('Cookie');
// })

// app.get('/getCookie', (req, res) => {

//     res.send(req.signedCookies) // preguntar si hay algo.
// })

// app.get('/deleteCookie', (req, res) => {
//     res.clearCookie('mi primera cookie').send('Cookie eliminada')
// })

app.use(session({
    secret: 'C0D3RH0US3',
    resave: true,
    saveUninitialized: false,
}));

app.get('/session', (req, res) => {
    
    // req.session esto es un objeto que le podemos almacenar informacion que va a vivir en cada request 
    // {}
    if(!req.session.isFirst){
        req.session.isFirst = true;
        res.send('Bienvenido esta es tu primera vez')
    }else {        
        res.send('Ya estuviste por aca...')
    }


    // para eliminar una session 
        
})

app.get('/deleteSession', (req, res) => {
    req.session.destroy((error) => {
        if(error) res.send('No se pudo eliminar la session')
        else res.send('Session eliminada')
    })
})

const USERS = [{
    nombre: 'Pedro',
    rol: 'admin',
},{
    nombre: 'juanito',
    rol: 'superadmin'
}]

app.post('/login', (req, res) => {
    const { usuario } = req.body

    const userFinded = USERS.find(user => user.nombre === usuario) //
    if(!userFinded) {
        req.session.username = usuario;
        req.session.rol = 'invitado'
        return res.send('Bienvenido invitado')
    }

    req.session.username = userFinded.nombre
    req.session.rol = userFinded.rol
    res.send('Bienvenido mi querido admin');

})

function isAdmin(req, res, next){
    if(req.session.rol !== 'invitado'){
        return next()
    }

    return res.status(401).send('Flaco no tenes permisos')
}

app.get('/rutaAdmin', isAdmin, (req, res) => {
    // manipulo cosas de solo admin
    res.send('si ves esto es porque sos un crack admin.')
})

app.listen(8080, () => {
    console.log('Servidor en 8080')
})
