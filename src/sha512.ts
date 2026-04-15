import { sha512 as hash } from '@noble/hashes/sha2.js';
import { concat } from './concat.ts';
import type { Buffers } from './Buffers.ts';

export function sha512(...buffers: Buffers): Uint8Array<ArrayBuffer> {
  return hash(concat(buffers));
}
