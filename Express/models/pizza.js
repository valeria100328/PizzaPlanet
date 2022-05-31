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
    },
    price: {
        type: Number,
    },
    fec_cre: {
        type: Date,
        default: Date.now()
    }
})

const pizza = mongoose.model("pizza", pizzaSchema);
export default pizza;
