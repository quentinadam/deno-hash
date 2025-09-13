import ensure from '@quentinadam/ensure';
import Uint8ArrayExtension from '@quentinadam/uint8array-extension';
import concat from './concat.ts';
import type Buffer from './Buffer.ts';
import type OptionalBuffer from './OptionalBuffer.ts';

export default function generateHmac(
  hash: (buffer: Uint8Array<ArrayBuffer>) => Uint8Array<ArrayBuffer>,
  blockSize: number,
) {
  return (secret: Buffer, ...buffers: OptionalBuffer[]) => {
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
    return hash(concat([outerKey, hash(concat([innerKey, concat(buffers)]))]));
  };
}
