import { sha384 as hash } from '@noble/hashes/sha2.js';
import generateHmac from './generateHmac.ts';
import type Buffer from './Buffer.ts';

export default function hmacSha384(secret: Buffer, ...buffers: (Buffer | undefined)[]): Uint8Array<ArrayBuffer> {
  return generateHmac(hash as (buffer: Uint8Array<ArrayBuffer>) => Uint8Array<ArrayBuffer>, 128)(secret, ...buffers);
}
