import type { Document } from "mongoose";

export interface ICat extends Document {
    name: string;
    breed: string;
    description: string;
    kidsFriendly: boolean;
    appartmentFriendly: boolean;
    lifeSpan: number;
    enegryLevel: string;
    image: string;
    color: string;
    createdAt?: Date;
    updatedAt?: Date;
}