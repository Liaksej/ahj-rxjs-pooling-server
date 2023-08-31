import type { VercelRequest, VercelResponse } from "@vercel/node";

import { v4 as uuidv4 } from "uuid";
import { faker } from "@faker-js/faker";

export default function (request: VercelRequest, response: VercelResponse) {
  response.status(200).json(generateData());
}

function generateMessage() {
  return {
    id: uuidv4(),
    from: faker.internet.email(),
    subject: `Hello from ${faker.person.firstName()} ${faker.person.lastName()}!`,
    body: `Long message body here`,
    received: faker.date.past().getTime(),
  };
}

function generateData() {
  const messages = Array.from({ length: 10 }, generateMessage);
  return {
    status: "ok",
    timestamp: Date.now(),
    messages: messages,
  };
}
