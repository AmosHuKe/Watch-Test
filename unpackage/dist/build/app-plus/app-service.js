var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190312_syb_scopedata*/global.__wcc_version__='v0.5vv_20190312_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[4],[[5],[[5],[[5],[[5],[1,'cu-bar fixed']],[[2,'?:'],[[2,'!='],[[7],[3,'bgImage']],[1,'']],[1,'none-bg text-white bg-img'],[1,'']]],[[7],[3,'bgColor']]],[[2,'?:'],[[7],[3,'isShadown']],[1,' cu-bar-shadown'],[1,'']]]])
Z([[7],[3,'style']])
Z([[7],[3,'isBack']])
Z([3,'__e'])
Z([3,'action'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'BackPage']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'backText'])
Z([3,'content'])
Z([3,'right'])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z(z[0])
Z(z[0])
Z([3,'block'])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'_onBlockTouchStart']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'_onBlockTouchMove']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'_onBlockTouchEnd']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'maxBlockLeft']])
Z([3,'maxBlock'])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'width:'],[[7],[3,'blockSize']]],[1,'rpx;height:']],[[7],[3,'blockSize']]],[1,'rpx;margin-left:']],[[7],[3,'maxBlockLeft']]],[1,'rpx;']])
Z(z[6])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'ble data-v-c23e8096'])
Z([3,'bg-white'])
Z([3,'__l'])
Z([3,'data-v-c23e8096'])
Z([1,false])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'backText']],[1,'content']]])
Z([3,'index'])
Z([3,'bleList'])
Z([[7],[3,'bleData']])
Z(z[7])
Z([[6],[[7],[3,'bleList']],[3,'tag']])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page data-v-e13fb932'])
Z([[7],[3,'backgroundColor']])
Z([[7],[3,'barheight']])
Z([3,'__l'])
Z([3,'__e'])
Z([[7],[3,'slideBlockSize']])
Z([3,'data-v-e13fb932'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^rangechange']],[[4],[[5],[[4],[[5],[1,'onRangeChange']]]]]]]]])
Z([[7],[3,'slideHeight']])
Z([[7],[3,'slideMax']])
Z([[7],[3,'slideMin']])
Z([1,50])
Z([[7],[3,'rangeValues']])
Z([3,'1'])
Z([[4],[[5],[1,'maxBlock']]])
Z([[7],[3,'slideWidth']])
Z(z[1])
Z(z[2])
Z(z[3])
Z(z[4])
Z(z[5])
Z(z[6])
Z([[4],[[5],[[4],[[5],[[5],[1,'^rangechange']],[[4],[[5],[[4],[[5],[1,'onRangeChange2']]]]]]]]])
Z(z[8])
Z([[7],[3,'slideMax2']])
Z(z[10])
Z([1,0.5])
Z([[7],[3,'rangeValues2']])
Z([3,'2'])
Z(z[14])
Z(z[15])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,true])
Z([3,'__e'])
Z(z[0])
Z([[4],[[5],[[5],[1,'card-swiper swiperbox data-v-d70dec54']],[[2,'?:'],[[7],[3,'dotStyle']],[1,'square-dot'],[1,'round-dot']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'cardSwiper']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'500'])
Z([3,'#0081ff'])
Z([3,'#8799a3'])
Z(z[0])
Z([3,'5000'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'swiperList']])
Z(z[10])
Z([3,'swiper-item bar-shadown data-v-d70dec54'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'image']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'video']])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'mainIndex data-v-1dbfeb55'])
Z([[2,'=='],[[7],[3,'PageCur']],[1,'home']])
Z([3,'__l'])
Z([3,'data-v-1dbfeb55'])
Z([3,'1'])
Z([[2,'=='],[[7],[3,'PageCur']],[1,'motion']])
Z(z[2])
Z(z[3])
Z([3,'2'])
Z([[2,'=='],[[7],[3,'PageCur']],[1,'ble']])
Z(z[2])
Z(z[3])
Z([3,'3'])
Z([[2,'=='],[[7],[3,'PageCur']],[1,'goal']])
Z(z[2])
Z(z[3])
Z([3,'4'])
Z([[2,'=='],[[7],[3,'PageCur']],[1,'mine']])
Z(z[2])
Z(z[3])
Z([3,'5'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-white'])
Z([3,'__l'])
Z([1,true])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'backText']],[1,'content']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-white'])
Z([3,'__l'])
Z([1,true])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'backText']],[1,'content']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-white'])
Z([3,'__l'])
Z([1,true])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'backText']],[1,'content']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'logo flexlogo data-v-d532e254'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'goLogin']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'?:'],[[2,'!'],[[7],[3,'login']]],[1,'logo-hover'],[1,'']])
Z([[2,'!'],[[7],[3,'login']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'datas']],[3,'bgcolor']])
Z([3,'__l'])
Z([3,'data-v-41a5a8b2'])
Z([1,true])
Z([1,false])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'backText']],[1,'content']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page data-v-7c5a5588'])
Z([[2,'?:'],[[2,'=='],[[6],[[7],[3,'notice']],[3,'contentmain']],[1,'']],[1,false],[1,true]])
Z([3,'cardTitle-jk data-v-7c5a5588'])
Z([3,'index'])
Z([3,'jk'])
Z([[7],[3,'jkList']])
Z(z[3])
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'cu-item data-v-7c5a5588']],[[2,'?:'],[[2,'=='],[[7],[3,'index']],[[7],[3,'TabCur']]],[1,'text-blue cur'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'tabSelect']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'index']])
Z([[2,'=='],[[7],[3,'index']],[1,'sleep']])
Z([[2,'=='],[[7],[3,'index']],[1,'heartbeat']])
Z([[2,'=='],[[7],[3,'index']],[1,'pulse']])
Z([[2,'=='],[[7],[3,'TabCur']],[1,'sleep']])
Z(z[3])
Z([3,'sleepD'])
Z([[6],[[6],[[6],[[7],[3,'jkList']],[3,'sleep']],[1,0]],[3,'content']])
Z(z[3])
Z([[6],[[7],[3,'sleepD']],[3,'content']])
Z([[2,'=='],[[7],[3,'TabCur']],[1,'heartbeat']])
Z([[2,'=='],[[7],[3,'TabCur']],[1,'pulse']])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./lib/colorui/components/cu-custom.wxml','./lib/range-slider/range-slider.wxml','./pages/ble/ble.wxml','./pages/goal/goal.wxml','./pages/home/home.wxml','./pages/index.wxml','./pages/mine/children/forget.wxml','./pages/mine/children/login.wxml','./pages/mine/children/register.wxml','./pages/mine/mine.wxml','./pages/motion/children/motion_ydData.wxml','./pages/motion/motion.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
var oD=_mz(z,'view',['bindtap',3,'class',1,'data-event-opts',2],[],e,s,gg)
var fE=_n('slot')
_rz(z,fE,'name',6,e,s,gg)
_(oD,fE)
_(xC,oD)
}
var cF=_n('slot')
_rz(z,cF,'name',7,e,s,gg)
_(oB,cF)
var hG=_n('slot')
_rz(z,hG,'name',8,e,s,gg)
_(oB,hG)
xC.wxXCkey=1
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var cI=_mz(z,'view',['bindtouchend',0,'bindtouchmove',1,'bindtouchstart',1,'class',2,'data-event-opts',3,'data-left',4,'data-tag',5,'style',6],[],e,s,gg)
var oJ=_n('slot')
_rz(z,oJ,'name',8,e,s,gg)
_(cI,oJ)
_(r,cI)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var aL=_n('view')
_rz(z,aL,'class',0,e,s,gg)
var tM=_mz(z,'cu-custom',['bgColor',1,'bind:__l',1,'class',2,'isBack',3,'vueId',4,'vueSlots',5],[],e,s,gg)
_(aL,tM)
var eN=_v()
_(aL,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
if(_oz(z,11,xQ,oP,gg)){cT.wxVkey=1
}
cT.wxXCkey=1
return oR
}
eN.wxXCkey=2
_2z(z,9,bO,e,s,gg,eN,'bleList','index','index')
_(r,aL)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var oV=_mz(z,'scroll-view',['scrollY',-1,'class',0],[],e,s,gg)
var cW=_mz(z,'range-slider',['activeColor',1,'barHeight',1,'bind:__l',2,'bind:rangechange',3,'blockSize',4,'class',5,'data-event-opts',6,'height',7,'max',8,'min',9,'step',10,'values',11,'vueId',12,'vueSlots',13,'width',14],[],e,s,gg)
_(oV,cW)
var oX=_mz(z,'range-slider',['activeColor',16,'barHeight',1,'bind:__l',2,'bind:rangechange',3,'blockSize',4,'class',5,'data-event-opts',6,'height',7,'max',8,'min',9,'step',10,'values',11,'vueId',12,'vueSlots',13,'width',14],[],e,s,gg)
_(oV,oX)
_(r,oV)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var aZ=_mz(z,'swiper',['autoplay',0,'bindchange',1,'circular',1,'class',2,'data-event-opts',3,'duration',4,'indicatorActiveColor',5,'indicatorColor',6,'indicatorDots',7,'interval',8],[],e,s,gg)
var t1=_v()
_(aZ,t1)
var e2=function(o4,b3,x5,gg){
var f7=_n('view')
_rz(z,f7,'class',14,o4,b3,gg)
var c8=_v()
_(f7,c8)
if(_oz(z,15,o4,b3,gg)){c8.wxVkey=1
}
var h9=_v()
_(f7,h9)
if(_oz(z,16,o4,b3,gg)){h9.wxVkey=1
}
c8.wxXCkey=1
h9.wxXCkey=1
_(x5,f7)
return x5
}
t1.wxXCkey=2
_2z(z,12,e2,e,s,gg,t1,'item','index','index')
_(r,aZ)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var cAB=_n('view')
_rz(z,cAB,'class',0,e,s,gg)
var oBB=_v()
_(cAB,oBB)
if(_oz(z,1,e,s,gg)){oBB.wxVkey=1
var bGB=_mz(z,'home',['bind:__l',2,'class',1,'vueId',2],[],e,s,gg)
_(oBB,bGB)
}
var lCB=_v()
_(cAB,lCB)
if(_oz(z,5,e,s,gg)){lCB.wxVkey=1
var oHB=_mz(z,'motion',['bind:__l',6,'class',1,'vueId',2],[],e,s,gg)
_(lCB,oHB)
}
var aDB=_v()
_(cAB,aDB)
if(_oz(z,9,e,s,gg)){aDB.wxVkey=1
var xIB=_mz(z,'ble',['bind:__l',10,'class',1,'vueId',2],[],e,s,gg)
_(aDB,xIB)
}
var tEB=_v()
_(cAB,tEB)
if(_oz(z,13,e,s,gg)){tEB.wxVkey=1
var oJB=_mz(z,'goal',['bind:__l',14,'class',1,'vueId',2],[],e,s,gg)
_(tEB,oJB)
}
var eFB=_v()
_(cAB,eFB)
if(_oz(z,17,e,s,gg)){eFB.wxVkey=1
var fKB=_mz(z,'mine',['bind:__l',18,'class',1,'vueId',2],[],e,s,gg)
_(eFB,fKB)
}
oBB.wxXCkey=1
oBB.wxXCkey=3
lCB.wxXCkey=1
lCB.wxXCkey=3
aDB.wxXCkey=1
aDB.wxXCkey=3
tEB.wxXCkey=1
tEB.wxXCkey=3
eFB.wxXCkey=1
eFB.wxXCkey=3
_(r,cAB)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var hMB=_mz(z,'cu-custom',['bgColor',0,'bind:__l',1,'isBack',1,'vueId',2,'vueSlots',3],[],e,s,gg)
_(r,hMB)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var cOB=_mz(z,'cu-custom',['bgColor',0,'bind:__l',1,'isBack',1,'vueId',2,'vueSlots',3],[],e,s,gg)
_(r,cOB)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var lQB=_mz(z,'cu-custom',['bgColor',0,'bind:__l',1,'isBack',1,'vueId',2,'vueSlots',3],[],e,s,gg)
_(r,lQB)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var tSB=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1,'hoverClass',2],[],e,s,gg)
var eTB=_v()
_(tSB,eTB)
if(_oz(z,4,e,s,gg)){eTB.wxVkey=1
}
eTB.wxXCkey=1
_(r,tSB)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var oVB=_mz(z,'cu-custom',['bgImage',0,'bind:__l',1,'class',1,'isBack',2,'isShadown',3,'vueId',4,'vueSlots',5],[],e,s,gg)
_(r,oVB)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var oXB=_mz(z,'scroll-view',['scrollY',-1,'class',0],[],e,s,gg)
var fYB=_v()
_(oXB,fYB)
if(_oz(z,1,e,s,gg)){fYB.wxVkey=1
}
var cZB=_n('view')
_rz(z,cZB,'class',2,e,s,gg)
var o4B=_v()
_(cZB,o4B)
var l5B=function(t7B,a6B,e8B,gg){
var o0B=_mz(z,'view',['bindtap',7,'class',1,'data-event-opts',2,'data-id',3],[],t7B,a6B,gg)
var xAC=_v()
_(o0B,xAC)
if(_oz(z,11,t7B,a6B,gg)){xAC.wxVkey=1
}
var oBC=_v()
_(o0B,oBC)
if(_oz(z,12,t7B,a6B,gg)){oBC.wxVkey=1
}
var fCC=_v()
_(o0B,fCC)
if(_oz(z,13,t7B,a6B,gg)){fCC.wxVkey=1
}
xAC.wxXCkey=1
oBC.wxXCkey=1
fCC.wxXCkey=1
_(e8B,o0B)
return e8B
}
o4B.wxXCkey=2
_2z(z,5,l5B,e,s,gg,o4B,'jk','index','index')
var h1B=_v()
_(cZB,h1B)
if(_oz(z,14,e,s,gg)){h1B.wxVkey=1
var cDC=_v()
_(h1B,cDC)
var hEC=function(cGC,oFC,oHC,gg){
var aJC=_v()
_(oHC,aJC)
if(_oz(z,19,cGC,oFC,gg)){aJC.wxVkey=1
}
aJC.wxXCkey=1
return oHC
}
cDC.wxXCkey=2
_2z(z,17,hEC,e,s,gg,cDC,'sleepD','index','index')
}
var o2B=_v()
_(cZB,o2B)
if(_oz(z,20,e,s,gg)){o2B.wxVkey=1
}
var c3B=_v()
_(cZB,c3B)
if(_oz(z,21,e,s,gg)){c3B.wxVkey=1
}
h1B.wxXCkey=1
o2B.wxXCkey=1
c3B.wxXCkey=1
_(oXB,cZB)
fYB.wxXCkey=1
_(r,oXB)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/index","pages/motion/children/motion_ydData","pages/mine/children/login","pages/mine/children/register","pages/mine/children/forget"],"subPackages":[],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"手表","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8","navigationStyle":"custom"},"nvueCompiler":"weex","splashscreen":{"alwaysShowBeforeRender":false,"autoclose":true},"appname":"智能手表测试","compilerVersion":"2.0.0","usingComponents":{"cu-custom":"/lib/colorui/components/cu-custom","home":"/pages/home/home","motion":"/pages/motion/motion","ble":"/pages/ble/ble","goal":"/pages/goal/goal","mine":"/pages/mine/mine"}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['lib/colorui/components/cu-custom.json']={"usingComponents":{},"component":true};
__wxAppCode__['lib/colorui/components/cu-custom.wxml']=$gwx('./lib/colorui/components/cu-custom.wxml');

__wxAppCode__['lib/range-slider/range-slider.json']={"usingComponents":{},"component":true};
__wxAppCode__['lib/range-slider/range-slider.wxml']=$gwx('./lib/range-slider/range-slider.wxml');

__wxAppCode__['pages/ble/ble.json']={"usingComponents":{"cu-custom":"/lib/colorui/components/cu-custom"},"component":true};
__wxAppCode__['pages/ble/ble.wxml']=$gwx('./pages/ble/ble.wxml');

__wxAppCode__['pages/goal/goal.json']={"usingComponents":{"range-slider":"/lib/range-slider/range-slider"},"component":true};
__wxAppCode__['pages/goal/goal.wxml']=$gwx('./pages/goal/goal.wxml');

__wxAppCode__['pages/home/home.json']={"usingComponents":{},"component":true};
__wxAppCode__['pages/home/home.wxml']=$gwx('./pages/home/home.wxml');

__wxAppCode__['pages/index.json']={"usingComponents":{"home":"/pages/home/home","motion":"/pages/motion/motion","ble":"/pages/ble/ble","goal":"/pages/goal/goal","mine":"/pages/mine/mine"}};
__wxAppCode__['pages/index.wxml']=$gwx('./pages/index.wxml');

__wxAppCode__['pages/mine/children/forget.json']={"usingComponents":{"cu-custom":"/lib/colorui/components/cu-custom"}};
__wxAppCode__['pages/mine/children/forget.wxml']=$gwx('./pages/mine/children/forget.wxml');

__wxAppCode__['pages/mine/children/login.json']={"usingComponents":{"cu-custom":"/lib/colorui/components/cu-custom"}};
__wxAppCode__['pages/mine/children/login.wxml']=$gwx('./pages/mine/children/login.wxml');

__wxAppCode__['pages/mine/children/register.json']={"usingComponents":{"cu-custom":"/lib/colorui/components/cu-custom"}};
__wxAppCode__['pages/mine/children/register.wxml']=$gwx('./pages/mine/children/register.wxml');

__wxAppCode__['pages/mine/mine.json']={"usingComponents":{},"component":true};
__wxAppCode__['pages/mine/mine.wxml']=$gwx('./pages/mine/mine.wxml');

__wxAppCode__['pages/motion/children/motion_ydData.json']={"usingComponents":{"cu-custom":"/lib/colorui/components/cu-custom"}};
__wxAppCode__['pages/motion/children/motion_ydData.wxml']=$gwx('./pages/motion/children/motion_ydData.wxml');

