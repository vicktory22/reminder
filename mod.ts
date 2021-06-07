import { handleRequest } from "./utils/handle_request.ts";
import { serve } from "https://deno.land/std@0.97.0/http/server.ts";

const server = serve({ port: 8000 });

for await (const req of server) {
  req.respond(await handleRequest(req));
}
