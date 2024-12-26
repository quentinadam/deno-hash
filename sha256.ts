import { sha256 as hash } from '@noble/hashes/sha256';
import concat from './concat.ts';
import type Buffer from './Buffer.ts';

export default function sha256(...buffers: (Buffer | undefined)[]): Uint8Array {
  return hash(concat(buffers));
}
