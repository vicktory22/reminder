import { Responses } from "./responses.ts";
import { ServerRequest } from "https://deno.land/std@0.97.0/http/server.ts";
import { ServerResponse } from "../types.ts";
import { isPingRequest } from "./is-ping-request.ts";
import { parseBody } from "./parse-body.ts";
import { parseRequest } from "./parse-request.ts";
import { validateRequest } from "./validate-request.ts";

export async function handleRequest(
  req: ServerRequest,
): Promise<ServerResponse> {
  if (req.method !== "POST") {
    return Responses.notFound();
  }

  const { signature, timestamp, rawBody, error: parseError } =
    await parseRequest(
      req,
    );

  if (parseError) {
    return Responses.badRequest(parseError.message);
  }

  if (
    !validateRequest(
      signature as string,
      timestamp as number,
      rawBody as string,
    )
  ) {
    return Responses.badRequest("Incorrect encoding");
  }

  const body = await parseBody(rawBody as string);

  if (isPingRequest(body)) {
    return Responses.pong();
  }

  return Responses.ok("Got it.");
}
