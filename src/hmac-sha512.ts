import { sha512 } from './sha512.ts';
import { generateHmac } from './generateHmac.ts';
import type { Buffer } from './Buffer.ts';
import type { Buffers } from './Buffers.ts';

export function hmacSha512(secret: Buffer, ...buffers: Buffers): Uint8Array<ArrayBuffer> {
  return generateHmac(sha512, 128)(secret, ...buffers);
}
