import { MockServerRequestOptions } from "../../types.ts";
import { ServerRequest } from "https://deno.land/std@0.97.0/http/server.ts";

export function generateMockServerRequest(
  options: MockServerRequestOptions,
): ServerRequest {
  const request = new ServerRequest();

  if (options.method) request.method = options.method;

  if (options.headers) request.headers = new Headers(options.headers);

  return request;
}
