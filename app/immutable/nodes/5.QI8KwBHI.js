import{S as b,U as k}from"../chunks/UserStats.5-icM607.js";import{s as S}from"../chunks/scheduler.CjuNoUbF.js";import{S as y,i as v,e as U,b as x,f as j,d as m,k as C,l as p,q as i,x as E,p as f,y as N,c as d,j as $,n as g,r as h,t as O,g as q,o as w}from"../chunks/index.06OY3Qxx.js";import{d as I}from"../chunks/fa-layers-text.svelte_svelte_type_style_lang.efQjc8pk.js";import{N as P}from"../chunks/Notification.JeRVQBwK.js";const T=!1,z=!0,A=!1,M=async({params:a})=>{const t=a.slug;return b.getSteamUser("profiles",t)},V=Object.freeze(Object.defineProperty({__proto__:null,csr:z,load:M,prerender:T,ssr:A},Symbol.toStringTag,{value:"Module"}));function B(a){let t,s;return t=new k({props:{steamUser:a[0]}}),{c(){d(t.$$.fragment)},l(e){$(t.$$.fragment,e)},m(e,n){g(t,e,n),s=!0},p(e,n){const o={};n&1&&(o.steamUser=e[0]),t.$set(o)},i(e){s||(f(t.$$.fragment,e),s=!0)},o(e){i(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function D(a){let t,s;return t=new P({props:{class:"bg-error",faIcon:I,$$slots:{default:[F]},$$scope:{ctx:a}}}),{c(){d(t.$$.fragment)},l(e){$(t.$$.fragment,e)},m(e,n){g(t,e,n),s=!0},p(e,n){const o={};n&3&&(o.$$scope={dirty:n,ctx:e}),t.$set(o)},i(e){s||(f(t.$$.fragment,e),s=!0)},o(e){i(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function F(a){let t=a[0].message+"",s;return{c(){s=O(t)},l(e){s=q(e,t)},m(e,n){p(e,s,n)},p(e,n){n&1&&t!==(t=e[0].message+"")&&w(s,t)},d(e){e&&m(s)}}}function G(a){let t,s,e,n;const o=[D,B],c=[];function _(r,l){return r[0].message?0:1}return s=_(a),e=c[s]=o[s](a),{c(){t=U("section"),e.c(),this.h()},l(r){t=x(r,"SECTION",{class:!0});var l=j(t);e.l(l),l.forEach(m),this.h()},h(){C(t,"class","min-h-screen mt-28")},m(r,l){p(r,t,l),c[s].m(t,null),n=!0},p(r,[l]){let u=s;s=_(r),s===u?c[s].p(r,l):(N(),i(c[u],1,1,()=>{c[u]=null}),E(),e=c[s],e?e.p(r,l):(e=c[s]=o[s](r),e.c()),f(e,1),e.m(t,null))},i(r){n||(f(e),n=!0)},o(r){i(e),n=!1},d(r){r&&m(t),c[s].d()}}}function H(a,t,s){let{data:e}=t;return a.$$set=n=>{"data"in n&&s(0,e=n.data)},[e]}class W extends y{constructor(t){super(),v(this,t,H,G,S,{data:0})}}export{W as component,V as universal};
