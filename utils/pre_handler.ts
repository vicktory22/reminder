import { Responses } from "./responses.ts";
import { ServerRequest } from "https://deno.land/std@0.97.0/http/server.ts";
import { ServerResponse } from "../types.ts";
import { isPingRequest } from "./is_ping_request.ts";
import { parseBody } from "./parse_body.ts";
import { parseRequest } from "./parse_request.ts";
import { validateRequest } from "./validate_request.ts";

export async function preHandler(
  req: ServerRequest,
): Promise<ServerResponse | undefined> {
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
      timestamp as string,
      rawBody as string,
    )
  ) {
    return Responses.badRequest("Incorrect encoding");
  }

  const body = parseBody(rawBody as string);

  if (isPingRequest(body)) {
    return Responses.pong();
  }

  return;
}
