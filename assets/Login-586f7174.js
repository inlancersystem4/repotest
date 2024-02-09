import{F as S,a as T,b as x}from"./vee-validate.esm-b6da606d.js";import{u as g,i as m,r as d,o,d as b,a as e,c as l,w as f,f as i,F as P,t as y,n as k,b as O,p as w,g as M}from"./index-63256e7b.js";import{O as E}from"./OverLaye-e9c05f15.js";import{E as I}from"./ErrorMessage-a0471137.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";const F="https://devapi.billionbuild.com",N={components:{OverLaye:E,Field:S,Form:T,ErrorMessage:I},data(){return{number:"",overlay:!1,fromSubmited:!1,errorMesgShow:!1,errorMsg:"",getotp:!0,sendotp:!1,otp:"",verifyOTPloader:!1,resendOTP:!0,remainingTime:30}},created(){const s=g(),t="Sign In |  Billion Build",n="this is description for Sign In";s.chnageTitle(t,n)},computed:{loginBtn(){return this.number.trim().length!==10},otpBtn(){return this.otp.trim().length!==5},maskedNumber(){if(this.number.length<8)return this.number;const s=4,t=this.number.length-s*2,n="*".repeat(t),p=this.number.substring(0,s),r=this.number.substring(this.number.length-s);return`${p}${n}${r}`}},methods:{async onSubmit(){this.fromSubmited=!0,this.verifyOTPloader=!0,this.errorMesgShow=!1;const s=g(),t=this.number,n=this.otp;await s.login(t,n)},checkUser(){localStorage.getItem("userToken")&&this.$router.push({name:"home"})},async login(){this.fromSubmited=!0,this.errorMesgShow=!1;var s=new FormData;s.append("user_mobile",this.number),this.resendOTP=!0;try{const t=await x.post(`${F}/get-otp`,s);t.data.success===1?(this.sendotp=!0,this.getotp=!1,this.fromSubmited=!1,this.otp=String(t.data.data),m().success(t.data.message),this.remainingTime=30,setTimeout(()=>{this.resendOTP=!1},3e4),this.updateTimer()):(this.errorMesgShow=!0,this.errorMsg=t.data.message,this.sendotp=!1,this.getotp=!0,this.number="",m().error(t.data.message))}catch(t){m().error(t)}},updateTimer(){const s=setInterval(()=>{this.remainingTime--,this.remainingTime<=0&&clearInterval(s)},1e3)}}},h=s=>(w("data-v-19635367"),s=s(),M(),s),C={class:"auth-page auth-page_center"},L={class:"auth-container"},V={class:"auth-from-section"},G=h(()=>e("div",{class:"space-y-4px auth-title"},[e("h1",{class:"color-Grey_90 text-2xl_semibold"},"Enter your Phone!"),e("h6",{class:"color-Grey_50 text-base_regular"}," Enter your phone no to verify it. ")],-1)),U={class:"input-group"},D=h(()=>e("label",{for:""},"Phone No.",-1)),z=["value"],A={class:"space-y-8px"},q=["disabled"],R={class:"space-y-4px auth-title"},j=h(()=>e("h1",{class:"color-Grey_90 text-2xl_semibold"},"OTP Verification",-1)),H={class:"color-Grey_50 text-base_regular"},J={class:"input-group"},K=["value"],Q={class:"space-y-8px"},W=["disabled"],X={class:"text-right mt-4"},Y={class:"color-Grey_50 text-base_regular"},Z=["disabled"],$={key:0};function ee(s,t,n,p,r,a){const c=d("ErrorMessage"),_=d("Form"),v=d("OverLaye");return o(),b(P,null,[e("div",C,[e("div",L,[e("div",V,[r.getotp?(o(),l(_,{key:0,onSubmit:a.login,class:"from space-y-24px"},{default:f(()=>[G,e("div",U,[D,e("input",{name:"number",class:"input-1",type:"number",placeholder:"Enter Phone No",onInput:t[0]||(t[0]=u=>r.number=u.target.value),value:r.number},null,40,z),this.number.trim().length!==10&&this.number.trim()?(o(),l(c,{key:0,msg:"Plz Enter Valid number"})):i("",!0),this.errorMesgShow?(o(),l(c,{key:1,msg:this.errorMsg},null,8,["msg"])):i("",!0)]),e("div",A,[e("button",{type:"submit",class:"btn-regular btn-w-full",disabled:a.loginBtn},"Continue",8,q)])]),_:1},8,["onSubmit"])):i("",!0),r.sendotp?(o(),l(_,{key:1,onSubmit:a.onSubmit,class:"from space-y-24px"},{default:f(()=>[e("div",R,[j,e("h6",H,"Enter OTP code sent to "+y(a.maskedNumber),1)]),e("div",J,[e("input",{name:"otp",class:"input-1",type:"number",placeholder:"Enter otp",onInput:t[1]||(t[1]=u=>r.otp=u.target.value),value:r.otp},null,40,K),!this.otp&&r.fromSubmited?(o(),l(c,{key:0,msg:"otp Is reqired"})):i("",!0),r.errorMesgShow?(o(),l(c,{key:1,msg:r.errorMsg},null,8,["msg"])):i("",!0)]),e("div",Q,[e("button",{type:"submit",class:k(["btn-regular btn-w-full",{"is-loading":r.verifyOTPloader}]),disabled:a.otpBtn},"Verify & Proceed",10,W),e("div",X,[e("p",Y,[O("Didn't receive OTP ? "),e("button",{onClick:t[2]||(t[2]=(...u)=>a.login&&a.login(...u)),type:"button",class:"color_violet resentBtn",disabled:r.resendOTP},"Resend OTP ! ",8,Z),r.remainingTime>0?(o(),b("span",$,"in "+y(r.remainingTime),1)):i("",!0)])])])]),_:1},8,["onSubmit"])):i("",!0)])])]),r.overlay?(o(),l(v,{key:0})):i("",!0)],64)}const ie=B(N,[["render",ee],["__scopeId","data-v-19635367"]]);export{ie as default};
