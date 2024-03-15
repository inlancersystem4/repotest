import{_ as Ge,r as Ke,o as Ye,b as ze,a as ee,e as fe,w as Se,f as $e,i as Ie,j as P,k as A,l as g,m as h,p as mt,q as S,F as Xe,s as C,u as k,v as L,x as N,y as Y,z as ht,T as gt,A as bt,B as wt,C as yt,n as Et}from"./index-Dc2auA2K.js";const St={},$t={class:"flex items-stretch gap-3.5"},Tt={class:"block"},Lt={class:"block"},Ft={class:"block"};function Ot(e,t,n,l,r,o){const a=Ke("RouterLink");return Ye(),ze("ul",$t,[ee("li",Tt,[fe(a,{to:"/admin/menus",class:"tab--link"},{default:Se(()=>[$e("Categories")]),_:1})]),ee("li",Lt,[fe(a,{to:"/admin/menus/menu",class:"tab--link"},{default:Se(()=>[$e("Menu")]),_:1})]),ee("li",Ft,[fe(a,{to:"/admin/menus/items",class:"tab--link"},{default:Se(()=>[$e("Menu items")]),_:1})])])}const Pt=Ge(St,[["render",Ot]]),At={components:{TabBarVue:Pt}},Ct={class:"w-full max-w-[1338px] mx-auto px-2.5 mt-4"},xt={class:"flex items-center justify-between w-full gap-6"};function Dt(e,t,n,l,r,o){const a=Ke("TabBarVue");return Ye(),ze("div",null,[ee("section",Ct,[ee("div",xt,[fe(a),Ie(e.$slots,"tabMenu")]),Ie(e.$slots,"default")])])}const Dn=Ge(At,[["render",Dt]]);let kt=Symbol("headlessui.useid"),Nt=0;function he(){return P(kt,()=>`${++Nt}`)()}function E(e){var t;if(e==null||e.value==null)return null;let n=(t=e.value.$el)!=null?t:e.value;return n instanceof Node?n:null}function M(e,t,...n){if(e in t){let r=t[e];return typeof r=="function"?r(...n):r}let l=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(r=>`"${r}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,M),l}var Mt=Object.defineProperty,Rt=(e,t,n)=>t in e?Mt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ue=(e,t,n)=>(Rt(e,typeof t!="symbol"?t+"":t,n),n);let _t=class{constructor(){Ue(this,"current",this.detect()),Ue(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}},te=new _t;function z(e){if(te.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=E(e);if(t)return t.ownerDocument}return document}let Oe=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var H=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(H||{}),Qe=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Qe||{}),jt=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(jt||{});function Ht(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(Oe)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var Ze=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(Ze||{});function Bt(e,t=0){var n;return e===((n=z(e))==null?void 0:n.body)?!1:M(t,{0(){return e.matches(Oe)},1(){let l=e;for(;l!==null;){if(l.matches(Oe))return!0;l=l.parentElement}return!1}})}var It=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(It||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function q(e){e==null||e.focus({preventScroll:!0})}let Ut=["textarea","input"].join(",");function Vt(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,Ut))!=null?n:!1}function Wt(e,t=n=>n){return e.slice().sort((n,l)=>{let r=t(n),o=t(l);if(r===null||o===null)return 0;let a=r.compareDocumentPosition(o);return a&Node.DOCUMENT_POSITION_FOLLOWING?-1:a&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function pe(e,t,{sorted:n=!0,relativeTo:l=null,skipElements:r=[]}={}){var o;let a=(o=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?o:document,i=Array.isArray(e)?n?Wt(e):e:Ht(e);r.length>0&&i.length>1&&(i=i.filter(f=>!r.includes(f))),l=l??a.activeElement;let u=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,i.indexOf(l))-1;if(t&4)return Math.max(0,i.indexOf(l))+1;if(t&8)return i.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=t&32?{preventScroll:!0}:{},v=0,c=i.length,p;do{if(v>=c||v+c<=0)return 0;let f=s+v;if(t&16)f=(f+c)%c;else{if(f<0)return 3;if(f>=c)return 1}p=i[f],p==null||p.focus(d),v+=u}while(p!==a.activeElement);return t&6&&Vt(p)&&p.select(),2}function Je(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function qt(){return/Android/gi.test(window.navigator.userAgent)}function Gt(){return Je()||qt()}function se(e,t,n){te.isServer||A(l=>{document.addEventListener(e,t,n),l(()=>document.removeEventListener(e,t,n))})}function et(e,t,n){te.isServer||A(l=>{window.addEventListener(e,t,n),l(()=>window.removeEventListener(e,t,n))})}function Kt(e,t,n=h(()=>!0)){function l(o,a){if(!n.value||o.defaultPrevented)return;let i=a(o);if(i===null||!i.getRootNode().contains(i))return;let u=function s(d){return typeof d=="function"?s(d()):Array.isArray(d)||d instanceof Set?d:[d]}(e);for(let s of u){if(s===null)continue;let d=s instanceof HTMLElement?s:E(s);if(d!=null&&d.contains(i)||o.composed&&o.composedPath().includes(d))return}return!Bt(i,Ze.Loose)&&i.tabIndex!==-1&&o.preventDefault(),t(o,i)}let r=g(null);se("pointerdown",o=>{var a,i;n.value&&(r.value=((i=(a=o.composedPath)==null?void 0:a.call(o))==null?void 0:i[0])||o.target)},!0),se("mousedown",o=>{var a,i;n.value&&(r.value=((i=(a=o.composedPath)==null?void 0:a.call(o))==null?void 0:i[0])||o.target)},!0),se("click",o=>{Gt()||r.value&&(l(o,()=>r.value),r.value=null)},!0),se("touchend",o=>l(o,()=>o.target instanceof HTMLElement?o.target:null),!0),et("blur",o=>l(o,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}var ve=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(ve||{}),B=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(B||{});function R({visible:e=!0,features:t=0,ourProps:n,theirProps:l,...r}){var o;let a=nt(l,n),i=Object.assign(r,{props:a});if(e||t&2&&a.static)return Te(i);if(t&1){let u=(o=a.unmount)==null||o?0:1;return M(u,{0(){return null},1(){return Te({...r,props:{...a,hidden:!0,style:{display:"none"}}})}})}return Te(i)}function Te({props:e,attrs:t,slots:n,slot:l,name:r}){var o,a;let{as:i,...u}=lt(e,["unmount","static"]),s=(o=n.default)==null?void 0:o.call(n,l),d={};if(l){let v=!1,c=[];for(let[p,f]of Object.entries(l))typeof f=="boolean"&&(v=!0),f===!0&&c.push(p);v&&(d["data-headlessui-state"]=c.join(" "))}if(i==="template"){if(s=tt(s??[]),Object.keys(u).length>0||Object.keys(t).length>0){let[v,...c]=s??[];if(!Yt(v)||c.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${r} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(u).concat(Object.keys(t)).map(m=>m.trim()).filter((m,w,x)=>x.indexOf(m)===w).sort((m,w)=>m.localeCompare(w)).map(m=>`  - ${m}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(m=>`  - ${m}`).join(`
`)].join(`
`));let p=nt((a=v.props)!=null?a:{},u,d),f=mt(v,p,!0);for(let m in p)m.startsWith("on")&&(f.props||(f.props={}),f.props[m]=p[m]);return f}return Array.isArray(s)&&s.length===1?s[0]:s}return S(i,Object.assign({},u,d),{default:()=>s})}function tt(e){return e.flatMap(t=>t.type===Xe?tt(t.children):[t])}function nt(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let l of e)for(let r in l)r.startsWith("on")&&typeof l[r]=="function"?(n[r]!=null||(n[r]=[]),n[r].push(l[r])):t[r]=l[r];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(l=>[l,void 0])));for(let l in n)Object.assign(t,{[l](r,...o){let a=n[l];for(let i of a){if(r instanceof Event&&r.defaultPrevented)return;i(r,...o)}}});return t}function lt(e,t=[]){let n=Object.assign({},e);for(let l of t)l in n&&delete n[l];return n}function Yt(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}var me=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(me||{});let Pe=C({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:n}){return()=>{var l;let{features:r,...o}=e,a={"aria-hidden":(r&2)===2?!0:(l=o["aria-hidden"])!=null?l:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return R({ourProps:a,theirProps:o,slot:{},attrs:n,slots:t,name:"Hidden"})}}}),rt=Symbol("Context");var T=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(T||{});function zt(){return ke()!==null}function ke(){return P(rt,null)}function Xt(e){k(rt,e)}var ot=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(ot||{});function Qt(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}let V=[];Qt(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&V[0]!==t.target&&(V.unshift(t.target),V=V.filter(n=>n!=null&&n.isConnected),V.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function Ne(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function ne(){let e=[],t={addEventListener(n,l,r,o){return n.addEventListener(l,r,o),t.add(()=>n.removeEventListener(l,r,o))},requestAnimationFrame(...n){let l=requestAnimationFrame(...n);t.add(()=>cancelAnimationFrame(l))},nextFrame(...n){t.requestAnimationFrame(()=>{t.requestAnimationFrame(...n)})},setTimeout(...n){let l=setTimeout(...n);t.add(()=>clearTimeout(l))},microTask(...n){let l={current:!0};return Ne(()=>{l.current&&n[0]()}),t.add(()=>{l.current=!1})},style(n,l,r){let o=n.style.getPropertyValue(l);return Object.assign(n.style,{[l]:r}),this.add(()=>{Object.assign(n.style,{[l]:o})})},group(n){let l=ne();return n(l),this.add(()=>l.dispose())},add(n){return e.push(n),()=>{let l=e.indexOf(n);if(l>=0)for(let r of e.splice(l,1))r()}},dispose(){for(let n of e.splice(0))n()}};return t}function at(e,t,n,l){te.isServer||A(r=>{e=e??window,e.addEventListener(t,n,l),r(()=>e.removeEventListener(t,n,l))})}var J=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(J||{});function Zt(){let e=g(0);return et("keydown",t=>{t.key==="Tab"&&(e.value=t.shiftKey?1:0)}),e}function it(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.value){let l=E(n);l instanceof HTMLElement&&t.add(l)}return t}var ut=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(ut||{});let Q=Object.assign(C({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:g(new Set)}},inheritAttrs:!1,setup(e,{attrs:t,slots:n,expose:l}){let r=g(null);l({el:r,$el:r});let o=h(()=>z(r)),a=g(!1);L(()=>a.value=!0),N(()=>a.value=!1),en({ownerDocument:o},h(()=>a.value&&!!(e.features&16)));let i=tn({ownerDocument:o,container:r,initialFocus:h(()=>e.initialFocus)},h(()=>a.value&&!!(e.features&2)));nn({ownerDocument:o,container:r,containers:e.containers,previousActiveElement:i},h(()=>a.value&&!!(e.features&8)));let u=Zt();function s(p){let f=E(r);f&&(m=>m())(()=>{M(u.value,{[J.Forwards]:()=>{pe(f,H.First,{skipElements:[p.relatedTarget]})},[J.Backwards]:()=>{pe(f,H.Last,{skipElements:[p.relatedTarget]})}})})}let d=g(!1);function v(p){p.key==="Tab"&&(d.value=!0,requestAnimationFrame(()=>{d.value=!1}))}function c(p){if(!a.value)return;let f=it(e.containers);E(r)instanceof HTMLElement&&f.add(E(r));let m=p.relatedTarget;m instanceof HTMLElement&&m.dataset.headlessuiFocusGuard!=="true"&&(st(f,m)||(d.value?pe(E(r),M(u.value,{[J.Forwards]:()=>H.Next,[J.Backwards]:()=>H.Previous})|H.WrapAround,{relativeTo:p.target}):p.target instanceof HTMLElement&&q(p.target)))}return()=>{let p={},f={ref:r,onKeydown:v,onFocusout:c},{features:m,initialFocus:w,containers:x,...$}=e;return S(Xe,[!!(m&4)&&S(Pe,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:s,features:me.Focusable}),R({ourProps:f,theirProps:{...t,...$},slot:p,attrs:t,slots:n,name:"FocusTrap"}),!!(m&4)&&S(Pe,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:s,features:me.Focusable})])}}}),{features:ut});function Jt(e){let t=g(V.slice());return Y([e],([n],[l])=>{l===!0&&n===!1?Ne(()=>{t.value.splice(0)}):l===!1&&n===!0&&(t.value=V.slice())},{flush:"post"}),()=>{var n;return(n=t.value.find(l=>l!=null&&l.isConnected))!=null?n:null}}function en({ownerDocument:e},t){let n=Jt(t);L(()=>{A(()=>{var l,r;t.value||((l=e.value)==null?void 0:l.activeElement)===((r=e.value)==null?void 0:r.body)&&q(n())},{flush:"post"})}),N(()=>{t.value&&q(n())})}function tn({ownerDocument:e,container:t,initialFocus:n},l){let r=g(null),o=g(!1);return L(()=>o.value=!0),N(()=>o.value=!1),L(()=>{Y([t,n,l],(a,i)=>{if(a.every((s,d)=>(i==null?void 0:i[d])===s)||!l.value)return;let u=E(t);u&&Ne(()=>{var s,d;if(!o.value)return;let v=E(n),c=(s=e.value)==null?void 0:s.activeElement;if(v){if(v===c){r.value=c;return}}else if(u.contains(c)){r.value=c;return}v?q(v):pe(u,H.First|H.NoScroll)===Qe.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),r.value=(d=e.value)==null?void 0:d.activeElement})},{immediate:!0,flush:"post"})}),r}function nn({ownerDocument:e,container:t,containers:n,previousActiveElement:l},r){var o;at((o=e.value)==null?void 0:o.defaultView,"focus",a=>{if(!r.value)return;let i=it(n);E(t)instanceof HTMLElement&&i.add(E(t));let u=l.value;if(!u)return;let s=a.target;s&&s instanceof HTMLElement?st(i,s)?(l.value=s,q(s)):(a.preventDefault(),a.stopPropagation(),q(u)):q(l.value)},!0)}function st(e,t){for(let n of e)if(n.contains(t))return!0;return!1}function ln(e){let t=ht(e.getSnapshot());return N(e.subscribe(()=>{t.value=e.getSnapshot()})),t}function rn(e,t){let n=e(),l=new Set;return{getSnapshot(){return n},subscribe(r){return l.add(r),()=>l.delete(r)},dispatch(r,...o){let a=t[r].call(n,...o);a&&(n=a,l.forEach(i=>i()))}}}function on(){let e;return{before({doc:t}){var n;let l=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-l.clientWidth},after({doc:t,d:n}){let l=t.documentElement,r=l.clientWidth-l.offsetWidth,o=e-r;n.style(l,"paddingRight",`${o}px`)}}}function an(){return Je()?{before({doc:e,d:t,meta:n}){function l(r){return n.containers.flatMap(o=>o()).some(o=>o.contains(r))}t.microTask(()=>{var r;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let i=ne();i.style(e.documentElement,"scrollBehavior","auto"),t.add(()=>t.microTask(()=>i.dispose()))}let o=(r=window.scrollY)!=null?r:window.pageYOffset,a=null;t.addEventListener(e,"click",i=>{if(i.target instanceof HTMLElement)try{let u=i.target.closest("a");if(!u)return;let{hash:s}=new URL(u.href),d=e.querySelector(s);d&&!l(d)&&(a=d)}catch{}},!0),t.addEventListener(e,"touchstart",i=>{if(i.target instanceof HTMLElement)if(l(i.target)){let u=i.target;for(;u.parentElement&&l(u.parentElement);)u=u.parentElement;t.style(u,"overscrollBehavior","contain")}else t.style(i.target,"touchAction","none")}),t.addEventListener(e,"touchmove",i=>{if(i.target instanceof HTMLElement)if(l(i.target)){let u=i.target;for(;u.parentElement&&u.dataset.headlessuiPortal!==""&&!(u.scrollHeight>u.clientHeight||u.scrollWidth>u.clientWidth);)u=u.parentElement;u.dataset.headlessuiPortal===""&&i.preventDefault()}else i.preventDefault()},{passive:!1}),t.add(()=>{var i;let u=(i=window.scrollY)!=null?i:window.pageYOffset;o!==u&&window.scrollTo(0,o),a&&a.isConnected&&(a.scrollIntoView({block:"nearest"}),a=null)})})}}:{}}function un(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function sn(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let W=rn(()=>new Map,{PUSH(e,t){var n;let l=(n=this.get(e))!=null?n:{doc:e,count:0,d:ne(),meta:new Set};return l.count++,l.meta.add(t),this.set(e,l),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let l={doc:e,d:t,meta:sn(n)},r=[an(),on(),un()];r.forEach(({before:o})=>o==null?void 0:o(l)),r.forEach(({after:o})=>o==null?void 0:o(l))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});W.subscribe(()=>{let e=W.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let l=t.get(n.doc)==="hidden",r=n.count!==0;(r&&!l||!r&&l)&&W.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&W.dispatch("TEARDOWN",n)}});function dn(e,t,n){let l=ln(W),r=h(()=>{let o=e.value?l.value.get(e.value):void 0;return o?o.count>0:!1});return Y([e,t],([o,a],[i],u)=>{if(!o||!a)return;W.dispatch("PUSH",o,n);let s=!1;u(()=>{s||(W.dispatch("POP",i??o,n),s=!0)})},{immediate:!0}),r}let Le=new Map,Z=new Map;function Ve(e,t=g(!0)){A(n=>{var l;if(!t.value)return;let r=E(e);if(!r)return;n(function(){var a;if(!r)return;let i=(a=Z.get(r))!=null?a:1;if(i===1?Z.delete(r):Z.set(r,i-1),i!==1)return;let u=Le.get(r);u&&(u["aria-hidden"]===null?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",u["aria-hidden"]),r.inert=u.inert,Le.delete(r))});let o=(l=Z.get(r))!=null?l:0;Z.set(r,o+1),o===0&&(Le.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0)})}function cn({defaultContainers:e=[],portals:t,mainTreeNodeRef:n}={}){let l=g(null),r=z(l);function o(){var a,i,u;let s=[];for(let d of e)d!==null&&(d instanceof HTMLElement?s.push(d):"value"in d&&d.value instanceof HTMLElement&&s.push(d.value));if(t!=null&&t.value)for(let d of t.value)s.push(d);for(let d of(a=r==null?void 0:r.querySelectorAll("html > *, body > *"))!=null?a:[])d!==document.body&&d!==document.head&&d instanceof HTMLElement&&d.id!=="headlessui-portal-root"&&(d.contains(E(l))||d.contains((u=(i=E(l))==null?void 0:i.getRootNode())==null?void 0:u.host)||s.some(v=>d.contains(v))||s.push(d));return s}return{resolveContainers:o,contains(a){return o().some(i=>i.contains(a))},mainTreeNodeRef:l,MainTreeNode(){return n!=null?null:S(Pe,{features:me.Hidden,ref:l})}}}let dt=Symbol("ForcePortalRootContext");function fn(){return P(dt,!1)}let We=C({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:n}){return k(dt,e.force),()=>{let{force:l,...r}=e;return R({theirProps:r,ourProps:{},slot:{},slots:t,attrs:n,name:"ForcePortalRoot"})}}}),ct=Symbol("StackContext");var Ae=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(Ae||{});function pn(){return P(ct,()=>{})}function vn({type:e,enabled:t,element:n,onUpdate:l}){let r=pn();function o(...a){l==null||l(...a),r(...a)}L(()=>{Y(t,(a,i)=>{a?o(0,e,n):i===!0&&o(1,e,n)},{immediate:!0,flush:"sync"})}),N(()=>{t.value&&o(1,e,n)}),k(ct,o)}let mn=Symbol("DescriptionContext");function hn({slot:e=g({}),name:t="Description",props:n={}}={}){let l=g([]);function r(o){return l.value.push(o),()=>{let a=l.value.indexOf(o);a!==-1&&l.value.splice(a,1)}}return k(mn,{register:r,slot:e,name:t,props:n}),h(()=>l.value.length>0?l.value.join(" "):void 0)}function gn(e){let t=z(e);if(!t){if(e===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)}let n=t.getElementById("headlessui-portal-root");if(n)return n;let l=t.createElement("div");return l.setAttribute("id","headlessui-portal-root"),t.body.appendChild(l)}let bn=C({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:n}){let l=g(null),r=h(()=>z(l)),o=fn(),a=P(ft,null),i=g(o===!0||a==null?gn(l.value):a.resolveTarget()),u=g(!1);L(()=>{u.value=!0}),A(()=>{o||a!=null&&(i.value=a.resolveTarget())});let s=P(Ce,null),d=!1,v=wt();return Y(l,()=>{if(d||!s)return;let c=E(l);c&&(N(s.register(c),v),d=!0)}),N(()=>{var c,p;let f=(c=r.value)==null?void 0:c.getElementById("headlessui-portal-root");f&&i.value===f&&i.value.children.length<=0&&((p=i.value.parentElement)==null||p.removeChild(i.value))}),()=>{if(!u.value||i.value===null)return null;let c={ref:l,"data-headlessui-portal":""};return S(gt,{to:i.value},R({ourProps:c,theirProps:e,slot:{},attrs:n,slots:t,name:"Portal"}))}}}),Ce=Symbol("PortalParentContext");function wn(){let e=P(Ce,null),t=g([]);function n(o){return t.value.push(o),e&&e.register(o),()=>l(o)}function l(o){let a=t.value.indexOf(o);a!==-1&&t.value.splice(a,1),e&&e.unregister(o)}let r={register:n,unregister:l,portals:t};return[t,C({name:"PortalWrapper",setup(o,{slots:a}){return k(Ce,r),()=>{var i;return(i=a.default)==null?void 0:i.call(a)}}})]}let ft=Symbol("PortalGroupContext"),yn=C({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(e,{attrs:t,slots:n}){let l=bt({resolveTarget(){return e.target}});return k(ft,l),()=>{let{target:r,...o}=e;return R({theirProps:o,ourProps:{},slot:{},attrs:t,slots:n,name:"PortalGroup"})}}});var En=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(En||{});let xe=Symbol("DialogContext");function Me(e){let t=P(xe,null);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Me),n}return t}let de="DC8F892D-2EBD-447C-A4C8-A03058436FF4",Nn=C({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:de},initialFocus:{type:Object,default:null},id:{type:String,default:null},role:{type:String,default:"dialog"}},emits:{close:e=>!0},setup(e,{emit:t,attrs:n,slots:l,expose:r}){var o,a;let i=(o=e.id)!=null?o:`headlessui-dialog-${he()}`,u=g(!1);L(()=>{u.value=!0});let s=!1,d=h(()=>e.role==="dialog"||e.role==="alertdialog"?e.role:(s||(s=!0,console.warn(`Invalid role [${d}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")),v=g(0),c=ke(),p=h(()=>e.open===de&&c!==null?(c.value&T.Open)===T.Open:e.open),f=g(null),m=h(()=>z(f));if(r({el:f,$el:f}),!(e.open!==de||c!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof p.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${p.value===de?void 0:e.open}`);let w=h(()=>u.value&&p.value?0:1),x=h(()=>w.value===0),$=h(()=>v.value>1),I=P(xe,null)!==null,[le,re]=wn(),{resolveContainers:G,mainTreeNodeRef:oe,MainTreeNode:ae}=cn({portals:le,defaultContainers:[h(()=>{var b;return(b=K.panelRef.value)!=null?b:f.value})]}),be=h(()=>$.value?"parent":"leaf"),ie=h(()=>c!==null?(c.value&T.Closing)===T.Closing:!1),we=h(()=>I||ie.value?!1:x.value),ye=h(()=>{var b,y,F;return(F=Array.from((y=(b=m.value)==null?void 0:b.querySelectorAll("body > *"))!=null?y:[]).find(O=>O.id==="headlessui-portal-root"?!1:O.contains(E(oe))&&O instanceof HTMLElement))!=null?F:null});Ve(ye,we);let D=h(()=>$.value?!0:x.value),X=h(()=>{var b,y,F;return(F=Array.from((y=(b=m.value)==null?void 0:b.querySelectorAll("[data-headlessui-portal]"))!=null?y:[]).find(O=>O.contains(E(oe))&&O instanceof HTMLElement))!=null?F:null});Ve(X,D),vn({type:"Dialog",enabled:h(()=>w.value===0),element:f,onUpdate:(b,y)=>{if(y==="Dialog")return M(b,{[Ae.Add]:()=>v.value+=1,[Ae.Remove]:()=>v.value-=1})}});let _=hn({name:"DialogDescription",slot:h(()=>({open:p.value}))}),j=g(null),K={titleId:j,panelRef:g(null),dialogState:w,setTitleId(b){j.value!==b&&(j.value=b)},close(){t("close",!1)}};k(xe,K);let je=h(()=>!(!x.value||$.value));Kt(G,(b,y)=>{K.close(),yt(()=>y==null?void 0:y.focus())},je);let He=h(()=>!($.value||w.value!==0));at((a=m.value)==null?void 0:a.defaultView,"keydown",b=>{He.value&&(b.defaultPrevented||b.key===ot.Escape&&(b.preventDefault(),b.stopPropagation(),K.close()))});let Be=h(()=>!(ie.value||w.value!==0||I));return dn(m,Be,b=>{var y;return{containers:[...(y=b.containers)!=null?y:[],G]}}),A(b=>{if(w.value!==0)return;let y=E(f);if(!y)return;let F=new ResizeObserver(O=>{for(let Ee of O){let ue=Ee.target.getBoundingClientRect();ue.x===0&&ue.y===0&&ue.width===0&&ue.height===0&&K.close()}});F.observe(y),b(()=>F.disconnect())}),()=>{let{open:b,initialFocus:y,...F}=e,O={...n,ref:f,id:i,role:d.value,"aria-modal":w.value===0?!0:void 0,"aria-labelledby":j.value,"aria-describedby":_.value},Ee={open:w.value===0};return S(We,{force:!0},()=>[S(bn,()=>S(yn,{target:f.value},()=>S(We,{force:!1},()=>S(Q,{initialFocus:y,containers:G,features:x.value?M(be.value,{parent:Q.features.RestoreFocus,leaf:Q.features.All&~Q.features.FocusLock}):Q.features.None},()=>S(re,{},()=>R({ourProps:O,theirProps:{...F,...n},slot:Ee,attrs:n,slots:l,visible:w.value===0,features:ve.RenderStrategy|ve.Static,name:"Dialog"})))))),S(ae)])}}}),Mn=C({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:null}},setup(e,{attrs:t,slots:n,expose:l}){var r;let o=(r=e.id)!=null?r:`headlessui-dialog-panel-${he()}`,a=Me("DialogPanel");l({el:a.panelRef,$el:a.panelRef});function i(u){u.stopPropagation()}return()=>{let{...u}=e,s={id:o,ref:a.panelRef,onClick:i};return R({ourProps:s,theirProps:u,slot:{open:a.dialogState.value===0},attrs:t,slots:n,name:"DialogPanel"})}}}),Rn=C({name:"DialogTitle",props:{as:{type:[Object,String],default:"h2"},id:{type:String,default:null}},setup(e,{attrs:t,slots:n}){var l;let r=(l=e.id)!=null?l:`headlessui-dialog-title-${he()}`,o=Me("DialogTitle");return L(()=>{o.setTitleId(r),N(()=>o.setTitleId(null))}),()=>{let{...a}=e;return R({ourProps:{id:r},theirProps:a,slot:{open:o.dialogState.value===0},attrs:t,slots:n,name:"DialogTitle"})}}});function Sn(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}function Fe(e,...t){e&&t.length>0&&e.classList.add(...t)}function ce(e,...t){e&&t.length>0&&e.classList.remove(...t)}var De=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(De||{});function $n(e,t){let n=ne();if(!e)return n.dispose;let{transitionDuration:l,transitionDelay:r}=getComputedStyle(e),[o,a]=[l,r].map(i=>{let[u=0]=i.split(",").filter(Boolean).map(s=>s.includes("ms")?parseFloat(s):parseFloat(s)*1e3).sort((s,d)=>d-s);return u});return o!==0?n.setTimeout(()=>t("finished"),o+a):t("finished"),n.add(()=>t("cancelled")),n.dispose}function qe(e,t,n,l,r,o){let a=ne(),i=o!==void 0?Sn(o):()=>{};return ce(e,...r),Fe(e,...t,...n),a.nextFrame(()=>{ce(e,...n),Fe(e,...l),a.add($n(e,u=>(ce(e,...l,...t),Fe(e,...r),i(u))))}),a.add(()=>ce(e,...t,...n,...l,...r)),a.add(()=>i("cancelled")),a.dispose}function U(e=""){return e.split(/\s+/).filter(t=>t.length>1)}let Re=Symbol("TransitionContext");var Tn=(e=>(e.Visible="visible",e.Hidden="hidden",e))(Tn||{});function Ln(){return P(Re,null)!==null}function Fn(){let e=P(Re,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function On(){let e=P(_e,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let _e=Symbol("NestingContext");function ge(e){return"children"in e?ge(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function pt(e){let t=g([]),n=g(!1);L(()=>n.value=!0),N(()=>n.value=!1);function l(o,a=B.Hidden){let i=t.value.findIndex(({id:u})=>u===o);i!==-1&&(M(a,{[B.Unmount](){t.value.splice(i,1)},[B.Hidden](){t.value[i].state="hidden"}}),!ge(t)&&n.value&&(e==null||e()))}function r(o){let a=t.value.find(({id:i})=>i===o);return a?a.state!=="visible"&&(a.state="visible"):t.value.push({id:o,state:"visible"}),()=>l(o,B.Unmount)}return{children:t,register:r,unregister:l}}let vt=ve.RenderStrategy,Pn=C({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:l,expose:r}){let o=g(0);function a(){o.value|=T.Opening,t("beforeEnter")}function i(){o.value&=~T.Opening,t("afterEnter")}function u(){o.value|=T.Closing,t("beforeLeave")}function s(){o.value&=~T.Closing,t("afterLeave")}if(!Ln()&&zt())return()=>S(Cn,{...e,onBeforeEnter:a,onAfterEnter:i,onBeforeLeave:u,onAfterLeave:s},l);let d=g(null),v=h(()=>e.unmount?B.Unmount:B.Hidden);r({el:d,$el:d});let{show:c,appear:p}=Fn(),{register:f,unregister:m}=On(),w=g(c.value?"visible":"hidden"),x={value:!0},$=he(),I={value:!1},le=pt(()=>{!I.value&&w.value!=="hidden"&&(w.value="hidden",m($),s())});L(()=>{let D=f($);N(D)}),A(()=>{if(v.value===B.Hidden&&$){if(c.value&&w.value!=="visible"){w.value="visible";return}M(w.value,{hidden:()=>m($),visible:()=>f($)})}});let re=U(e.enter),G=U(e.enterFrom),oe=U(e.enterTo),ae=U(e.entered),be=U(e.leave),ie=U(e.leaveFrom),we=U(e.leaveTo);L(()=>{A(()=>{if(w.value==="visible"){let D=E(d);if(D instanceof Comment&&D.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function ye(D){let X=x.value&&!p.value,_=E(d);!_||!(_ instanceof HTMLElement)||X||(I.value=!0,c.value&&a(),c.value||u(),D(c.value?qe(_,re,G,oe,ae,j=>{I.value=!1,j===De.Finished&&i()}):qe(_,be,ie,we,ae,j=>{I.value=!1,j===De.Finished&&(ge(le)||(w.value="hidden",m($),s()))})))}return L(()=>{Y([c],(D,X,_)=>{ye(_),x.value=!1},{immediate:!0})}),k(_e,le),Xt(h(()=>M(w.value,{visible:T.Open,hidden:T.Closed})|o.value)),()=>{let{appear:D,show:X,enter:_,enterFrom:j,enterTo:K,entered:je,leave:He,leaveFrom:Be,leaveTo:b,...y}=e,F={ref:d},O={...y,...p.value&&c.value&&te.isServer?{class:Et([n.class,y.class,...re,...G])}:{}};return R({theirProps:O,ourProps:F,slot:{},slots:l,attrs:n,features:vt,visible:w.value==="visible",name:"TransitionChild"})}}}),An=Pn,Cn=C({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:l}){let r=ke(),o=h(()=>e.show===null&&r!==null?(r.value&T.Open)===T.Open:e.show);A(()=>{if(![!0,!1].includes(o.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let a=g(o.value?"visible":"hidden"),i=pt(()=>{a.value="hidden"}),u=g(!0),s={show:o,appear:h(()=>e.appear||!u.value)};return L(()=>{A(()=>{u.value=!1,o.value?a.value="visible":ge(i)||(a.value="hidden")})}),k(_e,i),k(Re,s),()=>{let d=lt(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),v={unmount:e.unmount};return R({ourProps:{...v,as:"template"},theirProps:{},slot:{},slots:{...l,default:()=>[S(An,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...n,...v,...d},l.default)]},attrs:{},features:vt,visible:a.value==="visible",name:"Transition"})}}});export{Mn as G,Dn as L,Cn as S,Rn as V,Nn as W,Pn as h};