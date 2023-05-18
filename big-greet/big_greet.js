import { getEnvironment as lowering9Callee, getEnvironment as lowering20Callee } from '@bytecodealliance/preview2-shim/environment';
import { exit as lowering3Callee, exit as lowering14Callee } from '@bytecodealliance/preview2-shim/exit';
import { getStdio as lowering6Callee, getDirectories as lowering7Callee, getStdio as lowering17Callee, getDirectories as lowering18Callee } from '@bytecodealliance/preview2-shim/preopens';
import { dropInputStream as lowering4Callee, dropOutputStream as lowering5Callee, write as lowering10Callee, dropInputStream as lowering15Callee, dropOutputStream as lowering16Callee, write as lowering21Callee } from '@bytecodealliance/preview2-shim/streams';
import { writeViaStream as lowering0Callee, appendViaStream as lowering1Callee, dropDescriptor as lowering2Callee, getType as lowering8Callee, writeViaStream as lowering11Callee, appendViaStream as lowering12Callee, dropDescriptor as lowering13Callee, getType as lowering19Callee } from '@bytecodealliance/preview2-shim/filesystem';

const base64Compile = str => WebAssembly.compile(typeof Buffer !== 'undefined' ? Buffer.from(str, 'base64') : Uint8Array.from(atob(str), b => b.charCodeAt(0)));

let dv = new DataView(new ArrayBuffer());
const dataView = mem => dv.buffer === mem.buffer ? dv : dv = new DataView(mem.buffer);

const isNode = typeof process !== 'undefined' && process.versions && process.versions.node;
let _fs;
async function fetchCompile (url) {
  if (isNode) {
    _fs = _fs || await import('fs/promises');
    return WebAssembly.compile(await _fs.readFile(url));
  }
  return fetch(url).then(WebAssembly.compileStreaming);
}

function getErrorPayload(e) {
  if (hasOwnProperty.call(e, 'payload')) return e.payload;
  if (hasOwnProperty.call(e, 'message')) return String(e.message);
  return String(e);
}

const hasOwnProperty = Object.prototype.hasOwnProperty;

const instantiateCore = WebAssembly.instantiate;

const toUint64 = val => BigInt.asUintN(64, val);

function toString(val) {
  if (typeof val === 'symbol') throw new TypeError('symbols cannot be converted to strings');
  return String(val);
}

function toUint32(val) {
  return val >>> 0;
}

const utf8Decoder = new TextDecoder();

const utf8Encoder = new TextEncoder();

let utf8EncodedLen = 0;
function utf8Encode(s, realloc, memory) {
  if (typeof s !== 'string') throw new TypeError('expected a string');
  if (s.length === 0) {
    utf8EncodedLen = 0;
    return 1;
  }
  let allocLen = 0;
  let ptr = 0;
  let writtenTotal = 0;
  while (s.length > 0) {
    ptr = realloc(ptr, allocLen, 1, allocLen + s.length);
    allocLen += s.length;
    const { read, written } = utf8Encoder.encodeInto(
    s,
    new Uint8Array(memory.buffer, ptr + writtenTotal, allocLen - writtenTotal),
    );
    writtenTotal += written;
    s = s.slice(read);
  }
  if (allocLen > writtenTotal)
  ptr = realloc(ptr, allocLen, 1, writtenTotal);
  utf8EncodedLen = writtenTotal;
  return ptr;
}

let exports0;
let exports1;

function lowering0(arg0, arg1) {
  const ret = lowering0Callee(arg0 >>> 0, BigInt.asUintN(64, arg1));
  return toUint32(ret);
}

function lowering1(arg0) {
  const ret = lowering1Callee(arg0 >>> 0);
  return toUint32(ret);
}

function lowering2(arg0) {
  lowering2Callee(arg0 >>> 0);
}

function lowering3(arg0) {
  let variant0;
  switch (arg0) {
    case 0: {
      variant0= {
        tag: 'ok',
        val: undefined
      };
      break;
    }
    case 1: {
      variant0= {
        tag: 'err',
        val: undefined
      };
      break;
    }
    default: {
      throw new TypeError('invalid variant discriminant for expected');
    }
  }
  lowering3Callee(variant0);
}

