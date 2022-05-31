import pizza from '../models/pizza.js'

const createPizza = async (req, res) => {
    try {
        let data_pizza;
        data_pizza = new pizza(req.body);
        await data_pizza.save();
        res.send(data_pizza)
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups...Hay un errror, comuniquese con soporte')
    }
}

const findPizza = async (req, res) => {
    try {
        const data_pizza = await pizza.find();
        res.json(data_pizza);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups...Hay un errror, comuniquese con soporte')
    }
}

const findPizzaById = async (req, res) => {
    try {
        const data_pizza = await pizza.findById(req.params.id);
        if(!data_pizza){
            res.status(404).json({message: 'No sen encontraron coincidencias'})
        }
        res.json(data_pizza);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups...Hay un errror, comuniquese con soporte')
    }
}

const updatePizza = async (req, res) => {
    try {
        const {name, size, adition, price} = req.body
<<<<<<< HEAD:Express/controllers/pizza.js
        let data_pizza = await pizza.findById(req.params.id)
            data_pizza.name = name;
            data_pizza.size = size;
            data_pizza.adition = adition;
            data_pizza.price = price;
        data_pizza = await pizza.findOneAndUpdate({_id: req.params.id}, data_pizza, {new: true});
=======
        let data_pizza = await Pizzas.findById(req.params.id)
        if (!data_pizza ) {
            res.status(404).json({ message: 'No se encontró coincidencias para la actualización de pizza planets que quiere modificar' })
        }
            data_pizza.name = name;
            data_pizza.size = size
            data_pizza.adition = adition
            data_pizza.price = price
            data_pizza = await Pizzas.findOneAndUpdate({_id: req.params.id}, data_pizza, {new: true});
>>>>>>> c56f1dcf7deef4468e20a878e3da28acc1e72bf1:Express/controllers/pizzaController.js
        res.json(data_pizza);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups...Hay un errror, comuniquese con soporte')
    }
}

const deletePizza = async (req, res) => {
    try {
        const data_pizza = await pizza.findById(req.params.id);
        if(!data_pizza){
            res.status(404).json({message: 'No sen encontraron coincidencias para eliminar la pizza'})
        }
        await pizza.findByIdAndRemove({_id: req.params.id})
        res.json({message: 'Pizza deleted'});
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups...Hay un errror, comuniquese con soporte')
    }
}

export default {
    createPizza,
    findPizza,
    findPizzaById,
    updatePizza,
    deletePizza
}
