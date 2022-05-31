import express  from "express";
import pizza from "../controllers/pizza.js"
const router = express.Router();

// Todas las pruebas funcionan correctamente
router.post('/', pizza.createPizza)
router.get('/', pizza.findPizza)
router.get('/:id', pizza.findPizzaById)
router.put('/:id', pizza.updatePizza)
router.delete('/:id', pizza.deletePizza)

export default router;
