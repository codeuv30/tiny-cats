import type { Request, Response } from "express";
import { aiRecommendedService } from "../services/aiRecommended.service.ts";

const aiRecommend = async (req: Request, res: Response) => {
    const { kidsFriendly, appartmentFriendly } = req.body;

    const result = await aiRecommendedService(kidsFriendly, appartmentFriendly);

    return res.status(200).json({
        success: true,
        data: result
    })
}

export default {
    aiRecommend
}