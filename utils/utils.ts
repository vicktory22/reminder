import {
  Response as ServerResponse,
  ServerRequest,
} from "https://deno.land/std@0.97.0/http/server.ts";
import { Responses } from "./responses.ts";
// import nacl from 'https://cdn.jsdelivr.net/npm/tweetnacl@1.0.3/nacl-fast.min.js';

export function handleRequest(req: ServerRequest): ServerResponse {
  if (req.method !== "POST") {
    return Responses.notFound();
  }

  const { error } = validateRequest(req.headers);

  if (error) {
    return Responses.badRequest(error);
  }

  return Responses.ok("Got it.");
}

const validateRequest = (headers: Headers): { error?: string } => {
  if (
    !headers.has("X-Signature-Ed25519") || !headers.has("X-Signature-Timestamp")
  ) {
    return { error: "Required headers not present." };
  }

  return {};
};

// TODO - Implement this
// const verifySignature = () => {}
