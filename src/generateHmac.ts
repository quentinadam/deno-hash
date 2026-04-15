import ensure from '@quentinadam/ensure';
import { padEnd } from '@quentinadam/uint8array-extension';
import { concat } from './concat.ts';
import type { Buffer } from './Buffer.ts';
import type { Buffers } from './Buffers.ts';
import { normalizeBuffer } from './normalizeBuffer.ts';

export function generateHmac(
  hash: (buffer: Uint8Array) => Uint8Array<ArrayBuffer>,
  blockSize: number,
) {
  return (secret: Buffer, ...buffers: Buffers) => {
    secret = normalizeBuffer(secret);
    if (secret.length > blockSize) {
      secret = hash(secret);
    }
    secret = padEnd(secret, blockSize);
    const innerKey = new Uint8Array(blockSize);
    const outerKey = new Uint8Array(blockSize);
    for (let i = 0; i < blockSize; i++) {
      innerKey[i] = 0x36 ^ ensure(secret[i]);
      outerKey[i] = 0x5c ^ ensure(secret[i]);
    }
    return hash(concat([outerKey, hash(concat([innerKey, concat(buffers)]))]));
  };
}
