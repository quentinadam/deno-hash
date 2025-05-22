import { sha1 as hash } from '@noble/hashes/legacy';
import generateHmac from './generateHmac.ts';
import type Buffer from './Buffer.ts';

export default function hmacSha1(secret: Buffer, ...buffers: (Buffer | undefined)[]): Uint8Array {
  return generateHmac(hash, 64)(secret, ...buffers);
}
