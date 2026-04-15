import { blake2b as hash } from '@noble/hashes/blake2.js';
import { concat } from './concat.ts';
import type { Buffers } from './Buffers.ts';
import { ensureUint8Array } from './ensureUint8Array.ts';

export function blake2b224(...buffers: Buffers): Uint8Array<ArrayBuffer> {
  return ensureUint8Array(hash(concat(buffers), { dkLen: 28 }));
}
