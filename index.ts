import { serve } from "https://deno.land/std@0.97.0/http/server.ts";
import { handleRequest } from "./utils/utils.ts";

const server = serve({ port: 8000 });

for await (const req of server) {
  req.respond(handleRequest(req));
}
