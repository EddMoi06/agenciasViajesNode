import express from 'express';
import router from './routes/index.js'
import db from './config/db.js';


db.authenticate()
    .then(() => console.log('base de datos conectada'))
    .catch(error => console.log(error))


const app = express();

app.set('view engine', 'pug')

app.use((req, res, next) => {
    res.locals.nombreSitio = 'Agencia de Viajes'
    res.locals.fecha = new Date().getFullYear();
    next();
})

app.use(express.static('public'))
app.use('/', router)

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`el servidor esta funcionando en el puerto ${port}`)
})