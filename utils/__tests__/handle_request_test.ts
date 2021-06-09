import { assertEquals } from "https://deno.land/std@0.97.0/testing/asserts.ts";
import { generateMockServerRequest } from "./setup.ts";
import { green } from "https://deno.land/std@0.97.0/fmt/colors.ts";
import { handleRequest } from "../handle_request.ts";

console.log(green("\nHandleRequest:"));
Deno.test(green("-> returns 404 for non POST request"), async () => {
  const mockServerRequest = generateMockServerRequest({
    method: "GET",
  });

  const result = await handleRequest(mockServerRequest);

  assertEquals(result.status, 404);
});
