/* Generated by the Nim Compiler v1.5.1 */
var framePtr = null;
var excHandler = 0;
var lastJSError = null;
var NTI33555128 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555120 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555122 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33554456 = {size: 0,kind: 31,base: null,node: null,finalizer: null};
var NTI33555915 = {size: 0, kind: 18, base: null, node: null, finalizer: null};
var NTI33555083 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555165 = {size: 0, kind: 22, base: null, node: null, finalizer: null};
var NTI33554440 = {size: 0,kind: 29,base: null,node: null,finalizer: null};
var NTI33555164 = {size: 0, kind: 22, base: null, node: null, finalizer: null};
var NTI33555112 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555113 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555124 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33554439 = {size: 0,kind: 28,base: null,node: null,finalizer: null};
var NNI33555124 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555124.node = NNI33555124;
var NNI33555113 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555113.node = NNI33555113;
NTI33555164.base = NTI33555112;
NTI33555165.base = NTI33555112;
var NNI33555112 = {kind: 2, len: 5, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "parent", len: 0, typ: NTI33555164, name: "parent", sons: null}, 
{kind: 1, offset: "name", len: 0, typ: NTI33554440, name: "name", sons: null}, 
{kind: 1, offset: "message", len: 0, typ: NTI33554439, name: "msg", sons: null}, 
{kind: 1, offset: "trace", len: 0, typ: NTI33554439, name: "trace", sons: null}, 
{kind: 1, offset: "up", len: 0, typ: NTI33555165, name: "up", sons: null}]};
NTI33555112.node = NNI33555112;
var NNI33555083 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555083.node = NNI33555083;
NTI33555112.base = NTI33555083;
NTI33555113.base = NTI33555112;
NTI33555124.base = NTI33555113;
var NNI33555915 = {kind: 2, len: 3, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "Field0", len: 0, typ: NTI33554440, name: "Field0", sons: null}, 
{kind: 1, offset: "Field1", len: 0, typ: NTI33554456, name: "Field1", sons: null}, 
{kind: 1, offset: "Field2", len: 0, typ: NTI33554440, name: "Field2", sons: null}]};
NTI33555915.node = NNI33555915;
var NNI33555122 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555122.node = NNI33555122;
var NNI33555120 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555120.node = NNI33555120;
NTI33555120.base = NTI33555113;
NTI33555122.base = NTI33555120;
var NNI33555128 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555128.node = NNI33555128;
NTI33555128.base = NTI33555113;

function setConstr() {
        var result = {};
    for (var i = 0; i < arguments.length; ++i) {
      var x = arguments[i];
      if (typeof(x) == "object") {
        for (var j = x[0]; j <= x[1]; ++j) {
          result[j] = true;
        }
      } else {
        result[x] = true;
      }
    }
    return result;
  

  
}
var ConstSet1 = setConstr(17, 16, 4, 18, 27, 19, 23, 22, 21);

function nimCopy(dest_33557136, src_33557137, ti_33557138) {
  var result_33557147 = null;

    switch (ti_33557138.kind) {
    case 21:
    case 22:
    case 23:
    case 5:
      if (!(isFatPointer_33557127(ti_33557138))) {
      result_33557147 = src_33557137;
      }
      else {
        result_33557147 = [src_33557137[0], src_33557137[1]];
      }
      
      break;
    case 19:
            if (dest_33557136 === null || dest_33557136 === undefined) {
        dest_33557136 = {};
      }
      else {
        for (var key in dest_33557136) { delete dest_33557136[key]; }
      }
      for (var key in src_33557137) { dest_33557136[key] = src_33557137[key]; }
      result_33557147 = dest_33557136;
    
      break;
    case 18:
    case 17:
      if (!((ti_33557138.base == null))) {
      result_33557147 = nimCopy(dest_33557136, src_33557137, ti_33557138.base);
      }
      else {
      if ((ti_33557138.kind == 17)) {
      result_33557147 = (dest_33557136 === null || dest_33557136 === undefined) ? {m_type: ti_33557138} : dest_33557136;
      }
      else {
        result_33557147 = (dest_33557136 === null || dest_33557136 === undefined) ? {} : dest_33557136;
      }
      }
      nimCopyAux(result_33557147, src_33557137, ti_33557138.node);
      break;
    case 24:
    case 4:
    case 27:
    case 16:
            if (src_33557137 === null) {
        result_33557147 = null;
      }
      else {
        if (dest_33557136 === null || dest_33557136 === undefined) {
          dest_33557136 = new Array(src_33557137.length);
        }
        else {
          dest_33557136.length = src_33557137.length;
        }
        result_33557147 = dest_33557136;
        for (var i = 0; i < src_33557137.length; ++i) {
          result_33557147[i] = nimCopy(result_33557147[i], src_33557137[i], ti_33557138.base);
        }
      }
    
      break;
    case 28:
            if (src_33557137 !== null) {
        result_33557147 = src_33557137.slice(0);
      }
    
      break;
    default: 
      result_33557147 = src_33557137;
      break;
    }

  return result_33557147;

}

