function k(){}function w(t,n){for(const e in n)t[e]=n[e];return t}function A(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function j(t){return t()}function B(){return Object.create(null)}function E(t){t.forEach(j)}function C(t){return typeof t=="function"}function F(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let f;function P(t,n){return t===n?!0:(f||(f=document.createElement("a")),f.href=n,t===f.href)}function S(t){return Object.keys(t).length===0}function q(t,...n){if(t==null){for(const r of n)r(void 0);return k}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function U(t,n,e){t.$$.on_destroy.push(q(n,e))}function D(t,n,e,r){if(t){const o=y(t,n,e,r);return t[0](o)}}function y(t,n,e,r){return t[1]&&r?w(e.ctx.slice(),t[1](r(n))):e.ctx}function G(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if(n.dirty===void 0)return o;if(typeof o=="object"){const a=[],_=Math.max(n.dirty.length,o.length);for(let s=0;s<_;s+=1)a[s]=n.dirty[s]|o[s];return a}return n.dirty|o}return n.dirty}function H(t,n,e,r,o,a){if(o){const _=y(n,e,r,a);t.p(_,o)}}function I(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}function J(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}let l;function h(t){l=t}function m(){if(!l)throw new Error("Function called outside component initialization");return l}function K(t){m().$$.on_mount.push(t)}function L(t){m().$$.after_update.push(t)}const i=[],b=[];let u=[];const g=[],x=Promise.resolve();let p=!1;function O(){p||(p=!0,x.then(M))}function N(){return O(),x}function z(t){u.push(t)}const d=new Set;let c=0;function M(){if(c!==0)return;const t=l;do{try{for(;c<i.length;){const n=i[c];c++,h(n),v(n.$$)}}catch(n){throw i.length=0,c=0,n}for(h(null),i.length=0,c=0;b.length;)b.pop()();for(let n=0;n<u.length;n+=1){const e=u[n];d.has(e)||(d.add(e),e())}u.length=0}while(i.length);for(;g.length;)g.pop()();p=!1,d.clear(),h(t)}function v(t){if(t.fragment!==null){t.update(),E(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(z)}}function Q(t){const n=[],e=[];u.forEach(r=>t.indexOf(r)===-1?n.push(r):e.push(r)),e.forEach(r=>r()),u=n}export{A,m as B,P as C,D as a,G as b,U as c,w as d,J as e,q as f,I as g,L as h,C as i,b as j,B as k,M as l,S as m,k as n,K as o,z as p,Q as q,E as r,F as s,N as t,H as u,l as v,h as w,j as x,i as y,O as z};