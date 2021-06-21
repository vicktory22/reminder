import nacl from "https://cdn.skypack.dev/tweetnacl@v1.0.3?dts";
import { Injectable } from "https://deno.land/x/alosaur@v0.31.0/mod.ts";
import { Config } from "../config/config.ts";

@Injectable()
export class Cryptor {
  private nacl: nacl;

  constructor(
    private config: Config,
    private textEncoder: TextEncoder,
    private uInt8Array: Uint8ArrayConstructor,
  ) {
    this.nacl = nacl;
  }

  verify(signature: string, timestamp: string, body: string): boolean {
    return this.nacl.sign.detached.verify(
      this.textEncoder.encode(timestamp + body),
      this.hexToUnit8Array(signature),
      this.hexToUnit8Array(this.config.values().publicKey as string),
    );
  }

  hexToUnit8Array(hex: string): Uint8Array {
    return this.uInt8Array.from(
      hex.match(/.{1,2}/g)!.map((val) => parseInt(val, 16)),
    );
  }
}