function makeNimstrLit(c_33556797) {
      var result = [];
  for (var i = 0; i < c_33556797.length; ++i) {
    result[i] = c_33556797.charCodeAt(i);
  }
  return result;
  

  
}

function arrayConstr(len_33557175, value_33557176, typ_33557177) {
        var result = new Array(len_33557175);
    for (var i = 0; i < len_33557175; ++i) result[i] = nimCopy(null, value_33557176, typ_33557177);
    return result;
  

  
}

function cstrToNimstr(c_33556800) {
      var ln = c_33556800.length;
  var result = new Array(ln);
  var r = 0;
  for (var i = 0; i < ln; ++i) {
    var ch = c_33556800.charCodeAt(i);

    if (ch < 128) {
      result[r] = ch;
    }
    else {
      if (ch < 2048) {
        result[r] = (ch >> 6) | 192;
      }
      else {
        if (ch < 55296 || ch >= 57344) {
          result[r] = (ch >> 12) | 224;
        }
        else {
            ++i;
            ch = 65536 + (((ch & 1023) << 10) | (c_33556800.charCodeAt(i) & 1023));
            result[r] = (ch >> 18) | 240;
            ++r;
            result[r] = ((ch >> 12) & 63) | 128;
        }
        ++r;
        result[r] = ((ch >> 6) & 63) | 128;
      }
      ++r;
      result[r] = (ch & 63) | 128;
    }
    ++r;
  }
  return result;
  

  
}

function toJSStr(s_33556803) {
                    var Temporary5;
            var Temporary7;

  var result_33556804 = null;

    var res_33556838 = newSeq_33556821((s_33556803).length);
    var i_33556839 = 0;
    var j_33556840 = 0;
    Label1: do {
        Label2: while (true) {
        if (!(i_33556839 < (s_33556803).length)) break Label2;
          var c_33556841 = s_33556803[i_33556839];
          if ((c_33556841 < 128)) {
          res_33556838[j_33556840] = String.fromCharCode(c_33556841);
          i_33556839 += 1;
          }
          else {
            var helper_33556853 = newSeq_33556821(0);
            Label3: do {
                Label4: while (true) {
                if (!true) break Label4;
                  var code_33556854 = c_33556841.toString(16);
                  if ((((code_33556854) == null ? 0 : (code_33556854).length) == 1)) {
                  helper_33556853.push("%0");;
                  }
                  else {
                  helper_33556853.push("%");;
                  }
                  
                  helper_33556853.push(code_33556854);;
                  i_33556839 += 1;
                    if (((s_33556803).length <= i_33556839)) Temporary5 = true; else {                      Temporary5 = (s_33556803[i_33556839] < 128);                    }                  if (Temporary5) {
                  break Label3;
                  }
                  
                  c_33556841 = s_33556803[i_33556839];
                }
            } while (false);
++excHandler;
            Temporary7 = framePtr;
            try {
            res_33556838[j_33556840] = decodeURIComponent(helper_33556853.join(""));
--excHandler;
} catch (EXCEPTION) {
 var prevJSError = lastJSError;
 lastJSError = EXCEPTION;
 --excHandler;
            framePtr = Temporary7;
            res_33556838[j_33556840] = helper_33556853.join("");
            lastJSError = prevJSError;
            } finally {
            framePtr = Temporary7;
            }
          }
          
          j_33556840 += 1;
        }
    } while (false);
    if (res_33556838.length < j_33556840) { for (var i = res_33556838.length ; i < j_33556840 ; ++i) res_33556838.push(null); }
               else { res_33556838.length = j_33556840; };
    result_33556804 = res_33556838.join("");

  return result_33556804;

}

