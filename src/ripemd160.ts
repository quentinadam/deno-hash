import { ripemd160 as hash } from '@noble/hashes/legacy.js';
import concat from './concat.ts';
import type Buffer from './Buffer.ts';

export default function ripemd160(...buffers: (Buffer | undefined)[]): Uint8Array<ArrayBuffer> {
  return hash(concat(buffers)) as Uint8Array<ArrayBuffer>;
}
