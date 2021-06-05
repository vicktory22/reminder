import { registrationUrl } from "./utils.ts";
import { config } from "../config/config.ts";

const { applicationId, guildId, botToken } = config;

if ([applicationId, guildId, botToken].includes(undefined)) {
  throw new Error("Unable to find the application id, guild id or bot token.");
}

const url = registrationUrl(
  applicationId as string,
  guildId as string,
);

const registrationPayload = {
  name: "reminder",
  description: "Set a reminder to reminder you later.",
  options: [
    {
      name: "when",
      description: "The date and time to be reminded (MM/DD/YYYY: HH:MM)",
      type: 3,
      required: true,
    },
    {
      name: "message",
      description: "The message to be returned.",
      type: 3,
      required: true,
    },
  ],
};

const headers = {
  "Content-Type": "application/json",
  "Authorization": `Bot ${botToken}`,
};

const options = {
  method: "POST",
  headers,
  body: JSON.stringify(registrationPayload),
};

const response = await fetch(url, options);
const body = await response.json();

console.log(JSON.stringify(body));
