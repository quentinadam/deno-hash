import { blake2b as hash } from '@noble/hashes/blake2.js';
import concat from './concat.ts';
import type Buffers from './Buffers.ts';
import expectUint8Array from './expectUint8Array.ts';

export default function blake2b160(...buffers: Buffers): Uint8Array<ArrayBuffer> {
  return expectUint8Array(hash(concat(buffers), { dkLen: 20 }));
}
