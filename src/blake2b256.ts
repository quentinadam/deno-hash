import { blake2b as hash } from '@noble/hashes/blake2.js';
import concat from './concat.ts';
import type OptionalBuffer from './OptionalBuffer.ts';
import expectUint8Array from './expectUint8Array.ts';

export default function blake2b256(...buffers: OptionalBuffer[]): Uint8Array<ArrayBuffer> {
  return expectUint8Array(hash(concat(buffers), { dkLen: 32 }));
}
