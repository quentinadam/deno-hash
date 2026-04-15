import { md5 as hash } from '@noble/hashes/legacy.js';
import { concat } from './concat.ts';
import type { Buffers } from './Buffers.ts';

export function md5(...buffers: Buffers): Uint8Array<ArrayBuffer> {
  return hash(concat(buffers));
}
