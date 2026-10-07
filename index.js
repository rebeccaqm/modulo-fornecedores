// o index.js vai ser apenas para receber as requisições

const express = require('express');
const rotaFornecedor = require('./rotas/rotaFornecedor');
require('dotenv').config();

const porta = process.env.PORTA


const app = express();
app.use(express.json());
app.use(rotaFornecedor);

app.listen(porta, () => {
    console.log("Servidor em execução: http://localhost:3000")  
});