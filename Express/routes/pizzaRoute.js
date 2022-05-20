const express = require('express');
const router = express.Router();
const pizzaController = require('../controllers/pizzaController');


router.post('/', pizzaController.createPizza)
router.get('/', pizzaController.findPizza)
router.get('/:id', pizzaController.findPizzaById)
router.put('/:id', pizzaController.updatePizza)
router.delete('/:id', pizzaController.deletePizza)

module.exports = router;
