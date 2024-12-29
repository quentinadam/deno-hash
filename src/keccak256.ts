import { keccak_256 as hash } from '@noble/hashes/sha3';
import concat from './concat.ts';
import type Buffer from './Buffer.ts';

export default function keccak256(...buffers: (Buffer | undefined)[]): Uint8Array {
  return hash(concat(buffers));
}
