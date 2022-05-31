import mongoose from "mongoose";

const pizzaSchema = mongoose.Schema({
    name: {
        type: 'string',
        require: true
    },
    size: {
        type: 'string',
        require: true
    },
    adition: {
        type: 'string',
        require: true
    },
    price: {
        type: Number,
    },
    fec_cre: {
        type: Date,
        default: Date.now()
    }
})

<<<<<<< HEAD:Express/models/pizza.js
const pizza = mongoose.model("pizza", pizzaSchema);
export default pizza;
=======
module.exports = mongoose.model('user', pizzasSchema)
>>>>>>> c56f1dcf7deef4468e20a878e3da28acc1e72bf1:Express/models/Pizzas.js
