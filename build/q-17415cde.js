import{a as at,U as st,N as x,b as it,I as V,Y as v,C as lt,h as ct,c as N,_ as I,j as ut,l as G,Q as dt,s as K,f as _t,u as mt,p as pt}from"./q-955148ae.js";import{j as vt,c as ft,C as yt,d as ht,D as St,R as Ct,e as Et,f as bt,h as qt,i as wt,l as z,k as Z,m as gt,r as Rt,n as $,o as Q,p as tt,q as Lt,s as et,t as L,v as w,w as It,x as Pt,y as At,z as Dt}from"./q-146684f9.js";const kt=f=>{at(N(()=>I(()=>Promise.resolve().then(()=>M),void 0),"s_RPDJAz33WLA"));const n=vt();if(!(n!=null&&n.params))throw new Error("Missing Qwik City Env Data");const y=st("url");if(!y)throw new Error("Missing Qwik URL Env Data");const S=new URL(y),a=x({url:S,params:n.params,isNavigating:!1,prevUrl:void 0},{deep:!1}),C={},i=it(x(n.response.loaders,{deep:!1})),d=V({type:"initial",dest:S,forceReload:!1,replaceState:!1,scroll:!0}),_=x(ft),E=x({headings:void 0,menu:void 0}),l=V(),o=n.response.action,b=o?n.response.loaders[o]:void 0,u=V(b?{id:o,data:n.response.formData,output:{result:b,status:n.response.status}}:void 0),g=N(()=>I(()=>Promise.resolve().then(()=>M),void 0),"s_fX0bDjeJa0E",[u,C,d,a]);return v(yt,E),v(ht,l),v(St,_),v(Ct,a),v(Et,g),v(bt,i),v(qt,u),v(wt,d),lt(N(()=>I(()=>Promise.resolve().then(()=>M),void 0),"s_02wMImzEAbk",[u,E,l,_,n,g,i,C,f,d,a])),ct(ut,null,3,"qY_0")};const Tt=()=>I(()=>import("./q-8c20a480.js"),["build/q-8c20a480.js","build/q-955148ae.js"]),W=[["/",[Tt,()=>I(()=>import("./q-3c6ff2bd.js"),["build/q-3c6ff2bd.js","build/q-955148ae.js"])]]],J=[];const Y=!0;const Ut=({track:f})=>{const[n,y,S,a,C,i,d,_,E,l,o]=G();async function b(){var B;const[u,g]=f(()=>[l.value,n.value]),ot=dt(""),P=o.url,m=g?"form":u.type,nt=u.replaceState;let r,R,H=null,A;{r=new URL(u.dest,location),r.pathname.endsWith("/")||(r.pathname+="/");let D=z(W,J,Y,r.pathname);A=K();const k=R=await Z(r,A,!0,g);if(!k){l.untrackedValue={type:m,dest:r};return}const O=k.href,T=new URL(O,r);gt(T,r)||(r=T,D=z(W,J,Y,r.pathname)),H=await D}if(H){const[D,k,O,T]=H,U=O,rt=U[U.length-1];o.prevUrl=P,o.url=r,o.params={...k},l.untrackedValue={type:m,dest:r};const q=Rt(R,o,U,ot);y.headings=rt.headings,y.menu=T,S.value=_t(U),a.links=q.links,a.meta=q.meta,a.styles=q.styles,a.scripts=q.scripts,a.title=q.title,a.frontmatter=q.frontmatter;{E.viewTransition!==!1&&(document.__q_view_transition__=!0);let X;m==="popstate"&&(X=$()),u.scroll&&(!u.forceReload||!Q(r,P))&&(m==="link"||m==="popstate")&&(document.__q_scroll_restore__=()=>tt(m,r,P,X));const F=R==null?void 0:R.loaders,t=window;if(F&&Object.assign(d,F),Lt.clear(),!t._qCitySPA){if(t._qCitySPA=!0,history.scrollRestoration="manual",t.addEventListener("popstate",()=>{t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce),i(location.href,{type:"popstate"})}),t.removeEventListener("popstate",t._qCityInitPopstate),t._qCityInitPopstate=void 0,!t._qCityHistoryPatch){t._qCityHistoryPatch=!0;const s=history.pushState,p=history.replaceState,h=e=>(e===null||typeof e>"u"?e={}:(e==null?void 0:e.constructor)!==Object&&(e={_data:e}),e._qCityScroll=e._qCityScroll||w(document.documentElement),e);history.pushState=(e,c,j)=>(e=h(e),s.call(history,e,c,j)),history.replaceState=(e,c,j)=>(e=h(e),p.call(history,e,c,j))}document.body.addEventListener("click",s=>{if(s.defaultPrevented)return;const p=s.target.closest("a[href]");if(p&&!p.hasAttribute("preventdefault:click")){const h=p.getAttribute("href"),e=new URL(location.href),c=new URL(h,e);if(et(c,e)&&Q(c,e)){if(s.preventDefault(),!c.hash&&!c.href.endsWith("#")){c.href!==e.href&&history.pushState(null,"",c),t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce),L({...w(document.documentElement),x:0,y:0}),location.reload();return}i(p.getAttribute("href"))}}}),document.body.removeEventListener("click",t._qCityInitAnchors),t._qCityInitAnchors=void 0,window.navigation||(document.addEventListener("visibilitychange",()=>{if(t._qCityScrollEnabled&&document.visibilityState==="hidden"){const s=w(document.documentElement);L(s)}},{passive:!0}),document.removeEventListener("visibilitychange",t._qCityInitVisibility),t._qCityInitVisibility=void 0),t.addEventListener("scroll",()=>{t._qCityScrollEnabled&&(clearTimeout(t._qCityScrollDebounce),t._qCityScrollDebounce=setTimeout(()=>{const s=w(document.documentElement);L(s),t._qCityScrollDebounce=void 0},200))},{passive:!0}),removeEventListener("scroll",t._qCityInitScroll),t._qCityInitScroll=void 0,(B=t._qCityBootstrap)==null||B.remove(),t._qCityBootstrap=void 0,It.resolve()}if(m!=="popstate"){t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce);const s=w(document.documentElement);L(s)}Pt(window,m,P,r,nt),mt(A).then(()=>{var h;At(A).setAttribute("q:route",D);const p=w(document.documentElement);L(p),t._qCityScrollEnabled=!0,o.isNavigating=!1,(h=_.r)==null||h.call(_)})}}}b()},xt=":root{view-transition-name:none}",Ht=async(f,n)=>{const[y,S,a,C]=G(),{type:i="link",forceReload:d=f===void 0,replaceState:_=!1,scroll:E=!0}=typeof n=="object"?n:{forceReload:n},l=a.value.dest,o=f===void 0?l:Dt(f,C.url);if(!et(o,l)){location.href=o.href;return}if(!d&&Q(o,l)){i==="link"&&o.href!==location.href&&history.pushState(null,"",o),tt(i,o,new URL(location.href),$()),i==="popstate"&&(window._qCityScrollEnabled=!0);return}return a.value={type:i,dest:o,forceReload:d,replaceState:_,scroll:E},Z(o,K()),z(W,J,Y,o.pathname),y.value=void 0,C.isNavigating=!0,new Promise(b=>{S.r=b})},M=Object.freeze(Object.defineProperty({__proto__:null,_hW:pt,s_02wMImzEAbk:Ut,s_RPDJAz33WLA:xt,s_TxCFOy819ag:kt,s_fX0bDjeJa0E:Ht},Symbol.toStringTag,{value:"Module"}));export{pt as _hW,Ut as s_02wMImzEAbk,xt as s_RPDJAz33WLA,kt as s_TxCFOy819ag,Ht as s_fX0bDjeJa0E};