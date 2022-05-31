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
        let data_pizza = await pizza.findById(req.params.id)
            data_pizza.name = name;
            data_pizza.size = size;
            data_pizza.adition = adition;
            data_pizza.price = price;
        data_pizza = await pizza.findOneAndUpdate({_id: req.params.id}, data_pizza, {new: true});
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
