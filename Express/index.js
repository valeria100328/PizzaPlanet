const express = require('express');
const conectarDB = require('./config/db');

const cors = require('cors');
const app = express();
conectarDB();

app.use(cors());
app.use(express.json());

app.use('/api/pizzas', require('./routes/pizzaRoute'));

app.listen(3000, (req, res) => {
    console.log('El servidor se esta ejecutando en puerto 3000');
})

