import { ParsedBody } from "../types.ts";

export function parseBody(body: string): ParsedBody {
  return JSON.parse(body);
}
