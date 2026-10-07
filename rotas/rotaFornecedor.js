const express = require('express');
const router = express.Router();

// Importa o controller de fornecedores
const controllerFornecedores = require('../controllers/controllerFornecedores');


router.get('/fornecedores', controllerFornecedores.getFornecedores);
router.post('/fornecedores', controllerFornecedores.store);
router.get('/fornecedores/:id', controllerFornecedores.getById);

module.exports = router;