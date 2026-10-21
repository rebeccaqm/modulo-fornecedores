const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware')

// Importa o controller de fornecedores
const controllerFornecedores = require('../controllers/controllerFornecedores');


router.get('/fornecedores', auth, controllerFornecedores.getFornecedores);
router.post('/fornecedores', auth, controllerFornecedores.store);
router.get('/fornecedores/:id', auth, controllerFornecedores.getById);

module.exports = router;