__wxAppCode__['pages/motion/motion.json']={"usingComponents":{},"component":true};
__wxAppCode__['pages/motion/motion.wxml']=$gwx('./pages/motion/motion.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"0b38":function(t,n,o){"use strict";o.r(n);var e=o("680d");for(var u in e)"default"!==u&&function(t){o.d(n,t,function(){return e[t]})}(u);o("736c");var a,r,c=o("2877"),l=Object(c["a"])(e["default"],a,r,!1,null,null,null);n["default"]=l.exports},5193:function(t,n,o){},"680d":function(t,n,o){"use strict";o.r(n);var e=o("a3e2"),u=o.n(e);for(var a in e)"default"!==a&&function(t){o.d(n,t,function(){return e[t]})}(a);n["default"]=u.a},"736c":function(t,n,o){"use strict";var e=o("5193"),u=o.n(e);u.a},a3e2:function(t,n,o){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=u(o("66fd"));function u(t){return t&&t.__esModule?t:{default:t}}var a={created:function(){plus.navigator.closeSplashscreen()},onLaunch:function(){console.log("App Launch"," at App.vue:12"),t.getSystemInfo({success:function(t){e.default.prototype.StatusBar=t.statusBarHeight,"android"==t.platform?e.default.prototype.CustomBar=t.statusBarHeight+50:e.default.prototype.CustomBar=t.statusBarHeight+45}})},onShow:function(){console.log("App 开启"," at App.vue:39")},onHide:function(){console.log("App 关闭"," at App.vue:42")}};n.default=a}).call(this,o("6e42")["default"])}},[["1108","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function t(t) {
    for (var n, o, l = t[0], u = t[1], s = t[2], c = 0, p = []; c < l.length; c++) {
      o = l[c], a[o] && p.push(a[o][0]), a[o] = 0;
    }

    for (n in u) {
      Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
    }

    g && g(t);

    while (p.length) {
      p.shift()();
    }

    return i.push.apply(i, s || []), r();
  }

  function r() {
    for (var e, t = 0; t < i.length; t++) {
      for (var r = i[t], n = !0, o = 1; o < r.length; o++) {
        var l = r[o];
        0 !== a[l] && (n = !1);
      }

      n && (i.splice(t--, 1), e = u(u.s = r[0]));
    }

    return e;
  }

  var n = {},
      o = {
    "common/runtime": 0
  },
      a = {
    "common/runtime": 0
  },
      i = [];

  function l(e) {
    return u.p + "" + e + ".js";
  }

  function u(t) {
    if (n[t]) return n[t].exports;
    var r = n[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(r.exports, r, r.exports, u), r.l = !0, r.exports;
  }

  u.e = function (e) {
    var t = [],
        r = {
      "pages/home/home": 1,
      "lib/colorui/components/cu-custom": 1,
      "pages/ble/ble": 1,
      "pages/goal/goal": 1,
      "pages/mine/mine": 1,
      "pages/motion/motion": 1,
      "lib/range-slider/range-slider": 1
    };
    o[e] ? t.push(o[e]) : 0 !== o[e] && r[e] && t.push(o[e] = new Promise(function (t, r) {
      for (var n = ({
        "pages/home/home": "pages/home/home",
        "lib/colorui/components/cu-custom": "lib/colorui/components/cu-custom",
        "pages/ble/ble": "pages/ble/ble",
        "pages/goal/goal": "pages/goal/goal",
        "pages/mine/mine": "pages/mine/mine",
        "pages/motion/motion": "pages/motion/motion",
        "lib/range-slider/range-slider": "lib/range-slider/range-slider"
      }[e] || e) + ".wxss", a = u.p + n, i = document.getElementsByTagName("link"), l = 0; l < i.length; l++) {
        var s = i[l],
            c = s.getAttribute("data-href") || s.getAttribute("href");
        if ("stylesheet" === s.rel && (c === n || c === a)) return t();
      }

      var p = document.getElementsByTagName("style");

      for (l = 0; l < p.length; l++) {
        s = p[l], c = s.getAttribute("data-href");
        if (c === n || c === a) return t();
      }

      var g = document.createElement("link");
      g.rel = "stylesheet", g.type = "text/css", g.onload = t, g.onerror = function (t) {
        var n = t && t.target && t.target.src || a,
            i = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ")");
        i.request = n, delete o[e], g.parentNode.removeChild(g), r(i);
      }, g.href = a;
      var m = document.getElementsByTagName("head")[0];
      m.appendChild(g);
    }).then(function () {
      o[e] = 0;
    }));
    var n = a[e];
    if (0 !== n) if (n) t.push(n[2]);else {
      var i = new Promise(function (t, r) {
        n = a[e] = [t, r];
      });
      t.push(n[2] = i);
      var s,
          c = document.createElement("script");
      c.charset = "utf-8", c.timeout = 120, u.nc && c.setAttribute("nonce", u.nc), c.src = l(e), s = function s(t) {
        c.onerror = c.onload = null, clearTimeout(p);
        var r = a[e];

        if (0 !== r) {
          if (r) {
            var n = t && ("load" === t.type ? "missing" : t.type),
                o = t && t.target && t.target.src,
                i = new Error("Loading chunk " + e + " failed.\n(" + n + ": " + o + ")");
            i.type = n, i.request = o, r[1](i);
          }

          a[e] = void 0;
        }
      };
      var p = setTimeout(function () {
        s({
          type: "timeout",
          target: c
        });
      }, 12e4);
      c.onerror = c.onload = s, document.head.appendChild(c);
    }
    return Promise.all(t);
  }, u.m = e, u.c = n, u.d = function (e, t, r) {
    u.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r
    });
  }, u.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, u.t = function (e, t) {
    if (1 & t && (e = u(e)), 8 & t) return e;
    if (4 & t && "object" === typeof e && e && e.__esModule) return e;
    var r = Object.create(null);
    if (u.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var n in e) {
      u.d(r, n, function (t) {
        return e[t];
      }.bind(null, n));
    }
    return r;
  }, u.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return u.d(t, "a", t), t;
  }, u.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, u.p = "/", u.oe = function (e) {
    throw console.error(e), e;
  };
  var s = global["webpackJsonp"] = global["webpackJsonp"] || [],
      c = s.push.bind(s);
  s.push = t, s = s.slice();

  for (var p = 0; p < s.length; p++) {
    t(s[p]);
  }

  var g = c;
  r();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{1108:function(t,e,n){"use strict";(function(t){n("8fd2");var e=o(n("66fd")),i=o(n("0b38"));function o(t){return t&&t.__esModule?t:{default:t}}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){a(t,e,n[e])})}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s=function(){return n.e("lib/colorui/components/cu-custom").then(n.bind(null,"3fde"))};e.default.component("cu-custom",s);var l=function(){return Promise.all([n.e("common/vendor"),n.e("pages/home/home")]).then(n.bind(null,"004e"))};e.default.component("home",l);var c=function(){return n.e("pages/motion/motion").then(n.bind(null,"a993"))};e.default.component("motion",c);var u=function(){return n.e("pages/ble/ble").then(n.bind(null,"bbf9"))};e.default.component("ble",u);var f=function(){return n.e("pages/goal/goal").then(n.bind(null,"d805"))};e.default.component("goal",f);var h=function(){return n.e("pages/mine/mine").then(n.bind(null,"6cbb"))};e.default.component("mine",h),e.default.config.productionTip=!1,i.default.mpType="app";var p=new e.default(r({},i.default));t(p).$mount()}).call(this,n("6e42")["createApp"])},"17f6":function(t,e,n){"use strict";(function(t){n("8fd2");i(n("66fd"));var e=i(n("d18d"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"24c0":function(t,e,n){"use strict";(function(t){n("8fd2");i(n("66fd"));var e=i(n("663a"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},2877:function(t,e,n){"use strict";function i(t,e,n,i,o,r,a,s){var l,c="function"===typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),a?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=l):o&&(l=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,l):[l]}return{exports:t,options:c}}n.d(e,"a",function(){return i})},"2f62":function(t,e,n){"use strict";n.r(e),n.d(e,"Store",function(){return d}),n.d(e,"install",function(){return O}),n.d(e,"mapState",function(){return k}),n.d(e,"mapMutations",function(){return E}),n.d(e,"mapGetters",function(){return M}),n.d(e,"mapActions",function(){return C}),n.d(e,"createNamespacedHelpers",function(){return L});
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var i=function(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:i});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[i].concat(t.init):i,n.call(this,t)}}function i(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}},o="undefined"!==typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function r(t){o&&(t._devtoolHook=o,o.emit("vuex:init",t),o.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){o.emit("vuex:mutation",t,e)}))}function a(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function s(t){return null!==t&&"object"===typeof t}function l(t){return t&&"function"===typeof t.then}var c=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},u={namespaced:{configurable:!0}};u.namespaced.get=function(){return!!this._rawModule.namespaced},c.prototype.addChild=function(t,e){this._children[t]=e},c.prototype.removeChild=function(t){delete this._children[t]},c.prototype.getChild=function(t){return this._children[t]},c.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},c.prototype.forEachChild=function(t){a(this._children,t)},c.prototype.forEachGetter=function(t){this._rawModule.getters&&a(this._rawModule.getters,t)},c.prototype.forEachAction=function(t){this._rawModule.actions&&a(this._rawModule.actions,t)},c.prototype.forEachMutation=function(t){this._rawModule.mutations&&a(this._rawModule.mutations,t)},Object.defineProperties(c.prototype,u);var f=function(t){this.register([],t,!1)};function h(t,e,n){if(e.update(n),n.modules)for(var i in n.modules){if(!e.getChild(i))return void 0;h(t.concat(i),e.getChild(i),n.modules[i])}}f.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},f.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")},"")},f.prototype.update=function(t){h([],this.root,t)},f.prototype.register=function(t,e,n){var i=this;void 0===n&&(n=!0);var o=new c(e,n);if(0===t.length)this.root=o;else{var r=this.get(t.slice(0,-1));r.addChild(t[t.length-1],o)}e.modules&&a(e.modules,function(e,o){i.register(t.concat(o),e,n)})},f.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var p;var d=function(t){var e=this;void 0===t&&(t={}),!p&&"undefined"!==typeof window&&window.Vue&&O(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var i=t.strict;void 0===i&&(i=!1);var o=t.state;void 0===o&&(o={}),"function"===typeof o&&(o=o()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new f(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new p;var a=this,s=this,l=s.dispatch,c=s.commit;this.dispatch=function(t,e){return l.call(a,t,e)},this.commit=function(t,e,n){return c.call(a,t,e,n)},this.strict=i,m(this,o,[],this._modules.root),x(this,o),n.forEach(function(t){return t(e)}),p.config.devtools&&r(this)},v={state:{configurable:!0}};function g(t,e){return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function y(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;m(t,n,[],t._modules.root,!0),x(t,n,e)}function x(t,e,n){var i=t._vm;t.getters={};var o=t._wrappedGetters,r={};a(o,function(e,n){r[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var s=p.config.silent;p.config.silent=!0,t._vm=new p({data:{$$state:e},computed:r}),p.config.silent=s,t.strict&&S(t),i&&(n&&t._withCommit(function(){i._data.$$state=null}),p.nextTick(function(){return i.$destroy()}))}function m(t,e,n,i,o){var r=!n.length,a=t._modules.getNamespace(n);if(i.namespaced&&(t._modulesNamespaceMap[a]=i),!r&&!o){var s=T(e,n.slice(0,-1)),l=n[n.length-1];t._withCommit(function(){p.set(s,l,i.state)})}var c=i.context=_(t,a,n);i.forEachMutation(function(e,n){var i=a+n;A(t,i,e,c)}),i.forEachAction(function(e,n){var i=e.root?n:a+n,o=e.handler||e;w(t,i,o,c)}),i.forEachGetter(function(e,n){var i=a+n;P(t,i,e,c)}),i.forEachChild(function(i,r){m(t,e,n.concat(r),i,o)})}function _(t,e,n){var i=""===e,o={dispatch:i?t.dispatch:function(n,i,o){var r=$(n,i,o),a=r.payload,s=r.options,l=r.type;return s&&s.root||(l=e+l),t.dispatch(l,a)},commit:i?t.commit:function(n,i,o){var r=$(n,i,o),a=r.payload,s=r.options,l=r.type;s&&s.root||(l=e+l),t.commit(l,a,s)}};return Object.defineProperties(o,{getters:{get:i?function(){return t.getters}:function(){return b(t,e)}},state:{get:function(){return T(t.state,n)}}}),o}function b(t,e){var n={},i=e.length;return Object.keys(t.getters).forEach(function(o){if(o.slice(0,i)===e){var r=o.slice(i);Object.defineProperty(n,r,{get:function(){return t.getters[o]},enumerable:!0})}}),n}function A(t,e,n,i){var o=t._mutations[e]||(t._mutations[e]=[]);o.push(function(e){n.call(t,i.state,e)})}function w(t,e,n,i){var o=t._actions[e]||(t._actions[e]=[]);o.push(function(e,o){var r=n.call(t,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:t.getters,rootState:t.state},e,o);return l(r)||(r=Promise.resolve(r)),t._devtoolHook?r.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):r})}function P(t,e,n,i){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(i.state,i.getters,t.state,t.getters)})}function S(t){t._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}function T(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function $(t,e,n){return s(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function O(t){p&&t===p||(p=t,i(p))}v.state.get=function(){return this._vm._data.$$state},v.state.set=function(t){0},d.prototype.commit=function(t,e,n){var i=this,o=$(t,e,n),r=o.type,a=o.payload,s=(o.options,{type:r,payload:a}),l=this._mutations[r];l&&(this._withCommit(function(){l.forEach(function(t){t(a)})}),this._subscribers.forEach(function(t){return t(s,i.state)}))},d.prototype.dispatch=function(t,e){var n=this,i=$(t,e),o=i.type,r=i.payload,a={type:o,payload:r},s=this._actions[o];if(s)return this._actionSubscribers.forEach(function(t){return t(a,n.state)}),s.length>1?Promise.all(s.map(function(t){return t(r)})):s[0](r)},d.prototype.subscribe=function(t){return g(t,this._subscribers)},d.prototype.subscribeAction=function(t){return g(t,this._actionSubscribers)},d.prototype.watch=function(t,e,n){var i=this;return this._watcherVM.$watch(function(){return t(i.state,i.getters)},e,n)},d.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},d.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),m(this,this.state,t,this._modules.get(t),n.preserveState),x(this,this.state)},d.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var n=T(e.state,t.slice(0,-1));p.delete(n,t[t.length-1])}),y(this)},d.prototype.hotUpdate=function(t){this._modules.update(t),y(this,!0)},d.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(d.prototype,v);var k=R(function(t,e){var n={};return F(e).forEach(function(e){var i=e.key,o=e.val;n[i]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var i=D(this.$store,"mapState",t);if(!i)return;e=i.context.state,n=i.context.getters}return"function"===typeof o?o.call(this,e,n):e[o]},n[i].vuex=!0}),n}),E=R(function(t,e){var n={};return F(e).forEach(function(e){var i=e.key,o=e.val;n[i]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var i=this.$store.commit;if(t){var r=D(this.$store,"mapMutations",t);if(!r)return;i=r.context.commit}return"function"===typeof o?o.apply(this,[i].concat(e)):i.apply(this.$store,[o].concat(e))}}),n}),M=R(function(t,e){var n={};return F(e).forEach(function(e){var i=e.key,o=e.val;o=t+o,n[i]=function(){if(!t||D(this.$store,"mapGetters",t))return this.$store.getters[o]},n[i].vuex=!0}),n}),C=R(function(t,e){var n={};return F(e).forEach(function(e){var i=e.key,o=e.val;n[i]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var i=this.$store.dispatch;if(t){var r=D(this.$store,"mapActions",t);if(!r)return;i=r.context.dispatch}return"function"===typeof o?o.apply(this,[i].concat(e)):i.apply(this.$store,[o].concat(e))}}),n}),L=function(t){return{mapState:k.bind(null,t),mapGetters:M.bind(null,t),mapMutations:E.bind(null,t),mapActions:C.bind(null,t)}};function F(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function R(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function D(t,e,n){var i=t._modulesNamespaceMap[n];return i}var I={Store:d,install:O,version:"3.0.1",mapState:k,mapMutations:E,mapGetters:M,mapActions:C,createNamespacedHelpers:L};e["default"]=I},"66fd":function(t,e,n){"use strict";n.r(e),function(t){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function i(t){return void 0===t||null===t}function o(t){return void 0!==t&&null!==t}function r(t){return!0===t}function a(t){return!1===t}function s(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function l(t){return null!==t&&"object"===typeof t}var c=Object.prototype.toString;function u(t){return"[object Object]"===c.call(t)}function f(t){return"[object RegExp]"===c.call(t)}function h(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function p(t){return o(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function d(t){return null==t?"":Array.isArray(t)||u(t)&&t.toString===c?JSON.stringify(t,null,2):String(t)}function v(t){var e=parseFloat(t);return isNaN(e)?t:e}function g(t,e){for(var n=Object.create(null),i=t.split(","),o=0;o<i.length;o++)n[i[o]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}g("slot,component",!0);var y=g("key,ref,slot,slot-scope,is");function x(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var m=Object.prototype.hasOwnProperty;function _(t,e){return m.call(t,e)}function b(t){var e=Object.create(null);return function(n){var i=e[n];return i||(e[n]=t(n))}}var A=/-(\w)/g,w=b(function(t){return t.replace(A,function(t,e){return e?e.toUpperCase():""})}),P=b(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),S=/\B([A-Z])/g,T=b(function(t){return t.replace(S,"-$1").toLowerCase()});function $(t,e){function n(n){var i=arguments.length;return i?i>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function O(t,e){return t.bind(e)}var k=Function.prototype.bind?O:$;function E(t,e){e=e||0;var n=t.length-e,i=new Array(n);while(n--)i[n]=t[n+e];return i}function M(t,e){for(var n in e)t[n]=e[n];return t}function C(t){for(var e={},n=0;n<t.length;n++)t[n]&&M(e,t[n]);return e}function L(t,e,n){}var F=function(t,e,n){return!1},R=function(t){return t};function D(t,e){if(t===e)return!0;var n=l(t),i=l(e);if(!n||!i)return!n&&!i&&String(t)===String(e);try{var o=Array.isArray(t),r=Array.isArray(e);if(o&&r)return t.length===e.length&&t.every(function(t,n){return D(t,e[n])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(o||r)return!1;var a=Object.keys(t),s=Object.keys(e);return a.length===s.length&&a.every(function(n){return D(t[n],e[n])})}catch(c){return!1}}function I(t,e){for(var n=0;n<t.length;n++)if(D(t[n],e))return n;return-1}function j(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var H=["component","directive","filter"],z=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],N={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:F,isReservedAttr:F,isUnknownElement:F,getTagNamespace:L,parsePlatformTagName:R,mustUseProp:F,async:!0,_lifecycleHooks:z},B=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function W(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function V(t,e,n,i){Object.defineProperty(t,e,{value:n,enumerable:!!i,writable:!0,configurable:!0})}var U=new RegExp("[^"+B.source+".$_\\d]");function G(t){if(!U.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var X,q="__proto__"in{},J="undefined"!==typeof window,K="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Y=K&&WXEnvironment.platform.toLowerCase(),Z=J&&window.navigator.userAgent.toLowerCase(),Q=Z&&/msie|trident/.test(Z),tt=(Z&&Z.indexOf("msie 9.0"),Z&&Z.indexOf("edge/")>0),et=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)||"ios"===Y),nt=(Z&&/chrome\/\d+/.test(Z),Z&&/phantomjs/.test(Z),Z&&Z.match(/firefox\/(\d+)/),{}.watch);if(J)try{var it={};Object.defineProperty(it,"passive",{get:function(){}}),window.addEventListener("test-passive",null,it)}catch(no){}var ot=function(){return void 0===X&&(X=!J&&!K&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),X},rt=J&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function at(t){return"function"===typeof t&&/native code/.test(t.toString())}var st,lt="undefined"!==typeof Symbol&&at(Symbol)&&"undefined"!==typeof Reflect&&at(Reflect.ownKeys);st="undefined"!==typeof Set&&at(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ct=L,ut=0,ft=function(){this.id=ut++,this.subs=[]};ft.prototype.addSub=function(t){this.subs.push(t)},ft.prototype.removeSub=function(t){x(this.subs,t)},ft.prototype.depend=function(){ft.target&&ft.target.addDep(this)},ft.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},ft.target=null;var ht=[];function pt(t){ht.push(t),ft.target=t}function dt(){ht.pop(),ft.target=ht[ht.length-1]}var vt=function(t,e,n,i,o,r,a,s){this.tag=t,this.data=e,this.children=n,this.text=i,this.elm=o,this.ns=void 0,this.context=r,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},gt={child:{configurable:!0}};gt.child.get=function(){return this.componentInstance},Object.defineProperties(vt.prototype,gt);var yt=function(t){void 0===t&&(t="");var e=new vt;return e.text=t,e.isComment=!0,e};function xt(t){return new vt(void 0,void 0,void 0,String(t))}function mt(t){var e=new vt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var _t=Array.prototype,bt=Object.create(_t),At=["push","pop","shift","unshift","splice","sort","reverse"];At.forEach(function(t){var e=_t[t];V(bt,t,function(){var n=[],i=arguments.length;while(i--)n[i]=arguments[i];var o,r=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":o=n;break;case"splice":o=n.slice(2);break}return o&&a.observeArray(o),a.dep.notify(),r})});var wt=Object.getOwnPropertyNames(bt),Pt=!0;function St(t){Pt=t}var Tt=function(t){this.value=t,this.dep=new ft,this.vmCount=0,V(t,"__ob__",this),Array.isArray(t)?(q?$t(t,bt):Ot(t,bt,wt),this.observeArray(t)):this.walk(t)};function $t(t,e){t.__proto__=e}function Ot(t,e,n){for(var i=0,o=n.length;i<o;i++){var r=n[i];V(t,r,e[r])}}function kt(t,e){var n;if(l(t)&&!(t instanceof vt))return _(t,"__ob__")&&t.__ob__ instanceof Tt?n=t.__ob__:Pt&&!ot()&&(Array.isArray(t)||u(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new Tt(t)),e&&n&&n.vmCount++,n}function Et(t,e,n,i,o){var r=new ft,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,l=a&&a.set;s&&!l||2!==arguments.length||(n=t[e]);var c=!o&&kt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return ft.target&&(r.depend(),c&&(c.dep.depend(),Array.isArray(e)&&Lt(e))),e},set:function(e){var i=s?s.call(t):n;e===i||e!==e&&i!==i||s&&!l||(l?l.call(t,e):n=e,c=!o&&kt(e),r.notify())}})}}function Mt(t,e,n){if(Array.isArray(t)&&h(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var i=t.__ob__;return t._isVue||i&&i.vmCount?n:i?(Et(i.value,e,n),i.dep.notify(),n):(t[e]=n,n)}function Ct(t,e){if(Array.isArray(t)&&h(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||_(t,e)&&(delete t[e],n&&n.dep.notify())}}function Lt(t){for(var e=void 0,n=0,i=t.length;n<i;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Lt(e)}Tt.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Et(t,e[n])},Tt.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)kt(t[e])};var Ft=N.optionMergeStrategies;function Rt(t,e){if(!e)return t;for(var n,i,o,r=lt?Reflect.ownKeys(e):Object.keys(e),a=0;a<r.length;a++)n=r[a],"__ob__"!==n&&(i=t[n],o=e[n],_(t,n)?i!==o&&u(i)&&u(o)&&Rt(i,o):Mt(t,n,o));return t}function Dt(t,e,n){return n?function(){var i="function"===typeof e?e.call(n,n):e,o="function"===typeof t?t.call(n,n):t;return i?Rt(i,o):o}:e?t?function(){return Rt("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function It(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?jt(n):n}function jt(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function Ht(t,e,n,i){var o=Object.create(t||null);return e?M(o,e):o}Ft.data=function(t,e,n){return n?Dt(t,e,n):e&&"function"!==typeof e?t:Dt(t,e)},z.forEach(function(t){Ft[t]=It}),H.forEach(function(t){Ft[t+"s"]=Ht}),Ft.watch=function(t,e,n,i){if(t===nt&&(t=void 0),e===nt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var o={};for(var r in M(o,t),e){var a=o[r],s=e[r];a&&!Array.isArray(a)&&(a=[a]),o[r]=a?a.concat(s):Array.isArray(s)?s:[s]}return o},Ft.props=Ft.methods=Ft.inject=Ft.computed=function(t,e,n,i){if(!t)return e;var o=Object.create(null);return M(o,t),e&&M(o,e),o},Ft.provide=Dt;var zt=function(t,e){return void 0===e?t:e};function Nt(t,e){var n=t.props;if(n){var i,o,r,a={};if(Array.isArray(n)){i=n.length;while(i--)o=n[i],"string"===typeof o&&(r=w(o),a[r]={type:null})}else if(u(n))for(var s in n)o=n[s],r=w(s),a[r]=u(o)?o:{type:o};else 0;t.props=a}}function Bt(t,e){var n=t.inject;if(n){var i=t.inject={};if(Array.isArray(n))for(var o=0;o<n.length;o++)i[n[o]]={from:n[o]};else if(u(n))for(var r in n){var a=n[r];i[r]=u(a)?M({from:r},a):{from:a}}else 0}}function Wt(t){var e=t.directives;if(e)for(var n in e){var i=e[n];"function"===typeof i&&(e[n]={bind:i,update:i})}}function Vt(t,e,n){if("function"===typeof e&&(e=e.options),Nt(e,n),Bt(e,n),Wt(e),!e._base&&(e.extends&&(t=Vt(t,e.extends,n)),e.mixins))for(var i=0,o=e.mixins.length;i<o;i++)t=Vt(t,e.mixins[i],n);var r,a={};for(r in t)s(r);for(r in e)_(t,r)||s(r);function s(i){var o=Ft[i]||zt;a[i]=o(t[i],e[i],n,i)}return a}function Ut(t,e,n,i){if("string"===typeof n){var o=t[e];if(_(o,n))return o[n];var r=w(n);if(_(o,r))return o[r];var a=P(r);if(_(o,a))return o[a];var s=o[n]||o[r]||o[a];return s}}function Gt(t,e,n,i){var o=e[t],r=!_(n,t),a=n[t],s=Kt(Boolean,o.type);if(s>-1)if(r&&!_(o,"default"))a=!1;else if(""===a||a===T(t)){var l=Kt(String,o.type);(l<0||s<l)&&(a=!0)}if(void 0===a){a=Xt(i,o,t);var c=Pt;St(!0),kt(a),St(c)}return a}function Xt(t,e,n){if(_(e,"default")){var i=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof i&&"Function"!==qt(e.type)?i.call(t):i}}function qt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Jt(t,e){return qt(t)===qt(e)}function Kt(t,e){if(!Array.isArray(e))return Jt(e,t)?0:-1;for(var n=0,i=e.length;n<i;n++)if(Jt(e[n],t))return n;return-1}function Yt(t,e,n){pt();try{if(e){var i=e;while(i=i.$parent){var o=i.$options.errorCaptured;if(o)for(var r=0;r<o.length;r++)try{var a=!1===o[r].call(i,t,e,n);if(a)return}catch(no){Qt(no,i,"errorCaptured hook")}}}Qt(t,e,n)}finally{dt()}}function Zt(t,e,n,i,o){var r;try{r=n?t.apply(e,n):t.call(e),r&&!r._isVue&&p(r)&&!r._handled&&(r.catch(function(t){return Yt(t,i,o+" (Promise/async)")}),r._handled=!0)}catch(no){Yt(no,i,o)}return r}function Qt(t,e,n){if(N.errorHandler)try{return N.errorHandler.call(null,t,e,n)}catch(no){no!==t&&te(no,null,"config.errorHandler")}te(t,e,n)}function te(t,e,n){if(!J&&!K||"undefined"===typeof console)throw t;console.error(t)}var ee,ne=[],ie=!1;function oe(){ie=!1;var t=ne.slice(0);ne.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&at(Promise)){var re=Promise.resolve();ee=function(){re.then(oe),et&&setTimeout(L)}}else if(Q||"undefined"===typeof MutationObserver||!at(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())ee="undefined"!==typeof setImmediate&&at(setImmediate)?function(){setImmediate(oe)}:function(){setTimeout(oe,0)};else{var ae=1,se=new MutationObserver(oe),le=document.createTextNode(String(ae));se.observe(le,{characterData:!0}),ee=function(){ae=(ae+1)%2,le.data=String(ae)}}function ce(t,e){var n;if(ne.push(function(){if(t)try{t.call(e)}catch(no){Yt(no,e,"nextTick")}else n&&n(e)}),ie||(ie=!0,ee()),!t&&"undefined"!==typeof Promise)return new Promise(function(t){n=t})}var ue=new st;function fe(t){he(t,ue),ue.clear()}function he(t,e){var n,i,o=Array.isArray(t);if(!(!o&&!l(t)||Object.isFrozen(t)||t instanceof vt)){if(t.__ob__){var r=t.__ob__.dep.id;if(e.has(r))return;e.add(r)}if(o){n=t.length;while(n--)he(t[n],e)}else{i=Object.keys(t),n=i.length;while(n--)he(t[i[n]],e)}}}var pe=b(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var i="!"===t.charAt(0);return t=i?t.slice(1):t,{name:t,once:n,capture:i,passive:e}});function de(t,e){function n(){var t=arguments,i=n.fns;if(!Array.isArray(i))return Zt(i,null,arguments,e,"v-on handler");for(var o=i.slice(),r=0;r<o.length;r++)Zt(o[r],null,t,e,"v-on handler")}return n.fns=t,n}function ve(t,e,n,o,a,s){var l,c,u,f;for(l in t)c=t[l],u=e[l],f=pe(l),i(c)||(i(u)?(i(c.fns)&&(c=t[l]=de(c,s)),r(f.once)&&(c=t[l]=a(f.name,c,f.capture)),n(f.name,c,f.capture,f.passive,f.params)):c!==u&&(u.fns=c,t[l]=u));for(l in e)i(t[l])&&(f=pe(l),o(f.name,e[l],f.capture))}function ge(t,e,n){var r=e.options.props;if(!i(r)){var a={},s=t.attrs,l=t.props;if(o(s)||o(l))for(var c in r){var u=T(c);ye(a,l,c,u,!0)||ye(a,s,c,u,!1)}return a}}function ye(t,e,n,i,r){if(o(e)){if(_(e,n))return t[n]=e[n],r||delete e[n],!0;if(_(e,i))return t[n]=e[i],r||delete e[i],!0}return!1}function xe(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function me(t){return s(t)?[xt(t)]:Array.isArray(t)?be(t):void 0}function _e(t){return o(t)&&o(t.text)&&a(t.isComment)}function be(t,e){var n,a,l,c,u=[];for(n=0;n<t.length;n++)a=t[n],i(a)||"boolean"===typeof a||(l=u.length-1,c=u[l],Array.isArray(a)?a.length>0&&(a=be(a,(e||"")+"_"+n),_e(a[0])&&_e(c)&&(u[l]=xt(c.text+a[0].text),a.shift()),u.push.apply(u,a)):s(a)?_e(c)?u[l]=xt(c.text+a):""!==a&&u.push(xt(a)):_e(a)&&_e(c)?u[l]=xt(c.text+a.text):(r(t._isVList)&&o(a.tag)&&i(a.key)&&o(e)&&(a.key="__vlist"+e+"_"+n+"__"),u.push(a)));return u}function Ae(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function we(t){var e=Pe(t.$options.inject,t);e&&(St(!1),Object.keys(e).forEach(function(n){Et(t,n,e[n])}),St(!0))}function Pe(t,e){if(t){for(var n=Object.create(null),i=lt?Reflect.ownKeys(t):Object.keys(t),o=0;o<i.length;o++){var r=i[o];if("__ob__"!==r){var a=t[r].from,s=e;while(s){if(s._provided&&_(s._provided,a)){n[r]=s._provided[a];break}s=s.$parent}if(!s)if("default"in t[r]){var l=t[r].default;n[r]="function"===typeof l?l.call(e):l}else 0}}return n}}function Se(t,e){if(!t||!t.length)return{};for(var n={},i=0,o=t.length;i<o;i++){var r=t[i],a=r.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,r.context!==e&&r.fnContext!==e||!a||null==a.slot)(n.default||(n.default=[])).push(r);else{var s=a.slot,l=n[s]||(n[s]=[]);"template"===r.tag?l.push.apply(l,r.children||[]):l.push(r)}}for(var c in n)n[c].every(Te)&&delete n[c];return n}function Te(t){return t.isComment&&!t.asyncFactory||" "===t.text}function $e(t,e,i){var o,r=Object.keys(e).length>0,a=t?!!t.$stable:!r,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&i&&i!==n&&s===i.$key&&!r&&!i.$hasNormal)return i;for(var l in o={},t)t[l]&&"$"!==l[0]&&(o[l]=Oe(e,l,t[l]))}else o={};for(var c in e)c in o||(o[c]=ke(e,c));return t&&Object.isExtensible(t)&&(t._normalized=o),V(o,"$stable",a),V(o,"$key",s),V(o,"$hasNormal",r),o}function Oe(t,e,n){var i=function(){var t=arguments.length?n.apply(null,arguments):n({});return t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:me(t),t&&(0===t.length||1===t.length&&t[0].isComment)?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:i,enumerable:!0,configurable:!0}),i}function ke(t,e){return function(){return t[e]}}function Ee(t,e){var n,i,r,a,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),i=0,r=t.length;i<r;i++)n[i]=e(t[i],i);else if("number"===typeof t)for(n=new Array(t),i=0;i<t;i++)n[i]=e(i+1,i);else if(l(t))if(lt&&t[Symbol.iterator]){n=[];var c=t[Symbol.iterator](),u=c.next();while(!u.done)n.push(e(u.value,n.length)),u=c.next()}else for(a=Object.keys(t),n=new Array(a.length),i=0,r=a.length;i<r;i++)s=a[i],n[i]=e(t[s],s,i);return o(n)||(n=[]),n._isVList=!0,n}function Me(t,e,n,i){var o,r=this.$scopedSlots[t];r?(n=n||{},i&&(n=M(M({},i),n)),o=r(n)||e):o=this.$slots[t]||e;var a=n&&n.slot;return a?this.$createElement("template",{slot:a},o):o}function Ce(t){return Ut(this.$options,"filters",t,!0)||R}function Le(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function Fe(t,e,n,i,o){var r=N.keyCodes[e]||n;return o&&i&&!N.keyCodes[e]?Le(o,i):r?Le(r,t):i?T(i)!==e:void 0}function Re(t,e,n,i,o){if(n)if(l(n)){var r;Array.isArray(n)&&(n=C(n));var a=function(a){if("class"===a||"style"===a||y(a))r=t;else{var s=t.attrs&&t.attrs.type;r=i||N.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var l=w(a),c=T(a);if(!(l in r)&&!(c in r)&&(r[a]=n[a],o)){var u=t.on||(t.on={});u["update:"+a]=function(t){n[a]=t}}};for(var s in n)a(s)}else;return t}function De(t,e){var n=this._staticTrees||(this._staticTrees=[]),i=n[t];return i&&!e?i:(i=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),je(i,"__static__"+t,!1),i)}function Ie(t,e,n){return je(t,"__once__"+e+(n?"_"+n:""),!0),t}function je(t,e,n){if(Array.isArray(t))for(var i=0;i<t.length;i++)t[i]&&"string"!==typeof t[i]&&He(t[i],e+"_"+i,n);else He(t,e,n)}function He(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function ze(t,e){if(e)if(u(e)){var n=t.on=t.on?M({},t.on):{};for(var i in e){var o=n[i],r=e[i];n[i]=o?[].concat(o,r):r}}else;return t}function Ne(t,e,n,i){e=e||{$stable:!n};for(var o=0;o<t.length;o++){var r=t[o];Array.isArray(r)?Ne(r,e,n):r&&(r.proxy&&(r.fn.proxy=!0),e[r.key]=r.fn)}return i&&(e.$key=i),e}function Be(t,e){for(var n=0;n<e.length;n+=2){var i=e[n];"string"===typeof i&&i&&(t[e[n]]=e[n+1])}return t}function We(t,e){return"string"===typeof t?e+t:t}function Ve(t){t._o=Ie,t._n=v,t._s=d,t._l=Ee,t._t=Me,t._q=D,t._i=I,t._m=De,t._f=Ce,t._k=Fe,t._b=Re,t._v=xt,t._e=yt,t._u=Ne,t._g=ze,t._d=Be,t._p=We}function Ue(t,e,i,o,a){var s,l=this,c=a.options;_(o,"_uid")?(s=Object.create(o),s._original=o):(s=o,o=o._original);var u=r(c._compiled),f=!u;this.data=t,this.props=e,this.children=i,this.parent=o,this.listeners=t.on||n,this.injections=Pe(c.inject,o),this.slots=function(){return l.$slots||$e(t.scopedSlots,l.$slots=Se(i,o)),l.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return $e(t.scopedSlots,this.slots())}}),u&&(this.$options=c,this.$slots=this.slots(),this.$scopedSlots=$e(t.scopedSlots,this.$slots)),c._scopeId?this._c=function(t,e,n,i){var r=rn(s,t,e,n,i,f);return r&&!Array.isArray(r)&&(r.fnScopeId=c._scopeId,r.fnContext=o),r}:this._c=function(t,e,n,i){return rn(s,t,e,n,i,f)}}function Ge(t,e,i,r,a){var s=t.options,l={},c=s.props;if(o(c))for(var u in c)l[u]=Gt(u,c,e||n);else o(i.attrs)&&qe(l,i.attrs),o(i.props)&&qe(l,i.props);var f=new Ue(i,l,a,r,t),h=s.render.call(null,f._c,f);if(h instanceof vt)return Xe(h,i,f.parent,s,f);if(Array.isArray(h)){for(var p=me(h)||[],d=new Array(p.length),v=0;v<p.length;v++)d[v]=Xe(p[v],i,f.parent,s,f);return d}}function Xe(t,e,n,i,o){var r=mt(t);return r.fnContext=n,r.fnOptions=i,e.slot&&((r.data||(r.data={})).slot=e.slot),r}function qe(t,e){for(var n in e)t[w(n)]=e[n]}Ve(Ue.prototype);var Je={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;Je.prepatch(n,n)}else{var i=t.componentInstance=Ze(t,Pn);i.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,i=e.componentInstance=t.componentInstance;On(i,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Cn(n,"mounted")),t.data.keepAlive&&(e._isMounted?Vn(n):En(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Mn(e,!0):e.$destroy())}},Ke=Object.keys(Je);function Ye(t,e,n,a,s){if(!i(t)){var c=n.$options._base;if(l(t)&&(t=c.extend(t)),"function"===typeof t){var u;if(i(t.cid)&&(u=t,t=vn(u,c),void 0===t))return dn(u,e,n,a,s);e=e||{},pi(t),o(e.model)&&en(t.options,e);var f=ge(e,t,s);if(r(t.options.functional))return Ge(t,f,e,n,a);var h=e.on;if(e.on=e.nativeOn,r(t.options.abstract)){var p=e.slot;e={},p&&(e.slot=p)}Qe(e);var d=t.options.name||s,v=new vt("vue-component-"+t.cid+(d?"-"+d:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:f,listeners:h,tag:s,children:a},u);return v}}}function Ze(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},i=t.data.inlineTemplate;return o(i)&&(n.render=i.render,n.staticRenderFns=i.staticRenderFns),new t.componentOptions.Ctor(n)}function Qe(t){for(var e=t.hook||(t.hook={}),n=0;n<Ke.length;n++){var i=Ke[n],o=e[i],r=Je[i];o===r||o&&o._merged||(e[i]=o?tn(r,o):r)}}function tn(t,e){var n=function(n,i){t(n,i),e(n,i)};return n._merged=!0,n}function en(t,e){var n=t.model&&t.model.prop||"value",i=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var r=e.on||(e.on={}),a=r[i],s=e.model.callback;o(a)?(Array.isArray(a)?-1===a.indexOf(s):a!==s)&&(r[i]=[s].concat(a)):r[i]=s}var nn=1,on=2;function rn(t,e,n,i,o,a){return(Array.isArray(n)||s(n))&&(o=i,i=n,n=void 0),r(a)&&(o=on),an(t,e,n,i,o)}function an(t,e,n,i,r){if(o(n)&&o(n.__ob__))return yt();if(o(n)&&o(n.is)&&(e=n.is),!e)return yt();var a,s,l;(Array.isArray(i)&&"function"===typeof i[0]&&(n=n||{},n.scopedSlots={default:i[0]},i.length=0),r===on?i=me(i):r===nn&&(i=xe(i)),"string"===typeof e)?(s=t.$vnode&&t.$vnode.ns||N.getTagNamespace(e),a=N.isReservedTag(e)?new vt(N.parsePlatformTagName(e),n,i,void 0,void 0,t):n&&n.pre||!o(l=Ut(t.$options,"components",e))?new vt(e,n,i,void 0,void 0,t):Ye(l,n,t,i,e)):a=Ye(e,n,t,i);return Array.isArray(a)?a:o(a)?(o(s)&&sn(a,s),o(n)&&ln(n),a):yt()}function sn(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),o(t.children))for(var a=0,s=t.children.length;a<s;a++){var l=t.children[a];o(l.tag)&&(i(l.ns)||r(n)&&"svg"!==l.tag)&&sn(l,e,n)}}function ln(t){l(t.style)&&fe(t.style),l(t.class)&&fe(t.class)}function cn(t){t._vnode=null,t._staticTrees=null;var e=t.$options,i=t.$vnode=e._parentVnode,o=i&&i.context;t.$slots=Se(e._renderChildren,o),t.$scopedSlots=n,t._c=function(e,n,i,o){return rn(t,e,n,i,o,!1)},t.$createElement=function(e,n,i,o){return rn(t,e,n,i,o,!0)};var r=i&&i.data;Et(t,"$attrs",r&&r.attrs||n,null,!0),Et(t,"$listeners",e._parentListeners||n,null,!0)}var un,fn=null;function hn(t){Ve(t.prototype),t.prototype.$nextTick=function(t){return ce(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,i=n.render,o=n._parentVnode;o&&(e.$scopedSlots=$e(o.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=o;try{fn=e,t=i.call(e._renderProxy,e.$createElement)}catch(no){Yt(no,e,"render"),t=e._vnode}finally{fn=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof vt||(t=yt()),t.parent=o,t}}function pn(t,e){return(t.__esModule||lt&&"Module"===t[Symbol.toStringTag])&&(t=t.default),l(t)?e.extend(t):t}function dn(t,e,n,i,o){var r=yt();return r.asyncFactory=t,r.asyncMeta={data:e,context:n,children:i,tag:o},r}function vn(t,e){if(r(t.error)&&o(t.errorComp))return t.errorComp;if(o(t.resolved))return t.resolved;var n=fn;if(n&&o(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),r(t.loading)&&o(t.loadingComp))return t.loadingComp;if(n&&!o(t.owners)){var a=t.owners=[n],s=!0,c=null,u=null;n.$on("hook:destroyed",function(){return x(a,n)});var f=function(t){for(var e=0,n=a.length;e<n;e++)a[e].$forceUpdate();t&&(a.length=0,null!==c&&(clearTimeout(c),c=null),null!==u&&(clearTimeout(u),u=null))},h=j(function(n){t.resolved=pn(n,e),s?a.length=0:f(!0)}),d=j(function(e){o(t.errorComp)&&(t.error=!0,f(!0))}),v=t(h,d);return l(v)&&(p(v)?i(t.resolved)&&v.then(h,d):p(v.component)&&(v.component.then(h,d),o(v.error)&&(t.errorComp=pn(v.error,e)),o(v.loading)&&(t.loadingComp=pn(v.loading,e),0===v.delay?t.loading=!0:c=setTimeout(function(){c=null,i(t.resolved)&&i(t.error)&&(t.loading=!0,f(!1))},v.delay||200)),o(v.timeout)&&(u=setTimeout(function(){u=null,i(t.resolved)&&d(null)},v.timeout)))),s=!1,t.loading?t.loadingComp:t.resolved}}function gn(t){return t.isComment&&t.asyncFactory}function yn(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(o(n)&&(o(n.componentOptions)||gn(n)))return n}}function xn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&An(t,e)}function mn(t,e){un.$on(t,e)}function _n(t,e){un.$off(t,e)}function bn(t,e){var n=un;return function i(){var o=e.apply(null,arguments);null!==o&&n.$off(t,i)}}function An(t,e,n){un=t,ve(e,n||{},mn,_n,bn,t),un=void 0}function wn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var i=this;if(Array.isArray(t))for(var o=0,r=t.length;o<r;o++)i.$on(t[o],n);else(i._events[t]||(i._events[t]=[])).push(n),e.test(t)&&(i._hasHookEvent=!0);return i},t.prototype.$once=function(t,e){var n=this;function i(){n.$off(t,i),e.apply(n,arguments)}return i.fn=e,n.$on(t,i),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var i=0,o=t.length;i<o;i++)n.$off(t[i],e);return n}var r,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;var s=a.length;while(s--)if(r=a[s],r===e||r.fn===e){a.splice(s,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?E(n):n;for(var i=E(arguments,1),o='event handler for "'+t+'"',r=0,a=n.length;r<a;r++)Zt(n[r],e,i,e,o)}return e}}var Pn=null;function Sn(t){var e=Pn;return Pn=t,function(){Pn=e}}function Tn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function $n(t){t.prototype._update=function(t,e){var n=this,i=n.$el,o=n._vnode,r=Sn(n);n._vnode=t,n.$el=o?n.__patch__(o,t):n.__patch__(n.$el,t,e,!1),r(),i&&(i.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Cn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||x(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Cn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function On(t,e,i,o,r){var a=o.data.scopedSlots,s=t.$scopedSlots,l=!!(a&&!a.$stable||s!==n&&!s.$stable||a&&t.$scopedSlots.$key!==a.$key),c=!!(r||t.$options._renderChildren||l);if(t.$options._parentVnode=o,t.$vnode=o,t._vnode&&(t._vnode.parent=o),t.$options._renderChildren=r,t.$attrs=o.data.attrs||n,t.$listeners=i||n,e&&t.$options.props){St(!1);for(var u=t._props,f=t.$options._propKeys||[],h=0;h<f.length;h++){var p=f[h],d=t.$options.props;u[p]=Gt(p,d,e,t)}St(!0),t.$options.propsData=e}i=i||n;var v=t.$options._parentListeners;t.$options._parentListeners=i,An(t,i,v),c&&(t.$slots=Se(r,o.context),t.$forceUpdate())}function kn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function En(t,e){if(e){if(t._directInactive=!1,kn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)En(t.$children[n]);Cn(t,"activated")}}function Mn(t,e){if((!e||(t._directInactive=!0,!kn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Mn(t.$children[n]);Cn(t,"deactivated")}}function Cn(t,e){pt();var n=t.$options[e],i=e+" hook";if(n)for(var o=0,r=n.length;o<r;o++)Zt(n[o],t,null,t,i);t._hasHookEvent&&t.$emit("hook:"+e),dt()}var Ln=[],Fn=[],Rn={},Dn=!1,In=!1,jn=0;function Hn(){jn=Ln.length=Fn.length=0,Rn={},Dn=In=!1}var zn=Date.now;if(J&&!Q){var Nn=window.performance;Nn&&"function"===typeof Nn.now&&zn()>document.createEvent("Event").timeStamp&&(zn=function(){return Nn.now()})}function Bn(){var t,e;for(zn(),In=!0,Ln.sort(function(t,e){return t.id-e.id}),jn=0;jn<Ln.length;jn++)t=Ln[jn],t.before&&t.before(),e=t.id,Rn[e]=null,t.run();var n=Fn.slice(),i=Ln.slice();Hn(),Un(n),Wn(i),rt&&N.devtools&&rt.emit("flush")}function Wn(t){var e=t.length;while(e--){var n=t[e],i=n.vm;i._watcher===n&&i._isMounted&&!i._isDestroyed&&Cn(i,"updated")}}function Vn(t){t._inactive=!1,Fn.push(t)}function Un(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,En(t[e],!0)}function Gn(t){var e=t.id;if(null==Rn[e]){if(Rn[e]=!0,In){var n=Ln.length-1;while(n>jn&&Ln[n].id>t.id)n--;Ln.splice(n+1,0,t)}else Ln.push(t);Dn||(Dn=!0,ce(Bn))}}var Xn=0,qn=function(t,e,n,i,o){this.vm=t,o&&(t._watcher=this),t._watchers.push(this),i?(this.deep=!!i.deep,this.user=!!i.user,this.lazy=!!i.lazy,this.sync=!!i.sync,this.before=i.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Xn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new st,this.newDepIds=new st,this.expression="","function"===typeof e?this.getter=e:(this.getter=G(e),this.getter||(this.getter=L)),this.value=this.lazy?void 0:this.get()};qn.prototype.get=function(){var t;pt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(no){if(!this.user)throw no;Yt(no,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&fe(t),dt(),this.cleanupDeps()}return t},qn.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},qn.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},qn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Gn(this)},qn.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||l(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(no){Yt(no,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},qn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},qn.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},qn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||x(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var Jn={enumerable:!0,configurable:!0,get:L,set:L};function Kn(t,e,n){Jn.get=function(){return this[e][n]},Jn.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Jn)}function Yn(t){t._watchers=[];var e=t.$options;e.props&&Zn(t,e.props),e.methods&&ai(t,e.methods),e.data?Qn(t):kt(t._data={},!0),e.computed&&ni(t,e.computed),e.watch&&e.watch!==nt&&si(t,e.watch)}function Zn(t,e){var n=t.$options.propsData||{},i=t._props={},o=t.$options._propKeys=[],r=!t.$parent;r||St(!1);var a=function(r){o.push(r);var a=Gt(r,e,n,t);Et(i,r,a),r in t||Kn(t,"_props",r)};for(var s in e)a(s);St(!0)}function Qn(t){var e=t.$options.data;e=t._data="function"===typeof e?ti(e,t):e||{},u(e)||(e={});var n=Object.keys(e),i=t.$options.props,o=(t.$options.methods,n.length);while(o--){var r=n[o];0,i&&_(i,r)||W(r)||Kn(t,"_data",r)}kt(e,!0)}function ti(t,e){pt();try{return t.call(e,e)}catch(no){return Yt(no,e,"data()"),{}}finally{dt()}}var ei={lazy:!0};function ni(t,e){var n=t._computedWatchers=Object.create(null),i=ot();for(var o in e){var r=e[o],a="function"===typeof r?r:r.get;0,i||(n[o]=new qn(t,a||L,L,ei)),o in t||ii(t,o,r)}}function ii(t,e,n){var i=!ot();"function"===typeof n?(Jn.get=i?oi(e):ri(n),Jn.set=L):(Jn.get=n.get?i&&!1!==n.cache?oi(e):ri(n.get):L,Jn.set=n.set||L),Object.defineProperty(t,e,Jn)}function oi(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),ft.target&&e.depend(),e.value}}function ri(t){return function(){return t.call(this,this)}}function ai(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?L:k(e[n],t)}function si(t,e){for(var n in e){var i=e[n];if(Array.isArray(i))for(var o=0;o<i.length;o++)li(t,n,i[o]);else li(t,n,i)}}function li(t,e,n,i){return u(n)&&(i=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,i)}function ci(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Mt,t.prototype.$delete=Ct,t.prototype.$watch=function(t,e,n){var i=this;if(u(e))return li(i,t,e,n);n=n||{},n.user=!0;var o=new qn(i,t,e,n);if(n.immediate)try{e.call(i,o.value)}catch(r){Yt(r,i,'callback for immediate watcher "'+o.expression+'"')}return function(){o.teardown()}}}var ui=0;function fi(t){t.prototype._init=function(t){var e=this;e._uid=ui++,e._isVue=!0,t&&t._isComponent?hi(e,t):e.$options=Vt(pi(e.constructor),t||{},e),e._renderProxy=e,e._self=e,Tn(e),xn(e),cn(e),Cn(e,"beforeCreate"),"mp-toutiao"!==e.mpHost&&we(e),Yn(e),"mp-toutiao"!==e.mpHost&&Ae(e),"mp-toutiao"!==e.mpHost&&Cn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function hi(t,e){var n=t.$options=Object.create(t.constructor.options),i=e._parentVnode;n.parent=e.parent,n._parentVnode=i;var o=i.componentOptions;n.propsData=o.propsData,n._parentListeners=o.listeners,n._renderChildren=o.children,n._componentTag=o.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function pi(t){var e=t.options;if(t.super){var n=pi(t.super),i=t.superOptions;if(n!==i){t.superOptions=n;var o=di(t);o&&M(t.extendOptions,o),e=t.options=Vt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function di(t){var e,n=t.options,i=t.sealedOptions;for(var o in n)n[o]!==i[o]&&(e||(e={}),e[o]=n[o]);return e}function vi(t){this._init(t)}function gi(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=E(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function yi(t){t.mixin=function(t){return this.options=Vt(this.options,t),this}}function xi(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,i=n.cid,o=t._Ctor||(t._Ctor={});if(o[i])return o[i];var r=t.name||n.options.name;var a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=Vt(n.options,t),a["super"]=n,a.options.props&&mi(a),a.options.computed&&_i(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,H.forEach(function(t){a[t]=n[t]}),r&&(a.options.components[r]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=M({},a.options),o[i]=a,a}}function mi(t){var e=t.options.props;for(var n in e)Kn(t.prototype,"_props",n)}function _i(t){var e=t.options.computed;for(var n in e)ii(t.prototype,n,e[n])}function bi(t){H.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&u(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function Ai(t){return t&&(t.Ctor.options.name||t.tag)}function wi(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!f(t)&&t.test(e)}function Pi(t,e){var n=t.cache,i=t.keys,o=t._vnode;for(var r in n){var a=n[r];if(a){var s=Ai(a.componentOptions);s&&!e(s)&&Si(n,r,i,o)}}}function Si(t,e,n,i){var o=t[e];!o||i&&o.tag===i.tag||o.componentInstance.$destroy(),t[e]=null,x(n,e)}fi(vi),ci(vi),wn(vi),$n(vi),hn(vi);var Ti=[String,RegExp,Array],$i={name:"keep-alive",abstract:!0,props:{include:Ti,exclude:Ti,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Si(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",function(e){Pi(t,function(t){return wi(e,t)})}),this.$watch("exclude",function(e){Pi(t,function(t){return!wi(e,t)})})},render:function(){var t=this.$slots.default,e=yn(t),n=e&&e.componentOptions;if(n){var i=Ai(n),o=this,r=o.include,a=o.exclude;if(r&&(!i||!wi(r,i))||a&&i&&wi(a,i))return e;var s=this,l=s.cache,c=s.keys,u=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;l[u]?(e.componentInstance=l[u].componentInstance,x(c,u),c.push(u)):(l[u]=e,c.push(u),this.max&&c.length>parseInt(this.max)&&Si(l,c[0],c,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}},Oi={KeepAlive:$i};function ki(t){var e={get:function(){return N}};Object.defineProperty(t,"config",e),t.util={warn:ct,extend:M,mergeOptions:Vt,defineReactive:Et},t.set=Mt,t.delete=Ct,t.nextTick=ce,t.observable=function(t){return kt(t),t},t.options=Object.create(null),H.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,M(t.options.components,Oi),gi(t),yi(t),xi(t),bi(t)}ki(vi),Object.defineProperty(vi.prototype,"$isServer",{get:ot}),Object.defineProperty(vi.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(vi,"FunctionalRenderContext",{value:Ue}),vi.version="2.6.10";var Ei="[object Array]",Mi="[object Object]";function Ci(t,e){var n={};return Li(t,e),Fi(t,e,"",n),n}function Li(t,e){if(t!==e){var n=Di(t),i=Di(e);if(n==Mi&&i==Mi){if(Object.keys(t).length>=Object.keys(e).length)for(var o in e){var r=t[o];void 0===r?t[o]=null:Li(r,e[o])}}else n==Ei&&i==Ei&&t.length>=e.length&&e.forEach(function(e,n){Li(t[n],e)})}}function Fi(t,e,n,i){if(t!==e){var o=Di(t),r=Di(e);if(o==Mi)if(r!=Mi||Object.keys(t).length<Object.keys(e).length)Ri(i,n,t);else{var a=function(o){var r=t[o],a=e[o],s=Di(r),l=Di(a);if(s!=Ei&&s!=Mi)r!=e[o]&&Ri(i,(""==n?"":n+".")+o,r);else if(s==Ei)l!=Ei?Ri(i,(""==n?"":n+".")+o,r):r.length<a.length?Ri(i,(""==n?"":n+".")+o,r):r.forEach(function(t,e){Fi(t,a[e],(""==n?"":n+".")+o+"["+e+"]",i)});else if(s==Mi)if(l!=Mi||Object.keys(r).length<Object.keys(a).length)Ri(i,(""==n?"":n+".")+o,r);else for(var c in r)Fi(r[c],a[c],(""==n?"":n+".")+o+"."+c,i)};for(var s in t)a(s)}else o==Ei?r!=Ei?Ri(i,n,t):t.length<e.length?Ri(i,n,t):t.forEach(function(t,o){Fi(t,e[o],n+"["+o+"]",i)}):Ri(i,n,t)}}function Ri(t,e,n){t[e]=n}function Di(t){return Object.prototype.toString.call(t)}function Ii(t){if(t.__next_tick_callbacks&&t.__next_tick_callbacks.length){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var e=t.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+t._uid+"]:flushCallbacks["+t.__next_tick_callbacks.length+"]")}var n=t.__next_tick_callbacks.slice(0);t.__next_tick_callbacks.length=0;for(var i=0;i<n.length;i++)n[i]()}}function ji(t){return Ln.find(function(e){return t._watcher===e})}function Hi(t,e){if(!t.__next_tick_pending&&!ji(t)){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var n=t.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+t._uid+"]:nextVueTick")}return ce(e,t)}if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var i=t.$scope;console.log("["+ +new Date+"]["+(i.is||i.route)+"]["+t._uid+"]:nextMPTick")}var o;if(t.__next_tick_callbacks||(t.__next_tick_callbacks=[]),t.__next_tick_callbacks.push(function(){if(e)try{e.call(t)}catch(no){Yt(no,t,"nextTick")}else o&&o(t)}),!e&&"undefined"!==typeof Promise)return new Promise(function(t){o=t})}function zi(t){var e=[].concat(Object.keys(t._data||{}),Object.keys(t._computedWatchers||{})),n=e.reduce(function(e,n){return e[n]=t[n],e},Object.create(null));return Object.assign(n,t.$mp.data||{}),Array.isArray(t.$options.behaviors)&&-1!==t.$options.behaviors.indexOf("uni://form-field")&&(n["name"]=t.name,n["value"]=t.value),JSON.parse(JSON.stringify(n))}var Ni=function(t,e){var n=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var i=this.$scope,o=zi(this);o.__webviewId__=i.data.__webviewId__;var r=Object.create(null);Object.keys(o).forEach(function(t){r[t]=i.data[t]});var a=Ci(o,r);Object.keys(a).length?(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(i.is||i.route)+"]["+this._uid+"]差量更新",JSON.stringify(a)),this.__next_tick_pending=!0,i.setData(a,function(){n.__next_tick_pending=!1,Ii(n)})):Ii(this)}};function Bi(){}function Wi(t,e,n){if(!t.mpType)return t;"app"===t.mpType&&(t.$options.render=Bi),t.$options.render||(t.$options.render=Bi),"mp-toutiao"!==t.mpHost&&Cn(t,"beforeMount");var i=function(){t._update(t._render(),n)};return new qn(t,i,L,{before:function(){t._isMounted&&!t._isDestroyed&&Cn(t,"beforeUpdate")}},!0),n=!1,t}function Vi(t,e){return o(t)||o(e)?Ui(t,Gi(e)):""}function Ui(t,e){return t?e?t+" "+e:t:e||""}function Gi(t){return Array.isArray(t)?Xi(t):l(t)?qi(t):"string"===typeof t?t:""}function Xi(t){for(var e,n="",i=0,r=t.length;i<r;i++)o(e=Gi(t[i]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function qi(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var Ji=b(function(t){var e={},n=/;(?![^(]*\))/g,i=/:(.+)/;return t.split(n).forEach(function(t){if(t){var n=t.split(i);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e});function Ki(t){return Array.isArray(t)?C(t):"string"===typeof t?Ji(t):t}var Yi=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Zi(t,e){var n=e.split("."),i=n[0];return 0===i.indexOf("__$n")&&(i=parseInt(i.replace("__$n",""))),1===n.length?t[i]:Zi(t[i],n.slice(1).join("."))}function Qi(t){var e=t.prototype.$emit;t.prototype.$emit=function(t){return this.$scope&&t&&this.$scope["triggerEvent"](t,{__args__:E(arguments,1)}),e.apply(this,arguments)},t.prototype.$nextTick=function(t){return Hi(this,t)},Yi.forEach(function(e){t.prototype[e]=function(t){if(this.$scope)return this.$scope[e](t)}}),t.prototype.__init_provide=Ae,t.prototype.__init_injections=we,t.prototype.__call_hook=function(t,e){var n=this;pt();var i,o=n.$options[t],r=t+" hook";if(o)for(var a=0,s=o.length;a<s;a++)i=Zt(o[a],n,e?[e]:null,n,r);return n._hasHookEvent&&n.$emit("hook:"+t),dt(),i},t.prototype.__set_model=function(t,e,n,i){Array.isArray(i)&&(-1!==i.indexOf("trim")&&(n=n.trim()),-1!==i.indexOf("number")&&(n=this._n(n))),t||(t=this),t[e]=n},t.prototype.__set_sync=function(t,e,n){t||(t=this),t[e]=n},t.prototype.__get_orig=function(t){return u(t)&&t["$orig"]||t},t.prototype.__get_value=function(t,e){return Zi(e||this,t)},t.prototype.__get_class=function(t,e){return Vi(e,t)},t.prototype.__get_style=function(t,e){if(!t&&!e)return"";var n=Ki(t),i=e?M(e,n):n;return Object.keys(i).map(function(t){return T(t)+":"+i[t]}).join(";")}}var to=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function eo(t){var e=t.extend;t.extend=function(t){t=t||{};var n=t.methods;return n&&Object.keys(n).forEach(function(e){-1!==to.indexOf(e)&&(t[e]=n[e],delete n[e])}),e.call(this,t)};var n=t.config.optionMergeStrategies,i=n.created;to.forEach(function(t){n[t]=i}),t.prototype.__lifecycle_hooks__=to}vi.prototype.__patch__=Ni,vi.prototype.$mount=function(t,e){return Wi(this,t,e)},eo(vi),Qi(vi),e["default"]=vi}.call(this,n("c8ba"))},"6e42":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=Wt,e.createPage=Zt,e.createComponent=Qt,e.default=void 0;var i=o(n("66fd"));function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){return l(t)||s(t,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){var n=[],i=!0,o=!1,r=void 0;try{for(var a,s=t[Symbol.iterator]();!(i=(a=s.next()).done);i=!0)if(n.push(a.value),e&&n.length===e)break}catch(l){o=!0,r=l}finally{try{i||null==s["return"]||s["return"]()}finally{if(o)throw r}}return n}function l(t){if(Array.isArray(t))return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u=Object.prototype.toString,f=Object.prototype.hasOwnProperty;function h(t){return"function"===typeof t}function p(t){return"string"===typeof t}function d(t){return"[object Object]"===u.call(t)}function v(t,e){return f.call(t,e)}function g(){}function y(t){var e=Object.create(null);return function(n){var i=e[n];return i||(e[n]=t(n))}}var x=/-(\w)/g,m=y(function(t){return t.replace(x,function(t,e){return e?e.toUpperCase():""})}),_=/^\$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,b=/^create|Manager$/,A=/^on/;function w(t){return b.test(t)}function P(t){return _.test(t)}function S(t){return A.test(t)}function T(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function $(t){return!(w(t)||P(t)||S(t))}function O(t,e){return $(t)?function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length,i=new Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];return h(t.success)||h(t.fail)||h(t.complete)?e.apply(void 0,[t].concat(i)):T(new Promise(function(n,o){e.apply(void 0,[Object.assign({},t,{success:n,fail:o})].concat(i)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})})}))}:e}var k=1e-4,E=750,M=!1,C=0,L=0;function F(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,i=t.windowWidth;C=i,L=n,M="ios"===e}function R(t,e){if(0===C&&F(),t=Number(t),0===t)return 0;var n=t/E*(e||C);return n<0&&(n=-n),n=Math.floor(n+k),0===n?1!==L&&M?.5:1:t<0?-n:n}var D={},I=[],j=[],H=["success","fail","cancel","complete"];function z(t,e,n){return function(i){return e(B(t,i,n))}}function N(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(d(e)){var r=!0===o?e:{};for(var a in h(n)&&(n=n(e,r)||{}),e)if(v(n,a)){var s=n[a];h(s)&&(s=s(e[a],e,r)),s?p(s)?r[s]=e[a]:d(s)&&(r[s.name?s.name:a]=s.value):console.warn("app-plus ".concat(t,"暂不支持").concat(a))}else-1!==H.indexOf(a)?r[a]=z(t,e[a],i):o||(r[a]=e[a]);return r}return h(e)&&(e=z(t,e,i)),e}function B(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return h(D.returnValue)&&(e=D.returnValue(t,e)),N(t,e,n,{},i)}function W(t,e){if(v(D,t)){var n=D[t];return n?function(e,i){var o=n;h(n)&&(o=n(e)),e=N(t,e,o.args,o.returnValue);var r=[e];"undefined"!==typeof i&&r.push(i);var a=wx[o.name||t].apply(wx,r);return P(t)?B(t,a,o.returnValue,w(t)):a}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var V=Object.create(null),U=["subscribePush","unsubscribePush","onPush","offPush","share"];function G(t){return function(e){var n=e.fail,i=e.complete,o={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};h(n)&&n(o),h(i)&&i(o)}}U.forEach(function(t){V[t]=G(t)});var X=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new i.default),t};var t}();function q(t,e,n){return t[e].apply(t,n)}function J(){return q(X(),"$on",Array.prototype.slice.call(arguments))}function K(){return q(X(),"$off",Array.prototype.slice.call(arguments))}function Y(){return q(X(),"$once",Array.prototype.slice.call(arguments))}function Z(){return q(X(),"$emit",Array.prototype.slice.call(arguments))}var Q=Object.freeze({$on:J,$off:K,$once:Y,$emit:Z});function tt(t){t.$processed=!0,t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},t.id)};var e=[];if(t.onMessage=function(t){e.push(t)},t.$consumeMessage=function(t){e.forEach(function(e){return e(t)})},t.__uniapp_mask_id){var n=t.__uniapp_mask,i=plus.webview.getWebviewById(t.__uniapp_mask_id);i=i.parent()||i;var o=t.show,r=t.hide,a=t.close,s=function(){i.setStyle({mask:n})},l=function(){i.setStyle({mask:"none"})};t.show=function(){s();for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return o.apply(t,n)},t.hide=function(){l();for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return r.apply(t,n)},t.close=function(){l(),e=[];for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return a.apply(t,i)}}}function et(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&tt(e),e}function nt(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}var it=Object.freeze({requireNativePlugin:nt,getSubNVueById:et}),ot=Page,rt=Component,at=/:/g,st=y(function(t){return m(t.replace(at,"-"))});function lt(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var i=arguments.length,o=new Array(i>1?i-1:0),r=1;r<i;r++)o[r-1]=arguments[r];return e.apply(t,[st(n)].concat(o))}}}function ct(t,e){var n=e[t];e[t]=n?function(){lt(this);for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return n.apply(this,e)}:function(){lt(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return ct("onLoad",t),ot(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return ct("created",t),rt(t)};var ut=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function ft(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){v(n,e)&&(t[e]=n[e])})}function ht(t,e){e.forEach(function(e){t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)}})}function pt(t,e){var n;return e=e.default||e,h(e)?(n=e,e=n.extendOptions):n=t.extend(e),[n,e]}function dt(t,e){if(Array.isArray(e)&&e.length){var n=Object.create(null);e.forEach(function(t){n[t]=!0}),t.$scopedSlots=t.$slots=n}}function vt(t,e){t=(t||"").split(",");var n=t.length;1===n?e._$vueId=t[0]:2===n&&(e._$vueId=t[0],e._$vuePid=t[1])}function gt(t,e){var n=t.data||{},i=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(o){Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(o){}return d(n)||(n={}),Object.keys(i).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||v(n,t)||(n[t]=i[t])}),n}var yt=[String,Number,Boolean,Object,Array,null];function xt(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function mt(t,e){var n=t["behaviors"],i=t["extends"],o=t["mixins"],r=t["props"];r||(t["props"]=r=[]);var a=[];return Array.isArray(n)&&n.forEach(function(t){a.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(r)?(r.push("name"),r.push("value")):(r["name"]=String,r["value"]=null))}),d(i)&&i.props&&a.push(e({properties:bt(i.props,!0)})),Array.isArray(o)&&o.forEach(function(t){d(t)&&t.props&&a.push(e({properties:bt(t.props,!0)}))}),a}function _t(t,e,n,i){return Array.isArray(e)&&1===e.length?e[0]:e}function bt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i={};return e||(i.vueId={type:String,value:""},i.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){i[t]={type:null,observer:xt(t)}}):d(t)&&Object.keys(t).forEach(function(e){var o=t[e];if(d(o)){var r=o["default"];h(r)&&(r=r()),o.type=_t(e,o.type,r,n),i[e]={type:-1!==yt.indexOf(o.type)?o.type:null,value:r,observer:xt(e)}}else{var a=_t(e,o,null,n);i[e]={type:-1!==yt.indexOf(a)?a:null,observer:xt(e)}}}),i}function At(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=g,t.preventDefault=g,t.target=t.target||{},v(t,"detail")||(t.detail={}),d(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function wt(t,e){var n=t;return e.forEach(function(e){var i=e[0],o=e[2];if(i||"undefined"!==typeof o){var r=e[1],a=e[3],s=i?t.__get_value(i,n):n;Number.isInteger(s)?n=o:r?Array.isArray(s)?n=s.find(function(e){return t.__get_value(r,e)===o}):d(s)?n=Object.keys(s).find(function(e){return t.__get_value(r,s[e])===o}):console.error("v-for 暂不支持循环数据：",s):n=s[o],a&&(n=t.__get_value(a,n))}}),n}function Pt(t,e,n){var i={};return Array.isArray(e)&&e.length&&e.forEach(function(e,o){"string"===typeof e?e?"$event"===e?i["$"+o]=n:0===e.indexOf("$event.")?i["$"+o]=t.__get_value(e.replace("$event.",""),n):i["$"+o]=t.__get_value(e):i["$"+o]=t:i["$"+o]=wt(t,e)}),i}function St(t){for(var e={},n=1;n<t.length;n++){var i=t[n];e[i[0]]=i[1]}return e}function Tt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4?arguments[4]:void 0,r=arguments.length>5?arguments[5]:void 0,a=!1;if(o&&(a=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return a?[e]:e.detail.__args__||e.detail;var s=Pt(t,i,e),l=[];return n.forEach(function(t){"$event"===t?"__set_model"!==r||o?o&&!a?l.push(e.detail.__args__[0]):l.push(e):l.push(e.target.value):Array.isArray(t)&&"o"===t[0]?l.push(St(t)):"string"===typeof t&&v(s,t)?l.push(s[t]):l.push(t)}),l}var $t="~",Ot="^";function kt(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}function Et(t){var e=this;t=At(t);var n=(t.currentTarget||t.target).dataset.eventOpts;if(!n)return console.warn("事件信息不存在");var i=t.type;n.forEach(function(n){var o=n[0],r=n[1],a=o.charAt(0)===Ot;o=a?o.slice(1):o;var s=o.charAt(0)===$t;o=s?o.slice(1):o,r&&kt(i,o)&&r.forEach(function(n){var i=n[0];if(i){var o=e.$vm;o.$options.generic&&o.$parent&&o.$parent.$parent&&(o=o.$parent.$parent);var r=o[i];if(!h(r))throw new Error(" _vm.".concat(i," is not a function"));if(s){if(r.once)return;r.once=!0}r.apply(o,Tt(e.$vm,t,n[1],n[2],a,i))}})})}var Mt=["onShow","onHide","onError","onPageNotFound"];function Ct(t,e){var n=e.mocks,o=e.initRefs;i.default.prototype.mpHost="app-plus",i.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=c({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(o(this),ft(this,n)))}});var r={onLaunch:function(e){this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e)}};return r.globalData=t.$options.globalData||{},ht(r,Mt),r}var Lt=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function Ft(t,e){var n=t.$children,i=n.find(function(t){return t.$scope._$vueId===e});if(i)return i;for(var o=n.length-1;o>=0;o--)if(i=Ft(n[o],e),i)return i}function Rt(t){return Behavior(t)}function Dt(){return!!this.route}function It(t){this.triggerEvent("__l",t)}function jt(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var i=e.selectAllComponents(".vue-ref-in-for");return i.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}function Ht(t){var e,n=t.detail||t.value,i=n.vuePid,o=n.vueOptions;i&&(e=Ft(this.$vm,i)),e||(e=this.$vm),o.parent=e}function zt(t){return Ct(t,{mocks:Lt,initRefs:jt})}var Nt=["onUniNViewMessage"];function Bt(t){var e=zt(t);return ht(e,Nt),e}function Wt(t){return App(Bt(t)),t}function Vt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isPage,o=e.initRelation,a=pt(i.default,t),s=r(a,2),l=s[0],c=s[1],u={options:{multipleSlots:!0,addGlobalClass:!0},data:gt(c,i.default.prototype),behaviors:mt(c,Rt),properties:bt(c.props,!1,c.__file),lifetimes:{attached:function(){var t=this.properties,e={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:t};vt(t.vueId,this),o.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new l(e),dt(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:Ht,__e:Et}};return n?u:[u,l]}function Ut(t){return Vt(t,{isPage:Dt,initRelation:It})}function Gt(t){var e=Ut(t);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var Xt=["onShow","onHide","onUnload"];function qt(t,e){var n=e.isPage,i=e.initRelation,o=Gt(t,{isPage:n,initRelation:i});return ht(o.methods,Xt),o.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},o}function Jt(t){return qt(t,{isPage:Dt,initRelation:It})}Xt.push.apply(Xt,ut);var Kt=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function Yt(t){var e=Jt(t);return ht(e.methods,Kt),e}function Zt(t){return Component(Yt(t))}function Qt(t){return Component(Gt(t))}I.forEach(function(t){D[t]=!1}),j.forEach(function(t){var e=D[t]&&D[t].name?D[t].name:t;wx.canIUse(e)||(D[t]=!1)});var te={};"undefined"!==typeof Proxy?te=new Proxy({},{get:function(t,e){return"upx2px"===e?R:it[e]?O(e,it[e]):Q[e]?Q[e]:v(wx,e)||v(D,e)?O(e,W(e,wx[e])):void 0}}):(te.upx2px=R,Object.keys(Q).forEach(function(t){te[t]=Q[t]}),Object.keys(it).forEach(function(t){te[t]=O(t,it[t])}),Object.keys(wx).forEach(function(t){(v(wx,t)||v(D,t))&&(te[t]=O(t,W(t,wx[t])))})),"undefined"!==typeof t&&(t.UniEmitter=Q),wx.createApp=Wt,wx.createPage=Zt,wx.createComponent=Qt;var ee=te,ne=ee;e.default=ne}).call(this,n("c8ba"))},"71d1":function(t,e,n){"use strict";(function(t){n("8fd2");i(n("66fd"));var e=i(n("9aab"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"8b59":function(t,e,n){"use strict";(function(t){n("8fd2");i(n("66fd"));var e=i(n("8afa"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"8fd2":function(t,e,n){},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(i){"object"===typeof window&&(n=window)}t.exports=n},db40:function(t,e,n){"use strict";(function(e){var n={yAxisWidth:15,yAxisSplit:5,xAxisHeight:15,xAxisLineHeight:15,legendHeight:15,yAxisTitleWidth:15,padding:12,pixelRatio:1,rotate:!1,columePadding:3,fontSize:13,dataPointShape:["circle","circle","circle","circle"],colors:["#1890ff","#2fc25b","#facc14","#f04864","#8543e0","#90ed7d"],pieChartLinePadding:15,pieChartTextPadding:5,xAxisTextPadding:3,titleColor:"#333333",titleFontSize:20,subtitleColor:"#999999",subtitleFontSize:15,toolTipPadding:3,toolTipBackground:"#000000",toolTipOpacity:.7,toolTipLineHeight:20,radarGridCount:3,radarLabelTextMargin:15,gaugeLabelTextMargin:15};function i(t,e){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(t),i=1;i<arguments.length;i++){var o=arguments[i];if(null!=o)for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(n[r]=o[r])}return n}var o={toFixed:function(t,e){return e=e||2,this.isFloat(t)&&(t=t.toFixed(e)),t},isFloat:function(t){return t%1!==0},approximatelyEqual:function(t,e){return Math.abs(t-e)<1e-10},isSameSign:function(t,e){return Math.abs(t)===t&&Math.abs(e)===e||Math.abs(t)!==t&&Math.abs(e)!==e},isSameXCoordinateArea:function(t,e){return this.isSameSign(t.x,e.x)},isCollision:function(t,e){t.end={},t.end.x=t.start.x+t.width,t.end.y=t.start.y-t.height,e.end={},e.end.x=e.start.x+e.width,e.end.y=e.start.y-e.height;var n=e.start.x>t.end.x||e.end.x<t.start.x||e.end.y>t.start.y||e.start.y<t.end.y;return!n}};function r(t,e){var n=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,i=t.replace(n,function(t,e,n,i){return e+e+n+n+i+i}),o=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(i),r=parseInt(o[1],16),a=parseInt(o[2],16),s=parseInt(o[3],16);return"rgba("+r+","+a+","+s+","+e+")"}function a(t,e,n){if(isNaN(t))throw new Error("[wxCharts] unvalid series data!");n=n||10,e=e||"upper";var i=1;while(n<1)n*=10,i*=10;t="upper"===e?Math.ceil(t*i):Math.floor(t*i);while(t%n!==0)"upper"===e?t++:t--;return t/i}function s(t,e,n,i){var o=i.width-n.padding-e.xAxisPoints[0],r=e.eachSpacing*i.categories.length,a=t;return t>=0?a=0:Math.abs(t)>=r-o&&(a=o-r),a}function l(t,e,n){function i(t){while(t<0)t+=2*Math.PI;while(t>2*Math.PI)t-=2*Math.PI;return t}return t=i(t),e=i(e),n=i(n),e>n&&(n+=2*Math.PI,t<e&&(t+=2*Math.PI)),t>=e&&t<=n}function c(t,e,n){var i=t,o=n-e,r=i+(n-o-i)/Math.sqrt(2);r*=-1;var a=(n-o)*(Math.sqrt(2)-1)-(n-o-i)/Math.sqrt(2);return{transX:r,transY:a}}function u(t,e){function n(t,e){return!(!t[e-1]||!t[e+1])&&(t[e].y>=Math.max(t[e-1].y,t[e+1].y)||t[e].y<=Math.min(t[e-1].y,t[e+1].y))}var i=.2,o=.2,r=null,a=null,s=null,l=null;if(e<1?(r=t[0].x+(t[1].x-t[0].x)*i,a=t[0].y+(t[1].y-t[0].y)*i):(r=t[e].x+(t[e+1].x-t[e-1].x)*i,a=t[e].y+(t[e+1].y-t[e-1].y)*i),e>t.length-3){var c=t.length-1;s=t[c].x-(t[c].x-t[c-1].x)*o,l=t[c].y-(t[c].y-t[c-1].y)*o}else s=t[e+1].x-(t[e+2].x-t[e].x)*o,l=t[e+1].y-(t[e+2].y-t[e].y)*o;return n(t,e+1)&&(l=t[e+1].y),n(t,e)&&(a=t[e].y),{ctrA:{x:r,y:a},ctrB:{x:s,y:l}}}function f(t,e,n){return{x:n.x+t,y:n.y-e}}function h(t,e){if(e)while(o.isCollision(t,e))t.start.x>0?t.start.y--:t.start.x<0?t.start.y++:t.start.y>0?t.start.y++:t.start.y--;return t}function p(t,e){var n=0;return t.map(function(t){return t.color||(t.color=e.colors[n],n=(n+1)%e.colors.length),t})}function d(t,e){return t.map(function(t){return t.type||(t.type=e.type),t})}function v(t,e){var n=0,i=e-t;return n=i>=1e4?1e3:i>=1e3?100:i>=100?10:i>=10?5:i>=1?1:i>=.1?.1:.01,{minRange:a(t,"lower",n),maxRange:a(e,"upper",n)}}function g(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.fontSize;t=String(t);t=t.split("");var i=0;return t.forEach(function(t){/[a-zA-Z]/.test(t)?i+=7:/[0-9]/.test(t)?i+=5.5:/\./.test(t)?i+=2.7:/-/.test(t)?i+=3.25:/[\u4e00-\u9fa5]/.test(t)?i+=10:/\(|\)/.test(t)?i+=3.73:/\s/.test(t)?i+=2.5:/%/.test(t)?i+=8:i+=10}),i*e/10}function y(t){return t.reduce(function(t,e){return(t.data?t.data:t).concat(e.data)},[])}function x(t){for(var e=new Array(t[0].data.length),n=0;n<e.length;n++)e[n]=0;for(var i=0;i<t.length;i++)for(n=0;n<e.length;n++)e[n]+=t[i].data[n];return t.reduce(function(t,n){return(t.data?t.data:t).concat(n.data).concat(e)},[])}function m(t,e,n){var i,o;return t.clientX?e.rotate?(o=e.height-t.clientX*e.pixelRatio,i=(t.pageY-n.mp.currentTarget.offsetTop-e.height/e.pixelRatio/2*(e.pixelRatio-1))*e.pixelRatio):(i=t.clientX*e.pixelRatio,o=(t.pageY-n.mp.currentTarget.offsetTop-e.height/e.pixelRatio/2*(e.pixelRatio-1))*e.pixelRatio):e.rotate?(o=e.height-t.x*e.pixelRatio,i=t.y*e.pixelRatio):(i=t.x*e.pixelRatio,o=t.y*e.pixelRatio),{x:i,y:o}}function _(t,e){var n=[];return t.forEach(function(t){if(null!==t.data[e]&&"undefined"!==typeof t.data[e]){var i={};i.color=t.color,i.name=t.name,i.data=t.format?t.format(t.data[e]):t.data[e],n.push(i)}}),n}function b(t){var e=t.map(function(t){return g(t)});return Math.max.apply(null,e)}function A(t){for(var e=2*Math.PI/t,n=[],i=0;i<t;i++)n.push(e*i);return n.map(function(t){return-1*t+Math.PI/2})}function w(t,e,n,i){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},r=t.map(function(t){return{text:o.format?o.format(t,i[n]):t.name+": "+t.data,color:t.color}}),a=[],s={x:0,y:0};return e.forEach(function(t){"undefined"!==typeof t[n]&&null!==t[n]&&a.push(t[n])}),a.forEach(function(t){s.x=Math.round(t.x),s.y+=t.y}),s.y/=a.length,{textList:r,offset:s}}function P(t,e,n,i,o,r){arguments.length>6&&void 0!==arguments[6]&&arguments[6];var a=r.color.upFill,s=r.color.downFill,l=[a,a,s,a],c=[],u={text:o[i],color:null};c.push(u),e.map(function(e){0==i&&e.data[1]-e.data[0]<0?l[1]=s:(e.data[0]<t[i-1][1]&&(l[0]=s),e.data[1]<e.data[0]&&(l[1]=s),e.data[2]>t[i-1][1]&&(l[2]=a),e.data[3]<t[i-1][1]&&(l[3]=s));var n={text:"开盘："+e.data[0],color:l[0]},o={text:"收盘："+e.data[1],color:l[1]},r={text:"最低："+e.data[2],color:l[2]},u={text:"最高："+e.data[3],color:l[3]};c.push(n,o,r,u)});var f=[],h={x:0,y:0};return n.forEach(function(t){"undefined"!==typeof t[i]&&null!==t[i]&&f.push(t[i])}),h.x=Math.round(f[0][0].x),{textList:c,offset:h}}function S(t,e,n,i){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,r=-1;return T(t,n,i)&&e.forEach(function(e,n){t.x+o>e&&(r=n)}),r}function T(t,e,n){return t.x<e.width-n.padding&&t.x>n.padding+n.yAxisWidth+n.yAxisTitleWidth&&t.y>n.padding&&t.y<e.height-n.legendHeight-n.xAxisHeight-n.padding}function $(t,e,n){var i=2*Math.PI/n,o=-1;if(k(t,e.center,e.radius)){var r=function(t){return t<0&&(t+=2*Math.PI),t>2*Math.PI&&(t-=2*Math.PI),t},a=Math.atan2(e.center.y-t.y,t.x-e.center.x);a*=-1,a<0&&(a+=2*Math.PI);var s=e.angleList.map(function(t){return t=r(-1*t),t});s.forEach(function(t,e){var n=r(t-i/2),s=r(t+i/2);s<n&&(s+=2*Math.PI),(a>=n&&a<=s||a+2*Math.PI>=n&&a+2*Math.PI<=s)&&(o=e)})}return o}function O(t,e){var n=-1;if(k(t,e.center,e.radius)){var i=Math.atan2(e.center.y-t.y,t.x-e.center.x);i=-i;for(var o=0,r=e.series.length;o<r;o++){var a=e.series[o];if(l(i,a._start_,a._start_+2*a._proportion_*Math.PI)){n=o;break}}}return n}function k(t,e,n){return Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)<=Math.pow(n,2)}function E(t){var e=[],n=[];return t.forEach(function(t,i){null!==t?n.push(t):(n.length&&e.push(n),n=[])}),n.length&&e.push(n),e}function M(t,e,n){if(!1===e.legend)return{legendList:[],legendHeight:0};var i=5*e.pixelRatio,o=8*e.pixelRatio,r=15*e.pixelRatio,a=[],s=0,l=[];return t.forEach(function(t){var n=3*i+r+g(t.name||"undefined");s+n>e.width?(a.push(l),s=n,l=[t]):(s+=n,l.push(t))}),l.length&&a.push(l),{legendList:a,legendHeight:a.length*(n.fontSize+o)+i}}function C(t,e,n){var i={angle:0,xAxisHeight:n.xAxisHeight},o=B(t,e,n),r=o.eachSpacing,a=t.map(function(t){return g(t)}),s=Math.max.apply(this,a);return 1==e.xAxis.rotateLabel&&s+2*n.xAxisTextPadding>r&&(i.angle=45*Math.PI/180,i.xAxisHeight=2*n.xAxisTextPadding+s*Math.sin(i.angle)),i}function L(t,e,n,i,o){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,a=o.extra.radar||{};a.max=a.max||0;var s=Math.max(a.max,Math.max.apply(null,y(i))),l=[];return i.forEach(function(i){var o={};o.color=i.color,o.data=[],i.data.forEach(function(i,a){var l={};l.angle=t[a],l.proportion=i/s,l.position=f(n*l.proportion*r*Math.cos(l.angle),n*l.proportion*r*Math.sin(l.angle),e),o.data.push(l)}),l.push(o)}),l}function F(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=0,i=0;return t.forEach(function(t){t.data=null===t.data?0:t.data,n+=t.data}),t.forEach(function(t){t.data=null===t.data?0:t.data,t._proportion_=t.data/n*e}),t.forEach(function(t){t._start_=i,i+=2*t._proportion_*Math.PI}),t}function R(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return 1==n&&(n=.999999),t.forEach(function(t){var i;t.data=null===t.data?0:t.data,i="default"==e.type?e.startAngle-e.endAngle+1:2,t._proportion_=i*t.data*n+e.startAngle,t._proportion_>=2&&(t._proportion_=t._proportion_%2)}),t}function D(t,e,n){for(var i=e-n+1,o=e,r=0;r<t.length;r++)t[r].value=null===t[r].value?0:t[r].value,t[r]._startAngle_=o,t[r]._endAngle_=i*t[r].value+e,t[r]._endAngle_>=2&&(t[r]._endAngle_=t[r]._endAngle_%2),o=t[r]._endAngle_;return t}function I(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;return t.forEach(function(t){if(t.data=null===t.data?0:t.data,"auto"==n.pointer.color){for(var o=0;o<e.length;o++)if(t.data<=e[o].value){t.color=e[o].color;break}}else t.color=n.pointer.color;var r=n.startAngle-n.endAngle+1;t._endAngle_=r*t.data+n.startAngle,t._oldAngle_=n.oldAngle,n.oldAngle<n.endAngle&&(t._oldAngle_+=2),t.data>=n.oldData?t._proportion_=(t._endAngle_-t._oldAngle_)*i+n.oldAngle:t._proportion_=t._oldAngle_-(t._oldAngle_-t._endAngle_)*i,t._proportion_>=2&&(t._proportion_=t._proportion_%2)}),t}function j(t){t=F(t);var e=0;return t.forEach(function(t){var n=t.format?t.format(+t._proportion_.toFixed(2)):o.toFixed(100*t._proportion_)+"%";e=Math.max(e,g(n))}),e}function H(t,e,n,i,o,r){return t.map(function(t){return null===t?null:(t.width=(e-2*o.columePadding)/n,r.extra.column&&r.extra.column.width&&+r.extra.column.width>0?t.width=Math.min(t.width,+r.extra.column.width):t.width=Math.min(t.width,25),t.x+=(i+.5-n/2)*t.width,t)})}function z(t,e,n,i,o,r,a){return t.map(function(t){return null===t?null:(t.width=e-2*o.columePadding,r.extra.column&&r.extra.column.width&&+r.extra.column.width>0?t.width=Math.min(t.width,+r.extra.column.width):t.width=Math.min(t.width,25),i>0&&(t.width-=2*a),t)})}function N(t,e,n,i,o,r,a){return t.map(function(t,n){return null===t?null:(t.width=e-2*o.columePadding,r.extra.column&&r.extra.column.width&&+r.extra.column.width>0?t.width=Math.min(t.width,+r.extra.column.width):t.width=Math.min(t.width,25),t)})}function B(t,e,n){var i=n.yAxisWidth+n.yAxisTitleWidth,o=e.width-2*n.padding-i,r=e.enableScroll?Math.min(e.xAxis.itemCount,t.length):t.length,a=o/r,s=[],l=n.padding+i,c=e.width-n.padding;return t.forEach(function(t,e){s.push(l+e*a)}),!0===e.enableScroll?s.push(l+t.length*a):s.push(c),{xAxisPoints:s,startX:l,endX:c,eachSpacing:a}}function W(t,e,n,i,o,r,a){var s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1,l=[],c=r.height-2*a.padding-a.xAxisHeight-a.legendHeight;return t.forEach(function(t,u){if(null===t)l.push(null);else{var f=[];t.forEach(function(t,l){var h={};h.x=i[u]+Math.round(o/2);var p=t.value||t,d=c*(p-e)/(n-e);d*=s,h.y=r.height-a.xAxisHeight-a.legendHeight-Math.round(d)-a.padding,f.push(h)}),l.push(f)}}),l}function V(t,e,n,i,o,r,a){var s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1,l=[],c=r.height-2*a.padding-a.xAxisHeight-a.legendHeight;return t.forEach(function(t,u){if(null===t)l.push(null);else{var f={};f.color=t.color,f.x=i[u]+Math.round(o/2);var h=t.value||t,p=c*(h-e)/(n-e);p*=s,f.y=r.height-a.xAxisHeight-a.legendHeight-Math.round(p)-a.padding,l.push(f)}}),l}function U(t,e,n,i,o,r,a,s,l){var c=arguments.length>9&&void 0!==arguments[9]?arguments[9]:1,u=[],f=r.height-2*a.padding-a.xAxisHeight-a.legendHeight;return t.forEach(function(t,h){if(null===t)u.push(null);else{var p={};if(p.color=t.color,p.x=i[h]+Math.round(o/2),s>0){for(var d=0,v=0;v<=s;v++)d+=l[v].data[h];var g=d-t,y=f*(d-e)/(n-e),x=f*(g-e)/(n-e)}else d=t,y=f*(d-e)/(n-e),x=0;var m=x;y*=c,m*=c,p.y=r.height-a.xAxisHeight-a.legendHeight-Math.round(y)-a.padding,p.y0=r.height-a.xAxisHeight-a.legendHeight-Math.round(m)-a.padding,u.push(p)}}),u}function G(t,e,n,i){var o;o="stack"==i?x(t):y(t);var r=[];o=o.filter(function(t){return"object"===typeof t&&null!==t?t.constructor==Array?null!==t:null!==t.value:null!==t}),o.map(function(t){"object"===typeof t?t.constructor==Array?t.map(function(t){r.push(t)}):r.push(t.value):r.push(t)});var a=0,s=0;if(r.length>0&&(a=Math.min.apply(this,r),s=Math.max.apply(this,r)),"number"===typeof e.yAxis.min&&(a=Math.min(e.yAxis.min,a)),"number"===typeof e.yAxis.max&&(s=Math.max(e.yAxis.max,s)),a===s){var l=s||10;s+=l}for(var c=v(a,s),u=c.minRange,f=c.maxRange,h=[],p=(f-u)/n.yAxisSplit,d=0;d<=n.yAxisSplit;d++)h.push(u+p*d);return h.reverse()}function X(t,e,n){var r=i({},e.extra.column||{type:""}),a=G(t,e,n,r.type),s=n.yAxisWidth,l=a.map(function(t){return t=o.toFixed(t,2),t=e.yAxis.format?e.yAxis.format(Number(t)):t,s=Math.max(s,g(t)+5),t});return!0===e.yAxis.disabled&&(s=0),{rangesFormat:l,ranges:a,yAxisWidth:s}}function q(t,e,n,i,o){var r=G(e,n,i),a=n.height-2*i.padding-i.xAxisHeight-i.legendHeight,s=r[0],l=r[r.length-1],c=i.padding,u=i.padding+a,f=s-(s-l)*(t-c)/(u-c);return f=n.yAxis.format?n.yAxis.format(Number(f)):f,f}function J(t,e){!0!==e.rotateLock?(t.translate(e.height,0),t.rotate(90*Math.PI/180)):!0!==e._rotate_&&(t.translate(e.height,0),t.rotate(90*Math.PI/180),e._rotate_=!0)}function K(t,e,n,i,o){i.beginPath(),i.setStrokeStyle("#ffffff"),i.setLineWidth(1*o.pixelRatio),i.setFillStyle(e),"diamond"===n?t.forEach(function(t,e){null!==t&&(i.moveTo(t.x,t.y-4.5),i.lineTo(t.x-4.5,t.y),i.lineTo(t.x,t.y+4.5),i.lineTo(t.x+4.5,t.y),i.lineTo(t.x,t.y-4.5))}):"circle"===n?t.forEach(function(t,e){null!==t&&(i.moveTo(t.x+3.5*o.pixelRatio,t.y),i.arc(t.x,t.y,4*o.pixelRatio,0,2*Math.PI,!1))}):"rect"===n?t.forEach(function(t,e){null!==t&&(i.moveTo(t.x-3.5,t.y-3.5),i.rect(t.x-3.5,t.y-3.5,7,7))}):"triangle"===n&&t.forEach(function(t,e){null!==t&&(i.moveTo(t.x,t.y-4.5),i.lineTo(t.x-4.5,t.y+4.5),i.lineTo(t.x+4.5,t.y+4.5),i.lineTo(t.x,t.y-4.5))}),i.closePath(),i.fill(),i.stroke()}function Y(t,e,n){var i=t.title.fontSize||e.titleFontSize,o=t.subtitle.fontSize||e.subtitleFontSize,r=t.title.name||"",a=t.subtitle.name||"",s=t.title.color||e.titleColor,l=t.subtitle.color||e.subtitleColor,c=r?i:0,u=a?o:0,f=5;if(a){var h=g(a,o),p=(t.width-h)/2+(t.subtitle.offsetX||0),d=(t.height-e.legendHeight+o)/2+(t.subtitle.offsetY||0);r&&(d-=(c+f)/2),n.beginPath(),n.setFontSize(o),n.setFillStyle(l),n.fillText(a,p,d),n.closePath(),n.stroke()}if(r){var v=g(r,i),y=(t.width-v)/2+(t.title.offsetX||0),x=(t.height-e.legendHeight+i)/2+(t.title.offsetY||0);a&&(x+=(u+f)/2),n.beginPath(),n.setFontSize(i),n.setFillStyle(s),n.fillText(r,y,x),n.closePath(),n.stroke()}}function Z(t,e,n,i){var o=e.data;t.forEach(function(t,r){if(null!==t){i.beginPath(),i.setFontSize(n.fontSize),i.setFillStyle("#666666");var a=o[r].value||o[r],s=e.format?e.format(a):a;i.fillText(s,t.x-g(s)/2,t.y-2),i.closePath(),i.stroke()}})}function Q(t,e,n,i,o,r){e-=t.width/2+o.gaugeLabelTextMargin;for(var a=t.startAngle-t.endAngle+1,s=a/t.splitLine.splitNumber,l=t.endNumber-t.startNumber,c=l/t.splitLine.splitNumber,u=t.startAngle,f=t.startNumber,h=0;h<t.splitLine.splitNumber+1;h++){var p={x:e*Math.cos(u*Math.PI),y:e*Math.sin(u*Math.PI)};p.x+=n.x-g(f)/2,p.y+=n.y;var d=p.x,v=p.y;r.beginPath(),r.setFontSize(o.fontSize),r.setFillStyle(t.labelColor||"#666666"),r.fillText(f,d,v+o.fontSize/2),r.closePath(),r.stroke(),u+=s,u>=2&&(u%=2),f+=c}}function tt(t,e,n,i,r,a){var s=i.extra.radar||{};e+=r.radarLabelTextMargin,t.forEach(function(t,l){var c={x:e*Math.cos(t),y:e*Math.sin(t)},u=f(c.x,c.y,n),h=u.x,p=u.y;o.approximatelyEqual(c.x,0)?h-=g(i.categories[l]||"")/2:c.x<0&&(h-=g(i.categories[l]||"")),a.beginPath(),a.setFontSize(r.fontSize),a.setFillStyle(s.labelColor||"#666666"),a.fillText(i.categories[l]||"",h,p+r.fontSize/2),a.closePath(),a.stroke()})}function et(t,e,n,i,r,a){var s=r+n.pieChartLinePadding,l=[],c=null,u=t.map(function(t){var e=2*Math.PI-(t._start_+2*Math.PI*t._proportion_/2),n=t.format?t.format(+t._proportion_.toFixed(2)):o.toFixed(100*t._proportion_)+"%",i=t.color;return{arc:e,text:n,color:i}});u.forEach(function(t){var e=Math.cos(t.arc)*s,i=Math.sin(t.arc)*s,a=Math.cos(t.arc)*r,u=Math.sin(t.arc)*r,f=e>=0?e+n.pieChartTextPadding:e-n.pieChartTextPadding,p=i,d=g(t.text),v=p;c&&o.isSameXCoordinateArea(c.start,{x:f})&&(v=f>0?Math.min(p,c.start.y):e<0?Math.max(p,c.start.y):p>0?Math.max(p,c.start.y):Math.min(p,c.start.y)),f<0&&(f-=d);var y={lineStart:{x:a,y:u},lineEnd:{x:e,y:i},start:{x:f,y:v},width:d,height:n.fontSize,text:t.text,color:t.color};c=h(y,c),l.push(c)}),l.forEach(function(t){var o=f(t.lineStart.x,t.lineStart.y,a),r=f(t.lineEnd.x,t.lineEnd.y,a),s=f(t.start.x,t.start.y,a);i.setLineWidth(1*e.pixelRatio),i.setFontSize(n.fontSize),i.beginPath(),i.setStrokeStyle(t.color),i.setFillStyle(t.color),i.moveTo(o.x,o.y);var l=t.start.x<0?s.x+t.width:s.x,c=t.start.x<0?s.x-5:s.x+5;i.quadraticCurveTo(r.x,r.y,l,s.y),i.moveTo(o.x,o.y),i.stroke(),i.closePath(),i.beginPath(),i.moveTo(s.x+t.width,s.y),i.arc(l,s.y,2,0,2*Math.PI),i.closePath(),i.fill(),i.beginPath(),i.setFontSize(n.fontSize),i.setFillStyle("#666666"),i.fillText(t.text,c,s.y+3),i.closePath(),i.stroke(),i.closePath()})}function nt(t,e,n,i){var o=e.extra.tooltip||{};o.gridType=void 0==o.gridType?"solid":o.gridType,o.dashLength=void 0==o.dashLength?4:o.dashLength;var a=n.padding,s=e.height-n.padding-n.xAxisHeight-n.legendHeight;if("dash"==o.gridType&&i.setLineDash([o.dashLength,o.dashLength]),i.beginPath(),i.setStrokeStyle(o.gridColor||"#cccccc"),i.setLineWidth(1*e.pixelRatio),i.moveTo(t,a),i.lineTo(t,s),i.closePath(),i.stroke(),i.setLineDash([]),o.xAxisLabel){var l=e.categories[e.tooltip.index];i.setFontSize(n.fontSize);var c=i.measureText(l).width,u=t-n.toolTipPadding-.5*c,f=s;i.beginPath(),i.setFillStyle(r(o.labelBgColor||n.toolTipBackground,o.labelBgOpacity||n.toolTipOpacity)),i.setStrokeStyle(o.labelBgColor||n.toolTipBackground),i.setLineWidth(1*e.pixelRatio),i.rect(u,f,c+2*n.toolTipPadding,n.fontSize+2*n.toolTipPadding),i.closePath(),i.stroke(),i.fill(),i.beginPath(),i.setFontSize(n.fontSize),i.setFillStyle(o.labelFontColor||n.fontColor),i.fillText(l,u+2*n.toolTipPadding,f+n.toolTipPadding+n.fontSize),i.closePath(),i.stroke()}}function it(t,e,n,i,o){var a=t.extra.tooltip||{};a.gridType=void 0==a.gridType?"solid":a.gridType,a.dashLength=void 0==a.dashLength?4:a.dashLength;var s=e.padding+e.yAxisWidth+e.yAxisTitleWidth,l=t.width-e.padding;if("dash"==a.gridType&&n.setLineDash([a.dashLength,a.dashLength]),n.beginPath(),n.setStrokeStyle(a.gridColor||"#cccccc"),n.setLineWidth(1*t.pixelRatio),n.moveTo(s,t.tooltip.offset.y),n.lineTo(l,t.tooltip.offset.y),n.closePath(),n.stroke(),n.setLineDash([]),a.yAxisLabel){var c=q(t.tooltip.offset.y,t.series,t,e,i);n.setFontSize(e.fontSize);var u=n.measureText(c).width,f=s-2*e.toolTipPadding-u,h=t.tooltip.offset.y;n.beginPath(),n.setFillStyle(r(a.labelBgColor||e.toolTipBackground,a.labelBgOpacity||e.toolTipOpacity)),n.setStrokeStyle(a.labelBgColor||e.toolTipBackground),n.setLineWidth(1*t.pixelRatio),n.rect(f,h-.5*e.fontSize-e.toolTipPadding,u+2*e.toolTipPadding,e.fontSize+2*e.toolTipPadding),n.closePath(),n.stroke(),n.fill(),n.beginPath(),n.setFontSize(e.fontSize),n.setFillStyle(a.labelFontColor||e.fontColor),n.fillText(c,f+e.toolTipPadding,h+.5*e.fontSize),n.closePath(),n.stroke()}}function ot(t,e,n,i,o){var a=e.extra.tooltip||{activeBgColor:"#000000",activeBgOpacity:.08};a.activeBgColor=a.activeBgColor?a.activeBgColor:"#000000",a.activeBgOpacity=a.activeBgOpacity?a.activeBgOpacity:.08;var s=n.padding,l=e.height-n.padding-n.xAxisHeight-n.legendHeight;i.beginPath(),i.setFillStyle(r(a.activeBgColor,a.activeBgOpacity)),i.rect(t-o/2,s,o,l-s),i.closePath(),i.fill()}function rt(t,e,n,o,a,s,l){var c=n.extra.tooltip||{bgColor:"#000000",bgOpacity:.7,fontColor:"#FFFFFF"};c.bgColor=c.bgColor?c.bgColor:"#000000",c.bgOpacity=c.bgOpacity?c.bgOpacity:.7,c.fontColor=c.fontColor?c.fontColor:"#FFFFFF";var u=4*n.pixelRatio,f=5*n.pixelRatio,h=8*n.pixelRatio,p=!1;"line"!=n.type&&"area"!=n.type&&"candle"!=n.type&&"mix"!=n.type||nt(n.tooltip.offset.x,n,o,a),e=i({x:0,y:0},e),e.y-=8*n.pixelRatio;var d=t.map(function(t){return g(t.text)}),v=u+f+4*o.toolTipPadding+Math.max.apply(null,d),y=2*o.toolTipPadding+t.length*o.toolTipLineHeight;e.x-Math.abs(n._scrollDistance_)+h+v>n.width&&(p=!0),a.beginPath(),a.setFillStyle(r(c.bgColor||o.toolTipBackground,c.bgOpacity||o.toolTipOpacity)),p?(a.moveTo(e.x,e.y+10*n.pixelRatio),a.lineTo(e.x-h,e.y+10*n.pixelRatio-5*n.pixelRatio),a.lineTo(e.x-h,e.y),a.lineTo(e.x-h-Math.round(v),e.y),a.lineTo(e.x-h-Math.round(v),e.y+y),a.lineTo(e.x-h,e.y+y),a.lineTo(e.x-h,e.y+10*n.pixelRatio+5*n.pixelRatio),a.lineTo(e.x,e.y+10*n.pixelRatio)):(a.moveTo(e.x,e.y+10*n.pixelRatio),a.lineTo(e.x+h,e.y+10*n.pixelRatio-5*n.pixelRatio),a.lineTo(e.x+h,e.y),a.lineTo(e.x+h+Math.round(v),e.y),a.lineTo(e.x+h+Math.round(v),e.y+y),a.lineTo(e.x+h,e.y+y),a.lineTo(e.x+h,e.y+10*n.pixelRatio+5*n.pixelRatio),a.lineTo(e.x,e.y+10*n.pixelRatio)),a.closePath(),a.fill(),t.forEach(function(t,n){if(null!==t.color){a.beginPath(),a.setFillStyle(t.color);var i=e.x+h+2*o.toolTipPadding,r=e.y+(o.toolTipLineHeight-o.fontSize)/2+o.toolTipLineHeight*n+o.toolTipPadding+1;p&&(i=e.x-v-h+2*o.toolTipPadding),a.fillRect(i,r,u,o.fontSize),a.closePath()}}),t.forEach(function(t,n){var i=e.x+h+2*o.toolTipPadding+u+f;p&&(i=e.x-v-h+2*o.toolTipPadding+ +u+f);var r=e.y+(o.toolTipLineHeight-o.fontSize)/2+o.toolTipLineHeight*n+o.toolTipPadding;a.beginPath(),a.setFontSize(o.fontSize),a.setFillStyle(c.fontColor),a.fillText(t.text,i,r+o.fontSize),a.closePath(),a.stroke()})}function at(t,e,n,i){var o=n.xAxisHeight+(e.height-n.xAxisHeight-g(t))/2;i.save(),i.beginPath(),i.setFontSize(n.fontSize),i.setFillStyle(e.yAxis.titleFontColor||"#333333"),i.translate(0,e.height),i.rotate(-90*Math.PI/180),i.fillText(t,o,n.padding+.5*n.fontSize),i.closePath(),i.stroke(),i.restore()}function st(t,e,n,i){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,r=e.extra.column||{type:{},meter:{}};r.type=void 0==r.type?"group":r.type,r.meter=r.meter||{},r.meter.border=void 0==r.meter.border?4:r.meter.border,r.meter.fillColor=void 0==r.meter.fillColor?"#FFFFFF":r.meter.fillColor;var a=X(t,e,n),s=a.ranges,l=B(e.categories,e,n),c=l.xAxisPoints,u=l.eachSpacing,f=s.pop(),h=s.shift(),p=[];return i.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&i.translate(e._scrollDistance_,0),e.tooltip&&e.tooltip.textList&&e.tooltip.textList.length&&1===o&&ot(e.tooltip.offset.x,e,n,i,u),t.forEach(function(a,s){var l=a.data;switch(r.type){case"group":var d=V(l,f,h,c,u,e,n,o),v=U(l,f,h,c,u,e,n,s,t,o);p.push(v),d=H(d,u,t.length,s,n,e),d.forEach(function(t,o){if(null!==t){i.beginPath(),i.setFillStyle(t.color||a.color);var r=t.x-t.width/2+1,s=e.height-t.y-n.padding-n.xAxisHeight-n.legendHeight;i.moveTo(r,t.y),i.fillRect(r,t.y,t.width-2,s),i.closePath(),i.fill()}});break;case"stack":d=U(l,f,h,c,u,e,n,s,t,o);p.push(d),d=N(d,u,t.length,s,n,e,t),d.forEach(function(t,o){if(null!==t){i.beginPath(),i.setFillStyle(t.color||a.color);var r=t.x-t.width/2+1,l=e.height-t.y-n.padding-n.xAxisHeight-n.legendHeight,c=e.height-t.y0-n.padding-n.xAxisHeight-n.legendHeight;s>0&&(l-=c),i.moveTo(r,t.y),i.fillRect(r,t.y,t.width-2,l),i.closePath(),i.fill()}});break;case"meter":d=V(l,f,h,c,u,e,n,o);p.push(d),d=z(d,u,t.length,s,n,e,r.meter.border),0==s?d.forEach(function(t,o){if(null!==t){i.beginPath(),i.setFillStyle(r.meter.fillColor);var s=t.x-t.width/2+1,l=e.height-t.y-n.padding-n.xAxisHeight-n.legendHeight;i.moveTo(s,t.y),i.fillRect(s,t.y,t.width-2,l),i.closePath(),i.fill(),i.beginPath(),i.setStrokeStyle(a.color),i.setLineWidth(r.meter.border*e.pixelRatio),i.moveTo(s+.5*r.meter.border,t.y+l),i.lineTo(s+.5*r.meter.border,t.y+.5*r.meter.border),i.lineTo(s+t.width-r.meter.border,t.y+.5*r.meter.border),i.lineTo(s+t.width-r.meter.border,t.y+l),i.stroke()}}):d.forEach(function(t,o){if(null!==t){i.beginPath(),i.setFillStyle(t.color||a.color);var r=t.x-t.width/2+1,s=e.height-t.y-n.padding-n.xAxisHeight-n.legendHeight;i.moveTo(r,t.y),i.rect(r,t.y,t.width-2,s),i.closePath(),i.fill()}});break}}),!1!==e.dataLabel&&1===o&&t.forEach(function(a,s){var l=a.data;switch(r.type){case"group":var p=V(l,f,h,c,u,e,n,o);p=H(p,u,t.length,s,n,e),Z(p,a,n,i);break;case"stack":p=U(l,f,h,c,u,e,n,s,t,o);Z(p,a,n,i);break;case"meter":p=V(l,f,h,c,u,e,n,o);Z(p,a,n,i);break}}),i.restore(),{xAxisPoints:c,calPoints:p,eachSpacing:u}}function lt(t,e,n,i){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,r=e.extra.candle||{color:{},average:{}};r.color.upLine=r.color.upLine?r.color.upLine:"#f04864",r.color.upFill=r.color.upFill?r.color.upFill:"#f04864",r.color.downLine=r.color.downLine?r.color.downLine:"#2fc25b",r.color.downFill=r.color.downFill?r.color.downFill:"#2fc25b",r.average.show=!0===r.average.show,r.average.name=r.average.name?r.average.name:[],r.average.day=r.average.day?r.average.day:[],r.average.color=r.average.color?r.average.color:["#1890ff","#2fc25b","#facc14","#f04864","#8543e0","#90ed7d"],e.extra.candle=r;var a=X(t,e,n),s=a.ranges,l=B(e.categories,e,n),c=l.xAxisPoints,u=l.eachSpacing,f=s.pop(),h=s.shift(),p=[];return i.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&i.translate(e._scrollDistance_,0),t.forEach(function(t,a){var s=t.data,l=W(s,f,h,c,u,e,n,o);p.push(l);var d=E(l);d=d[0],d.forEach(function(t,n){i.beginPath(),s[n][1]-s[n][0]>0?(i.setStrokeStyle(r.color.upLine),i.setFillStyle(r.color.upFill),i.setLineWidth(1*e.pixelRatio),i.moveTo(t[3].x,t[3].y),i.lineTo(t[1].x,t[1].y),i.lineTo(t[1].x-u/4,t[1].y),i.lineTo(t[0].x-u/4,t[0].y),i.lineTo(t[0].x,t[0].y),i.lineTo(t[2].x,t[2].y),i.lineTo(t[0].x,t[0].y),i.lineTo(t[0].x+u/4,t[0].y),i.lineTo(t[1].x+u/4,t[1].y),i.lineTo(t[1].x,t[1].y),i.moveTo(t[3].x,t[3].y)):(i.setStrokeStyle(r.color.downLine),i.setFillStyle(r.color.downFill),i.setLineWidth(1*e.pixelRatio),i.moveTo(t[3].x,t[3].y),i.lineTo(t[0].x,t[0].y),i.lineTo(t[0].x-u/4,t[0].y),i.lineTo(t[1].x-u/4,t[1].y),i.lineTo(t[1].x,t[1].y),i.lineTo(t[2].x,t[2].y),i.lineTo(t[1].x,t[1].y),i.lineTo(t[1].x+u/4,t[1].y),i.lineTo(t[0].x+u/4,t[0].y),i.lineTo(t[0].x,t[0].y),i.moveTo(t[3].x,t[3].y)),i.closePath(),i.fill(),i.stroke()})}),i.restore(),r.average.show,{xAxisPoints:c,calPoints:p,eachSpacing:u}}function ct(t,e,n,i){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,a=e.extra.area||{type:"straight",opacity:.5,addLine:!1,width:2};a.type=a.type?a.type:"straight",a.opacity=a.opacity?a.opacity:.2,a.addLine=1==a.addLine,a.width=a.width?a.width:2;var s=X(t,e,n),l=s.ranges,c=B(e.categories,e,n),f=c.xAxisPoints,h=c.eachSpacing,p=l.pop(),d=l.shift(),v=e.height-n.padding-n.xAxisHeight-n.legendHeight,g=[];return i.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&i.translate(e._scrollDistance_,0),e.tooltip&&e.tooltip.textList&&e.tooltip.textList.length&&1===o&&nt(e.tooltip.offset.x,e,n,i),t.forEach(function(t,s){var l=t.data,c=V(l,p,d,f,h,e,n,o);g.push(c);var y=E(c);if(y.forEach(function(n){if(i.beginPath(),i.setStrokeStyle(r(t.color,a.opacity)),i.setFillStyle(r(t.color,a.opacity)),i.setLineWidth(a.width*e.pixelRatio),n.length>1){var o=n[0],s=n[n.length-1];i.moveTo(o.x,o.y),"curve"===a.type?n.forEach(function(t,e){if(e>0){var o=u(n,e-1);i.bezierCurveTo(o.ctrA.x,o.ctrA.y,o.ctrB.x,o.ctrB.y,t.x,t.y)}}):n.forEach(function(t,e){e>0&&i.lineTo(t.x,t.y)}),i.lineTo(s.x,v),i.lineTo(o.x,v),i.lineTo(o.x,o.y)}else{var l=n[0];i.moveTo(l.x-h/2,l.y),i.lineTo(l.x+h/2,l.y),i.lineTo(l.x+h/2,v),i.lineTo(l.x-h/2,v),i.moveTo(l.x-h/2,l.y)}i.closePath(),i.fill(),a.addLine&&(i.beginPath(),i.setStrokeStyle(t.color),i.setLineWidth(a.width*e.pixelRatio),1===n.length?(i.moveTo(n[0].x,n[0].y),i.arc(n[0].x,n[0].y,1,0,2*Math.PI)):(i.moveTo(n[0].x,n[0].y),"curve"===a.type?n.forEach(function(t,e){if(e>0){var o=u(n,e-1);i.bezierCurveTo(o.ctrA.x,o.ctrA.y,o.ctrB.x,o.ctrB.y,t.x,t.y)}}):n.forEach(function(t,e){e>0&&i.lineTo(t.x,t.y)}),i.moveTo(n[0].x,n[0].y)),i.closePath(),i.stroke())}),!1!==e.dataPointShape){var x=n.dataPointShape[s%n.dataPointShape.length];K(c,t.color,x,i,e)}}),!1!==e.dataLabel&&1===o&&t.forEach(function(t,r){var a=t.data,s=V(a,p,d,f,h,e,n,o);Z(s,t,n,i)}),i.restore(),{xAxisPoints:f,calPoints:g,eachSpacing:h}}function ut(t,e,n,i){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,r=e.extra.line||{type:"straight",width:2};r.type=r.type?r.type:"straight",r.width=r.width?r.width:2;var a=X(t,e,n),s=a.ranges,l=B(e.categories,e,n),c=l.xAxisPoints,f=l.eachSpacing,h=s.pop(),p=s.shift(),d=[];return i.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&i.translate(e._scrollDistance_,0),e.tooltip&&e.tooltip.textList&&e.tooltip.textList.length&&1===o&&nt(e.tooltip.offset.x,e,n,i),t.forEach(function(t,a){var s=t.data,l=V(s,h,p,c,f,e,n,o);d.push(l);var v=E(l);if(v.forEach(function(n,o){i.beginPath(),i.setStrokeStyle(t.color),i.setLineWidth(r.width*e.pixelRatio),1===n.length?(i.moveTo(n[0].x,n[0].y),i.arc(n[0].x,n[0].y,1,0,2*Math.PI)):(i.moveTo(n[0].x,n[0].y),"curve"===r.type?n.forEach(function(t,e){if(e>0){var o=u(n,e-1);i.bezierCurveTo(o.ctrA.x,o.ctrA.y,o.ctrB.x,o.ctrB.y,t.x,t.y)}}):n.forEach(function(t,e){e>0&&i.lineTo(t.x,t.y)}),i.moveTo(n[0].x,n[0].y)),i.closePath(),i.stroke()}),!1!==e.dataPointShape){var g=n.dataPointShape[a%n.dataPointShape.length];K(l,t.color,g,i,e)}}),!1!==e.dataLabel&&1===o&&t.forEach(function(t,r){var a=t.data,s=V(a,h,p,c,f,e,n,o);Z(s,t,n,i)}),i.restore(),{xAxisPoints:c,calPoints:d,eachSpacing:f}}function ft(t,e,n,i){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,r=X(t,e,n),a=r.ranges,s=B(e.categories,e,n),l=s.xAxisPoints,c=s.eachSpacing,f=a.pop(),h=a.shift(),p=e.height-n.padding-n.xAxisHeight-n.legendHeight,d=[],v=0,g=0;if(t.forEach(function(t,e){"column"==t.type&&(g+=1)}),i.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&i.translate(e._scrollDistance_,0),e.tooltip&&e.tooltip.textList&&e.tooltip.textList.length&&1===o&&nt(e.tooltip.offset.x,e,n,i),t.forEach(function(t,r){var a=t.data,s=V(a,f,h,l,c,e,n,o);if(d.push(s),"column"==t.type&&(s=H(s,c,g,v,n,e),s.forEach(function(o,r){if(null!==o){i.beginPath(),i.setFillStyle(o.color||t.color);var a=o.x-o.width/2+1,s=e.height-o.y-n.padding-n.xAxisHeight-n.legendHeight;i.moveTo(a,o.y),i.rect(a,o.y,o.width-2,s),i.closePath(),i.fill()}}),v+=1),"area"==t.type){var y=E(s);y.forEach(function(n){if(i.beginPath(),i.setStrokeStyle(t.color),i.setFillStyle(t.color),i.setGlobalAlpha(.2),i.setLineWidth(2*e.pixelRatio),n.length>1){var o=n[0],r=n[n.length-1];i.moveTo(o.x,o.y),"curve"===t.style?n.forEach(function(t,e){if(e>0){var o=u(n,e-1);i.bezierCurveTo(o.ctrA.x,o.ctrA.y,o.ctrB.x,o.ctrB.y,t.x,t.y)}}):n.forEach(function(t,e){e>0&&i.lineTo(t.x,t.y)}),i.lineTo(r.x,p),i.lineTo(o.x,p),i.lineTo(o.x,o.y)}else{var a=n[0];i.moveTo(a.x-c/2,a.y),i.lineTo(a.x+c/2,a.y),i.lineTo(a.x+c/2,p),i.lineTo(a.x-c/2,p),i.moveTo(a.x-c/2,a.y)}i.closePath(),i.fill(),i.setGlobalAlpha(1)})}if("line"==t.type){y=E(s);y.forEach(function(n,o){i.beginPath(),i.setStrokeStyle(t.color),i.setLineWidth(2*e.pixelRatio),1===n.length?(i.moveTo(n[0].x,n[0].y),i.arc(n[0].x,n[0].y,1,0,2*Math.PI)):(i.moveTo(n[0].x,n[0].y),"curve"==t.style?n.forEach(function(t,e){if(e>0){var o=u(n,e-1);i.bezierCurveTo(o.ctrA.x,o.ctrA.y,o.ctrB.x,o.ctrB.y,t.x,t.y)}}):n.forEach(function(t,e){e>0&&i.lineTo(t.x,t.y)}),i.moveTo(n[0].x,n[0].y)),i.closePath(),i.stroke()})}if("point"==t.type){y=E(s);y.forEach(function(n,o){i.beginPath(),i.setStrokeStyle(t.color),i.setLineWidth(2*e.pixelRatio),i.moveTo(n[0].x,n[0].y),i.arc(n[0].x,n[0].y,1,0,2*Math.PI),i.closePath(),i.stroke()})}if(!1!==e.dataPointShape&&"column"!==t.type){var x=n.dataPointShape[r%n.dataPointShape.length];K(s,t.color,x,i,e)}}),!1!==e.dataLabel&&1===o){v=0;t.forEach(function(t,r){var a=t.data,s=V(a,f,h,l,c,e,n,o);"column"!==t.type?Z(s,t,n,i):(s=H(s,c,g,v,n,e),Z(s,t,n,i),v+=1)})}return i.restore(),{xAxisPoints:l,calPoints:d,eachSpacing:c}}function ht(t,e,n,i,o,r){var a=t.extra.tooltip||{};a.horizentalLine&&t.tooltip&&1===i&&("line"==t.type||"area"==t.type||"column"==t.type||"candle"==t.type||"mix"==t.type)&&it(t,e,n,o,r),n.save(),t._scrollDistance_&&0!==t._scrollDistance_&&!0===t.enableScroll&&n.translate(t._scrollDistance_,0),t.tooltip&&t.tooltip.textList&&t.tooltip.textList.length&&1===i&&rt(t.tooltip.textList,t.tooltip.offset,t,e,n,o,r),n.restore()}function pt(t,e,n,i){var o=B(t,e,n),r=o.xAxisPoints,a=o.startX,s=o.endX,l=o.eachSpacing,u=e.height-n.padding-n.xAxisHeight-n.legendHeight,f=n.padding;if(e.enableScroll&&e.xAxis.scrollShow){var h=e.height-n.padding-n.legendHeight+4*e.pixelRatio,p=s-a,d=l*(r.length-1),v=p*p/d,y=0;e._scrollDistance_&&(y=-e._scrollDistance_*p/d),i.beginPath(),i.setLineCap("round"),i.setLineWidth(6*e.pixelRatio),i.setStrokeStyle(e.xAxis.scrollBackgroundColor||"#EFEBEF"),i.moveTo(a,h),i.lineTo(s,h),i.stroke(),i.closePath(),i.beginPath(),i.setLineCap("round"),i.setLineWidth(6*e.pixelRatio),i.setStrokeStyle(e.xAxis.scrollColor||"#A6A6A6"),i.moveTo(a+y,h),i.lineTo(a+y+v,h),i.stroke(),i.closePath()}if(i.save(),e._scrollDistance_&&0!==e._scrollDistance_&&i.translate(e._scrollDistance_,0),i.beginPath(),i.setStrokeStyle(e.xAxis.gridColor||"#cccccc"),i.setLineCap("butt"),i.setLineWidth(1*e.pixelRatio),"dash"==e.xAxis.gridType&&i.setLineDash([e.xAxis.dashLength,e.xAxis.dashLength]),!0!==e.xAxis.disableGrid&&("calibration"===e.xAxis.type?r.forEach(function(t,n){n>0&&(i.moveTo(t-l/2,u),i.lineTo(t-l/2,u+4*e.pixelRatio))}):r.forEach(function(t,e){i.moveTo(t,u),i.lineTo(t,f)})),i.closePath(),i.stroke(),i.setLineDash([]),!0!==e.xAxis.disabled){var x=e.width-2*n.padding-n.yAxisWidth-n.yAxisTitleWidth,m=Math.min(t.length,Math.ceil(x/n.fontSize/1.5)),_=Math.ceil(t.length/m);t=t.map(function(t,e){return e%_!==0?"":t}),0===n._xAxisTextAngle_?t.forEach(function(t,o){var a=l/2-g(t)/2;i.beginPath(),i.setFontSize(n.fontSize),i.setFillStyle(e.xAxis.fontColor||"#666666"),i.fillText(t,r[o]+a,u+n.fontSize+5),i.closePath(),i.stroke()}):t.forEach(function(t,o){i.save(),i.beginPath(),i.setFontSize(n.fontSize),i.setFillStyle(e.xAxis.fontColor||"#666666");var a=g(t),s=l/2-a,f=c(r[o]+l/2,u+n.fontSize/2+5,e.height),h=f.transX,p=f.transY;i.rotate(-1*n._xAxisTextAngle_),i.translate(h,p),i.fillText(t,r[o]+s,u+n.fontSize+5),i.closePath(),i.stroke(),i.restore()})}i.restore()}function dt(t,e,n,i){if(!0!==e.yAxis.disableGrid){for(var o=e.height-2*n.padding-n.xAxisHeight-n.legendHeight,r=Math.floor(o/n.yAxisSplit),a=n.yAxisWidth+n.yAxisTitleWidth,s=n.padding+a,l=B(t,e,n),c=l.xAxisPoints,u=l.eachSpacing,f=u*(c.length-1),h=s+f,p=[],d=0;d<n.yAxisSplit;d++)p.push(n.padding+r*d);p.push(n.padding+r*n.yAxisSplit+2),i.save(),e._scrollDistance_&&0!==e._scrollDistance_&&i.translate(e._scrollDistance_,0),"dash"==e.yAxis.gridType&&i.setLineDash([e.yAxis.dashLength,e.yAxis.dashLength]),i.beginPath(),i.setStrokeStyle(e.yAxis.gridColor||"#cccccc"),i.setLineWidth(1*e.pixelRatio),p.forEach(function(t,e){i.moveTo(s,t),i.lineTo(h,t)}),i.closePath(),i.stroke(),i.setLineDash([]),i.restore()}}function vt(t,e,n,i){if(!0!==e.yAxis.disabled){var o=X(t,e,n),r=o.rangesFormat,a=n.yAxisWidth+n.yAxisTitleWidth,s=e.height-2*n.padding-n.xAxisHeight-n.legendHeight,l=Math.floor(s/n.yAxisSplit),c=n.padding+a,u=e.width-n.padding,f=e.height-n.padding-n.xAxisHeight-n.legendHeight;i.beginPath(),i.setFillStyle(e.background||"#ffffff"),e._scrollDistance_<0&&i.fillRect(0,0,c,f+n.xAxisHeight),i.fillRect(u,0,e.width,f+n.xAxisHeight),i.closePath(),i.stroke();for(var h=[],p=0;p<=n.yAxisSplit;p++)h.push(n.padding+l*p);r.forEach(function(t,o){var r=h[o]?h[o]:f;i.beginPath(),i.setFontSize(n.fontSize),i.setFillStyle(e.yAxis.fontColor||"#666666"),i.fillText(t,n.padding+n.yAxisTitleWidth,r+n.fontSize/2),i.closePath(),i.stroke()}),e.yAxis.title&&at(e.yAxis.title,e,n,i)}}function gt(t,e,n,i){if(!1!==e.legend){var o=M(t,e,n),r=o.legendList,a=5*e.pixelRatio,s=10*e.pixelRatio,l=15*e.pixelRatio;r.forEach(function(t,o){var r=0;t.forEach(function(t){t.name=t.name||"undefined",r+=3*a+g(t.name)+l});var c=(e.width-r)/2+a,u=e.height-n.padding-n.legendHeight+o*(n.fontSize+s)+a+s;i.setFontSize(n.fontSize),t.forEach(function(t){switch(e.type){case"line":i.beginPath(),i.setLineWidth(1*e.pixelRatio),i.setStrokeStyle(t.color),i.setFillStyle(t.color),i.moveTo(c+7.5*e.pixelRatio,u+5*e.pixelRatio),i.arc(c+7.5*e.pixelRatio,u+5*e.pixelRatio,6*e.pixelRatio,0,2*Math.PI),i.closePath(),i.fill(),i.stroke();break;case"pie":i.beginPath(),i.setLineWidth(1*e.pixelRatio),i.setStrokeStyle(t.color),i.setFillStyle(t.color),i.moveTo(c+7.5*e.pixelRatio,u+5*e.pixelRatio),i.arc(c+7.5*e.pixelRatio,u+5*e.pixelRatio,6*e.pixelRatio,0,2*Math.PI),i.closePath(),i.fill(),i.stroke();break;case"ring":i.beginPath(),i.setLineWidth(1*e.pixelRatio),i.setStrokeStyle(t.color),i.setFillStyle(t.color),i.moveTo(c+7.5*e.pixelRatio,u+5*e.pixelRatio),i.arc(c+7.5*e.pixelRatio,u+5*e.pixelRatio,6*e.pixelRatio,0,2*Math.PI),i.closePath(),i.fill(),i.stroke();break;case"gauge":break;case"arcbar":break;default:i.beginPath(),i.setFillStyle(t.color),i.moveTo(c,u),i.fillRect(c,u,15*e.pixelRatio,10*e.pixelRatio),i.closePath(),i.fill(),i.stroke()}c+=a+l,i.beginPath(),i.setFontSize(n.fontSize),i.setFillStyle(e.extra.legendTextColor||"#333333"),i.fillText(t.name,c,u+6*e.pixelRatio+3*e.pixelRatio),i.closePath(),i.stroke(),c+=g(t.name)+2*a})})}}function yt(t,e,n,i){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,a=e.extra.pie||{};t=F(t,o);var s={x:e.width/2,y:(e.height-n.legendHeight)/2},l=Math.min(s.x-n.pieChartLinePadding-n.pieChartTextPadding-n._pieTextMaxLength_,s.y-n.pieChartLinePadding-n.pieChartTextPadding);e.dataLabel?l-=10:l-=2*n.padding;var c=l+n.pieChartLinePadding/2;if(t=t.map(function(t){return t._start_+=(a.offsetAngle||0)*Math.PI/180,t}),t.forEach(function(t,n){e.tooltip&&e.tooltip.index==n&&(i.beginPath(),i.setFillStyle(r(t.color,e.extra.pie.activeOpacity||.5)),i.moveTo(s.x,s.y),i.arc(s.x,s.y,c,t._start_,t._start_+2*t._proportion_*Math.PI),i.closePath(),i.fill()),i.beginPath(),i.setLineWidth(2*e.pixelRatio),i.setStrokeStyle("#ffffff"),i.setFillStyle(t.color),i.moveTo(s.x,s.y),i.arc(s.x,s.y,l,t._start_,t._start_+2*t._proportion_*Math.PI),i.closePath(),i.fill(),!0!==e.disablePieStroke&&i.stroke()}),"ring"===e.type){var u=.6*l;"number"===typeof e.extra.pie.ringWidth&&e.extra.pie.ringWidth>0&&(u=Math.max(0,l-e.extra.pie.ringWidth-10)),i.beginPath(),i.setFillStyle(e.background||"#ffffff"),i.moveTo(s.x,s.y),i.arc(s.x,s.y,u,0,2*Math.PI),i.closePath(),i.fill()}if(!1!==e.dataLabel&&1===o){for(var f=!1,h=0,p=t.length;h<p;h++)if(t[h].data>0){f=!0;break}f&&et(t,e,n,i,l,s)}return 1===o&&"ring"===e.type&&Y(e,n,i),{center:s,radius:l,series:t}}function xt(t,e,n,i){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,r=e.extra.arcbar||{};r.startAngle=r.startAngle?r.startAngle:.75,r.endAngle=r.endAngle?r.endAngle:.25,r.type=r.type?r.type:"default",t=R(t,r,o);var a={x:e.width/2,y:e.height/2},s=Math.min(a.x,a.y);return"number"===typeof r.width&&r.width>0?r.width=r.width:r.width=12*e.pixelRatio,s-=n.padding+r.width/2,i.setLineWidth(r.width),i.setStrokeStyle(r.backgroundColor||"#E9E9E9"),i.setLineCap("round"),i.beginPath(),"default"==r.type?i.arc(a.x,a.y,s,r.startAngle*Math.PI,r.endAngle*Math.PI,!1):i.arc(a.x,a.y,s,0,2*Math.PI,!1),i.stroke(),t.forEach(function(t){i.setLineWidth(r.width),i.setStrokeStyle(t.color),i.setLineCap("round"),i.beginPath(),i.arc(a.x,a.y,s,r.startAngle*Math.PI,t._proportion_*Math.PI,!1),i.stroke()}),Y(e,n,i),{center:a,radius:s,series:t}}function mt(t,e,n,i,o){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,a=n.extra.gauge||{};a.startAngle=a.startAngle?a.startAngle:.75,void 0==a.oldAngle&&(a.oldAngle=a.startAngle),void 0==a.oldData&&(a.oldData=0),a.endAngle=a.endAngle?a.endAngle:.25,t=D(t,a.startAngle,a.endAngle);var s={x:n.width/2,y:n.height/2},l=Math.min(s.x,s.y);"number"===typeof a.width&&a.width>0?a.width=a.width:a.width=15*n.pixelRatio,l-=i.padding+a.width/2;var c=l-a.width;o.setLineWidth(a.width),o.setLineCap("butt"),t.forEach(function(t){o.beginPath(),o.setStrokeStyle(t.color),o.arc(s.x,s.y,l,t._startAngle_*Math.PI,t._endAngle_*Math.PI,!1),o.stroke()}),o.save();var u=a.startAngle-a.endAngle+1;a.splitLine.fixRadius=a.splitLine.fixRadius?a.splitLine.fixRadius:0,a.splitLine.splitNumber=a.splitLine.splitNumber?a.splitLine.splitNumber:10,a.splitLine.width=a.splitLine.width?a.splitLine.width:15*n.pixelRatio,a.splitLine.color=a.splitLine.color?a.splitLine.color:"#FFFFFF",a.splitLine.childNumber=a.splitLine.childNumber?a.splitLine.childNumber:5,a.splitLine.childWidth=a.splitLine.childWidth?a.splitLine.childWidth:5*n.pixelRatio;var f=u/a.splitLine.splitNumber,h=u/a.splitLine.splitNumber/a.splitLine.childNumber,p=-l-.5*a.width-a.splitLine.fixRadius,d=-l-.5*a.width-a.splitLine.fixRadius+a.splitLine.width,v=-l-.5*a.width-a.splitLine.fixRadius+a.splitLine.childWidth;o.translate(s.x,s.y),o.rotate((a.startAngle-1)*Math.PI);for(var g=0;g<a.splitLine.splitNumber+1;g++)o.beginPath(),o.setStrokeStyle(a.splitLine.color),o.setLineWidth(2*n.pixelRatio),o.moveTo(p,0),o.lineTo(d,0),o.stroke(),o.rotate(f*Math.PI);o.restore(),o.save(),o.translate(s.x,s.y),o.rotate((a.startAngle-1)*Math.PI);for(var y=0;y<a.splitLine.splitNumber*a.splitLine.childNumber+1;y++)o.beginPath(),o.setStrokeStyle(a.splitLine.color),o.setLineWidth(1*n.pixelRatio),o.moveTo(p,0),o.lineTo(v,0),o.stroke(),o.rotate(h*Math.PI);return o.restore(),a.pointer.width=a.pointer.width?a.pointer.width:15*n.pixelRatio,void 0==a.pointer.color||"auto"==a.pointer.color?a.pointer.color:(a.pointer.color,a.pointer.color),e=I(e,t,a,r),e.forEach(function(t){o.save(),o.translate(s.x,s.y),o.rotate((t._proportion_-1)*Math.PI),o.beginPath(),o.setFillStyle(t.color),o.moveTo(a.pointer.width,0),o.lineTo(0,-a.pointer.width/2),o.lineTo(-c,0),o.lineTo(0,a.pointer.width/2),o.lineTo(a.pointer.width,0),o.closePath(),o.fill(),o.beginPath(),o.setFillStyle("#FFFFFF"),o.arc(0,0,a.pointer.width/6,0,2*Math.PI,!1),o.fill(),o.restore()}),!1!==n.dataLabel&&Q(a,l,s,n,i,o),Y(n,i,o),1===r&&"gauge"===n.type&&(a.oldAngle=e[0]._proportion_,a.oldData=e[0].data),{center:s,radius:l,innerRadius:c,categories:t,totalAngle:u}}function _t(t,e,n,i){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,r=e.extra.radar||{},a=A(e.categories.length),s={x:e.width/2,y:(e.height-n.legendHeight)/2},l=Math.min(s.x-(b(e.categories)+n.radarLabelTextMargin),s.y-n.radarLabelTextMargin);l-=n.padding,i.beginPath(),i.setLineWidth(1*e.pixelRatio),i.setStrokeStyle(r.gridColor||"#cccccc"),a.forEach(function(t){var e=f(l*Math.cos(t),l*Math.sin(t),s);i.moveTo(s.x,s.y),i.lineTo(e.x,e.y)}),i.stroke(),i.closePath();for(var c=function(t){var o={};i.beginPath(),i.setLineWidth(1*e.pixelRatio),i.setStrokeStyle(r.gridColor||"#cccccc"),a.forEach(function(e,r){var a=f(l/n.radarGridCount*t*Math.cos(e),l/n.radarGridCount*t*Math.sin(e),s);0===r?(o=a,i.moveTo(a.x,a.y)):i.lineTo(a.x,a.y)}),i.lineTo(o.x,o.y),i.stroke(),i.closePath()},u=1;u<=n.radarGridCount;u++)c(u);var h=L(a,s,l,t,e,o);return h.forEach(function(t,o){if(i.beginPath(),i.setFillStyle(t.color),i.setGlobalAlpha(.3),t.data.forEach(function(t,e){0===e?i.moveTo(t.position.x,t.position.y):i.lineTo(t.position.x,t.position.y)}),i.closePath(),i.fill(),i.setGlobalAlpha(1),!1!==e.dataPointShape){var r=n.dataPointShape[o%n.dataPointShape.length],a=t.data.map(function(t){return t.position});K(a,t.color,r,i,e)}}),tt(a,l,s,e,n,i),{center:s,radius:l,angleList:a}}function bt(t,e){e.draw()}var At={easeIn:function(t){return Math.pow(t,3)},easeOut:function(t){return Math.pow(t-1,3)+1},easeInOut:function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)},linear:function(t){return t}};function wt(t){this.isStop=!1,t.duration="undefined"===typeof t.duration?1e3:t.duration,t.timing=t.timing||"linear";var e=17,n=function(){return"undefined"!==typeof requestAnimationFrame?requestAnimationFrame:"undefined"!==typeof setTimeout?function(t,e){setTimeout(function(){var e=+new Date;t(e)},e)}:function(t){t(null)}},i=n(),o=null,r=function(n){if(null===n||!0===this.isStop)return t.onProcess&&t.onProcess(1),void(t.onAnimationFinish&&t.onAnimationFinish());if(null===o&&(o=n),n-o<t.duration){var a=(n-o)/t.duration,s=At[t.timing];a=s(a),t.onProcess&&t.onProcess(a),i(r,e)}else t.onProcess&&t.onProcess(1),t.onAnimationFinish&&t.onAnimationFinish()};r=r.bind(this),i(r,e)}function Pt(t,e,n,i){var o=this,r=e.series,a=e.categories;r=p(r,n),r=d(r,e);var s=M(r,e,n),l=s.legendHeight;n.legendHeight=l;var c=X(r,e,n),u=c.yAxisWidth;if(n.yAxisWidth=u,a&&a.length){var f=C(a,e,n),h=f.xAxisHeight,v=f.angle;n.xAxisHeight=h,n._xAxisTextAngle_=v}"pie"!==t&&"ring"!==t||(n._pieTextMaxLength_=!1===e.dataLabel?0:j(r));var g=e.animation?1e3:0;switch(this.animationInstance&&this.animationInstance.stop(),i.clearRect(0,0,e.width,e.height),t){case"line":this.animationInstance=new wt({timing:"easeIn",duration:g,onProcess:function(t){e.rotate&&J(i,e),dt(a,e,n,i),pt(a,e,n,i);var s=ut(r,e,n,i,t),l=s.xAxisPoints,c=s.calPoints,u=s.eachSpacing;o.chartData.xAxisPoints=l,o.chartData.calPoints=c,o.chartData.eachSpacing=u,gt(e.series,e,n,i),vt(r,e,n,i),ht(e,n,i,t,u,l),bt(e,i)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"mix":this.animationInstance=new wt({timing:"easeIn",duration:g,onProcess:function(t){e.rotate&&J(i,e),dt(a,e,n,i),pt(a,e,n,i);var s=ft(r,e,n,i,t),l=s.xAxisPoints,c=s.calPoints,u=s.eachSpacing;o.chartData.xAxisPoints=l,o.chartData.calPoints=c,o.chartData.eachSpacing=u,gt(e.series,e,n,i),vt(r,e,n,i),ht(e,n,i,t,u,l),bt(e,i)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"column":this.animationInstance=new wt({timing:"easeIn",duration:g,onProcess:function(t){e.rotate&&J(i,e),dt(a,e,n,i),pt(a,e,n,i);var s=st(r,e,n,i,t),l=s.xAxisPoints,c=s.calPoints,u=s.eachSpacing;o.chartData.xAxisPoints=l,o.chartData.calPoints=c,o.chartData.eachSpacing=u,gt(e.series,e,n,i),vt(r,e,n,i),ht(e,n,i,t,u,l),bt(e,i)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"area":this.animationInstance=new wt({timing:"easeIn",duration:g,onProcess:function(t){e.rotate&&J(i,e),dt(a,e,n,i),pt(a,e,n,i);var s=ct(r,e,n,i,t),l=s.xAxisPoints,c=s.calPoints,u=s.eachSpacing;o.chartData.xAxisPoints=l,o.chartData.calPoints=c,o.chartData.eachSpacing=u,gt(e.series,e,n,i),vt(r,e,n,i),ht(e,n,i,t,u,l),bt(e,i)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"ring":case"pie":this.animationInstance=new wt({timing:"easeInOut",duration:g,onProcess:function(t){e.rotate&&J(i,e),o.chartData.pieData=yt(r,e,n,i,t),gt(e.series,e,n,i),ht(e,n,i,t),bt(e,i)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"radar":this.animationInstance=new wt({timing:"easeInOut",duration:g,onProcess:function(t){e.rotate&&J(i,e),o.chartData.radarData=_t(r,e,n,i,t),gt(e.series,e,n,i),bt(e,i)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"arcbar":this.animationInstance=new wt({timing:"easeInOut",duration:g,onProcess:function(t){e.rotate&&J(i,e),o.chartData.arcbarData=xt(r,e,n,i,t),bt(e,i)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"gauge":this.animationInstance=new wt({timing:"easeInOut",duration:g,onProcess:function(t){e.rotate&&J(i,e),o.chartData.gaugeData=mt(a,r,e,n,i,t),bt(e,i)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"candle":this.animationInstance=new wt({timing:"easeIn",duration:g,onProcess:function(t){e.rotate&&J(i,e),dt(a,e,n,i),pt(a,e,n,i);var s=lt(r,e,n,i,t),l=s.xAxisPoints,c=s.calPoints,u=s.eachSpacing;o.chartData.xAxisPoints=l,o.chartData.calPoints=c,o.chartData.eachSpacing=u,gt(e.series,e,n,i),vt(r,e,n,i),ht(e,n,i,t,u,l),bt(e,i)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break}}function St(){this.events={}}wt.prototype.stop=function(){this.isStop=!0},St.prototype.addEventListener=function(t,e){this.events[t]=this.events[t]||[],this.events[t].push(e)},St.prototype.trigger=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];var i=e[0],o=e.slice(1);this.events[i]&&this.events[i].forEach(function(t){try{t.apply(null,o)}catch(e){console.error(e," at lib\\u-charts\\u-charts.js:3243")}})};var Tt=function(t){t.fontSize=t.fontSize?t.fontSize*t.pixelRatio:13*t.pixelRatio,t.title=t.title||{},t.subtitle=t.subtitle||{},t.yAxis=t.yAxis||{},t.yAxis.gridType=t.yAxis.gridType?t.yAxis.gridType:"solid",t.yAxis.dashLength=t.yAxis.dashLength?t.yAxis.dashLength:4*t.pixelRatio,t.xAxis=t.xAxis||{},t.xAxis.rotateLabel=!!t.xAxis.rotateLabel,t.xAxis.type=t.xAxis.type?t.xAxis.type:"calibration",t.xAxis.gridType=t.xAxis.gridType?t.xAxis.gridType:"solid",t.xAxis.dashLength=t.xAxis.dashLength?t.xAxis.dashLength:4*t.pixelRatio,t.xAxis.itemCount=t.xAxis.itemCount?t.xAxis.itemCount:5,t.xAxis.scrollAlign=t.xAxis.scrollAlign?t.xAxis.scrollAlign:"left",t.extra=t.extra||{},t.legend=!1!==t.legend,t.rotate=!!t.rotate,t.animation=!1!==t.animation;var o=i({},n);if(o.yAxisTitleWidth=!0!==t.yAxis.disabled&&t.yAxis.title?o.yAxisTitleWidth:0,"pie"!=t.type&&"ring"!=t.type||(o.pieChartLinePadding=!1===t.dataLabel?0:t.extra.pie.lableWidth||o.pieChartLinePadding*t.pixelRatio),o.pieChartTextPadding=!1===t.dataLabel?0:o.pieChartTextPadding*t.pixelRatio,o.yAxisSplit=t.yAxis.splitNumber?t.yAxis.splitNumber:n.yAxisSplit,o.rotate=t.rotate,t.rotate){var r=t.width,a=t.height;t.width=a,t.height=r}if(o.yAxisWidth=n.yAxisWidth*t.pixelRatio,o.xAxisHeight=n.xAxisHeight*t.pixelRatio,t.enableScroll&&t.xAxis.scrollShow&&(o.xAxisHeight+=4*t.pixelRatio),o.xAxisLineHeight=n.xAxisLineHeight*t.pixelRatio,o.legendHeight=n.legendHeight*t.pixelRatio,o.padding=n.padding*t.pixelRatio,o.fontSize=t.fontSize,o.titleFontSize=n.titleFontSize*t.pixelRatio,o.subtitleFontSize=n.subtitleFontSize*t.pixelRatio,o.toolTipPadding=n.toolTipPadding*t.pixelRatio,o.toolTipLineHeight=n.toolTipLineHeight*t.pixelRatio,o.columePadding=n.columePadding*t.pixelRatio,n.pixelRatio=t.pixelRatio,n.fontSize=t.fontSize,n.rotate=t.rotate,this.opts=t,this.config=o,t.$this=t.$this?t.$this:this,this.context=e.createCanvasContext(t.canvasId,t.$this),this.chartData={},this.event=new St,this.scrollOption={currentOffset:0,startTouchX:0,distance:0},t.enableScroll&&"right"==t.xAxis.scrollAlign){var s=X(t.series,t,o),l=s.yAxisWidth;o.yAxisWidth=l;var c=0,u=B(t.categories,t,o),f=u.xAxisPoints,h=u.startX,p=u.endX,d=u.eachSpacing,v=d*(f.length-1),g=p-h;c=g-v,this.scrollOption={currentOffset:c,startTouchX:c,distance:0},t._scrollDistance_=c}Pt.call(this,t.type,t,o,this.context)};Tt.prototype.updateData=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.opts.series=t.series||this.opts.series,this.opts.categories=t.categories||this.opts.categories,this.opts.title=i({},this.opts.title,t.title||{}),this.opts.subtitle=i({},this.opts.subtitle,t.subtitle||{}),Pt.call(this,this.opts.type,this.opts,this.config,this.context)},Tt.prototype.zoom=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.opts.xAxis.itemCount;!0===this.opts.enableScroll?(this.opts.animation=!1,this.opts.xAxis.itemCount=t.itemCount,Pt.call(this,this.opts.type,this.opts,this.config,this.context)):console.log("请启用滚动条后使用！"," at lib\\u-charts\\u-charts.js:3361")},Tt.prototype.stopAnimation=function(){this.animationInstance&&this.animationInstance.stop()},Tt.prototype.addEventListener=function(t,e){this.event.addEventListener(t,e)},Tt.prototype.getCurrentDataIndex=function(t){var e=t.mp.changedTouches[0];if(e){var n=m(e,this.opts,t);return"pie"===this.opts.type||"ring"===this.opts.type?O({x:n.x,y:n.y},this.chartData.pieData):"radar"===this.opts.type?$({x:n.x,y:n.y},this.chartData.radarData,this.opts.categories.length):S({x:n.x,y:n.y},this.chartData.xAxisPoints,this.opts,this.config,Math.abs(this.scrollOption.currentOffset))}return-1},Tt.prototype.showToolTip=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.mp.changedTouches[0],o=m(n,this.opts,t);if("line"===this.opts.type||"area"===this.opts.type||"mix"===this.opts.type||"column"===this.opts.type){var r=this.getCurrentDataIndex(t),a=this.scrollOption.currentOffset,s=i({},this.opts,{_scrollDistance_:a,animation:!1});if(r>-1){var l=_(this.opts.series,r);if(0!==l.length){var c=w(l,this.chartData.calPoints,r,this.opts.categories,e),u=c.textList,f=c.offset;f.y=o.y,s.tooltip={textList:u,offset:f,option:e,index:r}}}Pt.call(this,s.type,s,this.config,this.context)}if("candle"===this.opts.type){r=this.getCurrentDataIndex(t),a=this.scrollOption.currentOffset,s=i({},this.opts,{_scrollDistance_:a,animation:!1});if(r>-1){l=_(this.opts.series,r);if(0!==l.length){c=P(this.opts.series[0].data,l,this.chartData.calPoints,r,this.opts.categories,this.opts.extra.candle,e),u=c.textList,f=c.offset;f.y=o.y,s.tooltip={textList:u,offset:f,option:e,index:r}}}Pt.call(this,s.type,s,this.config,this.context)}if("pie"===this.opts.type||"ring"===this.opts.type){r=this.getCurrentDataIndex(t),a=this.scrollOption.currentOffset,s=i({},this.opts,{_scrollDistance_:a,animation:!1});if(r>-1){l=this.opts.series[r],u=[{text:e.format?e.format(l):l.name+": "+l.data,color:l.color}],f={x:o.x,y:o.y};s.tooltip={textList:u,offset:f,option:e,index:r}}Pt.call(this,s.type,s,this.config,this.context)}},Tt.prototype.scrollStart=function(t){var e=t.mp.changedTouches[0],n=m(e,this.opts,t);e&&!0===this.opts.enableScroll&&(e.x?this.scrollOption.startTouchX=n.x:this.scrollOption.startTouchX=n.clientX)},Tt.prototype.scroll=function(t){var e=t.mp.changedTouches[0],n=m(e,this.opts,t);if(e&&!0===this.opts.enableScroll){var o;o=e.x?n.x-this.scrollOption.startTouchX:n.clientX-this.scrollOption.startTouchX;var r=this.scrollOption.currentOffset,a=s(r+o,this.chartData,this.config,this.opts);this.scrollOption.distance=o=a-r;var l=i({},this.opts,{_scrollDistance_:r+o,animation:!1});Pt.call(this,l.type,l,this.config,this.context)}},Tt.prototype.scrollEnd=function(t){if(!0===this.opts.enableScroll){var e=this.scrollOption,n=e.currentOffset,i=e.distance;this.scrollOption.currentOffset=n+i,this.scrollOption.distance=0}},t.exports=Tt}).call(this,n("6e42")["default"])},ed31:function(t,e,n){"use strict";(function(t){n("8fd2");i(n("66fd"));var e=i(n("12ee"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'lib/colorui/components/cu-custom';__wxRouteBegin = true;__wxAppCurrentFile__ = 'lib/colorui/components/cu-custom.js';

define('lib/colorui/components/cu-custom.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["lib/colorui/components/cu-custom"], {
  "08b9": function b9(t, n, a) {
    "use strict";

    a.r(n);
    var e = a("59ce"),
        u = a.n(e);

    for (var o in e) {
      "default" !== o && function (t) {
        a.d(n, t, function () {
          return e[t];
        });
      }(o);
    }

    n["default"] = u.a;
  },
  "3fde": function fde(t, n, a) {
    "use strict";

    a.r(n);
    var e = a("4224"),
        u = a("08b9");

    for (var o in u) {
      "default" !== o && function (t) {
        a.d(n, t, function () {
          return u[t];
        });
      }(o);
    }

    a("83d8");
    var c = a("2877"),
        r = Object(c["a"])(u["default"], e["a"], e["b"], !1, null, null, null);
    n["default"] = r.exports;
  },
  4224: function _(t, n, a) {
    "use strict";

    var e = function e() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        u = [];

    a.d(n, "a", function () {
      return e;
    }), a.d(n, "b", function () {
      return u;
    });
  },
  "59ce": function ce(t, n, a) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var a = {
        data: function data() {
          return {
            StatusBar: this.StatusBar,
            CustomBar: this.CustomBar
          };
        },
        name: "cu-custom",
        computed: {
          style: function style() {
            var t = this.StatusBar,
                n = this.CustomBar,
                a = this.bgImage,
                e = "height:".concat(n, "px;padding-top:").concat(t, "px;");
            return this.bgImage && (e = "".concat(e, "background:").concat(a, ";")), e;
          }
        },
        props: {
          bgColor: {
            type: String,
            default: ""
          },
          isBack: {
            type: [Boolean, String],
            default: !1
          },
          bgImage: {
            type: String,
            default: ""
          },
          isShadown: {
            type: [Boolean, String],
            default: !0
          }
        },
        methods: {
          BackPage: function BackPage() {
            t.navigateBack({
              delta: 1
            });
          }
        }
      };
      n.default = a;
    }).call(this, a("6e42")["default"]);
  },
  "83af": function af(t, n, a) {},
  "83d8": function d8(t, n, a) {
    "use strict";

    var e = a("83af"),
        u = a.n(e);
    u.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['lib/colorui/components/cu-custom-create-component', {
  'lib/colorui/components/cu-custom-create-component': function libColoruiComponentsCuCustomCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("3fde"));
  }
}, [['lib/colorui/components/cu-custom-create-component']]]);
});
require('lib/colorui/components/cu-custom.js');
__wxRoute = 'lib/range-slider/range-slider';__wxRouteBegin = true;__wxAppCurrentFile__ = 'lib/range-slider/range-slider.js';

define('lib/range-slider/range-slider.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["lib/range-slider/range-slider"], {
  "0224": function _(e, t, a) {
    "use strict";

    var r = function r() {
      var e = this,
          t = e.$createElement;
      e._self._c;
    },
        n = [];

    a.d(t, "a", function () {
      return r;
    }), a.d(t, "b", function () {
      return n;
    });
  },
  "451d": function d(e, t, a) {
    "use strict";

    a.r(t);
    var r = a("0224"),
        n = a("5717");

    for (var i in n) {
      "default" !== i && function (e) {
        a.d(t, e, function () {
          return n[e];
        });
      }(i);
    }

    a("b6dd");
    var o = a("2877"),
        u = Object(o["a"])(n["default"], r["a"], r["b"], !1, null, null, null);
    t["default"] = u.exports;
  },
  5717: function _(e, t, a) {
    "use strict";

    a.r(t);
    var r = a("a798"),
        n = a.n(r);

    for (var i in r) {
      "default" !== i && function (e) {
        a.d(t, e, function () {
          return r[e];
        });
      }(i);
    }

    t["default"] = n.a;
  },
  8343: function _(e, t, a) {},
  a798: function a798(e, t, a) {
    "use strict";

    (function (e) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var a = e.getSystemInfoSync().windowWidth,
          r = {
        data: function data() {
          return {
            MAX_LENGTH: 700,
            maxBlockLeft: 350,
            minBlockLeft: 0,
            progressBarLeft: 0,
            progressBarWidth: 350
          };
        },
        components: {},
        props: {
          width: {
            type: Number,
            default: 750
          },
          height: {
            type: Number,
            default: 100
          },
          blockSize: {
            type: Number,
            default: 50
          },
          barHeight: {
            type: Number,
            default: 5
          },
          backgroundColor: {
            type: String,
            default: "#e9e9e9"
          },
          activeColor: {
            type: String,
            default: "#1aad19"
          },
          min: {
            type: Number,
            default: 0
          },
          max: {
            type: Number,
            default: 100
          },
          values: {
            type: Array,
            default: function _default() {
              return [0, 100];
            }
          },
          step: {
            type: Number,
            default: 1
          }
        },
        created: function created() {
          this._refresh();
        },
        onLoad: function onLoad(e) {
          this._refresh();
        },
        onUnload: function onUnload() {},
        watch: {
          width: function width(e, t, a) {
            var r = this;
            e != r.width && this._refresh();
          },
          blockSize: function blockSize(e, t, a) {
            var r = this;
            e != r.blockSize && this._refresh();
          },
          min: function min(e, t, a) {
            var r = this;
            e != r.min && r._refresh();
          },
          max: function max(e, t, a) {
            var r = this;
            e != r.max && r._refresh();
          },
          values: function values(e, t, a) {
            var r = this,
                n = r.values;
            r._isValuesValid(e) && r._isValuesValid(n) && (n[0] == t[0] && n[1] == t[1] || r._refresh());
          }
        },
        methods: {
          _pad: function _pad(e, t) {
            return Array(t - ("" + e).length + 1).join(0) + e;
          },
          _pxToRpx: function _pxToRpx(e) {
            return 750 * e / a;
          },
          _onBlockTouchStart: function _onBlockTouchStart(e) {
            var t = e.target.dataset.tag;
            "minBlock" != t && "maxBlock" != t || (e.hasOwnProperty("changedTouches") ? this._blockDownX = e.changedTouches[0].pageX : this._blockDownX = e.pageX, this._blockLeft = e.target.dataset.left, this._curBlock = e.target.dataset.tag);
          },
          _onBlockTouchMove: function _onBlockTouchMove(e) {
            var t = e.target.dataset.tag;

            if ("minBlock" == t || "maxBlock" == t) {
              var a = this,
                  r = a._calculateValues(e);

              a._refreshProgressBar(r[2], r[3]), a._refreshBlock(r[2], r[3]);
              var n = {
                minValue: this.formatNumber(r[0], this.step),
                maxValue: this.formatNumber(r[1], this.step),
                fromUser: !0,
                originalValue: {
                  minValue: r[0],
                  maxValue: r[1]
                }
              },
                  i = {};
              a.$emit("rangechange", n, i);
            }
          },
          _onBlockTouchEnd: function _onBlockTouchEnd(e) {
            var t = e.target.dataset.tag;

            if ("minBlock" == t || "maxBlock" == t) {
              var a = this,
                  r = a._calculateValues(e.mp.changedTouches[0]);

              a._refreshProgressBar(r[2], r[3]), a._refreshBlock(r[2], r[3]);
              var n = {
                minValue: this.formatNumber(r[0], this.step),
                maxValue: this.formatNumber(r[1], this.step),
                fromUser: !0,
                originalValue: {
                  minValue: r[0],
                  maxValue: r[1]
                }
              },
                  i = {};
              a.$emit("rangechange", n, i);
            }
          },
          _isValuesValid: function _isValuesValid(e) {
            return null != e && void 0 != e && 2 == e.length;
          },
          _calculateValues: function _calculateValues(e) {
            var t = e.pageX;
            e.hasOwnProperty("changedTouches") && (t = e.changedTouches[0].pageX);

            var a = this,
                r = t - a._blockDownX,
                n = a._blockLeft + a._pxToRpx(r);

            n = Math.max(0, n), n = Math.min(n, a.MAX_LENGTH);
            var i = a.minBlockLeft,
                o = a.maxBlockLeft;
            "minBlock" == a._curBlock ? i = n : o = n;
            var u = a.max - a.min,
                s = Math.min(i, o),
                l = Math.max(i, o),
                c = s / a.MAX_LENGTH * u + a.min,
                f = l / a.MAX_LENGTH * u + a.min;
            return [c, f, s, l];
          },
          _calculateBlockLeft: function _calculateBlockLeft(e, t) {
            var a = this,
                r = (a.blockSize, a.max - a.min),
                n = (e - a.min) / r * a.MAX_LENGTH,
                i = (t - a.min) / r * a.MAX_LENGTH;
            return [n, i];
          },
          _refreshProgressBar: function _refreshProgressBar(e, t) {
            var a = this,
                r = a.blockSize;
            a.progressBarLeft = e + r / 2, a.progressBarWidth = Math.abs(t - e);
          },
          _refreshBlock: function _refreshBlock(e, t) {
            var a = this;
            a.minBlockLeft = e, a.maxBlockLeft = t;
          },
          _refresh: function _refresh() {
            var e = this,
                t = e.width - e.blockSize;
            e.MAX_LENGTH = t, e.maxBlockLeft = t, e.progressBarWidth = t;
            var a = e.values;

            if (e._isValuesValid(a)) {
              a[0] = Math.max(e.min, a[0]), a[0] = Math.min(a[0], e.max), a[1] = Math.max(e.min, a[1]), a[1] = Math.min(a[1], e.max);

              var r = e._calculateBlockLeft(a[0], a[1]);

              e._refreshProgressBar(r[0], r[1]), e._refreshBlock(r[0], r[1]);
            }
          },
          formatNumber: function formatNumber(e, t) {
            var a = "" + t,
                r = a.indexOf("."),
                n = r > -1 ? a.length - r - 1 : 0,
                i = .1 * parseInt(1 + Array(("" + n).length + 1).join(0)),
                o = e * i;
            return (parseInt(o / t) * t / i).toFixed(n);
          }
        }
      };
      t.default = r;
    }).call(this, a("6e42")["default"]);
  },
  b6dd: function b6dd(e, t, a) {
    "use strict";

    var r = a("8343"),
        n = a.n(r);
    n.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['lib/range-slider/range-slider-create-component', {
  'lib/range-slider/range-slider-create-component': function libRangeSliderRangeSliderCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("451d"));
  }
}, [['lib/range-slider/range-slider-create-component']]]);
});
require('lib/range-slider/range-slider.js');
__wxRoute = 'pages/ble/ble';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/ble/ble.js';

define('pages/ble/ble.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/ble/ble"], {
  "2d18": function d18(e, t, a) {
    "use strict";

    var n = function n() {
      var e = this,
          t = e.$createElement;
      e._self._c;
    },
        l = [];

    a.d(t, "a", function () {
      return n;
    }), a.d(t, "b", function () {
      return l;
    });
  },
  "42c8": function c8(e, t, a) {},
  "9f64": function f64(e, t, a) {
    "use strict";

    a.r(t);
    var n = a("c2e0"),
        l = a.n(n);

    for (var o in n) {
      "default" !== o && function (e) {
        a.d(t, e, function () {
          return n[e];
        });
      }(o);
    }

    t["default"] = l.a;
  },
  bbd3: function bbd3(e, t, a) {
    "use strict";

    var n = a("42c8"),
        l = a.n(n);
    l.a;
  },
  bbf9: function bbf9(e, t, a) {
    "use strict";

    a.r(t);
    var n = a("2d18"),
        l = a("9f64");

    for (var o in l) {
      "default" !== o && function (e) {
        a.d(t, e, function () {
          return l[e];
        });
      }(o);
    }

    a("bbd3");
    var i = a("2877"),
        c = Object(i["a"])(l["default"], n["a"], n["b"], !1, null, "c23e8096", null);
    t["default"] = c.exports;
  },
  c2e0: function c2e0(e, t, a) {
    "use strict";

    (function (e) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var a = {
        data: function data() {
          return {
            bleData: [],
            bleIndex: [],
            modalName: "",
            available: !1,
            discovering: !1
          };
        },
        mounted: function mounted() {
          var e = this;
          e.initBle(), setInterval(function () {
            setTimeout(function () {
              e.available || e.initBle();
            }, 0);
          }, 2e3);
        },
        methods: {
          hideModal: function hideModal() {
            this.modalName = "";
          },
          ab2hex: function ab2hex(e) {
            var t = Array.prototype.map.call(new Uint8Array(e), function (e) {
              return ("00" + e.toString(16)).slice(-2);
            });
            return t.join("");
          },
          getBleState: function getBleState() {
            var t = this;
            e.onBluetoothAdapterStateChange(function (e) {
              t.available = e.available, t.discovering = e.discovering, console.log("蓝牙是否可用：" + e.available, " at pages\\ble\\ble.vue:91"), console.log("蓝牙是否搜索：" + e.discovering, " at pages\\ble\\ble.vue:92"), t.available ? t.modalName = "" : t.modalName = "isOpenBle";
            });
          },
          initBle: function initBle() {
            var t = this,
                a = 1;
            e.openBluetoothAdapter({
              success: function success(n) {
                console.log(n, " at pages\\ble\\ble.vue:109"), "openBluetoothAdapter:ok" == n.errMsg && (console.log("************************初始化蓝牙成功************************", " at pages\\ble\\ble.vue:111"), t.getBleState(), e.startBluetoothDevicesDiscovery({
                  services: [],
                  success: function success(n) {
                    console.log("************************开始搜寻旧蓝牙************************", " at pages\\ble\\ble.vue:118"), e.getBluetoothDevices({
                      success: function success(e) {
                        console.log(e, " at pages\\ble\\ble.vue:122"), e.devices[0] && console.log(t.ab2hex(e.devices[0].advertisData), " at pages\\ble\\ble.vue:124");
                      }
                    }), console.log("************************开始搜寻新蓝牙************************", " at pages\\ble\\ble.vue:129"), e.onBluetoothDeviceFound(function (e) {
                      console.log("************************新蓝牙 " + a + "************************", " at pages\\ble\\ble.vue:133"), a++;
                      var n = e.devices[0];
                      -1 == t.bleIndex.indexOf(n.deviceId) && ("" == n.name ? (t.bleData.push({
                        name: n.deviceId,
                        id: n.deviceId,
                        tag: !1
                      }), t.bleIndex.push(n.deviceId)) : (t.bleData.push({
                        name: n.name,
                        id: n.deviceId,
                        tag: !0
                      }), t.bleIndex.push(n.deviceId)));
                    });
                  }
                }));
              },
              fail: function fail(e) {
                (e.errCode = "10001") && (t.modalName = "isOpenBle");
              }
            });
          }
        }
      };
      t.default = a;
    }).call(this, a("6e42")["default"]);
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/ble/ble-create-component', {
  'pages/ble/ble-create-component': function pagesBleBleCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("bbf9"));
  }
}, [['pages/ble/ble-create-component']]]);
});
require('pages/ble/ble.js');
__wxRoute = 'pages/goal/goal';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/goal/goal.js';