function raiseException(e_33556664, ename_33556665) {
    e_33556664.name = ename_33556665;
    if ((excHandler == 0)) {
    unhandledException(e_33556664);
    }
    
    e_33556664.trace = nimCopy(null, rawWriteStackTrace_33556628(), NTI33554439);
    throw e_33556664;

  
}

function subInt(a_33556940, b_33556941) {
        var result = a_33556940 - b_33556941;
    checkOverflowInt(result);
    return result;
  

  
}

function chckIndx(i_33557180, a_33557181, b_33557182) {
      var Temporary1;

  var result_33557183 = 0;

  BeforeRet: do {
      if (!(a_33557181 <= i_33557180)) Temporary1 = false; else {        Temporary1 = (i_33557180 <= b_33557182);      }    if (Temporary1) {
    result_33557183 = i_33557180;
    break BeforeRet;
    }
    else {
    raiseIndexError(i_33557180, a_33557181, b_33557182);
    }
    
  } while (false);

  return result_33557183;

}

function addInt(a_33556936, b_33556937) {
        var result = a_33556936 + b_33556937;
    checkOverflowInt(result);
    return result;
  

  
}
if (!Math.trunc) {
  Math.trunc = function(v) {
    v = +v;
    if (!isFinite(v)) return v;
    return (v - v % 1) || (v < 0 ? -0 : v === 0 ? v : 0);
  };
}

var F = {procname: "module jsheaders", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsheaders.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsheaders", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsheaders.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsheaders", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsheaders.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsheaders", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsheaders.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsheaders", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsheaders.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsheaders", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsheaders.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsheaders", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsheaders.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsheaders", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsheaders.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsheaders", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsheaders.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsheaders", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsheaders.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsheaders", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsheaders.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsheaders", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsheaders.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsheaders", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsheaders.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsheaders", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsheaders.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsheaders", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsheaders.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsheaders", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsheaders.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsheaders", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsheaders.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsheaders_examples_1", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples_1.nim", line: 0};
framePtr = F;
framePtr = F.prev;

function isFatPointer_33557127(ti_33557128) {
  var result_33557129 = false;

  BeforeRet: do {
    result_33557129 = !((ConstSet1[ti_33557128.base.kind] != undefined));
    break BeforeRet;
  } while (false);

  return result_33557129;

}

function nimCopyAux(dest_33557140, src_33557141, n_33557142) {
    switch (n_33557142.kind) {
    case 0:
      break;
    case 1:
            dest_33557140[n_33557142.offset] = nimCopy(dest_33557140[n_33557142.offset], src_33557141[n_33557142.offset], n_33557142.typ);
    
      break;
    case 2:
          for (var i = 0; i < n_33557142.sons.length; i++) {
      nimCopyAux(dest_33557140, src_33557141, n_33557142.sons[i]);
    }
    
      break;
    case 3:
            dest_33557140[n_33557142.offset] = nimCopy(dest_33557140[n_33557142.offset], src_33557141[n_33557142.offset], n_33557142.typ);
      for (var i = 0; i < n_33557142.sons.length; ++i) {
        nimCopyAux(dest_33557140, src_33557141, n_33557142.sons[i][1]);
      }
    
      break;
    }

  
}

function add_33556420(x_33556421, x_33556421_Idx, y_33556422) {
          if (x_33556421[x_33556421_Idx] === null) { x_33556421[x_33556421_Idx] = []; }
      var off = x_33556421[x_33556421_Idx].length;
      x_33556421[x_33556421_Idx].length += y_33556422.length;
      for (var i = 0; i < y_33556422.length; ++i) {
        x_33556421[x_33556421_Idx][off+i] = y_33556422.charCodeAt(i);
      }
    

  
}

