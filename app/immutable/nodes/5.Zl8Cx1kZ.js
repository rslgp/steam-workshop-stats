import{s as U,c as S,n as m}from"../chunks/scheduler.k2YUfsm8.js";import{S as E,i as T,e as $,b as d,f as C,d as c,k as x,l as f,p,q as _,t as g,g as h,m as j,z as w,c as b,s as H,j as k,a as M,A as N,n as v,r as y,o as O}from"../chunks/index.nUuZmCtc.js";import{h as q,u as z,S as A,U as L}from"../chunks/UserStats._XZ-Mh_r.js";import{p as P}from"../chunks/stores.3IygAoHr.js";import{$ as D,c as V,d as B}from"../chunks/fa-layers-text.svelte_svelte_type_style_lang.vCgZihGD.js";import{N as I}from"../chunks/Notification.KFwdaIab.js";const F=!1,G=!0,J=!1,ce=Object.freeze(Object.defineProperty({__proto__:null,csr:G,prerender:F,ssr:J},Symbol.toStringTag,{value:"Module"}));function K(o){let t,n=o[4]+"",e;return{c(){t=$("h2"),e=g(n)},l(a){t=d(a,"H2",{});var r=C(t);e=h(r,n),r.forEach(c)},m(a,r){f(a,t,r),j(t,e)},p:m,i:m,o:m,d(a){a&&c(t)}}}function Q(o){let t,n,e,a;const r=[W,R],s=[];function i(l,u){return l[3].message?0:1}return t=i(o),n=s[t]=r[t](o),{c(){n.c(),e=w()},l(l){n.l(l),e=w()},m(l,u){s[t].m(l,u),f(l,e,u),a=!0},p(l,u){n.p(l,u)},i(l){a||(p(n),a=!0)},o(l){_(n),a=!1},d(l){l&&c(e),s[t].d(l)}}}function R(o){let t,n;return t=new L({props:{steamUser:o[3]}}),{c(){b(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,a){v(t,e,a),n=!0},p:m,i(e){n||(p(t.$$.fragment,e),n=!0)},o(e){_(t.$$.fragment,e),n=!1},d(e){y(t,e)}}}function W(o){let t,n;return t=new I({props:{class:"bg-error",faIcon:B,$$slots:{default:[X]},$$scope:{ctx:o}}}),{c(){b(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,a){v(t,e,a),n=!0},p(e,a){const r={};a&32&&(r.$$scope={dirty:a,ctx:e}),t.$set(r)},i(e){n||(p(t.$$.fragment,e),n=!0)},o(e){_(t.$$.fragment,e),n=!1},d(e){y(t,e)}}}function X(o){let t=o[3].message+"",n;return{c(){n=g(t)},l(e){n=h(e,t)},m(e,a){f(e,n,a)},p:m,d(e){e&&c(n)}}}function Y(o){let t,n,e,a='<span class="loading loading-spinner loading-lg text-gray-100"></span>',r;return t=new I({props:{class:"bg-warning",faIcon:V,$$slots:{default:[Z]},$$scope:{ctx:o}}}),{c(){b(t.$$.fragment),n=H(),e=$("div"),e.innerHTML=a,this.h()},l(s){k(t.$$.fragment,s),n=M(s),e=d(s,"DIV",{class:!0,"data-svelte-h":!0}),N(e)!=="svelte-1gbd89i"&&(e.innerHTML=a),this.h()},h(){x(e,"class","text-center")},m(s,i){v(t,s,i),f(s,n,i),f(s,e,i),r=!0},p(s,i){const l={};i&33&&(l.$$scope={dirty:i,ctx:s}),t.$set(l)},i(s){r||(p(t.$$.fragment,s),r=!0)},o(s){_(t.$$.fragment,s),r=!1},d(s){s&&(c(n),c(e)),y(t,s)}}}function Z(o){let t=o[0]("notifications.disclaimer")+"",n;return{c(){n=g(t)},l(e){n=h(e,t)},m(e,a){f(e,n,a)},p(e,a){a&1&&t!==(t=e[0]("notifications.disclaimer")+"")&&O(n,t)},d(e){e&&c(n)}}}function ee(o){let t,n,e={ctx:o,current:null,token:null,hasCatch:!0,pending:Y,then:Q,catch:K,value:3,error:4,blocks:[,,,]};return q(o[1](),e),{c(){t=$("section"),e.block.c(),this.h()},l(a){t=d(a,"SECTION",{class:!0});var r=C(t);e.block.l(r),r.forEach(c),this.h()},h(){x(t,"class","min-h-screen mt-28")},m(a,r){f(a,t,r),e.block.m(t,e.anchor=null),e.mount=()=>t,e.anchor=null,n=!0},p(a,[r]){o=a,z(e,o,r)},i(a){n||(p(e.block),n=!0)},o(a){for(let r=0;r<3;r+=1){const s=e.blocks[r];_(s)}n=!1},d(a){a&&c(t),e.block.d(),e.token=null,e=null}}}function te(o,t,n){let e,a;S(o,P,s=>n(2,e=s)),S(o,D,s=>n(0,a=s));async function r(){return await A.getSteamUser("profiles",e.params.slug)}return[a,r]}class ie extends E{constructor(t){super(),T(this,t,te,ee,U,{})}}export{ie as component,ce as universal};
