(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[212],{1310:function(e,a,t){"use strict";t.d(a,{l:function(){return m},t:function(){return l}});var s=t(7437),n=t(518),r=t(7592),i=t(2200);function l(e){let{currentPage:a,totalPage:t,onPageChange:l}=e,c=e=>{e>=1&&e<=t&&l(e)};return(0,s.jsx)("div",{className:"flex items-center gap-2.5",children:(0,s.jsxs)("div",{className:"flex items-center gap-1.5",children:[(0,s.jsx)(i.z,{size:"icon",className:" border-infoBlue bg-background size-6 hover:bg-theme_grey_5 custom-box-shadow  ".concat(1==a?"opacity-50 pointer-events-none":""),onClick:()=>c(a-1),disabled:1==a,children:(0,s.jsx)(n.Z,{className:"h-4 w-4 text-black"})}),(0,s.jsx)(i.z,{size:"icon",className:"border-infoBlue bg-background size-6 hover:bg-theme_grey_5 custom-box-shadow  ".concat(a==t?"opacity-50 pointer-events-none":""),onClick:()=>c(a+1),disabled:a==t,children:(0,s.jsx)(r.Z,{className:"h-4 w-4 text-black"})})]})})}t(2265);var c=t(8296),d=t(2699),o=t(9512),u=t(8309);function m(){let{setTheme:e}=(0,o.F)();return(0,s.jsxs)(u.h_,{children:[(0,s.jsx)(u.$F,{asChild:!0,children:(0,s.jsxs)(i.z,{variant:"ghost",size:"icon",className:"max-w-8 max-h-8",children:[(0,s.jsx)(c.Z,{className:"h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),(0,s.jsx)(d.Z,{className:"absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"}),(0,s.jsx)("span",{className:"sr-only",children:"Toggle theme"})]})}),(0,s.jsxs)(u.AW,{align:"end",children:[(0,s.jsx)(u.Xi,{onClick:()=>e("light"),children:"Light"}),(0,s.jsx)(u.Xi,{onClick:()=>e("dark"),children:"Dark"}),(0,s.jsx)(u.Xi,{onClick:()=>e("system"),children:"System"})]})]})}},4300:function(e,a,t){"use strict";t.d(a,{default:function(){return l}});var s=t(7437),n=t(2265),r=t(6463),i=t(1444);function l(e){let{children:a}=e,t=(0,r.useRouter)(),l=(0,i.v9)(e=>e.universalReducer.uID);return((0,n.useEffect)(()=>{l&&t.push("/")},[l,t]),l)?(0,s.jsx)("div",{className:"w-full h-dvh flex items-center justify-center",children:"please wait..."}):(0,s.jsx)("div",{className:"w-full h-full",children:a})}},6159:function(e,a,t){"use strict";t.d(a,{default:function(){return S}});var s=t(7437),n=t(2265),r=t(8305),i=t.n(r),l=t(7138),c=t(1310),d=t(6463),o=t(1337),u=t(1444),m=t(8309),f=t(6903),h=t(1538),p=t(7592),x=(t(3550),t(8214));let g=n.forwardRef((e,a)=>{let{...t}=e;return(0,s.jsx)("nav",{ref:a,"aria-label":"breadcrumb",...t})});g.displayName="Breadcrumb";let j=n.forwardRef((e,a)=>{let{className:t,...n}=e;return(0,s.jsx)("ol",{ref:a,className:(0,x.cn)("flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",t),...n})});j.displayName="BreadcrumbList";let b=n.forwardRef((e,a)=>{let{className:t,...n}=e;return(0,s.jsx)("li",{ref:a,className:(0,x.cn)("inline-flex items-center gap-1.5",t),...n})});b.displayName="BreadcrumbItem";let N=n.forwardRef((e,a)=>{let{asChild:t,className:n,...r}=e,i=t?h.g7:"a";return(0,s.jsx)(i,{ref:a,className:(0,x.cn)("transition-colors hover:text-foreground",n),...r})});N.displayName="BreadcrumbLink";let A=n.forwardRef((e,a)=>{let{className:t,...n}=e;return(0,s.jsx)("span",{ref:a,role:"link","aria-disabled":"true","aria-current":"page",className:(0,x.cn)("font-normal text-foreground",t),...n})});A.displayName="BreadcrumbPage";let v=e=>{let{children:a,className:t,...n}=e;return(0,s.jsx)("div",{role:"presentation","aria-hidden":"true",className:(0,x.cn)("[&>svg]:size-3.5",t),...n,children:null!=a?a:(0,s.jsx)(p.Z,{})})};v.displayName="BreadcrumbSeparator";var _=t(6669),y=t(2200);let w=_.fC;_.xz;let k=_.h_,C=n.forwardRef((e,a)=>{let{className:t,...n}=e;return(0,s.jsx)(_.aV,{className:(0,x.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t),...n,ref:a})});C.displayName=_.aV.displayName;let R=n.forwardRef((e,a)=>{let{className:t,...n}=e;return(0,s.jsxs)(k,{children:[(0,s.jsx)(C,{}),(0,s.jsx)(_.VY,{ref:a,className:(0,x.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",t),...n})]})});R.displayName=_.VY.displayName;let E=e=>{let{className:a,...t}=e;return(0,s.jsx)("div",{className:(0,x.cn)("flex flex-col space-y-2 text-center sm:text-left",a),...t})};E.displayName="AlertDialogHeader";let z=e=>{let{className:a,...t}=e;return(0,s.jsx)("div",{className:(0,x.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",a),...t})};z.displayName="AlertDialogFooter";let I=n.forwardRef((e,a)=>{let{className:t,...n}=e;return(0,s.jsx)(_.Dx,{ref:a,className:(0,x.cn)("text-lg font-semibold",t),...n})});I.displayName=_.Dx.displayName;let B=n.forwardRef((e,a)=>{let{className:t,...n}=e;return(0,s.jsx)(_.dk,{ref:a,className:(0,x.cn)("text-sm text-muted-foreground",t),...n})});B.displayName=_.dk.displayName;let D=n.forwardRef((e,a)=>{let{className:t,...n}=e;return(0,s.jsx)(_.aU,{ref:a,className:(0,x.cn)((0,y.d)(),t),...n})});D.displayName=_.aU.displayName;let Z=n.forwardRef((e,a)=>{let{className:t,...n}=e;return(0,s.jsx)(_.$j,{ref:a,className:(0,x.cn)((0,y.d)({variant:"outline"}),"mt-2 sm:mt-0",t),...n})});function S(e){let{breadcrumbNav:a}=e,t=(0,d.useRouter)(),r=(0,u.I0)(),[h,p]=(0,n.useState)(!1);function x(e){e?p(e):p(!1)}return(0,s.jsxs)("header",{className:i().header,children:[(0,s.jsx)("div",{children:(0,s.jsx)(g,{children:(0,s.jsx)(j,{children:null==a?void 0:a.map((e,t)=>(0,s.jsx)(b,{children:e.breadcrumbLink?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(N,{asChild:!0,children:(0,s.jsx)(l.default,{className:i().breadcrumb_link,href:e.breadcrumbLink,children:e.breadcrumbTitle})}),t<a.length-1&&(0,s.jsx)(v,{})]}):(0,s.jsx)(A,{className:"".concat(i().breadcrumb_link," !text-successGreenLight"),children:e.breadcrumbTitle})},t))})})}),(0,s.jsxs)("div",{className:"flex items-center gap-2.5",children:[(0,s.jsx)(c.l,{}),(0,s.jsxs)(m.h_,{children:[(0,s.jsx)(m.$F,{children:(0,s.jsxs)(f.qE,{className:"max-w-8 max-h-8",children:[(0,s.jsx)(f.F$,{src:"https://github.com/shadcn.png",alt:"@shadcn"}),(0,s.jsx)(f.Q5,{children:"CN"})]})}),(0,s.jsxs)(m.AW,{className:"w-44 mr-2",children:[(0,s.jsx)(m.Xi,{asChild:!0,children:(0,s.jsx)(l.default,{href:"/profile",children:(0,s.jsx)("span",{children:"Profile"})})}),(0,s.jsx)(m.Xi,{onClick:()=>x(!0),children:(0,s.jsx)("span",{className:"text-red-600",children:"Log out"})})]})]})]}),(0,s.jsx)(w,{open:h,onOpenChange:x,children:(0,s.jsxs)(R,{children:[(0,s.jsxs)(E,{children:[(0,s.jsx)(I,{children:"Are you absolutely sure?"}),(0,s.jsx)(B,{children:"do you really want logout for system??"})]}),(0,s.jsxs)(z,{children:[(0,s.jsx)(Z,{children:"Cancel"}),(0,s.jsx)(D,{className:"bg-red-600 text-white",onClick:function(){localStorage.removeItem("uID"),localStorage.removeItem("business"),t.push("/login"),r((0,o.o4)()),p(!1)},children:"Log Out"})]})]})})]})}Z.displayName=_.$j.displayName},5581:function(e,a,t){"use strict";t.d(a,{default:function(){return L}});var s=t(7437),n=t(8305),r=t.n(n),i={src:"/_next/static/media/main-logo-light.bd14e8e8.png",height:161,width:610,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAANklEQVR4nGNkcjPbysDAcBWIzwIxPxDfAWI2IP4AxLIgBdOAjBdAvB6IJYCYE4i/AfFHIBYDAE7PCZ+CICC3AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:2},l={src:"/_next/static/media/mini-logo-light.e4d92d9a.png",height:54,width:50,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAkUlEQVR42mMAASY3syggfszkbvYPSN8H4mCYRAQQ/2d2N//PDKbN/gP5IOwLknwLlNgEpF2B+BCTm7k9iAbihwxQXW1QU2ZAaPMukDhI4B6Q8xtIBwLxCyC7Eog3Ae1/DJIMBuL/QPwDaAKIfsIM4rubZzCAAJDhBRQ8DcTvQQqA/HlgCaAqZhANtasTiOfD+ADIejeDKhSHLgAAAABJRU5ErkJggg==",blurWidth:7,blurHeight:8},c={src:"/_next/static/media/main-logo-dark.7b2516e4.png",height:54,width:217,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAPElEQVR4nGN8/eb1NgYGhiv/Gf6fBdICQHwHiNmA+D0QyzG+evNqGpDxEojXAbEEEHMB8VdGBsYPQE0SAJwTEiWLI4o8AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:2},d={src:"/_next/static/media/mini-logo-dark.e826ac8b.png",height:54,width:50,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAj0lEQVR42jWOwQmDQBBFB1JYTrkEcgheQipIC2kgECvwpD1Ygld7UEQPsuviVRDUNzI78Pb/3fnDjmj5yb998D1sLriWexIbL9gVN7lTCal/aDNACTceKvQKFb4TDk3+hMJnpinsahqSK/qEEf8lXOJ7YYHEphf7a+BN9SNamDvUTM0WyOO2F7Fi4k+jiPcDC/+fduxOhdIAAAAASUVORK5CYII=",blurWidth:7,blurHeight:8},o=t(6648),u=t(6370),m=t(1444),f=t(2265),h=t(6463),p=t(2200),x=t(7071),g=t(8214);let j=x.zt,b=x.fC,N=x.xz,A=f.forwardRef((e,a)=>{let{className:t,sideOffset:n=4,...r}=e;return(0,s.jsx)(x.VY,{ref:a,sideOffset:n,className:(0,g.cn)("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...r})});A.displayName=x.VY.displayName;var v=t(1337),_=t(8309),y=t(7140),w=t(5085),k=t(2088),C=t(6044),R=t(4258),E=t(1240),z=t(1592),I=t(2299),B=t(9003),D=t(6035),Z=t(2208),S=t(3642),U=t(2873),P=t(2421),T=t(7592),Y=t(7138);let Q={"#kj0se":y.Z,"#jcl2s":w.Z,"#pqn3a":k.Z,"#p2mxq":C.Z,"#pc29d":R.Z,"#bndk0":E.Z,"#okac3":z.Z,"#pwn09":R.Z,"#5s06a":I.Z,"#jw306":B.Z,"#mqi3m":D.Z,"#pam1m":Z.Z,"#na2ac":Z.Z,"#p2mlq":S.Z},F=[{id:"#kj0se",link_name:"Dashboard",active_path:["/"],go_path:"/"},{id:"#jcl2s",link_name:"Inbox",active_path:["/inbox"],go_path:"/inbox"},{id:"#pqn3a",link_name:"Campaigns",active_path:["/campaign"],go_path:"/campaign"},{id:"#mqi3m",link_name:"Business",active_path:["/business"],go_path:"/business"},{id:"#p2mxq",link_name:"Templates",active_path:["/templates"],go_path:"/templates"},{id:"#p2mlq",link_name:"Canned message",active_path:["/canned-message"],go_path:"/canned-message"},{id:"#pam1m",link_name:"Workflows",active_path:["/workflow"],go_path:"/workflow"},{id:"#pc29d",link_name:"Settings",children:[{id:"#bndk0",link_name:"Team members",active_path:["/team-members"],go_path:"/"},{id:"#okac3",link_name:"Contact List",active_path:["/contact-list"],go_path:"/settings/contacts"},{id:"#pwn09",link_name:"Roles permission",active_path:["/roles-permission"],go_path:"/"},{id:"#5s06a",link_name:"Profile",active_path:["/profile"],go_path:"/profile"},{id:"#jw306",link_name:"Billings",active_path:["/Billings"],go_path:"/"}]}];function L(){let e=(0,m.v9)(e=>e.universalReducer.business),a=(0,m.v9)(e=>e.themeSettingReducer.sidebarMode),t=(0,m.I0)(),[n,h]=(0,f.useState)([]),x=async()=>{let e=new FormData;e.append("skip","all");try{let a=await (0,u.l)("credentials/credential-business-number-list",e);1===a.success&&h(a.data.credential_list)}catch(e){console.error("Failed to fetch template list:",e)}},g=async e=>{t((0,v.Mu)(e))};function j(e){t((0,v.vW)(e))}return(0,f.useEffect)(()=>{(!e||0===Object.keys(e).length)&&n&&n.length>0&&t((0,v.Mu)(n[0]))},[n,e]),(0,f.useEffect)(()=>{x()},[]),(0,s.jsxs)(f.Fragment,{children:["main"===a&&(0,s.jsxs)("aside",{className:"".concat(r().sidebar," ").concat(r().main_sidebar),children:[(0,s.jsxs)("div",{className:"flex items-center justify-between w-full",children:[(0,s.jsx)(o.default,{src:i,alt:"liliya main logo",width:140,height:40,className:"dark:hidden block"}),(0,s.jsx)(o.default,{src:c,alt:"liliya main logo",width:140,height:40,className:"dark:block hidden"}),(0,s.jsx)(p.z,{variant:"ghost",size:"icon",className:"max-w-8 max-h-8",onClick:()=>j("mini"),children:(0,s.jsx)(U.Z,{className:"h-4 w-4"})})]}),(0,s.jsx)("div",{children:(0,s.jsx)("div",{children:(0,s.jsxs)(_.h_,{children:[(0,s.jsx)(_.$F,{asChild:!0,children:(0,s.jsx)(p.z,{variant:"outline",className:"border-successGreenLight bg-transparent w-full justify-start text-successGreenLight",children:(0,s.jsxs)("div",{className:"flex items-center justify-between gap-1.5 w-full",children:[(0,s.jsx)("p",{children:null==e?void 0:e.wp_cr_business_name}),n&&n.length>1&&(0,s.jsx)(P.Z,{className:"ml-6"})]})})}),(0,s.jsx)(_.AW,{className:"w-56",children:n&&n.length>0?n.map((e,a)=>(0,s.jsx)(_.Xi,{onClick:()=>g(e),children:(0,s.jsx)("span",{children:null==e?void 0:e.wp_cr_business_name})},a)):null})]})})}),(0,s.jsx)("div",{className:"space-y-1",children:F.map((e,a)=>(0,s.jsx)(O,{data:e},a))})]}),"mini"===a&&(0,s.jsxs)("aside",{className:"".concat(r().sidebar," ").concat(r().mini_sidebar),children:[(0,s.jsx)("div",{className:"absolute -right-1/2 -translate-x-1/2 top-1",children:(0,s.jsx)(p.z,{variant:"outline",size:"icon",className:"rounded-full border-infoBlue",onClick:()=>j("main"),children:(0,s.jsx)(T.Z,{className:"h-4 w-4 -ml-3"})})}),(0,s.jsxs)("div",{className:"flex items-center justify-center w-full mt-2.5",children:[(0,s.jsx)(o.default,{src:l,alt:"liliya main logo",width:28,height:20,className:"dark:hidden block"}),(0,s.jsx)(o.default,{src:d,alt:"liliya main logo",width:28,height:20,className:"dark:block hidden"})]}),(0,s.jsx)("div",{className:"space-y-1",children:F.map((e,a)=>(0,s.jsx)(V,{data:e},a))})]})]})}function O(e){let{data:a}=e,t=(0,h.usePathname)(),n=(Array.isArray(a.active_path)?a.active_path:[]).includes(t),i=Q[a.id]||null;return(0,s.jsx)(s.Fragment,{children:a.go_path?(0,s.jsx)(p.z,{variant:"ghost",asChild:!0,children:(0,s.jsxs)(Y.default,{href:a.go_path,className:n?"".concat(r().menu_item," ").concat(r().active):r().menu_item,children:[" ",i&&(0,s.jsx)(i,{className:"icon-class"}),a.link_name]})}):(0,s.jsxs)(p.z,{variant:"ghost",className:r().menu_item,children:[i&&(0,s.jsx)(i,{className:"icon-class"}),a.link_name]})})}function V(e){let{data:a}=e,t=(0,h.usePathname)(),n=(Array.isArray(a.active_path)?a.active_path:[]).includes(t),i=Q[a.id]||null;return(0,s.jsx)(s.Fragment,{children:a.go_path?(0,s.jsx)(j,{children:(0,s.jsxs)(b,{children:[(0,s.jsx)(N,{asChild:!0,children:(0,s.jsx)(p.z,{variant:"ghost",asChild:!0,children:(0,s.jsx)(Y.default,{href:a.go_path,className:n?"".concat(r().menu_item_mini," ").concat(r().active):r().menu_item_mini,children:i&&(0,s.jsx)(i,{className:"icon-class"})})})}),(0,s.jsx)(A,{side:"right",align:"center",children:(0,s.jsxs)("p",{children:["Go To ",a.link_name]})})]})}):(0,s.jsx)(j,{children:(0,s.jsxs)(b,{children:[(0,s.jsx)(N,{asChild:!0,children:(0,s.jsx)(p.z,{variant:"ghost",className:r().menu_item_mini,children:i&&(0,s.jsx)(i,{className:"icon-class"})})}),(0,s.jsx)(A,{side:"right",align:"center",children:(0,s.jsx)("ul",{className:"space-y-1 w-full",children:a.children&&a.children.length>0&&a.children.map((e,a)=>{let t=Q[e.id]||null;return(0,s.jsx)("li",{className:"list-items !w-full",children:(0,s.jsx)(p.z,{variant:"outline",asChild:!0,children:(0,s.jsxs)(Y.default,{href:e.go_path,className:r().menu_item,children:[t&&(0,s.jsx)(t,{className:"icon-class"}),(0,s.jsx)("p",{className:"link-title",children:e.link_name})]})})},a)})})})]})})})}},3968:function(e,a,t){"use strict";t.d(a,{default:function(){return u}});var s=t(7437),n=t(2265),r=t(6463),i=t(4987),l=t(8305),c=t.n(l),d=t(1444),o=t(1337);function u(e){let{breadcrumbNav:a,children:t}=e,l=(0,r.useRouter)(),u=(0,d.v9)(e=>e.universalReducer.uID),m=(0,d.I0)(),[f,h]=(0,n.useState)(!1);return((0,n.useEffect)(()=>{h(!0)},[]),(0,n.useEffect)(()=>{f&&!u&&(m((0,o.o4)(null)),l.push("/login"))},[u,m,l,f]),f&&u)?(0,s.jsxs)("div",{className:c().layout_wrapper,children:[(0,s.jsx)(i.RY,{}),(0,s.jsxs)("div",{className:"w-full h-full overflow-hidden",children:[(0,s.jsx)(i.NC,{breadcrumbNav:a}),(0,s.jsx)("main",{className:"main_content",children:t})]})]}):(0,s.jsx)("div",{className:"w-full h-screen flex items-center justify-center",children:"please wait..."})}},2538:function(e,a,t){"use strict";t.d(a,{default:function(){return r}});var s=t(7437);t(2265);var n=t(9512);function r(e){let{children:a,...t}=e;return(0,s.jsx)(n.f,{...t,children:a})}},4987:function(e,a,t){"use strict";t.d(a,{NC:function(){return r.default},PT:function(){return l.default},RY:function(){return n.default},WB:function(){return s.default},f6:function(){return i.default}});var s=t(3968),n=t(5581),r=t(6159),i=t(2538),l=t(4300)},6903:function(e,a,t){"use strict";t.d(a,{F$:function(){return c},Q5:function(){return d},qE:function(){return l}});var s=t(7437),n=t(2265),r=t(4458),i=t(8214);let l=n.forwardRef((e,a)=>{let{className:t,...n}=e;return(0,s.jsx)(r.fC,{ref:a,className:(0,i.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",t),...n})});l.displayName=r.fC.displayName;let c=n.forwardRef((e,a)=>{let{className:t,...n}=e;return(0,s.jsx)(r.Ee,{ref:a,className:(0,i.cn)("aspect-square h-full w-full",t),...n})});c.displayName=r.Ee.displayName;let d=n.forwardRef((e,a)=>{let{className:t,...n}=e;return(0,s.jsx)(r.NY,{ref:a,className:(0,i.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",t),...n})});d.displayName=r.NY.displayName},2200:function(e,a,t){"use strict";t.d(a,{d:function(){return c},z:function(){return d}});var s=t(7437),n=t(2265),r=t(1538),i=t(2218),l=t(8214);let c=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=n.forwardRef((e,a)=>{let{className:t,variant:n,size:i,asChild:d=!1,...o}=e,u=d?r.g7:"button";return(0,s.jsx)(u,{className:(0,l.cn)(c({variant:n,size:i,className:t})),ref:a,...o})});d.displayName="Button"},8309:function(e,a,t){"use strict";t.d(a,{$F:function(){return u},AW:function(){return f},Ju:function(){return p},Qk:function(){return m},VD:function(){return x},Xi:function(){return h},h_:function(){return o}});var s=t(7437),n=t(2265),r=t(1622),i=t(7592),l=t(2468),c=t(8165),d=t(8214);let o=r.fC,u=r.xz,m=r.ZA;r.Uv,r.Tr,r.Ee,n.forwardRef((e,a)=>{let{className:t,inset:n,children:l,...c}=e;return(0,s.jsxs)(r.fF,{ref:a,className:(0,d.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",n&&"pl-8",t),...c,children:[l,(0,s.jsx)(i.Z,{className:"ml-auto h-4 w-4"})]})}).displayName=r.fF.displayName,n.forwardRef((e,a)=>{let{className:t,...n}=e;return(0,s.jsx)(r.tu,{ref:a,className:(0,d.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...n})}).displayName=r.tu.displayName;let f=n.forwardRef((e,a)=>{let{className:t,sideOffset:n=4,...i}=e;return(0,s.jsx)(r.Uv,{children:(0,s.jsx)(r.VY,{ref:a,sideOffset:n,className:(0,d.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...i})})});f.displayName=r.VY.displayName;let h=n.forwardRef((e,a)=>{let{className:t,inset:n,...i}=e;return(0,s.jsx)(r.ck,{ref:a,className:(0,d.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",n&&"pl-8",t),...i})});h.displayName=r.ck.displayName,n.forwardRef((e,a)=>{let{className:t,children:n,checked:i,...c}=e;return(0,s.jsxs)(r.oC,{ref:a,className:(0,d.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t),checked:i,...c,children:[(0,s.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,s.jsx)(r.wU,{children:(0,s.jsx)(l.Z,{className:"h-4 w-4"})})}),n]})}).displayName=r.oC.displayName,n.forwardRef((e,a)=>{let{className:t,children:n,...i}=e;return(0,s.jsxs)(r.Rk,{ref:a,className:(0,d.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t),...i,children:[(0,s.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,s.jsx)(r.wU,{children:(0,s.jsx)(c.Z,{className:"h-2 w-2 fill-current"})})}),n]})}).displayName=r.Rk.displayName;let p=n.forwardRef((e,a)=>{let{className:t,inset:n,...i}=e;return(0,s.jsx)(r.__,{ref:a,className:(0,d.cn)("px-2 py-1.5 text-sm font-semibold",n&&"pl-8",t),...i})});p.displayName=r.__.displayName;let x=n.forwardRef((e,a)=>{let{className:t,...n}=e;return(0,s.jsx)(r.Z0,{ref:a,className:(0,d.cn)("-mx-1 my-1 h-px bg-muted",t),...n})});x.displayName=r.Z0.displayName},1337:function(e,a,t){"use strict";t.d(a,{Mu:function(){return r},o4:function(){return i},vW:function(){return n}});var s=t(2351);let n=(0,s.PH)("THEME_REDUCER"),r=(0,s.PH)("SET_BUSINESS"),i=(0,s.PH)("SET_TOKEN")},8214:function(e,a,t){"use strict";t.d(a,{cn:function(){return r}});var s=t(4839),n=t(6164);function r(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];return(0,n.m6)((0,s.W)(a))}},6370:function(e,a,t){"use strict";t.d(a,{l:function(){return r}});var s=t(8472),n=t(7776);let r=async(e,a)=>{try{let t=localStorage.getItem("uID"),r={};t&&(r.Authorization="Bearer ".concat(t));let i=await s.Z.post("".concat("https://devapi.liliya.io","/").concat(e),a,{headers:r});if("OK"===i.statusText&&200===i.status){if(2!=i.data.success)return i.data;(0,n.Am)("login agian"),window.location.href="/login",localStorage.removeItem("uID")}else(0,n.Am)(i.data.message)}catch(e){throw(0,n.Am)("Error: ".concat(e.message)),e}};function i(e){return async(a,t)=>{let n=localStorage.getItem("session");try{let r=await (0,s.Z)({method:e,url:a,headers:function(e,a){let t=e.startsWith("https://devapi.liliya.io");return a&&t?{Authorization:"Bearer ".concat(a)}:{}}(a,n),data:t});if(r){if(2!=r.data.success)return l(r.data);localStorage.removeItem("uID"),window.location.href="/login"}else c(r)}catch(e){return Promise.reject(Error("Network error. Please check your internet connection."))}}}async function l(e){return e}async function c(e){let a=e.data&&e.data.message||e.statusText;return[401,403].includes(e.status)?(n.Am&&n.Am.error("Unauthorized access. Please check credentials or login again."),localStorage.removeItem("uID"),window.location.href="/login"):n.Am&&n.Am.error("An error occurred: ".concat(a)),Promise.reject(a)}i("GET"),i("POST"),i("PUT"),i("DELETE")},8305:function(e){e.exports={layout_wrapper:"layout_layout_wrapper__p8dzk",sidebar:"layout_sidebar__FI3K_",main_sidebar:"layout_main_sidebar__BWGb_",mini_sidebar:"layout_mini_sidebar__aIsxm",menu_item:"layout_menu_item__l_as_",header:"layout_header__zPv8C",breadcrumb_link:"layout_breadcrumb_link__7sfRE",menu_item_mini:"layout_menu_item_mini__oqiZ8",active:"layout_active__XGtS1"}}}]);