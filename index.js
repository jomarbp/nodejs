require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const db = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());

app.use(cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
    credentials: true
}))

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next)=>{
    console.log('[${new Date().toISOString()}] ${req.method} ${req.url}');
    next();
})

//RUTAS
app.get('/',(req, res)=>{
    res.json({
        message: 'Api funcionando correctamente :)',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'development'
    });
});

app.get('/cabecerabd',async(req,res)=>{
try{
    await db.sequelize.authenticate();
    res.json({
        status: 'OK',
        database: 'Conexión Exitosa',
        timestamp: new Date().toISOString()
    });
}catch(error){
    res.status(500).json({
        status: 'ERROR',
        database: 'Error de conexión a la bd',
        timestamp: new Date().toISOString()
    });
}
});