function lowering4(arg0) {
  lowering4Callee(arg0 >>> 0);
}

function lowering5(arg0) {
  lowering5Callee(arg0 >>> 0);
}
let exports2;
let memory0;

function lowering6(arg0) {
  const ret = lowering6Callee();
  const {stdin: v0_0, stdout: v0_1, stderr: v0_2 } = ret;
  dataView(memory0).setInt32(arg0 + 0, toUint32(v0_0), true);
  dataView(memory0).setInt32(arg0 + 4, toUint32(v0_1), true);
  dataView(memory0).setInt32(arg0 + 8, toUint32(v0_2), true);
}
let realloc0;

function lowering7(arg0) {
  const ret = lowering7Callee();
  const vec2 = ret;
  const len2 = vec2.length;
  const result2 = realloc0(0, 0, 4, len2 * 12);
  for (let i = 0; i < vec2.length; i++) {
    const e = vec2[i];
    const base = result2 + i * 12;const [tuple0_0, tuple0_1] = e;
    dataView(memory0).setInt32(base + 0, toUint32(tuple0_0), true);
    const ptr1 = utf8Encode(tuple0_1, realloc0, memory0);
    const len1 = utf8EncodedLen;
    dataView(memory0).setInt32(base + 8, len1, true);
    dataView(memory0).setInt32(base + 4, ptr1, true);
  }
  dataView(memory0).setInt32(arg0 + 4, len2, true);
  dataView(memory0).setInt32(arg0 + 0, result2, true);
}

function lowering8(arg0, arg1) {
  let ret;
  try {
    ret = { tag: 'ok', val: lowering8Callee(arg0 >>> 0) };
  } catch (e) {
    ret = { tag: 'err', val: getErrorPayload(e) };
  }
  const variant2 = ret;
  switch (variant2.tag) {
    case 'ok': {
      const e = variant2.val;
      dataView(memory0).setInt8(arg1 + 0, 0, true);
      const val0 = toString(e);
      let enum0;
      switch (val0) {
        case 'unknown': {
          enum0 = 0;
          break;
        }
        case 'block-device': {
          enum0 = 1;
          break;
        }
        case 'character-device': {
          enum0 = 2;
          break;
        }
        case 'directory': {
          enum0 = 3;
          break;
        }
        case 'fifo': {
          enum0 = 4;
          break;
        }
        case 'symbolic-link': {
          enum0 = 5;
          break;
        }
        case 'regular-file': {
          enum0 = 6;
          break;
        }
        case 'socket': {
          enum0 = 7;
          break;
        }
        default: {
          throw new TypeError(`"${val0}" is not one of the cases of descriptor-type`);
        }
      }
      dataView(memory0).setInt8(arg1 + 1, enum0, true);
      break;
    }
    case 'err': {
      const e = variant2.val;
      dataView(memory0).setInt8(arg1 + 0, 1, true);
      const val1 = toString(e);
      let enum1;
      switch (val1) {
        case 'access': {
          enum1 = 0;
          break;
        }
        case 'would-block': {
          enum1 = 1;
          break;
        }
        case 'already': {
          enum1 = 2;
          break;
        }
        case 'bad-descriptor': {
          enum1 = 3;
          break;
        }
        case 'busy': {
          enum1 = 4;
          break;
        }
        case 'deadlock': {
          enum1 = 5;
          break;
        }
        case 'quota': {
          enum1 = 6;
          break;
        }
        case 'exist': {
          enum1 = 7;
          break;
        }
        case 'file-too-large': {
          enum1 = 8;
          break;
        }
        case 'illegal-byte-sequence': {
          enum1 = 9;
          break;
        }
        case 'in-progress': {
          enum1 = 10;
          break;
        }
        case 'interrupted': {
          enum1 = 11;
          break;
        }
        case 'invalid': {
          enum1 = 12;
          break;
        }
        case 'io': {
          enum1 = 13;
          break;
        }
        case 'is-directory': {
          enum1 = 14;
          break;
        }
        case 'loop': {
          enum1 = 15;
          break;
        }
        case 'too-many-links': {
          enum1 = 16;
          break;
        }
        case 'message-size': {
          enum1 = 17;
          break;
        }
        case 'name-too-long': {
          enum1 = 18;
          break;
        }
        case 'no-device': {
          enum1 = 19;
          break;
        }
        case 'no-entry': {
          enum1 = 20;
          break;
        }
        case 'no-lock': {
          enum1 = 21;
          break;
        }
        case 'insufficient-memory': {
          enum1 = 22;
          break;
        }
        case 'insufficient-space': {
          enum1 = 23;
          break;
        }
        case 'not-directory': {
          enum1 = 24;
          break;
        }
        case 'not-empty': {
          enum1 = 25;
          break;
        }
        case 'not-recoverable': {
          enum1 = 26;
          break;
        }
        case 'unsupported': {
          enum1 = 27;
          break;
        }
        case 'no-tty': {
          enum1 = 28;
          break;
        }
        case 'no-such-device': {
          enum1 = 29;
          break;
        }
        case 'overflow': {
          enum1 = 30;
          break;
        }
        case 'not-permitted': {
          enum1 = 31;
          break;
        }
        case 'pipe': {
          enum1 = 32;
          break;
        }
        case 'read-only': {
          enum1 = 33;
          break;
        }
        case 'invalid-seek': {
          enum1 = 34;
          break;
        }
        case 'text-file-busy': {
          enum1 = 35;
          break;
        }
        case 'cross-device': {
          enum1 = 36;
          break;
        }
        default: {
          throw new TypeError(`"${val1}" is not one of the cases of error-code`);
        }
      }
      dataView(memory0).setInt8(arg1 + 1, enum1, true);
      break;
    }
    default: {
      throw new TypeError('invalid variant specified for result');
    }
  }
}

