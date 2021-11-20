(function () {
  'use strict';

  window.Vue=function(e){function t(e,t){const n=Object.create(null),o=e.split(",");for(let r=0;r<o.length;r++)n[o[r]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}const n=t("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt"),o=t("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");function r(e){return !!e||""===e}function s(e){if(N(e)){const t={};for(let n=0;n<e.length;n++){const o=e[n],r=A(o)?c(o):s(o);if(r)for(const e in r)t[e]=r[e];}return t}return A(e)||M(e)?e:void 0}const i=/;(?![^(]*\))/g,l=/:(.+)/;function c(e){const t={};return e.split(i).forEach((e=>{if(e){const n=e.split(l);n.length>1&&(t[n[0].trim()]=n[1].trim());}})),t}function a(e){let t="";if(A(e))t=e;else if(N(e))for(let n=0;n<e.length;n++){const o=a(e[n]);o&&(t+=o+" ");}else if(M(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const u=t("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot"),p=t("svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view"),f=t("area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr");function d(e,t){if(e===t)return !0;let n=R(e),o=R(t);if(n||o)return !(!n||!o)&&e.getTime()===t.getTime();if(n=N(e),o=N(t),n||o)return !(!n||!o)&&function(e,t){if(e.length!==t.length)return !1;let n=!0;for(let o=0;n&&o<e.length;o++)n=d(e[o],t[o]);return n}(e,t);if(n=M(e),o=M(t),n||o){if(!n||!o)return !1;if(Object.keys(e).length!==Object.keys(t).length)return !1;for(const n in e){const o=e.hasOwnProperty(n),r=t.hasOwnProperty(n);if(o&&!r||!o&&r||!d(e[n],t[n]))return !1}}return String(e)===String(t)}function h(e,t){return e.findIndex((e=>d(e,t)))}const m=(e,t)=>t&&t.__v_isRef?m(e,t.value):E(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:$(t)?{[`Set(${t.size})`]:[...t.values()]}:!M(t)||N(t)||B(t)?t:String(t),g={},v=[],y=()=>{},b=()=>!1,_=/^on[^a-z]/,S=e=>_.test(e),x=e=>e.startsWith("onUpdate:"),C=Object.assign,w=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1);},k=Object.prototype.hasOwnProperty,T=(e,t)=>k.call(e,t),N=Array.isArray,E=e=>"[object Map]"===I(e),$=e=>"[object Set]"===I(e),R=e=>e instanceof Date,O=e=>"function"==typeof e,A=e=>"string"==typeof e,F=e=>"symbol"==typeof e,M=e=>null!==e&&"object"==typeof e,P=e=>M(e)&&O(e.then)&&O(e.catch),V=Object.prototype.toString,I=e=>V.call(e),B=e=>"[object Object]"===I(e),L=e=>A(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,j=t(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),U=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},H=/-(\w)/g,D=U((e=>e.replace(H,((e,t)=>t?t.toUpperCase():"")))),W=/\B([A-Z])/g,z=U((e=>e.replace(W,"-$1").toLowerCase())),K=U((e=>e.charAt(0).toUpperCase()+e.slice(1))),G=U((e=>e?`on${K(e)}`:"")),q=(e,t)=>!Object.is(e,t),J=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t);},Z=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n});},Y=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Q;let X;const ee=[];class te{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&X&&(this.parent=X,this.index=(X.scopes||(X.scopes=[])).push(this)-1);}run(e){if(this.active)try{return this.on(),e()}finally{this.off();}}on(){this.active&&(ee.push(this),X=this);}off(){this.active&&(ee.pop(),X=ee[ee.length-1]);}stop(e){if(this.active){if(this.effects.forEach((e=>e.stop())),this.cleanups.forEach((e=>e())),this.scopes&&this.scopes.forEach((e=>e.stop(!0))),this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index);}this.active=!1;}}}function ne(e,t){(t=t||X)&&t.active&&t.effects.push(e);}const oe=e=>{const t=new Set(e);return t.w=0,t.n=0,t},re=e=>(e.w&ce)>0,se=e=>(e.n&ce)>0,ie=new WeakMap;let le=0,ce=1;const ae=[];let ue;const pe=Symbol(""),fe=Symbol("");class de{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],ne(this,n);}run(){if(!this.active)return this.fn();if(!ae.includes(this))try{return ae.push(ue=this),ge.push(me),me=!0,ce=1<<++le,le<=30?(({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=ce;})(this):he(this),this.fn()}finally{le<=30&&(e=>{const{deps:t}=e;if(t.length){let n=0;for(let o=0;o<t.length;o++){const r=t[o];re(r)&&!se(r)?r.delete(e):t[n++]=r,r.w&=~ce,r.n&=~ce;}t.length=n;}})(this),ce=1<<--le,ye(),ae.pop();const e=ae.length;ue=e>0?ae[e-1]:void 0;}}stop(){this.active&&(he(this),this.onStop&&this.onStop(),this.active=!1);}}function he(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0;}}let me=!0;const ge=[];function ve(){ge.push(me),me=!1;}function ye(){const e=ge.pop();me=void 0===e||e;}function be(e,t,n){if(!_e())return;let o=ie.get(e);o||ie.set(e,o=new Map);let r=o.get(n);r||o.set(n,r=oe()),Se(r);}function _e(){return me&&void 0!==ue}function Se(e,t){let n=!1;le<=30?se(e)||(e.n|=ce,n=!re(e)):n=!e.has(ue),n&&(e.add(ue),ue.deps.push(e));}function xe(e,t,n,o,r,s){const i=ie.get(e);if(!i)return;let l=[];if("clear"===t)l=[...i.values()];else if("length"===n&&N(e))i.forEach(((e,t)=>{("length"===t||t>=o)&&l.push(e);}));else switch(void 0!==n&&l.push(i.get(n)),t){case"add":N(e)?L(n)&&l.push(i.get("length")):(l.push(i.get(pe)),E(e)&&l.push(i.get(fe)));break;case"delete":N(e)||(l.push(i.get(pe)),E(e)&&l.push(i.get(fe)));break;case"set":E(e)&&l.push(i.get(pe));}if(1===l.length)l[0]&&Ce(l[0]);else {const e=[];for(const t of l)t&&e.push(...t);Ce(oe(e));}}function Ce(e,t){for(const n of N(e)?e:[...e])(n!==ue||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run());}const we=t("__proto__,__v_isRef,__isVue"),ke=new Set(Object.getOwnPropertyNames(Symbol).map((e=>Symbol[e])).filter(F)),Te=Ae(),Ne=Ae(!1,!0),Ee=Ae(!0),$e=Ae(!0,!0),Re=Oe();function Oe(){const e={};return ["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=yt(this);for(let t=0,r=this.length;t<r;t++)be(n,0,t+"");const o=n[t](...e);return -1===o||!1===o?n[t](...e.map(yt)):o};})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){ve();const n=yt(this)[t].apply(this,e);return ye(),n};})),e}function Ae(e=!1,t=!1){return function(n,o,r){if("__v_isReactive"===o)return !e;if("__v_isReadonly"===o)return e;if("__v_raw"===o&&r===(e?t?at:ct:t?lt:it).get(n))return n;const s=N(n);if(!e&&s&&T(Re,o))return Reflect.get(Re,o,r);const i=Reflect.get(n,o,r);if(F(o)?ke.has(o):we(o))return i;if(e||be(n,0,o),t)return i;if(wt(i)){return !s||!L(o)?i.value:i}return M(i)?e?dt(i):pt(i):i}}function Fe(e=!1){return function(t,n,o,r){let s=t[n];if(!e&&(o=yt(o),s=yt(s),!N(t)&&wt(s)&&!wt(o)))return s.value=o,!0;const i=N(t)&&L(n)?Number(n)<t.length:T(t,n),l=Reflect.set(t,n,o,r);return t===yt(r)&&(i?q(o,s)&&xe(t,"set",n,o):xe(t,"add",n,o)),l}}const Me={get:Te,set:Fe(),deleteProperty:function(e,t){const n=T(e,t),o=Reflect.deleteProperty(e,t);return o&&n&&xe(e,"delete",t,void 0),o},has:function(e,t){const n=Reflect.has(e,t);return F(t)&&ke.has(t)||be(e,0,t),n},ownKeys:function(e){return be(e,0,N(e)?"length":pe),Reflect.ownKeys(e)}},Pe={get:Ee,set:(e,t)=>!0,deleteProperty:(e,t)=>!0},Ve=C({},Me,{get:Ne,set:Fe(!0)}),Ie=C({},Pe,{get:$e}),Be=e=>e,Le=e=>Reflect.getPrototypeOf(e);function je(e,t,n=!1,o=!1){const r=yt(e=e.__v_raw),s=yt(t);t!==s&&!n&&be(r,0,t),!n&&be(r,0,s);const{has:i}=Le(r),l=o?Be:n?St:_t;return i.call(r,t)?l(e.get(t)):i.call(r,s)?l(e.get(s)):void(e!==r&&e.get(t))}function Ue(e,t=!1){const n=this.__v_raw,o=yt(n),r=yt(e);return e!==r&&!t&&be(o,0,e),!t&&be(o,0,r),e===r?n.has(e):n.has(e)||n.has(r)}function He(e,t=!1){return e=e.__v_raw,!t&&be(yt(e),0,pe),Reflect.get(e,"size",e)}function De(e){e=yt(e);const t=yt(this);return Le(t).has.call(t,e)||(t.add(e),xe(t,"add",e,e)),this}function We(e,t){t=yt(t);const n=yt(this),{has:o,get:r}=Le(n);let s=o.call(n,e);s||(e=yt(e),s=o.call(n,e));const i=r.call(n,e);return n.set(e,t),s?q(t,i)&&xe(n,"set",e,t):xe(n,"add",e,t),this}function ze(e){const t=yt(this),{has:n,get:o}=Le(t);let r=n.call(t,e);r||(e=yt(e),r=n.call(t,e)),o&&o.call(t,e);const s=t.delete(e);return r&&xe(t,"delete",e,void 0),s}function Ke(){const e=yt(this),t=0!==e.size,n=e.clear();return t&&xe(e,"clear",void 0,void 0),n}function Ge(e,t){return function(n,o){const r=this,s=r.__v_raw,i=yt(s),l=t?Be:e?St:_t;return !e&&be(i,0,pe),s.forEach(((e,t)=>n.call(o,l(e),l(t),r)))}}function qe(e,t,n){return function(...o){const r=this.__v_raw,s=yt(r),i=E(s),l="entries"===e||e===Symbol.iterator&&i,c="keys"===e&&i,a=r[e](...o),u=n?Be:t?St:_t;return !t&&be(s,0,c?fe:pe),{next(){const{value:e,done:t}=a.next();return t?{value:e,done:t}:{value:l?[u(e[0]),u(e[1])]:u(e),done:t}},[Symbol.iterator](){return this}}}}function Je(e){return function(...t){return "delete"!==e&&this}}function Ze(){const e={get(e){return je(this,e)},get size(){return He(this)},has:Ue,add:De,set:We,delete:ze,clear:Ke,forEach:Ge(!1,!1)},t={get(e){return je(this,e,!1,!0)},get size(){return He(this)},has:Ue,add:De,set:We,delete:ze,clear:Ke,forEach:Ge(!1,!0)},n={get(e){return je(this,e,!0)},get size(){return He(this,!0)},has(e){return Ue.call(this,e,!0)},add:Je("add"),set:Je("set"),delete:Je("delete"),clear:Je("clear"),forEach:Ge(!0,!1)},o={get(e){return je(this,e,!0,!0)},get size(){return He(this,!0)},has(e){return Ue.call(this,e,!0)},add:Je("add"),set:Je("set"),delete:Je("delete"),clear:Je("clear"),forEach:Ge(!0,!0)};return ["keys","values","entries",Symbol.iterator].forEach((r=>{e[r]=qe(r,!1,!1),n[r]=qe(r,!0,!1),t[r]=qe(r,!1,!0),o[r]=qe(r,!0,!0);})),[e,n,t,o]}const[Ye,Qe,Xe,et]=Ze();function tt(e,t){const n=t?e?et:Xe:e?Qe:Ye;return (t,o,r)=>"__v_isReactive"===o?!e:"__v_isReadonly"===o?e:"__v_raw"===o?t:Reflect.get(T(n,o)&&o in t?n:t,o,r)}const nt={get:tt(!1,!1)},ot={get:tt(!1,!0)},rt={get:tt(!0,!1)},st={get:tt(!0,!0)},it=new WeakMap,lt=new WeakMap,ct=new WeakMap,at=new WeakMap;function ut(e){return e.__v_skip||!Object.isExtensible(e)?0:function(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}((e=>I(e).slice(8,-1))(e))}function pt(e){return e&&e.__v_isReadonly?e:ht(e,!1,Me,nt,it)}function ft(e){return ht(e,!1,Ve,ot,lt)}function dt(e){return ht(e,!0,Pe,rt,ct)}function ht(e,t,n,o,r){if(!M(e))return e;if(e.__v_raw&&(!t||!e.__v_isReactive))return e;const s=r.get(e);if(s)return s;const i=ut(e);if(0===i)return e;const l=new Proxy(e,2===i?o:n);return r.set(e,l),l}function mt(e){return gt(e)?mt(e.__v_raw):!(!e||!e.__v_isReactive)}function gt(e){return !(!e||!e.__v_isReadonly)}function vt(e){return mt(e)||gt(e)}function yt(e){const t=e&&e.__v_raw;return t?yt(t):e}function bt(e){return Z(e,"__v_skip",!0),e}const _t=e=>M(e)?pt(e):e,St=e=>M(e)?dt(e):e;function xt(e){_e()&&((e=yt(e)).dep||(e.dep=oe()),Se(e.dep));}function Ct(e,t){(e=yt(e)).dep&&Ce(e.dep);}function wt(e){return Boolean(e&&!0===e.__v_isRef)}function kt(e){return Tt(e,!1)}function Tt(e,t){return wt(e)?e:new Nt(e,t)}class Nt{constructor(e,t){this._shallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:yt(e),this._value=t?e:_t(e);}get value(){return xt(this),this._value}set value(e){e=this._shallow?e:yt(e),q(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:_t(e),Ct(this));}}function Et(e){return wt(e)?e.value:e}const $t={get:(e,t,n)=>Et(Reflect.get(e,t,n)),set:(e,t,n,o)=>{const r=e[t];return wt(r)&&!wt(n)?(r.value=n,!0):Reflect.set(e,t,n,o)}};function Rt(e){return mt(e)?e:new Proxy(e,$t)}class Ot{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:t,set:n}=e((()=>xt(this)),(()=>Ct(this)));this._get=t,this._set=n;}get value(){return this._get()}set value(e){this._set(e);}}class At{constructor(e,t){this._object=e,this._key=t,this.__v_isRef=!0;}get value(){return this._object[this._key]}set value(e){this._object[this._key]=e;}}function Ft(e,t){const n=e[t];return wt(n)?n:new At(e,t)}class Mt{constructor(e,t,n){this._setter=t,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new de(e,(()=>{this._dirty||(this._dirty=!0,Ct(this));})),this.__v_isReadonly=n;}get value(){const e=yt(this);return xt(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e);}}function Pt(e,t){let n,o;const r=O(e);r?(n=e,o=y):(n=e.get,o=e.set);return new Mt(n,o,r||!o)}let Vt=[];function It(e,t,...n){const o=e.vnode.props||g;let r=n;const s=t.startsWith("update:"),i=s&&t.slice(7);if(i&&i in o){const e=`${"modelValue"===i?"model":i}Modifiers`,{number:t,trim:s}=o[e]||g;s?r=n.map((e=>e.trim())):t&&(r=n.map(Y));}let l,c=o[l=G(t)]||o[l=G(D(t))];!c&&s&&(c=o[l=G(z(t))]),c&&Rr(c,e,6,r);const a=o[l+"Once"];if(a){if(e.emitted){if(e.emitted[l])return}else e.emitted={};e.emitted[l]=!0,Rr(a,e,6,r);}}function Bt(e,t,n=!1){const o=t.emitsCache,r=o.get(e);if(void 0!==r)return r;const s=e.emits;let i={},l=!1;if(!O(e)){const o=e=>{const n=Bt(e,t,!0);n&&(l=!0,C(i,n));};!n&&t.mixins.length&&t.mixins.forEach(o),e.extends&&o(e.extends),e.mixins&&e.mixins.forEach(o);}return s||l?(N(s)?s.forEach((e=>i[e]=null)):C(i,s),o.set(e,i),i):(o.set(e,null),null)}function Lt(e,t){return !(!e||!S(t))&&(t=t.slice(2).replace(/Once$/,""),T(e,t[0].toLowerCase()+t.slice(1))||T(e,z(t))||T(e,t))}let jt=null,Ut=null;function Ht(e){const t=jt;return jt=e,Ut=e&&e.type.__scopeId||null,t}function Dt(e,t=jt,n){if(!t)return e;if(e._n)return e;const o=(...n)=>{o._d&&jo(-1);const r=Ht(t),s=e(...n);return Ht(r),o._d&&jo(1),s};return o._n=!0,o._c=!0,o._d=!0,o}function Wt(e){const{type:t,vnode:n,proxy:o,withProxy:r,props:s,propsOptions:[i],slots:l,attrs:c,emit:a,render:u,renderCache:p,data:f,setupState:d,ctx:h,inheritAttrs:m}=e;let g,v;const y=Ht(e);try{if(4&n.shapeFlag){const e=r||o;g=Xo(u.call(e,e,p,s,d,f,h)),v=c;}else {const e=t;0,g=Xo(e(s,e.length>1?{attrs:c,slots:l,emit:a}:null)),v=t.props?c:zt(c);}}catch(_){Po.length=0,Or(_,e,1),g=Jo(Fo);}let b=g;if(v&&!1!==m){const e=Object.keys(v),{shapeFlag:t}=b;e.length&&7&t&&(i&&e.some(x)&&(v=Kt(v,i)),b=Yo(b,v));}return n.dirs&&(b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),g=b,Ht(y),g}const zt=e=>{let t;for(const n in e)("class"===n||"style"===n||S(n))&&((t||(t={}))[n]=e[n]);return t},Kt=(e,t)=>{const n={};for(const o in e)x(o)&&o.slice(9)in t||(n[o]=e[o]);return n};function Gt(e,t,n){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return !0;for(let r=0;r<o.length;r++){const s=o[r];if(t[s]!==e[s]&&!Lt(n,s))return !0}return !1}function qt({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent;}const Jt={name:"Suspense",__isSuspense:!0,process(e,t,n,o,r,s,i,l,c,a){null==e?function(e,t,n,o,r,s,i,l,c){const{p:a,o:{createElement:u}}=c,p=u("div"),f=e.suspense=Yt(e,r,o,t,p,n,s,i,l,c);a(null,f.pendingBranch=e.ssContent,p,null,o,f,s,i),f.deps>0?(Zt(e,"onPending"),Zt(e,"onFallback"),a(null,e.ssFallback,t,n,o,null,s,i),en(f,e.ssFallback)):f.resolve();}(t,n,o,r,s,i,l,c,a):function(e,t,n,o,r,s,i,l,{p:c,um:a,o:{createElement:u}}){const p=t.suspense=e.suspense;p.vnode=t,t.el=e.el;const f=t.ssContent,d=t.ssFallback,{activeBranch:h,pendingBranch:m,isInFallback:g,isHydrating:v}=p;if(m)p.pendingBranch=f,Wo(f,m)?(c(m,f,p.hiddenContainer,null,r,p,s,i,l),p.deps<=0?p.resolve():g&&(c(h,d,n,o,r,null,s,i,l),en(p,d))):(p.pendingId++,v?(p.isHydrating=!1,p.activeBranch=m):a(m,r,p),p.deps=0,p.effects.length=0,p.hiddenContainer=u("div"),g?(c(null,f,p.hiddenContainer,null,r,p,s,i,l),p.deps<=0?p.resolve():(c(h,d,n,o,r,null,s,i,l),en(p,d))):h&&Wo(f,h)?(c(h,f,n,o,r,p,s,i,l),p.resolve(!0)):(c(null,f,p.hiddenContainer,null,r,p,s,i,l),p.deps<=0&&p.resolve()));else if(h&&Wo(f,h))c(h,f,n,o,r,p,s,i,l),en(p,f);else if(Zt(t,"onPending"),p.pendingBranch=f,p.pendingId++,c(null,f,p.hiddenContainer,null,r,p,s,i,l),p.deps<=0)p.resolve();else {const{timeout:e,pendingId:t}=p;e>0?setTimeout((()=>{p.pendingId===t&&p.fallback(d);}),e):0===e&&p.fallback(d);}}(e,t,n,o,r,i,l,c,a);},hydrate:function(e,t,n,o,r,s,i,l,c){const a=t.suspense=Yt(t,o,n,e.parentNode,document.createElement("div"),null,r,s,i,l,!0),u=c(e,a.pendingBranch=t.ssContent,n,a,s,i);0===a.deps&&a.resolve();return u},create:Yt,normalize:function(e){const{shapeFlag:t,children:n}=e,o=32&t;e.ssContent=Qt(o?n.default:n),e.ssFallback=o?Qt(n.fallback):Jo(Fo);}};function Zt(e,t){const n=e.props&&e.props[t];O(n)&&n();}function Yt(e,t,n,o,r,s,i,l,c,a,u=!1){const{p:p,m:f,um:d,n:h,o:{parentNode:m,remove:g}}=a,v=Y(e.props&&e.props.timeout),y={vnode:e,parent:t,parentComponent:n,isSVG:i,container:o,hiddenContainer:r,anchor:s,deps:0,pendingId:0,timeout:"number"==typeof v?v:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(e=!1){const{vnode:t,activeBranch:n,pendingBranch:o,pendingId:r,effects:s,parentComponent:i,container:l}=y;if(y.isHydrating)y.isHydrating=!1;else if(!e){const e=n&&o.transition&&"out-in"===o.transition.mode;e&&(n.transition.afterLeave=()=>{r===y.pendingId&&f(o,l,t,0);});let{anchor:t}=y;n&&(t=h(n),d(n,i,y,!0)),e||f(o,l,t,0);}en(y,o),y.pendingBranch=null,y.isInFallback=!1;let c=y.parent,a=!1;for(;c;){if(c.pendingBranch){c.effects.push(...s),a=!0;break}c=c.parent;}a||Jr(s),y.effects=[],Zt(t,"onResolve");},fallback(e){if(!y.pendingBranch)return;const{vnode:t,activeBranch:n,parentComponent:o,container:r,isSVG:s}=y;Zt(t,"onFallback");const i=h(n),a=()=>{y.isInFallback&&(p(null,e,r,i,o,null,s,l,c),en(y,e));},u=e.transition&&"out-in"===e.transition.mode;u&&(n.transition.afterLeave=a),y.isInFallback=!0,d(n,o,null,!0),u||a();},move(e,t,n){y.activeBranch&&f(y.activeBranch,e,t,n),y.container=e;},next:()=>y.activeBranch&&h(y.activeBranch),registerDep(e,t){const n=!!y.pendingBranch;n&&y.deps++;const o=e.vnode.el;e.asyncDep.catch((t=>{Or(t,e,0);})).then((r=>{if(e.isUnmounted||y.isUnmounted||y.pendingId!==e.suspenseId)return;e.asyncResolved=!0;const{vnode:s}=e;yr(e,r,!1),o&&(s.el=o);const l=!o&&e.subTree.el;t(e,s,m(o||e.subTree.el),o?null:h(e.subTree),y,i,c),l&&g(l),qt(e,s.el),n&&0==--y.deps&&y.resolve();}));},unmount(e,t){y.isUnmounted=!0,y.activeBranch&&d(y.activeBranch,n,e,t),y.pendingBranch&&d(y.pendingBranch,n,e,t);}};return y}function Qt(e){let t;if(O(e)){const n=Lo&&e._c;n&&(e._d=!1,Io()),e=e(),n&&(e._d=!0,t=Vo,Bo());}if(N(e)){const t=function(e){let t;for(let n=0;n<e.length;n++){const o=e[n];if(!Do(o))return;if(o.type!==Fo||"v-if"===o.children){if(t)return;t=o;}}return t}(e);e=t;}return e=Xo(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter((t=>t!==e))),e}function Xt(e,t){t&&t.pendingBranch?N(e)?t.effects.push(...e):t.effects.push(e):Jr(e);}function en(e,t){e.activeBranch=t;const{vnode:n,parentComponent:o}=e,r=n.el=t.el;o&&o.subTree===n&&(o.vnode.el=r,qt(o,r));}function tn(e,t){if(ur){let n=ur.provides;const o=ur.parent&&ur.parent.provides;o===n&&(n=ur.provides=Object.create(o)),n[e]=t;}}function nn(e,t,n=!1){const o=ur||jt;if(o){const r=null==o.parent?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&O(t)?t.call(o.proxy):t}}function on(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return En((()=>{e.isMounted=!0;})),On((()=>{e.isUnmounting=!0;})),e}const rn=[Function,Array],sn={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:rn,onEnter:rn,onAfterEnter:rn,onEnterCancelled:rn,onBeforeLeave:rn,onLeave:rn,onAfterLeave:rn,onLeaveCancelled:rn,onBeforeAppear:rn,onAppear:rn,onAfterAppear:rn,onAppearCancelled:rn},setup(e,{slots:t}){const n=pr(),o=on();let r;return ()=>{const s=t.default&&fn(t.default(),!0);if(!s||!s.length)return;const i=yt(e),{mode:l}=i,c=s[0];if(o.isLeaving)return an(c);const a=un(c);if(!a)return an(c);const u=cn(a,i,o,n);pn(a,u);const p=n.subTree,f=p&&un(p);let d=!1;const{getTransitionKey:h}=a.type;if(h){const e=h();void 0===r?r=e:e!==r&&(r=e,d=!0);}if(f&&f.type!==Fo&&(!Wo(a,f)||d)){const e=cn(f,i,o,n);if(pn(f,e),"out-in"===l)return o.isLeaving=!0,e.afterLeave=()=>{o.isLeaving=!1,n.update();},an(c);"in-out"===l&&a.type!==Fo&&(e.delayLeave=(e,t,n)=>{ln(o,f)[String(f.key)]=f,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete u.delayedLeave;},u.delayedLeave=n;});}return c}}};function ln(e,t){const{leavingVNodes:n}=e;let o=n.get(t.type);return o||(o=Object.create(null),n.set(t.type,o)),o}function cn(e,t,n,o){const{appear:r,mode:s,persisted:i=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:a,onEnterCancelled:u,onBeforeLeave:p,onLeave:f,onAfterLeave:d,onLeaveCancelled:h,onBeforeAppear:m,onAppear:g,onAfterAppear:v,onAppearCancelled:y}=t,b=String(e.key),_=ln(n,e),S=(e,t)=>{e&&Rr(e,o,9,t);},x={mode:s,persisted:i,beforeEnter(t){let o=l;if(!n.isMounted){if(!r)return;o=m||l;}t._leaveCb&&t._leaveCb(!0);const s=_[b];s&&Wo(e,s)&&s.el._leaveCb&&s.el._leaveCb(),S(o,[t]);},enter(e){let t=c,o=a,s=u;if(!n.isMounted){if(!r)return;t=g||c,o=v||a,s=y||u;}let i=!1;const l=e._enterCb=t=>{i||(i=!0,S(t?s:o,[e]),x.delayedLeave&&x.delayedLeave(),e._enterCb=void 0);};t?(t(e,l),t.length<=1&&l()):l();},leave(t,o){const r=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return o();S(p,[t]);let s=!1;const i=t._leaveCb=n=>{s||(s=!0,o(),S(n?h:d,[t]),t._leaveCb=void 0,_[r]===e&&delete _[r]);};_[r]=e,f?(f(t,i),f.length<=1&&i()):i();},clone:e=>cn(e,t,n,o)};return x}function an(e){if(gn(e))return (e=Yo(e)).children=null,e}function un(e){return gn(e)?e.children?e.children[0]:void 0:e}function pn(e,t){6&e.shapeFlag&&e.component?pn(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t;}function fn(e,t=!1){let n=[],o=0;for(let r=0;r<e.length;r++){const s=e[r];s.type===Oo?(128&s.patchFlag&&o++,n=n.concat(fn(s.children,t))):(t||s.type!==Fo)&&n.push(s);}if(o>1)for(let r=0;r<n.length;r++)n[r].patchFlag=-2;return n}function dn(e){return O(e)?{setup:e,name:e.name}:e}const hn=e=>!!e.type.__asyncLoader;function mn(e,{vnode:{ref:t,props:n,children:o}}){const r=Jo(e,n,o);return r.ref=t,r}const gn=e=>e.type.__isKeepAlive,vn={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=pr(),o=n.ctx;if(!o.renderer)return t.default;const r=new Map,s=new Set;let i=null;const l=n.suspense,{renderer:{p:c,m:a,um:u,o:{createElement:p}}}=o,f=p("div");function d(e){Cn(e),u(e,n,l);}function h(e){r.forEach(((t,n)=>{const o=wr(t.type);!o||e&&e(o)||m(n);}));}function m(e){const t=r.get(e);i&&t.type===i.type?i&&Cn(i):d(t),r.delete(e),s.delete(e);}o.activate=(e,t,n,o,r)=>{const s=e.component;a(e,t,n,0,l),c(s.vnode,e,t,n,s,l,o,e.slotScopeIds,r),mo((()=>{s.isDeactivated=!1,s.a&&J(s.a);const t=e.props&&e.props.onVnodeMounted;t&&_o(t,s.parent,e);}),l);},o.deactivate=e=>{const t=e.component;a(e,f,null,1,l),mo((()=>{t.da&&J(t.da);const n=e.props&&e.props.onVnodeUnmounted;n&&_o(n,t.parent,e),t.isDeactivated=!0;}),l);},ns((()=>[e.include,e.exclude]),(([e,t])=>{e&&h((t=>yn(e,t))),t&&h((e=>!yn(t,e)));}),{flush:"post",deep:!0});let g=null;const v=()=>{null!=g&&r.set(g,wn(n.subTree));};return En(v),Rn(v),On((()=>{r.forEach((e=>{const{subTree:t,suspense:o}=n,r=wn(t);if(e.type!==r.type)d(e);else {Cn(r);const e=r.component.da;e&&mo(e,o);}}));})),()=>{if(g=null,!t.default)return null;const n=t.default(),o=n[0];if(n.length>1)return i=null,n;if(!(Do(o)&&(4&o.shapeFlag||128&o.shapeFlag)))return i=null,o;let l=wn(o);const c=l.type,a=wr(hn(l)?l.type.__asyncResolved||{}:c),{include:u,exclude:p,max:f}=e;if(u&&(!a||!yn(u,a))||p&&a&&yn(p,a))return i=l,o;const d=null==l.key?c:l.key,h=r.get(d);return l.el&&(l=Yo(l),128&o.shapeFlag&&(o.ssContent=l)),g=d,h?(l.el=h.el,l.component=h.component,l.transition&&pn(l,l.transition),l.shapeFlag|=512,s.delete(d),s.add(d)):(s.add(d),f&&s.size>parseInt(f,10)&&m(s.values().next().value)),l.shapeFlag|=256,i=l,o}}};function yn(e,t){return N(e)?e.some((e=>yn(e,t))):A(e)?e.split(",").indexOf(t)>-1:!!e.test&&e.test(t)}function bn(e,t){Sn(e,"a",t);}function _n(e,t){Sn(e,"da",t);}function Sn(e,t,n=ur){const o=e.__wdc||(e.__wdc=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent;}e();});if(kn(t,o,n),n){let e=n.parent;for(;e&&e.parent;)gn(e.parent.vnode)&&xn(o,t,n,e),e=e.parent;}}function xn(e,t,n,o){const r=kn(t,e,o,!0);An((()=>{w(o[t],r);}),n);}function Cn(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t;}function wn(e){return 128&e.shapeFlag?e.ssContent:e}function kn(e,t,n=ur,o=!1){if(n){const r=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;ve(),fr(n);const r=Rr(t,n,e,o);return dr(),ye(),r});return o?r.unshift(s):r.push(s),s}}const Tn=e=>(t,n=ur)=>(!vr||"sp"===e)&&kn(e,t,n),Nn=Tn("bm"),En=Tn("m"),$n=Tn("bu"),Rn=Tn("u"),On=Tn("bum"),An=Tn("um"),Fn=Tn("sp"),Mn=Tn("rtg"),Pn=Tn("rtc");function Vn(e,t=ur){kn("ec",e,t);}let In=!0;function Bn(e){const t=Un(e),n=e.proxy,o=e.ctx;In=!1,t.beforeCreate&&Ln(t.beforeCreate,e,"bc");const{data:r,computed:s,methods:i,watch:l,provide:c,inject:a,created:u,beforeMount:p,mounted:f,beforeUpdate:d,updated:h,activated:m,deactivated:g,beforeUnmount:v,unmounted:b,render:_,renderTracked:S,renderTriggered:x,errorCaptured:C,serverPrefetch:w,expose:k,inheritAttrs:T,components:E,directives:$}=t;if(a&&function(e,t,n=y,o=!1){N(e)&&(e=zn(e));for(const r in e){const n=e[r];let s;s=M(n)?"default"in n?nn(n.from||r,n.default,!0):nn(n.from||r):nn(n),wt(s)&&o?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:e=>s.value=e}):t[r]=s;}}(a,o,null,e.appContext.config.unwrapInjectedRef),i)for(const y in i){const e=i[y];O(e)&&(o[y]=e.bind(n));}if(r){const t=r.call(n,n);M(t)&&(e.data=pt(t));}if(In=!0,s)for(const N in s){const e=s[N],t=Pt({get:O(e)?e.bind(n,n):O(e.get)?e.get.bind(n,n):y,set:!O(e)&&O(e.set)?e.set.bind(n):y});Object.defineProperty(o,N,{enumerable:!0,configurable:!0,get:()=>t.value,set:e=>t.value=e});}if(l)for(const y in l)jn(l[y],o,n,y);if(c){const e=O(c)?c.call(n):c;Reflect.ownKeys(e).forEach((t=>{tn(t,e[t]);}));}function R(e,t){N(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n));}if(u&&Ln(u,e,"c"),R(Nn,p),R(En,f),R($n,d),R(Rn,h),R(bn,m),R(_n,g),R(Vn,C),R(Pn,S),R(Mn,x),R(On,v),R(An,b),R(Fn,w),N(k))if(k.length){const t=e.exposed||(e.exposed={});k.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t});}));}else e.exposed||(e.exposed={});_&&e.render===y&&(e.render=_),null!=T&&(e.inheritAttrs=T),E&&(e.components=E),$&&(e.directives=$);}function Ln(e,t,n){Rr(N(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n);}function jn(e,t,n,o){const r=o.includes(".")?ss(n,o):()=>n[o];if(A(e)){const n=t[e];O(n)&&ns(r,n);}else if(O(e))ns(r,e.bind(n));else if(M(e))if(N(e))e.forEach((e=>jn(e,t,n,o)));else {const o=O(e.handler)?e.handler.bind(n):t[e.handler];O(o)&&ns(r,o,e);}}function Un(e){const t=e.type,{mixins:n,extends:o}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:i}}=e.appContext,l=s.get(t);let c;return l?c=l:r.length||n||o?(c={},r.length&&r.forEach((e=>Hn(c,e,i,!0))),Hn(c,t,i)):c=t,s.set(t,c),c}function Hn(e,t,n,o=!1){const{mixins:r,extends:s}=t;s&&Hn(e,s,n,!0),r&&r.forEach((t=>Hn(e,t,n,!0)));for(const i in t)if(o&&"expose"===i);else {const o=Dn[i]||n&&n[i];e[i]=o?o(e[i],t[i]):t[i];}return e}const Dn={data:Wn,props:Gn,emits:Gn,methods:Gn,computed:Gn,beforeCreate:Kn,created:Kn,beforeMount:Kn,mounted:Kn,beforeUpdate:Kn,updated:Kn,beforeDestroy:Kn,beforeUnmount:Kn,destroyed:Kn,unmounted:Kn,activated:Kn,deactivated:Kn,errorCaptured:Kn,serverPrefetch:Kn,components:Gn,directives:Gn,watch:function(e,t){if(!e)return t;if(!t)return e;const n=C(Object.create(null),e);for(const o in t)n[o]=Kn(e[o],t[o]);return n},provide:Wn,inject:function(e,t){return Gn(zn(e),zn(t))}};function Wn(e,t){return t?e?function(){return C(O(e)?e.call(this,this):e,O(t)?t.call(this,this):t)}:t:e}function zn(e){if(N(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Kn(e,t){return e?[...new Set([].concat(e,t))]:t}function Gn(e,t){return e?C(C(Object.create(null),e),t):t}function qn(e,t,n,o){const[r,s]=e.propsOptions;let i,l=!1;if(t)for(let c in t){if(j(c))continue;const a=t[c];let u;r&&T(r,u=D(c))?s&&s.includes(u)?(i||(i={}))[u]=a:n[u]=a:Lt(e.emitsOptions,c)||a!==o[c]&&(o[c]=a,l=!0);}if(s){const t=yt(n),o=i||g;for(let i=0;i<s.length;i++){const l=s[i];n[l]=Jn(r,t,l,o[l],e,!T(o,l));}}return l}function Jn(e,t,n,o,r,s){const i=e[n];if(null!=i){const e=T(i,"default");if(e&&void 0===o){const e=i.default;if(i.type!==Function&&O(e)){const{propsDefaults:s}=r;n in s?o=s[n]:(fr(r),o=s[n]=e.call(null,t),dr());}else o=e;}i[0]&&(s&&!e?o=!1:!i[1]||""!==o&&o!==z(n)||(o=!0));}return o}function Zn(e,t,n=!1){const o=t.propsCache,r=o.get(e);if(r)return r;const s=e.props,i={},l=[];let c=!1;if(!O(e)){const o=e=>{c=!0;const[n,o]=Zn(e,t,!0);C(i,n),o&&l.push(...o);};!n&&t.mixins.length&&t.mixins.forEach(o),e.extends&&o(e.extends),e.mixins&&e.mixins.forEach(o);}if(!s&&!c)return o.set(e,v),v;if(N(s))for(let u=0;u<s.length;u++){const e=D(s[u]);Yn(e)&&(i[e]=g);}else if(s)for(const u in s){const e=D(u);if(Yn(e)){const t=s[u],n=i[e]=N(t)||O(t)?{type:t}:t;if(n){const t=eo(Boolean,n.type),o=eo(String,n.type);n[0]=t>-1,n[1]=o<0||t<o,(t>-1||T(n,"default"))&&l.push(e);}}}const a=[i,l];return o.set(e,a),a}function Yn(e){return "$"!==e[0]}function Qn(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function Xn(e,t){return Qn(e)===Qn(t)}function eo(e,t){return N(t)?t.findIndex((t=>Xn(t,e))):O(t)&&Xn(t,e)?0:-1}const to=e=>"_"===e[0]||"$stable"===e,no=e=>N(e)?e.map(Xo):[Xo(e)],oo=(e,t,n)=>{const o=Dt(((...e)=>no(t(...e))),n);return o._c=!1,o},ro=(e,t,n)=>{const o=e._ctx;for(const r in e){if(to(r))continue;const n=e[r];if(O(n))t[r]=oo(0,n,o);else if(null!=n){const e=no(n);t[r]=()=>e;}}},so=(e,t)=>{const n=no(t);e.slots.default=()=>n;};function io(e,t,n,o){const r=e.dirs,s=t&&t.dirs;for(let i=0;i<r.length;i++){const l=r[i];s&&(l.oldValue=s[i].value);let c=l.dir[o];c&&(ve(),Rr(c,n,8,[e.el,l,e,t]),ye());}}function lo(){return {app:null,config:{isNativeTag:b,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let co=0;function ao(e,t){return function(n,o=null){null==o||M(o)||(o=null);const r=lo(),s=new Set;let i=!1;const l=r.app={_uid:co++,_component:n,_props:o,_container:null,_context:r,_instance:null,version:ps,get config(){return r.config},set config(e){},use:(e,...t)=>(s.has(e)||(e&&O(e.install)?(s.add(e),e.install(l,...t)):O(e)&&(s.add(e),e(l,...t))),l),mixin:e=>(r.mixins.includes(e)||r.mixins.push(e),l),component:(e,t)=>t?(r.components[e]=t,l):r.components[e],directive:(e,t)=>t?(r.directives[e]=t,l):r.directives[e],mount(s,c,a){if(!i){const u=Jo(n,o);return u.appContext=r,c&&t?t(u,s):e(u,s,a),i=!0,l._container=s,s.__vue_app__=l,xr(u.component)||u.component.proxy}},unmount(){i&&(e(null,l._container),delete l._container.__vue_app__);},provide:(e,t)=>(r.provides[e]=t,l)};return l}}let uo=!1;const po=e=>/svg/.test(e.namespaceURI)&&"foreignObject"!==e.tagName,fo=e=>8===e.nodeType;function ho(e){const{mt:t,p:n,o:{patchProp:o,nextSibling:r,parentNode:s,remove:i,insert:l,createComment:c}}=e,a=(n,o,i,l,c,m=!1)=>{const g=fo(n)&&"["===n.data,v=()=>d(n,o,i,l,c,g),{type:y,ref:b,shapeFlag:_}=o,S=n.nodeType;o.el=n;let x=null;switch(y){case Ao:3!==S?x=v():(n.data!==o.children&&(uo=!0,n.data=o.children),x=r(n));break;case Fo:x=8!==S||g?v():r(n);break;case Mo:if(1===S){x=n;const e=!o.children.length;for(let t=0;t<o.staticCount;t++)e&&(o.children+=x.outerHTML),t===o.staticCount-1&&(o.anchor=x),x=r(x);return x}x=v();break;case Oo:x=g?f(n,o,i,l,c,m):v();break;default:if(1&_)x=1!==S||o.type.toLowerCase()!==n.tagName.toLowerCase()?v():u(n,o,i,l,c,m);else if(6&_){o.slotScopeIds=c;const e=s(n);if(t(o,e,null,i,l,po(e),m),x=g?h(n):r(n),hn(o)){let t;g?(t=Jo(Oo),t.anchor=x?x.previousSibling:e.lastChild):t=3===n.nodeType?Qo(""):Jo("div"),t.el=n,o.component.subTree=t;}}else 64&_?x=8!==S?v():o.type.hydrate(n,o,i,l,c,m,e,p):128&_&&(x=o.type.hydrate(n,o,i,l,po(s(n)),c,m,e,a));}return null!=b&&bo(b,null,l,o),x},u=(e,t,n,r,s,l)=>{l=l||!!t.dynamicChildren;const{type:c,props:a,patchFlag:u,shapeFlag:f,dirs:d}=t,h="input"===c&&d||"option"===c;if(h||-1!==u){if(d&&io(t,null,n,"created"),a)if(h||!l||48&u)for(const t in a)(h&&t.endsWith("value")||S(t)&&!j(t))&&o(e,t,null,a[t],!1,void 0,n);else a.onClick&&o(e,"onClick",null,a.onClick,!1,void 0,n);let c;if((c=a&&a.onVnodeBeforeMount)&&_o(c,n,t),d&&io(t,null,n,"beforeMount"),((c=a&&a.onVnodeMounted)||d)&&Xt((()=>{c&&_o(c,n,t),d&&io(t,null,n,"mounted");}),r),16&f&&(!a||!a.innerHTML&&!a.textContent)){let o=p(e.firstChild,t,e,n,r,s,l);for(;o;){uo=!0;const e=o;o=o.nextSibling,i(e);}}else 8&f&&e.textContent!==t.children&&(uo=!0,e.textContent=t.children);}return e.nextSibling},p=(e,t,o,r,s,i,l)=>{l=l||!!t.dynamicChildren;const c=t.children,u=c.length;for(let p=0;p<u;p++){const t=l?c[p]:c[p]=Xo(c[p]);if(e)e=a(e,t,r,s,i,l);else {if(t.type===Ao&&!t.children)continue;uo=!0,n(null,t,o,null,r,s,po(o),i);}}return e},f=(e,t,n,o,i,a)=>{const{slotScopeIds:u}=t;u&&(i=i?i.concat(u):u);const f=s(e),d=p(r(e),t,f,n,o,i,a);return d&&fo(d)&&"]"===d.data?r(t.anchor=d):(uo=!0,l(t.anchor=c("]"),f,d),d)},d=(e,t,o,l,c,a)=>{if(uo=!0,t.el=null,a){const t=h(e);for(;;){const n=r(e);if(!n||n===t)break;i(n);}}const u=r(e),p=s(e);return i(e),n(null,t,p,u,o,l,po(p),c),u},h=e=>{let t=0;for(;e;)if((e=r(e))&&fo(e)&&("["===e.data&&t++,"]"===e.data)){if(0===t)return r(e);t--;}return e};return [(e,t)=>{if(!t.hasChildNodes())return n(null,e,t),void Yr();uo=!1,a(t.firstChild,e,null,null,null),Yr(),uo&&console.error("Hydration completed but contains mismatches.");},a]}const mo=Xt;function go(e){return yo(e)}function vo(e){return yo(e,ho)}function yo(e,t){(Q||(Q="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{})).__VUE__=!0;const{insert:n,remove:o,patchProp:r,createElement:s,createText:i,createComment:l,setText:c,setElementText:a,parentNode:u,nextSibling:p,setScopeId:f=y,cloneNode:d,insertStaticContent:h}=e,m=(e,t,n,o=null,r=null,s=null,i=!1,l=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Wo(e,t)&&(o=X(e),W(e,r,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:a,ref:u,shapeFlag:p}=t;switch(a){case Ao:b(e,t,n,o);break;case Fo:_(e,t,n,o);break;case Mo:null==e&&S(t,n,o,i);break;case Oo:O(e,t,n,o,r,s,i,l,c);break;default:1&p?x(e,t,n,o,r,s,i,l,c):6&p?A(e,t,n,o,r,s,i,l,c):(64&p||128&p)&&a.process(e,t,n,o,r,s,i,l,c,ne);}null!=u&&r&&bo(u,e&&e.ref,s,t||e,!t);},b=(e,t,o,r)=>{if(null==e)n(t.el=i(t.children),o,r);else {const n=t.el=e.el;t.children!==e.children&&c(n,t.children);}},_=(e,t,o,r)=>{null==e?n(t.el=l(t.children||""),o,r):t.el=e.el;},S=(e,t,n,o)=>{[e.el,e.anchor]=h(e.children,t,n,o);},x=(e,t,n,o,r,s,i,l,c)=>{i=i||"svg"===t.type,null==e?w(t,n,o,r,s,i,l,c):E(e,t,r,s,i,l,c);},w=(e,t,o,i,l,c,u,p)=>{let f,h;const{type:m,props:g,shapeFlag:v,transition:y,patchFlag:b,dirs:_}=e;if(e.el&&void 0!==d&&-1===b)f=e.el=d(e.el);else {if(f=e.el=s(e.type,c,g&&g.is,g),8&v?a(f,e.children):16&v&&N(e.children,f,null,i,l,c&&"foreignObject"!==m,u,p),_&&io(e,null,i,"created"),g){for(const t in g)"value"===t||j(t)||r(f,t,null,g[t],c,e.children,i,l,Y);"value"in g&&r(f,"value",null,g.value),(h=g.onVnodeBeforeMount)&&_o(h,i,e);}k(f,e,e.scopeId,u,i);}_&&io(e,null,i,"beforeMount");const S=(!l||l&&!l.pendingBranch)&&y&&!y.persisted;S&&y.beforeEnter(f),n(f,t,o),((h=g&&g.onVnodeMounted)||S||_)&&mo((()=>{h&&_o(h,i,e),S&&y.enter(f),_&&io(e,null,i,"mounted");}),l);},k=(e,t,n,o,r)=>{if(n&&f(e,n),o)for(let s=0;s<o.length;s++)f(e,o[s]);if(r){if(t===r.subTree){const t=r.vnode;k(e,t,t.scopeId,t.slotScopeIds,r.parent);}}},N=(e,t,n,o,r,s,i,l,c=0)=>{for(let a=c;a<e.length;a++){const c=e[a]=l?er(e[a]):Xo(e[a]);m(null,c,t,n,o,r,s,i,l);}},E=(e,t,n,o,s,i,l)=>{const c=t.el=e.el;let{patchFlag:u,dynamicChildren:p,dirs:f}=t;u|=16&e.patchFlag;const d=e.props||g,h=t.props||g;let m;(m=h.onVnodeBeforeUpdate)&&_o(m,n,t,e),f&&io(t,e,n,"beforeUpdate");const v=s&&"foreignObject"!==t.type;if(p?$(e.dynamicChildren,p,c,n,o,v,i):l||B(e,t,c,null,n,o,v,i,!1),u>0){if(16&u)R(c,t,d,h,n,o,s);else if(2&u&&d.class!==h.class&&r(c,"class",null,h.class,s),4&u&&r(c,"style",d.style,h.style,s),8&u){const i=t.dynamicProps;for(let t=0;t<i.length;t++){const l=i[t],a=d[l],u=h[l];u===a&&"value"!==l||r(c,l,a,u,s,e.children,n,o,Y);}}1&u&&e.children!==t.children&&a(c,t.children);}else l||null!=p||R(c,t,d,h,n,o,s);((m=h.onVnodeUpdated)||f)&&mo((()=>{m&&_o(m,n,t,e),f&&io(t,e,n,"updated");}),o);},$=(e,t,n,o,r,s,i)=>{for(let l=0;l<t.length;l++){const c=e[l],a=t[l],p=c.el&&(c.type===Oo||!Wo(c,a)||70&c.shapeFlag)?u(c.el):n;m(c,a,p,null,o,r,s,i,!0);}},R=(e,t,n,o,s,i,l)=>{if(n!==o){for(const c in o){if(j(c))continue;const a=o[c],u=n[c];a!==u&&"value"!==c&&r(e,c,u,a,l,t.children,s,i,Y);}if(n!==g)for(const c in n)j(c)||c in o||r(e,c,n[c],null,l,t.children,s,i,Y);"value"in o&&r(e,"value",n.value,o.value);}},O=(e,t,o,r,s,l,c,a,u)=>{const p=t.el=e?e.el:i(""),f=t.anchor=e?e.anchor:i("");let{patchFlag:d,dynamicChildren:h,slotScopeIds:m}=t;m&&(a=a?a.concat(m):m),null==e?(n(p,o,r),n(f,o,r),N(t.children,o,f,s,l,c,a,u)):d>0&&64&d&&h&&e.dynamicChildren?($(e.dynamicChildren,h,o,s,l,c,a),(null!=t.key||s&&t===s.subTree)&&So(e,t,!0)):B(e,t,o,f,s,l,c,a,u);},A=(e,t,n,o,r,s,i,l,c)=>{t.slotScopeIds=l,null==e?512&t.shapeFlag?r.ctx.activate(t,n,o,i,c):F(t,n,o,r,s,i,c):M(e,t,c);},F=(e,t,n,o,r,s,i)=>{const l=e.component=function(e,t,n){const o=e.type,r=(t?t.appContext:e.appContext)||cr,s={uid:ar++,vnode:e,type:o,parent:t,appContext:r,root:null,next:null,subTree:null,update:null,scope:new te(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Zn(o,r),emitsOptions:Bt(o,r),emit:null,emitted:null,propsDefaults:g,inheritAttrs:o.inheritAttrs,ctx:g,data:g,props:g,attrs:g,slots:g,refs:g,setupState:g,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};s.ctx={_:s},s.root=t?t.root:s,s.emit=It.bind(null,s),e.ce&&e.ce(s);return s}(e,o,r);if(gn(e)&&(l.ctx.renderer=ne),function(e,t=!1){vr=t;const{props:n,children:o}=e.vnode,r=hr(e);(function(e,t,n,o=!1){const r={},s={};Z(s,zo,1),e.propsDefaults=Object.create(null),qn(e,t,r,s);for(const i in e.propsOptions[0])i in r||(r[i]=void 0);e.props=n?o?r:ft(r):e.type.props?r:s,e.attrs=s;})(e,n,r,t),((e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=yt(t),Z(t,"_",n)):ro(t,e.slots={});}else e.slots={},t&&so(e,t);Z(e.slots,zo,1);})(e,o);r?function(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=bt(new Proxy(e.ctx,ir));const{setup:o}=n;if(o){const n=e.setupContext=o.length>1?Sr(e):null;fr(e),ve();const r=$r(o,e,0,[e.props,n]);if(ye(),dr(),P(r)){if(r.then(dr,dr),t)return r.then((n=>{yr(e,n,t);})).catch((t=>{Or(t,e,0);}));e.asyncDep=r;}else yr(e,r,t);}else _r(e,t);}(e,t):void 0;vr=!1;}(l),l.asyncDep){if(r&&r.registerDep(l,V),!e.el){const e=l.subTree=Jo(Fo);_(null,e,t,n);}}else V(l,e,t,n,r,s,i);},M=(e,t,n)=>{const o=t.component=e.component;if(function(e,t,n){const{props:o,children:r,component:s}=e,{props:i,children:l,patchFlag:c}=t,a=s.emitsOptions;if(t.dirs||t.transition)return !0;if(!(n&&c>=0))return !(!r&&!l||l&&l.$stable)||o!==i&&(o?!i||Gt(o,i,a):!!i);if(1024&c)return !0;if(16&c)return o?Gt(o,i,a):!!i;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(i[n]!==o[n]&&!Lt(a,n))return !0}}return !1}(e,t,n)){if(o.asyncDep&&!o.asyncResolved)return void I(o,t,n);o.next=t,function(e){const t=Mr.indexOf(e);t>Pr&&Mr.splice(t,1);}(o.update),o.update();}else t.component=e.component,t.el=e.el,o.vnode=t;},V=(e,t,n,o,r,s,i)=>{const l=new de((()=>{if(e.isMounted){let t,{next:n,bu:o,u:c,parent:a,vnode:p}=e,f=n;l.allowRecurse=!1,n?(n.el=p.el,I(e,n,i)):n=p,o&&J(o),(t=n.props&&n.props.onVnodeBeforeUpdate)&&_o(t,a,n,p),l.allowRecurse=!0;const d=Wt(e),h=e.subTree;e.subTree=d,m(h,d,u(h.el),X(h),e,r,s),n.el=d.el,null===f&&qt(e,d.el),c&&mo(c,r),(t=n.props&&n.props.onVnodeUpdated)&&mo((()=>_o(t,a,n,p)),r);}else {let i;const{el:c,props:a}=t,{bm:u,m:p,parent:f}=e,d=hn(t);if(l.allowRecurse=!1,u&&J(u),!d&&(i=a&&a.onVnodeBeforeMount)&&_o(i,f,t),l.allowRecurse=!0,c&&re){const n=()=>{e.subTree=Wt(e),re(c,e.subTree,e,r,null);};d?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n();}else {const i=e.subTree=Wt(e);m(null,i,n,o,e,r,s),t.el=i.el;}if(p&&mo(p,r),!d&&(i=a&&a.onVnodeMounted)){const e=t;mo((()=>_o(i,f,e)),r);}256&t.shapeFlag&&e.a&&mo(e.a,r),e.isMounted=!0,t=n=o=null;}}),(()=>Kr(e.update)),e.scope),c=e.update=l.run.bind(l);c.id=e.uid,l.allowRecurse=c.allowRecurse=!0,c();},I=(e,t,n)=>{t.component=e;const o=e.vnode.props;e.vnode=t,e.next=null,function(e,t,n,o){const{props:r,attrs:s,vnode:{patchFlag:i}}=e,l=yt(r),[c]=e.propsOptions;let a=!1;if(!(o||i>0)||16&i){let o;qn(e,t,r,s)&&(a=!0);for(const s in l)t&&(T(t,s)||(o=z(s))!==s&&T(t,o))||(c?!n||void 0===n[s]&&void 0===n[o]||(r[s]=Jn(c,l,s,void 0,e,!0)):delete r[s]);if(s!==l)for(const e in s)t&&T(t,e)||(delete s[e],a=!0);}else if(8&i){const n=e.vnode.dynamicProps;for(let o=0;o<n.length;o++){let i=n[o];const u=t[i];if(c)if(T(s,i))u!==s[i]&&(s[i]=u,a=!0);else {const t=D(i);r[t]=Jn(c,l,t,u,e,!1);}else u!==s[i]&&(s[i]=u,a=!0);}}a&&xe(e,"set","$attrs");}(e,t.props,o,n),((e,t,n)=>{const{vnode:o,slots:r}=e;let s=!0,i=g;if(32&o.shapeFlag){const e=t._;e?n&&1===e?s=!1:(C(r,t),n||1!==e||delete r._):(s=!t.$stable,ro(t,r)),i=t;}else t&&(so(e,t),i={default:1});if(s)for(const l in r)to(l)||l in i||delete r[l];})(e,t.children,n),ve(),Zr(void 0,e.update),ye();},B=(e,t,n,o,r,s,i,l,c=!1)=>{const u=e&&e.children,p=e?e.shapeFlag:0,f=t.children,{patchFlag:d,shapeFlag:h}=t;if(d>0){if(128&d)return void U(u,f,n,o,r,s,i,l,c);if(256&d)return void L(u,f,n,o,r,s,i,l,c)}8&h?(16&p&&Y(u,r,s),f!==u&&a(n,f)):16&p?16&h?U(u,f,n,o,r,s,i,l,c):Y(u,r,s,!0):(8&p&&a(n,""),16&h&&N(f,n,o,r,s,i,l,c));},L=(e,t,n,o,r,s,i,l,c)=>{const a=(e=e||v).length,u=(t=t||v).length,p=Math.min(a,u);let f;for(f=0;f<p;f++){const o=t[f]=c?er(t[f]):Xo(t[f]);m(e[f],o,n,null,r,s,i,l,c);}a>u?Y(e,r,s,!0,!1,p):N(t,n,o,r,s,i,l,c,p);},U=(e,t,n,o,r,s,i,l,c)=>{let a=0;const u=t.length;let p=e.length-1,f=u-1;for(;a<=p&&a<=f;){const o=e[a],u=t[a]=c?er(t[a]):Xo(t[a]);if(!Wo(o,u))break;m(o,u,n,null,r,s,i,l,c),a++;}for(;a<=p&&a<=f;){const o=e[p],a=t[f]=c?er(t[f]):Xo(t[f]);if(!Wo(o,a))break;m(o,a,n,null,r,s,i,l,c),p--,f--;}if(a>p){if(a<=f){const e=f+1,p=e<u?t[e].el:o;for(;a<=f;)m(null,t[a]=c?er(t[a]):Xo(t[a]),n,p,r,s,i,l,c),a++;}}else if(a>f)for(;a<=p;)W(e[a],r,s,!0),a++;else {const d=a,h=a,g=new Map;for(a=h;a<=f;a++){const e=t[a]=c?er(t[a]):Xo(t[a]);null!=e.key&&g.set(e.key,a);}let y,b=0;const _=f-h+1;let S=!1,x=0;const C=new Array(_);for(a=0;a<_;a++)C[a]=0;for(a=d;a<=p;a++){const o=e[a];if(b>=_){W(o,r,s,!0);continue}let u;if(null!=o.key)u=g.get(o.key);else for(y=h;y<=f;y++)if(0===C[y-h]&&Wo(o,t[y])){u=y;break}void 0===u?W(o,r,s,!0):(C[u-h]=a+1,u>=x?x=u:S=!0,m(o,t[u],n,null,r,s,i,l,c),b++);}const w=S?function(e){const t=e.slice(),n=[0];let o,r,s,i,l;const c=e.length;for(o=0;o<c;o++){const c=e[o];if(0!==c){if(r=n[n.length-1],e[r]<c){t[o]=r,n.push(o);continue}for(s=0,i=n.length-1;s<i;)l=s+i>>1,e[n[l]]<c?s=l+1:i=l;c<e[n[s]]&&(s>0&&(t[o]=n[s-1]),n[s]=o);}}s=n.length,i=n[s-1];for(;s-- >0;)n[s]=i,i=t[i];return n}(C):v;for(y=w.length-1,a=_-1;a>=0;a--){const e=h+a,p=t[e],f=e+1<u?t[e+1].el:o;0===C[a]?m(null,p,n,f,r,s,i,l,c):S&&(y<0||a!==w[y]?H(p,n,f,2):y--);}}},H=(e,t,o,r,s=null)=>{const{el:i,type:l,transition:c,children:a,shapeFlag:u}=e;if(6&u)return void H(e.component.subTree,t,o,r);if(128&u)return void e.suspense.move(t,o,r);if(64&u)return void l.move(e,t,o,ne);if(l===Oo){n(i,t,o);for(let e=0;e<a.length;e++)H(a[e],t,o,r);return void n(e.anchor,t,o)}if(l===Mo)return void(({el:e,anchor:t},o,r)=>{let s;for(;e&&e!==t;)s=p(e),n(e,o,r),e=s;n(t,o,r);})(e,t,o);if(2!==r&&1&u&&c)if(0===r)c.beforeEnter(i),n(i,t,o),mo((()=>c.enter(i)),s);else {const{leave:e,delayLeave:r,afterLeave:s}=c,l=()=>n(i,t,o),a=()=>{e(i,(()=>{l(),s&&s();}));};r?r(i,l,a):a();}else n(i,t,o);},W=(e,t,n,o=!1,r=!1)=>{const{type:s,props:i,ref:l,children:c,dynamicChildren:a,shapeFlag:u,patchFlag:p,dirs:f}=e;if(null!=l&&bo(l,null,n,e,!0),256&u)return void t.ctx.deactivate(e);const d=1&u&&f,h=!hn(e);let m;if(h&&(m=i&&i.onVnodeBeforeUnmount)&&_o(m,t,e),6&u)q(e.component,n,o);else {if(128&u)return void e.suspense.unmount(n,o);d&&io(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,r,ne,o):a&&(s!==Oo||p>0&&64&p)?Y(a,t,n,!1,!0):(s===Oo&&384&p||!r&&16&u)&&Y(c,t,n),o&&K(e);}(h&&(m=i&&i.onVnodeUnmounted)||d)&&mo((()=>{m&&_o(m,t,e),d&&io(e,null,t,"unmounted");}),n);},K=e=>{const{type:t,el:n,anchor:r,transition:s}=e;if(t===Oo)return void G(n,r);if(t===Mo)return void(({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=p(e),o(e),e=n;o(t);})(e);const i=()=>{o(n),s&&!s.persisted&&s.afterLeave&&s.afterLeave();};if(1&e.shapeFlag&&s&&!s.persisted){const{leave:t,delayLeave:o}=s,r=()=>t(n,i);o?o(e.el,i,r):r();}else i();},G=(e,t)=>{let n;for(;e!==t;)n=p(e),o(e),e=n;o(t);},q=(e,t,n)=>{const{bum:o,scope:r,update:s,subTree:i,um:l}=e;o&&J(o),r.stop(),s&&(s.active=!1,W(i,e,t,n)),l&&mo(l,t),mo((()=>{e.isUnmounted=!0;}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve());},Y=(e,t,n,o=!1,r=!1,s=0)=>{for(let i=s;i<e.length;i++)W(e[i],t,n,o,r);},X=e=>6&e.shapeFlag?X(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el),ee=(e,t,n)=>{null==e?t._vnode&&W(t._vnode,null,null,!0):m(t._vnode||null,e,t,null,null,null,n),Yr(),t._vnode=e;},ne={p:m,um:W,m:H,r:K,mt:F,mc:N,pc:B,pbc:$,n:X,o:e};let oe,re;return t&&([oe,re]=t(ne)),{render:ee,hydrate:oe,createApp:ao(ee,oe)}}function bo(e,t,n,o,r=!1){if(N(e))return void e.forEach(((e,s)=>bo(e,t&&(N(t)?t[s]:t),n,o,r)));if(hn(o)&&!r)return;const s=4&o.shapeFlag?xr(o.component)||o.component.proxy:o.el,i=r?null:s,{i:l,r:c}=e,a=t&&t.r,u=l.refs===g?l.refs={}:l.refs,p=l.setupState;if(null!=a&&a!==c&&(A(a)?(u[a]=null,T(p,a)&&(p[a]=null)):wt(a)&&(a.value=null)),A(c)){const e=()=>{u[c]=i,T(p,c)&&(p[c]=i);};i?(e.id=-1,mo(e,n)):e();}else if(wt(c)){const e=()=>{c.value=i;};i?(e.id=-1,mo(e,n)):e();}else O(c)&&$r(c,l,12,[i,u]);}function _o(e,t,n,o=null){Rr(e,t,7,[n,o]);}function So(e,t,n=!1){const o=e.children,r=t.children;if(N(o)&&N(r))for(let s=0;s<o.length;s++){const e=o[s];let t=r[s];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=r[s]=er(r[s]),t.el=e.el),n||So(e,t));}}const xo=e=>e&&(e.disabled||""===e.disabled),Co=e=>"undefined"!=typeof SVGElement&&e instanceof SVGElement,wo=(e,t)=>{const n=e&&e.to;if(A(n)){if(t){return t(n)}return null}return n};function ko(e,t,n,{o:{insert:o},m:r},s=2){0===s&&o(e.targetAnchor,t,n);const{el:i,anchor:l,shapeFlag:c,children:a,props:u}=e,p=2===s;if(p&&o(i,t,n),(!p||xo(u))&&16&c)for(let f=0;f<a.length;f++)r(a[f],t,n,2);p&&o(l,t,n);}const To={__isTeleport:!0,process(e,t,n,o,r,s,i,l,c,a){const{mc:u,pc:p,pbc:f,o:{insert:d,querySelector:h,createText:m}}=a,g=xo(t.props);let{shapeFlag:v,children:y,dynamicChildren:b}=t;if(null==e){const e=t.el=m(""),a=t.anchor=m("");d(e,n,o),d(a,n,o);const p=t.target=wo(t.props,h),f=t.targetAnchor=m("");p&&(d(f,p),i=i||Co(p));const b=(e,t)=>{16&v&&u(y,e,t,r,s,i,l,c);};g?b(n,a):p&&b(p,f);}else {t.el=e.el;const o=t.anchor=e.anchor,u=t.target=e.target,d=t.targetAnchor=e.targetAnchor,m=xo(e.props),v=m?n:u,y=m?o:d;if(i=i||Co(u),b?(f(e.dynamicChildren,b,v,r,s,i,l),So(e,t,!0)):c||p(e,t,v,y,r,s,i,l,!1),g)m||ko(t,n,o,a,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const e=t.target=wo(t.props,h);e&&ko(t,e,null,a,0);}else m&&ko(t,u,d,a,1);}},remove(e,t,n,o,{um:r,o:{remove:s}},i){const{shapeFlag:l,children:c,anchor:a,targetAnchor:u,target:p,props:f}=e;if(p&&s(u),(i||!xo(f))&&(s(a),16&l))for(let d=0;d<c.length;d++){const e=c[d];r(e,t,n,!0,!!e.dynamicChildren);}},move:ko,hydrate:function(e,t,n,o,r,s,{o:{nextSibling:i,parentNode:l,querySelector:c}},a){const u=t.target=wo(t.props,c);if(u){const c=u._lpa||u.firstChild;16&t.shapeFlag&&(xo(t.props)?(t.anchor=a(i(e),t,l(e),n,o,r,s),t.targetAnchor=c):(t.anchor=i(e),t.targetAnchor=a(c,t,u,n,o,r,s)),u._lpa=t.targetAnchor&&i(t.targetAnchor));}return t.anchor&&i(t.anchor)}},No="components";const Eo=Symbol();function $o(e,t,n=!0,o=!1){const r=jt||ur;if(r){const n=r.type;if(e===No){const e=wr(n);if(e&&(e===t||e===D(t)||e===K(D(t))))return n}const s=Ro(r[e]||n[e],t)||Ro(r.appContext[e],t);return !s&&o?n:s}}function Ro(e,t){return e&&(e[t]||e[D(t)]||e[K(D(t))])}const Oo=Symbol(void 0),Ao=Symbol(void 0),Fo=Symbol(void 0),Mo=Symbol(void 0),Po=[];let Vo=null;function Io(e=!1){Po.push(Vo=e?null:[]);}function Bo(){Po.pop(),Vo=Po[Po.length-1]||null;}let Lo=1;function jo(e){Lo+=e;}function Uo(e){return e.dynamicChildren=Lo>0?Vo||v:null,Bo(),Lo>0&&Vo&&Vo.push(e),e}function Ho(e,t,n,o,r){return Uo(Jo(e,t,n,o,r,!0))}function Do(e){return !!e&&!0===e.__v_isVNode}function Wo(e,t){return e.type===t.type&&e.key===t.key}const zo="__vInternal",Ko=({key:e})=>null!=e?e:null,Go=({ref:e})=>null!=e?A(e)||wt(e)||O(e)?{i:jt,r:e}:e:null;function qo(e,t=null,n=null,o=0,r=null,s=(e===Oo?0:1),i=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ko(t),ref:t&&Go(t),scopeId:Ut,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:o,dynamicProps:r,dynamicChildren:null,appContext:null};return l?(tr(c,n),128&s&&e.normalize(c)):n&&(c.shapeFlag|=A(n)?8:16),Lo>0&&!i&&Vo&&(c.patchFlag>0||6&s)&&32!==c.patchFlag&&Vo.push(c),c}const Jo=function(e,t=null,n=null,o=0,r=null,i=!1){e&&e!==Eo||(e=Fo);if(Do(e)){const o=Yo(e,t,!0);return n&&tr(o,n),o}l=e,O(l)&&"__vccOpts"in l&&(e=e.__vccOpts);var l;if(t){t=Zo(t);let{class:e,style:n}=t;e&&!A(e)&&(t.class=a(e)),M(n)&&(vt(n)&&!N(n)&&(n=C({},n)),t.style=s(n));}const c=A(e)?1:(e=>e.__isSuspense)(e)?128:(e=>e.__isTeleport)(e)?64:M(e)?4:O(e)?2:0;return qo(e,t,n,o,r,c,i,!0)};function Zo(e){return e?vt(e)||zo in e?C({},e):e:null}function Yo(e,t,n=!1){const{props:o,ref:r,patchFlag:s,children:i}=e,l=t?nr(o||{},t):o;return {__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Ko(l),ref:t&&t.ref?n&&r?N(r)?r.concat(Go(t)):[r,Go(t)]:Go(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Oo?-1===s?16:16|s:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Yo(e.ssContent),ssFallback:e.ssFallback&&Yo(e.ssFallback),el:e.el,anchor:e.anchor}}function Qo(e=" ",t=0){return Jo(Ao,null,e,t)}function Xo(e){return null==e||"boolean"==typeof e?Jo(Fo):N(e)?Jo(Oo,null,e.slice()):"object"==typeof e?er(e):Jo(Ao,null,String(e))}function er(e){return null===e.el||e.memo?e:Yo(e)}function tr(e,t){let n=0;const{shapeFlag:o}=e;if(null==t)t=null;else if(N(t))n=16;else if("object"==typeof t){if(65&o){const n=t.default;return void(n&&(n._c&&(n._d=!1),tr(e,n()),n._c&&(n._d=!0)))}{n=32;const o=t._;o||zo in t?3===o&&jt&&(1===jt.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=jt;}}else O(t)?(t={default:t,_ctx:jt},n=32):(t=String(t),64&o?(n=16,t=[Qo(t)]):n=8);e.children=t,e.shapeFlag|=n;}function nr(...e){const t={};for(let n=0;n<e.length;n++){const o=e[n];for(const e in o)if("class"===e)t.class!==o.class&&(t.class=a([t.class,o.class]));else if("style"===e)t.style=s([t.style,o.style]);else if(S(e)){const n=t[e],r=o[e];n!==r&&(t[e]=n?[].concat(n,r):r);}else ""!==e&&(t[e]=o[e]);}return t}function or(e){return e.some((e=>!Do(e)||e.type!==Fo&&!(e.type===Oo&&!or(e.children))))?e:null}const rr=e=>e?hr(e)?xr(e)||e.proxy:rr(e.parent):null,sr=C(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>rr(e.parent),$root:e=>rr(e.root),$emit:e=>e.emit,$options:e=>Un(e),$forceUpdate:e=>()=>Kr(e.update),$nextTick:e=>zr.bind(e.proxy),$watch:e=>rs.bind(e)}),ir={get({_:e},t){const{ctx:n,setupState:o,data:r,props:s,accessCache:i,type:l,appContext:c}=e;let a;if("$"!==t[0]){const l=i[t];if(void 0!==l)switch(l){case 0:return o[t];case 1:return r[t];case 3:return n[t];case 2:return s[t]}else {if(o!==g&&T(o,t))return i[t]=0,o[t];if(r!==g&&T(r,t))return i[t]=1,r[t];if((a=e.propsOptions[0])&&T(a,t))return i[t]=2,s[t];if(n!==g&&T(n,t))return i[t]=3,n[t];In&&(i[t]=4);}}const u=sr[t];let p,f;return u?("$attrs"===t&&be(e,0,t),u(e)):(p=l.__cssModules)&&(p=p[t])?p:n!==g&&T(n,t)?(i[t]=3,n[t]):(f=c.config.globalProperties,T(f,t)?f[t]:void 0)},set({_:e},t,n){const{data:o,setupState:r,ctx:s}=e;if(r!==g&&T(r,t))r[t]=n;else if(o!==g&&T(o,t))o[t]=n;else if(T(e.props,t))return !1;return ("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:r,propsOptions:s}},i){let l;return void 0!==n[i]||e!==g&&T(e,i)||t!==g&&T(t,i)||(l=s[0])&&T(l,i)||T(o,i)||T(sr,i)||T(r.config.globalProperties,i)}},lr=C({},ir,{get(e,t){if(t!==Symbol.unscopables)return ir.get(e,t,e)},has:(e,t)=>"_"!==t[0]&&!n(t)}),cr=lo();let ar=0;let ur=null;const pr=()=>ur||jt,fr=e=>{ur=e,e.scope.on();},dr=()=>{ur&&ur.scope.off(),ur=null;};function hr(e){return 4&e.vnode.shapeFlag}let mr,gr,vr=!1;function yr(e,t,n){O(t)?e.render=t:M(t)&&(e.setupState=Rt(t)),_r(e,n);}function br(e){mr=e,gr=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,lr));};}function _r(e,t,n){const o=e.type;if(!e.render){if(!t&&mr&&!o.render){const t=o.template;if(t){const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:s,compilerOptions:i}=o,l=C(C({isCustomElement:n,delimiters:s},r),i);o.render=mr(t,l);}}e.render=o.render||y,gr&&gr(e);}fr(e),ve(),Bn(e),ye(),dr();}function Sr(e){const t=t=>{e.exposed=t||{};};let n;return {get attrs(){return n||(n=function(e){return new Proxy(e.attrs,{get:(t,n)=>(be(e,0,"$attrs"),t[n])})}(e))},slots:e.slots,emit:e.emit,expose:t}}function xr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Rt(bt(e.exposed)),{get:(t,n)=>n in t?t[n]:n in sr?sr[n](e):void 0}))}const Cr=/(?:^|[-_])(\w)/g;function wr(e){return O(e)&&e.displayName||e.name}function kr(e,t,n=!1){let o=wr(t);if(!o&&t.__file){const e=t.__file.match(/([^/\\]+)\.\w+$/);e&&(o=e[1]);}if(!o&&e&&e.parent){const n=e=>{for(const n in e)if(e[n]===t)return n};o=n(e.components||e.parent.type.components)||n(e.appContext.components);}return o?o.replace(Cr,(e=>e.toUpperCase())).replace(/[-_]/g,""):n?"App":"Anonymous"}const Tr=[];function Nr(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach((n=>{t.push(...Er(n,e[n]));})),n.length>3&&t.push(" ..."),t}function Er(e,t,n){return A(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):"number"==typeof t||"boolean"==typeof t||null==t?n?t:[`${e}=${t}`]:wt(t)?(t=Er(e,yt(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):O(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=yt(t),n?t:[`${e}=`,t])}function $r(e,t,n,o){let r;try{r=o?e(...o):e();}catch(s){Or(s,t,n);}return r}function Rr(e,t,n,o){if(O(e)){const r=$r(e,t,n,o);return r&&P(r)&&r.catch((e=>{Or(e,t,n);})),r}const r=[];for(let s=0;s<e.length;s++)r.push(Rr(e[s],t,n,o));return r}function Or(e,t,n,o=!0){if(t){let o=t.parent;const r=t.proxy,s=n;for(;o;){const t=o.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,r,s))return;o=o.parent;}const i=t.appContext.config.errorHandler;if(i)return void $r(i,null,10,[e,r,s])}!function(e,t,n,o=!0){console.error(e);}(e,0,0,o);}let Ar=!1,Fr=!1;const Mr=[];let Pr=0;const Vr=[];let Ir=null,Br=0;const Lr=[];let jr=null,Ur=0;const Hr=Promise.resolve();let Dr=null,Wr=null;function zr(e){const t=Dr||Hr;return e?t.then(this?e.bind(this):e):t}function Kr(e){Mr.length&&Mr.includes(e,Ar&&e.allowRecurse?Pr+1:Pr)||e===Wr||(null==e.id?Mr.push(e):Mr.splice(function(e){let t=Pr+1,n=Mr.length;for(;t<n;){const o=t+n>>>1;Qr(Mr[o])<e?t=o+1:n=o;}return t}(e.id),0,e),Gr());}function Gr(){Ar||Fr||(Fr=!0,Dr=Hr.then(Xr));}function qr(e,t,n,o){N(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?o+1:o)||n.push(e),Gr();}function Jr(e){qr(e,jr,Lr,Ur);}function Zr(e,t=null){if(Vr.length){for(Wr=t,Ir=[...new Set(Vr)],Vr.length=0,Br=0;Br<Ir.length;Br++)Ir[Br]();Ir=null,Br=0,Wr=null,Zr(e,t);}}function Yr(e){if(Lr.length){const e=[...new Set(Lr)];if(Lr.length=0,jr)return void jr.push(...e);for(jr=e,jr.sort(((e,t)=>Qr(e)-Qr(t))),Ur=0;Ur<jr.length;Ur++)jr[Ur]();jr=null,Ur=0;}}const Qr=e=>null==e.id?1/0:e.id;function Xr(e){Fr=!1,Ar=!0,Zr(e),Mr.sort(((e,t)=>Qr(e)-Qr(t)));try{for(Pr=0;Pr<Mr.length;Pr++){const e=Mr[Pr];e&&!1!==e.active&&$r(e,null,14);}}finally{Pr=0,Mr.length=0,Yr(),Ar=!1,Dr=null,(Mr.length||Vr.length||Lr.length)&&Xr(e);}}function es(e,t){return os(e,null,{flush:"post"})}const ts={};function ns(e,t,n){return os(e,t,n)}function os(e,t,{immediate:n,deep:o,flush:r}=g){const s=ur;let i,l,c=!1,a=!1;if(wt(e)?(i=()=>e.value,c=!!e._shallow):mt(e)?(i=()=>e,o=!0):N(e)?(a=!0,c=e.some(mt),i=()=>e.map((e=>wt(e)?e.value:mt(e)?is(e):O(e)?$r(e,s,2):void 0))):i=O(e)?t?()=>$r(e,s,2):()=>{if(!s||!s.isUnmounted)return l&&l(),Rr(e,s,3,[u])}:y,t&&o){const e=i;i=()=>is(e());}let u=e=>{l=h.onStop=()=>{$r(e,s,4);};},p=a?[]:ts;const f=()=>{if(h.active)if(t){const e=h.run();(o||c||(a?e.some(((e,t)=>q(e,p[t]))):q(e,p)))&&(l&&l(),Rr(t,s,3,[e,p===ts?void 0:p,u]),p=e);}else h.run();};let d;f.allowRecurse=!!t,d="sync"===r?f:"post"===r?()=>mo(f,s&&s.suspense):()=>{!s||s.isMounted?function(e){qr(e,Ir,Vr,Br);}(f):f();};const h=new de(i,d);return t?n?f():p=h.run():"post"===r?mo(h.run.bind(h),s&&s.suspense):h.run(),()=>{h.stop(),s&&s.scope&&w(s.scope.effects,h);}}function rs(e,t,n){const o=this.proxy,r=A(e)?e.includes(".")?ss(o,e):()=>o[e]:e.bind(o,o);let s;O(t)?s=t:(s=t.handler,n=t);const i=ur;fr(this);const l=os(r,s.bind(o),n);return i?fr(i):dr(),l}function ss(e,t){const n=t.split(".");return ()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function is(e,t){if(!M(e)||e.__v_skip)return e;if((t=t||new Set).has(e))return e;if(t.add(e),wt(e))is(e.value,t);else if(N(e))for(let n=0;n<e.length;n++)is(e[n],t);else if($(e)||E(e))e.forEach((e=>{is(e,t);}));else if(B(e))for(const n in e)is(e[n],t);return e}function ls(){const e=pr();return e.setupContext||(e.setupContext=Sr(e))}function cs(e,t,n){const o=arguments.length;return 2===o?M(t)&&!N(t)?Do(t)?Jo(e,null,[t]):Jo(e,t):Jo(e,null,t):(o>3?n=Array.prototype.slice.call(arguments,2):3===o&&Do(n)&&(n=[n]),Jo(e,t,n))}const as=Symbol("");function us(e,t){const n=e.memo;if(n.length!=t.length)return !1;for(let o=0;o<n.length;o++)if(n[o]!==t[o])return !1;return Lo>0&&Vo&&Vo.push(e),!0}const ps="3.2.20",fs="undefined"!=typeof document?document:null,ds=new Map,hs={insert:(e,t,n)=>{t.insertBefore(e,n||null);},remove:e=>{const t=e.parentNode;t&&t.removeChild(e);},createElement:(e,t,n,o)=>{const r=t?fs.createElementNS("http://www.w3.org/2000/svg",e):fs.createElement(e,n?{is:n}:void 0);return "select"===e&&o&&null!=o.multiple&&r.setAttribute("multiple",o.multiple),r},createText:e=>fs.createTextNode(e),createComment:e=>fs.createComment(e),setText:(e,t)=>{e.nodeValue=t;},setElementText:(e,t)=>{e.textContent=t;},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>fs.querySelector(e),setScopeId(e,t){e.setAttribute(t,"");},cloneNode(e){const t=e.cloneNode(!0);return "_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,o){const r=n?n.previousSibling:t.lastChild;let s=ds.get(e);if(!s){const t=fs.createElement("template");if(t.innerHTML=o?`<svg>${e}</svg>`:e,s=t.content,o){const e=s.firstChild;for(;e.firstChild;)s.appendChild(e.firstChild);s.removeChild(e);}ds.set(e,s);}return t.insertBefore(s.cloneNode(!0),n),[r?r.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};const ms=/\s*!important$/;function gs(e,t,n){if(N(n))n.forEach((n=>gs(e,t,n)));else if(t.startsWith("--"))e.setProperty(t,n);else {const o=function(e,t){const n=ys[t];if(n)return n;let o=D(t);if("filter"!==o&&o in e)return ys[t]=o;o=K(o);for(let r=0;r<vs.length;r++){const n=vs[r]+o;if(n in e)return ys[t]=n}return t}(e,t);ms.test(n)?e.setProperty(z(o),n.replace(ms,""),"important"):e[o]=n;}}const vs=["Webkit","Moz","ms"],ys={};const bs="http://www.w3.org/1999/xlink";let _s=Date.now,Ss=!1;if("undefined"!=typeof window){_s()>document.createEvent("Event").timeStamp&&(_s=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);Ss=!!(e&&Number(e[1])<=53);}let xs=0;const Cs=Promise.resolve(),ws=()=>{xs=0;};function ks(e,t,n,o){e.addEventListener(t,n,o);}function Ts(e,t,n,o,r=null){const s=e._vei||(e._vei={}),i=s[t];if(o&&i)i.value=o;else {const[n,l]=function(e){let t;if(Ns.test(e)){let n;for(t={};n=e.match(Ns);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0;}return [z(e.slice(2)),t]}(t);if(o){ks(e,n,s[t]=function(e,t){const n=e=>{const o=e.timeStamp||_s();(Ss||o>=n.attached-1)&&Rr(function(e,t){if(N(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0;},t.map((e=>t=>!t._stopped&&e(t)))}return t}(e,n.value),t,5,[e]);};return n.value=e,n.attached=(()=>xs||(Cs.then(ws),xs=_s()))(),n}(o,r),l);}else i&&(!function(e,t,n,o){e.removeEventListener(t,n,o);}(e,n,i,l),s[t]=void 0);}}const Ns=/(?:Once|Passive|Capture)$/;const Es=/^on[a-z]/;function $s(e,t){const n=dn(e);class o extends Os{constructor(e){super(n,e,t);}}return o.def=n,o}const Rs="undefined"!=typeof HTMLElement?HTMLElement:class{};class Os extends Rs{constructor(e,t={},n){super(),this._def=e,this._props=t,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&n?n(this._createVNode(),this.shadowRoot):this.attachShadow({mode:"open"});for(let o=0;o<this.attributes.length;o++)this._setAttr(this.attributes[o].name);new MutationObserver((e=>{for(const t of e)this._setAttr(t.attributeName);})).observe(this,{attributes:!0});}connectedCallback(){this._connected=!0,this._instance||(this._resolveDef(),this._update());}disconnectedCallback(){this._connected=!1,zr((()=>{this._connected||(Ni(null,this.shadowRoot),this._instance=null);}));}_resolveDef(){if(this._resolved)return;const e=e=>{this._resolved=!0;const{props:t,styles:n}=e,o=!N(t),r=t?o?Object.keys(t):t:[];let s;if(o)for(const i in this._props){const e=t[i];(e===Number||e&&e.type===Number)&&(this._props[i]=Y(this._props[i]),(s||(s=Object.create(null)))[i]=!0);}s&&(this._numberProps=s,this._update());for(const i of Object.keys(this))"_"!==i[0]&&this._setProp(i,this[i]);for(const i of r.map(D))Object.defineProperty(this,i,{get(){return this._getProp(i)},set(e){this._setProp(i,e);}});this._applyStyles(n);},t=this._def.__asyncLoader;t?t().then(e):e(this._def);}_setAttr(e){let t=this.getAttribute(e);this._numberProps&&this._numberProps[e]&&(t=Y(t)),this._setProp(D(e),t,!1);}_getProp(e){return this._props[e]}_setProp(e,t,n=!0){t!==this._props[e]&&(this._props[e]=t,this._instance&&this._update(),n&&(!0===t?this.setAttribute(z(e),""):"string"==typeof t||"number"==typeof t?this.setAttribute(z(e),t+""):t||this.removeAttribute(z(e))));}_update(){Ni(this._createVNode(),this.shadowRoot);}_createVNode(){const e=Jo(this._def,C({},this._props));return this._instance||(e.ce=e=>{this._instance=e,e.isCE=!0,e.emit=(e,...t)=>{this.dispatchEvent(new CustomEvent(e,{detail:t}));};let t=this;for(;t=t&&(t.parentNode||t.host);)if(t instanceof Os){e.parent=t._instance;break}}),e}_applyStyles(e){e&&e.forEach((e=>{const t=document.createElement("style");t.textContent=e,this.shadowRoot.appendChild(t);}));}}function As(e,t){if(128&e.shapeFlag){const n=e.suspense;e=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push((()=>{As(n.activeBranch,t);}));}for(;e.component;)e=e.component.subTree;if(1&e.shapeFlag&&e.el)Fs(e.el,t);else if(e.type===Oo)e.children.forEach((e=>As(e,t)));else if(e.type===Mo){let{el:n,anchor:o}=e;for(;n&&(Fs(n,t),n!==o);)n=n.nextSibling;}}function Fs(e,t){if(1===e.nodeType){const n=e.style;for(const e in t)n.setProperty(`--${e}`,t[e]);}}const Ms="transition",Ps="animation",Vs=(e,{slots:t})=>cs(sn,Us(e),t);Vs.displayName="Transition";const Is={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Bs=Vs.props=C({},sn.props,Is),Ls=(e,t=[])=>{N(e)?e.forEach((e=>e(...t))):e&&e(...t);},js=e=>!!e&&(N(e)?e.some((e=>e.length>1)):e.length>1);function Us(e){const t={};for(const C in e)C in Is||(t[C]=e[C]);if(!1===e.css)return t;const{name:n="v",type:o,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=s,appearActiveClass:a=i,appearToClass:u=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=e,h=function(e){if(null==e)return null;if(M(e))return [Hs(e.enter),Hs(e.leave)];{const t=Hs(e);return [t,t]}}(r),m=h&&h[0],g=h&&h[1],{onBeforeEnter:v,onEnter:y,onEnterCancelled:b,onLeave:_,onLeaveCancelled:S,onBeforeAppear:x=v,onAppear:w=y,onAppearCancelled:k=b}=t,T=(e,t,n)=>{Ws(e,t?u:l),Ws(e,t?a:i),n&&n();},N=(e,t)=>{Ws(e,d),Ws(e,f),t&&t();},E=e=>(t,n)=>{const r=e?w:y,i=()=>T(t,e,n);Ls(r,[t,i]),zs((()=>{Ws(t,e?c:s),Ds(t,e?u:l),js(r)||Gs(t,o,m,i);}));};return C(t,{onBeforeEnter(e){Ls(v,[e]),Ds(e,s),Ds(e,i);},onBeforeAppear(e){Ls(x,[e]),Ds(e,c),Ds(e,a);},onEnter:E(!1),onAppear:E(!0),onLeave(e,t){const n=()=>N(e,t);Ds(e,p),Ys(),Ds(e,f),zs((()=>{Ws(e,p),Ds(e,d),js(_)||Gs(e,o,g,n);})),Ls(_,[e,n]);},onEnterCancelled(e){T(e,!1),Ls(b,[e]);},onAppearCancelled(e){T(e,!0),Ls(k,[e]);},onLeaveCancelled(e){N(e),Ls(S,[e]);}})}function Hs(e){return Y(e)}function Ds(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t);}function Ws(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0));}function zs(e){requestAnimationFrame((()=>{requestAnimationFrame(e);}));}let Ks=0;function Gs(e,t,n,o){const r=e._endId=++Ks,s=()=>{r===e._endId&&o();};if(n)return setTimeout(s,n);const{type:i,timeout:l,propCount:c}=qs(e,t);if(!i)return o();const a=i+"end";let u=0;const p=()=>{e.removeEventListener(a,f),s();},f=t=>{t.target===e&&++u>=c&&p();};setTimeout((()=>{u<c&&p();}),l+1),e.addEventListener(a,f);}function qs(e,t){const n=window.getComputedStyle(e),o=e=>(n[e]||"").split(", "),r=o("transitionDelay"),s=o("transitionDuration"),i=Js(r,s),l=o("animationDelay"),c=o("animationDuration"),a=Js(l,c);let u=null,p=0,f=0;t===Ms?i>0&&(u=Ms,p=i,f=s.length):t===Ps?a>0&&(u=Ps,p=a,f=c.length):(p=Math.max(i,a),u=p>0?i>a?Ms:Ps:null,f=u?u===Ms?s.length:c.length:0);return {type:u,timeout:p,propCount:f,hasTransform:u===Ms&&/\b(transform|all)(,|$)/.test(n.transitionProperty)}}function Js(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map(((t,n)=>Zs(t)+Zs(e[n]))))}function Zs(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function Ys(){return document.body.offsetHeight}const Qs=new WeakMap,Xs=new WeakMap,ei={name:"TransitionGroup",props:C({},Bs,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=pr(),o=on();let r,s;return Rn((()=>{if(!r.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!function(e,t,n){const o=e.cloneNode();e._vtc&&e._vtc.forEach((e=>{e.split(/\s+/).forEach((e=>e&&o.classList.remove(e)));}));n.split(/\s+/).forEach((e=>e&&o.classList.add(e))),o.style.display="none";const r=1===t.nodeType?t:t.parentNode;r.appendChild(o);const{hasTransform:s}=qs(o);return r.removeChild(o),s}(r[0].el,n.vnode.el,t))return;r.forEach(ti),r.forEach(ni);const o=r.filter(oi);Ys(),o.forEach((e=>{const n=e.el,o=n.style;Ds(n,t),o.transform=o.webkitTransform=o.transitionDuration="";const r=n._moveCb=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",r),n._moveCb=null,Ws(n,t));};n.addEventListener("transitionend",r);}));})),()=>{const i=yt(e),l=Us(i);let c=i.tag||Oo;r=s,s=t.default?fn(t.default()):[];for(let e=0;e<s.length;e++){const t=s[e];null!=t.key&&pn(t,cn(t,l,o,n));}if(r)for(let e=0;e<r.length;e++){const t=r[e];pn(t,cn(t,l,o,n)),Qs.set(t,t.el.getBoundingClientRect());}return Jo(c,null,s)}}};function ti(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb();}function ni(e){Xs.set(e,e.el.getBoundingClientRect());}function oi(e){const t=Qs.get(e),n=Xs.get(e),o=t.left-n.left,r=t.top-n.top;if(o||r){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${o}px,${r}px)`,t.transitionDuration="0s",e}}const ri=e=>{const t=e.props["onUpdate:modelValue"];return N(t)?e=>J(t,e):t};function si(e){e.target.composing=!0;}function ii(e){const t=e.target;t.composing&&(t.composing=!1,function(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n);}(t,"input"));}const li={created(e,{modifiers:{lazy:t,trim:n,number:o}},r){e._assign=ri(r);const s=o||r.props&&"number"===r.props.type;ks(e,t?"change":"input",(t=>{if(t.target.composing)return;let o=e.value;n?o=o.trim():s&&(o=Y(o)),e._assign(o);})),n&&ks(e,"change",(()=>{e.value=e.value.trim();})),t||(ks(e,"compositionstart",si),ks(e,"compositionend",ii),ks(e,"change",ii));},mounted(e,{value:t}){e.value=null==t?"":t;},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:o,number:r}},s){if(e._assign=ri(s),e.composing)return;if(document.activeElement===e){if(n)return;if(o&&e.value.trim()===t)return;if((r||"number"===e.type)&&Y(e.value)===t)return}const i=null==t?"":t;e.value!==i&&(e.value=i);}},ci={deep:!0,created(e,t,n){e._assign=ri(n),ks(e,"change",(()=>{const t=e._modelValue,n=di(e),o=e.checked,r=e._assign;if(N(t)){const e=h(t,n),s=-1!==e;if(o&&!s)r(t.concat(n));else if(!o&&s){const n=[...t];n.splice(e,1),r(n);}}else if($(t)){const e=new Set(t);o?e.add(n):e.delete(n),r(e);}else r(hi(e,o));}));},mounted:ai,beforeUpdate(e,t,n){e._assign=ri(n),ai(e,t,n);}};function ai(e,{value:t,oldValue:n},o){e._modelValue=t,N(t)?e.checked=h(t,o.props.value)>-1:$(t)?e.checked=t.has(o.props.value):t!==n&&(e.checked=d(t,hi(e,!0)));}const ui={created(e,{value:t},n){e.checked=d(t,n.props.value),e._assign=ri(n),ks(e,"change",(()=>{e._assign(di(e));}));},beforeUpdate(e,{value:t,oldValue:n},o){e._assign=ri(o),t!==n&&(e.checked=d(t,o.props.value));}},pi={deep:!0,created(e,{value:t,modifiers:{number:n}},o){const r=$(t);ks(e,"change",(()=>{const t=Array.prototype.filter.call(e.options,(e=>e.selected)).map((e=>n?Y(di(e)):di(e)));e._assign(e.multiple?r?new Set(t):t:t[0]);})),e._assign=ri(o);},mounted(e,{value:t}){fi(e,t);},beforeUpdate(e,t,n){e._assign=ri(n);},updated(e,{value:t}){fi(e,t);}};function fi(e,t){const n=e.multiple;if(!n||N(t)||$(t)){for(let o=0,r=e.options.length;o<r;o++){const r=e.options[o],s=di(r);if(n)r.selected=N(t)?h(t,s)>-1:t.has(s);else if(d(di(r),t))return void(e.selectedIndex!==o&&(e.selectedIndex=o))}n||-1===e.selectedIndex||(e.selectedIndex=-1);}}function di(e){return "_value"in e?e._value:e.value}function hi(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const mi={created(e,t,n){gi(e,t,n,null,"created");},mounted(e,t,n){gi(e,t,n,null,"mounted");},beforeUpdate(e,t,n,o){gi(e,t,n,o,"beforeUpdate");},updated(e,t,n,o){gi(e,t,n,o,"updated");}};function gi(e,t,n,o,r){let s;switch(e.tagName){case"SELECT":s=pi;break;case"TEXTAREA":s=li;break;default:switch(n.props&&n.props.type){case"checkbox":s=ci;break;case"radio":s=ui;break;default:s=li;}}const i=s[r];i&&i(e,t,n,o);}const vi=["ctrl","shift","alt","meta"],yi={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>vi.some((n=>e[`${n}Key`]&&!t.includes(n)))},bi={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},_i={beforeMount(e,{value:t},{transition:n}){e._vod="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):Si(e,t);},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e);},updated(e,{value:t,oldValue:n},{transition:o}){!t!=!n&&(o?t?(o.beforeEnter(e),Si(e,!0),o.enter(e)):o.leave(e,(()=>{Si(e,!1);})):Si(e,t));},beforeUnmount(e,{value:t}){Si(e,t);}};function Si(e,t){e.style.display=t?e._vod:"none";}const xi=C({patchProp:(e,t,n,s,i=!1,l,c,a,u)=>{"class"===t?function(e,t,n){const o=e._vtc;o&&(t=(t?[t,...o]:[...o]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t;}(e,s,i):"style"===t?function(e,t,n){const o=e.style,r=o.display;if(n)if(A(n))t!==n&&(o.cssText=n);else {for(const e in n)gs(o,e,n[e]);if(t&&!A(t))for(const e in t)null==n[e]&&gs(o,e,"");}else e.removeAttribute("style");"_vod"in e&&(o.display=r);}(e,n,s):S(t)?x(t)||Ts(e,t,0,s,c):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):function(e,t,n,o){if(o)return "innerHTML"===t||"textContent"===t||!!(t in e&&Es.test(t)&&O(n));if("spellcheck"===t||"draggable"===t)return !1;if("form"===t)return !1;if("list"===t&&"INPUT"===e.tagName)return !1;if("type"===t&&"TEXTAREA"===e.tagName)return !1;if(Es.test(t)&&A(n))return !1;return t in e}(e,t,s,i))?function(e,t,n,o,s,i,l){if("innerHTML"===t||"textContent"===t)return o&&l(o,s,i),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName){e._value=n;const o=null==n?"":n;return e.value!==o&&(e.value=o),void(null==n&&e.removeAttribute(t))}if(""===n||null==n){const o=typeof e[t];if("boolean"===o)return void(e[t]=r(n));if(null==n&&"string"===o)return e[t]="",void e.removeAttribute(t);if("number"===o){try{e[t]=0;}catch(c){}return void e.removeAttribute(t)}}try{e[t]=n;}catch(a){}}(e,t,s,l,c,a,u):("true-value"===t?e._trueValue=s:"false-value"===t&&(e._falseValue=s),function(e,t,n,s,i){if(s&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(bs,t.slice(6,t.length)):e.setAttributeNS(bs,t,n);else {const s=o(t);null==n||s&&!r(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n);}}(e,t,s,i));}},hs);let Ci,wi=!1;function ki(){return Ci||(Ci=go(xi))}function Ti(){return Ci=wi?Ci:vo(xi),wi=!0,Ci}const Ni=(...e)=>{ki().render(...e);},Ei=(...e)=>{Ti().hydrate(...e);};function $i(e){if(A(e)){return document.querySelector(e)}return e}const Ri=y;function Oi(e){throw e}function Ai(e){}function Fi(e,t,n,o){const r=new SyntaxError(String(e));return r.code=e,r.loc=t,r}const Mi=Symbol(""),Pi=Symbol(""),Vi=Symbol(""),Ii=Symbol(""),Bi=Symbol(""),Li=Symbol(""),ji=Symbol(""),Ui=Symbol(""),Hi=Symbol(""),Di=Symbol(""),Wi=Symbol(""),zi=Symbol(""),Ki=Symbol(""),Gi=Symbol(""),qi=Symbol(""),Ji=Symbol(""),Zi=Symbol(""),Yi=Symbol(""),Qi=Symbol(""),Xi=Symbol(""),el=Symbol(""),tl=Symbol(""),nl=Symbol(""),ol=Symbol(""),rl=Symbol(""),sl=Symbol(""),il=Symbol(""),ll=Symbol(""),cl=Symbol(""),al=Symbol(""),ul=Symbol(""),pl=Symbol(""),fl=Symbol(""),dl=Symbol(""),hl=Symbol(""),ml=Symbol(""),gl=Symbol(""),vl=Symbol(""),yl=Symbol(""),bl={[Mi]:"Fragment",[Pi]:"Teleport",[Vi]:"Suspense",[Ii]:"KeepAlive",[Bi]:"BaseTransition",[Li]:"openBlock",[ji]:"createBlock",[Ui]:"createElementBlock",[Hi]:"createVNode",[Di]:"createElementVNode",[Wi]:"createCommentVNode",[zi]:"createTextVNode",[Ki]:"createStaticVNode",[Gi]:"resolveComponent",[qi]:"resolveDynamicComponent",[Ji]:"resolveDirective",[Zi]:"resolveFilter",[Yi]:"withDirectives",[Qi]:"renderList",[Xi]:"renderSlot",[el]:"createSlots",[tl]:"toDisplayString",[nl]:"mergeProps",[ol]:"normalizeClass",[rl]:"normalizeStyle",[sl]:"normalizeProps",[il]:"guardReactiveProps",[ll]:"toHandlers",[cl]:"camelize",[al]:"capitalize",[ul]:"toHandlerKey",[pl]:"setBlockTracking",[fl]:"pushScopeId",[dl]:"popScopeId",[hl]:"withCtx",[ml]:"unref",[gl]:"isRef",[vl]:"withMemo",[yl]:"isMemoSame"};const _l={source:"",start:{line:1,column:1,offset:0},end:{line:1,column:1,offset:0}};function Sl(e,t,n,o,r,s,i,l=!1,c=!1,a=!1,u=_l){return e&&(l?(e.helper(Li),e.helper(Zl(e.inSSR,a))):e.helper(Jl(e.inSSR,a)),i&&e.helper(Yi)),{type:13,tag:t,props:n,children:o,patchFlag:r,dynamicProps:s,directives:i,isBlock:l,disableTracking:c,isComponent:a,loc:u}}function xl(e,t=_l){return {type:17,loc:t,elements:e}}function Cl(e,t=_l){return {type:15,loc:t,properties:e}}function wl(e,t){return {type:16,loc:_l,key:A(e)?kl(e,!0):e,value:t}}function kl(e,t=!1,n=_l,o=0){return {type:4,loc:n,content:e,isStatic:t,constType:t?3:o}}function Tl(e,t=_l){return {type:8,loc:t,children:e}}function Nl(e,t=[],n=_l){return {type:14,loc:n,callee:e,arguments:t}}function El(e,t,n=!1,o=!1,r=_l){return {type:18,params:e,returns:t,newline:n,isSlot:o,loc:r}}function $l(e,t,n,o=!0){return {type:19,test:e,consequent:t,alternate:n,newline:o,loc:_l}}const Rl=e=>4===e.type&&e.isStatic,Ol=(e,t)=>e===t||e===z(t);function Al(e){return Ol(e,"Teleport")?Pi:Ol(e,"Suspense")?Vi:Ol(e,"KeepAlive")?Ii:Ol(e,"BaseTransition")?Bi:void 0}const Fl=/^\d|[^\$\w]/,Ml=e=>!Fl.test(e),Pl=/[A-Za-z_$\xA0-\uFFFF]/,Vl=/[\.\?\w$\xA0-\uFFFF]/,Il=/\s+[.[]\s*|\s*[.[]\s+/g,Bl=e=>{e=e.trim().replace(Il,(e=>e.trim()));let t=0,n=[],o=0,r=0,s=null;for(let i=0;i<e.length;i++){const l=e.charAt(i);switch(t){case 0:if("["===l)n.push(t),t=1,o++;else if("("===l)n.push(t),t=2,r++;else if(!(0===i?Pl:Vl).test(l))return !1;break;case 1:"'"===l||'"'===l||"`"===l?(n.push(t),t=3,s=l):"["===l?o++:"]"===l&&(--o||(t=n.pop()));break;case 2:if("'"===l||'"'===l||"`"===l)n.push(t),t=3,s=l;else if("("===l)r++;else if(")"===l){if(i===e.length-1)return !1;--r||(t=n.pop());}break;case 3:l===s&&(t=n.pop(),s=null);}}return !o&&!r};function Ll(e,t,n){const o={source:e.source.slice(t,t+n),start:jl(e.start,e.source,t),end:e.end};return null!=n&&(o.end=jl(e.start,e.source,t+n)),o}function jl(e,t,n=t.length){return Ul(C({},e),t,n)}function Ul(e,t,n=t.length){let o=0,r=-1;for(let s=0;s<n;s++)10===t.charCodeAt(s)&&(o++,r=s);return e.offset+=n,e.line+=o,e.column=-1===r?e.column+n:n-r,e}function Hl(e,t,n=!1){for(let o=0;o<e.props.length;o++){const r=e.props[o];if(7===r.type&&(n||r.exp)&&(A(t)?r.name===t:t.test(r.name)))return r}}function Dl(e,t,n=!1,o=!1){for(let r=0;r<e.props.length;r++){const s=e.props[r];if(6===s.type){if(n)continue;if(s.name===t&&(s.value||o))return s}else if("bind"===s.name&&(s.exp||o)&&Wl(s.arg,t))return s}}function Wl(e,t){return !(!e||!Rl(e)||e.content!==t)}function zl(e){return 5===e.type||2===e.type}function Kl(e){return 7===e.type&&"slot"===e.name}function Gl(e){return 1===e.type&&3===e.tagType}function ql(e){return 1===e.type&&2===e.tagType}function Jl(e,t){return e||t?Hi:Di}function Zl(e,t){return e||t?ji:Ui}const Yl=new Set([sl,il]);function Ql(e,t=[]){if(e&&!A(e)&&14===e.type){const n=e.callee;if(!A(n)&&Yl.has(n))return Ql(e.arguments[0],t.concat(e))}return [e,t]}function Xl(e,t,n){let o;let r,s=13===e.type?e.props:e.arguments[2],i=[];if(s&&!A(s)&&14===s.type){const e=Ql(s);s=e[0],i=e[1],r=i[i.length-1];}if(null==s||A(s))o=Cl([t]);else if(14===s.type){const e=s.arguments[0];A(e)||15!==e.type?s.callee===ll?o=Nl(n.helper(nl),[Cl([t]),s]):s.arguments.unshift(Cl([t])):e.properties.unshift(t),!o&&(o=s);}else if(15===s.type){let e=!1;if(4===t.key.type){const n=t.key.content;e=s.properties.some((e=>4===e.key.type&&e.key.content===n));}e||s.properties.unshift(t),o=s;}else o=Nl(n.helper(nl),[Cl([t]),s]),r&&r.callee===il&&(r=i[i.length-2]);13===e.type?r?r.arguments[0]=o:e.props=o:r?r.arguments[0]=o:e.arguments[2]=o;}function ec(e,t){return `_${t}_${e.replace(/[^\w]/g,((t,n)=>"-"===t?"_":e.charCodeAt(n).toString()))}`}function tc(e,{helper:t,removeHelper:n,inSSR:o}){e.isBlock||(e.isBlock=!0,n(Jl(o,e.isComponent)),t(Li),t(Zl(o,e.isComponent)));}const nc=/&(gt|lt|amp|apos|quot);/g,oc={gt:">",lt:"<",amp:"&",apos:"'",quot:'"'},rc={delimiters:["{{","}}"],getNamespace:()=>0,getTextMode:()=>0,isVoidTag:b,isPreTag:b,isCustomElement:b,decodeEntities:e=>e.replace(nc,((e,t)=>oc[t])),onError:Oi,onWarn:Ai,comments:!1};function sc(e,t={}){const n=function(e,t){const n=C({},rc);let o;for(o in t)n[o]=void 0===t[o]?rc[o]:t[o];return {options:n,column:1,line:1,offset:0,originalSource:e,source:e,inPre:!1,inVPre:!1,onWarn:n.onWarn}}(e,t),o=bc(n);return function(e,t=_l){return {type:0,children:e,helpers:[],components:[],directives:[],hoists:[],imports:[],cached:0,temps:0,codegenNode:void 0,loc:t}}(ic(n,0,[]),_c(n,o))}function ic(e,t,n){const o=Sc(n),r=o?o.ns:0,s=[];for(;!Tc(e,t,n);){const i=e.source;let l;if(0===t||1===t)if(!e.inVPre&&xc(i,e.options.delimiters[0]))l=gc(e,t);else if(0===t&&"<"===i[0])if(1===i.length);else if("!"===i[1])l=xc(i,"\x3c!--")?ac(e):xc(i,"<!DOCTYPE")?uc(e):xc(i,"<![CDATA[")&&0!==r?cc(e,n):uc(e);else if("/"===i[1])if(2===i.length);else {if(">"===i[2]){Cc(e,3);continue}if(/[a-z]/i.test(i[2])){dc(e,1,o);continue}l=uc(e);}else /[a-z]/i.test(i[1])?l=pc(e,n):"?"===i[1]&&(l=uc(e));if(l||(l=vc(e,t)),N(l))for(let e=0;e<l.length;e++)lc(s,l[e]);else lc(s,l);}let i=!1;if(2!==t&&1!==t){const t="preserve"!==e.options.whitespace;for(let n=0;n<s.length;n++){const o=s[n];if(e.inPre||2!==o.type)3!==o.type||e.options.comments||(i=!0,s[n]=null);else if(/[^\t\r\n\f ]/.test(o.content))t&&(o.content=o.content.replace(/[\t\r\n\f ]+/g," "));else {const e=s[n-1],r=s[n+1];!e||!r||t&&(3===e.type||3===r.type||1===e.type&&1===r.type&&/[\r\n]/.test(o.content))?(i=!0,s[n]=null):o.content=" ";}}if(e.inPre&&o&&e.options.isPreTag(o.tag)){const e=s[0];e&&2===e.type&&(e.content=e.content.replace(/^\r?\n/,""));}}return i?s.filter(Boolean):s}function lc(e,t){if(2===t.type){const n=Sc(e);if(n&&2===n.type&&n.loc.end.offset===t.loc.start.offset)return n.content+=t.content,n.loc.end=t.loc.end,void(n.loc.source+=t.loc.source)}e.push(t);}function cc(e,t){Cc(e,9);const n=ic(e,3,t);return 0===e.source.length||Cc(e,3),n}function ac(e){const t=bc(e);let n;const o=/--(\!)?>/.exec(e.source);if(o){n=e.source.slice(4,o.index);const t=e.source.slice(0,o.index);let r=1,s=0;for(;-1!==(s=t.indexOf("\x3c!--",r));)Cc(e,s-r+1),r=s+1;Cc(e,o.index+o[0].length-r+1);}else n=e.source.slice(4),Cc(e,e.source.length);return {type:3,content:n,loc:_c(e,t)}}function uc(e){const t=bc(e),n="?"===e.source[1]?1:2;let o;const r=e.source.indexOf(">");return -1===r?(o=e.source.slice(n),Cc(e,e.source.length)):(o=e.source.slice(n,r),Cc(e,r+1)),{type:3,content:o,loc:_c(e,t)}}function pc(e,t){const n=e.inPre,o=e.inVPre,r=Sc(t),s=dc(e,0,r),i=e.inPre&&!n,l=e.inVPre&&!o;if(s.isSelfClosing||e.options.isVoidTag(s.tag))return i&&(e.inPre=!1),l&&(e.inVPre=!1),s;t.push(s);const c=e.options.getTextMode(s,r),a=ic(e,c,t);if(t.pop(),s.children=a,Nc(e.source,s.tag))dc(e,1,r);else if(0===e.source.length&&"script"===s.tag.toLowerCase()){const e=a[0];e&&xc(e.loc.source,"\x3c!--");}return s.loc=_c(e,s.loc.start),i&&(e.inPre=!1),l&&(e.inVPre=!1),s}const fc=t("if,else,else-if,for,slot");function dc(e,t,n){const o=bc(e),r=/^<\/?([a-z][^\t\r\n\f />]*)/i.exec(e.source),s=r[1],i=e.options.getNamespace(s,n);Cc(e,r[0].length),wc(e);const l=bc(e),c=e.source;e.options.isPreTag(s)&&(e.inPre=!0);let a=hc(e,t);0===t&&!e.inVPre&&a.some((e=>7===e.type&&"pre"===e.name))&&(e.inVPre=!0,C(e,l),e.source=c,a=hc(e,t).filter((e=>"v-pre"!==e.name)));let u=!1;if(0===e.source.length||(u=xc(e.source,"/>"),Cc(e,u?2:1)),1===t)return;let p=0;return e.inVPre||("slot"===s?p=2:"template"===s?a.some((e=>7===e.type&&fc(e.name)))&&(p=3):function(e,t,n){const o=n.options;if(o.isCustomElement(e))return !1;if("component"===e||/^[A-Z]/.test(e)||Al(e)||o.isBuiltInComponent&&o.isBuiltInComponent(e)||o.isNativeTag&&!o.isNativeTag(e))return !0;for(let r=0;r<t.length;r++){const e=t[r];if(6===e.type){if("is"===e.name&&e.value&&e.value.content.startsWith("vue:"))return !0}else {if("is"===e.name)return !0;"bind"===e.name&&Wl(e.arg,"is");}}}(s,a,e)&&(p=1)),{type:1,ns:i,tag:s,tagType:p,props:a,isSelfClosing:u,children:[],loc:_c(e,o),codegenNode:void 0}}function hc(e,t){const n=[],o=new Set;for(;e.source.length>0&&!xc(e.source,">")&&!xc(e.source,"/>");){if(xc(e.source,"/")){Cc(e,1),wc(e);continue}const r=mc(e,o);6===r.type&&r.value&&"class"===r.name&&(r.value.content=r.value.content.replace(/\s+/g," ").trim()),0===t&&n.push(r),/^[^\t\r\n\f />]/.test(e.source),wc(e);}return n}function mc(e,t){const n=bc(e),o=/^[^\t\r\n\f />][^\t\r\n\f />=]*/.exec(e.source)[0];t.has(o),t.add(o);{const e=/["'<]/g;for(;e.exec(o););}let r;Cc(e,o.length),/^[\t\r\n\f ]*=/.test(e.source)&&(wc(e),Cc(e,1),wc(e),r=function(e){const t=bc(e);let n;const o=e.source[0],r='"'===o||"'"===o;if(r){Cc(e,1);const t=e.source.indexOf(o);-1===t?n=yc(e,e.source.length,4):(n=yc(e,t,4),Cc(e,1));}else {const t=/^[^\t\r\n\f >]+/.exec(e.source);if(!t)return;const o=/["'<=`]/g;for(;o.exec(t[0]););n=yc(e,t[0].length,4);}return {content:n,isQuoted:r,loc:_c(e,t)}}(e));const s=_c(e,n);if(!e.inVPre&&/^(v-[A-Za-z0-9-]|:|\.|@|#)/.test(o)){const t=/(?:^v-([a-z0-9-]+))?(?:(?::|^\.|^@|^#)(\[[^\]]+\]|[^\.]+))?(.+)?$/i.exec(o);let i,l=xc(o,"."),c=t[1]||(l||xc(o,":")?"bind":xc(o,"@")?"on":"slot");if(t[2]){const r="slot"===c,s=o.lastIndexOf(t[2]),l=_c(e,kc(e,n,s),kc(e,n,s+t[2].length+(r&&t[3]||"").length));let a=t[2],u=!0;a.startsWith("[")?(u=!1,a=a.endsWith("]")?a.slice(1,a.length-1):a.slice(1)):r&&(a+=t[3]||""),i={type:4,content:a,isStatic:u,constType:u?3:0,loc:l};}if(r&&r.isQuoted){const e=r.loc;e.start.offset++,e.start.column++,e.end=jl(e.start,r.content),e.source=e.source.slice(1,-1);}const a=t[3]?t[3].slice(1).split("."):[];return l&&a.push("prop"),{type:7,name:c,exp:r&&{type:4,content:r.content,isStatic:!1,constType:0,loc:r.loc},arg:i,modifiers:a,loc:s}}return !e.inVPre&&xc(o,"v-"),{type:6,name:o,value:r&&{type:2,content:r.content,loc:r.loc},loc:s}}function gc(e,t){const[n,o]=e.options.delimiters,r=e.source.indexOf(o,n.length);if(-1===r)return;const s=bc(e);Cc(e,n.length);const i=bc(e),l=bc(e),c=r-n.length,a=e.source.slice(0,c),u=yc(e,c,t),p=u.trim(),f=u.indexOf(p);f>0&&Ul(i,a,f);return Ul(l,a,c-(u.length-p.length-f)),Cc(e,o.length),{type:5,content:{type:4,isStatic:!1,constType:0,content:p,loc:_c(e,i,l)},loc:_c(e,s)}}function vc(e,t){const n=3===t?["]]>"]:["<",e.options.delimiters[0]];let o=e.source.length;for(let s=0;s<n.length;s++){const t=e.source.indexOf(n[s],1);-1!==t&&o>t&&(o=t);}const r=bc(e);return {type:2,content:yc(e,o,t),loc:_c(e,r)}}function yc(e,t,n){const o=e.source.slice(0,t);return Cc(e,t),2===n||3===n||-1===o.indexOf("&")?o:e.options.decodeEntities(o,4===n)}function bc(e){const{column:t,line:n,offset:o}=e;return {column:t,line:n,offset:o}}function _c(e,t,n){return {start:t,end:n=n||bc(e),source:e.originalSource.slice(t.offset,n.offset)}}function Sc(e){return e[e.length-1]}function xc(e,t){return e.startsWith(t)}function Cc(e,t){const{source:n}=e;Ul(e,n,t),e.source=n.slice(t);}function wc(e){const t=/^[\t\r\n\f ]+/.exec(e.source);t&&Cc(e,t[0].length);}function kc(e,t,n){return jl(t,e.originalSource.slice(t.offset,n),n)}function Tc(e,t,n){const o=e.source;switch(t){case 0:if(xc(o,"</"))for(let e=n.length-1;e>=0;--e)if(Nc(o,n[e].tag))return !0;break;case 1:case 2:{const e=Sc(n);if(e&&Nc(o,e.tag))return !0;break}case 3:if(xc(o,"]]>"))return !0}return !o}function Nc(e,t){return xc(e,"</")&&e.slice(2,2+t.length).toLowerCase()===t.toLowerCase()&&/[\t\r\n\f />]/.test(e[2+t.length]||">")}function Ec(e,t){Rc(e,t,$c(e,e.children[0]));}function $c(e,t){const{children:n}=e;return 1===n.length&&1===t.type&&!ql(t)}function Rc(e,t,n=!1){let o=!0;const{children:r}=e,s=r.length;let i=0;for(let l=0;l<r.length;l++){const e=r[l];if(1===e.type&&0===e.tagType){const r=n?0:Oc(e,t);if(r>0){if(r<3&&(o=!1),r>=2){e.codegenNode.patchFlag="-1",e.codegenNode=t.hoist(e.codegenNode),i++;continue}}else {const n=e.codegenNode;if(13===n.type){const o=Vc(n);if((!o||512===o||1===o)&&Mc(e,t)>=2){const o=Pc(e);o&&(n.props=t.hoist(o));}n.dynamicProps&&(n.dynamicProps=t.hoist(n.dynamicProps));}}}else if(12===e.type){const n=Oc(e.content,t);n>0&&(n<3&&(o=!1),n>=2&&(e.codegenNode=t.hoist(e.codegenNode),i++));}if(1===e.type){const n=1===e.tagType;n&&t.scopes.vSlot++,Rc(e,t),n&&t.scopes.vSlot--;}else if(11===e.type)Rc(e,t,1===e.children.length);else if(9===e.type)for(let n=0;n<e.branches.length;n++)Rc(e.branches[n],t,1===e.branches[n].children.length);}o&&i&&t.transformHoist&&t.transformHoist(r,t,e),i&&i===s&&1===e.type&&0===e.tagType&&e.codegenNode&&13===e.codegenNode.type&&N(e.codegenNode.children)&&(e.codegenNode.children=t.hoist(xl(e.codegenNode.children)));}function Oc(e,t){const{constantCache:n}=t;switch(e.type){case 1:if(0!==e.tagType)return 0;const o=n.get(e);if(void 0!==o)return o;const r=e.codegenNode;if(13!==r.type)return 0;if(Vc(r))return n.set(e,0),0;{let o=3;const s=Mc(e,t);if(0===s)return n.set(e,0),0;s<o&&(o=s);for(let r=0;r<e.children.length;r++){const s=Oc(e.children[r],t);if(0===s)return n.set(e,0),0;s<o&&(o=s);}if(o>1)for(let r=0;r<e.props.length;r++){const s=e.props[r];if(7===s.type&&"bind"===s.name&&s.exp){const r=Oc(s.exp,t);if(0===r)return n.set(e,0),0;r<o&&(o=r);}}return r.isBlock&&(t.removeHelper(Li),t.removeHelper(Zl(t.inSSR,r.isComponent)),r.isBlock=!1,t.helper(Jl(t.inSSR,r.isComponent))),n.set(e,o),o}case 2:case 3:return 3;case 9:case 11:case 10:return 0;case 5:case 12:return Oc(e.content,t);case 4:return e.constType;case 8:let s=3;for(let n=0;n<e.children.length;n++){const o=e.children[n];if(A(o)||F(o))continue;const r=Oc(o,t);if(0===r)return 0;r<s&&(s=r);}return s;default:return 0}}const Ac=new Set([ol,rl,sl,il]);function Fc(e,t){if(14===e.type&&!A(e.callee)&&Ac.has(e.callee)){const n=e.arguments[0];if(4===n.type)return Oc(n,t);if(14===n.type)return Fc(n,t)}return 0}function Mc(e,t){let n=3;const o=Pc(e);if(o&&15===o.type){const{properties:e}=o;for(let o=0;o<e.length;o++){const{key:r,value:s}=e[o],i=Oc(r,t);if(0===i)return i;let l;if(i<n&&(n=i),l=4===s.type?Oc(s,t):14===s.type?Fc(s,t):0,0===l)return l;l<n&&(n=l);}}return n}function Pc(e){const t=e.codegenNode;if(13===t.type)return t.props}function Vc(e){const t=e.patchFlag;return t?parseInt(t,10):void 0}function Ic(e,{filename:t="",prefixIdentifiers:n=!1,hoistStatic:o=!1,cacheHandlers:r=!1,nodeTransforms:s=[],directiveTransforms:i={},transformHoist:l=null,isBuiltInComponent:c=y,isCustomElement:a=y,expressionPlugins:u=[],scopeId:p=null,slotted:f=!0,ssr:d=!1,inSSR:h=!1,ssrCssVars:m="",bindingMetadata:v=g,inline:b=!1,isTS:_=!1,onError:S=Oi,onWarn:x=Ai,compatConfig:C}){const w=t.replace(/\?.*$/,"").match(/([^/\\]+)\.\w+$/),k={selfName:w&&K(D(w[1])),prefixIdentifiers:n,hoistStatic:o,cacheHandlers:r,nodeTransforms:s,directiveTransforms:i,transformHoist:l,isBuiltInComponent:c,isCustomElement:a,expressionPlugins:u,scopeId:p,slotted:f,ssr:d,inSSR:h,ssrCssVars:m,bindingMetadata:v,inline:b,isTS:_,onError:S,onWarn:x,compatConfig:C,root:e,helpers:new Map,components:new Set,directives:new Set,hoists:[],imports:[],constantCache:new Map,temps:0,cached:0,identifiers:Object.create(null),scopes:{vFor:0,vSlot:0,vPre:0,vOnce:0},parent:null,currentNode:e,childIndex:0,inVOnce:!1,helper(e){const t=k.helpers.get(e)||0;return k.helpers.set(e,t+1),e},removeHelper(e){const t=k.helpers.get(e);if(t){const n=t-1;n?k.helpers.set(e,n):k.helpers.delete(e);}},helperString:e=>`_${bl[k.helper(e)]}`,replaceNode(e){k.parent.children[k.childIndex]=k.currentNode=e;},removeNode(e){const t=e?k.parent.children.indexOf(e):k.currentNode?k.childIndex:-1;e&&e!==k.currentNode?k.childIndex>t&&(k.childIndex--,k.onNodeRemoved()):(k.currentNode=null,k.onNodeRemoved()),k.parent.children.splice(t,1);},onNodeRemoved:()=>{},addIdentifiers(e){},removeIdentifiers(e){},hoist(e){A(e)&&(e=kl(e)),k.hoists.push(e);const t=kl(`_hoisted_${k.hoists.length}`,!1,e.loc,2);return t.hoisted=e,t},cache:(e,t=!1)=>function(e,t,n=!1){return {type:20,index:e,value:t,isVNode:n,loc:_l}}(k.cached++,e,t)};return k}function Bc(e,t){const n=Ic(e,t);Lc(e,n),t.hoistStatic&&Ec(e,n),t.ssr||function(e,t){const{helper:n}=t,{children:o}=e;if(1===o.length){const n=o[0];if($c(e,n)&&n.codegenNode){const o=n.codegenNode;13===o.type&&tc(o,t),e.codegenNode=o;}else e.codegenNode=n;}else if(o.length>1){let o=64;e.codegenNode=Sl(t,n(Mi),void 0,e.children,o+"",void 0,void 0,!0,void 0,!1);}}(e,n),e.helpers=[...n.helpers.keys()],e.components=[...n.components],e.directives=[...n.directives],e.imports=n.imports,e.hoists=n.hoists,e.temps=n.temps,e.cached=n.cached;}function Lc(e,t){t.currentNode=e;const{nodeTransforms:n}=t,o=[];for(let s=0;s<n.length;s++){const r=n[s](e,t);if(r&&(N(r)?o.push(...r):o.push(r)),!t.currentNode)return;e=t.currentNode;}switch(e.type){case 3:t.ssr||t.helper(Wi);break;case 5:t.ssr||t.helper(tl);break;case 9:for(let n=0;n<e.branches.length;n++)Lc(e.branches[n],t);break;case 10:case 11:case 1:case 0:!function(e,t){let n=0;const o=()=>{n--;};for(;n<e.children.length;n++){const r=e.children[n];A(r)||(t.parent=e,t.childIndex=n,t.onNodeRemoved=o,Lc(r,t));}}(e,t);}t.currentNode=e;let r=o.length;for(;r--;)o[r]();}function jc(e,t){const n=A(e)?t=>t===e:t=>e.test(t);return (e,o)=>{if(1===e.type){const{props:r}=e;if(3===e.tagType&&r.some(Kl))return;const s=[];for(let i=0;i<r.length;i++){const l=r[i];if(7===l.type&&n(l.name)){r.splice(i,1),i--;const n=t(e,l,o);n&&s.push(n);}}return s}}}const Uc="/*#__PURE__*/";function Hc(e,t={}){const n=function(e,{mode:t="function",prefixIdentifiers:n="module"===t,sourceMap:o=!1,filename:r="template.vue.html",scopeId:s=null,optimizeImports:i=!1,runtimeGlobalName:l="Vue",runtimeModuleName:c="vue",ssrRuntimeModuleName:a="vue/server-renderer",ssr:u=!1,isTS:p=!1,inSSR:f=!1}){const d={mode:t,prefixIdentifiers:n,sourceMap:o,filename:r,scopeId:s,optimizeImports:i,runtimeGlobalName:l,runtimeModuleName:c,ssrRuntimeModuleName:a,ssr:u,isTS:p,inSSR:f,source:e.loc.source,code:"",column:1,line:1,offset:0,indentLevel:0,pure:!1,map:void 0,helper:e=>`_${bl[e]}`,push(e,t){d.code+=e;},indent(){h(++d.indentLevel);},deindent(e=!1){e?--d.indentLevel:h(--d.indentLevel);},newline(){h(d.indentLevel);}};function h(e){d.push("\n"+"  ".repeat(e));}return d}(e,t);t.onContextCreated&&t.onContextCreated(n);const{mode:o,push:r,prefixIdentifiers:s,indent:i,deindent:l,newline:c,ssr:a}=n,u=e.helpers.length>0,p=!s&&"module"!==o;!function(e,t){const{push:n,newline:o,runtimeGlobalName:r}=t,s=r,i=e=>`${bl[e]}: _${bl[e]}`;if(e.helpers.length>0&&(n(`const _Vue = ${s}\n`),e.hoists.length)){n(`const { ${[Hi,Di,Wi,zi,Ki].filter((t=>e.helpers.includes(t))).map(i).join(", ")} } = _Vue\n`);}(function(e,t){if(!e.length)return;t.pure=!0;const{push:n,newline:o}=t;o();for(let r=0;r<e.length;r++){const s=e[r];s&&(n(`const _hoisted_${r+1} = `),Kc(s,t),o());}t.pure=!1;})(e.hoists,t),o(),n("return ");}(e,n);if(r(`function ${a?"ssrRender":"render"}(${(a?["_ctx","_push","_parent","_attrs"]:["_ctx","_cache"]).join(", ")}) {`),i(),p&&(r("with (_ctx) {"),i(),u&&(r(`const { ${e.helpers.map((e=>`${bl[e]}: _${bl[e]}`)).join(", ")} } = _Vue`),r("\n"),c())),e.components.length&&(Dc(e.components,"component",n),(e.directives.length||e.temps>0)&&c()),e.directives.length&&(Dc(e.directives,"directive",n),e.temps>0&&c()),e.temps>0){r("let ");for(let t=0;t<e.temps;t++)r(`${t>0?", ":""}_temp${t}`);}return (e.components.length||e.directives.length||e.temps)&&(r("\n"),c()),a||r("return "),e.codegenNode?Kc(e.codegenNode,n):r("null"),p&&(l(),r("}")),l(),r("}"),{ast:e,code:n.code,preamble:"",map:n.map?n.map.toJSON():void 0}}function Dc(e,t,{helper:n,push:o,newline:r,isTS:s}){const i=n("component"===t?Gi:Ji);for(let l=0;l<e.length;l++){let n=e[l];const c=n.endsWith("__self");c&&(n=n.slice(0,-6)),o(`const ${ec(n,t)} = ${i}(${JSON.stringify(n)}${c?", true":""})${s?"!":""}`),l<e.length-1&&r();}}function Wc(e,t){const n=e.length>3||!1;t.push("["),n&&t.indent(),zc(e,t,n),n&&t.deindent(),t.push("]");}function zc(e,t,n=!1,o=!0){const{push:r,newline:s}=t;for(let i=0;i<e.length;i++){const l=e[i];A(l)?r(l):N(l)?Wc(l,t):Kc(l,t),i<e.length-1&&(n?(o&&r(","),s()):o&&r(", "));}}function Kc(e,t){if(A(e))t.push(e);else if(F(e))t.push(t.helper(e));else switch(e.type){case 1:case 9:case 11:Kc(e.codegenNode,t);break;case 2:!function(e,t){t.push(JSON.stringify(e.content),e);}(e,t);break;case 4:Gc(e,t);break;case 5:!function(e,t){const{push:n,helper:o,pure:r}=t;r&&n(Uc);n(`${o(tl)}(`),Kc(e.content,t),n(")");}(e,t);break;case 12:Kc(e.codegenNode,t);break;case 8:qc(e,t);break;case 3:!function(e,t){const{push:n,helper:o,pure:r}=t;r&&n(Uc);n(`${o(Wi)}(${JSON.stringify(e.content)})`,e);}(e,t);break;case 13:!function(e,t){const{push:n,helper:o,pure:r}=t,{tag:s,props:i,children:l,patchFlag:c,dynamicProps:a,directives:u,isBlock:p,disableTracking:f,isComponent:d}=e;u&&n(o(Yi)+"(");p&&n(`(${o(Li)}(${f?"true":""}), `);r&&n(Uc);const h=p?Zl(t.inSSR,d):Jl(t.inSSR,d);n(o(h)+"(",e),zc(function(e){let t=e.length;for(;t--&&null==e[t];);return e.slice(0,t+1).map((e=>e||"null"))}([s,i,l,c,a]),t),n(")"),p&&n(")");u&&(n(", "),Kc(u,t),n(")"));}(e,t);break;case 14:!function(e,t){const{push:n,helper:o,pure:r}=t,s=A(e.callee)?e.callee:o(e.callee);r&&n(Uc);n(s+"(",e),zc(e.arguments,t),n(")");}(e,t);break;case 15:!function(e,t){const{push:n,indent:o,deindent:r,newline:s}=t,{properties:i}=e;if(!i.length)return void n("{}",e);const l=i.length>1||!1;n(l?"{":"{ "),l&&o();for(let c=0;c<i.length;c++){const{key:e,value:o}=i[c];Jc(e,t),n(": "),Kc(o,t),c<i.length-1&&(n(","),s());}l&&r(),n(l?"}":" }");}(e,t);break;case 17:!function(e,t){Wc(e.elements,t);}(e,t);break;case 18:!function(e,t){const{push:n,indent:o,deindent:r}=t,{params:s,returns:i,body:l,newline:c,isSlot:a}=e;a&&n(`_${bl[hl]}(`);n("(",e),N(s)?zc(s,t):s&&Kc(s,t);n(") => "),(c||l)&&(n("{"),o());i?(c&&n("return "),N(i)?Wc(i,t):Kc(i,t)):l&&Kc(l,t);(c||l)&&(r(),n("}"));a&&n(")");}(e,t);break;case 19:!function(e,t){const{test:n,consequent:o,alternate:r,newline:s}=e,{push:i,indent:l,deindent:c,newline:a}=t;if(4===n.type){const e=!Ml(n.content);e&&i("("),Gc(n,t),e&&i(")");}else i("("),Kc(n,t),i(")");s&&l(),t.indentLevel++,s||i(" "),i("? "),Kc(o,t),t.indentLevel--,s&&a(),s||i(" "),i(": ");const u=19===r.type;u||t.indentLevel++;Kc(r,t),u||t.indentLevel--;s&&c(!0);}(e,t);break;case 20:!function(e,t){const{push:n,helper:o,indent:r,deindent:s,newline:i}=t;n(`_cache[${e.index}] || (`),e.isVNode&&(r(),n(`${o(pl)}(-1),`),i());n(`_cache[${e.index}] = `),Kc(e.value,t),e.isVNode&&(n(","),i(),n(`${o(pl)}(1),`),i(),n(`_cache[${e.index}]`),s());n(")");}(e,t);break;case 21:zc(e.body,t,!0,!1);}}function Gc(e,t){const{content:n,isStatic:o}=e;t.push(o?JSON.stringify(n):n,e);}function qc(e,t){for(let n=0;n<e.children.length;n++){const o=e.children[n];A(o)?t.push(o):Kc(o,t);}}function Jc(e,t){const{push:n}=t;if(8===e.type)n("["),qc(e,t),n("]");else if(e.isStatic){n(Ml(e.content)?e.content:JSON.stringify(e.content),e);}else n(`[${e.content}]`,e);}const Zc=jc(/^(if|else|else-if)$/,((e,t,n)=>function(e,t,n,o){if(!("else"===t.name||t.exp&&t.exp.content.trim())){t.exp=kl("true",!1,t.exp?t.exp.loc:e.loc);}if("if"===t.name){const r=Yc(e,t),s={type:9,loc:e.loc,branches:[r]};if(n.replaceNode(s),o)return o(s,r,!0)}else {const r=n.parent.children;let s=r.indexOf(e);for(;s-- >=-1;){const i=r[s];if(!i||2!==i.type||i.content.trim().length){if(i&&9===i.type){n.removeNode();const r=Yc(e,t);i.branches.push(r);const s=o&&o(i,r,!1);Lc(r,n),s&&s(),n.currentNode=null;}break}n.removeNode(i);}}}(e,t,n,((e,t,o)=>{const r=n.parent.children;let s=r.indexOf(e),i=0;for(;s-- >=0;){const e=r[s];e&&9===e.type&&(i+=e.branches.length);}return ()=>{if(o)e.codegenNode=Qc(t,i,n);else {(function(e){for(;;)if(19===e.type){if(19!==e.alternate.type)return e;e=e.alternate;}else 20===e.type&&(e=e.value);}(e.codegenNode)).alternate=Qc(t,i+e.branches.length-1,n);}}}))));function Yc(e,t){return {type:10,loc:e.loc,condition:"else"===t.name?void 0:t.exp,children:3!==e.tagType||Hl(e,"for")?[e]:e.children,userKey:Dl(e,"key")}}function Qc(e,t,n){return e.condition?$l(e.condition,Xc(e,t,n),Nl(n.helper(Wi),['""',"true"])):Xc(e,t,n)}function Xc(e,t,n){const{helper:o}=n,r=wl("key",kl(`${t}`,!1,_l,2)),{children:s}=e,i=s[0];if(1!==s.length||1!==i.type){if(1===s.length&&11===i.type){const e=i.codegenNode;return Xl(e,r,n),e}{let t=64;return Sl(n,o(Mi),Cl([r]),s,t+"",void 0,void 0,!0,!1,!1,e.loc)}}{const e=i.codegenNode,t=14===(l=e).type&&l.callee===vl?l.arguments[1].returns:l;return 13===t.type&&tc(t,n),Xl(t,r,n),e}var l;}const ea=jc("for",((e,t,n)=>{const{helper:o,removeHelper:r}=n;return function(e,t,n,o){if(!t.exp)return;const r=ra(t.exp);if(!r)return;const{scopes:s}=n,{source:i,value:l,key:c,index:a}=r,u={type:11,loc:t.loc,source:i,valueAlias:l,keyAlias:c,objectIndexAlias:a,parseResult:r,children:Gl(e)?e.children:[e]};n.replaceNode(u),s.vFor++;const p=o&&o(u);return ()=>{s.vFor--,p&&p();}}(e,t,n,(t=>{const s=Nl(o(Qi),[t.source]),i=Hl(e,"memo"),l=Dl(e,"key"),c=l&&(6===l.type?kl(l.value.content,!0):l.exp),a=l?wl("key",c):null,u=4===t.source.type&&t.source.constType>0,p=u?64:l?128:256;return t.codegenNode=Sl(n,o(Mi),void 0,s,p+"",void 0,void 0,!0,!u,!1,e.loc),()=>{let l;const p=Gl(e),{children:f}=t,d=1!==f.length||1!==f[0].type,h=ql(e)?e:p&&1===e.children.length&&ql(e.children[0])?e.children[0]:null;if(h?(l=h.codegenNode,p&&a&&Xl(l,a,n)):d?l=Sl(n,o(Mi),a?Cl([a]):void 0,e.children,"64",void 0,void 0,!0,void 0,!1):(l=f[0].codegenNode,p&&a&&Xl(l,a,n),l.isBlock!==!u&&(l.isBlock?(r(Li),r(Zl(n.inSSR,l.isComponent))):r(Jl(n.inSSR,l.isComponent))),l.isBlock=!u,l.isBlock?(o(Li),o(Zl(n.inSSR,l.isComponent))):o(Jl(n.inSSR,l.isComponent))),i){const e=El(ia(t.parseResult,[kl("_cached")]));e.body={type:21,body:[Tl(["const _memo = (",i.exp,")"]),Tl(["if (_cached",...c?[" && _cached.key === ",c]:[],` && ${n.helperString(yl)}(_cached, _memo)) return _cached`]),Tl(["const _item = ",l]),kl("_item.memo = _memo"),kl("return _item")],loc:_l},s.arguments.push(e,kl("_cache"),kl(String(n.cached++)));}else s.arguments.push(El(ia(t.parseResult),l,!0));}}))}));const ta=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,na=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,oa=/^\(|\)$/g;function ra(e,t){const n=e.loc,o=e.content,r=o.match(ta);if(!r)return;const[,s,i]=r,l={source:sa(n,i.trim(),o.indexOf(i,s.length)),value:void 0,key:void 0,index:void 0};let c=s.trim().replace(oa,"").trim();const a=s.indexOf(c),u=c.match(na);if(u){c=c.replace(na,"").trim();const e=u[1].trim();let t;if(e&&(t=o.indexOf(e,a+c.length),l.key=sa(n,e,t)),u[2]){const r=u[2].trim();r&&(l.index=sa(n,r,o.indexOf(r,l.key?t+e.length:a+c.length)));}}return c&&(l.value=sa(n,c,a)),l}function sa(e,t,n){return kl(t,!1,Ll(e,n,t.length))}function ia({value:e,key:t,index:n},o=[]){return function(e){let t=e.length;for(;t--&&!e[t];);return e.slice(0,t+1).map(((e,t)=>e||kl("_".repeat(t+1),!1)))}([e,t,n,...o])}const la=kl("undefined",!1),ca=(e,t)=>{if(1===e.type&&(1===e.tagType||3===e.tagType)){const n=Hl(e,"slot");if(n)return t.scopes.vSlot++,()=>{t.scopes.vSlot--;}}},aa=(e,t,n)=>El(e,t,!1,!0,t.length?t[0].loc:n);function ua(e,t,n=aa){t.helper(hl);const{children:o,loc:r}=e,s=[],i=[];let l=t.scopes.vSlot>0||t.scopes.vFor>0;const c=Hl(e,"slot",!0);if(c){const{arg:e,exp:t}=c;e&&!Rl(e)&&(l=!0),s.push(wl(e||kl("default",!0),n(t,o,r)));}let a=!1,u=!1;const p=[],f=new Set;for(let m=0;m<o.length;m++){const e=o[m];let r;if(!Gl(e)||!(r=Hl(e,"slot",!0))){3!==e.type&&p.push(e);continue}if(c)break;a=!0;const{children:d,loc:h}=e,{arg:g=kl("default",!0),exp:v}=r;let y;Rl(g)?y=g?g.content:"default":l=!0;const b=n(v,d,h);let _,S,x;if(_=Hl(e,"if"))l=!0,i.push($l(_.exp,pa(g,b),la));else if(S=Hl(e,/^else(-if)?$/,!0)){let e,t=m;for(;t--&&(e=o[t],3===e.type););if(e&&Gl(e)&&Hl(e,"if")){o.splice(m,1),m--;let e=i[i.length-1];for(;19===e.alternate.type;)e=e.alternate;e.alternate=S.exp?$l(S.exp,pa(g,b),la):pa(g,b);}}else if(x=Hl(e,"for")){l=!0;const e=x.parseResult||ra(x.exp);e&&i.push(Nl(t.helper(Qi),[e.source,El(ia(e),pa(g,b),!0)]));}else {if(y){if(f.has(y))continue;f.add(y),"default"===y&&(u=!0);}s.push(wl(g,b));}}if(!c){const e=(e,t)=>wl("default",n(e,t,r));a?p.length&&p.some((e=>da(e)))&&(u||s.push(e(void 0,p))):s.push(e(void 0,o));}const d=l?2:fa(e.children)?3:1;let h=Cl(s.concat(wl("_",kl(d+"",!1))),r);return i.length&&(h=Nl(t.helper(el),[h,xl(i)])),{slots:h,hasDynamicSlots:l}}function pa(e,t){return Cl([wl("name",e),wl("fn",t)])}function fa(e){for(let t=0;t<e.length;t++){const n=e[t];switch(n.type){case 1:if(2===n.tagType||fa(n.children))return !0;break;case 9:if(fa(n.branches))return !0;break;case 10:case 11:if(fa(n.children))return !0}}return !1}function da(e){return 2!==e.type&&12!==e.type||(2===e.type?!!e.content.trim():da(e.content))}const ha=new WeakMap,ma=(e,t)=>function(){if(1!==(e=t.currentNode).type||0!==e.tagType&&1!==e.tagType)return;const{tag:n,props:o}=e,r=1===e.tagType;let s=r?function(e,t,n=!1){let{tag:o}=e;const r=ba(o),s=Dl(e,"is");if(s)if(r){const e=6===s.type?s.value&&kl(s.value.content,!0):s.exp;if(e)return Nl(t.helper(qi),[e])}else 6===s.type&&s.value.content.startsWith("vue:")&&(o=s.value.content.slice(4));const i=!r&&Hl(e,"is");if(i&&i.exp)return Nl(t.helper(qi),[i.exp]);const l=Al(o)||t.isBuiltInComponent(o);if(l)return n||t.helper(l),l;return t.helper(Gi),t.components.add(o),ec(o,"component")}(e,t):`"${n}"`;let i,l,c,a,u,p,f=0,d=M(s)&&s.callee===qi||s===Pi||s===Vi||!r&&("svg"===n||"foreignObject"===n||Dl(e,"key",!0));if(o.length>0){const n=ga(e,t);i=n.props,f=n.patchFlag,u=n.dynamicPropNames;const o=n.directives;p=o&&o.length?xl(o.map((e=>function(e,t){const n=[],o=ha.get(e);o?n.push(t.helperString(o)):(t.helper(Ji),t.directives.add(e.name),n.push(ec(e.name,"directive")));const{loc:r}=e;e.exp&&n.push(e.exp);e.arg&&(e.exp||n.push("void 0"),n.push(e.arg));if(Object.keys(e.modifiers).length){e.arg||(e.exp||n.push("void 0"),n.push("void 0"));const t=kl("true",!1,r);n.push(Cl(e.modifiers.map((e=>wl(e,t))),r));}return xl(n,e.loc)}(e,t)))):void 0;}if(e.children.length>0){s===Ii&&(d=!0,f|=1024);if(r&&s!==Pi&&s!==Ii){const{slots:n,hasDynamicSlots:o}=ua(e,t);l=n,o&&(f|=1024);}else if(1===e.children.length&&s!==Pi){const n=e.children[0],o=n.type,r=5===o||8===o;r&&0===Oc(n,t)&&(f|=1),l=r||2===o?n:e.children;}else l=e.children;}0!==f&&(c=String(f),u&&u.length&&(a=function(e){let t="[";for(let n=0,o=e.length;n<o;n++)t+=JSON.stringify(e[n]),n<o-1&&(t+=", ");return t+"]"}(u))),e.codegenNode=Sl(t,s,i,l,c,a,p,!!d,!1,r,e.loc);};function ga(e,t,n=e.props,o=!1){const{tag:r,loc:s}=e,i=1===e.tagType;let l=[];const c=[],a=[];let u=0,p=!1,f=!1,d=!1,h=!1,m=!1,g=!1;const v=[],y=({key:e,value:n})=>{if(Rl(e)){const o=e.content,r=S(o);if(i||!r||"onclick"===o.toLowerCase()||"onUpdate:modelValue"===o||j(o)||(h=!0),r&&j(o)&&(g=!0),20===n.type||(4===n.type||8===n.type)&&Oc(n,t)>0)return;"ref"===o?p=!0:"class"===o?f=!0:"style"===o?d=!0:"key"===o||v.includes(o)||v.push(o),!i||"class"!==o&&"style"!==o||v.includes(o)||v.push(o);}else m=!0;};for(let _=0;_<n.length;_++){const i=n[_];if(6===i.type){const{loc:e,name:t,value:n}=i;let o=kl(n?n.content:"",!0,n?n.loc:e);if("ref"===t&&(p=!0),"is"===t&&(ba(r)||n&&n.content.startsWith("vue:")))continue;l.push(wl(kl(t,!0,Ll(e,0,t.length)),o));}else {const{name:n,arg:u,exp:p,loc:f}=i,d="bind"===n,h="on"===n;if("slot"===n)continue;if("once"===n||"memo"===n)continue;if("is"===n||d&&Wl(u,"is")&&ba(r))continue;if(h&&o)continue;if(!u&&(d||h)){m=!0,p&&(l.length&&(c.push(Cl(va(l),s)),l=[]),c.push(d?p:{type:14,loc:f,callee:t.helper(ll),arguments:[p]}));continue}const g=t.directiveTransforms[n];if(g){const{props:n,needRuntime:r}=g(i,e,t);!o&&n.forEach(y),l.push(...n),r&&(a.push(i),F(r)&&ha.set(i,r));}else a.push(i);}}let b;if(c.length?(l.length&&c.push(Cl(va(l),s)),b=c.length>1?Nl(t.helper(nl),c,s):c[0]):l.length&&(b=Cl(va(l),s)),m?u|=16:(f&&!i&&(u|=2),d&&!i&&(u|=4),v.length&&(u|=8),h&&(u|=32)),0!==u&&32!==u||!(p||g||a.length>0)||(u|=512),!t.inSSR&&b)switch(b.type){case 15:let e=-1,n=-1,o=!1;for(let t=0;t<b.properties.length;t++){const r=b.properties[t].key;Rl(r)?"class"===r.content?e=t:"style"===r.content&&(n=t):r.isHandlerKey||(o=!0);}const r=b.properties[e],s=b.properties[n];o?b=Nl(t.helper(sl),[b]):(r&&!Rl(r.value)&&(r.value=Nl(t.helper(ol),[r.value])),!s||Rl(s.value)||!d&&17!==s.value.type||(s.value=Nl(t.helper(rl),[s.value])));break;case 14:break;default:b=Nl(t.helper(sl),[Nl(t.helper(il),[b])]);}return {props:b,directives:a,patchFlag:u,dynamicPropNames:v}}function va(e){const t=new Map,n=[];for(let o=0;o<e.length;o++){const r=e[o];if(8===r.key.type||!r.key.isStatic){n.push(r);continue}const s=r.key.content,i=t.get(s);i?("style"===s||"class"===s||S(s))&&ya(i,r):(t.set(s,r),n.push(r));}return n}function ya(e,t){17===e.value.type?e.value.elements.push(t.value):e.value=xl([e.value,t.value],e.loc);}function ba(e){return e[0].toLowerCase()+e.slice(1)==="component"}const _a=(e,t)=>{if(ql(e)){const{children:n,loc:o}=e,{slotName:r,slotProps:s}=function(e,t){let n,o='"default"';const r=[];for(let s=0;s<e.props.length;s++){const t=e.props[s];6===t.type?t.value&&("name"===t.name?o=JSON.stringify(t.value.content):(t.name=D(t.name),r.push(t))):"bind"===t.name&&Wl(t.arg,"name")?t.exp&&(o=t.exp):("bind"===t.name&&t.arg&&Rl(t.arg)&&(t.arg.content=D(t.arg.content)),r.push(t));}if(r.length>0){const{props:o,directives:s}=ga(e,t,r);n=o;}return {slotName:o,slotProps:n}}(e,t),i=[t.prefixIdentifiers?"_ctx.$slots":"$slots",r,"{}","undefined","true"];let l=2;s&&(i[2]=s,l=3),n.length&&(i[3]=El([],n,!1,!1,o),l=4),t.scopeId&&!t.slotted&&(l=5),i.splice(l),e.codegenNode=Nl(t.helper(Xi),i,o);}};const Sa=/^\s*([\w$_]+|(async\s*)?\([^)]*?\))\s*=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/,xa=(e,t,n,o)=>{const{loc:r,modifiers:s,arg:i}=e;let l;if(4===i.type)if(i.isStatic){l=kl(G(D(i.content)),!0,i.loc);}else l=Tl([`${n.helperString(ul)}(`,i,")"]);else l=i,l.children.unshift(`${n.helperString(ul)}(`),l.children.push(")");let c=e.exp;c&&!c.content.trim()&&(c=void 0);let a=n.cacheHandlers&&!c&&!n.inVOnce;if(c){const e=Bl(c.content),t=!(e||Sa.test(c.content)),n=c.content.includes(";");(t||a&&e)&&(c=Tl([`${t?"$event":"(...args)"} => ${n?"{":"("}`,c,n?"}":")"]));}let u={props:[wl(l,c||kl("() => {}",!1,r))]};return o&&(u=o(u)),a&&(u.props[0].value=n.cache(u.props[0].value)),u.props.forEach((e=>e.key.isHandlerKey=!0)),u},Ca=(e,t,n)=>{const{exp:o,modifiers:r,loc:s}=e,i=e.arg;return 4!==i.type?(i.children.unshift("("),i.children.push(') || ""')):i.isStatic||(i.content=`${i.content} || ""`),r.includes("camel")&&(4===i.type?i.content=i.isStatic?D(i.content):`${n.helperString(cl)}(${i.content})`:(i.children.unshift(`${n.helperString(cl)}(`),i.children.push(")"))),n.inSSR||(r.includes("prop")&&wa(i,"."),r.includes("attr")&&wa(i,"^")),!o||4===o.type&&!o.content.trim()?{props:[wl(i,kl("",!0,s))]}:{props:[wl(i,o)]}},wa=(e,t)=>{4===e.type?e.content=e.isStatic?t+e.content:`\`${t}\${${e.content}}\``:(e.children.unshift(`'${t}' + (`),e.children.push(")"));},ka=(e,t)=>{if(0===e.type||1===e.type||11===e.type||10===e.type)return ()=>{const n=e.children;let o,r=!1;for(let e=0;e<n.length;e++){const t=n[e];if(zl(t)){r=!0;for(let r=e+1;r<n.length;r++){const s=n[r];if(!zl(s)){o=void 0;break}o||(o=n[e]={type:8,loc:t.loc,children:[t]}),o.children.push(" + ",s),n.splice(r,1),r--;}}}if(r&&(1!==n.length||0!==e.type&&(1!==e.type||0!==e.tagType||e.props.find((e=>7===e.type&&!t.directiveTransforms[e.name])))))for(let e=0;e<n.length;e++){const o=n[e];if(zl(o)||8===o.type){const r=[];2===o.type&&" "===o.content||r.push(o),t.ssr||0!==Oc(o,t)||r.push("1"),n[e]={type:12,content:o,loc:o.loc,codegenNode:Nl(t.helper(zi),r)};}}}},Ta=new WeakSet,Na=(e,t)=>{if(1===e.type&&Hl(e,"once",!0)){if(Ta.has(e)||t.inVOnce)return;return Ta.add(e),t.inVOnce=!0,t.helper(pl),()=>{t.inVOnce=!1;const e=t.currentNode;e.codegenNode&&(e.codegenNode=t.cache(e.codegenNode,!0));}}},Ea=(e,t,n)=>{const{exp:o,arg:r}=e;if(!o)return $a();const s=o.loc.source,i=4===o.type?o.content:s;if(!i.trim()||!Bl(i))return $a();const l=r||kl("modelValue",!0),c=r?Rl(r)?`onUpdate:${r.content}`:Tl(['"onUpdate:" + ',r]):"onUpdate:modelValue";let a;a=Tl([`${n.isTS?"($event: any)":"$event"} => ((`,o,") = $event)"]);const u=[wl(l,e.exp),wl(c,a)];if(e.modifiers.length&&1===t.tagType){const t=e.modifiers.map((e=>(Ml(e)?e:JSON.stringify(e))+": true")).join(", "),n=r?Rl(r)?`${r.content}Modifiers`:Tl([r,' + "Modifiers"']):"modelModifiers";u.push(wl(n,kl(`{ ${t} }`,!1,e.loc,2)));}return $a(u)};function $a(e=[]){return {props:e}}const Ra=new WeakSet,Oa=(e,t)=>{if(1===e.type){const n=Hl(e,"memo");if(!n||Ra.has(e))return;return Ra.add(e),()=>{const o=e.codegenNode||t.currentNode.codegenNode;o&&13===o.type&&(1!==e.tagType&&tc(o,t),e.codegenNode=Nl(t.helper(vl),[n.exp,El(void 0,o),"_cache",String(t.cached++)]));}}};function Aa(e,t={}){const n=t.onError||Oi,o="module"===t.mode;!0===t.prefixIdentifiers?n(Fi(46)):o&&n(Fi(47));t.cacheHandlers&&n(Fi(48)),t.scopeId&&!o&&n(Fi(49));const r=A(e)?sc(e,t):e,[s,i]=[[Na,Zc,Oa,ea,_a,ma,ca,ka],{on:xa,bind:Ca,model:Ea}];return Bc(r,C({},t,{prefixIdentifiers:false,nodeTransforms:[...s,...t.nodeTransforms||[]],directiveTransforms:C({},i,t.directiveTransforms||{})})),Hc(r,C({},t,{prefixIdentifiers:false}))}const Fa=Symbol(""),Ma=Symbol(""),Pa=Symbol(""),Va=Symbol(""),Ia=Symbol(""),Ba=Symbol(""),La=Symbol(""),ja=Symbol(""),Ua=Symbol(""),Ha=Symbol("");var Da;let Wa;Da={[Fa]:"vModelRadio",[Ma]:"vModelCheckbox",[Pa]:"vModelText",[Va]:"vModelSelect",[Ia]:"vModelDynamic",[Ba]:"withModifiers",[La]:"withKeys",[ja]:"vShow",[Ua]:"Transition",[Ha]:"TransitionGroup"},Object.getOwnPropertySymbols(Da).forEach((e=>{bl[e]=Da[e];}));const za=t("style,iframe,script,noscript",!0),Ka={isVoidTag:f,isNativeTag:e=>u(e)||p(e),isPreTag:e=>"pre"===e,decodeEntities:function(e,t=!1){return Wa||(Wa=document.createElement("div")),t?(Wa.innerHTML=`<div foo="${e.replace(/"/g,"&quot;")}">`,Wa.children[0].getAttribute("foo")):(Wa.innerHTML=e,Wa.textContent)},isBuiltInComponent:e=>Ol(e,"Transition")?Ua:Ol(e,"TransitionGroup")?Ha:void 0,getNamespace(e,t){let n=t?t.ns:0;if(t&&2===n)if("annotation-xml"===t.tag){if("svg"===e)return 1;t.props.some((e=>6===e.type&&"encoding"===e.name&&null!=e.value&&("text/html"===e.value.content||"application/xhtml+xml"===e.value.content)))&&(n=0);}else /^m(?:[ions]|text)$/.test(t.tag)&&"mglyph"!==e&&"malignmark"!==e&&(n=0);else t&&1===n&&("foreignObject"!==t.tag&&"desc"!==t.tag&&"title"!==t.tag||(n=0));if(0===n){if("svg"===e)return 1;if("math"===e)return 2}return n},getTextMode({tag:e,ns:t}){if(0===t){if("textarea"===e||"title"===e)return 1;if(za(e))return 2}return 0}},Ga=(e,t)=>{const n=c(e);return kl(JSON.stringify(n),!1,t,3)};const qa=t("passive,once,capture"),Ja=t("stop,prevent,self,ctrl,shift,alt,meta,exact,middle"),Za=t("left,right"),Ya=t("onkeyup,onkeydown,onkeypress",!0),Qa=(e,t)=>Rl(e)&&"onclick"===e.content.toLowerCase()?kl(t,!0):4!==e.type?Tl(["(",e,`) === "onClick" ? "${t}" : (`,e,")"]):e,Xa=(e,t)=>{1!==e.type||0!==e.tagType||"script"!==e.tag&&"style"!==e.tag||t.removeNode();},eu=[e=>{1===e.type&&e.props.forEach(((t,n)=>{6===t.type&&"style"===t.name&&t.value&&(e.props[n]={type:7,name:"bind",arg:kl("style",!0,t.loc),exp:Ga(t.value.content,t.loc),modifiers:[],loc:t.loc});}));}],tu={cloak:()=>({props:[]}),html:(e,t,n)=>{const{exp:o,loc:r}=e;return t.children.length&&(t.children.length=0),{props:[wl(kl("innerHTML",!0,r),o||kl("",!0))]}},text:(e,t,n)=>{const{exp:o,loc:r}=e;return t.children.length&&(t.children.length=0),{props:[wl(kl("textContent",!0),o?Nl(n.helperString(tl),[o],r):kl("",!0))]}},model:(e,t,n)=>{const o=Ea(e,t,n);if(!o.props.length||1===t.tagType)return o;const{tag:r}=t,s=n.isCustomElement(r);if("input"===r||"textarea"===r||"select"===r||s){let e=Pa,i=!1;if("input"===r||s){const n=Dl(t,"type");if(n){if(7===n.type)e=Ia;else if(n.value)switch(n.value.content){case"radio":e=Fa;break;case"checkbox":e=Ma;break;case"file":i=!0;}}else (function(e){return e.props.some((e=>!(7!==e.type||"bind"!==e.name||e.arg&&4===e.arg.type&&e.arg.isStatic)))})(t)&&(e=Ia);}else "select"===r&&(e=Va);i||(o.needRuntime=n.helper(e));}return o.props=o.props.filter((e=>!(4===e.key.type&&"modelValue"===e.key.content))),o},on:(e,t,n)=>xa(e,0,n,(t=>{const{modifiers:o}=e;if(!o.length)return t;let{key:r,value:s}=t.props[0];const{keyModifiers:i,nonKeyModifiers:l,eventOptionModifiers:c}=((e,t,n,o)=>{const r=[],s=[],i=[];for(let l=0;l<t.length;l++){const n=t[l];qa(n)?i.push(n):Za(n)?Rl(e)?Ya(e.content)?r.push(n):s.push(n):(r.push(n),s.push(n)):Ja(n)?s.push(n):r.push(n);}return {keyModifiers:r,nonKeyModifiers:s,eventOptionModifiers:i}})(r,o);if(l.includes("right")&&(r=Qa(r,"onContextmenu")),l.includes("middle")&&(r=Qa(r,"onMouseup")),l.length&&(s=Nl(n.helper(Ba),[s,JSON.stringify(l)])),!i.length||Rl(r)&&!Ya(r.content)||(s=Nl(n.helper(La),[s,JSON.stringify(i)])),c.length){const e=c.map(K).join("");r=Rl(r)?kl(`${r.content}${e}`,!0):Tl(["(",r,`) + "${e}"`]);}return {props:[wl(r,s)]}})),show:(e,t,n)=>({props:[],needRuntime:n.helper(ja)})};const nu=Object.create(null);function ou(e,t){if(!A(e)){if(!e.nodeType)return y;e=e.innerHTML;}const n=e,o=nu[n];if(o)return o;if("#"===e[0]){const t=document.querySelector(e);e=t?t.innerHTML:"";}const{code:r}=function(e,t={}){return Aa(e,C({},Ka,t,{nodeTransforms:[Xa,...eu,...t.nodeTransforms||[]],directiveTransforms:C({},tu,t.directiveTransforms||{}),transformHoist:null}))}(e,C({hoistStatic:!0,onError:void 0,onWarn:y},t)),s=new Function(r)();return s._rc=!0,nu[n]=s}return br(ou),e.BaseTransition=sn,e.Comment=Fo,e.EffectScope=te,e.Fragment=Oo,e.KeepAlive=vn,e.ReactiveEffect=de,e.Static=Mo,e.Suspense=Jt,e.Teleport=To,e.Text=Ao,e.Transition=Vs,e.TransitionGroup=ei,e.VueElement=Os,e.callWithAsyncErrorHandling=Rr,e.callWithErrorHandling=$r,e.camelize=D,e.capitalize=K,e.cloneVNode=Yo,e.compatUtils=null,e.compile=ou,e.computed=Pt,e.createApp=(...e)=>{const t=ki().createApp(...e),{mount:n}=t;return t.mount=e=>{const o=$i(e);if(!o)return;const r=t._component;O(r)||r.render||r.template||(r.template=o.innerHTML),o.innerHTML="";const s=n(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),s},t},e.createBlock=Ho,e.createCommentVNode=function(e="",t=!1){return t?(Io(),Ho(Fo,null,e)):Jo(Fo,null,e)},e.createElementBlock=function(e,t,n,o,r,s){return Uo(qo(e,t,n,o,r,s,!0))},e.createElementVNode=qo,e.createHydrationRenderer=vo,e.createPropsRestProxy=function(e,t){const n={};for(const o in e)t.includes(o)||Object.defineProperty(n,o,{enumerable:!0,get:()=>e[o]});return n},e.createRenderer=go,e.createSSRApp=(...e)=>{const t=Ti().createApp(...e),{mount:n}=t;return t.mount=e=>{const t=$i(e);if(t)return n(t,!0,t instanceof SVGElement)},t},e.createSlots=function(e,t){for(let n=0;n<t.length;n++){const o=t[n];if(N(o))for(let t=0;t<o.length;t++)e[o[t].name]=o[t].fn;else o&&(e[o.name]=o.fn);}return e},e.createStaticVNode=function(e,t){const n=Jo(Mo,null,e);return n.staticCount=t,n},e.createTextVNode=Qo,e.createVNode=Jo,e.customRef=function(e){return new Ot(e)},e.defineAsyncComponent=function(e){O(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:o,delay:r=200,timeout:s,suspensible:i=!0,onError:l}=e;let c,a=null,u=0;const p=()=>{let e;return a||(e=a=t().catch((e=>{if(e=e instanceof Error?e:new Error(String(e)),l)return new Promise(((t,n)=>{l(e,(()=>t((u++,a=null,p()))),(()=>n(e)),u+1);}));throw e})).then((t=>e!==a&&a?a:(t&&(t.__esModule||"Module"===t[Symbol.toStringTag])&&(t=t.default),c=t,t))))};return dn({name:"AsyncComponentWrapper",__asyncLoader:p,get __asyncResolved(){return c},setup(){const e=ur;if(c)return ()=>mn(c,e);const t=t=>{a=null,Or(t,e,13,!o);};if(i&&e.suspense)return p().then((t=>()=>mn(t,e))).catch((e=>(t(e),()=>o?Jo(o,{error:e}):null)));const l=kt(!1),u=kt(),f=kt(!!r);return r&&setTimeout((()=>{f.value=!1;}),r),null!=s&&setTimeout((()=>{if(!l.value&&!u.value){const e=new Error(`Async component timed out after ${s}ms.`);t(e),u.value=e;}}),s),p().then((()=>{l.value=!0,e.parent&&gn(e.parent.vnode)&&Kr(e.parent.update);})).catch((e=>{t(e),u.value=e;})),()=>l.value&&c?mn(c,e):u.value&&o?Jo(o,{error:u.value}):n&&!f.value?Jo(n):void 0}})},e.defineComponent=dn,e.defineCustomElement=$s,e.defineEmits=function(){return null},e.defineExpose=function(e){},e.defineProps=function(){return null},e.defineSSRCustomElement=e=>$s(e,Ei),e.effect=function(e,t){e.effect&&(e=e.effect.fn);const n=new de(e);t&&(C(n,t),t.scope&&ne(n,t.scope)),t&&t.lazy||n.run();const o=n.run.bind(n);return o.effect=n,o},e.effectScope=function(e){return new te(e)},e.getCurrentInstance=pr,e.getCurrentScope=function(){return X},e.getTransitionRawChildren=fn,e.guardReactiveProps=Zo,e.h=cs,e.handleError=Or,e.hydrate=Ei,e.initCustomFormatter=function(){},e.initDirectivesForSSR=Ri,e.inject=nn,e.isMemoSame=us,e.isProxy=vt,e.isReactive=mt,e.isReadonly=gt,e.isRef=wt,e.isRuntimeOnly=()=>!mr,e.isVNode=Do,e.markRaw=bt,e.mergeDefaults=function(e,t){const n=N(e)?e.reduce(((e,t)=>(e[t]={},e)),{}):e;for(const o in t){const e=n[o];e?N(e)||O(e)?n[o]={type:e,default:t[o]}:e.default=t[o]:null===e&&(n[o]={default:t[o]});}return n},e.mergeProps=nr,e.nextTick=zr,e.normalizeClass=a,e.normalizeProps=function(e){if(!e)return null;let{class:t,style:n}=e;return t&&!A(t)&&(e.class=a(t)),n&&(e.style=s(n)),e},e.normalizeStyle=s,e.onActivated=bn,e.onBeforeMount=Nn,e.onBeforeUnmount=On,e.onBeforeUpdate=$n,e.onDeactivated=_n,e.onErrorCaptured=Vn,e.onMounted=En,e.onRenderTracked=Pn,e.onRenderTriggered=Mn,e.onScopeDispose=function(e){X&&X.cleanups.push(e);},e.onServerPrefetch=Fn,e.onUnmounted=An,e.onUpdated=Rn,e.openBlock=Io,e.popScopeId=function(){Ut=null;},e.provide=tn,e.proxyRefs=Rt,e.pushScopeId=function(e){Ut=e;},e.queuePostFlushCb=Jr,e.reactive=pt,e.readonly=dt,e.ref=kt,e.registerRuntimeCompiler=br,e.render=Ni,e.renderList=function(e,t,n,o){let r;const s=n&&n[o];if(N(e)||A(e)){r=new Array(e.length);for(let n=0,o=e.length;n<o;n++)r[n]=t(e[n],n,void 0,s&&s[n]);}else if("number"==typeof e){r=new Array(e);for(let n=0;n<e;n++)r[n]=t(n+1,n,void 0,s&&s[n]);}else if(M(e))if(e[Symbol.iterator])r=Array.from(e,((e,n)=>t(e,n,void 0,s&&s[n])));else {const n=Object.keys(e);r=new Array(n.length);for(let o=0,i=n.length;o<i;o++){const i=n[o];r[o]=t(e[i],i,o,s&&s[o]);}}else r=[];return n&&(n[o]=r),r},e.renderSlot=function(e,t,n={},o,r){if(jt.isCE)return Jo("slot","default"===t?null:{name:t},o&&o());let s=e[t];s&&s._c&&(s._d=!1),Io();const i=s&&or(s(n)),l=Ho(Oo,{key:n.key||`_${t}`},i||(o?o():[]),i&&1===e._?64:-2);return !r&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),s&&s._c&&(s._d=!0),l},e.resolveComponent=function(e,t){return $o(No,e,!0,t)||e},e.resolveDirective=function(e){return $o("directives",e)},e.resolveDynamicComponent=function(e){return A(e)?$o(No,e,!1)||e:e||Eo},e.resolveFilter=null,e.resolveTransitionHooks=cn,e.setBlockTracking=jo,e.setDevtoolsHook=function t(n,o){if(e.devtools=n,e.devtools)e.devtools.enabled=!0,Vt.forEach((({event:t,args:n})=>e.devtools.emit(t,...n))),Vt=[];else {(o.__VUE_DEVTOOLS_HOOK_REPLAY__=o.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push((e=>{t(e,o);})),setTimeout((()=>{Vt=[];}),3e3);}},e.setTransitionHooks=pn,e.shallowReactive=ft,e.shallowReadonly=function(e){return ht(e,!0,Ie,st,at)},e.shallowRef=function(e){return Tt(e,!0)},e.ssrContextKey=as,e.ssrUtils=null,e.stop=function(e){e.effect.stop();},e.toDisplayString=e=>null==e?"":N(e)||M(e)&&(e.toString===V||!O(e.toString))?JSON.stringify(e,m,2):String(e),e.toHandlerKey=G,e.toHandlers=function(e){const t={};for(const n in e)t[G(n)]=e[n];return t},e.toRaw=yt,e.toRef=Ft,e.toRefs=function(e){const t=N(e)?new Array(e.length):{};for(const n in e)t[n]=Ft(e,n);return t},e.transformVNodeArgs=function(e){},e.triggerRef=function(e){Ct(e);},e.unref=Et,e.useAttrs=function(){return ls().attrs},e.useCssModule=function(e="$style"){return g},e.useCssVars=function(e){const t=pr();if(!t)return;const n=()=>As(t.subTree,e(t.proxy));es(n),En((()=>{const e=new MutationObserver(n);e.observe(t.subTree.el.parentNode,{childList:!0}),An((()=>e.disconnect()));}));},e.useSSRContext=()=>{},e.useSlots=function(){return ls().slots},e.useTransitionState=on,e.vModelCheckbox=ci,e.vModelDynamic=mi,e.vModelRadio=ui,e.vModelSelect=pi,e.vModelText=li,e.vShow=_i,e.version=ps,e.warn=function(e,...t){ve();const n=Tr.length?Tr[Tr.length-1].component:null,o=n&&n.appContext.config.warnHandler,r=function(){let e=Tr[Tr.length-1];if(!e)return [];const t=[];for(;e;){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const o=e.component&&e.component.parent;e=o&&o.vnode;}return t}();if(o)$r(o,n,11,[e+t.join(""),n&&n.proxy,r.map((({vnode:e})=>`at <${kr(n,e.type)}>`)).join("\n"),r]);else {const n=[`[Vue warn]: ${e}`,...t];r.length&&n.push("\n",...function(e){const t=[];return e.forEach(((e,n)=>{t.push(...0===n?[]:["\n"],...function({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",o=` at <${kr(e.component,e.type,!!e.component&&null==e.component.parent)}`,r=">"+n;return e.props?[o,...Nr(e.props),r]:[o+r]}(e));})),t}(r)),console.warn(...n);}ye();},e.watch=ns,e.watchEffect=function(e,t){return os(e,null,t)},e.watchPostEffect=es,e.watchSyncEffect=function(e,t){return os(e,null,{flush:"sync"})},e.withAsyncContext=function(e){const t=pr();let n=e();return dr(),P(n)&&(n=n.catch((e=>{throw fr(t),e}))),[n,()=>fr(t)]},e.withCtx=Dt,e.withDefaults=function(e,t){return null},e.withDirectives=function(e,t){if(null===jt)return e;const n=jt.proxy,o=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[e,s,i,l=g]=t[r];O(e)&&(e={mounted:e,updated:e}),e.deep&&is(s),o.push({dir:e,instance:n,value:s,oldValue:void 0,arg:i,modifiers:l});}return e},e.withKeys=(e,t)=>n=>{if(!("key"in n))return;const o=z(n.key);return t.some((e=>e===o||bi[e]===o))?e(n):void 0},e.withMemo=function(e,t,n,o){const r=n[o];if(r&&us(r,e))return r;const s=t();return s.memo=e.slice(),n[o]=s},e.withModifiers=(e,t)=>(n,...o)=>{for(let e=0;e<t.length;e++){const o=yi[t[e]];if(o&&o(n,t))return}return e(n,...o)},e.withScopeId=e=>Dt,Object.defineProperty(e,"__esModule",{value:!0}),e}({});

  /*!
    * vue-router v4.0.12
    * (c) 2021 Eduardo San Martin Morote
    * @license MIT
    */
  window.VueRouter=function(e,t){const n="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,r=e=>n?Symbol(e):"_vr_"+e,o=r("rvlm"),a=r("rvd"),c=r("r"),s=r("rl"),i=r("rvl"),l="undefined"!=typeof window;const u=Object.assign;function f(e,t){const n={};for(const r in t){const o=t[r];n[r]=Array.isArray(o)?o.map(e):e(o);}return n}const p=()=>{},h=/\/$/;function d(e,t,n="/"){let r,o={},a="",c="";const s=t.indexOf("?"),i=t.indexOf("#",s>-1?s:0);return s>-1&&(r=t.slice(0,s),a=t.slice(s+1,i>-1?i:t.length),o=e(a)),i>-1&&(r=r||t.slice(0,i),c=t.slice(i,t.length)),r=function(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let o,a,c=n.length-1;for(o=0;o<r.length;o++)if(a=r[o],1!==c&&"."!==a){if(".."!==a)break;c--;}return n.slice(0,c).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}(null!=r?r:t,n),{fullPath:r+(a&&"?")+a+c,path:r,query:o,hash:c}}function m(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function g(e,t){return (e.aliasOf||e)===(t.aliasOf||t)}function v(e,t){if(Object.keys(e).length!==Object.keys(t).length)return !1;for(const n in e)if(!y(e[n],t[n]))return !1;return !0}function y(e,t){return Array.isArray(e)?b(e,t):Array.isArray(t)?b(t,e):e===t}function b(e,t){return Array.isArray(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}var w,E;!function(e){e.pop="pop",e.push="push";}(w||(w={})),function(e){e.back="back",e.forward="forward",e.unknown="";}(E||(E={}));function R(e){if(!e)if(l){const t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"");}else e="/";return "/"!==e[0]&&"#"!==e[0]&&(e="/"+e),e.replace(h,"")}const A=/^[^#]+#/;function k(e,t){return e.replace(A,"#")+t}const O=()=>({left:window.pageXOffset,top:window.pageYOffset});function P(e){let t;if("el"in e){const n=e.el,r="string"==typeof n&&n.startsWith("#"),o="string"==typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=function(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return {behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}(o,e);}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset);}function j(e,t){return (history.state?history.state.position-t:-1)+e}const x=new Map;let C=()=>location.protocol+"//"+location.host;function $(e,t){const{pathname:n,search:r,hash:o}=t,a=e.indexOf("#");if(a>-1){let t=o.includes(e.slice(a))?e.slice(a).length:1,n=o.slice(t);return "/"!==n[0]&&(n="/"+n),m(n,"")}return m(n,e)+r+o}function S(e,t,n,r=!1,o=!1){return {back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?O():null}}function L(e){const t=function(e){const{history:t,location:n}=window,r={value:$(e,n)},o={value:t.state};function a(r,a,c){const s=e.indexOf("#"),i=s>-1?(n.host&&document.querySelector("base")?e:e.slice(s))+r:C()+e+r;try{t[c?"replaceState":"pushState"](a,"",i),o.value=a;}catch(e){console.error(e),n[c?"replace":"assign"](i);}}return o.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:o,push:function(e,n){const c=u({},o.value,t.state,{forward:e,scroll:O()});a(c.current,c,!0),a(e,u({},S(r.value,e,null),{position:c.position+1},n),!1),r.value=e;},replace:function(e,n){a(e,u({},t.state,S(o.value.back,e,o.value.forward,!0),n,{position:o.value.position}),!0),r.value=e;}}}(e=R(e)),n=function(e,t,n,r){let o=[],a=[],c=null;const s=({state:a})=>{const s=$(e,location),i=n.value,l=t.value;let u=0;if(a){if(n.value=s,t.value=a,c&&c===i)return void(c=null);u=l?a.position-l.position:0;}else r(s);o.forEach((e=>{e(n.value,i,{delta:u,type:w.pop,direction:u?u>0?E.forward:E.back:E.unknown});}));};function i(){const{history:e}=window;e.state&&e.replaceState(u({},e.state,{scroll:O()}),"");}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",i),{pauseListeners:function(){c=n.value;},listen:function(e){o.push(e);const t=()=>{const t=o.indexOf(e);t>-1&&o.splice(t,1);};return a.push(t),t},destroy:function(){for(const e of a)e();a=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",i);}}}(e,t.state,t.location,t.replace);const r=u({location:"",base:e,go:function(e,t=!0){t||n.pauseListeners(),history.go(e);},createHref:k.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function q(e){return "string"==typeof e||"symbol"==typeof e}const M={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},_=r("nf");var T;function B(e,t){return u(new Error,{type:e,[_]:!0},t)}function G(e,t){return e instanceof Error&&_ in e&&(null==t||!!(e.type&t))}e.NavigationFailureType=void 0,(T=e.NavigationFailureType||(e.NavigationFailureType={}))[T.aborted=4]="aborted",T[T.cancelled=8]="cancelled",T[T.duplicated=16]="duplicated";const F="[^/]+?",I={sensitive:!1,strict:!1,start:!0,end:!0},K=/[.+*?^${}()[\]/\\]/g;function U(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++;}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function V(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const e=U(r[n],o[n]);if(e)return e;n++;}return o.length-r.length}const H={type:0,value:""},W=/[a-zA-Z0-9_]/;function D(e,t,n){const r=function(e,t){const n=u({},I,t),r=[];let o=n.start?"^":"";const a=[];for(const t of e){const e=t.length?[]:[90];n.strict&&!t.length&&(o+="/");for(let r=0;r<t.length;r++){const c=t[r];let s=40+(n.sensitive?.25:0);if(0===c.type)r||(o+="/"),o+=c.value.replace(K,"\\$&"),s+=40;else if(1===c.type){const{value:e,repeatable:n,optional:i,regexp:l}=c;a.push({name:e,repeatable:n,optional:i});const u=l||F;if(u!==F){s+=10;try{new RegExp(`(${u})`);}catch(t){throw new Error(`Invalid custom RegExp for param "${e}" (${u}): `+t.message)}}let f=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;r||(f=i&&t.length<2?`(?:/${f})`:"/"+f),i&&(f+="?"),o+=f,s+=20,i&&(s+=-8),n&&(s+=-20),".*"===u&&(s+=-50);}e.push(s);}r.push(e);}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001;}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const c=new RegExp(o,n.sensitive?"":"i");return {re:c,score:r,keys:a,parse:function(e){const t=e.match(c),n={};if(!t)return null;for(let e=1;e<t.length;e++){const r=t[e]||"",o=a[e-1];n[o.name]=r&&o.repeatable?r.split("/"):r;}return n},stringify:function(t){let n="",r=!1;for(const o of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of o)if(0===e.type)n+=e.value;else if(1===e.type){const{value:a,repeatable:c,optional:s}=e,i=a in t?t[a]:"";if(Array.isArray(i)&&!c)throw new Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);const l=Array.isArray(i)?i.join("/"):i;if(!l){if(!s)throw new Error(`Missing required param "${a}"`);o.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0);}n+=l;}}return n}}}(function(e){if(!e)return [[]];if("/"===e)return [[H]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n;const o=[];let a;function c(){a&&o.push(a),a=[];}let s,i=0,l="",u="";function f(){l&&(0===n?a.push({type:0,value:l}):1===n||2===n||3===n?(a.length>1&&("*"===s||"+"===s)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:l,regexp:u,repeatable:"*"===s||"+"===s,optional:"*"===s||"?"===s})):t("Invalid state to consume buffer"),l="");}function p(){l+=s;}for(;i<e.length;)if(s=e[i++],"\\"!==s||2===n)switch(n){case 0:"/"===s?(l&&f(),c()):":"===s?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:"("===s?n=2:W.test(s)?p():(f(),n=0,"*"!==s&&"?"!==s&&"+"!==s&&i--);break;case 2:")"===s?"\\"==u[u.length-1]?u=u.slice(0,-1)+s:n=3:u+=s;break;case 3:f(),n=0,"*"!==s&&"?"!==s&&"+"!==s&&i--,u="";break;default:t("Unknown state");}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${l}"`),f(),c(),o}(e.path),n),o=u(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function N(e,t){const n=[],r=new Map;function o(e,n,r){const s=!r,i=function(e){return {path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:z(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}(e);i.aliasOf=r&&r.record;const l=Y(t,e),f=[i];if("alias"in e){const t="string"==typeof e.alias?[e.alias]:e.alias;for(const e of t)f.push(u({},i,{components:r?r.record.components:i.components,path:e,aliasOf:r?r.record:i}));}let h,d;for(const t of f){const{path:u}=t;if(n&&"/"!==u[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&r+u);}if(h=D(t,n,l),r?r.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),s&&e.name&&!Q(h)&&a(e.name)),"children"in i){const e=i.children;for(let t=0;t<e.length;t++)o(e[t],h,r&&r.children[t]);}r=r||h,c(h);}return d?()=>{a(d);}:p}function a(e){if(q(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(a),t.alias.forEach(a));}else {const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(a),e.alias.forEach(a));}}function c(e){let t=0;for(;t<n.length&&V(e,n[t])>=0;)t++;n.splice(t,0,e),e.record.name&&!Q(e)&&r.set(e.record.name,e);}return t=Y({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>o(e))),{addRoute:o,resolve:function(e,t){let o,a,c,s={};if("name"in e&&e.name){if(o=r.get(e.name),!o)throw B(1,{location:e});c=o.record.name,s=u(function(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}(t.params,o.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params),a=o.stringify(s);}else if("path"in e)a=e.path,o=n.find((e=>e.re.test(a))),o&&(s=o.parse(a),c=o.record.name);else {if(o=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!o)throw B(1,{location:e,currentLocation:t});c=o.record.name,s=u({},t.params,e.params),a=o.stringify(s);}const i=[];let l=o;for(;l;)i.unshift(l.record),l=l.parent;return {name:c,path:a,params:s,matched:i,meta:X(i)}},removeRoute:a,getRoutes:function(){return n},getRecordMatcher:function(e){return r.get(e)}}}function z(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"==typeof n?n:n[r];return t}function Q(e){for(;e;){if(e.record.aliasOf)return !0;e=e.parent;}return !1}function X(e){return e.reduce(((e,t)=>u(e,t.meta)),{})}function Y(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const Z=/#/g,J=/&/g,ee=/\//g,te=/=/g,ne=/\?/g,re=/\+/g,oe=/%5B/g,ae=/%5D/g,ce=/%5E/g,se=/%60/g,ie=/%7B/g,le=/%7C/g,ue=/%7D/g,fe=/%20/g;function pe(e){return encodeURI(""+e).replace(le,"|").replace(oe,"[").replace(ae,"]")}function he(e){return pe(e).replace(re,"%2B").replace(fe,"+").replace(Z,"%23").replace(J,"%26").replace(se,"`").replace(ie,"{").replace(ue,"}").replace(ce,"^")}function de(e){return null==e?"":function(e){return pe(e).replace(Z,"%23").replace(ne,"%3F")}(e).replace(ee,"%2F")}function me(e){try{return decodeURIComponent(""+e)}catch(e){}return ""+e}function ge(e){const t={};if(""===e||"?"===e)return t;const n=("?"===e[0]?e.slice(1):e).split("&");for(let e=0;e<n.length;++e){const r=n[e].replace(re," "),o=r.indexOf("="),a=me(o<0?r:r.slice(0,o)),c=o<0?null:me(r.slice(o+1));if(a in t){let e=t[a];Array.isArray(e)||(e=t[a]=[e]),e.push(c);}else t[a]=c;}return t}function ve(e){let t="";for(let n in e){const r=e[n];if(n=he(n).replace(te,"%3D"),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(r)?r.map((e=>e&&he(e))):[r&&he(r)]).forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e));}));}return t}function ye(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r);}return t}function be(){let e=[];return {add:function(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1);}},list:()=>e,reset:function(){e=[];}}}function we(e,n,r){const o=()=>{e[n].delete(r);};t.onUnmounted(o),t.onDeactivated(o),t.onActivated((()=>{e[n].add(r);})),e[n].add(r);}function Ee(e,t,n,r,o){const a=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return ()=>new Promise(((c,s)=>{const i=e=>{var i;!1===e?s(B(4,{from:n,to:t})):e instanceof Error?s(e):"string"==typeof(i=e)||i&&"object"==typeof i?s(B(2,{from:t,to:e})):(a&&r.enterCallbacks[o]===a&&"function"==typeof e&&a.push(e),c());},l=e.call(r&&r.instances[o],t,n,i);let u=Promise.resolve(l);e.length<3&&(u=u.then(i)),u.catch((e=>s(e)));}))}function Re(e,t,r,o){const a=[];for(const s of e)for(const e in s.components){let i=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if("object"==typeof(c=i)||"displayName"in c||"props"in c||"__vccOpts"in c){const n=(i.__vccOpts||i)[t];n&&a.push(Ee(n,r,o,s,e));}else {let c=i();a.push((()=>c.then((a=>{if(!a)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));const c=(i=a).__esModule||n&&"Module"===i[Symbol.toStringTag]?a.default:a;var i;s.components[e]=c;const l=(c.__vccOpts||c)[t];return l&&Ee(l,r,o,s,e)()}))));}}var c;return a}function Ae(e){const n=t.inject(c),r=t.inject(s),o=t.computed((()=>n.resolve(t.unref(e.to)))),a=t.computed((()=>{const{matched:e}=o.value,{length:t}=e,n=e[t-1],a=r.matched;if(!n||!a.length)return -1;const c=a.findIndex(g.bind(null,n));if(c>-1)return c;const s=Oe(e[t-2]);return t>1&&Oe(n)===s&&a[a.length-1].path!==s?a.findIndex(g.bind(null,e[t-2])):c})),i=t.computed((()=>a.value>-1&&function(e,t){for(const n in t){const r=t[n],o=e[n];if("string"==typeof r){if(r!==o)return !1}else if(!Array.isArray(o)||o.length!==r.length||r.some(((e,t)=>e!==o[t])))return !1}return !0}(r.params,o.value.params))),l=t.computed((()=>a.value>-1&&a.value===r.matched.length-1&&v(r.params,o.value.params)));return {route:o,href:t.computed((()=>o.value.href)),isActive:i,isExactActive:l,navigate:function(r={}){return function(e){if(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;if(void 0!==e.button&&0!==e.button)return;if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}e.preventDefault&&e.preventDefault();return !0}(r)?n[t.unref(e.replace)?"replace":"push"](t.unref(e.to)).catch(p):Promise.resolve()}}}const ke=t.defineComponent({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ae,setup(e,{slots:n}){const r=t.reactive(Ae(e)),{options:o}=t.inject(c),a=t.computed((()=>({[Pe(e.activeClass,o.linkActiveClass,"router-link-active")]:r.isActive,[Pe(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:r.isExactActive})));return ()=>{const o=n.default&&n.default(r);return e.custom?o:t.h("a",{"aria-current":r.isExactActive?e.ariaCurrentValue:null,href:r.href,onClick:r.navigate,class:a.value},o)}}});function Oe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Pe=(e,t,n)=>null!=e?e:null!=t?t:n;function je(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const xe=t.defineComponent({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:n,slots:r}){const c=t.inject(i),s=t.computed((()=>e.route||c.value)),l=t.inject(a,0),f=t.computed((()=>s.value.matched[l]));t.provide(a,l+1),t.provide(o,f),t.provide(i,s);const p=t.ref();return t.watch((()=>[p.value,f.value,e.name]),(([e,t,n],[r,o,a])=>{t&&(t.instances[n]=e,o&&o!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=o.leaveGuards),t.updateGuards.size||(t.updateGuards=o.updateGuards))),!e||!t||o&&g(t,o)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)));}),{flush:"post"}),()=>{const o=s.value,a=f.value,c=a&&a.components[e.name],i=e.name;if(!c)return je(r.default,{Component:c,route:o});const l=a.props[e.name],h=l?!0===l?o.params:"function"==typeof l?l(o):l:null,d=t.h(c,u({},h,n,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(a.instances[i]=null);},ref:p}));return je(r.default,{Component:d,route:o})||d}}});function Ce(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}return e.RouterLink=ke,e.RouterView=xe,e.START_LOCATION=M,e.createMemoryHistory=function(e=""){let t=[],n=[""],r=0;function o(e){r++,r===n.length||n.splice(r),n.push(e);}const a={location:"",state:{},base:e=R(e),createHref:k.bind(null,e),replace(e){n.splice(r--,1),o(e);},push(e,t){o(e);},listen:e=>(t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1);}),destroy(){t=[],n=[""],r=0;},go(e,o=!0){const a=this.location,c=e<0?E.back:E.forward;r=Math.max(0,Math.min(r+e,n.length-1)),o&&function(e,n,{direction:r,delta:o}){const a={direction:r,delta:o,type:w.pop};for(const r of t)r(e,n,a);}(this.location,a,{direction:c,delta:e});}};return Object.defineProperty(a,"location",{enumerable:!0,get:()=>n[r]}),a},e.createRouter=function(e){const n=N(e.routes,e),r=e.parseQuery||ge,o=e.stringifyQuery||ve,a=e.history,h=be(),m=be(),y=be(),b=t.shallowRef(M);let E=M;l&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const R=f.bind(null,(e=>""+e)),A=f.bind(null,de),k=f.bind(null,me);function C(e,t){if(t=u({},t||b.value),"string"==typeof e){const o=d(r,e,t.path),c=n.resolve({path:o.path},t),s=a.createHref(o.fullPath);return u(o,c,{params:k(c.params),hash:me(o.hash),redirectedFrom:void 0,href:s})}let c;if("path"in e)c=u({},e,{path:d(r,e.path,t.path).path});else {const n=u({},e.params);for(const e in n)null==n[e]&&delete n[e];c=u({},e,{params:A(e.params)}),t.params=A(t.params);}const s=n.resolve(c,t),i=e.hash||"";s.params=R(k(s.params));const l=function(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}(o,u({},e,{hash:(f=i,pe(f).replace(ie,"{").replace(ue,"}").replace(ce,"^")),path:s.path}));var f;const p=a.createHref(l);return u({fullPath:l,hash:i,query:o===ve?ye(e.query):e.query||{}},s,{redirectedFrom:void 0,href:p})}function $(e){return "string"==typeof e?d(r,e,b.value.path):u({},e)}function S(e,t){if(E!==e)return B(8,{from:t,to:e})}function L(e){return T(e)}function _(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"==typeof n?n(e):n;return "string"==typeof r&&(r=r.includes("?")||r.includes("#")?r=$(r):{path:r},r.params={}),u({query:e.query,hash:e.hash,params:e.params},r)}}function T(e,t){const n=E=C(e),r=b.value,a=e.state,c=e.force,s=!0===e.replace,i=_(n);if(i)return T(u($(i),{state:a,force:c,replace:s}),t||n);const l=n;let f;return l.redirectedFrom=t,!c&&function(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&g(t.matched[r],n.matched[o])&&v(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}(o,r,n)&&(f=B(16,{to:l,from:r}),Y(r,r,!0,!1)),(f?Promise.resolve(f):I(l,r)).catch((e=>G(e)?e:Q(e,l,r))).then((e=>{if(e){if(G(e,2))return T(u($(e.to),{state:a,force:c,replace:s}),t||l)}else e=U(l,r,!0,s,a);return K(l,r,e),e}))}function F(e,t){const n=S(e,t);return n?Promise.reject(n):Promise.resolve()}function I(e,t){let n;const[r,o,a]=function(e,t){const n=[],r=[],o=[],a=Math.max(t.matched.length,e.matched.length);for(let c=0;c<a;c++){const a=t.matched[c];a&&(e.matched.find((e=>g(e,a)))?r.push(a):n.push(a));const s=e.matched[c];s&&(t.matched.find((e=>g(e,s)))||o.push(s));}return [n,r,o]}(e,t);n=Re(r.reverse(),"beforeRouteLeave",e,t);for(const o of r)o.leaveGuards.forEach((r=>{n.push(Ee(r,e,t));}));const c=F.bind(null,e,t);return n.push(c),Ce(n).then((()=>{n=[];for(const r of h.list())n.push(Ee(r,e,t));return n.push(c),Ce(n)})).then((()=>{n=Re(o,"beforeRouteUpdate",e,t);for(const r of o)r.updateGuards.forEach((r=>{n.push(Ee(r,e,t));}));return n.push(c),Ce(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const o of r.beforeEnter)n.push(Ee(o,e,t));else n.push(Ee(r.beforeEnter,e,t));return n.push(c),Ce(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=Re(a,"beforeRouteEnter",e,t),n.push(c),Ce(n)))).then((()=>{n=[];for(const r of m.list())n.push(Ee(r,e,t));return n.push(c),Ce(n)})).catch((e=>G(e,8)?e:Promise.reject(e)))}function K(e,t,n){for(const r of y.list())r(e,t,n);}function U(e,t,n,r,o){const c=S(e,t);if(c)return c;const s=t===M,i=l?history.state:{};n&&(r||s?a.replace(e.fullPath,u({scroll:s&&i&&i.scroll},o)):a.push(e.fullPath,o)),b.value=e,Y(e,t,n,s),X();}let V;function H(){V=a.listen(((e,t,n)=>{const r=C(e),o=_(r);if(o)return void T(u(o,{replace:!0}),r).catch(p);E=r;const c=b.value;var s,i;l&&(s=j(c.fullPath,n.delta),i=O(),x.set(s,i)),I(r,c).catch((e=>G(e,12)?e:G(e,2)?(T(e.to,r).then((e=>{G(e,20)&&!n.delta&&n.type===w.pop&&a.go(-1,!1);})).catch(p),Promise.reject()):(n.delta&&a.go(-n.delta,!1),Q(e,r,c)))).then((e=>{(e=e||U(r,c,!1))&&(n.delta?a.go(-n.delta,!1):n.type===w.pop&&G(e,20)&&a.go(-1,!1)),K(r,c,e);})).catch(p);}));}let W,D=be(),z=be();function Q(e,t,n){X(e);const r=z.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function X(e){W||(W=!0,H(),D.list().forEach((([t,n])=>e?n(e):t())),D.reset());}function Y(n,r,o,a){const{scrollBehavior:c}=e;if(!l||!c)return Promise.resolve();const s=!o&&function(e){const t=x.get(e);return x.delete(e),t}(j(n.fullPath,0))||(a||!o)&&history.state&&history.state.scroll||null;return t.nextTick().then((()=>c(n,r,s))).then((e=>e&&P(e))).catch((e=>Q(e,n,r)))}const Z=e=>a.go(e);let J;const ee=new Set;return {currentRoute:b,addRoute:function(e,t){let r,o;return q(e)?(r=n.getRecordMatcher(e),o=t):o=e,n.addRoute(o,r)},removeRoute:function(e){const t=n.getRecordMatcher(e);t&&n.removeRoute(t);},hasRoute:function(e){return !!n.getRecordMatcher(e)},getRoutes:function(){return n.getRoutes().map((e=>e.record))},resolve:C,options:e,push:L,replace:function(e){return L(u($(e),{replace:!0}))},go:Z,back:()=>Z(-1),forward:()=>Z(1),beforeEach:h.add,beforeResolve:m.add,afterEach:y.add,onError:z.add,isReady:function(){return W&&b.value!==M?Promise.resolve():new Promise(((e,t)=>{D.add([e,t]);}))},install(e){e.component("RouterLink",ke),e.component("RouterView",xe),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>t.unref(b)}),l&&!J&&b.value===M&&(J=!0,L(a.location).catch((e=>{})));const n={};for(const e in M)n[e]=t.computed((()=>b.value[e]));e.provide(c,this),e.provide(s,t.reactive(n)),e.provide(i,b);const r=e.unmount;ee.add(e),e.unmount=function(){ee.delete(e),ee.size<1&&(E=M,V&&V(),b.value=M,J=!1,W=!1),r();};}}},e.createRouterMatcher=N,e.createWebHashHistory=function(e){return (e=location.host?e||location.pathname+location.search:"").includes("#")||(e+="#"),L(e)},e.createWebHistory=L,e.isNavigationFailure=G,e.matchedRouteKey=o,e.onBeforeRouteLeave=function(e){const n=t.inject(o,{}).value;n&&we(n,"leaveGuards",e);},e.onBeforeRouteUpdate=function(e){const n=t.inject(o,{}).value;n&&we(n,"updateGuards",e);},e.parseQuery=ge,e.routeLocationKey=s,e.routerKey=c,e.routerViewLocationKey=i,e.stringifyQuery=ve,e.useLink=Ae,e.useRoute=function(){return t.inject(s)},e.useRouter=function(){return t.inject(c)},e.viewDepthKey=a,Object.defineProperty(e,"__esModule",{value:!0}),e}({},Vue);

  // WebReflection / element-notifier
  function onMutation(callback, root) {

      let loop = function loop(nodes, added, removed, connected, pass) {

          for (let i = 0, length = nodes.length; i < length; i++) {

              let node = nodes[i];

              if (pass || 'querySelectorAll' in node) {

                  if (connected) {
                      if (!added.has(node)) {
                          added.add(node);
                          removed["delete"](node);
                          callback(node, connected);
                      }
                  } else if (!removed.has(node)) {
                      removed.add(node);
                      added["delete"](node);
                      callback(node, connected);
                  }

                  if (!pass) loop((node.shadowRoot || node)['querySelectorAll']('*'), added, removed, connected, true);
              }
          }
      };

      let observer = new MutationObserver(records => {
          for (let added = new Set(), removed = new Set(), i = 0, length = records.length; i < length; i++) {
              let _records$i = records[i],
                  addedNodes = _records$i.addedNodes,
                  removedNodes = _records$i.removedNodes;
              loop(removedNodes, added, removed, false, false);
              loop(addedNodes, added, removed, true, false);
          }
      });

      observer.observe(root || document, {
          subtree: true,
          childList: true
      });

      return observer;
  }

  function on$1(element, name, delegate, fn) {

      if (!fn) {
         element.addEventListener(name, arguments[2]);
      } else {
          element.addEventListener(name, function (e) {

              let target = e.target;

              while (target !== element) {

                  if (!target) {
                      break;
                  }

                  if (target.matches(delegate)){
                      return fn.apply(target, arguments);
                  }

                  target = target.parentNode;
              }
          }, true);
      }

      return element;
  }

  function trigger(ele, name, data = {}) {
      ele.dispatchEvent(new CustomEvent(name, Object.assign({bubbles: true}, data)));
  }

  on$1(document.documentElement, 'click', function(e) {

      let dropdowns = document.body.querySelectorAll('kiss-dropdown[open="true"]'),
          dp = e.target.closest('kiss-dropdown');

      for (let i=0;i<dropdowns.length;i++) {
          if (!dp || dp!==dropdowns[i]) dropdowns[i].close();
      }

  });

  customElements.define('kiss-dropdown', class extends HTMLElement {

      connectedCallback() {

          this.addEventListener('click', (e) => {

              if (e.target.matches('input,select,textarea')) {
                  return;
              }

              if (this.getAttribute('open') == 'true') {

                  if (this.getAttribute('autohide') == 'false') {
                      return
                  }

                  this.close();
              } else {
                  this.open();
              }
          });
      }

      open() {
          this.setAttribute('open', 'true');
      }

      close() {
          this.removeAttribute('open');
      }
  });

  customElements.define('kiss-dialog', class extends HTMLElement {

      connectedCallback() {

          on$1(this, 'click', '[kiss-dialog-close]', e => {
              e.preventDefault();
              this.close();
          });
      }

      show() {
          this.setAttribute('open', 'true');
      }

      close() {
          this.removeAttribute('open');
      }
  });

  on$1(document.documentElement, 'click', '[kiss-offcanvas]', function (e) {

      e.preventDefault();

      let offcanvas = document.querySelector(this.getAttribute('kiss-offcanvas') || this.getAttribute('href'));

      if (offcanvas && offcanvas.show) {
          offcanvas.show();
      }
  });

  customElements.define('kiss-offcanvas', class extends HTMLElement {

      connectedCallback() {

          let $self = this, pointerStart = null;

          on$1(this, 'pointerdown', e => pointerStart = e.target);
          on$1(this, 'pointerup', e => {

              if (e.target == this && pointerStart == this) {

                  e.preventDefault();

                  if (!this.matches('[modal="true"]')) {
                      this.close();
                  }
              }
          });


          on$1(this, 'click', '[kiss-offcanvas-close]', function(e){

              if (this.getAttribute('kiss-offcanvas-close') != 'no-prevent') {
                  e.preventDefault();
              }

              $self.close();
          });

      }

      show() {
          this.setAttribute('open', 'true');
      }

      close() {
          this.removeAttribute('open');
      }
  });

  on$1(document.documentElement, 'click', '[kiss-popoutmenu]', function (e) {

      e.preventDefault();

      let menu = document.querySelector(this.getAttribute('kiss-popoutmenu') || this.getAttribute('href'));

      if (menu && menu.show) {

          let position = this.getAttribute('kiss-popoutmenu-pos');

          menu.show(position ? this : null, position);
      }
  });

  customElements.define('kiss-popoutmenu', class extends HTMLElement {

      connectedCallback() {

          on$1(this, 'click', e => {

              if (e.target.matches('[kiss-popoutmenu-close]') || e.target.closest('[kiss-popoutmenu-close]')) {
                  return this.close();
              }

              if (this.getAttribute('modal') !== 'true') {
                  this.close();
              }
          });
      }

      show(ele, position = 'left') {

          let content = this.querySelector('kiss-content');

          if (content) {
              content.style.position = '';
              content.style.top = '';
              content.style.left = '';
          }

          if (content && ele) {

              let rect = ele.getBoundingClientRect(),
                  left = rect.left,
                  top = rect.top + ele.offsetHeight;

              switch (position) {
                  case "right":
                      left = rect.right - content.offsetWidth;
                      break;

                  case "center":
                      left = (rect.right - ele.offsetWidth/2) - content.offsetWidth / 2;
                      break;

                  case "left":
                  default:
                      left = rect.left;
                      break;
              }

              if (left + content.offsetWidth > this.offsetWidth) {
                  left = rect.right - content.offsetWidth;
              }

              content.style.position = 'absolute';
              content.style.top = `${top}px`;
              content.style.left = `${left}px`;

          }

          this.setAttribute('open', 'true');
      }

      close() {
          this.removeAttribute('open');
          trigger(this, 'popoutmenuclose');
      }
  });

  customElements.define('kiss-parallax', class extends HTMLElement {

      connectedCallback() {

          let $this = this;

          this.speed = .3;
          this.mobilePx = 450;
          this.mobileDisable = this.getAttribute('mobile') == 'false';
          this.conditions = [];
          this.active = true;

          this.transform = this.getAttribute('transform') || 'translateY';

          this.winHeight = window.innerHeight;
          this.accumulated = 0;
          this.getRect();

          this.startScroll = this.targetR.top - this.winHeight > 0
            ? this.targetR.top - this.winHeight
            : 0;

          window.addEventListener('scroll', event => {
              requestAnimationFrame(() => {
                  if ($this.mobileDisable && window.innerWidth < this.mobilePx) return

                  if ($this.active) {
                    $this.update();
                  }
              });
          });
      }

      // HELPERS
      scrollY() {
          return window.scrollY || window.pageYOffset;
      }

      getTranslation() {
          const dist = this.scrollY() - this.startScroll;
          const translation = (dist * this.speed) + this.accumulated;
          return translation >= 0 ? translation : 0;
      }

      getRect() {
          this.targetR = this.getBoundingClientRect();
          return this.targetR;
      }

      inWindow() {
          this.getRect();

          const top = this.targetR.top;
          const bottom = this.targetR.bottom;

          return top < this.winHeight && bottom > 0;
      }

      update() {

          if (this._isHidden()) {
              return;
          }

          let translate = this.getTranslation();
          let percent = ((translate / this.speed)/this.winHeight) * 100;

          if (percent < 0) percent = 0;
          if (percent > 100) percent = 100;

          let style = {transform : '', filter: ''}, mod;

          this.transform.split(' ').forEach(prop => {

              mod = prop.split('*');
              prop = mod[0];
              mod = Number(mod[1] || 1);

              switch (prop) {
                  case 'translateX':
                  case 'translateY':
                      style.transform += ` ${prop}(${(translate * mod)}px)`;
                      break;

                  case 'rotate':
                  case 'rotateX':
                  case 'rotateY':
                      style.transform += ` ${prop}(${(translate * mod)}deg)`;
                      break;

                  case 'opacity':
                      style.opacity = (mod < 0 ?  (percent/100) : 1 - (percent/100)) * Math.abs(mod);
                      break;
              }
          });

          Object.assign(this.style, style);
      }

      _isHidden() {
          return (this.offsetTop === null)
      }
  });

  customElements.define('kiss-svg', class extends HTMLElement {

      static get observedAttributes() {
          return ['src'];
      }

      connectedCallback() {
          this.update();
      }

      attributeChangedCallback(attrName, oldVal, newVal) {
          if (attrName == 'src') this.update();
      }

      update() {

          let url = this.getAttribute('src');
          let width = this.getAttribute('width');
          let height = this.getAttribute('height');

          if (!url.trim()) {
              this.innerHTML = '';
              return;
          }

          if (width && height) {
              this.innerHTML = `<canvas width="${width}" height="${height}"></canvas>`;
          }

          fetch(url).then(response => response.text()).then(content => {

              content = content.trim();

              let attrs = {
                  width: this.getAttribute('width') || '',
                  height: this.getAttribute('height') || ''
              };

              if (!content.match(/^<svg/)) {
                  this.innerHTML = '';
                  return;
              }

              this.innerHTML = content;

              let svg = this.children[0];

              Object.keys(attrs).forEach(attr => attrs[attr] && svg.setAttribute(attr, attrs[attr]));
          }).catch(() => {
              this.innerHTML = '';
          });
      }

  });

  let tooltipContainer = null;

  on$1(document.documentElement, 'mouseenter', '[kiss-tooltip]', function(e) {

      e.preventDefault();

      if (!tooltipContainer) {

          tooltipContainer = document.createElement('kiss-tooltip');
          document.body.appendChild(tooltipContainer);

      }

      tooltipContainer.show(this.getAttribute('aria-label'), this, this.getAttribute('kiss-tooltip'));
  });


  customElements.define('kiss-tooltip', class extends HTMLElement {

      connectedCallback() {

      }

      show(text, ele, position = 'bottom') {

          this.innerText = text;
          this.setAttribute('show', 'true');

          if (ele) {
              let rect = ele.getBoundingClientRect(),
              left = null,
              top = null,
              offset = 5;

              switch (position) {
                  case "right":
                      top = (rect.top + rect.height / 2) - this.offsetHeight / 2;
                      left = rect.right + offset;
                      break;

                  case "bottom":
                      top = rect.bottom + offset;
                      left = rect.left;
                      break;
                  default:
                      left = rect.left;
                      break;
              }

              Object.assign(this.style, {
                  top: `${top}px`,
                  left: `${left}px`
              });

              this.$element = ele;

              if (!ele.__tooltiped) {

                  on$1(ele, 'mouseleave', e => {
                      tooltipContainer.hide();
                  });

                  ele.__tooltiped = true;
              }

          }
      }

      hide() {
          this.setAttribute('show', 'false');
      }

      isActive() {
          return this.getAttribute('show') == 'true';
      }
  });

  HTMLElement.prototype.on = function(event, selector, handler) {
      return on$1(this, event, selector, handler)
  };

  HTMLElement.prototype.onMutation = function(cb) {
      return onMutation(cb, this)
  };

  /**
   * JSONStorage - a simple storage helper inspired by the redis api.
   *
   * @author     Artur Heinze
   * @copyright  (c) since 2012 Artur Heinze
   * @license    MIT - http://opensource.org/licenses/MIT
   * @url        https://github.com/aheinze/JSONStorage
   */
  (function (global) {

      function Store(name, adapter) {

          var $this = this;

          this.name = name;
          this.adapter = adapter;
          this.data = adapter.load(name);
          this.data.__ex = this.data.__ex || {}; // expires data container

          // cleanup expires data
          (function () {

              var time = (new Date()).getTime();

              for (var key in $this.data.__ex) {
                  if ($this.data.__ex[key] < time) {
                      delete $this.data[key];
                      delete $this.data.__ex[key];
                  }
              }

          })();
      }

      Store.prototype.store = function () {
          try {
              this.adapter.store(this.name, this.data);
          } catch (e) { }
      };

      Store.prototype.toString = function () {
          return JSON.stringify(this.data);
      };

      Store.prototype.flushdb = function () {

          var $this = this;

          this.data = {};
          this.data.__ex = {};

          setTimeout(function () {
              $this.store();
          }, 0); // async saving!?

          return true;
      };

      Store.prototype.get = function (key, def) {

          if (this.data.__ex[key] && this.data.__ex[key] < (new Date()).getTime()) {
              delete this.data[key];
              delete this.data.__ex[key];
          }

          return this.data[key] !== undefined ? this.data[key] : def;
      };

      Store.prototype.set = function (key, value) {
          this.data[key] = value;
          this.store();
      };

      Store.prototype.setex = function (key, seconds, value) {
          this.set(key, value);
          this.expire(key, seconds);
      };

      Store.prototype.expire = function (key, seconds) {
          if (this.data[key]) this.data.__ex[key] = (new Date()).getTime() + (seconds * 1000);
      };

      Store.prototype.exists = function (key) {
          return this.get(key, "___no___") !== "___no___";
      };

      Store.prototype.del = function () {

          var keys = arguments,
              key = null,
              removed = 0;

          for (var i = 0; i < keys.length; i++) {

              key = keys[i];

              if (this.exists(key)) {
                  delete this.data[key];

                  if (this.data.__ex[key]) {
                      delete this.data.__ex[key];
                  }

                  removed++;
              }
          }

          this.store();

          return removed;
      };

      Store.prototype.type = function (key) {

          key = this.get(key);

          if (typeof (key) === 'object') {
              return JSON.stringify(key)[0] === "[" ? "list" : "set";
          }

          return typeof (key);
      };

      Store.prototype.append = function (key, value) {

          value = String(value);

          var current = String(this.get(key, "")),
              newone = current + value;

          this.set(key, newone);

          return newone.length;
      };

      Store.prototype.incr = function (key, by) {

          by = by || 1;

          var current = Number(this.get(key, 0)),
              newone = current + by;

          this.set(key, newone);

          return newone;
      };

      Store.prototype.decr = function (key, by) {
          by = by || 1;
          return this.incr(key, (by * -1));
      };

      /* List methods */

      Store.prototype.llen = function (key) {
          return this.get(key, []).length;
      };

      Store.prototype.lpush = function (key, value) {
          var list = this.get(key, []),
              ret = list.unshift(value);

          this.set(key, list);
          return ret;
      };

      Store.prototype.rpush = function (key, value) {
          var list = this.get(key, []),
              ret = list.push(value);

          this.set(key, list);
          return ret;
      };

      Store.prototype.lset = function (key, index, value) {
          var list = this.get(key, []);

          if (index < 0) {
              index = list.length - Math.abs(index);
          }

          if (list[index]) {
              list[index] = value;
              this.set(key, list);
              return true;
          }

          return false;
      };

      Store.prototype.lindex = function (key, index) {
          var list = this.get(key, []);

          if (index < 0) {
              index = list.length - Math.abs(index);
          }

          return list[index] ? list[index] : null;
      };

      /* Hash methods */

      Store.prototype.hset = function (key, field, value) {
          var set = this.get(key, {});

          set[field] = value;
          this.set(key, set);
      };

      Store.prototype.hget = function (key, field, def) {
          var set = this.get(key, {});

          return set[field] !== undefined ? set[field] : def;
      };

      Store.prototype.hgetall = function (key) {
          return this.get(key, {});
      };

      Store.prototype.hexists = function (key, field) {
          var set = this.get(key, {});

          return (set[field] !== undefined);
      };

      Store.prototype.hkeys = function (key) {
          var set = this.get(key, {}),
              keys = [],
              name = null;

          for (name in set) {
              if (set.hasOwnProperty(name)) {
                  keys.push(name);
              }
          }

          return keys;
      };

      Store.prototype.hvals = function (key) {
          var set = this.get(key, {}),
              vals = [],
              name = null;

          for (name in set) {
              if (set.hasOwnProperty(name)) {
                  vals.push(keys[name]);
              }
          }

          return vals;
      };

      Store.prototype.hlen = function (key) {
          return this.hkeys(key).length;
      };

      Store.prototype.hdel = function (key) {

          if (!this.exists(key)) return 0;

          var set = this.get(key, {}),
              field = null,
              removed = 0;

          for (var i = 1; i < arguments.length; i++) {

              field = arguments[i];

              if (set[field] !== undefined) {
                  delete set[field];
                  removed++;
              }
          }

          this.set(key, set);

          return removed;
      };

      Store.prototype.hincrby = function (key, field, by) {
          by = by || 1;
          var current = Number(this.hget(key, field, 0)),
              newone = current + by;

          this.hset(key, field, newone);

          return newone;
      };

      Store.prototype.hmget = function (key) {
          var set = this.get(key, {}),
              field = null,
              values = [];

          for (var i = 1; i < arguments.length; i++) {
              field = arguments[i];
              values.push(set[field] !== undefined ? set[field] : null);
          }

          return values;
      };

      Store.prototype.hmset = function (key) {
          var set = this.get(key, {}),
              field = null,
              value = null;

          for (var i = 1; i < arguments.length; i++) {
              field = arguments[i];
              value = arguments[(i + 1)] ? arguments[(i + 1)] : null;
              set[field] = value;
              i = i + 1;
          }

          this.set(key, set);
      };

      var JSONStorage = {

          select: function (name, adapter) {
              return (new Store(name, typeof (adapter) == 'object' ? adapter : (this.adapters[adapter] || this.adapters['memory'])));
          },

          adapters: {

              memory: (function () {
                  var dbs = {};

                  return {
                      load: function (name) {
                          return dbs[name] || {};
                      },
                      store: function (name, data) {
                          dbs[name] = data;
                      }
                  }
              })(),

              local: {
                  load: function (name) {
                      return global.localStorage["jsonstorage." + name] ? JSON.parse(global.localStorage["jsonstorage." + name]) : {};
                  },
                  store: function (name, data) {
                      global.localStorage["jsonstorage." + name] = JSON.stringify(data);
                  }
              },

              session: {
                  load: function (name) {
                      return global.sessionStorage["jsonstorage." + name] ? JSON.parse(global.sessionStorage["jsonstorage." + name]) : {};
                  },
                  store: function (name, data) {
                      global.sessionStorage["jsonstorage." + name] = JSON.stringify(data);
                  }
              }
          }
      };

      // AMD support
      if (typeof define === 'function' && define.amd) {
          define(function () {
              return JSONStorage;
          });
          // CommonJS and Node.js module support.
      } else if (typeof exports !== 'undefined') {
          // Support Node.js specific `module.exports` (which can be a function)
          if (typeof module != 'undefined' && module.exports) {
              exports = module.exports = JSONStorage;
          }
          // But always support CommonJS module 1.1.1 spec (`exports` cannot be a function)
          exports.JSONStorage = JSONStorage;
      } else {
          global.JSONStorage = JSONStorage;
      }

  })(typeof window === 'undefined' ? {} : window);

  /**
   * Translation tool
   */
  (function(global){

          function extend(destination, source) {

              if (!destination || !source) return destination;

              for (var field in source) {
                  if (destination[field] === source[field]) continue;
                  destination[field] = source[field];
              }

              return destination;
          }


          var i18n = {

                  __data : {},

                  register: function(key, data){

                      switch(arguments.length) {
                          case 1:
                              extend(this.__data, key);
                              break;
                          case 2:
                              this.__data[key] = data;
                              break;
                      }
                  },
                  get: function(key){

                      var args = arguments.length ==1 ? [] : Array.prototype.slice.call(arguments, 1);

                      if (!this.__data[key]) {
                          return this.printf(key, args);
                      }

                      return this.printf(String(this.__data[key]), args);
                  },

                  key: function(key) {
                    return this.__data[key] ? this.__data[key] : null;
                  },

                  printf: function() {
                      // From: http://phpjs.org/functions
                        // +   original by: Ash Searle (http://hexmen.com/blog/)
                        // + namespaced by: Michael White (http://getsprink.com)
                        // +    tweaked by: Jack
                        // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
                        // +      input by: Paulo Freitas
                        // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
                        // +      input by: Brett Zamir (http://brett-zamir.me)
                        // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
                        // +   improved by: Dj
                        // +   improved by: Allidylls
                        // *     example 1: sprintf("%01.2f", 123.1);
                        // *     returns 1: 123.10
                        // *     example 2: sprintf("[%10s]", 'monkey');
                        // *     returns 2: '[    monkey]'
                        // *     example 3: sprintf("[%'#10s]", 'monkey');
                        // *     returns 3: '[####monkey]'
                        // *     example 4: sprintf("%d", 123456789012345);
                        // *     returns 4: '123456789012345'
                        var regex = /%%|%(\d+\$)?([-+\'#0 ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuideEfFgG])/g;
                        var a = arguments,
                          i = 0,
                          format = a[i++];

                        // pad()
                        var pad = function (str, len, chr, leftJustify) {
                          if (!chr) {
                            chr = ' ';
                          }
                          var padding = (str.length >= len) ? '' : Array(1 + len - str.length >>> 0).join(chr);
                          return leftJustify ? str + padding : padding + str;
                        };

                        // justify()
                        var justify = function (value, prefix, leftJustify, minWidth, zeroPad, customPadChar) {
                          var diff = minWidth - value.length;
                          if (diff > 0) {
                            if (leftJustify || !zeroPad) {
                              value = pad(value, minWidth, customPadChar, leftJustify);
                            } else {
                              value = value.slice(0, prefix.length) + pad('', diff, '0', true) + value.slice(prefix.length);
                            }
                          }
                          return value;
                        };

                        // formatBaseX()
                        var formatBaseX = function (value, base, prefix, leftJustify, minWidth, precision, zeroPad) {
                          // Note: casts negative numbers to positive ones
                          var number = value >>> 0;
                          prefix = prefix && number && {
                            '2': '0b',
                            '8': '0',
                            '16': '0x'
                          }[base] || '';
                          value = prefix + pad(number.toString(base), precision || 0, '0', false);
                          return justify(value, prefix, leftJustify, minWidth, zeroPad);
                        };

                        // formatString()
                        var formatString = function (value, leftJustify, minWidth, precision, zeroPad, customPadChar) {
                          if (precision != null) {
                            value = value.slice(0, precision);
                          }
                          return justify(value, '', leftJustify, minWidth, zeroPad, customPadChar);
                        };

                        // doFormat()
                        var doFormat = function (substring, valueIndex, flags, minWidth, _, precision, type) {
                          var number;
                          var prefix;
                          var method;
                          var textTransform;
                          var value;

                          if (substring === '%%') {
                            return '%';
                          }

                          // parse flags
                          var leftJustify = false,
                            positivePrefix = '',
                            zeroPad = false,
                            prefixBaseX = false,
                            customPadChar = ' ';
                          var flagsl = flags.length;
                          for (var j = 0; flags && j < flagsl; j++) {
                            switch (flags.charAt(j)) {
                            case ' ':
                              positivePrefix = ' ';
                              break;
                            case '+':
                              positivePrefix = '+';
                              break;
                            case '-':
                              leftJustify = true;
                              break;
                            case "'":
                              customPadChar = flags.charAt(j + 1);
                              break;
                            case '0':
                              zeroPad = true;
                              break;
                            case '#':
                              prefixBaseX = true;
                              break;
                            }
                          }

                          // parameters may be null, undefined, empty-string or real valued
                          // we want to ignore null, undefined and empty-string values
                          if (!minWidth) {
                            minWidth = 0;
                          } else if (minWidth === '*') {
                            minWidth = +a[i++];
                          } else if (minWidth.charAt(0) == '*') {
                            minWidth = +a[minWidth.slice(1, -1)];
                          } else {
                            minWidth = +minWidth;
                          }

                          // Note: undocumented perl feature:
                          if (minWidth < 0) {
                            minWidth = -minWidth;
                            leftJustify = true;
                          }

                          if (!isFinite(minWidth)) {
                            throw new Error('sprintf: (minimum-)width must be finite');
                          }

                          if (!precision) {
                            precision = 'fFeE'.indexOf(type) > -1 ? 6 : (type === 'd') ? 0 : undefined;
                          } else if (precision === '*') {
                            precision = +a[i++];
                          } else if (precision.charAt(0) == '*') {
                            precision = +a[precision.slice(1, -1)];
                          } else {
                            precision = +precision;
                          }

                          // grab value using valueIndex if required?
                          value = valueIndex ? a[valueIndex.slice(0, -1)] : a[i++];

                          switch (type) {
                          case 's':
                            return formatString(String(value), leftJustify, minWidth, precision, zeroPad, customPadChar);
                          case 'c':
                            return formatString(String.fromCharCode(+value), leftJustify, minWidth, precision, zeroPad);
                          case 'b':
                            return formatBaseX(value, 2, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
                          case 'o':
                            return formatBaseX(value, 8, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
                          case 'x':
                            return formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
                          case 'X':
                            return formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad).toUpperCase();
                          case 'u':
                            return formatBaseX(value, 10, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
                          case 'i':
                          case 'd':
                            number = +value || 0;
                            number = Math.round(number - number % 1); // Plain Math.round doesn't just truncate
                            prefix = number < 0 ? '-' : positivePrefix;
                            value = prefix + pad(String(Math.abs(number)), precision, '0', false);
                            return justify(value, prefix, leftJustify, minWidth, zeroPad);
                          case 'e':
                          case 'E':
                          case 'f': // Should handle locales (as per setlocale)
                          case 'F':
                          case 'g':
                          case 'G':
                            number = +value;
                            prefix = number < 0 ? '-' : positivePrefix;
                            method = ['toExponential', 'toFixed', 'toPrecision']['efg'.indexOf(type.toLowerCase())];
                            textTransform = ['toString', 'toUpperCase']['eEfFgG'.indexOf(type) % 2];
                            value = prefix + Math.abs(number)[method](precision);
                            return justify(value, prefix, leftJustify, minWidth, zeroPad)[textTransform]();
                          default:
                            return substring;
                          }
                        };

                        return format.replace(regex, doFormat);
                  }

          };

          // AMD support
          if (typeof define === 'function' && define.amd) {
              define(function () { return i18n; });

          // CommonJS and Node.js module support.
          } else if (typeof exports !== 'undefined') {
              // Support Node.js specific `module.exports` (which can be a function)
              if (typeof module != 'undefined' && module.exports) {
               exports = module.exports = i18n;
              }
              // But always support CommonJS module 1.1.1 spec (`exports` cannot be a function)
              exports.i18n = i18n;
          } else {
              // browser client
              window.i18n = i18n;
          }

  })();

  /*! @license DOMPurify 2.3.3 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.3.3/LICENSE */
  !function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).DOMPurify=t();}(undefined,(function(){var e=Object.hasOwnProperty,t=Object.setPrototypeOf,n=Object.isFrozen,r=Object.getPrototypeOf,o=Object.getOwnPropertyDescriptor,i=Object.freeze,a=Object.seal,l=Object.create,c="undefined"!=typeof Reflect&&Reflect,s=c.apply,u=c.construct;s||(s=function(e,t,n){return e.apply(t,n)}),i||(i=function(e){return e}),a||(a=function(e){return e}),u||(u=function(e,t){return new(Function.prototype.bind.apply(e,[null].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(t))))});var m,f=x(Array.prototype.forEach),d=x(Array.prototype.pop),p=x(Array.prototype.push),h=x(String.prototype.toLowerCase),g=x(String.prototype.match),y=x(String.prototype.replace),v=x(String.prototype.indexOf),b=x(String.prototype.trim),T=x(RegExp.prototype.test),A=(m=TypeError,function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return u(m,t)});function x(e){return function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return s(e,t,r)}}function S(e,r){t&&t(e,null);for(var o=r.length;o--;){var i=r[o];if("string"==typeof i){var a=h(i);a!==i&&(n(r)||(r[o]=a),i=a);}e[i]=!0;}return e}function w(t){var n=l(null),r=void 0;for(r in t)s(e,t,[r])&&(n[r]=t[r]);return n}function E(e,t){for(;null!==e;){var n=o(e,t);if(n){if(n.get)return x(n.get);if("function"==typeof n.value)return x(n.value)}e=r(e);}return function(e){return console.warn("fallback value for",e),null}}var R=i(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),_=i(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),N=i(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),D=i(["animate","color-profile","cursor","discard","fedropshadow","feimage","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),k=i(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),O=i(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),M=i(["#text"]),L=i(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),F=i(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),I=i(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),C=i(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),z=a(/\{\{[\s\S]*|[\s\S]*\}\}/gm),H=a(/<%[\s\S]*|[\s\S]*%>/gm),U=a(/^data-[\-\w.\u00B7-\uFFFF]/),P=a(/^aria-[\-\w]+$/),j=a(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),B=a(/^(?:\w+script|data):/i),W=a(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function q(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var Y=function(){return "undefined"==typeof window?null:window},K=function(e,t){if("object"!==(void 0===e?"undefined":G(e))||"function"!=typeof e.createPolicy)return null;var n=null,r="data-tt-policy-suffix";t.currentScript&&t.currentScript.hasAttribute(r)&&(n=t.currentScript.getAttribute(r));var o="dompurify"+(n?"#"+n:"");try{return e.createPolicy(o,{createHTML:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+o+" could not be created."),null}};return function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y(),n=function(t){return e(t)};if(n.version="2.3.3",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var r=t.document,o=t.document,a=t.DocumentFragment,l=t.HTMLTemplateElement,c=t.Node,s=t.Element,u=t.NodeFilter,m=t.NamedNodeMap,x=void 0===m?t.NamedNodeMap||t.MozNamedAttrMap:m,V=t.Text,X=t.Comment,$=t.DOMParser,Z=t.trustedTypes,J=s.prototype,Q=E(J,"cloneNode"),ee=E(J,"nextSibling"),te=E(J,"childNodes"),ne=E(J,"parentNode");if("function"==typeof l){var re=o.createElement("template");re.content&&re.content.ownerDocument&&(o=re.content.ownerDocument);}var oe=K(Z,r),ie=oe&&ze?oe.createHTML(""):"",ae=o,le=ae.implementation,ce=ae.createNodeIterator,se=ae.createDocumentFragment,ue=ae.getElementsByTagName,me=r.importNode,fe={};try{fe=w(o).documentMode?o.documentMode:{};}catch(e){}var de={};n.isSupported="function"==typeof ne&&le&&void 0!==le.createHTMLDocument&&9!==fe;var pe=z,he=H,ge=U,ye=P,ve=B,be=W,Te=j,Ae=null,xe=S({},[].concat(q(R),q(_),q(N),q(k),q(M))),Se=null,we=S({},[].concat(q(L),q(F),q(I),q(C))),Ee=null,Re=null,_e=!0,Ne=!0,De=!1,ke=!1,Oe=!1,Me=!1,Le=!1,Fe=!1,Ie=!1,Ce=!0,ze=!1,He=!0,Ue=!0,Pe=!1,je={},Be=null,We=S({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Ge=null,qe=S({},["audio","video","img","source","image","track"]),Ye=null,Ke=S({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Ve="http://www.w3.org/1998/Math/MathML",Xe="http://www.w3.org/2000/svg",$e="http://www.w3.org/1999/xhtml",Ze=$e,Je=!1,Qe=void 0,et=["application/xhtml+xml","text/html"],tt="text/html",nt=void 0,rt=null,ot=o.createElement("form"),it=function(e){rt&&rt===e||(e&&"object"===(void 0===e?"undefined":G(e))||(e={}),e=w(e),Ae="ALLOWED_TAGS"in e?S({},e.ALLOWED_TAGS):xe,Se="ALLOWED_ATTR"in e?S({},e.ALLOWED_ATTR):we,Ye="ADD_URI_SAFE_ATTR"in e?S(w(Ke),e.ADD_URI_SAFE_ATTR):Ke,Ge="ADD_DATA_URI_TAGS"in e?S(w(qe),e.ADD_DATA_URI_TAGS):qe,Be="FORBID_CONTENTS"in e?S({},e.FORBID_CONTENTS):We,Ee="FORBID_TAGS"in e?S({},e.FORBID_TAGS):{},Re="FORBID_ATTR"in e?S({},e.FORBID_ATTR):{},je="USE_PROFILES"in e&&e.USE_PROFILES,_e=!1!==e.ALLOW_ARIA_ATTR,Ne=!1!==e.ALLOW_DATA_ATTR,De=e.ALLOW_UNKNOWN_PROTOCOLS||!1,ke=e.SAFE_FOR_TEMPLATES||!1,Oe=e.WHOLE_DOCUMENT||!1,Fe=e.RETURN_DOM||!1,Ie=e.RETURN_DOM_FRAGMENT||!1,Ce=!1!==e.RETURN_DOM_IMPORT,ze=e.RETURN_TRUSTED_TYPE||!1,Le=e.FORCE_BODY||!1,He=!1!==e.SANITIZE_DOM,Ue=!1!==e.KEEP_CONTENT,Pe=e.IN_PLACE||!1,Te=e.ALLOWED_URI_REGEXP||Te,Ze=e.NAMESPACE||$e,Qe=Qe=-1===et.indexOf(e.PARSER_MEDIA_TYPE)?tt:e.PARSER_MEDIA_TYPE,nt="application/xhtml+xml"===Qe?function(e){return e}:h,ke&&(Ne=!1),Ie&&(Fe=!0),je&&(Ae=S({},[].concat(q(M))),Se=[],!0===je.html&&(S(Ae,R),S(Se,L)),!0===je.svg&&(S(Ae,_),S(Se,F),S(Se,C)),!0===je.svgFilters&&(S(Ae,N),S(Se,F),S(Se,C)),!0===je.mathMl&&(S(Ae,k),S(Se,I),S(Se,C))),e.ADD_TAGS&&(Ae===xe&&(Ae=w(Ae)),S(Ae,e.ADD_TAGS)),e.ADD_ATTR&&(Se===we&&(Se=w(Se)),S(Se,e.ADD_ATTR)),e.ADD_URI_SAFE_ATTR&&S(Ye,e.ADD_URI_SAFE_ATTR),e.FORBID_CONTENTS&&(Be===We&&(Be=w(Be)),S(Be,e.FORBID_CONTENTS)),Ue&&(Ae["#text"]=!0),Oe&&S(Ae,["html","head","body"]),Ae.table&&(S(Ae,["tbody"]),delete Ee.tbody),i&&i(e),rt=e);},at=S({},["mi","mo","mn","ms","mtext"]),lt=S({},["foreignobject","desc","title","annotation-xml"]),ct=S({},_);S(ct,N),S(ct,D);var st=S({},k);S(st,O);var ut=function(e){var t=ne(e);t&&t.tagName||(t={namespaceURI:$e,tagName:"template"});var n=h(e.tagName),r=h(t.tagName);if(e.namespaceURI===Xe)return t.namespaceURI===$e?"svg"===n:t.namespaceURI===Ve?"svg"===n&&("annotation-xml"===r||at[r]):Boolean(ct[n]);if(e.namespaceURI===Ve)return t.namespaceURI===$e?"math"===n:t.namespaceURI===Xe?"math"===n&&lt[r]:Boolean(st[n]);if(e.namespaceURI===$e){if(t.namespaceURI===Xe&&!lt[r])return !1;if(t.namespaceURI===Ve&&!at[r])return !1;var o=S({},["title","style","font","a","script"]);return !st[n]&&(o[n]||!ct[n])}return !1},mt=function(e){p(n.removed,{element:e});try{e.parentNode.removeChild(e);}catch(t){try{e.outerHTML=ie;}catch(t){e.remove();}}},ft=function(e,t){try{p(n.removed,{attribute:t.getAttributeNode(e),from:t});}catch(e){p(n.removed,{attribute:null,from:t});}if(t.removeAttribute(e),"is"===e&&!Se[e])if(Fe||Ie)try{mt(t);}catch(e){}else try{t.setAttribute(e,"");}catch(e){}},dt=function(e){var t=void 0,n=void 0;if(Le)e="<remove></remove>"+e;else {var r=g(e,/^[\r\n\t ]+/);n=r&&r[0];}"application/xhtml+xml"===Qe&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var i=oe?oe.createHTML(e):e;if(Ze===$e)try{t=(new $).parseFromString(i,Qe);}catch(e){}if(!t||!t.documentElement){t=le.createDocument(Ze,"template",null);try{t.documentElement.innerHTML=Je?"":i;}catch(e){}}var a=t.body||t.documentElement;return e&&n&&a.insertBefore(o.createTextNode(n),a.childNodes[0]||null),Ze===$e?ue.call(t,Oe?"html":"body")[0]:Oe?t.documentElement:a},pt=function(e){return ce.call(e.ownerDocument||e,e,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT,null,!1)},ht=function(e){return !(e instanceof V||e instanceof X)&&!("string"==typeof e.nodeName&&"string"==typeof e.textContent&&"function"==typeof e.removeChild&&e.attributes instanceof x&&"function"==typeof e.removeAttribute&&"function"==typeof e.setAttribute&&"string"==typeof e.namespaceURI&&"function"==typeof e.insertBefore)},gt=function(e){return "object"===(void 0===c?"undefined":G(c))?e instanceof c:e&&"object"===(void 0===e?"undefined":G(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},yt=function(e,t,r){de[e]&&f(de[e],(function(e){e.call(n,t,r,rt);}));},vt=function(e){var t=void 0;if(yt("beforeSanitizeElements",e,null),ht(e))return mt(e),!0;if(g(e.nodeName,/[\u0080-\uFFFF]/))return mt(e),!0;var r=nt(e.nodeName);if(yt("uponSanitizeElement",e,{tagName:r,allowedTags:Ae}),!gt(e.firstElementChild)&&(!gt(e.content)||!gt(e.content.firstElementChild))&&T(/<[/\w]/g,e.innerHTML)&&T(/<[/\w]/g,e.textContent))return mt(e),!0;if("select"===r&&T(/<template/i,e.innerHTML))return mt(e),!0;if(!Ae[r]||Ee[r]){if(Ue&&!Be[r]){var o=ne(e)||e.parentNode,i=te(e)||e.childNodes;if(i&&o)for(var a=i.length-1;a>=0;--a)o.insertBefore(Q(i[a],!0),ee(e));}return mt(e),!0}return e instanceof s&&!ut(e)?(mt(e),!0):"noscript"!==r&&"noembed"!==r||!T(/<\/no(script|embed)/i,e.innerHTML)?(ke&&3===e.nodeType&&(t=e.textContent,t=y(t,pe," "),t=y(t,he," "),e.textContent!==t&&(p(n.removed,{element:e.cloneNode()}),e.textContent=t)),yt("afterSanitizeElements",e,null),!1):(mt(e),!0)},bt=function(e,t,n){if(He&&("id"===t||"name"===t)&&(n in o||n in ot))return !1;if(Ne&&!Re[t]&&T(ge,t));else if(_e&&T(ye,t));else {if(!Se[t]||Re[t])return !1;if(Ye[t]);else if(T(Te,y(n,be,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==v(n,"data:")||!Ge[e]){if(De&&!T(ve,y(n,be,"")));else if(n)return !1}else;}return !0},Tt=function(e){var t=void 0,r=void 0,o=void 0,i=void 0;yt("beforeSanitizeAttributes",e,null);var a=e.attributes;if(a){var l={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Se};for(i=a.length;i--;){var c=t=a[i],s=c.name,u=c.namespaceURI;if(r=b(t.value),o=nt(s),l.attrName=o,l.attrValue=r,l.keepAttr=!0,l.forceKeepAttr=void 0,yt("uponSanitizeAttribute",e,l),r=l.attrValue,!l.forceKeepAttr&&(ft(s,e),l.keepAttr))if(T(/\/>/i,r))ft(s,e);else {ke&&(r=y(r,pe," "),r=y(r,he," "));var m=nt(e.nodeName);if(bt(m,o,r))try{u?e.setAttributeNS(u,s,r):e.setAttribute(s,r),d(n.removed);}catch(e){}}}yt("afterSanitizeAttributes",e,null);}},At=function e(t){var n=void 0,r=pt(t);for(yt("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)yt("uponSanitizeShadowNode",n,null),vt(n)||(n.content instanceof a&&e(n.content),Tt(n));yt("afterSanitizeShadowDOM",t,null);};return n.sanitize=function(e,o){var i=void 0,l=void 0,s=void 0,u=void 0,m=void 0;if((Je=!e)&&(e="\x3c!--\x3e"),"string"!=typeof e&&!gt(e)){if("function"!=typeof e.toString)throw A("toString is not a function");if("string"!=typeof(e=e.toString()))throw A("dirty is not a string, aborting")}if(!n.isSupported){if("object"===G(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof e)return t.toStaticHTML(e);if(gt(e))return t.toStaticHTML(e.outerHTML)}return e}if(Me||it(o),n.removed=[],"string"==typeof e&&(Pe=!1),Pe);else if(e instanceof c)1===(l=(i=dt("\x3c!----\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===l.nodeName||"HTML"===l.nodeName?i=l:i.appendChild(l);else {if(!Fe&&!ke&&!Oe&&-1===e.indexOf("<"))return oe&&ze?oe.createHTML(e):e;if(!(i=dt(e)))return Fe?null:ie}i&&Le&&mt(i.firstChild);for(var f=pt(Pe?e:i);s=f.nextNode();)3===s.nodeType&&s===u||vt(s)||(s.content instanceof a&&At(s.content),Tt(s),u=s);if(u=null,Pe)return e;if(Fe){if(Ie)for(m=se.call(i.ownerDocument);i.firstChild;)m.appendChild(i.firstChild);else m=i;return Ce&&(m=me.call(r,m,!0)),m}var d=Oe?i.outerHTML:i.innerHTML;return ke&&(d=y(d,pe," "),d=y(d,he," ")),oe&&ze?oe.createHTML(d):d},n.setConfig=function(e){it(e),Me=!0;},n.clearConfig=function(){rt=null,Me=!1;},n.isValidAttribute=function(e,t,n){rt||it({});var r=nt(e),o=nt(t);return bt(r,o,n)},n.addHook=function(e,t){"function"==typeof t&&(de[e]=de[e]||[],p(de[e],t));},n.removeHook=function(e){de[e]&&d(de[e]);},n.removeHooks=function(e){de[e]&&(de[e]=[]);},n.removeAllHooks=function(){de={};},n}()}));

  let formatSize = function (bytes) {
      if (bytes == 0) { return "0.00 B"; }
      let e = Math.floor(Math.log(bytes) / Math.log(1024));
      return ((bytes / Math.pow(1024, e)).toFixed(2) + ' ' + ' KMGTP'.charAt(e) + 'B').replace('.00', '');
  };

  let formatNumber = function(num, round = 2) {
      return (new Intl.NumberFormat(navigator.language, { style: 'decimal', maximumFractionDigits: round})).format(num);
  };

  let formatDuration = function (time) {
      // Hours, minutes and seconds
      let hrs = ~~(time / 3600);
      let mins = ~~((time % 3600) / 60);
      let secs = ~~time % 60;

      // Output like "1:01" or "4:03:59" or "123:03:59"
      let ret = "";

      if (hrs > 0) {
          ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
      }

      ret += "" + mins + ":" + (secs < 10 ? "0" : "");
      ret += "" + secs;
      return ret;
  };

  let on = function (element, name, delegate, fn) {

      if (!fn) {
          element.addEventListener(name, arguments[2]);
      } else {
          element.addEventListener(name, function (e) {

              let target = e.target;

              while (target !== element) {

                  if (!target) {
                      break;
                  }

                  if (target.matches(delegate)) {
                      return fn.apply(target, arguments);
                  }

                  target = target.parentNode;
              }
          });
      }

      return element;
  };

  let toKebabCase = function(str) {
      return str.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase();
  };

  let copyText = function (text, cb) {
      var inp = document.createElement('textarea');
      document.body.appendChild(inp);
      inp.value = text;
      inp.select();
      try { document.execCommand('copy', false); } catch (e) { }
      inp.remove();
      if (cb) cb();
  };

  let interpolate = function (str, params) {
      const names = Object.keys(params);
      const vals = Object.values(params);
      return new Function(...names, `return \`${str}\`;`)(...vals);
  };

  let uuid = function() {
      return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
          (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
      );
  };

  let truncate = function(text, length, clamp = '...') {
      let content = text || '';
      return content.length > length ? content.slice(0, length) + clamp : content;
  };

  let stripTags = function(input, allowed) {

      // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
      allowed = (((allowed || '') + '').toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join('');
      const tags = /<\/?([a-z0-9]*)\b[^>]*>?/gi;
      const commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
      let after = input;

      after = (after.substring(after.length - 1) === '<') ? after.substring(0, after.length - 1) : after;

      while (true) {
          const before = after;
          after = before.replace(commentsAndPhpTags, '').replace(tags, ($0, $1) => {
              return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : ''
          });
          if (before === after) {
              return after
          }
      }
  };

  var utils = {
      copyText,
      formatSize,
      formatDuration,
      formatNumber,
      interpolate,
      on,
      toKebabCase,
      uuid,
      truncate,
      stripTags
  };

  var ui$1 = {

      notify: function (message, status, timeout) {

          if (timeout !== false && !timeout) {
              timeout = 2500;
          }

          new Noty({
              type: status || 'info',
              text: message,
              timeout: timeout,
              layout: 'topCenter',
              theme: 'app',
              progressBar: true
          }).show();
      },

      block: function (info='', context = 'ui-block') {

          document.body.insertAdjacentHTML('beforeend', `
            <app-loader-cover class="${context}" label="${info}"></app-loader-cover>
        `);
      },

      unblock: function (context = 'ui-block') {
          document.querySelectorAll(`.${context}`).forEach(node => node.parentNode.removeChild(node));
      },

      offcanvas: function (content, options) {

          let id = Math.random().toString(36).substring(2) + Date.now().toString(36),
              size = '';

          options = options || {};

          switch (options.size) {
              case 'large':
                  size = 'kiss-width-1-3@m kiss-width-1-4@xl';
                  break;
              case 'xlarge':
                  size = 'kiss-width-2-3@m kiss-width-1-2@xl';
                  break;
              case 'xxlarge':
                  size = 'kiss-width-3-4';
                  break;
              case 'screen':
                  size = 'kiss-width-1-1';
                  break;
          }

          document.body.insertAdjacentHTML('beforeend', `
            <kiss-offcanvas id="offcanvas-${id}" flip="${(options.flip && 'true') || ''}">
                <kiss-content class="${size}">
                    ${content}
                </kiss-content>
            </kiss-offcanvas>
        `);

          let offcanvas = document.getElementById(`offcanvas-${id}`);

          if (options.zIndex) {
              offcanvas.style.zIndex = options.zIndex;
          }

          offcanvas.__close = offcanvas.close;
          offcanvas.__show = offcanvas.show;

          offcanvas.close = function() {
              offcanvas.__close();
              setTimeout(() => {
                  offcanvas.parentNode.removeChild(offcanvas);
              }, 300);
          };

          offcanvas.show = function() {
              offcanvas.__show();

              setTimeout(() => {
                  let ele = offcanvas.querySelector('[autofocus]');

                  if (ele) {
                      ele.focus();
                  }
              }, 300);
          };

          return offcanvas;
      },


      dialog: function (content, options, dialogtype) {

          let id = Math.random().toString(36).substring(2) + Date.now().toString(36);

          document.body.insertAdjacentHTML('beforeend', `
            <kiss-dialog id="dialog-${id}" size="${(options && options.size) || ''}" type="${dialogtype}">
                <kiss-content class="animated fadeInUp faster">
                    ${content}
                </kiss-content>
            </kiss-dialog>
        `);

          let dialog = document.getElementById(`dialog-${id}`);

          if (options.zIndex) {
              dialog.style.zIndex = options.zIndex;
          }

          dialog.__close = dialog.close;
          dialog.__show = dialog.show;

          dialog.close = function() {
              dialog.__close();
              dialog.parentNode.removeChild(dialog);
          };

          dialog.show = function() {
              dialog.__show();

              setTimeout(() => {
                  let ele = dialog.querySelector('[autofocus]');

                  if (ele) {
                      ele.focus();
                  }
              }, 300);
          };

          return dialog;
      },

      alert: function (content, options) {

          let dialog = this.dialog(/*html*/`
            <div class="kiss-margin">
                ${content}
            </div>
            <div class="kiss-margin-top kiss-flex kiss-flex-middle">
                <button type="button" class="kiss-button kiss-button-primary kiss-flex-1" kiss-dialog-close>${App.i18n.get('Ok')}</button>
            </div>
        `, options, 'alert');

          dialog.show();
      },

      confirm: function (text, onconfirm, oncancel, options) {

          let dialog = this.dialog(/*html*/`
            <div class="kiss-margin-bottom">
                ${text}
            </div>
            <div class="kiss-margin-top kiss-flex kiss-flex-middle kiss-button-group">
                <button type="button" class="kiss-button-cancel kiss-button kiss-flex-1">${App.i18n.get('Cancel')}</button>
                <button type="button" class="kiss-button-confirm kiss-button kiss-button-primary kiss-flex-1">${App.i18n.get('Ok')}</button>
            </div>
        `, options, 'confirm');

          App.utils.on(dialog, 'click', '.kiss-button-confirm', () => {
              if (onconfirm) onconfirm();
              dialog.close();
          });

          App.utils.on(dialog, 'click', '.kiss-button-cancel', () => {
              if (oncancel) oncancel();
              dialog.close();
          });

          dialog.show();
      },

      prompt: function (text, value = '', clb, options) {
          let dialog = this.dialog(/*html*/`
            <form>
                <div class="kiss-margin kiss-text-bold">${text}</div>
                <div class="kiss-margin-bottom">
                    <input class="kiss-width-1-1 kiss-input" type="text" required>
                </div>
                <div class="kiss-margin-top kiss-flex kiss-flex-middle kiss-button-group">
                    <button type="button" class="kiss-button-cancel kiss-button kiss-flex-1">${App.i18n.get('Cancel')}</button>
                    <button type="submit" class="kiss-button-confirm kiss-button kiss-button-primary kiss-flex-1">${App.i18n.get('Ok')}</button>
                </div>
            </form>
        `, options, 'confirm');

          let input = dialog.querySelector('.kiss-input');

          input.value = value;

          App.utils.on(dialog, 'submit', (e) => {
              e.preventDefault();
              if (clb) clb(input.value);
              dialog.close();
          });

          App.utils.on(dialog, 'click', '.kiss-button-cancel', () => {
              dialog.close();
          });

          dialog.show();

          setTimeout(() => input.focus(), 300);
      }
  };

  var assets = {

      _ress: {},

      require: function (ress, onSuccess, onError) {

          onSuccess = onSuccess || function () { };
          onError = onError || function () { };

          var req = [],
              ress = Array.isArray(ress) ? ress : [ress];

          for (var i = 0, len = ress.length; i < len; i++) {

              if (!ress[i]) continue;

              if (!this._ress[ress[i]]) {

                  if (ress[i].match(/\.js$/i)) {
                      this._ress[ress[i]] = this.getScript(ress[i]);
                  } else if (ress[i].match(/\.(jpg|jpeg|gif|png)$/i)) {
                      this._ress[ress[i]] = this.getImage(ress[i]);
                  } else if (ress[i].match(/\.css$/i)) {
                      this._ress[ress[i]] = this.getCss(ress[i]);
                  } else {
                      continue;
                  }
              }

              req.push(this._ress[ress[i]]);
          }

          return Promise.all(req).then(onSuccess).catch(function (e) {
              onError.apply(self, [e]);
          });
      },

      getScript: function (url) {

          return new Promise(function (resolve, reject) {

              var script = document.createElement('script');

              script.async = true;

              script.onload = function () {
                  resolve(url);
              };

              script.onerror = function () {
                  reject(url);
              };

              script.src = (url.match(/^(\/\/|http)/) ? url : App.base(url)) + '?v=' + App.version;

              document.getElementsByTagName('head')[0].appendChild(script);

          });
      },

      getCss: function (url) {

          return new Promise(function (resolve, reject) {

              var link = document.createElement('link');
              link.type = 'text/css';
              link.rel = 'stylesheet';
              link.href = (url.match(/^(\/\/|http)/) ? url : App.base(url)) + '?v=' + App.version;

              document.getElementsByTagName('head')[0].appendChild(link);

              var img = document.createElement('img');
              img.onerror = function () {
                  resolve(url);
              };
              img.src = link.href + '?v=' + App.version;
          });
      },

      getImage: function (url) {

          return new Promise(function (resolve, reject) {

              var img = document.createElement('img');

              img.onload = function () { resolve(url); };
              img.onerror = function () { reject(url); };

              img.src = (url.match(/^(\/\/|http)/) ? url : App.base(url)) + '?v=' + App.version;
          });
      }
  };

  var ui = {

      offcanvas(component, data, callbacks, options) {

          let offcanvas;

          data = data || {};
          callbacks = callbacks || {};

          let def = {

              $viewSetup(app) {

                  app.mixin({
                      methods: {
                          $close() {

                              if (this.$el.closest) {
                                  this.$el.closest('kiss-offcanvas').close();
                              } else {
                                  this.$el.parentNode.closest('kiss-offcanvas').close();
                              }
                          },
                          $call(name, ...args) {
                              if (callbacks[name]) {
                                  callbacks[name](...args);
                              }
                          }
                      }
                  });
              },

              data() {
                  return  {
                      data
                  }
              },

              components: {
                  'vue-offcanvas-content': component
              }
          };

          offcanvas = App.ui.offcanvas(/*html*/`
            <div class="vue-offcanvas">
                <vue-offcanvas-content v-bind="data"></vue-offcanvas-content>
            </div>
        `, options || {});

          offcanvas.$view = offcanvas.querySelector('.vue-offcanvas');

          VueView.compile(offcanvas.$view, def);
          setTimeout(() => offcanvas.show());

          return offcanvas;
      },

      modal(url, data, callbacks, options) {

          data = data || {};
          callbacks = callbacks || {};

          let def = {

              $viewSetup(app) {

                  app.mixin({
                      methods: {
                          $close() {

                              if (this.$el.closest) {
                                  this.$el.closest('kiss-dialog').close();
                              } else {
                                  this.$el.parentNode.closest('kiss-dialog').close();
                              }
                          },
                          $call(name, ...args) {
                              if (callbacks[name]) {
                                  callbacks[name](...args);
                              }
                          }
                      }
                  });
              },

              data() {
                  return  {
                      data
                  }
              },

              components: {
                  'vue-dialog-content':  url
              }
          };

          let dialog = App.ui.dialog(/*html*/`
            <div class="vue-modal">
                <vue-dialog-content v-bind="data"></vue-dialog-content>
            </div>
        `, options || {});

          dialog.$view = dialog.querySelector('.vue-modal');

          VueView.compile(dialog.$view, def);
          dialog.show();

          return dialog;
      }
  };

  /**
   * Dynamic vue template (Vue 3.x)
   */
  (function() {

      let VueView = {

          ready: new Promise(function(resolve) {
              document.addEventListener('DOMContentLoaded', e => resolve());
          }),

          components: {},

          component(name, def) {
              this.components[name] = def;
          },

          compile(el, def) {
              this.ready.then(() => {
                  this._compile(el, def);
              });
          },

          _compile: async function(el, definition) {

              let script = definition ? null : el.querySelector('script');
              let template = definition ? null : el.querySelector('template');
              let def = definition || {}, app;

              if (script) {
                  let module = await import(`data:text/javascript;charset=utf-8,${encodeURIComponent(script.innerHTML)}`);
                  def = module.default;
                  script.parentNode.removeChild(script);
              }

              if (template) {
                  def.template = template.innerHTML;
                  template.parentNode.removeChild(template);
              }

              def = Object.assign({}, def || {});

              def.components = def.components || {};

              Object.keys(def.components).forEach(name => {

                  if (typeof(def.components[name]) == 'string') {
                      def.components[name] = (function(url) {
                          return Vue.defineAsyncComponent(() => App.utils.import(url));
                      })(def.components[name]);
                  }
              });

              app = Vue.createApp(def);

              Object.keys(VueView.components).forEach(name => {

                  if (typeof(VueView.components[name]) == 'string') {
                      app.component(name, Vue.defineAsyncComponent(() => App.utils.import(VueView.components[name])));
                  } else {
                      app.component(name, VueView.components[name]);
                  }
              });

              app.mixin({
                  data() {
                      return {
                          App: window.App
                      }
                  },

                  methods: {
                      t(key) {
                          return App.i18n.get(key);
                      },

                      $route(url) {
                          return App.route(url);
                      },

                      $base(url) {
                          return App.base(url);
                      },

                      $request(url, data) {
                          return App.request(url, data);
                      }
                  }
              });

              // view router
              if (def.$router && window.VueRouter) {

                  def.$router = Object.assign({
                      history: VueRouter.createWebHashHistory(),
                      routes: []
                  }, def.$router);

                  def.$router.routes.forEach(route => {

                      if (typeof(route.component) == 'string') {
                          route.component = (function(url) {
                              return Vue.defineAsyncComponent(() => App.utils.import(url));
                          })(route.component);
                      }
                  });

                  app.use(new VueRouter.createRouter(def.$router));
              }

              if (def.$viewSetup) {
                  def.$viewSetup(app);
              }

              app.mount(el);
              el.setAttribute('init', true);

              return app;
          }
      };

      class VueElement extends HTMLElement {
          connectedCallback() {
              VueView.compile(this);
          }
      }

      customElements.define('vue-view', VueElement);

      VueView.ui = ui;

      window.VueView = VueView;

  })();

  customElements.define('app-avatar', class extends HTMLElement {

      static get observedAttributes() {
          return ['name', 'size', 'color'];
      }

      constructor() {
          super();
      }

      connectedCallback() {
          setTimeout(() => this.draw(), 0);
      }

      attributeChangedCallback(name, oldValue, newValue) {
          this.draw();
      }

      disconnectedCallback() {

      }

      draw() {

          this.innerHTML = '<canvas></canvas>';

          let name = this.getAttribute('name') || '';
          let size = this.getAttribute('size') || 60;
          let color = this.getAttribute('color') || null;

          let canvas = this.querySelector('canvas');

          let colours = [
              "#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e", "#16a085", "#27ae60", "#2980b9", "#8e44ad", "#2c3e50",
              "#f1c40f", "#e67e22", "#e74c3c", "#ecf0f1", "#95a5a6", "#f39c12", "#d35400", "#c0392b", "#bdc3c7", "#7f8c8d"
          ],

              nameSplit = String(name).toUpperCase().split(' '),
              initials, charIndex, colourIndex, context, dataURI;


          if (nameSplit.length == 1) {
              initials = nameSplit[0] ? nameSplit[0].charAt(0) : '?';
          } else {
              initials = nameSplit[0].charAt(0) + nameSplit[1].charAt(0);
          }

          charIndex = (initials == '?' ? 72 : initials.charCodeAt(0)) - 64;
          colourIndex = charIndex % 20;
          canvas.width = size;
          canvas.height = size;
          context = canvas.getContext("2d");

          context.fillStyle = color ? color : colours[colourIndex - 1];
          context.fillRect(0, 0, canvas.width, canvas.height);
          context.font = Math.round(canvas.width / 2) + "px Arial";
          context.textAlign = "center";
          context.fillStyle = "#FFF";
          context.fillText(initials, size / 2, size / 1.5);

          dataURI = canvas.toDataURL();

          this.canvas = canvas;

          return dataURI;
      }
  });

  customElements.define('app-actionbar', class extends HTMLElement {

      constructor() {
          super();
      }

      connectedCallback() {

          let idle = setInterval(() => {

              if (this.offsetHeight) {
                  clearInterval(idle);
                  this.update();
              }
          }, 10);

          // just to be sure
          window.addEventListener("load", evt => {
              this.update();
          });
      }

      disconnectedCallback() {
          document.body.style.paddingBottom = '';
      }

      update() {

          if (this.getAttribute('space') !== 'false') {
              document.body.style.paddingBottom = `calc(2rem + ${this.offsetHeight}px)`;
          }
      }
  });

  const fn = e => {

      let element = e.target, closest = e.target.matches('app-fieldcontainer') ? e.target : null;

      while ((element = element.parentElement)) {
          if (element.matches('app-fieldcontainer')) {
              closest = element;
          }
      }

      let containers = document.querySelectorAll('app-fieldcontainer');

      containers.forEach(container => {

          if (container !== closest) {
              container.removeAttribute('active');
          }
      });
  };


  document.addEventListener('click', fn);
  document.addEventListener('focusin', fn);

  customElements.define('app-fieldcontainer', class extends HTMLElement {

      constructor() {
          super();
      }

      connectedCallback() {

          this.addEventListener('click', e => this.setAttribute('active','true'));
          this.addEventListener('focusin', e => this.setAttribute('active','true'));
      }

      disconnectedCallback() {

      }
  });

  customElements.define('app-frame', class extends HTMLElement {

      static get observedAttributes() {
          return ['src'];
      }

      constructor() {
          super();
      }

      connectedCallback() {

          this.innerHTML = '<iframe></iframe>';

          setTimeout(() => {

              this.iframe = this.querySelector('iframe');

              if (this.getAttribute('seamless') == 'true') {
                  this.iframe.style.height = '0px';
                  setInterval(() => this.resize(), 150);
              }

              this.update();

          }, 0);
      }

      disconnectedCallback() {
          this.observer.disconnect();
      }

      attributeChangedCallback(name, oldValue, newValue) {

          if (!this.iframe) {
              return;
          }

          this.update();
      }

      update() {
          this.iframe.src = this.getAttribute('src') || '';
      }

      resize() {

          if (!this.iframe.contentDocument.body) {
              return;
          }

          if (this._offsetHeight == this.iframe.contentDocument.body.offsetHeight) {
              return;
          }

          this._offsetHeight = this.iframe.contentDocument.body.offsetHeight;

          this.iframe.style.height = this._offsetHeight+'px';

      }
  });

  customElements.define('app-loader', class extends HTMLElement {

      static get observedAttributes() {
          return ['label', 'mode'];
      }

      constructor() {
          super();
      }

      connectedCallback() {
          this.render();
      }

      attributeChangedCallback(oldvalue, newvalue) {
          if (oldvalue != newvalue)this.render();
      }

      render() {

          let template;
          let mode = this.getAttribute('mode');

          switch (mode) {
              case 'dots':
                  template = '<div></div><div></div><div></div><div></div>';
                  break;
              default:

                  if (mode !== 'orbit') {
                      this.setAttribute('mode', 'orbit');
                  }

                  template = '<div><div></div><div></div><div></div></div>';
          }

          this.innerHTML = template;
      }
  });

  customElements.define('app-loader-cover', class extends HTMLElement {

      static get observedAttributes() {
          return ['label', 'mode'];
      }

      constructor() {
          super();
      }

      connectedCallback() {
          this.innerHTML = `
        <div>
            <app-loader></app-loader>
            <div class="app-loader-cover-label"></div>
        </div>
        `;

          this.labelElement = this.querySelector('.app-loader-cover-label');
          this.loaderElement = this.querySelector('app-loader');

          this.render();
      }

      attributeChangedCallback() {
          this.render();
      }

      render() {

          if (!this.labelElement) return;

          this.labelElement.innerText = this.getAttribute('label') || '';
          this.loaderElement.setAttribute('mode', this.getAttribute('mode'));
      }
  });

  customElements.define('app-scrollcontainer', class extends HTMLElement {

      static get observedAttributes() {
          return ['boundary'];
      }

      constructor() {
          super();
      }

      connectedCallback() {

          document.addEventListener('DOMContentLoaded', () => requestAnimationFrame(() => {
              setTimeout(() => this.expand());
          }));

          window.addEventListener('resize',  () => requestAnimationFrame(() => {
              setTimeout(() => this.expand());
          }));

          window.addEventListener('load',  () => requestAnimationFrame(() => {
              setTimeout(() => this.expand());
          }));
      }

      attributeChangedCallback(oldvalue, newvalue) {
          if (oldvalue != newvalue)this.expand();
      }

      expand() {

          this.style.maxHeight = '';

          let rect = this.getBoundingClientRect();
          let mode = this.getAttribute('mode');

          if (rect.top > window.innerHeight) {
              return;
          }

          let maxHeight = window.innerHeight - rect.top;

          switch (mode) {
              case 'boundary':

                  let boundary = this.getAttribute('boundary');

                  if (boundary) {
                      boundary = document.querySelector(boundary);

                      if (boundary) {
                          maxHeight = boundary.getBoundingClientRect().top - rect.top;
                      }
                  }

                  if (maxHeight > window.innerHeight) {
                      return;
                  }

                  break;
          }


          this.style.maxHeight = `${maxHeight}px`;
      }
  });

  customElements.define('app-tabs', class extends HTMLElement {

      static get observedAttributes() {
          return [];
      }

      constructor() {
          super();
      }

      connectedCallback() {

          if (this.getAttribute('static') == 'true') {
              return;
          }

          this.activeIndex = Number(this.getAttribute('index') || 0);

          this.nav = document.createElement("ul");

          this.nav.classList.add('app-tabs-nav');
          this.prepend(this.nav);

          this.render();

          this.addEventListener('click', e => {
              if (!e.target.classList.contains('app-tabs-nav-link')) return;
              this.setIndex(e.target.getAttribute('index'));
              e.preventDefault();
          });
      }

      attributeChangedCallback(oldvalue, newvalue) {
          if (oldvalue != newvalue) this.render();
      }

      setIndex(index) {

          this.activeIndex = Number(index);

          this.tabs.forEach((tab, idx) => {

              this.nav.children[idx].setAttribute('active', this.activeIndex == idx ? 'true' : 'false');
              tab.setAttribute('active', this.activeIndex == idx ? 'true' : 'false');
          });
      }

      render() {

          if (this.getAttribute('static') == 'true') {
              return;
          }

          this.tabs = [];

          this.nav.innerHTML = '';

          let item;

          for (let i = 0; i < this.children.length; i++) {

              if (this.children[i].tagName.toLowerCase() == 'tab') {

                  item = document.createElement("li");
                  item.innerHTML = `<a class="app-tabs-nav-link" index="${this.tabs.length}">${this.children[i].getAttribute('caption') || 'Tab'}</a>`;
                  this.nav.append(item);

                  this.tabs.push(this.children[i]);

                  this.children[i].setAttribute('active', 'false');
                  item.setAttribute('active', 'false');
              }
          }

          this.setIndex(this.activeIndex);
      }
  });

  // General
  VueView.component('vue-draggable', Vue.defineAsyncComponent(() => {
      return new Promise(resolve => {
          App.assets.require(['app:assets/vendor/Sortable.js']).then(() => {
              App.assets.require(['app:assets/vendor/vue/components/vue-draggable.js']).then(() => resolve(window.vuedraggable));
          });
      })
  }));

  // Fields
  VueView.component('field-boolean', 'app:assets/vue-components/field-boolean.js');
  VueView.component('field-code', 'app:assets/vue-components/field-code.js');
  VueView.component('field-color', 'app:assets/vue-components/field-color.js');
  VueView.component('field-date', 'app:assets/vue-components/field-date.js');
  VueView.component('field-datetime', 'app:assets/vue-components/field-datetime.js');
  VueView.component('field-nav', 'app:assets/vue-components/field-nav.js');
  VueView.component('field-number', 'app:assets/vue-components/field-number.js');
  VueView.component('field-object', 'app:assets/vue-components/field-object.js');
  VueView.component('field-select', 'app:assets/vue-components/field-select.js');
  VueView.component('field-set', 'app:assets/vue-components/field-set.js');
  VueView.component('field-text', 'app:assets/vue-components/field-text.js');
  VueView.component('field-time', 'app:assets/vue-components/field-time.js');
  VueView.component('field-wysiwyg', 'app:assets/vue-components/field-wysiwyg.js');

  let html = document.documentElement;
  let App$1 = {

      base_url: (html.getAttribute("data-base") || '').replace(/\/$/, ''),
      version: (html.getAttribute("data-version") || '0.0.1'),

      _events: {},
      _paths: {},

      base: function (url) {

          let path = url.match(/^(.*?)\:/);

          if (path && this._paths[path[1]]) {
              return url.replace(path[0], this._paths[path[1]]);
          }

          return this.base_url + url;
      },

      route: function (url) {
          return this.base_url + url;
      },

      reroute: function (url) {
          location.href = url.match(/^http/) ? url : this.route(url);
      },

      request: function (url, data, type) {

          url = this.route(url);
          type = type || 'json';

          return new Promise(function (fulfill, reject) {

              let xhr = new XMLHttpRequest();

              xhr.open('post', url, true);
              xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

              url += (url.indexOf('?') !== -1 ? '&' : '?') + 'nc=' + Math.random().toString(36).substr(2);

              if (data) {

                  if (typeof (data) === 'object' && data instanceof HTMLFormElement) {
                      data = new FormData(data);
                  } else if (typeof (data) === 'object' && data instanceof FormData) ; else if (typeof (data) === 'object') {

                      xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
                      data = JSON.stringify(data || {});
                  }
              }

              xhr.onloadend = function () {

                  let resdata = xhr.responseText;

                  if (type == 'json') {
                      try {
                          resdata = JSON.parse(xhr.responseText);
                      } catch (e) {
                          resdata = null;
                      }
                  }

                  if (this.status == 200) {
                      fulfill(resdata, xhr);
                  } else {
                      reject(resdata, xhr);
                  }
              };

              // send the collected data as JSON
              xhr.send(data);
          });
      },

      on: function (name, fn) {
          if (!this._events[name]) this._events[name] = [];
          this._events[name].push(fn);
      },

      off: function (name, fn) {
          if (!this._events[name]) return;

          if (!fn) {
              this._events[name] = [];
          } else {

              for (let i = 0; i < this._events[name].length; i++) {
                  if (this._events[name][i] === fn) {
                      this._events[name].splice(i, 1);
                      break;
                  }
              }
          }
      },

      trigger: function (name, params) {

          if (!this._events[name]) return;

          let event = { name, params };

          for (let i = 0; i < this._events[name].length; i++) {
              this._events[name][i].apply(App$1, [event]);
          }
      },

      deferred: function () {

          let resolve, fail;

          let d = new Promise(function (fullfill, reject) {
              resolve = fullfill;
              fail = reject;
          });

          d.resolve = function (data) {
              resolve(data);
          };

          d.reject = function (data) {
              fail(data);
          };

          return d;
      }
  };

  // general services
  App$1.session = window.JSONStorage ? window.JSONStorage.select("app", "session") : null;
  App$1.storage = window.JSONStorage ? window.JSONStorage.select("app", "local") : null;
  App$1.memory = window.JSONStorage ? window.JSONStorage.select("app", "memory") : null;
  App$1.i18n = window.i18n || null;
  App$1.assets = assets;
  App$1.ui = ui$1;
  App$1.utils = utils;

  // custom utils
  App$1.utils.import = function(uri) {
      return import(App$1.base(uri)+'?v='+App$1.version);
  };

  window.App = App$1;

}());