function auxWriteStackTrace_33556556(f_33556557) {
          var Temporary3;

  var result_33556558 = [[]];

    var it_33556566 = f_33556557;
    var i_33556567 = 0;
    var total_33556568 = 0;
    var tempFrames_33556569 = arrayConstr(64, {Field0: null, Field1: 0, Field2: null}, NTI33555915);
    Label1: do {
        Label2: while (true) {
          if (!!((it_33556566 == null))) Temporary3 = false; else {            Temporary3 = (i_33556567 <= 63);          }        if (!Temporary3) break Label2;
          tempFrames_33556569[i_33556567].Field0 = it_33556566.procname;
          tempFrames_33556569[i_33556567].Field1 = it_33556566.line;
          tempFrames_33556569[i_33556567].Field2 = it_33556566.filename;
          i_33556567 += 1;
          total_33556568 += 1;
          it_33556566 = it_33556566.prev;
        }
    } while (false);
    Label4: do {
        Label5: while (true) {
        if (!!((it_33556566 == null))) break Label5;
          total_33556568 += 1;
          it_33556566 = it_33556566.prev;
        }
    } while (false);
    result_33556558[0] = nimCopy(null, [], NTI33554439);
    if (!((total_33556568 == i_33556567))) {
    result_33556558[0].push.apply(result_33556558[0], makeNimstrLit("("));;
    result_33556558[0].push.apply(result_33556558[0], cstrToNimstr(((total_33556568 - i_33556567)) + ""));;
    result_33556558[0].push.apply(result_33556558[0], makeNimstrLit(" calls omitted) ...\x0A"));;
    }
    
    Label6: do {
      var j_33556599 = 0;
      var colontmp__553648345 = 0;
      colontmp__553648345 = (i_33556567 - 1);
      var res_553648347 = colontmp__553648345;
      Label7: do {
          Label8: while (true) {
          if (!(0 <= res_553648347)) break Label8;
            j_33556599 = res_553648347;
            result_33556558[0].push.apply(result_33556558[0], cstrToNimstr(tempFrames_33556569[j_33556599].Field2));;
            if ((0 < tempFrames_33556569[j_33556599].Field1)) {
            result_33556558[0].push.apply(result_33556558[0], makeNimstrLit("("));;
            result_33556558[0].push.apply(result_33556558[0], cstrToNimstr((tempFrames_33556569[j_33556599].Field1) + ""));;
            if (false) {
            result_33556558[0].push.apply(result_33556558[0], makeNimstrLit(", "));;
            result_33556558[0].push.apply(result_33556558[0], makeNimstrLit("0"));;
            }
            
            result_33556558[0].push.apply(result_33556558[0], makeNimstrLit(")"));;
            }
            
            result_33556558[0].push.apply(result_33556558[0], makeNimstrLit(" at "));;
            add_33556420(result_33556558, 0, tempFrames_33556569[j_33556599].Field0);
            result_33556558[0].push.apply(result_33556558[0], makeNimstrLit("\x0A"));;
            res_553648347 -= 1;
          }
      } while (false);
    } while (false);

  return result_33556558[0];

}

function rawWriteStackTrace_33556628() {
  var result_33556629 = [];

    if (!((framePtr == null))) {
    result_33556629 = nimCopy(null, (makeNimstrLit("Traceback (most recent call last)\x0A") || []).concat(auxWriteStackTrace_33556556(framePtr) || []), NTI33554439);
    }
    else {
      result_33556629 = nimCopy(null, makeNimstrLit("No stack traceback available\x0A"), NTI33554439);
    }
    

  return result_33556629;

}