function lowering9(arg0) {
  const ret = lowering9Callee();
  const vec3 = ret;
  const len3 = vec3.length;
  const result3 = realloc0(0, 0, 4, len3 * 16);
  for (let i = 0; i < vec3.length; i++) {
    const e = vec3[i];
    const base = result3 + i * 16;const [tuple0_0, tuple0_1] = e;
    const ptr1 = utf8Encode(tuple0_0, realloc0, memory0);
    const len1 = utf8EncodedLen;
    dataView(memory0).setInt32(base + 4, len1, true);
    dataView(memory0).setInt32(base + 0, ptr1, true);
    const ptr2 = utf8Encode(tuple0_1, realloc0, memory0);
    const len2 = utf8EncodedLen;
    dataView(memory0).setInt32(base + 12, len2, true);
    dataView(memory0).setInt32(base + 8, ptr2, true);
  }
  dataView(memory0).setInt32(arg0 + 4, len3, true);
  dataView(memory0).setInt32(arg0 + 0, result3, true);
}

function lowering10(arg0, arg1, arg2, arg3) {
  const ptr0 = arg1;
  const len0 = arg2;
  const result0 = new Uint8Array(memory0.buffer.slice(ptr0, ptr0 + len0 * 1));
  let ret;
  try {
    ret = { tag: 'ok', val: lowering10Callee(arg0 >>> 0, result0) };
  } catch (e) {
    ret = { tag: 'err', val: getErrorPayload(e) };
  }
  const variant2 = ret;
  switch (variant2.tag) {
    case 'ok': {
      const e = variant2.val;
      dataView(memory0).setInt8(arg3 + 0, 0, true);
      dataView(memory0).setBigInt64(arg3 + 8, toUint64(e), true);
      break;
    }
    case 'err': {
      const e = variant2.val;
      dataView(memory0).setInt8(arg3 + 0, 1, true);
      const { } = e;
      break;
    }
    default: {
      throw new TypeError('invalid variant specified for result');
    }
  }
}
let exports3;
let exports4;
let exports5;

function lowering11(arg0, arg1) {
  const ret = lowering11Callee(arg0 >>> 0, BigInt.asUintN(64, arg1));
  return toUint32(ret);
}

function lowering12(arg0) {
  const ret = lowering12Callee(arg0 >>> 0);
  return toUint32(ret);
}

function lowering13(arg0) {
  lowering13Callee(arg0 >>> 0);
}

