import{s as I,n as x,q as J,u as K,v as P,w as Q}from"../chunks/scheduler.Ce_0Mfso.js";import{S as V,i as N,e as p,c as _,a as y,d as $,l as h,g as A,s as C,f as D,k as R,h as g,p as H,r as W,o as X,n as M,z as Y,v as B,w as F,x as j,y as O}from"../chunks/index.p45PKgf6.js";import"../chunks/entry.B0U4cjiz.js";function q(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}function Z(s){let e,n;return{c(){e=p("button"),this.h()},l(t){e=_(t,"BUTTON",{class:!0}),y(e).forEach($),this.h()},h(){h(e,"class",n="fi fi-"+s[0]+" border bg-cover h-8 w-12 mx-1 hover:")},m(t,r){A(t,e,r)},p(t,[r]){r&1&&n!==(n="fi fi-"+t[0]+" border bg-cover h-8 w-12 mx-1 hover:")&&h(e,"class",n)},i:x,o:x,d(t){t&&$(e)}}}function ee(s,e,n){let{country:t}=e;return s.$$set=r=>{"country"in r&&n(0,t=r.country)},[t]}class te extends V{constructor(e){super(),N(this,e,ee,Z,I,{country:0})}}function z(s,e,n){const t=s.slice();return t[1]=e[n],t}function U(s){let e,n;return e=new te({props:{country:s[1]}}),{c(){B(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,r){j(e,t,r),n=!0},p:x,i(t){n||(H(e.$$.fragment,t),n=!0)},o(t){M(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function ne(s){let e,n,t,r,v,w='<h1 class="self-center text-4xl">Necromancer Midas</h1>',E,f,d,L='<h4>Color Mode:</h4> <label><input type="checkbox"/> <span></span></label>',u,l,i,b=q(s[0]),o=[];for(let c=0;c<b.length;c+=1)o[c]=U(z(s,b,c));const G=c=>M(o[c],1,1,()=>{o[c]=null});return{c(){e=p("header"),n=p("div"),t=p("div"),r=C(),v=p("div"),v.innerHTML=w,E=C(),f=p("div"),d=p("div"),d.innerHTML=L,u=C(),l=p("div");for(let c=0;c<o.length;c+=1)o[c].c();this.h()},l(c){e=_(c,"HEADER",{id:!0,class:!0});var m=y(e);n=_(m,"DIV",{id:!0,class:!0});var a=y(n);t=_(a,"DIV",{class:!0}),y(t).forEach($),r=D(a),v=_(a,"DIV",{class:!0,"data-svelte-h":!0}),R(v)!=="svelte-1vu21gf"&&(v.innerHTML=w),E=D(a),f=_(a,"DIV",{id:!0,class:!0});var T=y(f);d=_(T,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),R(d)!=="svelte-1u254bl"&&(d.innerHTML=L),u=D(T),l=_(T,"DIV",{class:!0});var k=y(l);for(let S=0;S<o.length;S+=1)o[S].l(k);k.forEach($),T.forEach($),a.forEach($),m.forEach($),this.h()},h(){h(t,"class","w-1/4"),h(v,"class","w-1/2 flex justify-center"),h(d,"id","ColorSelection"),h(d,"class","flex flex-row"),h(l,"class","flex flex-row pt-8w"),h(f,"id","RightHeaderToolBar"),h(f,"class","flex flex-col w-1/4 items-end"),h(n,"id","Header Container"),h(n,"class","flex h-full w-full justify-between py-5 px-5 border-b-2 border-b-black "),h(e,"id","Home"),h(e,"class","flex bg-secondary")},m(c,m){A(c,e,m),g(e,n),g(n,t),g(n,r),g(n,v),g(n,E),g(n,f),g(f,d),g(f,u),g(f,l);for(let a=0;a<o.length;a+=1)o[a]&&o[a].m(l,null);i=!0},p(c,[m]){if(m&1){b=q(c[0]);let a;for(a=0;a<b.length;a+=1){const T=z(c,b,a);o[a]?(o[a].p(T,m),H(o[a],1)):(o[a]=U(T),o[a].c(),H(o[a],1),o[a].m(l,null))}for(W(),a=b.length;a<o.length;a+=1)G(a);X()}},i(c){if(!i){for(let m=0;m<b.length;m+=1)H(o[m]);i=!0}},o(c){o=o.filter(Boolean);for(let m=0;m<o.length;m+=1)M(o[m]);i=!1},d(c){c&&$(e),Y(o,c)}}}function se(s){return[["gb","no","nl"]]}class le extends V{constructor(e){super(),N(this,e,se,ne,I,{})}}function re(s){let e,n='<h1 class="self-center">Excellent Footer</h1>';return{c(){e=p("footer"),e.innerHTML=n,this.h()},l(t){e=_(t,"FOOTER",{class:!0,"data-svelte-h":!0}),R(e)!=="svelte-3ksn5h"&&(e.innerHTML=n),this.h()},h(){h(e,"class","flex fixed left-0 bottom-0 w-full bg-secondary h-24 justify-evenly")},m(t,r){A(t,e,r)},p:x,i:x,o:x,d(t){t&&$(e)}}}class ae extends V{constructor(e){super(),N(this,e,null,re,I,{})}}function oe(s){let e,n="";return{c(){e=p("nav"),e.innerHTML=n,this.h()},l(t){e=_(t,"NAV",{class:!0,"data-svelte-h":!0}),R(e)!=="svelte-1iivbn6"&&(e.innerHTML=n),this.h()},h(){h(e,"class","h-12 w-full bg-tetrinary")},m(t,r){A(t,e,r)},p:x,i:x,o:x,d(t){t&&$(e)}}}class ce extends V{constructor(e){super(),N(this,e,null,oe,I,{})}}function ie(s){let e,n,t,r,v,w,E,f,d;n=new le({}),r=new ce({});const L=s[1].default,u=J(L,s,s[0],null);return f=new ae({}),{c(){e=p("div"),B(n.$$.fragment),t=C(),B(r.$$.fragment),v=C(),w=p("main"),u&&u.c(),E=C(),B(f.$$.fragment),this.h()},l(l){e=_(l,"DIV",{class:!0});var i=y(e);F(n.$$.fragment,i),t=D(i),F(r.$$.fragment,i),v=D(i),w=_(i,"MAIN",{});var b=y(w);u&&u.l(b),b.forEach($),E=D(i),F(f.$$.fragment,i),i.forEach($),this.h()},h(){h(e,"class","app")},m(l,i){A(l,e,i),j(n,e,null),g(e,t),j(r,e,null),g(e,v),g(e,w),u&&u.m(w,null),g(e,E),j(f,e,null),d=!0},p(l,[i]){u&&u.p&&(!d||i&1)&&K(u,L,l,l[0],d?Q(L,l[0],i,null):P(l[0]),null)},i(l){d||(H(n.$$.fragment,l),H(r.$$.fragment,l),H(u,l),H(f.$$.fragment,l),d=!0)},o(l){M(n.$$.fragment,l),M(r.$$.fragment,l),M(u,l),M(f.$$.fragment,l),d=!1},d(l){l&&$(e),O(n),O(r),u&&u.d(l),O(f)}}}function fe(s,e,n){let{$$slots:t={},$$scope:r}=e;return s.$$set=v=>{"$$scope"in v&&n(0,r=v.$$scope)},[r,t]}class me extends V{constructor(e){super(),N(this,e,fe,ie,I,{})}}export{me as component};