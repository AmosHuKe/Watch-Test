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
Z([3,'range-slider'])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'width:'],[[7],[3,'width']]],[1,'upx;height:']],[[7],[3,'height']]],[1,'upx']])
Z([3,'__e'])
Z(z[2])
Z(z[2])
Z([3,'block_'])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'_onBlockTouchStart']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'_onBlockTouchMove']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'_onBlockTouchEnd']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'minBlockLeft']])
Z([3,'minBlock'])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'width:'],[[7],[3,'blockSize']]],[1,'upx;height:']],[[7],[3,'blockSize']]],[1,'upx;margin-left:']],[[7],[3,'minBlockLeft']]],[1,'upx;']])
Z(z[8])
Z(z[2])
Z(z[2])
Z(z[2])
Z([3,'block'])
Z(z[6])
Z([[7],[3,'maxBlockLeft']])
Z([3,'maxBlock'])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'width:'],[[7],[3,'blockSize']]],[1,'upx;height:']],[[7],[3,'blockSize']]],[1,'upx;margin-left:']],[[7],[3,'maxBlockLeft']]],[1,'upx;']])
Z(z[17])
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
Z([3,'goal margin100 data-v-0d2ca4bc'])
Z([3,'bg-white'])
Z([3,'__l'])
Z([3,'data-v-0d2ca4bc'])
Z([1,false])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'backText']],[1,'content']]])
Z([3,'page data-v-0d2ca4bc'])
Z([[7],[3,'backgroundColor']])
Z([[7],[3,'barheight']])
Z(z[2])
Z([3,'__e'])
Z([[7],[3,'slideBlockSize']])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'^rangechange']],[[4],[[5],[[4],[[5],[1,'onRangeChange']]]]]]]]])
Z([[7],[3,'slideHeight']])
Z([[7],[3,'slideMax']])
Z([[7],[3,'slideMin']])
Z([1,50])
Z([[7],[3,'rangeValues']])
Z([3,'2'])
Z([[4],[[5],[1,'maxBlock']]])
Z([[7],[3,'slideWidth']])
Z(z[8])
Z(z[9])
Z(z[2])
Z(z[11])
Z(z[12])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'^rangechange']],[[4],[[5],[[4],[[5],[1,'onRangeChange2']]]]]]]]])
Z(z[15])
Z([[7],[3,'slideMax2']])
Z(z[17])
Z([1,0.5])
Z([[7],[3,'rangeValues2']])
Z([3,'3'])
Z(z[21])
Z(z[22])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,true])
Z([3,'__e'])
Z(z[0])
Z([[4],[[5],[[5],[1,'card-swiper swiperbox data-v-513f98cd']],[[2,'?:'],[[7],[3,'dotStyle']],[1,'square-dot'],[1,'round-dot']]]])
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
Z([3,'swiper-item bar-shadown data-v-513f98cd'])
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
Z([3,'page data-v-543fcaae'])
Z([[2,'?:'],[[2,'=='],[[6],[[7],[3,'notice']],[3,'contentmain']],[1,'']],[1,false],[1,true]])
Z([3,'cardTitle-jk data-v-543fcaae'])
Z([3,'index'])
Z([3,'jk'])
Z([[7],[3,'jkList']])
Z(z[3])
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'cu-item data-v-543fcaae']],[[2,'?:'],[[2,'=='],[[7],[3,'index']],[[7],[3,'TabCur']]],[1,'text-blue cur'],[1,'']]]])
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
var cI=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var oJ=_mz(z,'view',['bindtouchend',2,'bindtouchmove',1,'bindtouchstart',2,'class',3,'data-event-opts',4,'data-left',5,'data-tag',6,'style',7],[],e,s,gg)
var lK=_n('slot')
_rz(z,lK,'name',10,e,s,gg)
_(oJ,lK)
_(cI,oJ)
var aL=_mz(z,'view',['bindtouchend',11,'bindtouchmove',1,'bindtouchstart',2,'class',3,'data-event-opts',4,'data-left',5,'data-tag',6,'style',7],[],e,s,gg)
var tM=_n('slot')
_rz(z,tM,'name',19,e,s,gg)
_(aL,tM)
_(cI,aL)
_(r,cI)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var bO=_n('view')
_rz(z,bO,'class',0,e,s,gg)
var oP=_mz(z,'cu-custom',['bgColor',1,'bind:__l',1,'class',2,'isBack',3,'vueId',4,'vueSlots',5],[],e,s,gg)
_(bO,oP)
var xQ=_v()
_(bO,xQ)
var oR=function(cT,fS,hU,gg){
var cW=_v()
_(hU,cW)
if(_oz(z,11,cT,fS,gg)){cW.wxVkey=1
}
cW.wxXCkey=1
return hU
}
xQ.wxXCkey=2
_2z(z,9,oR,e,s,gg,xQ,'bleList','index','index')
_(r,bO)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var lY=_n('view')
_rz(z,lY,'class',0,e,s,gg)
var aZ=_mz(z,'cu-custom',['bgColor',1,'bind:__l',1,'class',2,'isBack',3,'vueId',4,'vueSlots',5],[],e,s,gg)
_(lY,aZ)
var t1=_mz(z,'scroll-view',['scrollY',-1,'class',7],[],e,s,gg)
var e2=_mz(z,'range-slider',['activeColor',8,'barHeight',1,'bind:__l',2,'bind:rangechange',3,'blockSize',4,'class',5,'data-event-opts',6,'height',7,'max',8,'min',9,'step',10,'values',11,'vueId',12,'vueSlots',13,'width',14],[],e,s,gg)
_(t1,e2)
var b3=_mz(z,'range-slider',['activeColor',23,'barHeight',1,'bind:__l',2,'bind:rangechange',3,'blockSize',4,'class',5,'data-event-opts',6,'height',7,'max',8,'min',9,'step',10,'values',11,'vueId',12,'vueSlots',13,'width',14],[],e,s,gg)
_(t1,b3)
_(lY,t1)
_(r,lY)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var x5=_mz(z,'swiper',['autoplay',0,'bindchange',1,'circular',1,'class',2,'data-event-opts',3,'duration',4,'indicatorActiveColor',5,'indicatorColor',6,'indicatorDots',7,'interval',8],[],e,s,gg)
var o6=_v()
_(x5,o6)
var f7=function(h9,c8,o0,gg){
var oBB=_n('view')
_rz(z,oBB,'class',14,h9,c8,gg)
var lCB=_v()
_(oBB,lCB)
if(_oz(z,15,h9,c8,gg)){lCB.wxVkey=1
}
var aDB=_v()
_(oBB,aDB)
if(_oz(z,16,h9,c8,gg)){aDB.wxVkey=1
}
lCB.wxXCkey=1
aDB.wxXCkey=1
_(o0,oBB)
return o0
}
o6.wxXCkey=2
_2z(z,12,f7,e,s,gg,o6,'item','index','index')
_(r,x5)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var eFB=_n('view')
_rz(z,eFB,'class',0,e,s,gg)
var bGB=_v()
_(eFB,bGB)
if(_oz(z,1,e,s,gg)){bGB.wxVkey=1
var cLB=_mz(z,'home',['bind:__l',2,'class',1,'vueId',2],[],e,s,gg)
_(bGB,cLB)
}
var oHB=_v()
_(eFB,oHB)
if(_oz(z,5,e,s,gg)){oHB.wxVkey=1
var hMB=_mz(z,'motion',['bind:__l',6,'class',1,'vueId',2],[],e,s,gg)
_(oHB,hMB)
}
var xIB=_v()
_(eFB,xIB)
if(_oz(z,9,e,s,gg)){xIB.wxVkey=1
var oNB=_mz(z,'ble',['bind:__l',10,'class',1,'vueId',2],[],e,s,gg)
_(xIB,oNB)
}
var oJB=_v()
_(eFB,oJB)
if(_oz(z,13,e,s,gg)){oJB.wxVkey=1
var cOB=_mz(z,'goal',['bind:__l',14,'class',1,'vueId',2],[],e,s,gg)
_(oJB,cOB)
}
var fKB=_v()
_(eFB,fKB)
if(_oz(z,17,e,s,gg)){fKB.wxVkey=1
var oPB=_mz(z,'mine',['bind:__l',18,'class',1,'vueId',2],[],e,s,gg)
_(fKB,oPB)
}
bGB.wxXCkey=1
bGB.wxXCkey=3
oHB.wxXCkey=1
oHB.wxXCkey=3
xIB.wxXCkey=1
xIB.wxXCkey=3
oJB.wxXCkey=1
oJB.wxXCkey=3
fKB.wxXCkey=1
fKB.wxXCkey=3
_(r,eFB)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var aRB=_mz(z,'cu-custom',['bgColor',0,'bind:__l',1,'isBack',1,'vueId',2,'vueSlots',3],[],e,s,gg)
_(r,aRB)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var eTB=_mz(z,'cu-custom',['bgColor',0,'bind:__l',1,'isBack',1,'vueId',2,'vueSlots',3],[],e,s,gg)
_(r,eTB)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var oVB=_mz(z,'cu-custom',['bgColor',0,'bind:__l',1,'isBack',1,'vueId',2,'vueSlots',3],[],e,s,gg)
_(r,oVB)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var oXB=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1,'hoverClass',2],[],e,s,gg)
var fYB=_v()
_(oXB,fYB)
if(_oz(z,4,e,s,gg)){fYB.wxVkey=1
}
fYB.wxXCkey=1
_(r,oXB)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var h1B=_mz(z,'cu-custom',['bgImage',0,'bind:__l',1,'class',1,'isBack',2,'isShadown',3,'vueId',4,'vueSlots',5],[],e,s,gg)
_(r,h1B)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var c3B=_mz(z,'scroll-view',['scrollY',-1,'class',0],[],e,s,gg)
var o4B=_v()
_(c3B,o4B)
if(_oz(z,1,e,s,gg)){o4B.wxVkey=1
}
var l5B=_n('view')
_rz(z,l5B,'class',2,e,s,gg)
var b9B=_v()
_(l5B,b9B)
var o0B=function(oBC,xAC,fCC,gg){
var hEC=_mz(z,'view',['bindtap',7,'class',1,'data-event-opts',2,'data-id',3],[],oBC,xAC,gg)
var oFC=_v()
_(hEC,oFC)
if(_oz(z,11,oBC,xAC,gg)){oFC.wxVkey=1
}
var cGC=_v()
_(hEC,cGC)
if(_oz(z,12,oBC,xAC,gg)){cGC.wxVkey=1
}
var oHC=_v()
_(hEC,oHC)
if(_oz(z,13,oBC,xAC,gg)){oHC.wxVkey=1
}
oFC.wxXCkey=1
cGC.wxXCkey=1
oHC.wxXCkey=1
_(fCC,hEC)
return fCC
}
b9B.wxXCkey=2
_2z(z,5,o0B,e,s,gg,b9B,'jk','index','index')
var a6B=_v()
_(l5B,a6B)
if(_oz(z,14,e,s,gg)){a6B.wxVkey=1
var lIC=_v()
_(a6B,lIC)
var aJC=function(eLC,tKC,bMC,gg){
var xOC=_v()
_(bMC,xOC)
if(_oz(z,19,eLC,tKC,gg)){xOC.wxVkey=1
}
xOC.wxXCkey=1
return bMC
}
lIC.wxXCkey=2
_2z(z,17,aJC,e,s,gg,lIC,'sleepD','index','index')
}
var t7B=_v()
_(l5B,t7B)
if(_oz(z,20,e,s,gg)){t7B.wxVkey=1
}
var e8B=_v()
_(l5B,e8B)
if(_oz(z,21,e,s,gg)){e8B.wxVkey=1
}
a6B.wxXCkey=1
t7B.wxXCkey=1
e8B.wxXCkey=1
_(c3B,l5B)
o4B.wxXCkey=1
_(r,c3B)
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