function lowering14(arg0) {
  let variant0;
  switch (arg0) {
    case 0: {
      variant0= {
        tag: 'ok',
        val: undefined
      };
      break;
    }
    case 1: {
      variant0= {
        tag: 'err',
        val: undefined
      };
      break;
    }
    default: {
      throw new TypeError('invalid variant discriminant for expected');
    }
  }
  lowering14Callee(variant0);
}

function lowering15(arg0) {
  lowering15Callee(arg0 >>> 0);
}

function lowering16(arg0) {
  lowering16Callee(arg0 >>> 0);
}
let exports6;
let memory1;
let exports7;

function lowering17(arg0) {
  const ret = lowering17Callee();
  const {stdin: v0_0, stdout: v0_1, stderr: v0_2 } = ret;
  dataView(memory1).setInt32(arg0 + 0, toUint32(v0_0), true);
  dataView(memory1).setInt32(arg0 + 4, toUint32(v0_1), true);
  dataView(memory1).setInt32(arg0 + 8, toUint32(v0_2), true);
}
let realloc1;

function lowering18(arg0) {
  const ret = lowering18Callee();
  const vec2 = ret;
  const len2 = vec2.length;
  const result2 = realloc1(0, 0, 4, len2 * 12);
  for (let i = 0; i < vec2.length; i++) {
    const e = vec2[i];
    const base = result2 + i * 12;const [tuple0_0, tuple0_1] = e;
    dataView(memory1).setInt32(base + 0, toUint32(tuple0_0), true);
    const ptr1 = utf8Encode(tuple0_1, realloc1, memory1);
    const len1 = utf8EncodedLen;
    dataView(memory1).setInt32(base + 8, len1, true);
    dataView(memory1).setInt32(base + 4, ptr1, true);
  }
  dataView(memory1).setInt32(arg0 + 4, len2, true);
  dataView(memory1).setInt32(arg0 + 0, result2, true);
}

function lowering19(arg0, arg1) {
  let ret;
  try {
    ret = { tag: 'ok', val: lowering19Callee(arg0 >>> 0) };
  } catch (e) {
    ret = { tag: 'err', val: getErrorPayload(e) };
  }
  const variant2 = ret;
  switch (variant2.tag) {
    case 'ok': {
      const e = variant2.val;
      dataView(memory1).setInt8(arg1 + 0, 0, true);
      const val0 = toString(e);
      let enum0;
      switch (val0) {
        case 'unknown': {
          enum0 = 0;
          break;
        }
        case 'block-device': {
          enum0 = 1;
          break;
        }
        case 'character-device': {
          enum0 = 2;
          break;
        }
        case 'directory': {
          enum0 = 3;
          break;
        }
        case 'fifo': {
          enum0 = 4;
          break;
        }
        case 'symbolic-link': {
          enum0 = 5;
          break;
        }
        case 'regular-file': {
          enum0 = 6;
          break;
        }
        case 'socket': {
          enum0 = 7;
          break;
        }
        default: {
          throw new TypeError(`"${val0}" is not one of the cases of descriptor-type`);
        }
      }
      dataView(memory1).setInt8(arg1 + 1, enum0, true);
      break;
    }
    case 'err': {
      const e = variant2.val;
      dataView(memory1).setInt8(arg1 + 0, 1, true);
      const val1 = toString(e);
      let enum1;
      switch (val1) {
        case 'access': {
          enum1 = 0;
          break;
        }
        case 'would-block': {
          enum1 = 1;
          break;
        }
        case 'already': {
          enum1 = 2;
          break;
        }
        case 'bad-descriptor': {
          enum1 = 3;
          break;
        }
        case 'busy': {
          enum1 = 4;
          break;
        }
        case 'deadlock': {
          enum1 = 5;
          break;
        }
        case 'quota': {
          enum1 = 6;
          break;
        }
        case 'exist': {
          enum1 = 7;
          break;
        }
        case 'file-too-large': {
          enum1 = 8;
          break;
        }
        case 'illegal-byte-sequence': {
          enum1 = 9;
          break;
        }
        case 'in-progress': {
          enum1 = 10;
          break;
        }
        case 'interrupted': {
          enum1 = 11;
          break;
        }
        case 'invalid': {
          enum1 = 12;
          break;
        }
        case 'io': {
          enum1 = 13;
          break;
        }
        case 'is-directory': {
          enum1 = 14;
          break;
        }
        case 'loop': {
          enum1 = 15;
          break;
        }
        case 'too-many-links': {
          enum1 = 16;
          break;
        }
        case 'message-size': {
          enum1 = 17;
          break;
        }
        case 'name-too-long': {
          enum1 = 18;
          break;
        }
        case 'no-device': {
          enum1 = 19;
          break;
        }
        case 'no-entry': {
          enum1 = 20;
          break;
        }
        case 'no-lock': {
          enum1 = 21;
          break;
        }
        case 'insufficient-memory': {
          enum1 = 22;
          break;
        }
        case 'insufficient-space': {
          enum1 = 23;
          break;
        }
        case 'not-directory': {
          enum1 = 24;
          break;
        }
        case 'not-empty': {
          enum1 = 25;
          break;
        }
        case 'not-recoverable': {
          enum1 = 26;
          break;
        }
        case 'unsupported': {
          enum1 = 27;
          break;
        }
        case 'no-tty': {
          enum1 = 28;
          break;
        }
        case 'no-such-device': {
          enum1 = 29;
          break;
        }
        case 'overflow': {
          enum1 = 30;
          break;
        }
        case 'not-permitted': {
          enum1 = 31;
          break;
        }
        case 'pipe': {
          enum1 = 32;
          break;
        }
        case 'read-only': {
          enum1 = 33;
          break;
        }
        case 'invalid-seek': {
          enum1 = 34;
          break;
        }
        case 'text-file-busy': {
          enum1 = 35;
          break;
        }
        case 'cross-device': {
          enum1 = 36;
          break;
        }
        default: {
          throw new TypeError(`"${val1}" is not one of the cases of error-code`);
        }
      }
      dataView(memory1).setInt8(arg1 + 1, enum1, true);
      break;
    }
    default: {
      throw new TypeError('invalid variant specified for result');
    }
  }
}

