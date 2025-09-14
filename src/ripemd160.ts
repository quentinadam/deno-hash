import { ripemd160 as hash } from '@noble/hashes/legacy.js';
import concat from './concat.ts';
import type Buffers from './Buffers.ts';
import expectUint8Array from './expectUint8Array.ts';

export default function ripemd160(...buffers: Buffers): Uint8Array<ArrayBuffer> {
  return expectUint8Array(hash(concat(buffers)));
}
