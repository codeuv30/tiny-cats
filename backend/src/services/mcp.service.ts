import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import { fileURLToPath } from 'url';
import path, { dirname, join } from 'path';

let client: Client;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const getMcpClient = async () => {

    const transport = new StdioClientTransport({
        command: "npx",
        args: ["tsx", path.resolve(__dirname, "../../../mcp_server/src/index.ts")]
    });

    client = new Client({
        name: "tiny-cats-client",
        version: "1.0.0"
    });

    await client.connect(transport);

    return client;

}

