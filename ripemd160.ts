import { ripemd160 as hash } from '@noble/hashes/ripemd160';
import concat from './concat.ts';
import type Buffer from './Buffer.ts';

export default function ripemd160(...buffers: (Buffer | undefined)[]): Uint8Array {
  return hash(concat(buffers));
}