function newSeq_33556821(len_33556823) {
  var result_33556824 = [];

  var F = {procname: "newSeq.newSeq", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system.nim", line: 0};
  framePtr = F;
    F.line = 680;
    result_33556824 = new Array(len_33556823); for (var i = 0 ; i < len_33556823 ; ++i) { result_33556824[i] = null; }  framePtr = F.prev;

  return result_33556824;

}

function unhandledException(e_33556660) {
    var buf_33556661 = [[]];
    if (!(((e_33556660.message).length == 0))) {
    buf_33556661[0].push.apply(buf_33556661[0], makeNimstrLit("Error: unhandled exception: "));;
    buf_33556661[0].push.apply(buf_33556661[0], e_33556660.message);;
    }
    else {
    buf_33556661[0].push.apply(buf_33556661[0], makeNimstrLit("Error: unhandled exception"));;
    }
    
    buf_33556661[0].push.apply(buf_33556661[0], makeNimstrLit(" ["));;
    add_33556420(buf_33556661, 0, e_33556660.name);
    buf_33556661[0].push.apply(buf_33556661[0], makeNimstrLit("]\x0A"));;
    buf_33556661[0].push.apply(buf_33556661[0], rawWriteStackTrace_33556628());;
    var cbuf_33556662 = toJSStr(buf_33556661[0]);
    framePtr = null;
      if (typeof(Error) !== "undefined") {
    throw new Error(cbuf_33556662);
  }
  else {
    throw cbuf_33556662;
  }
  

  
}

function sysFatal_218103844(message_218103847) {
  var F = {procname: "sysFatal.sysFatal", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/fatal.nim", line: 0};
  framePtr = F;
    F.line = 53;
    raiseException({message: nimCopy(null, message_218103847, NTI33554439), m_type: NTI33555124, parent: null, name: null, trace: [], up: null}, "AssertionDefect");
  framePtr = F.prev;

  
}

function raiseAssert_218103842(msg_218103843) {
  var F = {procname: "assertions.raiseAssert", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/assertions.nim", line: 0};
  framePtr = F;
    F.line = 29;
    sysFatal_218103844(msg_218103843);
  framePtr = F.prev;

  
}

function failedAssertImpl_218103866(msg_218103867) {
  var F = {procname: "assertions.failedAssertImpl", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/assertions.nim", line: 0};
  framePtr = F;
    F.line = 39;
    raiseAssert_218103842(msg_218103867);
  framePtr = F.prev;

  
}

function raiseOverflow() {
    raiseException({message: makeNimstrLit("over- or underflow"), parent: null, m_type: NTI33555122, name: null, trace: [], up: null}, "OverflowDefect");

  
}

function checkOverflowInt(a_33556934) {
        if (a_33556934 > 2147483647 || a_33556934 < -2147483648) raiseOverflow();
  

  
}

function raiseIndexError(i_33556751, a_33556752, b_33556753) {
    var Temporary1;

    if ((b_33556753 < a_33556752)) {
    Temporary1 = makeNimstrLit("index out of bounds, the container is empty");
    }
    else {
    Temporary1 = (makeNimstrLit("index ") || []).concat(cstrToNimstr((i_33556751) + "") || [],makeNimstrLit(" not in ") || [],cstrToNimstr((a_33556752) + "") || [],makeNimstrLit(" .. ") || [],cstrToNimstr((b_33556753) + "") || []);
    }
    
    raiseException({message: nimCopy(null, Temporary1, NTI33554439), parent: null, m_type: NTI33555128, name: null, trace: [], up: null}, "IndexDefect");

  
}

function HEX3DHEX3D_553648140(x_553648142, y_553648143) {
  var result_553648144 = false;

  var F = {procname: "==.==", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/comparisons.nim", line: 0};
  framePtr = F;
  BeforeRet: do {
    F.line = 301;
    var sameObject_553648152 = false;
    F.line = 302;
    sameObject_553648152 = x_553648142 === y_553648143
    if (sameObject_553648152) {
    F.line = 303;
    result_553648144 = true;
    break BeforeRet;
    }
    
    if (!(((x_553648142).length == (y_553648143).length))) {
    F.line = 306;
    result_553648144 = false;
    break BeforeRet;
    }
    
    Label1: do {
      F.line = 308;
      var i_553648166 = 0;
      F.line = 75;
      var colontmp__553648352 = 0;
      F.line = 308;
      colontmp__553648352 = subInt((x_553648142).length, 1);
      F.line = 90;
      var res_553648354 = 0;
      Label2: do {
        F.line = 91;
          Label3: while (true) {
          if (!(res_553648354 <= colontmp__553648352)) break Label3;
            F.line = 308;
            i_553648166 = res_553648354;
            if (!((x_553648142[chckIndx(i_553648166, 0, (x_553648142).length - 1)] == y_553648143[chckIndx(i_553648166, 0, (y_553648143).length - 1)]))) {
            F.line = 310;
            result_553648144 = false;
            break BeforeRet;
            }
            
            F.line = 93;
            res_553648354 = addInt(res_553648354, 1);
          }
      } while (false);
    } while (false);
    F.line = 312;
    result_553648144 = true;
    break BeforeRet;
  } while (false);
  framePtr = F.prev;

  return result_553648144;

}

function HEX3DHEX3D_553648226(x_553648228, y_553648229) {
  var result_553648230 = false;

  var F = {procname: "==.==", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system.nim", line: 0};
  framePtr = F;
  BeforeRet: do {
    if (!((x_553648228["Field0"] == y_553648229["Field0"]))) {
    F.line = 1875;
    result_553648230 = false;
    break BeforeRet;
    }
    
    if (!((x_553648228["Field1"] == y_553648229["Field1"]))) {
    F.line = 1875;
    result_553648230 = false;
    break BeforeRet;
    }
    
    F.line = 1876;
    result_553648230 = true;
    break BeforeRet;
  } while (false);
  framePtr = F.prev;

  return result_553648230;

}

function HEX3DHEX3D_553648199(x_553648201, y_553648202) {
  var result_553648203 = false;

  var F = {procname: "==.==", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/comparisons.nim", line: 0};
  framePtr = F;
  BeforeRet: do {
    F.line = 301;
    var sameObject_553648211 = false;
    F.line = 302;
    sameObject_553648211 = x_553648201 === y_553648202
    if (sameObject_553648211) {
    F.line = 303;
    result_553648203 = true;
    break BeforeRet;
    }
    
    if (!(((x_553648201).length == (y_553648202).length))) {
    F.line = 306;
    result_553648203 = false;
    break BeforeRet;
    }
    
    Label1: do {
      F.line = 308;
      var i_553648225 = 0;
      F.line = 75;
      var colontmp__553648357 = 0;
      F.line = 308;
      colontmp__553648357 = subInt((x_553648201).length, 1);
      F.line = 90;
      var res_553648358 = 0;
      Label2: do {
        F.line = 91;
          Label3: while (true) {
          if (!(res_553648358 <= colontmp__553648357)) break Label3;
            F.line = 308;
            i_553648225 = res_553648358;
            if (!(HEX3DHEX3D_553648226(x_553648201[chckIndx(i_553648225, 0, (x_553648201).length - 1)], y_553648202[chckIndx(i_553648225, 0, (y_553648202).length - 1)]))) {
            F.line = 310;
            result_553648203 = false;
            break BeforeRet;
            }
            
            F.line = 93;
            res_553648358 = addInt(res_553648358, 1);
          }
      } while (false);
    } while (false);
    F.line = 312;
    result_553648203 = true;
    break BeforeRet;
  } while (false);
  framePtr = F.prev;

  return result_553648203;

}
var F = {procname: "module jsheaders_examples_1", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples_1.nim", line: 0};
framePtr = F;
Label1: do {
  F.line = 51;
  var header_553648130 = new Headers();
  F.line = 51;
  header_553648130.append("key", "value");
  if (!(header_553648130.has("key"))) {
  F.line = 51;
  failedAssertImpl_218103866(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples_1.nim(12, 12) `header.hasKey(\"key\")` "));
  }
  
  if (!(HEX3DHEX3D_553648140(Array.from(header_553648130.keys()), ["key"]))) {
  F.line = 51;
  failedAssertImpl_218103866(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples_1.nim(13, 12) `header.keys() == @[\"key\".cstring]` "));
  }
  
  if (!(HEX3DHEX3D_553648140(Array.from(header_553648130.values()), ["value"]))) {
  F.line = 51;
  failedAssertImpl_218103866(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples_1.nim(14, 12) `header.values() == @[\"value\".cstring]` "));
  }
  
  if (!((header_553648130.get("key") == "value"))) {
  F.line = 51;
  failedAssertImpl_218103866(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples_1.nim(15, 12) `header[\"key\"] == \"value\".cstring` "));
  }
  
  F.line = 51;
  header_553648130.set("other", "another");
  if (!((header_553648130.get("other") == "another"))) {
  F.line = 51;
  failedAssertImpl_218103866(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples_1.nim(17, 12) `header[\"other\"] == \"another\".cstring` "));
  }
  
  if (!(HEX3DHEX3D_553648199(Array.from(header_553648130.entries()), [{Field0: "key", Field1: "value"}, {Field0: "other", Field1: "another"}]))) {
  F.line = 51;
  failedAssertImpl_218103866(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples_1.nim(18, 12) `header.entries() ==\x0A    @[(\"key\".cstring, \"value\".cstring), (\"other\".cstring, \"another\".cstring)]` "));
  }
  
  if (!((JSON.stringify(Array.from(header_553648130.entries())) == "[[\"key\",\"value\"],[\"other\",\"another\"]]"))) {
  F.line = 51;
  failedAssertImpl_218103866(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples_1.nim(19, 12) `header.toCstring() == \"\"\"[[\"key\",\"value\"],[\"other\",\"another\"]]\"\"\".cstring` "));
  }
  
  F.line = 51;
  header_553648130.delete("other");
  if (!(HEX3DHEX3D_553648199(Array.from(header_553648130.entries()), [{Field0: "key", Field1: "value"}]))) {
  F.line = 51;
  failedAssertImpl_218103866(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples_1.nim(21, 12) `header.entries() == @[(\"key\".cstring, \"value\".cstring)]` "));
  }
  
  F.line = 51;
  (() => { const header = header_553648130; Array.from(header.keys()).forEach((key) => header.delete(key)) })();
  if (!(HEX3DHEX3D_553648199(Array.from(header_553648130.entries()), []))) {
  F.line = 51;
  failedAssertImpl_218103866(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples_1.nim(23, 12) `header.entries() == @[]` "));
  }
  
  if (!((Array.from(header_553648130.entries()).length == 0))) {
  F.line = 51;
  failedAssertImpl_218103866(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples_1.nim(24, 12) `header.len == 0` "));
  }
  
} while (false);
Label2: do {
  F.line = 51;
  var header_553648277 = new Headers();
  F.line = 51;
  header_553648277.append("key", "a");
  F.line = 51;
  header_553648277.append("key", "b");
  F.line = 51;
  header_553648277.append("key", "c");
  if (!((header_553648277.get("key") == "a, b, c"))) {
  F.line = 51;
  failedAssertImpl_218103866(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples_1.nim(31, 12) `header[\"key\"] == \"a, b, c\".cstring` "));
  }
  
  F.line = 51;
  header_553648277.set("key", "value");
  if (!((header_553648277.get("key") == "value"))) {
  F.line = 51;
  failedAssertImpl_218103866(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples_1.nim(33, 12) `header[\"key\"] == \"value\".cstring` "));
  }
  
} while (false);
Label3: do {
  F.line = 51;
  var header_553648288 = new Headers();
  F.line = 51;
  header_553648288.set("key", "a");
  F.line = 51;
  header_553648288.set("key", "b");
  if (!((header_553648288.get("key") == "b"))) {
  F.line = 51;
  failedAssertImpl_218103866(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples_1.nim(39, 12) `header[\"key\"] == \"b\".cstring` "));
  }
  
} while (false);
framePtr = F.prev;
var F = {procname: "module jsheaders_examples_1", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples_1.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsheaders_examples_1", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples_1.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsheaders_group0_examples", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_group0_examples.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsheaders_group0_examples", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_group0_examples.nim", line: 0};
framePtr = F;
framePtr = F.prev;