import { ServerResponse } from "../types.ts";

const notFound = (): ServerResponse => ({
  status: 404,
  statusText: "NOT FOUND",
});

const badRequest = (message: string): ServerResponse => ({
  status: 400,
  statusText: "BAD REQUEST",
  body: message,
});

const ok = (message: string): ServerResponse => ({
  body: message,
});

export const Responses = { notFound, badRequest, ok };
