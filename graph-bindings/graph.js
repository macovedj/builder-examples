import { writeViaStream as lowering0Callee, appendViaStream as lowering1Callee, dropDescriptor as lowering2Callee, getType as lowering8Callee } from '@bytecodealliance/preview2-shim/filesystem';
import { getRandomBytes as lowering9Callee } from '@bytecodealliance/preview2-shim/random';
import { exit as lowering3Callee } from '@bytecodealliance/preview2-shim/exit';
import { dropInputStream as lowering4Callee, dropOutputStream as lowering5Callee, write as lowering11Callee } from '@bytecodealliance/preview2-shim/streams';
import { getEnvironment as lowering10Callee } from '@bytecodealliance/preview2-shim/environment';
import { getStdio as lowering6Callee, getDirectories as lowering7Callee } from '@bytecodealliance/preview2-shim/preopens';

const base64Compile = str => WebAssembly.compile(typeof Buffer !== 'undefined' ? Buffer.from(str, 'base64') : Uint8Array.from(atob(str), b => b.charCodeAt(0)));

class ComponentError extends Error {
  constructor (value) {
    const enumerable = typeof value !== 'string';
    super(enumerable ? `${String(value)} (see error.payload)` : value);
    Object.defineProperty(this, 'payload', { value, enumerable });
  }
}

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

function lowering9(arg0, arg1) {
  const ret = lowering9Callee(BigInt.asUintN(64, arg0));
  const val0 = ret;
  const len0 = val0.byteLength;
  const ptr0 = realloc0(0, 0, 1, len0 * 1);
  const src0 = new Uint8Array(val0.buffer || val0, val0.byteOffset, len0 * 1);
  (new Uint8Array(memory0.buffer, ptr0, len0 * 1)).set(src0);
  dataView(memory0).setInt32(arg1 + 4, len0, true);
  dataView(memory0).setInt32(arg1 + 0, ptr0, true);
}

