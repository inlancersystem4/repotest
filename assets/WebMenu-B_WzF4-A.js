import{W as w}from"./WebLayout-pdHvXEar.js";import{_ as d,o as t,b as s,F as m,d as u,r,e as l,w as b,f as g,t as y,n as $,a as e,g as k,h as v,c as B}from"./index-Dc2auA2K.js";const C={data(){return{array:[{name:"Eggs",active:1},{name:"Manusha",active:0},{name:"F.Toast",active:0},{name:"Tartine",active:0}]}}},M={class:"bottom--menu"};function D(_,c,p,h,a,f){const n=r("RouterLink");return t(),s("ul",M,[(t(!0),s(m,null,u(a.array,(o,i)=>(t(),s("li",{key:i},[l(n,{to:"/",class:$(["menu--link",{active:o.active==1}])},{default:b(()=>[g(y(o.name),1)]),_:2},1032,["class"])]))),128))])}const H=d(C,[["render",D]]),S="/assets/cartbasket-B8BHdd8G.png",V={data(){return{show:!1}}},W={class:"relative"},L=e("img",{src:S,alt:"cart basket",class:"w-10 h-auto"},null,-1),A=[L],G={key:0,class:"cart--box"},N={class:"cart--list"},j=v('<img src="https://images.unsplash.com/photo-1547584370-2cc98b8b8dc8?q=80&amp;w=1471&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="food"><div class="space-y-1.5"><h2 class="menu--item-name">Breakfast Bagel</h2></div><p class="menu--item-description">Seared turkey with cheddar cheese and hash brown topped with a fried egg and a dash of Sriracha</p><p class="menu--item-calories">Calories 589</p>',4),F=[j];function R(_,c,p,h,a,f){return t(),s("div",W,[e("button",{onClick:c[0]||(c[0]=n=>a.show=!a.show)},A),a.show?(t(),s("div",G,[e("ul",N,[(t(),s(m,null,u(4,(n,o)=>e("li",{class:"menu--box",key:o},F)),64))])])):k("",!0)])}const T=d(V,[["render",R]]),q={components:{WebLayout:w,BottomMenu:H,CartContainer:T}},E={class:"mt-6 flex justify-between items-end w-full px-4"},Y=e("div",{class:"space-y-0.5"},[e("h5",{class:"menu--page-title"},"Day Menu"),e("p",{class:"menu--page-sub_title"},"Our day menu is served from 8 am to 6 pm")],-1),z={class:"grid grid-cols-2 gap-2 px-4 mt-6 pb-20"},O=e("img",{src:"https://images.unsplash.com/photo-1547584370-2cc98b8b8dc8?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:"food"},null,-1),I=e("div",{class:"space-y-1.5"},[e("h2",{class:"menu--item-name"},"Breakfast Bagel"),e("h6",{class:"menu--item-price"},"SAR 45")],-1),J=e("p",{class:"menu--item-description"},"Seared turkey with cheddar cheese and hash brown topped with a fried egg and a dash of Sriracha",-1),K=e("p",{class:"menu--item-calories"},"Calories 589",-1),P=[O,I,J,K];function Q(_,c,p,h,a,f){const n=r("CartContainer"),o=r("BottomMenu"),i=r("WebLayout");return t(),B(i,null,{default:b(()=>[e("div",E,[Y,l(n)]),e("ul",z,[(t(),s(m,null,u(2,(U,x)=>e("li",{class:"menu--box",key:x},P)),64))]),l(o)]),_:1})}const ee=d(q,[["render",Q]]);export{ee as default};