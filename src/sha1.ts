import { sha1 as hash } from '@noble/hashes/legacy.js';
import { concat } from './concat.ts';
import type { Buffers } from './Buffers.ts';

export function sha1(...buffers: Buffers): Uint8Array<ArrayBuffer> {
  return hash(concat(buffers));
}
