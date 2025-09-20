const express = require('express');
const path = require('path');
const app = express();
const tasksRouter = require('./routes/tasks');

// Configurações do EJS e pasta de views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para ler dados do formulário
app.use(express.urlencoded({ extended: true }));

// Servir arquivos estáticos da pasta public
app.use(express.static(path.join(__dirname, 'public')));

// Array de tarefas com estrutura completa
let tasks = [
  // Exemplo:
  // { title: 'Estudar', description: 'Revisar prova de lógica', priority: 'alta', done: false }
];

// Roteador principal
app.use('/', tasksRouter(tasks));

// Inicialização do servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});