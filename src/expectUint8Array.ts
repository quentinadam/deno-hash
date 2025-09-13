import assert from '@quentinadam/assert';

function isUint8Array(value: unknown): value is Uint8Array<ArrayBuffer> {
  return (value instanceof Uint8Array && value.buffer instanceof ArrayBuffer);
}

export default function expectUint8Array(value: unknown): Uint8Array<ArrayBuffer> {
  assert(isUint8Array(value));
  return value;
}