define('pages/goal/goal.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/goal/goal"], {
  "105f": function f(e, n, t) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;

    var a = function a() {
      return t.e("lib/range-slider/range-slider").then(t.bind(null, "451d"));
    },
        u = {
      data: function data() {
        return {
          backgroundColor: "rgba(0,0,0,0.7)",
          slideMin: 0,
          slideMax: 3e4,
          rangeValues: [0, 1e4],
          slideMax2: 200,
          rangeValues2: [0, 50.5],
          slideWidth: 676,
          slideHeight: 100,
          slideBlockSize: 64,
          barheight: 20
        };
      },
      components: {
        RangeSlider: a
      },
      methods: {
        pad: function pad(e, n) {
          return Array(n - ("" + e).length + 1).join(0) + e;
        },
        onRangeChange: function onRangeChange(e) {
          this.rangeValues = [0, e.maxValue];
        },
        setWalk: function setWalk() {
          this.rangeValues = [0, 1e4];
        },
        onRangeChange2: function onRangeChange2(e) {
          this.rangeValues2 = [0, e.maxValue];
        },
        setWeight: function setWeight() {
          this.rangeValues2 = [0, 55];
        }
      }
    };

    n.default = u;
  },
  "3afd": function afd(e, n, t) {
    "use strict";

    t.r(n);
    var a = t("105f"),
        u = t.n(a);

    for (var r in a) {
      "default" !== r && function (e) {
        t.d(n, e, function () {
          return a[e];
        });
      }(r);
    }

    n["default"] = u.a;
  },
  "8cd0": function cd0(e, n, t) {},
  b9d8: function b9d8(e, n, t) {
    "use strict";

    var a = function a() {
      var e = this,
          n = e.$createElement;
      e._self._c;
    },
        u = [];

    t.d(n, "a", function () {
      return a;
    }), t.d(n, "b", function () {
      return u;
    });
  },
  d805: function d805(e, n, t) {
    "use strict";

    t.r(n);
    var a = t("b9d8"),
        u = t("3afd");

    for (var r in u) {
      "default" !== r && function (e) {
        t.d(n, e, function () {
          return u[e];
        });
      }(r);
    }

    t("eef7");
    var i = t("2877"),
        l = Object(i["a"])(u["default"], a["a"], a["b"], !1, null, "e13fb932", null);
    n["default"] = l.exports;
  },
  eef7: function eef7(e, n, t) {
    "use strict";

    var a = t("8cd0"),
        u = t.n(a);
    u.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/goal/goal-create-component', {
  'pages/goal/goal-create-component': function pagesGoalGoalCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("d805"));
  }
}, [['pages/goal/goal-create-component']]]);
});
require('pages/goal/goal.js');
__wxRoute = 'pages/home/home';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/home/home.js';

