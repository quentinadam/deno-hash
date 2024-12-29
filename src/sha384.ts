import { sha384 as hash } from '@noble/hashes/sha512';
import concat from './concat.ts';
import type Buffer from './Buffer.ts';

export default function sha384(...buffers: (Buffer | undefined)[]): Uint8Array {
  return hash(concat(buffers));
}
