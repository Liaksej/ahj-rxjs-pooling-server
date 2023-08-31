import { v4 as uuidv4 } from "uuid";
import { faker } from "@faker-js/faker";

export function generateMessage() {
  return {
    id: uuidv4(),
    from: faker.internet.email(),
    subject: `Hello from ${faker.person.firstName()} ${faker.person.lastName()}!`,
    body: `Long message body here`,
    received: faker.date.past().getTime(),
  };
}

export function generateData() {
  const messages = Array.from({ length: 10 }, generateMessage);
  return {
    status: "ok",
    timestamp: Date.now(),
    messages: messages,
  };
}

// console.log(JSON.stringify(generateData(), null, 2));
