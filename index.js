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
