import * as Uint8ArrayExtension from '@quentinadam/uint8array-extension';
import type Buffer from './Buffer.ts';

export default function concat(buffers: (Buffer | undefined)[]): Uint8Array {
  return Uint8ArrayExtension.concat(
    buffers.filter((buffer) => buffer !== undefined).map((buffer) => {
      return typeof buffer === 'string' ? new TextEncoder().encode(buffer) : buffer;
    }),
  );
}
