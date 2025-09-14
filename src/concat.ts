import * as Uint8ArrayExtension from '@quentinadam/uint8array-extension';
import type Buffers from './Buffers.ts';

export default function concat(buffers: Buffers): Uint8Array<ArrayBuffer> {
  return Uint8ArrayExtension.concat(
    buffers.filter((buffer) => buffer !== undefined).map((buffer) => {
      return typeof buffer === 'string' ? new TextEncoder().encode(buffer) : buffer;
    }),
  );
}
