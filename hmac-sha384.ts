import { sha384 as hash } from '@noble/hashes/sha512';
import generateHmac from './generateHmac.ts';
import type Buffer from './Buffer.ts';

export default function hmacSha384(secret: Buffer, ...buffers: (Buffer | undefined)[]): Uint8Array {
  return generateHmac(hash, 128)(secret, ...buffers);
}
