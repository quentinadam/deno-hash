import { sha224 as hash } from '@noble/hashes/sha2';
import generateHmac from './generateHmac.ts';
import type Buffer from './Buffer.ts';

export default function hmacSha224(secret: Buffer, ...buffers: (Buffer | undefined)[]): Uint8Array {
  return generateHmac(hash, 64)(secret, ...buffers);
}