define('pages/home/home.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/home/home"], {
  "004e": function e(A, E, I) {
    "use strict";

    I.r(E);
    var Q = I("6520"),
        C = I("9194");

    for (var g in C) {
      "default" !== g && function (A) {
        I.d(E, A, function () {
          return C[A];
        });
      }(g);
    }

    I("3ca8");
    var B = I("2877"),
        i = Object(B["a"])(C["default"], Q["a"], Q["b"], !1, null, "d70dec54", null);
    E["default"] = i.exports;
  },
  "31a5": function a5(A, E, I) {},
  "3bf7": function bf7(A, E, I) {
    "use strict";

    (function (A) {
      Object.defineProperty(E, "__esModule", {
        value: !0
      }), E.default = void 0;
      var Q,
          C = g(I("db40"));

      function g(A) {
        return A && A.__esModule ? A : {
          default: A
        };
      }

      var B = null,
          i = {
        data: function data() {
          return {
            cWidth: "",
            cHeight: "",
            pixelRatio: 1,
            serverData: "",
            hour: 5,
            minute: 20,
            kilometer: 26,
            cardCur: 0,
            swiperList: [{
              id: 0,
              type: "image",
              url: "data:image/png;base64,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"
            }, {
              id: 1,
              type: "image",
              url: "data:image/png;base64,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"
            }, {
              id: 2,
              type: "image",
              url: "data:image/png;base64,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"
            }, {
              id: 3,
              type: "image",
              url: "data:image/png;base64,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"
            }, {
              id: 4,
              type: "image",
              url: "data:image/png;base64,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"
            }, {
              id: 5,
              type: "image",
              url: "data:image/png;base64,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"
            }, {
              id: 6,
              type: "image",
              url: "data:image/png;base64,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"
            }],
            dotStyle: !0,
            towerStart: 0,
            direction: ""
          };
        },
        mounted: function mounted() {
          Q = this, this.cWidth = A.upx2px(400), this.cHeight = A.upx2px(400), this.getServerData();
        },
        methods: {
          getServerData: function getServerData() {
            var A = {
              series: [{
                name: "跑步",
                data: 2
              }, {
                name: "骑行",
                data: 12
              }, {
                name: "健走",
                data: 1
              }, {
                name: "登山",
                data: 4
              }, {
                name: "滑雪",
                data: 1
              }]
            };
            Q.showRing("canvasRing", A);
          },
          showRing: function showRing(A, E) {
            B = new C.default({
              $this: Q,
              canvasId: A,
              type: "ring",
              fontSize: 11,
              legend: !1,
              subtitle: {
                name: "",
                color: "#666666",
                fontSize: 1 * Q.pixelRatio,
                offsetY: 2 * Q.pixelRatio
              },
              extra: {
                pie: {
                  offsetAngle: -45,
                  ringWidth: 5 * Q.pixelRatio,
                  lableWidth: 15
                }
              },
              background: "#FFFFFF",
              pixelRatio: Q.pixelRatio,
              series: E.series,
              animation: !0,
              width: Q.cWidth * Q.pixelRatio,
              height: Q.cHeight * Q.pixelRatio,
              disablePieStroke: !1,
              dataLabel: !0
            });
          },
          touchRing: function touchRing(A) {
            B.showToolTip(A, {
              format: function format(A) {
                return A.name + ":" + A.data;
              }
            });
          },
          DotStyle: function DotStyle(A) {
            this.dotStyle = A.detail.value;
          },
          cardSwiper: function cardSwiper(A) {
            this.cardCur = A.detail.current;
          },
          TowerSwiper: function TowerSwiper(A) {
            for (var E = this[A], I = 0; I < E.length; I++) {
              E[I].zIndex = parseInt(E.length / 2) + 1 - Math.abs(I - parseInt(E.length / 2)), E[I].mLeft = I - parseInt(E.length / 2);
            }

            this.swiperList = E;
          },
          TowerStart: function TowerStart(A) {
            this.towerStart = A.touches[0].pageX;
          },
          TowerMove: function TowerMove(A) {
            this.direction = A.touches[0].pageX - this.towerStart > 0 ? "right" : "left";
          },
          TowerEnd: function TowerEnd(A) {
            var E = this.direction,
                I = this.swiperList;

            if ("right" == E) {
              for (var Q = I[0].mLeft, C = I[0].zIndex, g = 1; g < this.swiperList.length; g++) {
                this.swiperList[g - 1].mLeft = this.swiperList[g].mLeft, this.swiperList[g - 1].zIndex = this.swiperList[g].zIndex;
              }

              this.swiperList[I.length - 1].mLeft = Q, this.swiperList[I.length - 1].zIndex = C;
            } else {
              for (var B = I[I.length - 1].mLeft, i = I[I.length - 1].zIndex, h = this.swiperList.length - 1; h > 0; h--) {
                this.swiperList[h].mLeft = this.swiperList[h - 1].mLeft, this.swiperList[h].zIndex = this.swiperList[h - 1].zIndex;
              }

              this.swiperList[0].mLeft = B, this.swiperList[0].zIndex = i;
            }

            this.direction = "", this.swiperList = this.swiperList;
          }
        }
      };
      E.default = i;
    }).call(this, I("6e42")["default"]);
  },
  "3ca8": function ca8(A, E, I) {
    "use strict";

    var Q = I("31a5"),
        C = I.n(Q);
    C.a;
  },
  6520: function _(A, E, I) {
    "use strict";

    var Q = function Q() {
      var A = this,
          E = A.$createElement;
      A._self._c;
    },
        C = [];

    I.d(E, "a", function () {
      return Q;
    }), I.d(E, "b", function () {
      return C;
    });
  },
  9194: function _(A, E, I) {
    "use strict";

    I.r(E);
    var Q = I("3bf7"),
        C = I.n(Q);

    for (var g in Q) {
      "default" !== g && function (A) {
        I.d(E, A, function () {
          return Q[A];
        });
      }(g);
    }

    E["default"] = C.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/home/home-create-component', {
  'pages/home/home-create-component': function pagesHomeHomeCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("004e"));
  }
}, [['pages/home/home-create-component']]]);
});
require('pages/home/home.js');
__wxRoute = 'pages/mine/mine';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mine/mine.js';

