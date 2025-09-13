import { blake2b as hash } from '@noble/hashes/blake2.js';
import concat from './concat.ts';
import type Buffer from './Buffer.ts';

export default function blake2b256(...buffers: (Buffer | undefined)[]): Uint8Array<ArrayBuffer> {
  return hash(concat(buffers), { dkLen: 32 }) as Uint8Array<ArrayBuffer>;
}
