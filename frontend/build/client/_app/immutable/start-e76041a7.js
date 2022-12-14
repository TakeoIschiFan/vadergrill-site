import{n as Re,s as rt,S as st,i as it,a as lt,e as F,c as ct,b as Y,g as me,t as z,d as _e,f as G,h as J,j as ft,o as Ie,k as ut,l as pt,m as dt,p as Se,q,r as ht,u as mt,v as _t,w as Q,x,y as Ue,z as ee,A as te,B as Me}from"./chunks/index-a04286cd.js";import{R as Ye,H as $e}from"./chunks/control-03134885.js";function gt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function wt(r){return r.split("%25").map(decodeURI).join("%25")}function yt(r){for(const e in r)r[e]=decodeURIComponent(r[e]);return r}const bt=["href","pathname","search","searchParams","toString","toJSON"];function vt(r,e){const n=new URL(r);for(const s of bt){let o=n[s];Object.defineProperty(n,s,{get(){return e(),o},enumerable:!0,configurable:!0})}return Et(n),n}function Et(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const kt="/__data.json";function Rt(r){return r.replace(/\/$/,"")+kt}const Z=[];function Te(r,e=Re){let n;const s=new Set;function o(l){if(rt(r,l)&&(r=l,n)){const h=!Z.length;for(const c of s)c[1](),Z.push(c,r);if(h){for(let c=0;c<Z.length;c+=2)Z[c][0](Z[c+1]);Z.length=0}}}function p(l){o(l(r))}function t(l,h=Re){const c=[l,h];return s.add(c),s.size===1&&(n=e(o)||Re),l(r),()=>{s.delete(c),s.size===0&&(n(),n=null)}}return{set:o,update:p,subscribe:t}}let We="",at="";function St(r){We=r.base,at=r.assets||We}function Xe(r){let e=r.baseURI;if(!e){const n=r.getElementsByTagName("base");e=n.length?n[0].href:r.URL}return e}function Ae(){return{x:pageXOffset,y:pageYOffset}}function Ze(r){let e,n=null,s=null,o=null;for(const t of r.composedPath())t instanceof Element&&(!e&&t.nodeName.toUpperCase()==="A"&&(e=t),n===null&&(n=Le(t,"data-sveltekit-noscroll")),s===null&&(s=Le(t,"data-sveltekit-prefetch")),o===null&&(o=Le(t,"data-sveltekit-reload")));const p=e&&new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI);return{a:e,url:p,options:{noscroll:n,prefetch:s,reload:o}}}function Le(r,e){const n=r.getAttribute(e);return n===null?n:n===""?!0:(n==="off",!1)}function Qe(r){const e=Te(r);let n=!0;function s(){n=!0,e.update(t=>t)}function o(t){n=!1,e.set(t)}function p(t){let l;return e.subscribe(h=>{(l===void 0||n&&h!==l)&&t(l=h)})}return{notify:s,set:o,subscribe:p}}function Lt(){const{set:r,subscribe:e}=Te(!1);let n;async function s(){clearTimeout(n);const o=await fetch(`${at}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(o.ok){const{version:p}=await o.json(),t=p!=="1671014647356";return t&&(r(!0),clearTimeout(n)),t}else throw new Error(`Version check failed: ${o.status}`)}return{subscribe:e,check:s}}function Ot(r){let e=5381;if(typeof r=="string"){let n=r.length;for(;n;)e=e*33^r.charCodeAt(--n)}else if(ArrayBuffer.isView(r)){const n=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let s=n.length;for(;s;)e=e*33^n[--s]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const ge=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const s=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;he.delete(s)}return ge(r,e)};const he=new Map;function It(r,e,n){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;(n==null?void 0:n.body)&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&(o+=`[data-hash="${Ot(n.body)}"]`);const p=document.querySelector(o);if(p!=null&&p.textContent){const{body:t,...l}=JSON.parse(p.textContent),h=p.getAttribute("data-ttl");return h&&he.set(e,{body:t,init:l,ttl:1e3*Number(h)}),Promise.resolve(new Response(t,l))}return ge(r,n)}function $t(r,e){const n=he.get(r);if(n){if(performance.now()<n.ttl)return new Response(n.body,n.init);he.delete(r)}return ge(r,e)}const At=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function jt(r){const e=[],n=[],s=[];let o=!0;return{pattern:r==="/"?/^\/$/:new RegExp(`^${Ut(r).map((t,l,h)=>{const c=decodeURIComponent(t),g=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(c);if(g)return e.push(g[1]),n.push(g[2]),s.push(!1),"(?:/(.*))?";const w=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(c);if(w)return e.push(w[1]),n.push(w[2]),s.push(!0),"(?:/([^/]+))?";const L=l===h.length-1;return c?"/"+c.split(/\[(.+?)\](?!\])/).map((I,V)=>{if(V%2){const N=At.exec(I);if(!N)throw new Error(`Invalid param: ${I}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,ne,W,le,re]=N;return e.push(le),n.push(re),s.push(!!ne),W?"(.*?)":ne?"([^/]*)?":"([^/]+?)"}return L&&I.includes(".")&&(o=!1),I.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join(""):void 0}).join("")}${o?"/?":""}$`),names:e,types:n,optional:s}}function Pt(r){return!/^\([^)]+\)$/.test(r)}function Ut(r){return r.slice(1).split("/").filter(Pt)}function Tt(r,{names:e,types:n,optional:s},o){const p={};for(let t=0;t<e.length;t+=1){const l=e[t],h=n[t];let c=r[t+1];if(c||!s[t]){if(h){const g=o[h];if(!g)throw new Error(`Missing "${h}" param matcher`);if(!g(c))return}p[l]=c!=null?c:""}}return p}function Nt(r,e,n,s){const o=new Set(e);return Object.entries(n).map(([l,[h,c,g]])=>{const{pattern:w,names:L,types:K,optional:H}=jt(l),I={id:l,exec:V=>{const N=w.exec(V);if(N)return Tt(N,{names:L,types:K,optional:H},s)},errors:[1,...g||[]].map(V=>r[V]),layouts:[0,...c||[]].map(t),leaf:p(h)};return I.errors.length=I.layouts.length=Math.max(I.errors.length,I.layouts.length),I});function p(l){const h=l<0;return h&&(l=~l),[h,r[l]]}function t(l){return l===void 0?l:[o.has(l),r[l]]}}function Dt(r){let e,n,s;var o=r[0][0];function p(t){return{props:{data:t[2],form:t[1]}}}return o&&(e=Q(o,p(r))),{c(){e&&x(e.$$.fragment),n=F()},l(t){e&&Ue(e.$$.fragment,t),n=F()},m(t,l){e&&ee(e,t,l),Y(t,n,l),s=!0},p(t,l){const h={};if(l&4&&(h.data=t[2]),l&2&&(h.form=t[1]),o!==(o=t[0][0])){if(e){me();const c=e;z(c.$$.fragment,1,0,()=>{te(c,1)}),_e()}o?(e=Q(o,p(t)),x(e.$$.fragment),G(e.$$.fragment,1),ee(e,n.parentNode,n)):e=null}else o&&e.$set(h)},i(t){s||(e&&G(e.$$.fragment,t),s=!0)},o(t){e&&z(e.$$.fragment,t),s=!1},d(t){t&&J(n),e&&te(e,t)}}}function Vt(r){let e,n,s;var o=r[0][0];function p(t){return{props:{data:t[2],$$slots:{default:[qt]},$$scope:{ctx:t}}}}return o&&(e=Q(o,p(r))),{c(){e&&x(e.$$.fragment),n=F()},l(t){e&&Ue(e.$$.fragment,t),n=F()},m(t,l){e&&ee(e,t,l),Y(t,n,l),s=!0},p(t,l){const h={};if(l&4&&(h.data=t[2]),l&523&&(h.$$scope={dirty:l,ctx:t}),o!==(o=t[0][0])){if(e){me();const c=e;z(c.$$.fragment,1,0,()=>{te(c,1)}),_e()}o?(e=Q(o,p(t)),x(e.$$.fragment),G(e.$$.fragment,1),ee(e,n.parentNode,n)):e=null}else o&&e.$set(h)},i(t){s||(e&&G(e.$$.fragment,t),s=!0)},o(t){e&&z(e.$$.fragment,t),s=!1},d(t){t&&J(n),e&&te(e,t)}}}function qt(r){let e,n,s;var o=r[0][1];function p(t){return{props:{data:t[3],form:t[1]}}}return o&&(e=Q(o,p(r))),{c(){e&&x(e.$$.fragment),n=F()},l(t){e&&Ue(e.$$.fragment,t),n=F()},m(t,l){e&&ee(e,t,l),Y(t,n,l),s=!0},p(t,l){const h={};if(l&8&&(h.data=t[3]),l&2&&(h.form=t[1]),o!==(o=t[0][1])){if(e){me();const c=e;z(c.$$.fragment,1,0,()=>{te(c,1)}),_e()}o?(e=Q(o,p(t)),x(e.$$.fragment),G(e.$$.fragment,1),ee(e,n.parentNode,n)):e=null}else o&&e.$set(h)},i(t){s||(e&&G(e.$$.fragment,t),s=!0)},o(t){e&&z(e.$$.fragment,t),s=!1},d(t){t&&J(n),e&&te(e,t)}}}function xe(r){let e,n=r[5]&&et(r);return{c(){e=ut("div"),n&&n.c(),this.h()},l(s){e=pt(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=dt(e);n&&n.l(o),o.forEach(J),this.h()},h(){Se(e,"id","svelte-announcer"),Se(e,"aria-live","assertive"),Se(e,"aria-atomic","true"),q(e,"position","absolute"),q(e,"left","0"),q(e,"top","0"),q(e,"clip","rect(0 0 0 0)"),q(e,"clip-path","inset(50%)"),q(e,"overflow","hidden"),q(e,"white-space","nowrap"),q(e,"width","1px"),q(e,"height","1px")},m(s,o){Y(s,e,o),n&&n.m(e,null)},p(s,o){s[5]?n?n.p(s,o):(n=et(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(s){s&&J(e),n&&n.d()}}}function et(r){let e;return{c(){e=ht(r[6])},l(n){e=mt(n,r[6])},m(n,s){Y(n,e,s)},p(n,s){s&64&&_t(e,n[6])},d(n){n&&J(e)}}}function Bt(r){let e,n,s,o,p;const t=[Vt,Dt],l=[];function h(g,w){return g[0][1]?0:1}e=h(r),n=l[e]=t[e](r);let c=r[4]&&xe(r);return{c(){n.c(),s=lt(),c&&c.c(),o=F()},l(g){n.l(g),s=ct(g),c&&c.l(g),o=F()},m(g,w){l[e].m(g,w),Y(g,s,w),c&&c.m(g,w),Y(g,o,w),p=!0},p(g,[w]){let L=e;e=h(g),e===L?l[e].p(g,w):(me(),z(l[L],1,1,()=>{l[L]=null}),_e(),n=l[e],n?n.p(g,w):(n=l[e]=t[e](g),n.c()),G(n,1),n.m(s.parentNode,s)),g[4]?c?c.p(g,w):(c=xe(g),c.c(),c.m(o.parentNode,o)):c&&(c.d(1),c=null)},i(g){p||(G(n),p=!0)},o(g){z(n),p=!1},d(g){l[e].d(g),g&&J(s),c&&c.d(g),g&&J(o)}}}function Ct(r,e,n){let{stores:s}=e,{page:o}=e,{components:p}=e,{form:t}=e,{data_0:l=null}=e,{data_1:h=null}=e;ft(s.page.notify);let c=!1,g=!1,w=null;return Ie(()=>{const L=s.page.subscribe(()=>{c&&(n(5,g=!0),n(6,w=document.title||"untitled page"))});return n(4,c=!0),L}),r.$$set=L=>{"stores"in L&&n(7,s=L.stores),"page"in L&&n(8,o=L.page),"components"in L&&n(0,p=L.components),"form"in L&&n(1,t=L.form),"data_0"in L&&n(2,l=L.data_0),"data_1"in L&&n(3,h=L.data_1)},r.$$.update=()=>{r.$$.dirty&384&&s.page.set(o)},[p,t,l,h,c,g,w,s,o]}class Ft extends st{constructor(e){super(),it(this,e,Ct,Bt,rt,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const zt=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),Gt=function(r,e){return new URL(r,e).href},tt={},B=function(e,n,s){if(!n||n.length===0)return e();const o=document.getElementsByTagName("link");return Promise.all(n.map(p=>{if(p=Gt(p,s),p in tt)return;tt[p]=!0;const t=p.endsWith(".css"),l=t?'[rel="stylesheet"]':"";if(!!s)for(let g=o.length-1;g>=0;g--){const w=o[g];if(w.href===p&&(!t||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${p}"]${l}`))return;const c=document.createElement("link");if(c.rel=t?"stylesheet":zt,t||(c.as="script",c.crossOrigin=""),c.href=p,document.head.appendChild(c),t)return new Promise((g,w)=>{c.addEventListener("load",g),c.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${p}`)))})})).then(()=>e())},Jt={},we=[()=>B(()=>import("./chunks/0-979ce80a.js"),["./chunks/0-979ce80a.js","./components/pages/_layout.svelte-dd81562d.js","./chunks/index-a04286cd.js","./chunks/vadergrill-fab5cae0.js","./assets/_layout-a8036053.css","./assets/app-2c95866a.css"],import.meta.url),()=>B(()=>import("./chunks/1-d5184443.js"),["./chunks/1-d5184443.js","./components/pages/_error.svelte-1b0c9050.js","./chunks/index-a04286cd.js","./chunks/control-03134885.js","./assets/_error-7fb4a8ac.css","./assets/app-2c95866a.css"],import.meta.url),()=>B(()=>import("./chunks/2-b6c908ff.js"),["./chunks/2-b6c908ff.js","./components/pages/_page.svelte-19e976fb.js","./chunks/index-a04286cd.js","./chunks/vadergrill-fab5cae0.js","./assets/_page-7ca5da88.css"],import.meta.url),()=>B(()=>import("./chunks/3-0d69512d.js"),["./chunks/3-0d69512d.js","./components/pages/activiteiten/_page.svelte-061a78f7.js","./chunks/index-a04286cd.js","./assets/_page-cacda0bd.css"],import.meta.url),()=>B(()=>import("./chunks/4-9a0dfa73.js"),["./chunks/4-9a0dfa73.js","./components/pages/activiteiten/_slug_/_page.svelte-86bc7bdc.js","./chunks/index-a04286cd.js","./assets/_page-3c3972d5.css"],import.meta.url),()=>B(()=>import("./chunks/5-8ac0a37c.js"),["./chunks/5-8ac0a37c.js","./components/pages/login/_page.svelte-73d55225.js","./chunks/index-a04286cd.js","./assets/_page-38adcfc9.css"],import.meta.url),()=>B(()=>import("./chunks/6-7a9352cc.js"),["./chunks/6-7a9352cc.js","./components/pages/over-ons/_page.svelte-ee61cb0b.js","./chunks/index-a04286cd.js","./assets/_page-18cff725.css"],import.meta.url),()=>B(()=>import("./chunks/7-2202e543.js"),["./chunks/7-2202e543.js","./components/pages/register/_page.svelte-82f01787.js","./chunks/index-a04286cd.js","./assets/_page-38adcfc9.css"],import.meta.url),()=>B(()=>import("./chunks/8-5dc684df.js"),["./chunks/8-5dc684df.js","./components/pages/woordenboek/_page.svelte-172f0b72.js","./chunks/index-a04286cd.js"],import.meta.url)],Kt=[0],Ht={"/":[-3],"/activiteiten":[-4],"/activiteiten/[slug]":[-5],"/login":[-6],"/over-ons":[-7],"/register":[-8],"/woordenboek":[-9]},Mt={handleError:({error:r})=>{console.error(r)}};function Yt(r){r.client}const M={url:Qe({}),page:Qe({}),navigating:Te(null),updated:Lt()};async function Wt(r){var e;for(const n in r)if(typeof((e=r[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([s,o])=>[s,await o])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Xt=-1,Zt=-2,Qt=-3,xt=-4,en=-5,tn=-6;function nn(r){if(typeof r=="number")return s(r,!0);if(!Array.isArray(r)||r.length===0)throw new Error("Invalid input");const e=r,n=Array(e.length);function s(o,p=!1){if(o===Xt)return;if(o===Qt)return NaN;if(o===xt)return 1/0;if(o===en)return-1/0;if(o===tn)return-0;if(p)throw new Error("Invalid input");if(o in n)return n[o];const t=e[o];if(!t||typeof t!="object")n[o]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[o]=new Date(t[1]);break;case"Set":const h=new Set;n[o]=h;for(let w=1;w<t.length;w+=1)h.add(s(t[w]));break;case"Map":const c=new Map;n[o]=c;for(let w=1;w<t.length;w+=2)c.set(s(t[w]),s(t[w+1]));break;case"RegExp":n[o]=new RegExp(t[1],t[2]);break;case"Object":n[o]=Object(t[1]);break;case"BigInt":n[o]=BigInt(t[1]);break;case"null":const g=Object.create(null);n[o]=g;for(let w=1;w<t.length;w+=2)g[t[w]]=s(t[w+1]);break}else{const l=new Array(t.length);n[o]=l;for(let h=0;h<t.length;h+=1){const c=t[h];c!==Zt&&(l[h]=s(c))}}else{const l={};n[o]=l;for(const h in t){const c=t[h];l[h]=s(c)}}return n[o]}return s(0)}const ot="sveltekit:scroll",C="sveltekit:index",ue=Nt(we,Kt,Ht,Jt),je=we[0],Pe=we[1];je();Pe();let ie={};try{ie=JSON.parse(sessionStorage[ot])}catch{}function Oe(r){ie[r]=Ae()}function rn({target:r,base:e,trailing_slash:n}){var Je;const s=[];let o=null;const p={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},l=!1,h=!1,c=!0,g=!1,w=!1,L=!1,K=!1,H,I=(Je=history.state)==null?void 0:Je[C];I||(I=Date.now(),history.replaceState({...history.state,[C]:I},"",location.href));const V=ie[I];V&&(history.scrollRestoration="manual",scrollTo(V.x,V.y));let N,ne,W;async function le(){W=W||Promise.resolve(),await W,W=null;const a=new URL(location.href),f=ve(a,!0);o=null,await De(f,a,[])}async function re(a,{noScroll:f=!1,replaceState:d=!1,keepFocus:i=!1,state:u={},invalidateAll:m=!1},_,v){return typeof a=="string"&&(a=new URL(a,Xe(document))),Ee({url:a,scroll:f?Ae():null,keepfocus:i,redirect_chain:_,details:{state:u,replaceState:d},nav_token:v,accepted:()=>{m&&(K=!0)},blocked:()=>{},type:"goto"})}async function Ne(a){const f=ve(a,!1);if(!f)throw new Error(`Attempted to prefetch a URL that does not belong to this app: ${a}`);return o={id:f.id,promise:Be(f)},o.promise}async function De(a,f,d,i,u={},m){var v,E;ne=u;let _=a&&await Be(a);if(_||(_=await Ge(f,{id:null},se(new Error(`Not found: ${f.pathname}`),{url:f,params:{},route:{id:null}}),404)),f=(a==null?void 0:a.url)||f,ne!==u)return!1;if(_.type==="redirect")if(d.length>10||d.includes(f.pathname))_=await ce({status:500,error:se(new Error("Redirect loop"),{url:f,params:{},route:{id:null}}),url:f,route:{id:null}});else return re(new URL(_.location,f).href,{},[...d,f.pathname],u),!1;else((E=(v=_.props)==null?void 0:v.page)==null?void 0:E.status)>=400&&await M.updated.check()&&await fe(f);if(s.length=0,K=!1,g=!0,i&&i.details){const{details:y}=i,b=y.replaceState?0:1;y.state[C]=I+=b,history[y.replaceState?"replaceState":"pushState"](y.state,"",f)}if(o=null,h){t=_.state,_.props.page&&(_.props.page.url=f);const y=de();H.$set(_.props),y()}else Ve(_);if(i){const{scroll:y,keepfocus:b}=i;if(!b){const R=document.body,j=R.getAttribute("tabindex");R.tabIndex=-1,R.focus({preventScroll:!0}),setTimeout(()=>{var O;(O=getSelection())==null||O.removeAllRanges()}),j!==null?R.setAttribute("tabindex",j):R.removeAttribute("tabindex")}if(await Me(),c){const R=f.hash&&document.getElementById(f.hash.slice(1));y?scrollTo(y.x,y.y):R?R.scrollIntoView():scrollTo(0,0)}}else await Me();c=!0,_.props.page&&(N=_.props.page),m&&m(),g=!1}function Ve(a){var u,m;t=a.state;const f=document.querySelector("style[data-sveltekit]");f&&f.remove(),N=a.props.page;const d=de();H=new Ft({target:r,props:{...a.props,stores:M},hydrate:!0}),d();const i={from:null,to:pe("to",{params:t.params,route:{id:(m=(u=t.route)==null?void 0:u.id)!=null?m:null},url:new URL(location.href)}),willUnload:!1,type:"enter"};p.after_navigate.forEach(_=>_(i)),h=!0}async function ae({url:a,params:f,branch:d,status:i,error:u,route:m,form:_}){var j;const v=d.filter(Boolean),E={type:"loaded",state:{url:a,params:f,branch:d,error:u,route:m},props:{components:v.map(O=>O.node.component)}};_!==void 0&&(E.props.form=_);let y={},b=!N;for(let O=0;O<v.length;O+=1){const U=v[O];y={...y,...U.data},(b||!t.branch.some(T=>T===U))&&(E.props[`data_${O}`]=y,b=b||Object.keys((j=U.data)!=null?j:{}).length>0)}if(b||(b=Object.keys(N.data).length!==Object.keys(y).length),!t.url||a.href!==t.url.href||t.error!==u||_!==void 0||b){E.props.page={error:u,params:f,route:m,status:i,url:a,form:_,data:b?y:N.data};const O=(U,T)=>{Object.defineProperty(E.props.page,U,{get:()=>{throw new Error(`$page.${U} has been replaced by $page.url.${T}`)}})};O("origin","origin"),O("path","pathname"),O("query","searchParams")}return E}async function ye({loader:a,parent:f,url:d,params:i,route:u,server_data_node:m}){var y,b,R,j,O;let _=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},E=await a();if((y=E.shared)!=null&&y.load){let U=function(...S){for(const D of S){const{href:k}=new URL(D,d);v.dependencies.add(k)}};const T={route:{get id(){return v.route=!0,u.id}},params:new Proxy(i,{get:(S,D)=>(v.params.add(D),S[D])}),data:(b=m==null?void 0:m.data)!=null?b:null,url:vt(d,()=>{v.url=!0}),async fetch(S,D){let k;S instanceof Request?(k=S.url,D={body:S.method==="GET"||S.method==="HEAD"?void 0:await S.blob(),cache:S.cache,credentials:S.credentials,headers:S.headers,integrity:S.integrity,keepalive:S.keepalive,method:S.method,mode:S.mode,redirect:S.redirect,referrer:S.referrer,referrerPolicy:S.referrerPolicy,signal:S.signal,...D}):k=S;const $=new URL(k,d).href;return U($),h?$t($,D):It(k,$,D)},setHeaders:()=>{},depends:U,parent(){return v.parent=!0,f()}};Object.defineProperties(T,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},routeId:{get(){throw new Error("routeId has been replaced by route.id")},enumerable:!1}}),_=(R=await E.shared.load.call(null,T))!=null?R:null,_=_?await Wt(_):null}return{node:E,loader:a,server:m,shared:(j=E.shared)!=null&&j.load?{type:"data",data:_,uses:v}:null,data:(O=_!=null?_:m==null?void 0:m.data)!=null?O:null}}function qe(a,f,d,i,u){if(K)return!0;if(!i)return!1;if(i.parent&&a||i.route&&f||i.url&&d)return!0;for(const m of i.params)if(u[m]!==t.params[m])return!0;for(const m of i.dependencies)if(s.some(_=>_(new URL(m))))return!0;return!1}function be(a,f){var d,i;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((d=a.uses.dependencies)!=null?d:[]),params:new Set((i=a.uses.params)!=null?i:[]),parent:!!a.uses.parent,route:!!a.uses.route,url:!!a.uses.url}}:(a==null?void 0:a.type)==="skip"&&f!=null?f:null}async function Be({id:a,invalidating:f,url:d,params:i,route:u}){var D;if((o==null?void 0:o.id)===a)return o.promise;const{errors:m,layouts:_,leaf:v}=u,E=[..._,v];m.forEach(k=>k==null?void 0:k().catch(()=>{})),E.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let y=null;const b=t.url?a!==t.url.pathname+t.url.search:!1,R=t.route?a!==t.route.id:!1,j=E.reduce((k,$,P)=>{var oe;const A=t.branch[P],X=!!($!=null&&$[0])&&((A==null?void 0:A.loader)!==$[1]||qe(k.some(Boolean),R,b,(oe=A.server)==null?void 0:oe.uses,i));return k.push(X),k},[]);if(j.some(Boolean)){try{y=await nt(d,j)}catch(k){return ce({status:500,error:se(k,{url:d,params:i,route:{id:u.id}}),url:d,route:u})}if(y.type==="redirect")return y}const O=y==null?void 0:y.nodes;let U=!1;const T=E.map(async(k,$)=>{var oe;if(!k)return;const P=t.branch[$],A=O==null?void 0:O[$];if((!A||A.type==="skip")&&k[1]===(P==null?void 0:P.loader)&&!qe(U,R,b,(oe=P.shared)==null?void 0:oe.uses,i))return P;if(U=!0,(A==null?void 0:A.type)==="error")throw A;return ye({loader:k[1],url:d,params:i,route:u,parent:async()=>{var He;const Ke={};for(let ke=0;ke<$;ke+=1)Object.assign(Ke,(He=await T[ke])==null?void 0:He.data);return Ke},server_data_node:be(A===void 0&&k[0]?{type:"skip"}:A!=null?A:null,P==null?void 0:P.server)})});for(const k of T)k.catch(()=>{});const S=[];for(let k=0;k<E.length;k+=1)if(E[k])try{S.push(await T[k])}catch($){if($ instanceof Ye)return{type:"redirect",location:$.location};let P=500,A;O!=null&&O.includes($)?(P=(D=$.status)!=null?D:P,A=$.error):$ instanceof $e?(P=$.status,A=$.body):A=se($,{params:i,url:d,route:{id:u.id}});const X=await Ce(k,S,m);return X?await ae({url:d,params:i,branch:S.slice(0,X.idx).concat(X.node),status:P,error:A,route:u}):await Ge(d,{id:u.id},A,P)}else S.push(void 0);return await ae({url:d,params:i,branch:S,status:200,error:null,route:u,form:f?void 0:null})}async function Ce(a,f,d){for(;a--;)if(d[a]){let i=a;for(;!f[i];)i-=1;try{return{idx:i+1,node:{node:await d[a](),loader:d[a],data:{},server:null,shared:null}}}catch{continue}}}async function ce({status:a,error:f,url:d,route:i}){var y;const u={},m=await je();let _=null;if(m.server)try{const b=await nt(d,[!0]);if(b.type!=="data"||b.nodes[0]&&b.nodes[0].type!=="data")throw 0;_=(y=b.nodes[0])!=null?y:null}catch{(d.origin!==location.origin||d.pathname!==location.pathname||l)&&await fe(d)}const v=await ye({loader:je,url:d,params:u,route:i,parent:()=>Promise.resolve({}),server_data_node:be(_)}),E={node:await Pe(),loader:Pe,shared:null,server:null,data:null};return await ae({url:d,params:u,branch:[v,E],status:a,error:f,route:null})}function ve(a,f){if(Fe(a))return;const d=wt(a.pathname.slice(e.length)||"/");for(const i of ue){const u=i.exec(d);if(u){const m=new URL(a.origin+gt(a.pathname,n)+a.search+a.hash);return{id:m.pathname+m.search,invalidating:f,route:i,params:yt(u),url:m}}}}function Fe(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}function ze({url:a,type:f,intent:d,delta:i}){var v,E,y,b,R;let u=!1;const m={from:pe("from",{params:t.params,route:{id:(E=(v=t.route)==null?void 0:v.id)!=null?E:null},url:t.url}),to:pe("to",{params:(y=d==null?void 0:d.params)!=null?y:null,route:{id:(R=(b=d==null?void 0:d.route)==null?void 0:b.id)!=null?R:null},url:a}),willUnload:!d,type:f};i!==void 0&&(m.delta=i);const _={...m,cancel:()=>{u=!0}};return p.before_navigate.forEach(j=>j(_)),u?null:m}async function Ee({url:a,scroll:f,keepfocus:d,redirect_chain:i,details:u,type:m,delta:_,nav_token:v,accepted:E,blocked:y}){const b=ve(a,!1),R=ze({url:a,type:m,delta:_,intent:b});if(!R){y();return}Oe(I),E(),w=!0,h&&M.navigating.set(R),await De(b,a,i,{scroll:f,keepfocus:d,details:u},v,()=>{w=!1,p.after_navigate.forEach(j=>j(R)),M.navigating.set(null)})}async function Ge(a,f,d,i){return a.origin===location.origin&&a.pathname===location.pathname&&!l?await ce({status:i,error:d,url:a,route:f}):await fe(a)}function fe(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{Ie(()=>(p.after_navigate.push(a),()=>{const f=p.after_navigate.indexOf(a);p.after_navigate.splice(f,1)}))},before_navigate:a=>{Ie(()=>(p.before_navigate.push(a),()=>{const f=p.before_navigate.indexOf(a);p.before_navigate.splice(f,1)}))},disable_scroll_handling:()=>{(g||!h)&&(c=!1)},goto:(a,f={})=>{if("keepfocus"in f)throw new Error("`keepfocus` has been renamed to `keepFocus` (note the difference in casing)");if("noscroll"in f)throw new Error("`noscroll` has been renamed to `noScroll` (note the difference in casing)");return re(a,f,[])},invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")s.push(a);else{const{href:f}=new URL(a,location.href);s.push(d=>d.href===f)}return le()},invalidateAll:()=>(K=!0,le()),prefetch:async a=>{const f=new URL(a,Xe(document));await Ne(f)},prefetch_routes:async a=>{const d=(a?ue.filter(i=>a.some(u=>i.exec(u))):ue).map(i=>Promise.all([...i.layouts,i.leaf].map(u=>u==null?void 0:u[1]())));await Promise.all(d)},apply_action:async a=>{if(a.type==="error"){const f=new URL(location.href),{branch:d,route:i}=t;if(!i)return;const u=await Ce(t.branch.length,d,i.errors);if(u){const m=await ae({url:f,params:t.params,branch:d.slice(0,u.idx).concat(u.node),status:500,error:a.error,route:i});t=m.state;const _=de();H.$set(m.props),_()}}else if(a.type==="redirect")re(a.location,{invalidateAll:!0},[]);else{const f={form:a.data,page:{...N,form:a.data,status:a.status}},d=de();H.$set(f),d()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",i=>{var m,_;let u=!1;if(!w){const v={from:pe("from",{params:t.params,route:{id:(_=(m=t.route)==null?void 0:m.id)!=null?_:null},url:t.url}),to:null,willUnload:!0,type:"leave",cancel:()=>u=!0};p.before_navigate.forEach(E=>E(v))}u?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Oe(I);try{sessionStorage[ot]=JSON.stringify(ie)}catch{}}});const a=i=>{const{url:u,options:m}=Ze(i);if(u&&m.prefetch){if(Fe(u))return;Ne(u)}};let f;const d=i=>{clearTimeout(f),f=setTimeout(()=>{var u;(u=i.target)==null||u.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",d),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const{a:u,url:m,options:_}=Ze(i);if(!u||!m)return;const v=u instanceof SVGAElement;if(!v&&m.protocol!==location.protocol&&!(m.protocol==="https:"||m.protocol==="http:")||u.hasAttribute("download"))return;if((u.getAttribute("rel")||"").split(/\s+/).includes("external")||_.reload||(v?u.target.baseVal:u.target)){ze({url:m,type:"link"})||i.preventDefault(),w=!0;return}const[y,b]=m.href.split("#");if(b!==void 0&&y===location.href.split("#")[0]){L=!0,Oe(I),t.url=m,M.page.set({...N,url:m}),M.page.notify();return}Ee({url:m,scroll:_.noscroll?Ae():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:m.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),addEventListener("popstate",i=>{if(i.state){if(i.state[C]===I)return;const u=i.state[C]-I;Ee({url:new URL(location.href),scroll:ie[i.state[C]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{I=i.state[C]},blocked:()=>{history.go(-u)},type:"popstate",delta:u})}}),addEventListener("hashchange",()=>{L&&(L=!1,history.replaceState({...history.state,[C]:++I},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&M.navigating.set(null)})},_hydrate:async({status:a,error:f,node_ids:d,params:i,route:u,data:m,form:_})=>{var y;l=!0;const v=new URL(location.href);let E;try{const b=d.map(async(R,j)=>{const O=m[j];return ye({loader:we[R],url:v,params:i,route:u,parent:async()=>{const U={};for(let T=0;T<j;T+=1)Object.assign(U,(await b[T]).data);return U},server_data_node:be(O)})});E=await ae({url:v,params:i,branch:await Promise.all(b),status:a,error:f,form:_,route:(y=ue.find(({id:R})=>R===u.id))!=null?y:null})}catch(b){if(b instanceof Ye){await fe(new URL(b.location,location.href));return}E=await ce({status:b instanceof $e?b.status:500,error:se(b,{url:v,params:i,route:u}),url:v,route:u})}Ve(E)}}}async function nt(r,e){var p;const n=new URL(r);n.pathname=Rt(r.pathname);const s=await ge(n.href,{headers:{"x-sveltekit-invalidated":e.map(t=>t?"1":"").join(",")}}),o=await s.json();if(!s.ok)throw new Error(o);return(p=o.nodes)==null||p.forEach(t=>{var l,h;(t==null?void 0:t.type)==="data"&&(t.data=nn(t.data),t.uses={dependencies:new Set((l=t.uses.dependencies)!=null?l:[]),params:new Set((h=t.uses.params)!=null?h:[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),o}function se(r,e){var n;return r instanceof $e?r.body:(n=Mt.handleError({error:r,event:e}))!=null?n:{message:e.route.id!=null?"Internal Error":"Not Found"}}const an=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function pe(r,e){for(const n of an)Object.defineProperty(e,n,{get(){throw new Error(`The navigation shape changed - ${r}.${n} should now be ${r}.url.${n}`)},enumerable:!1});return Object.defineProperty(e,"routeId",{get(){throw new Error(`The navigation shape changed - ${r}.routeId should now be ${r}.route.id`)},enumerable:!1}),e}function de(){return()=>{}}async function ln({env:r,hydrate:e,paths:n,target:s,trailing_slash:o}){St(n);const p=rn({target:s,base:n.base,trailing_slash:o});Yt({client:p}),e?await p._hydrate(e):p.goto(location.href,{replaceState:!0}),p._start_router()}export{ln as start};
