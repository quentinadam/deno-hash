import type { Buffer } from './Buffer.ts';

export function normalizeBuffer(buffer: Buffer): Uint8Array {
  return (typeof buffer === 'string') ? new TextEncoder().encode(buffer) : buffer;
}
