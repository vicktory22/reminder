import { config } from "../config/config.ts";
import nacl from "https://cdn.skypack.dev/tweetnacl@v1.0.3?dts";

export function validateRequest(
  signature: string,
  timestamp: string,
  body: string,
): boolean {
  return nacl.sign.detached.verify(
    new TextEncoder().encode(timestamp + body),
    hexToUint8Array(signature as string),
    hexToUint8Array(config.publicKey as string),
  );
}

function hexToUint8Array(hex: string) {
  return new Uint8Array(hex.match(/.{1,2}/g)!.map((val) => parseInt(val, 16)));
}
