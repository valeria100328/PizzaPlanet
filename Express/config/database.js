import mongoose from "mongoose";

const conectarDB = async() => {
    try {
        mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connection with MongoDB: Succesfull')
    } catch (e) {
        console.log("Error connecting to MongoDB");
    }
}

export default { conectarDB };
