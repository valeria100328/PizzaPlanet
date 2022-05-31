import express from "express";
import cors from "cors";
import db from "./config/database.js";
import role from "./routes/role.js";
import user from "./routes/user.js"
import pizza from "./routes/pizza.js"
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/role", role )
app.use("/api/user", user);
app.use("/api/pizza", pizza)


app.listen(process.env.PORT, () => {
    console.log('El servidor se esta ejecutando en el puerto:' + process.env.PORT);
})

db.conectarDB();
