import type { Request, Response } from "express";
import { getMcpClient } from "../services/mcp.service.ts"
import { getAiResponse } from "../services/gemini.service.ts";

const testMcpController = async (req: Request, res: Response) => {

    const client = await getMcpClient();

    const tools = await client.listTools();

    const result = await client.callTool({
        name: "recommend_cats",
        arguments: {
            kidsFriendly: true,
            appartmentFriendly: true
        }
    });

    const catsData = result.content[0].text;

    const prompt = `

    Available Cats

    ${catsData}

    Recommend best cats from this data

    `

    const aiResponse = await getAiResponse(prompt);

    return res.json({
        success: true,
        data: aiResponse
    });

}

export default {
    testMcpController
}