define('pages/mine/mine.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/mine/mine"], {
  "0b4a": function b4a(A, t, n) {
    "use strict";

    n.r(t);
    var i = n("24a2"),
        e = n.n(i);

    for (var a in i) {
      "default" !== a && function (A) {
        n.d(t, A, function () {
          return i[A];
        });
      }(a);
    }

    t["default"] = e.a;
  },
  "24a2": function a2(A, t, n) {
    "use strict";

    (function (A) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n = {
        data: function data() {
          return {
            login: !1,
            avatarUrl: "data:image/png;base64,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",
            uerInfo: {},
            loginOutShow: !1
          };
        },
        methods: {
          goLogin: function goLogin() {
            this.login || (console.log("点击前往登录", " at pages\\mine\\mine.vue:90"), A.navigateTo({
              url: "./mine/children/login",
              animationType: "pop-in",
              animationDuration: 200
            }));
          },
          loginOut: function loginOut() {
            var A = this;
            A.loginOutShow ? (console.log("退出登录", " at pages\\mine\\mine.vue:102"), A.loginOutShow = !1) : A.loginOutShow = !0;
          },
          loginOutHide: function loginOutHide() {
            this.loginOutShow = !1;
          }
        }
      };
      t.default = n;
    }).call(this, n("6e42")["default"]);
  },
  "6cbb": function cbb(A, t, n) {
    "use strict";

    n.r(t);
    var i = n("f73c"),
        e = n("0b4a");

    for (var a in e) {
      "default" !== a && function (A) {
        n.d(t, A, function () {
          return e[A];
        });
      }(a);
    }

    n("afb9");
    var o = n("2877"),
        g = Object(o["a"])(e["default"], i["a"], i["b"], !1, null, "d532e254", null);
    t["default"] = g.exports;
  },
  "74c4": function c4(A, t, n) {},
  afb9: function afb9(A, t, n) {
    "use strict";

    var i = n("74c4"),
        e = n.n(i);
    e.a;
  },
  f73c: function f73c(A, t, n) {
    "use strict";

    var i = function i() {
      var A = this,
          t = A.$createElement;
      A._self._c;
    },
        e = [];

    n.d(t, "a", function () {
      return i;
    }), n.d(t, "b", function () {
      return e;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/mine/mine-create-component', {
  'pages/mine/mine-create-component': function pagesMineMineCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("6cbb"));
  }
}, [['pages/mine/mine-create-component']]]);
});
require('pages/mine/mine.js');
__wxRoute = 'pages/motion/motion';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/motion/motion.js';

