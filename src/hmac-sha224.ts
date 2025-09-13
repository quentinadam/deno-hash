import hash from './sha256.ts';
import generateHmac from './generateHmac.ts';
import type Buffer from './Buffer.ts';
import type OptionalBuffer from './OptionalBuffer.ts';

export default function hmacSha224(secret: Buffer, ...buffers: OptionalBuffer[]): Uint8Array<ArrayBuffer> {
  return generateHmac(hash, 64)(secret, ...buffers);
}
