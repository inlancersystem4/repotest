import{_ as r,u as o,r as u,o as i,c as g,a as e,n as l,g as m,w as _,x as d}from"./index-CObJ0xdd.js";import{_ as f}from"./menu-logo-BARb-1YE.js";const p={computed:{locale(){return o().selectedLanguage}},methods:{changeLanguage(t){o().setLanguage(t),this.locale=t}}},x={class:"w-full h-full max-w-3xl mx-auto"},h={class:"w-full relative mt-14"},v={class:"absolute top-0 left-0 px-2 flex items-center gap-0.5"},L=e("span",null,"|",-1),b=e("img",{src:f,class:"w-[120px] mx-auto h-auto",alt:"logo"},null,-1);function k(t,a,w,C,B,s){const n=u("RouterLink");return i(),g("div",x,[e("div",h,[e("div",v,[e("button",{class:l(["language--btn",{active:s.locale==="ar"}]),onClick:a[0]||(a[0]=c=>s.changeLanguage("ar"))}," AR ",2),L,e("button",{class:l(["language--btn",{active:s.locale==="en"}]),onClick:a[1]||(a[1]=c=>s.changeLanguage("en"))}," EN ",2)]),m(n,{to:"/menu-list",class:"block w-fit mx-auto"},{default:_(()=>[b]),_:1})]),d(t.$slots,"default")])}const $=r(p,[["render",k]]);export{$ as W};
