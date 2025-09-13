import { sha384 as hash } from '@noble/hashes/sha2.js';
import concat from './concat.ts';
import type OptionalBuffer from './OptionalBuffer.ts';
import expectUint8Array from './expectUint8Array.ts';

export default function sha384(...buffers: OptionalBuffer[]): Uint8Array<ArrayBuffer> {
  return expectUint8Array(hash(concat(buffers)));
}
