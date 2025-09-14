import hash from './sha384.ts';
import generateHmac from './generateHmac.ts';
import type Buffer from './Buffer.ts';
import type Buffers from './Buffers.ts';

export default function hmacSha384(secret: Buffer, ...buffers: Buffers): Uint8Array<ArrayBuffer> {
  return generateHmac(hash, 128)(secret, ...buffers);
}
