const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tag` endpoint

router.get('/tags', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({ include: [Product] })
  .then(tag => {
    if (!tag) {
      res.status(404).json({ message: 'No category found, try again' });
      return;
    }
    res.json(category);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  });
});

router.get('/tags/:id', (req, res) => {
});

router.get('/tags/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data\
  Tag.findOne({ where: { id: req.params.id }, include: [Product] })
  .then(tag => {
    if (!tag) {
      res.status(404).json({ message: 'No category found, try again' });
      return;
    }
    res.json(tag)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  })
});


router.post('/tags/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
    .then(tag => res.json(tag))
    res.json(tag)
  })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
});

router.put('/tags/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, { where: { id: req.params.id }, include: [Product] })
  .then(tag => {
    if (!tag) {
      res.status(404).json({ message: 'Enter Valid Tag ID' });
      return;
    }
    res.sendStatus(200)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete('/tags/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({ where: { id: req.params.id } })
  .then(tag => {
    if (!tag) {
      res.status(404).json({ message: 'No category found with that id.' });
      return;
    }
    res.sendStatus(200)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});
module.exports = router;
