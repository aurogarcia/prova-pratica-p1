const express = require('express');

module.exports = (tasks) => {
  const router = express.Router();

  router.get('/', (req, res) => {
    res.render('index', { tasks });
  });

  router.post('/add', (req, res) => {
    const { title } = req.body;
    if (title) tasks.push(title);
    res.redirect('/');
  });

  router.post('/delete', (req, res) => {
    const { index } = req.body;
    tasks.splice(index, 1);
    res.redirect('/');
  });

  return router;
};