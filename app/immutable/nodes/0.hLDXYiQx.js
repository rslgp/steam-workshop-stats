import{s as Qe,r as at,c as Xe,u as st,v as ot,w as nt,x as rt,o as lt}from"../chunks/scheduler.zJHJghva.js";import{S as Ye,i as Ze,e as i,c as he,t as v,s as $,b as c,f as u,j as pe,g as b,d as r,a as _,k as l,l as ue,m as e,n as ve,z as Ve,o as L,p as ie,q as ce,r as be}from"../chunks/index.2dawR5qk.js";import{c as Ce,g as it,i as ct,F as et,d as ut,$ as tt,e as dt,h as ft,B as Ne,a as Je,f as mt}from"../chunks/index.KQOzYQks.js";import{b as Be}from"../chunks/paths.wvOLrsAC.js";const gt=!0,ia=Object.freeze(Object.defineProperty({__proto__:null,prerender:gt},Symbol.toStringTag,{value:"Module"})),ht="English",pt="Steam Workshop Stats",vt="See the number of views, subs, likes and more of your addons!",bt="Steam Workshop Stats is a hobby project and is not affiliated with Steam or Valve. Steam and the Steam logo are trademarks of Valve Corporation.",$t={httpError:"An error has occurred",links:"Links",moreInfo:"More Info",githubRepository:"Github Repository",example:"Example:"},_t={changeLanguage:"Change Language",fetchUser:"Fetch User",trackMyStats:"Track my Stats (Coming Soon)",helpTranslating:"Help Translating",enterProfileUrl:"Enter a Steam Profile URL",returnHome:"Return Home",getStats:"Get Stats",seeInSteam:"See it on Steam"},St={statsOf:"Stats of {username}",noAddons:"This user doesn't have any addons!",views:"Views",subscribers:"Subscribers",favorites:"Favorites",likes:"Likes",dislikes:"Dislikes",addons:"Addons",addonsOf:"Addons of {username}",graph:"Graph",graphOf:"Graph of {username}"},kt={disclaimer:"Disclaimer! This can take up to 30 seconds because the API is on a free hosting, so it has to wake up!"},Et={language:ht,title:pt,description:vt,disclaimer:bt,misc:$t,actions:_t,stats:St,notifications:kt},It="Español",Lt="Estadísticas de Steam Workshop",Tt="Observe el número de visitas, subs, likes y más de tus addons!",wt="Estadísticas de Steam Workshop es un hobby y no está afiliado con Steam o Valve. Steam y el logo de Steam son marcas registradas de Valve Corporation",Ut={httpError:"Ha ocurrido un error",links:"Enlaces",moreInfo:"Más Información",githubRepository:"Repositorio de Github",example:"Ejemplo:"},Ot={changeLanguage:"Cambia el Idioma",fetchUser:"Buscar un Usuario",trackMyStats:"Trackea mis Stats (Próximamente)",helpTranslating:"Ayuda a Traducir",enterProfileUrl:"Introduce la URL de un Perfil de Steam",returnHome:"Volver al Inicio",getStats:"Obtener Estadísticas",seeInSteam:"Ver en Steam"},yt={statsOf:"Estadísticas de {username}",noAddons:"¡Este usuario no tiene ningún addon!",views:"Visitas",subscribers:"Suscriptores",favorites:"Favoritos",likes:"Likes",dislikes:"Dislikes",addons:"Addons",addonsOf:"Addons de {username}",graph:"Gráfica",graphOf:"Gráfica de {username}"},At={disclaimer:"¡Atención! Si tarda un poco, es debido a que la API se está despertando. Si tarda más de 30 segundos, puede ser debido a un error."},Rt={language:It,title:Lt,description:Tt,disclaimer:wt,misc:Ut,actions:Ot,stats:yt,notifications:At},Vt="Brasileiro",Bt="Estatísticas de uma oficina da Steam",Ct="Estatísticas de um usuário em suas Oficinas da Steam",Gt="Steam Workshop Stats is a hobby project and is not affiliated with Steam or Valve. Steam and the Steam logo are trademarks of Valve Corporation.",Nt={httpError:"An error has occurred",links:"Links",moreInfo:"More Info",githubRepository:"Github Repository",example:"Example:"},Pt={changeLanguage:"Change Language",fetchUser:"Fetch User",trackMyStats:"Track my Stats (Coming Soon)",helpTranslating:"Nós ajude com a tradução",enterProfileUrl:"Insira a URL do perfil da Steam",returnHome:"Return Home",getStats:"Coletar Estatísticas",seeOnSteam:"Ver na Steam"},Dt={statsOf:"Estatística de {username}",noAddons:"Não há extensões disponíveis!",views:"Acessos",subscribers:"Subs",favorites:"Favoritos",likes:"Likes",dislikes:"Dislikes",addons:"Extensões",addonsOf:"Extensões de {username}",graph:"Graph",graphOf:"Graph of {username}"},Mt={disclaimer:"Atenção! se demorar por um tempo, é porque a API estava hibernando e demora um pouco a responder, se realmente demorar bastante é porque deve ter tido um erro."},jt={language:Vt,title:Bt,description:Ct,disclaimer:Gt,misc:Nt,actions:Pt,stats:Dt,notifications:Mt},Ft="แบบไทยๆ",Ht="สถิติ Steam Workshop",Wt="สถิติผลงานของผู้ใช้ใน Steam Workshop",qt="Steam Workshop Stats is a hobby project and is not affiliated with Steam or Valve. Steam and the Steam logo are trademarks of Valve Corporation.",zt={httpError:"An error has occurred",links:"Links",moreInfo:"More Info",githubRepository:"Github Repository",example:"Example:"},xt={changeLanguage:"Change Language",fetchUser:"Fetch User",trackMyStats:"Track my Stats (Coming Soon)",helpTranslating:"ช่วยแปลภาษา",enterProfileUrl:"ป้อน URL ของโปรไฟล์ Steam",returnHome:"Return Home",getStats:"ดูสถิติ",seeOnSteam:"ดูม็อดนี้บน Steam"},Jt={statsOf:"สถิติของ {username}",noAddons:"ไม่มีรายการม็อดให้แสดง!",views:"ผู้เยี่ยมชม",subscribers:"ผู้สมัครสมาชิก",favorites:"ผู้ที่ชื่นชอบ",likes:"คะแนนเชิงบวก",dislikes:"คะแนนเชิงลบ",addons:"ม็อดของ",addonsOf:"ม็อดของ {username}",graph:"Graph",graphOf:"Graph of {username}"},Kt={disclaimer:"คำชี้แจง! อาจใช้เวลาในการโหลดครู่หนึ่งเพื่อปลุก API หากใช้เวลานานเกินไปอาจมีข้อผิดพลาด"},Qt={language:Ft,title:Ht,description:Wt,disclaimer:qt,misc:zt,actions:xt,stats:Jt,notifications:Kt};Ce("en",Et);Ce("es",Rt);Ce("pt-BR",jt);Ce("th",Qt);let Pe=it();{const o=localStorage.getItem("lang");o?Pe=o:localStorage.setItem("lang",Pe)}ct({fallbackLocale:"en",initialLocale:Pe});function Xt(o){let s,n,t,f=o[0]("actions.changeLanguage")+"",h,A,d,U,R,j,x=o[0]("language",{locale:"en"})+"",V,de,G,S,N,J=o[0]("language",{locale:"es"})+"",P,te,q,O,B,k=o[0]("language",{locale:"pt-BR"})+"",K,fe,T,E,Q,z=o[0]("language",{locale:"th"})+"",ae,X,F,D,Y=o[0]("actions.helpTranslating")+"",M,I,se,$e;return t=new et({props:{class:"mr-2",icon:ut}}),{c(){s=i("div"),n=i("button"),he(t.$$.fragment),h=v(f),A=$(),d=i("ul"),U=i("li"),R=i("button"),j=v("🇬🇧 "),V=v(x),de=$(),G=i("li"),S=i("button"),N=v("🇪🇸 "),P=v(J),te=$(),q=i("li"),O=i("button"),B=v("🇧🇷 "),K=v(k),fe=$(),T=i("li"),E=i("button"),Q=v("🇹🇭 "),ae=v(z),X=$(),F=i("li"),D=i("a"),M=v(Y),this.h()},l(g){s=c(g,"DIV",{class:!0});var p=u(s);n=c(p,"BUTTON",{tabindex:!0,class:!0});var Z=u(n);pe(t.$$.fragment,Z),h=b(Z,f),Z.forEach(r),A=_(p),d=c(p,"UL",{tabindex:!0,class:!0});var w=u(d);U=c(w,"LI",{});var _e=u(U);R=c(_e,"BUTTON",{class:!0});var H=u(R);j=b(H,"🇬🇧 "),V=b(H,x),H.forEach(r),_e.forEach(r),de=_(w),G=c(w,"LI",{});var oe=u(G);S=c(oe,"BUTTON",{class:!0});var ne=u(S);N=b(ne,"🇪🇸 "),P=b(ne,J),ne.forEach(r),oe.forEach(r),te=_(w),q=c(w,"LI",{});var Se=u(q);O=c(Se,"BUTTON",{class:!0});var W=u(O);B=b(W,"🇧🇷 "),K=b(W,k),W.forEach(r),Se.forEach(r),fe=_(w),T=c(w,"LI",{});var re=u(T);E=c(re,"BUTTON",{class:!0});var le=u(E);Q=b(le,"🇹🇭 "),ae=b(le,z),le.forEach(r),re.forEach(r),X=_(w),F=c(w,"LI",{});var ke=u(F);D=c(ke,"A",{class:!0,href:!0});var ee=u(D);M=b(ee,Y),ee.forEach(r),ke.forEach(r),w.forEach(r),p.forEach(r),this.h()},h(){l(n,"tabindex","-1"),l(n,"class","btn btn-ghost normal-case text-sm md:text-base text-gray-100"),R.value="en",l(R,"class","text-lg"),S.value="es",l(S,"class","text-lg"),O.value="pt-BR",l(O,"class","text-lg"),E.value="th",l(E,"class","text-lg"),l(D,"class","text-lg"),l(D,"href","https://github.com/thejaviertc/steam-workshop-stats/blob/main/CONTRIBUTING.md"),l(d,"tabindex","-1"),l(d,"class","menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary rounded-box w-52"),l(s,"class","dropdown dropdown-end")},m(g,p){ue(g,s,p),e(s,n),ve(t,n,null),e(n,h),e(s,A),e(s,d),e(d,U),e(U,R),e(R,j),e(R,V),e(d,de),e(d,G),e(G,S),e(S,N),e(S,P),e(d,te),e(d,q),e(q,O),e(O,B),e(O,K),e(d,fe),e(d,T),e(T,E),e(E,Q),e(E,ae),e(d,X),e(d,F),e(F,D),e(D,M),I=!0,se||($e=[Ve(R,"click",o[1]),Ve(S,"click",o[1]),Ve(O,"click",o[1]),Ve(E,"click",o[1])],se=!0)},p(g,[p]){(!I||p&1)&&f!==(f=g[0]("actions.changeLanguage")+"")&&L(h,f),(!I||p&1)&&x!==(x=g[0]("language",{locale:"en"})+"")&&L(V,x),(!I||p&1)&&J!==(J=g[0]("language",{locale:"es"})+"")&&L(P,J),(!I||p&1)&&k!==(k=g[0]("language",{locale:"pt-BR"})+"")&&L(K,k),(!I||p&1)&&z!==(z=g[0]("language",{locale:"th"})+"")&&L(ae,z),(!I||p&1)&&Y!==(Y=g[0]("actions.helpTranslating")+"")&&L(M,Y)},i(g){I||(ie(t.$$.fragment,g),I=!0)},o(g){ce(t.$$.fragment,g),I=!1},d(g){g&&r(s),be(t),se=!1,at($e)}}}function Yt(o,s,n){let t;Xe(o,tt,h=>n(0,t=h));function f(h){h.preventDefault();const A=h.target.value;dt.set(A),localStorage.setItem("lang",A)}return[t,f]}class Ke extends Ye{constructor(s){super(),Ze(this,s,Yt,Xt,Qe,{})}}function Zt(o){let s=o[1]("actions.fetchUser")+"",n;return{c(){n=v(s)},l(t){n=b(t,s)},m(t,f){ue(t,n,f)},p(t,f){f&2&&s!==(s=t[1]("actions.fetchUser")+"")&&L(n,s)},d(t){t&&r(n)}}}function ea(o){let s=o[1]("title")+"",n;return{c(){n=v(s)},l(t){n=b(t,s)},m(t,f){ue(t,n,f)},p(t,f){f&2&&s!==(s=t[1]("title")+"")&&L(n,s)},d(t){t&&r(n)}}}function ta(o){let s=o[1]("actions.fetchUser")+"",n;return{c(){n=v(s)},l(t){n=b(t,s)},m(t,f){ue(t,n,f)},p(t,f){f&2&&s!==(s=t[1]("actions.fetchUser")+"")&&L(n,s)},d(t){t&&r(n)}}}function aa(o){let s,n,t,f,h,A,d,U,R,j,x,V,de,G,S,N,J,P,te,q,O,B,k,K,fe,T,E,Q=o[1]("misc.links")+"",z,ae,X,F=o[1]("actions.trackMyStats")+"",D,Y,M,I=o[1]("actions.fetchUser")+"",se,$e,g,p,Z=o[1]("misc.moreInfo")+"",w,_e,H,oe=o[1]("misc.githubRepository")+"",ne,Se,W,re=o[1]("actions.helpTranslating")+"",le,ke,ee,Ee,we=o[1]("disclaimer")+"",Oe,y;h=new et({props:{icon:ft}}),U=new Ne({props:{class:"btn-ghost",faIcon:Je,link:Be+"/fetch-user",$$slots:{default:[Zt]},$$scope:{ctx:o}}}),j=new Ke({}),V=new Ne({props:{class:"btn-ghost",faIcon:mt,link:Be,$$slots:{default:[ea]},$$scope:{ctx:o}}}),N=new Ne({props:{class:"btn-ghost",faIcon:Je,link:Be+"/fetch-user",$$slots:{default:[ta]},$$scope:{ctx:o}}}),P=new Ke({});const Ge=o[2].default,C=st(Ge,o,o[3],null);return{c(){s=i("nav"),n=i("div"),t=i("div"),f=i("button"),he(h.$$.fragment),A=$(),d=i("ul"),he(U.$$.fragment),R=$(),he(j.$$.fragment),x=$(),he(V.$$.fragment),de=$(),G=i("div"),S=i("ul"),he(N.$$.fragment),J=$(),he(P.$$.fragment),q=$(),C&&C.c(),O=$(),B=i("footer"),k=i("div"),K=i("div"),fe=$(),T=i("div"),E=i("span"),z=v(Q),ae=$(),X=i("p"),D=v(F),Y=$(),M=i("a"),se=v(I),$e=$(),g=i("div"),p=i("span"),w=v(Z),_e=$(),H=i("a"),ne=v(oe),Se=$(),W=i("a"),le=v(re),ke=$(),ee=i("div"),Ee=i("p"),Oe=v(we),this.h()},l(a){s=c(a,"NAV",{class:!0});var m=u(s);n=c(m,"DIV",{class:!0});var me=u(n);t=c(me,"DIV",{class:!0});var ge=u(t);f=c(ge,"BUTTON",{tabindex:!0,class:!0});var Ue=u(f);pe(h.$$.fragment,Ue),Ue.forEach(r),A=_(ge),d=c(ge,"UL",{tabindex:!0,class:!0});var ye=u(d);pe(U.$$.fragment,ye),R=_(ye),pe(j.$$.fragment,ye),ye.forEach(r),ge.forEach(r),x=_(me),pe(V.$$.fragment,me),me.forEach(r),de=_(m),G=c(m,"DIV",{class:!0});var De=u(G);S=c(De,"UL",{class:!0});var Ae=u(S);pe(N.$$.fragment,Ae),J=_(Ae),pe(P.$$.fragment,Ae),Ae.forEach(r),De.forEach(r),m.forEach(r),q=_(a),C&&C.l(a),O=_(a),B=c(a,"FOOTER",{class:!0});var Re=u(B);k=c(Re,"DIV",{class:!0});var Ie=u(k);K=c(Ie,"DIV",{}),u(K).forEach(r),fe=_(Ie),T=c(Ie,"DIV",{});var Le=u(T);E=c(Le,"SPAN",{class:!0});var Me=u(E);z=b(Me,Q),Me.forEach(r),ae=_(Le),X=c(Le,"P",{});var je=u(X);D=b(je,F),je.forEach(r),Y=_(Le),M=c(Le,"A",{class:!0,href:!0});var Fe=u(M);se=b(Fe,I),Fe.forEach(r),Le.forEach(r),$e=_(Ie),g=c(Ie,"DIV",{});var Te=u(g);p=c(Te,"SPAN",{class:!0});var He=u(p);w=b(He,Z),He.forEach(r),_e=_(Te),H=c(Te,"A",{class:!0,href:!0});var We=u(H);ne=b(We,oe),We.forEach(r),Se=_(Te),W=c(Te,"A",{class:!0,href:!0});var qe=u(W);le=b(qe,re),qe.forEach(r),Te.forEach(r),Ie.forEach(r),ke=_(Re),ee=c(Re,"DIV",{class:!0});var ze=u(ee);Ee=c(ze,"P",{class:!0});var xe=u(Ee);Oe=b(xe,we),xe.forEach(r),ze.forEach(r),Re.forEach(r),this.h()},h(){l(f,"tabindex","-1"),l(f,"class","btn btn-ghost md:hidden"),l(d,"tabindex","-1"),l(d,"class","menu menu-compact dropdown-content mt-6 p-2 shadow bg-secondary rounded-box w-72"),l(t,"class","dropdown"),l(n,"class","navbar-start"),l(S,"class","menu menu-horizontal px-1"),l(G,"class","navbar-end hidden md:flex"),l(s,"class",te="navbar bg-"+o[0]+" top-0 z-50 fixed"),l(E,"class","footer-title"),l(M,"class","link link-hover"),l(M,"href",Be+"/fetch-user"),l(p,"class","footer-title"),l(H,"class","link link-hover"),l(H,"href","https://github.com/thejaviertc/steam-workshop-stats"),l(W,"class","link link-hover"),l(W,"href","https://github.com/thejaviertc/steam-workshop-stats/blob/main/CONTRIBUTING.md"),l(k,"class","footer p-10 bg-secondary text-neutral-content"),l(Ee,"class","text-white"),l(ee,"class","footer footer-center px-10 pb-10 bg-secondary text-base-content"),l(B,"class","relative inset-x-0 bottom-0")},m(a,m){ue(a,s,m),e(s,n),e(n,t),e(t,f),ve(h,f,null),e(t,A),e(t,d),ve(U,d,null),e(d,R),ve(j,d,null),e(n,x),ve(V,n,null),e(s,de),e(s,G),e(G,S),ve(N,S,null),e(S,J),ve(P,S,null),ue(a,q,m),C&&C.m(a,m),ue(a,O,m),ue(a,B,m),e(B,k),e(k,K),e(k,fe),e(k,T),e(T,E),e(E,z),e(T,ae),e(T,X),e(X,D),e(T,Y),e(T,M),e(M,se),e(k,$e),e(k,g),e(g,p),e(p,w),e(g,_e),e(g,H),e(H,ne),e(g,Se),e(g,W),e(W,le),e(B,ke),e(B,ee),e(ee,Ee),e(Ee,Oe),y=!0},p(a,[m]){const me={};m&10&&(me.$$scope={dirty:m,ctx:a}),U.$set(me);const ge={};m&10&&(ge.$$scope={dirty:m,ctx:a}),V.$set(ge);const Ue={};m&10&&(Ue.$$scope={dirty:m,ctx:a}),N.$set(Ue),(!y||m&1&&te!==(te="navbar bg-"+a[0]+" top-0 z-50 fixed"))&&l(s,"class",te),C&&C.p&&(!y||m&8)&&ot(C,Ge,a,a[3],y?rt(Ge,a[3],m,null):nt(a[3]),null),(!y||m&2)&&Q!==(Q=a[1]("misc.links")+"")&&L(z,Q),(!y||m&2)&&F!==(F=a[1]("actions.trackMyStats")+"")&&L(D,F),(!y||m&2)&&I!==(I=a[1]("actions.fetchUser")+"")&&L(se,I),(!y||m&2)&&Z!==(Z=a[1]("misc.moreInfo")+"")&&L(w,Z),(!y||m&2)&&oe!==(oe=a[1]("misc.githubRepository")+"")&&L(ne,oe),(!y||m&2)&&re!==(re=a[1]("actions.helpTranslating")+"")&&L(le,re),(!y||m&2)&&we!==(we=a[1]("disclaimer")+"")&&L(Oe,we)},i(a){y||(ie(h.$$.fragment,a),ie(U.$$.fragment,a),ie(j.$$.fragment,a),ie(V.$$.fragment,a),ie(N.$$.fragment,a),ie(P.$$.fragment,a),ie(C,a),y=!0)},o(a){ce(h.$$.fragment,a),ce(U.$$.fragment,a),ce(j.$$.fragment,a),ce(V.$$.fragment,a),ce(N.$$.fragment,a),ce(P.$$.fragment,a),ce(C,a),y=!1},d(a){a&&(r(s),r(q),r(O),r(B)),be(h),be(U),be(j),be(V),be(N),be(P),C&&C.d(a)}}}function sa(o,s,n){let t;Xe(o,tt,d=>n(1,t=d));let{$$slots:f={},$$scope:h}=s,A="secondary";return lt(()=>{window.onscroll=()=>{n(0,A=document.body.scrollTop>=100||document.documentElement.scrollTop>=100?"primary":"secondary")}}),o.$$set=d=>{"$$scope"in d&&n(3,h=d.$$scope)},[A,t,f,h]}class ca extends Ye{constructor(s){super(),Ze(this,s,sa,aa,Qe,{})}}export{ca as component,ia as universal};
