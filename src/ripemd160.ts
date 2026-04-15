import { ripemd160 as hash } from '@noble/hashes/legacy.js';
import { concat } from './concat.ts';
import type { Buffers } from './Buffers.ts';

export function ripemd160(...buffers: Buffers): Uint8Array<ArrayBuffer> {
  return hash(concat(buffers));
}
