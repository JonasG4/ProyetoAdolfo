const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { mongoUri, PORT } = require('./config');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const entradaRoutes = require('./routes/api/entrada');
require('dotenv').config()

//Instanciando las rutas
const locales = require("./routes/api/locales")
const users = require('./routes/api/users');
const reserva = require('./routes/api/reserva');
const validaToken = require('./routes/api/validate-token')
const admin = require('./routes/api/admin')

//Usando middlewares
app.use(cors());
app.use(morgan('tiny'));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());


//Configurando la conexión con MongoDB
mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }).then(() => console.log('Conexión con la base de datos exitosa'))
    .catch((err) => console.log(err));

//Variables globales
//global
app.use((req, res, next) => {
    res.locals.user = req.user || null;
    next();
})

// -------------------------- INICIO - Configurando las rutas del sistema --------------------------

//Ruta para las entradas
app.use('/api/entrada', entradaRoutes);

//ruta para las reservas
app.use('/peticion/api/reserva', reserva);
app.use('/peticionPromo/api/reserva', reserva);
app.use('/api/reserva', reserva);

//rutas para los usuarios
app.use('/api/users', users);
app.use('/signin/api/users', users);
app.use('/peticion/api/users', users);

//rutas para los locales a reservar
app.use('/api/locales', locales);
app.use('/peticion/api/locales', locales);
app.use('/peticionPromo/api/locales', locales);

//rutas para el admin
app.use('/api/admin', validaToken, admin)

//  -------------------------- FIN - Configurando las rutas del sistema --------------------------

//Configurando el puerto
app.listen(PORT, console.log(`Aplicación funcionando en el puerto ${PORT}`));