import{_ as c,u as o,o as i,c as l,a as e}from"./index-CObJ0xdd.js";import{_ as r}from"./menu-logo-BARb-1YE.js";const u={data(){return{locale:o().selectedLanguage}},methods:{changeLanguage(s){o().setLanguage(s),this.locale=s,this.$router.push({name:"menuList"})}}},d={class:"w-full h-dvh fixed inset-0 bg-white flex items-center justify-center overflow-hidden"},g={class:"text-center space-y-2"},f=e("img",{src:r,class:"w-[180px] mx-auto h-auto",alt:"logo"},null,-1),_={class:"flex items-center justify-center gap-6 w-fit"},h=e("span",{class:"w-0.5 h-12 bg-base-color"},null,-1);function m(s,t,p,x,b,a){return i(),l("div",d,[e("div",g,[f,e("div",_,[e("button",{class:"text-lg text-base-color capitalize font-insigne font-semibold",onClick:t[0]||(t[0]=n=>a.changeLanguage("en"))}," English "),h,e("button",{class:"text-lg text-base-color capitalize font-insigne font-semibold",onClick:t[1]||(t[1]=n=>a.changeLanguage("ar"))}," عربي ")])])])}const w=c(u,[["render",m]]);export{w as default};
