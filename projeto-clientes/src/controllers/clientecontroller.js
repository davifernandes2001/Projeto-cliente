const Cliente = require('../models/Cliente');

// Cadastrar novo cliente
exports.criarCliente = async (req, res) => {
  try {
    const { nome, email, telefone } = req.body;
    const cliente = await Cliente.create({ nome, email, telefone });
    res.status(201).json(cliente);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
};

// Listar todos os clientes
exports.listarClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};
