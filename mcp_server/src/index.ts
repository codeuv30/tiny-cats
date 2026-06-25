import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { getAllCats, recommendCatsTool } from "./tools/recommendCats.tool.ts";

const NWS_API_BASE = "https://api.weather.gov";
const USER_AGENT = "weather-app/1.0";

// Create server instance
const server = new McpServer({
  name: "tiny-cats",
  version: "1.0.0",
});

server.registerTool(
  "recommend_cats",
  {
    title: "recommend_cats",
    description: "Recommend a best cat breed according to inputs.",
    inputSchema: {
      kidsFriendly: z.boolean(),
      appartmentFriendly: z.boolean(),
    },
  },
  async function ({ kidsFriendly, appartmentFriendly }) {
    const result = await recommendCatsTool(kidsFriendly, appartmentFriendly);

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(result),
        },
      ],
    };
  },
);

server.registerTool(
  "get_all_cats",
  {
    title: "get_all_cats",
    description: "Get all Cats Data",
  },
  async function () {
    const result = await getAllCats();

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(result),
        },
      ],
    };
  },
);

const transporter = new StdioServerTransport();

await server.connect(transporter);

console.error("Tiny cats MCP server running....");