function lowering20(arg0) {
  const ret = lowering20Callee();
  const vec3 = ret;
  const len3 = vec3.length;
  const result3 = realloc1(0, 0, 4, len3 * 16);
  for (let i = 0; i < vec3.length; i++) {
    const e = vec3[i];
    const base = result3 + i * 16;const [tuple0_0, tuple0_1] = e;
    const ptr1 = utf8Encode(tuple0_0, realloc1, memory1);
    const len1 = utf8EncodedLen;
    dataView(memory1).setInt32(base + 4, len1, true);
    dataView(memory1).setInt32(base + 0, ptr1, true);
    const ptr2 = utf8Encode(tuple0_1, realloc1, memory1);
    const len2 = utf8EncodedLen;
    dataView(memory1).setInt32(base + 12, len2, true);
    dataView(memory1).setInt32(base + 8, ptr2, true);
  }
  dataView(memory1).setInt32(arg0 + 4, len3, true);
  dataView(memory1).setInt32(arg0 + 0, result3, true);
}

function lowering21(arg0, arg1, arg2, arg3) {
  const ptr0 = arg1;
  const len0 = arg2;
  const result0 = new Uint8Array(memory1.buffer.slice(ptr0, ptr0 + len0 * 1));
  let ret;
  try {
    ret = { tag: 'ok', val: lowering21Callee(arg0 >>> 0, result0) };
  } catch (e) {
    ret = { tag: 'err', val: getErrorPayload(e) };
  }
  const variant2 = ret;
  switch (variant2.tag) {
    case 'ok': {
      const e = variant2.val;
      dataView(memory1).setInt8(arg3 + 0, 0, true);
      dataView(memory1).setBigInt64(arg3 + 8, toUint64(e), true);
      break;
    }
    case 'err': {
      const e = variant2.val;
      dataView(memory1).setInt8(arg3 + 0, 1, true);
      const { } = e;
      break;
    }
    default: {
      throw new TypeError('invalid variant specified for result');
    }
  }
}
let exports8;
let realloc2;
let postReturn0;

