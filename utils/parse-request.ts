import { ParsedRequest } from "../types.ts";
import { ServerRequest } from "https://deno.land/std@0.97.0/http/server.ts";
import { ValidationError } from "./validation-error.ts";
import { readAll } from "https://deno.land/std@0.97.0/io/util.ts";

export async function parseRequest(
  req: ServerRequest,
): Promise<ParsedRequest> {
  const signature = req.headers.get("X-Signature-Ed25519");
  const timestamp = req.headers.get("X-Signature-Timestamp");

  if (typeof signature !== "string" || typeof timestamp !== "number") {
    return { error: ValidationError.noHeaders() };
  }

  const rawBody = new TextDecoder().decode(await readAll(req.body));

  return { signature, timestamp, rawBody };
}
