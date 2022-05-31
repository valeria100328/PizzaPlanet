import express from "express";
const router = express.Router();
import pizzaController from "../controllers/pizzaController";
//const pizzaController = require('../controllers/pizzaController');
import auth from "../middlewares/auth.js";


router.post('/', auth, pizzaController.createPizza)
router.get('/', auth, pizzaController.findPizza)
router.get('/:id', auth, pizzaController.findPizzaById)
router.put('/:id', auth, pizzaController.updatePizza)
router.delete('/:id', auth, pizzaController.deletePizza)

module.exports = router;
