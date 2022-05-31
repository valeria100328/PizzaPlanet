<<<<<<< HEAD
import express from "express";
import cors from "cors";
import db from "./config/database.js";
import role from "./routes/role.js";
import user from "./routes/user.js"
import pizza from "./routes/pizza.js"
import dotenv from "dotenv";
dotenv.config();
=======
import express from ('express');
const conectarDB = require('./config/db');
>>>>>>> c56f1dcf7deef4468e20a878e3da28acc1e72bf1

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/role", role )
app.use("/api/user", user);
app.use("/api/pizza", pizza)

<<<<<<< HEAD
=======
app.use('/api/pizzas', require('./routes/pizzaRoute'));
app.use('/api/pizzas', require('./routes/role'));
app.use('/api/pizzas', require('./routes/user'));


>>>>>>> c56f1dcf7deef4468e20a878e3da28acc1e72bf1

app.listen(process.env.PORT, () => {
    console.log('El servidor se esta ejecutando en el puerto:' + process.env.PORT);
})

db.conectarDB();
