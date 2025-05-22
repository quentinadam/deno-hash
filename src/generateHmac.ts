import ensure from '@quentinadam/require';
import Uint8ArrayExtension from '@quentinadam/uint8array-extension';
import concat from './concat.ts';
import type Buffer from './Buffer.ts';

export default function generateHmac(hash: (buffer: Uint8Array) => Uint8Array, blockSize: number) {
  return (secret: string | Uint8Array, ...buffers: (Buffer | undefined)[]) => {
    if (typeof secret === 'string') {
      secret = new TextEncoder().encode(secret);
    }
    if (secret.length > blockSize) {
      secret = hash(secret);
    }
    secret = new Uint8ArrayExtension(secret).padEnd(blockSize);
    const innerKey = new Uint8Array(blockSize);
    const outerKey = new Uint8Array(blockSize);
    for (let i = 0; i < blockSize; i++) {
      innerKey[i] = 0x36 ^ ensure(secret[i]);
      outerKey[i] = 0x5c ^ ensure(secret[i]);
    }
    return hash(Uint8ArrayExtension.concat([outerKey, hash(Uint8ArrayExtension.concat([innerKey, concat(buffers)]))]));
  };
}
