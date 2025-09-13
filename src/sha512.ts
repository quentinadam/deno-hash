import { sha512 as hash } from '@noble/hashes/sha2.js';
import concat from './concat.ts';
import type Buffer from './Buffer.ts';

export default function sha512(...buffers: (Buffer | undefined)[]): Uint8Array<ArrayBuffer> {
  return hash(concat(buffers)) as Uint8Array<ArrayBuffer>;
}
