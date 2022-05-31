const Pizzas = require('../models/Pizzas');


exports.createPizza = async (req, res) => {
    try {
        let data_pizza;
        data_pizza = new Pizzas(req.body);
        await data_pizza.save();
        res.send(data_pizza)
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups...Hay un errror, comuniquese con soporte')
    }
}

exports.findPizza = async (req, res) => {
    try {
        const data_pizza = await Pizzas.find();
        res.json(data_pizza);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups...Hay un errror, comuniquese con soporte')
    }
}

exports.findPizzaById = async (req, res) => {
    try {
        const data_pizza = await Pizzas.findById(req.params.id);
        if(!data_pizza){
            res.status(404).json({message: 'No sen encontraron coincidencias'})
        }
        res.json(data_pizza);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups...Hay un errror, comuniquese con soporte')
    }
}

exports.updatePizza = async (req, res) => {
    try {
        const {name, size, adition, price} = req.body
        let data_pizza = await Pizzas.findById(req.params.id)
        if (!data_pizza ) {
            res.status(404).json({ message: 'No se encontró coincidencias para la actualización de pizza planets que quiere modificar' })
        }
            data_pizza.name = name;
            data_pizza.size = size
            data_pizza.adition = adition
            data_pizza.price = price
            data_pizza = await Pizzas.findOneAndUpdate({_id: req.params.id}, data_pizza, {new: true});
        res.json(data_pizza);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups...Hay un errror, comuniquese con soporte')
    }
}

exports.deletePizza = async (req, res) => {
    try {
        const data_pizza = await Pizzas.findById(req.params.id);
        if(!data_pizza){
            res.status(404).json({message: 'No sen encontraron coincidencias para eliminar la pizza'})
        }
        await Pizzas.findByIdAndRemove({_id: req.params.id})
        res.json({message: 'Pizza deleted'});
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups...Hay un errror, comuniquese con soporte')
    }
}
