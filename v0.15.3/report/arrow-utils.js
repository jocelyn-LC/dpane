var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return { value: o && o[i++], done: !o };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function verb(n) {
    if (g[n])
      i[n] = function(v) {
        return new Promise(function(a, b) {
          q.push([n, v, a, b]) > 1 || resume(n, v);
        });
      };
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f, v) {
    if (f(v), q.shift(), q.length)
      resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function(e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function() {
    return this;
  }, i;
  function verb(n, f) {
    i[n] = o[n] ? function(v) {
      return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function(v) {
      return new Promise(function(resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function(v2) {
      resolve({ value: v2, done: d });
    }, reject);
  }
}
var flatbuffers = {};
flatbuffers.SIZEOF_SHORT = 2;
flatbuffers.SIZEOF_INT = 4;
flatbuffers.FILE_IDENTIFIER_LENGTH = 4;
flatbuffers.SIZE_PREFIX_LENGTH = 4;
flatbuffers.Encoding = {
  UTF8_BYTES: 1,
  UTF16_STRING: 2
};
flatbuffers.int32 = new Int32Array(2);
flatbuffers.float32 = new Float32Array(flatbuffers.int32.buffer);
flatbuffers.float64 = new Float64Array(flatbuffers.int32.buffer);
flatbuffers.isLittleEndian = new Uint16Array(new Uint8Array([1, 0]).buffer)[0] === 1;
flatbuffers.Long = function(low, high) {
  this.low = low | 0;
  this.high = high | 0;
};
flatbuffers.Long.create = function(low, high) {
  return low == 0 && high == 0 ? flatbuffers.Long.ZERO : new flatbuffers.Long(low, high);
};
flatbuffers.Long.prototype.toFloat64 = function() {
  return (this.low >>> 0) + this.high * 4294967296;
};
flatbuffers.Long.prototype.equals = function(other) {
  return this.low == other.low && this.high == other.high;
};
flatbuffers.Long.ZERO = new flatbuffers.Long(0, 0);
flatbuffers.Builder = function(opt_initial_size) {
  if (!opt_initial_size) {
    var initial_size = 1024;
  } else {
    var initial_size = opt_initial_size;
  }
  this.bb = flatbuffers.ByteBuffer.allocate(initial_size);
  this.space = initial_size;
  this.minalign = 1;
  this.vtable = null;
  this.vtable_in_use = 0;
  this.isNested = false;
  this.object_start = 0;
  this.vtables = [];
  this.vector_num_elems = 0;
  this.force_defaults = false;
};
flatbuffers.Builder.prototype.clear = function() {
  this.bb.clear();
  this.space = this.bb.capacity();
  this.minalign = 1;
  this.vtable = null;
  this.vtable_in_use = 0;
  this.isNested = false;
  this.object_start = 0;
  this.vtables = [];
  this.vector_num_elems = 0;
  this.force_defaults = false;
};
flatbuffers.Builder.prototype.forceDefaults = function(forceDefaults) {
  this.force_defaults = forceDefaults;
};
flatbuffers.Builder.prototype.dataBuffer = function() {
  return this.bb;
};
flatbuffers.Builder.prototype.asUint8Array = function() {
  return this.bb.bytes().subarray(this.bb.position(), this.bb.position() + this.offset());
};
flatbuffers.Builder.prototype.prep = function(size, additional_bytes) {
  if (size > this.minalign) {
    this.minalign = size;
  }
  var align_size = ~(this.bb.capacity() - this.space + additional_bytes) + 1 & size - 1;
  while (this.space < align_size + size + additional_bytes) {
    var old_buf_size = this.bb.capacity();
    this.bb = flatbuffers.Builder.growByteBuffer(this.bb);
    this.space += this.bb.capacity() - old_buf_size;
  }
  this.pad(align_size);
};
flatbuffers.Builder.prototype.pad = function(byte_size) {
  for (var i = 0; i < byte_size; i++) {
    this.bb.writeInt8(--this.space, 0);
  }
};
flatbuffers.Builder.prototype.writeInt8 = function(value) {
  this.bb.writeInt8(this.space -= 1, value);
};
flatbuffers.Builder.prototype.writeInt16 = function(value) {
  this.bb.writeInt16(this.space -= 2, value);
};
flatbuffers.Builder.prototype.writeInt32 = function(value) {
  this.bb.writeInt32(this.space -= 4, value);
};
flatbuffers.Builder.prototype.writeInt64 = function(value) {
  this.bb.writeInt64(this.space -= 8, value);
};
flatbuffers.Builder.prototype.writeFloat32 = function(value) {
  this.bb.writeFloat32(this.space -= 4, value);
};
flatbuffers.Builder.prototype.writeFloat64 = function(value) {
  this.bb.writeFloat64(this.space -= 8, value);
};
flatbuffers.Builder.prototype.addInt8 = function(value) {
  this.prep(1, 0);
  this.writeInt8(value);
};
flatbuffers.Builder.prototype.addInt16 = function(value) {
  this.prep(2, 0);
  this.writeInt16(value);
};
flatbuffers.Builder.prototype.addInt32 = function(value) {
  this.prep(4, 0);
  this.writeInt32(value);
};
flatbuffers.Builder.prototype.addInt64 = function(value) {
  this.prep(8, 0);
  this.writeInt64(value);
};
flatbuffers.Builder.prototype.addFloat32 = function(value) {
  this.prep(4, 0);
  this.writeFloat32(value);
};
flatbuffers.Builder.prototype.addFloat64 = function(value) {
  this.prep(8, 0);
  this.writeFloat64(value);
};
flatbuffers.Builder.prototype.addFieldInt8 = function(voffset, value, defaultValue) {
  if (this.force_defaults || value != defaultValue) {
    this.addInt8(value);
    this.slot(voffset);
  }
};
flatbuffers.Builder.prototype.addFieldInt16 = function(voffset, value, defaultValue) {
  if (this.force_defaults || value != defaultValue) {
    this.addInt16(value);
    this.slot(voffset);
  }
};
flatbuffers.Builder.prototype.addFieldInt32 = function(voffset, value, defaultValue) {
  if (this.force_defaults || value != defaultValue) {
    this.addInt32(value);
    this.slot(voffset);
  }
};
flatbuffers.Builder.prototype.addFieldInt64 = function(voffset, value, defaultValue) {
  if (this.force_defaults || !value.equals(defaultValue)) {
    this.addInt64(value);
    this.slot(voffset);
  }
};
flatbuffers.Builder.prototype.addFieldFloat32 = function(voffset, value, defaultValue) {
  if (this.force_defaults || value != defaultValue) {
    this.addFloat32(value);
    this.slot(voffset);
  }
};
flatbuffers.Builder.prototype.addFieldFloat64 = function(voffset, value, defaultValue) {
  if (this.force_defaults || value != defaultValue) {
    this.addFloat64(value);
    this.slot(voffset);
  }
};
flatbuffers.Builder.prototype.addFieldOffset = function(voffset, value, defaultValue) {
  if (this.force_defaults || value != defaultValue) {
    this.addOffset(value);
    this.slot(voffset);
  }
};
flatbuffers.Builder.prototype.addFieldStruct = function(voffset, value, defaultValue) {
  if (value != defaultValue) {
    this.nested(value);
    this.slot(voffset);
  }
};
flatbuffers.Builder.prototype.nested = function(obj) {
  if (obj != this.offset()) {
    throw new Error("FlatBuffers: struct must be serialized inline.");
  }
};
flatbuffers.Builder.prototype.notNested = function() {
  if (this.isNested) {
    throw new Error("FlatBuffers: object serialization must not be nested.");
  }
};
flatbuffers.Builder.prototype.slot = function(voffset) {
  this.vtable[voffset] = this.offset();
};
flatbuffers.Builder.prototype.offset = function() {
  return this.bb.capacity() - this.space;
};
flatbuffers.Builder.growByteBuffer = function(bb) {
  var old_buf_size = bb.capacity();
  if (old_buf_size & 3221225472) {
    throw new Error("FlatBuffers: cannot grow buffer beyond 2 gigabytes.");
  }
  var new_buf_size = old_buf_size << 1;
  var nbb = flatbuffers.ByteBuffer.allocate(new_buf_size);
  nbb.setPosition(new_buf_size - old_buf_size);
  nbb.bytes().set(bb.bytes(), new_buf_size - old_buf_size);
  return nbb;
};
flatbuffers.Builder.prototype.addOffset = function(offset) {
  this.prep(flatbuffers.SIZEOF_INT, 0);
  this.writeInt32(this.offset() - offset + flatbuffers.SIZEOF_INT);
};
flatbuffers.Builder.prototype.startObject = function(numfields) {
  this.notNested();
  if (this.vtable == null) {
    this.vtable = [];
  }
  this.vtable_in_use = numfields;
  for (var i = 0; i < numfields; i++) {
    this.vtable[i] = 0;
  }
  this.isNested = true;
  this.object_start = this.offset();
};
flatbuffers.Builder.prototype.endObject = function() {
  if (this.vtable == null || !this.isNested) {
    throw new Error("FlatBuffers: endObject called without startObject");
  }
  this.addInt32(0);
  var vtableloc = this.offset();
  var i = this.vtable_in_use - 1;
  for (; i >= 0 && this.vtable[i] == 0; i--) {
  }
  var trimmed_size = i + 1;
  for (; i >= 0; i--) {
    this.addInt16(this.vtable[i] != 0 ? vtableloc - this.vtable[i] : 0);
  }
  var standard_fields = 2;
  this.addInt16(vtableloc - this.object_start);
  var len = (trimmed_size + standard_fields) * flatbuffers.SIZEOF_SHORT;
  this.addInt16(len);
  var existing_vtable = 0;
  var vt1 = this.space;
  outer_loop:
    for (i = 0; i < this.vtables.length; i++) {
      var vt2 = this.bb.capacity() - this.vtables[i];
      if (len == this.bb.readInt16(vt2)) {
        for (var j = flatbuffers.SIZEOF_SHORT; j < len; j += flatbuffers.SIZEOF_SHORT) {
          if (this.bb.readInt16(vt1 + j) != this.bb.readInt16(vt2 + j)) {
            continue outer_loop;
          }
        }
        existing_vtable = this.vtables[i];
        break;
      }
    }
  if (existing_vtable) {
    this.space = this.bb.capacity() - vtableloc;
    this.bb.writeInt32(this.space, existing_vtable - vtableloc);
  } else {
    this.vtables.push(this.offset());
    this.bb.writeInt32(this.bb.capacity() - vtableloc, this.offset() - vtableloc);
  }
  this.isNested = false;
  return vtableloc;
};
flatbuffers.Builder.prototype.finish = function(root_table, opt_file_identifier, opt_size_prefix) {
  var size_prefix = opt_size_prefix ? flatbuffers.SIZE_PREFIX_LENGTH : 0;
  if (opt_file_identifier) {
    var file_identifier = opt_file_identifier;
    this.prep(this.minalign, flatbuffers.SIZEOF_INT + flatbuffers.FILE_IDENTIFIER_LENGTH + size_prefix);
    if (file_identifier.length != flatbuffers.FILE_IDENTIFIER_LENGTH) {
      throw new Error("FlatBuffers: file identifier must be length " + flatbuffers.FILE_IDENTIFIER_LENGTH);
    }
    for (var i = flatbuffers.FILE_IDENTIFIER_LENGTH - 1; i >= 0; i--) {
      this.writeInt8(file_identifier.charCodeAt(i));
    }
  }
  this.prep(this.minalign, flatbuffers.SIZEOF_INT + size_prefix);
  this.addOffset(root_table);
  if (size_prefix) {
    this.addInt32(this.bb.capacity() - this.space);
  }
  this.bb.setPosition(this.space);
};
flatbuffers.Builder.prototype.finishSizePrefixed = function(root_table, opt_file_identifier) {
  this.finish(root_table, opt_file_identifier, true);
};
flatbuffers.Builder.prototype.requiredField = function(table, field) {
  var table_start = this.bb.capacity() - table;
  var vtable_start = table_start - this.bb.readInt32(table_start);
  var ok = this.bb.readInt16(vtable_start + field) != 0;
  if (!ok) {
    throw new Error("FlatBuffers: field " + field + " must be set");
  }
};
flatbuffers.Builder.prototype.startVector = function(elem_size, num_elems, alignment) {
  this.notNested();
  this.vector_num_elems = num_elems;
  this.prep(flatbuffers.SIZEOF_INT, elem_size * num_elems);
  this.prep(alignment, elem_size * num_elems);
};
flatbuffers.Builder.prototype.endVector = function() {
  this.writeInt32(this.vector_num_elems);
  return this.offset();
};
flatbuffers.Builder.prototype.createString = function(s) {
  if (s instanceof Uint8Array) {
    var utf8 = s;
  } else {
    var utf8 = [];
    var i = 0;
    while (i < s.length) {
      var codePoint;
      var a = s.charCodeAt(i++);
      if (a < 55296 || a >= 56320) {
        codePoint = a;
      } else {
        var b = s.charCodeAt(i++);
        codePoint = (a << 10) + b + (65536 - (55296 << 10) - 56320);
      }
      if (codePoint < 128) {
        utf8.push(codePoint);
      } else {
        if (codePoint < 2048) {
          utf8.push(codePoint >> 6 & 31 | 192);
        } else {
          if (codePoint < 65536) {
            utf8.push(codePoint >> 12 & 15 | 224);
          } else {
            utf8.push(
              codePoint >> 18 & 7 | 240,
              codePoint >> 12 & 63 | 128
            );
          }
          utf8.push(codePoint >> 6 & 63 | 128);
        }
        utf8.push(codePoint & 63 | 128);
      }
    }
  }
  this.addInt8(0);
  this.startVector(1, utf8.length, 1);
  this.bb.setPosition(this.space -= utf8.length);
  for (var i = 0, offset = this.space, bytes = this.bb.bytes(); i < utf8.length; i++) {
    bytes[offset++] = utf8[i];
  }
  return this.endVector();
};
flatbuffers.Builder.prototype.createLong = function(low, high) {
  return flatbuffers.Long.create(low, high);
};
flatbuffers.ByteBuffer = function(bytes) {
  this.bytes_ = bytes;
  this.position_ = 0;
};
flatbuffers.ByteBuffer.allocate = function(byte_size) {
  return new flatbuffers.ByteBuffer(new Uint8Array(byte_size));
};
flatbuffers.ByteBuffer.prototype.clear = function() {
  this.position_ = 0;
};
flatbuffers.ByteBuffer.prototype.bytes = function() {
  return this.bytes_;
};
flatbuffers.ByteBuffer.prototype.position = function() {
  return this.position_;
};
flatbuffers.ByteBuffer.prototype.setPosition = function(position) {
  this.position_ = position;
};
flatbuffers.ByteBuffer.prototype.capacity = function() {
  return this.bytes_.length;
};
flatbuffers.ByteBuffer.prototype.readInt8 = function(offset) {
  return this.readUint8(offset) << 24 >> 24;
};
flatbuffers.ByteBuffer.prototype.readUint8 = function(offset) {
  return this.bytes_[offset];
};
flatbuffers.ByteBuffer.prototype.readInt16 = function(offset) {
  return this.readUint16(offset) << 16 >> 16;
};
flatbuffers.ByteBuffer.prototype.readUint16 = function(offset) {
  return this.bytes_[offset] | this.bytes_[offset + 1] << 8;
};
flatbuffers.ByteBuffer.prototype.readInt32 = function(offset) {
  return this.bytes_[offset] | this.bytes_[offset + 1] << 8 | this.bytes_[offset + 2] << 16 | this.bytes_[offset + 3] << 24;
};
flatbuffers.ByteBuffer.prototype.readUint32 = function(offset) {
  return this.readInt32(offset) >>> 0;
};
flatbuffers.ByteBuffer.prototype.readInt64 = function(offset) {
  return new flatbuffers.Long(this.readInt32(offset), this.readInt32(offset + 4));
};
flatbuffers.ByteBuffer.prototype.readUint64 = function(offset) {
  return new flatbuffers.Long(this.readUint32(offset), this.readUint32(offset + 4));
};
flatbuffers.ByteBuffer.prototype.readFloat32 = function(offset) {
  flatbuffers.int32[0] = this.readInt32(offset);
  return flatbuffers.float32[0];
};
flatbuffers.ByteBuffer.prototype.readFloat64 = function(offset) {
  flatbuffers.int32[flatbuffers.isLittleEndian ? 0 : 1] = this.readInt32(offset);
  flatbuffers.int32[flatbuffers.isLittleEndian ? 1 : 0] = this.readInt32(offset + 4);
  return flatbuffers.float64[0];
};
flatbuffers.ByteBuffer.prototype.writeInt8 = function(offset, value) {
  this.bytes_[offset] = value;
};
flatbuffers.ByteBuffer.prototype.writeUint8 = function(offset, value) {
  this.bytes_[offset] = value;
};
flatbuffers.ByteBuffer.prototype.writeInt16 = function(offset, value) {
  this.bytes_[offset] = value;
  this.bytes_[offset + 1] = value >> 8;
};
flatbuffers.ByteBuffer.prototype.writeUint16 = function(offset, value) {
  this.bytes_[offset] = value;
  this.bytes_[offset + 1] = value >> 8;
};
flatbuffers.ByteBuffer.prototype.writeInt32 = function(offset, value) {
  this.bytes_[offset] = value;
  this.bytes_[offset + 1] = value >> 8;
  this.bytes_[offset + 2] = value >> 16;
  this.bytes_[offset + 3] = value >> 24;
};
flatbuffers.ByteBuffer.prototype.writeUint32 = function(offset, value) {
  this.bytes_[offset] = value;
  this.bytes_[offset + 1] = value >> 8;
  this.bytes_[offset + 2] = value >> 16;
  this.bytes_[offset + 3] = value >> 24;
};
flatbuffers.ByteBuffer.prototype.writeInt64 = function(offset, value) {
  this.writeInt32(offset, value.low);
  this.writeInt32(offset + 4, value.high);
};
flatbuffers.ByteBuffer.prototype.writeUint64 = function(offset, value) {
  this.writeUint32(offset, value.low);
  this.writeUint32(offset + 4, value.high);
};
flatbuffers.ByteBuffer.prototype.writeFloat32 = function(offset, value) {
  flatbuffers.float32[0] = value;
  this.writeInt32(offset, flatbuffers.int32[0]);
};
flatbuffers.ByteBuffer.prototype.writeFloat64 = function(offset, value) {
  flatbuffers.float64[0] = value;
  this.writeInt32(offset, flatbuffers.int32[flatbuffers.isLittleEndian ? 0 : 1]);
  this.writeInt32(offset + 4, flatbuffers.int32[flatbuffers.isLittleEndian ? 1 : 0]);
};
flatbuffers.ByteBuffer.prototype.getBufferIdentifier = function() {
  if (this.bytes_.length < this.position_ + flatbuffers.SIZEOF_INT + flatbuffers.FILE_IDENTIFIER_LENGTH) {
    throw new Error(
      "FlatBuffers: ByteBuffer is too short to contain an identifier."
    );
  }
  var result = "";
  for (var i = 0; i < flatbuffers.FILE_IDENTIFIER_LENGTH; i++) {
    result += String.fromCharCode(
      this.readInt8(this.position_ + flatbuffers.SIZEOF_INT + i)
    );
  }
  return result;
};
flatbuffers.ByteBuffer.prototype.__offset = function(bb_pos, vtable_offset) {
  var vtable = bb_pos - this.readInt32(bb_pos);
  return vtable_offset < this.readInt16(vtable) ? this.readInt16(vtable + vtable_offset) : 0;
};
flatbuffers.ByteBuffer.prototype.__union = function(t, offset) {
  t.bb_pos = offset + this.readInt32(offset);
  t.bb = this;
  return t;
};
flatbuffers.ByteBuffer.prototype.__string = function(offset, opt_encoding) {
  offset += this.readInt32(offset);
  var length = this.readInt32(offset);
  var result = "";
  var i = 0;
  offset += flatbuffers.SIZEOF_INT;
  if (opt_encoding === flatbuffers.Encoding.UTF8_BYTES) {
    return this.bytes_.subarray(offset, offset + length);
  }
  while (i < length) {
    var codePoint;
    var a = this.readUint8(offset + i++);
    if (a < 192) {
      codePoint = a;
    } else {
      var b = this.readUint8(offset + i++);
      if (a < 224) {
        codePoint = (a & 31) << 6 | b & 63;
      } else {
        var c = this.readUint8(offset + i++);
        if (a < 240) {
          codePoint = (a & 15) << 12 | (b & 63) << 6 | c & 63;
        } else {
          var d = this.readUint8(offset + i++);
          codePoint = (a & 7) << 18 | (b & 63) << 12 | (c & 63) << 6 | d & 63;
        }
      }
    }
    if (codePoint < 65536) {
      result += String.fromCharCode(codePoint);
    } else {
      codePoint -= 65536;
      result += String.fromCharCode(
        (codePoint >> 10) + 55296,
        (codePoint & (1 << 10) - 1) + 56320
      );
    }
  }
  return result;
};
flatbuffers.ByteBuffer.prototype.__indirect = function(offset) {
  return offset + this.readInt32(offset);
};
flatbuffers.ByteBuffer.prototype.__vector = function(offset) {
  return offset + this.readInt32(offset) + flatbuffers.SIZEOF_INT;
};
flatbuffers.ByteBuffer.prototype.__vector_len = function(offset) {
  return this.readInt32(offset + this.readInt32(offset));
};
flatbuffers.ByteBuffer.prototype.__has_identifier = function(ident) {
  if (ident.length != flatbuffers.FILE_IDENTIFIER_LENGTH) {
    throw new Error("FlatBuffers: file identifier must be length " + flatbuffers.FILE_IDENTIFIER_LENGTH);
  }
  for (var i = 0; i < flatbuffers.FILE_IDENTIFIER_LENGTH; i++) {
    if (ident.charCodeAt(i) != this.readInt8(this.position_ + flatbuffers.SIZEOF_INT + i)) {
      return false;
    }
  }
  return true;
};
flatbuffers.ByteBuffer.prototype.createLong = function(low, high) {
  return flatbuffers.Long.create(low, high);
};
const decoder = new TextDecoder("utf-8");
const decodeUtf8 = (buffer) => decoder.decode(buffer);
const encoder = new TextEncoder();
const encodeUtf8 = (value) => encoder.encode(value);
const ITERATOR_DONE = Object.freeze({ done: true, value: void 0 });
class ArrowJSON {
  constructor(_json) {
    this._json = _json;
  }
  get schema() {
    return this._json["schema"];
  }
  get batches() {
    return this._json["batches"] || [];
  }
  get dictionaries() {
    return this._json["dictionaries"] || [];
  }
}
class ReadableInterop {
  tee() {
    return this._getDOMStream().tee();
  }
  pipe(writable, options) {
    return this._getNodeStream().pipe(writable, options);
  }
  pipeTo(writable, options) {
    return this._getDOMStream().pipeTo(writable, options);
  }
  pipeThrough(duplex, options) {
    return this._getDOMStream().pipeThrough(duplex, options);
  }
  _getDOMStream() {
    return this._DOMStream || (this._DOMStream = this.toDOMStream());
  }
  _getNodeStream() {
    return this._nodeStream || (this._nodeStream = this.toNodeStream());
  }
}
class AsyncQueue extends ReadableInterop {
  constructor() {
    super();
    this._values = [];
    this.resolvers = [];
    this._closedPromise = new Promise((r) => this._closedPromiseResolve = r);
  }
  get closed() {
    return this._closedPromise;
  }
  cancel(reason) {
    return __awaiter(this, void 0, void 0, function* () {
      yield this.return(reason);
    });
  }
  write(value) {
    if (this._ensureOpen()) {
      this.resolvers.length <= 0 ? this._values.push(value) : this.resolvers.shift().resolve({ done: false, value });
    }
  }
  abort(value) {
    if (this._closedPromiseResolve) {
      this.resolvers.length <= 0 ? this._error = { error: value } : this.resolvers.shift().reject({ done: true, value });
    }
  }
  close() {
    if (this._closedPromiseResolve) {
      const { resolvers } = this;
      while (resolvers.length > 0) {
        resolvers.shift().resolve(ITERATOR_DONE);
      }
      this._closedPromiseResolve();
      this._closedPromiseResolve = void 0;
    }
  }
  [Symbol.asyncIterator]() {
    return this;
  }
  toDOMStream(options) {
    return streamAdapters.toDOMStream(this._closedPromiseResolve || this._error ? this : this._values, options);
  }
  toNodeStream(options) {
    return streamAdapters.toNodeStream(this._closedPromiseResolve || this._error ? this : this._values, options);
  }
  throw(_) {
    return __awaiter(this, void 0, void 0, function* () {
      yield this.abort(_);
      return ITERATOR_DONE;
    });
  }
  return(_) {
    return __awaiter(this, void 0, void 0, function* () {
      yield this.close();
      return ITERATOR_DONE;
    });
  }
  read(size) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.next(size, "read")).value;
    });
  }
  peek(size) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.next(size, "peek")).value;
    });
  }
  next(..._args) {
    if (this._values.length > 0) {
      return Promise.resolve({ done: false, value: this._values.shift() });
    } else if (this._error) {
      return Promise.reject({ done: true, value: this._error.error });
    } else if (!this._closedPromiseResolve) {
      return Promise.resolve(ITERATOR_DONE);
    } else {
      return new Promise((resolve, reject) => {
        this.resolvers.push({ resolve, reject });
      });
    }
  }
  _ensureOpen() {
    if (this._closedPromiseResolve) {
      return true;
    }
    throw new Error(`AsyncQueue is closed`);
  }
}
const [BigIntCtor, BigIntAvailable] = (() => {
  const BigIntUnavailableError = () => {
    throw new Error("BigInt is not available in this environment");
  };
  function BigIntUnavailable() {
    throw BigIntUnavailableError();
  }
  BigIntUnavailable.asIntN = () => {
    throw BigIntUnavailableError();
  };
  BigIntUnavailable.asUintN = () => {
    throw BigIntUnavailableError();
  };
  return typeof BigInt !== "undefined" ? [BigInt, true] : [BigIntUnavailable, false];
})();
const [BigInt64ArrayCtor, BigInt64ArrayAvailable] = (() => {
  const BigInt64ArrayUnavailableError = () => {
    throw new Error("BigInt64Array is not available in this environment");
  };
  class BigInt64ArrayUnavailable {
    static get BYTES_PER_ELEMENT() {
      return 8;
    }
    static of() {
      throw BigInt64ArrayUnavailableError();
    }
    static from() {
      throw BigInt64ArrayUnavailableError();
    }
    constructor() {
      throw BigInt64ArrayUnavailableError();
    }
  }
  return typeof BigInt64Array !== "undefined" ? [BigInt64Array, true] : [BigInt64ArrayUnavailable, false];
})();
const [BigUint64ArrayCtor, BigUint64ArrayAvailable] = (() => {
  const BigUint64ArrayUnavailableError = () => {
    throw new Error("BigUint64Array is not available in this environment");
  };
  class BigUint64ArrayUnavailable {
    static get BYTES_PER_ELEMENT() {
      return 8;
    }
    static of() {
      throw BigUint64ArrayUnavailableError();
    }
    static from() {
      throw BigUint64ArrayUnavailableError();
    }
    constructor() {
      throw BigUint64ArrayUnavailableError();
    }
  }
  return typeof BigUint64Array !== "undefined" ? [BigUint64Array, true] : [BigUint64ArrayUnavailable, false];
})();
const isNumber = (x) => typeof x === "number";
const isBoolean = (x) => typeof x === "boolean";
const isFunction = (x) => typeof x === "function";
const isObject = (x) => x != null && Object(x) === x;
const isPromise = (x) => {
  return isObject(x) && isFunction(x.then);
};
const isIterable = (x) => {
  return isObject(x) && isFunction(x[Symbol.iterator]);
};
const isAsyncIterable = (x) => {
  return isObject(x) && isFunction(x[Symbol.asyncIterator]);
};
const isArrowJSON = (x) => {
  return isObject(x) && isObject(x["schema"]);
};
const isIteratorResult = (x) => {
  return isObject(x) && "done" in x && "value" in x;
};
const isFileHandle = (x) => {
  return isObject(x) && isFunction(x["stat"]) && isNumber(x["fd"]);
};
const isFetchResponse = (x) => {
  return isObject(x) && isReadableDOMStream(x["body"]);
};
const isWritableDOMStream = (x) => {
  return isObject(x) && isFunction(x["abort"]) && isFunction(x["getWriter"]) && !(x instanceof ReadableInterop);
};
const isReadableDOMStream = (x) => {
  return isObject(x) && isFunction(x["cancel"]) && isFunction(x["getReader"]) && !(x instanceof ReadableInterop);
};
const isWritableNodeStream = (x) => {
  return isObject(x) && isFunction(x["end"]) && isFunction(x["write"]) && isBoolean(x["writable"]) && !(x instanceof ReadableInterop);
};
const isReadableNodeStream = (x) => {
  return isObject(x) && isFunction(x["read"]) && isFunction(x["pipe"]) && isBoolean(x["readable"]) && !(x instanceof ReadableInterop);
};
var ByteBuffer$3 = flatbuffers.ByteBuffer;
const SharedArrayBuf = typeof SharedArrayBuffer !== "undefined" ? SharedArrayBuffer : ArrayBuffer;
function collapseContiguousByteRanges(chunks) {
  const result = chunks[0] ? [chunks[0]] : [];
  let xOffset, yOffset, xLen, yLen;
  for (let x, y, i = 0, j = 0, n = chunks.length; ++i < n; ) {
    x = result[j];
    y = chunks[i];
    if (!x || !y || x.buffer !== y.buffer || y.byteOffset < x.byteOffset) {
      y && (result[++j] = y);
      continue;
    }
    ({ byteOffset: xOffset, byteLength: xLen } = x);
    ({ byteOffset: yOffset, byteLength: yLen } = y);
    if (xOffset + xLen < yOffset || yOffset + yLen < xOffset) {
      y && (result[++j] = y);
      continue;
    }
    result[j] = new Uint8Array(x.buffer, xOffset, yOffset - xOffset + yLen);
  }
  return result;
}
function memcpy(target, source, targetByteOffset = 0, sourceByteLength = source.byteLength) {
  const targetByteLength = target.byteLength;
  const dst = new Uint8Array(target.buffer, target.byteOffset, targetByteLength);
  const src = new Uint8Array(source.buffer, source.byteOffset, Math.min(sourceByteLength, targetByteLength));
  dst.set(src, targetByteOffset);
  return target;
}
function joinUint8Arrays(chunks, size) {
  const result = collapseContiguousByteRanges(chunks);
  const byteLength = result.reduce((x, b) => x + b.byteLength, 0);
  let source, sliced, buffer;
  let offset = 0, index = -1;
  const length = Math.min(size || Infinity, byteLength);
  for (let n = result.length; ++index < n; ) {
    source = result[index];
    sliced = source.subarray(0, Math.min(source.length, length - offset));
    if (length <= offset + sliced.length) {
      if (sliced.length < source.length) {
        result[index] = source.subarray(sliced.length);
      } else if (sliced.length === source.length) {
        index++;
      }
      buffer ? memcpy(buffer, sliced, offset) : buffer = sliced;
      break;
    }
    memcpy(buffer || (buffer = new Uint8Array(length)), sliced, offset);
    offset += sliced.length;
  }
  return [buffer || new Uint8Array(0), result.slice(index), byteLength - (buffer ? buffer.byteLength : 0)];
}
function toArrayBufferView(ArrayBufferViewCtor, input) {
  let value = isIteratorResult(input) ? input.value : input;
  if (value instanceof ArrayBufferViewCtor) {
    if (ArrayBufferViewCtor === Uint8Array) {
      return new ArrayBufferViewCtor(value.buffer, value.byteOffset, value.byteLength);
    }
    return value;
  }
  if (!value) {
    return new ArrayBufferViewCtor(0);
  }
  if (typeof value === "string") {
    value = encodeUtf8(value);
  }
  if (value instanceof ArrayBuffer) {
    return new ArrayBufferViewCtor(value);
  }
  if (value instanceof SharedArrayBuf) {
    return new ArrayBufferViewCtor(value);
  }
  if (value instanceof ByteBuffer$3) {
    return toArrayBufferView(ArrayBufferViewCtor, value.bytes());
  }
  return !ArrayBuffer.isView(value) ? ArrayBufferViewCtor.from(value) : value.byteLength <= 0 ? new ArrayBufferViewCtor(0) : new ArrayBufferViewCtor(value.buffer, value.byteOffset, value.byteLength / ArrayBufferViewCtor.BYTES_PER_ELEMENT);
}
const toInt8Array = (input) => toArrayBufferView(Int8Array, input);
const toInt16Array = (input) => toArrayBufferView(Int16Array, input);
const toInt32Array = (input) => toArrayBufferView(Int32Array, input);
const toBigInt64Array = (input) => toArrayBufferView(BigInt64ArrayCtor, input);
const toUint8Array = (input) => toArrayBufferView(Uint8Array, input);
const toUint16Array = (input) => toArrayBufferView(Uint16Array, input);
const toUint32Array = (input) => toArrayBufferView(Uint32Array, input);
const toBigUint64Array = (input) => toArrayBufferView(BigUint64ArrayCtor, input);
const toFloat32Array = (input) => toArrayBufferView(Float32Array, input);
const toFloat64Array = (input) => toArrayBufferView(Float64Array, input);
const toUint8ClampedArray = (input) => toArrayBufferView(Uint8ClampedArray, input);
const pump$1 = (iterator) => {
  iterator.next();
  return iterator;
};
function* toArrayBufferViewIterator(ArrayCtor, source) {
  const wrap = function* (x) {
    yield x;
  };
  const buffers = typeof source === "string" ? wrap(source) : ArrayBuffer.isView(source) ? wrap(source) : source instanceof ArrayBuffer ? wrap(source) : source instanceof SharedArrayBuf ? wrap(source) : !isIterable(source) ? wrap(source) : source;
  yield* pump$1(function* (it) {
    let r = null;
    do {
      r = it.next(yield toArrayBufferView(ArrayCtor, r));
    } while (!r.done);
  }(buffers[Symbol.iterator]()));
  return new ArrayCtor();
}
const toInt8ArrayIterator = (input) => toArrayBufferViewIterator(Int8Array, input);
const toInt16ArrayIterator = (input) => toArrayBufferViewIterator(Int16Array, input);
const toInt32ArrayIterator = (input) => toArrayBufferViewIterator(Int32Array, input);
const toUint8ArrayIterator = (input) => toArrayBufferViewIterator(Uint8Array, input);
const toUint16ArrayIterator = (input) => toArrayBufferViewIterator(Uint16Array, input);
const toUint32ArrayIterator = (input) => toArrayBufferViewIterator(Uint32Array, input);
const toFloat32ArrayIterator = (input) => toArrayBufferViewIterator(Float32Array, input);
const toFloat64ArrayIterator = (input) => toArrayBufferViewIterator(Float64Array, input);
const toUint8ClampedArrayIterator = (input) => toArrayBufferViewIterator(Uint8ClampedArray, input);
function toArrayBufferViewAsyncIterator(ArrayCtor, source) {
  return __asyncGenerator(this, arguments, function* toArrayBufferViewAsyncIterator_1() {
    if (isPromise(source)) {
      return yield __await(yield __await(yield* __asyncDelegator(__asyncValues(toArrayBufferViewAsyncIterator(ArrayCtor, yield __await(source))))));
    }
    const wrap = function(x) {
      return __asyncGenerator(this, arguments, function* () {
        yield yield __await(yield __await(x));
      });
    };
    const emit = function(source2) {
      return __asyncGenerator(this, arguments, function* () {
        yield __await(yield* __asyncDelegator(__asyncValues(pump$1(function* (it) {
          let r = null;
          do {
            r = it.next(yield r === null || r === void 0 ? void 0 : r.value);
          } while (!r.done);
        }(source2[Symbol.iterator]())))));
      });
    };
    const buffers = typeof source === "string" ? wrap(source) : ArrayBuffer.isView(source) ? wrap(source) : source instanceof ArrayBuffer ? wrap(source) : source instanceof SharedArrayBuf ? wrap(source) : isIterable(source) ? emit(source) : !isAsyncIterable(source) ? wrap(source) : source;
    yield __await(
      yield* __asyncDelegator(__asyncValues(pump$1(function(it) {
        return __asyncGenerator(this, arguments, function* () {
          let r = null;
          do {
            r = yield __await(it.next(yield yield __await(toArrayBufferView(ArrayCtor, r))));
          } while (!r.done);
        });
      }(buffers[Symbol.asyncIterator]()))))
    );
    return yield __await(new ArrayCtor());
  });
}
const toInt8ArrayAsyncIterator = (input) => toArrayBufferViewAsyncIterator(Int8Array, input);
const toInt16ArrayAsyncIterator = (input) => toArrayBufferViewAsyncIterator(Int16Array, input);
const toInt32ArrayAsyncIterator = (input) => toArrayBufferViewAsyncIterator(Int32Array, input);
const toUint8ArrayAsyncIterator = (input) => toArrayBufferViewAsyncIterator(Uint8Array, input);
const toUint16ArrayAsyncIterator = (input) => toArrayBufferViewAsyncIterator(Uint16Array, input);
const toUint32ArrayAsyncIterator = (input) => toArrayBufferViewAsyncIterator(Uint32Array, input);
const toFloat32ArrayAsyncIterator = (input) => toArrayBufferViewAsyncIterator(Float32Array, input);
const toFloat64ArrayAsyncIterator = (input) => toArrayBufferViewAsyncIterator(Float64Array, input);
const toUint8ClampedArrayAsyncIterator = (input) => toArrayBufferViewAsyncIterator(Uint8ClampedArray, input);
function rebaseValueOffsets(offset, length, valueOffsets) {
  if (offset !== 0) {
    valueOffsets = valueOffsets.slice(0, length + 1);
    for (let i = -1; ++i <= length; ) {
      valueOffsets[i] += offset;
    }
  }
  return valueOffsets;
}
function compareArrayLike(a, b) {
  let i = 0;
  const n = a.length;
  if (n !== b.length) {
    return false;
  }
  if (n > 0) {
    do {
      if (a[i] !== b[i]) {
        return false;
      }
    } while (++i < n);
  }
  return true;
}
var util_buffer_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  memcpy,
  joinUint8Arrays,
  toArrayBufferView,
  toInt8Array,
  toInt16Array,
  toInt32Array,
  toBigInt64Array,
  toUint8Array,
  toUint16Array,
  toUint32Array,
  toBigUint64Array,
  toFloat32Array,
  toFloat64Array,
  toUint8ClampedArray,
  toArrayBufferViewIterator,
  toInt8ArrayIterator,
  toInt16ArrayIterator,
  toInt32ArrayIterator,
  toUint8ArrayIterator,
  toUint16ArrayIterator,
  toUint32ArrayIterator,
  toFloat32ArrayIterator,
  toFloat64ArrayIterator,
  toUint8ClampedArrayIterator,
  toArrayBufferViewAsyncIterator,
  toInt8ArrayAsyncIterator,
  toInt16ArrayAsyncIterator,
  toInt32ArrayAsyncIterator,
  toUint8ArrayAsyncIterator,
  toUint16ArrayAsyncIterator,
  toUint32ArrayAsyncIterator,
  toFloat32ArrayAsyncIterator,
  toFloat64ArrayAsyncIterator,
  toUint8ClampedArrayAsyncIterator,
  rebaseValueOffsets,
  compareArrayLike
}, Symbol.toStringTag, { value: "Module" }));
var streamAdapters = {
  fromIterable(source) {
    return pump(fromIterable(source));
  },
  fromAsyncIterable(source) {
    return pump(fromAsyncIterable(source));
  },
  fromDOMStream(source) {
    return pump(fromDOMStream(source));
  },
  fromNodeStream(stream) {
    return pump(fromNodeStream(stream));
  },
  toDOMStream(source, options) {
    throw new Error(`"toDOMStream" not available in this environment`);
  },
  toNodeStream(source, options) {
    throw new Error(`"toNodeStream" not available in this environment`);
  }
};
const pump = (iterator) => {
  iterator.next();
  return iterator;
};
function* fromIterable(source) {
  let done, threw = false;
  let buffers = [], buffer;
  let cmd, size, bufferLength = 0;
  function byteRange() {
    if (cmd === "peek") {
      return joinUint8Arrays(buffers, size)[0];
    }
    [buffer, buffers, bufferLength] = joinUint8Arrays(buffers, size);
    return buffer;
  }
  ({ cmd, size } = yield null);
  const it = toUint8ArrayIterator(source)[Symbol.iterator]();
  try {
    do {
      ({ done, value: buffer } = isNaN(size - bufferLength) ? it.next(void 0) : it.next(size - bufferLength));
      if (!done && buffer.byteLength > 0) {
        buffers.push(buffer);
        bufferLength += buffer.byteLength;
      }
      if (done || size <= bufferLength) {
        do {
          ({ cmd, size } = yield byteRange());
        } while (size < bufferLength);
      }
    } while (!done);
  } catch (e) {
    (threw = true) && typeof it.throw === "function" && it.throw(e);
  } finally {
    threw === false && typeof it.return === "function" && it.return(null);
  }
  return null;
}
function fromAsyncIterable(source) {
  return __asyncGenerator(this, arguments, function* fromAsyncIterable_1() {
    let done, threw = false;
    let buffers = [], buffer;
    let cmd, size, bufferLength = 0;
    function byteRange() {
      if (cmd === "peek") {
        return joinUint8Arrays(buffers, size)[0];
      }
      [buffer, buffers, bufferLength] = joinUint8Arrays(buffers, size);
      return buffer;
    }
    ({ cmd, size } = yield yield __await(null));
    const it = toUint8ArrayAsyncIterator(source)[Symbol.asyncIterator]();
    try {
      do {
        ({ done, value: buffer } = isNaN(size - bufferLength) ? yield __await(it.next(void 0)) : yield __await(it.next(size - bufferLength)));
        if (!done && buffer.byteLength > 0) {
          buffers.push(buffer);
          bufferLength += buffer.byteLength;
        }
        if (done || size <= bufferLength) {
          do {
            ({ cmd, size } = yield yield __await(byteRange()));
          } while (size < bufferLength);
        }
      } while (!done);
    } catch (e) {
      (threw = true) && typeof it.throw === "function" && (yield __await(it.throw(e)));
    } finally {
      threw === false && typeof it.return === "function" && (yield __await(it.return(new Uint8Array(0))));
    }
    return yield __await(null);
  });
}
function fromDOMStream(source) {
  return __asyncGenerator(this, arguments, function* fromDOMStream_1() {
    let done = false, threw = false;
    let buffers = [], buffer;
    let cmd, size, bufferLength = 0;
    function byteRange() {
      if (cmd === "peek") {
        return joinUint8Arrays(buffers, size)[0];
      }
      [buffer, buffers, bufferLength] = joinUint8Arrays(buffers, size);
      return buffer;
    }
    ({ cmd, size } = yield yield __await(null));
    const it = new AdaptiveByteReader(source);
    try {
      do {
        ({ done, value: buffer } = isNaN(size - bufferLength) ? yield __await(it["read"](void 0)) : yield __await(it["read"](size - bufferLength)));
        if (!done && buffer.byteLength > 0) {
          buffers.push(toUint8Array(buffer));
          bufferLength += buffer.byteLength;
        }
        if (done || size <= bufferLength) {
          do {
            ({ cmd, size } = yield yield __await(byteRange()));
          } while (size < bufferLength);
        }
      } while (!done);
    } catch (e) {
      (threw = true) && (yield __await(it["cancel"](e)));
    } finally {
      threw === false ? yield __await(it["cancel"]()) : source["locked"] && it.releaseLock();
    }
    return yield __await(null);
  });
}
class AdaptiveByteReader {
  constructor(source) {
    this.source = source;
    this.byobReader = null;
    this.defaultReader = null;
    try {
      this.supportsBYOB = !!(this.reader = this.getBYOBReader());
    } catch (e) {
      this.supportsBYOB = !(this.reader = this.getDefaultReader());
    }
  }
  get closed() {
    return this.reader ? this.reader["closed"].catch(() => {
    }) : Promise.resolve();
  }
  releaseLock() {
    if (this.reader) {
      this.reader.releaseLock();
    }
    this.reader = this.byobReader = this.defaultReader = null;
  }
  cancel(reason) {
    return __awaiter(this, void 0, void 0, function* () {
      const { reader, source } = this;
      reader && (yield reader["cancel"](reason).catch(() => {
      }));
      source && (source["locked"] && this.releaseLock());
    });
  }
  read(size) {
    return __awaiter(this, void 0, void 0, function* () {
      if (size === 0) {
        return { done: this.reader == null, value: new Uint8Array(0) };
      }
      const result = !this.supportsBYOB || typeof size !== "number" ? yield this.getDefaultReader().read() : yield this.readFromBYOBReader(size);
      !result.done && (result.value = toUint8Array(result));
      return result;
    });
  }
  getDefaultReader() {
    if (this.byobReader) {
      this.releaseLock();
    }
    if (!this.defaultReader) {
      this.defaultReader = this.source["getReader"]();
      this.defaultReader["closed"].catch(() => {
      });
    }
    return this.reader = this.defaultReader;
  }
  getBYOBReader() {
    if (this.defaultReader) {
      this.releaseLock();
    }
    if (!this.byobReader) {
      this.byobReader = this.source["getReader"]({ mode: "byob" });
      this.byobReader["closed"].catch(() => {
      });
    }
    return this.reader = this.byobReader;
  }
  readFromBYOBReader(size) {
    return __awaiter(this, void 0, void 0, function* () {
      return yield readInto(this.getBYOBReader(), new ArrayBuffer(size), 0, size);
    });
  }
}
function readInto(reader, buffer, offset, size) {
  return __awaiter(this, void 0, void 0, function* () {
    if (offset >= size) {
      return { done: false, value: new Uint8Array(buffer, 0, size) };
    }
    const { done, value } = yield reader.read(new Uint8Array(buffer, offset, size - offset));
    if ((offset += value.byteLength) < size && !done) {
      return yield readInto(reader, value.buffer, offset, size);
    }
    return { done, value: new Uint8Array(value.buffer, 0, offset) };
  });
}
const onEvent = (stream, event) => {
  const handler = (_) => resolve([event, _]);
  let resolve;
  return [event, handler, new Promise((r) => (resolve = r) && stream["once"](event, handler))];
};
function fromNodeStream(stream) {
  return __asyncGenerator(this, arguments, function* fromNodeStream_1() {
    const events = [];
    let event = "error";
    let done = false, err = null;
    let cmd, size, bufferLength = 0;
    let buffers = [], buffer;
    function byteRange() {
      if (cmd === "peek") {
        return joinUint8Arrays(buffers, size)[0];
      }
      [buffer, buffers, bufferLength] = joinUint8Arrays(buffers, size);
      return buffer;
    }
    ({ cmd, size } = yield yield __await(null));
    if (stream["isTTY"]) {
      yield yield __await(new Uint8Array(0));
      return yield __await(null);
    }
    try {
      events[0] = onEvent(stream, "end");
      events[1] = onEvent(stream, "error");
      do {
        events[2] = onEvent(stream, "readable");
        [event, err] = yield __await(Promise.race(events.map((x) => x[2])));
        if (event === "error") {
          break;
        }
        if (!(done = event === "end")) {
          if (!isFinite(size - bufferLength)) {
            buffer = toUint8Array(stream["read"](void 0));
          } else {
            buffer = toUint8Array(stream["read"](size - bufferLength));
            if (buffer.byteLength < size - bufferLength) {
              buffer = toUint8Array(stream["read"](void 0));
            }
          }
          if (buffer.byteLength > 0) {
            buffers.push(buffer);
            bufferLength += buffer.byteLength;
          }
        }
        if (done || size <= bufferLength) {
          do {
            ({ cmd, size } = yield yield __await(byteRange()));
          } while (size < bufferLength);
        }
      } while (!done);
    } finally {
      yield __await(cleanup(events, event === "error" ? err : null));
    }
    return yield __await(null);
    function cleanup(events2, err2) {
      buffer = buffers = null;
      return new Promise((resolve, reject) => {
        for (const [evt, fn] of events2) {
          stream["off"](evt, fn);
        }
        try {
          const destroy = stream["destroy"];
          destroy && destroy.call(stream, err2);
          err2 = void 0;
        } catch (e) {
          err2 = e || err2;
        } finally {
          err2 != null ? reject(err2) : resolve();
        }
      });
    }
  });
}
class AbstractVector {
}
AbstractVector.prototype.data = null;
var MetadataVersion;
(function(MetadataVersion2) {
  MetadataVersion2[MetadataVersion2["V1"] = 0] = "V1";
  MetadataVersion2[MetadataVersion2["V2"] = 1] = "V2";
  MetadataVersion2[MetadataVersion2["V3"] = 2] = "V3";
  MetadataVersion2[MetadataVersion2["V4"] = 3] = "V4";
  MetadataVersion2[MetadataVersion2["V5"] = 4] = "V5";
})(MetadataVersion || (MetadataVersion = {}));
var Feature;
(function(Feature2) {
  Feature2[Feature2["UNUSED"] = 0] = "UNUSED";
  Feature2[Feature2["DICTIONARY_REPLACEMENT"] = 1] = "DICTIONARY_REPLACEMENT";
  Feature2[Feature2["COMPRESSED_BODY"] = 2] = "COMPRESSED_BODY";
})(Feature || (Feature = {}));
var UnionMode;
(function(UnionMode2) {
  UnionMode2[UnionMode2["Sparse"] = 0] = "Sparse";
  UnionMode2[UnionMode2["Dense"] = 1] = "Dense";
})(UnionMode || (UnionMode = {}));
var Precision;
(function(Precision2) {
  Precision2[Precision2["HALF"] = 0] = "HALF";
  Precision2[Precision2["SINGLE"] = 1] = "SINGLE";
  Precision2[Precision2["DOUBLE"] = 2] = "DOUBLE";
})(Precision || (Precision = {}));
var DateUnit;
(function(DateUnit2) {
  DateUnit2[DateUnit2["DAY"] = 0] = "DAY";
  DateUnit2[DateUnit2["MILLISECOND"] = 1] = "MILLISECOND";
})(DateUnit || (DateUnit = {}));
var TimeUnit;
(function(TimeUnit2) {
  TimeUnit2[TimeUnit2["SECOND"] = 0] = "SECOND";
  TimeUnit2[TimeUnit2["MILLISECOND"] = 1] = "MILLISECOND";
  TimeUnit2[TimeUnit2["MICROSECOND"] = 2] = "MICROSECOND";
  TimeUnit2[TimeUnit2["NANOSECOND"] = 3] = "NANOSECOND";
})(TimeUnit || (TimeUnit = {}));
var IntervalUnit;
(function(IntervalUnit2) {
  IntervalUnit2[IntervalUnit2["YEAR_MONTH"] = 0] = "YEAR_MONTH";
  IntervalUnit2[IntervalUnit2["DAY_TIME"] = 1] = "DAY_TIME";
})(IntervalUnit || (IntervalUnit = {}));
var Type$1;
(function(Type2) {
  Type2[Type2["NONE"] = 0] = "NONE";
  Type2[Type2["Null"] = 1] = "Null";
  Type2[Type2["Int"] = 2] = "Int";
  Type2[Type2["FloatingPoint"] = 3] = "FloatingPoint";
  Type2[Type2["Binary"] = 4] = "Binary";
  Type2[Type2["Utf8"] = 5] = "Utf8";
  Type2[Type2["Bool"] = 6] = "Bool";
  Type2[Type2["Decimal"] = 7] = "Decimal";
  Type2[Type2["Date"] = 8] = "Date";
  Type2[Type2["Time"] = 9] = "Time";
  Type2[Type2["Timestamp"] = 10] = "Timestamp";
  Type2[Type2["Interval"] = 11] = "Interval";
  Type2[Type2["List"] = 12] = "List";
  Type2[Type2["Struct_"] = 13] = "Struct_";
  Type2[Type2["Union"] = 14] = "Union";
  Type2[Type2["FixedSizeBinary"] = 15] = "FixedSizeBinary";
  Type2[Type2["FixedSizeList"] = 16] = "FixedSizeList";
  Type2[Type2["Map"] = 17] = "Map";
  Type2[Type2["Duration"] = 18] = "Duration";
  Type2[Type2["LargeBinary"] = 19] = "LargeBinary";
  Type2[Type2["LargeUtf8"] = 20] = "LargeUtf8";
  Type2[Type2["LargeList"] = 21] = "LargeList";
})(Type$1 || (Type$1 = {}));
var DictionaryKind;
(function(DictionaryKind2) {
  DictionaryKind2[DictionaryKind2["DenseArray"] = 0] = "DenseArray";
})(DictionaryKind || (DictionaryKind = {}));
var Endianness;
(function(Endianness2) {
  Endianness2[Endianness2["Little"] = 0] = "Little";
  Endianness2[Endianness2["Big"] = 1] = "Big";
})(Endianness || (Endianness = {}));
class Null$1 {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsNull(bb, obj) {
    return (obj || new Null$1()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsNull(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new Null$1()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static startNull(builder) {
    builder.startObject(0);
  }
  static endNull(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createNull(builder) {
    Null$1.startNull(builder);
    return Null$1.endNull(builder);
  }
}
class Struct_ {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsStruct_(bb, obj) {
    return (obj || new Struct_()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsStruct_(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new Struct_()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static startStruct_(builder) {
    builder.startObject(0);
  }
  static endStruct_(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createStruct_(builder) {
    Struct_.startStruct_(builder);
    return Struct_.endStruct_(builder);
  }
}
class List$1 {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsList(bb, obj) {
    return (obj || new List$1()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsList(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new List$1()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static startList(builder) {
    builder.startObject(0);
  }
  static endList(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createList(builder) {
    List$1.startList(builder);
    return List$1.endList(builder);
  }
}
class FixedSizeList$1 {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsFixedSizeList(bb, obj) {
    return (obj || new FixedSizeList$1()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsFixedSizeList(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new FixedSizeList$1()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  listSize() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  static startFixedSizeList(builder) {
    builder.startObject(1);
  }
  static addListSize(builder, listSize) {
    builder.addFieldInt32(0, listSize, 0);
  }
  static endFixedSizeList(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createFixedSizeList(builder, listSize) {
    FixedSizeList$1.startFixedSizeList(builder);
    FixedSizeList$1.addListSize(builder, listSize);
    return FixedSizeList$1.endFixedSizeList(builder);
  }
}
class Map$1 {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsMap(bb, obj) {
    return (obj || new Map$1()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsMap(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new Map$1()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  keysSorted() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
  }
  static startMap(builder) {
    builder.startObject(1);
  }
  static addKeysSorted(builder, keysSorted) {
    builder.addFieldInt8(0, +keysSorted, 0);
  }
  static endMap(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createMap(builder, keysSorted) {
    Map$1.startMap(builder);
    Map$1.addKeysSorted(builder, keysSorted);
    return Map$1.endMap(builder);
  }
}
class Union {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsUnion(bb, obj) {
    return (obj || new Union()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsUnion(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new Union()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  mode() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readInt16(this.bb_pos + offset) : UnionMode.Sparse;
  }
  typeIds(index) {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.readInt32(this.bb.__vector(this.bb_pos + offset) + index * 4) : 0;
  }
  typeIdsLength() {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  typeIdsArray() {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? new Int32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
  }
  static startUnion(builder) {
    builder.startObject(2);
  }
  static addMode(builder, mode) {
    builder.addFieldInt16(0, mode, UnionMode.Sparse);
  }
  static addTypeIds(builder, typeIdsOffset) {
    builder.addFieldOffset(1, typeIdsOffset, 0);
  }
  static createTypeIdsVector(builder, data) {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addInt32(data[i]);
    }
    return builder.endVector();
  }
  static startTypeIdsVector(builder, numElems) {
    builder.startVector(4, numElems, 4);
  }
  static endUnion(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createUnion(builder, mode, typeIdsOffset) {
    Union.startUnion(builder);
    Union.addMode(builder, mode);
    Union.addTypeIds(builder, typeIdsOffset);
    return Union.endUnion(builder);
  }
}
class Int {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsInt(bb, obj) {
    return (obj || new Int()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsInt(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new Int()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  bitWidth() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  isSigned() {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
  }
  static startInt(builder) {
    builder.startObject(2);
  }
  static addBitWidth(builder, bitWidth) {
    builder.addFieldInt32(0, bitWidth, 0);
  }
  static addIsSigned(builder, isSigned) {
    builder.addFieldInt8(1, +isSigned, 0);
  }
  static endInt(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createInt(builder, bitWidth, isSigned) {
    Int.startInt(builder);
    Int.addBitWidth(builder, bitWidth);
    Int.addIsSigned(builder, isSigned);
    return Int.endInt(builder);
  }
}
class FloatingPoint {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsFloatingPoint(bb, obj) {
    return (obj || new FloatingPoint()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsFloatingPoint(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new FloatingPoint()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  precision() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readInt16(this.bb_pos + offset) : Precision.HALF;
  }
  static startFloatingPoint(builder) {
    builder.startObject(1);
  }
  static addPrecision(builder, precision) {
    builder.addFieldInt16(0, precision, Precision.HALF);
  }
  static endFloatingPoint(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createFloatingPoint(builder, precision) {
    FloatingPoint.startFloatingPoint(builder);
    FloatingPoint.addPrecision(builder, precision);
    return FloatingPoint.endFloatingPoint(builder);
  }
}
class Utf8$1 {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsUtf8(bb, obj) {
    return (obj || new Utf8$1()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsUtf8(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new Utf8$1()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static startUtf8(builder) {
    builder.startObject(0);
  }
  static endUtf8(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createUtf8(builder) {
    Utf8$1.startUtf8(builder);
    return Utf8$1.endUtf8(builder);
  }
}
class Binary$1 {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsBinary(bb, obj) {
    return (obj || new Binary$1()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsBinary(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new Binary$1()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static startBinary(builder) {
    builder.startObject(0);
  }
  static endBinary(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createBinary(builder) {
    Binary$1.startBinary(builder);
    return Binary$1.endBinary(builder);
  }
}
class FixedSizeBinary$1 {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsFixedSizeBinary(bb, obj) {
    return (obj || new FixedSizeBinary$1()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsFixedSizeBinary(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new FixedSizeBinary$1()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  byteWidth() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  static startFixedSizeBinary(builder) {
    builder.startObject(1);
  }
  static addByteWidth(builder, byteWidth) {
    builder.addFieldInt32(0, byteWidth, 0);
  }
  static endFixedSizeBinary(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createFixedSizeBinary(builder, byteWidth) {
    FixedSizeBinary$1.startFixedSizeBinary(builder);
    FixedSizeBinary$1.addByteWidth(builder, byteWidth);
    return FixedSizeBinary$1.endFixedSizeBinary(builder);
  }
}
class Bool$1 {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsBool(bb, obj) {
    return (obj || new Bool$1()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsBool(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new Bool$1()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static startBool(builder) {
    builder.startObject(0);
  }
  static endBool(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createBool(builder) {
    Bool$1.startBool(builder);
    return Bool$1.endBool(builder);
  }
}
class Decimal$1 {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsDecimal(bb, obj) {
    return (obj || new Decimal$1()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsDecimal(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new Decimal$1()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  precision() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  scale() {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
  }
  bitWidth() {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 128;
  }
  static startDecimal(builder) {
    builder.startObject(3);
  }
  static addPrecision(builder, precision) {
    builder.addFieldInt32(0, precision, 0);
  }
  static addScale(builder, scale) {
    builder.addFieldInt32(1, scale, 0);
  }
  static addBitWidth(builder, bitWidth) {
    builder.addFieldInt32(2, bitWidth, 128);
  }
  static endDecimal(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createDecimal(builder, precision, scale, bitWidth) {
    Decimal$1.startDecimal(builder);
    Decimal$1.addPrecision(builder, precision);
    Decimal$1.addScale(builder, scale);
    Decimal$1.addBitWidth(builder, bitWidth);
    return Decimal$1.endDecimal(builder);
  }
}
class Date$1 {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsDate(bb, obj) {
    return (obj || new Date$1()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsDate(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new Date$1()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  unit() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readInt16(this.bb_pos + offset) : DateUnit.MILLISECOND;
  }
  static startDate(builder) {
    builder.startObject(1);
  }
  static addUnit(builder, unit) {
    builder.addFieldInt16(0, unit, DateUnit.MILLISECOND);
  }
  static endDate(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createDate(builder, unit) {
    Date$1.startDate(builder);
    Date$1.addUnit(builder, unit);
    return Date$1.endDate(builder);
  }
}
class Time {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsTime(bb, obj) {
    return (obj || new Time()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsTime(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new Time()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  unit() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readInt16(this.bb_pos + offset) : TimeUnit.MILLISECOND;
  }
  bitWidth() {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 32;
  }
  static startTime(builder) {
    builder.startObject(2);
  }
  static addUnit(builder, unit) {
    builder.addFieldInt16(0, unit, TimeUnit.MILLISECOND);
  }
  static addBitWidth(builder, bitWidth) {
    builder.addFieldInt32(1, bitWidth, 32);
  }
  static endTime(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createTime(builder, unit, bitWidth) {
    Time.startTime(builder);
    Time.addUnit(builder, unit);
    Time.addBitWidth(builder, bitWidth);
    return Time.endTime(builder);
  }
}
class Timestamp {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsTimestamp(bb, obj) {
    return (obj || new Timestamp()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsTimestamp(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new Timestamp()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  unit() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readInt16(this.bb_pos + offset) : TimeUnit.SECOND;
  }
  timezone(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  static startTimestamp(builder) {
    builder.startObject(2);
  }
  static addUnit(builder, unit) {
    builder.addFieldInt16(0, unit, TimeUnit.SECOND);
  }
  static addTimezone(builder, timezoneOffset) {
    builder.addFieldOffset(1, timezoneOffset, 0);
  }
  static endTimestamp(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createTimestamp(builder, unit, timezoneOffset) {
    Timestamp.startTimestamp(builder);
    Timestamp.addUnit(builder, unit);
    Timestamp.addTimezone(builder, timezoneOffset);
    return Timestamp.endTimestamp(builder);
  }
}
class Interval {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsInterval(bb, obj) {
    return (obj || new Interval()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsInterval(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new Interval()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  unit() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readInt16(this.bb_pos + offset) : IntervalUnit.YEAR_MONTH;
  }
  static startInterval(builder) {
    builder.startObject(1);
  }
  static addUnit(builder, unit) {
    builder.addFieldInt16(0, unit, IntervalUnit.YEAR_MONTH);
  }
  static endInterval(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createInterval(builder, unit) {
    Interval.startInterval(builder);
    Interval.addUnit(builder, unit);
    return Interval.endInterval(builder);
  }
}
class KeyValue {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsKeyValue(bb, obj) {
    return (obj || new KeyValue()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsKeyValue(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new KeyValue()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  key(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  value(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  static startKeyValue(builder) {
    builder.startObject(2);
  }
  static addKey(builder, keyOffset) {
    builder.addFieldOffset(0, keyOffset, 0);
  }
  static addValue(builder, valueOffset) {
    builder.addFieldOffset(1, valueOffset, 0);
  }
  static endKeyValue(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createKeyValue(builder, keyOffset, valueOffset) {
    KeyValue.startKeyValue(builder);
    KeyValue.addKey(builder, keyOffset);
    KeyValue.addValue(builder, valueOffset);
    return KeyValue.endKeyValue(builder);
  }
}
class DictionaryEncoding {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsDictionaryEncoding(bb, obj) {
    return (obj || new DictionaryEncoding()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsDictionaryEncoding(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new DictionaryEncoding()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  id() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readInt64(this.bb_pos + offset) : this.bb.createLong(0, 0);
  }
  indexType(obj) {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? (obj || new Int()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
  }
  isOrdered() {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
  }
  dictionaryKind() {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? this.bb.readInt16(this.bb_pos + offset) : DictionaryKind.DenseArray;
  }
  static startDictionaryEncoding(builder) {
    builder.startObject(4);
  }
  static addId(builder, id) {
    builder.addFieldInt64(0, id, builder.createLong(0, 0));
  }
  static addIndexType(builder, indexTypeOffset) {
    builder.addFieldOffset(1, indexTypeOffset, 0);
  }
  static addIsOrdered(builder, isOrdered) {
    builder.addFieldInt8(2, +isOrdered, 0);
  }
  static addDictionaryKind(builder, dictionaryKind) {
    builder.addFieldInt16(3, dictionaryKind, DictionaryKind.DenseArray);
  }
  static endDictionaryEncoding(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createDictionaryEncoding(builder, id, indexTypeOffset, isOrdered, dictionaryKind) {
    DictionaryEncoding.startDictionaryEncoding(builder);
    DictionaryEncoding.addId(builder, id);
    DictionaryEncoding.addIndexType(builder, indexTypeOffset);
    DictionaryEncoding.addIsOrdered(builder, isOrdered);
    DictionaryEncoding.addDictionaryKind(builder, dictionaryKind);
    return DictionaryEncoding.endDictionaryEncoding(builder);
  }
}
class Field$1 {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsField(bb, obj) {
    return (obj || new Field$1()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsField(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new Field$1()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  name(optionalEncoding) {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
  }
  nullable() {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
  }
  typeType() {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? this.bb.readUint8(this.bb_pos + offset) : Type$1.NONE;
  }
  type(obj) {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? this.bb.__union(obj, this.bb_pos + offset) : null;
  }
  dictionary(obj) {
    const offset = this.bb.__offset(this.bb_pos, 12);
    return offset ? (obj || new DictionaryEncoding()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
  }
  children(index, obj) {
    const offset = this.bb.__offset(this.bb_pos, 14);
    return offset ? (obj || new Field$1()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
  }
  childrenLength() {
    const offset = this.bb.__offset(this.bb_pos, 14);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  customMetadata(index, obj) {
    const offset = this.bb.__offset(this.bb_pos, 16);
    return offset ? (obj || new KeyValue()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
  }
  customMetadataLength() {
    const offset = this.bb.__offset(this.bb_pos, 16);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  static startField(builder) {
    builder.startObject(7);
  }
  static addName(builder, nameOffset) {
    builder.addFieldOffset(0, nameOffset, 0);
  }
  static addNullable(builder, nullable) {
    builder.addFieldInt8(1, +nullable, 0);
  }
  static addTypeType(builder, typeType) {
    builder.addFieldInt8(2, typeType, Type$1.NONE);
  }
  static addType(builder, typeOffset) {
    builder.addFieldOffset(3, typeOffset, 0);
  }
  static addDictionary(builder, dictionaryOffset) {
    builder.addFieldOffset(4, dictionaryOffset, 0);
  }
  static addChildren(builder, childrenOffset) {
    builder.addFieldOffset(5, childrenOffset, 0);
  }
  static createChildrenVector(builder, data) {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addOffset(data[i]);
    }
    return builder.endVector();
  }
  static startChildrenVector(builder, numElems) {
    builder.startVector(4, numElems, 4);
  }
  static addCustomMetadata(builder, customMetadataOffset) {
    builder.addFieldOffset(6, customMetadataOffset, 0);
  }
  static createCustomMetadataVector(builder, data) {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addOffset(data[i]);
    }
    return builder.endVector();
  }
  static startCustomMetadataVector(builder, numElems) {
    builder.startVector(4, numElems, 4);
  }
  static endField(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createField(builder, nameOffset, nullable, typeType, typeOffset, dictionaryOffset, childrenOffset, customMetadataOffset) {
    Field$1.startField(builder);
    Field$1.addName(builder, nameOffset);
    Field$1.addNullable(builder, nullable);
    Field$1.addTypeType(builder, typeType);
    Field$1.addType(builder, typeOffset);
    Field$1.addDictionary(builder, dictionaryOffset);
    Field$1.addChildren(builder, childrenOffset);
    Field$1.addCustomMetadata(builder, customMetadataOffset);
    return Field$1.endField(builder);
  }
}
class Buffer2 {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  offset() {
    return this.bb.readInt64(this.bb_pos);
  }
  length() {
    return this.bb.readInt64(this.bb_pos + 8);
  }
  static createBuffer(builder, offset, length) {
    builder.prep(8, 16);
    builder.writeInt64(length);
    builder.writeInt64(offset);
    return builder.offset();
  }
}
class Schema$1 {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsSchema(bb, obj) {
    return (obj || new Schema$1()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsSchema(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new Schema$1()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  endianness() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readInt16(this.bb_pos + offset) : Endianness.Little;
  }
  fields(index, obj) {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? (obj || new Field$1()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
  }
  fieldsLength() {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  customMetadata(index, obj) {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? (obj || new KeyValue()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
  }
  customMetadataLength() {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  features(index) {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? this.bb.readInt64(this.bb.__vector(this.bb_pos + offset) + index * 8) : this.bb.createLong(0, 0);
  }
  featuresLength() {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  static startSchema(builder) {
    builder.startObject(4);
  }
  static addEndianness(builder, endianness) {
    builder.addFieldInt16(0, endianness, Endianness.Little);
  }
  static addFields(builder, fieldsOffset) {
    builder.addFieldOffset(1, fieldsOffset, 0);
  }
  static createFieldsVector(builder, data) {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addOffset(data[i]);
    }
    return builder.endVector();
  }
  static startFieldsVector(builder, numElems) {
    builder.startVector(4, numElems, 4);
  }
  static addCustomMetadata(builder, customMetadataOffset) {
    builder.addFieldOffset(2, customMetadataOffset, 0);
  }
  static createCustomMetadataVector(builder, data) {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addOffset(data[i]);
    }
    return builder.endVector();
  }
  static startCustomMetadataVector(builder, numElems) {
    builder.startVector(4, numElems, 4);
  }
  static addFeatures(builder, featuresOffset) {
    builder.addFieldOffset(3, featuresOffset, 0);
  }
  static createFeaturesVector(builder, data) {
    builder.startVector(8, data.length, 8);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addInt64(data[i]);
    }
    return builder.endVector();
  }
  static startFeaturesVector(builder, numElems) {
    builder.startVector(8, numElems, 8);
  }
  static endSchema(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static finishSchemaBuffer(builder, offset) {
    builder.finish(offset);
  }
  static finishSizePrefixedSchemaBuffer(builder, offset) {
    builder.finish(offset, void 0, true);
  }
  static createSchema(builder, endianness, fieldsOffset, customMetadataOffset, featuresOffset) {
    Schema$1.startSchema(builder);
    Schema$1.addEndianness(builder, endianness);
    Schema$1.addFields(builder, fieldsOffset);
    Schema$1.addCustomMetadata(builder, customMetadataOffset);
    Schema$1.addFeatures(builder, featuresOffset);
    return Schema$1.endSchema(builder);
  }
}
var CompressionType;
(function(CompressionType2) {
  CompressionType2[CompressionType2["LZ4_FRAME"] = 0] = "LZ4_FRAME";
  CompressionType2[CompressionType2["ZSTD"] = 1] = "ZSTD";
})(CompressionType || (CompressionType = {}));
var BodyCompressionMethod;
(function(BodyCompressionMethod2) {
  BodyCompressionMethod2[BodyCompressionMethod2["BUFFER"] = 0] = "BUFFER";
})(BodyCompressionMethod || (BodyCompressionMethod = {}));
var MessageHeader;
(function(MessageHeader2) {
  MessageHeader2[MessageHeader2["NONE"] = 0] = "NONE";
  MessageHeader2[MessageHeader2["Schema"] = 1] = "Schema";
  MessageHeader2[MessageHeader2["DictionaryBatch"] = 2] = "DictionaryBatch";
  MessageHeader2[MessageHeader2["RecordBatch"] = 3] = "RecordBatch";
  MessageHeader2[MessageHeader2["Tensor"] = 4] = "Tensor";
  MessageHeader2[MessageHeader2["SparseTensor"] = 5] = "SparseTensor";
})(MessageHeader || (MessageHeader = {}));
class FieldNode$1 {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  length() {
    return this.bb.readInt64(this.bb_pos);
  }
  nullCount() {
    return this.bb.readInt64(this.bb_pos + 8);
  }
  static createFieldNode(builder, length, null_count) {
    builder.prep(8, 16);
    builder.writeInt64(null_count);
    builder.writeInt64(length);
    return builder.offset();
  }
}
class BodyCompression {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsBodyCompression(bb, obj) {
    return (obj || new BodyCompression()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsBodyCompression(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new BodyCompression()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  codec() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readInt8(this.bb_pos + offset) : CompressionType.LZ4_FRAME;
  }
  method() {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.readInt8(this.bb_pos + offset) : BodyCompressionMethod.BUFFER;
  }
  static startBodyCompression(builder) {
    builder.startObject(2);
  }
  static addCodec(builder, codec) {
    builder.addFieldInt8(0, codec, CompressionType.LZ4_FRAME);
  }
  static addMethod(builder, method) {
    builder.addFieldInt8(1, method, BodyCompressionMethod.BUFFER);
  }
  static endBodyCompression(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createBodyCompression(builder, codec, method) {
    BodyCompression.startBodyCompression(builder);
    BodyCompression.addCodec(builder, codec);
    BodyCompression.addMethod(builder, method);
    return BodyCompression.endBodyCompression(builder);
  }
}
class RecordBatch$2 {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsRecordBatch(bb, obj) {
    return (obj || new RecordBatch$2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsRecordBatch(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new RecordBatch$2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  length() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readInt64(this.bb_pos + offset) : this.bb.createLong(0, 0);
  }
  nodes(index, obj) {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? (obj || new FieldNode$1()).__init(this.bb.__vector(this.bb_pos + offset) + index * 16, this.bb) : null;
  }
  nodesLength() {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  buffers(index, obj) {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? (obj || new Buffer2()).__init(this.bb.__vector(this.bb_pos + offset) + index * 16, this.bb) : null;
  }
  buffersLength() {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  compression(obj) {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? (obj || new BodyCompression()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
  }
  static startRecordBatch(builder) {
    builder.startObject(4);
  }
  static addLength(builder, length) {
    builder.addFieldInt64(0, length, builder.createLong(0, 0));
  }
  static addNodes(builder, nodesOffset) {
    builder.addFieldOffset(1, nodesOffset, 0);
  }
  static startNodesVector(builder, numElems) {
    builder.startVector(16, numElems, 8);
  }
  static addBuffers(builder, buffersOffset) {
    builder.addFieldOffset(2, buffersOffset, 0);
  }
  static startBuffersVector(builder, numElems) {
    builder.startVector(16, numElems, 8);
  }
  static addCompression(builder, compressionOffset) {
    builder.addFieldOffset(3, compressionOffset, 0);
  }
  static endRecordBatch(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createRecordBatch(builder, length, nodesOffset, buffersOffset, compressionOffset) {
    RecordBatch$2.startRecordBatch(builder);
    RecordBatch$2.addLength(builder, length);
    RecordBatch$2.addNodes(builder, nodesOffset);
    RecordBatch$2.addBuffers(builder, buffersOffset);
    RecordBatch$2.addCompression(builder, compressionOffset);
    return RecordBatch$2.endRecordBatch(builder);
  }
}
class DictionaryBatch$1 {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsDictionaryBatch(bb, obj) {
    return (obj || new DictionaryBatch$1()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsDictionaryBatch(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new DictionaryBatch$1()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  id() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readInt64(this.bb_pos + offset) : this.bb.createLong(0, 0);
  }
  data(obj) {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? (obj || new RecordBatch$2()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
  }
  isDelta() {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
  }
  static startDictionaryBatch(builder) {
    builder.startObject(3);
  }
  static addId(builder, id) {
    builder.addFieldInt64(0, id, builder.createLong(0, 0));
  }
  static addData(builder, dataOffset) {
    builder.addFieldOffset(1, dataOffset, 0);
  }
  static addIsDelta(builder, isDelta) {
    builder.addFieldInt8(2, +isDelta, 0);
  }
  static endDictionaryBatch(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static createDictionaryBatch(builder, id, dataOffset, isDelta) {
    DictionaryBatch$1.startDictionaryBatch(builder);
    DictionaryBatch$1.addId(builder, id);
    DictionaryBatch$1.addData(builder, dataOffset);
    DictionaryBatch$1.addIsDelta(builder, isDelta);
    return DictionaryBatch$1.endDictionaryBatch(builder);
  }
}
class Message$1 {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsMessage(bb, obj) {
    return (obj || new Message$1()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsMessage(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new Message$1()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  version() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readInt16(this.bb_pos + offset) : MetadataVersion.V1;
  }
  headerType() {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.readUint8(this.bb_pos + offset) : MessageHeader.NONE;
  }
  header(obj) {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? this.bb.__union(obj, this.bb_pos + offset) : null;
  }
  bodyLength() {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? this.bb.readInt64(this.bb_pos + offset) : this.bb.createLong(0, 0);
  }
  customMetadata(index, obj) {
    const offset = this.bb.__offset(this.bb_pos, 12);
    return offset ? (obj || new KeyValue()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
  }
  customMetadataLength() {
    const offset = this.bb.__offset(this.bb_pos, 12);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  static startMessage(builder) {
    builder.startObject(5);
  }
  static addVersion(builder, version) {
    builder.addFieldInt16(0, version, MetadataVersion.V1);
  }
  static addHeaderType(builder, headerType) {
    builder.addFieldInt8(1, headerType, MessageHeader.NONE);
  }
  static addHeader(builder, headerOffset) {
    builder.addFieldOffset(2, headerOffset, 0);
  }
  static addBodyLength(builder, bodyLength) {
    builder.addFieldInt64(3, bodyLength, builder.createLong(0, 0));
  }
  static addCustomMetadata(builder, customMetadataOffset) {
    builder.addFieldOffset(4, customMetadataOffset, 0);
  }
  static createCustomMetadataVector(builder, data) {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addOffset(data[i]);
    }
    return builder.endVector();
  }
  static startCustomMetadataVector(builder, numElems) {
    builder.startVector(4, numElems, 4);
  }
  static endMessage(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static finishMessageBuffer(builder, offset) {
    builder.finish(offset);
  }
  static finishSizePrefixedMessageBuffer(builder, offset) {
    builder.finish(offset, void 0, true);
  }
  static createMessage(builder, version, headerType, headerOffset, bodyLength, customMetadataOffset) {
    Message$1.startMessage(builder);
    Message$1.addVersion(builder, version);
    Message$1.addHeaderType(builder, headerType);
    Message$1.addHeader(builder, headerOffset);
    Message$1.addBodyLength(builder, bodyLength);
    Message$1.addCustomMetadata(builder, customMetadataOffset);
    return Message$1.endMessage(builder);
  }
}
var Type;
(function(Type2) {
  Type2[Type2["NONE"] = 0] = "NONE";
  Type2[Type2["Null"] = 1] = "Null";
  Type2[Type2["Int"] = 2] = "Int";
  Type2[Type2["Float"] = 3] = "Float";
  Type2[Type2["Binary"] = 4] = "Binary";
  Type2[Type2["Utf8"] = 5] = "Utf8";
  Type2[Type2["Bool"] = 6] = "Bool";
  Type2[Type2["Decimal"] = 7] = "Decimal";
  Type2[Type2["Date"] = 8] = "Date";
  Type2[Type2["Time"] = 9] = "Time";
  Type2[Type2["Timestamp"] = 10] = "Timestamp";
  Type2[Type2["Interval"] = 11] = "Interval";
  Type2[Type2["List"] = 12] = "List";
  Type2[Type2["Struct"] = 13] = "Struct";
  Type2[Type2["Union"] = 14] = "Union";
  Type2[Type2["FixedSizeBinary"] = 15] = "FixedSizeBinary";
  Type2[Type2["FixedSizeList"] = 16] = "FixedSizeList";
  Type2[Type2["Map"] = 17] = "Map";
  Type2[Type2["Dictionary"] = -1] = "Dictionary";
  Type2[Type2["Int8"] = -2] = "Int8";
  Type2[Type2["Int16"] = -3] = "Int16";
  Type2[Type2["Int32"] = -4] = "Int32";
  Type2[Type2["Int64"] = -5] = "Int64";
  Type2[Type2["Uint8"] = -6] = "Uint8";
  Type2[Type2["Uint16"] = -7] = "Uint16";
  Type2[Type2["Uint32"] = -8] = "Uint32";
  Type2[Type2["Uint64"] = -9] = "Uint64";
  Type2[Type2["Float16"] = -10] = "Float16";
  Type2[Type2["Float32"] = -11] = "Float32";
  Type2[Type2["Float64"] = -12] = "Float64";
  Type2[Type2["DateDay"] = -13] = "DateDay";
  Type2[Type2["DateMillisecond"] = -14] = "DateMillisecond";
  Type2[Type2["TimestampSecond"] = -15] = "TimestampSecond";
  Type2[Type2["TimestampMillisecond"] = -16] = "TimestampMillisecond";
  Type2[Type2["TimestampMicrosecond"] = -17] = "TimestampMicrosecond";
  Type2[Type2["TimestampNanosecond"] = -18] = "TimestampNanosecond";
  Type2[Type2["TimeSecond"] = -19] = "TimeSecond";
  Type2[Type2["TimeMillisecond"] = -20] = "TimeMillisecond";
  Type2[Type2["TimeMicrosecond"] = -21] = "TimeMicrosecond";
  Type2[Type2["TimeNanosecond"] = -22] = "TimeNanosecond";
  Type2[Type2["DenseUnion"] = -23] = "DenseUnion";
  Type2[Type2["SparseUnion"] = -24] = "SparseUnion";
  Type2[Type2["IntervalDayTime"] = -25] = "IntervalDayTime";
  Type2[Type2["IntervalYearMonth"] = -26] = "IntervalYearMonth";
})(Type || (Type = {}));
var BufferType;
(function(BufferType2) {
  BufferType2[BufferType2["OFFSET"] = 0] = "OFFSET";
  BufferType2[BufferType2["DATA"] = 1] = "DATA";
  BufferType2[BufferType2["VALIDITY"] = 2] = "VALIDITY";
  BufferType2[BufferType2["TYPE"] = 3] = "TYPE";
})(BufferType || (BufferType = {}));
function getBool$1(_data, _index, byte, bit) {
  return (byte & 1 << bit) !== 0;
}
function getBit(_data, _index, byte, bit) {
  return (byte & 1 << bit) >> bit;
}
function setBool$1(bytes, index, value) {
  return value ? !!(bytes[index >> 3] |= 1 << index % 8) || true : !(bytes[index >> 3] &= ~(1 << index % 8)) && false;
}
function truncateBitmap(offset, length, bitmap) {
  const alignedSize = bitmap.byteLength + 7 & ~7;
  if (offset > 0 || bitmap.byteLength < alignedSize) {
    const bytes = new Uint8Array(alignedSize);
    bytes.set(offset % 8 === 0 ? bitmap.subarray(offset >> 3) : packBools(new BitIterator(bitmap, offset, length, null, getBool$1)).subarray(0, alignedSize));
    return bytes;
  }
  return bitmap;
}
function packBools(values) {
  const xs = [];
  let i = 0, bit = 0, byte = 0;
  for (const value of values) {
    value && (byte |= 1 << bit);
    if (++bit === 8) {
      xs[i++] = byte;
      byte = bit = 0;
    }
  }
  if (i === 0 || bit > 0) {
    xs[i++] = byte;
  }
  const b = new Uint8Array(xs.length + 7 & ~7);
  b.set(xs);
  return b;
}
class BitIterator {
  constructor(bytes, begin, length, context, get) {
    this.bytes = bytes;
    this.length = length;
    this.context = context;
    this.get = get;
    this.bit = begin % 8;
    this.byteIndex = begin >> 3;
    this.byte = bytes[this.byteIndex++];
    this.index = 0;
  }
  next() {
    if (this.index < this.length) {
      if (this.bit === 8) {
        this.bit = 0;
        this.byte = this.bytes[this.byteIndex++];
      }
      return {
        value: this.get(this.context, this.index++, this.byte, this.bit++)
      };
    }
    return { done: true, value: null };
  }
  [Symbol.iterator]() {
    return this;
  }
}
function popcnt_bit_range(data, lhs, rhs) {
  if (rhs - lhs <= 0) {
    return 0;
  }
  if (rhs - lhs < 8) {
    let sum2 = 0;
    for (const bit of new BitIterator(data, lhs, rhs - lhs, data, getBit)) {
      sum2 += bit;
    }
    return sum2;
  }
  const rhsInside = rhs >> 3 << 3;
  const lhsInside = lhs + (lhs % 8 === 0 ? 0 : 8 - lhs % 8);
  return popcnt_bit_range(data, lhs, lhsInside) + popcnt_bit_range(data, rhsInside, rhs) + popcnt_array(data, lhsInside >> 3, rhsInside - lhsInside >> 3);
}
function popcnt_array(arr, byteOffset, byteLength) {
  let cnt = 0, pos = byteOffset | 0;
  const view = new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
  const len = byteLength === void 0 ? arr.byteLength : pos + byteLength;
  while (len - pos >= 4) {
    cnt += popcnt_uint32(view.getUint32(pos));
    pos += 4;
  }
  while (len - pos >= 2) {
    cnt += popcnt_uint32(view.getUint16(pos));
    pos += 2;
  }
  while (len - pos >= 1) {
    cnt += popcnt_uint32(view.getUint8(pos));
    pos += 1;
  }
  return cnt;
}
function popcnt_uint32(uint32) {
  let i = uint32 | 0;
  i = i - (i >>> 1 & 1431655765);
  i = (i & 858993459) + (i >>> 2 & 858993459);
  return (i + (i >>> 4) & 252645135) * 16843009 >>> 24;
}
var util_bit_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getBool: getBool$1,
  getBit,
  setBool: setBool$1,
  truncateBitmap,
  packBools,
  BitIterator,
  popcnt_bit_range,
  popcnt_array,
  popcnt_uint32
}, Symbol.toStringTag, { value: "Module" }));
class DataType {
  static isNull(x) {
    return (x === null || x === void 0 ? void 0 : x.typeId) === Type.Null;
  }
  static isInt(x) {
    return (x === null || x === void 0 ? void 0 : x.typeId) === Type.Int;
  }
  static isFloat(x) {
    return (x === null || x === void 0 ? void 0 : x.typeId) === Type.Float;
  }
  static isBinary(x) {
    return (x === null || x === void 0 ? void 0 : x.typeId) === Type.Binary;
  }
  static isUtf8(x) {
    return (x === null || x === void 0 ? void 0 : x.typeId) === Type.Utf8;
  }
  static isBool(x) {
    return (x === null || x === void 0 ? void 0 : x.typeId) === Type.Bool;
  }
  static isDecimal(x) {
    return (x === null || x === void 0 ? void 0 : x.typeId) === Type.Decimal;
  }
  static isDate(x) {
    return (x === null || x === void 0 ? void 0 : x.typeId) === Type.Date;
  }
  static isTime(x) {
    return (x === null || x === void 0 ? void 0 : x.typeId) === Type.Time;
  }
  static isTimestamp(x) {
    return (x === null || x === void 0 ? void 0 : x.typeId) === Type.Timestamp;
  }
  static isInterval(x) {
    return (x === null || x === void 0 ? void 0 : x.typeId) === Type.Interval;
  }
  static isList(x) {
    return (x === null || x === void 0 ? void 0 : x.typeId) === Type.List;
  }
  static isStruct(x) {
    return (x === null || x === void 0 ? void 0 : x.typeId) === Type.Struct;
  }
  static isUnion(x) {
    return (x === null || x === void 0 ? void 0 : x.typeId) === Type.Union;
  }
  static isFixedSizeBinary(x) {
    return (x === null || x === void 0 ? void 0 : x.typeId) === Type.FixedSizeBinary;
  }
  static isFixedSizeList(x) {
    return (x === null || x === void 0 ? void 0 : x.typeId) === Type.FixedSizeList;
  }
  static isMap(x) {
    return (x === null || x === void 0 ? void 0 : x.typeId) === Type.Map;
  }
  static isDictionary(x) {
    return (x === null || x === void 0 ? void 0 : x.typeId) === Type.Dictionary;
  }
  get typeId() {
    return Type.NONE;
  }
}
DataType[Symbol.toStringTag] = ((proto) => {
  proto.children = null;
  proto.ArrayType = Array;
  return proto[Symbol.toStringTag] = "DataType";
})(DataType.prototype);
class Null extends DataType {
  toString() {
    return `Null`;
  }
  get typeId() {
    return Type.Null;
  }
}
Null[Symbol.toStringTag] = ((proto) => {
  return proto[Symbol.toStringTag] = "Null";
})(Null.prototype);
class Int_ extends DataType {
  constructor(isSigned, bitWidth) {
    super();
    this.isSigned = isSigned;
    this.bitWidth = bitWidth;
  }
  get typeId() {
    return Type.Int;
  }
  get ArrayType() {
    switch (this.bitWidth) {
      case 8:
        return this.isSigned ? Int8Array : Uint8Array;
      case 16:
        return this.isSigned ? Int16Array : Uint16Array;
      case 32:
        return this.isSigned ? Int32Array : Uint32Array;
      case 64:
        return this.isSigned ? Int32Array : Uint32Array;
    }
    throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
  }
  toString() {
    return `${this.isSigned ? `I` : `Ui`}nt${this.bitWidth}`;
  }
}
Int_[Symbol.toStringTag] = ((proto) => {
  proto.isSigned = null;
  proto.bitWidth = null;
  return proto[Symbol.toStringTag] = "Int";
})(Int_.prototype);
class Int8 extends Int_ {
  constructor() {
    super(true, 8);
  }
}
class Int16 extends Int_ {
  constructor() {
    super(true, 16);
  }
}
class Int32 extends Int_ {
  constructor() {
    super(true, 32);
  }
}
class Int64$1 extends Int_ {
  constructor() {
    super(true, 64);
  }
}
class Uint8 extends Int_ {
  constructor() {
    super(false, 8);
  }
}
class Uint16 extends Int_ {
  constructor() {
    super(false, 16);
  }
}
class Uint32 extends Int_ {
  constructor() {
    super(false, 32);
  }
}
class Uint64$1 extends Int_ {
  constructor() {
    super(false, 64);
  }
}
Object.defineProperty(Int8.prototype, "ArrayType", { value: Int8Array });
Object.defineProperty(Int16.prototype, "ArrayType", { value: Int16Array });
Object.defineProperty(Int32.prototype, "ArrayType", { value: Int32Array });
Object.defineProperty(Int64$1.prototype, "ArrayType", { value: Int32Array });
Object.defineProperty(Uint8.prototype, "ArrayType", { value: Uint8Array });
Object.defineProperty(Uint16.prototype, "ArrayType", { value: Uint16Array });
Object.defineProperty(Uint32.prototype, "ArrayType", { value: Uint32Array });
Object.defineProperty(Uint64$1.prototype, "ArrayType", { value: Uint32Array });
class Float extends DataType {
  constructor(precision) {
    super();
    this.precision = precision;
  }
  get typeId() {
    return Type.Float;
  }
  get ArrayType() {
    switch (this.precision) {
      case Precision.HALF:
        return Uint16Array;
      case Precision.SINGLE:
        return Float32Array;
      case Precision.DOUBLE:
        return Float64Array;
    }
    throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
  }
  toString() {
    return `Float${this.precision << 5 || 16}`;
  }
}
Float[Symbol.toStringTag] = ((proto) => {
  proto.precision = null;
  return proto[Symbol.toStringTag] = "Float";
})(Float.prototype);
class Float16 extends Float {
  constructor() {
    super(Precision.HALF);
  }
}
class Float32 extends Float {
  constructor() {
    super(Precision.SINGLE);
  }
}
class Float64 extends Float {
  constructor() {
    super(Precision.DOUBLE);
  }
}
Object.defineProperty(Float16.prototype, "ArrayType", { value: Uint16Array });
Object.defineProperty(Float32.prototype, "ArrayType", { value: Float32Array });
Object.defineProperty(Float64.prototype, "ArrayType", { value: Float64Array });
class Binary extends DataType {
  constructor() {
    super();
  }
  get typeId() {
    return Type.Binary;
  }
  toString() {
    return `Binary`;
  }
}
Binary[Symbol.toStringTag] = ((proto) => {
  proto.ArrayType = Uint8Array;
  return proto[Symbol.toStringTag] = "Binary";
})(Binary.prototype);
class Utf8 extends DataType {
  constructor() {
    super();
  }
  get typeId() {
    return Type.Utf8;
  }
  toString() {
    return `Utf8`;
  }
}
Utf8[Symbol.toStringTag] = ((proto) => {
  proto.ArrayType = Uint8Array;
  return proto[Symbol.toStringTag] = "Utf8";
})(Utf8.prototype);
class Bool extends DataType {
  constructor() {
    super();
  }
  get typeId() {
    return Type.Bool;
  }
  toString() {
    return `Bool`;
  }
}
Bool[Symbol.toStringTag] = ((proto) => {
  proto.ArrayType = Uint8Array;
  return proto[Symbol.toStringTag] = "Bool";
})(Bool.prototype);
class Decimal extends DataType {
  constructor(scale, precision) {
    super();
    this.scale = scale;
    this.precision = precision;
  }
  get typeId() {
    return Type.Decimal;
  }
  toString() {
    return `Decimal[${this.precision}e${this.scale > 0 ? `+` : ``}${this.scale}]`;
  }
}
Decimal[Symbol.toStringTag] = ((proto) => {
  proto.scale = null;
  proto.precision = null;
  proto.ArrayType = Uint32Array;
  return proto[Symbol.toStringTag] = "Decimal";
})(Decimal.prototype);
class Date_ extends DataType {
  constructor(unit) {
    super();
    this.unit = unit;
  }
  get typeId() {
    return Type.Date;
  }
  toString() {
    return `Date${(this.unit + 1) * 32}<${DateUnit[this.unit]}>`;
  }
}
Date_[Symbol.toStringTag] = ((proto) => {
  proto.unit = null;
  proto.ArrayType = Int32Array;
  return proto[Symbol.toStringTag] = "Date";
})(Date_.prototype);
class DateDay extends Date_ {
  constructor() {
    super(DateUnit.DAY);
  }
}
class DateMillisecond extends Date_ {
  constructor() {
    super(DateUnit.MILLISECOND);
  }
}
class Time_ extends DataType {
  constructor(unit, bitWidth) {
    super();
    this.unit = unit;
    this.bitWidth = bitWidth;
  }
  get typeId() {
    return Type.Time;
  }
  toString() {
    return `Time${this.bitWidth}<${TimeUnit[this.unit]}>`;
  }
}
Time_[Symbol.toStringTag] = ((proto) => {
  proto.unit = null;
  proto.bitWidth = null;
  proto.ArrayType = Int32Array;
  return proto[Symbol.toStringTag] = "Time";
})(Time_.prototype);
class Timestamp_ extends DataType {
  constructor(unit, timezone) {
    super();
    this.unit = unit;
    this.timezone = timezone;
  }
  get typeId() {
    return Type.Timestamp;
  }
  toString() {
    return `Timestamp<${TimeUnit[this.unit]}${this.timezone ? `, ${this.timezone}` : ``}>`;
  }
}
Timestamp_[Symbol.toStringTag] = ((proto) => {
  proto.unit = null;
  proto.timezone = null;
  proto.ArrayType = Int32Array;
  return proto[Symbol.toStringTag] = "Timestamp";
})(Timestamp_.prototype);
class Interval_ extends DataType {
  constructor(unit) {
    super();
    this.unit = unit;
  }
  get typeId() {
    return Type.Interval;
  }
  toString() {
    return `Interval<${IntervalUnit[this.unit]}>`;
  }
}
Interval_[Symbol.toStringTag] = ((proto) => {
  proto.unit = null;
  proto.ArrayType = Int32Array;
  return proto[Symbol.toStringTag] = "Interval";
})(Interval_.prototype);
class List extends DataType {
  constructor(child) {
    super();
    this.children = [child];
  }
  get typeId() {
    return Type.List;
  }
  toString() {
    return `List<${this.valueType}>`;
  }
  get valueType() {
    return this.children[0].type;
  }
  get valueField() {
    return this.children[0];
  }
  get ArrayType() {
    return this.valueType.ArrayType;
  }
}
List[Symbol.toStringTag] = ((proto) => {
  proto.children = null;
  return proto[Symbol.toStringTag] = "List";
})(List.prototype);
class Struct extends DataType {
  constructor(children) {
    super();
    this.children = children;
  }
  get typeId() {
    return Type.Struct;
  }
  toString() {
    return `Struct<{${this.children.map((f) => `${f.name}:${f.type}`).join(`, `)}}>`;
  }
}
Struct[Symbol.toStringTag] = ((proto) => {
  proto.children = null;
  return proto[Symbol.toStringTag] = "Struct";
})(Struct.prototype);
class Union_ extends DataType {
  constructor(mode, typeIds, children) {
    super();
    this.mode = mode;
    this.children = children;
    this.typeIds = typeIds = Int32Array.from(typeIds);
    this.typeIdToChildIndex = typeIds.reduce((typeIdToChildIndex, typeId, idx) => {
      return (typeIdToChildIndex[typeId] = idx) && typeIdToChildIndex || typeIdToChildIndex;
    }, /* @__PURE__ */ Object.create(null));
  }
  get typeId() {
    return Type.Union;
  }
  toString() {
    return `${this[Symbol.toStringTag]}<${this.children.map((x) => `${x.type}`).join(` | `)}>`;
  }
}
Union_[Symbol.toStringTag] = ((proto) => {
  proto.mode = null;
  proto.typeIds = null;
  proto.children = null;
  proto.typeIdToChildIndex = null;
  proto.ArrayType = Int8Array;
  return proto[Symbol.toStringTag] = "Union";
})(Union_.prototype);
class FixedSizeBinary extends DataType {
  constructor(byteWidth) {
    super();
    this.byteWidth = byteWidth;
  }
  get typeId() {
    return Type.FixedSizeBinary;
  }
  toString() {
    return `FixedSizeBinary[${this.byteWidth}]`;
  }
}
FixedSizeBinary[Symbol.toStringTag] = ((proto) => {
  proto.byteWidth = null;
  proto.ArrayType = Uint8Array;
  return proto[Symbol.toStringTag] = "FixedSizeBinary";
})(FixedSizeBinary.prototype);
class FixedSizeList extends DataType {
  constructor(listSize, child) {
    super();
    this.listSize = listSize;
    this.children = [child];
  }
  get typeId() {
    return Type.FixedSizeList;
  }
  get valueType() {
    return this.children[0].type;
  }
  get valueField() {
    return this.children[0];
  }
  get ArrayType() {
    return this.valueType.ArrayType;
  }
  toString() {
    return `FixedSizeList[${this.listSize}]<${this.valueType}>`;
  }
}
FixedSizeList[Symbol.toStringTag] = ((proto) => {
  proto.children = null;
  proto.listSize = null;
  return proto[Symbol.toStringTag] = "FixedSizeList";
})(FixedSizeList.prototype);
class Map_ extends DataType {
  constructor(child, keysSorted = false) {
    super();
    this.children = [child];
    this.keysSorted = keysSorted;
  }
  get typeId() {
    return Type.Map;
  }
  get keyType() {
    return this.children[0].type.children[0].type;
  }
  get valueType() {
    return this.children[0].type.children[1].type;
  }
  toString() {
    return `Map<{${this.children[0].type.children.map((f) => `${f.name}:${f.type}`).join(`, `)}}>`;
  }
}
Map_[Symbol.toStringTag] = ((proto) => {
  proto.children = null;
  proto.keysSorted = null;
  return proto[Symbol.toStringTag] = "Map_";
})(Map_.prototype);
const getId = ((atomicDictionaryId) => () => ++atomicDictionaryId)(-1);
class Dictionary extends DataType {
  constructor(dictionary, indices, id, isOrdered) {
    super();
    this.indices = indices;
    this.dictionary = dictionary;
    this.isOrdered = isOrdered || false;
    this.id = id == null ? getId() : typeof id === "number" ? id : id.low;
  }
  get typeId() {
    return Type.Dictionary;
  }
  get children() {
    return this.dictionary.children;
  }
  get valueType() {
    return this.dictionary;
  }
  get ArrayType() {
    return this.dictionary.ArrayType;
  }
  toString() {
    return `Dictionary<${this.indices}, ${this.dictionary}>`;
  }
}
Dictionary[Symbol.toStringTag] = ((proto) => {
  proto.id = null;
  proto.indices = null;
  proto.isOrdered = null;
  proto.dictionary = null;
  return proto[Symbol.toStringTag] = "Dictionary";
})(Dictionary.prototype);
function strideForType(type) {
  const t = type;
  switch (type.typeId) {
    case Type.Decimal:
      return 4;
    case Type.Timestamp:
      return 2;
    case Type.Date:
      return 1 + t.unit;
    case Type.Interval:
      return 1 + t.unit;
    case Type.Int:
      return 1 + +(t.bitWidth > 32);
    case Type.Time:
      return 1 + +(t.bitWidth > 32);
    case Type.FixedSizeList:
      return t.listSize;
    case Type.FixedSizeBinary:
      return t.byteWidth;
    default:
      return 1;
  }
}
const kUnknownNullCount = -1;
class Data {
  constructor(type, offset, length, nullCount, buffers, childData, dictionary) {
    this.type = type;
    this.dictionary = dictionary;
    this.offset = Math.floor(Math.max(offset || 0, 0));
    this.length = Math.floor(Math.max(length || 0, 0));
    this._nullCount = Math.floor(Math.max(nullCount || 0, -1));
    this.childData = (childData || []).map((x) => x instanceof Data ? x : x.data);
    let buffer;
    if (buffers instanceof Data) {
      this.stride = buffers.stride;
      this.values = buffers.values;
      this.typeIds = buffers.typeIds;
      this.nullBitmap = buffers.nullBitmap;
      this.valueOffsets = buffers.valueOffsets;
    } else {
      this.stride = strideForType(type);
      if (buffers) {
        (buffer = buffers[0]) && (this.valueOffsets = buffer);
        (buffer = buffers[1]) && (this.values = buffer);
        (buffer = buffers[2]) && (this.nullBitmap = buffer);
        (buffer = buffers[3]) && (this.typeIds = buffer);
      }
    }
  }
  get typeId() {
    return this.type.typeId;
  }
  get ArrayType() {
    return this.type.ArrayType;
  }
  get buffers() {
    return [this.valueOffsets, this.values, this.nullBitmap, this.typeIds];
  }
  get byteLength() {
    let byteLength = 0;
    const { valueOffsets, values, nullBitmap, typeIds } = this;
    valueOffsets && (byteLength += valueOffsets.byteLength);
    values && (byteLength += values.byteLength);
    nullBitmap && (byteLength += nullBitmap.byteLength);
    typeIds && (byteLength += typeIds.byteLength);
    return this.childData.reduce((byteLength2, child) => byteLength2 + child.byteLength, byteLength);
  }
  get nullCount() {
    let nullCount = this._nullCount;
    let nullBitmap;
    if (nullCount <= kUnknownNullCount && (nullBitmap = this.nullBitmap)) {
      this._nullCount = nullCount = this.length - popcnt_bit_range(nullBitmap, this.offset, this.offset + this.length);
    }
    return nullCount;
  }
  clone(type, offset = this.offset, length = this.length, nullCount = this._nullCount, buffers = this, childData = this.childData) {
    return new Data(type, offset, length, nullCount, buffers, childData, this.dictionary);
  }
  slice(offset, length) {
    const { stride, typeId, childData } = this;
    const nullCount = +(this._nullCount === 0) - 1;
    const childStride = typeId === 16 ? stride : 1;
    const buffers = this._sliceBuffers(offset, length, stride, typeId);
    return this.clone(
      this.type,
      this.offset + offset,
      length,
      nullCount,
      buffers,
      !childData.length || this.valueOffsets ? childData : this._sliceChildren(childData, childStride * offset, childStride * length)
    );
  }
  _changeLengthAndBackfillNullBitmap(newLength) {
    if (this.typeId === Type.Null) {
      return this.clone(this.type, 0, newLength, 0);
    }
    const { length, nullCount } = this;
    const bitmap = new Uint8Array((newLength + 63 & ~63) >> 3).fill(255, 0, length >> 3);
    bitmap[length >> 3] = (1 << length - (length & ~7)) - 1;
    if (nullCount > 0) {
      bitmap.set(truncateBitmap(this.offset, length, this.nullBitmap), 0);
    }
    const buffers = this.buffers;
    buffers[BufferType.VALIDITY] = bitmap;
    return this.clone(this.type, 0, newLength, nullCount + (newLength - length), buffers);
  }
  _sliceBuffers(offset, length, stride, typeId) {
    let arr;
    const { buffers } = this;
    (arr = buffers[BufferType.TYPE]) && (buffers[BufferType.TYPE] = arr.subarray(offset, offset + length));
    (arr = buffers[BufferType.OFFSET]) && (buffers[BufferType.OFFSET] = arr.subarray(offset, offset + length + 1)) || (arr = buffers[BufferType.DATA]) && (buffers[BufferType.DATA] = typeId === 6 ? arr : arr.subarray(stride * offset, stride * (offset + length)));
    return buffers;
  }
  _sliceChildren(childData, offset, length) {
    return childData.map((child) => child.slice(offset, length));
  }
  static new(type, offset, length, nullCount, buffers, childData, dictionary) {
    if (buffers instanceof Data) {
      buffers = buffers.buffers;
    } else if (!buffers) {
      buffers = [];
    }
    switch (type.typeId) {
      case Type.Null:
        return Data.Null(type, offset, length);
      case Type.Int:
        return Data.Int(type, offset, length, nullCount || 0, buffers[BufferType.VALIDITY], buffers[BufferType.DATA] || []);
      case Type.Dictionary:
        return Data.Dictionary(type, offset, length, nullCount || 0, buffers[BufferType.VALIDITY], buffers[BufferType.DATA] || [], dictionary);
      case Type.Float:
        return Data.Float(type, offset, length, nullCount || 0, buffers[BufferType.VALIDITY], buffers[BufferType.DATA] || []);
      case Type.Bool:
        return Data.Bool(type, offset, length, nullCount || 0, buffers[BufferType.VALIDITY], buffers[BufferType.DATA] || []);
      case Type.Decimal:
        return Data.Decimal(type, offset, length, nullCount || 0, buffers[BufferType.VALIDITY], buffers[BufferType.DATA] || []);
      case Type.Date:
        return Data.Date(type, offset, length, nullCount || 0, buffers[BufferType.VALIDITY], buffers[BufferType.DATA] || []);
      case Type.Time:
        return Data.Time(type, offset, length, nullCount || 0, buffers[BufferType.VALIDITY], buffers[BufferType.DATA] || []);
      case Type.Timestamp:
        return Data.Timestamp(type, offset, length, nullCount || 0, buffers[BufferType.VALIDITY], buffers[BufferType.DATA] || []);
      case Type.Interval:
        return Data.Interval(type, offset, length, nullCount || 0, buffers[BufferType.VALIDITY], buffers[BufferType.DATA] || []);
      case Type.FixedSizeBinary:
        return Data.FixedSizeBinary(type, offset, length, nullCount || 0, buffers[BufferType.VALIDITY], buffers[BufferType.DATA] || []);
      case Type.Binary:
        return Data.Binary(type, offset, length, nullCount || 0, buffers[BufferType.VALIDITY], buffers[BufferType.OFFSET] || [], buffers[BufferType.DATA] || []);
      case Type.Utf8:
        return Data.Utf8(type, offset, length, nullCount || 0, buffers[BufferType.VALIDITY], buffers[BufferType.OFFSET] || [], buffers[BufferType.DATA] || []);
      case Type.List:
        return Data.List(type, offset, length, nullCount || 0, buffers[BufferType.VALIDITY], buffers[BufferType.OFFSET] || [], (childData || [])[0]);
      case Type.FixedSizeList:
        return Data.FixedSizeList(type, offset, length, nullCount || 0, buffers[BufferType.VALIDITY], (childData || [])[0]);
      case Type.Struct:
        return Data.Struct(type, offset, length, nullCount || 0, buffers[BufferType.VALIDITY], childData || []);
      case Type.Map:
        return Data.Map(type, offset, length, nullCount || 0, buffers[BufferType.VALIDITY], buffers[BufferType.OFFSET] || [], (childData || [])[0]);
      case Type.Union:
        return Data.Union(type, offset, length, nullCount || 0, buffers[BufferType.VALIDITY], buffers[BufferType.TYPE] || [], buffers[BufferType.OFFSET] || childData, childData);
    }
    throw new Error(`Unrecognized typeId ${type.typeId}`);
  }
  static Null(type, offset, length) {
    return new Data(type, offset, length, 0);
  }
  static Int(type, offset, length, nullCount, nullBitmap, data) {
    return new Data(type, offset, length, nullCount, [void 0, toArrayBufferView(type.ArrayType, data), toUint8Array(nullBitmap)]);
  }
  static Dictionary(type, offset, length, nullCount, nullBitmap, data, dictionary) {
    return new Data(type, offset, length, nullCount, [void 0, toArrayBufferView(type.indices.ArrayType, data), toUint8Array(nullBitmap)], [], dictionary);
  }
  static Float(type, offset, length, nullCount, nullBitmap, data) {
    return new Data(type, offset, length, nullCount, [void 0, toArrayBufferView(type.ArrayType, data), toUint8Array(nullBitmap)]);
  }
  static Bool(type, offset, length, nullCount, nullBitmap, data) {
    return new Data(type, offset, length, nullCount, [void 0, toArrayBufferView(type.ArrayType, data), toUint8Array(nullBitmap)]);
  }
  static Decimal(type, offset, length, nullCount, nullBitmap, data) {
    return new Data(type, offset, length, nullCount, [void 0, toArrayBufferView(type.ArrayType, data), toUint8Array(nullBitmap)]);
  }
  static Date(type, offset, length, nullCount, nullBitmap, data) {
    return new Data(type, offset, length, nullCount, [void 0, toArrayBufferView(type.ArrayType, data), toUint8Array(nullBitmap)]);
  }
  static Time(type, offset, length, nullCount, nullBitmap, data) {
    return new Data(type, offset, length, nullCount, [void 0, toArrayBufferView(type.ArrayType, data), toUint8Array(nullBitmap)]);
  }
  static Timestamp(type, offset, length, nullCount, nullBitmap, data) {
    return new Data(type, offset, length, nullCount, [void 0, toArrayBufferView(type.ArrayType, data), toUint8Array(nullBitmap)]);
  }
  static Interval(type, offset, length, nullCount, nullBitmap, data) {
    return new Data(type, offset, length, nullCount, [void 0, toArrayBufferView(type.ArrayType, data), toUint8Array(nullBitmap)]);
  }
  static FixedSizeBinary(type, offset, length, nullCount, nullBitmap, data) {
    return new Data(type, offset, length, nullCount, [void 0, toArrayBufferView(type.ArrayType, data), toUint8Array(nullBitmap)]);
  }
  static Binary(type, offset, length, nullCount, nullBitmap, valueOffsets, data) {
    return new Data(type, offset, length, nullCount, [toInt32Array(valueOffsets), toUint8Array(data), toUint8Array(nullBitmap)]);
  }
  static Utf8(type, offset, length, nullCount, nullBitmap, valueOffsets, data) {
    return new Data(type, offset, length, nullCount, [toInt32Array(valueOffsets), toUint8Array(data), toUint8Array(nullBitmap)]);
  }
  static List(type, offset, length, nullCount, nullBitmap, valueOffsets, child) {
    return new Data(type, offset, length, nullCount, [toInt32Array(valueOffsets), void 0, toUint8Array(nullBitmap)], child ? [child] : []);
  }
  static FixedSizeList(type, offset, length, nullCount, nullBitmap, child) {
    return new Data(type, offset, length, nullCount, [void 0, void 0, toUint8Array(nullBitmap)], child ? [child] : []);
  }
  static Struct(type, offset, length, nullCount, nullBitmap, children) {
    return new Data(type, offset, length, nullCount, [void 0, void 0, toUint8Array(nullBitmap)], children);
  }
  static Map(type, offset, length, nullCount, nullBitmap, valueOffsets, child) {
    return new Data(type, offset, length, nullCount, [toInt32Array(valueOffsets), void 0, toUint8Array(nullBitmap)], child ? [child] : []);
  }
  static Union(type, offset, length, nullCount, nullBitmap, typeIds, valueOffsetsOrChildren, children) {
    const buffers = [
      void 0,
      void 0,
      toUint8Array(nullBitmap),
      toArrayBufferView(type.ArrayType, typeIds)
    ];
    if (type.mode === UnionMode.Sparse) {
      return new Data(type, offset, length, nullCount, buffers, valueOffsetsOrChildren);
    }
    buffers[BufferType.OFFSET] = toInt32Array(valueOffsetsOrChildren);
    return new Data(type, offset, length, nullCount, buffers, children);
  }
}
Data.prototype.childData = Object.freeze([]);
const undf = void 0;
function valueToString(x) {
  if (x === null) {
    return "null";
  }
  if (x === undf) {
    return "undefined";
  }
  switch (typeof x) {
    case "number":
      return `${x}`;
    case "bigint":
      return `${x}`;
    case "string":
      return `"${x}"`;
  }
  if (typeof x[Symbol.toPrimitive] === "function") {
    return x[Symbol.toPrimitive]("string");
  }
  return ArrayBuffer.isView(x) ? `[${x}]` : JSON.stringify(x);
}
function createIsValidFunction(nullValues) {
  if (!nullValues || nullValues.length <= 0) {
    return function isValid(value) {
      return true;
    };
  }
  let fnBody = "";
  const noNaNs = nullValues.filter((x) => x === x);
  if (noNaNs.length > 0) {
    fnBody = `
    switch (x) {${noNaNs.map((x) => `
        case ${valueToCase(x)}:`).join("")}
            return false;
    }`;
  }
  if (nullValues.length !== noNaNs.length) {
    fnBody = `if (x !== x) return false;
${fnBody}`;
  }
  return new Function(`x`, `${fnBody}
return true;`);
}
function valueToCase(x) {
  if (typeof x !== "bigint") {
    return valueToString(x);
  } else if (BigIntAvailable) {
    return `${valueToString(x)}n`;
  }
  return `"${valueToString(x)}"`;
}
const roundLengthUpToNearest64Bytes = (len, BPE) => (len * BPE + 63 & ~63 || 64) / BPE;
const sliceOrExtendArray = (arr, len = 0) => arr.length >= len ? arr.subarray(0, len) : memcpy(new arr.constructor(len), arr, 0);
class BufferBuilder {
  constructor(buffer, stride = 1) {
    this.buffer = buffer;
    this.stride = stride;
    this.BYTES_PER_ELEMENT = buffer.BYTES_PER_ELEMENT;
    this.ArrayType = buffer.constructor;
    this._resize(this.length = buffer.length / stride | 0);
  }
  get byteLength() {
    return this.length * this.stride * this.BYTES_PER_ELEMENT | 0;
  }
  get reservedLength() {
    return this.buffer.length / this.stride;
  }
  get reservedByteLength() {
    return this.buffer.byteLength;
  }
  set(index, value) {
    return this;
  }
  append(value) {
    return this.set(this.length, value);
  }
  reserve(extra) {
    if (extra > 0) {
      this.length += extra;
      const stride = this.stride;
      const length = this.length * stride;
      const reserved = this.buffer.length;
      if (length >= reserved) {
        this._resize(reserved === 0 ? roundLengthUpToNearest64Bytes(length * 1, this.BYTES_PER_ELEMENT) : roundLengthUpToNearest64Bytes(length * 2, this.BYTES_PER_ELEMENT));
      }
    }
    return this;
  }
  flush(length = this.length) {
    length = roundLengthUpToNearest64Bytes(length * this.stride, this.BYTES_PER_ELEMENT);
    const array = sliceOrExtendArray(this.buffer, length);
    this.clear();
    return array;
  }
  clear() {
    this.length = 0;
    this._resize(0);
    return this;
  }
  _resize(newLength) {
    return this.buffer = memcpy(new this.ArrayType(newLength), this.buffer);
  }
}
BufferBuilder.prototype.offset = 0;
class DataBufferBuilder extends BufferBuilder {
  last() {
    return this.get(this.length - 1);
  }
  get(index) {
    return this.buffer[index];
  }
  set(index, value) {
    this.reserve(index - this.length + 1);
    this.buffer[index * this.stride] = value;
    return this;
  }
}
class BitmapBufferBuilder extends DataBufferBuilder {
  constructor(data = new Uint8Array(0)) {
    super(data, 1 / 8);
    this.numValid = 0;
  }
  get numInvalid() {
    return this.length - this.numValid;
  }
  get(idx) {
    return this.buffer[idx >> 3] >> idx % 8 & 1;
  }
  set(idx, val) {
    const { buffer } = this.reserve(idx - this.length + 1);
    const byte = idx >> 3, bit = idx % 8, cur = buffer[byte] >> bit & 1;
    val ? cur === 0 && (buffer[byte] |= 1 << bit, ++this.numValid) : cur === 1 && (buffer[byte] &= ~(1 << bit), --this.numValid);
    return this;
  }
  clear() {
    this.numValid = 0;
    return super.clear();
  }
}
class OffsetsBufferBuilder extends DataBufferBuilder {
  constructor(data = new Int32Array(1)) {
    super(data, 1);
  }
  append(value) {
    return this.set(this.length - 1, value);
  }
  set(index, value) {
    const offset = this.length - 1;
    const buffer = this.reserve(index - offset + 1).buffer;
    if (offset < index++) {
      buffer.fill(buffer[offset], offset, index);
    }
    buffer[index] = buffer[index - 1] + value;
    return this;
  }
  flush(length = this.length - 1) {
    if (length > this.length) {
      this.set(length - 1, 0);
    }
    return super.flush(length + 1);
  }
}
class WideBufferBuilder extends BufferBuilder {
  get ArrayType64() {
    return this._ArrayType64 || (this._ArrayType64 = this.buffer instanceof Int32Array ? BigInt64ArrayCtor : BigUint64ArrayCtor);
  }
  set(index, value) {
    this.reserve(index - this.length + 1);
    switch (typeof value) {
      case "bigint":
        this.buffer64[index] = value;
        break;
      case "number":
        this.buffer[index * this.stride] = value;
        break;
      default:
        this.buffer.set(value, index * this.stride);
    }
    return this;
  }
  _resize(newLength) {
    const data = super._resize(newLength);
    const length = data.byteLength / (this.BYTES_PER_ELEMENT * this.stride);
    if (BigIntAvailable) {
      this.buffer64 = new this.ArrayType64(data.buffer, data.byteOffset, length);
    }
    return data;
  }
}
class Builder$2 {
  constructor({ "type": type, "nullValues": nulls }) {
    this.length = 0;
    this.finished = false;
    this.type = type;
    this.children = [];
    this.nullValues = nulls;
    this.stride = strideForType(type);
    this._nulls = new BitmapBufferBuilder();
    if (nulls && nulls.length > 0) {
      this._isValid = createIsValidFunction(nulls);
    }
  }
  static new(options) {
  }
  static throughNode(options) {
    throw new Error(`"throughNode" not available in this environment`);
  }
  static throughDOM(options) {
    throw new Error(`"throughDOM" not available in this environment`);
  }
  static throughIterable(options) {
    return throughIterable(options);
  }
  static throughAsyncIterable(options) {
    return throughAsyncIterable(options);
  }
  toVector() {
    return AbstractVector.new(this.flush());
  }
  get ArrayType() {
    return this.type.ArrayType;
  }
  get nullCount() {
    return this._nulls.numInvalid;
  }
  get numChildren() {
    return this.children.length;
  }
  get byteLength() {
    let size = 0;
    this._offsets && (size += this._offsets.byteLength);
    this._values && (size += this._values.byteLength);
    this._nulls && (size += this._nulls.byteLength);
    this._typeIds && (size += this._typeIds.byteLength);
    return this.children.reduce((size2, child) => size2 + child.byteLength, size);
  }
  get reservedLength() {
    return this._nulls.reservedLength;
  }
  get reservedByteLength() {
    let size = 0;
    this._offsets && (size += this._offsets.reservedByteLength);
    this._values && (size += this._values.reservedByteLength);
    this._nulls && (size += this._nulls.reservedByteLength);
    this._typeIds && (size += this._typeIds.reservedByteLength);
    return this.children.reduce((size2, child) => size2 + child.reservedByteLength, size);
  }
  get valueOffsets() {
    return this._offsets ? this._offsets.buffer : null;
  }
  get values() {
    return this._values ? this._values.buffer : null;
  }
  get nullBitmap() {
    return this._nulls ? this._nulls.buffer : null;
  }
  get typeIds() {
    return this._typeIds ? this._typeIds.buffer : null;
  }
  append(value) {
    return this.set(this.length, value);
  }
  isValid(value) {
    return this._isValid(value);
  }
  set(index, value) {
    if (this.setValid(index, this.isValid(value))) {
      this.setValue(index, value);
    }
    return this;
  }
  setValue(index, value) {
    this._setValue(this, index, value);
  }
  setValid(index, valid) {
    this.length = this._nulls.set(index, +valid).length;
    return valid;
  }
  addChild(child, name = `${this.numChildren}`) {
    throw new Error(`Cannot append children to non-nested type "${this.type}"`);
  }
  getChildAt(index) {
    return this.children[index] || null;
  }
  flush() {
    const buffers = [];
    const values = this._values;
    const offsets = this._offsets;
    const typeIds = this._typeIds;
    const { length, nullCount } = this;
    if (typeIds) {
      buffers[BufferType.TYPE] = typeIds.flush(length);
      offsets && (buffers[BufferType.OFFSET] = offsets.flush(length));
    } else if (offsets) {
      values && (buffers[BufferType.DATA] = values.flush(offsets.last()));
      buffers[BufferType.OFFSET] = offsets.flush(length);
    } else if (values) {
      buffers[BufferType.DATA] = values.flush(length);
    }
    nullCount > 0 && (buffers[BufferType.VALIDITY] = this._nulls.flush(length));
    const data = Data.new(this.type, 0, length, nullCount, buffers, this.children.map((child) => child.flush()));
    this.clear();
    return data;
  }
  finish() {
    this.finished = true;
    this.children.forEach((child) => child.finish());
    return this;
  }
  clear() {
    this.length = 0;
    this._offsets && this._offsets.clear();
    this._values && this._values.clear();
    this._nulls && this._nulls.clear();
    this._typeIds && this._typeIds.clear();
    this.children.forEach((child) => child.clear());
    return this;
  }
}
Builder$2.prototype.length = 1;
Builder$2.prototype.stride = 1;
Builder$2.prototype.children = null;
Builder$2.prototype.finished = false;
Builder$2.prototype.nullValues = null;
Builder$2.prototype._isValid = () => true;
class FixedWidthBuilder extends Builder$2 {
  constructor(opts) {
    super(opts);
    this._values = new DataBufferBuilder(new this.ArrayType(0), this.stride);
  }
  setValue(index, value) {
    const values = this._values;
    values.reserve(index - values.length + 1);
    return super.setValue(index, value);
  }
}
class VariableWidthBuilder extends Builder$2 {
  constructor(opts) {
    super(opts);
    this._pendingLength = 0;
    this._offsets = new OffsetsBufferBuilder();
  }
  setValue(index, value) {
    const pending = this._pending || (this._pending = /* @__PURE__ */ new Map());
    const current = pending.get(index);
    current && (this._pendingLength -= current.length);
    this._pendingLength += value.length;
    pending.set(index, value);
  }
  setValid(index, isValid) {
    if (!super.setValid(index, isValid)) {
      (this._pending || (this._pending = /* @__PURE__ */ new Map())).set(index, void 0);
      return false;
    }
    return true;
  }
  clear() {
    this._pendingLength = 0;
    this._pending = void 0;
    return super.clear();
  }
  flush() {
    this._flush();
    return super.flush();
  }
  finish() {
    this._flush();
    return super.finish();
  }
  _flush() {
    const pending = this._pending;
    const pendingLength = this._pendingLength;
    this._pendingLength = 0;
    this._pending = void 0;
    if (pending && pending.size > 0) {
      this._flushPending(pending, pendingLength);
    }
    return this;
  }
}
function throughIterable(options) {
  const { ["queueingStrategy"]: queueingStrategy = "count" } = options;
  const { ["highWaterMark"]: highWaterMark = queueingStrategy !== "bytes" ? 1e3 : Math.pow(2, 14) } = options;
  const sizeProperty = queueingStrategy !== "bytes" ? "length" : "byteLength";
  return function* (source) {
    let numChunks = 0;
    const builder = Builder$2.new(options);
    for (const value of source) {
      if (builder.append(value)[sizeProperty] >= highWaterMark) {
        ++numChunks && (yield builder.toVector());
      }
    }
    if (builder.finish().length > 0 || numChunks === 0) {
      yield builder.toVector();
    }
  };
}
function throughAsyncIterable(options) {
  const { ["queueingStrategy"]: queueingStrategy = "count" } = options;
  const { ["highWaterMark"]: highWaterMark = queueingStrategy !== "bytes" ? 1e3 : Math.pow(2, 14) } = options;
  const sizeProperty = queueingStrategy !== "bytes" ? "length" : "byteLength";
  return function(source) {
    return __asyncGenerator(this, arguments, function* () {
      var e_1, _a;
      let numChunks = 0;
      const builder = Builder$2.new(options);
      try {
        for (var source_1 = __asyncValues(source), source_1_1; source_1_1 = yield __await(source_1.next()), !source_1_1.done; ) {
          const value = source_1_1.value;
          if (builder.append(value)[sizeProperty] >= highWaterMark) {
            ++numChunks && (yield yield __await(builder.toVector()));
          }
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (source_1_1 && !source_1_1.done && (_a = source_1.return))
            yield __await(_a.call(source_1));
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      if (builder.finish().length > 0 || numChunks === 0) {
        yield yield __await(builder.toVector());
      }
    });
  };
}
class BoolBuilder extends Builder$2 {
  constructor(options) {
    super(options);
    this._values = new BitmapBufferBuilder();
  }
  setValue(index, value) {
    this._values.set(index, +value);
  }
}
class NullBuilder extends Builder$2 {
  setValue(index, value) {
  }
  setValid(index, valid) {
    this.length = Math.max(index + 1, this.length);
    return valid;
  }
}
class DateBuilder extends FixedWidthBuilder {
}
class DateDayBuilder extends DateBuilder {
}
class DateMillisecondBuilder extends DateBuilder {
}
class DecimalBuilder extends FixedWidthBuilder {
}
class DictionaryBuilder extends Builder$2 {
  constructor({ "type": type, "nullValues": nulls, "dictionaryHashFunction": hashFn }) {
    super({ type: new Dictionary(type.dictionary, type.indices, type.id, type.isOrdered) });
    this._nulls = null;
    this._dictionaryOffset = 0;
    this._keysToIndices = /* @__PURE__ */ Object.create(null);
    this.indices = Builder$2.new({ "type": this.type.indices, "nullValues": nulls });
    this.dictionary = Builder$2.new({ "type": this.type.dictionary, "nullValues": null });
    if (typeof hashFn === "function") {
      this.valueToKey = hashFn;
    }
  }
  get values() {
    return this.indices.values;
  }
  get nullCount() {
    return this.indices.nullCount;
  }
  get nullBitmap() {
    return this.indices.nullBitmap;
  }
  get byteLength() {
    return this.indices.byteLength + this.dictionary.byteLength;
  }
  get reservedLength() {
    return this.indices.reservedLength + this.dictionary.reservedLength;
  }
  get reservedByteLength() {
    return this.indices.reservedByteLength + this.dictionary.reservedByteLength;
  }
  isValid(value) {
    return this.indices.isValid(value);
  }
  setValid(index, valid) {
    const indices = this.indices;
    valid = indices.setValid(index, valid);
    this.length = indices.length;
    return valid;
  }
  setValue(index, value) {
    const keysToIndices = this._keysToIndices;
    const key = this.valueToKey(value);
    let idx = keysToIndices[key];
    if (idx === void 0) {
      keysToIndices[key] = idx = this._dictionaryOffset + this.dictionary.append(value).length - 1;
    }
    return this.indices.setValue(index, idx);
  }
  flush() {
    const type = this.type;
    const prev = this._dictionary;
    const curr = this.dictionary.toVector();
    const data = this.indices.flush().clone(type);
    data.dictionary = prev ? prev.concat(curr) : curr;
    this.finished || (this._dictionaryOffset += curr.length);
    this._dictionary = data.dictionary;
    this.clear();
    return data;
  }
  finish() {
    this.indices.finish();
    this.dictionary.finish();
    this._dictionaryOffset = 0;
    this._keysToIndices = /* @__PURE__ */ Object.create(null);
    return super.finish();
  }
  clear() {
    this.indices.clear();
    this.dictionary.clear();
    return super.clear();
  }
  valueToKey(val) {
    return typeof val === "string" ? val : `${val}`;
  }
}
class FixedSizeBinaryBuilder extends FixedWidthBuilder {
}
const f64 = new Float64Array(1);
const u32 = new Uint32Array(f64.buffer);
function uint16ToFloat64(h) {
  const expo = (h & 31744) >> 10;
  const sigf = (h & 1023) / 1024;
  const sign = Math.pow(-1, (h & 32768) >> 15);
  switch (expo) {
    case 31:
      return sign * (sigf ? NaN : 1 / 0);
    case 0:
      return sign * (sigf ? 6103515625e-14 * sigf : 0);
  }
  return sign * Math.pow(2, expo - 15) * (1 + sigf);
}
function float64ToUint16(d) {
  if (d !== d) {
    return 32256;
  }
  f64[0] = d;
  const sign = (u32[1] & 2147483648) >> 16 & 65535;
  let expo = u32[1] & 2146435072, sigf = 0;
  if (expo >= 1089470464) {
    if (u32[0] > 0) {
      expo = 31744;
    } else {
      expo = (expo & 2080374784) >> 16;
      sigf = (u32[1] & 1048575) >> 10;
    }
  } else if (expo <= 1056964608) {
    sigf = 1048576 + (u32[1] & 1048575);
    sigf = 1048576 + (sigf << (expo >> 20) - 998) >> 21;
    expo = 0;
  } else {
    expo = expo - 1056964608 >> 10;
    sigf = (u32[1] & 1048575) + 512 >> 10;
  }
  return sign | expo | sigf & 65535;
}
var util_math_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  uint16ToFloat64,
  float64ToUint16
}, Symbol.toStringTag, { value: "Module" }));
class FloatBuilder extends FixedWidthBuilder {
}
class Float16Builder extends FloatBuilder {
  setValue(index, value) {
    this._values.set(index, float64ToUint16(value));
  }
}
class Float32Builder extends FloatBuilder {
  setValue(index, value) {
    this._values.set(index, value);
  }
}
class Float64Builder extends FloatBuilder {
  setValue(index, value) {
    this._values.set(index, value);
  }
}
const isArrowBigNumSymbol = Symbol.for("isArrowBigNum");
function BigNum(x, ...xs) {
  if (xs.length === 0) {
    return Object.setPrototypeOf(toArrayBufferView(this["TypedArray"], x), this.constructor.prototype);
  }
  return Object.setPrototypeOf(new this["TypedArray"](x, ...xs), this.constructor.prototype);
}
BigNum.prototype[isArrowBigNumSymbol] = true;
BigNum.prototype.toJSON = function() {
  return `"${bignumToString(this)}"`;
};
BigNum.prototype.valueOf = function() {
  return bignumToNumber(this);
};
BigNum.prototype.toString = function() {
  return bignumToString(this);
};
BigNum.prototype[Symbol.toPrimitive] = function(hint = "default") {
  switch (hint) {
    case "number":
      return bignumToNumber(this);
    case "string":
      return bignumToString(this);
    case "default":
      return bignumToBigInt(this);
  }
  return bignumToString(this);
};
function SignedBigNum(...args) {
  return BigNum.apply(this, args);
}
function UnsignedBigNum(...args) {
  return BigNum.apply(this, args);
}
function DecimalBigNum(...args) {
  return BigNum.apply(this, args);
}
Object.setPrototypeOf(SignedBigNum.prototype, Object.create(Int32Array.prototype));
Object.setPrototypeOf(UnsignedBigNum.prototype, Object.create(Uint32Array.prototype));
Object.setPrototypeOf(DecimalBigNum.prototype, Object.create(Uint32Array.prototype));
Object.assign(SignedBigNum.prototype, BigNum.prototype, { "constructor": SignedBigNum, "signed": true, "TypedArray": Int32Array, "BigIntArray": BigInt64ArrayCtor });
Object.assign(UnsignedBigNum.prototype, BigNum.prototype, { "constructor": UnsignedBigNum, "signed": false, "TypedArray": Uint32Array, "BigIntArray": BigUint64ArrayCtor });
Object.assign(DecimalBigNum.prototype, BigNum.prototype, { "constructor": DecimalBigNum, "signed": true, "TypedArray": Uint32Array, "BigIntArray": BigUint64ArrayCtor });
function bignumToNumber(bn) {
  const { buffer, byteOffset, length, "signed": signed } = bn;
  const words = new Int32Array(buffer, byteOffset, length);
  let number = 0, i = 0;
  const n = words.length;
  let hi, lo;
  while (i < n) {
    lo = words[i++];
    hi = words[i++];
    signed || (hi = hi >>> 0);
    number += (lo >>> 0) + hi * Math.pow(i, 32);
  }
  return number;
}
let bignumToString;
let bignumToBigInt;
if (!BigIntAvailable) {
  bignumToString = decimalToString;
  bignumToBigInt = bignumToString;
} else {
  bignumToBigInt = (a) => a.byteLength === 8 ? new a["BigIntArray"](a.buffer, a.byteOffset, 1)[0] : decimalToString(a);
  bignumToString = (a) => a.byteLength === 8 ? `${new a["BigIntArray"](a.buffer, a.byteOffset, 1)[0]}` : decimalToString(a);
}
function decimalToString(a) {
  let digits = "";
  const base64 = new Uint32Array(2);
  let base32 = new Uint16Array(a.buffer, a.byteOffset, a.byteLength / 2);
  const checks = new Uint32Array((base32 = new Uint16Array(base32).reverse()).buffer);
  let i = -1;
  const n = base32.length - 1;
  do {
    for (base64[0] = base32[i = 0]; i < n; ) {
      base32[i++] = base64[1] = base64[0] / 10;
      base64[0] = (base64[0] - base64[1] * 10 << 16) + base32[i];
    }
    base32[i] = base64[1] = base64[0] / 10;
    base64[0] = base64[0] - base64[1] * 10;
    digits = `${base64[0]}${digits}`;
  } while (checks[0] || checks[1] || checks[2] || checks[3]);
  return digits ? digits : `0`;
}
class BN {
  static new(num, isSigned) {
    switch (isSigned) {
      case true:
        return new SignedBigNum(num);
      case false:
        return new UnsignedBigNum(num);
    }
    switch (num.constructor) {
      case Int8Array:
      case Int16Array:
      case Int32Array:
      case BigInt64ArrayCtor:
        return new SignedBigNum(num);
    }
    if (num.byteLength === 16) {
      return new DecimalBigNum(num);
    }
    return new UnsignedBigNum(num);
  }
  static signed(num) {
    return new SignedBigNum(num);
  }
  static unsigned(num) {
    return new UnsignedBigNum(num);
  }
  static decimal(num) {
    return new DecimalBigNum(num);
  }
  constructor(num, isSigned) {
    return BN.new(num, isSigned);
  }
}
var util_bn_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isArrowBigNumSymbol,
  get bignumToString() {
    return bignumToString;
  },
  get bignumToBigInt() {
    return bignumToBigInt;
  },
  BN
}, Symbol.toStringTag, { value: "Module" }));
class IntBuilder extends FixedWidthBuilder {
  setValue(index, value) {
    this._values.set(index, value);
  }
}
class Int8Builder extends IntBuilder {
}
class Int16Builder extends IntBuilder {
}
class Int32Builder extends IntBuilder {
}
class Int64Builder extends IntBuilder {
  constructor(options) {
    if (options["nullValues"]) {
      options["nullValues"] = options["nullValues"].map(toBigInt);
    }
    super(options);
    this._values = new WideBufferBuilder(new Int32Array(0), 2);
  }
  get values64() {
    return this._values.buffer64;
  }
  isValid(value) {
    return super.isValid(toBigInt(value));
  }
}
class Uint8Builder extends IntBuilder {
}
class Uint16Builder extends IntBuilder {
}
class Uint32Builder extends IntBuilder {
}
class Uint64Builder extends IntBuilder {
  constructor(options) {
    if (options["nullValues"]) {
      options["nullValues"] = options["nullValues"].map(toBigInt);
    }
    super(options);
    this._values = new WideBufferBuilder(new Uint32Array(0), 2);
  }
  get values64() {
    return this._values.buffer64;
  }
  isValid(value) {
    return super.isValid(toBigInt(value));
  }
}
const toBigInt = ((memo) => (value) => {
  if (ArrayBuffer.isView(value)) {
    memo.buffer = value.buffer;
    memo.byteOffset = value.byteOffset;
    memo.byteLength = value.byteLength;
    value = bignumToBigInt(memo);
    memo.buffer = null;
  }
  return value;
})({ "BigIntArray": BigInt64ArrayCtor });
class TimeBuilder extends FixedWidthBuilder {
}
class TimeSecondBuilder extends TimeBuilder {
}
class TimeMillisecondBuilder extends TimeBuilder {
}
class TimeMicrosecondBuilder extends TimeBuilder {
}
class TimeNanosecondBuilder extends TimeBuilder {
}
class TimestampBuilder extends FixedWidthBuilder {
}
class TimestampSecondBuilder extends TimestampBuilder {
}
class TimestampMillisecondBuilder extends TimestampBuilder {
}
class TimestampMicrosecondBuilder extends TimestampBuilder {
}
class TimestampNanosecondBuilder extends TimestampBuilder {
}
class IntervalBuilder extends FixedWidthBuilder {
}
class IntervalDayTimeBuilder extends IntervalBuilder {
}
class IntervalYearMonthBuilder extends IntervalBuilder {
}
class BinaryBuilder extends VariableWidthBuilder {
  constructor(opts) {
    super(opts);
    this._values = new BufferBuilder(new Uint8Array(0));
  }
  get byteLength() {
    let size = this._pendingLength + this.length * 4;
    this._offsets && (size += this._offsets.byteLength);
    this._values && (size += this._values.byteLength);
    this._nulls && (size += this._nulls.byteLength);
    return size;
  }
  setValue(index, value) {
    return super.setValue(index, toUint8Array(value));
  }
  _flushPending(pending, pendingLength) {
    const offsets = this._offsets;
    const data = this._values.reserve(pendingLength).buffer;
    let index = 0, length = 0, offset = 0, value;
    for ([index, value] of pending) {
      if (value === void 0) {
        offsets.set(index, 0);
      } else {
        length = value.length;
        data.set(value, offset);
        offsets.set(index, length);
        offset += length;
      }
    }
  }
}
class Utf8Builder extends VariableWidthBuilder {
  constructor(opts) {
    super(opts);
    this._values = new BufferBuilder(new Uint8Array(0));
  }
  get byteLength() {
    let size = this._pendingLength + this.length * 4;
    this._offsets && (size += this._offsets.byteLength);
    this._values && (size += this._values.byteLength);
    this._nulls && (size += this._nulls.byteLength);
    return size;
  }
  setValue(index, value) {
    return super.setValue(index, encodeUtf8(value));
  }
  _flushPending(pending, pendingLength) {
  }
}
Utf8Builder.prototype._flushPending = BinaryBuilder.prototype._flushPending;
class Run {
  get length() {
    return this._values.length;
  }
  get(index) {
    return this._values[index];
  }
  clear() {
    this._values = null;
    return this;
  }
  bind(values) {
    if (values instanceof AbstractVector) {
      return values;
    }
    this._values = values;
    return this;
  }
}
class Schema {
  constructor(fields = [], metadata, dictionaries) {
    this.fields = fields || [];
    this.metadata = metadata || /* @__PURE__ */ new Map();
    if (!dictionaries) {
      dictionaries = generateDictionaryMap(fields);
    }
    this.dictionaries = dictionaries;
  }
  get [Symbol.toStringTag]() {
    return "Schema";
  }
  toString() {
    return `Schema<{ ${this.fields.map((f, i) => `${i}: ${f}`).join(", ")} }>`;
  }
  select(...columnNames) {
    const names = columnNames.reduce((xs, x) => (xs[x] = true) && xs, /* @__PURE__ */ Object.create(null));
    return new Schema(this.fields.filter((f) => names[f.name]), this.metadata);
  }
  selectAt(...columnIndices) {
    return new Schema(columnIndices.map((i) => this.fields[i]).filter(Boolean), this.metadata);
  }
  assign(...args) {
    const other = args[0] instanceof Schema ? args[0] : Array.isArray(args[0]) ? new Schema(args[0]) : new Schema(args);
    const curFields = [...this.fields];
    const metadata = mergeMaps(mergeMaps(/* @__PURE__ */ new Map(), this.metadata), other.metadata);
    const newFields = other.fields.filter((f2) => {
      const i = curFields.findIndex((f) => f.name === f2.name);
      return ~i ? (curFields[i] = f2.clone({
        metadata: mergeMaps(mergeMaps(/* @__PURE__ */ new Map(), curFields[i].metadata), f2.metadata)
      })) && false : true;
    });
    const newDictionaries = generateDictionaryMap(newFields, /* @__PURE__ */ new Map());
    return new Schema([...curFields, ...newFields], metadata, new Map([...this.dictionaries, ...newDictionaries]));
  }
}
class Field {
  constructor(name, type, nullable = false, metadata) {
    this.name = name;
    this.type = type;
    this.nullable = nullable;
    this.metadata = metadata || /* @__PURE__ */ new Map();
  }
  static new(...args) {
    let [name, type, nullable, metadata] = args;
    if (args[0] && typeof args[0] === "object") {
      ({ name } = args[0]);
      type === void 0 && (type = args[0].type);
      nullable === void 0 && (nullable = args[0].nullable);
      metadata === void 0 && (metadata = args[0].metadata);
    }
    return new Field(`${name}`, type, nullable, metadata);
  }
  get typeId() {
    return this.type.typeId;
  }
  get [Symbol.toStringTag]() {
    return "Field";
  }
  toString() {
    return `${this.name}: ${this.type}`;
  }
  clone(...args) {
    let [name, type, nullable, metadata] = args;
    !args[0] || typeof args[0] !== "object" ? [name = this.name, type = this.type, nullable = this.nullable, metadata = this.metadata] = args : { name = this.name, type = this.type, nullable = this.nullable, metadata = this.metadata } = args[0];
    return Field.new(name, type, nullable, metadata);
  }
}
function mergeMaps(m1, m2) {
  return new Map([...m1 || /* @__PURE__ */ new Map(), ...m2 || /* @__PURE__ */ new Map()]);
}
function generateDictionaryMap(fields, dictionaries = /* @__PURE__ */ new Map()) {
  for (let i = -1, n = fields.length; ++i < n; ) {
    const field = fields[i];
    const type = field.type;
    if (DataType.isDictionary(type)) {
      if (!dictionaries.has(type.id)) {
        dictionaries.set(type.id, type.dictionary);
      } else if (dictionaries.get(type.id) !== type.dictionary) {
        throw new Error(`Cannot create Schema containing two different dictionaries with the same Id`);
      }
    }
    if (type.children && type.children.length > 0) {
      generateDictionaryMap(type.children, dictionaries);
    }
  }
  return dictionaries;
}
Schema.prototype.fields = null;
Schema.prototype.metadata = null;
Schema.prototype.dictionaries = null;
Field.prototype.type = null;
Field.prototype.name = null;
Field.prototype.nullable = null;
Field.prototype.metadata = null;
class ListBuilder extends VariableWidthBuilder {
  constructor(opts) {
    super(opts);
    this._run = new Run();
    this._offsets = new OffsetsBufferBuilder();
  }
  addChild(child, name = "0") {
    if (this.numChildren > 0) {
      throw new Error("ListBuilder can only have one child.");
    }
    this.children[this.numChildren] = child;
    this.type = new List(new Field(name, child.type, true));
    return this.numChildren - 1;
  }
  clear() {
    this._run.clear();
    return super.clear();
  }
  _flushPending(pending) {
    const run = this._run;
    const offsets = this._offsets;
    const setValue = this._setValue;
    let index = 0, value;
    for ([index, value] of pending) {
      if (value === void 0) {
        offsets.set(index, 0);
      } else {
        offsets.set(index, value.length);
        setValue(this, index, run.bind(value));
      }
    }
  }
}
class FixedSizeListBuilder extends Builder$2 {
  constructor() {
    super(...arguments);
    this._run = new Run();
  }
  setValue(index, value) {
    super.setValue(index, this._run.bind(value));
  }
  addChild(child, name = "0") {
    if (this.numChildren > 0) {
      throw new Error("FixedSizeListBuilder can only have one child.");
    }
    const childIndex = this.children.push(child);
    this.type = new FixedSizeList(this.type.listSize, new Field(name, child.type, true));
    return childIndex;
  }
  clear() {
    this._run.clear();
    return super.clear();
  }
}
class MapBuilder extends VariableWidthBuilder {
  set(index, value) {
    return super.set(index, value);
  }
  setValue(index, value) {
    value = value instanceof Map ? value : new Map(Object.entries(value));
    const pending = this._pending || (this._pending = /* @__PURE__ */ new Map());
    const current = pending.get(index);
    current && (this._pendingLength -= current.size);
    this._pendingLength += value.size;
    pending.set(index, value);
  }
  addChild(child, name = `${this.numChildren}`) {
    if (this.numChildren > 0) {
      throw new Error("ListBuilder can only have one child.");
    }
    this.children[this.numChildren] = child;
    this.type = new Map_(new Field(name, child.type, true), this.type.keysSorted);
    return this.numChildren - 1;
  }
  _flushPending(pending) {
    const offsets = this._offsets;
    const setValue = this._setValue;
    pending.forEach((value, index) => {
      if (value === void 0) {
        offsets.set(index, 0);
      } else {
        offsets.set(index, value.size);
        setValue(this, index, value);
      }
    });
  }
}
class StructBuilder extends Builder$2 {
  addChild(child, name = `${this.numChildren}`) {
    const childIndex = this.children.push(child);
    this.type = new Struct([...this.type.children, new Field(name, child.type, true)]);
    return childIndex;
  }
}
class UnionBuilder extends Builder$2 {
  constructor(options) {
    super(options);
    this._typeIds = new DataBufferBuilder(new Int8Array(0), 1);
    if (typeof options["valueToChildTypeId"] === "function") {
      this._valueToChildTypeId = options["valueToChildTypeId"];
    }
  }
  get typeIdToChildIndex() {
    return this.type.typeIdToChildIndex;
  }
  append(value, childTypeId) {
    return this.set(this.length, value, childTypeId);
  }
  set(index, value, childTypeId) {
    if (childTypeId === void 0) {
      childTypeId = this._valueToChildTypeId(this, value, index);
    }
    if (this.setValid(index, this.isValid(value))) {
      this.setValue(index, value, childTypeId);
    }
    return this;
  }
  setValue(index, value, childTypeId) {
    this._typeIds.set(index, childTypeId);
    super.setValue(index, value);
  }
  addChild(child, name = `${this.children.length}`) {
    const childTypeId = this.children.push(child);
    const { type: { children, mode, typeIds } } = this;
    const fields = [...children, new Field(name, child.type)];
    this.type = new Union_(mode, [...typeIds, childTypeId], fields);
    return childTypeId;
  }
  _valueToChildTypeId(builder, value, offset) {
    throw new Error(`Cannot map UnionBuilder value to child typeId. Pass the \`childTypeId\` as the second argument to unionBuilder.append(), or supply a \`valueToChildTypeId\` function as part of the UnionBuilder constructor options.`);
  }
}
class SparseUnionBuilder extends UnionBuilder {
}
class DenseUnionBuilder extends UnionBuilder {
  constructor(options) {
    super(options);
    this._offsets = new DataBufferBuilder(new Int32Array(0));
  }
  setValue(index, value, childTypeId) {
    const childIndex = this.type.typeIdToChildIndex[childTypeId];
    this._offsets.set(index, this.getChildAt(childIndex).length);
    return super.setValue(index, value, childTypeId);
  }
}
class Visitor {
  visitMany(nodes, ...args) {
    return nodes.map((node, i) => this.visit(node, ...args.map((x) => x[i])));
  }
  visit(...args) {
    return this.getVisitFn(args[0], false).apply(this, args);
  }
  getVisitFn(node, throwIfNotFound = true) {
    return getVisitFn(this, node, throwIfNotFound);
  }
  visitNull(_node, ..._args) {
    return null;
  }
  visitBool(_node, ..._args) {
    return null;
  }
  visitInt(_node, ..._args) {
    return null;
  }
  visitFloat(_node, ..._args) {
    return null;
  }
  visitUtf8(_node, ..._args) {
    return null;
  }
  visitBinary(_node, ..._args) {
    return null;
  }
  visitFixedSizeBinary(_node, ..._args) {
    return null;
  }
  visitDate(_node, ..._args) {
    return null;
  }
  visitTimestamp(_node, ..._args) {
    return null;
  }
  visitTime(_node, ..._args) {
    return null;
  }
  visitDecimal(_node, ..._args) {
    return null;
  }
  visitList(_node, ..._args) {
    return null;
  }
  visitStruct(_node, ..._args) {
    return null;
  }
  visitUnion(_node, ..._args) {
    return null;
  }
  visitDictionary(_node, ..._args) {
    return null;
  }
  visitInterval(_node, ..._args) {
    return null;
  }
  visitFixedSizeList(_node, ..._args) {
    return null;
  }
  visitMap(_node, ..._args) {
    return null;
  }
}
function getVisitFn(visitor, node, throwIfNotFound = true) {
  let fn = null;
  let dtype = Type.NONE;
  if (node instanceof Data)
    dtype = inferDType(node.type);
  else if (node instanceof AbstractVector)
    dtype = inferDType(node.type);
  else if (node instanceof DataType)
    dtype = inferDType(node);
  else if (typeof (dtype = node) !== "number")
    dtype = Type[node];
  switch (dtype) {
    case Type.Null:
      fn = visitor.visitNull;
      break;
    case Type.Bool:
      fn = visitor.visitBool;
      break;
    case Type.Int:
      fn = visitor.visitInt;
      break;
    case Type.Int8:
      fn = visitor.visitInt8 || visitor.visitInt;
      break;
    case Type.Int16:
      fn = visitor.visitInt16 || visitor.visitInt;
      break;
    case Type.Int32:
      fn = visitor.visitInt32 || visitor.visitInt;
      break;
    case Type.Int64:
      fn = visitor.visitInt64 || visitor.visitInt;
      break;
    case Type.Uint8:
      fn = visitor.visitUint8 || visitor.visitInt;
      break;
    case Type.Uint16:
      fn = visitor.visitUint16 || visitor.visitInt;
      break;
    case Type.Uint32:
      fn = visitor.visitUint32 || visitor.visitInt;
      break;
    case Type.Uint64:
      fn = visitor.visitUint64 || visitor.visitInt;
      break;
    case Type.Float:
      fn = visitor.visitFloat;
      break;
    case Type.Float16:
      fn = visitor.visitFloat16 || visitor.visitFloat;
      break;
    case Type.Float32:
      fn = visitor.visitFloat32 || visitor.visitFloat;
      break;
    case Type.Float64:
      fn = visitor.visitFloat64 || visitor.visitFloat;
      break;
    case Type.Utf8:
      fn = visitor.visitUtf8;
      break;
    case Type.Binary:
      fn = visitor.visitBinary;
      break;
    case Type.FixedSizeBinary:
      fn = visitor.visitFixedSizeBinary;
      break;
    case Type.Date:
      fn = visitor.visitDate;
      break;
    case Type.DateDay:
      fn = visitor.visitDateDay || visitor.visitDate;
      break;
    case Type.DateMillisecond:
      fn = visitor.visitDateMillisecond || visitor.visitDate;
      break;
    case Type.Timestamp:
      fn = visitor.visitTimestamp;
      break;
    case Type.TimestampSecond:
      fn = visitor.visitTimestampSecond || visitor.visitTimestamp;
      break;
    case Type.TimestampMillisecond:
      fn = visitor.visitTimestampMillisecond || visitor.visitTimestamp;
      break;
    case Type.TimestampMicrosecond:
      fn = visitor.visitTimestampMicrosecond || visitor.visitTimestamp;
      break;
    case Type.TimestampNanosecond:
      fn = visitor.visitTimestampNanosecond || visitor.visitTimestamp;
      break;
    case Type.Time:
      fn = visitor.visitTime;
      break;
    case Type.TimeSecond:
      fn = visitor.visitTimeSecond || visitor.visitTime;
      break;
    case Type.TimeMillisecond:
      fn = visitor.visitTimeMillisecond || visitor.visitTime;
      break;
    case Type.TimeMicrosecond:
      fn = visitor.visitTimeMicrosecond || visitor.visitTime;
      break;
    case Type.TimeNanosecond:
      fn = visitor.visitTimeNanosecond || visitor.visitTime;
      break;
    case Type.Decimal:
      fn = visitor.visitDecimal;
      break;
    case Type.List:
      fn = visitor.visitList;
      break;
    case Type.Struct:
      fn = visitor.visitStruct;
      break;
    case Type.Union:
      fn = visitor.visitUnion;
      break;
    case Type.DenseUnion:
      fn = visitor.visitDenseUnion || visitor.visitUnion;
      break;
    case Type.SparseUnion:
      fn = visitor.visitSparseUnion || visitor.visitUnion;
      break;
    case Type.Dictionary:
      fn = visitor.visitDictionary;
      break;
    case Type.Interval:
      fn = visitor.visitInterval;
      break;
    case Type.IntervalDayTime:
      fn = visitor.visitIntervalDayTime || visitor.visitInterval;
      break;
    case Type.IntervalYearMonth:
      fn = visitor.visitIntervalYearMonth || visitor.visitInterval;
      break;
    case Type.FixedSizeList:
      fn = visitor.visitFixedSizeList;
      break;
    case Type.Map:
      fn = visitor.visitMap;
      break;
  }
  if (typeof fn === "function")
    return fn;
  if (!throwIfNotFound)
    return () => null;
  throw new Error(`Unrecognized type '${Type[dtype]}'`);
}
function inferDType(type) {
  switch (type.typeId) {
    case Type.Null:
      return Type.Null;
    case Type.Int: {
      const { bitWidth, isSigned } = type;
      switch (bitWidth) {
        case 8:
          return isSigned ? Type.Int8 : Type.Uint8;
        case 16:
          return isSigned ? Type.Int16 : Type.Uint16;
        case 32:
          return isSigned ? Type.Int32 : Type.Uint32;
        case 64:
          return isSigned ? Type.Int64 : Type.Uint64;
      }
      return Type.Int;
    }
    case Type.Float:
      switch (type.precision) {
        case Precision.HALF:
          return Type.Float16;
        case Precision.SINGLE:
          return Type.Float32;
        case Precision.DOUBLE:
          return Type.Float64;
      }
      return Type.Float;
    case Type.Binary:
      return Type.Binary;
    case Type.Utf8:
      return Type.Utf8;
    case Type.Bool:
      return Type.Bool;
    case Type.Decimal:
      return Type.Decimal;
    case Type.Time:
      switch (type.unit) {
        case TimeUnit.SECOND:
          return Type.TimeSecond;
        case TimeUnit.MILLISECOND:
          return Type.TimeMillisecond;
        case TimeUnit.MICROSECOND:
          return Type.TimeMicrosecond;
        case TimeUnit.NANOSECOND:
          return Type.TimeNanosecond;
      }
      return Type.Time;
    case Type.Timestamp:
      switch (type.unit) {
        case TimeUnit.SECOND:
          return Type.TimestampSecond;
        case TimeUnit.MILLISECOND:
          return Type.TimestampMillisecond;
        case TimeUnit.MICROSECOND:
          return Type.TimestampMicrosecond;
        case TimeUnit.NANOSECOND:
          return Type.TimestampNanosecond;
      }
      return Type.Timestamp;
    case Type.Date:
      switch (type.unit) {
        case DateUnit.DAY:
          return Type.DateDay;
        case DateUnit.MILLISECOND:
          return Type.DateMillisecond;
      }
      return Type.Date;
    case Type.Interval:
      switch (type.unit) {
        case IntervalUnit.DAY_TIME:
          return Type.IntervalDayTime;
        case IntervalUnit.YEAR_MONTH:
          return Type.IntervalYearMonth;
      }
      return Type.Interval;
    case Type.Map:
      return Type.Map;
    case Type.List:
      return Type.List;
    case Type.Struct:
      return Type.Struct;
    case Type.Union:
      switch (type.mode) {
        case UnionMode.Dense:
          return Type.DenseUnion;
        case UnionMode.Sparse:
          return Type.SparseUnion;
      }
      return Type.Union;
    case Type.FixedSizeBinary:
      return Type.FixedSizeBinary;
    case Type.FixedSizeList:
      return Type.FixedSizeList;
    case Type.Dictionary:
      return Type.Dictionary;
  }
  throw new Error(`Unrecognized type '${Type[type.typeId]}'`);
}
Visitor.prototype.visitInt8 = null;
Visitor.prototype.visitInt16 = null;
Visitor.prototype.visitInt32 = null;
Visitor.prototype.visitInt64 = null;
Visitor.prototype.visitUint8 = null;
Visitor.prototype.visitUint16 = null;
Visitor.prototype.visitUint32 = null;
Visitor.prototype.visitUint64 = null;
Visitor.prototype.visitFloat16 = null;
Visitor.prototype.visitFloat32 = null;
Visitor.prototype.visitFloat64 = null;
Visitor.prototype.visitDateDay = null;
Visitor.prototype.visitDateMillisecond = null;
Visitor.prototype.visitTimestampSecond = null;
Visitor.prototype.visitTimestampMillisecond = null;
Visitor.prototype.visitTimestampMicrosecond = null;
Visitor.prototype.visitTimestampNanosecond = null;
Visitor.prototype.visitTimeSecond = null;
Visitor.prototype.visitTimeMillisecond = null;
Visitor.prototype.visitTimeMicrosecond = null;
Visitor.prototype.visitTimeNanosecond = null;
Visitor.prototype.visitDenseUnion = null;
Visitor.prototype.visitSparseUnion = null;
Visitor.prototype.visitIntervalDayTime = null;
Visitor.prototype.visitIntervalYearMonth = null;
class SetVisitor extends Visitor {
}
const setEpochMsToDays = (data, index, epochMs) => {
  data[index] = epochMs / 864e5 | 0;
};
const setEpochMsToMillisecondsLong = (data, index, epochMs) => {
  data[index] = epochMs % 4294967296 | 0;
  data[index + 1] = epochMs / 4294967296 | 0;
};
const setEpochMsToMicrosecondsLong = (data, index, epochMs) => {
  data[index] = epochMs * 1e3 % 4294967296 | 0;
  data[index + 1] = epochMs * 1e3 / 4294967296 | 0;
};
const setEpochMsToNanosecondsLong = (data, index, epochMs) => {
  data[index] = epochMs * 1e6 % 4294967296 | 0;
  data[index + 1] = epochMs * 1e6 / 4294967296 | 0;
};
const setVariableWidthBytes = (values, valueOffsets, index, value) => {
  const { [index]: x, [index + 1]: y } = valueOffsets;
  if (x != null && y != null) {
    values.set(value.subarray(0, y - x), x);
  }
};
const setBool = ({ offset, values }, index, val) => {
  const idx = offset + index;
  val ? values[idx >> 3] |= 1 << idx % 8 : values[idx >> 3] &= ~(1 << idx % 8);
};
const setDateDay = ({ values }, index, value) => {
  setEpochMsToDays(values, index, value.valueOf());
};
const setDateMillisecond = ({ values }, index, value) => {
  setEpochMsToMillisecondsLong(values, index * 2, value.valueOf());
};
const setNumeric = ({ stride, values }, index, value) => {
  values[stride * index] = value;
};
const setFloat16 = ({ stride, values }, index, value) => {
  values[stride * index] = float64ToUint16(value);
};
const setNumericX2 = (vector, index, value) => {
  switch (typeof value) {
    case "bigint":
      vector.values64[index] = value;
      break;
    case "number":
      vector.values[index * vector.stride] = value;
      break;
    default: {
      const val = value;
      const { stride, ArrayType } = vector;
      const long = toArrayBufferView(ArrayType, val);
      vector.values.set(long.subarray(0, stride), stride * index);
    }
  }
};
const setFixedSizeBinary = ({ stride, values }, index, value) => {
  values.set(value.subarray(0, stride), stride * index);
};
const setBinary = ({ values, valueOffsets }, index, value) => setVariableWidthBytes(values, valueOffsets, index, value);
const setUtf8 = ({ values, valueOffsets }, index, value) => {
  setVariableWidthBytes(values, valueOffsets, index, encodeUtf8(value));
};
const setInt = (vector, index, value) => {
  vector.type.bitWidth < 64 ? setNumeric(vector, index, value) : setNumericX2(vector, index, value);
};
const setFloat = (vector, index, value) => {
  vector.type.precision !== Precision.HALF ? setNumeric(vector, index, value) : setFloat16(vector, index, value);
};
const setDate = (vector, index, value) => {
  vector.type.unit === DateUnit.DAY ? setDateDay(vector, index, value) : setDateMillisecond(vector, index, value);
};
const setTimestampSecond = ({ values }, index, value) => setEpochMsToMillisecondsLong(values, index * 2, value / 1e3);
const setTimestampMillisecond = ({ values }, index, value) => setEpochMsToMillisecondsLong(values, index * 2, value);
const setTimestampMicrosecond = ({ values }, index, value) => setEpochMsToMicrosecondsLong(values, index * 2, value);
const setTimestampNanosecond = ({ values }, index, value) => setEpochMsToNanosecondsLong(values, index * 2, value);
const setTimestamp = (vector, index, value) => {
  switch (vector.type.unit) {
    case TimeUnit.SECOND:
      return setTimestampSecond(vector, index, value);
    case TimeUnit.MILLISECOND:
      return setTimestampMillisecond(vector, index, value);
    case TimeUnit.MICROSECOND:
      return setTimestampMicrosecond(vector, index, value);
    case TimeUnit.NANOSECOND:
      return setTimestampNanosecond(vector, index, value);
  }
};
const setTimeSecond = ({ values, stride }, index, value) => {
  values[stride * index] = value;
};
const setTimeMillisecond = ({ values, stride }, index, value) => {
  values[stride * index] = value;
};
const setTimeMicrosecond = ({ values }, index, value) => {
  values.set(value.subarray(0, 2), 2 * index);
};
const setTimeNanosecond = ({ values }, index, value) => {
  values.set(value.subarray(0, 2), 2 * index);
};
const setTime = (vector, index, value) => {
  switch (vector.type.unit) {
    case TimeUnit.SECOND:
      return setTimeSecond(vector, index, value);
    case TimeUnit.MILLISECOND:
      return setTimeMillisecond(vector, index, value);
    case TimeUnit.MICROSECOND:
      return setTimeMicrosecond(vector, index, value);
    case TimeUnit.NANOSECOND:
      return setTimeNanosecond(vector, index, value);
  }
};
const setDecimal = ({ values }, index, value) => {
  values.set(value.subarray(0, 4), 4 * index);
};
const setList = (vector, index, value) => {
  const values = vector.getChildAt(0), valueOffsets = vector.valueOffsets;
  for (let idx = -1, itr = valueOffsets[index], end = valueOffsets[index + 1]; itr < end; ) {
    values.set(itr++, value.get(++idx));
  }
};
const setMap = (vector, index, value) => {
  const values = vector.getChildAt(0), valueOffsets = vector.valueOffsets;
  const entries = value instanceof Map ? [...value] : Object.entries(value);
  for (let idx = -1, itr = valueOffsets[index], end = valueOffsets[index + 1]; itr < end; ) {
    values.set(itr++, entries[++idx]);
  }
};
const _setStructArrayValue = (o, v) => (c, _, i) => c === null || c === void 0 ? void 0 : c.set(o, v[i]);
const _setStructVectorValue = (o, v) => (c, _, i) => c === null || c === void 0 ? void 0 : c.set(o, v.get(i));
const _setStructMapValue = (o, v) => (c, f, _) => c === null || c === void 0 ? void 0 : c.set(o, v.get(f.name));
const _setStructObjectValue = (o, v) => (c, f, _) => c === null || c === void 0 ? void 0 : c.set(o, v[f.name]);
const setStruct = (vector, index, value) => {
  const setValue = value instanceof Map ? _setStructMapValue(index, value) : value instanceof AbstractVector ? _setStructVectorValue(index, value) : Array.isArray(value) ? _setStructArrayValue(index, value) : _setStructObjectValue(index, value);
  vector.type.children.forEach((f, i) => setValue(vector.getChildAt(i), f, i));
};
const setUnion = (vector, index, value) => {
  vector.type.mode === UnionMode.Dense ? setDenseUnion(vector, index, value) : setSparseUnion(vector, index, value);
};
const setDenseUnion = (vector, index, value) => {
  const childIndex = vector.typeIdToChildIndex[vector.typeIds[index]];
  const child = vector.getChildAt(childIndex);
  child && child.set(vector.valueOffsets[index], value);
};
const setSparseUnion = (vector, index, value) => {
  const childIndex = vector.typeIdToChildIndex[vector.typeIds[index]];
  const child = vector.getChildAt(childIndex);
  child && child.set(index, value);
};
const setDictionary = (vector, index, value) => {
  const key = vector.getKey(index);
  if (key !== null) {
    vector.setValue(key, value);
  }
};
const setIntervalValue = (vector, index, value) => {
  vector.type.unit === IntervalUnit.DAY_TIME ? setIntervalDayTime(vector, index, value) : setIntervalYearMonth(vector, index, value);
};
const setIntervalDayTime = ({ values }, index, value) => {
  values.set(value.subarray(0, 2), 2 * index);
};
const setIntervalYearMonth = ({ values }, index, value) => {
  values[index] = value[0] * 12 + value[1] % 12;
};
const setFixedSizeList = (vector, index, value) => {
  const child = vector.getChildAt(0), { stride } = vector;
  for (let idx = -1, offset = index * stride; ++idx < stride; ) {
    child.set(offset + idx, value.get(idx));
  }
};
SetVisitor.prototype.visitBool = setBool;
SetVisitor.prototype.visitInt = setInt;
SetVisitor.prototype.visitInt8 = setNumeric;
SetVisitor.prototype.visitInt16 = setNumeric;
SetVisitor.prototype.visitInt32 = setNumeric;
SetVisitor.prototype.visitInt64 = setNumericX2;
SetVisitor.prototype.visitUint8 = setNumeric;
SetVisitor.prototype.visitUint16 = setNumeric;
SetVisitor.prototype.visitUint32 = setNumeric;
SetVisitor.prototype.visitUint64 = setNumericX2;
SetVisitor.prototype.visitFloat = setFloat;
SetVisitor.prototype.visitFloat16 = setFloat16;
SetVisitor.prototype.visitFloat32 = setNumeric;
SetVisitor.prototype.visitFloat64 = setNumeric;
SetVisitor.prototype.visitUtf8 = setUtf8;
SetVisitor.prototype.visitBinary = setBinary;
SetVisitor.prototype.visitFixedSizeBinary = setFixedSizeBinary;
SetVisitor.prototype.visitDate = setDate;
SetVisitor.prototype.visitDateDay = setDateDay;
SetVisitor.prototype.visitDateMillisecond = setDateMillisecond;
SetVisitor.prototype.visitTimestamp = setTimestamp;
SetVisitor.prototype.visitTimestampSecond = setTimestampSecond;
SetVisitor.prototype.visitTimestampMillisecond = setTimestampMillisecond;
SetVisitor.prototype.visitTimestampMicrosecond = setTimestampMicrosecond;
SetVisitor.prototype.visitTimestampNanosecond = setTimestampNanosecond;
SetVisitor.prototype.visitTime = setTime;
SetVisitor.prototype.visitTimeSecond = setTimeSecond;
SetVisitor.prototype.visitTimeMillisecond = setTimeMillisecond;
SetVisitor.prototype.visitTimeMicrosecond = setTimeMicrosecond;
SetVisitor.prototype.visitTimeNanosecond = setTimeNanosecond;
SetVisitor.prototype.visitDecimal = setDecimal;
SetVisitor.prototype.visitList = setList;
SetVisitor.prototype.visitStruct = setStruct;
SetVisitor.prototype.visitUnion = setUnion;
SetVisitor.prototype.visitDenseUnion = setDenseUnion;
SetVisitor.prototype.visitSparseUnion = setSparseUnion;
SetVisitor.prototype.visitDictionary = setDictionary;
SetVisitor.prototype.visitInterval = setIntervalValue;
SetVisitor.prototype.visitIntervalDayTime = setIntervalDayTime;
SetVisitor.prototype.visitIntervalYearMonth = setIntervalYearMonth;
SetVisitor.prototype.visitFixedSizeList = setFixedSizeList;
SetVisitor.prototype.visitMap = setMap;
const instance$9 = new SetVisitor();
class GetBuilderCtor extends Visitor {
  visitNull() {
    return NullBuilder;
  }
  visitBool() {
    return BoolBuilder;
  }
  visitInt() {
    return IntBuilder;
  }
  visitInt8() {
    return Int8Builder;
  }
  visitInt16() {
    return Int16Builder;
  }
  visitInt32() {
    return Int32Builder;
  }
  visitInt64() {
    return Int64Builder;
  }
  visitUint8() {
    return Uint8Builder;
  }
  visitUint16() {
    return Uint16Builder;
  }
  visitUint32() {
    return Uint32Builder;
  }
  visitUint64() {
    return Uint64Builder;
  }
  visitFloat() {
    return FloatBuilder;
  }
  visitFloat16() {
    return Float16Builder;
  }
  visitFloat32() {
    return Float32Builder;
  }
  visitFloat64() {
    return Float64Builder;
  }
  visitUtf8() {
    return Utf8Builder;
  }
  visitBinary() {
    return BinaryBuilder;
  }
  visitFixedSizeBinary() {
    return FixedSizeBinaryBuilder;
  }
  visitDate() {
    return DateBuilder;
  }
  visitDateDay() {
    return DateDayBuilder;
  }
  visitDateMillisecond() {
    return DateMillisecondBuilder;
  }
  visitTimestamp() {
    return TimestampBuilder;
  }
  visitTimestampSecond() {
    return TimestampSecondBuilder;
  }
  visitTimestampMillisecond() {
    return TimestampMillisecondBuilder;
  }
  visitTimestampMicrosecond() {
    return TimestampMicrosecondBuilder;
  }
  visitTimestampNanosecond() {
    return TimestampNanosecondBuilder;
  }
  visitTime() {
    return TimeBuilder;
  }
  visitTimeSecond() {
    return TimeSecondBuilder;
  }
  visitTimeMillisecond() {
    return TimeMillisecondBuilder;
  }
  visitTimeMicrosecond() {
    return TimeMicrosecondBuilder;
  }
  visitTimeNanosecond() {
    return TimeNanosecondBuilder;
  }
  visitDecimal() {
    return DecimalBuilder;
  }
  visitList() {
    return ListBuilder;
  }
  visitStruct() {
    return StructBuilder;
  }
  visitUnion() {
    return UnionBuilder;
  }
  visitDenseUnion() {
    return DenseUnionBuilder;
  }
  visitSparseUnion() {
    return SparseUnionBuilder;
  }
  visitDictionary() {
    return DictionaryBuilder;
  }
  visitInterval() {
    return IntervalBuilder;
  }
  visitIntervalDayTime() {
    return IntervalDayTimeBuilder;
  }
  visitIntervalYearMonth() {
    return IntervalYearMonthBuilder;
  }
  visitFixedSizeList() {
    return FixedSizeListBuilder;
  }
  visitMap() {
    return MapBuilder;
  }
}
const instance$8 = new GetBuilderCtor();
Builder$2.new = newBuilder;
function newBuilder(options) {
  const type = options.type;
  const builder = new (instance$8.getVisitFn(type)())(options);
  if (type.children && type.children.length > 0) {
    const children = options["children"] || [];
    const defaultOptions = { "nullValues": options["nullValues"] };
    const getChildOptions = Array.isArray(children) ? (_, i) => children[i] || defaultOptions : ({ name }) => children[name] || defaultOptions;
    type.children.forEach((field, index) => {
      const { type: type2 } = field;
      const opts = getChildOptions(field, index);
      builder.children.push(newBuilder(Object.assign(Object.assign({}, opts), { type: type2 })));
    });
  }
  return builder;
}
Object.keys(Type).map((T) => Type[T]).filter((T) => typeof T === "number" && T !== Type.NONE).forEach((typeId) => {
  const BuilderCtor = instance$8.visit(typeId);
  BuilderCtor.prototype._setValue = instance$9.getVisitFn(typeId);
});
Utf8Builder.prototype._setValue = instance$9.visitBinary;
class Footer {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  static getRootAsFooter(bb, obj) {
    return (obj || new Footer()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  static getSizePrefixedRootAsFooter(bb, obj) {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new Footer()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  version() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readInt16(this.bb_pos + offset) : MetadataVersion.V1;
  }
  schema(obj) {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? (obj || new Schema$1()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
  }
  dictionaries(index, obj) {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? (obj || new Block()).__init(this.bb.__vector(this.bb_pos + offset) + index * 24, this.bb) : null;
  }
  dictionariesLength() {
    const offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  recordBatches(index, obj) {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? (obj || new Block()).__init(this.bb.__vector(this.bb_pos + offset) + index * 24, this.bb) : null;
  }
  recordBatchesLength() {
    const offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  customMetadata(index, obj) {
    const offset = this.bb.__offset(this.bb_pos, 12);
    return offset ? (obj || new KeyValue()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
  }
  customMetadataLength() {
    const offset = this.bb.__offset(this.bb_pos, 12);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  static startFooter(builder) {
    builder.startObject(5);
  }
  static addVersion(builder, version) {
    builder.addFieldInt16(0, version, MetadataVersion.V1);
  }
  static addSchema(builder, schemaOffset) {
    builder.addFieldOffset(1, schemaOffset, 0);
  }
  static addDictionaries(builder, dictionariesOffset) {
    builder.addFieldOffset(2, dictionariesOffset, 0);
  }
  static startDictionariesVector(builder, numElems) {
    builder.startVector(24, numElems, 8);
  }
  static addRecordBatches(builder, recordBatchesOffset) {
    builder.addFieldOffset(3, recordBatchesOffset, 0);
  }
  static startRecordBatchesVector(builder, numElems) {
    builder.startVector(24, numElems, 8);
  }
  static addCustomMetadata(builder, customMetadataOffset) {
    builder.addFieldOffset(4, customMetadataOffset, 0);
  }
  static createCustomMetadataVector(builder, data) {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addOffset(data[i]);
    }
    return builder.endVector();
  }
  static startCustomMetadataVector(builder, numElems) {
    builder.startVector(4, numElems, 4);
  }
  static endFooter(builder) {
    const offset = builder.endObject();
    return offset;
  }
  static finishFooterBuffer(builder, offset) {
    builder.finish(offset);
  }
  static finishSizePrefixedFooterBuffer(builder, offset) {
    builder.finish(offset, void 0, true);
  }
  static createFooter(builder, version, schemaOffset, dictionariesOffset, recordBatchesOffset, customMetadataOffset) {
    Footer.startFooter(builder);
    Footer.addVersion(builder, version);
    Footer.addSchema(builder, schemaOffset);
    Footer.addDictionaries(builder, dictionariesOffset);
    Footer.addRecordBatches(builder, recordBatchesOffset);
    Footer.addCustomMetadata(builder, customMetadataOffset);
    return Footer.endFooter(builder);
  }
}
class Block {
  constructor() {
    this.bb = null;
    this.bb_pos = 0;
  }
  __init(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }
  offset() {
    return this.bb.readInt64(this.bb_pos);
  }
  metaDataLength() {
    return this.bb.readInt32(this.bb_pos + 8);
  }
  bodyLength() {
    return this.bb.readInt64(this.bb_pos + 16);
  }
  static createBlock(builder, offset, metaDataLength, bodyLength) {
    builder.prep(8, 24);
    builder.writeInt64(bodyLength);
    builder.pad(4);
    builder.writeInt32(metaDataLength);
    builder.writeInt64(offset);
    return builder.offset();
  }
}
var Long$2 = flatbuffers.Long;
var Builder$1 = flatbuffers.Builder;
var ByteBuffer$2 = flatbuffers.ByteBuffer;
class Footer_ {
  constructor(schema, version = MetadataVersion.V4, recordBatches, dictionaryBatches) {
    this.schema = schema;
    this.version = version;
    recordBatches && (this._recordBatches = recordBatches);
    dictionaryBatches && (this._dictionaryBatches = dictionaryBatches);
  }
  static decode(buf) {
    buf = new ByteBuffer$2(toUint8Array(buf));
    const footer = Footer.getRootAsFooter(buf);
    const schema = Schema.decode(footer.schema());
    return new OffHeapFooter(schema, footer);
  }
  static encode(footer) {
    const b = new Builder$1();
    const schemaOffset = Schema.encode(b, footer.schema);
    Footer.startRecordBatchesVector(b, footer.numRecordBatches);
    [...footer.recordBatches()].slice().reverse().forEach((rb) => FileBlock.encode(b, rb));
    const recordBatchesOffset = b.endVector();
    Footer.startDictionariesVector(b, footer.numDictionaries);
    [...footer.dictionaryBatches()].slice().reverse().forEach((db) => FileBlock.encode(b, db));
    const dictionaryBatchesOffset = b.endVector();
    Footer.startFooter(b);
    Footer.addSchema(b, schemaOffset);
    Footer.addVersion(b, MetadataVersion.V4);
    Footer.addRecordBatches(b, recordBatchesOffset);
    Footer.addDictionaries(b, dictionaryBatchesOffset);
    Footer.finishFooterBuffer(b, Footer.endFooter(b));
    return b.asUint8Array();
  }
  get numRecordBatches() {
    return this._recordBatches.length;
  }
  get numDictionaries() {
    return this._dictionaryBatches.length;
  }
  *recordBatches() {
    for (let block, i = -1, n = this.numRecordBatches; ++i < n; ) {
      if (block = this.getRecordBatch(i)) {
        yield block;
      }
    }
  }
  *dictionaryBatches() {
    for (let block, i = -1, n = this.numDictionaries; ++i < n; ) {
      if (block = this.getDictionaryBatch(i)) {
        yield block;
      }
    }
  }
  getRecordBatch(index) {
    return index >= 0 && index < this.numRecordBatches && this._recordBatches[index] || null;
  }
  getDictionaryBatch(index) {
    return index >= 0 && index < this.numDictionaries && this._dictionaryBatches[index] || null;
  }
}
class OffHeapFooter extends Footer_ {
  constructor(schema, _footer) {
    super(schema, _footer.version());
    this._footer = _footer;
  }
  get numRecordBatches() {
    return this._footer.recordBatchesLength();
  }
  get numDictionaries() {
    return this._footer.dictionariesLength();
  }
  getRecordBatch(index) {
    if (index >= 0 && index < this.numRecordBatches) {
      const fileBlock = this._footer.recordBatches(index);
      if (fileBlock) {
        return FileBlock.decode(fileBlock);
      }
    }
    return null;
  }
  getDictionaryBatch(index) {
    if (index >= 0 && index < this.numDictionaries) {
      const fileBlock = this._footer.dictionaries(index);
      if (fileBlock) {
        return FileBlock.decode(fileBlock);
      }
    }
    return null;
  }
}
class FileBlock {
  constructor(metaDataLength, bodyLength, offset) {
    this.metaDataLength = metaDataLength;
    this.offset = typeof offset === "number" ? offset : offset.low;
    this.bodyLength = typeof bodyLength === "number" ? bodyLength : bodyLength.low;
  }
  static decode(block) {
    return new FileBlock(block.metaDataLength(), block.bodyLength(), block.offset());
  }
  static encode(b, fileBlock) {
    const { metaDataLength } = fileBlock;
    const offset = new Long$2(fileBlock.offset, 0);
    const bodyLength = new Long$2(fileBlock.bodyLength, 0);
    return Block.createBlock(b, offset, metaDataLength, bodyLength);
  }
}
class AsyncByteQueue extends AsyncQueue {
  write(value) {
    if ((value = toUint8Array(value)).byteLength > 0) {
      return super.write(value);
    }
  }
  toString(sync = false) {
    return sync ? decodeUtf8(this.toUint8Array(true)) : this.toUint8Array(false).then(decodeUtf8);
  }
  toUint8Array(sync = false) {
    return sync ? joinUint8Arrays(this._values)[0] : (() => __awaiter(this, void 0, void 0, function* () {
      var e_1, _a;
      const buffers = [];
      let byteLength = 0;
      try {
        for (var _b = __asyncValues(this), _c; _c = yield _b.next(), !_c.done; ) {
          const chunk = _c.value;
          buffers.push(chunk);
          byteLength += chunk.byteLength;
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return))
            yield _a.call(_b);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      return joinUint8Arrays(buffers, byteLength)[0];
    }))();
  }
}
class ByteStream {
  constructor(source) {
    if (source) {
      this.source = new ByteStreamSource(streamAdapters.fromIterable(source));
    }
  }
  [Symbol.iterator]() {
    return this;
  }
  next(value) {
    return this.source.next(value);
  }
  throw(value) {
    return this.source.throw(value);
  }
  return(value) {
    return this.source.return(value);
  }
  peek(size) {
    return this.source.peek(size);
  }
  read(size) {
    return this.source.read(size);
  }
}
class AsyncByteStream {
  constructor(source) {
    if (source instanceof AsyncByteStream) {
      this.source = source.source;
    } else if (source instanceof AsyncByteQueue) {
      this.source = new AsyncByteStreamSource(streamAdapters.fromAsyncIterable(source));
    } else if (isReadableNodeStream(source)) {
      this.source = new AsyncByteStreamSource(streamAdapters.fromNodeStream(source));
    } else if (isReadableDOMStream(source)) {
      this.source = new AsyncByteStreamSource(streamAdapters.fromDOMStream(source));
    } else if (isFetchResponse(source)) {
      this.source = new AsyncByteStreamSource(streamAdapters.fromDOMStream(source.body));
    } else if (isIterable(source)) {
      this.source = new AsyncByteStreamSource(streamAdapters.fromIterable(source));
    } else if (isPromise(source)) {
      this.source = new AsyncByteStreamSource(streamAdapters.fromAsyncIterable(source));
    } else if (isAsyncIterable(source)) {
      this.source = new AsyncByteStreamSource(streamAdapters.fromAsyncIterable(source));
    }
  }
  [Symbol.asyncIterator]() {
    return this;
  }
  next(value) {
    return this.source.next(value);
  }
  throw(value) {
    return this.source.throw(value);
  }
  return(value) {
    return this.source.return(value);
  }
  get closed() {
    return this.source.closed;
  }
  cancel(reason) {
    return this.source.cancel(reason);
  }
  peek(size) {
    return this.source.peek(size);
  }
  read(size) {
    return this.source.read(size);
  }
}
class ByteStreamSource {
  constructor(source) {
    this.source = source;
  }
  cancel(reason) {
    this.return(reason);
  }
  peek(size) {
    return this.next(size, "peek").value;
  }
  read(size) {
    return this.next(size, "read").value;
  }
  next(size, cmd = "read") {
    return this.source.next({ cmd, size });
  }
  throw(value) {
    return Object.create(this.source.throw && this.source.throw(value) || ITERATOR_DONE);
  }
  return(value) {
    return Object.create(this.source.return && this.source.return(value) || ITERATOR_DONE);
  }
}
class AsyncByteStreamSource {
  constructor(source) {
    this.source = source;
    this._closedPromise = new Promise((r) => this._closedPromiseResolve = r);
  }
  cancel(reason) {
    return __awaiter(this, void 0, void 0, function* () {
      yield this.return(reason);
    });
  }
  get closed() {
    return this._closedPromise;
  }
  read(size) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.next(size, "read")).value;
    });
  }
  peek(size) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.next(size, "peek")).value;
    });
  }
  next(size, cmd = "read") {
    return __awaiter(this, void 0, void 0, function* () {
      return yield this.source.next({ cmd, size });
    });
  }
  throw(value) {
    return __awaiter(this, void 0, void 0, function* () {
      const result = this.source.throw && (yield this.source.throw(value)) || ITERATOR_DONE;
      this._closedPromiseResolve && this._closedPromiseResolve();
      this._closedPromiseResolve = void 0;
      return Object.create(result);
    });
  }
  return(value) {
    return __awaiter(this, void 0, void 0, function* () {
      const result = this.source.return && (yield this.source.return(value)) || ITERATOR_DONE;
      this._closedPromiseResolve && this._closedPromiseResolve();
      this._closedPromiseResolve = void 0;
      return Object.create(result);
    });
  }
}
class RandomAccessFile extends ByteStream {
  constructor(buffer, byteLength) {
    super();
    this.position = 0;
    this.buffer = toUint8Array(buffer);
    this.size = typeof byteLength === "undefined" ? this.buffer.byteLength : byteLength;
  }
  readInt32(position) {
    const { buffer, byteOffset } = this.readAt(position, 4);
    return new DataView(buffer, byteOffset).getInt32(0, true);
  }
  seek(position) {
    this.position = Math.min(position, this.size);
    return position < this.size;
  }
  read(nBytes) {
    const { buffer, size, position } = this;
    if (buffer && position < size) {
      if (typeof nBytes !== "number") {
        nBytes = Infinity;
      }
      this.position = Math.min(size, position + Math.min(size - position, nBytes));
      return buffer.subarray(position, this.position);
    }
    return null;
  }
  readAt(position, nBytes) {
    const buf = this.buffer;
    const end = Math.min(this.size, position + nBytes);
    return buf ? buf.subarray(position, end) : new Uint8Array(nBytes);
  }
  close() {
    this.buffer && (this.buffer = null);
  }
  throw(value) {
    this.close();
    return { done: true, value };
  }
  return(value) {
    this.close();
    return { done: true, value };
  }
}
class AsyncRandomAccessFile extends AsyncByteStream {
  constructor(file, byteLength) {
    super();
    this.position = 0;
    this._handle = file;
    if (typeof byteLength === "number") {
      this.size = byteLength;
    } else {
      this._pending = (() => __awaiter(this, void 0, void 0, function* () {
        this.size = (yield file.stat()).size;
        delete this._pending;
      }))();
    }
  }
  readInt32(position) {
    return __awaiter(this, void 0, void 0, function* () {
      const { buffer, byteOffset } = yield this.readAt(position, 4);
      return new DataView(buffer, byteOffset).getInt32(0, true);
    });
  }
  seek(position) {
    return __awaiter(this, void 0, void 0, function* () {
      this._pending && (yield this._pending);
      this.position = Math.min(position, this.size);
      return position < this.size;
    });
  }
  read(nBytes) {
    return __awaiter(this, void 0, void 0, function* () {
      this._pending && (yield this._pending);
      const { _handle: file, size, position } = this;
      if (file && position < size) {
        if (typeof nBytes !== "number") {
          nBytes = Infinity;
        }
        let pos = position, offset = 0, bytesRead = 0;
        const end = Math.min(size, pos + Math.min(size - pos, nBytes));
        const buffer = new Uint8Array(Math.max(0, (this.position = end) - pos));
        while ((pos += bytesRead) < end && (offset += bytesRead) < buffer.byteLength) {
          ({ bytesRead } = yield file.read(buffer, offset, buffer.byteLength - offset, pos));
        }
        return buffer;
      }
      return null;
    });
  }
  readAt(position, nBytes) {
    return __awaiter(this, void 0, void 0, function* () {
      this._pending && (yield this._pending);
      const { _handle: file, size } = this;
      if (file && position + nBytes < size) {
        const end = Math.min(size, position + nBytes);
        const buffer = new Uint8Array(end - position);
        return (yield file.read(buffer, 0, nBytes, position)).buffer;
      }
      return new Uint8Array(nBytes);
    });
  }
  close() {
    return __awaiter(this, void 0, void 0, function* () {
      const f = this._handle;
      this._handle = null;
      f && (yield f.close());
    });
  }
  throw(value) {
    return __awaiter(this, void 0, void 0, function* () {
      yield this.close();
      return { done: true, value };
    });
  }
  return(value) {
    return __awaiter(this, void 0, void 0, function* () {
      yield this.close();
      return { done: true, value };
    });
  }
}
const carryBit16 = 1 << 16;
function intAsHex(value) {
  if (value < 0) {
    value = 4294967295 + value + 1;
  }
  return `0x${value.toString(16)}`;
}
const kInt32DecimalDigits = 8;
const kPowersOfTen = [
  1,
  10,
  100,
  1e3,
  1e4,
  1e5,
  1e6,
  1e7,
  1e8
];
class BaseInt64 {
  constructor(buffer) {
    this.buffer = buffer;
  }
  high() {
    return this.buffer[1];
  }
  low() {
    return this.buffer[0];
  }
  _times(other) {
    const L = new Uint32Array([
      this.buffer[1] >>> 16,
      this.buffer[1] & 65535,
      this.buffer[0] >>> 16,
      this.buffer[0] & 65535
    ]);
    const R = new Uint32Array([
      other.buffer[1] >>> 16,
      other.buffer[1] & 65535,
      other.buffer[0] >>> 16,
      other.buffer[0] & 65535
    ]);
    let product = L[3] * R[3];
    this.buffer[0] = product & 65535;
    let sum2 = product >>> 16;
    product = L[2] * R[3];
    sum2 += product;
    product = L[3] * R[2] >>> 0;
    sum2 += product;
    this.buffer[0] += sum2 << 16;
    this.buffer[1] = sum2 >>> 0 < product ? carryBit16 : 0;
    this.buffer[1] += sum2 >>> 16;
    this.buffer[1] += L[1] * R[3] + L[2] * R[2] + L[3] * R[1];
    this.buffer[1] += L[0] * R[3] + L[1] * R[2] + L[2] * R[1] + L[3] * R[0] << 16;
    return this;
  }
  _plus(other) {
    const sum2 = this.buffer[0] + other.buffer[0] >>> 0;
    this.buffer[1] += other.buffer[1];
    if (sum2 < this.buffer[0] >>> 0) {
      ++this.buffer[1];
    }
    this.buffer[0] = sum2;
  }
  lessThan(other) {
    return this.buffer[1] < other.buffer[1] || this.buffer[1] === other.buffer[1] && this.buffer[0] < other.buffer[0];
  }
  equals(other) {
    return this.buffer[1] === other.buffer[1] && this.buffer[0] == other.buffer[0];
  }
  greaterThan(other) {
    return other.lessThan(this);
  }
  hex() {
    return `${intAsHex(this.buffer[1])} ${intAsHex(this.buffer[0])}`;
  }
}
class Uint64 extends BaseInt64 {
  times(other) {
    this._times(other);
    return this;
  }
  plus(other) {
    this._plus(other);
    return this;
  }
  static from(val, out_buffer = new Uint32Array(2)) {
    return Uint64.fromString(typeof val === "string" ? val : val.toString(), out_buffer);
  }
  static fromNumber(num, out_buffer = new Uint32Array(2)) {
    return Uint64.fromString(num.toString(), out_buffer);
  }
  static fromString(str, out_buffer = new Uint32Array(2)) {
    const length = str.length;
    const out = new Uint64(out_buffer);
    for (let posn = 0; posn < length; ) {
      const group = kInt32DecimalDigits < length - posn ? kInt32DecimalDigits : length - posn;
      const chunk = new Uint64(new Uint32Array([parseInt(str.substr(posn, group), 10), 0]));
      const multiple = new Uint64(new Uint32Array([kPowersOfTen[group], 0]));
      out.times(multiple);
      out.plus(chunk);
      posn += group;
    }
    return out;
  }
  static convertArray(values) {
    const data = new Uint32Array(values.length * 2);
    for (let i = -1, n = values.length; ++i < n; ) {
      Uint64.from(values[i], new Uint32Array(data.buffer, data.byteOffset + 2 * i * 4, 2));
    }
    return data;
  }
  static multiply(left, right) {
    const rtrn = new Uint64(new Uint32Array(left.buffer));
    return rtrn.times(right);
  }
  static add(left, right) {
    const rtrn = new Uint64(new Uint32Array(left.buffer));
    return rtrn.plus(right);
  }
}
class Int64 extends BaseInt64 {
  negate() {
    this.buffer[0] = ~this.buffer[0] + 1;
    this.buffer[1] = ~this.buffer[1];
    if (this.buffer[0] == 0) {
      ++this.buffer[1];
    }
    return this;
  }
  times(other) {
    this._times(other);
    return this;
  }
  plus(other) {
    this._plus(other);
    return this;
  }
  lessThan(other) {
    const this_high = this.buffer[1] << 0;
    const other_high = other.buffer[1] << 0;
    return this_high < other_high || this_high === other_high && this.buffer[0] < other.buffer[0];
  }
  static from(val, out_buffer = new Uint32Array(2)) {
    return Int64.fromString(typeof val === "string" ? val : val.toString(), out_buffer);
  }
  static fromNumber(num, out_buffer = new Uint32Array(2)) {
    return Int64.fromString(num.toString(), out_buffer);
  }
  static fromString(str, out_buffer = new Uint32Array(2)) {
    const negate = str.startsWith("-");
    const length = str.length;
    const out = new Int64(out_buffer);
    for (let posn = negate ? 1 : 0; posn < length; ) {
      const group = kInt32DecimalDigits < length - posn ? kInt32DecimalDigits : length - posn;
      const chunk = new Int64(new Uint32Array([parseInt(str.substr(posn, group), 10), 0]));
      const multiple = new Int64(new Uint32Array([kPowersOfTen[group], 0]));
      out.times(multiple);
      out.plus(chunk);
      posn += group;
    }
    return negate ? out.negate() : out;
  }
  static convertArray(values) {
    const data = new Uint32Array(values.length * 2);
    for (let i = -1, n = values.length; ++i < n; ) {
      Int64.from(values[i], new Uint32Array(data.buffer, data.byteOffset + 2 * i * 4, 2));
    }
    return data;
  }
  static multiply(left, right) {
    const rtrn = new Int64(new Uint32Array(left.buffer));
    return rtrn.times(right);
  }
  static add(left, right) {
    const rtrn = new Int64(new Uint32Array(left.buffer));
    return rtrn.plus(right);
  }
}
class Int128 {
  constructor(buffer) {
    this.buffer = buffer;
  }
  high() {
    return new Int64(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2));
  }
  low() {
    return new Int64(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset, 2));
  }
  negate() {
    this.buffer[0] = ~this.buffer[0] + 1;
    this.buffer[1] = ~this.buffer[1];
    this.buffer[2] = ~this.buffer[2];
    this.buffer[3] = ~this.buffer[3];
    if (this.buffer[0] == 0) {
      ++this.buffer[1];
    }
    if (this.buffer[1] == 0) {
      ++this.buffer[2];
    }
    if (this.buffer[2] == 0) {
      ++this.buffer[3];
    }
    return this;
  }
  times(other) {
    const L0 = new Uint64(new Uint32Array([this.buffer[3], 0]));
    const L1 = new Uint64(new Uint32Array([this.buffer[2], 0]));
    const L2 = new Uint64(new Uint32Array([this.buffer[1], 0]));
    const L3 = new Uint64(new Uint32Array([this.buffer[0], 0]));
    const R0 = new Uint64(new Uint32Array([other.buffer[3], 0]));
    const R1 = new Uint64(new Uint32Array([other.buffer[2], 0]));
    const R2 = new Uint64(new Uint32Array([other.buffer[1], 0]));
    const R3 = new Uint64(new Uint32Array([other.buffer[0], 0]));
    let product = Uint64.multiply(L3, R3);
    this.buffer[0] = product.low();
    const sum2 = new Uint64(new Uint32Array([product.high(), 0]));
    product = Uint64.multiply(L2, R3);
    sum2.plus(product);
    product = Uint64.multiply(L3, R2);
    sum2.plus(product);
    this.buffer[1] = sum2.low();
    this.buffer[3] = sum2.lessThan(product) ? 1 : 0;
    this.buffer[2] = sum2.high();
    const high = new Uint64(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2));
    high.plus(Uint64.multiply(L1, R3)).plus(Uint64.multiply(L2, R2)).plus(Uint64.multiply(L3, R1));
    this.buffer[3] += Uint64.multiply(L0, R3).plus(Uint64.multiply(L1, R2)).plus(Uint64.multiply(L2, R1)).plus(Uint64.multiply(L3, R0)).low();
    return this;
  }
  plus(other) {
    const sums = new Uint32Array(4);
    sums[3] = this.buffer[3] + other.buffer[3] >>> 0;
    sums[2] = this.buffer[2] + other.buffer[2] >>> 0;
    sums[1] = this.buffer[1] + other.buffer[1] >>> 0;
    sums[0] = this.buffer[0] + other.buffer[0] >>> 0;
    if (sums[0] < this.buffer[0] >>> 0) {
      ++sums[1];
    }
    if (sums[1] < this.buffer[1] >>> 0) {
      ++sums[2];
    }
    if (sums[2] < this.buffer[2] >>> 0) {
      ++sums[3];
    }
    this.buffer[3] = sums[3];
    this.buffer[2] = sums[2];
    this.buffer[1] = sums[1];
    this.buffer[0] = sums[0];
    return this;
  }
  hex() {
    return `${intAsHex(this.buffer[3])} ${intAsHex(this.buffer[2])} ${intAsHex(this.buffer[1])} ${intAsHex(this.buffer[0])}`;
  }
  static multiply(left, right) {
    const rtrn = new Int128(new Uint32Array(left.buffer));
    return rtrn.times(right);
  }
  static add(left, right) {
    const rtrn = new Int128(new Uint32Array(left.buffer));
    return rtrn.plus(right);
  }
  static from(val, out_buffer = new Uint32Array(4)) {
    return Int128.fromString(typeof val === "string" ? val : val.toString(), out_buffer);
  }
  static fromNumber(num, out_buffer = new Uint32Array(4)) {
    return Int128.fromString(num.toString(), out_buffer);
  }
  static fromString(str, out_buffer = new Uint32Array(4)) {
    const negate = str.startsWith("-");
    const length = str.length;
    const out = new Int128(out_buffer);
    for (let posn = negate ? 1 : 0; posn < length; ) {
      const group = kInt32DecimalDigits < length - posn ? kInt32DecimalDigits : length - posn;
      const chunk = new Int128(new Uint32Array([parseInt(str.substr(posn, group), 10), 0, 0, 0]));
      const multiple = new Int128(new Uint32Array([kPowersOfTen[group], 0, 0, 0]));
      out.times(multiple);
      out.plus(chunk);
      posn += group;
    }
    return negate ? out.negate() : out;
  }
  static convertArray(values) {
    const data = new Uint32Array(values.length * 4);
    for (let i = -1, n = values.length; ++i < n; ) {
      Int128.from(values[i], new Uint32Array(data.buffer, data.byteOffset + 4 * 4 * i, 4));
    }
    return data;
  }
}
var util_int_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BaseInt64,
  Uint64,
  Int64,
  Int128
}, Symbol.toStringTag, { value: "Module" }));
class VectorLoader extends Visitor {
  constructor(bytes, nodes, buffers, dictionaries) {
    super();
    this.nodesIndex = -1;
    this.buffersIndex = -1;
    this.bytes = bytes;
    this.nodes = nodes;
    this.buffers = buffers;
    this.dictionaries = dictionaries;
  }
  visit(node) {
    return super.visit(node instanceof Field ? node.type : node);
  }
  visitNull(type, { length } = this.nextFieldNode()) {
    return Data.Null(type, 0, length);
  }
  visitBool(type, { length, nullCount } = this.nextFieldNode()) {
    return Data.Bool(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readData(type));
  }
  visitInt(type, { length, nullCount } = this.nextFieldNode()) {
    return Data.Int(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readData(type));
  }
  visitFloat(type, { length, nullCount } = this.nextFieldNode()) {
    return Data.Float(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readData(type));
  }
  visitUtf8(type, { length, nullCount } = this.nextFieldNode()) {
    return Data.Utf8(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readOffsets(type), this.readData(type));
  }
  visitBinary(type, { length, nullCount } = this.nextFieldNode()) {
    return Data.Binary(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readOffsets(type), this.readData(type));
  }
  visitFixedSizeBinary(type, { length, nullCount } = this.nextFieldNode()) {
    return Data.FixedSizeBinary(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readData(type));
  }
  visitDate(type, { length, nullCount } = this.nextFieldNode()) {
    return Data.Date(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readData(type));
  }
  visitTimestamp(type, { length, nullCount } = this.nextFieldNode()) {
    return Data.Timestamp(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readData(type));
  }
  visitTime(type, { length, nullCount } = this.nextFieldNode()) {
    return Data.Time(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readData(type));
  }
  visitDecimal(type, { length, nullCount } = this.nextFieldNode()) {
    return Data.Decimal(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readData(type));
  }
  visitList(type, { length, nullCount } = this.nextFieldNode()) {
    return Data.List(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readOffsets(type), this.visit(type.children[0]));
  }
  visitStruct(type, { length, nullCount } = this.nextFieldNode()) {
    return Data.Struct(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.visitMany(type.children));
  }
  visitUnion(type) {
    return type.mode === UnionMode.Sparse ? this.visitSparseUnion(type) : this.visitDenseUnion(type);
  }
  visitDenseUnion(type, { length, nullCount } = this.nextFieldNode()) {
    return Data.Union(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readTypeIds(type), this.readOffsets(type), this.visitMany(type.children));
  }
  visitSparseUnion(type, { length, nullCount } = this.nextFieldNode()) {
    return Data.Union(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readTypeIds(type), this.visitMany(type.children));
  }
  visitDictionary(type, { length, nullCount } = this.nextFieldNode()) {
    return Data.Dictionary(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readData(type.indices), this.readDictionary(type));
  }
  visitInterval(type, { length, nullCount } = this.nextFieldNode()) {
    return Data.Interval(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readData(type));
  }
  visitFixedSizeList(type, { length, nullCount } = this.nextFieldNode()) {
    return Data.FixedSizeList(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.visit(type.children[0]));
  }
  visitMap(type, { length, nullCount } = this.nextFieldNode()) {
    return Data.Map(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readOffsets(type), this.visit(type.children[0]));
  }
  nextFieldNode() {
    return this.nodes[++this.nodesIndex];
  }
  nextBufferRange() {
    return this.buffers[++this.buffersIndex];
  }
  readNullBitmap(type, nullCount, buffer = this.nextBufferRange()) {
    return nullCount > 0 && this.readData(type, buffer) || new Uint8Array(0);
  }
  readOffsets(type, buffer) {
    return this.readData(type, buffer);
  }
  readTypeIds(type, buffer) {
    return this.readData(type, buffer);
  }
  readData(_type, { length, offset } = this.nextBufferRange()) {
    return this.bytes.subarray(offset, offset + length);
  }
  readDictionary(type) {
    return this.dictionaries.get(type.id);
  }
}
class JSONVectorLoader extends VectorLoader {
  constructor(sources, nodes, buffers, dictionaries) {
    super(new Uint8Array(0), nodes, buffers, dictionaries);
    this.sources = sources;
  }
  readNullBitmap(_type, nullCount, { offset } = this.nextBufferRange()) {
    return nullCount <= 0 ? new Uint8Array(0) : packBools(this.sources[offset]);
  }
  readOffsets(_type, { offset } = this.nextBufferRange()) {
    return toArrayBufferView(Uint8Array, toArrayBufferView(Int32Array, this.sources[offset]));
  }
  readTypeIds(type, { offset } = this.nextBufferRange()) {
    return toArrayBufferView(Uint8Array, toArrayBufferView(type.ArrayType, this.sources[offset]));
  }
  readData(type, { offset } = this.nextBufferRange()) {
    const { sources } = this;
    if (DataType.isTimestamp(type)) {
      return toArrayBufferView(Uint8Array, Int64.convertArray(sources[offset]));
    } else if ((DataType.isInt(type) || DataType.isTime(type)) && type.bitWidth === 64) {
      return toArrayBufferView(Uint8Array, Int64.convertArray(sources[offset]));
    } else if (DataType.isDate(type) && type.unit === DateUnit.MILLISECOND) {
      return toArrayBufferView(Uint8Array, Int64.convertArray(sources[offset]));
    } else if (DataType.isDecimal(type)) {
      return toArrayBufferView(Uint8Array, Int128.convertArray(sources[offset]));
    } else if (DataType.isBinary(type) || DataType.isFixedSizeBinary(type)) {
      return binaryDataFromJSON(sources[offset]);
    } else if (DataType.isBool(type)) {
      return packBools(sources[offset]);
    } else if (DataType.isUtf8(type)) {
      return encodeUtf8(sources[offset].join(""));
    }
    return toArrayBufferView(Uint8Array, toArrayBufferView(type.ArrayType, sources[offset].map((x) => +x)));
  }
}
function binaryDataFromJSON(values) {
  const joined = values.join("");
  const data = new Uint8Array(joined.length / 2);
  for (let i = 0; i < joined.length; i += 2) {
    data[i >> 1] = parseInt(joined.substr(i, 2), 16);
  }
  return data;
}
const kParent = Symbol.for("parent");
const kRowIndex$1 = Symbol.for("rowIndex");
const kKeyToIdx = Symbol.for("keyToIdx");
const kIdxToVal = Symbol.for("idxToVal");
const kCustomInspect = Symbol.for("nodejs.util.inspect.custom");
class Row {
  constructor(parent, numKeys) {
    this[kParent] = parent;
    this.size = numKeys;
  }
  entries() {
    return this[Symbol.iterator]();
  }
  has(key) {
    return this.get(key) !== void 0;
  }
  get(key) {
    let val = void 0;
    if (key != null) {
      const ktoi = this[kKeyToIdx] || (this[kKeyToIdx] = /* @__PURE__ */ new Map());
      let idx = ktoi.get(key);
      if (idx !== void 0) {
        const itov = this[kIdxToVal] || (this[kIdxToVal] = new Array(this.size));
        (val = itov[idx]) !== void 0 || (itov[idx] = val = this.getValue(idx));
      } else if ((idx = this.getIndex(key)) > -1) {
        ktoi.set(key, idx);
        const itov = this[kIdxToVal] || (this[kIdxToVal] = new Array(this.size));
        (val = itov[idx]) !== void 0 || (itov[idx] = val = this.getValue(idx));
      }
    }
    return val;
  }
  set(key, val) {
    if (key != null) {
      const ktoi = this[kKeyToIdx] || (this[kKeyToIdx] = /* @__PURE__ */ new Map());
      let idx = ktoi.get(key);
      if (idx === void 0) {
        ktoi.set(key, idx = this.getIndex(key));
      }
      if (idx > -1) {
        const itov = this[kIdxToVal] || (this[kIdxToVal] = new Array(this.size));
        itov[idx] = this.setValue(idx, val);
      }
    }
    return this;
  }
  clear() {
    throw new Error(`Clearing ${this[Symbol.toStringTag]} not supported.`);
  }
  delete(_) {
    throw new Error(`Deleting ${this[Symbol.toStringTag]} values not supported.`);
  }
  *[Symbol.iterator]() {
    const ki = this.keys();
    const vi = this.values();
    const ktoi = this[kKeyToIdx] || (this[kKeyToIdx] = /* @__PURE__ */ new Map());
    const itov = this[kIdxToVal] || (this[kIdxToVal] = new Array(this.size));
    for (let k, v, i = 0, kr, vr; !((kr = ki.next()).done || (vr = vi.next()).done); ++i) {
      k = kr.value;
      v = vr.value;
      itov[i] = v;
      ktoi.has(k) || ktoi.set(k, i);
      yield [k, v];
    }
  }
  forEach(callbackfn, thisArg) {
    const ki = this.keys();
    const vi = this.values();
    const callback = thisArg === void 0 ? callbackfn : (v, k, m) => callbackfn.call(thisArg, v, k, m);
    const ktoi = this[kKeyToIdx] || (this[kKeyToIdx] = /* @__PURE__ */ new Map());
    const itov = this[kIdxToVal] || (this[kIdxToVal] = new Array(this.size));
    for (let k, v, i = 0, kr, vr; !((kr = ki.next()).done || (vr = vi.next()).done); ++i) {
      k = kr.value;
      v = vr.value;
      itov[i] = v;
      ktoi.has(k) || ktoi.set(k, i);
      callback(v, k, this);
    }
  }
  toArray() {
    return [...this.values()];
  }
  toJSON() {
    const obj = {};
    this.forEach((val, key) => obj[key] = val);
    return obj;
  }
  inspect() {
    return this.toString();
  }
  [kCustomInspect]() {
    return this.toString();
  }
  toString() {
    const str = [];
    this.forEach((val, key) => {
      key = valueToString(key);
      val = valueToString(val);
      str.push(`${key}: ${val}`);
    });
    return `{ ${str.join(", ")} }`;
  }
}
Row[Symbol.toStringTag] = ((proto) => {
  Object.defineProperties(proto, {
    "size": { writable: true, enumerable: false, configurable: false, value: 0 },
    [kParent]: { writable: true, enumerable: false, configurable: false, value: null },
    [kRowIndex$1]: { writable: true, enumerable: false, configurable: false, value: -1 }
  });
  return proto[Symbol.toStringTag] = "Row";
})(Row.prototype);
class MapRow extends Row {
  constructor(slice3) {
    super(slice3, slice3.length);
    return createRowProxy(this);
  }
  keys() {
    return this[kParent].getChildAt(0)[Symbol.iterator]();
  }
  values() {
    return this[kParent].getChildAt(1)[Symbol.iterator]();
  }
  getKey(idx) {
    return this[kParent].getChildAt(0).get(idx);
  }
  getIndex(key) {
    return this[kParent].getChildAt(0).indexOf(key);
  }
  getValue(index) {
    return this[kParent].getChildAt(1).get(index);
  }
  setValue(index, value) {
    this[kParent].getChildAt(1).set(index, value);
  }
}
class StructRow extends Row {
  constructor(parent) {
    super(parent, parent.type.children.length);
    return defineRowProxyProperties(this);
  }
  *keys() {
    for (const field of this[kParent].type.children) {
      yield field.name;
    }
  }
  *values() {
    for (const field of this[kParent].type.children) {
      yield this[field.name];
    }
  }
  getKey(idx) {
    return this[kParent].type.children[idx].name;
  }
  getIndex(key) {
    return this[kParent].type.children.findIndex((f) => f.name === key);
  }
  getValue(index) {
    return this[kParent].getChildAt(index).get(this[kRowIndex$1]);
  }
  setValue(index, value) {
    return this[kParent].getChildAt(index).set(this[kRowIndex$1], value);
  }
}
Object.setPrototypeOf(Row.prototype, Map.prototype);
const defineRowProxyProperties = (() => {
  const desc = { enumerable: true, configurable: false, get: null, set: null };
  return (row) => {
    let idx = -1;
    const ktoi = row[kKeyToIdx] || (row[kKeyToIdx] = /* @__PURE__ */ new Map());
    const getter = (key) => function() {
      return this.get(key);
    };
    const setter = (key) => function(val) {
      return this.set(key, val);
    };
    for (const key of row.keys()) {
      ktoi.set(key, ++idx);
      desc.get = getter(key);
      desc.set = setter(key);
      Object.prototype.hasOwnProperty.call(row, key) || (desc.enumerable = true, Object.defineProperty(row, key, desc));
      Object.prototype.hasOwnProperty.call(row, idx) || (desc.enumerable = false, Object.defineProperty(row, idx, desc));
    }
    desc.get = desc.set = null;
    return row;
  };
})();
const createRowProxy = (() => {
  if (typeof Proxy === "undefined") {
    return defineRowProxyProperties;
  }
  const has = Row.prototype.has;
  const get = Row.prototype.get;
  const set = Row.prototype.set;
  const getKey = Row.prototype.getKey;
  const RowProxyHandler = {
    isExtensible() {
      return false;
    },
    deleteProperty() {
      return false;
    },
    preventExtensions() {
      return true;
    },
    ownKeys(row) {
      return [...row.keys()].map((x) => `${x}`);
    },
    has(row, key) {
      switch (key) {
        case "getKey":
        case "getIndex":
        case "getValue":
        case "setValue":
        case "toArray":
        case "toJSON":
        case "inspect":
        case "constructor":
        case "isPrototypeOf":
        case "propertyIsEnumerable":
        case "toString":
        case "toLocaleString":
        case "valueOf":
        case "size":
        case "has":
        case "get":
        case "set":
        case "clear":
        case "delete":
        case "keys":
        case "values":
        case "entries":
        case "forEach":
        case "__proto__":
        case "__defineGetter__":
        case "__defineSetter__":
        case "hasOwnProperty":
        case "__lookupGetter__":
        case "__lookupSetter__":
        case Symbol.iterator:
        case Symbol.toStringTag:
        case kParent:
        case kRowIndex$1:
        case kIdxToVal:
        case kKeyToIdx:
        case kCustomInspect:
          return true;
      }
      if (typeof key === "number" && !row.has(key)) {
        key = row.getKey(key);
      }
      return row.has(key);
    },
    get(row, key, receiver) {
      switch (key) {
        case "getKey":
        case "getIndex":
        case "getValue":
        case "setValue":
        case "toArray":
        case "toJSON":
        case "inspect":
        case "constructor":
        case "isPrototypeOf":
        case "propertyIsEnumerable":
        case "toString":
        case "toLocaleString":
        case "valueOf":
        case "size":
        case "has":
        case "get":
        case "set":
        case "clear":
        case "delete":
        case "keys":
        case "values":
        case "entries":
        case "forEach":
        case "__proto__":
        case "__defineGetter__":
        case "__defineSetter__":
        case "hasOwnProperty":
        case "__lookupGetter__":
        case "__lookupSetter__":
        case Symbol.iterator:
        case Symbol.toStringTag:
        case kParent:
        case kRowIndex$1:
        case kIdxToVal:
        case kKeyToIdx:
        case kCustomInspect:
          return Reflect.get(row, key, receiver);
      }
      if (typeof key === "number" && !has.call(receiver, key)) {
        key = getKey.call(receiver, key);
      }
      return get.call(receiver, key);
    },
    set(row, key, val, receiver) {
      switch (key) {
        case kParent:
        case kRowIndex$1:
        case kIdxToVal:
        case kKeyToIdx:
          return Reflect.set(row, key, val, receiver);
        case "getKey":
        case "getIndex":
        case "getValue":
        case "setValue":
        case "toArray":
        case "toJSON":
        case "inspect":
        case "constructor":
        case "isPrototypeOf":
        case "propertyIsEnumerable":
        case "toString":
        case "toLocaleString":
        case "valueOf":
        case "size":
        case "has":
        case "get":
        case "set":
        case "clear":
        case "delete":
        case "keys":
        case "values":
        case "entries":
        case "forEach":
        case "__proto__":
        case "__defineGetter__":
        case "__defineSetter__":
        case "hasOwnProperty":
        case "__lookupGetter__":
        case "__lookupSetter__":
        case Symbol.iterator:
        case Symbol.toStringTag:
          return false;
      }
      if (typeof key === "number" && !has.call(receiver, key)) {
        key = getKey.call(receiver, key);
      }
      return has.call(receiver, key) ? !!set.call(receiver, key, val) : false;
    }
  };
  return (row) => new Proxy(row, RowProxyHandler);
})();
function clampIndex(source, index, then) {
  const length = source.length;
  const adjust = index > -1 ? index : length + index % length;
  return then ? then(source, adjust) : adjust;
}
let tmp;
function clampRange(source, begin, end, then) {
  const { length: len = 0 } = source;
  let lhs = typeof begin !== "number" ? 0 : begin;
  let rhs = typeof end !== "number" ? len : end;
  lhs < 0 && (lhs = (lhs % len + len) % len);
  rhs < 0 && (rhs = (rhs % len + len) % len);
  rhs < lhs && (tmp = lhs, lhs = rhs, rhs = tmp);
  rhs > len && (rhs = len);
  return then ? then(source, lhs, rhs) : [lhs, rhs];
}
const big0 = BigIntAvailable ? BigIntCtor(0) : 0;
const isNaNFast = (value) => value !== value;
function createElementComparator(search) {
  const typeofSearch = typeof search;
  if (typeofSearch !== "object" || search === null) {
    if (isNaNFast(search)) {
      return isNaNFast;
    }
    return typeofSearch !== "bigint" ? (value) => value === search : (value) => big0 + value === search;
  }
  if (search instanceof Date) {
    const valueOfSearch = search.valueOf();
    return (value) => value instanceof Date ? value.valueOf() === valueOfSearch : false;
  }
  if (ArrayBuffer.isView(search)) {
    return (value) => value ? compareArrayLike(search, value) : false;
  }
  if (search instanceof Map) {
    return creatMapComparator(search);
  }
  if (Array.isArray(search)) {
    return createArrayLikeComparator(search);
  }
  if (search instanceof AbstractVector) {
    return createVectorComparator(search);
  }
  return createObjectComparator(search);
}
function createArrayLikeComparator(lhs) {
  const comparators = [];
  for (let i = -1, n = lhs.length; ++i < n; ) {
    comparators[i] = createElementComparator(lhs[i]);
  }
  return createSubElementsComparator(comparators);
}
function creatMapComparator(lhs) {
  let i = -1;
  const comparators = [];
  lhs.forEach((v) => comparators[++i] = createElementComparator(v));
  return createSubElementsComparator(comparators);
}
function createVectorComparator(lhs) {
  const comparators = [];
  for (let i = -1, n = lhs.length; ++i < n; ) {
    comparators[i] = createElementComparator(lhs.get(i));
  }
  return createSubElementsComparator(comparators);
}
function createObjectComparator(lhs) {
  const keys = Object.keys(lhs);
  if (keys.length === 0) {
    return () => false;
  }
  const comparators = [];
  for (let i = -1, n = keys.length; ++i < n; ) {
    comparators[i] = createElementComparator(lhs[keys[i]]);
  }
  return createSubElementsComparator(comparators, keys);
}
function createSubElementsComparator(comparators, keys) {
  return (rhs) => {
    if (!rhs || typeof rhs !== "object") {
      return false;
    }
    switch (rhs.constructor) {
      case Array:
        return compareArray(comparators, rhs);
      case Map:
      case MapRow:
      case StructRow:
        return compareObject(comparators, rhs, rhs.keys());
      case Object:
      case void 0:
        return compareObject(comparators, rhs, keys || Object.keys(rhs));
    }
    return rhs instanceof AbstractVector ? compareVector(comparators, rhs) : false;
  };
}
function compareArray(comparators, arr) {
  const n = comparators.length;
  if (arr.length !== n) {
    return false;
  }
  for (let i = -1; ++i < n; ) {
    if (!comparators[i](arr[i])) {
      return false;
    }
  }
  return true;
}
function compareVector(comparators, vec) {
  const n = comparators.length;
  if (vec.length !== n) {
    return false;
  }
  for (let i = -1; ++i < n; ) {
    if (!comparators[i](vec.get(i))) {
      return false;
    }
  }
  return true;
}
function compareObject(comparators, obj, keys) {
  const lKeyItr = keys[Symbol.iterator]();
  const rKeyItr = obj instanceof Map ? obj.keys() : Object.keys(obj)[Symbol.iterator]();
  const rValItr = obj instanceof Map ? obj.values() : Object.values(obj)[Symbol.iterator]();
  let i = 0;
  const n = comparators.length;
  let rVal = rValItr.next();
  let lKey = lKeyItr.next();
  let rKey = rKeyItr.next();
  for (; i < n && !lKey.done && !rKey.done && !rVal.done; ++i, lKey = lKeyItr.next(), rKey = rKeyItr.next(), rVal = rValItr.next()) {
    if (lKey.value !== rKey.value || !comparators[i](rVal.value)) {
      break;
    }
  }
  if (i === n && lKey.done && rKey.done && rVal.done) {
    return true;
  }
  lKeyItr.return && lKeyItr.return();
  rKeyItr.return && rKeyItr.return();
  rValItr.return && rValItr.return();
  return false;
}
var util_vector_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clampIndex,
  clampRange,
  createElementComparator
}, Symbol.toStringTag, { value: "Module" }));
const isArray = Array.isArray;
function isTypedArray(arr) {
  return ArrayBuffer.isView(arr) && "BYTES_PER_ELEMENT" in arr;
}
function arrayTypeToDataType$2(ctor) {
  switch (ctor) {
    case Int8Array:
      return Int8;
    case Int16Array:
      return Int16;
    case Int32Array:
      return Int32;
    case BigInt64Array:
      return Int64$1;
    case Uint8Array:
      return Uint8;
    case Uint16Array:
      return Uint16;
    case Uint32Array:
      return Uint32;
    case BigUint64Array:
      return Uint64$1;
    case Float32Array:
      return Float32;
    case Float64Array:
      return Float64;
    default:
      return null;
  }
}
function vectorFromTypedArray(array) {
  const ArrowType = arrayTypeToDataType$2(array.constructor);
  if (!ArrowType) {
    throw new TypeError("Unrecognized Array input");
  }
  const type = new ArrowType();
  const data = Data.new(type, 0, array.length, 0, [void 0, array]);
  return AbstractVector.new(data);
}
const selectArgs = (Ctor, vals) => _selectArgs(Ctor, vals, [], 0);
const selectColumnArgs = (args) => {
  const [fields, values] = _selectFieldArgs(args, [[], []]);
  return values.map((x, i) => x instanceof Column ? Column.new(x.field.clone(fields[i]), x) : x instanceof AbstractVector ? Column.new(fields[i], x) : isTypedArray(x) ? Column.new(fields[i], vectorFromTypedArray(x)) : Column.new(fields[i], []));
};
const selectFieldArgs = (args) => _selectFieldArgs(args, [[], []]);
const selectChunkArgs = (Ctor, vals) => _selectChunkArgs(Ctor, vals, [], 0);
const selectVectorChildrenArgs = (Ctor, vals) => _selectVectorChildrenArgs(Ctor, vals, [], 0);
function _selectArgs(Ctor, vals, res, idx) {
  let value, j = idx;
  let i = -1;
  const n = vals.length;
  while (++i < n) {
    if (isArray(value = vals[i])) {
      j = _selectArgs(Ctor, value, res, j).length;
    } else if (value instanceof Ctor) {
      res[j++] = value;
    }
  }
  return res;
}
function _selectChunkArgs(Ctor, vals, res, idx) {
  let value, j = idx;
  let i = -1;
  const n = vals.length;
  while (++i < n) {
    if (isArray(value = vals[i])) {
      j = _selectChunkArgs(Ctor, value, res, j).length;
    } else if (value instanceof Chunked) {
      j = _selectChunkArgs(Ctor, value.chunks, res, j).length;
    } else if (value instanceof Ctor) {
      res[j++] = value;
    }
  }
  return res;
}
function _selectVectorChildrenArgs(Ctor, vals, res, idx) {
  let value, j = idx;
  let i = -1;
  const n = vals.length;
  while (++i < n) {
    if (isArray(value = vals[i])) {
      j = _selectVectorChildrenArgs(Ctor, value, res, j).length;
    } else if (value instanceof Ctor) {
      j = _selectArgs(AbstractVector, value.schema.fields.map((_, i2) => value.getChildAt(i2)), res, j).length;
    } else if (value instanceof AbstractVector) {
      res[j++] = value;
    }
  }
  return res;
}
const toKeysAndValues = (xs, [k, v], i) => (xs[0][i] = k, xs[1][i] = v, xs);
function _selectFieldArgs(vals, ret) {
  let keys;
  let n;
  switch (n = vals.length) {
    case 0:
      return ret;
    case 1:
      keys = ret[0];
      if (!vals[0]) {
        return ret;
      }
      if (isArray(vals[0])) {
        return _selectFieldArgs(vals[0], ret);
      }
      if (!(vals[0] instanceof Data || vals[0] instanceof AbstractVector || isTypedArray(vals[0]) || vals[0] instanceof DataType)) {
        [keys, vals] = Object.entries(vals[0]).reduce(toKeysAndValues, ret);
      }
      break;
    default:
      !isArray(keys = vals[n - 1]) ? (vals = isArray(vals[0]) ? vals[0] : vals, keys = []) : vals = isArray(vals[0]) ? vals[0] : vals.slice(0, n - 1);
  }
  let fieldIndex = -1;
  let valueIndex = -1;
  let idx = -1;
  const len = vals.length;
  let field;
  let val;
  const [fields, values] = ret;
  while (++idx < len) {
    val = vals[idx];
    if (val instanceof Column && (values[++valueIndex] = val)) {
      fields[++fieldIndex] = val.field.clone(keys[idx], val.type, true);
    } else {
      ({ [idx]: field = idx } = keys);
      if (val instanceof DataType && (values[++valueIndex] = val)) {
        fields[++fieldIndex] = Field.new(field, val, true);
      } else if ((val === null || val === void 0 ? void 0 : val.type) && (values[++valueIndex] = val)) {
        val instanceof Data && (values[valueIndex] = val = AbstractVector.new(val));
        fields[++fieldIndex] = Field.new(field, val.type, true);
      }
    }
  }
  return ret;
}
class ChunkedIterator {
  constructor(chunks) {
    this.chunks = chunks;
    this.chunkIndex = 0;
    this.chunkIterator = this.getChunkIterator();
  }
  next() {
    while (this.chunkIndex < this.chunks.length) {
      const next = this.chunkIterator.next();
      if (!next.done) {
        return next;
      }
      if (++this.chunkIndex < this.chunks.length) {
        this.chunkIterator = this.getChunkIterator();
      }
    }
    return { done: true, value: null };
  }
  getChunkIterator() {
    return this.chunks[this.chunkIndex][Symbol.iterator]();
  }
  [Symbol.iterator]() {
    return this;
  }
}
class Chunked extends AbstractVector {
  constructor(type, chunks = [], offsets = calculateOffsets(chunks)) {
    super();
    this._nullCount = -1;
    this._type = type;
    this._chunks = chunks;
    this._chunkOffsets = offsets;
    this._length = offsets[offsets.length - 1];
    this._numChildren = (this._type.children || []).length;
  }
  static flatten(...vectors) {
    return selectChunkArgs(AbstractVector, vectors);
  }
  static concat(...vectors) {
    const chunks = Chunked.flatten(...vectors);
    return new Chunked(chunks[0].type, chunks);
  }
  get type() {
    return this._type;
  }
  get length() {
    return this._length;
  }
  get chunks() {
    return this._chunks;
  }
  get typeId() {
    return this._type.typeId;
  }
  get VectorName() {
    return `Chunked<${this._type}>`;
  }
  get data() {
    return this._chunks[0] ? this._chunks[0].data : null;
  }
  get ArrayType() {
    return this._type.ArrayType;
  }
  get numChildren() {
    return this._numChildren;
  }
  get stride() {
    return this._chunks[0] ? this._chunks[0].stride : 1;
  }
  get byteLength() {
    return this._chunks.reduce((byteLength, chunk) => byteLength + chunk.byteLength, 0);
  }
  get nullCount() {
    let nullCount = this._nullCount;
    if (nullCount < 0) {
      this._nullCount = nullCount = this._chunks.reduce((x, { nullCount: nullCount2 }) => x + nullCount2, 0);
    }
    return nullCount;
  }
  get indices() {
    if (DataType.isDictionary(this._type)) {
      if (!this._indices) {
        const chunks = this._chunks;
        this._indices = chunks.length === 1 ? chunks[0].indices : Chunked.concat(...chunks.map((x) => x.indices));
      }
      return this._indices;
    }
    return null;
  }
  get dictionary() {
    if (DataType.isDictionary(this._type)) {
      return this._chunks[this._chunks.length - 1].data.dictionary;
    }
    return null;
  }
  [Symbol.iterator]() {
    return new ChunkedIterator(this._chunks);
  }
  clone(chunks = this._chunks) {
    return new Chunked(this._type, chunks);
  }
  concat(...others) {
    return this.clone(Chunked.flatten(this, ...others));
  }
  slice(begin, end) {
    return clampRange(this, begin, end, this._sliceInternal);
  }
  getChildAt(index) {
    if (index < 0 || index >= this._numChildren) {
      return null;
    }
    const columns = this._children || (this._children = []);
    let child, field, chunks;
    if (child = columns[index]) {
      return child;
    }
    if (field = (this._type.children || [])[index]) {
      chunks = this._chunks.map((vector) => vector.getChildAt(index)).filter((vec) => vec != null);
      if (chunks.length > 0) {
        return columns[index] = new Chunked(field.type, chunks);
      }
    }
    return null;
  }
  search(index, then) {
    const idx = index;
    const offsets = this._chunkOffsets;
    let rhs = offsets.length - 1;
    if (idx < 0) {
      return null;
    }
    if (idx >= offsets[rhs]) {
      return null;
    }
    if (rhs <= 1) {
      return then ? then(this, 0, idx) : [0, idx];
    }
    let lhs = 0, pos = 0, mid = 0;
    do {
      if (lhs + 1 === rhs) {
        return then ? then(this, lhs, idx - pos) : [lhs, idx - pos];
      }
      mid = lhs + (rhs - lhs) / 2 | 0;
      idx >= offsets[mid] ? lhs = mid : rhs = mid;
    } while (idx < offsets[rhs] && idx >= (pos = offsets[lhs]));
    return null;
  }
  isValid(index) {
    return !!this.search(index, this.isValidInternal);
  }
  get(index) {
    return this.search(index, this.getInternal);
  }
  set(index, value) {
    this.search(index, ({ chunks }, i, j) => chunks[i].set(j, value));
  }
  indexOf(element, offset) {
    if (offset && typeof offset === "number") {
      return this.search(offset, (self, i, j) => this.indexOfInternal(self, i, j, element));
    }
    return this.indexOfInternal(this, 0, Math.max(0, offset || 0), element);
  }
  toArray() {
    const { chunks } = this;
    const n = chunks.length;
    let ArrayType = this._type.ArrayType;
    if (n <= 0) {
      return new ArrayType(0);
    }
    if (n <= 1) {
      return chunks[0].toArray();
    }
    let len = 0;
    const src = new Array(n);
    for (let i = -1; ++i < n; ) {
      len += (src[i] = chunks[i].toArray()).length;
    }
    if (ArrayType !== src[0].constructor) {
      ArrayType = src[0].constructor;
    }
    const dst = new ArrayType(len);
    const set = ArrayType === Array ? arraySet : typedSet;
    for (let i = -1, idx = 0; ++i < n; ) {
      idx = set(src[i], dst, idx);
    }
    return dst;
  }
  getInternal({ _chunks }, i, j) {
    return _chunks[i].get(j);
  }
  isValidInternal({ _chunks }, i, j) {
    return _chunks[i].isValid(j);
  }
  indexOfInternal({ _chunks }, chunkIndex, fromIndex, element) {
    let i = chunkIndex - 1;
    const n = _chunks.length;
    let start = fromIndex, offset = 0, found = -1;
    while (++i < n) {
      if (~(found = _chunks[i].indexOf(element, start))) {
        return offset + found;
      }
      start = 0;
      offset += _chunks[i].length;
    }
    return -1;
  }
  _sliceInternal(self, begin, end) {
    const slices = [];
    const { chunks, _chunkOffsets: chunkOffsets } = self;
    for (let i = -1, n = chunks.length; ++i < n; ) {
      const chunk = chunks[i];
      const chunkLength2 = chunk.length;
      const chunkOffset = chunkOffsets[i];
      if (chunkOffset >= end) {
        break;
      }
      if (begin >= chunkOffset + chunkLength2) {
        continue;
      }
      if (chunkOffset >= begin && chunkOffset + chunkLength2 <= end) {
        slices.push(chunk);
        continue;
      }
      const from = Math.max(0, begin - chunkOffset);
      const to = Math.min(end - chunkOffset, chunkLength2);
      slices.push(chunk.slice(from, to));
    }
    return self.clone(slices);
  }
}
function calculateOffsets(vectors) {
  const offsets = new Uint32Array((vectors || []).length + 1);
  let offset = offsets[0] = 0;
  const length = offsets.length;
  for (let index = 0; ++index < length; ) {
    offsets[index] = offset += vectors[index - 1].length;
  }
  return offsets;
}
const typedSet = (src, dst, offset) => {
  dst.set(src, offset);
  return offset + src.length;
};
const arraySet = (src, dst, offset) => {
  let idx = offset;
  for (let i = -1, n = src.length; ++i < n; ) {
    dst[idx++] = src[i];
  }
  return idx;
};
class Column extends Chunked {
  constructor(field, vectors = [], offsets) {
    vectors = Chunked.flatten(...vectors);
    super(field.type, vectors, offsets);
    this._field = field;
    if (vectors.length === 1 && !(this instanceof SingleChunkColumn)) {
      return new SingleChunkColumn(field, vectors[0], this._chunkOffsets);
    }
  }
  static new(...args) {
    let [field, data, ...rest] = args;
    if (typeof field !== "string" && !(field instanceof Field)) {
      data = field;
      field = "";
    }
    const chunks = Chunked.flatten(Array.isArray(data) ? [...data, ...rest] : data instanceof AbstractVector ? [data, ...rest] : [AbstractVector.new(data, ...rest)]);
    if (typeof field === "string") {
      const type = chunks[0].data.type;
      field = new Field(field, type, true);
    } else if (!field.nullable && chunks.some(({ nullCount }) => nullCount > 0)) {
      field = field.clone({ nullable: true });
    }
    return new Column(field, chunks);
  }
  get field() {
    return this._field;
  }
  get name() {
    return this._field.name;
  }
  get nullable() {
    return this._field.nullable;
  }
  get metadata() {
    return this._field.metadata;
  }
  clone(chunks = this._chunks) {
    return new Column(this._field, chunks);
  }
  getChildAt(index) {
    if (index < 0 || index >= this.numChildren) {
      return null;
    }
    const columns = this._children || (this._children = []);
    let column, field, chunks;
    if (column = columns[index]) {
      return column;
    }
    if (field = (this.type.children || [])[index]) {
      chunks = this._chunks.map((vector) => vector.getChildAt(index)).filter((vec) => vec != null);
      if (chunks.length > 0) {
        return columns[index] = new Column(field, chunks);
      }
    }
    return null;
  }
}
class SingleChunkColumn extends Column {
  constructor(field, vector, offsets) {
    super(field, [vector], offsets);
    this._chunk = vector;
  }
  search(index, then) {
    return then ? then(this, 0, index) : [0, index];
  }
  isValid(index) {
    return this._chunk.isValid(index);
  }
  get(index) {
    return this._chunk.get(index);
  }
  set(index, value) {
    this._chunk.set(index, value);
  }
  indexOf(element, offset) {
    return this._chunk.indexOf(element, offset);
  }
}
var Long$1 = flatbuffers.Long;
class TypeAssembler extends Visitor {
  visit(node, builder) {
    return node == null || builder == null ? void 0 : super.visit(node, builder);
  }
  visitNull(_node, b) {
    Null$1.startNull(b);
    return Null$1.endNull(b);
  }
  visitInt(node, b) {
    Int.startInt(b);
    Int.addBitWidth(b, node.bitWidth);
    Int.addIsSigned(b, node.isSigned);
    return Int.endInt(b);
  }
  visitFloat(node, b) {
    FloatingPoint.startFloatingPoint(b);
    FloatingPoint.addPrecision(b, node.precision);
    return FloatingPoint.endFloatingPoint(b);
  }
  visitBinary(_node, b) {
    Binary$1.startBinary(b);
    return Binary$1.endBinary(b);
  }
  visitBool(_node, b) {
    Bool$1.startBool(b);
    return Bool$1.endBool(b);
  }
  visitUtf8(_node, b) {
    Utf8$1.startUtf8(b);
    return Utf8$1.endUtf8(b);
  }
  visitDecimal(node, b) {
    Decimal$1.startDecimal(b);
    Decimal$1.addScale(b, node.scale);
    Decimal$1.addPrecision(b, node.precision);
    return Decimal$1.endDecimal(b);
  }
  visitDate(node, b) {
    Date$1.startDate(b);
    Date$1.addUnit(b, node.unit);
    return Date$1.endDate(b);
  }
  visitTime(node, b) {
    Time.startTime(b);
    Time.addUnit(b, node.unit);
    Time.addBitWidth(b, node.bitWidth);
    return Time.endTime(b);
  }
  visitTimestamp(node, b) {
    const timezone = node.timezone && b.createString(node.timezone) || void 0;
    Timestamp.startTimestamp(b);
    Timestamp.addUnit(b, node.unit);
    if (timezone !== void 0) {
      Timestamp.addTimezone(b, timezone);
    }
    return Timestamp.endTimestamp(b);
  }
  visitInterval(node, b) {
    Interval.startInterval(b);
    Interval.addUnit(b, node.unit);
    return Interval.endInterval(b);
  }
  visitList(_node, b) {
    List$1.startList(b);
    return List$1.endList(b);
  }
  visitStruct(_node, b) {
    Struct_.startStruct_(b);
    return Struct_.endStruct_(b);
  }
  visitUnion(node, b) {
    Union.startTypeIdsVector(b, node.typeIds.length);
    const typeIds = Union.createTypeIdsVector(b, node.typeIds);
    Union.startUnion(b);
    Union.addMode(b, node.mode);
    Union.addTypeIds(b, typeIds);
    return Union.endUnion(b);
  }
  visitDictionary(node, b) {
    const indexType = this.visit(node.indices, b);
    DictionaryEncoding.startDictionaryEncoding(b);
    DictionaryEncoding.addId(b, new Long$1(node.id, 0));
    DictionaryEncoding.addIsOrdered(b, node.isOrdered);
    if (indexType !== void 0) {
      DictionaryEncoding.addIndexType(b, indexType);
    }
    return DictionaryEncoding.endDictionaryEncoding(b);
  }
  visitFixedSizeBinary(node, b) {
    FixedSizeBinary$1.startFixedSizeBinary(b);
    FixedSizeBinary$1.addByteWidth(b, node.byteWidth);
    return FixedSizeBinary$1.endFixedSizeBinary(b);
  }
  visitFixedSizeList(node, b) {
    FixedSizeList$1.startFixedSizeList(b);
    FixedSizeList$1.addListSize(b, node.listSize);
    return FixedSizeList$1.endFixedSizeList(b);
  }
  visitMap(node, b) {
    Map$1.startMap(b);
    Map$1.addKeysSorted(b, node.keysSorted);
    return Map$1.endMap(b);
  }
}
const instance$7 = new TypeAssembler();
function schemaFromJSON(_schema, dictionaries = /* @__PURE__ */ new Map()) {
  return new Schema(schemaFieldsFromJSON(_schema, dictionaries), customMetadataFromJSON(_schema["customMetadata"]), dictionaries);
}
function recordBatchFromJSON(b) {
  return new RecordBatch$1(b["count"], fieldNodesFromJSON(b["columns"]), buffersFromJSON(b["columns"]));
}
function dictionaryBatchFromJSON(b) {
  return new DictionaryBatch(recordBatchFromJSON(b["data"]), b["id"], b["isDelta"]);
}
function schemaFieldsFromJSON(_schema, dictionaries) {
  return (_schema["fields"] || []).filter(Boolean).map((f) => Field.fromJSON(f, dictionaries));
}
function fieldChildrenFromJSON(_field, dictionaries) {
  return (_field["children"] || []).filter(Boolean).map((f) => Field.fromJSON(f, dictionaries));
}
function fieldNodesFromJSON(xs) {
  return (xs || []).reduce((fieldNodes, column) => [
    ...fieldNodes,
    new FieldNode(column["count"], nullCountFromJSON(column["VALIDITY"])),
    ...fieldNodesFromJSON(column["children"])
  ], []);
}
function buffersFromJSON(xs, buffers = []) {
  for (let i = -1, n = (xs || []).length; ++i < n; ) {
    const column = xs[i];
    column["VALIDITY"] && buffers.push(new BufferRegion(buffers.length, column["VALIDITY"].length));
    column["TYPE"] && buffers.push(new BufferRegion(buffers.length, column["TYPE"].length));
    column["OFFSET"] && buffers.push(new BufferRegion(buffers.length, column["OFFSET"].length));
    column["DATA"] && buffers.push(new BufferRegion(buffers.length, column["DATA"].length));
    buffers = buffersFromJSON(column["children"], buffers);
  }
  return buffers;
}
function nullCountFromJSON(validity) {
  return (validity || []).reduce((sum2, val) => sum2 + +(val === 0), 0);
}
function fieldFromJSON(_field, dictionaries) {
  let id;
  let keys;
  let field;
  let dictMeta;
  let type;
  let dictType;
  if (!dictionaries || !(dictMeta = _field["dictionary"])) {
    type = typeFromJSON(_field, fieldChildrenFromJSON(_field, dictionaries));
    field = new Field(_field["name"], type, _field["nullable"], customMetadataFromJSON(_field["customMetadata"]));
  } else if (!dictionaries.has(id = dictMeta["id"])) {
    keys = (keys = dictMeta["indexType"]) ? indexTypeFromJSON(keys) : new Int32();
    dictionaries.set(id, type = typeFromJSON(_field, fieldChildrenFromJSON(_field, dictionaries)));
    dictType = new Dictionary(type, keys, id, dictMeta["isOrdered"]);
    field = new Field(_field["name"], dictType, _field["nullable"], customMetadataFromJSON(_field["customMetadata"]));
  } else {
    keys = (keys = dictMeta["indexType"]) ? indexTypeFromJSON(keys) : new Int32();
    dictType = new Dictionary(dictionaries.get(id), keys, id, dictMeta["isOrdered"]);
    field = new Field(_field["name"], dictType, _field["nullable"], customMetadataFromJSON(_field["customMetadata"]));
  }
  return field || null;
}
function customMetadataFromJSON(_metadata) {
  return new Map(Object.entries(_metadata || {}));
}
function indexTypeFromJSON(_type) {
  return new Int_(_type["isSigned"], _type["bitWidth"]);
}
function typeFromJSON(f, children) {
  const typeId = f["type"]["name"];
  switch (typeId) {
    case "NONE":
      return new Null();
    case "null":
      return new Null();
    case "binary":
      return new Binary();
    case "utf8":
      return new Utf8();
    case "bool":
      return new Bool();
    case "list":
      return new List((children || [])[0]);
    case "struct":
      return new Struct(children || []);
    case "struct_":
      return new Struct(children || []);
  }
  switch (typeId) {
    case "int": {
      const t = f["type"];
      return new Int_(t["isSigned"], t["bitWidth"]);
    }
    case "floatingpoint": {
      const t = f["type"];
      return new Float(Precision[t["precision"]]);
    }
    case "decimal": {
      const t = f["type"];
      return new Decimal(t["scale"], t["precision"]);
    }
    case "date": {
      const t = f["type"];
      return new Date_(DateUnit[t["unit"]]);
    }
    case "time": {
      const t = f["type"];
      return new Time_(TimeUnit[t["unit"]], t["bitWidth"]);
    }
    case "timestamp": {
      const t = f["type"];
      return new Timestamp_(TimeUnit[t["unit"]], t["timezone"]);
    }
    case "interval": {
      const t = f["type"];
      return new Interval_(IntervalUnit[t["unit"]]);
    }
    case "union": {
      const t = f["type"];
      return new Union_(UnionMode[t["mode"]], t["typeIds"] || [], children || []);
    }
    case "fixedsizebinary": {
      const t = f["type"];
      return new FixedSizeBinary(t["byteWidth"]);
    }
    case "fixedsizelist": {
      const t = f["type"];
      return new FixedSizeList(t["listSize"], (children || [])[0]);
    }
    case "map": {
      const t = f["type"];
      return new Map_((children || [])[0], t["keysSorted"]);
    }
  }
  throw new Error(`Unrecognized type: "${typeId}"`);
}
var Long = flatbuffers.Long;
var Builder = flatbuffers.Builder;
var ByteBuffer$1 = flatbuffers.ByteBuffer;
class Message {
  constructor(bodyLength, version, headerType, header) {
    this._version = version;
    this._headerType = headerType;
    this.body = new Uint8Array(0);
    header && (this._createHeader = () => header);
    this._bodyLength = typeof bodyLength === "number" ? bodyLength : bodyLength.low;
  }
  static fromJSON(msg, headerType) {
    const message = new Message(0, MetadataVersion.V4, headerType);
    message._createHeader = messageHeaderFromJSON(msg, headerType);
    return message;
  }
  static decode(buf) {
    buf = new ByteBuffer$1(toUint8Array(buf));
    const _message = Message$1.getRootAsMessage(buf);
    const bodyLength = _message.bodyLength();
    const version = _message.version();
    const headerType = _message.headerType();
    const message = new Message(bodyLength, version, headerType);
    message._createHeader = decodeMessageHeader(_message, headerType);
    return message;
  }
  static encode(message) {
    const b = new Builder();
    let headerOffset = -1;
    if (message.isSchema()) {
      headerOffset = Schema.encode(b, message.header());
    } else if (message.isRecordBatch()) {
      headerOffset = RecordBatch$1.encode(b, message.header());
    } else if (message.isDictionaryBatch()) {
      headerOffset = DictionaryBatch.encode(b, message.header());
    }
    Message$1.startMessage(b);
    Message$1.addVersion(b, MetadataVersion.V4);
    Message$1.addHeader(b, headerOffset);
    Message$1.addHeaderType(b, message.headerType);
    Message$1.addBodyLength(b, new Long(message.bodyLength, 0));
    Message$1.finishMessageBuffer(b, Message$1.endMessage(b));
    return b.asUint8Array();
  }
  static from(header, bodyLength = 0) {
    if (header instanceof Schema) {
      return new Message(0, MetadataVersion.V4, MessageHeader.Schema, header);
    }
    if (header instanceof RecordBatch$1) {
      return new Message(bodyLength, MetadataVersion.V4, MessageHeader.RecordBatch, header);
    }
    if (header instanceof DictionaryBatch) {
      return new Message(bodyLength, MetadataVersion.V4, MessageHeader.DictionaryBatch, header);
    }
    throw new Error(`Unrecognized Message header: ${header}`);
  }
  get type() {
    return this.headerType;
  }
  get version() {
    return this._version;
  }
  get headerType() {
    return this._headerType;
  }
  get bodyLength() {
    return this._bodyLength;
  }
  header() {
    return this._createHeader();
  }
  isSchema() {
    return this.headerType === MessageHeader.Schema;
  }
  isRecordBatch() {
    return this.headerType === MessageHeader.RecordBatch;
  }
  isDictionaryBatch() {
    return this.headerType === MessageHeader.DictionaryBatch;
  }
}
class RecordBatch$1 {
  constructor(length, nodes, buffers) {
    this._nodes = nodes;
    this._buffers = buffers;
    this._length = typeof length === "number" ? length : length.low;
  }
  get nodes() {
    return this._nodes;
  }
  get length() {
    return this._length;
  }
  get buffers() {
    return this._buffers;
  }
}
class DictionaryBatch {
  constructor(data, id, isDelta = false) {
    this._data = data;
    this._isDelta = isDelta;
    this._id = typeof id === "number" ? id : id.low;
  }
  get id() {
    return this._id;
  }
  get data() {
    return this._data;
  }
  get isDelta() {
    return this._isDelta;
  }
  get length() {
    return this.data.length;
  }
  get nodes() {
    return this.data.nodes;
  }
  get buffers() {
    return this.data.buffers;
  }
}
class BufferRegion {
  constructor(offset, length) {
    this.offset = typeof offset === "number" ? offset : offset.low;
    this.length = typeof length === "number" ? length : length.low;
  }
}
class FieldNode {
  constructor(length, nullCount) {
    this.length = typeof length === "number" ? length : length.low;
    this.nullCount = typeof nullCount === "number" ? nullCount : nullCount.low;
  }
}
function messageHeaderFromJSON(message, type) {
  return () => {
    switch (type) {
      case MessageHeader.Schema:
        return Schema.fromJSON(message);
      case MessageHeader.RecordBatch:
        return RecordBatch$1.fromJSON(message);
      case MessageHeader.DictionaryBatch:
        return DictionaryBatch.fromJSON(message);
    }
    throw new Error(`Unrecognized Message type: { name: ${MessageHeader[type]}, type: ${type} }`);
  };
}
function decodeMessageHeader(message, type) {
  return () => {
    switch (type) {
      case MessageHeader.Schema:
        return Schema.decode(message.header(new Schema$1()));
      case MessageHeader.RecordBatch:
        return RecordBatch$1.decode(message.header(new RecordBatch$2()), message.version());
      case MessageHeader.DictionaryBatch:
        return DictionaryBatch.decode(message.header(new DictionaryBatch$1()), message.version());
    }
    throw new Error(`Unrecognized Message type: { name: ${MessageHeader[type]}, type: ${type} }`);
  };
}
Field["encode"] = encodeField;
Field["decode"] = decodeField;
Field["fromJSON"] = fieldFromJSON;
Schema["encode"] = encodeSchema;
Schema["decode"] = decodeSchema;
Schema["fromJSON"] = schemaFromJSON;
RecordBatch$1["encode"] = encodeRecordBatch;
RecordBatch$1["decode"] = decodeRecordBatch;
RecordBatch$1["fromJSON"] = recordBatchFromJSON;
DictionaryBatch["encode"] = encodeDictionaryBatch;
DictionaryBatch["decode"] = decodeDictionaryBatch;
DictionaryBatch["fromJSON"] = dictionaryBatchFromJSON;
FieldNode["encode"] = encodeFieldNode;
FieldNode["decode"] = decodeFieldNode;
BufferRegion["encode"] = encodeBufferRegion;
BufferRegion["decode"] = decodeBufferRegion;
function decodeSchema(_schema, dictionaries = /* @__PURE__ */ new Map()) {
  const fields = decodeSchemaFields(_schema, dictionaries);
  return new Schema(fields, decodeCustomMetadata(_schema), dictionaries);
}
function decodeRecordBatch(batch, version = MetadataVersion.V4) {
  return new RecordBatch$1(batch.length(), decodeFieldNodes(batch), decodeBuffers(batch, version));
}
function decodeDictionaryBatch(batch, version = MetadataVersion.V4) {
  return new DictionaryBatch(RecordBatch$1.decode(batch.data(), version), batch.id(), batch.isDelta());
}
function decodeBufferRegion(b) {
  return new BufferRegion(b.offset(), b.length());
}
function decodeFieldNode(f) {
  return new FieldNode(f.length(), f.nullCount());
}
function decodeFieldNodes(batch) {
  const nodes = [];
  for (let f, i = -1, j = -1, n = batch.nodesLength(); ++i < n; ) {
    if (f = batch.nodes(i)) {
      nodes[++j] = FieldNode.decode(f);
    }
  }
  return nodes;
}
function decodeBuffers(batch, version) {
  const bufferRegions = [];
  for (let b, i = -1, j = -1, n = batch.buffersLength(); ++i < n; ) {
    if (b = batch.buffers(i)) {
      if (version < MetadataVersion.V4) {
        b.bb_pos += 8 * (i + 1);
      }
      bufferRegions[++j] = BufferRegion.decode(b);
    }
  }
  return bufferRegions;
}
function decodeSchemaFields(schema, dictionaries) {
  const fields = [];
  for (let f, i = -1, j = -1, n = schema.fieldsLength(); ++i < n; ) {
    if (f = schema.fields(i)) {
      fields[++j] = Field.decode(f, dictionaries);
    }
  }
  return fields;
}
function decodeFieldChildren(field, dictionaries) {
  const children = [];
  for (let f, i = -1, j = -1, n = field.childrenLength(); ++i < n; ) {
    if (f = field.children(i)) {
      children[++j] = Field.decode(f, dictionaries);
    }
  }
  return children;
}
function decodeField(f, dictionaries) {
  let id;
  let field;
  let type;
  let keys;
  let dictType;
  let dictMeta;
  if (!dictionaries || !(dictMeta = f.dictionary())) {
    type = decodeFieldType(f, decodeFieldChildren(f, dictionaries));
    field = new Field(f.name(), type, f.nullable(), decodeCustomMetadata(f));
  } else if (!dictionaries.has(id = dictMeta.id().low)) {
    keys = (keys = dictMeta.indexType()) ? decodeIndexType(keys) : new Int32();
    dictionaries.set(id, type = decodeFieldType(f, decodeFieldChildren(f, dictionaries)));
    dictType = new Dictionary(type, keys, id, dictMeta.isOrdered());
    field = new Field(f.name(), dictType, f.nullable(), decodeCustomMetadata(f));
  } else {
    keys = (keys = dictMeta.indexType()) ? decodeIndexType(keys) : new Int32();
    dictType = new Dictionary(dictionaries.get(id), keys, id, dictMeta.isOrdered());
    field = new Field(f.name(), dictType, f.nullable(), decodeCustomMetadata(f));
  }
  return field || null;
}
function decodeCustomMetadata(parent) {
  const data = /* @__PURE__ */ new Map();
  if (parent) {
    for (let entry, key, i = -1, n = parent.customMetadataLength() | 0; ++i < n; ) {
      if ((entry = parent.customMetadata(i)) && (key = entry.key()) != null) {
        data.set(key, entry.value());
      }
    }
  }
  return data;
}
function decodeIndexType(_type) {
  return new Int_(_type.isSigned(), _type.bitWidth());
}
function decodeFieldType(f, children) {
  const typeId = f.typeType();
  switch (typeId) {
    case Type$1["NONE"]:
      return new Null();
    case Type$1["Null"]:
      return new Null();
    case Type$1["Binary"]:
      return new Binary();
    case Type$1["Utf8"]:
      return new Utf8();
    case Type$1["Bool"]:
      return new Bool();
    case Type$1["List"]:
      return new List((children || [])[0]);
    case Type$1["Struct_"]:
      return new Struct(children || []);
  }
  switch (typeId) {
    case Type$1["Int"]: {
      const t = f.type(new Int());
      return new Int_(t.isSigned(), t.bitWidth());
    }
    case Type$1["FloatingPoint"]: {
      const t = f.type(new FloatingPoint());
      return new Float(t.precision());
    }
    case Type$1["Decimal"]: {
      const t = f.type(new Decimal$1());
      return new Decimal(t.scale(), t.precision());
    }
    case Type$1["Date"]: {
      const t = f.type(new Date$1());
      return new Date_(t.unit());
    }
    case Type$1["Time"]: {
      const t = f.type(new Time());
      return new Time_(t.unit(), t.bitWidth());
    }
    case Type$1["Timestamp"]: {
      const t = f.type(new Timestamp());
      return new Timestamp_(t.unit(), t.timezone());
    }
    case Type$1["Interval"]: {
      const t = f.type(new Interval());
      return new Interval_(t.unit());
    }
    case Type$1["Union"]: {
      const t = f.type(new Union());
      return new Union_(t.mode(), t.typeIdsArray() || [], children || []);
    }
    case Type$1["FixedSizeBinary"]: {
      const t = f.type(new FixedSizeBinary$1());
      return new FixedSizeBinary(t.byteWidth());
    }
    case Type$1["FixedSizeList"]: {
      const t = f.type(new FixedSizeList$1());
      return new FixedSizeList(t.listSize(), (children || [])[0]);
    }
    case Type$1["Map"]: {
      const t = f.type(new Map$1());
      return new Map_((children || [])[0], t.keysSorted());
    }
  }
  throw new Error(`Unrecognized type: "${Type$1[typeId]}" (${typeId})`);
}
function encodeSchema(b, schema) {
  const fieldOffsets = schema.fields.map((f) => Field.encode(b, f));
  Schema$1.startFieldsVector(b, fieldOffsets.length);
  const fieldsVectorOffset = Schema$1.createFieldsVector(b, fieldOffsets);
  const metadataOffset = !(schema.metadata && schema.metadata.size > 0) ? -1 : Schema$1.createCustomMetadataVector(b, [...schema.metadata].map(([k, v]) => {
    const key = b.createString(`${k}`);
    const val = b.createString(`${v}`);
    KeyValue.startKeyValue(b);
    KeyValue.addKey(b, key);
    KeyValue.addValue(b, val);
    return KeyValue.endKeyValue(b);
  }));
  Schema$1.startSchema(b);
  Schema$1.addFields(b, fieldsVectorOffset);
  Schema$1.addEndianness(b, platformIsLittleEndian ? Endianness.Little : Endianness.Big);
  if (metadataOffset !== -1) {
    Schema$1.addCustomMetadata(b, metadataOffset);
  }
  return Schema$1.endSchema(b);
}
function encodeField(b, field) {
  let nameOffset = -1;
  let typeOffset = -1;
  let dictionaryOffset = -1;
  const type = field.type;
  let typeId = field.typeId;
  if (!DataType.isDictionary(type)) {
    typeOffset = instance$7.visit(type, b);
  } else {
    typeId = type.dictionary.typeId;
    dictionaryOffset = instance$7.visit(type, b);
    typeOffset = instance$7.visit(type.dictionary, b);
  }
  const childOffsets = (type.children || []).map((f) => Field.encode(b, f));
  const childrenVectorOffset = Field$1.createChildrenVector(b, childOffsets);
  const metadataOffset = !(field.metadata && field.metadata.size > 0) ? -1 : Field$1.createCustomMetadataVector(b, [...field.metadata].map(([k, v]) => {
    const key = b.createString(`${k}`);
    const val = b.createString(`${v}`);
    KeyValue.startKeyValue(b);
    KeyValue.addKey(b, key);
    KeyValue.addValue(b, val);
    return KeyValue.endKeyValue(b);
  }));
  if (field.name) {
    nameOffset = b.createString(field.name);
  }
  Field$1.startField(b);
  Field$1.addType(b, typeOffset);
  Field$1.addTypeType(b, typeId);
  Field$1.addChildren(b, childrenVectorOffset);
  Field$1.addNullable(b, !!field.nullable);
  if (nameOffset !== -1) {
    Field$1.addName(b, nameOffset);
  }
  if (dictionaryOffset !== -1) {
    Field$1.addDictionary(b, dictionaryOffset);
  }
  if (metadataOffset !== -1) {
    Field$1.addCustomMetadata(b, metadataOffset);
  }
  return Field$1.endField(b);
}
function encodeRecordBatch(b, recordBatch) {
  const nodes = recordBatch.nodes || [];
  const buffers = recordBatch.buffers || [];
  RecordBatch$2.startNodesVector(b, nodes.length);
  nodes.slice().reverse().forEach((n) => FieldNode.encode(b, n));
  const nodesVectorOffset = b.endVector();
  RecordBatch$2.startBuffersVector(b, buffers.length);
  buffers.slice().reverse().forEach((b_) => BufferRegion.encode(b, b_));
  const buffersVectorOffset = b.endVector();
  RecordBatch$2.startRecordBatch(b);
  RecordBatch$2.addLength(b, new Long(recordBatch.length, 0));
  RecordBatch$2.addNodes(b, nodesVectorOffset);
  RecordBatch$2.addBuffers(b, buffersVectorOffset);
  return RecordBatch$2.endRecordBatch(b);
}
function encodeDictionaryBatch(b, dictionaryBatch) {
  const dataOffset = RecordBatch$1.encode(b, dictionaryBatch.data);
  DictionaryBatch$1.startDictionaryBatch(b);
  DictionaryBatch$1.addId(b, new Long(dictionaryBatch.id, 0));
  DictionaryBatch$1.addIsDelta(b, dictionaryBatch.isDelta);
  DictionaryBatch$1.addData(b, dataOffset);
  return DictionaryBatch$1.endDictionaryBatch(b);
}
function encodeFieldNode(b, node) {
  return FieldNode$1.createFieldNode(b, new Long(node.length, 0), new Long(node.nullCount, 0));
}
function encodeBufferRegion(b, node) {
  return Buffer2.createBuffer(b, new Long(node.offset, 0), new Long(node.length, 0));
}
const platformIsLittleEndian = function() {
  const buffer = new ArrayBuffer(2);
  new DataView(buffer).setInt16(0, 256, true);
  return new Int16Array(buffer)[0] === 256;
}();
var ByteBuffer = flatbuffers.ByteBuffer;
const invalidMessageType = (type) => `Expected ${MessageHeader[type]} Message in stream, but was null or length 0.`;
const nullMessage = (type) => `Header pointer of flatbuffer-encoded ${MessageHeader[type]} Message is null or length 0.`;
const invalidMessageMetadata = (expected, actual) => `Expected to read ${expected} metadata bytes, but only read ${actual}.`;
const invalidMessageBodyLength = (expected, actual) => `Expected to read ${expected} bytes for message body, but only read ${actual}.`;
class MessageReader {
  constructor(source) {
    this.source = source instanceof ByteStream ? source : new ByteStream(source);
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    let r;
    if ((r = this.readMetadataLength()).done) {
      return ITERATOR_DONE;
    }
    if (r.value === -1 && (r = this.readMetadataLength()).done) {
      return ITERATOR_DONE;
    }
    if ((r = this.readMetadata(r.value)).done) {
      return ITERATOR_DONE;
    }
    return r;
  }
  throw(value) {
    return this.source.throw(value);
  }
  return(value) {
    return this.source.return(value);
  }
  readMessage(type) {
    let r;
    if ((r = this.next()).done) {
      return null;
    }
    if (type != null && r.value.headerType !== type) {
      throw new Error(invalidMessageType(type));
    }
    return r.value;
  }
  readMessageBody(bodyLength) {
    if (bodyLength <= 0) {
      return new Uint8Array(0);
    }
    const buf = toUint8Array(this.source.read(bodyLength));
    if (buf.byteLength < bodyLength) {
      throw new Error(invalidMessageBodyLength(bodyLength, buf.byteLength));
    }
    return buf.byteOffset % 8 === 0 && buf.byteOffset + buf.byteLength <= buf.buffer.byteLength ? buf : buf.slice();
  }
  readSchema(throwIfNull = false) {
    const type = MessageHeader.Schema;
    const message = this.readMessage(type);
    const schema = message === null || message === void 0 ? void 0 : message.header();
    if (throwIfNull && !schema) {
      throw new Error(nullMessage(type));
    }
    return schema;
  }
  readMetadataLength() {
    const buf = this.source.read(PADDING);
    const bb = buf && new ByteBuffer(buf);
    const len = (bb === null || bb === void 0 ? void 0 : bb.readInt32(0)) || 0;
    return { done: len === 0, value: len };
  }
  readMetadata(metadataLength) {
    const buf = this.source.read(metadataLength);
    if (!buf) {
      return ITERATOR_DONE;
    }
    if (buf.byteLength < metadataLength) {
      throw new Error(invalidMessageMetadata(metadataLength, buf.byteLength));
    }
    return { done: false, value: Message.decode(buf) };
  }
}
class AsyncMessageReader {
  constructor(source, byteLength) {
    this.source = source instanceof AsyncByteStream ? source : isFileHandle(source) ? new AsyncRandomAccessFile(source, byteLength) : new AsyncByteStream(source);
  }
  [Symbol.asyncIterator]() {
    return this;
  }
  next() {
    return __awaiter(this, void 0, void 0, function* () {
      let r;
      if ((r = yield this.readMetadataLength()).done) {
        return ITERATOR_DONE;
      }
      if (r.value === -1 && (r = yield this.readMetadataLength()).done) {
        return ITERATOR_DONE;
      }
      if ((r = yield this.readMetadata(r.value)).done) {
        return ITERATOR_DONE;
      }
      return r;
    });
  }
  throw(value) {
    return __awaiter(this, void 0, void 0, function* () {
      return yield this.source.throw(value);
    });
  }
  return(value) {
    return __awaiter(this, void 0, void 0, function* () {
      return yield this.source.return(value);
    });
  }
  readMessage(type) {
    return __awaiter(this, void 0, void 0, function* () {
      let r;
      if ((r = yield this.next()).done) {
        return null;
      }
      if (type != null && r.value.headerType !== type) {
        throw new Error(invalidMessageType(type));
      }
      return r.value;
    });
  }
  readMessageBody(bodyLength) {
    return __awaiter(this, void 0, void 0, function* () {
      if (bodyLength <= 0) {
        return new Uint8Array(0);
      }
      const buf = toUint8Array(yield this.source.read(bodyLength));
      if (buf.byteLength < bodyLength) {
        throw new Error(invalidMessageBodyLength(bodyLength, buf.byteLength));
      }
      return buf.byteOffset % 8 === 0 && buf.byteOffset + buf.byteLength <= buf.buffer.byteLength ? buf : buf.slice();
    });
  }
  readSchema(throwIfNull = false) {
    return __awaiter(this, void 0, void 0, function* () {
      const type = MessageHeader.Schema;
      const message = yield this.readMessage(type);
      const schema = message === null || message === void 0 ? void 0 : message.header();
      if (throwIfNull && !schema) {
        throw new Error(nullMessage(type));
      }
      return schema;
    });
  }
  readMetadataLength() {
    return __awaiter(this, void 0, void 0, function* () {
      const buf = yield this.source.read(PADDING);
      const bb = buf && new ByteBuffer(buf);
      const len = (bb === null || bb === void 0 ? void 0 : bb.readInt32(0)) || 0;
      return { done: len === 0, value: len };
    });
  }
  readMetadata(metadataLength) {
    return __awaiter(this, void 0, void 0, function* () {
      const buf = yield this.source.read(metadataLength);
      if (!buf) {
        return ITERATOR_DONE;
      }
      if (buf.byteLength < metadataLength) {
        throw new Error(invalidMessageMetadata(metadataLength, buf.byteLength));
      }
      return { done: false, value: Message.decode(buf) };
    });
  }
}
class JSONMessageReader extends MessageReader {
  constructor(source) {
    super(new Uint8Array(0));
    this._schema = false;
    this._body = [];
    this._batchIndex = 0;
    this._dictionaryIndex = 0;
    this._json = source instanceof ArrowJSON ? source : new ArrowJSON(source);
  }
  next() {
    const { _json } = this;
    if (!this._schema) {
      this._schema = true;
      const message = Message.fromJSON(_json.schema, MessageHeader.Schema);
      return { done: false, value: message };
    }
    if (this._dictionaryIndex < _json.dictionaries.length) {
      const batch = _json.dictionaries[this._dictionaryIndex++];
      this._body = batch["data"]["columns"];
      const message = Message.fromJSON(batch, MessageHeader.DictionaryBatch);
      return { done: false, value: message };
    }
    if (this._batchIndex < _json.batches.length) {
      const batch = _json.batches[this._batchIndex++];
      this._body = batch["columns"];
      const message = Message.fromJSON(batch, MessageHeader.RecordBatch);
      return { done: false, value: message };
    }
    this._body = [];
    return ITERATOR_DONE;
  }
  readMessageBody(_bodyLength) {
    return flattenDataSources(this._body);
    function flattenDataSources(xs) {
      return (xs || []).reduce((buffers, column) => [
        ...buffers,
        ...column["VALIDITY"] && [column["VALIDITY"]] || [],
        ...column["TYPE"] && [column["TYPE"]] || [],
        ...column["OFFSET"] && [column["OFFSET"]] || [],
        ...column["DATA"] && [column["DATA"]] || [],
        ...flattenDataSources(column["children"])
      ], []);
    }
  }
  readMessage(type) {
    let r;
    if ((r = this.next()).done) {
      return null;
    }
    if (type != null && r.value.headerType !== type) {
      throw new Error(invalidMessageType(type));
    }
    return r.value;
  }
  readSchema() {
    const type = MessageHeader.Schema;
    const message = this.readMessage(type);
    const schema = message === null || message === void 0 ? void 0 : message.header();
    if (!message || !schema) {
      throw new Error(nullMessage(type));
    }
    return schema;
  }
}
const PADDING = 4;
const MAGIC_STR = "ARROW1";
const MAGIC = new Uint8Array(MAGIC_STR.length);
for (let i = 0; i < MAGIC_STR.length; i += 1 | 0) {
  MAGIC[i] = MAGIC_STR.charCodeAt(i);
}
function checkForMagicArrowString(buffer, index = 0) {
  for (let i = -1, n = MAGIC.length; ++i < n; ) {
    if (MAGIC[i] !== buffer[index + i]) {
      return false;
    }
  }
  return true;
}
const magicLength = MAGIC.length;
const magicAndPadding = magicLength + PADDING;
const magicX2AndPadding = magicLength * 2 + PADDING;
class TypeComparator extends Visitor {
  compareSchemas(schema, other) {
    return schema === other || other instanceof schema.constructor && this.compareManyFields(schema.fields, other.fields);
  }
  compareManyFields(fields, others) {
    return fields === others || Array.isArray(fields) && Array.isArray(others) && fields.length === others.length && fields.every((f, i) => this.compareFields(f, others[i]));
  }
  compareFields(field, other) {
    return field === other || other instanceof field.constructor && field.name === other.name && field.nullable === other.nullable && this.visit(field.type, other.type);
  }
}
function compareConstructor(type, other) {
  return other instanceof type.constructor;
}
function compareAny(type, other) {
  return type === other || compareConstructor(type, other);
}
function compareInt(type, other) {
  return type === other || compareConstructor(type, other) && type.bitWidth === other.bitWidth && type.isSigned === other.isSigned;
}
function compareFloat(type, other) {
  return type === other || compareConstructor(type, other) && type.precision === other.precision;
}
function compareFixedSizeBinary(type, other) {
  return type === other || compareConstructor(type, other) && type.byteWidth === other.byteWidth;
}
function compareDate(type, other) {
  return type === other || compareConstructor(type, other) && type.unit === other.unit;
}
function compareTimestamp(type, other) {
  return type === other || compareConstructor(type, other) && type.unit === other.unit && type.timezone === other.timezone;
}
function compareTime(type, other) {
  return type === other || compareConstructor(type, other) && type.unit === other.unit && type.bitWidth === other.bitWidth;
}
function compareList(type, other) {
  return type === other || compareConstructor(type, other) && type.children.length === other.children.length && instance$6.compareManyFields(type.children, other.children);
}
function compareStruct(type, other) {
  return type === other || compareConstructor(type, other) && type.children.length === other.children.length && instance$6.compareManyFields(type.children, other.children);
}
function compareUnion(type, other) {
  return type === other || compareConstructor(type, other) && type.mode === other.mode && type.typeIds.every((x, i) => x === other.typeIds[i]) && instance$6.compareManyFields(type.children, other.children);
}
function compareDictionary(type, other) {
  return type === other || compareConstructor(type, other) && type.id === other.id && type.isOrdered === other.isOrdered && instance$6.visit(type.indices, other.indices) && instance$6.visit(type.dictionary, other.dictionary);
}
function compareInterval(type, other) {
  return type === other || compareConstructor(type, other) && type.unit === other.unit;
}
function compareFixedSizeList(type, other) {
  return type === other || compareConstructor(type, other) && type.listSize === other.listSize && type.children.length === other.children.length && instance$6.compareManyFields(type.children, other.children);
}
function compareMap(type, other) {
  return type === other || compareConstructor(type, other) && type.keysSorted === other.keysSorted && type.children.length === other.children.length && instance$6.compareManyFields(type.children, other.children);
}
TypeComparator.prototype.visitNull = compareAny;
TypeComparator.prototype.visitBool = compareAny;
TypeComparator.prototype.visitInt = compareInt;
TypeComparator.prototype.visitInt8 = compareInt;
TypeComparator.prototype.visitInt16 = compareInt;
TypeComparator.prototype.visitInt32 = compareInt;
TypeComparator.prototype.visitInt64 = compareInt;
TypeComparator.prototype.visitUint8 = compareInt;
TypeComparator.prototype.visitUint16 = compareInt;
TypeComparator.prototype.visitUint32 = compareInt;
TypeComparator.prototype.visitUint64 = compareInt;
TypeComparator.prototype.visitFloat = compareFloat;
TypeComparator.prototype.visitFloat16 = compareFloat;
TypeComparator.prototype.visitFloat32 = compareFloat;
TypeComparator.prototype.visitFloat64 = compareFloat;
TypeComparator.prototype.visitUtf8 = compareAny;
TypeComparator.prototype.visitBinary = compareAny;
TypeComparator.prototype.visitFixedSizeBinary = compareFixedSizeBinary;
TypeComparator.prototype.visitDate = compareDate;
TypeComparator.prototype.visitDateDay = compareDate;
TypeComparator.prototype.visitDateMillisecond = compareDate;
TypeComparator.prototype.visitTimestamp = compareTimestamp;
TypeComparator.prototype.visitTimestampSecond = compareTimestamp;
TypeComparator.prototype.visitTimestampMillisecond = compareTimestamp;
TypeComparator.prototype.visitTimestampMicrosecond = compareTimestamp;
TypeComparator.prototype.visitTimestampNanosecond = compareTimestamp;
TypeComparator.prototype.visitTime = compareTime;
TypeComparator.prototype.visitTimeSecond = compareTime;
TypeComparator.prototype.visitTimeMillisecond = compareTime;
TypeComparator.prototype.visitTimeMicrosecond = compareTime;
TypeComparator.prototype.visitTimeNanosecond = compareTime;
TypeComparator.prototype.visitDecimal = compareAny;
TypeComparator.prototype.visitList = compareList;
TypeComparator.prototype.visitStruct = compareStruct;
TypeComparator.prototype.visitUnion = compareUnion;
TypeComparator.prototype.visitDenseUnion = compareUnion;
TypeComparator.prototype.visitSparseUnion = compareUnion;
TypeComparator.prototype.visitDictionary = compareDictionary;
TypeComparator.prototype.visitInterval = compareInterval;
TypeComparator.prototype.visitIntervalDayTime = compareInterval;
TypeComparator.prototype.visitIntervalYearMonth = compareInterval;
TypeComparator.prototype.visitFixedSizeList = compareFixedSizeList;
TypeComparator.prototype.visitMap = compareMap;
const instance$6 = new TypeComparator();
function compareSchemas(schema, other) {
  return instance$6.compareSchemas(schema, other);
}
function compareFields(field, other) {
  return instance$6.compareFields(field, other);
}
function compareTypes(type, other) {
  return instance$6.visit(type, other);
}
class VectorAssembler extends Visitor {
  constructor() {
    super();
    this._byteLength = 0;
    this._nodes = [];
    this._buffers = [];
    this._bufferRegions = [];
  }
  static assemble(...args) {
    const assembler = new VectorAssembler();
    const vectorChildren = selectVectorChildrenArgs(RecordBatch, args);
    const [assembleResult = assembler] = assembler.visitMany(vectorChildren);
    return assembleResult;
  }
  visit(vector) {
    if (!DataType.isDictionary(vector.type)) {
      const { data, length, nullCount } = vector;
      if (length > 2147483647) {
        throw new RangeError("Cannot write arrays larger than 2^31 - 1 in length");
      }
      if (!DataType.isNull(vector.type)) {
        addBuffer.call(this, nullCount <= 0 ? new Uint8Array(0) : truncateBitmap(data.offset, length, data.nullBitmap));
      }
      this.nodes.push(new FieldNode(length, nullCount));
    }
    return super.visit(vector);
  }
  visitNull(_nullV) {
    return this;
  }
  visitDictionary(vector) {
    return this.visit(vector.indices);
  }
  get nodes() {
    return this._nodes;
  }
  get buffers() {
    return this._buffers;
  }
  get byteLength() {
    return this._byteLength;
  }
  get bufferRegions() {
    return this._bufferRegions;
  }
}
function addBuffer(values) {
  const byteLength = values.byteLength + 7 & ~7;
  this.buffers.push(values);
  this.bufferRegions.push(new BufferRegion(this._byteLength, byteLength));
  this._byteLength += byteLength;
  return this;
}
function assembleUnion(vector) {
  const { type, length, typeIds, valueOffsets } = vector;
  addBuffer.call(this, typeIds);
  if (type.mode === UnionMode.Sparse) {
    return assembleNestedVector.call(this, vector);
  } else if (type.mode === UnionMode.Dense) {
    if (vector.offset <= 0) {
      addBuffer.call(this, valueOffsets);
      return assembleNestedVector.call(this, vector);
    } else {
      const maxChildTypeId = typeIds.reduce((x, y) => Math.max(x, y), typeIds[0]);
      const childLengths = new Int32Array(maxChildTypeId + 1);
      const childOffsets = new Int32Array(maxChildTypeId + 1).fill(-1);
      const shiftedOffsets = new Int32Array(length);
      const unshiftedOffsets = rebaseValueOffsets(-valueOffsets[0], length, valueOffsets);
      for (let typeId, shift, index = -1; ++index < length; ) {
        if ((shift = childOffsets[typeId = typeIds[index]]) === -1) {
          shift = childOffsets[typeId] = unshiftedOffsets[typeId];
        }
        shiftedOffsets[index] = unshiftedOffsets[index] - shift;
        ++childLengths[typeId];
      }
      addBuffer.call(this, shiftedOffsets);
      for (let child, childIndex = -1, numChildren = type.children.length; ++childIndex < numChildren; ) {
        if (child = vector.getChildAt(childIndex)) {
          const typeId = type.typeIds[childIndex];
          const childLength = Math.min(length, childLengths[typeId]);
          this.visit(child.slice(childOffsets[typeId], childLength));
        }
      }
    }
  }
  return this;
}
function assembleBoolVector(vector) {
  let values;
  if (vector.nullCount >= vector.length) {
    return addBuffer.call(this, new Uint8Array(0));
  } else if ((values = vector.values) instanceof Uint8Array) {
    return addBuffer.call(this, truncateBitmap(vector.offset, vector.length, values));
  }
  return addBuffer.call(this, packBools(vector));
}
function assembleFlatVector(vector) {
  return addBuffer.call(this, vector.values.subarray(0, vector.length * vector.stride));
}
function assembleFlatListVector(vector) {
  const { length, values, valueOffsets } = vector;
  const firstOffset = valueOffsets[0];
  const lastOffset = valueOffsets[length];
  const byteLength = Math.min(lastOffset - firstOffset, values.byteLength - firstOffset);
  addBuffer.call(this, rebaseValueOffsets(-valueOffsets[0], length, valueOffsets));
  addBuffer.call(this, values.subarray(firstOffset, firstOffset + byteLength));
  return this;
}
function assembleListVector(vector) {
  const { length, valueOffsets } = vector;
  if (valueOffsets) {
    addBuffer.call(this, rebaseValueOffsets(valueOffsets[0], length, valueOffsets));
  }
  return this.visit(vector.getChildAt(0));
}
function assembleNestedVector(vector) {
  return this.visitMany(vector.type.children.map((_, i) => vector.getChildAt(i)).filter(Boolean))[0];
}
VectorAssembler.prototype.visitBool = assembleBoolVector;
VectorAssembler.prototype.visitInt = assembleFlatVector;
VectorAssembler.prototype.visitFloat = assembleFlatVector;
VectorAssembler.prototype.visitUtf8 = assembleFlatListVector;
VectorAssembler.prototype.visitBinary = assembleFlatListVector;
VectorAssembler.prototype.visitFixedSizeBinary = assembleFlatVector;
VectorAssembler.prototype.visitDate = assembleFlatVector;
VectorAssembler.prototype.visitTimestamp = assembleFlatVector;
VectorAssembler.prototype.visitTime = assembleFlatVector;
VectorAssembler.prototype.visitDecimal = assembleFlatVector;
VectorAssembler.prototype.visitList = assembleListVector;
VectorAssembler.prototype.visitStruct = assembleNestedVector;
VectorAssembler.prototype.visitUnion = assembleUnion;
VectorAssembler.prototype.visitInterval = assembleFlatVector;
VectorAssembler.prototype.visitFixedSizeList = assembleListVector;
VectorAssembler.prototype.visitMap = assembleListVector;
class RecordBatchWriter extends ReadableInterop {
  constructor(options) {
    super();
    this._position = 0;
    this._started = false;
    this._sink = new AsyncByteQueue();
    this._schema = null;
    this._dictionaryBlocks = [];
    this._recordBatchBlocks = [];
    this._dictionaryDeltaOffsets = /* @__PURE__ */ new Map();
    isObject(options) || (options = { autoDestroy: true, writeLegacyIpcFormat: false });
    this._autoDestroy = typeof options.autoDestroy === "boolean" ? options.autoDestroy : true;
    this._writeLegacyIpcFormat = typeof options.writeLegacyIpcFormat === "boolean" ? options.writeLegacyIpcFormat : false;
  }
  static throughNode(options) {
    throw new Error(`"throughNode" not available in this environment`);
  }
  static throughDOM(writableStrategy, readableStrategy) {
    throw new Error(`"throughDOM" not available in this environment`);
  }
  toString(sync = false) {
    return this._sink.toString(sync);
  }
  toUint8Array(sync = false) {
    return this._sink.toUint8Array(sync);
  }
  writeAll(input) {
    if (isPromise(input)) {
      return input.then((x) => this.writeAll(x));
    } else if (isAsyncIterable(input)) {
      return writeAllAsync(this, input);
    }
    return writeAll(this, input);
  }
  get closed() {
    return this._sink.closed;
  }
  [Symbol.asyncIterator]() {
    return this._sink[Symbol.asyncIterator]();
  }
  toDOMStream(options) {
    return this._sink.toDOMStream(options);
  }
  toNodeStream(options) {
    return this._sink.toNodeStream(options);
  }
  close() {
    return this.reset()._sink.close();
  }
  abort(reason) {
    return this.reset()._sink.abort(reason);
  }
  finish() {
    this._autoDestroy ? this.close() : this.reset(this._sink, this._schema);
    return this;
  }
  reset(sink = this._sink, schema = null) {
    if (sink === this._sink || sink instanceof AsyncByteQueue) {
      this._sink = sink;
    } else {
      this._sink = new AsyncByteQueue();
      if (sink && isWritableDOMStream(sink)) {
        this.toDOMStream({ type: "bytes" }).pipeTo(sink);
      } else if (sink && isWritableNodeStream(sink)) {
        this.toNodeStream({ objectMode: false }).pipe(sink);
      }
    }
    if (this._started && this._schema) {
      this._writeFooter(this._schema);
    }
    this._started = false;
    this._dictionaryBlocks = [];
    this._recordBatchBlocks = [];
    this._dictionaryDeltaOffsets = /* @__PURE__ */ new Map();
    if (!schema || !compareSchemas(schema, this._schema)) {
      if (schema === null) {
        this._position = 0;
        this._schema = null;
      } else {
        this._started = true;
        this._schema = schema;
        this._writeSchema(schema);
      }
    }
    return this;
  }
  write(payload) {
    let schema = null;
    if (!this._sink) {
      throw new Error(`RecordBatchWriter is closed`);
    } else if (payload == null) {
      return this.finish() && void 0;
    } else if (payload instanceof Table && !(schema = payload.schema)) {
      return this.finish() && void 0;
    } else if (payload instanceof RecordBatch && !(schema = payload.schema)) {
      return this.finish() && void 0;
    }
    if (schema && !compareSchemas(schema, this._schema)) {
      if (this._started && this._autoDestroy) {
        return this.close();
      }
      this.reset(this._sink, schema);
    }
    if (payload instanceof RecordBatch) {
      if (!(payload instanceof _InternalEmptyPlaceholderRecordBatch)) {
        this._writeRecordBatch(payload);
      }
    } else if (payload instanceof Table) {
      this.writeAll(payload.chunks);
    } else if (isIterable(payload)) {
      this.writeAll(payload);
    }
  }
  _writeMessage(message, alignment = 8) {
    const a = alignment - 1;
    const buffer = Message.encode(message);
    const flatbufferSize = buffer.byteLength;
    const prefixSize = !this._writeLegacyIpcFormat ? 8 : 4;
    const alignedSize = flatbufferSize + prefixSize + a & ~a;
    const nPaddingBytes = alignedSize - flatbufferSize - prefixSize;
    if (message.headerType === MessageHeader.RecordBatch) {
      this._recordBatchBlocks.push(new FileBlock(alignedSize, message.bodyLength, this._position));
    } else if (message.headerType === MessageHeader.DictionaryBatch) {
      this._dictionaryBlocks.push(new FileBlock(alignedSize, message.bodyLength, this._position));
    }
    if (!this._writeLegacyIpcFormat) {
      this._write(Int32Array.of(-1));
    }
    this._write(Int32Array.of(alignedSize - prefixSize));
    if (flatbufferSize > 0) {
      this._write(buffer);
    }
    return this._writePadding(nPaddingBytes);
  }
  _write(chunk) {
    if (this._started) {
      const buffer = toUint8Array(chunk);
      if (buffer && buffer.byteLength > 0) {
        this._sink.write(buffer);
        this._position += buffer.byteLength;
      }
    }
    return this;
  }
  _writeSchema(schema) {
    return this._writeMessage(Message.from(schema));
  }
  _writeFooter(schema) {
    return this._writeLegacyIpcFormat ? this._write(Int32Array.of(0)) : this._write(Int32Array.of(-1, 0));
  }
  _writeMagic() {
    return this._write(MAGIC);
  }
  _writePadding(nBytes) {
    return nBytes > 0 ? this._write(new Uint8Array(nBytes)) : this;
  }
  _writeRecordBatch(batch) {
    const { byteLength, nodes, bufferRegions, buffers } = VectorAssembler.assemble(batch);
    const recordBatch = new RecordBatch$1(batch.length, nodes, bufferRegions);
    const message = Message.from(recordBatch, byteLength);
    return this._writeDictionaries(batch)._writeMessage(message)._writeBodyBuffers(buffers);
  }
  _writeDictionaryBatch(dictionary, id, isDelta = false) {
    this._dictionaryDeltaOffsets.set(id, dictionary.length + (this._dictionaryDeltaOffsets.get(id) || 0));
    const { byteLength, nodes, bufferRegions, buffers } = VectorAssembler.assemble(dictionary);
    const recordBatch = new RecordBatch$1(dictionary.length, nodes, bufferRegions);
    const dictionaryBatch = new DictionaryBatch(recordBatch, id, isDelta);
    const message = Message.from(dictionaryBatch, byteLength);
    return this._writeMessage(message)._writeBodyBuffers(buffers);
  }
  _writeBodyBuffers(buffers) {
    let buffer;
    let size, padding;
    for (let i = -1, n = buffers.length; ++i < n; ) {
      if ((buffer = buffers[i]) && (size = buffer.byteLength) > 0) {
        this._write(buffer);
        if ((padding = (size + 7 & ~7) - size) > 0) {
          this._writePadding(padding);
        }
      }
    }
    return this;
  }
  _writeDictionaries(batch) {
    for (let [id, dictionary] of batch.dictionaries) {
      let offset = this._dictionaryDeltaOffsets.get(id) || 0;
      if (offset === 0 || (dictionary = dictionary.slice(offset)).length > 0) {
        const chunks = "chunks" in dictionary ? dictionary.chunks : [dictionary];
        for (const chunk of chunks) {
          this._writeDictionaryBatch(chunk, id, offset > 0);
          offset += chunk.length;
        }
      }
    }
    return this;
  }
}
class RecordBatchStreamWriter extends RecordBatchWriter {
  static writeAll(input, options) {
    const writer = new RecordBatchStreamWriter(options);
    if (isPromise(input)) {
      return input.then((x) => writer.writeAll(x));
    } else if (isAsyncIterable(input)) {
      return writeAllAsync(writer, input);
    }
    return writeAll(writer, input);
  }
}
class RecordBatchFileWriter extends RecordBatchWriter {
  static writeAll(input) {
    const writer = new RecordBatchFileWriter();
    if (isPromise(input)) {
      return input.then((x) => writer.writeAll(x));
    } else if (isAsyncIterable(input)) {
      return writeAllAsync(writer, input);
    }
    return writeAll(writer, input);
  }
  constructor() {
    super();
    this._autoDestroy = true;
  }
  _writeSchema(schema) {
    return this._writeMagic()._writePadding(2);
  }
  _writeFooter(schema) {
    const buffer = Footer_.encode(new Footer_(schema, MetadataVersion.V4, this._recordBatchBlocks, this._dictionaryBlocks));
    return super._writeFooter(schema)._write(buffer)._write(Int32Array.of(buffer.byteLength))._writeMagic();
  }
}
function writeAll(writer, input) {
  let chunks = input;
  if (input instanceof Table) {
    chunks = input.chunks;
    writer.reset(void 0, input.schema);
  }
  for (const batch of chunks) {
    writer.write(batch);
  }
  return writer.finish();
}
function writeAllAsync(writer, batches) {
  var batches_1, batches_1_1;
  var e_1, _a;
  return __awaiter(this, void 0, void 0, function* () {
    try {
      for (batches_1 = __asyncValues(batches); batches_1_1 = yield batches_1.next(), !batches_1_1.done; ) {
        const batch = batches_1_1.value;
        writer.write(batch);
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (batches_1_1 && !batches_1_1.done && (_a = batches_1.return))
          yield _a.call(batches_1);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
    return writer.finish();
  });
}
const noopBuf = new Uint8Array(0);
const nullBufs = (bitmapLength) => [
  noopBuf,
  noopBuf,
  new Uint8Array(bitmapLength),
  noopBuf
];
function ensureSameLengthData(schema, chunks, batchLength = chunks.reduce((l, c) => Math.max(l, c.length), 0)) {
  let data;
  let field;
  let i = -1;
  const n = chunks.length;
  const fields = [...schema.fields];
  const batchData = [];
  const bitmapLength = (batchLength + 63 & ~63) >> 3;
  while (++i < n) {
    if ((data = chunks[i]) && data.length === batchLength) {
      batchData[i] = data;
    } else {
      (field = fields[i]).nullable || (fields[i] = fields[i].clone({ nullable: true }));
      batchData[i] = data ? data._changeLengthAndBackfillNullBitmap(batchLength) : Data.new(field.type, 0, batchLength, batchLength, nullBufs(bitmapLength));
    }
  }
  return [new Schema(fields), batchLength, batchData];
}
function distributeColumnsIntoRecordBatches(columns) {
  return distributeVectorsIntoRecordBatches(new Schema(columns.map(({ field }) => field)), columns);
}
function distributeVectorsIntoRecordBatches(schema, vecs) {
  return uniformlyDistributeChunksAcrossRecordBatches(schema, vecs.map((v) => v instanceof Chunked ? v.chunks.map((c) => c.data) : [v.data]));
}
function uniformlyDistributeChunksAcrossRecordBatches(schema, columns) {
  const fields = [...schema.fields];
  const batchArgs = [];
  const memo = { numBatches: columns.reduce((n, c) => Math.max(n, c.length), 0) };
  let numBatches = 0, batchLength = 0;
  let i = -1;
  const numColumns = columns.length;
  let child, childData = [];
  while (memo.numBatches-- > 0) {
    for (batchLength = Number.POSITIVE_INFINITY, i = -1; ++i < numColumns; ) {
      childData[i] = child = columns[i].shift();
      batchLength = Math.min(batchLength, child ? child.length : batchLength);
    }
    if (isFinite(batchLength)) {
      childData = distributeChildData(fields, batchLength, childData, columns, memo);
      if (batchLength > 0) {
        batchArgs[numBatches++] = [batchLength, childData.slice()];
      }
    }
  }
  return [
    schema = new Schema(fields, schema.metadata),
    batchArgs.map((xs) => new RecordBatch(schema, ...xs))
  ];
}
function distributeChildData(fields, batchLength, childData, columns, memo) {
  let data;
  let field;
  let length = 0, i = -1;
  const n = columns.length;
  const bitmapLength = (batchLength + 63 & ~63) >> 3;
  while (++i < n) {
    if ((data = childData[i]) && (length = data.length) >= batchLength) {
      if (length === batchLength) {
        childData[i] = data;
      } else {
        childData[i] = data.slice(0, batchLength);
        data = data.slice(batchLength, length - batchLength);
        memo.numBatches = Math.max(memo.numBatches, columns[i].unshift(data));
      }
    } else {
      (field = fields[i]).nullable || (fields[i] = field.clone({ nullable: true }));
      childData[i] = data ? data._changeLengthAndBackfillNullBitmap(batchLength) : Data.new(field.type, 0, batchLength, batchLength, nullBufs(bitmapLength));
    }
  }
  return childData;
}
class BaseVector extends AbstractVector {
  constructor(data, children) {
    super();
    this._children = children;
    this.numChildren = data.childData.length;
    this._bindDataAccessors(this.data = data);
  }
  get type() {
    return this.data.type;
  }
  get typeId() {
    return this.data.typeId;
  }
  get length() {
    return this.data.length;
  }
  get offset() {
    return this.data.offset;
  }
  get stride() {
    return this.data.stride;
  }
  get nullCount() {
    return this.data.nullCount;
  }
  get byteLength() {
    return this.data.byteLength;
  }
  get VectorName() {
    return `${Type[this.typeId]}Vector`;
  }
  get ArrayType() {
    return this.type.ArrayType;
  }
  get values() {
    return this.data.values;
  }
  get typeIds() {
    return this.data.typeIds;
  }
  get nullBitmap() {
    return this.data.nullBitmap;
  }
  get valueOffsets() {
    return this.data.valueOffsets;
  }
  get [Symbol.toStringTag]() {
    return `${this.VectorName}<${this.type[Symbol.toStringTag]}>`;
  }
  clone(data, children = this._children) {
    return AbstractVector.new(data, children);
  }
  concat(...others) {
    return Chunked.concat(this, ...others);
  }
  slice(begin, end) {
    return clampRange(this, begin, end, this._sliceInternal);
  }
  isValid(index) {
    if (this.nullCount > 0) {
      const idx = this.offset + index;
      const val = this.nullBitmap[idx >> 3];
      const mask = val & 1 << idx % 8;
      return mask !== 0;
    }
    return true;
  }
  getChildAt(index) {
    return index < 0 || index >= this.numChildren ? null : (this._children || (this._children = []))[index] || (this._children[index] = AbstractVector.new(this.data.childData[index]));
  }
  toJSON() {
    return [...this];
  }
  _sliceInternal(self, begin, end) {
    return self.clone(self.data.slice(begin, end - begin), null);
  }
  _bindDataAccessors(data) {
  }
}
BaseVector.prototype[Symbol.isConcatSpreadable] = true;
class BinaryVector extends BaseVector {
  asUtf8() {
    return AbstractVector.new(this.data.clone(new Utf8()));
  }
}
class BoolVector extends BaseVector {
  static from(input) {
    return vectorFromValuesWithType(() => new Bool(), input);
  }
}
class DateVector extends BaseVector {
  static from(...args) {
    if (args.length === 2) {
      return vectorFromValuesWithType(() => args[1] === DateUnit.DAY ? new DateDay() : new DateMillisecond(), args[0]);
    }
    return vectorFromValuesWithType(() => new DateMillisecond(), args[0]);
  }
}
class DateDayVector extends DateVector {
}
class DateMillisecondVector extends DateVector {
}
class DecimalVector extends BaseVector {
}
class DictionaryVector extends BaseVector {
  constructor(data) {
    super(data);
    this.indices = AbstractVector.new(data.clone(this.type.indices));
  }
  static from(...args) {
    if (args.length === 3) {
      const [values, indices, keys] = args;
      const type = new Dictionary(values.type, indices, null, null);
      return AbstractVector.new(Data.Dictionary(type, 0, keys.length, 0, null, keys, values));
    }
    return vectorFromValuesWithType(() => args[0].type, args[0]);
  }
  get dictionary() {
    return this.data.dictionary;
  }
  reverseLookup(value) {
    return this.dictionary.indexOf(value);
  }
  getKey(idx) {
    return this.indices.get(idx);
  }
  getValue(key) {
    return this.dictionary.get(key);
  }
  setKey(idx, key) {
    return this.indices.set(idx, key);
  }
  setValue(key, value) {
    return this.dictionary.set(key, value);
  }
}
DictionaryVector.prototype.indices = null;
class FixedSizeBinaryVector extends BaseVector {
}
class FixedSizeListVector extends BaseVector {
}
class FloatVector extends BaseVector {
  static from(input) {
    let ArrowType = vectorTypeToDataType$1(this);
    if (input instanceof ArrayBuffer || ArrayBuffer.isView(input)) {
      const InputType = arrayTypeToDataType$1(input.constructor) || ArrowType;
      if (ArrowType === null) {
        ArrowType = InputType;
      }
      if (ArrowType && ArrowType === InputType) {
        const type = new ArrowType();
        const length = input.byteLength / type.ArrayType.BYTES_PER_ELEMENT;
        if (!convertTo16Bit(ArrowType, input.constructor)) {
          return AbstractVector.new(Data.Float(type, 0, length, 0, null, input));
        }
      }
    }
    if (ArrowType) {
      return vectorFromValuesWithType(() => new ArrowType(), input);
    }
    if (input instanceof DataView || input instanceof ArrayBuffer) {
      throw new TypeError(`Cannot infer float type from instance of ${input.constructor.name}`);
    }
    throw new TypeError("Unrecognized FloatVector input");
  }
}
class Float16Vector extends FloatVector {
  toFloat32Array() {
    return new Float32Array(this);
  }
  toFloat64Array() {
    return new Float64Array(this);
  }
}
class Float32Vector extends FloatVector {
}
class Float64Vector extends FloatVector {
}
const convertTo16Bit = (typeCtor, dataCtor) => {
  return typeCtor === Float16 && dataCtor !== Uint16Array;
};
const arrayTypeToDataType$1 = (ctor) => {
  switch (ctor) {
    case Uint16Array:
      return Float16;
    case Float32Array:
      return Float32;
    case Float64Array:
      return Float64;
    default:
      return null;
  }
};
const vectorTypeToDataType$1 = (ctor) => {
  switch (ctor) {
    case Float16Vector:
      return Float16;
    case Float32Vector:
      return Float32;
    case Float64Vector:
      return Float64;
    default:
      return null;
  }
};
class IntervalVector extends BaseVector {
}
class IntervalDayTimeVector extends IntervalVector {
}
class IntervalYearMonthVector extends IntervalVector {
}
class IntVector extends BaseVector {
  static from(...args) {
    const [input, is64bit = false] = args;
    let ArrowType = vectorTypeToDataType(this, is64bit);
    if (input instanceof ArrayBuffer || ArrayBuffer.isView(input)) {
      const InputType = arrayTypeToDataType(input.constructor, is64bit) || ArrowType;
      if (ArrowType === null) {
        ArrowType = InputType;
      }
      if (ArrowType && ArrowType === InputType) {
        const type = new ArrowType();
        let length = input.byteLength / type.ArrayType.BYTES_PER_ELEMENT;
        if (convert32To64Bit(ArrowType, input.constructor)) {
          length *= 0.5;
        }
        return AbstractVector.new(Data.Int(type, 0, length, 0, null, input));
      }
    }
    if (ArrowType) {
      return vectorFromValuesWithType(() => new ArrowType(), input);
    }
    if (input instanceof DataView || input instanceof ArrayBuffer) {
      throw new TypeError(`Cannot infer integer type from instance of ${input.constructor.name}`);
    }
    throw new TypeError("Unrecognized IntVector input");
  }
}
class Int8Vector extends IntVector {
}
class Int16Vector extends IntVector {
}
class Int32Vector extends IntVector {
}
class Int64Vector extends IntVector {
  toBigInt64Array() {
    return toBigInt64Array(this.values);
  }
  get values64() {
    return this._values64 || (this._values64 = this.toBigInt64Array());
  }
}
class Uint8Vector extends IntVector {
}
class Uint16Vector extends IntVector {
}
class Uint32Vector extends IntVector {
}
class Uint64Vector extends IntVector {
  toBigUint64Array() {
    return toBigUint64Array(this.values);
  }
  get values64() {
    return this._values64 || (this._values64 = this.toBigUint64Array());
  }
}
const convert32To64Bit = (typeCtor, dataCtor) => {
  return (typeCtor === Int64$1 || typeCtor === Uint64$1) && (dataCtor === Int32Array || dataCtor === Uint32Array);
};
const arrayTypeToDataType = (ctor, is64bit) => {
  switch (ctor) {
    case Int8Array:
      return Int8;
    case Int16Array:
      return Int16;
    case Int32Array:
      return is64bit ? Int64$1 : Int32;
    case BigInt64ArrayCtor:
      return Int64$1;
    case Uint8Array:
      return Uint8;
    case Uint16Array:
      return Uint16;
    case Uint32Array:
      return is64bit ? Uint64$1 : Uint32;
    case BigUint64ArrayCtor:
      return Uint64$1;
    default:
      return null;
  }
};
const vectorTypeToDataType = (ctor, is64bit) => {
  switch (ctor) {
    case Int8Vector:
      return Int8;
    case Int16Vector:
      return Int16;
    case Int32Vector:
      return is64bit ? Int64$1 : Int32;
    case Int64Vector:
      return Int64$1;
    case Uint8Vector:
      return Uint8;
    case Uint16Vector:
      return Uint16;
    case Uint32Vector:
      return is64bit ? Uint64$1 : Uint32;
    case Uint64Vector:
      return Uint64$1;
    default:
      return null;
  }
};
class ListVector extends BaseVector {
}
class MapVector extends BaseVector {
  asList() {
    const child = this.type.children[0];
    return AbstractVector.new(this.data.clone(new List(child)));
  }
  bind(index) {
    const child = this.getChildAt(0);
    const { [index]: begin, [index + 1]: end } = this.valueOffsets;
    return new MapRow(child.slice(begin, end));
  }
}
class NullVector extends BaseVector {
}
const kRowIndex = Symbol.for("rowIndex");
class StructVector extends BaseVector {
  bind(index) {
    const proto = this._row || (this._row = new StructRow(this));
    const bound = Object.create(proto);
    bound[kRowIndex] = index;
    return bound;
  }
}
class TimestampVector extends BaseVector {
}
class TimestampSecondVector extends TimestampVector {
}
class TimestampMillisecondVector extends TimestampVector {
}
class TimestampMicrosecondVector extends TimestampVector {
}
class TimestampNanosecondVector extends TimestampVector {
}
class TimeVector extends BaseVector {
}
class TimeSecondVector extends TimeVector {
}
class TimeMillisecondVector extends TimeVector {
}
class TimeMicrosecondVector extends TimeVector {
}
class TimeNanosecondVector extends TimeVector {
}
class UnionVector extends BaseVector {
  get typeIdToChildIndex() {
    return this.data.type.typeIdToChildIndex;
  }
}
class DenseUnionVector extends UnionVector {
  get valueOffsets() {
    return this.data.valueOffsets;
  }
}
class SparseUnionVector extends UnionVector {
}
class Utf8Vector extends BaseVector {
  static from(input) {
    return vectorFromValuesWithType(() => new Utf8(), input);
  }
  asBinary() {
    return AbstractVector.new(this.data.clone(new Binary()));
  }
}
function partial0(visit) {
  return function() {
    return visit(this);
  };
}
function partial1(visit) {
  return function(a) {
    return visit(this, a);
  };
}
function partial2(visit) {
  return function(a, b) {
    return visit(this, a, b);
  };
}
class GetVisitor extends Visitor {
}
const epochDaysToMs = (data, index) => 864e5 * data[index];
const epochMillisecondsLongToMs = (data, index) => 4294967296 * data[index + 1] + (data[index] >>> 0);
const epochMicrosecondsLongToMs = (data, index) => 4294967296 * (data[index + 1] / 1e3) + (data[index] >>> 0) / 1e3;
const epochNanosecondsLongToMs = (data, index) => 4294967296 * (data[index + 1] / 1e6) + (data[index] >>> 0) / 1e6;
const epochMillisecondsToDate = (epochMs) => new Date(epochMs);
const epochDaysToDate = (data, index) => epochMillisecondsToDate(epochDaysToMs(data, index));
const epochMillisecondsLongToDate = (data, index) => epochMillisecondsToDate(epochMillisecondsLongToMs(data, index));
const getNull = (_vector, _index) => null;
const getVariableWidthBytes = (values, valueOffsets, index) => {
  const { [index]: x, [index + 1]: y } = valueOffsets;
  return x != null && y != null ? values.subarray(x, y) : null;
};
const getBool = ({ offset, values }, index) => {
  const idx = offset + index;
  const byte = values[idx >> 3];
  return (byte & 1 << idx % 8) !== 0;
};
const getDateDay = ({ values }, index) => epochDaysToDate(values, index);
const getDateMillisecond = ({ values }, index) => epochMillisecondsLongToDate(values, index * 2);
const getNumeric = ({ stride, values }, index) => values[stride * index];
const getFloat16 = ({ stride, values }, index) => uint16ToFloat64(values[stride * index]);
const getBigInts = ({ stride, values, type }, index) => BN.new(values.subarray(stride * index, stride * (index + 1)), type.isSigned);
const getFixedSizeBinary = ({ stride, values }, index) => values.subarray(stride * index, stride * (index + 1));
const getBinary = ({ values, valueOffsets }, index) => getVariableWidthBytes(values, valueOffsets, index);
const getUtf8 = ({ values, valueOffsets }, index) => {
  const bytes = getVariableWidthBytes(values, valueOffsets, index);
  return bytes !== null ? decodeUtf8(bytes) : null;
};
const getInt = (vector, index) => vector.type.bitWidth < 64 ? getNumeric(vector, index) : getBigInts(vector, index);
const getFloat = (vector, index) => vector.type.precision !== Precision.HALF ? getNumeric(vector, index) : getFloat16(vector, index);
const getDate = (vector, index) => vector.type.unit === DateUnit.DAY ? getDateDay(vector, index) : getDateMillisecond(vector, index);
const getTimestampSecond = ({ values }, index) => 1e3 * epochMillisecondsLongToMs(values, index * 2);
const getTimestampMillisecond = ({ values }, index) => epochMillisecondsLongToMs(values, index * 2);
const getTimestampMicrosecond = ({ values }, index) => epochMicrosecondsLongToMs(values, index * 2);
const getTimestampNanosecond = ({ values }, index) => epochNanosecondsLongToMs(values, index * 2);
const getTimestamp = (vector, index) => {
  switch (vector.type.unit) {
    case TimeUnit.SECOND:
      return getTimestampSecond(vector, index);
    case TimeUnit.MILLISECOND:
      return getTimestampMillisecond(vector, index);
    case TimeUnit.MICROSECOND:
      return getTimestampMicrosecond(vector, index);
    case TimeUnit.NANOSECOND:
      return getTimestampNanosecond(vector, index);
  }
};
const getTimeSecond = ({ values, stride }, index) => values[stride * index];
const getTimeMillisecond = ({ values, stride }, index) => values[stride * index];
const getTimeMicrosecond = ({ values }, index) => BN.signed(values.subarray(2 * index, 2 * (index + 1)));
const getTimeNanosecond = ({ values }, index) => BN.signed(values.subarray(2 * index, 2 * (index + 1)));
const getTime = (vector, index) => {
  switch (vector.type.unit) {
    case TimeUnit.SECOND:
      return getTimeSecond(vector, index);
    case TimeUnit.MILLISECOND:
      return getTimeMillisecond(vector, index);
    case TimeUnit.MICROSECOND:
      return getTimeMicrosecond(vector, index);
    case TimeUnit.NANOSECOND:
      return getTimeNanosecond(vector, index);
  }
};
const getDecimal = ({ values }, index) => BN.decimal(values.subarray(4 * index, 4 * (index + 1)));
const getList = (vector, index) => {
  const child = vector.getChildAt(0), { valueOffsets, stride } = vector;
  return child.slice(valueOffsets[index * stride], valueOffsets[index * stride + 1]);
};
const getMap = (vector, index) => {
  return vector.bind(index);
};
const getStruct = (vector, index) => {
  return vector.bind(index);
};
const getUnion = (vector, index) => {
  return vector.type.mode === UnionMode.Dense ? getDenseUnion(vector, index) : getSparseUnion(vector, index);
};
const getDenseUnion = (vector, index) => {
  const childIndex = vector.typeIdToChildIndex[vector.typeIds[index]];
  const child = vector.getChildAt(childIndex);
  return child ? child.get(vector.valueOffsets[index]) : null;
};
const getSparseUnion = (vector, index) => {
  const childIndex = vector.typeIdToChildIndex[vector.typeIds[index]];
  const child = vector.getChildAt(childIndex);
  return child ? child.get(index) : null;
};
const getDictionary = (vector, index) => {
  return vector.getValue(vector.getKey(index));
};
const getInterval = (vector, index) => vector.type.unit === IntervalUnit.DAY_TIME ? getIntervalDayTime(vector, index) : getIntervalYearMonth(vector, index);
const getIntervalDayTime = ({ values }, index) => values.subarray(2 * index, 2 * (index + 1));
const getIntervalYearMonth = ({ values }, index) => {
  const interval = values[index];
  const int32s = new Int32Array(2);
  int32s[0] = interval / 12 | 0;
  int32s[1] = interval % 12 | 0;
  return int32s;
};
const getFixedSizeList = (vector, index) => {
  const child = vector.getChildAt(0), { stride } = vector;
  return child.slice(index * stride, (index + 1) * stride);
};
GetVisitor.prototype.visitNull = getNull;
GetVisitor.prototype.visitBool = getBool;
GetVisitor.prototype.visitInt = getInt;
GetVisitor.prototype.visitInt8 = getNumeric;
GetVisitor.prototype.visitInt16 = getNumeric;
GetVisitor.prototype.visitInt32 = getNumeric;
GetVisitor.prototype.visitInt64 = getBigInts;
GetVisitor.prototype.visitUint8 = getNumeric;
GetVisitor.prototype.visitUint16 = getNumeric;
GetVisitor.prototype.visitUint32 = getNumeric;
GetVisitor.prototype.visitUint64 = getBigInts;
GetVisitor.prototype.visitFloat = getFloat;
GetVisitor.prototype.visitFloat16 = getFloat16;
GetVisitor.prototype.visitFloat32 = getNumeric;
GetVisitor.prototype.visitFloat64 = getNumeric;
GetVisitor.prototype.visitUtf8 = getUtf8;
GetVisitor.prototype.visitBinary = getBinary;
GetVisitor.prototype.visitFixedSizeBinary = getFixedSizeBinary;
GetVisitor.prototype.visitDate = getDate;
GetVisitor.prototype.visitDateDay = getDateDay;
GetVisitor.prototype.visitDateMillisecond = getDateMillisecond;
GetVisitor.prototype.visitTimestamp = getTimestamp;
GetVisitor.prototype.visitTimestampSecond = getTimestampSecond;
GetVisitor.prototype.visitTimestampMillisecond = getTimestampMillisecond;
GetVisitor.prototype.visitTimestampMicrosecond = getTimestampMicrosecond;
GetVisitor.prototype.visitTimestampNanosecond = getTimestampNanosecond;
GetVisitor.prototype.visitTime = getTime;
GetVisitor.prototype.visitTimeSecond = getTimeSecond;
GetVisitor.prototype.visitTimeMillisecond = getTimeMillisecond;
GetVisitor.prototype.visitTimeMicrosecond = getTimeMicrosecond;
GetVisitor.prototype.visitTimeNanosecond = getTimeNanosecond;
GetVisitor.prototype.visitDecimal = getDecimal;
GetVisitor.prototype.visitList = getList;
GetVisitor.prototype.visitStruct = getStruct;
GetVisitor.prototype.visitUnion = getUnion;
GetVisitor.prototype.visitDenseUnion = getDenseUnion;
GetVisitor.prototype.visitSparseUnion = getSparseUnion;
GetVisitor.prototype.visitDictionary = getDictionary;
GetVisitor.prototype.visitInterval = getInterval;
GetVisitor.prototype.visitIntervalDayTime = getIntervalDayTime;
GetVisitor.prototype.visitIntervalYearMonth = getIntervalYearMonth;
GetVisitor.prototype.visitFixedSizeList = getFixedSizeList;
GetVisitor.prototype.visitMap = getMap;
const instance$5 = new GetVisitor();
class IndexOfVisitor extends Visitor {
}
function nullIndexOf(vector, searchElement) {
  return searchElement === null && vector.length > 0 ? 0 : -1;
}
function indexOfNull(vector, fromIndex) {
  const { nullBitmap } = vector.data;
  if (!nullBitmap || vector.nullCount <= 0) {
    return -1;
  }
  let i = 0;
  for (const isValid of new BitIterator(nullBitmap, vector.data.offset + (fromIndex || 0), vector.length, nullBitmap, getBool$1)) {
    if (!isValid) {
      return i;
    }
    ++i;
  }
  return -1;
}
function indexOfValue(vector, searchElement, fromIndex) {
  if (searchElement === void 0) {
    return -1;
  }
  if (searchElement === null) {
    return indexOfNull(vector, fromIndex);
  }
  const compare = createElementComparator(searchElement);
  for (let i = (fromIndex || 0) - 1, n = vector.length; ++i < n; ) {
    if (compare(vector.get(i))) {
      return i;
    }
  }
  return -1;
}
function indexOfUnion(vector, searchElement, fromIndex) {
  const compare = createElementComparator(searchElement);
  for (let i = (fromIndex || 0) - 1, n = vector.length; ++i < n; ) {
    if (compare(vector.get(i))) {
      return i;
    }
  }
  return -1;
}
IndexOfVisitor.prototype.visitNull = nullIndexOf;
IndexOfVisitor.prototype.visitBool = indexOfValue;
IndexOfVisitor.prototype.visitInt = indexOfValue;
IndexOfVisitor.prototype.visitInt8 = indexOfValue;
IndexOfVisitor.prototype.visitInt16 = indexOfValue;
IndexOfVisitor.prototype.visitInt32 = indexOfValue;
IndexOfVisitor.prototype.visitInt64 = indexOfValue;
IndexOfVisitor.prototype.visitUint8 = indexOfValue;
IndexOfVisitor.prototype.visitUint16 = indexOfValue;
IndexOfVisitor.prototype.visitUint32 = indexOfValue;
IndexOfVisitor.prototype.visitUint64 = indexOfValue;
IndexOfVisitor.prototype.visitFloat = indexOfValue;
IndexOfVisitor.prototype.visitFloat16 = indexOfValue;
IndexOfVisitor.prototype.visitFloat32 = indexOfValue;
IndexOfVisitor.prototype.visitFloat64 = indexOfValue;
IndexOfVisitor.prototype.visitUtf8 = indexOfValue;
IndexOfVisitor.prototype.visitBinary = indexOfValue;
IndexOfVisitor.prototype.visitFixedSizeBinary = indexOfValue;
IndexOfVisitor.prototype.visitDate = indexOfValue;
IndexOfVisitor.prototype.visitDateDay = indexOfValue;
IndexOfVisitor.prototype.visitDateMillisecond = indexOfValue;
IndexOfVisitor.prototype.visitTimestamp = indexOfValue;
IndexOfVisitor.prototype.visitTimestampSecond = indexOfValue;
IndexOfVisitor.prototype.visitTimestampMillisecond = indexOfValue;
IndexOfVisitor.prototype.visitTimestampMicrosecond = indexOfValue;
IndexOfVisitor.prototype.visitTimestampNanosecond = indexOfValue;
IndexOfVisitor.prototype.visitTime = indexOfValue;
IndexOfVisitor.prototype.visitTimeSecond = indexOfValue;
IndexOfVisitor.prototype.visitTimeMillisecond = indexOfValue;
IndexOfVisitor.prototype.visitTimeMicrosecond = indexOfValue;
IndexOfVisitor.prototype.visitTimeNanosecond = indexOfValue;
IndexOfVisitor.prototype.visitDecimal = indexOfValue;
IndexOfVisitor.prototype.visitList = indexOfValue;
IndexOfVisitor.prototype.visitStruct = indexOfValue;
IndexOfVisitor.prototype.visitUnion = indexOfValue;
IndexOfVisitor.prototype.visitDenseUnion = indexOfUnion;
IndexOfVisitor.prototype.visitSparseUnion = indexOfUnion;
IndexOfVisitor.prototype.visitDictionary = indexOfValue;
IndexOfVisitor.prototype.visitInterval = indexOfValue;
IndexOfVisitor.prototype.visitIntervalDayTime = indexOfValue;
IndexOfVisitor.prototype.visitIntervalYearMonth = indexOfValue;
IndexOfVisitor.prototype.visitFixedSizeList = indexOfValue;
IndexOfVisitor.prototype.visitMap = indexOfValue;
const instance$4 = new IndexOfVisitor();
class IteratorVisitor extends Visitor {
}
function nullableIterator(vector) {
  const getFn = instance$5.getVisitFn(vector);
  return new BitIterator(vector.data.nullBitmap, vector.data.offset, vector.length, vector, (vec, idx, nullByte, nullBit) => (nullByte & 1 << nullBit) !== 0 ? getFn(vec, idx) : null);
}
class VectorIterator {
  constructor(vector, getFn) {
    this.vector = vector;
    this.getFn = getFn;
    this.index = 0;
  }
  next() {
    if (this.index < this.vector.length) {
      return {
        value: this.getFn(this.vector, this.index++)
      };
    }
    return { done: true, value: null };
  }
  [Symbol.iterator]() {
    return this;
  }
}
function vectorIterator(vector) {
  if (vector.nullCount > 0) {
    return nullableIterator(vector);
  }
  const { type, typeId, length } = vector;
  if (vector.stride === 1 && (typeId === Type.Timestamp || typeId === Type.Int && type.bitWidth !== 64 || typeId === Type.Time && type.bitWidth !== 64 || typeId === Type.Float && type.precision > 0)) {
    return vector.data.values.subarray(0, length)[Symbol.iterator]();
  }
  return new VectorIterator(vector, instance$5.getVisitFn(vector));
}
IteratorVisitor.prototype.visitNull = vectorIterator;
IteratorVisitor.prototype.visitBool = vectorIterator;
IteratorVisitor.prototype.visitInt = vectorIterator;
IteratorVisitor.prototype.visitInt8 = vectorIterator;
IteratorVisitor.prototype.visitInt16 = vectorIterator;
IteratorVisitor.prototype.visitInt32 = vectorIterator;
IteratorVisitor.prototype.visitInt64 = vectorIterator;
IteratorVisitor.prototype.visitUint8 = vectorIterator;
IteratorVisitor.prototype.visitUint16 = vectorIterator;
IteratorVisitor.prototype.visitUint32 = vectorIterator;
IteratorVisitor.prototype.visitUint64 = vectorIterator;
IteratorVisitor.prototype.visitFloat = vectorIterator;
IteratorVisitor.prototype.visitFloat16 = vectorIterator;
IteratorVisitor.prototype.visitFloat32 = vectorIterator;
IteratorVisitor.prototype.visitFloat64 = vectorIterator;
IteratorVisitor.prototype.visitUtf8 = vectorIterator;
IteratorVisitor.prototype.visitBinary = vectorIterator;
IteratorVisitor.prototype.visitFixedSizeBinary = vectorIterator;
IteratorVisitor.prototype.visitDate = vectorIterator;
IteratorVisitor.prototype.visitDateDay = vectorIterator;
IteratorVisitor.prototype.visitDateMillisecond = vectorIterator;
IteratorVisitor.prototype.visitTimestamp = vectorIterator;
IteratorVisitor.prototype.visitTimestampSecond = vectorIterator;
IteratorVisitor.prototype.visitTimestampMillisecond = vectorIterator;
IteratorVisitor.prototype.visitTimestampMicrosecond = vectorIterator;
IteratorVisitor.prototype.visitTimestampNanosecond = vectorIterator;
IteratorVisitor.prototype.visitTime = vectorIterator;
IteratorVisitor.prototype.visitTimeSecond = vectorIterator;
IteratorVisitor.prototype.visitTimeMillisecond = vectorIterator;
IteratorVisitor.prototype.visitTimeMicrosecond = vectorIterator;
IteratorVisitor.prototype.visitTimeNanosecond = vectorIterator;
IteratorVisitor.prototype.visitDecimal = vectorIterator;
IteratorVisitor.prototype.visitList = vectorIterator;
IteratorVisitor.prototype.visitStruct = vectorIterator;
IteratorVisitor.prototype.visitUnion = vectorIterator;
IteratorVisitor.prototype.visitDenseUnion = vectorIterator;
IteratorVisitor.prototype.visitSparseUnion = vectorIterator;
IteratorVisitor.prototype.visitDictionary = vectorIterator;
IteratorVisitor.prototype.visitInterval = vectorIterator;
IteratorVisitor.prototype.visitIntervalDayTime = vectorIterator;
IteratorVisitor.prototype.visitIntervalYearMonth = vectorIterator;
IteratorVisitor.prototype.visitFixedSizeList = vectorIterator;
IteratorVisitor.prototype.visitMap = vectorIterator;
const instance$3 = new IteratorVisitor();
class ToArrayVisitor extends Visitor {
}
function arrayOfVector(vector) {
  const { type, length, stride } = vector;
  switch (type.typeId) {
    case Type.Int:
    case Type.Float:
    case Type.Decimal:
    case Type.Time:
    case Type.Timestamp:
      return vector.data.values.subarray(0, length * stride);
  }
  return [...instance$3.visit(vector)];
}
ToArrayVisitor.prototype.visitNull = arrayOfVector;
ToArrayVisitor.prototype.visitBool = arrayOfVector;
ToArrayVisitor.prototype.visitInt = arrayOfVector;
ToArrayVisitor.prototype.visitInt8 = arrayOfVector;
ToArrayVisitor.prototype.visitInt16 = arrayOfVector;
ToArrayVisitor.prototype.visitInt32 = arrayOfVector;
ToArrayVisitor.prototype.visitInt64 = arrayOfVector;
ToArrayVisitor.prototype.visitUint8 = arrayOfVector;
ToArrayVisitor.prototype.visitUint16 = arrayOfVector;
ToArrayVisitor.prototype.visitUint32 = arrayOfVector;
ToArrayVisitor.prototype.visitUint64 = arrayOfVector;
ToArrayVisitor.prototype.visitFloat = arrayOfVector;
ToArrayVisitor.prototype.visitFloat16 = arrayOfVector;
ToArrayVisitor.prototype.visitFloat32 = arrayOfVector;
ToArrayVisitor.prototype.visitFloat64 = arrayOfVector;
ToArrayVisitor.prototype.visitUtf8 = arrayOfVector;
ToArrayVisitor.prototype.visitBinary = arrayOfVector;
ToArrayVisitor.prototype.visitFixedSizeBinary = arrayOfVector;
ToArrayVisitor.prototype.visitDate = arrayOfVector;
ToArrayVisitor.prototype.visitDateDay = arrayOfVector;
ToArrayVisitor.prototype.visitDateMillisecond = arrayOfVector;
ToArrayVisitor.prototype.visitTimestamp = arrayOfVector;
ToArrayVisitor.prototype.visitTimestampSecond = arrayOfVector;
ToArrayVisitor.prototype.visitTimestampMillisecond = arrayOfVector;
ToArrayVisitor.prototype.visitTimestampMicrosecond = arrayOfVector;
ToArrayVisitor.prototype.visitTimestampNanosecond = arrayOfVector;
ToArrayVisitor.prototype.visitTime = arrayOfVector;
ToArrayVisitor.prototype.visitTimeSecond = arrayOfVector;
ToArrayVisitor.prototype.visitTimeMillisecond = arrayOfVector;
ToArrayVisitor.prototype.visitTimeMicrosecond = arrayOfVector;
ToArrayVisitor.prototype.visitTimeNanosecond = arrayOfVector;
ToArrayVisitor.prototype.visitDecimal = arrayOfVector;
ToArrayVisitor.prototype.visitList = arrayOfVector;
ToArrayVisitor.prototype.visitStruct = arrayOfVector;
ToArrayVisitor.prototype.visitUnion = arrayOfVector;
ToArrayVisitor.prototype.visitDenseUnion = arrayOfVector;
ToArrayVisitor.prototype.visitSparseUnion = arrayOfVector;
ToArrayVisitor.prototype.visitDictionary = arrayOfVector;
ToArrayVisitor.prototype.visitInterval = arrayOfVector;
ToArrayVisitor.prototype.visitIntervalDayTime = arrayOfVector;
ToArrayVisitor.prototype.visitIntervalYearMonth = arrayOfVector;
ToArrayVisitor.prototype.visitFixedSizeList = arrayOfVector;
ToArrayVisitor.prototype.visitMap = arrayOfVector;
const instance$2 = new ToArrayVisitor();
const sum = (x, y) => x + y;
const variableWidthColumnErrorMessage = (type) => `Cannot compute the byte width of variable-width column ${type}`;
class ByteWidthVisitor extends Visitor {
  visitNull(____) {
    return 0;
  }
  visitInt(type) {
    return type.bitWidth / 8;
  }
  visitFloat(type) {
    return type.ArrayType.BYTES_PER_ELEMENT;
  }
  visitBinary(type) {
    throw new Error(variableWidthColumnErrorMessage(type));
  }
  visitUtf8(type) {
    throw new Error(variableWidthColumnErrorMessage(type));
  }
  visitBool(____) {
    return 1 / 8;
  }
  visitDecimal(____) {
    return 16;
  }
  visitDate(type) {
    return (type.unit + 1) * 4;
  }
  visitTime(type) {
    return type.bitWidth / 8;
  }
  visitTimestamp(type) {
    return type.unit === TimeUnit.SECOND ? 4 : 8;
  }
  visitInterval(type) {
    return (type.unit + 1) * 4;
  }
  visitList(type) {
    throw new Error(variableWidthColumnErrorMessage(type));
  }
  visitStruct(type) {
    return this.visitFields(type.children).reduce(sum, 0);
  }
  visitUnion(type) {
    return this.visitFields(type.children).reduce(sum, 0);
  }
  visitFixedSizeBinary(type) {
    return type.byteWidth;
  }
  visitFixedSizeList(type) {
    return type.listSize * this.visitFields(type.children).reduce(sum, 0);
  }
  visitMap(type) {
    return this.visitFields(type.children).reduce(sum, 0);
  }
  visitDictionary(type) {
    return this.visit(type.indices);
  }
  visitFields(fields) {
    return (fields || []).map((field) => this.visit(field.type));
  }
  visitSchema(schema) {
    return this.visitFields(schema.fields).reduce(sum, 0);
  }
}
const instance$1 = new ByteWidthVisitor();
class GetVectorConstructor extends Visitor {
  visitNull() {
    return NullVector;
  }
  visitBool() {
    return BoolVector;
  }
  visitInt() {
    return IntVector;
  }
  visitInt8() {
    return Int8Vector;
  }
  visitInt16() {
    return Int16Vector;
  }
  visitInt32() {
    return Int32Vector;
  }
  visitInt64() {
    return Int64Vector;
  }
  visitUint8() {
    return Uint8Vector;
  }
  visitUint16() {
    return Uint16Vector;
  }
  visitUint32() {
    return Uint32Vector;
  }
  visitUint64() {
    return Uint64Vector;
  }
  visitFloat() {
    return FloatVector;
  }
  visitFloat16() {
    return Float16Vector;
  }
  visitFloat32() {
    return Float32Vector;
  }
  visitFloat64() {
    return Float64Vector;
  }
  visitUtf8() {
    return Utf8Vector;
  }
  visitBinary() {
    return BinaryVector;
  }
  visitFixedSizeBinary() {
    return FixedSizeBinaryVector;
  }
  visitDate() {
    return DateVector;
  }
  visitDateDay() {
    return DateDayVector;
  }
  visitDateMillisecond() {
    return DateMillisecondVector;
  }
  visitTimestamp() {
    return TimestampVector;
  }
  visitTimestampSecond() {
    return TimestampSecondVector;
  }
  visitTimestampMillisecond() {
    return TimestampMillisecondVector;
  }
  visitTimestampMicrosecond() {
    return TimestampMicrosecondVector;
  }
  visitTimestampNanosecond() {
    return TimestampNanosecondVector;
  }
  visitTime() {
    return TimeVector;
  }
  visitTimeSecond() {
    return TimeSecondVector;
  }
  visitTimeMillisecond() {
    return TimeMillisecondVector;
  }
  visitTimeMicrosecond() {
    return TimeMicrosecondVector;
  }
  visitTimeNanosecond() {
    return TimeNanosecondVector;
  }
  visitDecimal() {
    return DecimalVector;
  }
  visitList() {
    return ListVector;
  }
  visitStruct() {
    return StructVector;
  }
  visitUnion() {
    return UnionVector;
  }
  visitDenseUnion() {
    return DenseUnionVector;
  }
  visitSparseUnion() {
    return SparseUnionVector;
  }
  visitDictionary() {
    return DictionaryVector;
  }
  visitInterval() {
    return IntervalVector;
  }
  visitIntervalDayTime() {
    return IntervalDayTimeVector;
  }
  visitIntervalYearMonth() {
    return IntervalYearMonthVector;
  }
  visitFixedSizeList() {
    return FixedSizeListVector;
  }
  visitMap() {
    return MapVector;
  }
}
const instance = new GetVectorConstructor();
AbstractVector.new = newVector;
AbstractVector.from = vectorFrom;
function newVector(data, ...args) {
  return new (instance.getVisitFn(data)())(data, ...args);
}
function vectorFromValuesWithType(newDataType, input) {
  if (isIterable(input)) {
    return AbstractVector.from({ "nullValues": [null, void 0], type: newDataType(), "values": input });
  } else if (isAsyncIterable(input)) {
    return AbstractVector.from({ "nullValues": [null, void 0], type: newDataType(), "values": input });
  }
  const { "values": values = [], "type": type = newDataType(), "nullValues": nullValues = [null, void 0] } = Object.assign({}, input);
  return isIterable(values) ? AbstractVector.from(Object.assign(Object.assign({ nullValues }, input), { type })) : AbstractVector.from(Object.assign(Object.assign({ nullValues }, input), { type }));
}
function vectorFrom(input) {
  const _a = Object.assign({ "nullValues": [null, void 0] }, input), { "values": values = [] } = _a, options = __rest(_a, ["values"]);
  if (isIterable(values)) {
    const chunks = [...Builder$2.throughIterable(options)(values)];
    return chunks.length === 1 ? chunks[0] : Chunked.concat(chunks);
  }
  return ((chunks) => __awaiter(this, void 0, void 0, function* () {
    var e_1, _b;
    const transform = Builder$2.throughAsyncIterable(options);
    try {
      for (var _c = __asyncValues(transform(values)), _d; _d = yield _c.next(), !_d.done; ) {
        const chunk = _d.value;
        chunks.push(chunk);
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (_d && !_d.done && (_b = _c.return))
          yield _b.call(_c);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
    return chunks.length === 1 ? chunks[0] : Chunked.concat(chunks);
  }))([]);
}
BaseVector.prototype.get = function baseVectorGet(index) {
  return instance$5.visit(this, index);
};
BaseVector.prototype.set = function baseVectorSet(index, value) {
  return instance$9.visit(this, index, value);
};
BaseVector.prototype.indexOf = function baseVectorIndexOf(value, fromIndex) {
  return instance$4.visit(this, value, fromIndex);
};
BaseVector.prototype.toArray = function baseVectorToArray() {
  return instance$2.visit(this);
};
BaseVector.prototype.getByteWidth = function baseVectorGetByteWidth() {
  return instance$1.visit(this.type);
};
BaseVector.prototype[Symbol.iterator] = function baseVectorSymbolIterator() {
  return instance$3.visit(this);
};
BaseVector.prototype._bindDataAccessors = bindBaseVectorDataAccessors;
Object.keys(Type).map((T) => Type[T]).filter((T) => typeof T === "number").filter((typeId) => typeId !== Type.NONE).forEach((typeId) => {
  const VectorCtor = instance.visit(typeId);
  VectorCtor.prototype["get"] = partial1(instance$5.getVisitFn(typeId));
  VectorCtor.prototype["set"] = partial2(instance$9.getVisitFn(typeId));
  VectorCtor.prototype["indexOf"] = partial2(instance$4.getVisitFn(typeId));
  VectorCtor.prototype["toArray"] = partial0(instance$2.getVisitFn(typeId));
  VectorCtor.prototype["getByteWidth"] = partialType0(instance$1.getVisitFn(typeId));
  VectorCtor.prototype[Symbol.iterator] = partial0(instance$3.getVisitFn(typeId));
});
function partialType0(visit) {
  return function() {
    return visit(this.type);
  };
}
function wrapNullableGet(fn) {
  return function(i) {
    return this.isValid(i) ? fn.call(this, i) : null;
  };
}
function wrapNullableSet(fn) {
  return function(i, a) {
    if (setBool$1(this.nullBitmap, this.offset + i, !(a == null))) {
      fn.call(this, i, a);
    }
  };
}
function bindBaseVectorDataAccessors() {
  const nullBitmap = this.nullBitmap;
  if (nullBitmap && nullBitmap.byteLength > 0) {
    this.get = wrapNullableGet(this.get);
    this.set = wrapNullableSet(this.set);
  }
}
class Table extends Chunked {
  constructor(...args) {
    var _a;
    let schema = null;
    if (args[0] instanceof Schema) {
      schema = args[0];
    }
    const chunks = args[0] instanceof Table ? args[0].chunks : selectArgs(RecordBatch, args);
    if (!schema && !(schema = (_a = chunks[0]) === null || _a === void 0 ? void 0 : _a.schema)) {
      throw new TypeError("Table must be initialized with a Schema or at least one RecordBatch");
    }
    chunks[0] || (chunks[0] = new _InternalEmptyPlaceholderRecordBatch(schema));
    super(new Struct(schema.fields), chunks);
    this._schema = schema;
    this._chunks = chunks;
  }
  static empty(schema = new Schema([])) {
    return new Table(schema, []);
  }
  static from(input) {
    if (!input) {
      return Table.empty();
    }
    if (typeof input === "object") {
      const table = isIterable(input["values"]) ? tableFromIterable(input) : isAsyncIterable(input["values"]) ? tableFromAsyncIterable(input) : null;
      if (table !== null) {
        return table;
      }
    }
    let reader = RecordBatchReader.from(input);
    if (isPromise(reader)) {
      return (() => __awaiter(this, void 0, void 0, function* () {
        return yield Table.from(yield reader);
      }))();
    }
    if (reader.isSync() && (reader = reader.open())) {
      return !reader.schema ? Table.empty() : new Table(reader.schema, [...reader]);
    }
    return ((opening) => __awaiter(this, void 0, void 0, function* () {
      var e_1, _a;
      const reader2 = yield opening;
      const schema = reader2.schema;
      const batches = [];
      if (schema) {
        try {
          for (var reader_1 = __asyncValues(reader2), reader_1_1; reader_1_1 = yield reader_1.next(), !reader_1_1.done; ) {
            const batch = reader_1_1.value;
            batches.push(batch);
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (reader_1_1 && !reader_1_1.done && (_a = reader_1.return))
              yield _a.call(reader_1);
          } finally {
            if (e_1)
              throw e_1.error;
          }
        }
        return new Table(schema, batches);
      }
      return Table.empty();
    }))(reader.open());
  }
  static fromAsync(source) {
    return __awaiter(this, void 0, void 0, function* () {
      return yield Table.from(source);
    });
  }
  static fromStruct(vector) {
    return Table.new(vector.data.childData, vector.type.children);
  }
  static new(...cols) {
    return new Table(...distributeColumnsIntoRecordBatches(selectColumnArgs(cols)));
  }
  get schema() {
    return this._schema;
  }
  get length() {
    return this._length;
  }
  get chunks() {
    return this._chunks;
  }
  get numCols() {
    return this._numChildren;
  }
  clone(chunks = this._chunks) {
    return new Table(this._schema, chunks);
  }
  getColumn(name) {
    return this.getColumnAt(this.getColumnIndex(name));
  }
  getColumnAt(index) {
    return this.getChildAt(index);
  }
  getColumnIndex(name) {
    return this._schema.fields.findIndex((f) => f.name === name);
  }
  getChildAt(index) {
    if (index < 0 || index >= this.numChildren) {
      return null;
    }
    let field, child;
    const fields = this._schema.fields;
    const columns = this._children || (this._children = []);
    if (child = columns[index]) {
      return child;
    }
    if (field = fields[index]) {
      const chunks = this._chunks.map((chunk) => chunk.getChildAt(index)).filter((vec) => vec != null);
      if (chunks.length > 0) {
        return columns[index] = new Column(field, chunks);
      }
    }
    return null;
  }
  serialize(encoding = "binary", stream = true) {
    const Writer = !stream ? RecordBatchFileWriter : RecordBatchStreamWriter;
    return Writer.writeAll(this).toUint8Array(true);
  }
  count() {
    return this._length;
  }
  select(...columnNames) {
    const nameToIndex = this._schema.fields.reduce((m, f, i) => m.set(f.name, i), /* @__PURE__ */ new Map());
    return this.selectAt(...columnNames.map((columnName) => nameToIndex.get(columnName)).filter((x) => x > -1));
  }
  selectAt(...columnIndices) {
    const schema = this._schema.selectAt(...columnIndices);
    return new Table(schema, this._chunks.map(({ length, data: { childData } }) => {
      return new RecordBatch(schema, length, columnIndices.map((i) => childData[i]).filter(Boolean));
    }));
  }
  assign(other) {
    const fields = this._schema.fields;
    const [indices, oldToNew] = other.schema.fields.reduce((memo, f2, newIdx) => {
      const [indices2, oldToNew2] = memo;
      const i = fields.findIndex((f) => f.name === f2.name);
      ~i ? oldToNew2[i] = newIdx : indices2.push(newIdx);
      return memo;
    }, [[], []]);
    const schema = this._schema.assign(other.schema);
    const columns = [
      ...fields.map((_f, i, _fs, j = oldToNew[i]) => j === void 0 ? this.getColumnAt(i) : other.getColumnAt(j)),
      ...indices.map((i) => other.getColumnAt(i))
    ].filter(Boolean);
    return new Table(...distributeVectorsIntoRecordBatches(schema, columns));
  }
}
function tableFromIterable(input) {
  const { type } = input;
  if (type instanceof Struct) {
    return Table.fromStruct(StructVector.from(input));
  }
  return null;
}
function tableFromAsyncIterable(input) {
  const { type } = input;
  if (type instanceof Struct) {
    return StructVector.from(input).then((vector) => Table.fromStruct(vector));
  }
  return null;
}
class RecordBatch extends StructVector {
  constructor(...args) {
    let data;
    const schema = args[0];
    let children;
    if (args[1] instanceof Data) {
      [, data, children] = args;
    } else {
      const fields = schema.fields;
      const [, length, childData] = args;
      data = Data.Struct(new Struct(fields), 0, length, 0, null, childData);
    }
    super(data, children);
    this._schema = schema;
  }
  static from(options) {
    if (isIterable(options["values"])) {
      return Table.from(options);
    }
    return Table.from(options);
  }
  static new(...args) {
    const [fs, xs] = selectFieldArgs(args);
    const vs = xs.filter((x) => x instanceof AbstractVector);
    return new RecordBatch(...ensureSameLengthData(new Schema(fs), vs.map((x) => x.data)));
  }
  clone(data, children = this._children) {
    return new RecordBatch(this._schema, data, children);
  }
  concat(...others) {
    const schema = this._schema, chunks = Chunked.flatten(this, ...others);
    return new Table(schema, chunks.map(({ data }) => new RecordBatch(schema, data)));
  }
  get schema() {
    return this._schema;
  }
  get numCols() {
    return this._schema.fields.length;
  }
  get dictionaries() {
    return this._dictionaries || (this._dictionaries = DictionaryCollector.collect(this));
  }
  select(...columnNames) {
    const nameToIndex = this._schema.fields.reduce((m, f, i) => m.set(f.name, i), /* @__PURE__ */ new Map());
    return this.selectAt(...columnNames.map((columnName) => nameToIndex.get(columnName)).filter((x) => x > -1));
  }
  selectAt(...columnIndices) {
    const schema = this._schema.selectAt(...columnIndices);
    const childData = columnIndices.map((i) => this.data.childData[i]).filter(Boolean);
    return new RecordBatch(schema, this.length, childData);
  }
}
class _InternalEmptyPlaceholderRecordBatch extends RecordBatch {
  constructor(schema) {
    super(schema, 0, schema.fields.map((f) => Data.new(f.type, 0, 0, 0)));
  }
}
class DictionaryCollector extends Visitor {
  constructor() {
    super(...arguments);
    this.dictionaries = /* @__PURE__ */ new Map();
  }
  static collect(batch) {
    return new DictionaryCollector().visit(batch.data, new Struct(batch.schema.fields)).dictionaries;
  }
  visit(data, type) {
    if (DataType.isDictionary(type)) {
      return this.visitDictionary(data, type);
    } else {
      data.childData.forEach((child, i) => this.visit(child, type.children[i].type));
    }
    return this;
  }
  visitDictionary(data, type) {
    const dictionary = data.dictionary;
    if (dictionary && dictionary.length > 0) {
      this.dictionaries.set(type.id, dictionary);
    }
    return this;
  }
}
class RecordBatchReader extends ReadableInterop {
  constructor(impl) {
    super();
    this._impl = impl;
  }
  get closed() {
    return this._impl.closed;
  }
  get schema() {
    return this._impl.schema;
  }
  get autoDestroy() {
    return this._impl.autoDestroy;
  }
  get dictionaries() {
    return this._impl.dictionaries;
  }
  get numDictionaries() {
    return this._impl.numDictionaries;
  }
  get numRecordBatches() {
    return this._impl.numRecordBatches;
  }
  get footer() {
    return this._impl.isFile() ? this._impl.footer : null;
  }
  isSync() {
    return this._impl.isSync();
  }
  isAsync() {
    return this._impl.isAsync();
  }
  isFile() {
    return this._impl.isFile();
  }
  isStream() {
    return this._impl.isStream();
  }
  next() {
    return this._impl.next();
  }
  throw(value) {
    return this._impl.throw(value);
  }
  return(value) {
    return this._impl.return(value);
  }
  cancel() {
    return this._impl.cancel();
  }
  reset(schema) {
    this._impl.reset(schema);
    this._DOMStream = void 0;
    this._nodeStream = void 0;
    return this;
  }
  open(options) {
    const opening = this._impl.open(options);
    return isPromise(opening) ? opening.then(() => this) : this;
  }
  readRecordBatch(index) {
    return this._impl.isFile() ? this._impl.readRecordBatch(index) : null;
  }
  [Symbol.iterator]() {
    return this._impl[Symbol.iterator]();
  }
  [Symbol.asyncIterator]() {
    return this._impl[Symbol.asyncIterator]();
  }
  toDOMStream() {
    return streamAdapters.toDOMStream(this.isSync() ? { [Symbol.iterator]: () => this } : { [Symbol.asyncIterator]: () => this });
  }
  toNodeStream() {
    return streamAdapters.toNodeStream(this.isSync() ? { [Symbol.iterator]: () => this } : { [Symbol.asyncIterator]: () => this }, { objectMode: true });
  }
  static throughNode(options) {
    throw new Error(`"throughNode" not available in this environment`);
  }
  static throughDOM(writableStrategy, readableStrategy) {
    throw new Error(`"throughDOM" not available in this environment`);
  }
  static from(source) {
    if (source instanceof RecordBatchReader) {
      return source;
    } else if (isArrowJSON(source)) {
      return fromArrowJSON(source);
    } else if (isFileHandle(source)) {
      return fromFileHandle(source);
    } else if (isPromise(source)) {
      return (() => __awaiter(this, void 0, void 0, function* () {
        return yield RecordBatchReader.from(yield source);
      }))();
    } else if (isFetchResponse(source) || isReadableDOMStream(source) || isReadableNodeStream(source) || isAsyncIterable(source)) {
      return fromAsyncByteStream(new AsyncByteStream(source));
    }
    return fromByteStream(new ByteStream(source));
  }
  static readAll(source) {
    if (source instanceof RecordBatchReader) {
      return source.isSync() ? readAllSync(source) : readAllAsync(source);
    } else if (isArrowJSON(source) || ArrayBuffer.isView(source) || isIterable(source) || isIteratorResult(source)) {
      return readAllSync(source);
    }
    return readAllAsync(source);
  }
}
class RecordBatchStreamReader extends RecordBatchReader {
  constructor(_impl) {
    super(_impl);
    this._impl = _impl;
  }
  [Symbol.iterator]() {
    return this._impl[Symbol.iterator]();
  }
  [Symbol.asyncIterator]() {
    return __asyncGenerator(this, arguments, function* _a() {
      yield __await(yield* __asyncDelegator(__asyncValues(this[Symbol.iterator]())));
    });
  }
}
class AsyncRecordBatchStreamReader extends RecordBatchReader {
  constructor(_impl) {
    super(_impl);
    this._impl = _impl;
  }
  [Symbol.iterator]() {
    throw new Error(`AsyncRecordBatchStreamReader is not Iterable`);
  }
  [Symbol.asyncIterator]() {
    return this._impl[Symbol.asyncIterator]();
  }
}
class RecordBatchFileReader extends RecordBatchStreamReader {
  constructor(_impl) {
    super(_impl);
    this._impl = _impl;
  }
}
class AsyncRecordBatchFileReader extends AsyncRecordBatchStreamReader {
  constructor(_impl) {
    super(_impl);
    this._impl = _impl;
  }
}
class RecordBatchReaderImpl {
  constructor(dictionaries = /* @__PURE__ */ new Map()) {
    this.closed = false;
    this.autoDestroy = true;
    this._dictionaryIndex = 0;
    this._recordBatchIndex = 0;
    this.dictionaries = dictionaries;
  }
  get numDictionaries() {
    return this._dictionaryIndex;
  }
  get numRecordBatches() {
    return this._recordBatchIndex;
  }
  isSync() {
    return false;
  }
  isAsync() {
    return false;
  }
  isFile() {
    return false;
  }
  isStream() {
    return false;
  }
  reset(schema) {
    this._dictionaryIndex = 0;
    this._recordBatchIndex = 0;
    this.schema = schema;
    this.dictionaries = /* @__PURE__ */ new Map();
    return this;
  }
  _loadRecordBatch(header, body) {
    return new RecordBatch(this.schema, header.length, this._loadVectors(header, body, this.schema.fields));
  }
  _loadDictionaryBatch(header, body) {
    const { id, isDelta, data } = header;
    const { dictionaries, schema } = this;
    const dictionary = dictionaries.get(id);
    if (isDelta || !dictionary) {
      const type = schema.dictionaries.get(id);
      return dictionary && isDelta ? dictionary.concat(AbstractVector.new(this._loadVectors(data, body, [type])[0])) : AbstractVector.new(this._loadVectors(data, body, [type])[0]);
    }
    return dictionary;
  }
  _loadVectors(header, body, types) {
    return new VectorLoader(body, header.nodes, header.buffers, this.dictionaries).visitMany(types);
  }
}
class RecordBatchStreamReaderImpl extends RecordBatchReaderImpl {
  constructor(source, dictionaries) {
    super(dictionaries);
    this._reader = !isArrowJSON(source) ? new MessageReader(this._handle = source) : new JSONMessageReader(this._handle = source);
  }
  isSync() {
    return true;
  }
  isStream() {
    return true;
  }
  [Symbol.iterator]() {
    return this;
  }
  cancel() {
    if (!this.closed && (this.closed = true)) {
      this.reset()._reader.return();
      this._reader = null;
      this.dictionaries = null;
    }
  }
  open(options) {
    if (!this.closed) {
      this.autoDestroy = shouldAutoDestroy(this, options);
      if (!(this.schema || (this.schema = this._reader.readSchema()))) {
        this.cancel();
      }
    }
    return this;
  }
  throw(value) {
    if (!this.closed && this.autoDestroy && (this.closed = true)) {
      return this.reset()._reader.throw(value);
    }
    return ITERATOR_DONE;
  }
  return(value) {
    if (!this.closed && this.autoDestroy && (this.closed = true)) {
      return this.reset()._reader.return(value);
    }
    return ITERATOR_DONE;
  }
  next() {
    if (this.closed) {
      return ITERATOR_DONE;
    }
    let message;
    const { _reader: reader } = this;
    while (message = this._readNextMessageAndValidate()) {
      if (message.isSchema()) {
        this.reset(message.header());
      } else if (message.isRecordBatch()) {
        this._recordBatchIndex++;
        const header = message.header();
        const buffer = reader.readMessageBody(message.bodyLength);
        const recordBatch = this._loadRecordBatch(header, buffer);
        return { done: false, value: recordBatch };
      } else if (message.isDictionaryBatch()) {
        this._dictionaryIndex++;
        const header = message.header();
        const buffer = reader.readMessageBody(message.bodyLength);
        const vector = this._loadDictionaryBatch(header, buffer);
        this.dictionaries.set(header.id, vector);
      }
    }
    if (this.schema && this._recordBatchIndex === 0) {
      this._recordBatchIndex++;
      return { done: false, value: new _InternalEmptyPlaceholderRecordBatch(this.schema) };
    }
    return this.return();
  }
  _readNextMessageAndValidate(type) {
    return this._reader.readMessage(type);
  }
}
class AsyncRecordBatchStreamReaderImpl extends RecordBatchReaderImpl {
  constructor(source, dictionaries) {
    super(dictionaries);
    this._reader = new AsyncMessageReader(this._handle = source);
  }
  isAsync() {
    return true;
  }
  isStream() {
    return true;
  }
  [Symbol.asyncIterator]() {
    return this;
  }
  cancel() {
    return __awaiter(this, void 0, void 0, function* () {
      if (!this.closed && (this.closed = true)) {
        yield this.reset()._reader.return();
        this._reader = null;
        this.dictionaries = null;
      }
    });
  }
  open(options) {
    return __awaiter(this, void 0, void 0, function* () {
      if (!this.closed) {
        this.autoDestroy = shouldAutoDestroy(this, options);
        if (!(this.schema || (this.schema = yield this._reader.readSchema()))) {
          yield this.cancel();
        }
      }
      return this;
    });
  }
  throw(value) {
    return __awaiter(this, void 0, void 0, function* () {
      if (!this.closed && this.autoDestroy && (this.closed = true)) {
        return yield this.reset()._reader.throw(value);
      }
      return ITERATOR_DONE;
    });
  }
  return(value) {
    return __awaiter(this, void 0, void 0, function* () {
      if (!this.closed && this.autoDestroy && (this.closed = true)) {
        return yield this.reset()._reader.return(value);
      }
      return ITERATOR_DONE;
    });
  }
  next() {
    return __awaiter(this, void 0, void 0, function* () {
      if (this.closed) {
        return ITERATOR_DONE;
      }
      let message;
      const { _reader: reader } = this;
      while (message = yield this._readNextMessageAndValidate()) {
        if (message.isSchema()) {
          yield this.reset(message.header());
        } else if (message.isRecordBatch()) {
          this._recordBatchIndex++;
          const header = message.header();
          const buffer = yield reader.readMessageBody(message.bodyLength);
          const recordBatch = this._loadRecordBatch(header, buffer);
          return { done: false, value: recordBatch };
        } else if (message.isDictionaryBatch()) {
          this._dictionaryIndex++;
          const header = message.header();
          const buffer = yield reader.readMessageBody(message.bodyLength);
          const vector = this._loadDictionaryBatch(header, buffer);
          this.dictionaries.set(header.id, vector);
        }
      }
      if (this.schema && this._recordBatchIndex === 0) {
        this._recordBatchIndex++;
        return { done: false, value: new _InternalEmptyPlaceholderRecordBatch(this.schema) };
      }
      return yield this.return();
    });
  }
  _readNextMessageAndValidate(type) {
    return __awaiter(this, void 0, void 0, function* () {
      return yield this._reader.readMessage(type);
    });
  }
}
class RecordBatchFileReaderImpl extends RecordBatchStreamReaderImpl {
  constructor(source, dictionaries) {
    super(source instanceof RandomAccessFile ? source : new RandomAccessFile(source), dictionaries);
  }
  get footer() {
    return this._footer;
  }
  get numDictionaries() {
    return this._footer ? this._footer.numDictionaries : 0;
  }
  get numRecordBatches() {
    return this._footer ? this._footer.numRecordBatches : 0;
  }
  isSync() {
    return true;
  }
  isFile() {
    return true;
  }
  open(options) {
    if (!this.closed && !this._footer) {
      this.schema = (this._footer = this._readFooter()).schema;
      for (const block of this._footer.dictionaryBatches()) {
        block && this._readDictionaryBatch(this._dictionaryIndex++);
      }
    }
    return super.open(options);
  }
  readRecordBatch(index) {
    if (this.closed) {
      return null;
    }
    if (!this._footer) {
      this.open();
    }
    const block = this._footer && this._footer.getRecordBatch(index);
    if (block && this._handle.seek(block.offset)) {
      const message = this._reader.readMessage(MessageHeader.RecordBatch);
      if (message === null || message === void 0 ? void 0 : message.isRecordBatch()) {
        const header = message.header();
        const buffer = this._reader.readMessageBody(message.bodyLength);
        const recordBatch = this._loadRecordBatch(header, buffer);
        return recordBatch;
      }
    }
    return null;
  }
  _readDictionaryBatch(index) {
    const block = this._footer && this._footer.getDictionaryBatch(index);
    if (block && this._handle.seek(block.offset)) {
      const message = this._reader.readMessage(MessageHeader.DictionaryBatch);
      if (message === null || message === void 0 ? void 0 : message.isDictionaryBatch()) {
        const header = message.header();
        const buffer = this._reader.readMessageBody(message.bodyLength);
        const vector = this._loadDictionaryBatch(header, buffer);
        this.dictionaries.set(header.id, vector);
      }
    }
  }
  _readFooter() {
    const { _handle } = this;
    const offset = _handle.size - magicAndPadding;
    const length = _handle.readInt32(offset);
    const buffer = _handle.readAt(offset - length, length);
    return Footer_.decode(buffer);
  }
  _readNextMessageAndValidate(type) {
    if (!this._footer) {
      this.open();
    }
    if (this._footer && this._recordBatchIndex < this.numRecordBatches) {
      const block = this._footer && this._footer.getRecordBatch(this._recordBatchIndex);
      if (block && this._handle.seek(block.offset)) {
        return this._reader.readMessage(type);
      }
    }
    return null;
  }
}
class AsyncRecordBatchFileReaderImpl extends AsyncRecordBatchStreamReaderImpl {
  constructor(source, ...rest) {
    const byteLength = typeof rest[0] !== "number" ? rest.shift() : void 0;
    const dictionaries = rest[0] instanceof Map ? rest.shift() : void 0;
    super(source instanceof AsyncRandomAccessFile ? source : new AsyncRandomAccessFile(source, byteLength), dictionaries);
  }
  get footer() {
    return this._footer;
  }
  get numDictionaries() {
    return this._footer ? this._footer.numDictionaries : 0;
  }
  get numRecordBatches() {
    return this._footer ? this._footer.numRecordBatches : 0;
  }
  isFile() {
    return true;
  }
  isAsync() {
    return true;
  }
  open(options) {
    const _super = Object.create(null, {
      open: { get: () => super.open }
    });
    return __awaiter(this, void 0, void 0, function* () {
      if (!this.closed && !this._footer) {
        this.schema = (this._footer = yield this._readFooter()).schema;
        for (const block of this._footer.dictionaryBatches()) {
          block && (yield this._readDictionaryBatch(this._dictionaryIndex++));
        }
      }
      return yield _super.open.call(this, options);
    });
  }
  readRecordBatch(index) {
    return __awaiter(this, void 0, void 0, function* () {
      if (this.closed) {
        return null;
      }
      if (!this._footer) {
        yield this.open();
      }
      const block = this._footer && this._footer.getRecordBatch(index);
      if (block && (yield this._handle.seek(block.offset))) {
        const message = yield this._reader.readMessage(MessageHeader.RecordBatch);
        if (message === null || message === void 0 ? void 0 : message.isRecordBatch()) {
          const header = message.header();
          const buffer = yield this._reader.readMessageBody(message.bodyLength);
          const recordBatch = this._loadRecordBatch(header, buffer);
          return recordBatch;
        }
      }
      return null;
    });
  }
  _readDictionaryBatch(index) {
    return __awaiter(this, void 0, void 0, function* () {
      const block = this._footer && this._footer.getDictionaryBatch(index);
      if (block && (yield this._handle.seek(block.offset))) {
        const message = yield this._reader.readMessage(MessageHeader.DictionaryBatch);
        if (message === null || message === void 0 ? void 0 : message.isDictionaryBatch()) {
          const header = message.header();
          const buffer = yield this._reader.readMessageBody(message.bodyLength);
          const vector = this._loadDictionaryBatch(header, buffer);
          this.dictionaries.set(header.id, vector);
        }
      }
    });
  }
  _readFooter() {
    return __awaiter(this, void 0, void 0, function* () {
      const { _handle } = this;
      _handle._pending && (yield _handle._pending);
      const offset = _handle.size - magicAndPadding;
      const length = yield _handle.readInt32(offset);
      const buffer = yield _handle.readAt(offset - length, length);
      return Footer_.decode(buffer);
    });
  }
  _readNextMessageAndValidate(type) {
    return __awaiter(this, void 0, void 0, function* () {
      if (!this._footer) {
        yield this.open();
      }
      if (this._footer && this._recordBatchIndex < this.numRecordBatches) {
        const block = this._footer.getRecordBatch(this._recordBatchIndex);
        if (block && (yield this._handle.seek(block.offset))) {
          return yield this._reader.readMessage(type);
        }
      }
      return null;
    });
  }
}
class RecordBatchJSONReaderImpl extends RecordBatchStreamReaderImpl {
  constructor(source, dictionaries) {
    super(source, dictionaries);
  }
  _loadVectors(header, body, types) {
    return new JSONVectorLoader(body, header.nodes, header.buffers, this.dictionaries).visitMany(types);
  }
}
function shouldAutoDestroy(self, options) {
  return options && typeof options["autoDestroy"] === "boolean" ? options["autoDestroy"] : self["autoDestroy"];
}
function* readAllSync(source) {
  const reader = RecordBatchReader.from(source);
  try {
    if (!reader.open({ autoDestroy: false }).closed) {
      do {
        yield reader;
      } while (!reader.reset().open().closed);
    }
  } finally {
    reader.cancel();
  }
}
function readAllAsync(source) {
  return __asyncGenerator(this, arguments, function* readAllAsync_1() {
    const reader = yield __await(RecordBatchReader.from(source));
    try {
      if (!(yield __await(reader.open({ autoDestroy: false }))).closed) {
        do {
          yield yield __await(reader);
        } while (!(yield __await(reader.reset().open())).closed);
      }
    } finally {
      yield __await(reader.cancel());
    }
  });
}
function fromArrowJSON(source) {
  return new RecordBatchStreamReader(new RecordBatchJSONReaderImpl(source));
}
function fromByteStream(source) {
  const bytes = source.peek(magicLength + 7 & ~7);
  return bytes && bytes.byteLength >= 4 ? !checkForMagicArrowString(bytes) ? new RecordBatchStreamReader(new RecordBatchStreamReaderImpl(source)) : new RecordBatchFileReader(new RecordBatchFileReaderImpl(source.read())) : new RecordBatchStreamReader(new RecordBatchStreamReaderImpl(function* () {
  }()));
}
function fromAsyncByteStream(source) {
  return __awaiter(this, void 0, void 0, function* () {
    const bytes = yield source.peek(magicLength + 7 & ~7);
    return bytes && bytes.byteLength >= 4 ? !checkForMagicArrowString(bytes) ? new AsyncRecordBatchStreamReader(new AsyncRecordBatchStreamReaderImpl(source)) : new RecordBatchFileReader(new RecordBatchFileReaderImpl(yield source.read())) : new AsyncRecordBatchStreamReader(new AsyncRecordBatchStreamReaderImpl(function() {
      return __asyncGenerator(this, arguments, function* () {
      });
    }()));
  });
}
function fromFileHandle(source) {
  return __awaiter(this, void 0, void 0, function* () {
    const { size } = yield source.stat();
    const file = new AsyncRandomAccessFile(source, size);
    if (size >= magicX2AndPadding) {
      if (checkForMagicArrowString(yield file.readAt(0, magicLength + 7 & ~7))) {
        return new AsyncRecordBatchFileReader(new AsyncRecordBatchFileReaderImpl(file));
      }
    }
    return new AsyncRecordBatchStreamReader(new AsyncRecordBatchStreamReaderImpl(file));
  });
}
function toDOMStream(source, options) {
  if (isAsyncIterable(source)) {
    return asyncIterableAsReadableDOMStream(source, options);
  }
  if (isIterable(source)) {
    return iterableAsReadableDOMStream(source, options);
  }
  throw new Error(`toDOMStream() must be called with an Iterable or AsyncIterable`);
}
function iterableAsReadableDOMStream(source, options) {
  let it = null;
  const bm = (options === null || options === void 0 ? void 0 : options.type) === "bytes" || false;
  const hwm = (options === null || options === void 0 ? void 0 : options.highWaterMark) || Math.pow(2, 24);
  return new ReadableStream(Object.assign(Object.assign({}, options), { start(controller) {
    next(controller, it || (it = source[Symbol.iterator]()));
  }, pull(controller) {
    it ? next(controller, it) : controller.close();
  }, cancel() {
    ((it === null || it === void 0 ? void 0 : it.return) && it.return() || true) && (it = null);
  } }), Object.assign({ highWaterMark: bm ? hwm : void 0 }, options));
  function next(controller, it2) {
    let buf;
    let r = null;
    let size = controller.desiredSize || null;
    while (!(r = it2.next(bm ? size : null)).done) {
      if (ArrayBuffer.isView(r.value) && (buf = toUint8Array(r.value))) {
        size != null && bm && (size = size - buf.byteLength + 1);
        r.value = buf;
      }
      controller.enqueue(r.value);
      if (size != null && --size <= 0) {
        return;
      }
    }
    controller.close();
  }
}
function asyncIterableAsReadableDOMStream(source, options) {
  let it = null;
  const bm = (options === null || options === void 0 ? void 0 : options.type) === "bytes" || false;
  const hwm = (options === null || options === void 0 ? void 0 : options.highWaterMark) || Math.pow(2, 24);
  return new ReadableStream(Object.assign(Object.assign({}, options), {
    start(controller) {
      return __awaiter(this, void 0, void 0, function* () {
        yield next(controller, it || (it = source[Symbol.asyncIterator]()));
      });
    },
    pull(controller) {
      return __awaiter(this, void 0, void 0, function* () {
        it ? yield next(controller, it) : controller.close();
      });
    },
    cancel() {
      return __awaiter(this, void 0, void 0, function* () {
        ((it === null || it === void 0 ? void 0 : it.return) && (yield it.return()) || true) && (it = null);
      });
    }
  }), Object.assign({ highWaterMark: bm ? hwm : void 0 }, options));
  function next(controller, it2) {
    return __awaiter(this, void 0, void 0, function* () {
      let buf;
      let r = null;
      let size = controller.desiredSize || null;
      while (!(r = yield it2.next(bm ? size : null)).done) {
        if (ArrayBuffer.isView(r.value) && (buf = toUint8Array(r.value))) {
          size != null && bm && (size = size - buf.byteLength + 1);
          r.value = buf;
        }
        controller.enqueue(r.value);
        if (size != null && --size <= 0) {
          return;
        }
      }
      controller.close();
    });
  }
}
function builderThroughDOMStream(options) {
  return new BuilderTransform(options);
}
class BuilderTransform {
  constructor(options) {
    this._numChunks = 0;
    this._finished = false;
    this._bufferedSize = 0;
    const { ["readableStrategy"]: readableStrategy, ["writableStrategy"]: writableStrategy, ["queueingStrategy"]: queueingStrategy = "count" } = options, builderOptions = __rest(options, ["readableStrategy", "writableStrategy", "queueingStrategy"]);
    this._controller = null;
    this._builder = Builder$2.new(builderOptions);
    this._getSize = queueingStrategy !== "bytes" ? chunkLength : chunkByteLength;
    const { ["highWaterMark"]: readableHighWaterMark = queueingStrategy === "bytes" ? Math.pow(2, 14) : 1e3 } = Object.assign({}, readableStrategy);
    const { ["highWaterMark"]: writableHighWaterMark = queueingStrategy === "bytes" ? Math.pow(2, 14) : 1e3 } = Object.assign({}, writableStrategy);
    this["readable"] = new ReadableStream({
      ["cancel"]: () => {
        this._builder.clear();
      },
      ["pull"]: (c) => {
        this._maybeFlush(this._builder, this._controller = c);
      },
      ["start"]: (c) => {
        this._maybeFlush(this._builder, this._controller = c);
      }
    }, {
      "highWaterMark": readableHighWaterMark,
      "size": queueingStrategy !== "bytes" ? chunkLength : chunkByteLength
    });
    this["writable"] = new WritableStream({
      ["abort"]: () => {
        this._builder.clear();
      },
      ["write"]: () => {
        this._maybeFlush(this._builder, this._controller);
      },
      ["close"]: () => {
        this._maybeFlush(this._builder.finish(), this._controller);
      }
    }, {
      "highWaterMark": writableHighWaterMark,
      "size": (value) => this._writeValueAndReturnChunkSize(value)
    });
  }
  _writeValueAndReturnChunkSize(value) {
    const bufferedSize = this._bufferedSize;
    this._bufferedSize = this._getSize(this._builder.append(value));
    return this._bufferedSize - bufferedSize;
  }
  _maybeFlush(builder, controller) {
    if (controller === null) {
      return;
    }
    if (this._bufferedSize >= controller.desiredSize) {
      ++this._numChunks && this._enqueue(controller, builder.toVector());
    }
    if (builder.finished) {
      if (builder.length > 0 || this._numChunks === 0) {
        ++this._numChunks && this._enqueue(controller, builder.toVector());
      }
      if (!this._finished && (this._finished = true)) {
        this._enqueue(controller, null);
      }
    }
  }
  _enqueue(controller, chunk) {
    this._bufferedSize = 0;
    this._controller = null;
    chunk === null ? controller.close() : controller.enqueue(chunk);
  }
}
const chunkLength = (chunk) => chunk.length;
const chunkByteLength = (chunk) => chunk.byteLength;
function recordBatchReaderThroughDOMStream(writableStrategy, readableStrategy) {
  const queue = new AsyncByteQueue();
  let reader = null;
  const readable = new ReadableStream({
    cancel() {
      return __awaiter(this, void 0, void 0, function* () {
        yield queue.close();
      });
    },
    start(controller) {
      return __awaiter(this, void 0, void 0, function* () {
        yield next(controller, reader || (reader = yield open()));
      });
    },
    pull(controller) {
      return __awaiter(this, void 0, void 0, function* () {
        reader ? yield next(controller, reader) : controller.close();
      });
    }
  });
  return { writable: new WritableStream(queue, Object.assign({ "highWaterMark": Math.pow(2, 14) }, writableStrategy)), readable };
  function open() {
    return __awaiter(this, void 0, void 0, function* () {
      return yield (yield RecordBatchReader.from(queue)).open(readableStrategy);
    });
  }
  function next(controller, reader2) {
    return __awaiter(this, void 0, void 0, function* () {
      let size = controller.desiredSize;
      let r = null;
      while (!(r = yield reader2.next()).done) {
        controller.enqueue(r.value);
        if (size != null && --size <= 0) {
          return;
        }
      }
      controller.close();
    });
  }
}
function recordBatchWriterThroughDOMStream(writableStrategy, readableStrategy) {
  const writer = new this(writableStrategy);
  const reader = new AsyncByteStream(writer);
  const readable = new ReadableStream({
    type: "bytes",
    cancel() {
      return __awaiter(this, void 0, void 0, function* () {
        yield reader.cancel();
      });
    },
    pull(controller) {
      return __awaiter(this, void 0, void 0, function* () {
        yield next(controller);
      });
    },
    start(controller) {
      return __awaiter(this, void 0, void 0, function* () {
        yield next(controller);
      });
    }
  }, Object.assign({ "highWaterMark": Math.pow(2, 14) }, readableStrategy));
  return { writable: new WritableStream(writer, writableStrategy), readable };
  function next(controller) {
    return __awaiter(this, void 0, void 0, function* () {
      let buf = null;
      let size = controller.desiredSize;
      while (buf = yield reader.read(size || null)) {
        controller.enqueue(buf);
        if (size != null && (size -= buf.byteLength) <= 0) {
          return;
        }
      }
      controller.close();
    });
  }
}
Object.freeze([]);
Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, util_bn_), util_int_), util_bit_), util_math_), util_buffer_), util_vector_), {
  compareSchemas,
  compareFields,
  compareTypes
});
streamAdapters.toDOMStream = toDOMStream;
Builder$2["throughDOM"] = builderThroughDOMStream;
RecordBatchReader["throughDOM"] = recordBatchReaderThroughDOMStream;
RecordBatchFileReader["throughDOM"] = recordBatchReaderThroughDOMStream;
RecordBatchStreamReader["throughDOM"] = recordBatchReaderThroughDOMStream;
RecordBatchWriter["throughDOM"] = recordBatchWriterThroughDOMStream;
RecordBatchFileWriter["throughDOM"] = recordBatchWriterThroughDOMStream;
RecordBatchStreamWriter["throughDOM"] = recordBatchWriterThroughDOMStream;
function _isPlaceholder(a) {
  return a != null && typeof a === "object" && a["@@functional/placeholder"] === true;
}
function _curry1(fn) {
  return function f1(a) {
    if (arguments.length === 0 || _isPlaceholder(a)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
}
function _curry2(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;
      case 1:
        return _isPlaceholder(a) ? f2 : _curry1(function(_b) {
          return fn(a, _b);
        });
      default:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function(_a) {
          return fn(_a, b);
        }) : _isPlaceholder(b) ? _curry1(function(_b) {
          return fn(a, _b);
        }) : fn(a, b);
    }
  };
}
function _arity(n, fn) {
  switch (n) {
    case 0:
      return function() {
        return fn.apply(this, arguments);
      };
    case 1:
      return function(a0) {
        return fn.apply(this, arguments);
      };
    case 2:
      return function(a0, a1) {
        return fn.apply(this, arguments);
      };
    case 3:
      return function(a0, a1, a2) {
        return fn.apply(this, arguments);
      };
    case 4:
      return function(a0, a1, a2, a3) {
        return fn.apply(this, arguments);
      };
    case 5:
      return function(a0, a1, a2, a3, a4) {
        return fn.apply(this, arguments);
      };
    case 6:
      return function(a0, a1, a2, a3, a4, a5) {
        return fn.apply(this, arguments);
      };
    case 7:
      return function(a0, a1, a2, a3, a4, a5, a6) {
        return fn.apply(this, arguments);
      };
    case 8:
      return function(a0, a1, a2, a3, a4, a5, a6, a7) {
        return fn.apply(this, arguments);
      };
    case 9:
      return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        return fn.apply(this, arguments);
      };
    case 10:
      return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        return fn.apply(this, arguments);
      };
    default:
      throw new Error("First argument to _arity must be a non-negative integer no greater than ten");
  }
}
function _curry3(fn) {
  return function f3(a, b, c) {
    switch (arguments.length) {
      case 0:
        return f3;
      case 1:
        return _isPlaceholder(a) ? f3 : _curry2(function(_b, _c) {
          return fn(a, _b, _c);
        });
      case 2:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f3 : _isPlaceholder(a) ? _curry2(function(_a, _c) {
          return fn(_a, b, _c);
        }) : _isPlaceholder(b) ? _curry2(function(_b, _c) {
          return fn(a, _b, _c);
        }) : _curry1(function(_c) {
          return fn(a, b, _c);
        });
      default:
        return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3 : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function(_a, _b) {
          return fn(_a, _b, c);
        }) : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function(_a, _c) {
          return fn(_a, b, _c);
        }) : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function(_b, _c) {
          return fn(a, _b, _c);
        }) : _isPlaceholder(a) ? _curry1(function(_a) {
          return fn(_a, b, c);
        }) : _isPlaceholder(b) ? _curry1(function(_b) {
          return fn(a, _b, c);
        }) : _isPlaceholder(c) ? _curry1(function(_c) {
          return fn(a, b, _c);
        }) : fn(a, b, c);
    }
  };
}
var _isArray = Array.isArray || function _isArray2(val) {
  return val != null && val.length >= 0 && Object.prototype.toString.call(val) === "[object Array]";
};
function _isString(x) {
  return Object.prototype.toString.call(x) === "[object String]";
}
var _isArrayLike = /* @__PURE__ */ _curry1(function isArrayLike(x) {
  if (_isArray(x)) {
    return true;
  }
  if (!x) {
    return false;
  }
  if (typeof x !== "object") {
    return false;
  }
  if (_isString(x)) {
    return false;
  }
  if (x.length === 0) {
    return true;
  }
  if (x.length > 0) {
    return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
  }
  return false;
});
var _isArrayLike$1 = _isArrayLike;
var XWrap = /* @__PURE__ */ function() {
  function XWrap2(fn) {
    this.f = fn;
  }
  XWrap2.prototype["@@transducer/init"] = function() {
    throw new Error("init not implemented on XWrap");
  };
  XWrap2.prototype["@@transducer/result"] = function(acc) {
    return acc;
  };
  XWrap2.prototype["@@transducer/step"] = function(acc, x) {
    return this.f(acc, x);
  };
  return XWrap2;
}();
function _xwrap(fn) {
  return new XWrap(fn);
}
var bind = /* @__PURE__ */ _curry2(function bind2(fn, thisObj) {
  return _arity(fn.length, function() {
    return fn.apply(thisObj, arguments);
  });
});
var bind$1 = bind;
function _arrayReduce(xf, acc, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    acc = xf["@@transducer/step"](acc, list[idx]);
    if (acc && acc["@@transducer/reduced"]) {
      acc = acc["@@transducer/value"];
      break;
    }
    idx += 1;
  }
  return xf["@@transducer/result"](acc);
}
function _iterableReduce(xf, acc, iter) {
  var step = iter.next();
  while (!step.done) {
    acc = xf["@@transducer/step"](acc, step.value);
    if (acc && acc["@@transducer/reduced"]) {
      acc = acc["@@transducer/value"];
      break;
    }
    step = iter.next();
  }
  return xf["@@transducer/result"](acc);
}
function _methodReduce(xf, acc, obj, methodName) {
  return xf["@@transducer/result"](obj[methodName](bind$1(xf["@@transducer/step"], xf), acc));
}
var symIterator = typeof Symbol !== "undefined" ? Symbol.iterator : "@@iterator";
function _reduce(fn, acc, list) {
  if (typeof fn === "function") {
    fn = _xwrap(fn);
  }
  if (_isArrayLike$1(list)) {
    return _arrayReduce(fn, acc, list);
  }
  if (typeof list["fantasy-land/reduce"] === "function") {
    return _methodReduce(fn, acc, list, "fantasy-land/reduce");
  }
  if (list[symIterator] != null) {
    return _iterableReduce(fn, acc, list[symIterator]());
  }
  if (typeof list.next === "function") {
    return _iterableReduce(fn, acc, list);
  }
  if (typeof list.reduce === "function") {
    return _methodReduce(fn, acc, list, "reduce");
  }
  throw new TypeError("reduce: list must be array or iterable");
}
var reduce = /* @__PURE__ */ _curry3(_reduce);
var reduce$1 = reduce;
function _pipe(f, g) {
  return function() {
    return g.call(this, f.apply(this, arguments));
  };
}
function _checkForMethod(methodname, fn) {
  return function() {
    var length = arguments.length;
    if (length === 0) {
      return fn();
    }
    var obj = arguments[length - 1];
    return _isArray(obj) || typeof obj[methodname] !== "function" ? fn.apply(this, arguments) : obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length - 1));
  };
}
var slice = /* @__PURE__ */ _curry3(
  /* @__PURE__ */ _checkForMethod("slice", function slice2(fromIndex, toIndex, list) {
    return Array.prototype.slice.call(list, fromIndex, toIndex);
  })
);
var slice$1 = slice;
var tail = /* @__PURE__ */ _curry1(
  /* @__PURE__ */ _checkForMethod(
    "tail",
    /* @__PURE__ */ slice$1(1, Infinity)
  )
);
var tail$1 = tail;
function pipe() {
  if (arguments.length === 0) {
    throw new Error("pipe requires at least one argument");
  }
  return _arity(arguments[0].length, reduce$1(_pipe, arguments[0], tail$1(arguments)));
}
var reverse = /* @__PURE__ */ _curry1(function reverse2(list) {
  return _isString(list) ? list.split("").reverse().join("") : Array.prototype.slice.call(list, 0).reverse();
});
var reverse$1 = reverse;
function compose() {
  if (arguments.length === 0) {
    throw new Error("compose requires at least one argument");
  }
  return pipe.apply(this, reverse$1(arguments));
}
var pick = /* @__PURE__ */ _curry2(function pick2(names, obj) {
  var result = {};
  var idx = 0;
  while (idx < names.length) {
    if (names[idx] in obj) {
      result[names[idx]] = obj[names[idx]];
    }
    idx += 1;
  }
  return result;
});
var pick$1 = pick;
class Coerce {
  constructor(schemaFields) {
    __publicField(this, "fieldNames", []);
    __publicField(this, "coerceRow", (row) => pick$1(this.fieldNames, row));
    for (const field of schemaFields) {
      if (DataType.isTimestamp(field)) {
        this.composeTimestampField(field);
      } else if (DataType.isInt(field)) {
        this.composeIntField(field);
      } else if (DataType.isFloat(field)) {
        this.composeFloatField(field);
      }
      this.fieldNames.push(field.name);
    }
  }
  composeIntField(field) {
    if (field.type.bitWidth >= 64) {
      this.coerceRow = compose((row) => row, this.coerceRow);
    }
  }
  composeFloatField(field) {
    this.coerceRow = compose((row) => {
      const val = row[field.name];
      if (val) {
        row[field.name] = parseFloat(val);
      }
      return row;
    }, this.coerceRow);
  }
  composeTimestampField(field) {
    if (field.type.timezone === null || field.type.timezone === "UTC") {
      this.coerceRow = compose((row) => {
        const val = row[field.name];
        if (val) {
          row[field.name] = new Date(val).toISOString();
        }
        return row;
      }, this.coerceRow);
    }
  }
}
const dataTypeToString = (typ) => {
  switch (typ.typeId) {
    case Type.Null: {
      return "null";
    }
    case Type.Int: {
      return "integer";
    }
    case Type.Float: {
      if (typ.precision === Precision.DOUBLE) {
        return "double";
      }
      return "float";
    }
    case Type.Binary:
    case Type.FixedSizeBinary: {
      return "binary";
    }
    case Type.Utf8: {
      return "string";
    }
    case Type.Bool: {
      return "boolean";
    }
    case Type.Decimal: {
      return "decimal";
    }
    case Type.Date: {
      return "date";
    }
    case Type.Time: {
      return "time";
    }
    case Type.Timestamp: {
      return "timestamp";
    }
    case Type.Interval: {
      return "interval";
    }
    case Type.List:
    case Type.FixedSizeList: {
      const subtype = dataTypeToString(typ.children[0].type);
      return `[${subtype}]`;
    }
    case Type.Struct: {
      return "struct";
    }
    case Type.Union: {
      return typ.children.map((i) => dataTypeToString(i.type)).filter((i) => i !== "null").join(" or ");
    }
    case Type.Map: {
      return "map";
    }
    case Type.Dictionary: {
      if (DataType.isUtf8(typ.valueType)) {
        return "category";
      } else {
        return dataTypeToString(typ.valueType);
      }
    }
    default: {
      return typ.toString();
    }
  }
};
const extractArrowSchema = (sch) => {
  return sch.fields.map((fld) => ({
    name: fld.name,
    type: dataTypeToString(fld.type)
  }));
};
const apiResponseToArrow = (r) => {
  const d = [];
  const table = Table.from(r);
  const coerce = new Coerce(table.schema.fields);
  for (const row of table) {
    d.push(coerce.coerceRow(row));
  }
  return {
    schema: extractArrowSchema(table.schema),
    data: d,
    containsBigInt: table.schema.fields.some(
      (f) => f.type.bitWidth && f.type.bitWidth >= 64
    )
  };
};
export { apiResponseToArrow };
