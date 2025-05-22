import { md5 as hash } from '@noble/hashes/legacy';
import concat from './concat.ts';
import type Buffer from './Buffer.ts';

export default function md5(...buffers: (Buffer | undefined)[]): Uint8Array {
  return hash(concat(buffers));
}