function lowering10(arg0) {
  const ret = lowering10Callee();
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

function lowering11(arg0, arg1, arg2, arg3) {
  const ptr0 = arg1;
  const len0 = arg2;
  const result0 = new Uint8Array(memory0.buffer.slice(ptr0, ptr0 + len0 * 1));
  let ret;
  try {
    ret = { tag: 'ok', val: lowering11Callee(arg0 >>> 0, result0) };
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
let realloc1;
let postReturn0;
let postReturn1;
let postReturn2;
let postReturn3;
let postReturn4;
let postReturn5;
const graph = {
  addComponent(arg0, arg1) {
    const ptr0 = utf8Encode(arg0, realloc1, memory0);
    const len0 = utf8EncodedLen;
    const val1 = arg1;
    const len1 = val1.byteLength;
    const ptr1 = realloc1(0, 0, 1, len1 * 1);
    const src1 = new Uint8Array(val1.buffer || val1, val1.byteOffset, len1 * 1);
    (new Uint8Array(memory0.buffer, ptr1, len1 * 1)).set(src1);
    const ret = exports1['graph#add-component'](ptr0, len0, ptr1, len1);
    let variant11;
    switch (dataView(memory0).getUint8(ret + 0, true)) {
      case 0: {
        const ptr2 = dataView(memory0).getInt32(ret + 8, true);
        const len2 = dataView(memory0).getInt32(ret + 12, true);
        const result2 = utf8Decoder.decode(new Uint8Array(memory0.buffer, ptr2, len2));
        const len5 = dataView(memory0).getInt32(ret + 20, true);
        const base5 = dataView(memory0).getInt32(ret + 16, true);
        const result5 = [];
        for (let i = 0; i < len5; i++) {
          const base = base5 + i * 12;
          const ptr3 = dataView(memory0).getInt32(base + 0, true);
          const len3 = dataView(memory0).getInt32(base + 4, true);
          const result3 = utf8Decoder.decode(new Uint8Array(memory0.buffer, ptr3, len3));
          let enum4;
          switch (dataView(memory0).getUint8(base + 8, true)) {
            case 0: {
              enum4 = 'module';
              break;
            }
            case 1: {
              enum4 = 'function';
              break;
            }
            case 2: {
              enum4 = 'value';
              break;
            }
            case 3: {
              enum4 = 'type';
              break;
            }
            case 4: {
              enum4 = 'instance';
              break;
            }
            case 5: {
              enum4 = 'component';
              break;
            }
            default: {
              throw new TypeError('invalid discriminant specified for ItemKind');
            }
          }
          result5.push({
            name: result3,
            kind: enum4,
          });
        }
        const len8 = dataView(memory0).getInt32(ret + 28, true);
        const base8 = dataView(memory0).getInt32(ret + 24, true);
        const result8 = [];
        for (let i = 0; i < len8; i++) {
          const base = base8 + i * 12;
          const ptr6 = dataView(memory0).getInt32(base + 0, true);
          const len6 = dataView(memory0).getInt32(base + 4, true);
          const result6 = utf8Decoder.decode(new Uint8Array(memory0.buffer, ptr6, len6));
          let enum7;
          switch (dataView(memory0).getUint8(base + 8, true)) {
            case 0: {
              enum7 = 'module';
              break;
            }
            case 1: {
              enum7 = 'function';
              break;
            }
            case 2: {
              enum7 = 'value';
              break;
            }
            case 3: {
              enum7 = 'type';
              break;
            }
            case 4: {
              enum7 = 'instance';
              break;
            }
            case 5: {
              enum7 = 'component';
              break;
            }
            default: {
              throw new TypeError('invalid discriminant specified for ItemKind');
            }
          }
          result8.push({
            name: result6,
            kind: enum7,
          });
        }
        const ptr9 = dataView(memory0).getInt32(ret + 32, true);
        const len9 = dataView(memory0).getInt32(ret + 36, true);
        const result9 = utf8Decoder.decode(new Uint8Array(memory0.buffer, ptr9, len9));
        variant11= {
          tag: 'ok',
          val: {
            id: dataView(memory0).getInt32(ret + 4, true) >>> 0,
            name: result2,
            imports: result5,
            exports: result8,
            wit: result9,
          }
        };
        break;
      }
      case 1: {
        const ptr10 = dataView(memory0).getInt32(ret + 4, true);
        const len10 = dataView(memory0).getInt32(ret + 8, true);
        const result10 = utf8Decoder.decode(new Uint8Array(memory0.buffer, ptr10, len10));
        variant11= {
          tag: 'err',
          val: result10
        };
        break;
      }
      default: {
        throw new TypeError('invalid variant discriminant for expected');
      }
    }
    postReturn0(ret);
    if (variant11.tag === 'err') {
      throw new ComponentError(variant11.val);
    }
    return variant11.val;
  },
  instantiateComponent(arg0) {
    const ret = exports1['graph#instantiate-component'](toUint32(arg0));
    let variant1;
    switch (dataView(memory0).getUint8(ret + 0, true)) {
      case 0: {
        variant1= {
          tag: 'ok',
          val: dataView(memory0).getInt32(ret + 4, true) >>> 0
        };
        break;
      }
      case 1: {
        const ptr0 = dataView(memory0).getInt32(ret + 4, true);
        const len0 = dataView(memory0).getInt32(ret + 8, true);
        const result0 = utf8Decoder.decode(new Uint8Array(memory0.buffer, ptr0, len0));
        variant1= {
          tag: 'err',
          val: result0
        };
        break;
      }
      default: {
        throw new TypeError('invalid variant discriminant for expected');
      }
    }
    postReturn1(ret);
    if (variant1.tag === 'err') {
      throw new ComponentError(variant1.val);
    }
    return variant1.val;
  },
  connectInstances(arg0, arg1, arg2, arg3) {
    const variant0 = arg1;
    let variant0_0;
    let variant0_1;
    if (variant0 === null || variant0=== undefined) {
      variant0_0 = 0;
      variant0_1 = 0;
    } else {
      const e = variant0;
      variant0_0 = 1;
      variant0_1 = toUint32(e);
    }
    const ret = exports1['graph#connect-instances'](toUint32(arg0), variant0_0, variant0_1, toUint32(arg2), toUint32(arg3));
    console.log({ret})
    let variant2;
    switch (dataView(memory0).getUint8(ret + 0, true)) {
      case 0: {
        console.log("CASE 0")
        variant2= {
          tag: 'ok',
          val: undefined
        };
        break;
      }
      case 1: {
        console.log("CASE 1")
        const ptr1 = dataView(memory0).getInt32(ret + 4, true);
        const len1 = dataView(memory0).getInt32(ret + 8, true);
        const result1 = utf8Decoder.decode(new Uint8Array(memory0.buffer, ptr1, len1));
        variant2= {
          tag: 'err',
          val: result1
        };
        break;
      }
      default: {
        throw new TypeError('invalid variant discriminant for expected');
      }
    }
    postReturn2(ret);
    if (variant2.tag === 'err') {
      throw new ComponentError(variant2.val);
    }
    return variant2.val;
  },
  removeComponent(arg0) {
    exports1['graph#remove-component'](toUint32(arg0));
  },
  removeInstance(arg0) {
    exports1['graph#remove-instance'](toUint32(arg0));
  },
  disconnectInstances(arg0, arg1, arg2) {
    const ret = exports1['graph#disconnect-instances'](toUint32(arg0), toUint32(arg1), toUint32(arg2));
    let variant1;
    switch (dataView(memory0).getUint8(ret + 0, true)) {
      case 0: {
        variant1= {
          tag: 'ok',
          val: undefined
        };
        break;
      }
      case 1: {
        const ptr0 = dataView(memory0).getInt32(ret + 4, true);
        const len0 = dataView(memory0).getInt32(ret + 8, true);
        const result0 = utf8Decoder.decode(new Uint8Array(memory0.buffer, ptr0, len0));
        variant1= {
          tag: 'err',
          val: result0
        };
        break;
      }
      default: {
        throw new TypeError('invalid variant discriminant for expected');
      }
    }
    postReturn3(ret);
    if (variant1.tag === 'err') {
      throw new ComponentError(variant1.val);
    }
    return variant1.val;
  },
  printGraph() {
    const ret = exports1['graph#print-graph']();
    const ptr0 = dataView(memory0).getInt32(ret + 0, true);
    const len0 = dataView(memory0).getInt32(ret + 4, true);
    const result0 = utf8Decoder.decode(new Uint8Array(memory0.buffer, ptr0, len0));
    postReturn4(ret);
    return result0;
  },
  encodeGraph(arg0) {
    const {defineComponents: v0_0, export: v0_1, validate: v0_2 } = arg0;
    const variant1 = v0_1;
    let variant1_0;
    let variant1_1;
    if (variant1 === null || variant1=== undefined) {
      variant1_0 = 0;
      variant1_1 = 0;
    } else {
      const e = variant1;
      variant1_0 = 1;
      variant1_1 = toUint32(e);
    }
    const ret = exports1['graph#encode-graph'](v0_0 ? 1 : 0, variant1_0, variant1_1, v0_2 ? 1 : 0);
    let variant4;
    switch (dataView(memory0).getUint8(ret + 0, true)) {
      case 0: {
        const ptr2 = dataView(memory0).getInt32(ret + 4, true);
        const len2 = dataView(memory0).getInt32(ret + 8, true);
        const result2 = new Uint8Array(memory0.buffer.slice(ptr2, ptr2 + len2 * 1));
        variant4= {
          tag: 'ok',
          val: result2
        };
        break;
      }
      case 1: {
        const ptr3 = dataView(memory0).getInt32(ret + 4, true);
        const len3 = dataView(memory0).getInt32(ret + 8, true);
        const result3 = utf8Decoder.decode(new Uint8Array(memory0.buffer, ptr3, len3));
        variant4= {
          tag: 'err',
          val: result3
        };
        break;
      }
      default: {
        throw new TypeError('invalid variant discriminant for expected');
      }
    }
    postReturn5(ret);
    if (variant4.tag === 'err') {
      throw new ComponentError(variant4.val);
    }
    return variant4.val;
  },
  
};

export { graph }

const $init = (async() => {
  const module0 = fetchCompile(new URL('./graph.core.wasm', import.meta.url));
  const module1 = fetchCompile(new URL('./graph.core2.wasm', import.meta.url));
  const module2 = base64Compile('AGFzbQEAAAABKAdgAX8AYAJ/fwBgAn5/AGAEf39/fwBgBH9/f38Bf2ACf38Bf2ABfwADDAsAAAECAAMEBQUFBgQFAXABCwsHOQwBMAAAATEAAQEyAAIBMwADATQABAE1AAUBNgAGATcABwE4AAgBOQAJAjEwAAoIJGltcG9ydHMBAAqFAQsJACAAQQARAAALCQAgAEEBEQAACwsAIAAgAUECEQEACwsAIAAgAUEDEQIACwkAIABBBBEAAAsPACAAIAEgAiADQQURAwALDwAgACABIAIgA0EGEQQACwsAIAAgAUEHEQUACwsAIAAgAUEIEQUACwsAIAAgAUEJEQUACwkAIABBChEGAAsALQlwcm9kdWNlcnMBDHByb2Nlc3NlZC1ieQENd2l0LWNvbXBvbmVudAUwLjkuMACuAwRuYW1lABMSd2l0LWNvbXBvbmVudDpzaGltAZEDCwAbaW5kaXJlY3QtcHJlb3BlbnMtZ2V0LXN0ZGlvASFpbmRpcmVjdC1wcmVvcGVucy1nZXQtZGlyZWN0b3JpZXMCHGluZGlyZWN0LWZpbGVzeXN0ZW0tZ2V0LXR5cGUDIGluZGlyZWN0LXJhbmRvbS1nZXQtcmFuZG9tLWJ5dGVzBCRpbmRpcmVjdC1lbnZpcm9ubWVudC1nZXQtZW52aXJvbm1lbnQFFmluZGlyZWN0LXN0cmVhbXMtd3JpdGUGJWFkYXB0LXdhc2lfc25hcHNob3RfcHJldmlldzEtZmRfd3JpdGUHJ2FkYXB0LXdhc2lfc25hcHNob3RfcHJldmlldzEtcmFuZG9tX2dldAgoYWRhcHQtd2FzaV9zbmFwc2hvdF9wcmV2aWV3MS1lbnZpcm9uX2dldAkuYWRhcHQtd2FzaV9zbmFwc2hvdF9wcmV2aWV3MS1lbnZpcm9uX3NpemVzX2dldAomYWRhcHQtd2FzaV9zbmFwc2hvdF9wcmV2aWV3MS1wcm9jX2V4aXQ');
  const module3 = base64Compile('AGFzbQEAAAABKAdgAX8AYAJ/fwBgAn5/AGAEf39/fwBgBH9/f38Bf2ACf38Bf2ABfwACSAwAATAAAAABMQAAAAEyAAEAATMAAgABNAAAAAE1AAMAATYABAABNwAFAAE4AAUAATkABQACMTAABgAIJGltcG9ydHMBcAELCwkRAQBBAAsLAAECAwQFBgcICQoALQlwcm9kdWNlcnMBDHByb2Nlc3NlZC1ieQENd2l0LWNvbXBvbmVudAUwLjkuMAAcBG5hbWUAFRR3aXQtY29tcG9uZW50OmZpeHVwcw');
  Promise.all([module0, module1, module2, module3]).catch(() => {});
  ({ exports: exports0 } = await instantiateCore(await module2));
  ({ exports: exports1 } = await instantiateCore(await module0, {
    wasi_snapshot_preview1: {
      environ_get: exports0['8'],
      environ_sizes_get: exports0['9'],
      fd_write: exports0['6'],
      proc_exit: exports0['10'],
      random_get: exports0['7'],
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
      'get-environment': exports0['4'],
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
    random: {
      'get-random-bytes': exports0['3'],
    },
    streams: {
      'drop-input-stream': lowering4,
      'drop-output-stream': lowering5,
      write: exports0['5'],
    },
  }));
  memory0 = exports1.memory;
  realloc0 = exports2.cabi_import_realloc;
  ({ exports: exports3 } = await instantiateCore(await module3, {
    '': {
      $imports: exports0.$imports,
      '0': lowering6,
      '1': lowering7,
      '10': exports2.proc_exit,
      '2': lowering8,
      '3': lowering9,
      '4': lowering10,
      '5': lowering11,
      '6': exports2.fd_write,
      '7': exports2.random_get,
      '8': exports2.environ_get,
      '9': exports2.environ_sizes_get,
    },
  }));
  realloc1 = exports1.cabi_realloc;
  postReturn0 = exports1['cabi_post_graph#add-component'];
  postReturn1 = exports1['cabi_post_graph#instantiate-component'];
  postReturn2 = exports1['cabi_post_graph#connect-instances'];
  postReturn3 = exports1['cabi_post_graph#disconnect-instances'];
  postReturn4 = exports1['cabi_post_graph#print-graph'];
  postReturn5 = exports1['cabi_post_graph#encode-graph'];
})();

await $init;
