import{s as T,c as V}from"../chunks/scheduler.CjuNoUbF.js";import{S as W,i as z,s as v,e as S,t as x,c as U,h as A,d as l,a as k,b as E,f as y,g as C,j as D,k as I,l as M,m as u,n as G,o as j,p as L,q as N,r as O}from"../chunks/index.06OY3Qxx.js";import{b as F}from"../chunks/paths.v_-UCzq_.js";import{f as J,a as K,$ as Q}from"../chunks/fa-layers-text.svelte_svelte_type_style_lang.eyHp4rqf.js";import{B as P}from"../chunks/Button.FADNUDtE.js";function R(o){let s=o[0]("actions.trackMyStats")+"",t;return{c(){t=x(s)},l(e){t=C(e,s)},m(e,n){M(e,t,n)},p(e,n){n&1&&s!==(s=e[0]("actions.trackMyStats")+"")&&j(t,s)},d(e){e&&l(t)}}}function X(o){let s=o[0]("actions.fetchUser")+"",t;return{c(){t=x(s)},l(e){t=C(e,s)},m(e,n){M(e,t,n)},p(e,n){n&1&&s!==(s=e[0]("actions.fetchUser")+"")&&j(t,s)},d(e){e&&l(t)}}}function Y(o){let s,t,e,n=o[0]("title")+"",d,q,p,$=o[0]("description")+"",b,w,i,f,B,m,_;return f=new P({props:{class:"btn btn-neutral mb-4 sm:mb-0",faIcon:J,link:"/",$$slots:{default:[R]},$$scope:{ctx:o}}}),m=new P({props:{class:"btn-accent",faIcon:K,link:F+"/user",$$slots:{default:[X]},$$scope:{ctx:o}}}),{c(){s=v(),t=S("section"),e=S("h1"),d=x(n),q=v(),p=S("h4"),b=x($),w=v(),i=S("div"),U(f.$$.fragment),B=v(),U(m.$$.fragment),this.h()},l(a){A("svelte-8f3nte",document.head).forEach(l),s=k(a),t=E(a,"SECTION",{class:!0});var c=y(t);e=E(c,"H1",{class:!0});var h=y(e);d=C(h,n),h.forEach(l),q=k(c),p=E(c,"H4",{class:!0});var H=y(p);b=C(H,$),H.forEach(l),w=k(c),i=E(c,"DIV",{class:!0});var g=y(i);D(f.$$.fragment,g),B=k(g),D(m.$$.fragment,g),g.forEach(l),c.forEach(l),this.h()},h(){document.title="Steam Workshop Stats",I(e,"class","px-6"),I(p,"class","my-4 px-6"),I(i,"class","my-6"),I(t,"class","min-h-screen flex flex-col justify-center items-center text-center")},m(a,r){M(a,s,r),M(a,t,r),u(t,e),u(e,d),u(t,q),u(t,p),u(p,b),u(t,w),u(t,i),G(f,i,null),u(i,B),G(m,i,null),_=!0},p(a,[r]){(!_||r&1)&&n!==(n=a[0]("title")+"")&&j(d,n),(!_||r&1)&&$!==($=a[0]("description")+"")&&j(b,$);const c={};r&3&&(c.$$scope={dirty:r,ctx:a}),f.$set(c);const h={};r&3&&(h.$$scope={dirty:r,ctx:a}),m.$set(h)},i(a){_||(L(f.$$.fragment,a),L(m.$$.fragment,a),_=!0)},o(a){N(f.$$.fragment,a),N(m.$$.fragment,a),_=!1},d(a){a&&(l(s),l(t)),O(f),O(m)}}}function Z(o,s,t){let e;return V(o,Q,n=>t(0,e=n)),[e]}class ot extends W{constructor(s){super(),z(this,s,Z,Y,T,{})}}export{ot as component};
