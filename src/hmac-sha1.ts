import hash from './sha1.ts';
import generateHmac from './generateHmac.ts';
import type Buffer from './Buffer.ts';
import type Buffers from './Buffers.ts';

export default function hmacSha1(secret: Buffer, ...buffers: Buffers): Uint8Array<ArrayBuffer> {
  return generateHmac(hash, 64)(secret, ...buffers);
}
