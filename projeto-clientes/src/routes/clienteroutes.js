const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

// Rota para cadastrar cliente
router.post('/', clienteController.criarCliente);

// Rota para listar clientes
router.get('/', clienteController.listarClientes);

module.exports = router;
