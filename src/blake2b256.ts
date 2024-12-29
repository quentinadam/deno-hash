import { blake2b as hash } from '@noble/hashes/blake2b';
import concat from './concat.ts';
import type Buffer from './Buffer.ts';

export default function blake2b256(...buffers: (Buffer | undefined)[]): Uint8Array {
  return hash(concat(buffers), { dkLen: 32 });
}
