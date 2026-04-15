import { sha224 as hash } from '@noble/hashes/sha2.js';
import { concat } from './concat.ts';
import type { Buffers } from './Buffers.ts';
import { ensureUint8Array } from './ensureUint8Array.ts';

export function sha224(...buffers: Buffers): Uint8Array<ArrayBuffer> {
  return ensureUint8Array(hash(concat(buffers)));
}
