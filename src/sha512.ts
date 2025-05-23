import { sha512 as hash } from '@noble/hashes/sha2';
import concat from './concat.ts';
import type Buffer from './Buffer.ts';

export default function sha512(...buffers: (Buffer | undefined)[]): Uint8Array {
  return hash(concat(buffers));
}
