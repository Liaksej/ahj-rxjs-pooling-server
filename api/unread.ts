import type { VercelRequest, VercelResponse } from "@vercel/node";
import { generateData } from "./_fakerFabric";

export default function (request: VercelRequest, response: VercelResponse) {
  response.status(200).json(generateData());
}
