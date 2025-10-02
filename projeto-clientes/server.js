const express = require('express');
const app = express();
const clienteRoutes = require('./src/routes/clienteRoutes');
const { sequelize } = require('./src/config/database');

app.use(express.json());

// Rotas
app.use('/clientes', clienteRoutes);

// Conectar ao banco e iniciar o servidor
sequelize.sync().then(() => {
  console.log('Banco conectado com sucesso!');
  app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
});
