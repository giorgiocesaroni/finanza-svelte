const td=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}};td();function _e(){}const nd=t=>t;function or(t,e){for(const n in e)t[n]=e[n];return t}function Qc(t){return t()}function da(){return Object.create(null)}function ut(t){t.forEach(Qc)}function oi(t){return typeof t=="function"}function Me(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function sd(t){return Object.keys(t).length===0}function xr(t,e,n,s){if(t){const i=Xc(t,e,n,s);return t[0](i)}}function Xc(t,e,n,s){return t[1]&&s?or(n.ctx.slice(),t[1](s(e))):n.ctx}function $r(t,e,n,s){if(t[2]&&s){const i=t[2](s(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const r=[],o=Math.max(e.dirty.length,i.length);for(let a=0;a<o;a+=1)r[a]=e.dirty[a]|i[a];return r}return e.dirty|i}return e.dirty}function Vr(t,e,n,s,i,r){if(i){const o=Xc(e,n,s,r);t.p(o,i)}}function Br(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function fa(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function xi(t){return t&&oi(t.destroy)?t.destroy:_e}const Yc=typeof window<"u";let id=Yc?()=>window.performance.now():()=>Date.now(),jr=Yc?t=>requestAnimationFrame(t):_e;const jt=new Set;function Jc(t){jt.forEach(e=>{e.c(t)||(jt.delete(e),e.f())}),jt.size!==0&&jr(Jc)}function rd(t){let e;return jt.size===0&&jr(Jc),{promise:new Promise(n=>{jt.add(e={c:t,f:n})}),abort(){jt.delete(e)}}}function _(t,e){t.appendChild(e)}function Zc(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function od(t){const e=C("style");return ad(Zc(t),e),e.sheet}function ad(t,e){_(t.head||t,e)}function z(t,e,n){t.insertBefore(e,n||null)}function x(t){t.parentNode.removeChild(t)}function qr(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function C(t){return document.createElement(t)}function ne(t){return document.createTextNode(t)}function B(){return ne(" ")}function eu(){return ne("")}function re(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function k(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function cd(t){return Array.from(t.childNodes)}function je(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let ms;function ud(){if(ms===void 0){ms=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{ms=!0}}return ms}function ld(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const s=C("iframe");s.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),s.setAttribute("aria-hidden","true"),s.tabIndex=-1;const i=ud();let r;return i?(s.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=re(window,"message",o=>{o.source===s.contentWindow&&e()})):(s.src="about:blank",s.onload=()=>{r=re(s.contentWindow,"resize",e)}),_(t,s),()=>{(i||r&&s.contentWindow)&&r(),x(s)}}function hd(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,s,e),i}const Us=new Map;let Fs=0;function dd(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function fd(t,e){const n={stylesheet:od(e),rules:{}};return Us.set(t,n),n}function pa(t,e,n,s,i,r,o,a=0){const c=16.666/s;let u=`{
`;for(let g=0;g<=1;g+=c){const b=e+(n-e)*r(g);u+=g*100+`%{${o(b,1-b)}}
`}const l=u+`100% {${o(n,1-n)}}
}`,h=`__svelte_${dd(l)}_${a}`,d=Zc(t),{stylesheet:f,rules:p}=Us.get(d)||fd(d,t);p[h]||(p[h]=!0,f.insertRule(`@keyframes ${h} ${l}`,f.cssRules.length));const v=t.style.animation||"";return t.style.animation=`${v?`${v}, `:""}${h} ${s}ms linear ${i}ms 1 both`,Fs+=1,h}function pd(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),i=n.length-s.length;i&&(t.style.animation=s.join(", "),Fs-=i,Fs||gd())}function gd(){jr(()=>{Fs||(Us.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),Us.clear())})}let Rn;function bn(t){Rn=t}function md(){if(!Rn)throw new Error("Function called outside component initialization");return Rn}function yd(t){md().$$.on_destroy.push(t)}function vd(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const _n=[],ga=[],Ss=[],ma=[],wd=Promise.resolve();let ar=!1;function _d(){ar||(ar=!0,wd.then(tu))}function Wt(t){Ss.push(t)}const $i=new Set;let ys=0;function tu(){const t=Rn;do{for(;ys<_n.length;){const e=_n[ys];ys++,bn(e),Ed(e.$$)}for(bn(null),_n.length=0,ys=0;ga.length;)ga.pop()();for(let e=0;e<Ss.length;e+=1){const n=Ss[e];$i.has(n)||($i.add(n),n())}Ss.length=0}while(_n.length);for(;ma.length;)ma.pop()();ar=!1,$i.clear(),bn(t)}function Ed(t){if(t.fragment!==null){t.update(),ut(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Wt)}}let vn;function Id(){return vn||(vn=Promise.resolve(),vn.then(()=>{vn=null})),vn}function Vi(t,e,n){t.dispatchEvent(hd(`${e?"intro":"outro"}${n}`))}const ks=new Set;let qe;function ai(){qe={r:0,c:[],p:qe}}function ci(){qe.r||ut(qe.c),qe=qe.p}function V(t,e){t&&t.i&&(ks.delete(t),t.i(e))}function K(t,e,n,s){if(t&&t.o){if(ks.has(t))return;ks.add(t),qe.c.push(()=>{ks.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const Td={duration:0};function ya(t,e,n,s){let i=e(t,n),r=s?0:1,o=null,a=null,c=null;function u(){c&&pd(t,c)}function l(d,f){const p=d.b-r;return f*=Math.abs(p),{a:r,b:d.b,d:p,duration:f,start:d.start,end:d.start+f,group:d.group}}function h(d){const{delay:f=0,duration:p=300,easing:v=nd,tick:g=_e,css:b}=i||Td,O={start:id()+f,b:d};d||(O.group=qe,qe.r+=1),o||a?a=O:(b&&(u(),c=pa(t,r,d,p,f,v,b)),d&&g(0,1),o=l(O,p),Wt(()=>Vi(t,d,"start")),rd(R=>{if(a&&R>a.start&&(o=l(a,p),a=null,Vi(t,o.b,"start"),b&&(u(),c=pa(t,r,o.b,o.duration,0,v,i.css))),o){if(R>=o.end)g(r=o.b,1-r),Vi(t,o.b,"end"),a||(o.b?u():--o.group.r||ut(o.group.c)),o=null;else if(R>=o.start){const Y=R-o.start;r=o.a+o.d*v(Y/o.duration),g(r,1-r)}}return!!(o||a)}))}return{run(d){oi(i)?Id().then(()=>{i=i(),h(d)}):h(d)},end(){u(),o=a=null}}}function Ue(t){t&&t.c()}function Re(t,e,n,s){const{fragment:i,on_mount:r,on_destroy:o,after_update:a}=t.$$;i&&i.m(e,n),s||Wt(()=>{const c=r.map(Qc).filter(oi);o?o.push(...c):ut(c),t.$$.on_mount=[]}),a.forEach(Wt)}function Oe(t,e){const n=t.$$;n.fragment!==null&&(ut(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function bd(t,e){t.$$.dirty[0]===-1&&(_n.push(t),_d(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function $e(t,e,n,s,i,r,o,a=[-1]){const c=Rn;bn(t);const u=t.$$={fragment:null,ctx:null,props:r,update:_e,not_equal:i,bound:da(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:da(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(u.root);let l=!1;if(u.ctx=n?n(t,e.props||{},(h,d,...f)=>{const p=f.length?f[0]:d;return u.ctx&&i(u.ctx[h],u.ctx[h]=p)&&(!u.skip_bound&&u.bound[h]&&u.bound[h](p),l&&bd(t,h)),d}):[],u.update(),l=!0,ut(u.before_update),u.fragment=s?s(u.ctx):!1,e.target){if(e.hydrate){const h=cd(e.target);u.fragment&&u.fragment.l(h),h.forEach(x)}else u.fragment&&u.fragment.c();e.intro&&V(t.$$.fragment),Re(t,e.target,e.anchor,e.customElement),tu()}bn(c)}class Ve{$destroy(){Oe(this,1),this.$destroy=_e}$on(e,n){const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!sd(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Sd=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},su={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,l=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(d=64)),s.push(n[l],n[h],n[d],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(nu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Sd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||u==null||h==null)throw Error();const d=r<<2|a>>4;if(s.push(d),u!==64){const f=a<<4&240|u>>2;if(s.push(f),h!==64){const p=u<<6&192|h;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},kd=function(t){const e=nu(t);return su.encodeByteArray(e,!0)},iu=function(t){return kd(t).replace(/\./g,"")},Cd=function(t){try{return su.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ru(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(se())}function ou(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function au(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Dd(){return se().indexOf("Electron/")>=0}function cu(){const t=se();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Nd(){return se().indexOf("MSAppHost/")>=0}function Rd(){return typeof indexedDB=="object"}function Od(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md="FirebaseError";class Rt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Md,Object.setPrototypeOf(this,Rt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gn.prototype.create)}}class Gn{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Ld(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Rt(i,a,s)}}function Ld(t,e){return t.replace(Pd,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Pd=/\{\$([^}]+)}/g;function Ud(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xs(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(va(r)&&va(o)){if(!xs(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function va(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Fd(t,e){const n=new xd(t,e);return n.subscribe.bind(n)}class xd{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");$d(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Bi),i.error===void 0&&(i.error=Bi),i.complete===void 0&&(i.complete=Bi);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $d(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Bi(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(t){return t&&t._delegate?t._delegate:t}class It{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ad;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jd(e))try{this.getOrInitializeService({instanceIdentifier:pt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=pt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=pt){return this.instances.has(e)}getOptions(e=pt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Bd(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=pt){return this.component?this.component.multipleInstances?e:pt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Bd(t){return t===pt?void 0:t}function jd(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Vd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var U;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(U||(U={}));const zd={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},Hd=U.INFO,Kd={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},Gd=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Kd[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zr{constructor(e){this.name=e,this._logLevel=Hd,this._logHandler=Gd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in U))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...e),this._logHandler(this,U.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...e),this._logHandler(this,U.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,U.INFO,...e),this._logHandler(this,U.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,U.WARN,...e),this._logHandler(this,U.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...e),this._logHandler(this,U.ERROR,...e)}}const Wd=(t,e)=>e.some(n=>t instanceof n);let wa,_a;function Qd(){return wa||(wa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Xd(){return _a||(_a=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const uu=new WeakMap,cr=new WeakMap,lu=new WeakMap,ji=new WeakMap,Hr=new WeakMap;function Yd(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(tt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&uu.set(n,t)}).catch(()=>{}),Hr.set(e,t),e}function Jd(t){if(cr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});cr.set(t,e)}let ur={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return cr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||lu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return tt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Zd(t){ur=t(ur)}function ef(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(qi(this),e,...n);return lu.set(s,e.sort?e.sort():[e]),tt(s)}:Xd().includes(t)?function(...e){return t.apply(qi(this),e),tt(uu.get(this))}:function(...e){return tt(t.apply(qi(this),e))}}function tf(t){return typeof t=="function"?ef(t):(t instanceof IDBTransaction&&Jd(t),Wd(t,Qd())?new Proxy(t,ur):t)}function tt(t){if(t instanceof IDBRequest)return Yd(t);if(ji.has(t))return ji.get(t);const e=tf(t);return e!==t&&(ji.set(t,e),Hr.set(e,t)),e}const qi=t=>Hr.get(t);function nf(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=tt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(tt(o.result),c.oldVersion,c.newVersion,tt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const sf=["get","getKey","getAll","getAllKeys","count"],rf=["put","add","delete","clear"],zi=new Map;function Ea(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(zi.get(e))return zi.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=rf.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||sf.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return zi.set(e,r),r}Zd(t=>({...t,get:(e,n,s)=>Ea(e,n)||t.get(e,n,s),has:(e,n)=>!!Ea(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(af(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function af(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const lr="@firebase/app",Ia="0.7.28";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr=new zr("@firebase/app"),cf="@firebase/app-compat",uf="@firebase/analytics-compat",lf="@firebase/analytics",hf="@firebase/app-check-compat",df="@firebase/app-check",ff="@firebase/auth",pf="@firebase/auth-compat",gf="@firebase/database",mf="@firebase/database-compat",yf="@firebase/functions",vf="@firebase/functions-compat",wf="@firebase/installations",_f="@firebase/installations-compat",Ef="@firebase/messaging",If="@firebase/messaging-compat",Tf="@firebase/performance",bf="@firebase/performance-compat",Sf="@firebase/remote-config",kf="@firebase/remote-config-compat",Cf="@firebase/storage",Af="@firebase/storage-compat",Df="@firebase/firestore",Nf="@firebase/firestore-compat",Rf="firebase",Of="9.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu="[DEFAULT]",Mf={[lr]:"fire-core",[cf]:"fire-core-compat",[lf]:"fire-analytics",[uf]:"fire-analytics-compat",[df]:"fire-app-check",[hf]:"fire-app-check-compat",[ff]:"fire-auth",[pf]:"fire-auth-compat",[gf]:"fire-rtdb",[mf]:"fire-rtdb-compat",[yf]:"fire-fn",[vf]:"fire-fn-compat",[wf]:"fire-iid",[_f]:"fire-iid-compat",[Ef]:"fire-fcm",[If]:"fire-fcm-compat",[Tf]:"fire-perf",[bf]:"fire-perf-compat",[Sf]:"fire-rc",[kf]:"fire-rc-compat",[Cf]:"fire-gcs",[Af]:"fire-gcs-compat",[Df]:"fire-fst",[Nf]:"fire-fst-compat","fire-js":"fire-js",[Rf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s=new Map,hr=new Map;function Lf(t,e){try{t.container.addComponent(e)}catch(n){Kr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Qt(t){const e=t.name;if(hr.has(e))return Kr.debug(`There were multiple attempts to register component ${e}.`),!1;hr.set(e,t);for(const n of $s.values())Lf(n,t);return!0}function Gr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Tt=new Gn("app","Firebase",Pf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new It("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn=Of;function Ff(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:hu,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw Tt.create("bad-app-name",{appName:String(s)});const i=$s.get(s);if(i){if(xs(t,i.options)&&xs(n,i.config))return i;throw Tt.create("duplicate-app",{appName:s})}const r=new qd(s);for(const a of hr.values())r.addComponent(a);const o=new Uf(t,n,r);return $s.set(s,o),o}function du(t=hu){const e=$s.get(t);if(!e)throw Tt.create("no-app",{appName:t});return e}function nt(t,e,n){var s;let i=(s=Mf[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Kr.warn(a.join(" "));return}Qt(new It(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf="firebase-heartbeat-database",$f=1,On="firebase-heartbeat-store";let Hi=null;function fu(){return Hi||(Hi=nf(xf,$f,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(On)}}}).catch(t=>{throw Tt.create("storage-open",{originalErrorMessage:t.message})})),Hi}async function Vf(t){var e;try{return(await fu()).transaction(On).objectStore(On).get(pu(t))}catch(n){throw Tt.create("storage-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message})}}async function Ta(t,e){var n;try{const i=(await fu()).transaction(On,"readwrite");return await i.objectStore(On).put(e,pu(t)),i.done}catch(s){throw Tt.create("storage-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message})}}function pu(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf=1024,jf=30*24*60*60*1e3;class qf{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Hf(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ba();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=jf}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ba(),{heartbeatsToSend:n,unsentEntries:s}=zf(this._heartbeatsCache.heartbeats),i=iu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ba(){return new Date().toISOString().substring(0,10)}function zf(t,e=Bf){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Sa(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Sa(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Hf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Rd()?Od().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Vf(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ta(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ta(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Sa(t){return iu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(t){Qt(new It("platform-logger",e=>new of(e),"PRIVATE")),Qt(new It("heartbeat",e=>new qf(e),"PRIVATE")),nt(lr,Ia,t),nt(lr,Ia,"esm2017"),nt("fire-js","")}Kf("");var Gf="firebase",Wf="9.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nt(Gf,Wf,"app");var Qf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},w,Wr=Wr||{},S=Qf||self;function Vs(){}function dr(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Xn(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Xf(t){return Object.prototype.hasOwnProperty.call(t,Ki)&&t[Ki]||(t[Ki]=++Yf)}var Ki="closure_uid_"+(1e9*Math.random()>>>0),Yf=0;function Jf(t,e,n){return t.call.apply(t.bind,arguments)}function Zf(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function ce(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ce=Jf:ce=Zf,ce.apply(null,arguments)}function vs(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function he(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function lt(){this.s=this.s,this.o=this.o}var ep=0;lt.prototype.s=!1;lt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),ep!=0)&&Xf(this)};lt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const gu=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},mu=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,i=typeof t=="string"?t.split(""):t;for(let r=0;r<s;r++)r in i&&e.call(n,i[r],r,t)};function tp(t){e:{var e=Kp;const n=t.length,s=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in s&&e.call(void 0,s[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function ka(t){return Array.prototype.concat.apply([],arguments)}function Qr(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Bs(t){return/^[\s\xa0]*$/.test(t)}var Ca=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ye(t,e){return t.indexOf(e)!=-1}function Gi(t,e){return t<e?-1:t>e?1:0}var ve;e:{var Aa=S.navigator;if(Aa){var Da=Aa.userAgent;if(Da){ve=Da;break e}}ve=""}function Xr(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function yu(t){const e={};for(const n in t)e[n]=t[n];return e}var Na="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function vu(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<Na.length;r++)n=Na[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Yr(t){return Yr[" "](t),t}Yr[" "]=Vs;function np(t){var e=rp;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var sp=ye(ve,"Opera"),Xt=ye(ve,"Trident")||ye(ve,"MSIE"),wu=ye(ve,"Edge"),fr=wu||Xt,_u=ye(ve,"Gecko")&&!(ye(ve.toLowerCase(),"webkit")&&!ye(ve,"Edge"))&&!(ye(ve,"Trident")||ye(ve,"MSIE"))&&!ye(ve,"Edge"),ip=ye(ve.toLowerCase(),"webkit")&&!ye(ve,"Edge");function Eu(){var t=S.document;return t?t.documentMode:void 0}var js;e:{var Wi="",Qi=function(){var t=ve;if(_u)return/rv:([^\);]+)(\)|;)/.exec(t);if(wu)return/Edge\/([\d\.]+)/.exec(t);if(Xt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(ip)return/WebKit\/(\S+)/.exec(t);if(sp)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Qi&&(Wi=Qi?Qi[1]:""),Xt){var Xi=Eu();if(Xi!=null&&Xi>parseFloat(Wi)){js=String(Xi);break e}}js=Wi}var rp={};function op(){return np(function(){let t=0;const e=Ca(String(js)).split("."),n=Ca("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=Gi(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Gi(i[2].length==0,r[2].length==0)||Gi(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var pr;if(S.document&&Xt){var Ra=Eu();pr=Ra||parseInt(js,10)||void 0}else pr=void 0;var ap=pr,cp=function(){if(!S.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{S.addEventListener("test",Vs,e),S.removeEventListener("test",Vs,e)}catch{}return t}();function pe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};function Mn(t,e){if(pe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(_u){e:{try{Yr(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:up[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Mn.Z.h.call(this)}}he(Mn,pe);var up={2:"touch",3:"pen",4:"mouse"};Mn.prototype.h=function(){Mn.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Yn="closure_listenable_"+(1e6*Math.random()|0),lp=0;function hp(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=i,this.key=++lp,this.ca=this.fa=!1}function ui(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function li(t){this.src=t,this.g={},this.h=0}li.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=mr(t,e,s,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new hp(e,this.src,r,!!s,i),e.fa=n,t.push(e)),e};function gr(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=gu(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(ui(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function mr(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==s)return i}return-1}var Jr="closure_lm_"+(1e6*Math.random()|0),Yi={};function Iu(t,e,n,s,i){if(s&&s.once)return bu(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Iu(t,e[r],n,s,i);return null}return n=to(n),t&&t[Yn]?t.N(e,n,Xn(s)?!!s.capture:!!s,i):Tu(t,e,n,!1,s,i)}function Tu(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Xn(i)?!!i.capture:!!i,a=eo(t);if(a||(t[Jr]=a=new li(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=dp(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)cp||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(ku(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function dp(){function t(n){return e.call(t.src,t.listener,n)}var e=fp;return t}function bu(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)bu(t,e[r],n,s,i);return null}return n=to(n),t&&t[Yn]?t.O(e,n,Xn(s)?!!s.capture:!!s,i):Tu(t,e,n,!0,s,i)}function Su(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)Su(t,e[r],n,s,i);else s=Xn(s)?!!s.capture:!!s,n=to(n),t&&t[Yn]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=mr(r,n,s,i),-1<n&&(ui(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=eo(t))&&(e=t.g[e.toString()],t=-1,e&&(t=mr(e,n,s,i)),(n=-1<t?e[t]:null)&&Zr(n))}function Zr(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Yn])gr(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(ku(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=eo(e))?(gr(n,t),n.h==0&&(n.src=null,e[Jr]=null)):ui(t)}}}function ku(t){return t in Yi?Yi[t]:Yi[t]="on"+t}function fp(t,e){if(t.ca)t=!0;else{e=new Mn(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&Zr(t),t=n.call(s,e)}return t}function eo(t){return t=t[Jr],t instanceof li?t:null}var Ji="__closure_events_fn_"+(1e9*Math.random()>>>0);function to(t){return typeof t=="function"?t:(t[Ji]||(t[Ji]=function(e){return t.handleEvent(e)}),t[Ji])}function ie(){lt.call(this),this.i=new li(this),this.P=this,this.I=null}he(ie,lt);ie.prototype[Yn]=!0;ie.prototype.removeEventListener=function(t,e,n,s){Su(this,t,e,n,s)};function ue(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new pe(e,t);else if(e instanceof pe)e.target=e.target||t;else{var i=e;e=new pe(s,t),vu(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=ws(o,s,!0,e)&&i}if(o=e.g=t,i=ws(o,s,!0,e)&&i,i=ws(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=ws(o,s,!1,e)&&i}ie.prototype.M=function(){if(ie.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)ui(n[s]);delete t.g[e],t.h--}}this.I=null};ie.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};ie.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function ws(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&gr(t.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var no=S.JSON.stringify;function pp(){var t=Au;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class gp{constructor(){this.h=this.g=null}add(e,n){const s=Cu.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Cu=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new mp,t=>t.reset());class mp{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function yp(t){S.setTimeout(()=>{throw t},0)}function so(t,e){yr||vp(),vr||(yr(),vr=!0),Au.add(t,e)}var yr;function vp(){var t=S.Promise.resolve(void 0);yr=function(){t.then(wp)}}var vr=!1,Au=new gp;function wp(){for(var t;t=pp();){try{t.h.call(t.g)}catch(n){yp(n)}var e=Cu;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}vr=!1}function hi(t,e){ie.call(this),this.h=t||1,this.g=e||S,this.j=ce(this.kb,this),this.l=Date.now()}he(hi,ie);w=hi.prototype;w.da=!1;w.S=null;w.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),ue(this,"tick"),this.da&&(io(this),this.start()))}};w.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function io(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}w.M=function(){hi.Z.M.call(this),io(this),delete this.g};function ro(t,e,n){if(typeof t=="function")n&&(t=ce(t,n));else if(t&&typeof t.handleEvent=="function")t=ce(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:S.setTimeout(t,e||0)}function Du(t){t.g=ro(()=>{t.g=null,t.i&&(t.i=!1,Du(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class _p extends lt{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Du(this)}M(){super.M(),this.g&&(S.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ln(t){lt.call(this),this.h=t,this.g={}}he(Ln,lt);var Oa=[];function Nu(t,e,n,s){Array.isArray(n)||(n&&(Oa[0]=n.toString()),n=Oa);for(var i=0;i<n.length;i++){var r=Iu(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Ru(t){Xr(t.g,function(e,n){this.g.hasOwnProperty(n)&&Zr(e)},t),t.g={}}Ln.prototype.M=function(){Ln.Z.M.call(this),Ru(this)};Ln.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function di(){this.g=!0}di.prototype.Aa=function(){this.g=!1};function Ep(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function Ip(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function xt(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+bp(t,n)+(s?" "+s:"")})}function Tp(t,e){t.info(function(){return"TIMEOUT: "+e})}di.prototype.info=function(){};function bp(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return no(n)}catch{return e}}var Ot={},Ma=null;function fi(){return Ma=Ma||new ie}Ot.Ma="serverreachability";function Ou(t){pe.call(this,Ot.Ma,t)}he(Ou,pe);function Pn(t){const e=fi();ue(e,new Ou(e))}Ot.STAT_EVENT="statevent";function Mu(t,e){pe.call(this,Ot.STAT_EVENT,t),this.stat=e}he(Mu,pe);function we(t){const e=fi();ue(e,new Mu(e,t))}Ot.Na="timingevent";function Lu(t,e){pe.call(this,Ot.Na,t),this.size=e}he(Lu,pe);function Jn(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return S.setTimeout(function(){t()},e)}var pi={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Pu={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function oo(){}oo.prototype.h=null;function La(t){return t.h||(t.h=t.i())}function Uu(){}var Zn={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ao(){pe.call(this,"d")}he(ao,pe);function co(){pe.call(this,"c")}he(co,pe);var wr;function gi(){}he(gi,oo);gi.prototype.g=function(){return new XMLHttpRequest};gi.prototype.i=function(){return{}};wr=new gi;function es(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new Ln(this),this.P=Sp,t=fr?125:void 0,this.W=new hi(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Fu}function Fu(){this.i=null,this.g="",this.h=!1}var Sp=45e3,_r={},qs={};w=es.prototype;w.setTimeout=function(t){this.P=t};function Er(t,e,n){t.K=1,t.v=yi(We(e)),t.s=n,t.U=!0,xu(t,null)}function xu(t,e){t.F=Date.now(),ts(t),t.A=We(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),Hu(n.h,"t",s),t.C=0,n=t.l.H,t.h=new Fu,t.g=hl(t.l,n?e:null,!t.s),0<t.O&&(t.L=new _p(ce(t.Ia,t,t.g),t.O)),Nu(t.V,t.g,"readystatechange",t.gb),e=t.H?yu(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Pn(),Ep(t.j,t.u,t.A,t.m,t.X,t.s)}w.gb=function(t){t=t.target;const e=this.L;e&&ze(t)==3?e.l():this.Ia(t)};w.Ia=function(t){try{if(t==this.g)e:{const l=ze(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>l)&&(l!=3||fr||this.g&&(this.h.h||this.g.ga()||xa(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?Pn(3):Pn(2)),mi(this);var n=this.g.ba();this.N=n;t:if($u(this)){var s=xa(this.g);t="";var i=s.length,r=ze(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){gt(this),Sn(this);var o="";break t}this.h.i=new S.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,Ip(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Bs(a)){var u=a;break t}}u=null}if(n=u)xt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ir(this,n);else{this.i=!1,this.o=3,we(12),gt(this),Sn(this);break e}}this.U?(Vu(this,l,o),fr&&this.i&&l==3&&(Nu(this.V,this.W,"tick",this.fb),this.W.start())):(xt(this.j,this.m,o,null),Ir(this,o)),l==4&&gt(this),this.i&&!this.I&&(l==4?al(this.l,this):(this.i=!1,ts(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,we(12)):(this.o=0,we(13)),gt(this),Sn(this)}}}catch{}finally{}};function $u(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Vu(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=kp(t,n),i==qs){e==4&&(t.o=4,we(14),s=!1),xt(t.j,t.m,null,"[Incomplete Response]");break}else if(i==_r){t.o=4,we(15),xt(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else xt(t.j,t.m,i,null),Ir(t,i);$u(t)&&i!=qs&&i!=_r&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,we(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),vo(e),e.L=!0,we(11))):(xt(t.j,t.m,n,"[Invalid Chunked Response]"),gt(t),Sn(t))}w.fb=function(){if(this.g){var t=ze(this.g),e=this.g.ga();this.C<e.length&&(mi(this),Vu(this,t,e),this.i&&t!=4&&ts(this))}};function kp(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?qs:(n=Number(e.substring(n,s)),isNaN(n)?_r:(s+=1,s+n>e.length?qs:(e=e.substr(s,n),t.C=s+n,e)))}w.cancel=function(){this.I=!0,gt(this)};function ts(t){t.Y=Date.now()+t.P,Bu(t,t.P)}function Bu(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Jn(ce(t.eb,t),e)}function mi(t){t.B&&(S.clearTimeout(t.B),t.B=null)}w.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Tp(this.j,this.A),this.K!=2&&(Pn(),we(17)),gt(this),this.o=2,Sn(this)):Bu(this,this.Y-t)};function Sn(t){t.l.G==0||t.I||al(t.l,t)}function gt(t){mi(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,io(t.W),Ru(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ir(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Tr(n.i,t))){if(n.I=t.N,!t.J&&Tr(n.i,t)&&n.G==3){try{var s=n.Ca.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Gs(n),_i(n);else break e;yo(n),we(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=Jn(ce(n.ab,n),6e3));if(1>=Wu(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else mt(n,11)}else if((t.J||n.g==t)&&Gs(n),!Bs(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const l=u[3];l!=null&&(n.ma=l,n.h.info("VER="+n.ma));const h=u[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const f=t.g;if(f){const p=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var r=s.i;!r.g&&(ye(p,"spdy")||ye(p,"quic")||ye(p,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(ho(r,r.h),r.h=null))}if(s.D){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(s.sa=v,j(s.F,s.D,v))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=ll(s,s.H?s.la:null,s.W),o.J){Qu(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(mi(a),ts(a)),s.g=o}else rl(s);0<n.l.length&&Ei(n)}else u[0]!="stop"&&u[0]!="close"||mt(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?mt(n,7):mo(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}Pn(4)}catch{}}function Cp(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(dr(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function uo(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(dr(t)||typeof t=="string")mu(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(dr(t)||typeof t=="string"){n=[];for(var s=t.length,i=0;i<s;i++)n.push(i)}else for(i in n=[],s=0,t)n[s++]=i;s=Cp(t),i=s.length;for(var r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}}function an(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof an)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}w=an.prototype;w.R=function(){lo(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};w.T=function(){return lo(this),this.g.concat()};function lo(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];bt(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)s=t.g[e],bt(i,s)||(t.g[n++]=s,i[s]=1),e++;t.g.length=n}}w.get=function(t,e){return bt(this.h,t)?this.h[t]:e};w.set=function(t,e){bt(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};w.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var i=n[s],r=this.get(i);t.call(e,r,i,this)}};function bt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var ju=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ap(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function St(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof St){this.g=e!==void 0?e:t.g,zs(this,t.j),this.s=t.s,Hs(this,t.i),Ks(this,t.m),this.l=t.l,e=t.h;var n=new Un;n.i=e.i,e.g&&(n.g=new an(e.g),n.h=e.h),Pa(this,n),this.o=t.o}else t&&(n=String(t).match(ju))?(this.g=!!e,zs(this,n[1]||"",!0),this.s=kn(n[2]||""),Hs(this,n[3]||"",!0),Ks(this,n[4]),this.l=kn(n[5]||"",!0),Pa(this,n[6]||"",!0),this.o=kn(n[7]||"")):(this.g=!!e,this.h=new Un(null,this.g))}St.prototype.toString=function(){var t=[],e=this.j;e&&t.push(En(e,Ua,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(En(e,Ua,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(En(n,n.charAt(0)=="/"?Mp:Op,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",En(n,Pp)),t.join("")};function We(t){return new St(t)}function zs(t,e,n){t.j=n?kn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Hs(t,e,n){t.i=n?kn(e,!0):e}function Ks(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Pa(t,e,n){e instanceof Un?(t.h=e,Up(t.h,t.g)):(n||(e=En(e,Lp)),t.h=new Un(e,t.g))}function j(t,e,n){t.h.set(e,n)}function yi(t){return j(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Dp(t){return t instanceof St?We(t):new St(t,void 0)}function Np(t,e,n,s){var i=new St(null,void 0);return t&&zs(i,t),e&&Hs(i,e),n&&Ks(i,n),s&&(i.l=s),i}function kn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function En(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Rp),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Rp(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ua=/[#\/\?@]/g,Op=/[#\?:]/g,Mp=/[#\?]/g,Lp=/[#\?@]/g,Pp=/#/g;function Un(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ht(t){t.g||(t.g=new an,t.h=0,t.i&&Ap(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}w=Un.prototype;w.add=function(t,e){ht(this),this.i=null,t=cn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function qu(t,e){ht(t),e=cn(t,e),bt(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,bt(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&lo(t)))}function zu(t,e){return ht(t),e=cn(t,e),bt(t.g.h,e)}w.forEach=function(t,e){ht(this),this.g.forEach(function(n,s){mu(n,function(i){t.call(e,i,s,this)},this)},this)};w.T=function(){ht(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var i=t[s],r=0;r<i.length;r++)n.push(e[s]);return n};w.R=function(t){ht(this);var e=[];if(typeof t=="string")zu(this,t)&&(e=ka(e,this.g.get(cn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=ka(e,t[n])}return e};w.set=function(t,e){return ht(this),this.i=null,t=cn(this,t),zu(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};w.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Hu(t,e,n){qu(t,e),0<n.length&&(t.i=null,t.g.set(cn(t,e),Qr(n)),t.h+=n.length)}w.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],i=encodeURIComponent(String(s));s=this.R(s);for(var r=0;r<s.length;r++){var o=i;s[r]!==""&&(o+="="+encodeURIComponent(String(s[r]))),t.push(o)}}return this.i=t.join("&")};function cn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Up(t,e){e&&!t.j&&(ht(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(qu(this,s),Hu(this,i,n))},t)),t.j=e}var Fp=class{constructor(t,e){this.h=t,this.g=e}};function Ku(t){this.l=t||xp,S.PerformanceNavigationTiming?(t=S.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(S.g&&S.g.Ea&&S.g.Ea()&&S.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var xp=10;function Gu(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Wu(t){return t.h?1:t.g?t.g.size:0}function Tr(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ho(t,e){t.g?t.g.add(e):t.h=e}function Qu(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Ku.prototype.cancel=function(){if(this.i=Xu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Xu(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Qr(t.i)}function fo(){}fo.prototype.stringify=function(t){return S.JSON.stringify(t,void 0)};fo.prototype.parse=function(t){return S.JSON.parse(t,void 0)};function $p(){this.g=new fo}function Vp(t,e,n){const s=n||"";try{uo(t,function(i,r){let o=i;Xn(i)&&(o=no(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function Bp(t,e){const n=new di;if(S.Image){const s=new Image;s.onload=vs(_s,n,s,"TestLoadImage: loaded",!0,e),s.onerror=vs(_s,n,s,"TestLoadImage: error",!1,e),s.onabort=vs(_s,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=vs(_s,n,s,"TestLoadImage: timeout",!1,e),S.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function _s(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function ns(t){this.l=t.$b||null,this.j=t.ib||!1}he(ns,oo);ns.prototype.g=function(){return new vi(this.l,this.j)};ns.prototype.i=function(t){return function(){return t}}({});function vi(t,e){ie.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=po,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}he(vi,ie);var po=0;w=vi.prototype;w.open=function(t,e){if(this.readyState!=po)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Fn(this)};w.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||S).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};w.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ss(this)),this.readyState=po};w.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Fn(this)),this.g&&(this.readyState=3,Fn(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof S.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Yu(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Yu(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}w.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ss(this):Fn(this),this.readyState==3&&Yu(this)}};w.Ua=function(t){this.g&&(this.response=this.responseText=t,ss(this))};w.Ta=function(t){this.g&&(this.response=t,ss(this))};w.ha=function(){this.g&&ss(this)};function ss(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Fn(t)}w.setRequestHeader=function(t,e){this.v.append(t,e)};w.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};w.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Fn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(vi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var jp=S.JSON.parse;function X(t){ie.call(this),this.headers=new an,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ju,this.K=this.L=!1}he(X,ie);var Ju="",qp=/^https?$/i,zp=["POST","PUT"];w=X.prototype;w.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():wr.g(),this.C=this.u?La(this.u):La(wr),this.g.onreadystatechange=ce(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){Fa(this,r);return}t=n||"";const i=new an(this.headers);s&&uo(s,function(r,o){i.set(o,r)}),s=tp(i.T()),n=S.FormData&&t instanceof S.FormData,!(0<=gu(zp,e))||s||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(r,o){this.g.setRequestHeader(o,r)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{tl(this),0<this.B&&((this.K=Hp(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ce(this.pa,this)):this.A=ro(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Fa(this,r)}};function Hp(t){return Xt&&op()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function Kp(t){return t.toLowerCase()=="content-type"}w.pa=function(){typeof Wr<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ue(this,"timeout"),this.abort(8))};function Fa(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Zu(t),wi(t)}function Zu(t){t.D||(t.D=!0,ue(t,"complete"),ue(t,"error"))}w.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ue(this,"complete"),ue(this,"abort"),wi(this))};w.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),wi(this,!0)),X.Z.M.call(this)};w.Fa=function(){this.s||(this.F||this.v||this.l?el(this):this.cb())};w.cb=function(){el(this)};function el(t){if(t.h&&typeof Wr<"u"&&(!t.C[1]||ze(t)!=4||t.ba()!=2)){if(t.v&&ze(t)==4)ro(t.Fa,0,t);else if(ue(t,"readystatechange"),ze(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(ju)[1]||null;if(!i&&S.self&&S.self.location){var r=S.self.location.protocol;i=r.substr(0,r.length-1)}s=!qp.test(i?i.toLowerCase():"")}n=s}if(n)ue(t,"complete"),ue(t,"success");else{t.m=6;try{var o=2<ze(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Zu(t)}}finally{wi(t)}}}}function wi(t,e){if(t.g){tl(t);const n=t.g,s=t.C[0]?Vs:null;t.g=null,t.C=null,e||ue(t,"ready");try{n.onreadystatechange=s}catch{}}}function tl(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(S.clearTimeout(t.A),t.A=null)}function ze(t){return t.g?t.g.readyState:0}w.ba=function(){try{return 2<ze(this)?this.g.status:-1}catch{return-1}};w.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};w.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),jp(e)}};function xa(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Ju:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}w.Da=function(){return this.m};w.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function Gp(t){let e="";return Xr(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function go(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Gp(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):j(t,e,n))}function wn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function nl(t){this.za=0,this.l=[],this.h=new di,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=wn("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=wn("baseRetryDelayMs",5e3,t),this.$a=wn("retryDelaySeedMs",1e4,t),this.Ya=wn("forwardChannelMaxRetries",2,t),this.ra=wn("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Ku(t&&t.concurrentRequestLimit),this.Ca=new $p,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}w=nl.prototype;w.ma=8;w.G=1;function mo(t){if(sl(t),t.G==3){var e=t.V++,n=We(t.F);j(n,"SID",t.J),j(n,"RID",e),j(n,"TYPE","terminate"),is(t,n),e=new es(t,t.h,e,void 0),e.K=2,e.v=yi(We(n)),n=!1,S.navigator&&S.navigator.sendBeacon&&(n=S.navigator.sendBeacon(e.v.toString(),"")),!n&&S.Image&&(new Image().src=e.v,n=!0),n||(e.g=hl(e.l,null),e.g.ea(e.v)),e.F=Date.now(),ts(e)}ul(t)}w.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function _i(t){t.g&&(vo(t),t.g.cancel(),t.g=null)}function sl(t){_i(t),t.u&&(S.clearTimeout(t.u),t.u=null),Gs(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&S.clearTimeout(t.m),t.m=null)}function Zi(t,e){t.l.push(new Fp(t.Za++,e)),t.G==3&&Ei(t)}function Ei(t){Gu(t.i)||t.m||(t.m=!0,so(t.Ha,t),t.C=0)}function Wp(t,e){return Wu(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Jn(ce(t.Ha,t,e),cl(t,t.C)),t.C++,!0)}w.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new es(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=yu(r),vu(r,this.P)):r=this.P),this.o===null&&(i.H=r),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=il(this,i,e),n=We(this.F),j(n,"RID",t),j(n,"CVER",22),this.D&&j(n,"X-HTTP-Session-Id",this.D),is(this,n),this.o&&r&&go(n,this.o,r),ho(this.i,i),this.Ra&&j(n,"TYPE","init"),this.ja?(j(n,"$req",e),j(n,"SID","null"),i.$=!0,Er(i,n,null)):Er(i,n,e),this.G=2}}else this.G==3&&(t?$a(this,t):this.l.length==0||Gu(this.i)||$a(this))};function $a(t,e){var n;e?n=e.m:n=t.V++;const s=We(t.F);j(s,"SID",t.J),j(s,"RID",n),j(s,"AID",t.U),is(t,s),t.o&&t.s&&go(s,t.o,t.s),n=new es(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=il(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),ho(t.i,n),Er(n,s,e)}function is(t,e){t.j&&uo({},function(n,s){j(e,s,n)})}function il(t,e,n){n=Math.min(t.l.length,n);var s=t.j?ce(t.j.Oa,t.j,t):null;e:{var i=t.l;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let u=i[c].h;const l=i[c].g;if(u-=r,0>u)r=Math.max(0,i[c].h-100),a=!1;else try{Vp(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,s}function rl(t){t.g||t.u||(t.Y=1,so(t.Ga,t),t.A=0)}function yo(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Jn(ce(t.Ga,t),cl(t,t.A)),t.A++,!0)}w.Ga=function(){if(this.u=null,ol(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Jn(ce(this.bb,this),t)}};w.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,we(10),_i(this),ol(this))};function vo(t){t.B!=null&&(S.clearTimeout(t.B),t.B=null)}function ol(t){t.g=new es(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=We(t.oa);j(e,"RID","rpc"),j(e,"SID",t.J),j(e,"CI",t.N?"0":"1"),j(e,"AID",t.U),is(t,e),j(e,"TYPE","xmlhttp"),t.o&&t.s&&go(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=yi(We(e)),n.s=null,n.U=!0,xu(n,t)}w.ab=function(){this.v!=null&&(this.v=null,_i(this),yo(this),we(19))};function Gs(t){t.v!=null&&(S.clearTimeout(t.v),t.v=null)}function al(t,e){var n=null;if(t.g==e){Gs(t),vo(t),t.g=null;var s=2}else if(Tr(t.i,e))n=e.D,Qu(t.i,e),s=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=fi(),ue(s,new Lu(s,n)),Ei(t)}else rl(t);else if(i=e.o,i==3||i==0&&0<t.I||!(s==1&&Wp(t,e)||s==2&&yo(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:mt(t,5);break;case 4:mt(t,10);break;case 3:mt(t,6);break;default:mt(t,2)}}}function cl(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function mt(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var s=ce(t.jb,t);n||(n=new St("//www.google.com/images/cleardot.gif"),S.location&&S.location.protocol=="http"||zs(n,"https"),yi(n)),Bp(n.toString(),s)}else we(2);t.G=0,t.j&&t.j.va(e),ul(t),sl(t)}w.jb=function(t){t?(this.h.info("Successfully pinged google.com"),we(2)):(this.h.info("Failed to ping google.com"),we(1))};function ul(t){t.G=0,t.I=-1,t.j&&((Xu(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Qr(t.l),t.l.length=0),t.j.ua())}function ll(t,e,n){let s=Dp(n);if(s.i!="")e&&Hs(s,e+"."+s.i),Ks(s,s.m);else{const i=S.location;s=Np(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&Xr(t.aa,function(i,r){j(s,r,i)}),e=t.D,n=t.sa,e&&n&&j(s,e,n),j(s,"VER",t.ma),is(t,s),s}function hl(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new X(new ns({ib:!0})):new X(t.qa),e.L=t.H,e}function dl(){}w=dl.prototype;w.xa=function(){};w.wa=function(){};w.va=function(){};w.ua=function(){};w.Oa=function(){};function Ws(){if(Xt&&!(10<=Number(ap)))throw Error("Environmental error: no available transport.")}Ws.prototype.g=function(t,e){return new ke(t,e)};function ke(t,e){ie.call(this),this.g=new nl(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Bs(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Bs(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new un(this)}he(ke,ie);ke.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),so(ce(t.hb,t,e))),we(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=ll(t,null,t.W),Ei(t)};ke.prototype.close=function(){mo(this.g)};ke.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Zi(this.g,e)}else this.v?(e={},e.__data__=no(t),Zi(this.g,e)):Zi(this.g,t)};ke.prototype.M=function(){this.g.j=null,delete this.j,mo(this.g),delete this.g,ke.Z.M.call(this)};function fl(t){ao.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}he(fl,ao);function pl(){co.call(this),this.status=1}he(pl,co);function un(t){this.g=t}he(un,dl);un.prototype.xa=function(){ue(this.g,"a")};un.prototype.wa=function(t){ue(this.g,new fl(t))};un.prototype.va=function(t){ue(this.g,new pl)};un.prototype.ua=function(){ue(this.g,"b")};Ws.prototype.createWebChannel=Ws.prototype.g;ke.prototype.send=ke.prototype.u;ke.prototype.open=ke.prototype.m;ke.prototype.close=ke.prototype.close;pi.NO_ERROR=0;pi.TIMEOUT=8;pi.HTTP_ERROR=6;Pu.COMPLETE="complete";Uu.EventType=Zn;Zn.OPEN="a";Zn.CLOSE="b";Zn.ERROR="c";Zn.MESSAGE="d";ie.prototype.listen=ie.prototype.N;X.prototype.listenOnce=X.prototype.O;X.prototype.getLastError=X.prototype.La;X.prototype.getLastErrorCode=X.prototype.Da;X.prototype.getStatus=X.prototype.ba;X.prototype.getResponseJson=X.prototype.Qa;X.prototype.getResponseText=X.prototype.ga;X.prototype.send=X.prototype.ea;var Qp=function(){return new Ws},Xp=function(){return fi()},er=pi,Yp=Pu,Jp=Ot,Va={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Zp=ns,Es=Uu,eg=X;const Ba="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ie.UNAUTHENTICATED=new Ie(null),Ie.GOOGLE_CREDENTIALS=new Ie("google-credentials-uid"),Ie.FIRST_PARTY=new Ie("first-party-uid"),Ie.MOCK_USER=new Ie("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ln="9.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt=new zr("@firebase/firestore");function ja(){return kt.logLevel}function E(t,...e){if(kt.logLevel<=U.DEBUG){const n=e.map(wo);kt.debug(`Firestore (${ln}): ${t}`,...n)}}function rt(t,...e){if(kt.logLevel<=U.ERROR){const n=e.map(wo);kt.error(`Firestore (${ln}): ${t}`,...n)}}function qa(t,...e){if(kt.logLevel<=U.WARN){const n=e.map(wo);kt.warn(`Firestore (${ln}): ${t}`,...n)}}function wo(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(t="Unexpected state"){const e=`FIRESTORE (${ln}) INTERNAL ASSERTION FAILED: `+t;throw rt(e),new Error(e)}function $(t,e){t||D()}function N(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class I extends Rt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ng{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ie.UNAUTHENTICATED))}shutdown(){}}class sg{constructor(e){this.t=e,this.currentUser=Ie.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new vt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new vt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{E("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(E("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new vt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(E("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?($(typeof s.accessToken=="string"),new tg(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return $(e===null||typeof e=="string"),new Ie(e)}}class ig{constructor(e,n,s){this.type="FirstParty",this.user=Ie.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class rg{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new ig(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Ie.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class og{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ag{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const s=r=>{r.error!=null&&E("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.p;return this.p=r.token,E("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{E("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.g.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.g.getImmediate({optional:!0});r?i(r):E("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?($(typeof n.token=="string"),this.p=n.token,new og(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=cg(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function F(t,e){return t<e?-1:t>e?1:0}function Yt(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new I(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new I(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new I(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new I(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return J.fromMillis(Date.now())}static fromDate(e){return J.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new J(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?F(this.nanoseconds,e.nanoseconds):F(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.timestamp=e}static fromTimestamp(e){return new M(e)}static min(){return new M(new J(0,0))}static max(){return new M(new J(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e,n,s){n===void 0?n=0:n>e.length&&D(),s===void 0?s=e.length-n:s>e.length-n&&D(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return xn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof xn?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class q extends xn{construct(e,n,s){return new q(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new I(m.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new q(n)}static emptyPath(){return new q([])}}const ug=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class fe extends xn{construct(e,n,s){return new fe(e,n,s)}static isValidIdentifier(e){return ug.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),fe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new fe(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new I(m.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new I(m.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new I(m.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new I(m.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new fe(n)}static emptyPath(){return new fe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e){this.path=e}static fromPath(e){return new T(q.fromString(e))}static fromName(e){return new T(q.fromString(e).popFirst(5))}static empty(){return new T(q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&q.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return q.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new T(new q(e.slice()))}}function lg(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=M.fromTimestamp(s===1e9?new J(n+1,0):new J(n,s));return new ot(i,T.empty(),e)}function hg(t){return new ot(t.readTime,t.key,-1)}class ot{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new ot(M.min(),T.empty(),-1)}static max(){return new ot(M.max(),T.empty(),-1)}}function dg(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=T.comparator(t.documentKey,e.documentKey),n!==0?n:F(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class pg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rs(t){if(t.code!==m.FAILED_PRECONDITION||t.message!==fg)throw t;E("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&D(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new y((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof y?n:y.resolve(n)}catch(n){return y.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):y.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):y.reject(n)}static resolve(e){return new y((n,s)=>{n(e)})}static reject(e){return new y((n,s)=>{s(e)})}static waitFor(e){return new y((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(e){let n=y.resolve(!1);for(const s of e)n=n.next(i=>i?y.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new y((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===r&&s(o)},l=>i(l))}})}static doWhile(e,n){return new y((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function os(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.it(s),this.rt=s=>n.writeSequenceNumber(s))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Mt(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ml(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_o.ot=-1;class ee{constructor(e,n){this.comparator=e,this.root=n||oe.EMPTY}insert(e,n){return new ee(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,oe.BLACK,null,null))}remove(e){return new ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,oe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Is(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Is(this.root,e,this.comparator,!1)}getReverseIterator(){return new Is(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Is(this.root,e,this.comparator,!0)}}class Is{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class oe{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:oe.RED,this.left=i!=null?i:oe.EMPTY,this.right=r!=null?r:oe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new oe(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return oe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return oe.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,oe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,oe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw D();const e=this.left.check();if(e!==this.right.check())throw D();return e+(this.isRed()?0:1)}}oe.EMPTY=null,oe.RED=!0,oe.BLACK=!1;oe.EMPTY=new class{constructor(){this.size=0}get key(){throw D()}get value(){throw D()}get color(){throw D()}get left(){throw D()}get right(){throw D()}copy(t,e,n,s,i){return this}insert(t,e,n){return new oe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.comparator=e,this.data=new ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ha(this.data.getIterator())}getIteratorFrom(e){return new Ha(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Z)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Z(this.comparator);return n.data=e,n}}class Ha{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.fields=e,e.sort(fe.comparator)}static empty(){return new Ae([])}unionWith(e){let n=new Z(fe.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Ae(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Yt(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new le(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new le(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return F(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}le.EMPTY_BYTE_STRING=new le("");const gg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function at(t){if($(!!t),typeof t=="string"){let e=0;const n=gg.exec(t);if($(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Q(t.seconds),nanos:Q(t.nanos)}}function Q(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Jt(t){return typeof t=="string"?le.fromBase64String(t):le.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function vl(t){const e=t.mapValue.fields.__previous_value__;return yl(e)?vl(e):e}function $n(t){const e=at(t.mapValue.fields.__local_write_time__.timestampValue);return new J(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e,n,s,i,r,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Zt{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Zt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Zt&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(t){return t==null}function Qs(t){return t===0&&1/t==-1/0}function yg(t){return typeof t=="number"&&Number.isInteger(t)&&!Qs(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ct(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?yl(t)?4:vg(t)?9007199254740991:10:D()}function Fe(t,e){if(t===e)return!0;const n=Ct(t);if(n!==Ct(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return $n(t).isEqual($n(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=at(s.timestampValue),o=at(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Jt(s.bytesValue).isEqual(Jt(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Q(s.geoPointValue.latitude)===Q(i.geoPointValue.latitude)&&Q(s.geoPointValue.longitude)===Q(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Q(s.integerValue)===Q(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=Q(s.doubleValue),o=Q(i.doubleValue);return r===o?Qs(r)===Qs(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Yt(t.arrayValue.values||[],e.arrayValue.values||[],Fe);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(za(r)!==za(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!Fe(r[a],o[a])))return!1;return!0}(t,e);default:return D()}}function Vn(t,e){return(t.values||[]).find(n=>Fe(n,e))!==void 0}function en(t,e){if(t===e)return 0;const n=Ct(t),s=Ct(e);if(n!==s)return F(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return F(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=Q(i.integerValue||i.doubleValue),a=Q(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Ka(t.timestampValue,e.timestampValue);case 4:return Ka($n(t),$n(e));case 5:return F(t.stringValue,e.stringValue);case 6:return function(i,r){const o=Jt(i),a=Jt(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=F(o[c],a[c]);if(u!==0)return u}return F(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=F(Q(i.latitude),Q(r.latitude));return o!==0?o:F(Q(i.longitude),Q(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=en(o[c],a[c]);if(u)return u}return F(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===Ts.mapValue&&r===Ts.mapValue)return 0;if(i===Ts.mapValue)return 1;if(r===Ts.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=r.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=F(a[l],u[l]);if(h!==0)return h;const d=en(o[a[l]],c[u[l]]);if(d!==0)return d}return F(a.length,u.length)}(t.mapValue,e.mapValue);default:throw D()}}function Ka(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return F(t,e);const n=at(t),s=at(e),i=F(n.seconds,s.seconds);return i!==0?i:F(n.nanos,s.nanos)}function qt(t){return br(t)}function br(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=at(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Jt(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,T.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=br(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${br(s.fields[a])}`;return r+"}"}(t.mapValue):D();var e,n}function Sr(t){return!!t&&"integerValue"in t}function Eo(t){return!!t&&"arrayValue"in t}function Ga(t){return!!t&&"nullValue"in t}function Wa(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Cs(t){return!!t&&"mapValue"in t}function Cn(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Mt(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Cn(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Cn(t.arrayValue.values[n]);return e}return Object.assign({},t)}function vg(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.value=e}static empty(){return new Te({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Cs(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Cn(n)}setAll(e){let n=fe.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Cn(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());Cs(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Fe(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];Cs(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){Mt(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new Te(Cn(this.value))}}function wl(t){const e=[];return Mt(t.fields,(n,s)=>{const i=new fe([n]);if(Cs(s)){const r=wl(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new Ae(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e,n,s,i,r,o){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.data=r,this.documentState=o}static newInvalidDocument(e){return new ae(e,0,M.min(),M.min(),Te.empty(),0)}static newFoundDocument(e,n,s){return new ae(e,1,n,M.min(),s,0)}static newNoDocument(e,n){return new ae(e,2,n,M.min(),Te.empty(),0)}static newUnknownDocument(e,n){return new ae(e,3,n,M.min(),Te.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Te.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Te.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=M.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ae&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ae(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ut=null}}function Qa(t,e=null,n=[],s=[],i=null,r=null,o=null){return new wg(t,e,n,s,i,r,o)}function Io(t){const e=N(t);if(e.ut===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(i=s).field.canonicalString()+i.op.toString()+qt(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Ii(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>qt(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>qt(s)).join(",")),e.ut=n}return e.ut}function _g(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${qt(s.value)}`;var s}).join(", ")}]`),Ii(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>qt(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>qt(n)).join(",")),`Target(${e})`}function To(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!Ag(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],s=e.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!Fe(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ya(t.startAt,e.startAt)&&Ya(t.endAt,e.endAt)}function kr(t){return T.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class be extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.ct(e,n,s):new Eg(e,n,s):n==="array-contains"?new bg(e,s):n==="in"?new Sg(e,s):n==="not-in"?new kg(e,s):n==="array-contains-any"?new Cg(e,s):new be(e,n,s)}static ct(e,n,s){return n==="in"?new Ig(e,s):new Tg(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.at(en(n,this.value)):n!==null&&Ct(this.value)===Ct(n)&&this.at(en(n,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return D()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Eg extends be{constructor(e,n,s){super(e,n,s),this.key=T.fromName(s.referenceValue)}matches(e){const n=T.comparator(e.key,this.key);return this.at(n)}}class Ig extends be{constructor(e,n){super(e,"in",n),this.keys=_l("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Tg extends be{constructor(e,n){super(e,"not-in",n),this.keys=_l("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function _l(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>T.fromName(s.referenceValue))}class bg extends be{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Eo(n)&&Vn(n.arrayValue,this.value)}}class Sg extends be{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Vn(this.value.arrayValue,n)}}class kg extends be{constructor(e,n){super(e,"not-in",n)}matches(e){if(Vn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Vn(this.value.arrayValue,n)}}class Cg extends be{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Eo(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Vn(this.value.arrayValue,s))}}class Xs{constructor(e,n){this.position=e,this.inclusive=n}}class zt{constructor(e,n="asc"){this.field=e,this.dir=n}}function Ag(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Xa(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=T.comparator(T.fromName(o.referenceValue),n.key):s=en(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Ya(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Fe(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.lt=null,this.ft=null,this.startAt,this.endAt}}function Dg(t,e,n,s,i,r,o,a){return new as(t,e,n,s,i,r,o,a)}function bo(t){return new as(t)}function Ng(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function El(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Il(t){for(const e of t.filters)if(e.ht())return e.field;return null}function Rg(t){return t.collectionGroup!==null}function Bn(t){const e=N(t);if(e.lt===null){e.lt=[];const n=Il(e),s=El(e);if(n!==null&&s===null)n.isKeyField()||e.lt.push(new zt(n)),e.lt.push(new zt(fe.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.lt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new zt(fe.keyField(),r))}}}return e.lt}function At(t){const e=N(t);if(!e.ft)if(e.limitType==="F")e.ft=Qa(e.path,e.collectionGroup,Bn(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of Bn(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new zt(r.field,o))}const s=e.endAt?new Xs(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Xs(e.startAt.position,e.startAt.inclusive):null;e.ft=Qa(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.ft}function Og(t,e,n){return new as(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ti(t,e){return To(At(t),At(e))&&t.limitType===e.limitType}function Tl(t){return`${Io(At(t))}|lt:${t.limitType}`}function Cr(t){return`Query(target=${_g(At(t))}; limitType=${t.limitType})`}function So(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):T.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Xa(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,Bn(n),s)||n.endAt&&!function(i,r,o){const a=Xa(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,Bn(n),s))}(t,e)}function Mg(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function bl(t){return(e,n)=>{let s=!1;for(const i of Bn(t)){const r=Lg(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function Lg(t,e,n){const s=t.field.isKeyField()?T.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?en(a,c):D()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return D()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qs(e)?"-0":e}}function kl(t){return{integerValue:""+t}}function Pg(t,e){return yg(e)?kl(e):Sl(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(){this._=void 0}}function Ug(t,e,n){return t instanceof Ys?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof jn?Al(t,e):t instanceof qn?Dl(t,e):function(s,i){const r=Cl(s,i),o=Ja(r)+Ja(s._t);return Sr(r)&&Sr(s._t)?kl(o):Sl(s.wt,o)}(t,e)}function Fg(t,e,n){return t instanceof jn?Al(t,e):t instanceof qn?Dl(t,e):n}function Cl(t,e){return t instanceof Js?Sr(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Ys extends bi{}class jn extends bi{constructor(e){super(),this.elements=e}}function Al(t,e){const n=Nl(e);for(const s of t.elements)n.some(i=>Fe(i,s))||n.push(s);return{arrayValue:{values:n}}}class qn extends bi{constructor(e){super(),this.elements=e}}function Dl(t,e){let n=Nl(e);for(const s of t.elements)n=n.filter(i=>!Fe(i,s));return{arrayValue:{values:n}}}class Js extends bi{constructor(e,n){super(),this.wt=e,this._t=n}}function Ja(t){return Q(t.integerValue||t.doubleValue)}function Nl(t){return Eo(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function xg(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof jn&&s instanceof jn||n instanceof qn&&s instanceof qn?Yt(n.elements,s.elements,Fe):n instanceof Js&&s instanceof Js?Fe(n._t,s._t):n instanceof Ys&&s instanceof Ys}(t.transform,e.transform)}class $g{constructor(e,n){this.version=e,this.transformResults=n}}class Ne{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ne}static exists(e){return new Ne(void 0,e)}static updateTime(e){return new Ne(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function As(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Si{}function Rl(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ko(t.key,Ne.none()):new cs(t.key,t.data,Ne.none());{const n=t.data,s=Te.empty();let i=new Z(fe.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new dt(t.key,s,new Ae(i.toArray()),Ne.none())}}function Vg(t,e,n){t instanceof cs?function(s,i,r){const o=s.value.clone(),a=ec(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof dt?function(s,i,r){if(!As(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=ec(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Ol(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function An(t,e,n,s){return t instanceof cs?function(i,r,o,a){if(!As(i.precondition,r))return o;const c=i.value.clone(),u=tc(i.fieldTransforms,a,r);return c.setAll(u),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof dt?function(i,r,o,a){if(!As(i.precondition,r))return o;const c=tc(i.fieldTransforms,a,r),u=r.data;return u.setAll(Ol(i)),u.setAll(c),r.convertToFoundDocument(r.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(l=>l.field))}(t,e,n,s):function(i,r,o){return As(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function Bg(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=Cl(s.transform,i||null);r!=null&&(n===null&&(n=Te.empty()),n.set(s.field,r))}return n||null}function Za(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Yt(n,s,(i,r)=>xg(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class cs extends Si{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class dt extends Si{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Ol(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function ec(t,e,n){const s=new Map;$(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,Fg(o,a,n[i]))}return s}function tc(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,Ug(r,o,e))}return s}class ko extends Si{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jg extends Si{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W,P;function zg(t){switch(t){default:return D();case m.CANCELLED:case m.UNKNOWN:case m.DEADLINE_EXCEEDED:case m.RESOURCE_EXHAUSTED:case m.INTERNAL:case m.UNAVAILABLE:case m.UNAUTHENTICATED:return!1;case m.INVALID_ARGUMENT:case m.NOT_FOUND:case m.ALREADY_EXISTS:case m.PERMISSION_DENIED:case m.FAILED_PRECONDITION:case m.ABORTED:case m.OUT_OF_RANGE:case m.UNIMPLEMENTED:case m.DATA_LOSS:return!0}}function Ml(t){if(t===void 0)return rt("GRPC error has no .code"),m.UNKNOWN;switch(t){case W.OK:return m.OK;case W.CANCELLED:return m.CANCELLED;case W.UNKNOWN:return m.UNKNOWN;case W.DEADLINE_EXCEEDED:return m.DEADLINE_EXCEEDED;case W.RESOURCE_EXHAUSTED:return m.RESOURCE_EXHAUSTED;case W.INTERNAL:return m.INTERNAL;case W.UNAVAILABLE:return m.UNAVAILABLE;case W.UNAUTHENTICATED:return m.UNAUTHENTICATED;case W.INVALID_ARGUMENT:return m.INVALID_ARGUMENT;case W.NOT_FOUND:return m.NOT_FOUND;case W.ALREADY_EXISTS:return m.ALREADY_EXISTS;case W.PERMISSION_DENIED:return m.PERMISSION_DENIED;case W.FAILED_PRECONDITION:return m.FAILED_PRECONDITION;case W.ABORTED:return m.ABORTED;case W.OUT_OF_RANGE:return m.OUT_OF_RANGE;case W.UNIMPLEMENTED:return m.UNIMPLEMENTED;case W.DATA_LOSS:return m.DATA_LOSS;default:return D()}}(P=W||(W={}))[P.OK=0]="OK",P[P.CANCELLED=1]="CANCELLED",P[P.UNKNOWN=2]="UNKNOWN",P[P.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",P[P.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",P[P.NOT_FOUND=5]="NOT_FOUND",P[P.ALREADY_EXISTS=6]="ALREADY_EXISTS",P[P.PERMISSION_DENIED=7]="PERMISSION_DENIED",P[P.UNAUTHENTICATED=16]="UNAUTHENTICATED",P[P.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",P[P.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",P[P.ABORTED=10]="ABORTED",P[P.OUT_OF_RANGE=11]="OUT_OF_RANGE",P[P.UNIMPLEMENTED=12]="UNIMPLEMENTED",P[P.INTERNAL=13]="INTERNAL",P[P.UNAVAILABLE=14]="UNAVAILABLE",P[P.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Mt(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return ml(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg=new ee(T.comparator);function Qe(){return Hg}const Ll=new ee(T.comparator);function In(...t){let e=Ll;for(const n of t)e=e.insert(n.key,n);return e}function Pl(t){let e=Ll;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function yt(){return Dn()}function Ul(){return Dn()}function Dn(){return new hn(t=>t.toString(),(t,e)=>t.isEqual(e))}const Kg=new ee(T.comparator),Gg=new Z(T.comparator);function L(...t){let e=Gg;for(const n of t)e=e.add(n);return e}const Wg=new Z(F);function Fl(){return Wg}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n){const s=new Map;return s.set(e,us.createSynthesizedTargetChangeForCurrentChange(e,n)),new ki(M.min(),s,Fl(),Qe(),L())}}class us{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n){return new us(le.EMPTY_BYTE_STRING,n,L(),L(),L())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,n,s,i){this.gt=e,this.removedTargetIds=n,this.key=s,this.yt=i}}class xl{constructor(e,n){this.targetId=e,this.It=n}}class $l{constructor(e,n,s=le.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class nc{constructor(){this.Tt=0,this.Et=ic(),this.At=le.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=L(),n=L(),s=L();return this.Et.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:D()}}),new us(this.At,this.Rt,e,n,s)}Dt(){this.bt=!1,this.Et=ic()}Ct(e,n){this.bt=!0,this.Et=this.Et.insert(e,n)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Ot(){this.bt=!0,this.Rt=!0}}class Qg{constructor(e){this.Mt=e,this.Ft=new Map,this.$t=Qe(),this.Bt=sc(),this.Lt=new Z(F)}Ut(e){for(const n of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(n,e.yt):this.Kt(n,e.key,e.yt);for(const n of e.removedTargetIds)this.Kt(n,e.key,e.yt)}Gt(e){this.forEachTarget(e,n=>{const s=this.Qt(n);switch(e.state){case 0:this.jt(n)&&s.Vt(e.resumeToken);break;case 1:s.kt(),s.Pt||s.Dt(),s.Vt(e.resumeToken);break;case 2:s.kt(),s.Pt||this.removeTarget(n);break;case 3:this.jt(n)&&(s.Ot(),s.Vt(e.resumeToken));break;case 4:this.jt(n)&&(this.Wt(n),s.Vt(e.resumeToken));break;default:D()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ft.forEach((s,i)=>{this.jt(i)&&n(i)})}zt(e){const n=e.targetId,s=e.It.count,i=this.Ht(n);if(i){const r=i.target;if(kr(r))if(s===0){const o=new T(r.path);this.Kt(n,o,ae.newNoDocument(o,M.min()))}else $(s===1);else this.Jt(n)!==s&&(this.Wt(n),this.Lt=this.Lt.add(n))}}Yt(e){const n=new Map;this.Ft.forEach((r,o)=>{const a=this.Ht(o);if(a){if(r.current&&kr(a.target)){const c=new T(a.target.path);this.$t.get(c)!==null||this.Xt(o,c)||this.Kt(o,c,ae.newNoDocument(c,e))}r.vt&&(n.set(o,r.St()),r.Dt())}});let s=L();this.Bt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Ht(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.$t.forEach((r,o)=>o.setReadTime(e));const i=new ki(e,n,this.Lt,this.$t,s);return this.$t=Qe(),this.Bt=sc(),this.Lt=new Z(F),i}qt(e,n){if(!this.jt(e))return;const s=this.Xt(e,n.key)?2:0;this.Qt(e).Ct(n.key,s),this.$t=this.$t.insert(n.key,n),this.Bt=this.Bt.insert(n.key,this.Zt(n.key).add(e))}Kt(e,n,s){if(!this.jt(e))return;const i=this.Qt(e);this.Xt(e,n)?i.Ct(n,1):i.xt(n),this.Bt=this.Bt.insert(n,this.Zt(n).delete(e)),s&&(this.$t=this.$t.insert(n,s))}removeTarget(e){this.Ft.delete(e)}Jt(e){const n=this.Qt(e).St();return this.Mt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let n=this.Ft.get(e);return n||(n=new nc,this.Ft.set(e,n)),n}Zt(e){let n=this.Bt.get(e);return n||(n=new Z(F),this.Bt=this.Bt.insert(e,n)),n}jt(e){const n=this.Ht(e)!==null;return n||E("WatchChangeAggregator","Detected inactive target",e),n}Ht(e){const n=this.Ft.get(e);return n&&n.Pt?null:this.Mt.te(e)}Wt(e){this.Ft.set(e,new nc),this.Mt.getRemoteKeysForTarget(e).forEach(n=>{this.Kt(e,n,null)})}Xt(e,n){return this.Mt.getRemoteKeysForTarget(e).has(n)}}function sc(){return new ee(T.comparator)}function ic(){return new ee(T.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Yg=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Jg{constructor(e,n){this.databaseId=e,this.dt=n}}function Zs(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Vl(t,e){return t.dt?e.toBase64():e.toUint8Array()}function Zg(t,e){return Zs(t,e.toTimestamp())}function Ge(t){return $(!!t),M.fromTimestamp(function(e){const n=at(e);return new J(n.seconds,n.nanos)}(t))}function Co(t,e){return function(n){return new q(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Bl(t){const e=q.fromString(t);return $(zl(e)),e}function Ar(t,e){return Co(t.databaseId,e.path)}function tr(t,e){const n=Bl(e);if(n.get(1)!==t.databaseId.projectId)throw new I(m.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new I(m.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new T(jl(n))}function Dr(t,e){return Co(t.databaseId,e)}function em(t){const e=Bl(t);return e.length===4?q.emptyPath():jl(e)}function Nr(t){return new q(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function jl(t){return $(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function rc(t,e,n){return{name:Ar(t,e),fields:n.value.mapValue.fields}}function tm(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:D()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,u){return c.dt?($(u===void 0||typeof u=="string"),le.fromBase64String(u||"")):($(u===void 0||u instanceof Uint8Array),le.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?m.UNKNOWN:Ml(c.code);return new I(u,c.message||"")}(o);n=new $l(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=tr(t,s.document.name),r=Ge(s.document.updateTime),o=new Te({mapValue:{fields:s.document.fields}}),a=ae.newFoundDocument(i,r,o),c=s.targetIds||[],u=s.removedTargetIds||[];n=new Ds(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=tr(t,s.document),r=s.readTime?Ge(s.readTime):M.min(),o=ae.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Ds([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=tr(t,s.document),r=s.removedTargetIds||[];n=new Ds([],r,i,null)}else{if(!("filter"in e))return D();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new qg(i),o=s.targetId;n=new xl(o,r)}}return n}function nm(t,e){let n;if(e instanceof cs)n={update:rc(t,e.key,e.value)};else if(e instanceof ko)n={delete:Ar(t,e.key)};else if(e instanceof dt)n={update:rc(t,e.key,e.data),updateMask:dm(e.fieldMask)};else{if(!(e instanceof jg))return D();n={verify:Ar(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof Ys)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof jn)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof qn)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Js)return{fieldPath:r.field.canonicalString(),increment:o._t};throw D()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Zg(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:D()}(t,e.precondition)),n}function sm(t,e){return t&&t.length>0?($(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?Ge(s.updateTime):Ge(i);return r.isEqual(M.min())&&(r=Ge(i)),new $g(r,s.transformResults||[])}(n,e))):[]}function im(t,e){return{documents:[Dr(t,e.path)]}}function rm(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Dr(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Dr(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length===0)return;const u=c.map(l=>function(h){if(h.op==="=="){if(Wa(h.value))return{unaryFilter:{field:Ut(h.field),op:"IS_NAN"}};if(Ga(h.value))return{unaryFilter:{field:Ut(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Wa(h.value))return{unaryFilter:{field:Ut(h.field),op:"IS_NOT_NAN"}};if(Ga(h.value))return{unaryFilter:{field:Ut(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ut(h.field),op:um(h.op),value:h.value}}}(l));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:Ut(l.field),direction:cm(l.dir)}}(u))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(c,u){return c.dt||Ii(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function om(t){let e=em(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){$(s===1);const l=n.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let r=[];n.where&&(r=ql(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new zt($t(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Ii(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new Xs(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new Xs(d,h)}(n.endAt)),Dg(e,i,o,r,a,"F",c,u)}function am(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return D()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function ql(t){return t?t.unaryFilter!==void 0?[hm(t)]:t.fieldFilter!==void 0?[lm(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>ql(e)).reduce((e,n)=>e.concat(n)):D():[]}function cm(t){return Xg[t]}function um(t){return Yg[t]}function Ut(t){return{fieldPath:t.canonicalString()}}function $t(t){return fe.fromServerFormat(t.fieldPath)}function lm(t){return be.create($t(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return D()}}(t.fieldFilter.op),t.fieldFilter.value)}function hm(t){switch(t.unaryFilter.op){case"IS_NAN":const e=$t(t.unaryFilter.field);return be.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=$t(t.unaryFilter.field);return be.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=$t(t.unaryFilter.field);return be.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=$t(t.unaryFilter.field);return be.create(i,"!=",{nullValue:"NULL_VALUE"});default:return D()}}function dm(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function zl(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&Vg(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=An(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=An(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Ul();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const c=Rl(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(M.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),L())}isEqual(e){return this.batchId===e.batchId&&Yt(this.mutations,e.mutations,(n,s)=>Za(n,s))&&Yt(this.baseMutations,e.baseMutations,(n,s)=>Za(n,s))}}class Ao{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){$(e.mutations.length===s.length);let i=Kg;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Ao(e,n,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,n,s,i,r=M.min(),o=M.min(),a=le.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new wt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new wt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e){this.ne=e}}function mm(t){const e=om({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Og(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(){this.ze=new vm}addToCollectionParentIndex(e,n){return this.ze.add(n),y.resolve()}getCollectionParents(e,n){return y.resolve(this.ze.getEntries(n))}addFieldIndex(e,n){return y.resolve()}deleteFieldIndex(e,n){return y.resolve()}getDocumentsMatchingTarget(e,n){return y.resolve(null)}getIndexType(e,n){return y.resolve(0)}getFieldIndexes(e,n){return y.resolve([])}getNextCollectionGroupToUpdate(e){return y.resolve(null)}getMinOffset(e,n){return y.resolve(ot.min())}getMinOffsetFromCollectionGroup(e,n){return y.resolve(ot.min())}updateCollectionGroup(e,n,s){return y.resolve()}updateIndexEntries(e,n){return y.resolve()}}class vm{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new Z(q.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new Z(q.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new tn(0)}static Rn(){return new tn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(){this.changes=new hn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ae.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?y.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.getBaseDocument(e,n,s))).next(i=>(s!==null&&An(s.mutation,i,Ae.empty(),J.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,L()).next(()=>s))}getLocalViewOfDocuments(e,n,s=L()){const i=yt();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=In();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=yt();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,L()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=Qe();const o=Dn(),a=Dn();return n.forEach((c,u)=>{const l=s.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof dt)?r=r.insert(u.key,u):l!==void 0&&(o.set(u.key,l.mutation.getFieldMask()),An(l.mutation,u,l.mutation.getFieldMask(),J.now()))}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new _m(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Dn();let i=new ee((o,a)=>o-a),r=L();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||Ae.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(i.get(a.batchId)||L()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=Ul();l.forEach(d=>{if(!r.has(d)){const f=Rl(n.get(d),s.get(d));f!==null&&h.set(d,f),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return y.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return T.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Rg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):y.resolve(yt());let a=-1,c=r;return o.next(u=>y.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(l)?y.resolve():this.getBaseDocument(e,l,h).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,r)).next(()=>this.computeViews(e,c,u,L())).next(l=>({batchId:a,changes:Pl(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new T(n)).next(s=>{let i=In();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=In();return this.indexManager.getCollectionParents(e,i).next(o=>y.forEach(o,a=>{const c=function(u,l){return new as(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(u=>{u.forEach((l,h)=>{r=r.insert(l,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(r=>(i=r,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(r=>{r.forEach((a,c)=>{const u=c.getKey();i.get(u)===null&&(i=i.insert(u,ae.newInvalidDocument(u)))});let o=In();return i.forEach((a,c)=>{const u=r.get(a);u!==void 0&&An(u.mutation,c,Ae.empty(),J.now()),So(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):y.resolve(ae.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,n){return y.resolve(this.Jn.get(n))}saveBundleMetadata(e,n){var s;return this.Jn.set(n.id,{id:(s=n).id,version:s.version,createTime:Ge(s.createTime)}),y.resolve()}getNamedQuery(e,n){return y.resolve(this.Yn.get(n))}saveNamedQuery(e,n){return this.Yn.set(n.name,function(s){return{name:s.name,query:mm(s.bundledQuery),readTime:Ge(s.readTime)}}(n)),y.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(){this.overlays=new ee(T.comparator),this.Xn=new Map}getOverlay(e,n){return y.resolve(this.overlays.get(n))}getOverlays(e,n){const s=yt();return y.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ie(e,n,r)}),y.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.Xn.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.Xn.delete(s)),y.resolve()}getOverlaysForCollection(e,n,s){const i=yt(),r=n.length+1,o=new T(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return y.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new ee((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=r.get(u.largestBatchId);l===null&&(l=yt(),r=r.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=yt(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return y.resolve(a)}ie(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.Xn.get(i.largestBatchId).delete(s.key);this.Xn.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new pm(n,s));let r=this.Xn.get(n);r===void 0&&(r=L(),this.Xn.set(n,r)),this.Xn.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(){this.Zn=new Z(te.ts),this.es=new Z(te.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const s=new te(e,n);this.Zn=this.Zn.add(s),this.es=this.es.add(s)}ss(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.rs(new te(e,n))}os(e,n){e.forEach(s=>this.removeReference(s,n))}us(e){const n=new T(new q([])),s=new te(n,e),i=new te(n,e+1),r=[];return this.es.forEachInRange([s,i],o=>{this.rs(o),r.push(o.key)}),r}cs(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new T(new q([])),s=new te(n,e),i=new te(n,e+1);let r=L();return this.es.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new te(e,0),s=this.Zn.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class te{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return T.comparator(e.key,n.key)||F(e.ls,n.ls)}static ns(e,n){return F(e.ls,n.ls)||T.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new Z(te.ts)}checkEmpty(e){return y.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new fm(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.ds=this.ds.add(new te(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return y.resolve(o)}lookupMutationBatch(e,n){return y.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ws(s),r=i<0?0:i;return y.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return y.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(e){return y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new te(n,0),i=new te(n,Number.POSITIVE_INFINITY),r=[];return this.ds.forEachInRange([s,i],o=>{const a=this._s(o.ls);r.push(a)}),y.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Z(F);return n.forEach(i=>{const r=new te(i,0),o=new te(i,Number.POSITIVE_INFINITY);this.ds.forEachInRange([r,o],a=>{s=s.add(a.ls)})}),y.resolve(this.gs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;T.isDocumentKey(r)||(r=r.child(""));const o=new te(new T(r),0);let a=new Z(F);return this.ds.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.ls)),!0)},o),y.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(s=>{const i=this._s(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){$(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ds;return y.forEach(n.mutations,i=>{const r=new te(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ds=s})}In(e){}containsKey(e,n){const s=new te(n,0),i=this.ds.firstAfterOrEqual(s);return y.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,y.resolve()}ys(e,n){return this.ws(e)}ws(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}_s(e){const n=this.ws(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e){this.ps=e,this.docs=new ee(T.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.ps(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return y.resolve(s?s.document.mutableCopy():ae.newInvalidDocument(n))}getEntries(e,n){let s=Qe();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():ae.newInvalidDocument(i))}),y.resolve(s)}getAllFromCollection(e,n,s){let i=Qe();const r=new T(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||dg(hg(c),s)<=0||(i=i.insert(c.key,c.mutableCopy()))}return y.resolve(i)}getAllFromCollectionGroup(e,n,s,i){D()}Is(e,n){return y.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new km(this)}getSize(e){return y.resolve(this.size)}}class km extends wm{constructor(e){super(),this.zn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.zn.addEntry(e,i)):this.zn.removeEntry(s)}),y.waitFor(n)}getFromCache(e,n){return this.zn.getEntry(e,n)}getAllFromCache(e,n){return this.zn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e){this.persistence=e,this.Ts=new hn(n=>Io(n),To),this.lastRemoteSnapshotVersion=M.min(),this.highestTargetId=0,this.Es=0,this.As=new Do,this.targetCount=0,this.Rs=tn.An()}forEachTarget(e,n){return this.Ts.forEach((s,i)=>n(i)),y.resolve()}getLastRemoteSnapshotVersion(e){return y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return y.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),y.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Es&&(this.Es=n),y.resolve()}vn(e){this.Ts.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new tn(n),this.highestTargetId=n),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,n){return this.vn(n),this.targetCount+=1,y.resolve()}updateTargetData(e,n){return this.vn(n),y.resolve()}removeTargetData(e,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,y.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Ts.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),y.waitFor(r).next(()=>i)}getTargetCount(e){return y.resolve(this.targetCount)}getTargetData(e,n){const s=this.Ts.get(n)||null;return y.resolve(s)}addMatchingKeys(e,n,s){return this.As.ss(n,s),y.resolve()}removeMatchingKeys(e,n,s){this.As.os(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),y.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.As.us(n),y.resolve()}getMatchingKeysForTargetId(e,n){const s=this.As.hs(n);return y.resolve(s)}containsKey(e,n){return y.resolve(this.As.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e,n){this.bs={},this.overlays={},this.Ps=new _o(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new Cm(this),this.indexManager=new ym,this.remoteDocumentCache=function(s){return new Sm(s)}(s=>this.referenceDelegate.Ss(s)),this.wt=new gm(n),this.Ds=new Im(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Tm,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.bs[e.toKey()];return s||(s=new bm(n,this.referenceDelegate),this.bs[e.toKey()]=s),s}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,n,s){E("MemoryPersistence","Starting transaction:",e);const i=new Dm(this.Ps.next());return this.referenceDelegate.Cs(),s(i).next(r=>this.referenceDelegate.xs(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ns(e,n){return y.or(Object.values(this.bs).map(s=>()=>s.containsKey(e,n)))}}class Dm extends pg{constructor(e){super(),this.currentSequenceNumber=e}}class No{constructor(e){this.persistence=e,this.ks=new Do,this.Os=null}static Ms(e){return new No(e)}get Fs(){if(this.Os)return this.Os;throw D()}addReference(e,n,s){return this.ks.addReference(s,n),this.Fs.delete(s.toString()),y.resolve()}removeReference(e,n,s){return this.ks.removeReference(s,n),this.Fs.add(s.toString()),y.resolve()}markPotentiallyOrphaned(e,n){return this.Fs.add(n.toString()),y.resolve()}removeTarget(e,n){this.ks.us(n.targetId).forEach(i=>this.Fs.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Fs.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Cs(){this.Os=new Set}xs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return y.forEach(this.Fs,s=>{const i=T.fromPath(s);return this.$s(e,i).next(r=>{r||n.removeEntry(i,M.min())})}).next(()=>(this.Os=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(s=>{s?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(e){return 0}$s(e,n){return y.or([()=>y.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ns(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Pi=s,this.vi=i}static Vi(e,n){let s=L(),i=L();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Ro(e,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(){this.Si=!1}initialize(e,n){this.Di=e,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(e,n,s,i){return this.Ci(e,n).next(r=>r||this.xi(e,n,i,s)).next(r=>r||this.Ni(e,n))}Ci(e,n){return y.resolve(null)}xi(e,n,s,i){return Ng(n)||i.isEqual(M.min())?this.Ni(e,n):this.Di.getDocuments(e,s).next(r=>{const o=this.ki(n,r);return this.Oi(n,o,s,i)?this.Ni(e,n):(ja()<=U.DEBUG&&E("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Cr(n)),this.Mi(e,o,n,lg(i,-1)))})}ki(e,n){let s=new Z(bl(e));return n.forEach((i,r)=>{So(e,r)&&(s=s.add(r))}),s}Oi(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Ni(e,n){return ja()<=U.DEBUG&&E("QueryEngine","Using full collection scan to execute query:",Cr(n)),this.Di.getDocumentsMatchingQuery(e,n,ot.min())}Mi(e,n,s,i){return this.Di.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e,n,s,i){this.persistence=e,this.Fi=n,this.wt=i,this.$i=new ee(F),this.Bi=new hn(r=>Io(r),To),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(s)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Em(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.$i))}}function Om(t,e,n,s){return new Rm(t,e,n,s)}async function Hl(t,e){const n=N(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.qi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=L();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of r){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({Ki:u,removedBatchIds:o,addedBatchIds:a}))})})}function Mm(t,e){const n=N(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Ui.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=y.resolve();return h.forEach(f=>{d=d.next(()=>u.getEntry(a,f)).next(p=>{const v=c.docVersions.get(f);$(v!==null),p.version.compareTo(v)<0&&(l.applyToRemoteDocument(p,c),p.isValidDocument()&&(p.setReadTime(c.commitVersion),u.addEntry(p)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=L();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function Kl(t){const e=N(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Vs.getLastRemoteSnapshotVersion(n))}function Lm(t,e){const n=N(t),s=e.snapshotVersion;let i=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Ui.newChangeBuffer({trackRemovals:!0});i=n.$i;const a=[];e.targetChanges.forEach((l,h)=>{const d=i.get(h);if(!d)return;a.push(n.Vs.removeMatchingKeys(r,l.removedDocuments,h).next(()=>n.Vs.addMatchingKeys(r,l.addedDocuments,h)));let f=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(le.EMPTY_BYTE_STRING,M.min()).withLastLimboFreeSnapshotVersion(M.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,s)),i=i.insert(h,f),function(p,v,g){return p.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:g.addedDocuments.size+g.modifiedDocuments.size+g.removedDocuments.size>0}(d,f,l)&&a.push(n.Vs.updateTargetData(r,f))});let c=Qe(),u=L();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,l))}),a.push(Pm(r,o,e.documentUpdates).next(l=>{c=l.Gi,u=l.Qi})),!s.isEqual(M.min())){const l=n.Vs.getLastRemoteSnapshotVersion(r).next(h=>n.Vs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(l)}return y.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,c,u)).next(()=>c)}).then(r=>(n.$i=i,r))}function Pm(t,e,n){let s=L(),i=L();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=Qe();return n.forEach((a,c)=>{const u=r.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(M.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):E("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Gi:o,Qi:i}})}function Um(t,e){const n=N(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Fm(t,e){const n=N(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Vs.getTargetData(s,e).next(r=>r?(i=r,y.resolve(i)):n.Vs.allocateTargetId(s).next(o=>(i=new wt(e,o,0,s.currentSequenceNumber),n.Vs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.$i.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.$i=n.$i.insert(s.targetId,s),n.Bi.set(e,s.targetId)),s})}async function Rr(t,e,n){const s=N(t),i=s.$i.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!os(o))throw o;E("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.$i=s.$i.remove(e),s.Bi.delete(i.target)}function oc(t,e,n){const s=N(t);let i=M.min(),r=L();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=N(a),h=l.Bi.get(u);return h!==void 0?y.resolve(l.$i.get(h)):l.Vs.getTargetData(c,u)}(s,o,At(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Vs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Fi.getDocumentsMatchingQuery(o,e,n?i:M.min(),n?r:L())).next(a=>(xm(s,Mg(e),a),{documents:a,ji:r})))}function xm(t,e,n){let s=M.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Li.set(e,s)}class ac{constructor(){this.activeTargetIds=Fl()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class $m{constructor(){this.Fr=new ac,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,n,s){this.$r[e]=n}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new ac,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{Br(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){E("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){E("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.so=n+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,n,s,i,r){const o=this.oo(e,n);E("RestConnection","Sending: ",o,s);const a={};return this.uo(a,i,r),this.co(e,o,a,s).then(c=>(E("RestConnection","Received: ",c),c),c=>{throw qa("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}ao(e,n,s,i,r,o){return this.ro(e,n,s,i,r)}uo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+ln,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}oo(e,n){const s=Bm[e];return`${this.so}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,s,i){return new Promise((r,o)=>{const a=new eg;a.listenOnce(Yp.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case er.NO_ERROR:const u=a.getResponseJson();E("Connection","XHR received:",JSON.stringify(u)),r(u);break;case er.TIMEOUT:E("Connection",'RPC "'+e+'" timed out'),o(new I(m.DEADLINE_EXCEEDED,"Request time out"));break;case er.HTTP_ERROR:const l=a.getStatus();if(E("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(f){const p=f.toLowerCase().replace(/_/g,"-");return Object.values(m).indexOf(p)>=0?p:m.UNKNOWN}(h.status);o(new I(d,h.message))}else o(new I(m.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new I(m.UNAVAILABLE,"Connection failed."));break;default:D()}}finally{E("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(i);a.send(n,"POST",c,s,15)})}ho(e,n,s){const i=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=Qp(),o=Xp(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Zp({})),this.uo(a.initMessageHeaders,n,s),ru()||au()||Dd()||cu()||Nd()||ou()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=i.join("");E("Connection","Creating WebChannel: "+c,a);const u=r.createWebChannel(c,a);let l=!1,h=!1;const d=new jm({jr:p=>{h?E("Connection","Not sending because WebChannel is closed:",p):(l||(E("Connection","Opening WebChannel transport."),u.open(),l=!0),E("Connection","WebChannel sending:",p),u.send(p))},Wr:()=>u.close()}),f=(p,v,g)=>{p.listen(v,b=>{try{g(b)}catch(O){setTimeout(()=>{throw O},0)}})};return f(u,Es.EventType.OPEN,()=>{h||E("Connection","WebChannel transport opened.")}),f(u,Es.EventType.CLOSE,()=>{h||(h=!0,E("Connection","WebChannel transport closed"),d.eo())}),f(u,Es.EventType.ERROR,p=>{h||(h=!0,qa("Connection","WebChannel transport errored:",p),d.eo(new I(m.UNAVAILABLE,"The operation could not be completed")))}),f(u,Es.EventType.MESSAGE,p=>{var v;if(!h){const g=p.data[0];$(!!g);const b=g,O=b.error||((v=b[0])===null||v===void 0?void 0:v.error);if(O){E("Connection","WebChannel received error:",O);const R=O.status;let Y=function(De){const de=W[De];if(de!==void 0)return Ml(de)}(R),Ce=O.message;Y===void 0&&(Y=m.INTERNAL,Ce="Unknown error status: "+R+" with message "+O.message),h=!0,d.eo(new I(Y,Ce)),u.close()}else E("Connection","WebChannel received:",g),d.no(g)}}),f(o,Jp.STAT_EVENT,p=>{p.stat===Va.PROXY?E("Connection","Detected buffering proxy"):p.stat===Va.NOPROXY&&E("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.Zr()},0),d}}function nr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(t){return new Jg(t,!0)}class Gl{constructor(e,n,s=1e3,i=1.5,r=6e4){this.js=e,this.timerId=n,this.lo=s,this.fo=i,this._o=r,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const n=Math.floor(this.wo+this.To()),s=Math.max(0,Date.now()-this.yo),i=Math.max(0,n-s);i>0&&E("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,i,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,n,s,i,r,o,a,c){this.js=e,this.Ao=s,this.Ro=i,this.bo=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new Gl(e,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Oo()))}Mo(e){this.Fo(),this.stream.send(e)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():n&&n.code===m.RESOURCE_EXHAUSTED?(rt(n.toString()),rt("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===m.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Po===n&&this.Uo(s,i)},s=>{e(()=>{const i=new I(m.UNKNOWN,"Fetching auth token failed: "+s.message);return this.qo(i)})})}Uo(e,n){const s=this.Lo(this.Po);this.stream=this.Ko(e,n),this.stream.zr(()=>{s(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(i=>{s(()=>this.qo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return E("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return n=>{this.js.enqueueAndForget(()=>this.Po===e?n():(E("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class zm extends Wl{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.wt=r}Ko(e,n){return this.bo.ho("Listen",e,n)}onMessage(e){this.So.reset();const n=tm(this.wt,e),s=function(i){if(!("targetChange"in i))return M.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?M.min():r.readTime?Ge(r.readTime):M.min()}(e);return this.listener.Go(n,s)}Qo(e){const n={};n.database=Nr(this.wt),n.addTarget=function(i,r){let o;const a=r.target;return o=kr(a)?{documents:im(i,a)}:{query:rm(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Vl(i,r.resumeToken):r.snapshotVersion.compareTo(M.min())>0&&(o.readTime=Zs(i,r.snapshotVersion.toTimestamp())),o}(this.wt,e);const s=am(this.wt,e);s&&(n.labels=s),this.Mo(n)}jo(e){const n={};n.database=Nr(this.wt),n.removeTarget=e,this.Mo(n)}}class Hm extends Wl{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.wt=r,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(e,n){return this.bo.ho("Write",e,n)}onMessage(e){if($(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const n=sm(e.writeResults,e.commitTime),s=Ge(e.commitTime);return this.listener.Jo(s,n)}return $(!e.writeResults||e.writeResults.length===0),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=Nr(this.wt),this.Mo(e)}Ho(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>nm(this.wt,s))};this.Mo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=s,this.wt=i,this.Zo=!1}tu(){if(this.Zo)throw new I(m.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,n,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.bo.ro(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new I(m.UNKNOWN,i.toString())})}ao(e,n,s,i){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.bo.ao(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new I(m.UNKNOWN,r.toString())})}terminate(){this.Zo=!0}}class Gm{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(rt(n),this.su=!1):E("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=r,this.du.Br(o=>{s.enqueueAndForget(async()=>{Lt(this)&&(E("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=N(a);c.lu.add(4),await ls(c),c._u.set("Unknown"),c.lu.delete(4),await Ai(c)}(this))})}),this._u=new Gm(s,i)}}async function Ai(t){if(Lt(t))for(const e of t.fu)await e(!0)}async function ls(t){for(const e of t.fu)await e(!1)}function Ql(t,e){const n=N(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),Lo(n)?Mo(n):dn(n).Co()&&Oo(n,e))}function Xl(t,e){const n=N(t),s=dn(n);n.hu.delete(e),s.Co()&&Yl(n,e),n.hu.size===0&&(s.Co()?s.ko():Lt(n)&&n._u.set("Unknown"))}function Oo(t,e){t.wu.Nt(e.targetId),dn(t).Qo(e)}function Yl(t,e){t.wu.Nt(e),dn(t).jo(e)}function Mo(t){t.wu=new Qg({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),dn(t).start(),t._u.iu()}function Lo(t){return Lt(t)&&!dn(t).Do()&&t.hu.size>0}function Lt(t){return N(t).lu.size===0}function Jl(t){t.wu=void 0}async function Qm(t){t.hu.forEach((e,n)=>{Oo(t,e)})}async function Xm(t,e){Jl(t),Lo(t)?(t._u.uu(e),Mo(t)):t._u.set("Unknown")}async function Ym(t,e,n){if(t._u.set("Online"),e instanceof $l&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.hu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.hu.delete(o),s.wu.removeTarget(o))}(t,e)}catch(s){E("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ei(t,s)}else if(e instanceof Ds?t.wu.Ut(e):e instanceof xl?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(M.min()))try{const s=await Kl(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.wu.Yt(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.hu.get(c);u&&i.hu.set(c,u.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const c=i.hu.get(a);if(!c)return;i.hu.set(a,c.withResumeToken(le.EMPTY_BYTE_STRING,c.snapshotVersion)),Yl(i,a);const u=new wt(c.target,a,1,c.sequenceNumber);Oo(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){E("RemoteStore","Failed to raise snapshot:",s),await ei(t,s)}}async function ei(t,e,n){if(!os(e))throw e;t.lu.add(1),await ls(t),t._u.set("Offline"),n||(n=()=>Kl(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{E("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await Ai(t)})}function Zl(t,e){return e().catch(n=>ei(t,n,e))}async function Di(t){const e=N(t),n=ct(e);let s=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;Jm(e);)try{const i=await Um(e.localStore,s);if(i===null){e.au.length===0&&n.ko();break}s=i.batchId,Zm(e,i)}catch(i){await ei(e,i)}eh(e)&&th(e)}function Jm(t){return Lt(t)&&t.au.length<10}function Zm(t,e){t.au.push(e);const n=ct(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function eh(t){return Lt(t)&&!ct(t).Do()&&t.au.length>0}function th(t){ct(t).start()}async function ey(t){ct(t).Xo()}async function ty(t){const e=ct(t);for(const n of t.au)e.Ho(n.mutations)}async function ny(t,e,n){const s=t.au.shift(),i=Ao.from(s,e,n);await Zl(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Di(t)}async function sy(t,e){e&&ct(t).zo&&await async function(n,s){if(i=s.code,zg(i)&&i!==m.ABORTED){const r=n.au.shift();ct(n).No(),await Zl(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Di(n)}var i}(t,e),eh(t)&&th(t)}async function uc(t,e){const n=N(t);n.asyncQueue.verifyOperationInProgress(),E("RemoteStore","RemoteStore received new credentials");const s=Lt(n);n.lu.add(3),await ls(n),s&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await Ai(n)}async function iy(t,e){const n=N(t);e?(n.lu.delete(2),await Ai(n)):e||(n.lu.add(2),await ls(n),n._u.set("Unknown"))}function dn(t){return t.mu||(t.mu=function(e,n,s){const i=N(e);return i.tu(),new zm(n,i.bo,i.authCredentials,i.appCheckCredentials,i.wt,s)}(t.datastore,t.asyncQueue,{zr:Qm.bind(null,t),Jr:Xm.bind(null,t),Go:Ym.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),Lo(t)?Mo(t):t._u.set("Unknown")):(await t.mu.stop(),Jl(t))})),t.mu}function ct(t){return t.gu||(t.gu=function(e,n,s){const i=N(e);return i.tu(),new Hm(n,i.bo,i.authCredentials,i.appCheckCredentials,i.wt,s)}(t.datastore,t.asyncQueue,{zr:ey.bind(null,t),Jr:sy.bind(null,t),Yo:ty.bind(null,t),Jo:ny.bind(null,t)}),t.fu.push(async e=>{e?(t.gu.No(),await Di(t)):(await t.gu.stop(),t.au.length>0&&(E("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))})),t.gu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new vt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new Po(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new I(m.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Uo(t,e){if(rt("AsyncQueue",`${e}: ${t}`),os(t))return new I(m.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.comparator=e?(n,s)=>e(n,s)||T.comparator(n.key,s.key):(n,s)=>T.comparator(n.key,s.key),this.keyedMap=In(),this.sortedSet=new ee(this.comparator)}static emptySet(e){return new Ht(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ht)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Ht;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(){this.yu=new ee(T.comparator)}track(e){const n=e.doc.key,s=this.yu.get(n);s?e.type!==0&&s.type===3?this.yu=this.yu.insert(n,e):e.type===3&&s.type!==1?this.yu=this.yu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.yu=this.yu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.yu=this.yu.remove(n):e.type===1&&s.type===2?this.yu=this.yu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):D():this.yu=this.yu.insert(n,e)}pu(){const e=[];return this.yu.inorderTraversal((n,s)=>{e.push(s)}),e}}class nn{constructor(e,n,s,i,r,o,a,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,s,i){const r=[];return n.forEach(o=>{r.push({type:0,doc:o})}),new nn(e,n,Ht.emptySet(n),r,s,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ti(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(){this.Iu=void 0,this.listeners=[]}}class oy{constructor(){this.queries=new hn(e=>Tl(e),Ti),this.onlineState="Unknown",this.Tu=new Set}}async function ay(t,e){const n=N(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new ry),i)try{r.Iu=await n.onListen(s)}catch(o){const a=Uo(o,`Initialization of query '${Cr(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Eu(n.onlineState),r.Iu&&e.Au(r.Iu)&&Fo(n)}async function cy(t,e){const n=N(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function uy(t,e){const n=N(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Au(i)&&(s=!0);o.Iu=i}}s&&Fo(n)}function ly(t,e,n){const s=N(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Fo(t){t.Tu.forEach(e=>{e.next()})}class hy{constructor(e,n,s){this.query=e,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=s||{}}Au(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new nn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),n=!0):this.Vu(e,this.onlineState)&&(this.Su(e),n=!0),this.Pu=e,n}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let n=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),n=!0),n}Vu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Du||!s)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(e){e=nn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e){this.key=e}}class sh{constructor(e){this.key=e}}class dy{constructor(e,n){this.query=e,this.Fu=n,this.$u=null,this.current=!1,this.Bu=L(),this.mutatedKeys=L(),this.Lu=bl(e),this.Uu=new Ht(this.Lu)}get qu(){return this.Fu}Ku(e,n){const s=n?n.Gu:new lc,i=n?n.Uu:this.Uu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,h)=>{const d=i.get(l),f=So(this.query,h)?h:null,p=!!d&&this.mutatedKeys.has(d.key),v=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let g=!1;d&&f?d.data.isEqual(f.data)?p!==v&&(s.track({type:3,doc:f}),g=!0):this.Qu(d,f)||(s.track({type:2,doc:f}),g=!0,(c&&this.Lu(f,c)>0||u&&this.Lu(f,u)<0)&&(a=!0)):!d&&f?(s.track({type:0,doc:f}),g=!0):d&&!f&&(s.track({type:1,doc:d}),g=!0,(c||u)&&(a=!0)),g&&(f?(o=o.add(f),r=v?r.add(l):r.delete(l)):(o=o.delete(l),r=r.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),r=r.delete(l.key),s.track({type:1,doc:l})}return{Uu:o,Gu:s,Oi:a,mutatedKeys:r}}Qu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const r=e.Gu.pu();r.sort((u,l)=>function(h,d){const f=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return D()}};return f(h)-f(d)}(u.type,l.type)||this.Lu(u.doc,l.doc)),this.ju(s);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,c=a!==this.$u;return this.$u=a,r.length!==0||c?{snapshot:new nn(this.query,e.Uu,i,r,e.mutatedKeys,a===0,c,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new lc,mutatedKeys:this.mutatedKeys,Oi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=L(),this.Uu.forEach(s=>{this.Hu(s.key)&&(this.Bu=this.Bu.add(s.key))});const n=[];return e.forEach(s=>{this.Bu.has(s)||n.push(new sh(s))}),this.Bu.forEach(s=>{e.has(s)||n.push(new nh(s))}),n}Ju(e){this.Fu=e.ji,this.Bu=L();const n=this.Ku(e.documents);return this.applyChanges(n,!0)}Yu(){return nn.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class fy{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class py{constructor(e){this.key=e,this.Xu=!1}}class gy{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new hn(a=>Tl(a),Ti),this.ec=new Map,this.nc=new Set,this.sc=new ee(T.comparator),this.ic=new Map,this.rc=new Do,this.oc={},this.uc=new Map,this.cc=tn.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function my(t,e){const n=ky(t);let s,i;const r=n.tc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.Yu();else{const o=await Fm(n.localStore,At(e));n.isPrimaryClient&&Ql(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await yy(n,e,s,a==="current")}return i}async function yy(t,e,n,s){t.hc=(l,h,d)=>async function(f,p,v,g){let b=p.view.Ku(v);b.Oi&&(b=await oc(f.localStore,p.query,!1).then(({documents:Y})=>p.view.Ku(Y,b)));const O=g&&g.targetChanges.get(p.targetId),R=p.view.applyChanges(b,f.isPrimaryClient,O);return dc(f,p.targetId,R.zu),R.snapshot}(t,l,h,d);const i=await oc(t.localStore,e,!0),r=new dy(e,i.ji),o=r.Ku(i.documents),a=us.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline"),c=r.applyChanges(o,t.isPrimaryClient,a);dc(t,n,c.zu);const u=new fy(e,n,r);return t.tc.set(e,u),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),c.snapshot}async function vy(t,e){const n=N(t),s=n.tc.get(e),i=n.ec.get(s.targetId);if(i.length>1)return n.ec.set(s.targetId,i.filter(r=>!Ti(r,e))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Rr(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Xl(n.remoteStore,s.targetId),Or(n,s.targetId)}).catch(rs)):(Or(n,s.targetId),await Rr(n.localStore,s.targetId,!0))}async function wy(t,e,n){const s=Cy(t);try{const i=await function(r,o){const a=N(r),c=J.now(),u=o.reduce((d,f)=>d.add(f.key),L());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=Qe(),p=L();return a.Ui.getEntries(d,u).next(v=>{f=v,f.forEach((g,b)=>{b.isValidDocument()||(p=p.add(g))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(v=>{l=v;const g=[];for(const b of o){const O=Bg(b,l.get(b.key).overlayedDocument);O!=null&&g.push(new dt(b.key,O,wl(O.value.mapValue),Ne.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,g,o)}).next(v=>{h=v;const g=v.applyToLocalDocumentSet(l,p);return a.documentOverlayCache.saveOverlays(d,v.batchId,g)})}).then(()=>({batchId:h.batchId,changes:Pl(l)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let c=r.oc[r.currentUser.toKey()];c||(c=new ee(F)),c=c.insert(o,a),r.oc[r.currentUser.toKey()]=c}(s,i.batchId,n),await hs(s,i.changes),await Di(s.remoteStore)}catch(i){const r=Uo(i,"Failed to persist write");n.reject(r)}}async function ih(t,e){const n=N(t);try{const s=await Lm(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.ic.get(r);o&&($(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Xu=!0:i.modifiedDocuments.size>0?$(o.Xu):i.removedDocuments.size>0&&($(o.Xu),o.Xu=!1))}),await hs(n,s,e)}catch(s){await rs(s)}}function hc(t,e,n){const s=N(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.tc.forEach((r,o)=>{const a=o.view.Eu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=N(r);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Eu(o)&&(c=!0)}),c&&Fo(a)}(s.eventManager,e),i.length&&s.Zu.Go(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function _y(t,e,n){const s=N(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.ic.get(e),r=i&&i.key;if(r){let o=new ee(T.comparator);o=o.insert(r,ae.newNoDocument(r,M.min()));const a=L().add(r),c=new ki(M.min(),new Map,new Z(F),o,a);await ih(s,c),s.sc=s.sc.remove(r),s.ic.delete(e),xo(s)}else await Rr(s.localStore,e,!1).then(()=>Or(s,e,n)).catch(rs)}async function Ey(t,e){const n=N(t),s=e.batch.batchId;try{const i=await Mm(n.localStore,e);oh(n,s,null),rh(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await hs(n,i)}catch(i){await rs(i)}}async function Iy(t,e,n){const s=N(t);try{const i=await function(r,o){const a=N(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>($(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,e);oh(s,e,n),rh(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await hs(s,i)}catch(i){await rs(i)}}function rh(t,e){(t.uc.get(e)||[]).forEach(n=>{n.resolve()}),t.uc.delete(e)}function oh(t,e,n){const s=N(t);let i=s.oc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.oc[s.currentUser.toKey()]=i}}function Or(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ec.get(e))t.tc.delete(s),n&&t.Zu.lc(s,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach(s=>{t.rc.containsKey(s)||ah(t,s)})}function ah(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);n!==null&&(Xl(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),xo(t))}function dc(t,e,n){for(const s of n)s instanceof nh?(t.rc.addReference(s.key,e),Ty(t,s)):s instanceof sh?(E("SyncEngine","Document no longer in limbo: "+s.key),t.rc.removeReference(s.key,e),t.rc.containsKey(s.key)||ah(t,s.key)):D()}function Ty(t,e){const n=e.key,s=n.path.canonicalString();t.sc.get(n)||t.nc.has(s)||(E("SyncEngine","New document in limbo: "+n),t.nc.add(s),xo(t))}function xo(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new T(q.fromString(e)),s=t.cc.next();t.ic.set(s,new py(n)),t.sc=t.sc.insert(n,s),Ql(t.remoteStore,new wt(At(bo(n.path)),s,2,_o.ot))}}async function hs(t,e,n){const s=N(t),i=[],r=[],o=[];s.tc.isEmpty()||(s.tc.forEach((a,c)=>{o.push(s.hc(c,e,n).then(u=>{if(u){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u.fromCache?"not-current":"current"),i.push(u);const l=Ro.Vi(c.targetId,u);r.push(l)}}))}),await Promise.all(o),s.Zu.Go(i),await async function(a,c){const u=N(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>y.forEach(c,h=>y.forEach(h.Pi,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>y.forEach(h.vi,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!os(l))throw l;E("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.$i.get(h),f=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(f);u.$i=u.$i.insert(h,p)}}}(s.localStore,r))}async function by(t,e){const n=N(t);if(!n.currentUser.isEqual(e)){E("SyncEngine","User change. New user:",e.toKey());const s=await Hl(n.localStore,e);n.currentUser=e,function(i,r){i.uc.forEach(o=>{o.forEach(a=>{a.reject(new I(m.CANCELLED,r))})}),i.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await hs(n,s.Ki)}}function Sy(t,e){const n=N(t),s=n.ic.get(e);if(s&&s.Xu)return L().add(s.key);{let i=L();const r=n.ec.get(e);if(!r)return i;for(const o of r){const a=n.tc.get(o);i=i.unionWith(a.view.qu)}return i}}function ky(t){const e=N(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ih.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Sy.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_y.bind(null,e),e.Zu.Go=uy.bind(null,e.eventManager),e.Zu.lc=ly.bind(null,e.eventManager),e}function Cy(t){const e=N(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ey.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Iy.bind(null,e),e}class Ay{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=Ci(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,n){return null}gc(e,n){return null}wc(e){return Om(this.persistence,new Nm,e.initialUser,this.wt)}_c(e){return new Am(No.Ms,this.wt)}dc(e){return new $m}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Dy{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>hc(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=by.bind(null,this.syncEngine),await iy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new oy}createDatastore(e){const n=Ci(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new qm(i));var i;return function(r,o,a,c){return new Km(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>hc(this.syncEngine,a,0),o=cc.V()?new cc:new Vm,new Wm(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,c,u){const l=new gy(s,i,r,o,a,c);return u&&(l.ac=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=N(e);E("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await ls(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Ie.UNAUTHENTICATED,this.clientId=gl.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{E("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(E("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new I(m.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Uo(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Oy(t,e){t.asyncQueue.verifyOperationInProgress(),E("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Hl(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function My(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Ly(t);E("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>uc(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>uc(e.remoteStore,r)),t.onlineComponents=e}async function Ly(t){return t.offlineComponents||(E("FirestoreClient","Using default OfflineComponentProvider"),await Oy(t,new Ay)),t.offlineComponents}async function ch(t){return t.onlineComponents||(E("FirestoreClient","Using default OnlineComponentProvider"),await My(t,new Dy)),t.onlineComponents}function Py(t){return ch(t).then(e=>e.syncEngine)}async function fc(t){const e=await ch(t),n=e.eventManager;return n.onListen=my.bind(null,e.syncEngine),n.onUnlisten=vy.bind(null,e.syncEngine),n}const pc=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uh(t,e,n){if(!n)throw new I(m.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Uy(t,e,n,s){if(e===!0&&s===!0)throw new I(m.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function gc(t){if(!T.isDocumentKey(t))throw new I(m.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function mc(t){if(T.isDocumentKey(t))throw new I(m.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function $o(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":D()}function _t(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new I(m.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=$o(t);throw new I(m.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new I(m.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new I(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Uy("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yc({}),this._settingsFrozen=!1,e instanceof Zt?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new I(m.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Zt(i.options.projectId)}(e))}get app(){if(!this._app)throw new I(m.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new I(m.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yc(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new ng;switch(n.type){case"gapi":const s=n.client;return $(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new rg(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new I(m.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=pc.get(e);n&&(E("ComponentProvider","Removing Datastore"),pc.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new st(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Se(this.firestore,e,this._key)}}class ds{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ds(this.firestore,e,this._query)}}class st extends ds{constructor(e,n,s){super(e,n,bo(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Se(this.firestore,null,new T(e))}withConverter(e){return new st(this.firestore,e,this._path)}}function Ns(t,e,...n){if(t=ge(t),uh("collection","path",e),t instanceof Vo){const s=q.fromString(e,...n);return mc(s),new st(t,null,s)}{if(!(t instanceof Se||t instanceof st))throw new I(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(q.fromString(e,...n));return mc(s),new st(t.firestore,null,s)}}function Bo(t,e,...n){if(t=ge(t),arguments.length===1&&(e=gl.I()),uh("doc","path",e),t instanceof Vo){const s=q.fromString(e,...n);return gc(s),new Se(t,null,new T(s))}{if(!(t instanceof Se||t instanceof st))throw new I(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(q.fromString(e,...n));return gc(s),new Se(t.firestore,t instanceof st?t.converter:null,new T(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new Gl(this,"async_queue_retry"),this.Kc=()=>{const n=nr();n&&E("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const e=nr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const n=nr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new vt;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Mc.push(e),this.jc()))}async jc(){if(this.Mc.length!==0){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(e){if(!os(e))throw e;E("AsyncQueue","Operation failed with retryable error: "+e)}this.Mc.length>0&&this.So.Io(()=>this.jc())}}Qc(e){const n=this.Oc.then(()=>(this.Lc=!0,e().catch(s=>{this.Bc=s,this.Lc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw rt("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Lc=!1,s))));return this.Oc=n,n}enqueueAfterDelay(e,n,s){this.Gc(),this.qc.indexOf(e)>-1&&(n=0);const i=Po.createAndSchedule(this,e,n,s,r=>this.Wc(r));return this.$c.push(i),i}Gc(){this.Bc&&D()}verifyOperationInProgress(){}async zc(){let e;do e=this.Oc,await e;while(e!==this.Oc)}Hc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Jc(e){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Yc(e){this.qc.push(e)}Wc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function vc(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class sn extends Vo{constructor(e,n,s){super(e,n,s),this.type="firestore",this._queue=new Fy,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||hh(this),this._firestoreClient.terminate()}}function xy(t=du()){return Gr(t,"firestore").getImmediate()}function lh(t){return t._firestoreClient||hh(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function hh(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new mg(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Ry(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new I(m.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new fe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new rn(le.fromBase64String(e))}catch(n){throw new I(m.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new rn(le.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new I(m.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new I(m.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return F(this._lat,e._lat)||F(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $y=/^__.*__$/;class Vy{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new dt(e,this.data,this.fieldMask,n,this.fieldTransforms):new cs(e,this.data,n,this.fieldTransforms)}}class dh{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new dt(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function fh(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw D()}}class zo{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.wt=s,this.ignoreUndefinedProperties=i,r===void 0&&this.Xc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(e){return new zo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ta({path:s,na:!1});return i.sa(e),i}ia(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ta({path:s,na:!1});return i.Xc(),i}ra(e){return this.ta({path:void 0,na:!0})}oa(e){return ti(e,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.sa(this.path.get(e))}sa(e){if(e.length===0)throw this.oa("Document fields must not be empty");if(fh(this.Zc)&&$y.test(e))throw this.oa('Document fields cannot begin and end with "__"')}}class By{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.wt=s||Ci(e)}aa(e,n,s,i=!1){return new zo({Zc:e,methodName:n,ca:s,path:fe.emptyPath(),na:!1,ua:i},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function ph(t){const e=t._freezeSettings(),n=Ci(t._databaseId);return new By(t._databaseId,!!e.ignoreUndefinedProperties,n)}function jy(t,e,n,s,i,r={}){const o=t.aa(r.merge||r.mergeFields?2:0,e,n,i);Ho("Data must be an object, but it was:",o,s);const a=gh(s,o);let c,u;if(r.merge)c=new Ae(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const l=[];for(const h of r.mergeFields){const d=Mr(e,h,n);if(!o.contains(d))throw new I(m.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);yh(l,d)||l.push(d)}c=new Ae(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new Vy(new Te(a),c,u)}class Ri extends jo{_toFieldTransform(e){if(e.Zc!==2)throw e.Zc===1?e.oa(`${this._methodName}() can only appear at the top level of your update data`):e.oa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ri}}function qy(t,e,n,s){const i=t.aa(1,e,n);Ho("Data must be an object, but it was:",i,s);const r=[],o=Te.empty();Mt(s,(c,u)=>{const l=Ko(e,c,n);u=ge(u);const h=i.ia(l);if(u instanceof Ri)r.push(l);else{const d=Oi(u,h);d!=null&&(r.push(l),o.set(l,d))}});const a=new Ae(r);return new dh(o,a,i.fieldTransforms)}function zy(t,e,n,s,i,r){const o=t.aa(1,e,n),a=[Mr(e,s,n)],c=[i];if(r.length%2!=0)throw new I(m.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(Mr(e,r[d])),c.push(r[d+1]);const u=[],l=Te.empty();for(let d=a.length-1;d>=0;--d)if(!yh(u,a[d])){const f=a[d];let p=c[d];p=ge(p);const v=o.ia(f);if(p instanceof Ri)u.push(f);else{const g=Oi(p,v);g!=null&&(u.push(f),l.set(f,g))}}const h=new Ae(u);return new dh(l,h,o.fieldTransforms)}function Oi(t,e){if(mh(t=ge(t)))return Ho("Unsupported field value:",e,t),gh(t,e);if(t instanceof jo)return function(n,s){if(!fh(s.Zc))throw s.oa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.oa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&e.Zc!==4)throw e.oa("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=Oi(o,s.ra(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=ge(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Pg(s.wt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=J.fromDate(n);return{timestampValue:Zs(s.wt,i)}}if(n instanceof J){const i=new J(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Zs(s.wt,i)}}if(n instanceof qo)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof rn)return{bytesValue:Vl(s.wt,n._byteString)};if(n instanceof Se){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.oa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Co(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.oa(`Unsupported field value: ${$o(n)}`)}(t,e)}function gh(t,e){const n={};return ml(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Mt(t,(s,i)=>{const r=Oi(i,e.ea(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function mh(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof J||t instanceof qo||t instanceof rn||t instanceof Se||t instanceof jo)}function Ho(t,e,n){if(!mh(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=$o(n);throw s==="an object"?e.oa(t+" a custom object"):e.oa(t+" "+s)}}function Mr(t,e,n){if((e=ge(e))instanceof Ni)return e._internalPath;if(typeof e=="string")return Ko(t,e);throw ti("Field path arguments must be of type string or ",t,!1,void 0,n)}const Hy=new RegExp("[~\\*/\\[\\]]");function Ko(t,e,n){if(e.search(Hy)>=0)throw ti(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ni(...e.split("."))._internalPath}catch{throw ti(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ti(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new I(m.INVALID_ARGUMENT,a+t+c)}function yh(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Se(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ky(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Go("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Ky extends vh{data(){return super.data()}}function Go(t,e){return typeof e=="string"?Ko(t,e):e instanceof Ni?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class wh extends vh{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Rs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Go("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Rs extends wh{data(e={}){return super.data(e)}}class Gy{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Tn(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Rs(this._firestore,this._userDataWriter,s.key,s,new Tn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new I(m.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new Rs(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Tn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:r++}))}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Rs(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Tn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),u=r.indexOf(o.doc.key)),{type:Wy(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Wy(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return D()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qy(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new I(m.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Xy{}function wc(t,...e){for(const n of e)t=n._apply(t);return t}class Yy extends Xy{constructor(e,n){super(),this.fa=e,this.wa=n,this.type="orderBy"}_apply(e){const n=function(s,i,r){if(s.startAt!==null)throw new I(m.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new I(m.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new zt(i,r);return function(a,c){if(El(a)===null){const u=Il(a);u!==null&&Zy(a,u,c.field)}}(s,o),o}(e._query,this.fa,this.wa);return new ds(e.firestore,e.converter,function(s,i){const r=s.explicitOrderBy.concat([i]);return new as(s.path,s.collectionGroup,r,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function Jy(t,e="asc"){const n=e,s=Go("orderBy",t);return new Yy(s,n)}function Zy(t,e,n){if(!n.isEqual(e))throw new I(m.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{convertValue(e,n="none"){switch(Ct(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Q(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Jt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw D()}}convertObject(e,n){const s={};return Mt(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new qo(Q(e.latitude),Q(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=vl(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp($n(e));default:return null}}convertTimestamp(e){const n=at(e);return new J(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=q.fromString(e);$(zl(s));const i=new Zt(s.get(1),s.get(3)),r=new T(s.popFirst(5));return i.isEqual(n)||rt(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tv(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class _h extends ev{constructor(e){super(),this.firestore=e}convertBytes(e){return new rn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Se(this.firestore,null,n)}}function nv(t,e,n,...s){t=_t(t,Se);const i=_t(t.firestore,sn),r=ph(i);let o;return o=typeof(e=ge(e))=="string"||e instanceof Ni?zy(r,"updateDoc",t._key,e,n,s):qy(r,"updateDoc",t._key,e),Wo(i,[o.toMutation(t._key,Ne.exists(!0))])}function sv(t){return Wo(_t(t.firestore,sn),[new ko(t._key,Ne.none())])}function iv(t,e){const n=_t(t.firestore,sn),s=Bo(t),i=tv(t.converter,e);return Wo(n,[jy(ph(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,Ne.exists(!1))]).then(()=>s)}function rv(t,...e){var n,s,i;t=ge(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||vc(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(vc(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,l;if(t instanceof Se)u=_t(t.firestore,sn),l=bo(t._key.path),c={next:h=>{e[o]&&e[o](ov(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=_t(t,ds);u=_t(h.firestore,sn),l=h._query;const d=new _h(u);c={next:f=>{e[o]&&e[o](new Gy(u,d,h,f))},error:e[o+1],complete:e[o+2]},Qy(t._query)}return function(h,d,f,p){const v=new Ny(p),g=new hy(d,v,f);return h.asyncQueue.enqueueAndForget(async()=>ay(await fc(h),g)),()=>{v.Tc(),h.asyncQueue.enqueueAndForget(async()=>cy(await fc(h),g))}}(lh(u),l,a,c)}function Wo(t,e){return function(n,s){const i=new vt;return n.asyncQueue.enqueueAndForget(async()=>wy(await Py(n),s,i)),i.promise}(lh(t),e)}function ov(t,e,n){const s=n.docs.get(e._key),i=new _h(t);return new wh(t,i,e._key,s,new Tn(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){ln=n})(Qn),Qt(new It("firestore",(n,{options:s})=>{const i=n.getProvider("app").getImmediate(),r=new sn(i,new sg(n.getProvider("auth-internal")),new ag(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:e},s),r._setSettings(s),r},"PUBLIC")),nt(Ba,"3.4.12",t),nt(Ba,"3.4.12","esm2017")})();const av={apiKey:"AIzaSyCE5pA2JSdfAPD5qnWsEEvOXEx-pI4aeLk",authDomain:"finanza-react.firebaseapp.com",databaseURL:"https://finanza-react.firebaseio.com",projectId:"finanza-react",storageBucket:"finanza-react.appspot.com",messagingSenderId:"88000701371",appId:"1:88000701371:web:d5200a9c269fdcf5ea1a9e"},cv=Ff(av),zn=xy(cv);function Qo(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Eh(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uv=Eh,Ih=new Gn("auth","Firebase",Eh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c=new zr("@firebase/auth");function Os(t,...e){_c.logLevel<=U.ERROR&&_c.error(`Auth (${Qn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(t,...e){throw Xo(t,...e)}function Le(t,...e){return Xo(t,...e)}function Th(t,e,n){const s=Object.assign(Object.assign({},uv()),{[e]:n});return new Gn("auth","Firebase",s).create(e,{appName:t.name})}function lv(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&xe(t,"argument-error"),Th(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Xo(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Ih.create(t,...e)}function A(t,e,...n){if(!t)throw Xo(e,...n)}function He(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Os(e),new Error(e)}function Xe(t,e){t||He(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec=new Map;function Ke(t){Xe(t instanceof Function,"Expected a class definition");let e=Ec.get(t);return e?(Xe(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ec.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hv(t,e){const n=Gr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(xs(r,e!=null?e:{}))return i;xe(i,"already-initialized")}return n.initialize({options:e})}function dv(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Ke);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function fv(){return Ic()==="http:"||Ic()==="https:"}function Ic(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fv()||ou()||"connection"in navigator)?navigator.onLine:!0}function gv(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,n){this.shortDelay=e,this.longDelay=n,Xe(n>e,"Short delay should be less than long delay!"),this.isMobile=ru()||au()}get(){return pv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(t,e){Xe(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;He("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;He("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;He("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yv=new fs(3e4,6e4);function vv(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Mi(t,e,n,s,i={}){return Sh(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Wn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),bh.fetch()(kh(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function Sh(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},mv),e);try{const i=new _v(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw bs(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw bs(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw bs(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw bs(t,"user-disabled",o);const l=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Th(t,l,u);xe(t,l)}}catch(i){if(i instanceof Rt)throw i;xe(t,"network-request-failed")}}async function wv(t,e,n,s,i={}){const r=await Mi(t,e,n,s,i);return"mfaPendingCredential"in r&&xe(t,"multi-factor-auth-required",{_serverResponse:r}),r}function kh(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Yo(t.config,i):`${t.config.apiScheme}://${i}`}class _v{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Le(this.auth,"network-request-failed")),yv.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function bs(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Le(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ev(t,e){return Mi(t,"POST","/v1/accounts:delete",e)}async function Iv(t,e){return Mi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Tv(t,e=!1){const n=ge(t),s=await n.getIdToken(e),i=Jo(s);A(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Nn(sr(i.auth_time)),issuedAtTime:Nn(sr(i.iat)),expirationTime:Nn(sr(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function sr(t){return Number(t)*1e3}function Jo(t){var e;const[n,s,i]=t.split(".");if(n===void 0||s===void 0||i===void 0)return Os("JWT malformed, contained fewer than 3 sections"),null;try{const r=Cd(s);return r?JSON.parse(r):(Os("Failed to decode base64 JWT payload"),null)}catch(r){return Os("Caught error parsing JWT payload as JSON",(e=r)===null||e===void 0?void 0:e.toString()),null}}function bv(t){const e=Jo(t);return A(e,"internal-error"),A(typeof e.exp<"u","internal-error"),A(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hn(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Rt&&Sv(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Sv({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Nn(this.lastLoginAt),this.creationTime=Nn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ni(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Hn(t,Iv(n,{idToken:s}));A(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Dv(r.providerUserInfo):[],a=Av(t.providerData,o),c=t.isAnonymous,u=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Ch(r.createdAt,r.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function Cv(t){const e=ge(t);await ni(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Av(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Dv(t){return t.map(e=>{var{providerId:n}=e,s=Qo(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nv(t,e){const n=await Sh(t,{},async()=>{const s=Wn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=kh(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",bh.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){A(e.idToken,"internal-error"),A(typeof e.idToken<"u","internal-error"),A(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):bv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return A(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await Nv(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Kn;return s&&(A(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(A(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(A(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Kn,this.toJSON())}_performRefresh(){return He("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(t,e){A(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Et{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Qo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new kv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Ch(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Hn(this,this.stsTokenManager.getToken(this.auth,e));return A(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Tv(this,e)}reload(){return Cv(this)}_assign(e){this!==e&&(A(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Et(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ni(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Hn(this,Ev(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,c,u,l;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,g=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,b=(u=n.createdAt)!==null&&u!==void 0?u:void 0,O=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:R,emailVerified:Y,isAnonymous:Ce,providerData:De,stsTokenManager:de}=n;A(R&&de,e,"internal-error");const G=Kn.fromJSON(this.name,de);A(typeof R=="string",e,"internal-error"),Ye(h,e.name),Ye(d,e.name),A(typeof Y=="boolean",e,"internal-error"),A(typeof Ce=="boolean",e,"internal-error"),Ye(f,e.name),Ye(p,e.name),Ye(v,e.name),Ye(g,e.name),Ye(b,e.name),Ye(O,e.name);const me=new Et({uid:R,auth:e,email:d,emailVerified:Y,displayName:h,isAnonymous:Ce,photoURL:p,phoneNumber:f,tenantId:v,stsTokenManager:G,createdAt:b,lastLoginAt:O});return De&&Array.isArray(De)&&(me.providerData=De.map(ft=>Object.assign({},ft))),g&&(me._redirectEventId=g),me}static async _fromIdTokenResponse(e,n,s=!1){const i=new Kn;i.updateFromServerResponse(n);const r=new Et({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await ni(r),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ah.type="NONE";const Tc=Ah;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(t,e,n){return`firebase:${t}:${e}:${n}`}class Kt{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Ms(this.userKey,i.apiKey,r),this.fullPersistenceKey=Ms("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Et._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Kt(Ke(Tc),e,s);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=i[0]||Ke(Tc);const o=Ms(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=Et._fromJSON(e,l);u!==r&&(a=h),r=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new Kt(r,e,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new Kt(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Rh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Dh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Mh(e))return"Blackberry";if(Lh(e))return"Webos";if(Zo(e))return"Safari";if((e.includes("chrome/")||Nh(e))&&!e.includes("edge/"))return"Chrome";if(Oh(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Dh(t=se()){return/firefox\//i.test(t)}function Zo(t=se()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Nh(t=se()){return/crios\//i.test(t)}function Rh(t=se()){return/iemobile/i.test(t)}function Oh(t=se()){return/android/i.test(t)}function Mh(t=se()){return/blackberry/i.test(t)}function Lh(t=se()){return/webos/i.test(t)}function Li(t=se()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Rv(t=se()){var e;return Li(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ov(){return cu()&&document.documentMode===10}function Ph(t=se()){return Li(t)||Oh(t)||Lh(t)||Mh(t)||/windows phone/i.test(t)||Rh(t)}function Mv(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(t,e=[]){let n;switch(t){case"Browser":n=bc(se());break;case"Worker":n=`${bc(se())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Qn}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const i of this.queue)await i(e),i.onAbort&&s.push(i.onAbort)}catch(i){s.reverse();for(const r of s)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sc(this),this.idTokenSubscription=new Sc(this),this.beforeStateQueue=new Lv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ih,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ke(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Kt.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await ni(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ge(e):null;return n&&A(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&A(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ke(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Gn("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ke(e)||this._popupRedirectResolver;A(n,this,"argument-error"),this.redirectPersistenceManager=await Kt.create(this,[Ke(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return A(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Uh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function ea(t){return ge(t)}class Sc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Fd(n=>this.observer=n)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return He("not implemented")}_getIdTokenResponse(e){return He("not implemented")}_linkToIdToken(e,n){return He("not implemented")}_getReauthenticationResolver(e){return He("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gt(t,e){return wv(t,"POST","/v1/accounts:signInWithIdp",vv(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv="http://localhost";class Dt extends Fh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Dt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):xe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Qo(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Dt(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Gt(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Gt(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Gt(e,n)}buildRequest(){const e={requestUri:Uv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Wn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps extends ta{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je extends ps{constructor(){super("facebook.com")}static credential(e){return Dt._fromParams({providerId:Je.PROVIDER_ID,signInMethod:Je.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Je.credentialFromTaggedObject(e)}static credentialFromError(e){return Je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Je.credential(e.oauthAccessToken)}catch{return null}}}Je.FACEBOOK_SIGN_IN_METHOD="facebook.com";Je.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be extends ps{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Dt._fromParams({providerId:Be.PROVIDER_ID,signInMethod:Be.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Be.credentialFromTaggedObject(e)}static credentialFromError(e){return Be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Be.credential(n,s)}catch{return null}}}Be.GOOGLE_SIGN_IN_METHOD="google.com";Be.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze extends ps{constructor(){super("github.com")}static credential(e){return Dt._fromParams({providerId:Ze.PROVIDER_ID,signInMethod:Ze.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ze.credentialFromTaggedObject(e)}static credentialFromError(e){return Ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ze.credential(e.oauthAccessToken)}catch{return null}}}Ze.GITHUB_SIGN_IN_METHOD="github.com";Ze.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et extends ps{constructor(){super("twitter.com")}static credential(e,n){return Dt._fromParams({providerId:et.PROVIDER_ID,signInMethod:et.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return et.credentialFromTaggedObject(e)}static credentialFromError(e){return et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return et.credential(n,s)}catch{return null}}}et.TWITTER_SIGN_IN_METHOD="twitter.com";et.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Et._fromIdTokenResponse(e,s,i),o=kc(s);return new on({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=kc(s);return new on({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function kc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends Rt{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,si.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new si(e,n,s,i)}}function xh(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?si._fromErrorAndOperation(t,r,e,s):r})}async function Fv(t,e,n=!1){const s=await Hn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return on._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xv(t,e,n=!1){var s;const{auth:i}=t,r="reauthenticate";try{const o=await Hn(t,xh(i,r,e,t),n);A(o.idToken,i,"internal-error");const a=Jo(o.idToken);A(a,i,"internal-error");const{sub:c}=a;return A(t.uid===c,i,"user-mismatch"),on._forOperation(t,r,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&xe(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $v(t,e,n=!1){const s="signIn",i=await xh(t,s,e),r=await on._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vv(t,e){return ge(t).setPersistence(e)}function Bv(t,e,n,s){return ge(t).onAuthStateChanged(e,n,s)}function jv(t){return ge(t).signOut()}const ii="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ii,"1"),this.storage.removeItem(ii),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qv(){const t=se();return Zo(t)||Li(t)}const zv=1e3,Hv=10;class Vh extends $h{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=qv()&&Mv(),this.fallbackToPolling=Ph(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Ov()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Hv):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},zv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Vh.type="LOCAL";const Kv=Vh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh extends $h{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Bh.type="SESSION";const na=Bh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gv(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Pi(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,r)),c=await Gv(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const u=sa("",20);i.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(l),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(){return window}function Qv(t){Pe().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh(){return typeof Pe().WorkerGlobalScope<"u"&&typeof Pe().importScripts=="function"}async function Xv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Yv(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Jv(){return jh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh="firebaseLocalStorageDb",Zv=1,ri="firebaseLocalStorage",zh="fbase_key";class gs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ui(t,e){return t.transaction([ri],e?"readwrite":"readonly").objectStore(ri)}function ew(){const t=indexedDB.deleteDatabase(qh);return new gs(t).toPromise()}function Pr(){const t=indexedDB.open(qh,Zv);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(ri,{keyPath:zh})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(ri)?e(s):(s.close(),await ew(),e(await Pr()))})})}async function Cc(t,e,n){const s=Ui(t,!0).put({[zh]:e,value:n});return new gs(s).toPromise()}async function tw(t,e){const n=Ui(t,!1).get(e),s=await new gs(n).toPromise();return s===void 0?null:s.value}function Ac(t,e){const n=Ui(t,!0).delete(e);return new gs(n).toPromise()}const nw=800,sw=3;class Hh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Pr(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>sw)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pi._getInstance(Jv()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Xv(),!this.activeServiceWorker)return;this.sender=new Wv(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Yv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Pr();return await Cc(e,ii,"1"),await Ac(e,ii),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Cc(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>tw(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ac(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Ui(i,!1).getAll();return new gs(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Hh.type="LOCAL";const iw=Hh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rw(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function ow(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Le("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",rw().appendChild(s)})}function aw(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new fs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kh(t,e){return e?Ke(e):(A(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia extends Fh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Gt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Gt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function cw(t){return $v(t.auth,new ia(t),t.bypassAuthState)}function uw(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),xv(n,new ia(t),t.bypassAuthState)}async function lw(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),Fv(n,new ia(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return cw;case"linkViaPopup":case"linkViaRedirect":return lw;case"reauthViaPopup":case"reauthViaRedirect":return uw;default:xe(this.auth,"internal-error")}}resolve(e){Xe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Xe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hw=new fs(2e3,1e4);class Vt extends Gh{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Vt.currentPopupAction&&Vt.currentPopupAction.cancel(),Vt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return A(e,this.auth,"internal-error"),e}async onExecution(){Xe(this.filter.length===1,"Popup operations only handle one event");const e=sa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Le(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Le(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Le(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,hw.get())};e()}}Vt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw="pendingRedirect",Ls=new Map;class fw extends Gh{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Ls.get(this.auth._key());if(!e){try{const s=await pw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Ls.set(this.auth._key(),e)}return this.bypassAuthState||Ls.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pw(t,e){const n=Qh(e),s=Wh(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}async function gw(t,e){return Wh(t)._set(Qh(e),"true")}function mw(t,e){Ls.set(t._key(),e)}function Wh(t){return Ke(t._redirectPersistence)}function Qh(t){return Ms(dw,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yw(t,e,n){return vw(t,e,n)}async function vw(t,e,n){const s=ea(t);lv(t,e,ta);const i=Kh(s,n);return await gw(i,s),i._openRedirect(s,e,"signInViaRedirect")}async function ww(t,e,n=!1){const s=ea(t),i=Kh(s,e),o=await new fw(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _w=10*60*1e3;class Ew{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Iw(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Xh(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Le(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_w&&this.cachedEventUids.clear(),this.cachedEventUids.has(Dc(e))}saveEventToCache(e){this.cachedEventUids.add(Dc(e)),this.lastProcessedEventTime=Date.now()}}function Dc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Xh({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Iw(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xh(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tw(t,e={}){return Mi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Sw=/^https?/;async function kw(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Tw(t);for(const n of e)try{if(Cw(n))return}catch{}xe(t,"unauthorized-domain")}function Cw(t){const e=Lr(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Sw.test(n))return!1;if(bw.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw=new fs(3e4,6e4);function Nc(){const t=Pe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Dw(t){return new Promise((e,n)=>{var s,i,r;function o(){Nc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Nc(),n(Le(t,"network-request-failed"))},timeout:Aw.get()})}if(!((i=(s=Pe().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Pe().gapi)===null||r===void 0)&&r.load)o();else{const a=aw("iframefcb");return Pe()[a]=()=>{gapi.load?o():n(Le(t,"network-request-failed"))},ow(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Ps=null,e})}let Ps=null;function Nw(t){return Ps=Ps||Dw(t),Ps}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw=new fs(5e3,15e3),Ow="__/auth/iframe",Mw="emulator/auth/iframe",Lw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Pw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Uw(t){const e=t.config;A(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Yo(e,Mw):`https://${t.config.authDomain}/${Ow}`,s={apiKey:e.apiKey,appName:t.name,v:Qn},i=Pw.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Wn(s).slice(1)}`}async function Fw(t){const e=await Nw(t),n=Pe().gapi;return A(n,t,"internal-error"),e.open({where:document.body,url:Uw(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Lw,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Le(t,"network-request-failed"),a=Pe().setTimeout(()=>{r(o)},Rw.get());function c(){Pe().clearTimeout(a),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$w=500,Vw=600,Bw="_blank",jw="http://localhost";class Rc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qw(t,e,n,s=$w,i=Vw){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},xw),{width:s.toString(),height:i.toString(),top:r,left:o}),u=se().toLowerCase();n&&(a=Nh(u)?Bw:n),Dh(u)&&(e=e||jw,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(Rv(u)&&a!=="_self")return zw(e||"",a),new Rc(null);const h=window.open(e||"",a,l);A(h,t,"popup-blocked");try{h.focus()}catch{}return new Rc(h)}function zw(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw="__/auth/handler",Kw="emulator/auth/handler";function Oc(t,e,n,s,i,r){A(t.config.authDomain,t,"auth-domain-config-required"),A(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Qn,eventId:i};if(e instanceof ta){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ud(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(r||{}))o[c]=u}if(e instanceof ps){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Gw(t)}?${Wn(a).slice(1)}`}function Gw({config:t}){return t.emulator?Yo(t,Kw):`https://${t.authDomain}/${Hw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir="webStorageSupport";class Ww{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=na,this._completeRedirectFn=ww,this._overrideRedirectResult=mw}async _openPopup(e,n,s,i){var r;Xe((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=Oc(e,n,s,Lr(),i);return qw(e,o,sa())}async _openRedirect(e,n,s,i){return await this._originValidation(e),Qv(Oc(e,n,s,Lr(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Xe(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Fw(e),s=new Ew(e);return n.register("authEvent",i=>(A(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ir,{type:ir},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[ir];o!==void 0&&n(!!o),xe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=kw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ph()||Zo()||Li()}}const Qw=Ww;var Mc="@firebase/auth",Lc="0.20.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var i;e(((i=s)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yw(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Jw(t){Qt(new It("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,c)=>{A(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),A(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Uh(t)},l=new Pv(a,c,u);return dv(l,n),l})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Qt(new It("auth-internal",e=>{const n=ea(e.getProvider("auth").getImmediate());return(s=>new Xw(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nt(Mc,Lc,Yw(t)),nt(Mc,Lc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(t=du()){const e=Gr(t,"auth");return e.isInitialized()?e.getImmediate():hv(t,{popupRedirectResolver:Qw,persistence:[iw,Kv,na]})}Jw("Browser");async function Zw(){const t=ra();try{await Vv(t,na);const e=new Be;return e.setCustomParameters({prompt:"select_account"}),await yw(t,e)}catch(e){const n=e.code,s=e.message;console.error({errorCode:n,errorMessage:s})}}function e_(){const t=ra();return jv(t)}function t_(t){const e=ra();Bv(e,n=>{console.log("onAuthStateChanged",n),n&&t(n)})}function n_(t){let e,n=t[0]?"Logout":"Login",s,i,r;return{c(){e=C("button"),s=ne(n)},m(o,a){z(o,e,a),_(e,s),i||(r=re(e,"click",t[1]),i=!0)},p(o,[a]){a&1&&n!==(n=o[0]?"Logout":"Login")&&je(s,n)},i:_e,o:_e,d(o){o&&x(e),i=!1,r()}}}function s_(t,e,n){let{authentication:s}=e;function i(r){vd.call(this,t,r)}return t.$$set=r=>{"authentication"in r&&n(0,s=r.authentication)},[s,i]}class i_ extends Ve{constructor(e){super(),$e(this,e,s_,n_,Me,{authentication:0})}}const Ft=[];function Fi(t,e=_e){let n;const s=new Set;function i(a){if(Me(t,a)&&(t=a,n)){const c=!Ft.length;for(const u of s)u[1](),Ft.push(u,t);if(c){for(let u=0;u<Ft.length;u+=2)Ft[u][0](Ft[u+1]);Ft.length=0}}}function r(a){i(a(t))}function o(a,c=_e){const u=[a,c];return s.add(u),s.size===1&&(n=e(i)||_e),a(t),()=>{s.delete(u),s.size===0&&(n(),n=null)}}return{set:i,update:r,subscribe:o}}const Nt=Fi(null),Ur=Fi(null),it=Fi(null),Bt=Fi(null);function Pc(t){let e,n,s=t[0].email+"",i;return{c(){e=C("p"),n=ne("Logged in as "),i=ne(s)},m(r,o){z(r,e,o),_(e,n),_(e,i)},p(r,o){o&1&&s!==(s=r[0].email+"")&&je(i,s)},d(r){r&&x(e)}}}function r_(t){let e,n,s,i,r,o,a=t[0]&&Pc(t);return r=new i_({props:{authentication:t[0]}}),r.$on("click",function(){oi(t[0]?t[2]:t[1])&&(t[0]?t[2]:t[1]).apply(this,arguments)}),{c(){e=C("div"),n=C("h1"),n.textContent="Authentication",s=B(),a&&a.c(),i=B(),Ue(r.$$.fragment),k(e,"class","authentication module")},m(c,u){z(c,e,u),_(e,n),_(e,s),a&&a.m(e,null),_(e,i),Re(r,e,null),o=!0},p(c,[u]){t=c,t[0]?a?a.p(t,u):(a=Pc(t),a.c(),a.m(e,i)):a&&(a.d(1),a=null);const l={};u&1&&(l.authentication=t[0]),r.$set(l)},i(c){o||(V(r.$$.fragment,c),o=!0)},o(c){K(r.$$.fragment,c),o=!1},d(c){c&&x(e),a&&a.d(),Oe(r)}}}function o_(t,e,n){let s;Nt.subscribe(o=>{n(0,s=o)});async function i(){s||await Zw()}async function r(){await e_(),Nt.set(null),Ur.set(null)}return[s,i,r]}class a_ extends Ve{constructor(e){super(),$e(this,e,o_,r_,Me,{})}}function c_(t){let e,n,s;const i=t[1].default,r=xr(i,t,t[0],null);return{c(){e=C("div"),r&&r.c(),k(e,"class","accordion svelte-1p58i2t")},m(o,a){z(o,e,a),r&&r.m(e,null),s=!0},p(o,[a]){r&&r.p&&(!s||a&1)&&Vr(r,i,o,o[0],s?$r(i,o[0],a,null):Br(o[0]),null)},i(o){s||(V(r,o),Wt(()=>{n||(n=ya(e,Uc,{},!0)),n.run(1)}),s=!0)},o(o){K(r,o),n||(n=ya(e,Uc,{},!1)),n.run(0),s=!1},d(o){o&&x(e),r&&r.d(o),o&&n&&n.end()}}}function Uc(t,{delay:e=0,duration:n=250}){const s=getComputedStyle(t).height,i=Number(s.slice(0,-2)),r=+getComputedStyle(t).opacity;return{delay:e,duration:n,css:o=>`height: ${o*i}px; transform: scale(${o}); opacity: ${o*r}`}}function u_(t,e,n){let{$$slots:s={},$$scope:i}=e;return t.$$set=r=>{"$$scope"in r&&n(0,i=r.$$scope)},[i,s]}class l_ extends Ve{constructor(e){super(),$e(this,e,u_,c_,Me,{})}}const h_=t=>({}),Fc=t=>({bind:!0});function d_(t){let e,n,s,i,r;const o=t[3].default,a=xr(o,t,t[2],Fc);return{c(){e=C("div"),n=C("div"),a&&a.c(),k(n,"class","resizable-panel"),Wt(()=>t[4].call(n)),k(e,"class","resizable-container svelte-1qgu7a5"),k(e,"style",i=`width: ${t[0]}px; height: ${t[1]}px`)},m(c,u){z(c,e,u),_(e,n),a&&a.m(n,null),s=ld(n,t[4].bind(n)),r=!0},p(c,[u]){a&&a.p&&(!r||u&4)&&Vr(a,o,c,c[2],r?$r(o,c[2],u,h_):Br(c[2]),Fc),(!r||u&3&&i!==(i=`width: ${c[0]}px; height: ${c[1]}px`))&&k(e,"style",i)},i(c){r||(V(a,c),r=!0)},o(c){K(a,c),r=!1},d(c){c&&x(e),a&&a.d(c),s()}}}function f_(t,e,n){let{$$slots:s={},$$scope:i}=e,r,o;function a(){r=this.clientWidth,o=this.clientHeight,n(0,r),n(1,o)}return t.$$set=c=>{"$$scope"in c&&n(2,i=c.$$scope)},[r,o,i,s,a]}class p_ extends Ve{constructor(e){super(),$e(this,e,f_,d_,Me,{})}}function rr(t){const e=n=>n.key==="Enter"&&t.blur();return t.addEventListener("keydown",e),{destroy(){t.removeEventListener("keydown",e)}}}function Yh(t,e,n,s){if(!(t||Ns||n))return;let i;return s?i=wc(Ns(zn,`users/${t}/${e}`),Jy(s.field,s.direction)):i=wc(Ns(zn,`users/${t}/${e}`)),rv(i,o=>{const a={};o.forEach(c=>{a[c.id]={...c.data(),id:c.id}}),n(a)})}function Jh(t,e,n){!(t||e||n)||iv(Ns(zn,`users/${t}/${e}`),n)}function g_(t,e,n){if(!t)return;const s=Bo(zn,`users/${t}/${e}`);nv(s,n)}function Zh(t,e){!(t||e)||sv(Bo(zn,`users/${t}/${e}`))}function m_(t,e,n){return Yh(t,`portfolios/${e}/expenses`,n,{field:"date",direction:"desc"})}function y_(t,e){return Jh(t,"portfolios",e)}function v_(t,e){return Zh(t,`portfolios/${e}`)}function w_(t,e,n){Jh(t,`portfolios/${e}/expenses`,n)}function __(t,e,n,s){g_(t,`portfolios/${e}/expenses/${n}`,s)}function E_(t,e,n){Zh(t,`portfolios/${e}/expenses/${n}`)}function I_(t){let e,n,s,i,r;const o=t[6].default,a=xr(o,t,t[5],null);return{c(){e=C("button"),a&&a.c(),e.disabled=t[0],k(e,"class",n=t[1]?"active":"")},m(c,u){z(c,e,u),a&&a.m(e,null),s=!0,i||(r=re(e,"click",t[2]),i=!0)},p(c,[u]){a&&a.p&&(!s||u&32)&&Vr(a,o,c,c[5],s?$r(o,c[5],u,null):Br(c[5]),null),(!s||u&1)&&(e.disabled=c[0]),(!s||u&2&&n!==(n=c[1]?"active":""))&&k(e,"class",n)},i(c){s||(V(a,c),s=!0)},o(c){K(a,c),s=!1},d(c){c&&x(e),a&&a.d(c),i=!1,r()}}}function T_(t,e,n){let{$$slots:s={},$$scope:i}=e,{callback:r}=e,{disabled:o}=e,{timeout:a=2e3}=e,c=!1,u;function l(){if(!c)return u=setTimeout(()=>{n(1,c=!1)},a),n(1,c=!0);u&&clearTimeout(u),n(1,c=!1),r()}return t.$$set=h=>{"callback"in h&&n(3,r=h.callback),"disabled"in h&&n(0,o=h.disabled),"timeout"in h&&n(4,a=h.timeout),"$$scope"in h&&n(5,i=h.$$scope)},[o,c,l,r,a,i,s]}class ed extends Ve{constructor(e){super(),$e(this,e,T_,I_,Me,{callback:3,disabled:0,timeout:4})}}function xc(t,e,n){const s=t.slice();return s[5]=e[n],s}function $c(t){let e,n,s=t[1][t[5]]+"",i,r,o,a,c,u,l,h,d;return{c(){e=C("div"),n=C("label"),i=ne(s),o=B(),a=C("input"),h=B(),k(n,"for",r=t[5]),a.checked=c=t[0]===t[5],k(a,"type","radio"),k(a,"id",u=t[5]),a.value=l=t[5],k(e,"class",d="option"+(t[0]===t[5]?" selected":""))},m(f,p){z(f,e,p),_(e,n),_(n,i),_(e,o),_(e,a),_(e,h)},p(f,p){p&2&&s!==(s=f[1][f[5]]+"")&&je(i,s),p&2&&r!==(r=f[5])&&k(n,"for",r),p&3&&c!==(c=f[0]===f[5])&&(a.checked=c),p&2&&u!==(u=f[5])&&k(a,"id",u),p&2&&l!==(l=f[5])&&(a.value=l),p&3&&d!==(d="option"+(f[0]===f[5]?" selected":""))&&k(e,"class",d)},d(f){f&&x(e)}}}function b_(t){let e,n,s,i,r=Object.keys(t[1]),o=[];for(let a=0;a<r.length;a+=1)o[a]=$c(xc(t,r,a));return{c(){e=C("fieldset");for(let a=0;a<o.length;a+=1)o[a].c();k(e,"class",n="radio-switch"+(t[3].class?` ${t[3].class}`:""))},m(a,c){z(a,e,c);for(let u=0;u<o.length;u+=1)o[u].m(e,null);s||(i=re(e,"input",t[2]),s=!0)},p(a,[c]){if(c&3){r=Object.keys(a[1]);let u;for(u=0;u<r.length;u+=1){const l=xc(a,r,u);o[u]?o[u].p(l,c):(o[u]=$c(l),o[u].c(),o[u].m(e,null))}for(;u<o.length;u+=1)o[u].d(1);o.length=r.length}c&8&&n!==(n="radio-switch"+(a[3].class?` ${a[3].class}`:""))&&k(e,"class",n)},i:_e,o:_e,d(a){a&&x(e),qr(o,a),s=!1,i()}}}function S_(t,e,n){let{onChange:s}=e,{value:i}=e,{options:r}=e;function o(a){console.log(a.target.value),s&&s(a.target.value)}return t.$$set=a=>{n(3,e=or(or({},e),fa(a))),"onChange"in a&&n(4,s=a.onChange),"value"in a&&n(0,i=a.value),"options"in a&&n(1,r=a.options)},e=fa(e),[i,r,o,e,s]}class k_ extends Ve{constructor(e){super(),$e(this,e,S_,b_,Me,{onChange:4,value:0,options:1})}}const Fr={Food:"\u{1F355}",Groceries:"\u{1F951}",Utility:"\u2699\uFE0F",Gas:"\u26FD\uFE0F",Entertainment:"\u{1F37F}"};function C_(t){let e;return{c(){e=ne("Delete")},m(n,s){z(n,e,s)},d(n){n&&x(e)}}}function A_(t){var fn,pn;let e,n,s,i,r,o,a,c,u,l,h,d,f,p,v,g,b,O,R,Y,Ce,De,de,G,me,ft;return d=new k_({props:{class:"categories",onChange:t[10],value:(fn=t[0])==null?void 0:fn.category,options:Fr}}),de=new ed({props:{callback:t[3],disabled:!((pn=t[0])!=null&&pn.id),$$slots:{default:[C_]},$$scope:{ctx:t}}}),{c(){var H,Ee,gn,Pt,mn,yn;e=C("div"),n=C("form"),s=C("input"),r=B(),o=C("input"),c=B(),u=C("input"),h=B(),Ue(d.$$.fragment),f=B(),p=C("div"),v=C("button"),g=ne("Clear"),O=B(),R=C("button"),Y=ne("Submit"),De=B(),Ue(de.$$.fragment),s.value=i=(Ee=(H=t[0])==null?void 0:H.date)!=null?Ee:"",k(s,"placeholder","Date"),k(s,"class","date"),o.value=a=(Pt=(gn=t[0])==null?void 0:gn.notes)!=null?Pt:"",k(o,"placeholder","Notes"),k(o,"class","notes"),u.value=l=(yn=(mn=t[0])==null?void 0:mn.price)!=null?yn:"",k(u,"placeholder","Price"),k(u,"class","price"),v.disabled=b=!t[0],k(v,"class","clear-button"),R.disabled=Ce=!t[0]||!t[1],k(R,"class","submit-button"),k(p,"class","actions"),k(e,"class","editor")},m(H,Ee){z(H,e,Ee),_(e,n),_(n,s),_(n,r),_(n,o),_(n,c),_(n,u),_(e,h),Re(d,e,null),_(e,f),_(e,p),_(p,v),_(v,g),_(p,O),_(p,R),_(R,Y),_(p,De),Re(de,p,null),G=!0,me||(ft=[xi(rr.call(null,s)),re(s,"input",t[7]),re(s,"keydown",t[6]),xi(rr.call(null,o)),re(o,"input",t[8]),re(o,"keydown",t[6]),xi(rr.call(null,u)),re(u,"input",t[9]),re(u,"keydown",t[6]),re(v,"click",t[4]),re(R,"click",t[5])],me=!0)},p(H,[Ee]){var mn,yn,oa,aa,ca,ua,la,ha;(!G||Ee&1&&i!==(i=(yn=(mn=H[0])==null?void 0:mn.date)!=null?yn:"")&&s.value!==i)&&(s.value=i),(!G||Ee&1&&a!==(a=(aa=(oa=H[0])==null?void 0:oa.notes)!=null?aa:"")&&o.value!==a)&&(o.value=a),(!G||Ee&1&&l!==(l=(ua=(ca=H[0])==null?void 0:ca.price)!=null?ua:"")&&u.value!==l)&&(u.value=l);const gn={};Ee&1&&(gn.value=(la=H[0])==null?void 0:la.category),d.$set(gn),(!G||Ee&1&&b!==(b=!H[0]))&&(v.disabled=b),(!G||Ee&3&&Ce!==(Ce=!H[0]||!H[1]))&&(R.disabled=Ce);const Pt={};Ee&1&&(Pt.disabled=!((ha=H[0])!=null&&ha.id)),Ee&8192&&(Pt.$$scope={dirty:Ee,ctx:H}),de.$set(Pt)},i(H){G||(V(d.$$.fragment,H),V(de.$$.fragment,H),G=!0)},o(H){K(d.$$.fragment,H),K(de.$$.fragment,H),G=!1},d(H){H&&x(e),Oe(d),Oe(de),me=!1,ut(ft)}}}function D_(t,e,n){let s;Nt.subscribe(g=>s=g);let i={};it.subscribe(g=>{n(0,i=g)});let r;Bt.subscribe(g=>n(1,r=g));function o(g,b){it.update(O=>({...O,[g]:b}))}function a(){it.set(null)}function c(){E_(s.uid,r.id,i.id),a()}function u(){a()}function l(){var g;if(i!=null&&i.id)__(s.uid,r.id,i.id,i);else{let b=(g=i.date)!=null?g:new Date().getTime();n(0,i={...i,date:b}),w_(s.uid,r.id,i)}a()}function h(g){g.key==="Enter"&&l()}return[i,r,o,c,u,l,h,g=>o("date",g.target.value),g=>o("notes",g.target.value),g=>o("price",g.target.value),g=>o("category",g)]}class N_ extends Ve{constructor(e){super(),$e(this,e,D_,A_,Me,{})}}function Vc(t,e,n){const s=t.slice();return s[7]=e[n],s}function Bc(t){let e,n;return e=new l_({props:{$$slots:{default:[O_]},$$scope:{ctx:t}}}),{c(){Ue(e.$$.fragment)},m(s,i){Re(e,s,i),n=!0},p(s,i){const r={};i&1031&&(r.$$scope={dirty:i,ctx:s}),e.$set(r)},i(s){n||(V(e.$$.fragment,s),n=!0)},o(s){K(e.$$.fragment,s),n=!1},d(s){Oe(e,s)}}}function jc(t){let e,n,s,i=Object.keys(t[1]),r=[];for(let o=0;o<i.length;o+=1)r[o]=qc(Vc(t,i,o));return{c(){e=C("div"),n=C("div"),n.innerHTML=`<span>Category</span> 
              <span>Price</span> 
              <span>Date</span> 
              <span>Notes</span>`,s=B();for(let o=0;o<r.length;o+=1)r[o].c();k(n,"class","table-head"),k(e,"class","expenses table")},m(o,a){z(o,e,a),_(e,n),_(e,s);for(let c=0;c<r.length;c+=1)r[c].m(e,null)},p(o,a){if(a&14){i=Object.keys(o[1]);let c;for(c=0;c<i.length;c+=1){const u=Vc(o,i,c);r[c]?r[c].p(u,a):(r[c]=qc(u),r[c].c(),r[c].m(e,null))}for(;c<r.length;c+=1)r[c].d(1);r.length=i.length}},d(o){o&&x(e),qr(r,o)}}}function qc(t){var De,de;let e,n,s=((De=Fr[t[1][t[7]].category])!=null?De:"\u2753")+"",i,r,o,a=new Intl.NumberFormat("it-IT",{style:"currency",currency:"EUR"}).format(t[1][t[7]].price)+"",c,u,l,h=new Date(t[1][t[7]].date).toLocaleString("it-IT",{dateStyle:"short"})+"",d,f,p,v=((de=t[1][t[7]].notes)!=null?de:"")+"",g,b,O,R,Y;function Ce(){return t[5](t[7])}return{c(){var G;e=C("div"),n=C("span"),i=ne(s),r=B(),o=C("span"),c=ne(a),u=B(),l=C("span"),d=ne(h),f=B(),p=C("span"),g=ne(v),b=B(),k(n,"class","category"),k(o,"class","price"),k(l,"class","date"),k(p,"class","notes"),k(e,"class",O="expense"+(((G=t[2])==null?void 0:G.id)===t[7]?" selected":""))},m(G,me){z(G,e,me),_(e,n),_(n,i),_(e,r),_(e,o),_(o,c),_(e,u),_(e,l),_(l,d),_(e,f),_(e,p),_(p,g),_(e,b),R||(Y=re(e,"click",Ce),R=!0)},p(G,me){var ft,fn,pn;t=G,me&2&&s!==(s=((ft=Fr[t[1][t[7]].category])!=null?ft:"\u2753")+"")&&je(i,s),me&2&&a!==(a=new Intl.NumberFormat("it-IT",{style:"currency",currency:"EUR"}).format(t[1][t[7]].price)+"")&&je(c,a),me&2&&h!==(h=new Date(t[1][t[7]].date).toLocaleString("it-IT",{dateStyle:"short"})+"")&&je(d,h),me&2&&v!==(v=((fn=t[1][t[7]].notes)!=null?fn:"")+"")&&je(g,v),me&6&&O!==(O="expense"+(((pn=t[2])==null?void 0:pn.id)===t[7]?" selected":""))&&k(e,"class",O)},d(G){G&&x(e),R=!1,Y()}}}function zc(t){let e;return{c(){e=C("p"),e.textContent="No entries found"},m(n,s){z(n,e,s)},d(n){n&&x(e)}}}function R_(t){let e,n,s=t[0].name+"",i,r,o,a,c=t[1]&&jc(t),u=!t[1]&&zc();return{c(){e=C("div"),n=C("h1"),i=ne(s),r=ne(" Expenses"),o=B(),c&&c.c(),a=B(),u&&u.c(),k(e,"class","table module")},m(l,h){z(l,e,h),_(e,n),_(n,i),_(n,r),_(e,o),c&&c.m(e,null),_(e,a),u&&u.m(e,null)},p(l,h){h&1&&s!==(s=l[0].name+"")&&je(i,s),l[1]?c?c.p(l,h):(c=jc(l),c.c(),c.m(e,a)):c&&(c.d(1),c=null),l[1]?u&&(u.d(1),u=null):u||(u=zc(),u.c(),u.m(e,null))},d(l){l&&x(e),c&&c.d(),u&&u.d()}}}function O_(t){let e,n;return e=new p_({props:{$$slots:{default:[R_]},$$scope:{ctx:t}}}),{c(){Ue(e.$$.fragment)},m(s,i){Re(e,s,i),n=!0},p(s,i){const r={};i&1031&&(r.$$scope={dirty:i,ctx:s}),e.$set(r)},i(s){n||(V(e.$$.fragment,s),n=!0)},o(s){K(e.$$.fragment,s),n=!1},d(s){Oe(e,s)}}}function M_(t){let e,n,s=t[1]&&Bc(t);return{c(){s&&s.c(),e=eu()},m(i,r){s&&s.m(i,r),z(i,e,r),n=!0},p(i,[r]){i[1]?s?(s.p(i,r),r&2&&V(s,1)):(s=Bc(i),s.c(),V(s,1),s.m(e.parentNode,e)):s&&(ai(),K(s,1,1,()=>{s=null}),ci())},i(i){n||(V(s),n=!0)},o(i){K(s),n=!1},d(i){s&&s.d(i),i&&x(e)}}}function L_(t,e,n){let{portfolio:s}=e,i;Nt.subscribe(l=>n(4,i=l));let r;Ur.subscribe(l=>{n(1,r=l)});let o;yd(()=>o());let a;it.subscribe(l=>n(2,a=l));function c(l){if((a==null?void 0:a.id)===l)return it.set(null);it.set(r[l])}const u=l=>c(l);return t.$$set=l=>{"portfolio"in l&&n(0,s=l.portfolio)},t.$$.update=()=>{t.$$.dirty&17&&(o=m_(i.uid,s.id,Ur.set))},[s,r,a,c,i,u]}class P_ extends Ve{constructor(e){super(),$e(this,e,L_,M_,Me,{portfolio:0})}}function Hc(t,e,n){const s=t.slice();return s[10]=e[n],s}function Kc(t){let e,n,s,i,r,o,a,c,u,l,h,d,f,p=Object.keys(t[0]),v=[];for(let g=0;g<p.length;g+=1)v[g]=Gc(Hc(t,p,g));return l=new ed({props:{callback:t[6],disabled:!t[1],$$slots:{default:[U_]},$$scope:{ctx:t}}}),{c(){e=C("div");for(let g=0;g<v.length;g+=1)v[g].c();n=B(),s=C("form"),i=C("input"),r=B(),o=C("button"),a=ne("Add"),u=B(),Ue(l.$$.fragment),i.value=t[2],k(i,"type","text"),k(o,"type","submit"),o.disabled=c=!t[2],k(s,"action",""),k(e,"class","portfolios-tags")},m(g,b){z(g,e,b);for(let O=0;O<v.length;O+=1)v[O].m(e,null);_(e,n),_(e,s),_(s,i),_(s,r),_(s,o),_(o,a),_(e,u),Re(l,e,null),h=!0,d||(f=[re(i,"input",t[4]),re(o,"click",t[5])],d=!0)},p(g,b){if(b&11){p=Object.keys(g[0]);let R;for(R=0;R<p.length;R+=1){const Y=Hc(g,p,R);v[R]?v[R].p(Y,b):(v[R]=Gc(Y),v[R].c(),v[R].m(e,n))}for(;R<v.length;R+=1)v[R].d(1);v.length=p.length}(!h||b&4&&i.value!==g[2])&&(i.value=g[2]),(!h||b&4&&c!==(c=!g[2]))&&(o.disabled=c);const O={};b&2&&(O.disabled=!g[1]),b&8192&&(O.$$scope={dirty:b,ctx:g}),l.$set(O)},i(g){h||(V(l.$$.fragment,g),h=!0)},o(g){K(l.$$.fragment,g),h=!1},d(g){g&&x(e),qr(v,g),Oe(l),d=!1,ut(f)}}}function Gc(t){let e,n,s,i=t[0][t[10]].name+"",r,o,a,c;function u(){return t[7](t[10])}return{c(){var l;e=C("button"),n=C("div"),s=C("p"),r=ne(i),k(e,"class",o=((l=t[1])==null?void 0:l.id)===t[10]?"selected":"")},m(l,h){z(l,e,h),_(e,n),_(n,s),_(s,r),a||(c=re(e,"click",u),a=!0)},p(l,h){var d;t=l,h&1&&i!==(i=t[0][t[10]].name+"")&&je(r,i),h&3&&o!==(o=((d=t[1])==null?void 0:d.id)===t[10]?"selected":"")&&k(e,"class",o)},d(l){l&&x(e),a=!1,c()}}}function U_(t){let e;return{c(){e=ne("Delete portfolio")},m(n,s){z(n,e,s)},d(n){n&&x(e)}}}function F_(t){let e,n,s,i,r=t[0]&&Kc(t);return{c(){e=C("div"),n=C("h1"),n.textContent="Portfolios",s=B(),r&&r.c(),k(e,"class","module")},m(o,a){z(o,e,a),_(e,n),_(e,s),r&&r.m(e,null),i=!0},p(o,[a]){o[0]?r?(r.p(o,a),a&1&&V(r,1)):(r=Kc(o),r.c(),V(r,1),r.m(e,null)):r&&(ai(),K(r,1,1,()=>{r=null}),ci())},i(o){i||(V(r),i=!0)},o(o){K(r),i=!1},d(o){o&&x(e),r&&r.d()}}}function x_(t,e,n){let s,i,r;Nt.subscribe(f=>{!f||(i=f,r&&r(),console.log(f.uid),r=Yh(f.uid,"portfolios",p=>{n(0,s=p)}))});let o;Bt.subscribe(f=>{it.set(null),n(1,o=f)});function a(f){if(f===(o==null?void 0:o.id))return Bt.set(null);Bt.set({...s[f],id:f})}let c="";function u(f){const p=f.target.value;n(2,c=p)}async function l(f){f.preventDefault(),y_(i.user.uid,{name:c}),n(2,c="")}function h(){v_(i.user.uid,o.id),it.set(null),Bt.set(null)}return[s,o,c,a,u,l,h,f=>a(f)]}class $_ extends Ve{constructor(e){super(),$e(this,e,x_,F_,Me,{})}}function V_(t){let e;return{c(){e=C("h1"),e.textContent="Welcome to Finanza"},m(n,s){z(n,e,s)},p:_e,i:_e,o:_e,d(n){n&&x(e)}}}function B_(t){let e,n,s,i,r,o;e=new N_({}),s=new $_({});let a=t[1]&&Wc(t);return{c(){Ue(e.$$.fragment),n=B(),Ue(s.$$.fragment),i=B(),a&&a.c(),r=eu()},m(c,u){Re(e,c,u),z(c,n,u),Re(s,c,u),z(c,i,u),a&&a.m(c,u),z(c,r,u),o=!0},p(c,u){c[1]?a?(a.p(c,u),u&2&&V(a,1)):(a=Wc(c),a.c(),V(a,1),a.m(r.parentNode,r)):a&&(ai(),K(a,1,1,()=>{a=null}),ci())},i(c){o||(V(e.$$.fragment,c),V(s.$$.fragment,c),V(a),o=!0)},o(c){K(e.$$.fragment,c),K(s.$$.fragment,c),K(a),o=!1},d(c){Oe(e,c),c&&x(n),Oe(s,c),c&&x(i),a&&a.d(c),c&&x(r)}}}function Wc(t){let e,n;return e=new P_({props:{portfolio:t[1]}}),{c(){Ue(e.$$.fragment)},m(s,i){Re(e,s,i),n=!0},p(s,i){const r={};i&2&&(r.portfolio=s[1]),e.$set(r)},i(s){n||(V(e.$$.fragment,s),n=!0)},o(s){K(e.$$.fragment,s),n=!1},d(s){Oe(e,s)}}}function j_(t){let e,n,s,i,r,o;const a=[B_,V_],c=[];function u(l,h){return l[0]?0:1}return n=u(t),s=c[n]=a[n](t),r=new a_({}),{c(){e=C("main"),s.c(),i=B(),Ue(r.$$.fragment),k(e,"class","flow")},m(l,h){z(l,e,h),c[n].m(e,null),_(e,i),Re(r,e,null),o=!0},p(l,[h]){let d=n;n=u(l),n===d?c[n].p(l,h):(ai(),K(c[d],1,1,()=>{c[d]=null}),ci(),s=c[n],s?s.p(l,h):(s=c[n]=a[n](l),s.c()),V(s,1),s.m(e,i))},i(l){o||(V(s),V(r.$$.fragment,l),o=!0)},o(l){K(s),K(r.$$.fragment,l),o=!1},d(l){l&&x(e),c[n].d(),Oe(r)}}}function q_(t,e,n){let s;Nt.subscribe(r=>{n(0,s=r)});let i;return Bt.subscribe(r=>n(1,i=r)),t_(Nt.set),[s,i]}class z_ extends Ve{constructor(e){super(),$e(this,e,q_,j_,Me,{})}}new z_({target:document.getElementById("app")});