define('pages/motion/motion.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/motion/motion"], {
  "20b5": function b5(M, N, j) {
    "use strict";

    (function (M) {
      Object.defineProperty(N, "__esModule", {
        value: !0
      }), N.default = void 0;
      var j = {
        contentmain: "请连接蓝牙进行操作",
        content: {
          0: "请连接蓝牙设备和打开位置服务进行操作",
          1: "坚持运动"
        }
      },
          I = [{
        title: "跑步",
        img: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTU5OTY4Mzc1ODcwIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9Ijk3NSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTY4LjkwNSAzMTkuNDg4YTQ1LjUyNCA0NS40ODggMCAxIDAgOTEuMDQ4IDAgNDUuNTI0IDQ1LjQ4OCAwIDEgMC05MS4wNDggMFoiIGZpbGw9IiM5Qjk3QUQiIHAtaWQ9Ijk3NiI+PC9wYXRoPjxwYXRoIGQ9Ik0zOTUuOTIgNDQ4LjUyMmMyMy4yMDItMjguNTYgNDIuMzktNDIuODM5IDU3LjU2NS00Mi44MzloNjEuOTc2Yy0yMS43NiA1OC4yOTMtNDEuODExIDk3Ljc3Mi02MC4xNTMgMTE4LjQzNy0yNy41MTEgMzAuOTk4LTQxLjQwOCA0NS40ODktODYuOTMyIDQ1LjQ4OS0zMC4zNDkgMC01Ni45MDUtMTUuMTYzLTc5LjY2Ni00NS40ODlMMjczIDU0Ni4zNjJjMzQuNDM2IDQxLjQyIDY4Ljk0NSA2NC45NiAxMDMuNTI2IDcwLjYyMiA1Ny40NDQgOS40MDQgODguNjEzLTE1LjcxNCAxMTcuMDQtMzYuMDAzIDIyLjc2MyAxMS4zNzIgODkuNjA4IDMyLjg5IDgzLjkwOCA3OC4wNjctMy44IDMwLjExOC0xNC40NjYgNjQuNzQ2LTMxLjk5NyAxMDMuODg2aDM5LjEzN2MyMC41ODUtMzEuNDA4IDM0LjY3LTY5Ljg1NiA0Mi4yNTgtMTE1LjM0NCA3LjU4Ny00NS40ODktMjEuODY3LTg1LjM2LTg4LjM2NC0xMTkuNjE1bDQzLjE2LTU0LjQ0NmMxMy41MSAzNi4zNCAzMS42NDYgNTguMzAyIDU0LjQwNyA2NS44ODMgMjIuNzYyIDcuNTgyIDU4LjcyLTEuMzA2IDEwNy44NzMtMjYuNjY0bC0xMS4zODEtMjIuNzQ0Yy0zOC45MTggOS43Ny02NS45NjUgMTAuODY1LTgxLjE0IDMuMjg0LTIyLjc2MS0xMS4zNzMtMTYuOTktNDAuODgyLTM0LjMwOC03MC43ODQtMTkuMTIyLTMzLjAxNi0zMi41MDUtNDUuOTE3LTUzLjI1My01OC4yNDctMjAuNzUtMTIuMzMxLTEwMi43NTctMTguMDU1LTEzNy4wMTQgNS45NDEtMjIuODM4IDE1Ljk5OC00MC4yMzcgMzguNTQ2LTUyLjE5NiA2Ny42NDVsMjEuMjY0IDEwLjY4eiIgZmlsbD0iIzlCOTdBRCIgcC1pZD0iOTc3Ij48L3BhdGg+PC9zdmc+",
        url: " ",
        bgcolor: "linear-gradient(to right, rgba(229,77,66,0.7), rgba(229,77,66,0.6))",
        title_0: "距离（公里）",
        content_0: "3600",
        title_1: "时间",
        content_1: "12小时",
        title_total_0: "公里",
        content_total_0: "3600",
        title_total_1: "总时间",
        content_total_1: "12:32:29",
        title_total_2: "总次数",
        content_total_2: "1"
      }, {
        title: "健步走",
        img: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTU5OTY4Mzg1NzM4IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEwOTMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ3Ny44NDcgMjk3LjUzMmE0NS41MzggNDUuNTMyIDAgMSAwIDkxLjA3NiAwIDQ1LjUzOCA0NS41MzIgMCAxIDAtOTEuMDc2IDBaIiBmaWxsPSIjOUI5N0FEIiBwLWlkPSIxMDk0Ij48L3BhdGg+PHBhdGggZD0iTTM3NS4wODYgNTU1Ljg4OWM3Ljk1OC01MS42MzMgMTYuNjg3LTg2LjIyNSAyNi4xODgtMTAzLjc3OSAzMS4wNDctNTcuMzU5IDYzLjIxOS04My4wNDUgNzIuOTg0LTg0LjI1OSAxOS42NjYtMi40NDUgNDMuMDY5LTIuOTM0IDU0LjgwNiAwIDEzLjYxNSAzLjQwMyAyMi45NTMgMTAuNTQ2IDI4LjAxMyAyMS40MjggNC43MDUgNDcuMjYzIDExLjgzIDc2Ljc1OCAyMS4zNzQgODguNDg1IDI2LjQyNyAzMi40NyA2Ni4wNyA0My4zMjggNzcuNDU1IDQzLjMyOCAwIDExLjM4My01Ljc2IDMwLjEwMS01Ljc2IDMwLjEwMS0xNi44ODYgMC03NC42NDkgMC0xMDUuOS01MC4yNjgtMS43NTctMi44MjYtNC4xNSAxMy45My03LjE3NiA1MC4yNjggNDAuNDkgMzkuMzAxIDY2LjY1NSA3MS4xOSA3OC40OTMgOTUuNjY1IDExLjgzOCAyNC40NzUgMTcuNzQ0IDcxLjE3NiAxNy43MTggMTQwLjEwM2gtMzkuNzYzYy0yLjc3Mi0zNy42NTctNy43OTQtNjYuNzE2LTE1LjA2Ny04Ny4xNzctNy4yNzMtMjAuNDYtMjguNjU2LTQ3LjIyNS02NC4xNS04MC4yOTMtMTMuNTYzIDMyLjE4LTI4Ljc0MyA2Mi41MzQtNDUuNTM4IDkxLjA2NC0xNi43OTYgMjguNTMtMzguMzg5IDUzLjk5OC02NC43NzggNzYuNDA2SDM2NGMzMy4xNjEtNDcuNDMgNTYuNjk3LTg0LjI4MiA3MC42MDktMTEwLjU1NSAxMy45MS0yNi4yNzMgMjMuODAxLTUyLjQyMyAyOS42Ny03OC40NDlWNDM4LjQwMmMtMTAuNDcgMy4xLTIwLjM2IDE0LjEzNy0yOS42NyAzMy4xMS01Ljc5MiAxMS44MDMtMTYgMzkuOTI4LTMwLjYyNCA4NC4zNzdoLTI4Ljg5OXoiIGZpbGw9IiM5Qjk3QUQiIHAtaWQ9IjEwOTUiPjwvcGF0aD48L3N2Zz4=",
        url: " ",
        bgcolor: "linear-gradient(to right, rgba(0,129,255,0.7), rgba(0,129,255,0.6))",
        title_0: "距离（公里）",
        content_0: "- -",
        title_1: "时间",
        content_1: "0小时",
        title_total_0: "公里",
        content_total_0: "1234",
        title_total_1: "总时间",
        content_total_1: "6:32:29",
        title_total_2: "总次数",
        content_total_2: "1"
      }, {
        title: "骑行",
        img: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTU5OTY4MzYwNjc4IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9Ijg1NiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTQ2LjE0MyAzNTIuNTU2YTQ1LjUyNCA0NS41NTYgMCAxIDAgOTEuMDQ4IDAgNDUuNTI0IDQ1LjU1NiAwIDEgMC05MS4wNDggMFoiIGZpbGw9IiM5Qjk3QUQiIHAtaWQ9Ijg1NyI+PC9wYXRoPjxwYXRoIGQ9Ik02NTQuMjYyIDcxN2MtNTMuNDI3IDAtOTYuNzM4LTQzLjM0MS05Ni43MzgtOTYuODA2IDAtNTMuNDY0IDQzLjMxLTk2LjgwNSA5Ni43MzgtOTYuODA1IDUzLjQyNyAwIDk2LjczOCA0My4zNDEgOTYuNzM4IDk2LjgwNUM3NTEgNjczLjY2IDcwNy42ODkgNzE3IDY1NC4yNjIgNzE3eiBtMC0zNC4xNjdjMzQuNTcgMCA2Mi41OTUtMjguMDQ0IDYyLjU5NS02Mi42MzkgMC0zNC41OTQtMjguMDI1LTYyLjYzOC02Mi41OTUtNjIuNjM4cy02Mi41OTUgMjguMDQ0LTYyLjU5NSA2Mi42MzhjMCAzNC41OTUgMjguMDI1IDYyLjY0IDYyLjU5NSA2Mi42NHpNMzY5LjczOCA3MTdDMzE2LjMxMSA3MTcgMjczIDY3My42NTkgMjczIDYyMC4xOTRjMC01My40NjQgNDMuMzExLTk2LjgwNSA5Ni43MzgtOTYuODA1czk2LjczOCA0My4zNDEgOTYuNzM4IDk2LjgwNWMwIDUzLjQ2NS00My4zMSA5Ni44MDYtOTYuNzM4IDk2LjgwNnogbTAtMzQuMTY3YzM0LjU3IDAgNjIuNTk1LTI4LjA0NCA2Mi41OTUtNjIuNjM5IDAtMzQuNTk0LTI4LjAyNS02Mi42MzgtNjIuNTk1LTYyLjYzOHMtNjIuNTk1IDI4LjA0NC02Mi41OTUgNjIuNjM4YzAgMzQuNTk1IDI4LjAyNSA2Mi42NCA2Mi41OTUgNjIuNjR6IiBmaWxsPSIjOUI5N0FEIiBwLWlkPSI4NTgiPjwvcGF0aD48cGF0aCBkPSJNNTQwLjIwMyA0NDUuODE0bDQwLjk5IDQ1Ljk2NWg3OC45OGM5LjI1MS0yLjY1NSAxMy44NzctOC4zNjIgMTMuODc3LTE3LjEyIDAtOC43Ni00LjYyNi0xMy43NjYtMTMuODc3LTE1LjAyaC02My4xMzhsLTU2LjgzMi02NS41NDhjLTUuNjA4LTQuOTEyLTEwLjgwNS03LjM2OS0xNS41OTEtNy4zNjktNC43ODcgMC05LjMzMSAyLjQ1Ny0xMy42MzQgNy4zN2wtOTQuMjc2IDk3LjY4N2MtNC43NTQgNC4yNDEtNy4xMyA4Ljc2LTcuMTMgMTMuNTYgMCA0LjggMi4zNzYgOSA3LjEzIDEyLjYwMmw3Ni4xIDUzLjU0Ny00LjgzNCA4NC42ODFjMy4xIDExLjQ4NyA5Ljc0MiAxNy4yMyAxOS45MjUgMTcuMjNzMTYuNzM3LTQuOTYyIDE5LjY2My0xNC44ODVsNy4yOTItOTMuMTg3YzAuMzE3LTQuMTU4IDAuMzE3LTYuOTM5IDAtOC4zNDItMC4zMTgtMS40MDMtMS4zMzctMy4xMjMtMy4wNTctNS4xNmwtNTIuNTA5LTM5LjM0OSA2MC45Mi02Ni42NjJ6IiBmaWxsPSIjOUI5N0FEIiBwLWlkPSI4NTkiPjwvcGF0aD48L3N2Zz4=",
        url: " ",
        bgcolor: "linear-gradient(to right, rgba(28,187,180,0.7), rgba(28,187,180,0.6))",
        title_0: "距离（公里）",
        content_0: "23333",
        title_1: "次数",
        content_1: "1次",
        title_total_0: "公里",
        content_total_0: "3234",
        title_total_1: "总时间",
        content_total_1: "4:32:29",
        title_total_2: "总次数",
        content_total_2: "1"
      }, {
        title: "其他运动",
        img: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTU5OTY4NDA5NTM5IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEzMzYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTY2Mi41IDM3OS41bS00NS41IDBhNDUuNSA0NS41IDAgMSAwIDkxIDAgNDUuNSA0NS41IDAgMSAwLTkxIDBaIiBmaWxsPSIjOUI5N0FEIiBwLWlkPSIxMzM3Ij48L3BhdGg+PHBhdGggZD0iTTY0OS4wOTUgNTU4LjE4M2wtOC44MjktNjUuNjU2SDUzMi42NjNjLTExLjAwNy0xMS44MjMtMTMuNzU5LTIzLjI2OS04LjI1NS0zNC4zMzgtMTIuNTg1LTguNjEtNy40NjgtMzMuMTg5IDguMjU1LTMzLjE4OSAxMC40ODMgMCA0OS4yOTQgNS45ODggMTE2LjQzMiAxNy45NjVoMjAuNjJjMzIuNDI0LTEyLjEyIDUxLjE4Mi03LjA0NSA1Ni4yNzMgMTUuMjI0IDUuMDkxIDIyLjI2OCAxMy4yNjcgNjYuMTQ1IDI0LjUyNyAxMzEuNjMgNS42NDIgMTguNzc2LTQuNzkgMzEuMjM1LTMxLjI5MyAzNy4zNzctMjYuNTA0IDYuMTQyLTY0LjI3IDMuMDctMTEzLjI5Ni05LjIxM2wtNjQuODIyIDM3LjU5Yy0xNS42NDQgMS42NC0yNS4yOTUtMS40NDUtMjguOTU0LTkuMjUyLTMuNjYtNy44MDctMS44My0xNi4wMzMgNS40ODgtMjQuNjc3LTMuOTcyLTEuNDExLTcuNTIxLTUuNzI0LTEwLjY0Ny0xMi45MzktNC42ODktMTAuODIzLTAuMzMtMjAuOTQ4IDUuMTU5LTI2LjEzNCA1LjQ4OC01LjE4NiA5My43NzYtMzkuOTE3IDkzLjc3Ni0zOS45MTdsNDMuMTcgMTUuNTI5ek0yNjcgNjc0aDQ5MXYxN0gyNjd6IiBmaWxsPSIjOUI5N0FEIiBwLWlkPSIxMzM4Ij48L3BhdGg+PC9zdmc+",
        url: " ",
        bgcolor: "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.6))",
        title_0: "时间（小时）",
        content_0: "- -",
        title_1: "次数",
        content_1: "0次",
        title_total_0: "时间",
        content_total_0: "2:12:29",
        title_total_1: "总时间",
        content_total_1: "2:12:29",
        title_total_2: "总次数",
        content_total_2: "1"
      }],
          t = {
        sleep: [{
          title: "睡眠",
          mode: "sleep",
          img: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTU5OTY4Mzc1ODcwIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9Ijk3NSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTY4LjkwNSAzMTkuNDg4YTQ1LjUyNCA0NS40ODggMCAxIDAgOTEuMDQ4IDAgNDUuNTI0IDQ1LjQ4OCAwIDEgMC05MS4wNDggMFoiIGZpbGw9IiM5Qjk3QUQiIHAtaWQ9Ijk3NiI+PC9wYXRoPjxwYXRoIGQ9Ik0zOTUuOTIgNDQ4LjUyMmMyMy4yMDItMjguNTYgNDIuMzktNDIuODM5IDU3LjU2NS00Mi44MzloNjEuOTc2Yy0yMS43NiA1OC4yOTMtNDEuODExIDk3Ljc3Mi02MC4xNTMgMTE4LjQzNy0yNy41MTEgMzAuOTk4LTQxLjQwOCA0NS40ODktODYuOTMyIDQ1LjQ4OS0zMC4zNDkgMC01Ni45MDUtMTUuMTYzLTc5LjY2Ni00NS40ODlMMjczIDU0Ni4zNjJjMzQuNDM2IDQxLjQyIDY4Ljk0NSA2NC45NiAxMDMuNTI2IDcwLjYyMiA1Ny40NDQgOS40MDQgODguNjEzLTE1LjcxNCAxMTcuMDQtMzYuMDAzIDIyLjc2MyAxMS4zNzIgODkuNjA4IDMyLjg5IDgzLjkwOCA3OC4wNjctMy44IDMwLjExOC0xNC40NjYgNjQuNzQ2LTMxLjk5NyAxMDMuODg2aDM5LjEzN2MyMC41ODUtMzEuNDA4IDM0LjY3LTY5Ljg1NiA0Mi4yNTgtMTE1LjM0NCA3LjU4Ny00NS40ODktMjEuODY3LTg1LjM2LTg4LjM2NC0xMTkuNjE1bDQzLjE2LTU0LjQ0NmMxMy41MSAzNi4zNCAzMS42NDYgNTguMzAyIDU0LjQwNyA2NS44ODMgMjIuNzYyIDcuNTgyIDU4LjcyLTEuMzA2IDEwNy44NzMtMjYuNjY0bC0xMS4zODEtMjIuNzQ0Yy0zOC45MTggOS43Ny02NS45NjUgMTAuODY1LTgxLjE0IDMuMjg0LTIyLjc2MS0xMS4zNzMtMTYuOTktNDAuODgyLTM0LjMwOC03MC43ODQtMTkuMTIyLTMzLjAxNi0zMi41MDUtNDUuOTE3LTUzLjI1My01OC4yNDctMjAuNzUtMTIuMzMxLTEwMi43NTctMTguMDU1LTEzNy4wMTQgNS45NDEtMjIuODM4IDE1Ljk5OC00MC4yMzcgMzguNTQ2LTUyLjE5NiA2Ny42NDVsMjEuMjY0IDEwLjY4eiIgZmlsbD0iIzlCOTdBRCIgcC1pZD0iOTc3Ij48L3BhdGg+PC9zdmc+",
          url: " ",
          bgcolor: "rgba(229,77,66,0.7)",
          content: [{
            time: "昨日11:30",
            content: "开始睡眠",
            color: "rgba(0,0,0,0.7)"
          }, {
            time: "昨日11:46",
            content: "浅度睡眠",
            color: "rgba(0,129,255,0.7)"
          }, {
            time: "凌晨12:02",
            content: "深度睡眠",
            color: "rgba(229,77,66,0.7)"
          }, {
            time: "结束06:09",
            color: "rgba(0,0,0,0.7)"
          }]
        }],
        heartbeat: [{
          title: "心跳",
          mode: "heartbeat",
          img: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTU5OTY4Mzc1ODcwIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9Ijk3NSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTY4LjkwNSAzMTkuNDg4YTQ1LjUyNCA0NS40ODggMCAxIDAgOTEuMDQ4IDAgNDUuNTI0IDQ1LjQ4OCAwIDEgMC05MS4wNDggMFoiIGZpbGw9IiM5Qjk3QUQiIHAtaWQ9Ijk3NiI+PC9wYXRoPjxwYXRoIGQ9Ik0zOTUuOTIgNDQ4LjUyMmMyMy4yMDItMjguNTYgNDIuMzktNDIuODM5IDU3LjU2NS00Mi44MzloNjEuOTc2Yy0yMS43NiA1OC4yOTMtNDEuODExIDk3Ljc3Mi02MC4xNTMgMTE4LjQzNy0yNy41MTEgMzAuOTk4LTQxLjQwOCA0NS40ODktODYuOTMyIDQ1LjQ4OS0zMC4zNDkgMC01Ni45MDUtMTUuMTYzLTc5LjY2Ni00NS40ODlMMjczIDU0Ni4zNjJjMzQuNDM2IDQxLjQyIDY4Ljk0NSA2NC45NiAxMDMuNTI2IDcwLjYyMiA1Ny40NDQgOS40MDQgODguNjEzLTE1LjcxNCAxMTcuMDQtMzYuMDAzIDIyLjc2MyAxMS4zNzIgODkuNjA4IDMyLjg5IDgzLjkwOCA3OC4wNjctMy44IDMwLjExOC0xNC40NjYgNjQuNzQ2LTMxLjk5NyAxMDMuODg2aDM5LjEzN2MyMC41ODUtMzEuNDA4IDM0LjY3LTY5Ljg1NiA0Mi4yNTgtMTE1LjM0NCA3LjU4Ny00NS40ODktMjEuODY3LTg1LjM2LTg4LjM2NC0xMTkuNjE1bDQzLjE2LTU0LjQ0NmMxMy41MSAzNi4zNCAzMS42NDYgNTguMzAyIDU0LjQwNyA2NS44ODMgMjIuNzYyIDcuNTgyIDU4LjcyLTEuMzA2IDEwNy44NzMtMjYuNjY0bC0xMS4zODEtMjIuNzQ0Yy0zOC45MTggOS43Ny02NS45NjUgMTAuODY1LTgxLjE0IDMuMjg0LTIyLjc2MS0xMS4zNzMtMTYuOTktNDAuODgyLTM0LjMwOC03MC43ODQtMTkuMTIyLTMzLjAxNi0zMi41MDUtNDUuOTE3LTUzLjI1My01OC4yNDctMjAuNzUtMTIuMzMxLTEwMi43NTctMTguMDU1LTEzNy4wMTQgNS45NDEtMjIuODM4IDE1Ljk5OC00MC4yMzcgMzguNTQ2LTUyLjE5NiA2Ny42NDVsMjEuMjY0IDEwLjY4eiIgZmlsbD0iIzlCOTdBRCIgcC1pZD0iOTc3Ij48L3BhdGg+PC9zdmc+",
          url: " ",
          bgcolor: "rgba(229,77,66,0.7)",
          content: [{
            time: "昨日11:30",
            content: "开始睡眠",
            color: "rgba(0,0,0,0.7)"
          }, {
            time: "昨日11:46",
            content: "浅度睡眠",
            color: "rgba(0,129,255,0.7)"
          }, {
            time: "凌晨12:02",
            content: "深度睡眠",
            color: "rgba(229,77,66,0.7)"
          }, {
            time: "结束06:09",
            color: "rgba(0,0,0,0.7)"
          }]
        }],
        pulse: [{
          title: "脉搏",
          mode: "pulse",
          img: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTU5OTY4Mzc1ODcwIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9Ijk3NSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTY4LjkwNSAzMTkuNDg4YTQ1LjUyNCA0NS40ODggMCAxIDAgOTEuMDQ4IDAgNDUuNTI0IDQ1LjQ4OCAwIDEgMC05MS4wNDggMFoiIGZpbGw9IiM5Qjk3QUQiIHAtaWQ9Ijk3NiI+PC9wYXRoPjxwYXRoIGQ9Ik0zOTUuOTIgNDQ4LjUyMmMyMy4yMDItMjguNTYgNDIuMzktNDIuODM5IDU3LjU2NS00Mi44MzloNjEuOTc2Yy0yMS43NiA1OC4yOTMtNDEuODExIDk3Ljc3Mi02MC4xNTMgMTE4LjQzNy0yNy41MTEgMzAuOTk4LTQxLjQwOCA0NS40ODktODYuOTMyIDQ1LjQ4OS0zMC4zNDkgMC01Ni45MDUtMTUuMTYzLTc5LjY2Ni00NS40ODlMMjczIDU0Ni4zNjJjMzQuNDM2IDQxLjQyIDY4Ljk0NSA2NC45NiAxMDMuNTI2IDcwLjYyMiA1Ny40NDQgOS40MDQgODguNjEzLTE1LjcxNCAxMTcuMDQtMzYuMDAzIDIyLjc2MyAxMS4zNzIgODkuNjA4IDMyLjg5IDgzLjkwOCA3OC4wNjctMy44IDMwLjExOC0xNC40NjYgNjQuNzQ2LTMxLjk5NyAxMDMuODg2aDM5LjEzN2MyMC41ODUtMzEuNDA4IDM0LjY3LTY5Ljg1NiA0Mi4yNTgtMTE1LjM0NCA3LjU4Ny00NS40ODktMjEuODY3LTg1LjM2LTg4LjM2NC0xMTkuNjE1bDQzLjE2LTU0LjQ0NmMxMy41MSAzNi4zNCAzMS42NDYgNTguMzAyIDU0LjQwNyA2NS44ODMgMjIuNzYyIDcuNTgyIDU4LjcyLTEuMzA2IDEwNy44NzMtMjYuNjY0bC0xMS4zODEtMjIuNzQ0Yy0zOC45MTggOS43Ny02NS45NjUgMTAuODY1LTgxLjE0IDMuMjg0LTIyLjc2MS0xMS4zNzMtMTYuOTktNDAuODgyLTM0LjMwOC03MC43ODQtMTkuMTIyLTMzLjAxNi0zMi41MDUtNDUuOTE3LTUzLjI1My01OC4yNDctMjAuNzUtMTIuMzMxLTEwMi43NTctMTguMDU1LTEzNy4wMTQgNS45NDEtMjIuODM4IDE1Ljk5OC00MC4yMzcgMzguNTQ2LTUyLjE5NiA2Ny42NDVsMjEuMjY0IDEwLjY4eiIgZmlsbD0iIzlCOTdBRCIgcC1pZD0iOTc3Ij48L3BhdGg+PC9zdmc+",
          url: " ",
          bgcolor: "rgba(229,77,66,0.7)",
          content: [{
            time: "昨日11:30",
            content: "开始睡眠",
            color: "rgba(0,0,0,0.7)"
          }, {
            time: "昨日11:46",
            content: "浅度睡眠",
            color: "rgba(0,129,255,0.7)"
          }, {
            time: "凌晨12:02",
            content: "深度睡眠",
            color: "rgba(229,77,66,0.7)"
          }, {
            time: "结束06:09",
            color: "rgba(0,0,0,0.7)"
          }]
        }]
      },
          D = {
        data: function data() {
          return {
            notice: j,
            ydList: I,
            jkList: t,
            TabCur: "sleep"
          };
        },
        mounted: function mounted() {},
        methods: {
          noticeClose: function noticeClose(M) {
            this.notice.contentmain = "";
          },
          noticeRun: function noticeRun(M) {},
          tabSelect: function tabSelect(M) {
            this.TabCur = M.currentTarget.dataset.id;
          },
          ydToUrl: function ydToUrl(N) {
            var j = I[N],
                t = JSON.stringify({
              title: j.title,
              bgcolor: j.bgcolor,
              title_total_0: j.title_total_0,
              content_total_0: j.content_total_0,
              title_total_1: j.title_total_1,
              content_total_1: j.content_total_1,
              title_total_2: j.title_total_2,
              content_total_2: j.content_total_2
            });
            console.log(t, " at pages\\motion\\motion.vue:369"), -1 != t.indexOf("title_total_0") && M.navigateTo({
              url: "./motion/children/motion_ydData?id=1&datas=" + t,
              animationType: "pop-in",
              animationDuration: 200
            });
          }
        }
      };
      N.default = D;
    }).call(this, j("6e42")["default"]);
  },
  "5ab0": function ab0(M, N, j) {
    "use strict";

    j.r(N);
    var I = j("20b5"),
        t = j.n(I);

    for (var D in I) {
      "default" !== D && function (M) {
        j.d(N, M, function () {
          return I[M];
        });
      }(D);
    }

    N["default"] = t.a;
  },
  "717a": function a(M, N, j) {
    "use strict";

    var I = function I() {
      var M = this,
          N = M.$createElement;
      M._self._c;
    },
        t = [];

    j.d(N, "a", function () {
      return I;
    }), j.d(N, "b", function () {
      return t;
    });
  },
  "72bc": function bc(M, N, j) {
    "use strict";

    var I = j("d2ba"),
        t = j.n(I);
    t.a;
  },
  a993: function a993(M, N, j) {
    "use strict";

    j.r(N);
    var I = j("717a"),
        t = j("5ab0");

    for (var D in t) {
      "default" !== D && function (M) {
        j.d(N, M, function () {
          return t[M];
        });
      }(D);
    }

    j("72bc");
    var L = j("2877"),
        T = Object(L["a"])(t["default"], I["a"], I["b"], !1, null, "7c5a5588", null);
    N["default"] = T.exports;
  },
  d2ba: function d2ba(M, N, j) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/motion/motion-create-component', {
  'pages/motion/motion-create-component': function pagesMotionMotionCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("a993"));
  }
}, [['pages/motion/motion-create-component']]]);
});
require('pages/motion/motion.js');

