import mongoose from "mongoose";
import CONFIG from "./config.ts";

const connectToDB = async () => {
    try {
        await mongoose.connect(CONFIG.MONGO_URI);

        console.log("MongoDB connected")
    } catch (error: any) {
        error.message = "MongoDB connection error";
        throw error;
    }
}

export default connectToDB;