/* Qwik Service Worker */
const appBundles=[["q-080912ee.js",[14,19],["deYIJisdflw","vORWUYWNdqU"]],["q-09b9961a.js",[11,19],["V7XD39qdclI"]],["q-127e8a59.js",[19],["A5bZC7WO00A"]],["q-143883ee.js",[4,19],["BUbtvTyvVRE","WmYC5H00wtI"]],["q-3930dfd3.js",[19]],["q-3c6ff2bd.js",[19]],["q-418e5c2b.js",[19]],["q-4e8ca9ad.js",[4,19],["8gdLBszqbaM","i1Cv0pYJNR0"]],["q-5f07f7c5.js",[6,19,24],["f7kdUxO0H6U","Y2akTcnaoog"]],["q-605727a5.js",[19],["2P0H1tU05go","7Q4rU6W7S7w","cgHpYqs16XQ","VKFlAWJuVm8"]],["q-6222e3af.js",[19],["1TR0F9ifHYA","wdh03cC4tk8"]],["q-6271b5d7.js",[19]],["q-663033b0.js",[],["DyVc0YBIqQU"]],["q-705a094f.js",[19]],["q-741eb329.js",[19]],["q-86abafa0.js",[4,19],["02wMImzEAbk","fX0bDjeJa0E","RPDJAz33WLA","TxCFOy819ag"]],["q-8d37dd0b.js",[19]],["q-8ea06850.js",[]],["q-953391be.js",[4,19],["Nk9PlpjQm9Y","p9MSze0ojs4"]],["q-955148ae.js",[]],["q-b59fdfc1.js",[19],["9VdiDPI3g7c"]],["q-c6d71465.js",[4,19],["0vphQYqOdZI"]],["q-ca106ae0.js",[4,19],["eBQ0vFsFKsk"]],["q-de2338e9.js",[4,19],["e0ssiDXoeAM"]],["q-e2841a13.js",[19]],["q-e702322e.js",[4,19],["wOIPfiQ04l4"]],["q-ee529084.js",[19]],["q-ee98d0e3.js",[4,19],["tntnak2DhJ8"]],["q-fcd74100.js",[11,14,19,24],["B0lqk5IDDy4"]],["q-ff90ed7a.js",[6,19],["deGQSLX6Atc","iuTkKYa0Qec","ji1Odv6jDZg"]]];
const libraryBundleIds=[15];
const linkBundles=[[/^\/$/,[26,9,5,28]]];
const m="QwikBuild",k=new Set,g=new Map,u=[],L=(e,n)=>n.filter(s=>!e.some(i=>s.endsWith(i[0]))),q=(e,n)=>!!n&&!E(n),E=e=>{const n=e.headers.get("Cache-Control")||"";return n.includes("no-cache")||n.includes("max-age=0")},C=(e,n)=>e.some(s=>n.endsWith("/"+s[0])),U=(e,n)=>e.find(s=>s[0]===n),b=(e,n)=>n.map(s=>e[s]?e[s][0]:null),W=(e,n)=>n.map(s=>e.get(s)).filter(s=>s!=null),p=e=>{const n=new Map;for(const s of e){const i=s[2];if(i)for(const c of i)n.set(c,s[0])}return n},v=(e,n,s,i)=>new Promise((c,h)=>{const t=i.url,r=s.get(t);if(r)r.push([c,h]);else{const o=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d]of a)d(l.clone())}else c(l.clone())},f=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d,A]of a)A(l)}else h(l)};s.set(t,[[c,h]]),e.match(t).then(l=>{if(q(i,l))o(l);else return n(i).then(async a=>{a.ok&&await e.put(t,a.clone()),o(a)})}).catch(l=>e.match(t).then(a=>{a?o(a):f(l)}))}}),y=(e,n,s,i,c,h=!1)=>{const t=()=>{for(;u.length>0&&g.size<6;){const o=u.shift(),f=new Request(o);k.has(o)?t():(k.add(o),v(n,s,g,f).finally(t))}},r=o=>{try{const f=U(e,o);if(f){const l=b(e,f[1]),a=new URL(o,i).href,d=u.indexOf(a);d>-1?h&&(u.splice(d,1),u.unshift(a)):h?u.unshift(a):u.push(a),l.forEach(r)}}catch(f){console.error(f)}};Array.isArray(c)&&c.forEach(r),t()},w=(e,n,s,i,c,h,t)=>{try{y(e,i,c,h,b(e,n))}catch(r){console.error(r)}for(const r of t)try{for(const o of s){const[f,l]=o;if(f.test(r)){y(e,i,c,h,b(e,l));break}}}catch(o){console.error(o)}},B=(e,n,s,i)=>{try{const c=i.href.split("/"),h=c[c.length-1];c[c.length-1]="";const t=new URL(c.join("/"));y(e,n,s,t,[h],!0)}catch(c){console.error(c)}},N=(e,n,s,i)=>{const c=e.fetch.bind(e),h=p(n);e.addEventListener("fetch",t=>{const r=t.request;if(r.method==="GET"){const o=new URL(r.url);C(n,o.pathname)&&t.respondWith(e.caches.open(m).then(f=>(B(n,f,c,o),v(f,c,g,r))))}}),e.addEventListener("message",async({data:t})=>{if(t.type==="qprefetch"&&typeof t.base=="string"){const r=await e.caches.open(m),o=new URL(t.base,e.origin);Array.isArray(t.links)&&w(n,s,i,r,c,o,t.links),Array.isArray(t.bundles)&&y(n,r,c,o,t.bundles),Array.isArray(t.symbols)&&y(n,r,c,o,W(h,t.symbols))}}),e.addEventListener("activate",()=>{(async()=>{try{const t=await e.caches.open(m),o=(await t.keys()).map(l=>l.url),f=L(n,o);await Promise.all(f.map(l=>t.delete(l)))}catch(t){console.error(t)}})()})},x=()=>{typeof self<"u"&&typeof appBundles<"u"&&N(self,appBundles,libraryBundleIds,linkBundles)};x();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());
