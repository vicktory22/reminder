import { ParsedBody } from "../types.ts";

export function isPingRequest(body: ParsedBody): boolean {
  return body.type === 1;
}
