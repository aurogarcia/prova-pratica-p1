const express = require('express');
const path = require('path');
const app = express();
const tasksRouter = require('./routes/tasks');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

let tasks = [];

app.use('/', tasksRouter(tasks));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:3000`);
});