function bigGreet(arg0) {
  const ptr0 = utf8Encode(arg0, realloc2, memory1);
  const len0 = utf8EncodedLen;
  const ret = exports5['big-greet'](ptr0, len0);
  const ptr1 = dataView(memory1).getInt32(ret + 0, true);
  const len1 = dataView(memory1).getInt32(ret + 4, true);
  const result1 = utf8Decoder.decode(new Uint8Array(memory1.buffer, ptr1, len1));
  postReturn0(ret);
  return result1;
}

export { bigGreet }

const $init = (async() => {
  const module0 = fetchCompile(new URL('./big_greet.core.wasm', import.meta.url));
  const module1 = fetchCompile(new URL('./big_greet.core2.wasm', import.meta.url));
  const module2 = base64Compile('AGFzbQEAAAABIwZgAX8AYAJ/fwBgBH9/f38AYAR/f39/AX9gAn9/AX9gAX8AAwoJAAABAAIDBAQFBAUBcAEJCQcwCgEwAAABMQABATIAAgEzAAMBNAAEATUABQE2AAYBNwAHATgACAgkaW1wb3J0cwEACm0JCQAgAEEAEQAACwkAIABBAREAAAsLACAAIAFBAhEBAAsJACAAQQMRAAALDwAgACABIAIgA0EEEQIACw8AIAAgASACIANBBREDAAsLACAAIAFBBhEEAAsLACAAIAFBBxEEAAsJACAAQQgRBQALAC0JcHJvZHVjZXJzAQxwcm9jZXNzZWQtYnkBDXdpdC1jb21wb25lbnQFMC44LjIA4wIEbmFtZQATEndpdC1jb21wb25lbnQ6c2hpbQHGAgkAG2luZGlyZWN0LXByZW9wZW5zLWdldC1zdGRpbwEhaW5kaXJlY3QtcHJlb3BlbnMtZ2V0LWRpcmVjdG9yaWVzAhxpbmRpcmVjdC1maWxlc3lzdGVtLWdldC10eXBlAyRpbmRpcmVjdC1lbnZpcm9ubWVudC1nZXQtZW52aXJvbm1lbnQEFmluZGlyZWN0LXN0cmVhbXMtd3JpdGUFJWFkYXB0LXdhc2lfc25hcHNob3RfcHJldmlldzEtZmRfd3JpdGUGKGFkYXB0LXdhc2lfc25hcHNob3RfcHJldmlldzEtZW52aXJvbl9nZXQHLmFkYXB0LXdhc2lfc25hcHNob3RfcHJldmlldzEtZW52aXJvbl9zaXplc19nZXQIJmFkYXB0LXdhc2lfc25hcHNob3RfcHJldmlldzEtcHJvY19leGl0');
  const module3 = base64Compile('AGFzbQEAAAABIwZgAX8AYAJ/fwBgBH9/f38AYAR/f39/AX9gAn9/AX9gAX8AAj0KAAEwAAAAATEAAAABMgABAAEzAAAAATQAAgABNQADAAE2AAQAATcABAABOAAFAAgkaW1wb3J0cwFwAQkJCQ8BAEEACwkAAQIDBAUGBwgALQlwcm9kdWNlcnMBDHByb2Nlc3NlZC1ieQENd2l0LWNvbXBvbmVudAUwLjguMgAcBG5hbWUAFRR3aXQtY29tcG9uZW50OmZpeHVwcw');
  const module4 = fetchCompile(new URL('./big_greet.core3.wasm', import.meta.url));
  const module5 = fetchCompile(new URL('./big_greet.core4.wasm', import.meta.url));
  const module6 = base64Compile('AGFzbQEAAAABKQdgA39/fwBgAX8AYAJ/fwBgBH9/f38AYAR/f39/AX9gAn9/AX9gAX8AAwsKAAEBAgEDBAUFBgQFAXABCgoHNAsBMAAAATEAAQEyAAIBMwADATQABAE1AAUBNgAGATcABwE4AAgBOQAJCCRpbXBvcnRzAQAKewoNACAAIAEgAkEAEQAACwkAIABBAREBAAsJACAAQQIRAQALCwAgACABQQMRAgALCQAgAEEEEQEACw8AIAAgASACIANBBREDAAsPACAAIAEgAiADQQYRBAALCwAgACABQQcRBQALCwAgACABQQgRBQALCQAgAEEJEQYACwAtCXByb2R1Y2VycwEMcHJvY2Vzc2VkLWJ5AQ13aXQtY29tcG9uZW50BTAuOC4yAP8CBG5hbWUAExJ3aXQtY29tcG9uZW50OnNoaW0B4gIKABppbmRpcmVjdC0kcm9vdC1oZWxsby13b3JsZAEbaW5kaXJlY3QtcHJlb3BlbnMtZ2V0LXN0ZGlvAiFpbmRpcmVjdC1wcmVvcGVucy1nZXQtZGlyZWN0b3JpZXMDHGluZGlyZWN0LWZpbGVzeXN0ZW0tZ2V0LXR5cGUEJGluZGlyZWN0LWVudmlyb25tZW50LWdldC1lbnZpcm9ubWVudAUWaW5kaXJlY3Qtc3RyZWFtcy13cml0ZQYlYWRhcHQtd2FzaV9zbmFwc2hvdF9wcmV2aWV3MS1mZF93cml0ZQcoYWRhcHQtd2FzaV9zbmFwc2hvdF9wcmV2aWV3MS1lbnZpcm9uX2dldAguYWRhcHQtd2FzaV9zbmFwc2hvdF9wcmV2aWV3MS1lbnZpcm9uX3NpemVzX2dldAkmYWRhcHQtd2FzaV9zbmFwc2hvdF9wcmV2aWV3MS1wcm9jX2V4aXQ');
  const module7 = base64Compile('AGFzbQEAAAABKQdgA39/fwBgAX8AYAJ/fwBgBH9/f38AYAR/f39/AX9gAn9/AX9gAX8AAkILAAEwAAAAATEAAQABMgABAAEzAAIAATQAAQABNQADAAE2AAQAATcABQABOAAFAAE5AAYACCRpbXBvcnRzAXABCgoJEAEAQQALCgABAgMEBQYHCAkALQlwcm9kdWNlcnMBDHByb2Nlc3NlZC1ieQENd2l0LWNvbXBvbmVudAUwLjguMgAcBG5hbWUAFRR3aXQtY29tcG9uZW50OmZpeHVwcw');
  const module8 = base64Compile('AGFzbQEAAAABGQRgBH9/f38Bf2ACf38Bf2ABfwBgA39/fwACzAEKBWZsYWdzCWluc3RhbmNlMQN/AQZtZW1vcnkAAgAAB3JlYWxsb2MAAAAFZmxhZ3MJaW5zdGFuY2UyA38BBm1lbW9yeQACAAAHcmVhbGxvYwAAAAZjYWxsZWUIYWRhcHRlcjAAAQtwb3N0X3JldHVybghhZGFwdGVyMAACCXRyYW5zY29kZRt1dGY4LXRvLXV0ZjggKG1lbTEgPT4gbWVtMCkAAwl0cmFuc2NvZGUbdXRmOC10by11dGY4IChtZW0wID0+IG1lbTEpAAMDAgEDBwwBCGFkYXB0ZXIwAAYKswIBsAIBBn8jAUEBcUUEQAALIwBBAnFFBEAACyMAQX1xJAAjAEF+cSQAIAAgASEDIQQgA0GAgICAeE8EQAALIAMiBSEGQQBBAEEBIAYQACEHAkACQD8BrUIQhiAErSADrXxaDQELAAsCQAJAPwCtQhCGIAetIAatfFoNAQsACyAEIAMgBxAEIAcgBSMAQQFyJAAQAiEFIwFBfnEkASAFQQNxBEAACyACQQNxBEAACyAFKAIAIAUoAgQhByEDIAdBgICAgHhPBEAACyAHIgQhBkEAQQBBASAGEAEhCAJAAkA/AK1CEIYgA60gB618Wg0BCwALAkACQD8BrUIQhiAIrSAGrXxaDQELAAsgAyAHIAgQBSACIAg2QgEAIAIgBDZCAQQjAUEBciQBIAUQAyMAQQJyJAAL');
  Promise.all([module0, module1, module2, module3, module4, module5, module6, module7, module8]).catch(() => {});
  ({ exports: exports0 } = await instantiateCore(await module2));
  ({ exports: exports1 } = await instantiateCore(await module0, {
    wasi_snapshot_preview1: {
      environ_get: exports0['6'],
      environ_sizes_get: exports0['7'],
      fd_write: exports0['5'],
      proc_exit: exports0['8'],
    },
  }));
  ({ exports: exports2 } = await instantiateCore(await module1, {
    __main_module__: {
      cabi_realloc: exports1.cabi_realloc,
    },
    env: {
      memory: exports1.memory,
    },
    environment: {
      'get-environment': exports0['3'],
    },
    exit: {
      exit: lowering3,
    },
    filesystem: {
      'append-via-stream': lowering1,
      'drop-descriptor': lowering2,
      'get-type': exports0['2'],
      'write-via-stream': lowering0,
    },
    preopens: {
      'get-directories': exports0['1'],
      'get-stdio': exports0['0'],
    },
    streams: {
      'drop-input-stream': lowering4,
      'drop-output-stream': lowering5,
      write: exports0['4'],
    },
  }));
  memory0 = exports1.memory;
  realloc0 = exports2.cabi_import_realloc;
  ({ exports: exports3 } = await instantiateCore(await module3, {
    '': {
      $imports: exports0.$imports,
      '0': lowering6,
      '1': lowering7,
      '2': lowering8,
      '3': lowering9,
      '4': lowering10,
      '5': exports2.fd_write,
      '6': exports2.environ_get,
      '7': exports2.environ_sizes_get,
      '8': exports2.proc_exit,
    },
  }));
  ({ exports: exports4 } = await instantiateCore(await module6));
  ({ exports: exports5 } = await instantiateCore(await module4, {
    $root: {
      'hello-world': exports4['0'],
    },
    wasi_snapshot_preview1: {
      environ_get: exports4['7'],
      environ_sizes_get: exports4['8'],
      fd_write: exports4['6'],
      proc_exit: exports4['9'],
    },
  }));
  ({ exports: exports6 } = await instantiateCore(await module5, {
    __main_module__: {
      cabi_realloc: exports5.cabi_realloc,
    },
    env: {
      memory: exports5.memory,
    },
    environment: {
      'get-environment': exports4['4'],
    },
    exit: {
      exit: lowering14,
    },
    filesystem: {
      'append-via-stream': lowering12,
      'drop-descriptor': lowering13,
      'get-type': exports4['3'],
      'write-via-stream': lowering11,
    },
    preopens: {
      'get-directories': exports4['2'],
      'get-stdio': exports4['1'],
    },
    streams: {
      'drop-input-stream': lowering15,
      'drop-output-stream': lowering16,
      write: exports4['5'],
    },
  }));
  memory1 = exports5.memory;
  ({ exports: exports7 } = await instantiateCore(await module8, {
    callee: {
      adapter0: exports1['hello-world'],
    },
    // flags: {
    //   instance1: ,
    //   instance2: ,
    // },
    memory: {
      '': exports5.memory,
    },
    post_return: {
      adapter0: exports1['cabi_post_hello-world'],
    },
    realloc: {
      '': exports5.cabi_realloc,
    },
    // transcode: {
    //   'utf8-to-utf8 (mem0 => mem1)': ,
    //   'utf8-to-utf8 (mem1 => mem0)': ,
    // },
  }));
  realloc1 = exports6.cabi_import_realloc;
  ({ exports: exports8 } = await instantiateCore(await module7, {
    '': {
      $imports: exports4.$imports,
      '0': exports7.adapter0,
      '1': lowering17,
      '2': lowering18,
      '3': lowering19,
      '4': lowering20,
      '5': lowering21,
      '6': exports6.fd_write,
      '7': exports6.environ_get,
      '8': exports6.environ_sizes_get,
      '9': exports6.proc_exit,
    },
  }));
  realloc2 = exports5.cabi_realloc;
  postReturn0 = exports5['cabi_post_big-greet'];
})();

await $init;
