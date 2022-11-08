const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/category` endpoint

router.get('/category', (req, res) => {
  // find all category
  // be sure to include its associated Products
  Category.findAll({ include: [Product] })
    .then(category => {
      if (!category) {
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


router.get('/category/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({ where: { id: req.params.id }, include: [Product] })
    .then(category => {
      if (!category) {
        res.status(404).json({ message: 'No category found, try again' });
        return;
      }
      res.json(category)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err)
    })
});

router.post('/categories', (req, res) => {
  // create a new category
  Category.create(req.body)
    .then(category => res.json(category))
    res.json(category)
  })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
});


router.put('/categories/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, { where: { id: req.params.id }, include: [Product] })
    .then(category => {
      if (!category) {
        res.status(404).json({ message: 'Enter Valid Category id' });
        return;
      }
      res.json(category);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/categories/:id', (req, res) => {
  //update a category by its 'id' value
  Category.update(req.body, { where: { id: req.params.id } })
    .then(category => {
      if (!category) {
        res.status(404).json({ message: 'Enter Valid Category id' });
        return;
      }
      res.sendStatus(200);
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err);
    })
});

router.delete('/category/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({ where: { id: req.params.id } })
    .then(category => {
      if (!category) {
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
