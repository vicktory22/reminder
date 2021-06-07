import { Responses } from "./responses.ts";
import { ServerRequest } from "https://deno.land/std@0.97.0/http/server.ts";
import { ServerResponse } from "../types.ts";
import { preHandler } from "./pre_handler.ts";

export async function handleRequest(
  req: ServerRequest,
): Promise<ServerResponse> {
  const payload = await preHandler(req);
  
  if (payload) {
    return payload;
  }

  return Responses.ok("Got it.");
}
