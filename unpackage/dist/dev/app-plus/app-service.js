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
Z([3,'ble animation-fade data-v-3dd92140'])
Z([3,'bg-white'])
Z([3,'__l'])
Z([3,'data-v-3dd92140'])
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
Z([3,'page data-v-b810ba30'])
Z([[7],[3,'backgroundColor']])
Z([[7],[3,'barheight']])
Z([3,'__l'])
Z([3,'__e'])
Z([[7],[3,'slideBlockSize']])
Z([3,'data-v-b810ba30'])
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
Z([3,'page data-v-5b29a268'])
Z([[2,'?:'],[[2,'=='],[[7],[3,'swiperList']],[1,'']],[1,false],[1,true]])
Z([1,true])
Z([3,'__e'])
Z(z[2])
Z([[4],[[5],[[5],[[5],[1,'data-v-5b29a268']],[1,'card-swiper swiperbox animation-fade']],[[2,'?:'],[[7],[3,'dotStyle']],[1,'square-dot'],[1,'round-dot']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'cardSwiper']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'500'])
Z([3,'#0081ff'])
Z([3,'#8799a3'])
Z(z[2])
Z([3,'5000'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'swiperList']])
Z(z[12])
Z([3,'swiper-item bar-shadown data-v-5b29a268'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'image']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'video']])
Z(z[1])
Z([[2,'?:'],[[2,'=='],[[7],[3,'ringList']],[1,'']],[1,false],[[2,'?:'],[[2,'&&'],[1,true],[[2,'=='],[[7],[3,'swiperList']],[1,'']]],[1,false],[1,true]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'mainIndex data-v-2358f62b'])
Z([[2,'=='],[[7],[3,'PageCur']],[1,'home']])
Z([3,'__l'])
Z([3,'data-v-2358f62b'])
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
Z([3,'logo flexlogo data-v-3628eae8'])
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
Z([3,'data-v-471cd040'])
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
Z([3,'motion animation-fade data-v-2daf6e08'])
Z([[2,'?:'],[[2,'=='],[[6],[[7],[3,'notice']],[3,'contentmain']],[1,'']],[1,false],[1,true]])
Z([3,'page data-v-2daf6e08'])
Z([[6],[[7],[3,'goalC']],[1,0]])
Z([[6],[[7],[3,'ydList']],[1,0]])
Z(z[4])
Z([[7],[3,'jkList']])
Z(z[6])
Z([3,'cardTitle-jk data-v-2daf6e08'])
Z([3,'index'])
Z([3,'jk'])
Z(z[6])
Z(z[9])
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'cu-item data-v-2daf6e08']],[[2,'?:'],[[2,'=='],[[7],[3,'index']],[[7],[3,'TabCur']]],[1,'text-blue jk-cur cur'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'tabSelect']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'index']])
Z([[2,'=='],[[7],[3,'index']],[1,'sleep']])
Z([[2,'=='],[[7],[3,'index']],[1,'heartbeat']])
Z([[2,'=='],[[7],[3,'index']],[1,'pulse']])
Z([[2,'=='],[[7],[3,'TabCur']],[1,'sleep']])
Z(z[9])
Z([3,'sleepD'])
Z([[6],[[6],[[6],[[7],[3,'jkList']],[3,'sleep']],[1,0]],[3,'content']])
Z(z[9])
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
var aZ=_mz(z,'scroll-view',['scrollY',-1,'class',0],[],e,s,gg)
var t1=_v()
_(aZ,t1)
if(_oz(z,1,e,s,gg)){t1.wxVkey=1
var o4=_mz(z,'swiper',['autoplay',2,'bindchange',1,'circular',2,'class',3,'data-event-opts',4,'duration',5,'indicatorActiveColor',6,'indicatorColor',7,'indicatorDots',8,'interval',9],[],e,s,gg)
var x5=_v()
_(o4,x5)
var o6=function(c8,f7,h9,gg){
var cAB=_n('view')
_rz(z,cAB,'class',16,c8,f7,gg)
var oBB=_v()
_(cAB,oBB)
if(_oz(z,17,c8,f7,gg)){oBB.wxVkey=1
}
var lCB=_v()
_(cAB,lCB)
if(_oz(z,18,c8,f7,gg)){lCB.wxVkey=1
}
oBB.wxXCkey=1
lCB.wxXCkey=1
_(h9,cAB)
return h9
}
x5.wxXCkey=2
_2z(z,14,o6,e,s,gg,x5,'item','index','index')
_(t1,o4)
}
var e2=_v()
_(aZ,e2)
if(_oz(z,19,e,s,gg)){e2.wxVkey=1
}
var b3=_v()
_(aZ,b3)
if(_oz(z,20,e,s,gg)){b3.wxVkey=1
}
t1.wxXCkey=1
e2.wxXCkey=1
b3.wxXCkey=1
_(r,aZ)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var tEB=_n('view')
_rz(z,tEB,'class',0,e,s,gg)
var eFB=_v()
_(tEB,eFB)
if(_oz(z,1,e,s,gg)){eFB.wxVkey=1
var fKB=_mz(z,'home',['bind:__l',2,'class',1,'vueId',2],[],e,s,gg)
_(eFB,fKB)
}
var bGB=_v()
_(tEB,bGB)
if(_oz(z,5,e,s,gg)){bGB.wxVkey=1
var cLB=_mz(z,'motion',['bind:__l',6,'class',1,'vueId',2],[],e,s,gg)
_(bGB,cLB)
}
var oHB=_v()
_(tEB,oHB)
if(_oz(z,9,e,s,gg)){oHB.wxVkey=1
var hMB=_mz(z,'ble',['bind:__l',10,'class',1,'vueId',2],[],e,s,gg)
_(oHB,hMB)
}
var xIB=_v()
_(tEB,xIB)
if(_oz(z,13,e,s,gg)){xIB.wxVkey=1
var oNB=_mz(z,'goal',['bind:__l',14,'class',1,'vueId',2],[],e,s,gg)
_(xIB,oNB)
}
var oJB=_v()
_(tEB,oJB)
if(_oz(z,17,e,s,gg)){oJB.wxVkey=1
var cOB=_mz(z,'mine',['bind:__l',18,'class',1,'vueId',2],[],e,s,gg)
_(oJB,cOB)
}
eFB.wxXCkey=1
eFB.wxXCkey=3
bGB.wxXCkey=1
bGB.wxXCkey=3
oHB.wxXCkey=1
oHB.wxXCkey=3
xIB.wxXCkey=1
xIB.wxXCkey=3
oJB.wxXCkey=1
oJB.wxXCkey=3
_(r,tEB)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var lQB=_mz(z,'cu-custom',['bgColor',0,'bind:__l',1,'isBack',1,'vueId',2,'vueSlots',3],[],e,s,gg)
_(r,lQB)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var eTB=_mz(z,'cu-custom',['bgColor',0,'bind:__l',1,'isBack',1,'vueId',2,'vueSlots',3],[],e,s,gg)
_(r,eTB)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var oVB=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1,'hoverClass',2],[],e,s,gg)
var xWB=_v()
_(oVB,xWB)
if(_oz(z,4,e,s,gg)){xWB.wxVkey=1
}
xWB.wxXCkey=1
_(r,oVB)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var fYB=_mz(z,'cu-custom',['bgColor',0,'bind:__l',1,'class',1,'isBack',2,'isShadown',3,'vueId',4,'vueSlots',5],[],e,s,gg)
_(r,fYB)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var h1B=_n('view')
_rz(z,h1B,'class',0,e,s,gg)
var o2B=_v()
_(h1B,o2B)
if(_oz(z,1,e,s,gg)){o2B.wxVkey=1
}
var c3B=_mz(z,'scroll-view',['scrollY',-1,'class',2],[],e,s,gg)
var o4B=_v()
_(c3B,o4B)
if(_oz(z,3,e,s,gg)){o4B.wxVkey=1
}
var l5B=_v()
_(c3B,l5B)
if(_oz(z,4,e,s,gg)){l5B.wxVkey=1
}
var a6B=_v()
_(c3B,a6B)
if(_oz(z,5,e,s,gg)){a6B.wxVkey=1
}
var t7B=_v()
_(c3B,t7B)
if(_oz(z,6,e,s,gg)){t7B.wxVkey=1
}
var e8B=_v()
_(c3B,e8B)
if(_oz(z,7,e,s,gg)){e8B.wxVkey=1
var b9B=_n('view')
_rz(z,b9B,'class',8,e,s,gg)
var fCC=_v()
_(b9B,fCC)
var cDC=function(oFC,hEC,cGC,gg){
var lIC=_mz(z,'view',['bindtap',13,'class',1,'data-event-opts',2,'data-id',3],[],oFC,hEC,gg)
var aJC=_v()
_(lIC,aJC)
if(_oz(z,17,oFC,hEC,gg)){aJC.wxVkey=1
}
var tKC=_v()
_(lIC,tKC)
if(_oz(z,18,oFC,hEC,gg)){tKC.wxVkey=1
}
var eLC=_v()
_(lIC,eLC)
if(_oz(z,19,oFC,hEC,gg)){eLC.wxVkey=1
}
aJC.wxXCkey=1
tKC.wxXCkey=1
eLC.wxXCkey=1
_(cGC,lIC)
return cGC
}
fCC.wxXCkey=2
_2z(z,11,cDC,e,s,gg,fCC,'jk','index','index')
var o0B=_v()
_(b9B,o0B)
if(_oz(z,20,e,s,gg)){o0B.wxVkey=1
var bMC=_v()
_(o0B,bMC)
var oNC=function(oPC,xOC,fQC,gg){
var hSC=_v()
_(fQC,hSC)
if(_oz(z,25,oPC,xOC,gg)){hSC.wxVkey=1
}
hSC.wxXCkey=1
return fQC
}
bMC.wxXCkey=2
_2z(z,23,oNC,e,s,gg,bMC,'sleepD','index','index')
}
var xAC=_v()
_(b9B,xAC)
if(_oz(z,26,e,s,gg)){xAC.wxVkey=1
}
var oBC=_v()
_(b9B,oBC)
if(_oz(z,27,e,s,gg)){oBC.wxVkey=1
}
o0B.wxXCkey=1
xAC.wxXCkey=1
oBC.wxXCkey=1
_(e8B,b9B)
}
o4B.wxXCkey=1
l5B.wxXCkey=1
a6B.wxXCkey=1
t7B.wxXCkey=1
e8B.wxXCkey=1
_(h1B,c3B)
o2B.wxXCkey=1
_(r,h1B)
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



__wxAppCode__['app.json']={"pages":["pages/mine/children/login","pages/index","pages/motion/children/motion_ydData","pages/mine/children/register","pages/mine/children/forget"],"subPackages":[],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"手表","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8","navigationStyle":"custom"},"nvueCompiler":"weex","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"运动手表演示","compilerVersion":"2.0.1","usingComponents":{"cu-custom":"/lib/colorui/components/cu-custom","home":"/pages/home/home","motion":"/pages/motion/motion","ble":"/pages/ble/ble","goal":"/pages/goal/goal","mine":"/pages/mine/mine"}};
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

__wxAppCode__['pages/mine/children/login.json']={"usingComponents":{}};
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
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/main"],{

/***/ "../../../../Aproject/github/watch-test/App.vue":
/*!*********************************************!*\
  !*** D:/Aproject/github/watch-test/App.vue ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "../../../../Aproject/github/watch-test/App.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _App_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=less& */ "../../../../Aproject/github/watch-test/App.vue?vue&type=style&index=0&lang=less&");
/* harmony import */ var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns





/* normalize component */

var component = Object(_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "Aproject/github/watch-test/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../../../Aproject/github/watch-test/App.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** D:/Aproject/github/watch-test/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/App.vue?vue&type=script&lang=js&");
/* harmony import */ var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../Aproject/github/watch-test/App.vue?vue&type=style&index=0&lang=less&":
/*!*******************************************************************************!*\
  !*** D:/Aproject/github/watch-test/App.vue?vue&type=style&index=0&lang=less& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-1!../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--10-oneOf-1-2!../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-1-3!../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=less& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/App.vue?vue&type=style&index=0&lang=less&");
/* harmony import */ var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/App.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!D:/Aproject/github/watch-test/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =

{
  created: function created() {

    plus.navigator.closeSplashscreen();

  },
  onLaunch: function onLaunch() {

    console.log('App Launch', " at App.vue:12");
    uni.getSystemInfo({
      success: function success(e) {

        _vue.default.prototype.StatusBar = e.statusBarHeight;
        if (e.platform == 'android') {
          _vue.default.prototype.CustomBar = e.statusBarHeight + 50;
        } else {
          _vue.default.prototype.CustomBar = e.statusBarHeight + 45;
        };













      } });

  },
  onShow: function onShow() {
    console.log('App 开启', " at App.vue:39");
  },
  onHide: function onHide() {
    console.log('App 关闭', " at App.vue:42");
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-app-plus/dist/index.js */ "./node_modules/@dcloudio/uni-app-plus/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/App.vue?vue&type=style&index=0&lang=less&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-1!./node_modules/css-loader??ref--10-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!D:/Aproject/github/watch-test/App.vue?vue&type=style&index=0&lang=less& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["../../../../Aproject/github/watch-test/main.js","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict"; /******/(function (modules) {// webpackBootstrap
  /******/ // install a JSONP callback for chunk loading
  /******/function webpackJsonpCallback(data) {
    /******/var chunkIds = data[0];
    /******/var moreModules = data[1];
    /******/var executeModules = data[2];
    /******/
    /******/ // add "moreModules" to the modules object,
    /******/ // then flag all "chunkIds" as loaded and fire callback
    /******/var moduleId,chunkId,i = 0,resolves = [];
    /******/for (; i < chunkIds.length; i++) {
      /******/chunkId = chunkIds[i];
      /******/if (installedChunks[chunkId]) {
        /******/resolves.push(installedChunks[chunkId][0]);
        /******/}
      /******/installedChunks[chunkId] = 0;
      /******/}
    /******/for (moduleId in moreModules) {
      /******/if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
        /******/modules[moduleId] = moreModules[moduleId];
        /******/}
      /******/}
    /******/if (parentJsonpFunction) parentJsonpFunction(data);
    /******/
    /******/while (resolves.length) {
      /******/resolves.shift()();
      /******/}
    /******/
    /******/ // add entry modules from loaded chunk to deferred list
    /******/deferredModules.push.apply(deferredModules, executeModules || []);
    /******/
    /******/ // run deferred modules when all chunks ready
    /******/return checkDeferredModules();
    /******/};
  /******/function checkDeferredModules() {
    /******/var result;
    /******/for (var i = 0; i < deferredModules.length; i++) {
      /******/var deferredModule = deferredModules[i];
      /******/var fulfilled = true;
      /******/for (var j = 1; j < deferredModule.length; j++) {
        /******/var depId = deferredModule[j];
        /******/if (installedChunks[depId] !== 0) fulfilled = false;
        /******/}
      /******/if (fulfilled) {
        /******/deferredModules.splice(i--, 1);
        /******/result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
        /******/}
      /******/}
    /******/return result;
    /******/}
  /******/
  /******/ // The module cache
  /******/var installedModules = {};
  /******/
  /******/ // object to store loaded CSS chunks
  /******/var installedCssChunks = {
    /******/"common/runtime": 0
    /******/
    /******/
    /******/ // object to store loaded and loading chunks
    /******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
    /******/ // Promise = chunk loading, 0 = chunk loaded
    /******/ };var installedChunks = {
    /******/"common/runtime": 0
    /******/ };
  /******/
  /******/var deferredModules = [];
  /******/
  /******/ // script path function
  /******/function jsonpScriptSrc(chunkId) {
    /******/return __webpack_require__.p + "" + chunkId + ".js";
    /******/}
  /******/
  /******/ // The require function
  /******/function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/if (installedModules[moduleId]) {
      /******/return installedModules[moduleId].exports;
      /******/}
    /******/ // Create a new module (and put it into the cache)
    /******/var module = installedModules[moduleId] = {
      /******/i: moduleId,
      /******/l: false,
      /******/exports: {}
      /******/ };
    /******/
    /******/ // Execute the module function
    /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Flag the module as loaded
    /******/module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/return module.exports;
    /******/}
  /******/
  /******/ // This file contains only the entry chunk.
  /******/ // The chunk loading function for additional chunks
  /******/__webpack_require__.e = function requireEnsure(chunkId) {
    /******/var promises = [];
    /******/
    /******/
    /******/ // mini-css-extract-plugin CSS loading
    /******/var cssChunks = { "pages/ble/ble": 1, "pages/goal/goal": 1, "pages/home/home": 1, "pages/mine/mine": 1, "pages/motion/motion": 1, "lib/colorui/components/cu-custom": 1, "lib/range-slider/range-slider": 1 };
    /******/if (installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
    /******/else if (installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
        /******/promises.push(installedCssChunks[chunkId] = new Promise(function (resolve, reject) {
          /******/var href = "" + ({ "pages/ble/ble": "pages/ble/ble", "pages/goal/goal": "pages/goal/goal", "pages/home/home": "pages/home/home", "pages/mine/mine": "pages/mine/mine", "pages/motion/motion": "pages/motion/motion", "lib/colorui/components/cu-custom": "lib/colorui/components/cu-custom", "lib/range-slider/range-slider": "lib/range-slider/range-slider" }[chunkId] || chunkId) + ".wxss";
          /******/var fullhref = __webpack_require__.p + href;
          /******/var existingLinkTags = document.getElementsByTagName("link");
          /******/for (var i = 0; i < existingLinkTags.length; i++) {
            /******/var tag = existingLinkTags[i];
            /******/var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
            /******/if (tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
            /******/}
          /******/var existingStyleTags = document.getElementsByTagName("style");
          /******/for (var i = 0; i < existingStyleTags.length; i++) {
            /******/var tag = existingStyleTags[i];
            /******/var dataHref = tag.getAttribute("data-href");
            /******/if (dataHref === href || dataHref === fullhref) return resolve();
            /******/}
          /******/var linkTag = document.createElement("link");
          /******/linkTag.rel = "stylesheet";
          /******/linkTag.type = "text/css";
          /******/linkTag.onload = resolve;
          /******/linkTag.onerror = function (event) {
            /******/var request = event && event.target && event.target.src || fullhref;
            /******/var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
            /******/err.request = request;
            /******/delete installedCssChunks[chunkId];
            /******/linkTag.parentNode.removeChild(linkTag);
            /******/reject(err);
            /******/};
          /******/linkTag.href = fullhref;
          /******/
          /******/var head = document.getElementsByTagName("head")[0];
          /******/head.appendChild(linkTag);
          /******/}).then(function () {
          /******/installedCssChunks[chunkId] = 0;
          /******/}));
        /******/}
    /******/
    /******/ // JSONP chunk loading for javascript
    /******/
    /******/var installedChunkData = installedChunks[chunkId];
    /******/if (installedChunkData !== 0) {// 0 means "already installed".
      /******/
      /******/ // a Promise means "currently loading".
      /******/if (installedChunkData) {
        /******/promises.push(installedChunkData[2]);
        /******/} else {
        /******/ // setup Promise in chunk cache
        /******/var promise = new Promise(function (resolve, reject) {
          /******/installedChunkData = installedChunks[chunkId] = [resolve, reject];
          /******/});
        /******/promises.push(installedChunkData[2] = promise);
        /******/
        /******/ // start chunk loading
        /******/var script = document.createElement('script');
        /******/var onScriptComplete;
        /******/
        /******/script.charset = 'utf-8';
        /******/script.timeout = 120;
        /******/if (__webpack_require__.nc) {
          /******/script.setAttribute("nonce", __webpack_require__.nc);
          /******/}
        /******/script.src = jsonpScriptSrc(chunkId);
        /******/
        /******/onScriptComplete = function onScriptComplete(event) {
          /******/ // avoid mem leaks in IE.
          /******/script.onerror = script.onload = null;
          /******/clearTimeout(timeout);
          /******/var chunk = installedChunks[chunkId];
          /******/if (chunk !== 0) {
            /******/if (chunk) {
              /******/var errorType = event && (event.type === 'load' ? 'missing' : event.type);
              /******/var realSrc = event && event.target && event.target.src;
              /******/var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
              /******/error.type = errorType;
              /******/error.request = realSrc;
              /******/chunk[1](error);
              /******/}
            /******/installedChunks[chunkId] = undefined;
            /******/}
          /******/};
        /******/var timeout = setTimeout(function () {
          /******/onScriptComplete({ type: 'timeout', target: script });
          /******/}, 120000);
        /******/script.onerror = script.onload = onScriptComplete;
        /******/document.head.appendChild(script);
        /******/}
      /******/}
    /******/return Promise.all(promises);
    /******/};
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/__webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/__webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/__webpack_require__.d = function (exports, name, getter) {
    /******/if (!__webpack_require__.o(exports, name)) {
      /******/Object.defineProperty(exports, name, { enumerable: true, get: getter });
      /******/}
    /******/};
  /******/
  /******/ // define __esModule on exports
  /******/__webpack_require__.r = function (exports) {
    /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      /******/}
    /******/Object.defineProperty(exports, '__esModule', { value: true });
    /******/};
  /******/
  /******/ // create a fake namespace object
  /******/ // mode & 1: value is a module id, require it
  /******/ // mode & 2: merge all properties of value into the ns
  /******/ // mode & 4: return value when already ns object
  /******/ // mode & 8|1: behave like require
  /******/__webpack_require__.t = function (value, mode) {
    /******/if (mode & 1) value = __webpack_require__(value);
    /******/if (mode & 8) return value;
    /******/if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
    /******/var ns = Object.create(null);
    /******/__webpack_require__.r(ns);
    /******/Object.defineProperty(ns, 'default', { enumerable: true, value: value });
    /******/if (mode & 2 && typeof value != 'string') for (var key in value) {__webpack_require__.d(ns, key, function (key) {return value[key];}.bind(null, key));}
    /******/return ns;
    /******/};
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/__webpack_require__.n = function (module) {
    /******/var getter = module && module.__esModule ?
    /******/function getDefault() {return module['default'];} :
    /******/function getModuleExports() {return module;};
    /******/__webpack_require__.d(getter, 'a', getter);
    /******/return getter;
    /******/};
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/__webpack_require__.o = function (object, property) {return Object.prototype.hasOwnProperty.call(object, property);};
  /******/
  /******/ // __webpack_public_path__
  /******/__webpack_require__.p = "/";
  /******/
  /******/ // on error function for async loading
  /******/__webpack_require__.oe = function (err) {console.error(err);throw err;};
  /******/
  /******/var jsonpArray = global["webpackJsonp"] = global["webpackJsonp"] || [];
  /******/var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
  /******/jsonpArray.push = webpackJsonpCallback;
  /******/jsonpArray = jsonpArray.slice();
  /******/for (var i = 0; i < jsonpArray.length; i++) {webpackJsonpCallback(jsonpArray[i]);}
  /******/var parentJsonpFunction = oldJsonpFunction;
  /******/
  /******/
  /******/ // run deferred modules from other chunks
  /******/checkDeferredModules();
  /******/})(
/************************************************************************/
/******/[]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ "../../../../Aproject/github/watch-test/lib/u-charts/u-charts.js":
/*!**************************************************************!*\
  !*** D:/Aproject/github/watch-test/lib/u-charts/u-charts.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {/*
 * uCharts v1.7.0.6
 * uni-app平台高性能跨全端图表
 * 支持H5、APP、小程序（微信/支付宝/百度/头条）
 * Designed by QIUN秋云
 * 
 * uCharts官方网站
 * https://www.uCharts.cn
 * 
 * 开源地址:
 * https://github.com/16cheng/uCharts(停更)
 * 开源地址即将变更为：
 * https://gitee.com/qiuyunkeji/uCharts(尚未上传)
 * 开源协议变更为Apache-2.0
 * 
 * uni-app插件市场地址：
 * http://ext.dcloud.net.cn/plugin?id=271
 * 
 * 主要更新记录
 * 2019-04-01
 * 改造为兼容uni-app的uCharts
 * 2019-04-14
 * 支持支付宝/百度/头条小程序实现跨全端
 * 2019-04-15
 * 支持横屏模式，新增rotate参数，默认flase
 * 2019-04-16
 * 新增圆弧进度图，图表类型arcbar
 * 2019-04-22
 * 修改图表拖拽功能跨端支持，增加拖拽时显示滚动条
 * 2019-04-28
 * 新增柱状图自定义颜色
 * 2019-05-01
 * 新增仪表盘图
 * 2019-05-14
 * 新增K线图
 * 2019-05-20
 * 新增混合图、堆叠图、温度计图、柱状图类ToolTip效果
 * 
 * 
 */



var config = {
  yAxisWidth: 15,
  yAxisSplit: 5,
  xAxisHeight: 15,
  xAxisLineHeight: 15,
  legendHeight: 15,
  yAxisTitleWidth: 15,
  padding: 12,
  pixelRatio: 1, //适配H5高分屏
  rotate: false, //横屏模式
  columePadding: 3,
  fontSize: 13,
  //dataPointShape: ['diamond', 'circle', 'triangle', 'rect'],
  dataPointShape: ['circle', 'circle', 'circle', 'circle'], //仿F2图例样式改为圆点
  colors: ['#1890ff', '#2fc25b', '#facc14', '#f04864', '#8543e0', '#90ed7d'],
  pieChartLinePadding: 15,
  pieChartTextPadding: 5,
  xAxisTextPadding: 3,
  titleColor: '#333333',
  titleFontSize: 20,
  subtitleColor: '#999999',
  subtitleFontSize: 15,
  toolTipPadding: 3,
  toolTipBackground: '#000000',
  toolTipOpacity: 0.7,
  toolTipLineHeight: 20,
  radarGridCount: 3,
  radarLabelTextMargin: 15,
  gaugeLabelTextMargin: 15 };


// Object.assign polyfill
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
function assign(target, varArgs) {
  if (target == null) {
    // TypeError if undefined or null
    throw new TypeError('Cannot convert undefined or null to object');
  }

  var to = Object(target);

  for (var index = 1; index < arguments.length; index++) {
    var nextSource = arguments[index];

    if (nextSource != null) {
      // Skip over if undefined or null
      for (var nextKey in nextSource) {
        // Avoid bugs when hasOwnProperty is shadowed
        if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
          to[nextKey] = nextSource[nextKey];
        }
      }
    }
  }
  return to;
}

var util = {
  toFixed: function toFixed(num, limit) {
    limit = limit || 2;
    if (this.isFloat(num)) {
      num = num.toFixed(limit);
    }
    return num;
  },
  isFloat: function isFloat(num) {
    return num % 1 !== 0;
  },
  approximatelyEqual: function approximatelyEqual(num1, num2) {
    return Math.abs(num1 - num2) < 1e-10;
  },
  isSameSign: function isSameSign(num1, num2) {
    return Math.abs(num1) === num1 && Math.abs(num2) === num2 || Math.abs(num1) !== num1 && Math.abs(num2) !== num2;
  },
  isSameXCoordinateArea: function isSameXCoordinateArea(p1, p2) {
    return this.isSameSign(p1.x, p2.x);
  },
  isCollision: function isCollision(obj1, obj2) {
    obj1.end = {};
    obj1.end.x = obj1.start.x + obj1.width;
    obj1.end.y = obj1.start.y - obj1.height;
    obj2.end = {};
    obj2.end.x = obj2.start.x + obj2.width;
    obj2.end.y = obj2.start.y - obj2.height;
    var flag = obj2.start.x > obj1.end.x || obj2.end.x < obj1.start.x || obj2.end.y > obj1.start.y || obj2.start.y < obj1.end.y;

    return !flag;
  } };


// hex 转 rgba
function hexToRgb(hexValue, opc) {
  var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var hex = hexValue.replace(rgx, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var r = parseInt(rgb[1], 16);
  var g = parseInt(rgb[2], 16);
  var b = parseInt(rgb[3], 16);
  return 'rgba(' + r + ',' + g + ',' + b + ',' + opc + ')';
}

function findRange(num, type, limit) {
  if (isNaN(num)) {
    throw new Error('[wxCharts] unvalid series data!');
  }
  limit = limit || 10;
  type = type ? type : 'upper';
  var multiple = 1;
  while (limit < 1) {
    limit *= 10;
    multiple *= 10;
  }
  if (type === 'upper') {
    num = Math.ceil(num * multiple);
  } else {
    num = Math.floor(num * multiple);
  }
  while (num % limit !== 0) {
    if (type === 'upper') {
      num++;
    } else {
      num--;
    }
  }

  return num / multiple;
}

function calValidDistance(distance, chartData, config, opts) {

  var dataChartAreaWidth = opts.width - config.padding - chartData.xAxisPoints[0];
  var dataChartWidth = chartData.eachSpacing * opts.categories.length;
  var validDistance = distance;
  if (distance >= 0) {
    validDistance = 0;
  } else if (Math.abs(distance) >= dataChartWidth - dataChartAreaWidth) {
    validDistance = dataChartAreaWidth - dataChartWidth;
  }
  return validDistance;
}

function isInAngleRange(angle, startAngle, endAngle) {
  function adjust(angle) {
    while (angle < 0) {
      angle += 2 * Math.PI;
    }
    while (angle > 2 * Math.PI) {
      angle -= 2 * Math.PI;
    }

    return angle;
  }

  angle = adjust(angle);
  startAngle = adjust(startAngle);
  endAngle = adjust(endAngle);
  if (startAngle > endAngle) {
    endAngle += 2 * Math.PI;
    if (angle < startAngle) {
      angle += 2 * Math.PI;
    }
  }

  return angle >= startAngle && angle <= endAngle;
}

function calRotateTranslate(x, y, h) {
  var xv = x;
  var yv = h - y;

  var transX = xv + (h - yv - xv) / Math.sqrt(2);
  transX *= -1;

  var transY = (h - yv) * (Math.sqrt(2) - 1) - (h - yv - xv) / Math.sqrt(2);

  return {
    transX: transX,
    transY: transY };

}

function createCurveControlPoints(points, i) {

  function isNotMiddlePoint(points, i) {
    if (points[i - 1] && points[i + 1]) {
      return points[i].y >= Math.max(points[i - 1].y, points[i + 1].y) || points[i].y <= Math.min(points[i - 1].y, points[i + 1].y);
    } else {
      return false;
    }
  }

  var a = 0.2;
  var b = 0.2;
  var pAx = null;
  var pAy = null;
  var pBx = null;
  var pBy = null;
  if (i < 1) {
    pAx = points[0].x + (points[1].x - points[0].x) * a;
    pAy = points[0].y + (points[1].y - points[0].y) * a;
  } else {
    pAx = points[i].x + (points[i + 1].x - points[i - 1].x) * a;
    pAy = points[i].y + (points[i + 1].y - points[i - 1].y) * a;
  }

  if (i > points.length - 3) {
    var last = points.length - 1;
    pBx = points[last].x - (points[last].x - points[last - 1].x) * b;
    pBy = points[last].y - (points[last].y - points[last - 1].y) * b;
  } else {
    pBx = points[i + 1].x - (points[i + 2].x - points[i].x) * b;
    pBy = points[i + 1].y - (points[i + 2].y - points[i].y) * b;
  }

  // fix issue https://github.com/xiaolin3303/wx-charts/issues/79
  if (isNotMiddlePoint(points, i + 1)) {
    pBy = points[i + 1].y;
  }
  if (isNotMiddlePoint(points, i)) {
    pAy = points[i].y;
  }

  return {
    ctrA: { x: pAx, y: pAy },
    ctrB: { x: pBx, y: pBy } };

}

function convertCoordinateOrigin(x, y, center) {
  return {
    x: center.x + x,
    y: center.y - y };

}

function avoidCollision(obj, target) {
  if (target) {
    // is collision test
    while (util.isCollision(obj, target)) {
      if (obj.start.x > 0) {
        obj.start.y--;
      } else if (obj.start.x < 0) {
        obj.start.y++;
      } else {
        if (obj.start.y > 0) {
          obj.start.y++;
        } else {
          obj.start.y--;
        }
      }
    }
  }
  return obj;
}

function fillSeriesColor(series, config) {
  var index = 0;
  return series.map(function (item) {
    if (!item.color) {
      item.color = config.colors[index];
      index = (index + 1) % config.colors.length;
    }
    return item;
  });
}

function fillSeriesType(series, opts) {
  return series.map(function (item) {
    if (!item.type) {
      item.type = opts.type;
    }
    return item;
  });
}

function getDataRange(minData, maxData) {
  var limit = 0;
  var range = maxData - minData;
  if (range >= 10000) {
    limit = 1000;
  } else if (range >= 1000) {
    limit = 100;
  } else if (range >= 100) {
    limit = 10;
  } else if (range >= 10) {
    limit = 5;
  } else if (range >= 1) {
    limit = 1;
  } else if (range >= 0.1) {
    limit = 0.1;
  } else {
    limit = 0.01;
  }
  return {
    minRange: findRange(minData, 'lower', limit),
    maxRange: findRange(maxData, 'upper', limit) };

}

function measureText(text) {
  var fontSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : config.fontSize;

  // wx canvas 未实现measureText方法, 此处自行实现
  // 适配修改初始字体10px为其他大小的方法
  text = String(text);
  var text = text.split('');
  var width = 0;
  text.forEach(function (item) {
    if (/[a-zA-Z]/.test(item)) {
      width += 7;
    } else if (/[0-9]/.test(item)) {
      width += 5.5;
    } else if (/\./.test(item)) {
      width += 2.7;
    } else if (/-/.test(item)) {
      width += 3.25;
    } else if (/[\u4e00-\u9fa5]/.test(item)) {
      width += 10;
    } else if (/\(|\)/.test(item)) {
      width += 3.73;
    } else if (/\s/.test(item)) {
      width += 2.5;
    } else if (/%/.test(item)) {
      width += 8;
    } else {
      width += 10;
    }
  });
  return width * fontSize / 10;
}

function dataCombine(series) {
  return series.reduce(function (a, b) {
    return (a.data ? a.data : a).concat(b.data);
  }, []);
}

function dataCombineStack(series) {
  var sum = new Array(series[0].data.length);
  for (var j = 0; j < sum.length; j++) {
    sum[j] = 0;
  }
  for (var i = 0; i < series.length; i++) {
    for (var j = 0; j < sum.length; j++) {
      sum[j] += series[i].data[j];
    }
  }
  return series.reduce(function (a, b) {
    return (a.data ? a.data : a).concat(b.data).concat(sum);
  }, []);
}

function getTouches(touches, opts, e) {
  var x, y;
  if (touches.clientX) {
    if (opts.rotate) {//适配横屏
      y = opts.height - touches.clientX * opts.pixelRatio;
      x = (touches.pageY - e.mp.currentTarget.offsetTop - opts.height / opts.pixelRatio / 2 * (opts.pixelRatio - 1)) * opts.pixelRatio;
    } else {
      x = touches.clientX * opts.pixelRatio;
      y = (touches.pageY - e.mp.currentTarget.offsetTop - opts.height / opts.pixelRatio / 2 * (opts.pixelRatio - 1)) * opts.pixelRatio;
    }
  } else {
    if (opts.rotate) {//适配横屏
      y = opts.height - touches.x * opts.pixelRatio;
      x = touches.y * opts.pixelRatio;
    } else {
      x = touches.x * opts.pixelRatio;
      y = touches.y * opts.pixelRatio;
    }
  }
  return { x: x, y: y };
}

function getSeriesDataItem(series, index) {
  var data = [];
  series.forEach(function (item) {
    if (item.data[index] !== null && typeof item.data[index] !== 'undefined') {
      var seriesItem = {};
      seriesItem.color = item.color;
      seriesItem.name = item.name;
      seriesItem.data = item.format ? item.format(item.data[index]) : item.data[index];
      data.push(seriesItem);
    }
  });

  return data;
}

function getMaxTextListLength(list) {
  var lengthList = list.map(function (item) {
    return measureText(item);
  });
  return Math.max.apply(null, lengthList);
}

function getRadarCoordinateSeries(length) {
  var eachAngle = 2 * Math.PI / length;
  var CoordinateSeries = [];
  for (var i = 0; i < length; i++) {
    CoordinateSeries.push(eachAngle * i);
  }

  return CoordinateSeries.map(function (item) {
    return -1 * item + Math.PI / 2;
  });
}

function getToolTipData(seriesData, calPoints, index, categories) {
  var option = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

  var textList = seriesData.map(function (item) {
    return {
      text: option.format ? option.format(item, categories[index]) : item.name + ': ' + item.data,
      color: item.color };

  });
  var validCalPoints = [];
  var offset = {
    x: 0,
    y: 0 };

  calPoints.forEach(function (points) {
    if (typeof points[index] !== 'undefined' && points[index] !== null) {
      validCalPoints.push(points[index]);
    }
  });
  validCalPoints.forEach(function (item) {
    offset.x = Math.round(item.x);
    offset.y += item.y;
  });

  offset.y /= validCalPoints.length;
  return { textList: textList, offset: offset };
}

function getCandleToolTipData(series, seriesData, calPoints, index, categories, extra) {
  var option = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : {};
  var upColor = extra.color.upFill;
  var downColor = extra.color.downFill;
  //颜色顺序为开盘，收盘，最低，最高
  var color = [upColor, upColor, downColor, upColor];
  var textList = [];
  var text0 = {
    text: categories[index],
    color: null };

  textList.push(text0);
  seriesData.map(function (item) {
    //console.log(color)
    if (index == 0 && item.data[1] - item.data[0] < 0) {
      color[1] = downColor;
    } else {
      if (item.data[0] < series[index - 1][1]) {
        color[0] = downColor;
      }
      if (item.data[1] < item.data[0]) {
        color[1] = downColor;
      }
      if (item.data[2] > series[index - 1][1]) {
        color[2] = upColor;
      }
      if (item.data[3] < series[index - 1][1]) {
        color[3] = downColor;
      }
    }

    var text1 = {
      text: '开盘：' + item.data[0],
      color: color[0] };

    var text2 = {
      text: '收盘：' + item.data[1],
      color: color[1] };

    var text3 = {
      text: '最低：' + item.data[2],
      color: color[2] };

    var text4 = {
      text: '最高：' + item.data[3],
      color: color[3] };

    textList.push(text1, text2, text3, text4);
  });
  var validCalPoints = [];
  var offset = {
    x: 0,
    y: 0 };

  calPoints.forEach(function (points) {
    if (typeof points[index] !== 'undefined' && points[index] !== null) {
      validCalPoints.push(points[index]);
    }
  });
  offset.x = Math.round(validCalPoints[0][0].x);
  return { textList: textList, offset: offset };
}

function findCurrentIndex(currentPoints, xAxisPoints, opts, config) {
  var offset = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var currentIndex = -1;
  if (isInExactChartArea(currentPoints, opts, config)) {
    xAxisPoints.forEach(function (item, index) {
      if (currentPoints.x + offset > item) {
        currentIndex = index;
      }
    });
  }

  return currentIndex;
}

function isInExactChartArea(currentPoints, opts, config) {
  return currentPoints.x < opts.width - config.padding && currentPoints.x > config.padding + config.yAxisWidth + config.yAxisTitleWidth && currentPoints.y > config.padding && currentPoints.y < opts.height - config.legendHeight - config.xAxisHeight - config.padding;
}

function findRadarChartCurrentIndex(currentPoints, radarData, count) {
  var eachAngleArea = 2 * Math.PI / count;
  var currentIndex = -1;
  if (isInExactPieChartArea(currentPoints, radarData.center, radarData.radius)) {
    var fixAngle = function fixAngle(angle) {
      if (angle < 0) {
        angle += 2 * Math.PI;
      }
      if (angle > 2 * Math.PI) {
        angle -= 2 * Math.PI;
      }
      return angle;
    };

    var angle = Math.atan2(radarData.center.y - currentPoints.y, currentPoints.x - radarData.center.x);
    angle = -1 * angle;
    if (angle < 0) {
      angle += 2 * Math.PI;
    }

    var angleList = radarData.angleList.map(function (item) {
      item = fixAngle(-1 * item);

      return item;
    });

    angleList.forEach(function (item, index) {
      var rangeStart = fixAngle(item - eachAngleArea / 2);
      var rangeEnd = fixAngle(item + eachAngleArea / 2);
      if (rangeEnd < rangeStart) {
        rangeEnd += 2 * Math.PI;
      }
      if (angle >= rangeStart && angle <= rangeEnd || angle + 2 * Math.PI >= rangeStart && angle + 2 * Math.PI <= rangeEnd) {
        currentIndex = index;
      }
    });
  }

  return currentIndex;
}

function findPieChartCurrentIndex(currentPoints, pieData) {
  var currentIndex = -1;
  if (isInExactPieChartArea(currentPoints, pieData.center, pieData.radius)) {
    var angle = Math.atan2(pieData.center.y - currentPoints.y, currentPoints.x - pieData.center.x);
    angle = -angle;
    for (var i = 0, len = pieData.series.length; i < len; i++) {
      var item = pieData.series[i];
      if (isInAngleRange(angle, item._start_, item._start_ + item._proportion_ * 2 * Math.PI)) {
        currentIndex = i;
        break;
      }
    }
  }

  return currentIndex;
}

function isInExactPieChartArea(currentPoints, center, radius) {
  return Math.pow(currentPoints.x - center.x, 2) + Math.pow(currentPoints.y - center.y, 2) <= Math.pow(radius, 2);
}

function splitPoints(points) {
  var newPoints = [];
  var items = [];
  points.forEach(function (item, index) {
    if (item !== null) {
      items.push(item);
    } else {
      if (items.length) {
        newPoints.push(items);
      }
      items = [];
    }
  });
  if (items.length) {
    newPoints.push(items);
  }

  return newPoints;
}

function calLegendData(series, opts, config) {
  if (opts.legend === false) {
    return {
      legendList: [],
      legendHeight: 0 };

  }
  //适配H5高分屏
  var padding = 5 * opts.pixelRatio;
  var marginTop = 8 * opts.pixelRatio;
  var shapeWidth = 15 * opts.pixelRatio;
  var legendList = [];
  var widthCount = 0;
  var currentRow = [];
  series.forEach(function (item) {
    var itemWidth = 3 * padding + shapeWidth + measureText(item.name || 'undefined');
    if (widthCount + itemWidth > opts.width) {
      legendList.push(currentRow);
      widthCount = itemWidth;
      currentRow = [item];
    } else {
      widthCount += itemWidth;
      currentRow.push(item);
    }
  });
  if (currentRow.length) {
    legendList.push(currentRow);
  }

  return {
    legendList: legendList,
    legendHeight: legendList.length * (config.fontSize + marginTop) + padding };

}

function calCategoriesData(categories, opts, config) {
  var result = {
    angle: 0,
    xAxisHeight: config.xAxisHeight };


  var _getXAxisPoints = getXAxisPoints(categories, opts, config),
  eachSpacing = _getXAxisPoints.eachSpacing;

  // get max length of categories text


  var categoriesTextLenth = categories.map(function (item) {
    return measureText(item);
  });

  var maxTextLength = Math.max.apply(this, categoriesTextLenth);

  if (opts.xAxis.rotateLabel == true && maxTextLength + 2 * config.xAxisTextPadding > eachSpacing) {
    result.angle = 45 * Math.PI / 180;
    result.xAxisHeight = 2 * config.xAxisTextPadding + maxTextLength * Math.sin(result.angle);
  }

  return result;
}

function getRadarDataPoints(angleList, center, radius, series, opts) {
  var process = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;

  var radarOption = opts.extra.radar || {};
  radarOption.max = radarOption.max || 0;
  var maxData = Math.max(radarOption.max, Math.max.apply(null, dataCombine(series)));

  var data = [];
  series.forEach(function (each) {
    var listItem = {};
    listItem.color = each.color;
    listItem.data = [];
    each.data.forEach(function (item, index) {
      var tmp = {};
      tmp.angle = angleList[index];

      tmp.proportion = item / maxData;
      tmp.position = convertCoordinateOrigin(radius * tmp.proportion * process * Math.cos(tmp.angle), radius * tmp.proportion * process * Math.sin(tmp.angle), center);
      listItem.data.push(tmp);
    });

    data.push(listItem);
  });

  return data;
}

function getPieDataPoints(series) {
  var process = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var count = 0;
  var _start_ = 0;
  series.forEach(function (item) {
    item.data = item.data === null ? 0 : item.data;
    count += item.data;
  });
  series.forEach(function (item) {
    item.data = item.data === null ? 0 : item.data;
    item._proportion_ = item.data / count * process;
  });
  series.forEach(function (item) {
    item._start_ = _start_;
    _start_ += 2 * item._proportion_ * Math.PI;
  });

  return series;
}

function getArcbarDataPoints(series, arcbarOption) {
  var process = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  if (process == 1) {
    process = 0.999999;
  }
  series.forEach(function (item) {
    item.data = item.data === null ? 0 : item.data;
    var totalAngle;
    if (arcbarOption.type == 'default') {
      totalAngle = arcbarOption.startAngle - arcbarOption.endAngle + 1;
    } else {
      totalAngle = 2;
    }
    item._proportion_ = totalAngle * item.data * process + arcbarOption.startAngle;
    if (item._proportion_ >= 2) {
      item._proportion_ = item._proportion_ % 2;
    }
  });
  return series;
}

function getGaugeAxisPoints(categories, startAngle, endAngle) {
  var totalAngle = startAngle - endAngle + 1;
  var tempStartAngle = startAngle;
  for (var i = 0; i < categories.length; i++) {
    categories[i].value = categories[i].value === null ? 0 : categories[i].value;
    categories[i]._startAngle_ = tempStartAngle;
    categories[i]._endAngle_ = totalAngle * categories[i].value + startAngle;
    if (categories[i]._endAngle_ >= 2) {
      categories[i]._endAngle_ = categories[i]._endAngle_ % 2;
    }
    tempStartAngle = categories[i]._endAngle_;
  }
  return categories;
}

function getGaugeDataPoints(series, categories, gaugeOption) {
  var process = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  series.forEach(function (item) {
    item.data = item.data === null ? 0 : item.data;
    if (gaugeOption.pointer.color == 'auto') {
      for (var i = 0; i < categories.length; i++) {
        if (item.data <= categories[i].value) {
          item.color = categories[i].color;
          break;
        }
      }
    } else {
      item.color = gaugeOption.pointer.color;
    }
    var totalAngle = gaugeOption.startAngle - gaugeOption.endAngle + 1;
    item._endAngle_ = totalAngle * item.data + gaugeOption.startAngle;
    item._oldAngle_ = gaugeOption.oldAngle;
    if (gaugeOption.oldAngle < gaugeOption.endAngle) {
      item._oldAngle_ += 2;
    }
    if (item.data >= gaugeOption.oldData) {
      item._proportion_ = (item._endAngle_ - item._oldAngle_) * process + gaugeOption.oldAngle;
    } else {
      item._proportion_ = item._oldAngle_ - (item._oldAngle_ - item._endAngle_) * process;
    }
    if (item._proportion_ >= 2) {
      item._proportion_ = item._proportion_ % 2;
    }
  });
  return series;
}


function getPieTextMaxLength(series) {
  series = getPieDataPoints(series);
  var maxLength = 0;
  series.forEach(function (item) {
    var text = item.format ? item.format(+item._proportion_.toFixed(2)) : util.toFixed(item._proportion_ * 100) + '%';
    maxLength = Math.max(maxLength, measureText(text));
  });

  return maxLength;
}

function fixColumeData(points, eachSpacing, columnLen, index, config, opts) {
  return points.map(function (item) {
    if (item === null) {
      return null;
    }
    item.width = (eachSpacing - 2 * config.columePadding) / columnLen;

    if (opts.extra.column && opts.extra.column.width && +opts.extra.column.width > 0) {
      // customer column width
      item.width = Math.min(item.width, +opts.extra.column.width);
    } else {
      // default width should less tran 25px
      // don't ask me why, I don't know
      item.width = Math.min(item.width, 25);
    }
    item.x += (index + 0.5 - columnLen / 2) * item.width;

    return item;
  });
}

function fixColumeMeterData(points, eachSpacing, columnLen, index, config, opts, border) {
  return points.map(function (item) {
    if (item === null) {
      return null;
    }
    item.width = eachSpacing - 2 * config.columePadding;

    if (opts.extra.column && opts.extra.column.width && +opts.extra.column.width > 0) {
      item.width = Math.min(item.width, +opts.extra.column.width);
    } else {
      item.width = Math.min(item.width, 25);
    }
    if (index > 0) {
      item.width -= 2 * border;
    }
    return item;
  });
}

function fixColumeStackData(points, eachSpacing, columnLen, index, config, opts, series) {

  return points.map(function (item, indexn) {

    if (item === null) {
      return null;
    }
    item.width = eachSpacing - 2 * config.columePadding;

    if (opts.extra.column && opts.extra.column.width && +opts.extra.column.width > 0) {
      item.width = Math.min(item.width, +opts.extra.column.width);
    } else {
      item.width = Math.min(item.width, 25);
    }
    return item;
  });
}

function getXAxisPoints(categories, opts, config) {
  var yAxisTotalWidth = config.yAxisWidth + config.yAxisTitleWidth;
  var spacingValid = opts.width - 2 * config.padding - yAxisTotalWidth;
  var dataCount = opts.enableScroll ? Math.min(opts.xAxis.itemCount, categories.length) : categories.length;
  var eachSpacing = spacingValid / dataCount;

  var xAxisPoints = [];
  var startX = config.padding + yAxisTotalWidth;
  var endX = opts.width - config.padding;
  categories.forEach(function (item, index) {
    xAxisPoints.push(startX + index * eachSpacing);
  });
  if (opts.enableScroll === true) {
    xAxisPoints.push(startX + categories.length * eachSpacing);
  } else {
    xAxisPoints.push(endX);
  }

  return { xAxisPoints: xAxisPoints, startX: startX, endX: endX, eachSpacing: eachSpacing };
}

function getCandleDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config) {
  var process = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 1;

  var points = [];
  var validHeight = opts.height - 2 * config.padding - config.xAxisHeight - config.legendHeight;
  data.forEach(function (item, index) {
    if (item === null) {
      points.push(null);
    } else {
      var cPoints = [];
      item.forEach(function (items, indexs) {
        var point = {};
        point.x = xAxisPoints[index] + Math.round(eachSpacing / 2);
        var value = items.value || items;
        var height = validHeight * (value - minRange) / (maxRange - minRange);
        height *= process;
        point.y = opts.height - config.xAxisHeight - config.legendHeight - Math.round(height) - config.padding;
        cPoints.push(point);
      });
      points.push(cPoints);
    }
  });

  return points;
}

function getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config) {
  var process = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 1;

  var points = [];
  var validHeight = opts.height - 2 * config.padding - config.xAxisHeight - config.legendHeight;
  data.forEach(function (item, index) {
    if (item === null) {
      points.push(null);
    } else {
      var point = {};
      point.color = item.color;
      point.x = xAxisPoints[index] + Math.round(eachSpacing / 2);
      var value = item.value || item;
      var height = validHeight * (value - minRange) / (maxRange - minRange);
      height *= process;
      point.y = opts.height - config.xAxisHeight - config.legendHeight - Math.round(height) - config.padding;
      points.push(point);
    }
  });

  return points;
}

function getStackDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, seriesIndex, stackSeries) {
  var process = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 1;
  var points = [];
  var validHeight = opts.height - 2 * config.padding - config.xAxisHeight - config.legendHeight;

  data.forEach(function (item, index) {
    if (item === null) {
      points.push(null);
    } else {
      var point = {};
      point.color = item.color;
      point.x = xAxisPoints[index] + Math.round(eachSpacing / 2);

      if (seriesIndex > 0) {
        var value = 0;
        for (var i = 0; i <= seriesIndex; i++) {
          value += stackSeries[i].data[index];
        }
        var value0 = value - item;
        var height = validHeight * (value - minRange) / (maxRange - minRange);
        var height0 = validHeight * (value0 - minRange) / (maxRange - minRange);
      } else {
        var value = item;
        var height = validHeight * (value - minRange) / (maxRange - minRange);
        var height0 = 0;
      }
      var heightc = height0;
      height *= process;
      heightc *= process;
      point.y = opts.height - config.xAxisHeight - config.legendHeight - Math.round(height) - config.padding;
      point.y0 = opts.height - config.xAxisHeight - config.legendHeight - Math.round(heightc) - config.padding;
      points.push(point);
    }
  });

  return points;
}

function getYAxisTextList(series, opts, config, stack) {
  var data;
  if (stack == 'stack') {
    //data = dataCombine(series);
    data = dataCombineStack(series);
  } else {
    data = dataCombine(series);
  }

  var sorted = [];
  // remove null from data
  data = data.filter(function (item) {
    //return item !== null;
    if (typeof item === 'object' && item !== null) {
      //判断是否为数组
      if (item.constructor == Array) {
        return item !== null;
      } else {
        return item.value !== null;
      }
    } else {
      return item !== null;
    }
  });
  //var minData = Math.min.apply(this, data);
  //var maxData = Math.max.apply(this, data);
  data.map(function (item) {
    if (typeof item === 'object') {
      if (item.constructor == Array) {
        item.map(function (subitem) {
          sorted.push(subitem);
        });
      } else {
        sorted.push(item.value);
      }
    } else {
      sorted.push(item);
    }
    //typeof item === 'object' ? sorted.push(item.value) : sorted.push(item)
  });
  var minData = 0;
  var maxData = 0;
  if (sorted.length > 0) {
    minData = Math.min.apply(this, sorted);
    maxData = Math.max.apply(this, sorted);
  }
  if (typeof opts.yAxis.min === 'number') {
    minData = Math.min(opts.yAxis.min, minData);
  }
  if (typeof opts.yAxis.max === 'number') {
    maxData = Math.max(opts.yAxis.max, maxData);
  }

  // fix issue https://github.com/xiaolin3303/wx-charts/issues/9
  if (minData === maxData) {
    var rangeSpan = maxData || 10;
    //minData -= rangeSpan;
    maxData += rangeSpan;
  }

  var dataRange = getDataRange(minData, maxData);
  var minRange = dataRange.minRange;
  var maxRange = dataRange.maxRange;

  var range = [];
  var eachRange = (maxRange - minRange) / config.yAxisSplit;

  for (var i = 0; i <= config.yAxisSplit; i++) {
    range.push(minRange + eachRange * i);
  }
  return range.reverse();
}

function calYAxisData(series, opts, config) {
  //堆叠图重算Y轴
  var columnstyle = assign({}, opts.extra.column || { "type": "" });

  var ranges = getYAxisTextList(series, opts, config, columnstyle.type);
  var yAxisWidth = config.yAxisWidth;
  var rangesFormat = ranges.map(function (item) {
    item = util.toFixed(item, 2);
    item = opts.yAxis.format ? opts.yAxis.format(Number(item)) : item;
    yAxisWidth = Math.max(yAxisWidth, measureText(item) + 5);
    return item;
  });
  if (opts.yAxis.disabled === true) {
    yAxisWidth = 0;
  }

  return { rangesFormat: rangesFormat, ranges: ranges, yAxisWidth: yAxisWidth };
}

function calTooltipYAxisData(point, series, opts, config, eachSpacing) {
  var ranges = getYAxisTextList(series, opts, config);
  var spacingValid = opts.height - 2 * config.padding - config.xAxisHeight - config.legendHeight;
  var maxVal = ranges[0];
  var minVal = ranges[ranges.length - 1];
  var minAxis = config.padding;
  var maxAxis = config.padding + spacingValid;
  var item = maxVal - (maxVal - minVal) * (point - minAxis) / (maxAxis - minAxis);
  item = opts.yAxis.format ? opts.yAxis.format(Number(item)) : item;
  return item;
}

function contextRotate(context, opts) {
  if (opts.rotateLock !== true) {
    context.translate(opts.height, 0);
    context.rotate(90 * Math.PI / 180);
  } else if (opts._rotate_ !== true) {
    context.translate(opts.height, 0);
    context.rotate(90 * Math.PI / 180);
    opts._rotate_ = true;
  }
}

function drawPointShape(points, color, shape, context, opts) {
  context.beginPath();
  context.setStrokeStyle("#ffffff");
  context.setLineWidth(1 * opts.pixelRatio);
  context.setFillStyle(color);
  if (shape === 'diamond') {
    points.forEach(function (item, index) {
      if (item !== null) {
        context.moveTo(item.x, item.y - 4.5);
        context.lineTo(item.x - 4.5, item.y);
        context.lineTo(item.x, item.y + 4.5);
        context.lineTo(item.x + 4.5, item.y);
        context.lineTo(item.x, item.y - 4.5);
      }
    });
  } else if (shape === 'circle') {
    points.forEach(function (item, index) {
      if (item !== null) {
        context.moveTo(item.x + 3.5 * opts.pixelRatio, item.y);
        context.arc(item.x, item.y, 4 * opts.pixelRatio, 0, 2 * Math.PI, false);
      }
    });
  } else if (shape === 'rect') {
    points.forEach(function (item, index) {
      if (item !== null) {
        context.moveTo(item.x - 3.5, item.y - 3.5);
        context.rect(item.x - 3.5, item.y - 3.5, 7, 7);
      }
    });
  } else if (shape === 'triangle') {
    points.forEach(function (item, index) {
      if (item !== null) {
        context.moveTo(item.x, item.y - 4.5);
        context.lineTo(item.x - 4.5, item.y + 4.5);
        context.lineTo(item.x + 4.5, item.y + 4.5);
        context.lineTo(item.x, item.y - 4.5);
      }
    });
  }
  context.closePath();
  context.fill();
  context.stroke();
}

function drawRingTitle(opts, config, context) {
  var titlefontSize = opts.title.fontSize || config.titleFontSize;
  var subtitlefontSize = opts.subtitle.fontSize || config.subtitleFontSize;
  var title = opts.title.name || '';
  var subtitle = opts.subtitle.name || '';
  var titleFontColor = opts.title.color || config.titleColor;
  var subtitleFontColor = opts.subtitle.color || config.subtitleColor;
  var titleHeight = title ? titlefontSize : 0;
  var subtitleHeight = subtitle ? subtitlefontSize : 0;
  var margin = 5;
  if (subtitle) {
    var textWidth = measureText(subtitle, subtitlefontSize);
    var startX = (opts.width - textWidth) / 2 + (opts.subtitle.offsetX || 0);
    var startY = (opts.height - config.legendHeight + subtitlefontSize) / 2 + (opts.subtitle.offsetY || 0);
    if (title) {
      startY -= (titleHeight + margin) / 2;
    }
    context.beginPath();
    context.setFontSize(subtitlefontSize);
    context.setFillStyle(subtitleFontColor);
    context.fillText(subtitle, startX, startY);
    context.closePath();
    context.stroke();
  }
  if (title) {
    var _textWidth = measureText(title, titlefontSize);
    var _startX = (opts.width - _textWidth) / 2 + (opts.title.offsetX || 0);
    var _startY = (opts.height - config.legendHeight + titlefontSize) / 2 + (opts.title.offsetY || 0);
    if (subtitle) {
      _startY += (subtitleHeight + margin) / 2;
    }
    context.beginPath();
    context.setFontSize(titlefontSize);
    context.setFillStyle(titleFontColor);
    context.fillText(title, _startX, _startY);
    context.closePath();
    context.stroke();
  }
}

function drawPointText(points, series, config, context) {
  // 绘制数据文案
  var data = series.data;


  points.forEach(function (item, index) {
    if (item !== null) {
      //var formatVal = series.format ? series.format(data[index]) : data[index];
      context.beginPath();
      context.setFontSize(config.fontSize);
      context.setFillStyle('#666666');
      var value = data[index].value || data[index];
      var formatVal = series.format ? series.format(value) : value;
      context.fillText(formatVal, item.x - measureText(formatVal) / 2, item.y - 2);
      context.closePath();
      context.stroke();
    }
  });

}

function drawGaugeLabel(gaugeOption, radius, centerPosition, opts, config, context) {
  radius -= gaugeOption.width / 2 + config.gaugeLabelTextMargin;

  var totalAngle = gaugeOption.startAngle - gaugeOption.endAngle + 1;
  var splitAngle = totalAngle / gaugeOption.splitLine.splitNumber;
  var totalNumber = gaugeOption.endNumber - gaugeOption.startNumber;
  var splitNumber = totalNumber / gaugeOption.splitLine.splitNumber;
  var nowAngle = gaugeOption.startAngle;
  var nowNumber = gaugeOption.startNumber;
  for (var i = 0; i < gaugeOption.splitLine.splitNumber + 1; i++) {
    var pos = {
      x: radius * Math.cos(nowAngle * Math.PI),
      y: radius * Math.sin(nowAngle * Math.PI) };

    pos.x += centerPosition.x - measureText(nowNumber) / 2;
    pos.y += centerPosition.y;
    var startX = pos.x;
    var startY = pos.y;

    context.beginPath();
    context.setFontSize(config.fontSize);
    context.setFillStyle(gaugeOption.labelColor || '#666666');
    context.fillText(nowNumber, startX, startY + config.fontSize / 2);
    context.closePath();
    context.stroke();

    nowAngle += splitAngle;
    if (nowAngle >= 2) {
      nowAngle = nowAngle % 2;
    }
    nowNumber += splitNumber;
  }

}

function drawRadarLabel(angleList, radius, centerPosition, opts, config, context) {
  var radarOption = opts.extra.radar || {};
  radius += config.radarLabelTextMargin;

  angleList.forEach(function (angle, index) {
    var pos = {
      x: radius * Math.cos(angle),
      y: radius * Math.sin(angle) };

    var posRelativeCanvas = convertCoordinateOrigin(pos.x, pos.y, centerPosition);
    var startX = posRelativeCanvas.x;
    var startY = posRelativeCanvas.y;
    if (util.approximatelyEqual(pos.x, 0)) {
      startX -= measureText(opts.categories[index] || '') / 2;
    } else if (pos.x < 0) {
      startX -= measureText(opts.categories[index] || '');
    }
    context.beginPath();
    context.setFontSize(config.fontSize);
    context.setFillStyle(radarOption.labelColor || '#666666');
    context.fillText(opts.categories[index] || '', startX, startY + config.fontSize / 2);
    context.closePath();
    context.stroke();
  });

}

function drawPieText(series, opts, config, context, radius, center) {
  var lineRadius = radius + config.pieChartLinePadding;
  var textObjectCollection = [];
  var lastTextObject = null;

  var seriesConvert = series.map(function (item) {
    var arc = 2 * Math.PI - (item._start_ + 2 * Math.PI * item._proportion_ / 2);
    var text = item.format ? item.format(+item._proportion_.toFixed(2)) : util.toFixed(item._proportion_ * 100) + '%';
    var color = item.color;
    return { arc: arc, text: text, color: color };
  });
  seriesConvert.forEach(function (item) {
    // line end
    var orginX1 = Math.cos(item.arc) * lineRadius;
    var orginY1 = Math.sin(item.arc) * lineRadius;

    // line start
    var orginX2 = Math.cos(item.arc) * radius;
    var orginY2 = Math.sin(item.arc) * radius;

    // text start
    var orginX3 = orginX1 >= 0 ? orginX1 + config.pieChartTextPadding : orginX1 - config.pieChartTextPadding;
    var orginY3 = orginY1;

    var textWidth = measureText(item.text);
    var startY = orginY3;

    if (lastTextObject && util.isSameXCoordinateArea(lastTextObject.start, { x: orginX3 })) {
      if (orginX3 > 0) {
        startY = Math.min(orginY3, lastTextObject.start.y);
      } else if (orginX1 < 0) {
        startY = Math.max(orginY3, lastTextObject.start.y);
      } else {
        if (orginY3 > 0) {
          startY = Math.max(orginY3, lastTextObject.start.y);
        } else {
          startY = Math.min(orginY3, lastTextObject.start.y);
        }
      }
    }

    if (orginX3 < 0) {
      orginX3 -= textWidth;
    }

    var textObject = {
      lineStart: {
        x: orginX2,
        y: orginY2 },

      lineEnd: {
        x: orginX1,
        y: orginY1 },

      start: {
        x: orginX3,
        y: startY },

      width: textWidth,
      height: config.fontSize,
      text: item.text,
      color: item.color };


    lastTextObject = avoidCollision(textObject, lastTextObject);
    textObjectCollection.push(lastTextObject);
  });

  textObjectCollection.forEach(function (item) {
    var lineStartPoistion = convertCoordinateOrigin(item.lineStart.x, item.lineStart.y, center);
    var lineEndPoistion = convertCoordinateOrigin(item.lineEnd.x, item.lineEnd.y, center);
    var textPosition = convertCoordinateOrigin(item.start.x, item.start.y, center);
    context.setLineWidth(1 * opts.pixelRatio);
    context.setFontSize(config.fontSize);
    context.beginPath();
    context.setStrokeStyle(item.color);
    context.setFillStyle(item.color);
    context.moveTo(lineStartPoistion.x, lineStartPoistion.y);
    var curveStartX = item.start.x < 0 ? textPosition.x + item.width : textPosition.x;
    var textStartX = item.start.x < 0 ? textPosition.x - 5 : textPosition.x + 5;
    context.quadraticCurveTo(lineEndPoistion.x, lineEndPoistion.y, curveStartX, textPosition.y);
    context.moveTo(lineStartPoistion.x, lineStartPoistion.y);
    context.stroke();
    context.closePath();
    context.beginPath();
    context.moveTo(textPosition.x + item.width, textPosition.y);
    context.arc(curveStartX, textPosition.y, 2, 0, 2 * Math.PI);
    context.closePath();
    context.fill();
    context.beginPath();
    context.setFontSize(config.fontSize);
    context.setFillStyle('#666666');
    context.fillText(item.text, textStartX, textPosition.y + 3);
    context.closePath();
    context.stroke();
    context.closePath();
  });
}

function drawToolTipSplitLine(offsetX, opts, config, context) {
  var toolTipOption = opts.extra.tooltip || {};
  toolTipOption.gridType = toolTipOption.gridType == undefined ? 'solid' : toolTipOption.gridType;
  toolTipOption.dashLength = toolTipOption.dashLength == undefined ? 4 : toolTipOption.dashLength;
  var startY = config.padding;
  var endY = opts.height - config.padding - config.xAxisHeight - config.legendHeight;

  if (toolTipOption.gridType == 'dash') {
    context.setLineDash([toolTipOption.dashLength, toolTipOption.dashLength]);
  }
  context.beginPath();
  context.setStrokeStyle(toolTipOption.gridColor || '#cccccc');
  context.setLineWidth(1 * opts.pixelRatio);
  context.moveTo(offsetX, startY);
  context.lineTo(offsetX, endY);
  context.closePath();
  context.stroke();
  context.setLineDash([]);

  if (toolTipOption.xAxisLabel) {
    var lableText = opts.categories[opts.tooltip.index];
    context.setFontSize(config.fontSize);
    var textWidth = context.measureText(lableText).width;

    var textX = offsetX - config.toolTipPadding - 0.5 * textWidth;
    var textY = endY;
    context.beginPath();
    context.setFillStyle(hexToRgb(toolTipOption.labelBgColor || config.toolTipBackground, toolTipOption.labelBgOpacity || config.toolTipOpacity));
    context.setStrokeStyle(toolTipOption.labelBgColor || config.toolTipBackground);
    context.setLineWidth(1 * opts.pixelRatio);
    context.rect(textX, textY, textWidth + 2 * config.toolTipPadding, config.fontSize + 2 * config.toolTipPadding);
    context.closePath();
    context.stroke();
    context.fill();

    context.beginPath();
    context.setFontSize(config.fontSize);
    context.setFillStyle(toolTipOption.labelFontColor || config.fontColor);
    context.fillText(lableText, textX + 2 * config.toolTipPadding, textY + config.toolTipPadding + config.fontSize);
    context.closePath();
    context.stroke();
  }
}

function drawToolTipHorizentalLine(opts, config, context, eachSpacing, xAxisPoints) {
  var toolTipOption = opts.extra.tooltip || {};
  toolTipOption.gridType = toolTipOption.gridType == undefined ? 'solid' : toolTipOption.gridType;
  toolTipOption.dashLength = toolTipOption.dashLength == undefined ? 4 : toolTipOption.dashLength;
  var startX = config.padding + config.yAxisWidth + config.yAxisTitleWidth;
  var endX = opts.width - config.padding;

  if (toolTipOption.gridType == 'dash') {
    context.setLineDash([toolTipOption.dashLength, toolTipOption.dashLength]);
  }
  context.beginPath();
  context.setStrokeStyle(toolTipOption.gridColor || '#cccccc');
  context.setLineWidth(1 * opts.pixelRatio);
  context.moveTo(startX, opts.tooltip.offset.y);
  context.lineTo(endX, opts.tooltip.offset.y);
  context.closePath();
  context.stroke();
  context.setLineDash([]);

  if (toolTipOption.yAxisLabel) {

    var lableText = calTooltipYAxisData(opts.tooltip.offset.y, opts.series, opts, config, eachSpacing);
    context.setFontSize(config.fontSize);
    var textWidth = context.measureText(lableText).width;

    var textX = startX - 2 * config.toolTipPadding - textWidth;
    var textY = opts.tooltip.offset.y;
    context.beginPath();
    context.setFillStyle(hexToRgb(toolTipOption.labelBgColor || config.toolTipBackground, toolTipOption.labelBgOpacity || config.toolTipOpacity));
    context.setStrokeStyle(toolTipOption.labelBgColor || config.toolTipBackground);
    context.setLineWidth(1 * opts.pixelRatio);
    context.rect(textX, textY - 0.5 * config.fontSize - config.toolTipPadding, textWidth + 2 * config.toolTipPadding, config.fontSize + 2 * config.toolTipPadding);
    context.closePath();
    context.stroke();
    context.fill();

    context.beginPath();
    context.setFontSize(config.fontSize);
    context.setFillStyle(toolTipOption.labelFontColor || config.fontColor);
    context.fillText(lableText, textX + config.toolTipPadding, textY + 0.5 * config.fontSize);
    context.closePath();
    context.stroke();
  }
}


function drawToolTipSplitArea(offsetX, opts, config, context, eachSpacing) {
  var toolTipOption = opts.extra.tooltip || { activeBgColor: '#000000', activeBgOpacity: 0.08 };
  toolTipOption.activeBgColor = toolTipOption.activeBgColor ? toolTipOption.activeBgColor : '#000000';
  toolTipOption.activeBgOpacity = toolTipOption.activeBgOpacity ? toolTipOption.activeBgOpacity : 0.08;
  var startY = config.padding;
  var endY = opts.height - config.padding - config.xAxisHeight - config.legendHeight;
  context.beginPath();
  context.setFillStyle(hexToRgb(toolTipOption.activeBgColor, toolTipOption.activeBgOpacity));
  context.rect(offsetX - eachSpacing / 2, startY, eachSpacing, endY - startY);
  context.closePath();
  context.fill();
}

function drawToolTip(textList, offset, opts, config, context, eachSpacing, xAxisPoints) {
  var toolTipOption = opts.extra.tooltip || { bgColor: '#000000', bgOpacity: 0.7, fontColor: '#FFFFFF' };
  toolTipOption.bgColor = toolTipOption.bgColor ? toolTipOption.bgColor : '#000000';
  toolTipOption.bgOpacity = toolTipOption.bgOpacity ? toolTipOption.bgOpacity : 0.7;
  toolTipOption.fontColor = toolTipOption.fontColor ? toolTipOption.fontColor : '#FFFFFF';
  var legendWidth = 4 * opts.pixelRatio;
  var legendMarginRight = 5 * opts.pixelRatio;
  var arrowWidth = 8 * opts.pixelRatio;
  var isOverRightBorder = false;
  if (opts.type == 'line' || opts.type == 'area' || opts.type == 'candle' || opts.type == 'mix') {
    drawToolTipSplitLine(opts.tooltip.offset.x, opts, config, context);
  }

  offset = assign({
    x: 0,
    y: 0 },
  offset);
  offset.y -= 8 * opts.pixelRatio;
  var textWidth = textList.map(function (item) {
    return measureText(item.text);
  });

  var toolTipWidth = legendWidth + legendMarginRight + 4 * config.toolTipPadding + Math.max.apply(null, textWidth);
  var toolTipHeight = 2 * config.toolTipPadding + textList.length * config.toolTipLineHeight;

  // if beyond the right border
  if (offset.x - Math.abs(opts._scrollDistance_) + arrowWidth + toolTipWidth > opts.width) {
    isOverRightBorder = true;
  }

  // draw background rect
  context.beginPath();
  context.setFillStyle(hexToRgb(toolTipOption.bgColor || config.toolTipBackground, toolTipOption.bgOpacity || config.toolTipOpacity));
  if (isOverRightBorder) {
    context.moveTo(offset.x, offset.y + 10 * opts.pixelRatio);
    context.lineTo(offset.x - arrowWidth, offset.y + 10 * opts.pixelRatio - 5 * opts.pixelRatio);
    context.lineTo(offset.x - arrowWidth, offset.y);
    context.lineTo(offset.x - arrowWidth - Math.round(toolTipWidth), offset.y);
    context.lineTo(offset.x - arrowWidth - Math.round(toolTipWidth), offset.y + toolTipHeight);
    context.lineTo(offset.x - arrowWidth, offset.y + toolTipHeight);
    context.lineTo(offset.x - arrowWidth, offset.y + 10 * opts.pixelRatio + 5 * opts.pixelRatio);
    context.lineTo(offset.x, offset.y + 10 * opts.pixelRatio);
  } else {
    context.moveTo(offset.x, offset.y + 10 * opts.pixelRatio);
    context.lineTo(offset.x + arrowWidth, offset.y + 10 * opts.pixelRatio - 5 * opts.pixelRatio);
    context.lineTo(offset.x + arrowWidth, offset.y);
    context.lineTo(offset.x + arrowWidth + Math.round(toolTipWidth), offset.y);
    context.lineTo(offset.x + arrowWidth + Math.round(toolTipWidth), offset.y + toolTipHeight);
    context.lineTo(offset.x + arrowWidth, offset.y + toolTipHeight);
    context.lineTo(offset.x + arrowWidth, offset.y + 10 * opts.pixelRatio + 5 * opts.pixelRatio);
    context.lineTo(offset.x, offset.y + 10 * opts.pixelRatio);
  }

  context.closePath();
  context.fill();

  // draw legend
  textList.forEach(function (item, index) {
    if (item.color !== null) {
      context.beginPath();
      context.setFillStyle(item.color);
      var startX = offset.x + arrowWidth + 2 * config.toolTipPadding;
      var startY = offset.y + (config.toolTipLineHeight - config.fontSize) / 2 + config.toolTipLineHeight * index + config.toolTipPadding + 1;
      if (isOverRightBorder) {
        startX = offset.x - toolTipWidth - arrowWidth + 2 * config.toolTipPadding;
      }
      context.fillRect(startX, startY, legendWidth, config.fontSize);
      context.closePath();
    }
  });

  // draw text list

  textList.forEach(function (item, index) {
    var startX = offset.x + arrowWidth + 2 * config.toolTipPadding + legendWidth + legendMarginRight;
    if (isOverRightBorder) {
      startX = offset.x - toolTipWidth - arrowWidth + 2 * config.toolTipPadding + +legendWidth + legendMarginRight;
    }
    var startY = offset.y + (config.toolTipLineHeight - config.fontSize) / 2 + config.toolTipLineHeight * index + config.toolTipPadding;
    context.beginPath();
    context.setFontSize(config.fontSize);
    context.setFillStyle(toolTipOption.fontColor);
    context.fillText(item.text, startX, startY + config.fontSize);
    context.closePath();
    context.stroke();
  });
}

function drawYAxisTitle(title, opts, config, context) {
  var startX = config.xAxisHeight + (opts.height - config.xAxisHeight - measureText(title)) / 2;
  context.save();
  context.beginPath();
  context.setFontSize(config.fontSize);
  context.setFillStyle(opts.yAxis.titleFontColor || '#333333');
  context.translate(0, opts.height);
  context.rotate(-90 * Math.PI / 180);
  context.fillText(title, startX, config.padding + 0.5 * config.fontSize);
  context.closePath();
  context.stroke();
  context.restore();
}

function drawColumnDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var columnOption = opts.extra.column || { type: {}, meter: {} };
  columnOption.type = columnOption.type == undefined ? 'group' : columnOption.type;
  columnOption.meter = columnOption.meter || {};
  columnOption.meter.border = columnOption.meter.border == undefined ? 4 : columnOption.meter.border;
  columnOption.meter.fillColor = columnOption.meter.fillColor == undefined ? '#FFFFFF' : columnOption.meter.fillColor;
  var _calYAxisData = calYAxisData(series, opts, config),
  ranges = _calYAxisData.ranges;

  var _getXAxisPoints = getXAxisPoints(opts.categories, opts, config),
  xAxisPoints = _getXAxisPoints.xAxisPoints,
  eachSpacing = _getXAxisPoints.eachSpacing;

  var minRange = ranges.pop();
  var maxRange = ranges.shift();
  var calPoints = [];

  context.save();
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
  }
  if (opts.tooltip && opts.tooltip.textList && opts.tooltip.textList.length && process === 1) {
    drawToolTipSplitArea(opts.tooltip.offset.x, opts, config, context, eachSpacing);
  }

  series.forEach(function (eachSeries, seriesIndex) {
    var data = eachSeries.data;
    switch (columnOption.type) {
      case 'group':
        var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
        var tooltipPoints = getStackDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, seriesIndex, series, process);
        calPoints.push(tooltipPoints);
        points = fixColumeData(points, eachSpacing, series.length, seriesIndex, config, opts);
        points.forEach(function (item, index) {
          if (item !== null) {
            context.beginPath();
            context.setFillStyle(item.color || eachSeries.color);
            var startX = item.x - item.width / 2 + 1;
            var height = opts.height - item.y - config.padding - config.xAxisHeight - config.legendHeight;
            context.moveTo(startX, item.y);
            context.fillRect(startX, item.y, item.width - 2, height);
            context.closePath();
            context.fill();
          }
        });
        break;
      case 'stack':
        // 绘制堆叠数据图
        var points = getStackDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, seriesIndex, series, process);
        calPoints.push(points);
        points = fixColumeStackData(points, eachSpacing, series.length, seriesIndex, config, opts, series);

        points.forEach(function (item, index) {
          if (item !== null) {
            context.beginPath();
            context.setFillStyle(item.color || eachSeries.color);
            var startX = item.x - item.width / 2 + 1;
            var height = opts.height - item.y - config.padding - config.xAxisHeight - config.legendHeight;
            var height0 = opts.height - item.y0 - config.padding - config.xAxisHeight - config.legendHeight;
            if (seriesIndex > 0) {
              height -= height0;
            }
            context.moveTo(startX, item.y);
            context.fillRect(startX, item.y, item.width - 2, height);
            context.closePath();
            context.fill();
          }
        });
        break;
      case 'meter':
        // 绘制温度计数据图
        var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
        calPoints.push(points);
        points = fixColumeMeterData(points, eachSpacing, series.length, seriesIndex, config, opts, columnOption.meter.border);
        if (seriesIndex == 0) {
          points.forEach(function (item, index) {
            if (item !== null) {
              //画背景颜色
              context.beginPath();
              context.setFillStyle(columnOption.meter.fillColor);
              var startX = item.x - item.width / 2 + 1;
              var height = opts.height - item.y - config.padding - config.xAxisHeight - config.legendHeight;
              context.moveTo(startX, item.y);
              context.fillRect(startX, item.y, item.width - 2, height);
              context.closePath();
              context.fill();
              //画边框线
              context.beginPath();
              context.setStrokeStyle(eachSeries.color);
              context.setLineWidth(columnOption.meter.border * opts.pixelRatio);
              context.moveTo(startX + columnOption.meter.border * 0.5, item.y + height);
              context.lineTo(startX + columnOption.meter.border * 0.5, item.y + columnOption.meter.border * 0.5);
              context.lineTo(startX + item.width - columnOption.meter.border, item.y + columnOption.meter.border * 0.5);
              context.lineTo(startX + item.width - columnOption.meter.border, item.y + height);
              context.stroke();
            }
          });
        } else {
          points.forEach(function (item, index) {
            if (item !== null) {
              context.beginPath();
              context.setFillStyle(item.color || eachSeries.color);
              var startX = item.x - item.width / 2 + 1;
              var height = opts.height - item.y - config.padding - config.xAxisHeight - config.legendHeight;
              context.moveTo(startX, item.y);
              context.rect(startX, item.y, item.width - 2, height);
              context.closePath();
              context.fill();
            }
          });
        }
        break;}

  });
  if (opts.dataLabel !== false && process === 1) {
    series.forEach(function (eachSeries, seriesIndex) {
      var data = eachSeries.data;
      switch (columnOption.type) {
        case 'group':
          var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
          points = fixColumeData(points, eachSpacing, series.length, seriesIndex, config, opts);
          drawPointText(points, eachSeries, config, context);
          break;
        case 'stack':
          var points = getStackDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, seriesIndex, series, process);
          drawPointText(points, eachSeries, config, context);
          break;
        case 'meter':
          var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
          drawPointText(points, eachSeries, config, context);
          break;}

    });
  }

  context.restore();

  return {
    xAxisPoints: xAxisPoints,
    calPoints: calPoints,
    eachSpacing: eachSpacing };

}

function drawCandleDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var candleOption = opts.extra.candle || { color: {}, average: {} };
  candleOption.color.upLine = candleOption.color.upLine ? candleOption.color.upLine : '#f04864';
  candleOption.color.upFill = candleOption.color.upFill ? candleOption.color.upFill : '#f04864';
  candleOption.color.downLine = candleOption.color.downLine ? candleOption.color.downLine : '#2fc25b';
  candleOption.color.downFill = candleOption.color.downFill ? candleOption.color.downFill : '#2fc25b';
  candleOption.average.show = candleOption.average.show === true ? true : false;
  candleOption.average.name = candleOption.average.name ? candleOption.average.name : [];
  candleOption.average.day = candleOption.average.day ? candleOption.average.day : [];
  candleOption.average.color = candleOption.average.color ? candleOption.average.color : ['#1890ff', '#2fc25b', '#facc14', '#f04864', '#8543e0', '#90ed7d'];
  opts.extra.candle = candleOption;

  var _calYAxisData5 = calYAxisData(series, opts, config),
  ranges = _calYAxisData5.ranges;

  var _getXAxisPoints5 = getXAxisPoints(opts.categories, opts, config),
  xAxisPoints = _getXAxisPoints5.xAxisPoints,
  eachSpacing = _getXAxisPoints5.eachSpacing;

  var minRange = ranges.pop();
  var maxRange = ranges.shift();
  var calPoints = [];

  context.save();
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
  }

  series.forEach(function (eachSeries, seriesIndex) {
    var data = eachSeries.data;
    var points = getCandleDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
    calPoints.push(points);
    var splitPointList = splitPoints(points);
    splitPointList = splitPointList[0];

    splitPointList.forEach(function (points, index) {
      context.beginPath();
      //如果上涨
      if (data[index][1] - data[index][0] > 0) {
        context.setStrokeStyle(candleOption.color.upLine);
        context.setFillStyle(candleOption.color.upFill);
        context.setLineWidth(1 * opts.pixelRatio);
        context.moveTo(points[3].x, points[3].y); //顶点
        context.lineTo(points[1].x, points[1].y); //收盘中间点
        context.lineTo(points[1].x - eachSpacing / 4, points[1].y); //收盘左侧点
        context.lineTo(points[0].x - eachSpacing / 4, points[0].y); //开盘左侧点
        context.lineTo(points[0].x, points[0].y); //开盘中间点
        context.lineTo(points[2].x, points[2].y); //底点
        context.lineTo(points[0].x, points[0].y); //开盘中间点
        context.lineTo(points[0].x + eachSpacing / 4, points[0].y); //开盘右侧点
        context.lineTo(points[1].x + eachSpacing / 4, points[1].y); //收盘右侧点
        context.lineTo(points[1].x, points[1].y); //收盘中间点
        context.moveTo(points[3].x, points[3].y); //顶点
      } else {
        context.setStrokeStyle(candleOption.color.downLine);
        context.setFillStyle(candleOption.color.downFill);
        context.setLineWidth(1 * opts.pixelRatio);
        context.moveTo(points[3].x, points[3].y); //顶点
        context.lineTo(points[0].x, points[0].y); //开盘中间点
        context.lineTo(points[0].x - eachSpacing / 4, points[0].y); //开盘左侧点
        context.lineTo(points[1].x - eachSpacing / 4, points[1].y); //收盘左侧点
        context.lineTo(points[1].x, points[1].y); //收盘中间点
        context.lineTo(points[2].x, points[2].y); //底点
        context.lineTo(points[1].x, points[1].y); //收盘中间点
        context.lineTo(points[1].x + eachSpacing / 4, points[1].y); //收盘右侧点
        context.lineTo(points[0].x + eachSpacing / 4, points[0].y); //开盘右侧点
        context.lineTo(points[0].x, points[0].y); //开盘中间点
        context.moveTo(points[3].x, points[3].y); //顶点
      }
      context.closePath();
      context.fill();
      context.stroke();
    });
  });

  context.restore();

  //画均线
  if (candleOption.average.show) {

  }

  return {
    xAxisPoints: xAxisPoints,
    calPoints: calPoints,
    eachSpacing: eachSpacing };

}

function drawAreaDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var areaOption = opts.extra.area || { type: 'straight', opacity: 0.5, addLine: false, width: 2 };
  areaOption.type = areaOption.type ? areaOption.type : 'straight';
  areaOption.opacity = areaOption.opacity ? areaOption.opacity : 0.2;
  areaOption.addLine = areaOption.addLine == true ? true : false;
  areaOption.width = areaOption.width ? areaOption.width : 2;
  var _calYAxisData2 = calYAxisData(series, opts, config),
  ranges = _calYAxisData2.ranges;

  var _getXAxisPoints2 = getXAxisPoints(opts.categories, opts, config),
  xAxisPoints = _getXAxisPoints2.xAxisPoints,
  eachSpacing = _getXAxisPoints2.eachSpacing;

  var minRange = ranges.pop();
  var maxRange = ranges.shift();
  var endY = opts.height - config.padding - config.xAxisHeight - config.legendHeight;
  var calPoints = [];

  context.save();
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
  }

  if (opts.tooltip && opts.tooltip.textList && opts.tooltip.textList.length && process === 1) {
    drawToolTipSplitLine(opts.tooltip.offset.x, opts, config, context);
  }


  series.forEach(function (eachSeries, seriesIndex) {
    var data = eachSeries.data;
    var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
    calPoints.push(points);

    var splitPointList = splitPoints(points);

    splitPointList.forEach(function (points) {
      // 绘制区域数据
      context.beginPath();
      context.setStrokeStyle(hexToRgb(eachSeries.color, areaOption.opacity));
      context.setFillStyle(hexToRgb(eachSeries.color, areaOption.opacity));
      context.setLineWidth(areaOption.width * opts.pixelRatio);
      if (points.length > 1) {
        var firstPoint = points[0];
        var lastPoint = points[points.length - 1];

        context.moveTo(firstPoint.x, firstPoint.y);
        if (areaOption.type === 'curve') {
          points.forEach(function (item, index) {
            if (index > 0) {
              var ctrlPoint = createCurveControlPoints(points, index - 1);
              context.bezierCurveTo(ctrlPoint.ctrA.x, ctrlPoint.ctrA.y, ctrlPoint.ctrB.x, ctrlPoint.ctrB.y, item.x, item.y);
            }
          });
        } else {
          points.forEach(function (item, index) {
            if (index > 0) {
              context.lineTo(item.x, item.y);
            }
          });
        }

        context.lineTo(lastPoint.x, endY);
        context.lineTo(firstPoint.x, endY);
        context.lineTo(firstPoint.x, firstPoint.y);
      } else {
        var item = points[0];
        context.moveTo(item.x - eachSpacing / 2, item.y);
        context.lineTo(item.x + eachSpacing / 2, item.y);
        context.lineTo(item.x + eachSpacing / 2, endY);
        context.lineTo(item.x - eachSpacing / 2, endY);
        context.moveTo(item.x - eachSpacing / 2, item.y);
      }
      context.closePath();
      context.fill();


      //画连线
      if (areaOption.addLine) {
        context.beginPath();
        context.setStrokeStyle(eachSeries.color);
        context.setLineWidth(areaOption.width * opts.pixelRatio);
        if (points.length === 1) {
          context.moveTo(points[0].x, points[0].y);
          context.arc(points[0].x, points[0].y, 1, 0, 2 * Math.PI);
        } else {
          context.moveTo(points[0].x, points[0].y);
          if (areaOption.type === 'curve') {
            points.forEach(function (item, index) {
              if (index > 0) {
                var ctrlPoint = createCurveControlPoints(points, index - 1);
                context.bezierCurveTo(ctrlPoint.ctrA.x, ctrlPoint.ctrA.y, ctrlPoint.ctrB.x, ctrlPoint.ctrB.y, item.x, item.y);
              }
            });
          } else {
            points.forEach(function (item, index) {
              if (index > 0) {
                context.lineTo(item.x, item.y);
              }
            });
          }
          context.moveTo(points[0].x, points[0].y);
        }
        context.closePath();
        context.stroke();
      }
    });

    //画点
    if (opts.dataPointShape !== false) {
      var shape = config.dataPointShape[seriesIndex % config.dataPointShape.length];
      drawPointShape(points, eachSeries.color, shape, context, opts);
    }

  });
  if (opts.dataLabel !== false && process === 1) {
    series.forEach(function (eachSeries, seriesIndex) {
      var data = eachSeries.data;
      var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
      drawPointText(points, eachSeries, config, context);
    });
  }

  context.restore();

  return {
    xAxisPoints: xAxisPoints,
    calPoints: calPoints,
    eachSpacing: eachSpacing };

}

function drawLineDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var lineOption = opts.extra.line || { type: 'straight', width: 2 };
  lineOption.type = lineOption.type ? lineOption.type : 'straight';
  lineOption.width = lineOption.width ? lineOption.width : 2;
  var _calYAxisData3 = calYAxisData(series, opts, config),
  ranges = _calYAxisData3.ranges;

  var _getXAxisPoints3 = getXAxisPoints(opts.categories, opts, config),
  xAxisPoints = _getXAxisPoints3.xAxisPoints,
  eachSpacing = _getXAxisPoints3.eachSpacing;

  var minRange = ranges.pop();
  var maxRange = ranges.shift();
  var calPoints = [];

  context.save();
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
  }

  if (opts.tooltip && opts.tooltip.textList && opts.tooltip.textList.length && process === 1) {
    drawToolTipSplitLine(opts.tooltip.offset.x, opts, config, context);
  }

  series.forEach(function (eachSeries, seriesIndex) {
    var data = eachSeries.data;
    var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
    calPoints.push(points);
    var splitPointList = splitPoints(points);

    splitPointList.forEach(function (points, index) {
      context.beginPath();
      context.setStrokeStyle(eachSeries.color);
      context.setLineWidth(lineOption.width * opts.pixelRatio);
      if (points.length === 1) {
        context.moveTo(points[0].x, points[0].y);
        context.arc(points[0].x, points[0].y, 1, 0, 2 * Math.PI);
      } else {
        context.moveTo(points[0].x, points[0].y);
        if (lineOption.type === 'curve') {
          points.forEach(function (item, index) {
            if (index > 0) {
              var ctrlPoint = createCurveControlPoints(points, index - 1);
              context.bezierCurveTo(ctrlPoint.ctrA.x, ctrlPoint.ctrA.y, ctrlPoint.ctrB.x, ctrlPoint.ctrB.y, item.x, item.y);
            }
          });
        } else {
          points.forEach(function (item, index) {
            if (index > 0) {
              context.lineTo(item.x, item.y);
            }
          });
        }
        context.moveTo(points[0].x, points[0].y);
      }
      context.closePath();
      context.stroke();
    });

    if (opts.dataPointShape !== false) {
      var shape = config.dataPointShape[seriesIndex % config.dataPointShape.length];
      drawPointShape(points, eachSeries.color, shape, context, opts);
    }
  });
  if (opts.dataLabel !== false && process === 1) {
    series.forEach(function (eachSeries, seriesIndex) {
      var data = eachSeries.data;
      var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
      drawPointText(points, eachSeries, config, context);
    });
  }

  context.restore();

  return {
    xAxisPoints: xAxisPoints,
    calPoints: calPoints,
    eachSpacing: eachSpacing };

}

function drawMixDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;

  var _calYAxisData6 = calYAxisData(series, opts, config),
  ranges = _calYAxisData6.ranges;

  var _getXAxisPoints6 = getXAxisPoints(opts.categories, opts, config),
  xAxisPoints = _getXAxisPoints6.xAxisPoints,
  eachSpacing = _getXAxisPoints6.eachSpacing;

  var minRange = ranges.pop();
  var maxRange = ranges.shift();
  var endY = opts.height - config.padding - config.xAxisHeight - config.legendHeight;
  var calPoints = [];

  var columnIndex = 0;
  var columnLength = 0;
  series.forEach(function (eachSeries, seriesIndex) {
    if (eachSeries.type == 'column') {
      columnLength += 1;
    }
  });
  context.save();
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
  }

  if (opts.tooltip && opts.tooltip.textList && opts.tooltip.textList.length && process === 1) {
    drawToolTipSplitLine(opts.tooltip.offset.x, opts, config, context);
  }

  series.forEach(function (eachSeries, seriesIndex) {
    var data = eachSeries.data;
    var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
    calPoints.push(points);

    // 绘制柱状数据图
    if (eachSeries.type == 'column') {
      points = fixColumeData(points, eachSpacing, columnLength, columnIndex, config, opts);
      points.forEach(function (item, index) {
        if (item !== null) {
          context.beginPath();
          context.setFillStyle(item.color || eachSeries.color);
          var startX = item.x - item.width / 2 + 1;
          var height = opts.height - item.y - config.padding - config.xAxisHeight - config.legendHeight;
          context.moveTo(startX, item.y);
          context.rect(startX, item.y, item.width - 2, height);
          context.closePath();
          context.fill();
        }
      });
      columnIndex += 1;
    }

    //绘制区域图数据

    if (eachSeries.type == 'area') {
      var splitPointList = splitPoints(points);
      splitPointList.forEach(function (points) {
        // 绘制区域数据
        context.beginPath();
        context.setStrokeStyle(eachSeries.color);
        context.setFillStyle(eachSeries.color);
        context.setGlobalAlpha(0.2);
        context.setLineWidth(2 * opts.pixelRatio);
        if (points.length > 1) {
          var firstPoint = points[0];
          var lastPoint = points[points.length - 1];
          context.moveTo(firstPoint.x, firstPoint.y);
          if (eachSeries.style === 'curve') {
            points.forEach(function (item, index) {
              if (index > 0) {
                var ctrlPoint = createCurveControlPoints(points, index - 1);
                context.bezierCurveTo(ctrlPoint.ctrA.x, ctrlPoint.ctrA.y, ctrlPoint.ctrB.x, ctrlPoint.ctrB.y, item.x, item.y);
              }
            });
          } else {
            points.forEach(function (item, index) {
              if (index > 0) {
                context.lineTo(item.x, item.y);
              }
            });
          }
          context.lineTo(lastPoint.x, endY);
          context.lineTo(firstPoint.x, endY);
          context.lineTo(firstPoint.x, firstPoint.y);
        } else {
          var item = points[0];
          context.moveTo(item.x - eachSpacing / 2, item.y);
          context.lineTo(item.x + eachSpacing / 2, item.y);
          context.lineTo(item.x + eachSpacing / 2, endY);
          context.lineTo(item.x - eachSpacing / 2, endY);
          context.moveTo(item.x - eachSpacing / 2, item.y);
        }
        context.closePath();
        context.fill();
        context.setGlobalAlpha(1);
      });
    }



    // 绘制折线数据图
    if (eachSeries.type == 'line') {
      var splitPointList = splitPoints(points);
      splitPointList.forEach(function (points, index) {
        context.beginPath();
        context.setStrokeStyle(eachSeries.color);
        context.setLineWidth(2 * opts.pixelRatio);
        if (points.length === 1) {
          context.moveTo(points[0].x, points[0].y);
          context.arc(points[0].x, points[0].y, 1, 0, 2 * Math.PI);
        } else {
          context.moveTo(points[0].x, points[0].y);
          if (eachSeries.style == 'curve') {
            points.forEach(function (item, index) {
              if (index > 0) {
                var ctrlPoint = createCurveControlPoints(points, index - 1);
                context.bezierCurveTo(ctrlPoint.ctrA.x, ctrlPoint.ctrA.y, ctrlPoint.ctrB.x, ctrlPoint.ctrB.y, item.x, item.y);
              }
            });
          } else {
            points.forEach(function (item, index) {
              if (index > 0) {
                context.lineTo(item.x, item.y);
              }
            });
          }
          context.moveTo(points[0].x, points[0].y);
        }
        context.closePath();
        context.stroke();
      });
    }

    // 绘制点数据图
    if (eachSeries.type == 'point') {
      var splitPointList = splitPoints(points);
      splitPointList.forEach(function (points, index) {
        context.beginPath();
        context.setStrokeStyle(eachSeries.color);
        context.setLineWidth(2 * opts.pixelRatio);
        context.moveTo(points[0].x, points[0].y);
        context.arc(points[0].x, points[0].y, 1, 0, 2 * Math.PI);
        context.closePath();
        context.stroke();
      });
    }

    if (opts.dataPointShape !== false && eachSeries.type !== 'column') {
      var shape = config.dataPointShape[seriesIndex % config.dataPointShape.length];
      drawPointShape(points, eachSeries.color, shape, context, opts);
    }
  });
  if (opts.dataLabel !== false && process === 1) {
    var columnIndex = 0;
    series.forEach(function (eachSeries, seriesIndex) {
      var data = eachSeries.data;
      var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
      if (eachSeries.type !== 'column') {
        drawPointText(points, eachSeries, config, context);
      } else {
        points = fixColumeData(points, eachSpacing, columnLength, columnIndex, config, opts);
        drawPointText(points, eachSeries, config, context);
        columnIndex += 1;
      }

    });
  }

  context.restore();

  return {
    xAxisPoints: xAxisPoints,
    calPoints: calPoints,
    eachSpacing: eachSpacing };

}

function drawToolTipBridge(opts, config, context, process, eachSpacing, xAxisPoints) {
  var toolTipOption = opts.extra.tooltip || {};
  if (toolTipOption.horizentalLine && opts.tooltip && process === 1 && (opts.type == 'line' || opts.type == 'area' || opts.type == 'column' || opts.type == 'candle' || opts.type == 'mix')) {
    drawToolTipHorizentalLine(opts, config, context, eachSpacing, xAxisPoints);
  }
  context.save();
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
  }
  if (opts.tooltip && opts.tooltip.textList && opts.tooltip.textList.length && process === 1) {
    drawToolTip(opts.tooltip.textList, opts.tooltip.offset, opts, config, context, eachSpacing, xAxisPoints);
  }
  context.restore();

}

function drawXAxis(categories, opts, config, context) {

  var _getXAxisPoints4 = getXAxisPoints(categories, opts, config),
  xAxisPoints = _getXAxisPoints4.xAxisPoints,
  startX = _getXAxisPoints4.startX,
  endX = _getXAxisPoints4.endX,
  eachSpacing = _getXAxisPoints4.eachSpacing;

  var startY = opts.height - config.padding - config.xAxisHeight - config.legendHeight;
  var endY = config.padding;


  //绘制滚动条
  if (opts.enableScroll && opts.xAxis.scrollShow) {
    var scrollY = opts.height - config.padding - config.legendHeight + 4 * opts.pixelRatio;
    var scrollScreenWidth = endX - startX;
    var scrollTotalWidth = eachSpacing * (xAxisPoints.length - 1);
    var scrollWidth = scrollScreenWidth * scrollScreenWidth / scrollTotalWidth;
    var scrollLeft = 0;
    if (opts._scrollDistance_) {
      scrollLeft = -opts._scrollDistance_ * scrollScreenWidth / scrollTotalWidth;
    }
    context.beginPath();
    context.setLineCap('round');
    context.setLineWidth(6 * opts.pixelRatio);
    context.setStrokeStyle(opts.xAxis.scrollBackgroundColor || "#EFEBEF");
    context.moveTo(startX, scrollY);
    context.lineTo(endX, scrollY);
    context.stroke();
    context.closePath();
    context.beginPath();
    context.setLineCap('round');
    context.setLineWidth(6 * opts.pixelRatio);
    context.setStrokeStyle(opts.xAxis.scrollColor || "#A6A6A6");
    context.moveTo(startX + scrollLeft, scrollY);
    context.lineTo(startX + scrollLeft + scrollWidth, scrollY);
    context.stroke();
    context.closePath();
  }

  context.save();

  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0) {
    context.translate(opts._scrollDistance_, 0);
  }

  context.beginPath();
  context.setStrokeStyle(opts.xAxis.gridColor || "#cccccc");
  context.setLineCap('butt');
  context.setLineWidth(1 * opts.pixelRatio);
  if (opts.xAxis.gridType == 'dash') {
    context.setLineDash([opts.xAxis.dashLength, opts.xAxis.dashLength]);
  }
  if (opts.xAxis.disableGrid !== true) {
    if (opts.xAxis.type === 'calibration') {
      xAxisPoints.forEach(function (item, index) {
        if (index > 0) {
          context.moveTo(item - eachSpacing / 2, startY);
          context.lineTo(item - eachSpacing / 2, startY + 4 * opts.pixelRatio);
        }
      });
    } else {
      xAxisPoints.forEach(function (item, index) {
        context.moveTo(item, startY);
        context.lineTo(item, endY);
      });
    }
  }
  context.closePath();
  context.stroke();
  context.setLineDash([]);

  //不绘制X轴
  if (opts.xAxis.disabled !== true) {
    // 对X轴列表做抽稀处理
    var validWidth = opts.width - 2 * config.padding - config.yAxisWidth - config.yAxisTitleWidth;
    var maxXAxisListLength = Math.min(categories.length, Math.ceil(validWidth / config.fontSize / 1.5));
    var ratio = Math.ceil(categories.length / maxXAxisListLength);
    categories = categories.map(function (item, index) {
      return index % ratio !== 0 ? '' : item;
    });

    if (config._xAxisTextAngle_ === 0) {
      categories.forEach(function (item, index) {
        var offset = eachSpacing / 2 - measureText(item) / 2;
        context.beginPath();
        context.setFontSize(config.fontSize);
        context.setFillStyle(opts.xAxis.fontColor || '#666666');
        context.fillText(item, xAxisPoints[index] + offset, startY + config.fontSize + 5);
        context.closePath();
        context.stroke();
      });

    } else {
      categories.forEach(function (item, index) {
        context.save();
        context.beginPath();
        context.setFontSize(config.fontSize);
        context.setFillStyle(opts.xAxis.fontColor || '#666666');
        var textWidth = measureText(item);
        var offset = eachSpacing / 2 - textWidth;

        var _calRotateTranslate = calRotateTranslate(xAxisPoints[index] + eachSpacing / 2, startY + config.fontSize / 2 + 5, opts.height),
        transX = _calRotateTranslate.transX,
        transY = _calRotateTranslate.transY;

        context.rotate(-1 * config._xAxisTextAngle_);
        context.translate(transX, transY);
        context.fillText(item, xAxisPoints[index] + offset, startY + config.fontSize + 5);
        context.closePath();
        context.stroke();
        context.restore();
      });
    }
  }
  context.restore();

}

function drawYAxisGrid(categories, opts, config, context) {
  if (opts.yAxis.disableGrid === true) {
    return;
  }
  var spacingValid = opts.height - 2 * config.padding - config.xAxisHeight - config.legendHeight;
  var eachSpacing = Math.floor(spacingValid / config.yAxisSplit);
  var yAxisTotalWidth = config.yAxisWidth + config.yAxisTitleWidth;
  var startX = config.padding + yAxisTotalWidth;
  var _getXAxisPoints4 = getXAxisPoints(categories, opts, config),
  xAxisPoints = _getXAxisPoints4.xAxisPoints,
  xAxiseachSpacing = _getXAxisPoints4.eachSpacing;
  var TotalWidth = xAxiseachSpacing * (xAxisPoints.length - 1);
  var endX = startX + TotalWidth;

  var points = [];
  for (var i = 0; i < config.yAxisSplit; i++) {
    points.push(config.padding + eachSpacing * i);
  }
  points.push(config.padding + eachSpacing * config.yAxisSplit + 2);

  context.save();
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0) {
    context.translate(opts._scrollDistance_, 0);
  }

  if (opts.yAxis.gridType == 'dash') {
    context.setLineDash([opts.yAxis.dashLength, opts.yAxis.dashLength]);
  }
  context.beginPath();
  context.setStrokeStyle(opts.yAxis.gridColor || "#cccccc");

  context.setLineWidth(1 * opts.pixelRatio);
  points.forEach(function (item, index) {
    context.moveTo(startX, item);
    context.lineTo(endX, item);
  });
  context.closePath();
  context.stroke();
  context.setLineDash([]);

  context.restore();
}

function drawYAxis(series, opts, config, context) {
  if (opts.yAxis.disabled === true) {
    return;
  }

  var _calYAxisData4 = calYAxisData(series, opts, config),
  rangesFormat = _calYAxisData4.rangesFormat;

  var yAxisTotalWidth = config.yAxisWidth + config.yAxisTitleWidth;

  var spacingValid = opts.height - 2 * config.padding - config.xAxisHeight - config.legendHeight;
  var eachSpacing = Math.floor(spacingValid / config.yAxisSplit);
  var startX = config.padding + yAxisTotalWidth;
  var endX = opts.width - config.padding;
  var endY = opts.height - config.padding - config.xAxisHeight - config.legendHeight;

  // set YAxis background
  context.beginPath();
  context.setFillStyle(opts.background || '#ffffff');
  if (opts._scrollDistance_ < 0) {
    context.fillRect(0, 0, startX, endY + config.xAxisHeight);
  }
  context.fillRect(endX, 0, opts.width, endY + config.xAxisHeight);
  context.closePath();
  context.stroke();

  var points = [];
  for (var i = 0; i <= config.yAxisSplit; i++) {
    points.push(config.padding + eachSpacing * i);
  }


  rangesFormat.forEach(function (item, index) {
    var pos = points[index] ? points[index] : endY;
    context.beginPath();
    context.setFontSize(config.fontSize);
    context.setFillStyle(opts.yAxis.fontColor || '#666666');
    context.fillText(item, config.padding + config.yAxisTitleWidth, pos + config.fontSize / 2);
    context.closePath();
    context.stroke();
  });


  if (opts.yAxis.title) {
    drawYAxisTitle(opts.yAxis.title, opts, config, context);
  }
}

function drawLegend(series, opts, config, context) {
  if (opts.legend === false) {
    return;
  }
  // each legend shape width 15px
  // the spacing between shape and text in each legend is the `padding`
  // each legend spacing is the `padding`
  // legend margin top `config.padding`

  var _calLegendData = calLegendData(series, opts, config),
  legendList = _calLegendData.legendList;

  var padding = 5 * opts.pixelRatio;
  var marginTop = 10 * opts.pixelRatio;
  var shapeWidth = 15 * opts.pixelRatio;
  legendList.forEach(function (itemList, listIndex) {
    var width = 0;
    itemList.forEach(function (item) {
      item.name = item.name || 'undefined';
      width += 3 * padding + measureText(item.name) + shapeWidth;
    });
    var startX = (opts.width - width) / 2 + padding;
    var startY = opts.height - config.padding - config.legendHeight + listIndex * (config.fontSize + marginTop) + padding + marginTop;

    context.setFontSize(config.fontSize);
    itemList.forEach(function (item) {
      switch (opts.type) {
        case 'line':
          context.beginPath();
          context.setLineWidth(1 * opts.pixelRatio);
          context.setStrokeStyle(item.color);
          context.setFillStyle(item.color);
          context.moveTo(startX + 7.5 * opts.pixelRatio, startY + 5 * opts.pixelRatio);
          context.arc(startX + 7.5 * opts.pixelRatio, startY + 5 * opts.pixelRatio, 6 * opts.pixelRatio, 0, 2 * Math.PI);
          context.closePath();
          context.fill();
          context.stroke();
          break;
        case 'pie':
          context.beginPath();
          context.setLineWidth(1 * opts.pixelRatio);
          context.setStrokeStyle(item.color);
          context.setFillStyle(item.color);
          context.moveTo(startX + 7.5 * opts.pixelRatio, startY + 5 * opts.pixelRatio);
          context.arc(startX + 7.5 * opts.pixelRatio, startY + 5 * opts.pixelRatio, 6 * opts.pixelRatio, 0, 2 * Math.PI);
          context.closePath();
          context.fill();
          context.stroke();
          break;
        case 'ring':
          context.beginPath();
          context.setLineWidth(1 * opts.pixelRatio);
          context.setStrokeStyle(item.color);
          context.setFillStyle(item.color);
          context.moveTo(startX + 7.5 * opts.pixelRatio, startY + 5 * opts.pixelRatio);
          context.arc(startX + 7.5 * opts.pixelRatio, startY + 5 * opts.pixelRatio, 6 * opts.pixelRatio, 0, 2 * Math.PI);
          context.closePath();
          context.fill();
          context.stroke();
          break;
        //圆弧进度图不显示图例
        case 'gauge':
          break;
        case 'arcbar':
          break;
        default:
          context.beginPath();
          context.setFillStyle(item.color);
          context.moveTo(startX, startY);
          context.fillRect(startX, startY, 15 * opts.pixelRatio, 10 * opts.pixelRatio);
          context.closePath();
          context.fill();
          context.stroke();}

      startX += padding + shapeWidth;
      context.beginPath();
      context.setFontSize(config.fontSize);
      context.setFillStyle(opts.extra.legendTextColor || '#333333');
      context.fillText(item.name, startX, startY + 6 * opts.pixelRatio + 3 * opts.pixelRatio);
      context.closePath();
      context.stroke();
      startX += measureText(item.name) + 2 * padding;
    });
  });
}

function drawPieDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;

  var pieOption = opts.extra.pie || {};
  series = getPieDataPoints(series, process);
  var centerPosition = {
    x: opts.width / 2,
    y: (opts.height - config.legendHeight) / 2 };

  var radius = Math.min(centerPosition.x - config.pieChartLinePadding - config.pieChartTextPadding - config._pieTextMaxLength_, centerPosition.y - config.pieChartLinePadding - config.pieChartTextPadding);
  if (opts.dataLabel) {
    radius -= 10;
  } else {
    radius -= 2 * config.padding;
  }

  var activeRadius = radius + config.pieChartLinePadding / 2;


  series = series.map(function (eachSeries) {
    eachSeries._start_ += (pieOption.offsetAngle || 0) * Math.PI / 180;
    return eachSeries;
  });
  series.forEach(function (eachSeries, seriesIndex) {
    if (opts.tooltip) {
      if (opts.tooltip.index == seriesIndex) {
        context.beginPath();
        context.setFillStyle(hexToRgb(eachSeries.color, opts.extra.pie.activeOpacity || 0.5));
        context.moveTo(centerPosition.x, centerPosition.y);
        context.arc(centerPosition.x, centerPosition.y, activeRadius, eachSeries._start_, eachSeries._start_ + 2 * eachSeries._proportion_ * Math.PI);
        context.closePath();
        context.fill();
      }
    }
    context.beginPath();
    context.setLineWidth(2 * opts.pixelRatio);
    context.setStrokeStyle('#ffffff');
    context.setFillStyle(eachSeries.color);
    context.moveTo(centerPosition.x, centerPosition.y);
    context.arc(centerPosition.x, centerPosition.y, radius, eachSeries._start_, eachSeries._start_ + 2 * eachSeries._proportion_ * Math.PI);
    context.closePath();
    context.fill();
    if (opts.disablePieStroke !== true) {
      context.stroke();
    }
  });

  if (opts.type === 'ring') {
    var innerPieWidth = radius * 0.6;
    if (typeof opts.extra.pie.ringWidth === 'number' && opts.extra.pie.ringWidth > 0) {
      innerPieWidth = Math.max(0, radius - opts.extra.pie.ringWidth - 10); //环形空圆 半径
    }
    context.beginPath();
    context.setFillStyle(opts.background || '#ffffff');
    context.moveTo(centerPosition.x, centerPosition.y);
    context.arc(centerPosition.x, centerPosition.y, innerPieWidth, 0, 2 * Math.PI);
    context.closePath();
    context.fill();
  }

  if (opts.dataLabel !== false && process === 1) {
    // fix https://github.com/xiaolin3303/wx-charts/issues/132
    var valid = false;
    for (var i = 0, len = series.length; i < len; i++) {
      if (series[i].data > 0) {
        valid = true;
        break;
      }
    }

    if (valid) {
      drawPieText(series, opts, config, context, radius, centerPosition);
    }
  }

  if (process === 1 && opts.type === 'ring') {
    drawRingTitle(opts, config, context);
  }

  return {
    center: centerPosition,
    radius: radius,
    series: series };

}

function drawArcbarDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;

  var arcbarOption = opts.extra.arcbar || {};
  arcbarOption.startAngle = arcbarOption.startAngle ? arcbarOption.startAngle : 0.75;
  arcbarOption.endAngle = arcbarOption.endAngle ? arcbarOption.endAngle : 0.25;
  arcbarOption.type = arcbarOption.type ? arcbarOption.type : 'default';

  series = getArcbarDataPoints(series, arcbarOption, process);
  var centerPosition = {
    x: opts.width / 2,
    y: opts.height / 2 };

  var radius = Math.min(centerPosition.x, centerPosition.y);

  if (typeof arcbarOption.width === 'number' && arcbarOption.width > 0) {
    arcbarOption.width = arcbarOption.width;
  } else {
    arcbarOption.width = 12 * opts.pixelRatio;
  }
  radius -= config.padding + arcbarOption.width / 2;

  //背景颜色
  context.setLineWidth(arcbarOption.width); // 设置圆环的宽度
  context.setStrokeStyle(arcbarOption.backgroundColor || '#E9E9E9'); // 设置圆环的颜色
  context.setLineCap('round'); // 设置圆环端点的形状
  context.beginPath(); //开始一个新的路径
  if (arcbarOption.type == 'default') {
    context.arc(centerPosition.x, centerPosition.y, radius, arcbarOption.startAngle * Math.PI, arcbarOption.endAngle * Math.PI, false);
  } else {
    context.arc(centerPosition.x, centerPosition.y, radius, 0, 2 * Math.PI, false);
  }

  context.stroke(); //对当前路径进行描边


  series.forEach(function (eachSeries) {
    context.setLineWidth(arcbarOption.width);
    context.setStrokeStyle(eachSeries.color);
    context.setLineCap('round');
    context.beginPath();
    context.arc(centerPosition.x, centerPosition.y, radius, arcbarOption.startAngle * Math.PI, eachSeries._proportion_ * Math.PI, false);
    context.stroke();

  });
  drawRingTitle(opts, config, context);
  return {
    center: centerPosition,
    radius: radius,
    series: series };

}

function drawGaugeDataPoints(categories, series, opts, config, context) {
  var process = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
  var gaugeOption = opts.extra.gauge || {};
  gaugeOption.startAngle = gaugeOption.startAngle ? gaugeOption.startAngle : 0.75;
  if (gaugeOption.oldAngle == undefined) {
    gaugeOption.oldAngle = gaugeOption.startAngle;
  }
  if (gaugeOption.oldData == undefined) {
    gaugeOption.oldData = 0;
  }
  gaugeOption.endAngle = gaugeOption.endAngle ? gaugeOption.endAngle : 0.25;
  categories = getGaugeAxisPoints(categories, gaugeOption.startAngle, gaugeOption.endAngle);
  var centerPosition = {
    x: opts.width / 2,
    y: opts.height / 2 };

  var radius = Math.min(centerPosition.x, centerPosition.y);
  if (typeof gaugeOption.width === 'number' && gaugeOption.width > 0) {
    gaugeOption.width = gaugeOption.width;
  } else {
    gaugeOption.width = 15 * opts.pixelRatio;
  }
  radius -= config.padding + gaugeOption.width / 2;
  var innerRadius = radius - gaugeOption.width;



  //画背景
  context.setLineWidth(gaugeOption.width);
  context.setLineCap('butt');
  categories.forEach(function (eachCategories) {
    context.beginPath();
    context.setStrokeStyle(eachCategories.color);
    context.arc(centerPosition.x, centerPosition.y, radius, eachCategories._startAngle_ * Math.PI, eachCategories._endAngle_ * Math.PI, false);
    context.stroke();
  });
  context.save();

  //画刻度线
  var totalAngle = gaugeOption.startAngle - gaugeOption.endAngle + 1;
  gaugeOption.splitLine.fixRadius = gaugeOption.splitLine.fixRadius ? gaugeOption.splitLine.fixRadius : 0;
  gaugeOption.splitLine.splitNumber = gaugeOption.splitLine.splitNumber ? gaugeOption.splitLine.splitNumber : 10;
  gaugeOption.splitLine.width = gaugeOption.splitLine.width ? gaugeOption.splitLine.width : 15 * opts.pixelRatio;
  gaugeOption.splitLine.color = gaugeOption.splitLine.color ? gaugeOption.splitLine.color : '#FFFFFF';
  gaugeOption.splitLine.childNumber = gaugeOption.splitLine.childNumber ? gaugeOption.splitLine.childNumber : 5;
  gaugeOption.splitLine.childWidth = gaugeOption.splitLine.childWidth ? gaugeOption.splitLine.childWidth : 5 * opts.pixelRatio;

  var splitAngle = totalAngle / gaugeOption.splitLine.splitNumber;
  var childAngle = totalAngle / gaugeOption.splitLine.splitNumber / gaugeOption.splitLine.childNumber;
  var startX = -radius - gaugeOption.width * 0.5 - gaugeOption.splitLine.fixRadius;
  var endX = -radius - gaugeOption.width * 0.5 - gaugeOption.splitLine.fixRadius + gaugeOption.splitLine.width;
  var childendX = -radius - gaugeOption.width * 0.5 - gaugeOption.splitLine.fixRadius + gaugeOption.splitLine.childWidth;

  context.translate(centerPosition.x, centerPosition.y);
  context.rotate((gaugeOption.startAngle - 1) * Math.PI);

  for (var i = 0; i < gaugeOption.splitLine.splitNumber + 1; i++) {
    context.beginPath();
    context.setStrokeStyle(gaugeOption.splitLine.color);
    context.setLineWidth(2 * opts.pixelRatio);
    context.moveTo(startX, 0);
    context.lineTo(endX, 0);
    context.stroke();
    context.rotate(splitAngle * Math.PI);
  }
  context.restore();

  context.save();
  context.translate(centerPosition.x, centerPosition.y);
  context.rotate((gaugeOption.startAngle - 1) * Math.PI);

  for (var _i = 0; _i < gaugeOption.splitLine.splitNumber * gaugeOption.splitLine.childNumber + 1; _i++) {
    context.beginPath();
    context.setStrokeStyle(gaugeOption.splitLine.color);
    context.setLineWidth(1 * opts.pixelRatio);
    context.moveTo(startX, 0);
    context.lineTo(childendX, 0);
    context.stroke();
    context.rotate(childAngle * Math.PI);
  }
  context.restore();

  //画指针
  gaugeOption.pointer.width = gaugeOption.pointer.width ? gaugeOption.pointer.width : 15 * opts.pixelRatio;
  if (gaugeOption.pointer.color == undefined || gaugeOption.pointer.color == 'auto') {
    gaugeOption.pointer.color == 'auto';
  } else {
    gaugeOption.pointer.color == gaugeOption.pointer.color;
  }
  series = getGaugeDataPoints(series, categories, gaugeOption, process);

  series.forEach(function (eachSeries) {
    context.save();
    context.translate(centerPosition.x, centerPosition.y);
    context.rotate((eachSeries._proportion_ - 1) * Math.PI);
    context.beginPath();
    context.setFillStyle(eachSeries.color);
    context.moveTo(gaugeOption.pointer.width, 0);
    context.lineTo(0, -gaugeOption.pointer.width / 2);
    context.lineTo(-innerRadius, 0);
    context.lineTo(0, gaugeOption.pointer.width / 2);
    context.lineTo(gaugeOption.pointer.width, 0);
    context.closePath();
    context.fill();
    context.beginPath();
    context.setFillStyle('#FFFFFF');
    context.arc(0, 0, gaugeOption.pointer.width / 6, 0, 2 * Math.PI, false);
    context.fill();
    context.restore();
  });

  if (opts.dataLabel !== false) {
    drawGaugeLabel(gaugeOption, radius, centerPosition, opts, config, context);
  }

  drawRingTitle(opts, config, context);

  if (process === 1 && opts.type === 'gauge') {
    gaugeOption.oldAngle = series[0]._proportion_;
    gaugeOption.oldData = series[0].data;
  }
  return {
    center: centerPosition,
    radius: radius,
    innerRadius: innerRadius,
    categories: categories,
    totalAngle: totalAngle };

}

function drawRadarDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;

  var radarOption = opts.extra.radar || {};
  var coordinateAngle = getRadarCoordinateSeries(opts.categories.length);
  var centerPosition = {
    x: opts.width / 2,
    y: (opts.height - config.legendHeight) / 2 };


  var radius = Math.min(centerPosition.x - (getMaxTextListLength(opts.categories) + config.radarLabelTextMargin), centerPosition.y - config.radarLabelTextMargin);

  radius -= config.padding;

  // draw grid
  context.beginPath();
  context.setLineWidth(1 * opts.pixelRatio);
  context.setStrokeStyle(radarOption.gridColor || "#cccccc");
  coordinateAngle.forEach(function (angle) {
    var pos = convertCoordinateOrigin(radius * Math.cos(angle), radius * Math.sin(angle), centerPosition);
    context.moveTo(centerPosition.x, centerPosition.y);
    context.lineTo(pos.x, pos.y);
  });
  context.stroke();
  context.closePath();

  // draw split line grid

  var _loop = function _loop(i) {
    var startPos = {};
    context.beginPath();
    context.setLineWidth(1 * opts.pixelRatio);
    context.setStrokeStyle(radarOption.gridColor || "#cccccc");
    coordinateAngle.forEach(function (angle, index) {
      var pos = convertCoordinateOrigin(radius / config.radarGridCount * i * Math.cos(angle), radius / config.radarGridCount * i * Math.sin(angle), centerPosition);
      if (index === 0) {
        startPos = pos;
        context.moveTo(pos.x, pos.y);
      } else {
        context.lineTo(pos.x, pos.y);
      }
    });
    context.lineTo(startPos.x, startPos.y);
    context.stroke();
    context.closePath();
  };

  for (var i = 1; i <= config.radarGridCount; i++) {
    _loop(i);
  }

  var radarDataPoints = getRadarDataPoints(coordinateAngle, centerPosition, radius, series, opts, process);

  radarDataPoints.forEach(function (eachSeries, seriesIndex) {
    // 绘制区域数据
    context.beginPath();
    context.setFillStyle(eachSeries.color);
    context.setGlobalAlpha(0.3);
    eachSeries.data.forEach(function (item, index) {
      if (index === 0) {
        context.moveTo(item.position.x, item.position.y);
      } else {
        context.lineTo(item.position.x, item.position.y);
      }
    });
    context.closePath();
    context.fill();
    context.setGlobalAlpha(1);

    if (opts.dataPointShape !== false) {
      var shape = config.dataPointShape[seriesIndex % config.dataPointShape.length];
      var points = eachSeries.data.map(function (item) {
        return item.position;
      });
      drawPointShape(points, eachSeries.color, shape, context, opts);
    }
  });
  // draw label text
  drawRadarLabel(coordinateAngle, radius, centerPosition, opts, config, context);

  return {
    center: centerPosition,
    radius: radius,
    angleList: coordinateAngle };

}

function drawCanvas(opts, context) {
  context.draw();
}

var Timing = {
  easeIn: function easeIn(pos) {
    return Math.pow(pos, 3);
  },

  easeOut: function easeOut(pos) {
    return Math.pow(pos - 1, 3) + 1;
  },

  easeInOut: function easeInOut(pos) {
    if ((pos /= 0.5) < 1) {
      return 0.5 * Math.pow(pos, 3);
    } else {
      return 0.5 * (Math.pow(pos - 2, 3) + 2);
    }
  },

  linear: function linear(pos) {
    return pos;
  } };


function Animation(opts) {
  this.isStop = false;
  opts.duration = typeof opts.duration === 'undefined' ? 1000 : opts.duration;
  opts.timing = opts.timing || 'linear';

  var delay = 17;

  var createAnimationFrame = function createAnimationFrame() {

    if (typeof requestAnimationFrame !== 'undefined') {
      return requestAnimationFrame;
    } else if (typeof setTimeout !== 'undefined') {

      return function (step, delay) {
        setTimeout(function () {
          var timeStamp = +new Date();
          step(timeStamp);
        }, delay);
      };
    } else {

      return function (step) {
        step(null);
      };
    }
  };
  var animationFrame = createAnimationFrame();
  var startTimeStamp = null;

  var _step = function step(timestamp) {

    if (timestamp === null || this.isStop === true) {
      opts.onProcess && opts.onProcess(1);
      opts.onAnimationFinish && opts.onAnimationFinish();
      return;
    }
    if (startTimeStamp === null) {
      startTimeStamp = timestamp;
    }
    if (timestamp - startTimeStamp < opts.duration) {
      var process = (timestamp - startTimeStamp) / opts.duration;
      var timingFunction = Timing[opts.timing];
      process = timingFunction(process);

      opts.onProcess && opts.onProcess(process);
      animationFrame(_step, delay);
    } else {
      opts.onProcess && opts.onProcess(1);
      opts.onAnimationFinish && opts.onAnimationFinish();
    }
  };
  _step = _step.bind(this);
  animationFrame(_step, delay);
}

// stop animation immediately
// and tigger onAnimationFinish
Animation.prototype.stop = function () {
  this.isStop = true;
};

function drawCharts(type, opts, config, context) {
  var _this = this;

  var series = opts.series;
  var categories = opts.categories;
  series = fillSeriesColor(series, config);
  series = fillSeriesType(series, opts);

  var _calLegendData = calLegendData(series, opts, config),
  legendHeight = _calLegendData.legendHeight;

  config.legendHeight = legendHeight;

  var _calYAxisData = calYAxisData(series, opts, config),
  yAxisWidth = _calYAxisData.yAxisWidth;

  config.yAxisWidth = yAxisWidth;
  if (categories && categories.length) {
    var _calCategoriesData = calCategoriesData(categories, opts, config),
    xAxisHeight = _calCategoriesData.xAxisHeight,
    angle = _calCategoriesData.angle;

    config.xAxisHeight = xAxisHeight;
    config._xAxisTextAngle_ = angle;
  }
  if (type === 'pie' || type === 'ring') {
    config._pieTextMaxLength_ = opts.dataLabel === false ? 0 : getPieTextMaxLength(series);
  }

  var duration = opts.animation ? 1000 : 0;
  this.animationInstance && this.animationInstance.stop();

  //先清空画布,不然百度和支付宝ToolTip有重影
  context.clearRect(0, 0, opts.width, opts.height);


  switch (type) {
    case 'line':
      this.animationInstance = new Animation({
        timing: 'easeIn',
        duration: duration,
        onProcess: function onProcess(process) {
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          drawYAxisGrid(categories, opts, config, context);
          drawXAxis(categories, opts, config, context);
          var _drawLineDataPoints = drawLineDataPoints(series, opts, config, context, process),
          xAxisPoints = _drawLineDataPoints.xAxisPoints,
          calPoints = _drawLineDataPoints.calPoints,
          eachSpacing = _drawLineDataPoints.eachSpacing;

          _this.chartData.xAxisPoints = xAxisPoints;
          _this.chartData.calPoints = calPoints;
          _this.chartData.eachSpacing = eachSpacing;
          drawLegend(opts.series, opts, config, context);
          drawYAxis(series, opts, config, context);
          drawToolTipBridge(opts, config, context, process, eachSpacing, xAxisPoints);
          drawCanvas(opts, context);

        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });


      break;
    case 'mix':
      this.animationInstance = new Animation({
        timing: 'easeIn',
        duration: duration,
        onProcess: function onProcess(process) {
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          drawYAxisGrid(categories, opts, config, context);
          drawXAxis(categories, opts, config, context);
          var _drawMixDataPoints = drawMixDataPoints(series, opts, config, context, process),
          xAxisPoints = _drawMixDataPoints.xAxisPoints,
          calPoints = _drawMixDataPoints.calPoints,
          eachSpacing = _drawMixDataPoints.eachSpacing;

          _this.chartData.xAxisPoints = xAxisPoints;
          _this.chartData.calPoints = calPoints;
          _this.chartData.eachSpacing = eachSpacing;
          drawLegend(opts.series, opts, config, context);
          drawYAxis(series, opts, config, context);
          drawToolTipBridge(opts, config, context, process, eachSpacing, xAxisPoints);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });


      break;
    case 'column':
      this.animationInstance = new Animation({
        timing: 'easeIn',
        duration: duration,
        onProcess: function onProcess(process) {
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          drawYAxisGrid(categories, opts, config, context);
          drawXAxis(categories, opts, config, context);
          var _drawColumnDataPoints = drawColumnDataPoints(series, opts, config, context, process),
          xAxisPoints = _drawColumnDataPoints.xAxisPoints,
          calPoints = _drawColumnDataPoints.calPoints,
          eachSpacing = _drawColumnDataPoints.eachSpacing;
          _this.chartData.xAxisPoints = xAxisPoints;
          _this.chartData.calPoints = calPoints;
          _this.chartData.eachSpacing = eachSpacing;
          drawLegend(opts.series, opts, config, context);
          drawYAxis(series, opts, config, context);
          drawToolTipBridge(opts, config, context, process, eachSpacing, xAxisPoints);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'area':
      this.animationInstance = new Animation({
        timing: 'easeIn',
        duration: duration,
        onProcess: function onProcess(process) {
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          drawYAxisGrid(categories, opts, config, context);
          drawXAxis(categories, opts, config, context);
          var _drawAreaDataPoints = drawAreaDataPoints(series, opts, config, context, process),
          xAxisPoints = _drawAreaDataPoints.xAxisPoints,
          calPoints = _drawAreaDataPoints.calPoints,
          eachSpacing = _drawAreaDataPoints.eachSpacing;

          _this.chartData.xAxisPoints = xAxisPoints;
          _this.chartData.calPoints = calPoints;
          _this.chartData.eachSpacing = eachSpacing;
          drawLegend(opts.series, opts, config, context);
          drawYAxis(series, opts, config, context);
          drawToolTipBridge(opts, config, context, process, eachSpacing, xAxisPoints);

          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'ring':
    case 'pie':
      this.animationInstance = new Animation({
        timing: 'easeInOut',
        duration: duration,
        onProcess: function onProcess(process) {
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          _this.chartData.pieData = drawPieDataPoints(series, opts, config, context, process);
          drawLegend(opts.series, opts, config, context);
          drawToolTipBridge(opts, config, context, process);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'radar':
      this.animationInstance = new Animation({
        timing: 'easeInOut',
        duration: duration,
        onProcess: function onProcess(process) {
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          _this.chartData.radarData = drawRadarDataPoints(series, opts, config, context, process);
          drawLegend(opts.series, opts, config, context);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'arcbar':
      this.animationInstance = new Animation({
        timing: 'easeInOut',
        duration: duration,
        onProcess: function onProcess(process) {
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          _this.chartData.arcbarData = drawArcbarDataPoints(series, opts, config, context, process);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'gauge':
      this.animationInstance = new Animation({
        timing: 'easeInOut',
        duration: duration,
        onProcess: function onProcess(process) {
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          _this.chartData.gaugeData = drawGaugeDataPoints(categories, series, opts, config, context, process);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'candle':
      this.animationInstance = new Animation({
        timing: 'easeIn',
        duration: duration,
        onProcess: function onProcess(process) {
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          drawYAxisGrid(categories, opts, config, context);
          drawXAxis(categories, opts, config, context);
          var _drawCandleDataPoints = drawCandleDataPoints(series, opts, config, context, process),
          xAxisPoints = _drawCandleDataPoints.xAxisPoints,
          calPoints = _drawCandleDataPoints.calPoints,
          eachSpacing = _drawCandleDataPoints.eachSpacing;

          _this.chartData.xAxisPoints = xAxisPoints;
          _this.chartData.calPoints = calPoints;
          _this.chartData.eachSpacing = eachSpacing;
          drawLegend(opts.series, opts, config, context);
          drawYAxis(series, opts, config, context);
          drawToolTipBridge(opts, config, context, process, eachSpacing, xAxisPoints);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;}

}

// simple event implement

function Event() {
  this.events = {};
}

Event.prototype.addEventListener = function (type, listener) {
  this.events[type] = this.events[type] || [];
  this.events[type].push(listener);
};

Event.prototype.trigger = function () {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var type = args[0];
  var params = args.slice(1);
  if (!!this.events[type]) {
    this.events[type].forEach(function (listener) {
      try {
        listener.apply(null, params);
      } catch (e) {
        console.error(e, " at lib\\u-charts\\u-charts.js:3243");
      }
    });
  }
};

var Charts = function Charts(opts) {
  opts.fontSize = opts.fontSize ? opts.fontSize * opts.pixelRatio : 13 * opts.pixelRatio;
  opts.title = opts.title || {};
  opts.subtitle = opts.subtitle || {};
  opts.yAxis = opts.yAxis || {};
  opts.yAxis.gridType = opts.yAxis.gridType ? opts.yAxis.gridType : 'solid';
  opts.yAxis.dashLength = opts.yAxis.dashLength ? opts.yAxis.dashLength : 4 * opts.pixelRatio;
  opts.xAxis = opts.xAxis || {};
  opts.xAxis.rotateLabel = opts.xAxis.rotateLabel ? true : false;
  opts.xAxis.type = opts.xAxis.type ? opts.xAxis.type : 'calibration';
  opts.xAxis.gridType = opts.xAxis.gridType ? opts.xAxis.gridType : 'solid';
  opts.xAxis.dashLength = opts.xAxis.dashLength ? opts.xAxis.dashLength : 4 * opts.pixelRatio;
  opts.xAxis.itemCount = opts.xAxis.itemCount ? opts.xAxis.itemCount : 5;
  opts.xAxis.scrollAlign = opts.xAxis.scrollAlign ? opts.xAxis.scrollAlign : 'left';
  opts.extra = opts.extra || {};

  opts.legend = opts.legend === false ? false : true;
  opts.rotate = opts.rotate ? true : false;
  opts.animation = opts.animation === false ? false : true;
  var config$$1 = assign({}, config);
  config$$1.yAxisTitleWidth = opts.yAxis.disabled !== true && opts.yAxis.title ? config$$1.yAxisTitleWidth : 0;
  if (opts.type == 'pie' || opts.type == 'ring') {
    config$$1.pieChartLinePadding = opts.dataLabel === false ? 0 : opts.extra.pie.lableWidth || config$$1.pieChartLinePadding * opts.pixelRatio;
  }
  config$$1.pieChartTextPadding = opts.dataLabel === false ? 0 : config$$1.pieChartTextPadding * opts.pixelRatio;
  config$$1.yAxisSplit = opts.yAxis.splitNumber ? opts.yAxis.splitNumber : config.yAxisSplit;
  //屏幕旋转
  config$$1.rotate = opts.rotate;
  if (opts.rotate) {
    var tempWidth = opts.width;
    var tempHeight = opts.height;
    opts.width = tempHeight;
    opts.height = tempWidth;
  }

  //适配H5高分屏
  config$$1.yAxisWidth = config.yAxisWidth * opts.pixelRatio;
  config$$1.xAxisHeight = config.xAxisHeight * opts.pixelRatio;
  if (opts.enableScroll && opts.xAxis.scrollShow) {
    config$$1.xAxisHeight += 4 * opts.pixelRatio;
  }
  config$$1.xAxisLineHeight = config.xAxisLineHeight * opts.pixelRatio;
  config$$1.legendHeight = config.legendHeight * opts.pixelRatio;
  //config$$1.yAxisTitleWidth=config.yAxisTitleWidth*opts.pixelRatio;
  config$$1.padding = config.padding * opts.pixelRatio;
  config$$1.fontSize = opts.fontSize;
  config$$1.titleFontSize = config.titleFontSize * opts.pixelRatio;
  config$$1.subtitleFontSize = config.subtitleFontSize * opts.pixelRatio;
  config$$1.toolTipPadding = config.toolTipPadding * opts.pixelRatio;
  config$$1.toolTipLineHeight = config.toolTipLineHeight * opts.pixelRatio;
  config$$1.columePadding = config.columePadding * opts.pixelRatio;
  //config$$1.xAxisTextPadding=config.xAxisTextPadding*opts.pixelRatio;

  //向配置中传入当前pixelRatio及字体大小
  config.pixelRatio = opts.pixelRatio;
  config.fontSize = opts.fontSize;
  config.rotate = opts.rotate;

  this.opts = opts;
  this.config = config$$1;
  opts.$this = opts.$this ? opts.$this : this;
  this.context = uni.createCanvasContext(opts.canvasId, opts.$this);
  // store calcuated chart data
  // such as chart point coordinate
  this.chartData = {};
  this.event = new Event();

  this.scrollOption = {
    currentOffset: 0,
    startTouchX: 0,
    distance: 0 };


  //计算右对齐偏移距离
  if (opts.enableScroll && opts.xAxis.scrollAlign == 'right') {
    var _calYAxisData = calYAxisData(opts.series, opts, config$$1),
    yAxisWidth = _calYAxisData.yAxisWidth;
    config$$1.yAxisWidth = yAxisWidth;
    var offsetLeft = 0;
    var _getXAxisPoints0 = getXAxisPoints(opts.categories, opts, config$$1),
    xAxisPoints = _getXAxisPoints0.xAxisPoints,
    startX = _getXAxisPoints0.startX,
    endX = _getXAxisPoints0.endX,
    eachSpacing = _getXAxisPoints0.eachSpacing;
    var totalWidth = eachSpacing * (xAxisPoints.length - 1);
    var screenWidth = endX - startX;
    offsetLeft = screenWidth - totalWidth;
    this.scrollOption = {
      currentOffset: offsetLeft,
      startTouchX: offsetLeft,
      distance: 0 };

    opts._scrollDistance_ = offsetLeft;
  }

  drawCharts.call(this, opts.type, opts, config$$1, this.context);
};

Charts.prototype.updateData = function () {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  this.opts.series = data.series || this.opts.series;
  this.opts.categories = data.categories || this.opts.categories;

  this.opts.title = assign({}, this.opts.title, data.title || {});
  this.opts.subtitle = assign({}, this.opts.subtitle, data.subtitle || {});

  drawCharts.call(this, this.opts.type, this.opts, this.config, this.context);
};

Charts.prototype.zoom = function () {
  var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.opts.xAxis.itemCount;
  if (this.opts.enableScroll !== true) {
    console.log('请启用滚动条后使用！', " at lib\\u-charts\\u-charts.js:3361");
    return;
  }
  this.opts.animation = false;
  this.opts.xAxis.itemCount = val.itemCount;
  drawCharts.call(this, this.opts.type, this.opts, this.config, this.context);
};

Charts.prototype.stopAnimation = function () {
  this.animationInstance && this.animationInstance.stop();
};

Charts.prototype.addEventListener = function (type, listener) {
  this.event.addEventListener(type, listener);
};

Charts.prototype.getCurrentDataIndex = function (e) {
  var touches = e.mp.changedTouches[0];
  if (touches) {
    var _touches$ = getTouches(touches, this.opts, e);
    if (this.opts.type === 'pie' || this.opts.type === 'ring') {
      return findPieChartCurrentIndex({ x: _touches$.x, y: _touches$.y }, this.chartData.pieData);
    } else if (this.opts.type === 'radar') {
      return findRadarChartCurrentIndex({ x: _touches$.x, y: _touches$.y }, this.chartData.radarData, this.opts.categories.length);
    } else {
      return findCurrentIndex({ x: _touches$.x, y: _touches$.y }, this.chartData.xAxisPoints, this.opts, this.config, Math.abs(this.scrollOption.currentOffset));
    }
  }
  return -1;
};

Charts.prototype.showToolTip = function (e) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var touches = e.mp.changedTouches[0];
  var _touches$ = getTouches(touches, this.opts, e);

  if (this.opts.type === 'line' || this.opts.type === 'area' || this.opts.type === 'mix' || this.opts.type === 'column') {
    var index = this.getCurrentDataIndex(e);
    var currentOffset = this.scrollOption.currentOffset;

    var opts = assign({}, this.opts, {
      _scrollDistance_: currentOffset,
      animation: false });

    if (index > -1) {

      var seriesData = getSeriesDataItem(this.opts.series, index);
      if (seriesData.length !== 0) {
        var _getToolTipData = getToolTipData(seriesData, this.chartData.calPoints, index, this.opts.categories, option),
        textList = _getToolTipData.textList,
        offset = _getToolTipData.offset;
        offset.y = _touches$.y;
        opts.tooltip = {
          textList: textList,
          offset: offset,
          option: option,
          index: index };

      }
    }
    drawCharts.call(this, opts.type, opts, this.config, this.context);
  }
  if (this.opts.type === 'candle') {

    var index = this.getCurrentDataIndex(e);
    var currentOffset = this.scrollOption.currentOffset;

    var opts = assign({}, this.opts, {
      _scrollDistance_: currentOffset,
      animation: false });

    if (index > -1) {
      var seriesData = getSeriesDataItem(this.opts.series, index);
      if (seriesData.length !== 0) {
        var _getToolTipData = getCandleToolTipData(this.opts.series[0].data, seriesData, this.chartData.calPoints, index, this.opts.categories, this.opts.extra.candle, option),
        textList = _getToolTipData.textList,
        offset = _getToolTipData.offset;
        offset.y = _touches$.y;
        opts.tooltip = {
          textList: textList,
          offset: offset,
          option: option,
          index: index };

      }
    }
    drawCharts.call(this, opts.type, opts, this.config, this.context);
  }
  if (this.opts.type === 'pie' || this.opts.type === 'ring') {
    var index = this.getCurrentDataIndex(e);
    var currentOffset = this.scrollOption.currentOffset;

    var opts = assign({}, this.opts, {
      _scrollDistance_: currentOffset,
      animation: false });

    if (index > -1) {

      var seriesData = this.opts.series[index];
      var textList = [{
        text: option.format ? option.format(seriesData) : seriesData.name + ': ' + seriesData.data,
        color: seriesData.color }];

      var offset = { x: _touches$.x, y: _touches$.y };

      opts.tooltip = {
        textList: textList,
        offset: offset,
        option: option,
        index: index };

    }
    drawCharts.call(this, opts.type, opts, this.config, this.context);
  }
};

Charts.prototype.scrollStart = function (e) {
  var touches = e.mp.changedTouches[0];
  var _touches$ = getTouches(touches, this.opts, e);
  if (touches && this.opts.enableScroll === true) {
    if (touches.x) {
      this.scrollOption.startTouchX = _touches$.x;
    } else {
      this.scrollOption.startTouchX = _touches$.clientX;
    }
  }
};

Charts.prototype.scroll = function (e) {
  // TODO throtting...
  var touches = e.mp.changedTouches[0];
  var _touches$ = getTouches(touches, this.opts, e);
  if (touches && this.opts.enableScroll === true) {
    var _distance;
    if (touches.x) {
      _distance = _touches$.x - this.scrollOption.startTouchX;
    } else {
      _distance = _touches$.clientX - this.scrollOption.startTouchX;
    }
    var currentOffset = this.scrollOption.currentOffset;

    var validDistance = calValidDistance(currentOffset + _distance, this.chartData, this.config, this.opts);

    this.scrollOption.distance = _distance = validDistance - currentOffset;
    var opts = assign({}, this.opts, {
      _scrollDistance_: currentOffset + _distance,
      animation: false });

    drawCharts.call(this, opts.type, opts, this.config, this.context);
  }
};

Charts.prototype.scrollEnd = function (e) {
  if (this.opts.enableScroll === true) {
    var _scrollOption = this.scrollOption,
    currentOffset = _scrollOption.currentOffset,
    distance = _scrollOption.distance;

    this.scrollOption.currentOffset = currentOffset + distance;
    this.scrollOption.distance = 0;
  }
};

module.exports = Charts;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-app-plus/dist/index.js */ "./node_modules/@dcloudio/uni-app-plus/dist/index.js")["default"]))

/***/ }),

/***/ "../../../../Aproject/github/watch-test/main.js":
/*!*********************************************!*\
  !*** D:/Aproject/github/watch-test/main.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createApp) {__webpack_require__(/*! uni-pages */ "../../../../Aproject/github/watch-test/pages.json");
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));
var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ "../../../../Aproject/github/watch-test/App.vue"));




















var _index = __webpack_require__(/*! ./service/request/index.js */ "../../../../Aproject/github/watch-test/service/request/index.js");


var _index2 = _interopRequireDefault(__webpack_require__(/*! ./store/index.js */ "../../../../Aproject/github/watch-test/store/index.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var cuCustom = function cuCustom() {return __webpack_require__.e(/*! import() | lib/colorui/components/cu-custom */ "lib/colorui/components/cu-custom").then(__webpack_require__.bind(null, /*! ./lib/colorui/components/cu-custom.vue */ "../../../../Aproject/github/watch-test/lib/colorui/components/cu-custom.vue"));};_vue.default.component('cu-custom', cuCustom); //首页
var home = function home() {return Promise.all(/*! import() | pages/home/home */[__webpack_require__.e("common/vendor"), __webpack_require__.e("pages/home/home")]).then(__webpack_require__.bind(null, /*! ./pages/home/home.vue */ "../../../../Aproject/github/watch-test/pages/home/home.vue"));};_vue.default.component('home', home); //运动
var motion = function motion() {return Promise.all(/*! import() | pages/motion/motion */[__webpack_require__.e("common/vendor"), __webpack_require__.e("pages/motion/motion")]).then(__webpack_require__.bind(null, /*! ./pages/motion/motion.vue */ "../../../../Aproject/github/watch-test/pages/motion/motion.vue"));};_vue.default.component('motion', motion); //设备（蓝牙）
var ble = function ble() {return Promise.all(/*! import() | pages/ble/ble */[__webpack_require__.e("common/vendor"), __webpack_require__.e("pages/ble/ble")]).then(__webpack_require__.bind(null, /*! ./pages/ble/ble.vue */ "../../../../Aproject/github/watch-test/pages/ble/ble.vue"));};_vue.default.component('ble', ble); //目标
var goal = function goal() {return Promise.all(/*! import() | pages/goal/goal */[__webpack_require__.e("common/vendor"), __webpack_require__.e("pages/goal/goal")]).then(__webpack_require__.bind(null, /*! ./pages/goal/goal.vue */ "../../../../Aproject/github/watch-test/pages/goal/goal.vue"));};_vue.default.component('goal', goal); //我的
var mine = function mine() {return Promise.all(/*! import() | pages/mine/mine */[__webpack_require__.e("common/vendor"), __webpack_require__.e("pages/mine/mine")]).then(__webpack_require__.bind(null, /*! ./pages/mine/mine.vue */ "../../../../Aproject/github/watch-test/pages/mine/mine.vue"));};_vue.default.component('mine', mine); //请求拦截
_vue.default.prototype.$http = _index.http; //状态管理
_vue.default.prototype.$store = _index2.default;_vue.default.config.productionTip = false;_App.default.mpType = 'app';var app = new _vue.default(_objectSpread({
  store: _index2.default },
_App.default));

createApp(app).$mount();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-app-plus/dist/index.js */ "./node_modules/@dcloudio/uni-app-plus/dist/index.js")["createApp"]))

/***/ }),

/***/ "../../../../Aproject/github/watch-test/main.js?{\"page\":\"pages%2Findex\"}":
/*!**********************************************************************!*\
  !*** D:/Aproject/github/watch-test/main.js?{"page":"pages%2Findex"} ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ "../../../../Aproject/github/watch-test/pages.json");

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));
var _index = _interopRequireDefault(__webpack_require__(/*! ./pages/index.vue */ "../../../../Aproject/github/watch-test/pages/index.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_index.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-app-plus/dist/index.js */ "./node_modules/@dcloudio/uni-app-plus/dist/index.js")["createPage"]))

/***/ }),

/***/ "../../../../Aproject/github/watch-test/main.js?{\"page\":\"pages%2Fmine%2Fchildren%2Fforget\"}":
/*!*****************************************************************************************!*\
  !*** D:/Aproject/github/watch-test/main.js?{"page":"pages%2Fmine%2Fchildren%2Fforget"} ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ "../../../../Aproject/github/watch-test/pages.json");

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));
var _forget = _interopRequireDefault(__webpack_require__(/*! ./pages/mine/children/forget.vue */ "../../../../Aproject/github/watch-test/pages/mine/children/forget.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_forget.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-app-plus/dist/index.js */ "./node_modules/@dcloudio/uni-app-plus/dist/index.js")["createPage"]))

/***/ }),

/***/ "../../../../Aproject/github/watch-test/main.js?{\"page\":\"pages%2Fmine%2Fchildren%2Flogin\"}":
/*!****************************************************************************************!*\
  !*** D:/Aproject/github/watch-test/main.js?{"page":"pages%2Fmine%2Fchildren%2Flogin"} ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ "../../../../Aproject/github/watch-test/pages.json");

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));
var _login = _interopRequireDefault(__webpack_require__(/*! ./pages/mine/children/login.vue */ "../../../../Aproject/github/watch-test/pages/mine/children/login.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_login.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-app-plus/dist/index.js */ "./node_modules/@dcloudio/uni-app-plus/dist/index.js")["createPage"]))

/***/ }),

/***/ "../../../../Aproject/github/watch-test/main.js?{\"page\":\"pages%2Fmine%2Fchildren%2Fregister\"}":
/*!*******************************************************************************************!*\
  !*** D:/Aproject/github/watch-test/main.js?{"page":"pages%2Fmine%2Fchildren%2Fregister"} ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ "../../../../Aproject/github/watch-test/pages.json");

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));
var _register = _interopRequireDefault(__webpack_require__(/*! ./pages/mine/children/register.vue */ "../../../../Aproject/github/watch-test/pages/mine/children/register.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_register.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-app-plus/dist/index.js */ "./node_modules/@dcloudio/uni-app-plus/dist/index.js")["createPage"]))

/***/ }),

/***/ "../../../../Aproject/github/watch-test/main.js?{\"page\":\"pages%2Fmotion%2Fchildren%2Fmotion_ydData\"}":
/*!**************************************************************************************************!*\
  !*** D:/Aproject/github/watch-test/main.js?{"page":"pages%2Fmotion%2Fchildren%2Fmotion_ydData"} ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ "../../../../Aproject/github/watch-test/pages.json");

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));
var _motion_ydData = _interopRequireDefault(__webpack_require__(/*! ./pages/motion/children/motion_ydData.vue */ "../../../../Aproject/github/watch-test/pages/motion/children/motion_ydData.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_motion_ydData.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-app-plus/dist/index.js */ "./node_modules/@dcloudio/uni-app-plus/dist/index.js")["createPage"]))

/***/ }),

/***/ "../../../../Aproject/github/watch-test/pages.json":
/*!************************************************!*\
  !*** D:/Aproject/github/watch-test/pages.json ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "../../../../Aproject/github/watch-test/service/api/home.js":
/*!*********************************************************!*\
  !*** D:/Aproject/github/watch-test/service/api/home.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.getSwiper = getSwiper;exports.getRing = getRing;


var _index = __webpack_require__(/*! ../../service/request/index.js */ "../../../../Aproject/github/watch-test/service/request/index.js"); /**
                                                         * 首页api
                                                         */ //请求拦截
/**
 * 获取轮播
 * @returns {Promise}
 */function getSwiper() {
  var datas = {};
  var config = {};
  var e = _index.http.get("swiper", datas, config);
  return e;
}

/**
   * 获取统计图数据
   * @returns {Promise}
   */
function getRing() {
  var datas = {};
  var config = {};
  var e = _index.http.get("ring", datas, config);
  return e;
}

/***/ }),

/***/ "../../../../Aproject/github/watch-test/service/api/login.js":
/*!**********************************************************!*\
  !*** D:/Aproject/github/watch-test/service/api/login.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.getisLogin = getisLogin;exports.getLogin = getLogin;


var _index = __webpack_require__(/*! ../../service/request/index.js */ "../../../../Aproject/github/watch-test/service/request/index.js"); /**
                                                         * 首页api
                                                         */ //请求拦截
/**
 * 检测登陆状态 只是通过请求触发过滤器，用以判断是否登陆 否则跳转到登陆
 * @returns {Promise}
 */function getisLogin() {
  var datas = {};
  var config = {};
  var e = _index.http.post("login", datas, config);
  return e;
}

/**
   * 登陆
   * @returns {Promise}
   */
function getLogin() {
  var datas = {};
  var config = {
    header: {
      "isLogin": true //不用检测是否需要登陆权限
    } };

  var e = _index.http.post("login", datas, config);
  return e;
}

/***/ }),

/***/ "../../../../Aproject/github/watch-test/service/api/motion.js":
/*!***********************************************************!*\
  !*** D:/Aproject/github/watch-test/service/api/motion.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.getGoalc = getGoalc;exports.getYdList = getYdList;exports.getJkList = getJkList;


var _index = __webpack_require__(/*! ../../service/request/index.js */ "../../../../Aproject/github/watch-test/service/request/index.js"); /**
                                                         * 运动api
                                                         */ //请求拦截
/**
 * 获取目标完成数据
 * @returns {Promise}
 */function getGoalc() {
  var datas = {};
  var config = {};
  var e = _index.http.get("goalc", datas, config);
  return e;
}

/**
   * 获取运动数据
   * @returns {Promise}
   */
function getYdList() {
  var datas = {};
  var config = {};
  var e = _index.http.get("ydlist", datas, config);
  return e;
}

/**
   * 获取健康数据
   * @returns {Promise}
   */
function getJkList() {
  var datas = {};
  var config = {};
  var e = _index.http.get("jklist", datas, config);
  return e;
}

/***/ }),

/***/ "../../../../Aproject/github/watch-test/service/api/version.js":
/*!************************************************************!*\
  !*** D:/Aproject/github/watch-test/service/api/version.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.getVersion = getVersion;


var _index = __webpack_require__(/*! ../../service/request/index.js */ "../../../../Aproject/github/watch-test/service/request/index.js"); /**
                                                         * 版本api
                                                         */ //请求拦截
/**
 * 获取最新版本
 * @returns {Promise}
 */function getVersion() {
  var datas = {};
  var config = {};
  var e = _index.http.get("version", datas, config);
  return e;
}

/***/ }),

/***/ "../../../../Aproject/github/watch-test/service/request/index.js":
/*!**************************************************************!*\
  !*** D:/Aproject/github/watch-test/service/request/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.http = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));
var _index = _interopRequireDefault(__webpack_require__(/*! ../../store/index.js */ "../../../../Aproject/github/watch-test/store/index.js"));
var _request = _interopRequireDefault(__webpack_require__(/*! ./request.js */ "../../../../Aproject/github/watch-test/service/request/request.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //状态管理
var http = new _request.default();exports.http = http;
http.setConfig(function (config) {/* 设置全局配置 */
  config.baseUrl = 'https://www.easy-mock.com/mock/5d1443deed2ae904ba2cdd78/mock/'; //默认请求地址
  config.header = {
    'Content-Type': 'application/json;charset=UTF-8' };

  return config;
});
http.interceptor.request(function (config, cancel) {/* 请求之前拦截器 */
  uni.showToast({
    icon: "loading" });
  //加载中动画
  console.log("用户数据", _index.default.getters.getUserData, " at service\\request\\index.js:16");
  //是否需要登陆权限，是否登陆  否则跳转到登陆
  if (!config.header.isLogin && _index.default.getters.getUserData == "") {
    uni.reLaunch({
      url: './mine/children/login' });

    return false;
  }
  /*
    if (!token) { // 如果token不存在，调用cancel 会取消本次请求，但是该函数的catch() 仍会执行
    	cancel('token 不存在') // 接收一个参数，会传给catch((err) => {}) err.errMsg === 'token 不存在'
    }
    */
  console.log("请求前拦截", " at service\\request\\index.js:29");
  return config;
});
http.interceptor.response(function (response) {/* 请求之后拦截器 */
  uni.hideToast(); //关闭加载动画
  console.log("请求后拦截", " at service\\request\\index.js:34");
  return response;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-app-plus/dist/index.js */ "./node_modules/@dcloudio/uni-app-plus/dist/index.js")["default"]))

/***/ }),

/***/ "../../../../Aproject/github/watch-test/service/request/request.js":
/*!****************************************************************!*\
  !*** D:/Aproject/github/watch-test/service/request/request.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Request 0.0.5
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Class uni-app request网络请求库
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Author lu-ch
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Date 2019-06-05
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Email webwork.s@qq.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * **/var
Request = /*#__PURE__*/function () {function Request() {_classCallCheck(this, Request);_defineProperty(this, "config",
    {
      baseUrl: '',
      header: {
        'Content-Type': 'application/json;charset=UTF-8' },

      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function success() {
      },
      fail: function fail() {
      },
      complete: function complete() {
      } });_defineProperty(this, "interceptor",






    {
      request: function request(f) {
        if (f) {
          Request.requestBeforeFun = f;
        }
      },
      response: function response(f) {
        if (f) {
          Request.requestComFun = f;
        }
      } });}_createClass(Request, [{ key: "setConfig", value: function setConfig(










    f) {
      this.config = f(this.config);
    } }, { key: "request", value: function request()

    {var _this = this;var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      options.baseUrl = options.baseUrl || this.config.baseUrl;
      options.dataType = options.dataType || this.config.dataType;
      options.url = Request.posUrl(options.url) ? options.url : options.baseUrl + options.url;
      options.data = options.data || {};
      options.header = options.header || this.config.header;
      options.method = options.method || this.config.method;
      return new Promise(function (resolve, reject) {
        var next = true;
        var _config = null;
        options.complete = function (response) {
          var statusCode = response.statusCode;
          response.config = _config;
          response = Request.requestComFun(response);
          if (statusCode === 200) {// 成功
            resolve(response);
          } else {
            reject(response);
          }
        };
        var cancel = function cancel() {var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'handle cancel';
          var err = {
            errMsg: t,
            config: afC };

          reject(err);
          next = false;
        };
        var afC = _objectSpread({}, _this.config, options);
        _config = _objectSpread({}, afC, Request.requestBeforeFun(afC, cancel));
        if (!next) return;
        uni.request(_config);
      });
    } }, { key: "get", value: function get(

    url, data) {var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      options.url = url;
      options.data = data;
      options.method = 'GET';
      return this.request(options);
    } }, { key: "post", value: function post(

    url, data) {var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      options.url = url;
      options.data = data;
      options.method = 'POST';
      return this.request(options);
    } }], [{ key: "posUrl", value: function posUrl(url) {/* 判断url是否为绝对路径 */return /(http|https):\/\/([\w.]+\/?)\S*/.test(url);} }, { key: "requestBeforeFun", value: function requestBeforeFun(config) {return config;} }, { key: "requestComFun", value: function requestComFun(response) {return response;} }]);return Request;}();exports.default = Request;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-app-plus/dist/index.js */ "./node_modules/@dcloudio/uni-app-plus/dist/index.js")["default"]))

/***/ }),

/***/ "../../../../Aproject/github/watch-test/store/index.js":
/*!****************************************************!*\
  !*** D:/Aproject/github/watch-test/store/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));
var _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js"));


var _loginModule = _interopRequireDefault(__webpack_require__(/*! ./module/login/loginModule.js */ "../../../../Aproject/github/watch-test/store/module/login/loginModule.js"));

var _homeModule = _interopRequireDefault(__webpack_require__(/*! ./module/home/homeModule.js */ "../../../../Aproject/github/watch-test/store/module/home/homeModule.js"));
var _motionModule = _interopRequireDefault(__webpack_require__(/*! ./module/motion/motionModule.js */ "../../../../Aproject/github/watch-test/store/module/motion/motionModule.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //modules
//登陆
//首页
//运动
_vue.default.use(_vuex.default);var _default = new _vuex.default.Store({
  state: {},
  modules: {
    login: _loginModule.default,
    home: _homeModule.default,
    motion: _motionModule.default } });exports.default = _default;

/***/ }),

/***/ "../../../../Aproject/github/watch-test/store/module/home/homeModule.js":
/*!*********************************************************************!*\
  !*** D:/Aproject/github/watch-test/store/module/home/homeModule.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //home数据
var state = {
  swiperData: '', //轮播数据
  ringData: '' //统计数据
};
var mutations = {
  set_SwiperData: function set_SwiperData(state, SwiperData) {
    //赋值
    state.swiperData = SwiperData;
  },
  set_RingData: function set_RingData(state, RingData) {
    //赋值
    state.ringData = RingData;
  } };



var actions = {
  setSwiperData: function setSwiperData(_ref, SwiperData) {var commit = _ref.commit;
    //赋值
    commit("set_SwiperData", SwiperData);
  },
  setRingData: function setRingData(_ref2, RingData) {var commit = _ref2.commit;
    //赋值
    commit("set_RingData", RingData);
  } };

var getters = {
  getSwiperData: function getSwiperData(state) {
    //获取
    return state.swiperData;
  },
  getRingData: function getRingData(state) {
    //获取
    return state.ringData;
  } };



//暴露出去
var _default = {
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters };exports.default = _default;

/***/ }),

/***/ "../../../../Aproject/github/watch-test/store/module/login/loginModule.js":
/*!***********************************************************************!*\
  !*** D:/Aproject/github/watch-test/store/module/login/loginModule.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //Login数据
var state = {
  userData: '' //用户信息
};
var mutations = {
  set_UserData: function set_UserData(state, UserData) {
    //赋值用户信息
    state.userData = UserData;
  } };




var actions = {
  setUserData: function setUserData(_ref, UserData) {var commit = _ref.commit;
    //赋值用户信息
    commit("set_UserData", UserData);
  } };

var getters = {
  getUserData: function getUserData(state) {
    //获取用户信息
    return state.userData;
  } };



//暴露出去
var _default = {
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters };exports.default = _default;

/***/ }),

/***/ "../../../../Aproject/github/watch-test/store/module/motion/motionModule.js":
/*!*************************************************************************!*\
  !*** D:/Aproject/github/watch-test/store/module/motion/motionModule.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //motion数据
var state = {
  goalcData: '', //计划完成度数据
  ydData: '', //运动数据
  jkData: '' //健康数据
};
var mutations = {
  set_GoalcData: function set_GoalcData(state, GoalcData) {
    //赋值
    state.goalcData = GoalcData;
  },
  set_YdData: function set_YdData(state, YdData) {
    //赋值
    state.ydData = YdData;
  },
  set_JkData: function set_JkData(state, JkData) {
    //赋值
    state.jkData = JkData;
  } };



var actions = {
  setGoalcData: function setGoalcData(_ref, GoalcData) {var commit = _ref.commit;
    //赋值
    commit("set_GoalcData", GoalcData);
  },
  setYdData: function setYdData(_ref2, YdData) {var commit = _ref2.commit;
    //赋值
    commit("set_YdData", YdData);
  },
  setJkData: function setJkData(_ref3, JkData) {var commit = _ref3.commit;
    //赋值
    commit("set_JkData", JkData);
  } };

var getters = {
  getGoalcData: function getGoalcData(state) {
    //获取
    return state.goalcData;
  },
  getYdData: function getYdData(state) {
    //获取
    return state.ydData;
  },
  getJkData: function getJkData(state) {
    //获取
    return state.jkData;
  } };



//暴露出去
var _default = {
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters };exports.default = _default;

/***/ }),

/***/ "./node_modules/@dcloudio/uni-app-plus/dist/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@dcloudio/uni-app-plus/dist/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createPage = createPage;exports.createComponent = createComponent;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr, i) {var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var SYNC_API_RE = /^\$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

var CALLBACK_API_RE = /^on/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name);
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name);
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name);
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {params[_key - 1] = arguments[_key];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return api.apply(void 0, [options].concat(params));
    }
    return handlePromise(new Promise(function (resolve, reject) {
      api.apply(void 0, [Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
      /* eslint-disable no-extend-native */
      if (!Promise.prototype.finally) {
        Promise.prototype.finally = function (callback) {
          var promise = this.constructor;
          return this.then(
          function (value) {return promise.resolve(callback()).then(function () {return value;});},
          function (reason) {return promise.resolve(callback()).then(function () {
              throw reason;
            });});

        };
      }
    }));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      return 1;
    } else {
      return 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var protocols = {};
var todos = [];
var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("app-plus ".concat(methodName, "\u6682\u4E0D\u652F\u6301").concat(key));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("app-plus \u6682\u4E0D\u652F\u6301".concat(methodName));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      var returnValue = wx[options.name || methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail:\u6682\u4E0D\u652F\u6301 ").concat(name, " \u65B9\u6CD5") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var getEmitter = function () {
  if (typeof getUniEmitter === 'function') {
    /* eslint-disable no-undef */
    return getUniEmitter;
  }
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}



var eventApi = /*#__PURE__*/Object.freeze({
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


function wrapper$1(webview) {
  webview.$processed = true;

  webview.postMessage = function (data) {
    plus.webview.postMessageToUniNView({
      type: 'UniAppSubNVue',
      data: data },
    webview.id);
  };
  var callbacks = [];
  webview.onMessage = function (callback) {
    callbacks.push(callback);
  };
  webview.$consumeMessage = function (e) {
    callbacks.forEach(function (callback) {return callback(e);});
  };

  if (!webview.__uniapp_mask_id) {
    return;
  }
  var maskColor = webview.__uniapp_mask;
  var maskWebview = plus.webview.getWebviewById(webview.__uniapp_mask_id);
  maskWebview = maskWebview.parent() || maskWebview; // 再次检测父
  var oldShow = webview.show;
  var oldHide = webview.hide;
  var oldClose = webview.close;

  var showMask = function showMask() {
    maskWebview.setStyle({
      mask: maskColor });

  };
  var closeMask = function closeMask() {
    maskWebview.setStyle({
      mask: 'none' });

  };
  webview.show = function () {
    showMask();for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {args[_key2] = arguments[_key2];}
    return oldShow.apply(webview, args);
  };
  webview.hide = function () {
    closeMask();for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {args[_key3] = arguments[_key3];}
    return oldHide.apply(webview, args);
  };
  webview.close = function () {
    closeMask();
    callbacks = [];for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
    return oldClose.apply(webview, args);
  };
}

function getSubNVueById(id) {
  var webview = plus.webview.getWebviewById(id);
  if (webview && !webview.$processed) {
    wrapper$1(webview);
  }
  return webview;
}

function requireNativePlugin(pluginName) {
  /* eslint-disable no-undef */
  if (typeof weex !== 'undefined') {
    return weex.requireModule(pluginName);
  }
  /* eslint-disable no-undef */
  return __requireNativePlugin__(pluginName);
}

var api = /*#__PURE__*/Object.freeze({
  requireNativePlugin: requireNativePlugin,
  getSubNVueById: getSubNVueById });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  {
    if (!wx.canIUse('nextTick')) {
      return;
    }
  }
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {args[_key5 - 1] = arguments[_key5];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {args[_key6] = arguments[_key6];}
      return oldHook.apply(this, args);
    };
  }
}

Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('onLoad', options);
  return MPPage(options);
};

Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('created', options);
  return MPComponent(options);
};

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function initHooks(mpOptions, hooks) {
  hooks.forEach(function (hook) {
    mpOptions[hook] = function (args) {
      return this.$vm && this.$vm.__call_hook(hook, args);
    };
  });
}

function initVueComponent(Vue$$1, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
    vueOptions = VueComponent.extendOptions;
  } else {
    VueComponent = Vue$$1.extend(vueOptions);
  }
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"VUE_APP_PLATFORM":"app-plus","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions['behaviors'];
  var vueExtends = vueOptions['extends'];
  var vueMixins = vueOptions['mixins'];

  var vueProps = vueOptions['props'];

  if (!vueProps) {
    vueOptions['props'] = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps['name'] = String;
          vueProps['value'] = null;
        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts['default'];
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type, value, file);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts, null, file);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$2(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor = dataPath ? vm.__get_value(dataPath, context) : context;

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                                  *[
                                                  *    ['data.items', 'data.id', item.data.id],
                                                  *    ['metas', 'id', meta.id]
                                                  *],
                                                  *[
                                                  *    ['data.items', 'data.id', item.data.id],
                                                  *    ['metas', 'id', meta.id]
                                                  *],
                                                  *'test'
                                                  */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function handleEvent(event) {var _this = this;
  event = wrapper$2(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var eventOpts = (event.currentTarget || event.target).dataset.eventOpts;
  if (!eventOpts) {
    return console.warn("\u4E8B\u4EF6\u4FE1\u606F\u4E0D\u5B58\u5728");
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;
  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this.$vm;
          if (
          handlerCtx.$options.generic &&
          handlerCtx.$parent &&
          handlerCtx.$parent.$parent)
          {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = handlerCtx.$parent.$parent;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          handler.apply(handlerCtx, processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName));

        }
      });
    }
  });
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound'];


function parseBaseApp(vm, _ref2)


{var mocks = _ref2.mocks,initRefs = _ref2.initRefs;
  _vue.default.prototype.mpHost = "app-plus";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;

      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属
  var parentVm = $children.find(function (childVm) {return childVm.$scope._$vueId === vuePid;});
  if (parentVm) {
    return parentVm;
  }
  // 反向递归查找
  for (var i = $children.length - 1; i >= 0; i--) {
    parentVm = findVmByVueId($children[i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      var components = mpInstance.selectAllComponents('.vue-ref');
      components.forEach(function (component) {
        var ref = component.dataset.ref;
        $refs[ref] = component.$vm || component;
      });
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref3 =



  event.detail || event.value,vuePid = _ref3.vuePid,vueOptions = _ref3.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

var hooks$1 = [
'onUniNViewMessage'];


function parseApp$1(vm) {
  var appOptions = parseApp(vm);

  initHooks(appOptions, hooks$1);

  return appOptions;
}

function createApp(vm) {
  App(parseApp$1(vm));
  return vm;
}

function parseBaseComponent(vueComponentOptions)


{var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage$$1 = _ref4.isPage,initRelation$$1 = _ref4.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var componentOptions = {
    options: {
      multipleSlots: true,
      addGlobalClass: true },

    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage$$1.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation$$1.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };



  if (isPage$$1) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function parseComponent$1(vueComponentOptions) {
  var componentOptions = parseComponent(vueComponentOptions);

  componentOptions.methods.$getAppWebview = function () {
    return plus.webview.getWebviewById("".concat(this.__wxWebviewId__));
  };
  return componentOptions;
}

var hooks$2 = [
'onShow',
'onHide',
'onUnload'];


hooks$2.push.apply(hooks$2, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref5)


{var isPage = _ref5.isPage,initRelation = _ref5.initRelation;
  var pageOptions = parseComponent$1(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });


  initHooks(pageOptions.methods, hooks$2);

  pageOptions.methods.onLoad = function (args) {
    this.$vm.$mp.query = args; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', args);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$3 = [
'onBackPress',
'onNavigationBarButtonTap',
'onNavigationBarSearchInputChanged',
'onNavigationBarSearchInputConfirmed',
'onNavigationBarSearchInputClicked'];


function parsePage$1(vuePageOptions) {
  var pageOptions = parsePage(vuePageOptions);

  initHooks(pageOptions.methods, hooks$3);

  return pageOptions;
}

function createPage(vuePageOptions) {
  {
    return Component(parsePage$1(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent$1(vueOptions));
  }
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (name === 'upx2px') {
        return upx2px;
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    } });

} else {
  uni.upx2px = upx2px;

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

{
  if (typeof global !== 'undefined') {
    global.UniEmitter = eventApi;
  }
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    {
      if(vm.$scope && vm.$scope.is){
        return vm.$scope.is
      }
    }
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Techinically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a speical value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack becaues all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu'){//百度 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(vm._getFormData || (vm.$parent && vm.$parent.__next_tick_pending)){
              return
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    vm.mpHost !== 'mp-toutiao' && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    vm.mpHost !== 'mp-toutiao' && initProvide(vm); // resolve provide after data/props
    vm.mpHost !== 'mp-toutiao' && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.10';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"VUE_APP_PLATFORM":"app-plus","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"VUE_APP_PLATFORM":"app-plus","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"VUE_APP_PLATFORM":"app-plus","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
    // 确保当前 vm 所有数据被同步
    var dataKeys = [].concat(
        Object.keys(vm._data || {}),
        Object.keys(vm._computedWatchers || {}));

    var ret = dataKeys.reduce(function(ret, key) {
        ret[key] = vm[key];
        return ret
    }, Object.create(null));
    //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
    Object.assign(ret, vm.$mp.data || {});
    if (
        Array.isArray(vm.$options.behaviors) &&
        vm.$options.behaviors.indexOf('uni://form-field') !== -1
    ) { //form-field
        ret['name'] = vm.name;
        ret['value'] = vm.value;
    }
    return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
    var this$1 = this;

    if (vnode === null) { //destroy
        return
    }
    if (this.mpType === 'page' || this.mpType === 'component') {
        var mpInstance = this.$scope;
        var data = cloneWithData(this);
        data.__webviewId__ = mpInstance.data.__webviewId__;
        var mpData = Object.create(null);
        Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
            mpData[key] = mpInstance.data[key];
        });
        var diffData = diff(data, mpData);
        if (Object.keys(diffData).length) {
            if (Object({"VUE_APP_PLATFORM":"app-plus","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
                console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
                    ']差量更新',
                    JSON.stringify(diffData));
            }
            this.__next_tick_pending = true;
            mpInstance.setData(diffData, function () {
                this$1.__next_tick_pending = false;
                flushCallbacks$1(this$1);
            });
        } else {
            flushCallbacks$1(this);
        }
    }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  vm.mpHost !== 'mp-toutiao' && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
    var parts = path.split('.');
    var key = parts[0];
    if (key.indexOf('__$n') === 0) { //number index
        key = parseInt(key.replace('__$n', ''));
    }
    if (parts.length === 1) {
        return obj[key]
    }
    return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

    var oldEmit = Vue.prototype.$emit;

    Vue.prototype.$emit = function(event) {
        if (this.$scope && event) {
            this.$scope['triggerEvent'](event, {
                __args__: toArray(arguments, 1)
            });
        }
        return oldEmit.apply(this, arguments)
    };
    
    Vue.prototype.$nextTick = function (fn) {
      return nextTick$1(this, fn)
    };

    MP_METHODS.forEach(function (method) {
        Vue.prototype[method] = function(args) {
            if (this.$scope) {
                return this.$scope[method](args)
            }
        };
    });

    Vue.prototype.__init_provide = initProvide;

    Vue.prototype.__init_injections = initInjections;

    Vue.prototype.__call_hook = function(hook, args) {
        var vm = this;
        // #7573 disable dep collection when invoking lifecycle hooks
        pushTarget();
        var handlers = vm.$options[hook];
        var info = hook + " hook";
        var ret;
        if (handlers) {
            for (var i = 0, j = handlers.length; i < j; i++) {
                ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
            }
        }
        if (vm._hasHookEvent) {
            vm.$emit('hook:' + hook);
        }
        popTarget();
        return ret
    };

    Vue.prototype.__set_model = function(target, key, value, modifiers) {
        if (Array.isArray(modifiers)) {
            if (modifiers.indexOf('trim') !== -1) {
                value = value.trim();
            }
            if (modifiers.indexOf('number') !== -1) {
                value = this._n(value);
            }
        }
        if(!target){
            target = this;
        }
        target[key] = value;
    };

    Vue.prototype.__set_sync = function(target, key, value) {
        if(!target){
            target = this;
        }
        target[key] = value;
    };

    Vue.prototype.__get_orig = function(item) {
        if (isPlainObject(item)) {
            return item['$orig'] || item
        }
        return item
    };

    Vue.prototype.__get_value = function(dataPath, target) {
        return getTarget(target || this, dataPath)
    };


    Vue.prototype.__get_class = function(dynamicClass, staticClass) {
        return renderClass(staticClass, dynamicClass)
    };

    Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
        if (!dynamicStyle && !staticStyle) {
            return ''
        }
        var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
        var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
        return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
    };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onError',
    //Page
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vuex/dist/vuex.esm.js":
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! exports provided: Store, install, mapState, mapMutations, mapGetters, mapActions, createNamespacedHelpers, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapState", function() { return mapState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMutations", function() { return mapMutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGetters", function() { return mapGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapActions", function() { return mapActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNamespacedHelpers", function() { return createNamespacedHelpers; });
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var applyMixin = function (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
};

var devtoolHook =
  typeof window !== 'undefined' &&
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */


/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  this._children = Object.create(null);
  this._rawModule = rawModule;
  var rawState = rawModule.state;
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors$1 = { namespaced: { configurable: true } };

prototypeAccessors$1.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors$1 );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if (true) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

function update (path, targetModule, newModule) {
  if (true) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (true) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (true) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "Store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  var state = options.state; if ( state === void 0 ) state = {};
  if (typeof state === 'function') {
    state = state() || {};
  }

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  if (Vue.config.devtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors = { state: { configurable: true } };

prototypeAccessors.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors.state.set = function (v) {
  if (true) {
    assert(false, "Use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });
  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
     true &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  this._actionSubscribers.forEach(function (sub) { return sub(action, this$1.state); });

  return entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload)
};

Store.prototype.subscribe = function subscribe (fn) {
  return genericSubscribe(fn, this._subscribers)
};

Store.prototype.subscribeAction = function subscribeAction (fn) {
  return genericSubscribe(fn, this._actionSubscribers)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if (true) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors );

function genericSubscribe (fn, subs) {
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    computed[key] = function () { return fn(store); };
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  var gettersProxy = {};

  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) { return }

    // extract local getter type
    var localType = type.slice(splitPos);

    // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.
    Object.defineProperty(gettersProxy, localType, {
      get: function () { return store.getters[type]; },
      enumerable: true
    });
  });

  return gettersProxy
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload, cb) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload, cb);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (true) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if (true) {
      assert(store._committing, "Do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.length
    ? path.reduce(function (state, key) { return state[key]; }, state)
    : state
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (true) {
    assert(typeof type === 'string', ("Expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if (true) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if ( true && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if ( true && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index_esm = {
  Store: Store,
  install: install,
  version: '3.0.1',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};


/* harmony default export */ __webpack_exports__["default"] = (index_esm);


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'lib/colorui/components/cu-custom';__wxRouteBegin = true;__wxAppCurrentFile__ = 'lib/colorui/components/cu-custom.js';

define('lib/colorui/components/cu-custom.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["lib/colorui/components/cu-custom"], {

  /***/"../../../../Aproject/github/watch-test/lib/colorui/components/cu-custom.vue":
  /*!**************************************************************************!*\
                                                                                        !*** D:/Aproject/github/watch-test/lib/colorui/components/cu-custom.vue ***!
                                                                                        \**************************************************************************/
  /*! no static exports found */
  /***/function AprojectGithubWatchTestLibColoruiComponentsCuCustomVue(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */var _cu_custom_vue_vue_type_template_id_d327bc3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./cu-custom.vue?vue&type=template&id=d327bc3e& */"../../../../Aproject/github/watch-test/lib/colorui/components/cu-custom.vue?vue&type=template&id=d327bc3e&");
    /* harmony import */var _cu_custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./cu-custom.vue?vue&type=script&lang=js& */"../../../../Aproject/github/watch-test/lib/colorui/components/cu-custom.vue?vue&type=script&lang=js&");
    /* harmony reexport (unknown) */for (var __WEBPACK_IMPORT_KEY__ in _cu_custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) {if (__WEBPACK_IMPORT_KEY__ !== 'default') (function (key) {__webpack_require__.d(__webpack_exports__, key, function () {return _cu_custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key];});})(__WEBPACK_IMPORT_KEY__);}
    /* harmony import */var _cu_custom_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./cu-custom.vue?vue&type=style&index=0&lang=less& */"../../../../Aproject/github/watch-test/lib/colorui/components/cu-custom.vue?vue&type=style&index=0&lang=less&");
    /* harmony import */var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */"./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






    /* normalize component */

    var component = Object(_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
    _cu_custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
    _cu_custom_vue_vue_type_template_id_d327bc3e___WEBPACK_IMPORTED_MODULE_0__["render"],
    _cu_custom_vue_vue_type_template_id_d327bc3e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
    false,
    null,
    null,
    null);



    /* hot reload */
    if (false) {var api;}
    component.options.__file = "Aproject/github/watch-test/lib/colorui/components/cu-custom.vue";
    /* harmony default export */__webpack_exports__["default"] = component.exports;

    /***/},

  /***/"../../../../Aproject/github/watch-test/lib/colorui/components/cu-custom.vue?vue&type=script&lang=js&":
  /*!***************************************************************************************************!*\
                                                                                                                 !*** D:/Aproject/github/watch-test/lib/colorui/components/cu-custom.vue?vue&type=script&lang=js& ***!
                                                                                                                 \***************************************************************************************************/
  /*! no static exports found */
  /***/function AprojectGithubWatchTestLibColoruiComponentsCuCustomVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cu_custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./cu-custom.vue?vue&type=script&lang=js& */"./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/lib/colorui/components/cu-custom.vue?vue&type=script&lang=js&");
    /* harmony import */var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cu_custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cu_custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
    /* harmony reexport (unknown) */for (var __WEBPACK_IMPORT_KEY__ in _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cu_custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) {if (__WEBPACK_IMPORT_KEY__ !== 'default') (function (key) {__webpack_require__.d(__webpack_exports__, key, function () {return _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cu_custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key];});})(__WEBPACK_IMPORT_KEY__);}
    /* harmony default export */__webpack_exports__["default"] = _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cu_custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a;

    /***/},

  /***/"../../../../Aproject/github/watch-test/lib/colorui/components/cu-custom.vue?vue&type=style&index=0&lang=less&":
  /*!************************************************************************************************************!*\
                                                                                                                          !*** D:/Aproject/github/watch-test/lib/colorui/components/cu-custom.vue?vue&type=style&index=0&lang=less& ***!
                                                                                                                          \************************************************************************************************************/
  /*! no static exports found */
  /***/function AprojectGithubWatchTestLibColoruiComponentsCuCustomVueVueTypeStyleIndex0LangLess(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cu_custom_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-1!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--10-oneOf-1-2!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-1-3!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./cu-custom.vue?vue&type=style&index=0&lang=less& */"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/lib/colorui/components/cu-custom.vue?vue&type=style&index=0&lang=less&");
    /* harmony import */var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cu_custom_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cu_custom_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
    /* harmony reexport (unknown) */for (var __WEBPACK_IMPORT_KEY__ in _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cu_custom_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__) {if (__WEBPACK_IMPORT_KEY__ !== 'default') (function (key) {__webpack_require__.d(__webpack_exports__, key, function () {return _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cu_custom_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__[key];});})(__WEBPACK_IMPORT_KEY__);}
    /* harmony default export */__webpack_exports__["default"] = _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cu_custom_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a;

    /***/},

  /***/"../../../../Aproject/github/watch-test/lib/colorui/components/cu-custom.vue?vue&type=template&id=d327bc3e&":
  /*!*********************************************************************************************************!*\
                                                                                                                       !*** D:/Aproject/github/watch-test/lib/colorui/components/cu-custom.vue?vue&type=template&id=d327bc3e& ***!
                                                                                                                       \*********************************************************************************************************/
  /*! exports provided: render, staticRenderFns */
  /***/function AprojectGithubWatchTestLibColoruiComponentsCuCustomVueVueTypeTemplateIdD327bc3e(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cu_custom_vue_vue_type_template_id_d327bc3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./cu-custom.vue?vue&type=template&id=d327bc3e& */"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/lib/colorui/components/cu-custom.vue?vue&type=template&id=d327bc3e&");
    /* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__, "render", function () {return _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cu_custom_vue_vue_type_template_id_d327bc3e___WEBPACK_IMPORTED_MODULE_0__["render"];});

    /* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {return _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cu_custom_vue_vue_type_template_id_d327bc3e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"];});



    /***/},

  /***/"./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/lib/colorui/components/cu-custom.vue?vue&type=script&lang=js&":
  /*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
                                                                                                                                                                                                                                                                                                                                                        !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!D:/Aproject/github/watch-test/lib/colorui/components/cu-custom.vue?vue&type=script&lang=js& ***!
                                                                                                                                                                                                                                                                                                                                                        \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
  /*! no static exports found */
  /***/function node_modulesBabelLoaderLibIndexJsNode_modulesDcloudioVueCliPluginUniPackagesWebpackPreprocessLoaderIndexJsNode_modulesDcloudioWebpackUniMpLoaderLibScriptJsNode_modulesVueLoaderLibIndexJsAprojectGithubWatchTestLibColoruiComponentsCuCustomVueVueTypeScriptLangJs(module, exports, __webpack_require__) {

    "use strict";
    /* WEBPACK VAR INJECTION */(function (uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      var _default =
      {
        data: function data() {
          return {
            StatusBar: this.StatusBar,
            CustomBar: this.CustomBar };

        },
        name: 'cu-custom',
        computed: {
          style: function style() {
            var StatusBar = this.StatusBar;
            var CustomBar = this.CustomBar;
            var bgImage = this.bgImage;
            var style = "height:".concat(CustomBar, "px;padding-top:").concat(StatusBar, "px;");
            if (this.bgImage) {
              style = "".concat(style, "background:").concat(bgImage, ";");
            }
            return style;
          } },

        props: {
          bgColor: {
            type: String,
            default: '' },

          isBack: {
            type: [Boolean, String],
            default: false },

          bgImage: {
            type: String,
            default: '' },

          isShadown: {
            type: [Boolean, String],
            default: true } },


        methods: {
          BackPage: function BackPage() {
            uni.navigateBack({
              delta: 1 });

          } } };exports.default = _default;
      /* WEBPACK VAR INJECTION */}).call(this, __webpack_require__( /*! ./node_modules/@dcloudio/uni-app-plus/dist/index.js */"./node_modules/@dcloudio/uni-app-plus/dist/index.js")["default"]);

    /***/},

  /***/"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/lib/colorui/components/cu-custom.vue?vue&type=style&index=0&lang=less&":
  /*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-1!./node_modules/css-loader??ref--10-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!D:/Aproject/github/watch-test/lib/colorui/components/cu-custom.vue?vue&type=style&index=0&lang=less& ***!
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
  /*! no static exports found */
  /***/function node_modulesMiniCssExtractPluginDistLoaderJsNode_modulesDcloudioVueCliPluginUniPackagesWebpackPreprocessLoaderIndexJsNode_modulesCssLoaderIndexJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesPostcssLoaderSrcIndexJsNode_modulesLessLoaderDistCjsJsNode_modulesDcloudioVueCliPluginUniPackagesWebpackPreprocessLoaderIndexJsNode_modulesVueLoaderLibIndexJsAprojectGithubWatchTestLibColoruiComponentsCuCustomVueVueTypeStyleIndex0LangLess(module, exports, __webpack_require__) {

    // extracted by mini-css-extract-plugin

    /***/},

  /***/"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/lib/colorui/components/cu-custom.vue?vue&type=template&id=d327bc3e&":
  /*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
                                                                                                                                                                                                                                                                                                                                                                                !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!D:/Aproject/github/watch-test/lib/colorui/components/cu-custom.vue?vue&type=template&id=d327bc3e& ***!
                                                                                                                                                                                                                                                                                                                                                                                \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
  /*! exports provided: render, staticRenderFns */
  /***/function node_modulesVueLoaderLibLoadersTemplateLoaderJsNode_modulesDcloudioVueCliPluginUniPackagesWebpackPreprocessLoaderIndexJsNode_modulesDcloudioWebpackUniMpLoaderLibTemplateJsNode_modulesVueLoaderLibIndexJsAprojectGithubWatchTestLibColoruiComponentsCuCustomVueVueTypeTemplateIdD327bc3e(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "render", function () {return render;});
    /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {return staticRenderFns;});
    var render = function render() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
    };
    var staticRenderFns = [];
    render._withStripped = true;



    /***/} }]);


;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
'lib/colorui/components/cu-custom-create-component',
{
  'lib/colorui/components/cu-custom-create-component': function libColoruiComponentsCuCustomCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('./node_modules/@dcloudio/uni-app-plus/dist/index.js')['createComponent'](__webpack_require__("../../../../Aproject/github/watch-test/lib/colorui/components/cu-custom.vue"));
  } },

[['lib/colorui/components/cu-custom-create-component']]]);
});
require('lib/colorui/components/cu-custom.js');
__wxRoute = 'lib/range-slider/range-slider';__wxRouteBegin = true;__wxAppCurrentFile__ = 'lib/range-slider/range-slider.js';

define('lib/range-slider/range-slider.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["lib/range-slider/range-slider"], {

  /***/"../../../../Aproject/github/watch-test/lib/range-slider/range-slider.vue":
  /*!***********************************************************************!*\
                                                                                     !*** D:/Aproject/github/watch-test/lib/range-slider/range-slider.vue ***!
                                                                                     \***********************************************************************/
  /*! no static exports found */
  /***/function AprojectGithubWatchTestLibRangeSliderRangeSliderVue(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */var _range_slider_vue_vue_type_template_id_793988ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./range-slider.vue?vue&type=template&id=793988ae& */"../../../../Aproject/github/watch-test/lib/range-slider/range-slider.vue?vue&type=template&id=793988ae&");
    /* harmony import */var _range_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./range-slider.vue?vue&type=script&lang=js& */"../../../../Aproject/github/watch-test/lib/range-slider/range-slider.vue?vue&type=script&lang=js&");
    /* harmony reexport (unknown) */for (var __WEBPACK_IMPORT_KEY__ in _range_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) {if (__WEBPACK_IMPORT_KEY__ !== 'default') (function (key) {__webpack_require__.d(__webpack_exports__, key, function () {return _range_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key];});})(__WEBPACK_IMPORT_KEY__);}
    /* harmony import */var _range_slider_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./range-slider.vue?vue&type=style&index=0&lang=css& */"../../../../Aproject/github/watch-test/lib/range-slider/range-slider.vue?vue&type=style&index=0&lang=css&");
    /* harmony import */var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */"./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






    /* normalize component */

    var component = Object(_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
    _range_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
    _range_slider_vue_vue_type_template_id_793988ae___WEBPACK_IMPORTED_MODULE_0__["render"],
    _range_slider_vue_vue_type_template_id_793988ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
    false,
    null,
    null,
    null);



    /* hot reload */
    if (false) {var api;}
    component.options.__file = "Aproject/github/watch-test/lib/range-slider/range-slider.vue";
    /* harmony default export */__webpack_exports__["default"] = component.exports;

    /***/},

  /***/"../../../../Aproject/github/watch-test/lib/range-slider/range-slider.vue?vue&type=script&lang=js&":
  /*!************************************************************************************************!*\
                                                                                                              !*** D:/Aproject/github/watch-test/lib/range-slider/range-slider.vue?vue&type=script&lang=js& ***!
                                                                                                              \************************************************************************************************/
  /*! no static exports found */
  /***/function AprojectGithubWatchTestLibRangeSliderRangeSliderVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_range_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./range-slider.vue?vue&type=script&lang=js& */"./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/lib/range-slider/range-slider.vue?vue&type=script&lang=js&");
    /* harmony import */var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_range_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_range_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
    /* harmony reexport (unknown) */for (var __WEBPACK_IMPORT_KEY__ in _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_range_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) {if (__WEBPACK_IMPORT_KEY__ !== 'default') (function (key) {__webpack_require__.d(__webpack_exports__, key, function () {return _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_range_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key];});})(__WEBPACK_IMPORT_KEY__);}
    /* harmony default export */__webpack_exports__["default"] = _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_range_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a;

    /***/},

  /***/"../../../../Aproject/github/watch-test/lib/range-slider/range-slider.vue?vue&type=style&index=0&lang=css&":
  /*!********************************************************************************************************!*\
                                                                                                                      !*** D:/Aproject/github/watch-test/lib/range-slider/range-slider.vue?vue&type=style&index=0&lang=css& ***!
                                                                                                                      \********************************************************************************************************/
  /*! no static exports found */
  /***/function AprojectGithubWatchTestLibRangeSliderRangeSliderVueVueTypeStyleIndex0LangCss(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_range_slider_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./range-slider.vue?vue&type=style&index=0&lang=css& */"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/lib/range-slider/range-slider.vue?vue&type=style&index=0&lang=css&");
    /* harmony import */var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_range_slider_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_range_slider_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
    /* harmony reexport (unknown) */for (var __WEBPACK_IMPORT_KEY__ in _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_range_slider_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) {if (__WEBPACK_IMPORT_KEY__ !== 'default') (function (key) {__webpack_require__.d(__webpack_exports__, key, function () {return _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_range_slider_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key];});})(__WEBPACK_IMPORT_KEY__);}
    /* harmony default export */__webpack_exports__["default"] = _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_range_slider_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a;

    /***/},

  /***/"../../../../Aproject/github/watch-test/lib/range-slider/range-slider.vue?vue&type=template&id=793988ae&":
  /*!******************************************************************************************************!*\
                                                                                                                    !*** D:/Aproject/github/watch-test/lib/range-slider/range-slider.vue?vue&type=template&id=793988ae& ***!
                                                                                                                    \******************************************************************************************************/
  /*! exports provided: render, staticRenderFns */
  /***/function AprojectGithubWatchTestLibRangeSliderRangeSliderVueVueTypeTemplateId793988ae(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_range_slider_vue_vue_type_template_id_793988ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./range-slider.vue?vue&type=template&id=793988ae& */"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/lib/range-slider/range-slider.vue?vue&type=template&id=793988ae&");
    /* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__, "render", function () {return _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_range_slider_vue_vue_type_template_id_793988ae___WEBPACK_IMPORTED_MODULE_0__["render"];});

    /* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {return _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_range_slider_vue_vue_type_template_id_793988ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"];});



    /***/},

  /***/"./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/lib/range-slider/range-slider.vue?vue&type=script&lang=js&":
  /*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
                                                                                                                                                                                                                                                                                                                                                     !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!D:/Aproject/github/watch-test/lib/range-slider/range-slider.vue?vue&type=script&lang=js& ***!
                                                                                                                                                                                                                                                                                                                                                     \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
  /*! no static exports found */
  /***/function node_modulesBabelLoaderLibIndexJsNode_modulesDcloudioVueCliPluginUniPackagesWebpackPreprocessLoaderIndexJsNode_modulesDcloudioWebpackUniMpLoaderLibScriptJsNode_modulesVueLoaderLibIndexJsAprojectGithubWatchTestLibRangeSliderRangeSliderVueVueTypeScriptLangJs(module, exports, __webpack_require__) {

    "use strict";
    /* WEBPACK VAR INJECTION */(function (uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //

      /**
       * range-slider v1.0.6
       */
      var _windowWidth = uni.getSystemInfoSync().windowWidth;var _default2 =

      {
        data: function data() {
          return {






            MAX_LENGTH: 700,
            maxBlockLeft: 350,


            minBlockLeft: 0,
            progressBarLeft: 0,
            progressBarWidth: 350 };

        },
        components: {},
        props: {
          //组件宽度
          width: {
            type: Number,
            default: 750 },

          //组件高度
          height: {
            type: Number,
            default: 100 },

          //滑块大小
          blockSize: {
            type: Number,
            default: 50 },

          //区间进度条高度
          barHeight: {
            type: Number,
            default: 5 },

          //背景条颜色
          backgroundColor: {
            type: String,
            default: '#e9e9e9' },

          //已选择的颜色
          activeColor: {
            type: String,
            default: '#1aad19' },

          //最小值
          min: {
            type: Number,
            default: 0 },

          //最大值
          max: {
            type: Number,
            default: 100 },

          //设置初始值
          values: {
            type: Array,
            default: function _default() {
              return [0, 100];
            } },

          //步长值
          step: {
            type: Number,
            default: 1 } },


        created: function created() {
          //使用自定义组件编译模式时，支持生命周期为：created
          this._refresh();
        },
        onLoad: function onLoad(option) {
          //不使用自定义组件编译模式时，支持生命周期为：onload
          this._refresh();
        },
        onUnload: function onUnload() {},
        watch: {
          //组件宽度
          width: function width(newVal, oldVal, changedPath) {
            var that = this;
            if (newVal != that.width) {
              this._refresh();
            }
          },
          //滑块大小
          blockSize: function blockSize(newVal, oldVal, changedPath) {
            var that = this;
            if (newVal != that.blockSize) {
              this._refresh();
            }
          },
          //最小值
          min: function min(newVal, oldVal, changedPath) {
            var that = this;
            if (newVal != that.min) {
              that._refresh();
            }
          },
          //最大值
          max: function max(newVal, oldVal, changedPath) {
            var that = this;
            if (newVal != that.max) {
              that._refresh();
            }
          },
          //设置初始值
          values: function values(newVal, oldVal, changedPath) {
            var that = this;
            var values = that.values;
            if (that._isValuesValid(newVal) && that._isValuesValid(values)) {
              if (values[0] != oldVal[0] || values[1] != oldVal[1]) that._refresh();
            }
          } },

        methods: {
          //补0
          _pad: function _pad(num, n) {
            return Array(n - ('' + num).length + 1).join(0) + num;
          },
          _pxToRpx: function _pxToRpx(px) {
            return 750 * px / _windowWidth;
          },
          _onBlockTouchStart: function _onBlockTouchStart(e) {
            var tag = e.target.dataset.tag;
            if (tag == 'minBlock' || tag == 'maxBlock') {
              //兼容h5平台及某版本微信
              if (e.hasOwnProperty('changedTouches')) {
                this._blockDownX = e.changedTouches[0].pageX;
              } else {
                this._blockDownX = e.pageX;
              }





              this._blockLeft = e.target.dataset.left;


              this._curBlock = e.target.dataset.tag;
            }
          },
          _onBlockTouchMove: function _onBlockTouchMove(e) {
            var tag = e.target.dataset.tag;
            if (tag == 'minBlock' || tag == 'maxBlock') {
              var that = this;
              var values = that._calculateValues(e);
              that._refreshProgressBar(values[2], values[3]);
              that._refreshBlock(values[2], values[3]);
              //拖动时也触发事件
              var eventDetail = {
                minValue: this.formatNumber(values[0], this.step),
                maxValue: this.formatNumber(values[1], this.step),
                fromUser: true,
                originalValue: {
                  minValue: values[0],
                  maxValue: values[1] } };


              var eventOption = {};
              that.$emit('rangechange', eventDetail, eventOption);
            }
          },
          _onBlockTouchEnd: function _onBlockTouchEnd(e) {
            var tag = e.target.dataset.tag;
            if (tag == 'minBlock' || tag == 'maxBlock') {
              var that = this;
              var values = that._calculateValues(e.mp.changedTouches[0]);
              that._refreshProgressBar(values[2], values[3]);
              that._refreshBlock(values[2], values[3]);
              var eventDetail = {
                minValue: this.formatNumber(values[0], this.step),
                maxValue: this.formatNumber(values[1], this.step),
                fromUser: true,
                originalValue: {
                  minValue: values[0],
                  maxValue: values[1] } };


              var eventOption = {};
              that.$emit('rangechange', eventDetail, eventOption);
            }
          },
          _isValuesValid: function _isValuesValid(values) {
            return values != null && values != undefined && values.length == 2;
          },
          /**
                 * 根据手势计算相关数据
                 */
          _calculateValues: function _calculateValues(e) {
            var pageX = e.pageX;
            //兼容h5平台
            if (e.hasOwnProperty('changedTouches')) {
              pageX = e.changedTouches[0].pageX;
            }

            var that = this;
            var moveLength = pageX - that._blockDownX;
            var left = that._blockLeft + that._pxToRpx(moveLength);
            left = Math.max(0, left);
            left = Math.min(left, that.MAX_LENGTH);
            var minBlockLeft = that.minBlockLeft;
            var maxBlockLeft = that.maxBlockLeft;
            if (that._curBlock == 'minBlock') {
              minBlockLeft = left;
            } else {
              maxBlockLeft = left;
            }
            var range = that.max - that.min;
            var minLeft = Math.min(minBlockLeft, maxBlockLeft);
            var maxLeft = Math.max(minBlockLeft, maxBlockLeft);
            var minValue = minLeft / that.MAX_LENGTH * range + that.min;
            var maxValue = maxLeft / that.MAX_LENGTH * range + that.min;
            return [minValue, maxValue, minLeft, maxLeft];
          },
          /**
                 * 计算滑块坐标
                 */
          _calculateBlockLeft: function _calculateBlockLeft(minValue, maxValue) {
            var that = this;
            var blockSize = that.blockSize;
            var range = that.max - that.min;
            var minLeft = (minValue - that.min) / range * that.MAX_LENGTH;
            var maxLeft = (maxValue - that.min) / range * that.MAX_LENGTH;
            return [minLeft, maxLeft];
          },
          /**
                 * 刷新进度条视图
                 */
          _refreshProgressBar: function _refreshProgressBar(minBlockLeft, maxBlockLeft) {
            var that = this;
            var blockSize = that.blockSize;
            that.progressBarLeft = minBlockLeft + blockSize / 2;
            that.progressBarWidth = Math.abs(maxBlockLeft - minBlockLeft);
          },
          /**
                 * 刷新滑块视图
                 */
          _refreshBlock: function _refreshBlock(minBlockLeft, maxBlockLeft) {
            var that = this;
            that.minBlockLeft = minBlockLeft;
            that.maxBlockLeft = maxBlockLeft;
          },
          /**
                 * 刷新整个视图
                 */
          _refresh: function _refresh() {
            //console.log('refresh');
            var that = this;
            var MAX_LENGTH = that.width - that.blockSize;
            that.MAX_LENGTH = MAX_LENGTH;
            that.maxBlockLeft = MAX_LENGTH;
            that.progressBarWidth = MAX_LENGTH;
            var values = that.values;
            if (that._isValuesValid(values)) {
              values[0] = Math.max(that.min, values[0]);
              values[0] = Math.min(values[0], that.max);
              values[1] = Math.max(that.min, values[1]);
              values[1] = Math.min(values[1], that.max);
              var leftValues = that._calculateBlockLeft(values[0], values[1]);
              that._refreshProgressBar(leftValues[0], leftValues[1]);
              that._refreshBlock(leftValues[0], leftValues[1]);
            }
          },
          formatNumber: function formatNumber(num, step) {
            //格式化数字，保留几位小数
            var stepStr = '' + step;
            var index = stepStr.indexOf('.');
            var len = index > -1 ? stepStr.length - index - 1 : 0;
            var offestNum = parseInt(1 + Array(('' + len).length + 1).join(0)) * 0.1;
            var tmpNum = num * offestNum;
            return (parseInt(tmpNum / step) * step / offestNum).toFixed(len);
          } } };exports.default = _default2;
      /* WEBPACK VAR INJECTION */}).call(this, __webpack_require__( /*! ./node_modules/@dcloudio/uni-app-plus/dist/index.js */"./node_modules/@dcloudio/uni-app-plus/dist/index.js")["default"]);

    /***/},

  /***/"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/lib/range-slider/range-slider.vue?vue&type=style&index=0&lang=css&":
  /*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
                                                                                                                                                                                                                                                                                                                                                                                                                                                       !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!D:/Aproject/github/watch-test/lib/range-slider/range-slider.vue?vue&type=style&index=0&lang=css& ***!
                                                                                                                                                                                                                                                                                                                                                                                                                                                       \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
  /*! no static exports found */
  /***/function node_modulesMiniCssExtractPluginDistLoaderJsNode_modulesDcloudioVueCliPluginUniPackagesWebpackPreprocessLoaderIndexJsNode_modulesCssLoaderIndexJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesPostcssLoaderSrcIndexJsNode_modulesVueLoaderLibIndexJsAprojectGithubWatchTestLibRangeSliderRangeSliderVueVueTypeStyleIndex0LangCss(module, exports, __webpack_require__) {

    // extracted by mini-css-extract-plugin

    /***/},

  /***/"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/lib/range-slider/range-slider.vue?vue&type=template&id=793988ae&":
  /*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
                                                                                                                                                                                                                                                                                                                                                                             !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!D:/Aproject/github/watch-test/lib/range-slider/range-slider.vue?vue&type=template&id=793988ae& ***!
                                                                                                                                                                                                                                                                                                                                                                             \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
  /*! exports provided: render, staticRenderFns */
  /***/function node_modulesVueLoaderLibLoadersTemplateLoaderJsNode_modulesDcloudioVueCliPluginUniPackagesWebpackPreprocessLoaderIndexJsNode_modulesDcloudioWebpackUniMpLoaderLibTemplateJsNode_modulesVueLoaderLibIndexJsAprojectGithubWatchTestLibRangeSliderRangeSliderVueVueTypeTemplateId793988ae(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "render", function () {return render;});
    /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {return staticRenderFns;});
    var render = function render() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
    };
    var staticRenderFns = [];
    render._withStripped = true;



    /***/} }]);


;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
'lib/range-slider/range-slider-create-component',
{
  'lib/range-slider/range-slider-create-component': function libRangeSliderRangeSliderCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('./node_modules/@dcloudio/uni-app-plus/dist/index.js')['createComponent'](__webpack_require__("../../../../Aproject/github/watch-test/lib/range-slider/range-slider.vue"));
  } },

[['lib/range-slider/range-slider-create-component']]]);
});
require('lib/range-slider/range-slider.js');
__wxRoute = 'pages/ble/ble';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/ble/ble.js';

define('pages/ble/ble.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/ble/ble"], {

  /***/"../../../../Aproject/github/watch-test/pages/ble/ble.vue":
  /*!*******************************************************!*\
                                                                     !*** D:/Aproject/github/watch-test/pages/ble/ble.vue ***!
                                                                     \*******************************************************/
  /*! no static exports found */
  /***/function AprojectGithubWatchTestPagesBleBleVue(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */var _ble_vue_vue_type_template_id_3dd92140_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./ble.vue?vue&type=template&id=3dd92140&scoped=true& */"../../../../Aproject/github/watch-test/pages/ble/ble.vue?vue&type=template&id=3dd92140&scoped=true&");
    /* harmony import */var _ble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./ble.vue?vue&type=script&lang=js& */"../../../../Aproject/github/watch-test/pages/ble/ble.vue?vue&type=script&lang=js&");
    /* harmony reexport (unknown) */for (var __WEBPACK_IMPORT_KEY__ in _ble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) {if (__WEBPACK_IMPORT_KEY__ !== 'default') (function (key) {__webpack_require__.d(__webpack_exports__, key, function () {return _ble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key];});})(__WEBPACK_IMPORT_KEY__);}
    /* harmony import */var _ble_vue_vue_type_style_index_0_id_3dd92140_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./ble.vue?vue&type=style&index=0&id=3dd92140&scoped=true&lang=css& */"../../../../Aproject/github/watch-test/pages/ble/ble.vue?vue&type=style&index=0&id=3dd92140&scoped=true&lang=css&");
    /* harmony import */var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */"./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






    /* normalize component */

    var component = Object(_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
    _ble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
    _ble_vue_vue_type_template_id_3dd92140_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
    _ble_vue_vue_type_template_id_3dd92140_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
    false,
    null,
    "3dd92140",
    null);



    /* hot reload */
    if (false) {var api;}
    component.options.__file = "Aproject/github/watch-test/pages/ble/ble.vue";
    /* harmony default export */__webpack_exports__["default"] = component.exports;

    /***/},

  /***/"../../../../Aproject/github/watch-test/pages/ble/ble.vue?vue&type=script&lang=js&":
  /*!********************************************************************************!*\
                                                                                              !*** D:/Aproject/github/watch-test/pages/ble/ble.vue?vue&type=script&lang=js& ***!
                                                                                              \********************************************************************************/
  /*! no static exports found */
  /***/function AprojectGithubWatchTestPagesBleBleVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_ble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./ble.vue?vue&type=script&lang=js& */"./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/ble/ble.vue?vue&type=script&lang=js&");
    /* harmony import */var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_ble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_ble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
    /* harmony reexport (unknown) */for (var __WEBPACK_IMPORT_KEY__ in _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_ble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) {if (__WEBPACK_IMPORT_KEY__ !== 'default') (function (key) {__webpack_require__.d(__webpack_exports__, key, function () {return _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_ble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key];});})(__WEBPACK_IMPORT_KEY__);}
    /* harmony default export */__webpack_exports__["default"] = _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_ble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a;

    /***/},

  /***/"../../../../Aproject/github/watch-test/pages/ble/ble.vue?vue&type=style&index=0&id=3dd92140&scoped=true&lang=css&":
  /*!****************************************************************************************************************!*\
                                                                                                                              !*** D:/Aproject/github/watch-test/pages/ble/ble.vue?vue&type=style&index=0&id=3dd92140&scoped=true&lang=css& ***!
                                                                                                                              \****************************************************************************************************************/
  /*! no static exports found */
  /***/function AprojectGithubWatchTestPagesBleBleVueVueTypeStyleIndex0Id3dd92140ScopedTrueLangCss(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_ble_vue_vue_type_style_index_0_id_3dd92140_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./ble.vue?vue&type=style&index=0&id=3dd92140&scoped=true&lang=css& */"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/ble/ble.vue?vue&type=style&index=0&id=3dd92140&scoped=true&lang=css&");
    /* harmony import */var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_ble_vue_vue_type_style_index_0_id_3dd92140_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_ble_vue_vue_type_style_index_0_id_3dd92140_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
    /* harmony reexport (unknown) */for (var __WEBPACK_IMPORT_KEY__ in _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_ble_vue_vue_type_style_index_0_id_3dd92140_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) {if (__WEBPACK_IMPORT_KEY__ !== 'default') (function (key) {__webpack_require__.d(__webpack_exports__, key, function () {return _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_ble_vue_vue_type_style_index_0_id_3dd92140_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key];});})(__WEBPACK_IMPORT_KEY__);}
    /* harmony default export */__webpack_exports__["default"] = _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_ble_vue_vue_type_style_index_0_id_3dd92140_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a;

    /***/},

  /***/"../../../../Aproject/github/watch-test/pages/ble/ble.vue?vue&type=template&id=3dd92140&scoped=true&":
  /*!**************************************************************************************************!*\
                                                                                                                !*** D:/Aproject/github/watch-test/pages/ble/ble.vue?vue&type=template&id=3dd92140&scoped=true& ***!
                                                                                                                \**************************************************************************************************/
  /*! exports provided: render, staticRenderFns */
  /***/function AprojectGithubWatchTestPagesBleBleVueVueTypeTemplateId3dd92140ScopedTrue(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_ble_vue_vue_type_template_id_3dd92140_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./ble.vue?vue&type=template&id=3dd92140&scoped=true& */"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/ble/ble.vue?vue&type=template&id=3dd92140&scoped=true&");
    /* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__, "render", function () {return _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_ble_vue_vue_type_template_id_3dd92140_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"];});

    /* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {return _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_ble_vue_vue_type_template_id_3dd92140_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"];});



    /***/},

  /***/"./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/ble/ble.vue?vue&type=script&lang=js&":
  /*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
                                                                                                                                                                                                                                                                                                                                     !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!D:/Aproject/github/watch-test/pages/ble/ble.vue?vue&type=script&lang=js& ***!
                                                                                                                                                                                                                                                                                                                                     \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
  /*! no static exports found */
  /***/function node_modulesBabelLoaderLibIndexJsNode_modulesDcloudioVueCliPluginUniPackagesWebpackPreprocessLoaderIndexJsNode_modulesDcloudioWebpackUniMpLoaderLibScriptJsNode_modulesVueLoaderLibIndexJsAprojectGithubWatchTestPagesBleBleVueVueTypeScriptLangJs(module, exports, __webpack_require__) {

    "use strict";
    /* WEBPACK VAR INJECTION */(function (uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;













































      var _login = __webpack_require__( /*! ../../service/api/login.js */"../../../../Aproject/github/watch-test/service/api/login.js"); //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //登陆api
      var _default = { data: function data() {return { bleData: [], //蓝牙名字列表
            bleIndex: [], //蓝牙查重
            modalName: "", //提示窗口 默认弹出蓝牙
            available: false, //蓝牙是否可用
            discovering: false //蓝牙是否已开始搜索
          };}, mounted: function mounted() {var _this = this;(0, _login.getisLogin)(); //是否登陆
          _this.initBle(); //初始化蓝牙
          setInterval(function () {setTimeout(function () {if (!_this.available) {_this.initBle(); //初始化蓝牙
              }}, 0);}, 2000);}, methods: { hideModal: function hideModal() {//隐藏弹出
            this.modalName = "";}, // ArrayBuffer转16进度字符串示例
          ab2hex: function ab2hex(buffer) {var hexArr = Array.prototype.map.call(new Uint8Array(buffer), function (bit) {return ('00' + bit.toString(16)).slice(-2);});return hexArr.join('');}, getBleState: function getBleState() {//判断蓝牙是否在启用或者搜索 蓝牙状态
            var _this = this;uni.onBluetoothAdapterStateChange(function (res) {_this.available = res.available;_this.discovering = res.discovering;console.log('蓝牙是否可用：' + res.available, " at pages\\ble\\ble.vue:96");console.log('蓝牙是否搜索：' + res.discovering, " at pages\\ble\\ble.vue:97");if (!_this.available) {_this.modalName = "isOpenBle";} else {_this.modalName = "";}});
          },
          initBle: function initBle() {
            //初始化蓝牙
            var _this = this;
            var bleCount = 1; //新蓝牙数量

            uni.openBluetoothAdapter({
              success: function success(res) {

                console.log(res, " at pages\\ble\\ble.vue:114");
                if (res.errMsg == "openBluetoothAdapter:ok") {
                  console.log("************************初始化蓝牙成功************************", " at pages\\ble\\ble.vue:116");
                  //蓝牙状态
                  _this.getBleState();
                  //搜寻蓝牙
                  uni.startBluetoothDevicesDiscovery({
                    services: [],
                    success: function success(res) {
                      console.log("************************开始搜寻旧蓝牙************************", " at pages\\ble\\ble.vue:123");
                      //搜寻新旧蓝牙
                      uni.getBluetoothDevices({
                        success: function success(res) {
                          console.log(res, " at pages\\ble\\ble.vue:127");
                          if (res.devices[0]) {
                            console.log(_this.ab2hex(res.devices[0].advertisData), " at pages\\ble\\ble.vue:129");
                          }
                        } });


                      console.log("************************开始搜寻新蓝牙************************", " at pages\\ble\\ble.vue:134");
                      //搜寻新蓝牙
                      uni.onBluetoothDeviceFound(function (devices) {

                        console.log("************************新蓝牙 " + bleCount + "************************", " at pages\\ble\\ble.vue:138");
                        bleCount++;
                        var bles = devices.devices[0]; //蓝牙信息
                        if (_this.bleIndex.indexOf(bles.deviceId) == -1) {
                          if (bles.name == "") {
                            _this.bleData.push({ "name": bles.deviceId, "id": bles.deviceId, "tag": false });
                            _this.bleIndex.push(bles.deviceId);

                          } else {
                            _this.bleData.push({ "name": bles.name, "id": bles.deviceId, "tag": true });
                            _this.bleIndex.push(bles.deviceId);
                          }
                        }

                      }); //搜寻新蓝牙

                    } //搜寻蓝牙 success
                  }); //搜寻蓝牙
                } //初始化蓝牙 ok
              }, //初始化蓝牙 success
              fail: function fail(re) {
                //初始化蓝牙失败
                //console.log(re);
                if (re.errCode = "10001") {
                  _this.modalName = "isOpenBle";
                }
              } //初始化蓝牙 fail
            });
            //初始化蓝牙
          } } };exports.default = _default;
      /* WEBPACK VAR INJECTION */}).call(this, __webpack_require__( /*! ./node_modules/@dcloudio/uni-app-plus/dist/index.js */"./node_modules/@dcloudio/uni-app-plus/dist/index.js")["default"]);

    /***/},

  /***/"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/ble/ble.vue?vue&type=style&index=0&id=3dd92140&scoped=true&lang=css&":
  /*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
                                                                                                                                                                                                                                                                                                                                                                                                                                                               !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!D:/Aproject/github/watch-test/pages/ble/ble.vue?vue&type=style&index=0&id=3dd92140&scoped=true&lang=css& ***!
                                                                                                                                                                                                                                                                                                                                                                                                                                                               \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
  /*! no static exports found */
  /***/function node_modulesMiniCssExtractPluginDistLoaderJsNode_modulesDcloudioVueCliPluginUniPackagesWebpackPreprocessLoaderIndexJsNode_modulesCssLoaderIndexJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesPostcssLoaderSrcIndexJsNode_modulesVueLoaderLibIndexJsAprojectGithubWatchTestPagesBleBleVueVueTypeStyleIndex0Id3dd92140ScopedTrueLangCss(module, exports, __webpack_require__) {

    // extracted by mini-css-extract-plugin

    /***/},

  /***/"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/ble/ble.vue?vue&type=template&id=3dd92140&scoped=true&":
  /*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
                                                                                                                                                                                                                                                                                                                                                                         !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!D:/Aproject/github/watch-test/pages/ble/ble.vue?vue&type=template&id=3dd92140&scoped=true& ***!
                                                                                                                                                                                                                                                                                                                                                                         \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
  /*! exports provided: render, staticRenderFns */
  /***/function node_modulesVueLoaderLibLoadersTemplateLoaderJsNode_modulesDcloudioVueCliPluginUniPackagesWebpackPreprocessLoaderIndexJsNode_modulesDcloudioWebpackUniMpLoaderLibTemplateJsNode_modulesVueLoaderLibIndexJsAprojectGithubWatchTestPagesBleBleVueVueTypeTemplateId3dd92140ScopedTrue(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "render", function () {return render;});
    /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {return staticRenderFns;});
    var render = function render() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
    };
    var staticRenderFns = [];
    render._withStripped = true;



    /***/} }]);


;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
'pages/ble/ble-create-component',
{
  'pages/ble/ble-create-component': function pagesBleBleCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('./node_modules/@dcloudio/uni-app-plus/dist/index.js')['createComponent'](__webpack_require__("../../../../Aproject/github/watch-test/pages/ble/ble.vue"));
  } },

[['pages/ble/ble-create-component']]]);
});
require('pages/ble/ble.js');
__wxRoute = 'pages/goal/goal';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/goal/goal.js';

define('pages/goal/goal.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/goal/goal"], {

  /***/"../../../../Aproject/github/watch-test/pages/goal/goal.vue":
  /*!*********************************************************!*\
                                                                       !*** D:/Aproject/github/watch-test/pages/goal/goal.vue ***!
                                                                       \*********************************************************/
  /*! no static exports found */
  /***/function AprojectGithubWatchTestPagesGoalGoalVue(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */var _goal_vue_vue_type_template_id_b810ba30_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./goal.vue?vue&type=template&id=b810ba30&scoped=true& */"../../../../Aproject/github/watch-test/pages/goal/goal.vue?vue&type=template&id=b810ba30&scoped=true&");
    /* harmony import */var _goal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./goal.vue?vue&type=script&lang=js& */"../../../../Aproject/github/watch-test/pages/goal/goal.vue?vue&type=script&lang=js&");
    /* harmony reexport (unknown) */for (var __WEBPACK_IMPORT_KEY__ in _goal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) {if (__WEBPACK_IMPORT_KEY__ !== 'default') (function (key) {__webpack_require__.d(__webpack_exports__, key, function () {return _goal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key];});})(__WEBPACK_IMPORT_KEY__);}
    /* harmony import */var _goal_vue_vue_type_style_index_0_id_b810ba30_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./goal.vue?vue&type=style&index=0&id=b810ba30&lang=less&scoped=true& */"../../../../Aproject/github/watch-test/pages/goal/goal.vue?vue&type=style&index=0&id=b810ba30&lang=less&scoped=true&");
    /* harmony import */var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */"./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






    /* normalize component */

    var component = Object(_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
    _goal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
    _goal_vue_vue_type_template_id_b810ba30_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
    _goal_vue_vue_type_template_id_b810ba30_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
    false,
    null,
    "b810ba30",
    null);



    /* hot reload */
    if (false) {var api;}
    component.options.__file = "Aproject/github/watch-test/pages/goal/goal.vue";
    /* harmony default export */__webpack_exports__["default"] = component.exports;

    /***/},

  /***/"../../../../Aproject/github/watch-test/pages/goal/goal.vue?vue&type=script&lang=js&":
  /*!**********************************************************************************!*\
                                                                                                !*** D:/Aproject/github/watch-test/pages/goal/goal.vue?vue&type=script&lang=js& ***!
                                                                                                \**********************************************************************************/
  /*! no static exports found */
  /***/function AprojectGithubWatchTestPagesGoalGoalVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./goal.vue?vue&type=script&lang=js& */"./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/goal/goal.vue?vue&type=script&lang=js&");
    /* harmony import */var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
    /* harmony reexport (unknown) */for (var __WEBPACK_IMPORT_KEY__ in _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) {if (__WEBPACK_IMPORT_KEY__ !== 'default') (function (key) {__webpack_require__.d(__webpack_exports__, key, function () {return _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key];});})(__WEBPACK_IMPORT_KEY__);}
    /* harmony default export */__webpack_exports__["default"] = _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a;

    /***/},

  /***/"../../../../Aproject/github/watch-test/pages/goal/goal.vue?vue&type=style&index=0&id=b810ba30&lang=less&scoped=true&":
  /*!*******************************************************************************************************************!*\
                                                                                                                                 !*** D:/Aproject/github/watch-test/pages/goal/goal.vue?vue&type=style&index=0&id=b810ba30&lang=less&scoped=true& ***!
                                                                                                                                 \*******************************************************************************************************************/
  /*! no static exports found */
  /***/function AprojectGithubWatchTestPagesGoalGoalVueVueTypeStyleIndex0IdB810ba30LangLessScopedTrue(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goal_vue_vue_type_style_index_0_id_b810ba30_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-1!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--10-oneOf-1-2!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-1-3!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./goal.vue?vue&type=style&index=0&id=b810ba30&lang=less&scoped=true& */"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/goal/goal.vue?vue&type=style&index=0&id=b810ba30&lang=less&scoped=true&");
    /* harmony import */var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goal_vue_vue_type_style_index_0_id_b810ba30_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goal_vue_vue_type_style_index_0_id_b810ba30_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
    /* harmony reexport (unknown) */for (var __WEBPACK_IMPORT_KEY__ in _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goal_vue_vue_type_style_index_0_id_b810ba30_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) {if (__WEBPACK_IMPORT_KEY__ !== 'default') (function (key) {__webpack_require__.d(__webpack_exports__, key, function () {return _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goal_vue_vue_type_style_index_0_id_b810ba30_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key];});})(__WEBPACK_IMPORT_KEY__);}
    /* harmony default export */__webpack_exports__["default"] = _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goal_vue_vue_type_style_index_0_id_b810ba30_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a;

    /***/},

  /***/"../../../../Aproject/github/watch-test/pages/goal/goal.vue?vue&type=template&id=b810ba30&scoped=true&":
  /*!****************************************************************************************************!*\
                                                                                                                  !*** D:/Aproject/github/watch-test/pages/goal/goal.vue?vue&type=template&id=b810ba30&scoped=true& ***!
                                                                                                                  \****************************************************************************************************/
  /*! exports provided: render, staticRenderFns */
  /***/function AprojectGithubWatchTestPagesGoalGoalVueVueTypeTemplateIdB810ba30ScopedTrue(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goal_vue_vue_type_template_id_b810ba30_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./goal.vue?vue&type=template&id=b810ba30&scoped=true& */"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/goal/goal.vue?vue&type=template&id=b810ba30&scoped=true&");
    /* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__, "render", function () {return _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goal_vue_vue_type_template_id_b810ba30_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"];});

    /* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {return _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goal_vue_vue_type_template_id_b810ba30_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"];});



    /***/},

  /***/"./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/goal/goal.vue?vue&type=script&lang=js&":
  /*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
                                                                                                                                                                                                                                                                                                                                       !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!D:/Aproject/github/watch-test/pages/goal/goal.vue?vue&type=script&lang=js& ***!
                                                                                                                                                                                                                                                                                                                                       \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
  /*! no static exports found */
  /***/function node_modulesBabelLoaderLibIndexJsNode_modulesDcloudioVueCliPluginUniPackagesWebpackPreprocessLoaderIndexJsNode_modulesDcloudioWebpackUniMpLoaderLibScriptJsNode_modulesVueLoaderLibIndexJsAprojectGithubWatchTestPagesGoalGoalVueVueTypeScriptLangJs(module, exports, __webpack_require__) {

    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

































































































    var _login = __webpack_require__( /*! ../../service/api/login.js */"../../../../Aproject/github/watch-test/service/api/login.js");var RangeSlider = function RangeSlider() {return __webpack_require__.e( /*! import() | lib/range-slider/range-slider */"lib/range-slider/range-slider").then(__webpack_require__.bind(null, /*! ../../lib/range-slider/range-slider.vue */"../../../../Aproject/github/watch-test/lib/range-slider/range-slider.vue"));};

    //登陆api
    var _default = {
      data: function data() {
        return {
          // rangeValues: [2, 5], //当前区间值
          // slideWidth: 350, //宽度
          // slideHeight: 80,  //高度
          // slideBlockSize: 56, //圆形按钮大小
          // slideMin: 0,  //slider最小值
          // slideMax: 12,  //slider最大值

          backgroundColor: 'rgba(35,35,35,.8)', //条颜色
          slideMin: 0, //最小值
          slideMax: 30000, //最大运动
          rangeValues: [0, 10000], //[0, 10] 运动默认

          slideMax2: 200, //最大体重
          rangeValues2: [0, 50.5], //[0, 10] 体重默认

          slideWidth: 676, //宽
          slideHeight: 100, //高
          slideBlockSize: 64, //圆形按钮大小
          barheight: 20 };




      },
      components: {
        RangeSlider: RangeSlider },

      mounted: function mounted() {
        (0, _login.getisLogin)(); //是否登陆
      },
      methods: {
        pad: function pad(num, n) {
          return Array(n - ('' + num).length + 1).join(0) + num;
        },
        onRangeChange: function onRangeChange(e) {
          //赋值运动
          // this.rangeValues = [e.minValue, e.maxValue];
          this.rangeValues = [0, e.maxValue];
          //console.log(e);
        },
        setWalk: function setWalk() {
          //运动建议值
          this.rangeValues = [0, 10000];
        },
        onRangeChange2: function onRangeChange2(e) {
          //赋值体重
          this.rangeValues2 = [0, e.maxValue];
        },
        setWeight: function setWeight() {
          //体重建议值
          this.rangeValues2 = [0, 55];
        } } };exports.default = _default;

    /***/},

  /***/"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/goal/goal.vue?vue&type=style&index=0&id=b810ba30&lang=less&scoped=true&":
  /*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-1!./node_modules/css-loader??ref--10-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!D:/Aproject/github/watch-test/pages/goal/goal.vue?vue&type=style&index=0&id=b810ba30&lang=less&scoped=true& ***!
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
  /*! no static exports found */
  /***/function node_modulesMiniCssExtractPluginDistLoaderJsNode_modulesDcloudioVueCliPluginUniPackagesWebpackPreprocessLoaderIndexJsNode_modulesCssLoaderIndexJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesPostcssLoaderSrcIndexJsNode_modulesLessLoaderDistCjsJsNode_modulesDcloudioVueCliPluginUniPackagesWebpackPreprocessLoaderIndexJsNode_modulesVueLoaderLibIndexJsAprojectGithubWatchTestPagesGoalGoalVueVueTypeStyleIndex0IdB810ba30LangLessScopedTrue(module, exports, __webpack_require__) {

    // extracted by mini-css-extract-plugin

    /***/},

  /***/"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/goal/goal.vue?vue&type=template&id=b810ba30&scoped=true&":
  /*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
                                                                                                                                                                                                                                                                                                                                                                           !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!D:/Aproject/github/watch-test/pages/goal/goal.vue?vue&type=template&id=b810ba30&scoped=true& ***!
                                                                                                                                                                                                                                                                                                                                                                           \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
  /*! exports provided: render, staticRenderFns */
  /***/function node_modulesVueLoaderLibLoadersTemplateLoaderJsNode_modulesDcloudioVueCliPluginUniPackagesWebpackPreprocessLoaderIndexJsNode_modulesDcloudioWebpackUniMpLoaderLibTemplateJsNode_modulesVueLoaderLibIndexJsAprojectGithubWatchTestPagesGoalGoalVueVueTypeTemplateIdB810ba30ScopedTrue(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "render", function () {return render;});
    /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {return staticRenderFns;});
    var render = function render() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
    };
    var staticRenderFns = [];
    render._withStripped = true;



    /***/} }]);


;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
'pages/goal/goal-create-component',
{
  'pages/goal/goal-create-component': function pagesGoalGoalCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('./node_modules/@dcloudio/uni-app-plus/dist/index.js')['createComponent'](__webpack_require__("../../../../Aproject/github/watch-test/pages/goal/goal.vue"));
  } },

[['pages/goal/goal-create-component']]]);
});
require('pages/goal/goal.js');
__wxRoute = 'pages/home/home';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/home/home.js';

define('pages/home/home.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/home/home"], {

  /***/"../../../../Aproject/github/watch-test/pages/home/home.vue":
  /*!*********************************************************!*\
                                                                       !*** D:/Aproject/github/watch-test/pages/home/home.vue ***!
                                                                       \*********************************************************/
  /*! no static exports found */
  /***/function AprojectGithubWatchTestPagesHomeHomeVue(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */var _home_vue_vue_type_template_id_5b29a268_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./home.vue?vue&type=template&id=5b29a268&scoped=true& */"../../../../Aproject/github/watch-test/pages/home/home.vue?vue&type=template&id=5b29a268&scoped=true&");
    /* harmony import */var _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./home.vue?vue&type=script&lang=js& */"../../../../Aproject/github/watch-test/pages/home/home.vue?vue&type=script&lang=js&");
    /* harmony reexport (unknown) */for (var __WEBPACK_IMPORT_KEY__ in _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) {if (__WEBPACK_IMPORT_KEY__ !== 'default') (function (key) {__webpack_require__.d(__webpack_exports__, key, function () {return _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key];});})(__WEBPACK_IMPORT_KEY__);}
    /* harmony import */var _home_vue_vue_type_style_index_0_id_5b29a268_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./home.vue?vue&type=style&index=0&id=5b29a268&scoped=true&lang=css& */"../../../../Aproject/github/watch-test/pages/home/home.vue?vue&type=style&index=0&id=5b29a268&scoped=true&lang=css&");
    /* harmony import */var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */"./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






    /* normalize component */

    var component = Object(_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
    _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
    _home_vue_vue_type_template_id_5b29a268_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
    _home_vue_vue_type_template_id_5b29a268_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
    false,
    null,
    "5b29a268",
    null);



    /* hot reload */
    if (false) {var api;}
    component.options.__file = "Aproject/github/watch-test/pages/home/home.vue";
    /* harmony default export */__webpack_exports__["default"] = component.exports;

    /***/},

  /***/"../../../../Aproject/github/watch-test/pages/home/home.vue?vue&type=script&lang=js&":
  /*!**********************************************************************************!*\
                                                                                                !*** D:/Aproject/github/watch-test/pages/home/home.vue?vue&type=script&lang=js& ***!
                                                                                                \**********************************************************************************/
  /*! no static exports found */
  /***/function AprojectGithubWatchTestPagesHomeHomeVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./home.vue?vue&type=script&lang=js& */"./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/home/home.vue?vue&type=script&lang=js&");
    /* harmony import */var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
    /* harmony reexport (unknown) */for (var __WEBPACK_IMPORT_KEY__ in _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) {if (__WEBPACK_IMPORT_KEY__ !== 'default') (function (key) {__webpack_require__.d(__webpack_exports__, key, function () {return _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key];});})(__WEBPACK_IMPORT_KEY__);}
    /* harmony default export */__webpack_exports__["default"] = _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a;

    /***/},

  /***/"../../../../Aproject/github/watch-test/pages/home/home.vue?vue&type=style&index=0&id=5b29a268&scoped=true&lang=css&":
  /*!******************************************************************************************************************!*\
                                                                                                                                !*** D:/Aproject/github/watch-test/pages/home/home.vue?vue&type=style&index=0&id=5b29a268&scoped=true&lang=css& ***!
                                                                                                                                \******************************************************************************************************************/
  /*! no static exports found */
  /***/function AprojectGithubWatchTestPagesHomeHomeVueVueTypeStyleIndex0Id5b29a268ScopedTrueLangCss(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_id_5b29a268_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./home.vue?vue&type=style&index=0&id=5b29a268&scoped=true&lang=css& */"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/home/home.vue?vue&type=style&index=0&id=5b29a268&scoped=true&lang=css&");
    /* harmony import */var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_id_5b29a268_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_id_5b29a268_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
    /* harmony reexport (unknown) */for (var __WEBPACK_IMPORT_KEY__ in _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_id_5b29a268_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) {if (__WEBPACK_IMPORT_KEY__ !== 'default') (function (key) {__webpack_require__.d(__webpack_exports__, key, function () {return _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_id_5b29a268_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key];});})(__WEBPACK_IMPORT_KEY__);}
    /* harmony default export */__webpack_exports__["default"] = _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_id_5b29a268_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a;

    /***/},

  /***/"../../../../Aproject/github/watch-test/pages/home/home.vue?vue&type=template&id=5b29a268&scoped=true&":
  /*!****************************************************************************************************!*\
                                                                                                                  !*** D:/Aproject/github/watch-test/pages/home/home.vue?vue&type=template&id=5b29a268&scoped=true& ***!
                                                                                                                  \****************************************************************************************************/
  /*! exports provided: render, staticRenderFns */
  /***/function AprojectGithubWatchTestPagesHomeHomeVueVueTypeTemplateId5b29a268ScopedTrue(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_5b29a268_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./home.vue?vue&type=template&id=5b29a268&scoped=true& */"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/home/home.vue?vue&type=template&id=5b29a268&scoped=true&");
    /* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__, "render", function () {return _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_5b29a268_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"];});

    /* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {return _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_5b29a268_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"];});



    /***/},

  /***/"./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/home/home.vue?vue&type=script&lang=js&":
  /*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
                                                                                                                                                                                                                                                                                                                                       !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!D:/Aproject/github/watch-test/pages/home/home.vue?vue&type=script&lang=js& ***!
                                                                                                                                                                                                                                                                                                                                       \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
  /*! no static exports found */
  /***/function node_modulesBabelLoaderLibIndexJsNode_modulesDcloudioVueCliPluginUniPackagesWebpackPreprocessLoaderIndexJsNode_modulesDcloudioWebpackUniMpLoaderLibScriptJsNode_modulesVueLoaderLibIndexJsAprojectGithubWatchTestPagesHomeHomeVueVueTypeScriptLangJs(module, exports, __webpack_require__) {

    "use strict";
    /* WEBPACK VAR INJECTION */(function (uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;















































































      var _uCharts = _interopRequireDefault(__webpack_require__( /*! ../../lib/u-charts/u-charts.js */"../../../../Aproject/github/watch-test/lib/u-charts/u-charts.js"));
      var _home = __webpack_require__( /*! ../../service/api/home.js */"../../../../Aproject/github/watch-test/service/api/home.js");



      var _login = __webpack_require__( /*! ../../service/api/login.js */"../../../../Aproject/github/watch-test/service/api/login.js");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //统计图
      //首页api
      //登陆api
      var _this;var canvaRing = null;var _default = { data: function data() {return { swiperList: [], //轮播数据
            //轮播
            cardCur: 0, dotStyle: true, towerStart: 0, direction: '', //统计数据
            ringList: {}, //环状统计初始化数据
            cWidth: '', cHeight: '', pixelRatio: 1, //总小时公里
            hour: 5, minute: 20, kilometer: 26 };}, mounted: function mounted() {_this = this;(0, _login.getisLogin)(); //是否登陆
          _this.getSwiperData(); //获取轮播数据
          _this.cWidth = uni.upx2px(400);_this.cHeight = uni.upx2px(400);_this.getServerData(); //获取统计数据
        }, methods: { getSwiperData: function getSwiperData() {var swiperData = _this.$store.getters.getSwiperData; //获取状态值
            //判断状态中是否有值
            if (swiperData != "") {_this.swiperList = swiperData;} else {//获取轮播数据
              (0, _home.getSwiper)().then(function (res) {//console.log(res)
                _this.swiperList = res.data.swiperList;_this.$store.dispatch("setSwiperData", res.data.swiperList); //存入状态
              }).catch(function (err) {});}}, copyUrl: function copyUrl() {uni.setClipboardData({ data: 'https://github.com/AmosHuKe/Watch-Test', success: function success() {uni.showToast({ title: '地址复制成功' });} });}, getServerData: function getServerData() {var setRingData = { series: [] }; //统计图数据装载
            var ringData = _this.$store.getters.getRingData; //获取状态值
            if (ringData != "") {_this.ringList = ringData; //赋值统计数据
              for (var i = 0; i < ringData.length; i++) {//统计图数据装载
                setRingData.series.push({ "name": ringData[i].name, "data": ringData[i].data });}_this.showRing("canvasRing", setRingData);} else {//获取统计数据
              (0, _home.getRing)().then(function (res) {//console.log(res)
                var data = res.data.series; //获取统计数据
                _this.ringList = data; //赋值统计数据
                _this.$store.dispatch("setRingData", data); //存入状态
                for (var _i = 0; _i < data.length; _i++) {//统计图数据装载
                  setRingData.series.push({ "name": data[_i].name, "data": data[_i].data });}_this.showRing("canvasRing", setRingData); //console.log(ringData)
              }).catch(function (err) {});}}, showRing: function showRing(canvasId, chartData) {canvaRing = new _uCharts.default({ $this: _this, canvasId: canvasId, type: 'ring', fontSize: 11, legend: false, //底部tag
              // title: {
              // 	name: '',
              // 	color: '#7cb5ec',
              // 	fontSize: 25*_this.pixelRatio,
              // 	offsetY:-20*_this.pixelRatio,
              // },
              subtitle: {
                name: '',
                color: '#666666',
                fontSize: 1 * _this.pixelRatio,
                offsetY: 2 * _this.pixelRatio },

              extra: {
                pie: {
                  offsetAngle: -45,
                  ringWidth: 5 * _this.pixelRatio,
                  lableWidth: 15 } },


              background: '#FFFFFF',
              pixelRatio: _this.pixelRatio,
              series: chartData.series,
              animation: true,
              width: _this.cWidth * _this.pixelRatio,
              height: _this.cHeight * _this.pixelRatio,
              disablePieStroke: false,
              dataLabel: true });

          },
          touchRing: function touchRing(e) {
            canvaRing.showToolTip(e, {
              format: function format(item) {
                return item.name + ':' + item.data;
              } });

          },
          DotStyle: function DotStyle(e) {
            this.dotStyle = e.detail.value;
          },
          // cardSwiper
          cardSwiper: function cardSwiper(e) {
            this.cardCur = e.detail.current;
          },
          // towerSwiper
          // 初始化towerSwiper
          TowerSwiper: function TowerSwiper(name) {
            var list = this[name];
            for (var i = 0; i < list.length; i++) {
              list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2));
              list[i].mLeft = i - parseInt(list.length / 2);
            }
            this.swiperList = list;
          },

          // towerSwiper触摸开始
          TowerStart: function TowerStart(e) {
            this.towerStart = e.touches[0].pageX;
          },

          // towerSwiper计算方向
          TowerMove: function TowerMove(e) {
            this.direction = e.touches[0].pageX - this.towerStart > 0 ? 'right' : 'left';
          },

          // towerSwiper计算滚动
          TowerEnd: function TowerEnd(e) {
            var direction = this.direction;
            var list = this.swiperList;
            if (direction == 'right') {
              var mLeft = list[0].mLeft;
              var zIndex = list[0].zIndex;
              for (var i = 1; i < this.swiperList.length; i++) {
                this.swiperList[i - 1].mLeft = this.swiperList[i].mLeft;
                this.swiperList[i - 1].zIndex = this.swiperList[i].zIndex;
              }
              this.swiperList[list.length - 1].mLeft = mLeft;
              this.swiperList[list.length - 1].zIndex = zIndex;
            } else {
              var _mLeft = list[list.length - 1].mLeft;
              var _zIndex = list[list.length - 1].zIndex;
              for (var _i2 = this.swiperList.length - 1; _i2 > 0; _i2--) {
                this.swiperList[_i2].mLeft = this.swiperList[_i2 - 1].mLeft;
                this.swiperList[_i2].zIndex = this.swiperList[_i2 - 1].zIndex;
              }
              this.swiperList[0].mLeft = _mLeft;
              this.swiperList[0].zIndex = _zIndex;
            }
            this.direction = "";
            this.swiperList = this.swiperList;
          } } };exports.default = _default;
      /* WEBPACK VAR INJECTION */}).call(this, __webpack_require__( /*! ./node_modules/@dcloudio/uni-app-plus/dist/index.js */"./node_modules/@dcloudio/uni-app-plus/dist/index.js")["default"]);

    /***/},

  /***/"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/home/home.vue?vue&type=style&index=0&id=5b29a268&scoped=true&lang=css&":
  /*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
                                                                                                                                                                                                                                                                                                                                                                                                                                                                 !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!D:/Aproject/github/watch-test/pages/home/home.vue?vue&type=style&index=0&id=5b29a268&scoped=true&lang=css& ***!
                                                                                                                                                                                                                                                                                                                                                                                                                                                                 \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
  /*! no static exports found */
  /***/function node_modulesMiniCssExtractPluginDistLoaderJsNode_modulesDcloudioVueCliPluginUniPackagesWebpackPreprocessLoaderIndexJsNode_modulesCssLoaderIndexJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesPostcssLoaderSrcIndexJsNode_modulesVueLoaderLibIndexJsAprojectGithubWatchTestPagesHomeHomeVueVueTypeStyleIndex0Id5b29a268ScopedTrueLangCss(module, exports, __webpack_require__) {

    // extracted by mini-css-extract-plugin

    /***/},

  /***/"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/home/home.vue?vue&type=template&id=5b29a268&scoped=true&":
  /*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
                                                                                                                                                                                                                                                                                                                                                                           !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!D:/Aproject/github/watch-test/pages/home/home.vue?vue&type=template&id=5b29a268&scoped=true& ***!
                                                                                                                                                                                                                                                                                                                                                                           \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
  /*! exports provided: render, staticRenderFns */
  /***/function node_modulesVueLoaderLibLoadersTemplateLoaderJsNode_modulesDcloudioVueCliPluginUniPackagesWebpackPreprocessLoaderIndexJsNode_modulesDcloudioWebpackUniMpLoaderLibTemplateJsNode_modulesVueLoaderLibIndexJsAprojectGithubWatchTestPagesHomeHomeVueVueTypeTemplateId5b29a268ScopedTrue(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "render", function () {return render;});
    /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {return staticRenderFns;});
    var render = function render() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
    };
    var staticRenderFns = [];
    render._withStripped = true;



    /***/} }]);


;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
'pages/home/home-create-component',
{
  'pages/home/home-create-component': function pagesHomeHomeCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('./node_modules/@dcloudio/uni-app-plus/dist/index.js')['createComponent'](__webpack_require__("../../../../Aproject/github/watch-test/pages/home/home.vue"));
  } },

[['pages/home/home-create-component']]]);
});
require('pages/home/home.js');
__wxRoute = 'pages/mine/mine';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mine/mine.js';

define('pages/mine/mine.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/mine/mine"], {

  /***/"../../../../Aproject/github/watch-test/pages/mine/mine.vue":
  /*!*********************************************************!*\
                                                                       !*** D:/Aproject/github/watch-test/pages/mine/mine.vue ***!
                                                                       \*********************************************************/
  /*! no static exports found */
  /***/function AprojectGithubWatchTestPagesMineMineVue(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */var _mine_vue_vue_type_template_id_3628eae8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./mine.vue?vue&type=template&id=3628eae8&scoped=true& */"../../../../Aproject/github/watch-test/pages/mine/mine.vue?vue&type=template&id=3628eae8&scoped=true&");
    /* harmony import */var _mine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./mine.vue?vue&type=script&lang=js& */"../../../../Aproject/github/watch-test/pages/mine/mine.vue?vue&type=script&lang=js&");
    /* harmony reexport (unknown) */for (var __WEBPACK_IMPORT_KEY__ in _mine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) {if (__WEBPACK_IMPORT_KEY__ !== 'default') (function (key) {__webpack_require__.d(__webpack_exports__, key, function () {return _mine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key];});})(__WEBPACK_IMPORT_KEY__);}
    /* harmony import */var _mine_vue_vue_type_style_index_0_id_3628eae8_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./mine.vue?vue&type=style&index=0&id=3628eae8&lang=less&scoped=true& */"../../../../Aproject/github/watch-test/pages/mine/mine.vue?vue&type=style&index=0&id=3628eae8&lang=less&scoped=true&");
    /* harmony import */var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */"./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






    /* normalize component */

    var component = Object(_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
    _mine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
    _mine_vue_vue_type_template_id_3628eae8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
    _mine_vue_vue_type_template_id_3628eae8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
    false,
    null,
    "3628eae8",
    null);



    /* hot reload */
    if (false) {var api;}
    component.options.__file = "Aproject/github/watch-test/pages/mine/mine.vue";
    /* harmony default export */__webpack_exports__["default"] = component.exports;

    /***/},

  /***/"../../../../Aproject/github/watch-test/pages/mine/mine.vue?vue&type=script&lang=js&":
  /*!**********************************************************************************!*\
                                                                                                !*** D:/Aproject/github/watch-test/pages/mine/mine.vue?vue&type=script&lang=js& ***!
                                                                                                \**********************************************************************************/
  /*! no static exports found */
  /***/function AprojectGithubWatchTestPagesMineMineVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_mine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./mine.vue?vue&type=script&lang=js& */"./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/mine/mine.vue?vue&type=script&lang=js&");
    /* harmony import */var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_mine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_mine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
    /* harmony reexport (unknown) */for (var __WEBPACK_IMPORT_KEY__ in _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_mine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) {if (__WEBPACK_IMPORT_KEY__ !== 'default') (function (key) {__webpack_require__.d(__webpack_exports__, key, function () {return _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_mine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key];});})(__WEBPACK_IMPORT_KEY__);}
    /* harmony default export */__webpack_exports__["default"] = _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_mine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a;

    /***/},

  /***/"../../../../Aproject/github/watch-test/pages/mine/mine.vue?vue&type=style&index=0&id=3628eae8&lang=less&scoped=true&":
  /*!*******************************************************************************************************************!*\
                                                                                                                                 !*** D:/Aproject/github/watch-test/pages/mine/mine.vue?vue&type=style&index=0&id=3628eae8&lang=less&scoped=true& ***!
                                                                                                                                 \*******************************************************************************************************************/
  /*! no static exports found */
  /***/function AprojectGithubWatchTestPagesMineMineVueVueTypeStyleIndex0Id3628eae8LangLessScopedTrue(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_mine_vue_vue_type_style_index_0_id_3628eae8_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-1!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--10-oneOf-1-2!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-1-3!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./mine.vue?vue&type=style&index=0&id=3628eae8&lang=less&scoped=true& */"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/mine/mine.vue?vue&type=style&index=0&id=3628eae8&lang=less&scoped=true&");
    /* harmony import */var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_mine_vue_vue_type_style_index_0_id_3628eae8_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_mine_vue_vue_type_style_index_0_id_3628eae8_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
    /* harmony reexport (unknown) */for (var __WEBPACK_IMPORT_KEY__ in _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_mine_vue_vue_type_style_index_0_id_3628eae8_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) {if (__WEBPACK_IMPORT_KEY__ !== 'default') (function (key) {__webpack_require__.d(__webpack_exports__, key, function () {return _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_mine_vue_vue_type_style_index_0_id_3628eae8_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key];});})(__WEBPACK_IMPORT_KEY__);}
    /* harmony default export */__webpack_exports__["default"] = _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_mine_vue_vue_type_style_index_0_id_3628eae8_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a;

    /***/},

  /***/"../../../../Aproject/github/watch-test/pages/mine/mine.vue?vue&type=template&id=3628eae8&scoped=true&":
  /*!****************************************************************************************************!*\
                                                                                                                  !*** D:/Aproject/github/watch-test/pages/mine/mine.vue?vue&type=template&id=3628eae8&scoped=true& ***!
                                                                                                                  \****************************************************************************************************/
  /*! exports provided: render, staticRenderFns */
  /***/function AprojectGithubWatchTestPagesMineMineVueVueTypeTemplateId3628eae8ScopedTrue(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_mine_vue_vue_type_template_id_3628eae8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./mine.vue?vue&type=template&id=3628eae8&scoped=true& */"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/mine/mine.vue?vue&type=template&id=3628eae8&scoped=true&");
    /* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__, "render", function () {return _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_mine_vue_vue_type_template_id_3628eae8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"];});

    /* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {return _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_mine_vue_vue_type_template_id_3628eae8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"];});



    /***/},

  /***/"./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/mine/mine.vue?vue&type=script&lang=js&":
  /*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
                                                                                                                                                                                                                                                                                                                                       !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!D:/Aproject/github/watch-test/pages/mine/mine.vue?vue&type=script&lang=js& ***!
                                                                                                                                                                                                                                                                                                                                       \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
  /*! no static exports found */
  /***/function node_modulesBabelLoaderLibIndexJsNode_modulesDcloudioVueCliPluginUniPackagesWebpackPreprocessLoaderIndexJsNode_modulesDcloudioWebpackUniMpLoaderLibScriptJsNode_modulesVueLoaderLibIndexJsAprojectGithubWatchTestPagesMineMineVueVueTypeScriptLangJs(module, exports, __webpack_require__) {

    "use strict";
    /* WEBPACK VAR INJECTION */(function (uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;















































































































      var _login = __webpack_require__( /*! ../../service/api/login.js */"../../../../Aproject/github/watch-test/service/api/login.js");


      var _version = __webpack_require__( /*! ../../service/api/version.js */"../../../../Aproject/github/watch-test/service/api/version.js"); //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //登陆api
      //版本api
      var _default = { data: function data() {return { login: false, //是否登陆
            avatarUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhAAAAIQCAYAAADQAFeJAAAABHNCSVQICAgIfAhkiAAAIABJREFUeJzt3Xl0FYXd//HPJAEMCQhESJBVhICigihCgCAgFmVRFgEVUavIgwparXvdqlatolipG0hFQRFEERBBNtlRWd2QVUQWEyCAhCRsyfz+qPWnrQghd+53Zu77dY6n5/Gxd97n1Nx8mJk7VwIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA4nCsA4IgJSWlQXx8fENJDePi4s6QVNV13XKSykpKkpTkOM6JppEAgGPiuu6PkvJ++ivfcZxcST8UFRV9JenroqKir3bu3LnGNDIAGBD/pUqVKmc5jtNcUjNJ5ziO08i6CQBgYoXruiskfeK67qfbt2//wjrIT2J6QFSuXDnNcZyWcXFxzfTvwXCu/n1WAQCA/5YvaWlRUdEnkj51XXfRjh07sqyjrMTqgEhMS0u73HXd/j+dbQAAoFhc113sOM6wrKyssZIKrHuiLaYGROXKlRs7jtPPcZyruGcBABAJruvukTTacZyXsrKyVln3REtMDIjU1NTmjuM8IKmjdQsAILxc151SVFT05I4dOxZYt3gt1AMiNTW1s6R7HMdpad0CAIgpCwoLCx/fsWPHVOsQr4RyQPz0SYphjuM0s24BAMQu13U/dV23fxg/wRGqAZGamlpF0qOS+jmOE2fdAwCA67pFkoZLejA7O3u7dU+kxFsHREhClSpVbnccZ7zjOC0cxwnVMAIABJfzb+dK+r+kpKRDeXl5SyQVWXeVVOB/0aamptZxHGecpHOsWwAAOAbLXNftlZ2d/a11SEkE+jR/lSpV+kj6XIwHAEBwnCPp859+hwVWIM9AVKhQoUKZMmWGOo5zlXULAADHy3Xd0ZIGZGdn51m3FFfgBkSVKlVaxsXFjZFUw7oFAICScl13Q2FhYa+dO3cut24pjkBdwqhSpUrfuLi42WI8AABCwnGcUxMSEhZXqVKlr3VLcQTlUxhOamrq3+Li4p5VcJoBADhW8Y7jdEtKSkrIy8v72DrmWAThl3GptLS0cY7j9LcOAQDAS47jtE5OTq6zb9++KfL5Rz19fQ9EuXLlUpKSkt6X1Mq6BQCAKFqQl5fXNTc3N8c65Ej8fA9EmaSkpKliPAAAYk+rsmXLfiipjHXIkfh1QMSnpqaOl9TUOgQAAAuO45yXmpo6Tj693cCXUampqW86jtPDugMAAEuO49RPSkqqk5eXN8G65b/5bkCkpqY+6TjOAOsOAAD8wHGcs5KSkhLz8vJmWrf8kq8GRFpa2rWO4zxt3QEAgJ84jtMqOTl50759+1Zat/yHbz6FkZKS0qBUqVLLJJW1bgEAwIfyJTXNyspaZR0i+ecmysRSpUq9J8YDAABHUtZ13XGSEq1DJJ8MiLS0tJcknWbdAQCAnzmO0/Cn35nmzO+BSEtLu1bSQ9YdAAAERGM/3A9heg9EuXLlUsqWLbvRcZxylh0AAASJ67q5+fn5p1g+qdL0EkZSUtIzjAcAAIrHcZxySUlJz5g2WB04LS2tjaRAfOMYAAB+dPjw4aY7d+5canFsqzMQcZJeNjo2AAChkJCQ8KKMfpeb3ESZmpp6q+M4fSyODQBAiFRLSkrak5eX90m0D2xxCeOEtLS0bZIqGhwbAICw2Z2VlXWypP3RPGjUT3tUqVLlWjEeAACIlIo//W6NqmgPiPi4uLjbonxMAABCLS4u7k+K8m0JUR0QqampPSWlR/OYAADEgPo//Y6NmmifgfhTlI8HAECsiOrv2KgNiLS0tDaO4zSL1vEAAIgljuM0S01NbR6t40XzDMS1UTwWAAAxx3GcAVE7VjQOcvLJJ5ctLCzc7jhOUjSOBwBALHJdN7eoqOjkHTt27PP6WFE5A1FUVNSL8QAAgLccxykXFxfXORrHitYljMujdBwAAGJdVH7nen4Jo1y5cieVLVt2m+M4pbw+FgAAsc513UOSqmdnZ2/38jien4FISkrqzHgAACA6HMcp5ThOR6+PE41LGG2icAwAAPD/tfH6AAwIAADCp43XB/B0QKSkpDSQVMvLYwAAgP9RKy0trbaXB/B0QCQkJFzk5esDAIAjauPli3t9CaONx68PAAB+g+u6nv4h3tMB4ThOYy9fHwAA/DbHcTz9XgzPBkRqamqS67rVvXp9AABwZD/9Dvbs97xnL1xUVFTPcZx4r14fAAAcmeM48SkpKelevb5nA8JxnNpevTYAADi6+Pj4Bl69tpcDwrNoAABwdF7+LmZAAAAQUoEcEJLSPHxtAABwdJ79LvZsQLiuW8Gr1wYAAEfn5e9iLy9hMCAAADDk5e9izkAAABBeJ3j1wl7eA+FZNAAAODrXdYM3IBzHYUAAAGAokJcwJJXx8LUBAMDRefa72Otv4wQAACHEgAAAAMXGgAAAAMXGgAAAAMXGgAAAAMXGgAAAAMXGgAAAAMXGgAAAAMXGgAAAAMXGgAAAAMXGgAAAAMXGgAAAAMXGgAAAAMXGgAAAAMXGgAAAAMXGgAAAAMXGgAAAAMXGgAAAAMWWYB0AoOTKli2r2rVrq1atWqpZs6Zq1aolx3F07733mnY9/vjjkqRNmzZp06ZN+v7777Vx40YVFBSYdgEoOQYEECA1a9ZU/fr1lZ6ervr166tu3bqqVauWKlWq9D//7Nq1aw0Kf61FixaqX7/+//z9nJwcbdq0SevXr9eaNWu0du1arVmzRps3bzaoBHA8GBCADyUlJalx48Y666yzdNppp6l+/fqqV6+eEhMTrdMiIiUlRSkpKWrSpMmv/n5BQcHPg2LVqlX64osvtHLlSs5YAD7EgACMJSYm6qyzzlKjRo1+/qtOnTpyHMc6LeoSExPVuHFjNW7c+Oe/V1RUpPXr1+vzzz/X559/rpUrV+qrr77SgQMHDEsBMCCAKHMcR2effbbatm2rNm3a6Oyzz1Z8fLx1lm/FxcUpPT1d6enp6tmzpyTp0KFDWrp0qT7++GPNmTNHX375pXElEHsYEEAUpKam6oILLlCbNm2UmZmpChUqWCcFWqlSpZSRkaGMjAzdd999ysnJ0dy5czVnzhzNnj1bOTk51olA6DEgAI80bNhQF198sS6++GKdfvrp1jmhlpKSou7du6t79+6SpJUrV2rKlCmaMmWKNm7caFwHhBMDAoigZs2a/TwaatasaZ0Ts/5zH8Vf/vIXrV27VlOnTtWHH36oL774wjoNCA0GBFBC6enpuvrqq9W1a1elpKRY5+C//Of+iVtvvVVbt27VhAkT9Prrr2vLli3WaUCgMSCA45CYmKiuXbuqT58+Ouecc6xzcIyqVaumgQMH6uabb9aCBQs0atQoTZ06VYcPH7ZOAwKHAQEUQ6NGjXTllVeqe/fuSk5Ots7BcXIcR5mZmcrMzFROTo7GjRunN954Q9999511GhAYDAjgKBITE9WjRw/17dtXZ511lnUOIiwlJUU33nijbrzxRi1evFhvvPGGPvjgA85KAEfBgACOID09Xdddd5169OjB2YYY8Z+Phj722GMaO3asXnvtNe6VAI6Ab+ME/kvPnj01ZcoUzZ07V9dccw3jIQalpKTopptu0pIlSzRu3Dh16NDBOgnwHc5AAJJKly6tq666SgMHDlTVqlWtc+Aj/7lXYt26dXruuec0YcIEua5rnQWY4wwEYtoJJ5ygAQMGaMmSJfrb3/7GeMAR1atXTy+88IIWLlyo3r17Ky6Ot0/ENn4CEJMSExM1cOBALV26VA899JCqVKlinYSAOOWUU/Tcc89p8eLF6tOnD99jgpjFgEBMSUhI0A033KAlS5boL3/5Cw9+wnGrWbOmBg8erMWLF//8CG0gljAgEDN69OihRYsW6ZFHHmE4IGJq1KihF154QTNmzFDz5s2tc4CoYUAg9Nq0aaMZM2bon//8p2rUqGGdg5A644wzNGHCBL399tuqX7++dQ7gOQYEQqtu3boaO3asxowZozPOOMM6BzHi/PPP15w5czR06FClpqZa5wCeYUAgdJKSkvToo4/q448/VuvWra1zEKMuu+wyLVy4UDfddBM3WiKUGBAIld69e2vx4sXq16+fEhJ4zAlsJSUl6YEHHtCcOXPUokUL6xwgohgQCIX09HRNmzZNzz33nCpXrmydA/xK3bp19e6772r48OE6+eSTrXOAiGBAINBOOOEEPfbYY5o7d64aNWpknQP8rs6dO2vZsmW66aabrFOAEmNAILDOO+88zZ8/X9dff711ClAsDzzwgKZNm6Y6depYpwDHjQGBwElKStLgwYM1ceJEVa9e3ToHOC6NGjXSxx9/rFtvvZWbLBFIDAgESuvWrbVw4UL16dPHOgUosdKlS+uee+7RRx99pNNOO806BygWBgQCoWzZsnruuec0duxYPluP0GnYsKFmz56tQYMGWacAx4wBAd8788wzNWfOHPXu3ds6BfDUfffdp9GjRys5Odk6BTgqBgR8y3EcDRo0SB9++CGPoEbMuOCCC/Txxx+rYcOG1inA72JAwJcqV66sCRMm6L777uOBUIg51atX14cffqhrr73WOgU4IgYEfKddu3aaP3++mjVrZp0CmCldurSeeOIJvfLKKypbtqx1DvA/GBDwlRtvvFGjRo3SiSeeaJ0C+MIll1yijz76SDVr1rROAX6FAQFfiIuL0z//+U89+OCDiovjX0vgl+rWrauZM2fq/PPPt04BfsY7NcxVqFBB77//vnr06GGdAvhWuXLlNGbMGP35z3+2TgEkMSBg7NRTT9XMmTPVtGlT6xTA9xzH0R133KG33npLSUlJ1jmIcQwImGnTpo2mTZumatWqWacAgdK2bVvNmDFDp5xyinUKYhgDAiYuu+wyHpgDlMApp5yiKVOmqEmTJtYpiFEMCETd/fffr6FDh/IFQkAJVaxYUe+99546d+5snYIYxIBA1CQkJOjVV1/VzTffbJ0ChEaZMmU0bNgw3XTTTdYpiDEMCERF+fLlNXHiRHXq1Mk6BQgdx3H0wAMP6Nlnn7VOQQxhQMBzVapU0dSpU7lWC3jsiiuu0GuvvcblQUQFAwKeqlGjhqZMmaI6depYpwAx4aKLLtKYMWNUpkwZ6xSEHAMCnqldu7Y+/PBDVa9e3ToFiCmZmZl69913lZiYaJ2CEGNAwBMNGjTQlClTdNJJJ1mnADHpnHPO0YQJE1SuXDnrFIQUAwIRd/bZZ2vSpEmqVKmSdQoQ0xo1aqQPPvhAFSpUsE5BCDEgEFFnnnmm3n33Xf7UA/hEenq6Jk6cyDfcIuIYEIiYBg0aaPz48Vx3BXwmPT1d7733Hk9+RUQ5Xr1wWlqa69Vrw3/S09M1YcIELlsY2rZtmzZu3KgNGzZo06ZNWrFihRYvXmzalJGRobPPPlu1atXSqaeeqjp16qhq1aqmTbFs2bJl6tmzpwoKCqxTEEVZWVme/K5nQKDEatSooalTpyolJcU6JWYUFRXpq6++0qJFi7R48WItWrRI+/bts846JuXLl1fz5s3VokULtWjRQg0bNlRcHCdDo2Xx4sW6/PLLdfDgQesURAkDAr5UvXp1TZw4USeffLJ1Suh9+eWXWrhwoRYtWqRFixYpLy/POikifjkoWrVqpYYNG1onhd7s2bPVp08f6wxECQMCvlOpUiV98MEHfKWwR7KysjR58mQtWLBAn3zyifbu3WudFBUVKlRQRkaGMjMz1aVLFz4K7JHJkyerf//+1hmIAgYEfKVMmTKaNGmSzjrrLOuUUPnqq6/00Ucfadq0afrqq6+sc3yhUaNG6tChgy6++GI1aNDAOidUXnzxRT366KPWGfAYAwK+Mnr0aF1wwQXWGaHw/fffa/z48Xr77be1efNm6xxfq1Onji6//HL16NGDy2YR8qc//Uljx461zoCHGBDwjYceekgDBgywzgi0/Px8TZ48WW+//bY++eQT65xAyszM1JVXXqkOHTrw0eES6tOnj2bPnm2dAY8wIOALffr00eDBg60zAqmoqEgLFy7U2LFj9cEHH+jAgQPWSaFQtmxZXXLJJbr88svVrFkz65xAys/PV6dOnbR69WrrFHiAAQFz7du316hRo6wzAmf37t0aMWKERo8erezsbOucUKtZs6auvvpq/fGPf1TZsmWtcwJlx44duuiii7Rt2zbrFEQYAwKmTj31VM2YMYNTxcWQk5OjV155Ra+++ioP7omyChUqqH///urXrx+PVS+GL774Qp07d9ahQ4esUxBBDAiYSU5O1vTp0/m45jHKycnR888/rzfeeEP79++3zolpJ554ogYMGKB+/frxGOdjNGbMGN1+++3WGYggBgTMjBo1Su3bt7fO8L1du3bppZde0ogRIzjj4DPly5fXjTfeqBtuuEFJSUnWOb535513avTo0dYZiBAGBEzcdtttuuuuu6wzfG3Pnj16+eWXNXz4cOXn51vn4HdUqFBBAwcO1HXXXcfluN9x6NAhdezYkWeRhAQDAlHXqlUrjRs3To7j2b8mgXb48GG99tprevrpp5Wbm2udg2KoUqWK7r//fl122WX8+30EWVlZatOmjX788UfrFJQQAwJRVaNGDc2aNYsb0I5gzpw5uu+++7Rx40brFJRAkyZN9MQTT/BE1SNYvHixunfvbp2BEvJqQPAVePhNw4cPZzz8hh9++EHXXHONrrjiCsZDCCxfvlwdOnTQn//8Z+3Zs8c6x3cyMjI0aNAg6wz4FAMC/+Ovf/2rGjVqZJ3hK67r6rXXXlPLli01ffp06xxE2FtvvaVWrVpp8uTJ1im+c9ddd+mMM86wzoAPcQkDv9KmTRuNGTPGOsNXNm3apBtvvFErVqywTkEUXHjhhRoyZIhSUlKsU3xj06ZNatu2LZ8uCiguYcBz1apV08svv2yd4SsvvviimjdvzniIITNmzFCrVq00YcIE6xTfqFWrlh555BHrDPgMZyAgSYqLi9OUKVPUuHFj6xRf2Lx5s/r376+VK1dap8DQhRdeqH/84x+qWLGidYov9O3bVzNnzrTOQDFxBgKeuv322xkPPxk2bJhat27NeIBmzJihzMxMTZ061TrFF4YOHaoqVapYZ8AnOAMB1atXT7Nnz1ZCQoJ1iqndu3erf//+WrBggXUKfOiqq67SY489pjJlylinmJo5c6b69u1rnYFi4AwEPPPiiy/G/HhYsWKF2rZty3jAEY0ePVqdOnXSli1brFNMtW/fXpdddpl1BnyAARHjbrjhhpj/iNbw4cPVpUsXvmobR/X111+rbdu2mjVrlnWKqb/97W98SgVcwohlqampWrx4ccx+J8ChQ4c0cOBATZo0yToFAXTPPffo1ltvtc4ww6WM4OASBiJu6NChMTse9uzZox49ejAecNyefPJJDRo0SIWFhdYpJriUAQZEjOrRo4cyMzOtM0x8//336tSpk5YsWWKdgoAbP368evXqFbNfpvb444/rpJNOss6AEQZEDEpKStJDDz1knWHiP9998O2331qnICQWLVqkzp0764cffrBOibpy5crp/vvvt86AEQZEDLrnnntUuXJl64yomzVrlrp168aXJiHi1q5dqz/84Q9as2aNdUrU9e7dm+/OiVEMiBhTp04d/fGPf7TOiLoxY8boqquu0sGDB61TEFI7d+5Ux44dtXjxYuuUqHv22WetE2CAARFjnnvuOcXHx1tnRNUzzzyj22+/3ToDMSA/P1/du3fXtGnTrFOi6vTTT9e1115rnYEoY0DEkMsuu0xNmza1zoiqxx57TIMHD7bOQIy5/vrr9dFHH1lnRNVf/vIXvjMkxjAgYkTZsmX18MMPW2dE1eOPP64XXnjBOgMxqKioSNdee62mTJlinRI1ycnJ3FAZYxgQMWLQoEEx9eS4xx57TEOHDrXOQIzr379/TJ2JuPzyy1WnTh3rDEQJAyIGpKSkaMCAAdYZUTN06FDOPMAXioqKdP3118fMjZVxcXF68MEHrTMQJQyIGHDHHXfohBNOsM6IismTJ+vxxx+3zgB+VlhYqL59++qbb76xTomKDh066KyzzrLOQBQwIEKuevXqMfO8+gULFsTUmRYER15ennr27BkzD5t65JFHrBMQBQyIkLv33ntj4mObq1at0jXXXKOioiLrFOA35eTkqHfv3tq7d691iueaNWumtm3bWmfAYwyIEEtPT1f37t2tMzy3fft29e7dW/n5+dYpwO9at26drrnmmpj4Aq4HHnjAOgEeY0CEWCx8pGr//v264oortHPnTusU4Jh88skn+vOf/2yd4bnTTjtNnTp1ss6AhxgQIZWenq4LL7zQOsNTRUVF6tevn1atWmWdAhTL2LFj9dJLL1lneI4nwIYbAyKkbrnlFusEzz322GOaNWuWdQZwXB555BHNnj3bOsNTp59+ujIzM60z4BEGRAhVq1ZN3bp1s87w1Jw5c2LiT3AItwEDBoT+kxmDBg2yToBHGBAhNHDgQMXFhfd/2i1btqh///7WGUCJ5ebm6o9//KMOHz5sneKZzMxMvu47pML7WyZGVaxYUVdeeaV1hmcOHTqkvn37Kjc31zoFiIjPP/889A8/GzhwoHUCPMCACJn+/furdOnS1hmeeeSRR7R69WrrDCCiXnrppVDfz9O5c2fVrl3bOgMRxoAIkVKlSqlfv37WGZ6ZN2+eXn31VesMwBO33HKLcnJyrDM883//93/WCYgwBkSI9OrVS8nJydYZnsjJyeEx1Qi1Xbt26aabbrLO8Ezv3r2VlJRknYEIYkCESJhvLBwwYIB2795tnQF4at68eRo5cqR1hicSExN1+eWXW2cgghgQIZGRkaH09HTrDE+8/vrrWrBggXUGEBUPP/ywNm7caJ3hiTBfYo1FDIiQuO6666wTPLFjxw799a9/tc4AoubAgQOhfdR17dq11aZNG+sMRAgDIgTS0tLUsWNH6wxP3HfffSooKLDOAKJq8eLFGjdunHWGJ66//nrrBEQIAyIErr322lA+OGrGjBn64IMPrDMAEw8//LD27NljnRFx7du3V40aNawzEAHh+60Tg/r06WOdEHEFBQW6++67rTMAM7t379bDDz9sneGJ3r17WycgAhgQAXf++efrpJNOss6IuCFDhoT+OwKAoxk7dqyWL19unRFxV1xxhXUCIoABEXC9evWyToi4rVu36sUXX7TOAHzhzjvvtE6IuJNPPlnNmjWzzkAJMSACLDExMZQ3T953330qLCy0zgB8YdWqVRo7dqx1RsT17NnTOgElxIAIsEsuuUQnnHCCdUZEzZ8/X9OnT7fOAHzlkUceCd2nkbp27ar4+HjrDJQAAyLAwngj0r333mudAPjOrl279MILL1hnRFRSUlIoz6DGEgZEQFWvXl0ZGRnWGRE1adIkbdiwwToD8KWXX35ZP/74o3VGRHEZI9gYEAHVpUsX64SIKioq0lNPPWWdAfhWXl6eXnrpJeuMiGrXrh1fsBVgDIiACtupvwkTJnD2ATiKYcOGheosRHx8vDp06GCdgePEgAig1NRUnXvuudYZEfXMM89YJwC+V1BQELp7IcL2h6FYwoAIoLD9wE2ePDm03z4IRNqIESO0b98+64yIadeuncqUKWOdgePAgAigzp07WydE1ODBg60TgMDIz8/X66+/bp0RMYmJibrgggusM3AcGBABc+KJJ4bq0xdz587V2rVrrTOAQHnppZd08OBB64yICdtZ1VjBgAiYjh07ynEc64yIef75560TgMDJyckJ1dd9X3TRRdYJOA4MiIAJ06m+NWvWaNGiRdYZQCC9+uqr1gkRk5SUpObNm1tnoJgYEAGTmZlpnRAxI0eOtE4AAmvNmjVatmyZdUbEhOm9LVYwIAKkcePGKl++vHVGRBw4cEDvvPOOdQYQaKNGjbJOiJjWrVtbJ6CYGBABEqYfsAkTJigvL886Awi09957T/n5+dYZEdGkSRMlJiZaZ6AYGBABEqYBEaaPoQFWDh06FJqv+o6Li1OrVq2sM1AMDIiAKFWqVGhuMtq0aZNWrlxpnQGEQpguBYbpD0mxgAEREC1btlR8fLx1RkSE5U9MgB+sWLEiNE9yZUAECwMiIMJy9kGSxowZY50AhMqECROsEyIiPT1dycnJ1hk4RgyIgGjSpIl1QkQsWbJEWVlZ1hlAqITpoVLnnXeedQKOEQMiIM4++2zrhIh47733rBOA0Nm0aZO++OIL64yICMt7XSxgQARAmE7rffDBB9YJQChNnTrVOiEiGBDBwYAIgLD8QC1fvlw7d+60zgBCKSwDomnTptYJOEYMiAAIy/0PH374oXUCEFpr1qzR5s2brTNKrHz58qpZs6Z1Bo4BAyIAwnIGIix3igN+FZZLhGH5Q1PYMSB8rkyZMjrzzDOtM0psw4YN2rZtm3UGEGozZsywToiIRo0aWSfgGDAgfK5evXrWCRGxcOFC6wQg9D799FPt37/fOqPETjvtNOsEHAMGhM/Vr1/fOiEiFixYYJ0AhF5RUVEovuI7LO97YceA8Lmw/CDNmTPHOgGICWE425eWlsY3cwYAA8LnwjAgVq9erdzcXOsMICaEYUBIUsOGDa0TcBQMCJ8Lw4BYtGiRdQIQMz777DPrhIgIy/1fYcaA8LGEhATVqlXLOqPE+OpuILpWrFhhnVBiDRo0sE7AUTAgfCwsp/CWL19unQDElDAMiDCcfQ07BoSPnXLKKdYJJZabm6sNGzZYZwAxJQxn/erUqWOdgKNgQPhYjRo1rBNKjLMPQPSF4QxE1apVrRNwFAwIH6tevbp1QomF5SuGgSBZv369CgoKrDNKJCEhgRHhcwwIHwvDGYh169ZZJwAxKQw/e2H4Q1SYMSB8LAw/PGF4EwOCaP369dYJJRaG98AwY0D4WBh+eNasWWOdAMSkMIz3MLwHhhkDwqdSUlIC/yjXbdu2Bf46LBBUnIGA1xgQPhWGH5wwvIEBQRWGn79q1apZJ+ATF3NZAAAgAElEQVR3MCB8qlKlStYJJfb9999bJwAx67vvvrNOKLEwvA+GGQPCpypWrGidUGJbtmyxTgBi1v79+/Xjjz9aZ5RIhQoVrBPwOxgQPhWGHxwGBGBr69at1gklEob3wTBjQPhUGE7dMSAAW0H/GTzxxBOtE/A7GBA+FYblHfQ3LyDogn4GIi4ujhHhYwwInwrDPRC7du2yTgBi2u7du60TSiwM74VhxYDwqaCfgXBdl2dAAMaCfhOlFPz3wjBjQPhUUlKSdUKJbN++3ToBiHlhOANRvnx56wQcAQPCp1zXtU4okT179lgnADEvDGcgypUrZ52AI2BA+FRhYaF1QomE4U8+QNCF4eewbNmy1gk4AgaETxUVFVknlEjQz6AAYRCGMxDJycnWCTgCBoRPBf0MRHx8vHUCEPPCcCkx6PeDhRkDwqeCPiASEhKsE4CYF4YBwRkI/2JA+FTQL2HExfGvFmDt4MGDgf84NWcg/It3eZ/iDASASAj6fRCcgfAvBoRPHThwwDqhREqXLm2dAEBSbm6udUKJlClTxjoBR8CA8KlDhw5ZJ5QIAwLwh6D/LAb9vTDMGBA+dfDgQeuEEgn6mxYQFqVKlbJOKJGgvxeGGQPCp4L+Q8OAAPwh6JcAgv5eGGYMCJ8K+mm7oP+pBwiLoP8s7t+/3zoBR8CA8Kmg30QZ9DctICyC/rMY9PfCMGNA+FTQz0Dw/HrAXkJCghITE60zSiTo74VhxoDwqTD80KSkpFgnADEtDD+DnIHwLwaET4Xhh6ZChQrWCUBMq1ixonVCiYXhvTCsGBA+FYZn2IfhzQsIskqVKlknlNi+ffusE3AEDAif2r17t3VCiTEgAFth+BncuXOndQKOgAHhU7t27bJOKLEw/OkHCLIqVapYJ5QYA8K/GBA+FYYzEFWrVrVOAGJa9erVrRNKLCcnxzoBR8CA8KkwDIgaNWpYJwAxLQw/gz/88IN1Ao6AAeFTO3bssE4osTC8eQFBFvSfwby8PBUWFlpn4AgYED4W9LuPg/7mBQRd0C9hcPnC3xgQPhb0H57atWtbJwAxq2zZsjrppJOsM0qEGyj9jQHhY2G49letWjXrBCAm1a9f3zqhxMJwKTfMGBA+tnnzZuuEEmvQoIF1AhCTwjAgNm3aZJ2A38GA8LHvv//eOqHETjvtNOsEICaFYbxv3LjROgG/gwHhY2E4A3H66adbJwAxKQxnIL777jvrBPwOBoSPhWFAcAYCsHHGGWdYJ5QYZyD8jQHhY2EYEOnp6UpISLDOAGJKtWrVAv8JjMLCwlBcxg0zBoSPbd68WYcPH7bOKJG4uLhQ/EkICJJzzz3XOqHENm/eLNd1rTPwOxgQPrd161brhBILw5sZECTnnHOOdUKJffvtt9YJOAoGhM+tX7/eOqHEzjvvPOsEIKY0bdrUOqHE+Ain/zEgfG7VqlXWCSXGgACiJzExUY0bN7bOKLG1a9daJ+AoGBA+t3r1auuEEktNTeWJlECUZGRkWCdExJdffmmdgKNgQPhcGM5ASJyFAKIlMzPTOiEiwvLeF2YMCJ9bvXq1ioqKrDNK7Pzzz7dOAGJCmzZtrBNKbN26dSooKLDOwFEwIAJg3bp11gkldsEFF1gnAKFXqVKlUDzC+quvvrJOwDFgQATAN998Y51QYieddFIoHq0L+Fm7du2sEyKCAREMDIgA+Prrr60TIiIMp1YBP/vDH/5gnRARX3zxhXUCjgEDIgBWrlxpnRARDAjAOwkJCWrfvr11RkSE5T0v7BgQAbB8+XLrhIho06aNkpOTrTOAUGrTpo0SExOtM0psy5Yt2rdvn3UGjgEDIgDy8/NDcxnj4osvtk4AQiksP1uLFi2yTsAxYkAExJIlS6wTIqJLly7WCUAodejQwTohIhYuXGidgGPEgAiIZcuWWSdExPnnn6+yZctaZwCh0rZtW6WkpFhnRMSsWbOsE3CMGBABsXTpUuuEiChdujRnIYAI69Gjh3VCRGzatEk5OTnWGThGDIiA+O6770Lzg9WtWzfrBCA0EhMT1bFjR+uMiJg/f751AoqBAREgn332mXVCRJx//vmqWbOmdQYQChdffHEoPn0hcf9D0DAgAmTevHnWCRHTt29f6wQgFLKysvTDDz9YZ0QEAyJYGBABEqabi6644grrBCAUFi1apIyMDA0ZMsQ6pUTWrFmjHTt2WGegGBgQAbJ58+ZQfLGWJKWkpOiSSy6xzgBC4cCBA3rqqafUpEkTTZkyxTrnuMyYMcM6AcXEgAiYmTNnWidEzLXXXmudAITKDz/8oH79+qlnz57auHGjdU6xTJ061ToBxcSACJgwXcbIyMgIxVcPA36zYMECZWZm6qGHHlJubq51zlHt2rUrNI/sjyUMiIBZtGiR8vPzrTMi5rbbbrNOAEKpsLBQw4YNU/PmzTV27Fi5rmuddEQfffSRdQKOAwMiYFzX1Zw5c6wzIqZz585KTU21zgBCa9euXfrTn/6kDh06+PY7daZNm2adgOPAgAig6dOnWydETFxcnG6++WbrDCD0vvzyS7Vv31633Xabdu3aZZ3zK2H6iHosYUAE0IcffmidEFFXXXWVKlWqZJ0BxIS3335bzZs317Bhw6xTJP375sn9+/dbZ+A4MCACKDc3N1SfxkhMTNSAAQOsM4CYkZubq4ceekiZmZnmD2/i/ofgYkAE1KRJk6wTIuq6665TuXLlrDOAmLJ+/XpddtlluuGGG7Rly5aoH//QoUOhey+LJQyIgJoyZYoOHjxonRExSUlJGjhwoHUGEJM++OADtWrVSs8880xULydMnz5dBQUFUTseIosBEVD5+fn6+OOPrTMi6vrrr+csBGDkwIEDGjx4sDIzM6P2UKf33nsvKseBNxgQAfb+++9bJ0RUUlKSbr31VusMIKZt2bJF1113nXr16uXp0yz37t0buhvCYw0DIsCmT58euruXb775Zr7qG/CB+fPnq0WLFrr//vs9eZrl5MmTI/6aiC4GRIDl5+eHcsE/9NBD1gkAfjJixAhlZGRo3LhxEX2aJZcvgo8BEXBjxoyxToi4jh07qnnz5tYZAH6Sk5OjW2+9NWJPs9y5c6cWLVoUgTJYYkAE3IIFC7R161brjIh7/PHHrRMA/Jf/PM3y7rvv1p49e477dd5+++0IVsEKAyIEwngW4rTTTtMNN9xgnQHgN7zxxhs677zzNGLECBUWFhbrv+u6rv71r395VIZocrx64bS0NP9+9VvIVKlSRStXrpTjePY/p4mCggK1bt3a5AE3AI7NqaeeqmeffVbnnXfeMf3zs2bN0lVXXeVxFX4pKyvLk18OnIEIge3bt4fyy2gSExP1/PPPW2cA+B0bNmzQpZdeqv79+x/T5dTXXnstClWIBgZESITxMoYkZWRkqE+fPtYZAI5i8uTJatmypYYMGaIDBw785j+zdetWzZo1K8pl8AoDIiQmTpyonJwc6wxPPPzww6patap1BoCjOHDggJ566illZmb+5kfMR4wYYVAFrzAgQmT48OHWCZ5ITk7WP//5T+sMAMdo8+bNuv7663XZZZfp22+/lfTvcfHWW28ZlyGS4r164eTk5Ie9em38ttWrV+v6669XqVKlrFMirkaNGtq7d6+WL19unQLgGG3evFn/+te/lJ+fr82bN2vKlCnWSTFp3759f/XidfkURsg88sgjof3448GDB9WuXTtt2LDBOgUAAoNPYeCYvPDCCzp8+LB1hidKly6tYcOGKSEhwToFAGIeAyJksrOzNWnSJOsMz5x++ul69NFHrTMAIOYxIEJo6NCh1gmeuvbaa9W1a1frDACIaQyIEFq9erVmzpxpneGpIUOGqGHDhtYZABCzGBAh9eSTT1oneOqEE07QyJEjlZycbJ0CHJdzzjlHM2bM0Nlnn22dAhwXBkRIff3115o2bZp1hqeqV6+ukSNHWmcAxVarVi2NGjVKZ5xxhj788EO98MILqlKlinUWUCwMiBAbPHiwXDfcn6Zt2bKlXn75ZesM4JglJSXprbfeUsWKFX/+e927d9eiRYt088038ykjBAYPkgqxHTt26LTTTlN6erp1iqcaNGigMmXKaP78+dYpwO9yHEdvv/22zjrrrP/5/5UuXVqtW7dWjx499M0332jz5s0GhQgjrx4kxRmIkHv66aetE6Ji0KBBuuaaa6wzgN/11FNPKSMj43f/mVq1amn8+PEaPXq0atasGaUyoPg4AxFyOTk5qlevnho0aGCd4rn27dvrm2++0bp166xTgP9x9913q3///sf8z9epU0c33HCDSpUqpWXLloX2AXHwHo+yxnE75ZRTtGjRIuuMqOndu7fmzZtnnQH87KabbtIDDzxw3P/9bdu26W9/+5vee++9CFYhVvAoaxy3jRs3atiwYdYZUTNy5Eg1atTIOgOQJF155ZUlGg+SdPLJJ+uFF17QxIkTdeqpp0aoDCgZzkDEiKSkJC1dulQVKlSwTomKH3/8UZdcconWrl1rnYIY1qVLF73yyitynMi91R4+fFgjR47Uk08+qby8vIi9LsKLMxAokby8PD3xxBPWGVFz4okn6t133w39J1DgX926ddOwYcMiOh4kKSEhQf369dOnn36qK664IqKvDRQHZyBiiOM4mjNnTkz9Ut2zZ4969OihVatWWacghvTu3VtDhgyJ+Hj4LV9//bVuu+02ffnll54fC8HEGQiUmOu6uvvuu60zoqpChQp6//33dc4551inIEb069dPzz33XFTGgyQ1bNhQH330kYYMGaJKlSpF5ZiAxICIOZ988knoH3H938qVK6d33nnnqJ+/B0rqvvvuM/m6ecdxdPnll2vx4sW64YYbFBfHWzu8xyWMGFS9enUtWbLEOsPEgAEDNHHiROsMhNDf//53XX311dYZkqT169frnnvu0cKFC61T4ANeXcLgQVIxaO/evTpw4IBat25tnRJ1nTt3VmFhoT755BPrFIREYmKi3nzzTV1yySXWKT+rVKmSevXqpfr162vp0qXat2+fdRIM8SApRFR8fLzmzJmjunXrWqeYeP/99zVw4EAVFhZapyDAqlatqrFjx6pevXrWKUdUUFCgoUOH6oUXXtDBgwetc2CAmygRUYWFhbrtttusM8x07dpV48eP/9U3IgLFcc4552jWrFm+Hg/Sv8+Q3HXXXVq4cKE6duxonYMQYUDEsKVLl+qtt96yzjDTvHlzzZw5Mya+JwSR1bNnT33wwQeBGqDVq1fXiBEj9Pbbb+uUU06xzkEIcAkjxpUrV06LFy9WSkqKdYqZgoICDRgwQNOnT7dOgc+VLl1aTz75ZOAf4HTo0CENHz5cgwcPVkFBgXUOPMZNlPDEwYMHtX379pg+tVmqVCl169ZNRUVF3FyJI6pdu7bGjx+vtm3bWqeUWHx8vJo2baorrrhCO3fu5EFrIcdNlPDUqFGj1L59e+sMc4sWLdKNN96o7du3W6fARzp16qTnn39eZcuWtU7xxPLly3XHHXfom2++sU6BB7iJEp66+eabtW3bNusMcy1atND8+fPVq1cv6xT4QGJiop5++mm9+uqroR0PktSkSRPNnj1bf//732PmC/dQcpyBwM+aNWumCRMmRO0RvH43a9Ys3XLLLdq1a5d1Cgyce+65evnll1WtWjXrlKjavXu3nnrqKb3++utyXd7Gw4AzEPDcp59+qn/84x/WGb5xwQUXaP78+erWrZt1CqKoTJkyevTRRzVp0qSYGw+SVLFiRT3xxBP6+OOP1bhxY+sc+BhnIPA/Jk+erHPPPdc6w1dmzZqlP//5z8rOzrZOgYcaN26sF198kY85/sLEiRM1YMAA6wyUAGcgEDX9+/fn0bf/5YILLtC8efMC//E9/Lby5ctr8ODB+vDDDxkP/4VLeDgSzkDgN11wwQUaPXq0dYYvccd6uPTp00f33XcfX4X9G5YtW6YuXbpwL0TA8RwIRNXGjRtVqlQpNW/e3DrFd6pWraq+ffuqatWqWrZsGQ/iCagGDRrojTfe0DXXXKPExETrHN/ZuXOnunbtqvz8fOsUlBDPgYCJN998U+3atbPO8K29e/fqqaee0ogRI6xTcIxOPfVU3Xnnnbr00kutU3ytS5cuWrp0qXUGIsCrMxAMCPyu5ORkzZgxQ7Vr17ZO8bUtW7bo2Wef1bhx4/iGT5869dRTddddd6lz586Ki+P2r99z7733auTIkdYZiBAGBMykp6dr2rRpnOY9Bps2bdLgwYM1fvx46xT8JD09XXfeeac6d+5snRII48aN06233mqdgQhiQMBUx44dOU1fDBs2bNArr7yiUaNGWafErEaNGum2225Thw4drFMC48svv1SXLl104MAB6xREEAMC5u666y7ddttt1hmBsnPnTv3rX//SyJEjtXv3buucmNCiRQvdeuutat26tXVKoGRlZalDhw58D0wIMSDgC8OHD+dU8HF6/fXXNXLkSK1evdo6JZS6du2qG264QU2aNLFOCZy8vDx16tRJa9assU6BBxgQ8IVSpUpp0qRJPOK2BD7//HO99dZbevfdd5WXl2edE2gNGjRQnz591L17d57jcJwOHz6s7t27a8mSJdYp8AgDAr5RqVIlTZ8+PSa/JyCS9u/fr4kTJ2rChAmaO3eudU5gVKhQQV27dtWVV16pM8880zon8AYNGsRNvyHHgICv1K1bVx999FGov+I4mnbt2qVp06Zp0qRJmj9/voqKiqyTfKVChQrq3LmzunTpohYtWighIcE6KRSeeuopDRkyxDoDHmNAwHfat2/Ppww88OOPP2r27NmaOnWq5s+frz179lgnmahRo4Zat26tSy+9VJmZmdY5oTNmzBjdfvvt1hmIAgYEfOmKK67Qs88+a50RasuXL9e8efM0b948LV682DrHM+np6WratKmaN2+uzMxMpaamWieF1scff6wrr7zSOgNRwoCAb1199dX6+9//bp0RM5YtW6bPPvtMy5Yt0yeffKKcnBzrpONy5plnqmnTpmrZsqUyMjJUsWJF66SYsHTpUvXq1YvvcIkhDAj4Wr9+/fToo49aZ8SkrKwsff3111q9erVWrVqlNWvW6Ouvv7bO+pWaNWuqRo0aatq06c9nGbh/Jvq++OILde/enU//xBgGBHzv5ptv1v3332+dgZ98//332rRpkzZt2qTvvvtO33//vbZu3aqdO3fq+++/j9hxTjrpJFWrVk3VqlXTySefrLS0NNWsWfPnv8elCH/4+uuv1a1bN+Xm5lqnIMoYEAiE22+/XXfeead1Bo5BQUGBdu7cqaysLB0+fLhY/13HcZSWlsaXrAXE2rVr1a1bN+3atcs6BQYYEAiMe+65hy/jAXxi48aN6tKlS2DvlUHJeTUg4r14UUlKTk5+2KvXhr8tWLBAjuOoRYsW1ilATNu6dau6du3K91vEuH379v3Vi9dlQMATixYt0qFDh/j8PmAkKytLXbt21datW61TYMyrARHnxYsCkvT888/rr3/15N9bAL9j/fr1uvjii7V582brFIQYAwKeevnll3XvvfdaZwAxY+XKlbr44ouVlZVlnYKQY0DAcyNHjmREAFEwb948XXrppdq3b591CmIAAwJRMXLkSP3f//2fDh48aJ0ChNLkyZN1+eWX8zOGqGFAIGomTZqkSy+9NGa/HArwyosvvqj+/fvLdfn0PKKHAYGoWrlypf7whz9ow4YN1ilAKNx99908Rh4mGBCIus2bN+uiiy7Sp59+ap0CBFZ+fr6uuuoqvfHGG9YpiFEMCJjYt2+fevTooXHjxlmnAIGzfv16XXjhhZo1a5Z1CmIYAwJmCgsLdeutt+qBBx4o9ncxALFqxowZ+sMf/qBvv/3WOgUxjgEBc6+++qq6dOnC43aB31FUVKSnn35aV199tQoKCqxzAAYE/GHlypVq27atlixZYp0C+E5ubq6uvPJKPfvss9YpwM8YEPCNXbt26ZJLLtFLL71knQL4xtq1a3XhhRdq7ty51inArzAg4DuPPPKIrr/+ep6mh5j32muv6fzzz9emTZusU4D/4cl3hEtSWloaTzRBiVSrVk2vvvqqGjdubJ0CRNWePXs0cOBAPmWBiMjKyvLkdz1nIOBbW7duVadOnfTMM8+osLDQOgeIik8//VStW7dmPMD3GBDwtaKiIg0ePFidOnXSli1brHMAzxQWFmrw4MHq1q2bduzYYZ0DHBUDAoHw+eef6/zzz9f48eOtU4CI27p1q7p06aJnnnmG77NAYDAgEBj5+fkaNGiQ+vfvr127dlnnABHx5ptvql27dlqxYoV1ClAsDAgEzuTJk9WiRQu988471inAcdu0aZMuvfRS3XHHHdq7d691DlBsDAgE0o8//qhbbrlFvXv31rZt26xzgGN26NAhPffcc2rdurU+++wz6xzguDEgEGjz5s1Tq1atNHLkSK4dw/dWrlypdu3a6e9//7sOHjxonQOUCM+BQGicd955euaZZ1S3bl3rFOBX8vLy9Nhjj2nkyJHWKYhBPAcCOIrPPvtMmZmZevDBB5WXl2edA0iSxo4dq5YtWzIeEDqcgUAoVapUSQ8++KB69eolx/HsX3PgiBYvXqx77rlHa9eutU5BjPPqDAQDAqF25plnasiQIWrYsKF1CmLEqlWr9Oijj2rOnDnWKYAkBgRQIn379tXtt9+utLQ06xSEVHZ2tp544gmNHTvWOgX4FQYEEAHXXHON/vSnPzEkEDH79u3T0KFD9corr+jAgQPWOcD/YEAAEVK6dGn16dNHt9xyC0MCx23v3r0aPny4hg0bxoOg4GsMCCDCSpcurb59+2rQoEFKTU21zkFA5Obmavjw4XrllVcYDggEBgTgkVKlSqlnz54aMGCA6tWrZ50Dn8rNzdWrr76ql19+meGAQGFAAFHQvn173XTTTcrIyLBOgU/k5uZqxIgReumllxgOCCQGBBBFZ5xxhm655RZ17NhR8fHx1jkw8PXXX2v06NF65513eDAZAo0BARioUaOGrrzySvXq1Usnn3yydQ48tn//fr333nt68803tXz5cuscICIYEICxzMxM9e7dWx07dlRiYqJ1DiJo1apVGjVqFGcbEEoMCMAnkpKS1L17d/Xq1UvnnnuudQ6O0549e/T+++9r/PjxWrZsmXUO4BkGBOBDNWrUUO/evdWzZ0/VrFnTOgdHkZOTo6lTp2rSpElauHChioqKrJMAzzEgAJ9r1qyZevbsqS5duqh8+fLWOfjJf0bD5MmTtWDBAkYDYg4DAgiQHj16qFu3bmrRogX3SxjYtm2bpk+frmnTpmnu3LnWOYApBgQQQAkJCTr33HPVqlUrZWZm6uyzz1apUqWss0LHdV2tXLlSM2bM0IwZM/TVV19ZJwG+wYAAQiAxMVEZGRnKzMxUy5YtdeaZZ1onBVZBQYHmzp2rqVOnatasWcrJybFOAnyJAQGEUIUKFZSRkaGWLVsqMzNT6enp1km+tXPnTi1fvlwrVqzQ0qVLtWDBAuskIBAYEEAMSElJUYsWLdS6dWudffbZatiwoXWSif3792vFihVauXKlli5dqi+++EJbtmyxzgICiQEBxKiaNWuqbt26qlevnurVq6e6deuqbt26SklJsU6LiNWrV2vdunVat26dNmzYoLVr13IPAxBBDAgAv5KYmKhTTjlFVatWVe3atVWjRg3VqFHj5/+7YsWK1omS/n3pYdeuXdqxY4e+++47rV+/XmvWrNG3336rTZs2WecBoceAAFBsNWrUUOXKlVWlShVVrlz5V39VrFhRjvP7bwGFhYU6cOCADh06pIMHD/7PX4cOHdL+/fuVm5urXbt2/eqv3bt38+2VgA8wIAAAQLF5NSDivHhRAAAQbgwIAABQbAwIAABQbAwIAABQbAwIAABQbAwIAABQbAwIAABQbAwIAABQbAwIAABQbAwIAABQbAwIAABQbAwIAABQbAwIAABQbAwIAABQbAwIAABQbAwIAABQbAwIAABQbAwIAABQbAwIAABQbF4OiAMevjYAADg6z34XezYgXNfd79VrAwCAo3Ndd49Xr+3lGQgGBAAAhhzH8ex3sWcDwnEcz1YPAAA4JsEbEF6eNgEAAEcXyEsYXp42AQAAR+fl1QAv74H4zsPXBgAAR5fl1QszIAAACK/vvHphL++BWO3VawMAgKPz8nexZwOiqKiIAQEAgCEvfxd7NiAOHTr0nVevDQAAfp/ruoVxcXHrvHp9zwbEnj179rium+3V6wMAgCNzHGdLdnZ2nlev7/WXaX3i8esDAIDf4LruSi9f3+sBMcfj1wcAAL9tjpcv7umAKCoqmuPl6wMAgN/m9e9gx8sXl+SkpaXtlFTJ4+MAAICfuK67Jzs7u6KXx/D6Eobruu58j48BAAB+ba7XB/B6QEjcBwEAQLTN8foA0RgQE13XdaNwHAAAYp7ruq7jOO97fRzPB0R2dvZGx3HmeX0cAAAgOY4zLysr6zuvjxONMxCSNDJKxwEAINaNjMZBojIgXNd9x3XdfdE4FgAAscp13by4uLhx0ThWVAZEdnZ2nuM470bjWAAAxCrHccZv27YtPxrHitYlDBUWFr4drWMBABCjRkbrQF4/SOpXUlNTP3Ecp1k0jwkAQIyYm5WV1SZaB4vaGQhJcl33yWgeDwCAWFFYWBjV37FRPQMhSWlpaUsknRvt4wIAEGLLs7KyzonmAaN6BkKSXNd9JtrHBAAgzFzXfTrax4z6GQhJ8WlpaaskpRscGwCAUHFdd112dvZpkgqjedyon4GQVOi67kMGxwUAIIweVJTHg2RzBkKSlJqaOtNxnAusjg8AQNC5rvtxdnZ2O4tjW5yBkCQVFhbeLOmA1fEBAAi4A4WFhQOsDh5vdeD8/PycpKSkZMdxWlk1AAAQYH/bvn272VOezS5hSFLlypWT4+PjV0mqYdkBAEDAbM7Kyqor6aBVgNklDGGJyn4AAAQRSURBVEnasWPHPtd1r3Vdt8iyAwCAoPjpd2ZfGY4HyfASxn/k5eVtLFeuXJykNtYtAAD4neM4j2RlZb1u3mEd8BMnNTV1Bp/KAADgd83JyspqJ8m1DjG9hPELruu6fVzXzbIOAQDAj1zXzXZdt7d8MB4k/wwIbd++PVtSH+6HAADg11zXLXIcp3d2dvZ265b/ML8H4pfy8vI2Jicn73Uc5yLrFgAAfOT27OzssdYRv+SrASFJeXl5nyQlJVV0HKe5dQsAANZc1/1Hdnb2w9Yd/80vN1H+Nyc1NfVdx3G6WYcAAGDFdd1J2dnZXeWT+x5+ya8DQpJOSE1N/ZgzEQCAWOS67mfZ2dmt5dOvffDNTZS/YX9+fn5n13XXW4cAABBNrutuKCgouFg+HQ+SvweEcnNzc+Lj4xu5rvuBdQsAAFEyNTs7+8y9e/fusg75PX6+hPFL8ampqaMdx7ncOgQAAK+4rvuv7OzsGyT5/pEGvvsUxhG4eXl57yYnJydLamEdAwBApLmu+1x2dvZN8uENk78lKANCkrRv374ZycnJ30nqIKmUcQ4AAJGwv6io6Nrt27c/bR1SHEG5hPErqampZ0h6z3GcetYtAAAcL9d1NziOc0lWVtYq65bi8vVNlEeSnZ39VVFRURNJI61bAAA4Hq7rjpbUKIjjQQroGYhfSktLu0bSS5ISrVsAADgG+4uKivpt3779TeuQkgjkGYhfysrKet113YaSplm3AABwFNNc1z096ONBCsEZiF+qUqVKB8dxXnQcp451CwAA/+G67reu6960ffv2j6xbIiVUA+InZVJTU+9wHOc+SWWtYwAAMS3fdd0nsrOzn5aPnyp5PMI4ICRJ5cqVOykxMfFGx3FudBynqnUPACCmfO+67kv5+fmv5ubm7rSO8UJoB8QvlKpcufKl8fHxt0jKtI4BAITafEn/zMrKeldSoXWMl2JhQPwsNTX1TMdxbpd0haQy1j0AgFDId133TUlDs7Ozv7SOiZaYGhC/EJeamtpWUh9JPRzHKW8dBAAIDtd19zqO815RUdFb27dvn6UAfHdFpMXqgPilE1JTU1tKutBxnPau657tOE7gP94KAIgc13ULJS2VNNNxnJlZWVmLJB00zjLFgPgv5cuXr1SmTJl2cXFxFzqO00RSHUmVrLsAAFG1S9K3kj4rKiqaeejQodm7d+/+0TrKTxgQx6BSpUrlExISTpF0iuM4tSWl/fTJjso//VXlp//kaZgA4G8FknZI2v7Tf+5wXfcHSVmu634naePhw4c37tq1a69hIwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACE0P8DU+fwQJkM0eMAAAAASUVORK5CYII=", uerInfo: "", //用户信息
            versionShow: false, //新版本下载弹出
            version: "", //版本号
            vDownUrl: "", //最新版下载地址
            loginOutShow: false //登陆退出确认框
          };}, mounted: function mounted() {var _this = this;(0, _login.getisLogin)(); //检测登陆状态
          this.uerInfo = this.$store.getters.getUserData;if (this.uerInfo != "") {this.login = true;}plus.runtime.getProperty(plus.runtime.appid, function (inf) {_this.version = inf.version; //赋值版本号
            //console.log("当前应用版本："+inf.version);  
          });}, methods: { goLogin: function goLogin() {//登陆
            if (!this.login) {console.log("点击前往登录", " at pages\\mine\\mine.vue:152");uni.navigateTo({ url: './mine/children/login', animationType: 'pop-in', animationDuration: 200 });}}, loginOut: function loginOut() {//退出登陆
            var _this = this;if (_this.loginOutShow) {_this.$store.dispatch("setUserData", ""); //清空登陆状态
              try {uni.removeStorageSync('setUserData'); //清空登陆缓存
              } catch (e) {// error
              }(0, _login.getisLogin)(); //检测登陆状态
              console.log("退出登录", " at pages\\mine\\mine.vue:171");_this.loginOutShow = false;} else {_this.loginOutShow = true;}}, loginOutHide: function loginOutHide() {//退出登陆取消
            this.loginOutShow = false; //版本下载取消
            this.versionShow = false;}, getVersionData: function getVersionData() {var _this = this; //检查版本 用以升级
            uni.showLoading({ title: '检测更新...' });(0, _version.getVersion)().then(function (res) {//console.log(res)
              if (_this.version < res.data.version) {_this.vDownUrl = res.data.url; //赋值下载地址
                _this.versionShow = true; //弹窗
                uni.showToast({ position: 'bottom', title: "有新版本" });uni.hideLoading();} else {uni.hideLoading();uni.showToast({ position: 'bottom', title: "无新版本可更新！" });}}).catch(function (err) {uni.hideLoading();uni.showToast({ position: 'bottom', title: "检测失败！" });});}, isDownload: function isDownload() {var _this = this;_this.loginOutHide(); //下载更新包 整包下载（浪费 不推荐）
            console.log(_this.vDownUrl, " at pages\\mine\\mine.vue:220");var wgtUrl = _this.vDownUrl;var downToak = plus.downloader.createDownload(wgtUrl, { filename: "_doc/update/" }, function (d, status) {if (status == 200) {console.log("下载App成功：" + d.filename, " at pages\\mine\\mine.vue:225");plus.nativeUI.showWaiting("安装中...");plus.runtime.install(d.filename, {}, function () {plus.nativeUI.closeWaiting();console.log("安装成功！", " at pages\\mine\\mine.vue:229");plus.nativeUI.alert("应用资源更新完成！", function () {plus.runtime.restart();});}, function (e) {plus.nativeUI.closeWaiting();console.log("安装失败[" + e.code + "]：" + e.message, " at pages\\mine\\mine.vue:235");plus.nativeUI.alert("安装失败[" + e.code + "]：" + e.message);});} else {console.log("下载App失败！", " at pages\\mine\\mine.vue:239");plus.nativeUI.alert("下载App失败！");}plus.nativeUI.closeWaiting();});downToak.start(); // 开启下载的任务
            var prg = 0;var showLoading = plus.nativeUI.showWaiting("正在下载,由于是国外服务器,时间较长请勿关闭..."); //创建一个showWaiting对象 
            downToak.addEventListener("statechanged", function (task, status) {//给下载任务设置一个监听 并根据状态  做操作
              switch (task.state) {case 1:showLoading.setTitle("正在下载");break;case 2:showLoading.setTitle("已连接到服务器");break;
                case 3:
                  prg = parseInt(parseFloat(task.downloadedSize) / parseFloat(task.totalSize) * 100);
                  if (prg % 1 == 0) {// 让百分比 增长
                    showLoading.setTitle("　　 已下载" + prg + "%　　 ");
                  }
                  break;
                case 4:
                  plus.nativeUI.closeWaiting();
                  break;}



            });

          } } };exports.default = _default;
      /* WEBPACK VAR INJECTION */}).call(this, __webpack_require__( /*! ./node_modules/@dcloudio/uni-app-plus/dist/index.js */"./node_modules/@dcloudio/uni-app-plus/dist/index.js")["default"]);

    /***/},

  /***/"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/mine/mine.vue?vue&type=style&index=0&id=3628eae8&lang=less&scoped=true&":
  /*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-1!./node_modules/css-loader??ref--10-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!D:/Aproject/github/watch-test/pages/mine/mine.vue?vue&type=style&index=0&id=3628eae8&lang=less&scoped=true& ***!
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
  /*! no static exports found */
  /***/function node_modulesMiniCssExtractPluginDistLoaderJsNode_modulesDcloudioVueCliPluginUniPackagesWebpackPreprocessLoaderIndexJsNode_modulesCssLoaderIndexJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesPostcssLoaderSrcIndexJsNode_modulesLessLoaderDistCjsJsNode_modulesDcloudioVueCliPluginUniPackagesWebpackPreprocessLoaderIndexJsNode_modulesVueLoaderLibIndexJsAprojectGithubWatchTestPagesMineMineVueVueTypeStyleIndex0Id3628eae8LangLessScopedTrue(module, exports, __webpack_require__) {

    // extracted by mini-css-extract-plugin

    /***/},

  /***/"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/mine/mine.vue?vue&type=template&id=3628eae8&scoped=true&":
  /*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
                                                                                                                                                                                                                                                                                                                                                                           !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!D:/Aproject/github/watch-test/pages/mine/mine.vue?vue&type=template&id=3628eae8&scoped=true& ***!
                                                                                                                                                                                                                                                                                                                                                                           \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
  /*! exports provided: render, staticRenderFns */
  /***/function node_modulesVueLoaderLibLoadersTemplateLoaderJsNode_modulesDcloudioVueCliPluginUniPackagesWebpackPreprocessLoaderIndexJsNode_modulesDcloudioWebpackUniMpLoaderLibTemplateJsNode_modulesVueLoaderLibIndexJsAprojectGithubWatchTestPagesMineMineVueVueTypeTemplateId3628eae8ScopedTrue(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "render", function () {return render;});
    /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {return staticRenderFns;});
    var render = function render() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
    };
    var staticRenderFns = [];
    render._withStripped = true;



    /***/} }]);


;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
'pages/mine/mine-create-component',
{
  'pages/mine/mine-create-component': function pagesMineMineCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('./node_modules/@dcloudio/uni-app-plus/dist/index.js')['createComponent'](__webpack_require__("../../../../Aproject/github/watch-test/pages/mine/mine.vue"));
  } },

[['pages/mine/mine-create-component']]]);
});
require('pages/mine/mine.js');
__wxRoute = 'pages/motion/motion';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/motion/motion.js';

define('pages/motion/motion.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/motion/motion"], {

  /***/"../../../../Aproject/github/watch-test/pages/motion/motion.vue":
  /*!*************************************************************!*\
                                                                           !*** D:/Aproject/github/watch-test/pages/motion/motion.vue ***!
                                                                           \*************************************************************/
  /*! no static exports found */
  /***/function AprojectGithubWatchTestPagesMotionMotionVue(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */var _motion_vue_vue_type_template_id_2daf6e08_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./motion.vue?vue&type=template&id=2daf6e08&scoped=true& */"../../../../Aproject/github/watch-test/pages/motion/motion.vue?vue&type=template&id=2daf6e08&scoped=true&");
    /* harmony import */var _motion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./motion.vue?vue&type=script&lang=js& */"../../../../Aproject/github/watch-test/pages/motion/motion.vue?vue&type=script&lang=js&");
    /* harmony reexport (unknown) */for (var __WEBPACK_IMPORT_KEY__ in _motion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) {if (__WEBPACK_IMPORT_KEY__ !== 'default') (function (key) {__webpack_require__.d(__webpack_exports__, key, function () {return _motion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key];});})(__WEBPACK_IMPORT_KEY__);}
    /* harmony import */var _motion_vue_vue_type_style_index_0_id_2daf6e08_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./motion.vue?vue&type=style&index=0&id=2daf6e08&lang=less&scoped=true& */"../../../../Aproject/github/watch-test/pages/motion/motion.vue?vue&type=style&index=0&id=2daf6e08&lang=less&scoped=true&");
    /* harmony import */var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */"./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






    /* normalize component */

    var component = Object(_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
    _motion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
    _motion_vue_vue_type_template_id_2daf6e08_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
    _motion_vue_vue_type_template_id_2daf6e08_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
    false,
    null,
    "2daf6e08",
    null);



    /* hot reload */
    if (false) {var api;}
    component.options.__file = "Aproject/github/watch-test/pages/motion/motion.vue";
    /* harmony default export */__webpack_exports__["default"] = component.exports;

    /***/},

  /***/"../../../../Aproject/github/watch-test/pages/motion/motion.vue?vue&type=script&lang=js&":
  /*!**************************************************************************************!*\
                                                                                                    !*** D:/Aproject/github/watch-test/pages/motion/motion.vue?vue&type=script&lang=js& ***!
                                                                                                    \**************************************************************************************/
  /*! no static exports found */
  /***/function AprojectGithubWatchTestPagesMotionMotionVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_motion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./motion.vue?vue&type=script&lang=js& */"./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/motion/motion.vue?vue&type=script&lang=js&");
    /* harmony import */var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_motion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_motion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
    /* harmony reexport (unknown) */for (var __WEBPACK_IMPORT_KEY__ in _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_motion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) {if (__WEBPACK_IMPORT_KEY__ !== 'default') (function (key) {__webpack_require__.d(__webpack_exports__, key, function () {return _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_motion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key];});})(__WEBPACK_IMPORT_KEY__);}
    /* harmony default export */__webpack_exports__["default"] = _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_motion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a;

    /***/},

  /***/"../../../../Aproject/github/watch-test/pages/motion/motion.vue?vue&type=style&index=0&id=2daf6e08&lang=less&scoped=true&":
  /*!***********************************************************************************************************************!*\
                                                                                                                                     !*** D:/Aproject/github/watch-test/pages/motion/motion.vue?vue&type=style&index=0&id=2daf6e08&lang=less&scoped=true& ***!
                                                                                                                                     \***********************************************************************************************************************/
  /*! no static exports found */
  /***/function AprojectGithubWatchTestPagesMotionMotionVueVueTypeStyleIndex0Id2daf6e08LangLessScopedTrue(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_motion_vue_vue_type_style_index_0_id_2daf6e08_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-1!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--10-oneOf-1-2!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-1-3!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./motion.vue?vue&type=style&index=0&id=2daf6e08&lang=less&scoped=true& */"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/motion/motion.vue?vue&type=style&index=0&id=2daf6e08&lang=less&scoped=true&");
    /* harmony import */var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_motion_vue_vue_type_style_index_0_id_2daf6e08_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_motion_vue_vue_type_style_index_0_id_2daf6e08_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
    /* harmony reexport (unknown) */for (var __WEBPACK_IMPORT_KEY__ in _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_motion_vue_vue_type_style_index_0_id_2daf6e08_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) {if (__WEBPACK_IMPORT_KEY__ !== 'default') (function (key) {__webpack_require__.d(__webpack_exports__, key, function () {return _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_motion_vue_vue_type_style_index_0_id_2daf6e08_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key];});})(__WEBPACK_IMPORT_KEY__);}
    /* harmony default export */__webpack_exports__["default"] = _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_motion_vue_vue_type_style_index_0_id_2daf6e08_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a;

    /***/},

  /***/"../../../../Aproject/github/watch-test/pages/motion/motion.vue?vue&type=template&id=2daf6e08&scoped=true&":
  /*!********************************************************************************************************!*\
                                                                                                                      !*** D:/Aproject/github/watch-test/pages/motion/motion.vue?vue&type=template&id=2daf6e08&scoped=true& ***!
                                                                                                                      \********************************************************************************************************/
  /*! exports provided: render, staticRenderFns */
  /***/function AprojectGithubWatchTestPagesMotionMotionVueVueTypeTemplateId2daf6e08ScopedTrue(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_motion_vue_vue_type_template_id_2daf6e08_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./motion.vue?vue&type=template&id=2daf6e08&scoped=true& */"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/motion/motion.vue?vue&type=template&id=2daf6e08&scoped=true&");
    /* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__, "render", function () {return _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_motion_vue_vue_type_template_id_2daf6e08_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"];});

    /* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {return _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_motion_vue_vue_type_template_id_2daf6e08_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"];});



    /***/},

  /***/"./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/motion/motion.vue?vue&type=script&lang=js&":
  /*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
                                                                                                                                                                                                                                                                                                                                           !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!D:/Aproject/github/watch-test/pages/motion/motion.vue?vue&type=script&lang=js& ***!
                                                                                                                                                                                                                                                                                                                                           \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
  /*! no static exports found */
  /***/function node_modulesBabelLoaderLibIndexJsNode_modulesDcloudioVueCliPluginUniPackagesWebpackPreprocessLoaderIndexJsNode_modulesDcloudioWebpackUniMpLoaderLibScriptJsNode_modulesVueLoaderLibIndexJsAprojectGithubWatchTestPagesMotionMotionVueVueTypeScriptLangJs(module, exports, __webpack_require__) {

    "use strict";
    /* WEBPACK VAR INJECTION */(function (uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;










































































































































































      var _motion = __webpack_require__( /*! ../../service/api/motion.js */"../../../../Aproject/github/watch-test/service/api/motion.js");




      var _login = __webpack_require__( /*! ../../service/api/login.js */"../../../../Aproject/github/watch-test/service/api/login.js"); //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      var _this; //登陆api
      //通知数据
      var notice = { contentmain: "请连接蓝牙进行操作", content: { 0: '请连接蓝牙设备和打开位置服务进行操作', 1: '坚持运动' } };var _default = { data: function data() {return { //通知
            notice: notice, //计划完成度
            goalC: '', //运动数据
            ydList: '', //健康数据
            jkList: '', //健康数据切换
            TabCur: 'sleep' };}, mounted: function mounted() {_this = this;(0, _login.getisLogin)(); //是否登陆
          _this.getData(); //获取数据
        }, methods: { getData: function getData() {//获取数据
            var goalcData = _this.$store.getters.getGoalcData; //计划完成度数据
            var ydData = _this.$store.getters.getYdData; //运动数据
            var jkData = _this.$store.getters.getJkData; //健康数据
            if (goalcData != "") {_this.goalC = goalcData;} else {//获取数据计划完成度
              (0, _motion.getGoalc)().then(function (res) {//console.log(res)
                _this.goalC = res.data;_this.$store.dispatch('setGoalcData', res.data);}).catch(function (err) {});}if (ydData != "") {_this.ydList = ydData;} else {//获取运动数据
              (0, _motion.getYdList)().then(function (res) {//console.log(res)
                _this.ydList = res.data;_this.$store.dispatch('setYdData', res.data);}).catch(function (err) {});}if (jkData != "") {_this.jkList = jkData;} else {//获取健康数据
              (0, _motion.getJkList)().then(function (res) {//console.log(res)
                _this.jkList = res.data;_this.$store.dispatch('setJkData', res.data);}).catch(function (err) {});}}, noticeClose: function noticeClose(e) {//关闭通知
            this.notice.contentmain = "";}, noticeRun: function noticeRun(index) {/**
                                                                                   * 通知轮询
                                                                                   * @param {index} 通知内容下标  
                                                                                   */}, tabSelect: function tabSelect(e) {//健康切换
            this.TabCur = e.currentTarget.dataset.id;}, ydToUrl: function ydToUrl(e) {//运动
            var item = this.ydList[e];var datas = JSON.stringify({ 'title': item.title, 'bgcolor': item.bgcolor, 'title_total_0': item.title_total_0, 'content_total_0': item.content_total_0, 'title_total_1': item.title_total_1, 'content_total_1': item.content_total_1, 'title_total_2': item.title_total_2, 'content_total_2': item.content_total_2 });console.log(datas, " at pages\\motion\\motion.vue:287");if (datas.indexOf("title_total_0") != -1) {uni.navigateTo({ url: './motion/children/motion_ydData?id=1&datas=' + datas, animationType: 'pop-in', animationDuration: 200 });}} } };exports.default = _default;
      /* WEBPACK VAR INJECTION */}).call(this, __webpack_require__( /*! ./node_modules/@dcloudio/uni-app-plus/dist/index.js */"./node_modules/@dcloudio/uni-app-plus/dist/index.js")["default"]);

    /***/},

  /***/"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/motion/motion.vue?vue&type=style&index=0&id=2daf6e08&lang=less&scoped=true&":
  /*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-1!./node_modules/css-loader??ref--10-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!D:/Aproject/github/watch-test/pages/motion/motion.vue?vue&type=style&index=0&id=2daf6e08&lang=less&scoped=true& ***!
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
  /*! no static exports found */
  /***/function node_modulesMiniCssExtractPluginDistLoaderJsNode_modulesDcloudioVueCliPluginUniPackagesWebpackPreprocessLoaderIndexJsNode_modulesCssLoaderIndexJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesPostcssLoaderSrcIndexJsNode_modulesLessLoaderDistCjsJsNode_modulesDcloudioVueCliPluginUniPackagesWebpackPreprocessLoaderIndexJsNode_modulesVueLoaderLibIndexJsAprojectGithubWatchTestPagesMotionMotionVueVueTypeStyleIndex0Id2daf6e08LangLessScopedTrue(module, exports, __webpack_require__) {

    // extracted by mini-css-extract-plugin

    /***/},

  /***/"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/motion/motion.vue?vue&type=template&id=2daf6e08&scoped=true&":
  /*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
                                                                                                                                                                                                                                                                                                                                                                               !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!D:/Aproject/github/watch-test/pages/motion/motion.vue?vue&type=template&id=2daf6e08&scoped=true& ***!
                                                                                                                                                                                                                                                                                                                                                                               \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
  /*! exports provided: render, staticRenderFns */
  /***/function node_modulesVueLoaderLibLoadersTemplateLoaderJsNode_modulesDcloudioVueCliPluginUniPackagesWebpackPreprocessLoaderIndexJsNode_modulesDcloudioWebpackUniMpLoaderLibTemplateJsNode_modulesVueLoaderLibIndexJsAprojectGithubWatchTestPagesMotionMotionVueVueTypeTemplateId2daf6e08ScopedTrue(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "render", function () {return render;});
    /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {return staticRenderFns;});
    var render = function render() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
    };
    var staticRenderFns = [];
    render._withStripped = true;



    /***/} }]);


;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
'pages/motion/motion-create-component',
{
  'pages/motion/motion-create-component': function pagesMotionMotionCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('./node_modules/@dcloudio/uni-app-plus/dist/index.js')['createComponent'](__webpack_require__("../../../../Aproject/github/watch-test/pages/motion/motion.vue"));
  } },

[['pages/motion/motion-create-component']]]);
});
require('pages/motion/motion.js');

__wxRoute = 'pages/mine/children/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mine/children/login.js';

define('pages/mine/children/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/mine/children/login"],{

/***/ "../../../../Aproject/github/watch-test/pages/mine/children/login.vue":
/*!*******************************************************************!*\
  !*** D:/Aproject/github/watch-test/pages/mine/children/login.vue ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_vue_vue_type_template_id_67959aa4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=67959aa4& */ "../../../../Aproject/github/watch-test/pages/mine/children/login.vue?vue&type=template&id=67959aa4&");
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ "../../../../Aproject/github/watch-test/pages/mine/children/login.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.vue?vue&type=style&index=0&lang=css& */ "../../../../Aproject/github/watch-test/pages/mine/children/login.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_67959aa4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_vue_vue_type_template_id_67959aa4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "Aproject/github/watch-test/pages/mine/children/login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../../../Aproject/github/watch-test/pages/mine/children/login.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** D:/Aproject/github/watch-test/pages/mine/children/login.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/mine/children/login.vue?vue&type=script&lang=js&");
/* harmony import */ var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../Aproject/github/watch-test/pages/mine/children/login.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************!*\
  !*** D:/Aproject/github/watch-test/pages/mine/children/login.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/mine/children/login.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../Aproject/github/watch-test/pages/mine/children/login.vue?vue&type=template&id=67959aa4&":
/*!**************************************************************************************************!*\
  !*** D:/Aproject/github/watch-test/pages/mine/children/login.vue?vue&type=template&id=67959aa4& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_67959aa4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=template&id=67959aa4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/mine/children/login.vue?vue&type=template&id=67959aa4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_67959aa4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_67959aa4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/mine/children/login.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!D:/Aproject/github/watch-test/pages/mine/children/login.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;









































var _login = __webpack_require__(/*! ../../../service/api/login.js */ "../../../../Aproject/github/watch-test/service/api/login.js"); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//登陆api
var tha;var _default = { onLoad: function onLoad() {tha = this;}, data: function data() {return { phoneno: '', password: '' };}, created: function created() {this.isLogin();}, methods: { isLogin: function isLogin() {//判断缓存中是否登陆过，直接登陆
      var _this = this;try {var value = uni.getStorageSync('setUserData');if (value) {//有登陆信息
          console.log("已登录用户：", value, " at pages\\mine\\children\\login.vue:68");_this.$store.dispatch("setUserData", value); //存入状态
          uni.reLaunch({ url: '../../../pages/index' });}} catch (e) {// error
      }}, bindLogin: function bindLogin() {var _this = this; // if (this.phoneno.length != 11) {
      //      uni.showToast({
      //         icon: 'none',
      // 		position: 'bottom',
      //         title: '手机号不正确'
      //     });
      //     return;
      // }
      if (this.phoneno.length == "") {uni.showToast({ icon: 'none', position: 'bottom', title: '用户名不能为空' });return;}if (this.password.length < 5) {uni.showToast({
          icon: 'none',
          position: 'bottom',
          title: '密码不正确' });

        return;
      }
      uni.showLoading({
        title: '登陆中' });

      (0, _login.getLogin)().
      then(function (res) {
        //console.log(res)
        //简单验证下登陆（不安全）
        if (_this.phoneno == res.data.username && _this.password == res.data.password) {
          var userdata = {
            "username": res.data.username,
            "nickname": res.data.nickname,
            "accesstoken": res.data.accesstoken
            //保存用户信息和accesstoken
          };_this.$store.dispatch("setUserData", userdata); //存入状态
          try {
            uni.setStorageSync('setUserData', userdata); //存入缓存
          } catch (e) {
            // error
          }
          uni.showToast({
            icon: 'success',
            position: 'bottom',
            title: '登陆成功' });

          uni.reLaunch({
            url: '../../../pages/index' });

        } else {
          _this.password = "";
          uni.showToast({
            icon: 'error',
            position: 'bottom',
            title: '账号或密码错误，账号admin密码admin' });

        }
        uni.hideLoading();
      }).catch(function (err) {
        uni.hideLoading();
      });





    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-app-plus/dist/index.js */ "./node_modules/@dcloudio/uni-app-plus/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/mine/children/login.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!D:/Aproject/github/watch-test/pages/mine/children/login.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/mine/children/login.vue?vue&type=template&id=67959aa4&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!D:/Aproject/github/watch-test/pages/mine/children/login.vue?vue&type=template&id=67959aa4& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var staticRenderFns = []
render._withStripped = true



/***/ })

},[["../../../../Aproject/github/watch-test/main.js?{\"page\":\"pages%2Fmine%2Fchildren%2Flogin\"}","common/runtime","common/vendor"]]]);
});
require('pages/mine/children/login.js');
__wxRoute = 'pages/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index.js';

define('pages/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/index"],{

/***/ "../../../../Aproject/github/watch-test/pages/index.vue":
/*!*****************************************************!*\
  !*** D:/Aproject/github/watch-test/pages/index.vue ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_2358f62b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2358f62b&scoped=true& */ "../../../../Aproject/github/watch-test/pages/index.vue?vue&type=template&id=2358f62b&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "../../../../Aproject/github/watch-test/pages/index.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_id_2358f62b_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=2358f62b&lang=less&scoped=true& */ "../../../../Aproject/github/watch-test/pages/index.vue?vue&type=style&index=0&id=2358f62b&lang=less&scoped=true&");
/* harmony import */ var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_2358f62b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_2358f62b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2358f62b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "Aproject/github/watch-test/pages/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../../../Aproject/github/watch-test/pages/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** D:/Aproject/github/watch-test/pages/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../Aproject/github/watch-test/pages/index.vue?vue&type=style&index=0&id=2358f62b&lang=less&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** D:/Aproject/github/watch-test/pages/index.vue?vue&type=style&index=0&id=2358f62b&lang=less&scoped=true& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2358f62b_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-1!../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--10-oneOf-1-2!../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-1-3!../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=2358f62b&lang=less&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/index.vue?vue&type=style&index=0&id=2358f62b&lang=less&scoped=true&");
/* harmony import */ var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2358f62b_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2358f62b_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2358f62b_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2358f62b_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2358f62b_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../Aproject/github/watch-test/pages/index.vue?vue&type=template&id=2358f62b&scoped=true&":
/*!************************************************************************************************!*\
  !*** D:/Aproject/github/watch-test/pages/index.vue?vue&type=template&id=2358f62b&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2358f62b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2358f62b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/index.vue?vue&type=template&id=2358f62b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2358f62b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2358f62b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!D:/Aproject/github/watch-test/pages/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      PageCur: 'home', //切换菜单
      toPageCur: '', //上次切换的菜单
      isTop: false //底部菜单是否在最顶层
    };
  },
  methods: {
    NavChange: function NavChange(e) {
      //底部菜单切换
      this.PageCur = e.currentTarget.dataset.cur;
    } },

  watch: {
    //监听菜单变化
    'PageCur': function PageCur(newVal) {

      var _this = this;
      if (newVal == "ble") {
        //如果切换的蓝牙 就把底部菜单设为最顶层 避免蓝牙处弹出提示不方便切换菜单
        _this.isTop = true;
      } else {
        _this.isTop = false;
      }

      //如果上一次切换的菜单是蓝牙，但是本次不是切换不是蓝牙，就关闭蓝牙搜索
      if (newVal != "ble" && _this.toPageCur == "ble") {
        uni.stopBluetoothDevicesDiscovery({
          success: function success(res) {
            console.log("关闭蓝牙搜索" + res, " at pages\\index.vue:70");
          } });

      }
      _this.toPageCur = newVal; //赋值上一次切换的菜单
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-app-plus/dist/index.js */ "./node_modules/@dcloudio/uni-app-plus/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/index.vue?vue&type=style&index=0&id=2358f62b&lang=less&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-1!./node_modules/css-loader??ref--10-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!D:/Aproject/github/watch-test/pages/index.vue?vue&type=style&index=0&id=2358f62b&lang=less&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/index.vue?vue&type=template&id=2358f62b&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!D:/Aproject/github/watch-test/pages/index.vue?vue&type=template&id=2358f62b&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var staticRenderFns = []
render._withStripped = true



/***/ })

},[["../../../../Aproject/github/watch-test/main.js?{\"page\":\"pages%2Findex\"}","common/runtime","common/vendor"]]]);
});
require('pages/index.js');
__wxRoute = 'pages/motion/children/motion_ydData';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/motion/children/motion_ydData.js';

define('pages/motion/children/motion_ydData.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/motion/children/motion_ydData"],{

/***/ "../../../../Aproject/github/watch-test/pages/motion/children/motion_ydData.vue":
/*!*****************************************************************************!*\
  !*** D:/Aproject/github/watch-test/pages/motion/children/motion_ydData.vue ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _motion_ydData_vue_vue_type_template_id_471cd040_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./motion_ydData.vue?vue&type=template&id=471cd040&scoped=true& */ "../../../../Aproject/github/watch-test/pages/motion/children/motion_ydData.vue?vue&type=template&id=471cd040&scoped=true&");
/* harmony import */ var _motion_ydData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./motion_ydData.vue?vue&type=script&lang=js& */ "../../../../Aproject/github/watch-test/pages/motion/children/motion_ydData.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _motion_ydData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _motion_ydData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _motion_ydData_vue_vue_type_style_index_0_id_471cd040_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./motion_ydData.vue?vue&type=style&index=0&id=471cd040&lang=less&scoped=true& */ "../../../../Aproject/github/watch-test/pages/motion/children/motion_ydData.vue?vue&type=style&index=0&id=471cd040&lang=less&scoped=true&");
/* harmony import */ var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _motion_ydData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _motion_ydData_vue_vue_type_template_id_471cd040_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _motion_ydData_vue_vue_type_template_id_471cd040_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "471cd040",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "Aproject/github/watch-test/pages/motion/children/motion_ydData.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../../../Aproject/github/watch-test/pages/motion/children/motion_ydData.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** D:/Aproject/github/watch-test/pages/motion/children/motion_ydData.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_motion_ydData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./motion_ydData.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/motion/children/motion_ydData.vue?vue&type=script&lang=js&");
/* harmony import */ var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_motion_ydData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_motion_ydData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_motion_ydData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_motion_ydData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_motion_ydData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../Aproject/github/watch-test/pages/motion/children/motion_ydData.vue?vue&type=style&index=0&id=471cd040&lang=less&scoped=true&":
/*!***************************************************************************************************************************************!*\
  !*** D:/Aproject/github/watch-test/pages/motion/children/motion_ydData.vue?vue&type=style&index=0&id=471cd040&lang=less&scoped=true& ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_motion_ydData_vue_vue_type_style_index_0_id_471cd040_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-1!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--10-oneOf-1-2!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-1-3!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./motion_ydData.vue?vue&type=style&index=0&id=471cd040&lang=less&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/motion/children/motion_ydData.vue?vue&type=style&index=0&id=471cd040&lang=less&scoped=true&");
/* harmony import */ var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_motion_ydData_vue_vue_type_style_index_0_id_471cd040_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_motion_ydData_vue_vue_type_style_index_0_id_471cd040_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_motion_ydData_vue_vue_type_style_index_0_id_471cd040_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_motion_ydData_vue_vue_type_style_index_0_id_471cd040_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_motion_ydData_vue_vue_type_style_index_0_id_471cd040_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../Aproject/github/watch-test/pages/motion/children/motion_ydData.vue?vue&type=template&id=471cd040&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** D:/Aproject/github/watch-test/pages/motion/children/motion_ydData.vue?vue&type=template&id=471cd040&scoped=true& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_motion_ydData_vue_vue_type_template_id_471cd040_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./motion_ydData.vue?vue&type=template&id=471cd040&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/motion/children/motion_ydData.vue?vue&type=template&id=471cd040&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_motion_ydData_vue_vue_type_template_id_471cd040_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_motion_ydData_vue_vue_type_template_id_471cd040_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/motion/children/motion_ydData.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!D:/Aproject/github/watch-test/pages/motion/children/motion_ydData.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      datas: {} //运动数据
    };
  },
  onLoad: function onLoad(option) {
    this.datas = JSON.parse(option.datas); //传输的内容数组
  } };exports.default = _default;

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/motion/children/motion_ydData.vue?vue&type=style&index=0&id=471cd040&lang=less&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-1!./node_modules/css-loader??ref--10-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!D:/Aproject/github/watch-test/pages/motion/children/motion_ydData.vue?vue&type=style&index=0&id=471cd040&lang=less&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/motion/children/motion_ydData.vue?vue&type=template&id=471cd040&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!D:/Aproject/github/watch-test/pages/motion/children/motion_ydData.vue?vue&type=template&id=471cd040&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var staticRenderFns = []
render._withStripped = true



/***/ })

},[["../../../../Aproject/github/watch-test/main.js?{\"page\":\"pages%2Fmotion%2Fchildren%2Fmotion_ydData\"}","common/runtime","common/vendor"]]]);
});
require('pages/motion/children/motion_ydData.js');
__wxRoute = 'pages/mine/children/register';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mine/children/register.js';

define('pages/mine/children/register.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/mine/children/register"],{

/***/ "../../../../Aproject/github/watch-test/pages/mine/children/register.vue":
/*!**********************************************************************!*\
  !*** D:/Aproject/github/watch-test/pages/mine/children/register.vue ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_vue_vue_type_template_id_bdf48124___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.vue?vue&type=template&id=bdf48124& */ "../../../../Aproject/github/watch-test/pages/mine/children/register.vue?vue&type=template&id=bdf48124&");
/* harmony import */ var _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.vue?vue&type=script&lang=js& */ "../../../../Aproject/github/watch-test/pages/mine/children/register.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.vue?vue&type=style&index=0&lang=css& */ "../../../../Aproject/github/watch-test/pages/mine/children/register.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _register_vue_vue_type_template_id_bdf48124___WEBPACK_IMPORTED_MODULE_0__["render"],
  _register_vue_vue_type_template_id_bdf48124___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "Aproject/github/watch-test/pages/mine/children/register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../../../Aproject/github/watch-test/pages/mine/children/register.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** D:/Aproject/github/watch-test/pages/mine/children/register.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/mine/children/register.vue?vue&type=script&lang=js&");
/* harmony import */ var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../Aproject/github/watch-test/pages/mine/children/register.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************!*\
  !*** D:/Aproject/github/watch-test/pages/mine/children/register.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/mine/children/register.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../Aproject/github/watch-test/pages/mine/children/register.vue?vue&type=template&id=bdf48124&":
/*!*****************************************************************************************************!*\
  !*** D:/Aproject/github/watch-test/pages/mine/children/register.vue?vue&type=template&id=bdf48124& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_bdf48124___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=template&id=bdf48124& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/mine/children/register.vue?vue&type=template&id=bdf48124&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_bdf48124___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_bdf48124___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/mine/children/register.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!D:/Aproject/github/watch-test/pages/mine/children/register.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var tha, js;var _default =
{
  onLoad: function onLoad() {
    tha = this;

  },
  onUnload: function onUnload() {
    clearInterval(js);
    this.second = 0;
  },
  data: function data() {
    return {
      phoneno: '',
      password: '',
      code: '',
      invitation: '',
      xieyi: true,
      showPassword: false,
      second: 0 };

  },
  computed: {
    yanzhengma: function yanzhengma() {
      if (this.second == 0) {
        return '获取验证码';
      } else {
        if (this.second < 10) {
          return '重新获取0' + this.second;
        } else {
          return '重新获取' + this.second;
        }
      }
    } },

  methods: {
    display: function display() {
      this.showPassword = !this.showPassword;
    },
    xieyitong: function xieyitong() {
      this.xieyi = !this.xieyi;
    },
    getcode: function getcode() {
      if (this.phoneno.length != 11) {
        uni.showToast({
          icon: 'none',
          position: 'bottom',
          title: '手机号不正确' });

        return false;
      }
      if (this.second > 0) {
        return;
      }
      this.second = 60;
      js = setInterval(function () {
        tha.second--;
        if (tha.second == 0) {
          clearInterval(js);
        }
      }, 1000);
      // uni.request({
      //     url: 'http://***/getcode.html', //仅为示例，并非真实接口地址。
      //     data: {phoneno:this.phoneno,code_type:'reg'},
      // 	method: 'POST',
      // 	dataType:'json',
      //     success: (res) => {
      // 		if(res.data.code!=200){
      // 			uni.showToast({title:res.data.msg,icon:'none'});
      // 		}else{
      // 			uni.showToast({title:res.data.msg});
      // 			js = setInterval(function(){
      // 				tha.second--;
      // 				if(tha.second==0){
      // 					clearInterval(js)
      // 				}
      // 			},1000)
      // 		}
      //     }
      // });
    },
    bindLogin: function bindLogin() {
      if (this.xieyi == false) {
        uni.showToast({
          icon: 'none',
          position: 'bottom',
          title: '请先阅读《软件用户协议》' });

        return;
      }
      if (this.phoneno.length != 11) {
        uni.showToast({
          icon: 'none',
          position: 'bottom',
          title: '手机号不正确' });

        return;
      }
      if (this.password.length < 6) {
        uni.showToast({
          icon: 'none',
          position: 'bottom',
          title: '密码不正确' });

        return;
      }
      if (this.code.length != 4) {
        uni.showToast({
          icon: 'none',
          position: 'bottom',
          title: '验证码不正确' });

        return;
      }
      console.log("注册成功", " at pages\\mine\\children\\register.vue:161");
      // uni.request({
      //     url: 'http://***/reg.html',
      //     data: {
      // 		phoneno:this.phoneno,
      // 		password:this.password,
      // 		code:this.code,
      // 		invitation:this.invitation
      // 	},
      // 	method: 'POST',
      // 	dataType:'json',
      //     success: (res) => {
      // 		if(res.data.code!=200){
      // 			uni.showToast({title:res.data.msg,icon:'none'});
      // 		}else{
      // 			uni.showToast({title:res.data.msg});
      // 			setTimeout(function(){
      // 				uni.navigateBack();
      // 			},1500) 
      // 		}
      //     }
      // });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-app-plus/dist/index.js */ "./node_modules/@dcloudio/uni-app-plus/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/mine/children/register.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!D:/Aproject/github/watch-test/pages/mine/children/register.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/mine/children/register.vue?vue&type=template&id=bdf48124&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!D:/Aproject/github/watch-test/pages/mine/children/register.vue?vue&type=template&id=bdf48124& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var staticRenderFns = []
render._withStripped = true



/***/ })

},[["../../../../Aproject/github/watch-test/main.js?{\"page\":\"pages%2Fmine%2Fchildren%2Fregister\"}","common/runtime","common/vendor"]]]);
});
require('pages/mine/children/register.js');
__wxRoute = 'pages/mine/children/forget';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mine/children/forget.js';

define('pages/mine/children/forget.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/mine/children/forget"],{

/***/ "../../../../Aproject/github/watch-test/pages/mine/children/forget.vue":
/*!********************************************************************!*\
  !*** D:/Aproject/github/watch-test/pages/mine/children/forget.vue ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _forget_vue_vue_type_template_id_01f70e78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forget.vue?vue&type=template&id=01f70e78& */ "../../../../Aproject/github/watch-test/pages/mine/children/forget.vue?vue&type=template&id=01f70e78&");
/* harmony import */ var _forget_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forget.vue?vue&type=script&lang=js& */ "../../../../Aproject/github/watch-test/pages/mine/children/forget.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _forget_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _forget_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _forget_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forget.vue?vue&type=style&index=0&lang=css& */ "../../../../Aproject/github/watch-test/pages/mine/children/forget.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _forget_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _forget_vue_vue_type_template_id_01f70e78___WEBPACK_IMPORTED_MODULE_0__["render"],
  _forget_vue_vue_type_template_id_01f70e78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "Aproject/github/watch-test/pages/mine/children/forget.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../../../Aproject/github/watch-test/pages/mine/children/forget.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** D:/Aproject/github/watch-test/pages/mine/children/forget.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_forget_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./forget.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/mine/children/forget.vue?vue&type=script&lang=js&");
/* harmony import */ var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_forget_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_forget_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_forget_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_forget_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_forget_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../Aproject/github/watch-test/pages/mine/children/forget.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************!*\
  !*** D:/Aproject/github/watch-test/pages/mine/children/forget.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_forget_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./forget.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/mine/children/forget.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_forget_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_forget_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_forget_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_forget_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_forget_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../Aproject/github/watch-test/pages/mine/children/forget.vue?vue&type=template&id=01f70e78&":
/*!***************************************************************************************************!*\
  !*** D:/Aproject/github/watch-test/pages/mine/children/forget.vue?vue&type=template&id=01f70e78& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_forget_vue_vue_type_template_id_01f70e78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../Asoftware/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./forget.vue?vue&type=template&id=01f70e78& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/mine/children/forget.vue?vue&type=template&id=01f70e78&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_forget_vue_vue_type_template_id_01f70e78___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Asoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_forget_vue_vue_type_template_id_01f70e78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/mine/children/forget.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!D:/Aproject/github/watch-test/pages/mine/children/forget.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var tha, js;var _default =
{
  data: function data() {
    return {
      phoneno: '',
      second: 0,
      code: "",
      showPassword: false,
      password: '' };

  },
  onLoad: function onLoad() {
    tha = this;
  },
  computed: {
    yanzhengma: function yanzhengma() {
      if (this.second == 0) {
        return '获取验证码';
      } else {
        if (this.second < 10) {
          return '重新获取0' + this.second;
        } else {
          return '重新获取' + this.second;
        }
      }
    } },

  methods: {
    display: function display() {
      this.showPassword = !this.showPassword;
    },
    getcode: function getcode() {
      if (this.phoneno.length != 11) {
        uni.showToast({
          icon: 'none',
          position: 'bottom',
          title: '手机号不正确' });

        return false;
      }
      if (this.second > 0) {
        return;
      }
      tha.second = 60;
      js = setInterval(function () {
        tha.second--;
        if (tha.second == 0) {
          clearInterval(js);
        }
      }, 1000);
      console.log("获取验证码", " at pages\\mine\\children\\forget.vue:91");
      // uni.request({
      //     url: 'http://***/getcode.html', //仅为示例，并非真实接口地址。
      //     data: {phoneno:this.phoneno,code_type:'reg'},
      // 	method: 'POST',
      // 	dataType:'json',
      //     success: (res) => {
      // 		if(res.data.code!=200){
      // 			uni.showToast({title:res.data.msg,icon:'none'});
      // 			tha.second = 0;
      // 		}else{
      // 			uni.showToast({title:res.data.msg});
      // 			tha.second = 60;
      // 			js = setInterval(function(){
      // 				tha.second--;
      // 				if(tha.second==0){
      // 					clearInterval(js)
      // 				}
      // 			},1000)
      // 		}
      //     }
      // });
    },
    bindLogin: function bindLogin() {
      if (this.phoneno.length != 11) {
        uni.showToast({
          icon: 'none',
          position: 'bottom',
          title: '手机号不正确' });

        return;
      }
      if (this.password.length < 6) {
        uni.showToast({
          icon: 'none',
          position: 'bottom',
          title: '密码不正确' });

        return;
      }
      if (this.code.length != 4) {
        uni.showToast({
          icon: 'none',
          position: 'bottom',
          title: '验证码不正确' });

        return;
      }
      console.log("修改密码成功", " at pages\\mine\\children\\forget.vue:139");
      // uni.request({
      //     url: 'http://***/forget.html',
      //     data: {
      // 		phoneno:this.phoneno,
      // 		password:this.password,
      // 		code:this.code
      // 	},
      // 	method: 'POST',
      // 	dataType:'json',
      //     success: (res) => {
      // 		if(res.data.code!=200){
      // 			uni.showToast({title:res.data.msg,icon:'none'});
      // 		}else{
      // 			uni.showToast({title:res.data.msg});
      // 			setTimeout(function(){
      // 				uni.navigateBack();
      // 			},1500) 
      // 		}
      //     }
      // });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-app-plus/dist/index.js */ "./node_modules/@dcloudio/uni-app-plus/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/mine/children/forget.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!D:/Aproject/github/watch-test/pages/mine/children/forget.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../Aproject/github/watch-test/pages/mine/children/forget.vue?vue&type=template&id=01f70e78&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!D:/Aproject/github/watch-test/pages/mine/children/forget.vue?vue&type=template&id=01f70e78& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var staticRenderFns = []
render._withStripped = true



/***/ })

},[["../../../../Aproject/github/watch-test/main.js?{\"page\":\"pages%2Fmine%2Fchildren%2Fforget\"}","common/runtime","common/vendor"]]]);
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

