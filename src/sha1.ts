import { sha1 as hash } from '@noble/hashes/legacy.js';
import concat from './concat.ts';
import type Buffer from './Buffer.ts';

export default function sha1(...buffers: (Buffer | undefined)[]): Uint8Array<ArrayBuffer> {
  return hash(concat(buffers)) as Uint8Array<ArrayBuffer>;
}
