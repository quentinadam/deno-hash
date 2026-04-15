import { keccak_256 as hash } from '@noble/hashes/sha3.js';
import { concat } from './concat.ts';
import type { Buffers } from './Buffers.ts';

export function keccak256(...buffers: Buffers): Uint8Array<ArrayBuffer> {
  return hash(concat(buffers));
}
