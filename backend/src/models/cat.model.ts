import mongoose from "mongoose";
import type { ICat } from "../types/cats.types.ts";

const catSchema = new mongoose.Schema<ICat>({
    name: {
        type: String,
        required: true,
    },
    breed: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    lifeSpan: {
        type: Number,
        required: true,
    },
    enegryLevel: {
        type: String,
        required: true,
    },
    kidsFriendly: {
        type: Boolean,
        required: true,
    },
    appartmentFriendly: {
        type: Boolean,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const Cat = mongoose.model("cats", catSchema);

export default Cat;