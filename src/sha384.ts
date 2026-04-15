import { sha384 as hash } from '@noble/hashes/sha2.js';
import { concat } from './concat.ts';
import type { Buffers } from './Buffers.ts';

export function sha384(...buffers: Buffers): Uint8Array<ArrayBuffer> {
  return hash(concat(buffers));
}
