var app=function(){"use strict";function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function o(t){return t()}function r(){return Object.create(null)}function i(t){t.forEach(o)}function s(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function u(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}const a="undefined"!=typeof window;let c=a?()=>window.performance.now():()=>Date.now(),d=a?t=>requestAnimationFrame(t):t;const f=new Set;function h(t){f.forEach((e=>{e.c(t)||(f.delete(e),e.f())})),0!==f.size&&d(h)}function p(t,e){t.appendChild(e)}function g(t,e,n){t.insertBefore(e,n||null)}function m(t){t.parentNode.removeChild(t)}function $(t){return document.createElement(t)}function b(){return t=" ",document.createTextNode(t);var t}function w(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}let x;function _(t){x=t}const M=[],E=[],A=[],k=[],z=Promise.resolve();let C=!1;function j(t){A.push(t)}let I=!1;const N=new Set;function O(){if(!I){I=!0;do{for(let t=0;t<M.length;t+=1){const e=M[t];_(e),W(e.$$)}for(_(null),M.length=0;E.length;)E.pop()();for(let t=0;t<A.length;t+=1){const e=A[t];N.has(e)||(N.add(e),e())}A.length=0}while(M.length);for(;k.length;)k.pop()();C=!1,I=!1,N.clear()}}function W(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}const P=new Set;let S;function T(t,e){t&&t.i&&(P.delete(t),t.i(e))}function X(t,e,n,o){if(t&&t.o){if(P.has(t))return;P.add(t),S.c.push((()=>{P.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const B="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function F(t,e,n,r){const{fragment:l,on_mount:u,on_destroy:a,after_update:c}=t.$$;l&&l.m(e,n),r||j((()=>{const e=u.map(o).filter(s);a?a.push(...e):i(e),t.$$.on_mount=[]})),c.forEach(j)}function Y(t,e){const n=t.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function D(t,e){-1===t.$$.dirty[0]&&(M.push(t),C||(C=!0,z.then(O)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function L(e,n,o,s,l,u,a=[-1]){const c=x;_(e);const d=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:l,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(c?c.$$.context:[]),callbacks:r(),dirty:a,skip_bound:!1};let f=!1;if(d.ctx=o?o(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&l(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),f&&D(e,t)),n})):[],d.update(),f=!0,i(d.before_update),d.fragment=!!s&&s(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(m)}else d.fragment&&d.fragment.c();n.intro&&T(e.$$.fragment),F(e,n.target,n.anchor,n.customElement),O()}_(c)}class R{$destroy(){Y(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function q(e){let n,o,r,i,s,l,u,a;return{c(){n=$("div"),o=$("div"),r=$("object"),i=b(),s=$("div"),y(r,"type","image/svg+xml"),y(r,"data",e[2]),v(r,"width","100%"),v(r,"height","100%"),y(r,"title","page"),y(s,"style",l=`background: ${e[5]}; pointer-events: none;`),y(s,"class","page-shadow svelte-134cm11"),y(o,"style",u=`position: relative; width: ${e[0]}px; height: 100%; overflow: hidden;`),y(n,"class","page svelte-134cm11"),y(n,"style",a=`z-index: ${e[1]}; left:${e[3]}; width: ${e[4]}%; overflow: hidden;`)},m(t,e){g(t,n,e),p(n,o),p(o,r),p(o,i),p(o,s)},p(t,[e]){4&e&&y(r,"data",t[2]),32&e&&l!==(l=`background: ${t[5]}; pointer-events: none;`)&&y(s,"style",l),1&e&&u!==(u=`position: relative; width: ${t[0]}px; height: 100%; overflow: hidden;`)&&y(o,"style",u),26&e&&a!==(a=`z-index: ${t[1]}; left:${t[3]}; width: ${t[4]}%; overflow: hidden;`)&&y(n,"style",a)},i:t,o:t,d(t){t&&m(n)}}}function H(t,e,n){let o,r,i,s,l,u,{doc:a}=e,{number:c}=e,{progress:d}=e,{pageWidth:f}=e,{shadowColor:h}=e,{shadowIntensity:p}=e,{shadow:g}=e;return t.$$set=t=>{"doc"in t&&n(6,a=t.doc),"number"in t&&n(7,c=t.number),"progress"in t&&n(8,d=t.progress),"pageWidth"in t&&n(0,f=t.pageWidth),"shadowColor"in t&&n(9,h=t.shadowColor),"shadowIntensity"in t&&n(10,p=t.shadowIntensity),"shadow"in t&&n(11,g=t.shadow)},t.$$.update=()=>{128&t.$$.dirty&&n(12,o=c%2==0),4224&t.$$.dirty&&n(1,r=o?-c:c),192&t.$$.dirty&&n(2,i=`./documents/${a}/${c}.svg`),4352&t.$$.dirty&&n(3,s=o?"50%":100*(1-d)+"%"),4352&t.$$.dirty&&n(4,l=o?50*(1-d):50*d),7936&t.$$.dirty&&n(5,u=g?o?`linear-gradient(90deg, #${h} 0%, rgba(0,0,0,0) ${p}%)`:`linear-gradient(270deg, #${h} ${100*(1-d)}%, rgba(0,0,0,0) ${100*(1-d)+p}%)`:"#00000000")},[f,r,i,s,l,u,a,c,d,h,p,g,o]}class U extends R{constructor(t){super(),L(this,t,H,q,l,{doc:6,number:7,progress:8,pageWidth:0,shadowColor:9,shadowIntensity:10,shadow:11})}}const G=[];function J(t){const e=t-1;return e*e*e+1}function K(t){return"[object Date]"===Object.prototype.toString.call(t)}function Q(t,e){if(t===e||t!=t)return()=>t;const n=typeof t;if(n!==typeof e||Array.isArray(t)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const n=e.map(((e,n)=>Q(t[n],e)));return t=>n.map((e=>e(t)))}if("object"===n){if(!t||!e)throw new Error("Object cannot be null");if(K(t)&&K(e)){t=t.getTime();const n=(e=e.getTime())-t;return e=>new Date(t+e*n)}const n=Object.keys(e),o={};return n.forEach((n=>{o[n]=Q(t[n],e[n])})),t=>{const e={};return n.forEach((n=>{e[n]=o[n](t)})),e}}if("number"===n){const n=e-t;return e=>t+e*n}throw new Error(`Cannot interpolate ${n} values`)}function V(o,r={}){const i=function(e,n=t){let o;const r=[];function i(t){if(l(e,t)&&(e=t,o)){const t=!G.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),G.push(n,e)}if(t){for(let t=0;t<G.length;t+=2)G[t][0](G[t+1]);G.length=0}}}return{set:i,update:function(t){i(t(e))},subscribe:function(s,l=t){const u=[s,l];return r.push(u),1===r.length&&(o=n(i)||t),s(e),()=>{const t=r.indexOf(u);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}(o);let s,u=o;function a(t,l){if(null==o)return i.set(o=t),Promise.resolve();u=t;let a=s,p=!1,{delay:g=0,duration:m=400,easing:$=e,interpolate:b=Q}=n(n({},r),l);if(0===m)return a&&(a.abort(),a=null),i.set(o=u),Promise.resolve();const w=c()+g;let y;return s=function(t){let e;return 0===f.size&&d(h),{promise:new Promise((n=>{f.add(e={c:t,f:n})})),abort(){f.delete(e)}}}((e=>{if(e<w)return!0;p||(y=b(o,t),"function"==typeof m&&(m=m(o,t)),p=!0),a&&(a.abort(),a=null);const n=e-w;return n>m?(i.set(o=t),!1):(i.set(o=y($(n/m))),!0)})),s.promise}return{set:a,update:(t,e)=>a(t(u,o),e),subscribe:i.subscribe}}const{window:Z}=B;function tt(t,e,n){const o=t.slice();return o[31]=e[n],o[33]=n,o}function et(t){let e,n;return e=new U({props:{doc:t[9],number:t[33],shadow:!(0==t[33]||0!=(t[33]==t[10]-1&&(t[10]-1)%2)),shadowColor:t[11],shadowIntensity:t[12],progress:Math.max(Math.min(t[8]-Math.floor(.5*t[33]),1),0),pageWidth:.98*t[6]*.5}}),{c(){var t;(t=e.$$.fragment)&&t.c()},m(t,o){F(e,t,o),n=!0},p(t,n){const o={};256&n[0]&&(o.progress=Math.max(Math.min(t[8]-Math.floor(.5*t[33]),1),0)),64&n[0]&&(o.pageWidth=.98*t[6]*.5),e.$set(o)},i(t){n||(T(e.$$.fragment,t),n=!0)},o(t){X(e.$$.fragment,t),n=!1},d(t){Y(e,t)}}}function nt(e){let n,o,r;return{c(){n=$("div"),y(n,"class","noselect svelte-sb9aiv"),y(n,"style",`z-index: ${e[10]+2}; width: 100%; height: 100%; position: absolute; top: 0px; left: 0px;`)},m(t,i){g(t,n,i),o||(r=[w(n,"mousemove",e[14]),w(n,"mouseleave",e[14]),w(n,"mouseup",e[14])],o=!0)},p:t,d(t){t&&m(n),o=!1,i(r)}}}function ot(t){let e,n,o,r,s,l,u,a,c,d,f,h,v,x;j(t[15]);let _=Array(t[10]),M=[];for(let e=0;e<_.length;e+=1)M[e]=et(tt(t,_,e));const E=t=>X(M[t],1,1,(()=>{M[t]=null}));let A=t[3]&&nt(t);return{c(){e=b(),n=$("main"),o=$("doc"),s=b();for(let t=0;t<M.length;t+=1)M[t].c();l=b(),u=$("div"),a=b(),A&&A.c(),c=b(),d=$("div"),y(o,"id","book-shadow"),y(o,"style",r=`height: 100%; position: absolute; width: ${t[4]}%; left: ${t[5]}%; z-index: -100000;`),y(o,"class","svelte-sb9aiv"),y(u,"class","noselect svelte-sb9aiv"),y(u,"style",`z-index: ${t[10]+1}; width: 3.5%; height: 100%; position: absolute; top: 0px; left: 0px;`),y(d,"class","noselect svelte-sb9aiv"),y(d,"style",`z-index: ${t[10]+1}; width: 3.5%; height: 100%; position: absolute; top: 0px; left: 96.5%;`),y(n,"style",f=`position: relative; width: ${.98*t[6]}px; height: ${.98*t[7]}px; z-index: -100000;`)},m(r,i){g(r,e,i),g(r,n,i),p(n,o),p(n,s);for(let t=0;t<M.length;t+=1)M[t].m(n,null);p(n,l),p(n,u),p(n,a),A&&A.m(n,null),p(n,c),p(n,d),t[16](n),h=!0,v||(x=[w(Z,"resize",t[15]),w(document.body,"mousemove",t[14]),w(u,"mousemove",t[14]),w(u,"mousedown",t[14]),w(u,"mouseup",t[14]),w(d,"mousemove",t[14]),w(d,"mousedown",t[14]),w(d,"mouseup",t[14])],v=!0)},p(t,e){if((!h||48&e[0]&&r!==(r=`height: 100%; position: absolute; width: ${t[4]}%; left: ${t[5]}%; z-index: -100000;`))&&y(o,"style",r),8e3&e[0]){let o;for(_=Array(t[10]),o=0;o<_.length;o+=1){const r=tt(t,_,o);M[o]?(M[o].p(r,e),T(M[o],1)):(M[o]=et(r),M[o].c(),T(M[o],1),M[o].m(n,l))}for(S={r:0,c:[],p:S},o=_.length;o<M.length;o+=1)E(o);S.r||i(S.c),S=S.p}t[3]?A?A.p(t,e):(A=nt(t),A.c(),A.m(n,c)):A&&(A.d(1),A=null),(!h||192&e[0]&&f!==(f=`position: relative; width: ${.98*t[6]}px; height: ${.98*t[7]}px; z-index: -100000;`))&&y(n,"style",f)},i(t){if(!h){for(let t=0;t<_.length;t+=1)T(M[t]);h=!0}},o(t){M=M.filter(Boolean);for(let t=0;t<M.length;t+=1)X(M[t]);h=!1},d(o){o&&m(e),o&&m(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(M,o),A&&A.d(),t[16](null),v=!1,i(x)}}}function rt(t,e,n){let o,r,i;const s=new URLSearchParams(window.location.search),l=s.get("doc"),a=Number.parseFloat(s.get("ratio")),c=Number.parseInt(s.get("pages")),d=s.get("shadow"),f=Number.parseFloat(s.get("shadowIntensity")),h=Math.floor(.5*(Number.parseFloat(s.get("page"))||0));let p,g,m,$=.1,b=!1,w=0,y=!1,v=50,x=50,_=V(h,{easing:J,duration:(t,e)=>b?1:Math.abs(t-e)/$*1e3+1});u(t,_,(t=>n(8,i=t)));let M=0;function A(t){let e=Math.min(t,1);n(4,v=50+100*Math.max(e-.5,0)),n(5,x=50-100*Math.max(e-.5,0))}A(h),_.subscribe(A);let k={x:0,y:0,down:!1};function z(){let t=p.getBoundingClientRect();return(k.x-t.left)/t.width}function C(){y||($=2,y=!0,_.update((t=>(M=Math.round(t),M))).then((()=>{y=!1})),n(3,b=!1))}return t.$$.update=()=>{3&t.$$.dirty[0]&&n(6,o=Math.min(m*(2*a),g)),3&t.$$.dirty[0]&&n(7,r=Math.min(g/(2*a),m))},[g,m,p,b,v,x,o,r,i,l,c,d,f,_,function(t){if(!p)return;let e=p.getBoundingClientRect();if(t.clientX-e.left<0)k.x-e.left>=0&&C();else if(t.clientX-e.left>e.width)k.x-e.left<=e.width&&C();else if(t.clientY-e.top<0)k.y-e.top<0&&C();else if(t.clientY-e.top>e.height)k.y-e.top<=e.height&&C();else{var o=k.x,r=k.down;k={x:t.clientX,y:t.clientY,down:0==(1&t.buttons)},r&&0==(1&t.buttons)?C():!r&&(1&t.buttons)>0&&function(){if(b)return;let t=z();_.update((e=>(t>.965&&e<Math.floor(.5*c)?(n(3,b=!0),w=-1):t<.035&&e>0&&(n(3,b=!0),w=1),e)))}(),o!=t.clientX&&function(){if(y)return;let t=z();b?_.update((e=>w<0?M+(1-t):M-t)):($=.05,_.update((e=>t>.965&&e<Math.floor(.5*c)?M+(1-t):t<.03&&e>0?M-t:Math.round(e))))}()}k={x:t.clientX,y:t.clientY,down:(1&t.buttons)>0}},function(){n(0,g=Z.innerWidth),n(1,m=Z.innerHeight)},function(t){E[t?"unshift":"push"]((()=>{p=t,n(2,p)}))}]}return new class extends R{constructor(t){super(),L(this,t,rt,ot,l,{},[-1,-1])}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
