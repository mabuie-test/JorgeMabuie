const router  = require('express').Router();
const Article = require('../models/Article');

// Listar todos os artigos
router.get('/', async (req, res) => {
  const articles = await Article.find().sort({ date: -1 });
  res.json(articles);
});

// Obter artigo por ID
router.get('/:id', async (req, res) => {
  const article = await Article.findById(req.params.id);
  res.json(article);
});

// Criar novo artigo
router.post('/', async (req, res) => {
  const newArticle = new Article(req.body);
  const saved     = await newArticle.save();
  res.status(201).json(saved);
});

// Editar artigo
router.put('/:id', async (req, res) => {
  const updated = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// Remover artigo
router.delete('/:id', async (req, res) => {
  await Article.findByIdAndDelete(req.params.id);
  res.json({ message: 'Artigo removido' });
});

module.exports = router;
