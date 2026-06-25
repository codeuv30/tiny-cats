import type { Request, Response } from "express";
import { getAiResponse } from "../services/gemini.service.ts";

const askAiController = async (req: Request, res: Response) => {
    const prompt = req.body.prompt;

    const result = await getAiResponse(prompt);

    res.status(200).json({
        success: true,
        message: "Ai responsed",
        data: result
    })
}

export default {
    askAiController
}