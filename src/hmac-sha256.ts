import { sha256 } from './sha256.ts';
import { generateHmac } from './generateHmac.ts';
import type { Buffer } from './Buffer.ts';
import type { Buffers } from './Buffers.ts';

export function hmacSha256(secret: Buffer, ...buffers: Buffers): Uint8Array<ArrayBuffer> {
  return generateHmac(sha256, 64)(secret, ...buffers);
}
