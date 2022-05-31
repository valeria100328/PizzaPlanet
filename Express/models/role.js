import mongoose from "mongoose";

const roleSchema = new mongoose.Schema({
    name: String,
    description: String,
    register_date: { type: Date, default: Date.now },
    activated_in_db: Boolean,
});

const role = mongoose.model("roles", roleSchema);

export default role;