__wxAppCode__['pages/goal/goal.json']={"component":true,"usingComponents":{"cu-custom":"/lib/colorui/components/cu-custom","range-slider":"/lib/range-slider/range-slider"}};
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
  "022c": function c(e, t, a) {
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
    var r = a("022c"),
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
        mounted: function mounted() {
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
          _pxToupx: function _pxToupx(e) {
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
                n = a._blockLeft + a._pxToupx(r);

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
  "0a9a": function a9a(n, e, a) {},
  "105f": function f(n, e, a) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;

    var t = function t() {
      return a.e("lib/range-slider/range-slider").then(a.bind(null, "451d"));
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
          slideBlockSize: 50,
          barheight: 20
        };
      },
      components: {
        RangeSlider: t
      },
      methods: {
        pad: function pad(n, e) {
          return Array(e - ("" + n).length + 1).join(0) + n;
        },
        onRangeChange: function onRangeChange(n) {
          this.rangeValues = [0, n.maxValue];
        },
        setWalk: function setWalk() {
          this.rangeValues = [0, 1e4];
        },
        onRangeChange2: function onRangeChange2(n) {
          this.rangeValues2 = [0, n.maxValue];
        },
        setWeight: function setWeight() {
          this.rangeValues2 = [0, 55];
        }
      }
    };

    e.default = u;
  },
  "3afd": function afd(n, e, a) {
    "use strict";

    a.r(e);
    var t = a("105f"),
        u = a.n(t);

    for (var r in t) {
      "default" !== r && function (n) {
        a.d(e, n, function () {
          return t[n];
        });
      }(r);
    }

    e["default"] = u.a;
  },
  "3d93": function d93(n, e, a) {
    "use strict";

    var t = function t() {
      var n = this,
          e = n.$createElement;
      n._self._c;
    },
        u = [];

    a.d(e, "a", function () {
      return t;
    }), a.d(e, "b", function () {
      return u;
    });
  },
  "7a09": function a09(n, e, a) {
    "use strict";

    var t = a("0a9a"),
        u = a.n(t);
    u.a;
  },
  d805: function d805(n, e, a) {
    "use strict";

    a.r(e);
    var t = a("3d93"),
        u = a("3afd");

    for (var r in u) {
      "default" !== r && function (n) {
        a.d(e, n, function () {
          return u[n];
        });
      }(r);
    }

    a("7a09");
    var i = a("2877"),
        l = Object(i["a"])(u["default"], t["a"], t["b"], !1, null, "0d2ca4bc", null);
    e["default"] = l.exports;
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
  "004e": function e(t, _e, i) {
    "use strict";

    i.r(_e);
    var s = i("7000"),
        n = i("9194");

    for (var a in n) {
      "default" !== a && function (t) {
        i.d(_e, t, function () {
          return n[t];
        });
      }(a);
    }

    i("67a2");
    var r = i("2877"),
        o = Object(r["a"])(n["default"], s["a"], s["b"], !1, null, "513f98cd", null);
    _e["default"] = o.exports;
  },
  "3bf7": function bf7(t, e, i) {
    "use strict";

    (function (t) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var s,
          n = a(i("db40"));

      function a(t) {
        return t && t.__esModule ? t : {
          default: t
        };
      }

      var r = null,
          o = {
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
              url: "https://assets-ouch.icons8.com/thumb/434/50fcc072-a786-4cce-9647-1002b73b5f5f.png"
            }, {
              id: 1,
              type: "image",
              url: "https://assets-ouch.icons8.com/thumb/20/7c196bbb-7c80-4518-94a0-664c03d193ee.png"
            }, {
              id: 2,
              type: "image",
              url: "https://assets-ouch.icons8.com/thumb/175/e35539f4-e087-4778-95fd-7fa8eb247880.png"
            }, {
              id: 3,
              type: "image",
              url: "https://assets-ouch.icons8.com/thumb/787/e927d58d-f47d-4a10-b41a-6dffcf0a6a88.png"
            }, {
              id: 4,
              type: "image",
              url: "https://assets-ouch.icons8.com/thumb/188/3101760b-28c4-4981-9c74-47b8aa840a86.png"
            }, {
              id: 5,
              type: "image",
              url: "https://assets-ouch.icons8.com/thumb/692/0950a380-87c2-4c17-86f8-fc3a1c3d6132.png"
            }, {
              id: 6,
              type: "image",
              url: "https://assets-ouch.icons8.com/thumb/720/53674e5e-9f7c-4856-bc68-c5db866a264d.png"
            }],
            dotStyle: !0,
            towerStart: 0,
            direction: ""
          };
        },
        mounted: function mounted() {
          s = this, this.cWidth = t.upx2px(400), this.cHeight = t.upx2px(400), this.getServerData();
        },
        methods: {
          getServerData: function getServerData() {
            var t = {
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
            s.showRing("canvasRing", t);
          },
          showRing: function showRing(t, e) {
            r = new n.default({
              $this: s,
              canvasId: t,
              type: "ring",
              fontSize: 11,
              legend: !1,
              subtitle: {
                name: "",
                color: "#666666",
                fontSize: 1 * s.pixelRatio,
                offsetY: 2 * s.pixelRatio
              },
              extra: {
                pie: {
                  offsetAngle: -45,
                  ringWidth: 5 * s.pixelRatio,
                  lableWidth: 15
                }
              },
              background: "#FFFFFF",
              pixelRatio: s.pixelRatio,
              series: e.series,
              animation: !0,
              width: s.cWidth * s.pixelRatio,
              height: s.cHeight * s.pixelRatio,
              disablePieStroke: !1,
              dataLabel: !0
            });
          },
          touchRing: function touchRing(t) {
            r.showToolTip(t, {
              format: function format(t) {
                return t.name + ":" + t.data;
              }
            });
          },
          DotStyle: function DotStyle(t) {
            this.dotStyle = t.detail.value;
          },
          cardSwiper: function cardSwiper(t) {
            this.cardCur = t.detail.current;
          },
          TowerSwiper: function TowerSwiper(t) {
            for (var e = this[t], i = 0; i < e.length; i++) {
              e[i].zIndex = parseInt(e.length / 2) + 1 - Math.abs(i - parseInt(e.length / 2)), e[i].mLeft = i - parseInt(e.length / 2);
            }

            this.swiperList = e;
          },
          TowerStart: function TowerStart(t) {
            this.towerStart = t.touches[0].pageX;
          },
          TowerMove: function TowerMove(t) {
            this.direction = t.touches[0].pageX - this.towerStart > 0 ? "right" : "left";
          },
          TowerEnd: function TowerEnd(t) {
            var e = this.direction,
                i = this.swiperList;

            if ("right" == e) {
              for (var s = i[0].mLeft, n = i[0].zIndex, a = 1; a < this.swiperList.length; a++) {
                this.swiperList[a - 1].mLeft = this.swiperList[a].mLeft, this.swiperList[a - 1].zIndex = this.swiperList[a].zIndex;
              }

              this.swiperList[i.length - 1].mLeft = s, this.swiperList[i.length - 1].zIndex = n;
            } else {
              for (var r = i[i.length - 1].mLeft, o = i[i.length - 1].zIndex, c = this.swiperList.length - 1; c > 0; c--) {
                this.swiperList[c].mLeft = this.swiperList[c - 1].mLeft, this.swiperList[c].zIndex = this.swiperList[c - 1].zIndex;
              }

              this.swiperList[0].mLeft = r, this.swiperList[0].zIndex = o;
            }

            this.direction = "", this.swiperList = this.swiperList;
          }
        }
      };
      e.default = o;
    }).call(this, i("6e42")["default"]);
  },
  "481e": function e(t, _e2, i) {},
  "67a2": function a2(t, e, i) {
    "use strict";

    var s = i("481e"),
        n = i.n(s);
    n.a;
  },
  7000: function _(t, e, i) {
    "use strict";

    var s = function s() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        n = [];

    i.d(e, "a", function () {
      return s;
    }), i.d(e, "b", function () {
      return n;
    });
  },
  9194: function _(t, e, i) {
    "use strict";

    i.r(e);
    var s = i("3bf7"),
        n = i.n(s);

    for (var a in s) {
      "default" !== a && function (t) {
        i.d(e, t, function () {
          return s[t];
        });
      }(a);
    }

    e["default"] = n.a;
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
            avatarUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAARqElEQVR4Xu1dfWxk11U/57033157xp7xbna9nnnjbuu0KiXQ3TSIloSmJUU0DVTQUvgDRKVUiIoUEERCUbICCgiJBAFS/ohUVaCGVVtIq4qmaZOGKtB8tU0qkd2y9bwZe7PJ2p4Ze+z5fu8ddMaerXft+X4f9836Squ1NPeee865v3c/zwfCGJZsNqsCwKIBcDMCLBLBAhIdIcQwAoQAIExEYUScZPGJqISIFQCoEEEFgaqEuIUIS0R0Xka8AAAXUqmUNm7qQq8KtLKyEmo28a2I5iIALZpAiwh0MwC+FXYG2Y5SBaD/I8DzEjAo8AIRnjeMuR+dOoV1Ozq0m6YnAbC0snJK0s0PEdCHAOAXbBzwXvqvEsCzSPh1n0/6+smTJ3/cq4Fov3sGAJqmLRLhbwHQbwC2vnLhCgH8LxKcUxTpC/Pz80vCMXgAQ0IDYHl5eUHXzU8QwscQ4B1eUOgeHn+AgOfMgO/xhePHl0XlXUgALC0vvxsN468A8IOiKm4wvugpkuU/X5iff3mwdvbXFgoAS7ncz6NpPjA+A3/9ANJTJEl/sZBMPmf/0PbXgxAAWMrl7kTDfAAQ39cf296uRQTPKTLen0wm/9ttSVwFgKZpx0zAhxHg424rwo3+CeDxgE/59NzcXN6N/rlPVwBARJKm5X6fgP4SEafcEl6QfvMI9CepVOrziEhO8+Q4ALLZ7C0GwWMI8DNOCytyfwTwPzLCJ1Op1Hkn+XQMAEQka1ruLCDcDwCyk0J6qC8DED6rJpNnEdFwgm9HAMB38wbBvyLAzzkhlNf72J0NftuJtwfbAaBpyx8zyXwMESa8PjBO8k8E2xJKn1TV+XN29msbAJaWClMglR69UXf4Vg0aAfwbmJOfWliY3rSK5l46tgDg8uXL4Wq98TUEuMMOpm80mkTwdCjov/v48eP8ZG1psRwA/OUjbj4FiGcs5fSQ2PNkTt5l9UxgKQDeeOONRKVaexoR33k4XjZogOiHoVDwzptuumnNKuqWAeDSpUtz9Yb+bUR4i1XMHdLZrwEiuhgM+N9/4sSJFSv0YwkAVlZWppu68RIApK1g6pBGdw0QwJJfkc+cPHmyMKquRgbA6urqxPZ2+RlAPD0qM4ftB9AA0YsTE5H3z87Obg/Qal/VkQBw8SIFZCX3JADcPgoTh22H0wABPGPqyV8exR5xaADsXu0+AQi/Mhz7zrWSZQV8ig8UH/+vgKL4QZIkME2z9R4mSdj6W9cb0NR10Js66EYTdF13jsmhe6KvqqnUPcM+JA0NgCUt+wUE+M2h+ba5oSTJEAj4IeAPQiAQHKo3w9ChVq9BtVoF/lvYQvDP6XTqD4bhbygAZDLLdwOaXxmmQ7vbKIoC4fAEhILWWoZXa1WoVLaFnRUQ6FdVVX1iUP0ODIBM5nISsPEKAEQH7czO+q2BD01AKGTtwF/PM88GlaqQQNgACi2m00evDKLngQBARKhp2RdE2vEjIkTCRyASiQwi98h1y+UylCtb7FU0Mi2rCPCVcVpNfmCQ/cBAAFjStIcQ8EGrGB6Vjs+nwNRkDHiT50bhfcFmqQjNpjj7AwI6u6CqD/Wrj74BoGna7QT4NABI/RK3s57fH4CpyWhrN+9m4dPDZmkDGg1hPMNMCeEDqVTqmX700hcA2IYvk829iAA/2w9Ru+vwrp4Hn6d/EQovAwyCer0mAjtABC+n1eStiMjn3K6lLw0uadp9CPhwL2JO/B4MhmFqUkw70s3SJtRqlr/YDqVWAvrMgqo+0qtxTwCsrKycaDSNCyJY9PC0H4tO95LJ1d+LGwUhlgMi2gr4fW+fm5u71E0hPQGQ0bQnAPAjrmqVrUhlBaZjM66v+b30wHuCQjEvyMURnUuralefi64A0DTtHgL8j15CO/E7D77P53eiq5H7aDQaUNxwzdfjGv4R6A5VVZ/tJFRXAGQ07VkAZP97V0skHIGJiVYwD8+Ure0SVCplAfil/0qrasfHuo4A2D32fdttCWRJhpmZhDA7/n71wSeD9fwamKYj5v09dvqdZ4GOABDl6+cvn2cAL5ZypQzb2yUBWO88CxwIAGG+flmGmWnvff3tEedZIF9YA8MQdxY4EADCfP0RvuP3tj/JdnkLyuWRjHYsmkHoG2lVvet6YvsA0IrFA+iog2InCadjcfD5fBYpwB0ygp0IblZVlUPeXS37ACDKg48syxCfmXVn1CzslZeBtfUrQrwaHvRQtA8AGS3L0a1ct+4NBkOt+/5xKMViHhrNhuuiEMGPF9KpUx1nAFE2f8zgxMQRiIS9vf63Fb29vQXligj7ALaApNtUVX2+zds1M8CSpj2KgPe6DlU2N4rGWvZ841D4lXBjsyiEKAT0Dwuqet8+ABCRktGyryOiEAsvH//YzGscChuMFIqWeXONphKiK6qamkPElhXL1RlApOmfGTs6e9NoggrUmh+IeCMoStn7PnAVAKLs/llJ/PIXn0mIoi9L+Fhde1OIkwALs/c0cBUAGU17HgBvtUTaEYkoig9mpuMjUhGrOd8IiuNo8pOr4RYAWj79Uol3KT3tA5xQa8AfgKjghh+D6mFjowB1cewGa7KEx5PJZLE14CK9+zM/gUAAolNiW/4MCoDiRhEaDTFsBnc2fzuOJDszgKY9goB/OKhQdtUPstHnVMwu8q7QFQ0A7eNgCwAirf/MTzDIVr/jBYCNzQLU68KYjvNW8IW0qr5nZwbIaBsihWxls+/omM0AogGAiDYX0moUNU2LEqAY11S7k/NYAkCsTWBL0wgUYwC8hwC/68rC2KFTNv5kI9BxKvnCOuh6UyiR+F2AAfA7BPg5kTgbx4ug9fyqEJZBe8cZgX4XlzTtbxDwz0QCALt8zSaOicTSSLywA/Hq2hsj0bCjMd8IYiaT/RIgfNSODkahGZ85CrLsruPnKPzvbctexGwhLF6hc5jRtCcB8JdEY256Ot6K6zMOhT2H2WVMvELfYAAI8wawV0GTk1HLw7y4NQCVahm2tkQwD79eA/QCA4BToL7NLeV06petgSciR0Rjayh+ePAZBOIV+hFmMtqbgHhUNObG6T2AnUWbAtgE7htjohyKdgvYZpLDvCXiQhgnjfxtiGQLcI0wRFcYADVEDIwspQ0E2CjErfg/VonT1JtQKKxbRc5SOkRUFxoAk5NTEAqGLRXaaWLsFcTeQSKWFgBE3QOwwjjYI58GvFxE8Qk4UIe8BGQyWhYQkyIqmSOAsXeQKMGgBtWRaMag+/nnU4Cgx8A2s2wZxCcCL5ZqtQKlLVtyPVmkDnpV2IugtoShUBgmj4gZFazXKLAziCih4w7mdeciSMir4DbDPP0n4kc9twyIP/2zhvkqWNDHoL2I9eK1sDjRQbrMUwRfFvI5+HqW+VGIH4e8VNbXV8EQID5QN50R0N8KaRByENNe2gzWarVWEGnRS8sgRESTsIMUx46isag3AkVyjEBxvIA6w7BtEiacUWgnljlULFsLi3ovwNFAeOcvUOTwrpNQyyiUa4j6IHQQ9yJHDuGI4bVaVfSZf4c/oivptHpMSMeQXhoUEQSeGvwdBLQiiArpGtYLAPy7KDkDRMsV0I/uWsO/GylESOfQfoVwe08gYLaQflV3rXNoLpeLGSbxo7XnzHDdAoFu6LCxURQkLHzf496uSGROxjgV/d4AEa8A4LsGJiVAA6dBIFZOgGEGYMcxlFvuDREjnIPIIKI5aUMomqPnIHraXf+vZhYTNkjUoEJxfSfeDDiDaKm0MQx7wrQ5MEgUh4nTtOwlES2E+9Wc3+9v3RbaWYS28OlDcCJaTaupE/vCxLUuhAQKFNmHLAdWsdOlzDBMWM+LE+5tGB11DBTJxESLFTiMgBxdjKOM2VFEtvDtV96uoWJbs0AmexER3tIvQdHq2Rlinp072MnDwyWTVlMLe/kXNlz8sEpmt3K7Hov41o+dPLxa+goXL1LCiEEV7URkEWHdvHoriySEhVQqpXWdAfhHUVLG9Jbp2hpORBjnSF98D+C9cnDiKKGTRg2iZCeth0tbG1CteuTZd1eJnRJICp82rh8Q+P07YeWcSibOIV92DD/EifzZXU8Dpo3z0pEwHI7AEReyijII2OevIkgmkG4A6JY+1hOpYw8Sjr2GeeDd9hriWaC0tSXwq+CQqWNbdwK53J1o0jf7mYadqsPGobzes9ewXce9QWXh42G1VgF2BRPNGJQkfO9CMvlcJ5l6hocXJX08Dzx/8fz0K3Jhg1BOHC0GEEZMH8+KvnTp0ly90XwNER0P2MPewWz/x8mj+KHHS4UTRtYbtZaRKNsPOF2IYNvvkxdPnjz5evf9QR+cLWnafQj4cB9VLanCGcND4TCEQxFhpvlhBePlgWeFSrXq6KmBgD6zoKqP9OK75xLABIhIymi5FxDh3b0IDvs7r+ccJj4YDIPf562vvV+Zm80mVGtlYM8hBoZdhQC+l04lzyBiz6mnLwC0NoTLy6fRMF+0mmnezXMkEB74cYkM2ktHpmm0LpLYuISjiFpdSJbOLMzPv9QP3b4B0AKBpj2EgA/2Q7hXHT6+hUNh4EucG7nwMbJSrViWTOKgB5+R9wBtAkSEmpZ9HhDPDDNorWk+EIRQKOL5rODDyN+tTWt5qJahVh9heSB6SVVTtyJi3+vLQDMAC5DJXE4CNl7h7K79KoEzgYeCEQiFQsA7+8PSWQN8YthZHsqDhpffAPL/dDp9PDeIfgcGABPvN8sYB3uMhHngxbm0GUQ5btZtXS5VK8CBJnjP0LOQ9JF0ev6rPetdV2EoAOzsB3IPI9DVJMR76R4O/KDD0Ll+X0Ag+Pt0OvXHw/Q6NACISNay2X8HwLvbHfMaz0Gex+H8Powy7WzDQOAU9JVK+dojJMHXVDV59yDr/l4+hwYAE7l4kQKSkvtPBPhFvqLlq9pxyfht52COQpszkW+XS+0YBM8aevKuU6dw6Hx0IwGABVldXZ1A9GXC4fB4ZXseZZQcaFutll83TX1xdnZ2e5TuRgYAd57P59+hKMHvK4oynld4o2jYhra6bjSIGjdHo9HMqOQtAQAzceVK4aeCwcBLhyAYdUi6tzcMvV6t1s8cPTr9Qyt6sgwAzMzm5uYpROVVWVZCVjB3SONaDei6XiFqvtOKL//qxt1qJefzlTlFofOKokxYTftGptdsNrabTeltiUTkspV6sHQGaDNWKpVmDBNf8/v845Hyw0qND0GrVquvyrK5GI1GLQ8+aAsA2jKurRW+Hw5HbhlC5sMmrWd4gGpt++VEfOa0XQqxFQDM9Npa8cFgMPigJEm292WXktyga5gm1Wu1s4lE7Kyd/TsyKPl86TbFp3xTkeWIncKMC21d17cbjebtiUT0e3bL5AgAWAgiChWLm0/6/cH3iWLNa7dyB6XP1731eu1b09NTH0ZER7xOHANAWxnr6+u/piihf/H5FG9ngxp0dHvUbzb1iq5XPxGPx79iMemu5BwHwO5soBQ2Nh8P+IIfxRt8OiBO3VWvfXl6eurjiNjHu6+18HAFAG0RisXyLQTmEwG/f95asbxBrd5oLCNI98RikR+4xbGrAGgLvbqa/z2fz/d3fn8g5pYinOy32WwUdNL/KB6Lfd7Jfg/qSwgA7Lk3uNfv9/+1ovjGEgi63ixWG/U/PZaYecztgW/3LxQAfrJR3Py0okgPKIo/4ZTLt10Dwpc5utF8U28an43Hp/7Rrn6GpSskAPacGE4jSmcVJXCHoiiesh/nh5um0XiaDP1sIpGw/Tw/lgDYK1ShUPgwonK/LMunZdmmOHDDanG3nWEYDV3XXzTNxtl4PP6tEck50lzoGaCTBvL5jQ8SwL2yJL9XUZSEW6bmfITT9eaqYRjfMQz6p9nZ2HccGTULO/EkAPbKn8/nJ4nkTwHAr0uydEpRlElZkm2RyzAM0g29ZJrmBTKNLxpG89Fjx46VLRwPx0nZoijHpbiuw2Kx+C7DoLtAwttkSX47gsT2in5ESUYEGQAlRPZR2XFS2XXfNomInSkNIuJ/DQJzjUzjNdOk78oyPhmLxV51Wzar+/9/qX0yG67wZtMAAAAASUVORK5CYII=",
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
  "599f": function f(M, N, j) {},
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
  "86a5": function a5(M, N, j) {
    "use strict";

    var I = j("599f"),
        t = j.n(I);
    t.a;
  },
  a993: function a993(M, N, j) {
    "use strict";

    j.r(N);
    var I = j("d66a"),
        t = j("5ab0");

    for (var D in t) {
      "default" !== D && function (M) {
        j.d(N, M, function () {
          return t[M];
        });
      }(D);
    }

    j("86a5");
    var L = j("2877"),
        T = Object(L["a"])(t["default"], I["a"], I["b"], !1, null, "543fcaae", null);
    N["default"] = T.exports;
  },
  d66a: function d66a(M, N, j) {
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
  }
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

