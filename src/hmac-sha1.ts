import { sha1 } from './sha1.ts';
import { generateHmac } from './generateHmac.ts';
import type { Buffer } from './Buffer.ts';
import type { Buffers } from './Buffers.ts';

export function hmacSha1(secret: Buffer, ...buffers: Buffers): Uint8Array<ArrayBuffer> {
  return generateHmac(sha1, 64)(secret, ...buffers);
}
