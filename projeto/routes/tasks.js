const express = require('express');

module.exports = (tasks) => {
  const router = express.Router();

  // Página principal
  router.get('/', (req, res) => {
    res.render('index', { tasks });
  });

  // Adicionar tarefa
  router.post('/add', (req, res) => {
    const { title, description, priority } = req.body;
    if (!title || !description || !priority) return res.redirect('/');
    tasks.push({ title, description, priority, done: false });
    res.redirect('/');
  });

  // Marcar como concluída
  router.post('/toggle', (req, res) => {
    const { index } = req.body;
    if (tasks[index]) tasks[index].done = !tasks[index].done;
    res.redirect('/');
  });

  // Excluir tarefa
  router.post('/delete', (req, res) => {
    const { index } = req.body;
    tasks.splice(index, 1);
    res.redirect('/');
  });

  // Página de dashboard
  router.get('/dashboard', (req, res) => {
    const total = tasks.length;
    const done = tasks.filter(t => t.done).length;
    const pending = total - done;
    const percent = total > 0 ? Math.round((done / total) * 100) : 0;
    const latest = tasks.slice(-5).reverse();

    res.render('dashboard', { total, done, pending, percent, latest });
  });

  return router;
};