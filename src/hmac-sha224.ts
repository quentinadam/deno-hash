import { sha224 } from './sha224.ts';
import { generateHmac } from './generateHmac.ts';
import type { Buffer } from './Buffer.ts';
import type { Buffers } from './Buffers.ts';

export function hmacSha224(secret: Buffer, ...buffers: Buffers): Uint8Array<ArrayBuffer> {
  return generateHmac(sha224, 64)(secret, ...buffers);
}