__wxRoute = 'pages/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index.js';

define('pages/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index"],{"9b5f":function(e,t,n){"use strict";var u=n("ddc3"),a=n.n(u);a.a},a2f1:function(e,t,n){"use strict";n.r(t);var u=n("e578"),a=n.n(u);for(var r in u)"default"!==r&&function(e){n.d(t,e,function(){return u[e]})}(r);t["default"]=a.a},d18d:function(e,t,n){"use strict";n.r(t);var u=n("eb73"),a=n("a2f1");for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);n("9b5f");var o=n("2877"),c=Object(o["a"])(a["default"],u["a"],u["b"],!1,null,"1dbfeb55",null);t["default"]=c.exports},ddc3:function(e,t,n){},e578:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{PageCur:"home",toPageCur:""}},methods:{NavChange:function(e){this.PageCur=e.currentTarget.dataset.cur}},watch:{PageCur:function(t){var n=this;"ble"!=t&&"ble"==n.toPageCur&&e.stopBluetoothDevicesDiscovery({success:function(e){console.log("关闭蓝牙搜索"+e," at pages\\index.vue:60")}}),n.toPageCur=t}}};t.default=n}).call(this,n("6e42")["default"])},eb73:function(e,t,n){"use strict";var u=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return u}),n.d(t,"b",function(){return a})}},[["17f6","common/runtime","common/vendor"]]]);
});
require('pages/index.js');
__wxRoute = 'pages/motion/children/motion_ydData';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/motion/children/motion_ydData.js';

