import { sha1 as hash } from '@noble/hashes/sha1';
import concat from './concat.ts';
import type Buffer from './Buffer.ts';

export default function sha1(...buffers: (Buffer | undefined)[]): Uint8Array {
  return hash(concat(buffers));
}
