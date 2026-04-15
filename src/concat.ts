import { concat as _concat } from '@quentinadam/uint8array-extension';
import type { Buffers } from './Buffers.ts';
import { normalizeBuffer } from './normalizeBuffer.ts';

export function concat(buffers: Buffers): Uint8Array<ArrayBuffer> {
  return _concat(buffers.filter((buffer) => buffer !== undefined).map((buffer) => normalizeBuffer(buffer)));
}
