import { keccak_256 as hash } from '@noble/hashes/sha3.js';
import concat from './concat.ts';
import type Buffer from './Buffer.ts';

export default function keccak256(...buffers: (Buffer | undefined)[]): Uint8Array<ArrayBuffer> {
  return hash(concat(buffers)) as Uint8Array<ArrayBuffer>;
}