define('pages/motion/children/motion_ydData.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/motion/children/motion_ydData"],{"11e9":function(n,t,a){"use strict";var e=a("e36a"),u=a.n(e);u.a},"7f00":function(n,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{datas:{}}},onLoad:function(n){this.datas=JSON.parse(n.datas)}};t.default=e},"8afa":function(n,t,a){"use strict";a.r(t);var e=a("bb72"),u=a("d525");for(var o in u)"default"!==o&&function(n){a.d(t,n,function(){return u[n]})}(o);a("11e9");var r=a("2877"),i=Object(r["a"])(u["default"],e["a"],e["b"],!1,null,"41a5a8b2",null);t["default"]=i.exports},bb72:function(n,t,a){"use strict";var e=function(){var n=this,t=n.$createElement;n._self._c},u=[];a.d(t,"a",function(){return e}),a.d(t,"b",function(){return u})},d525:function(n,t,a){"use strict";a.r(t);var e=a("7f00"),u=a.n(e);for(var o in e)"default"!==o&&function(n){a.d(t,n,function(){return e[n]})}(o);t["default"]=u.a},e36a:function(n,t,a){}},[["8b59","common/runtime","common/vendor"]]]);
});
require('pages/motion/children/motion_ydData.js');
__wxRoute = 'pages/mine/children/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mine/children/login.js';

define('pages/mine/children/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/children/login"],{"871f":function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement;n._self._c},r=[];e.d(t,"a",function(){return o}),e.d(t,"b",function(){return r})},"9aab":function(n,t,e){"use strict";e.r(t);var o=e("871f"),r=e("ff9e");for(var i in r)"default"!==i&&function(n){e.d(t,n,function(){return r[n]})}(i);e("ce1b");var u=e("2877"),a=Object(u["a"])(r["default"],o["a"],o["b"],!1,null,null,null);t["default"]=a.exports},a17a:function(n,t,e){},b9e3:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=e("2f62");function r(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},o=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.forEach(function(t){i(n,t,e[t])})}return n}function i(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var u={onLoad:function(){this},data:function(){return{phoneno:"",password:""}},methods:r({},(0,o.mapMutations)(["login"]),{bindLogin:function(){11==this.phoneno.length?this.password.length<6?n.showToast({icon:"none",position:"top",title:"密码不正确"}):n.showToast({icon:"success",position:"top",title:"登陆成功"}):n.showToast({icon:"none",position:"top",title:"手机号不正确"})}})};t.default=u}).call(this,e("6e42")["default"])},ce1b:function(n,t,e){"use strict";var o=e("a17a"),r=e.n(o);r.a},ff9e:function(n,t,e){"use strict";e.r(t);var o=e("b9e3"),r=e.n(o);for(var i in o)"default"!==i&&function(n){e.d(t,n,function(){return o[n]})}(i);t["default"]=r.a}},[["71d1","common/runtime","common/vendor"]]]);
});
require('pages/mine/children/login.js');
__wxRoute = 'pages/mine/children/register';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mine/children/register.js';

define('pages/mine/children/register.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/children/register"],{"12ee":function(n,t,e){"use strict";e.r(t);var o=e("c882"),i=e("d703");for(var s in i)"default"!==s&&function(n){e.d(t,n,function(){return i[n]})}(s);e("341d");var c=e("2877"),a=Object(c["a"])(i["default"],o["a"],o["b"],!1,null,null,null);t["default"]=a.exports},"341d":function(n,t,e){"use strict";var o=e("c999"),i=e.n(o);i.a},ac37:function(n,t,e){"use strict";(function(n){var e,o;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={onLoad:function(){e=this},onUnload:function(){clearInterval(o),this.second=0},data:function(){return{phoneno:"",password:"",code:"",invitation:"",xieyi:!0,showPassword:!1,second:0}},computed:{yanzhengma:function(){return 0==this.second?"获取验证码":this.second<10?"重新获取0"+this.second:"重新获取"+this.second}},methods:{display:function(){this.showPassword=!this.showPassword},xieyitong:function(){this.xieyi=!this.xieyi},getcode:function(){this.second>0||(this.second=60,o=setInterval(function(){e.second--,0==e.second&&clearInterval(o)},1e3))},bindLogin:function(){0!=this.xieyi?11==this.phoneno.length?this.password.length<6?n.showToast({icon:"none",title:"密码不正确"}):4==this.code.length?console.log("注册成功"," at pages\\mine\\children\\register.vue:150"):n.showToast({icon:"none",title:"验证码不正确"}):n.showToast({icon:"none",title:"手机号不正确"}):n.showToast({icon:"none",title:"请先阅读《软件用户协议》"})}}};t.default=i}).call(this,e("6e42")["default"])},c882:function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement;n._self._c},i=[];e.d(t,"a",function(){return o}),e.d(t,"b",function(){return i})},c999:function(n,t,e){},d703:function(n,t,e){"use strict";e.r(t);var o=e("ac37"),i=e.n(o);for(var s in o)"default"!==s&&function(n){e.d(t,n,function(){return o[n]})}(s);t["default"]=i.a}},[["ed31","common/runtime","common/vendor"]]]);
});
require('pages/mine/children/register.js');
__wxRoute = 'pages/mine/children/forget';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mine/children/forget.js';

define('pages/mine/children/forget.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/children/forget"],{5397:function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement;n._self._c},s=[];e.d(t,"a",function(){return o}),e.d(t,"b",function(){return s})},"663a":function(n,t,e){"use strict";e.r(t);var o=e("5397"),s=e("d731");for(var c in s)"default"!==c&&function(n){e.d(t,n,function(){return s[n]})}(c);e("c460");var i=e("2877"),a=Object(i["a"])(s["default"],o["a"],o["b"],!1,null,null,null);t["default"]=a.exports},"97bb":function(n,t,e){"use strict";(function(n){var e,o;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s={data:function(){return{phoneno:"",second:0,code:"",showPassword:!1,password:""}},onLoad:function(){e=this},computed:{yanzhengma:function(){return 0==this.second?"获取验证码":this.second<10?"重新获取0"+this.second:"重新获取"+this.second}},methods:{display:function(){this.showPassword=!this.showPassword},getcode:function(){this.second>0||(e.second=60,o=setInterval(function(){e.second--,0==e.second&&clearInterval(o)},1e3),console.log("获取验证码"," at pages\\mine\\children\\forget.vue:83"))},bindLogin:function(){11==this.phoneno.length?this.password.length<6?n.showToast({icon:"none",title:"密码不正确"}):4==this.code.length?console.log("修改密码成功"," at pages\\mine\\children\\forget.vue:128"):n.showToast({icon:"none",title:"验证码不正确"}):n.showToast({icon:"none",title:"手机号不正确"})}}};t.default=s}).call(this,e("6e42")["default"])},c460:function(n,t,e){"use strict";var o=e("ec13"),s=e.n(o);s.a},d731:function(n,t,e){"use strict";e.r(t);var o=e("97bb"),s=e.n(o);for(var c in o)"default"!==c&&function(n){e.d(t,n,function(){return o[n]})}(c);t["default"]=s.a},ec13:function(n,t,e){}},[["24c0","common/runtime","common/vendor"]]]);
});
require('pages/mine/children/forget.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

