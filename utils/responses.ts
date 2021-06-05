import { StringReader } from "https://deno.land/std@0.51.0/io/readers.ts";
import { Response } from "https://deno.land/std@0.97.0/http/server.ts";

const notFound = (): Response => ({
  status: 404,
  statusText: "NOT FOUND",
});

const badRequest = (message: string): Response => ({
  status: 400,
  statusText: "BAD REQUEST",
  body: new StringReader(message),
});

const ok = (message: string): Response => ({
  body: new StringReader(message),
});

export const Responses = { notFound, badRequest, ok };
