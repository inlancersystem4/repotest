import{_ as M,r as c,o as a,d as m,w as h,i as x,a as e,t as d,g as _,c as p,e as F,F as I,b as C,n as D,j as v,E as j,B as V,C as B}from"./index-CObJ0xdd.js";import{f as w}from"./list-fetch-Bs_JyIgH.js";import{i as N}from"./item-delete-BEr_XWGk.js";import{L as U,D as O}from"./Default-BakE7Kt_.js";import{P as E}from"./Pagination-vvzSV-Y8.js";import{L as A}from"./ListPageHeader-DOfYKR_0.js";import{I as z}from"./IngredientForm-DzPB9IP9.js";import{I as W,j as H,A as T,F as q}from"./listbox-B5_UOFQ8.js";import"./transition-DmPYughZ.js";import"./dialog-Bwww8Fqq.js";import"./admin-logo-DCOArUCp.js";import"./menu-DH_SiPev.js";import"./use-text-value-C2hDVVix.js";import"./use-tree-walker-BsBza9zE.js";import"./CommonModalLayout-BJWFpzOf.js";const G={components:{Listbox:W,ListboxButton:H,ListboxOptions:T,ListboxOption:q},props:{supplierList:[]},data(){return{selectedItem:""}},methods:{selectCategory(t){this.$emit("update_filter",t)},clearSelectItem(){this.selectedItem="",this.$emit("update_filter",0)}}},J=e("span",{class:"min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px]"},[e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M19.5 9L12 16.5L4.5 9",class:"stroke-base-color","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})])],-1),K={class:"flex flex-wrap gap-x-1.5 gap-y-1"},Q=e("button",null,[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M18.75 5.25L5.25 18.75",stroke:"#FFFFFF","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M18.75 18.75L5.25 5.25",stroke:"#FFFFFF","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})])],-1),R=e("span",{class:"min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px]"},[e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M19.5 9L12 16.5L4.5 9",class:"stroke-base-color","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})])],-1);function X(t,s,u,S,i,o){const g=c("ListboxButton"),L=c("ListboxOption"),k=c("ListboxOptions"),b=c("Listbox");return a(),m(b,{modelValue:i.selectedItem,"onUpdate:modelValue":s[1]||(s[1]=r=>i.selectedItem=r),class:"w-full custom--select max-w-[350px]",as:"div"},{default:h(()=>[i.selectedItem?(a(),m(g,{key:1,class:"w-full flex items-center px-3.5 py-2.5 justify-between text-left"},{default:h(()=>[e("ul",K,[e("li",{class:"selected-tag flex items-center gap-1.5",onClick:s[0]||(s[0]=(...r)=>o.clearSelectItem&&o.clearSelectItem(...r))},[x(d(i.selectedItem.supplier_name)+" - "+d(i.selectedItem.supplier_contact_person)+" ",1),Q])]),R]),_:1})):(a(),m(g,{key:0,class:"w-full flex items-center px-3.5 py-2.5 justify-between text-left"},{default:h(()=>[x(" Select Supplier (All) "),J]),_:1})),_(k,{class:"select--option !z-[100]"},{default:h(()=>[(a(!0),p(I,null,F(u.supplierList,r=>(a(),m(L,{class:"option",key:r.supplier_id,value:r,onClick:y=>o.selectCategory(r.supplier_id)},{default:h(()=>[x(d(r.supplier_name)+" - "+d(r.supplier_contact_person),1)]),_:2},1032,["value","onClick"]))),128))]),_:1})]),_:1},8,["modelValue"])}const Y=M(G,[["render",X]]),Z={components:{LayoutWrraper:U,Pagination:E,DeleteModal:O,ListPageHeader:A,IngredientForm:z,Filter:Y},data(){return{alertStore:C(),ingredientList:[],currentPage:1,totalPages:1,skeletonEffect:!0,ingredientId:"",itemNameforDelete:"",deleteModal:!1,ingredientModal:!1,ingredientData:"",unitsList:[],supplierListForForm:[],selectedFilter:"",vatSort:"desc"}},created(){this.fetchingredientList(),this.fetchUnitsList(),this.fetchSupplierListForForm()},methods:{updatePage(t){this.currentPage=t,this.fetchingredientList()},deleteItem(t,s){t&&(this.deleteModal=!0,this.ingredientId=t,this.itemNameforDelete=s)},openIngredientModal(){this.ingredientModal=!0},closeIngredientModal(t){this.ingredientModal=!1,t&&this.fetchingredientList()},updateFilter(t){t==0?this.selectedFilter="":(this.currentPage=1,this.selectedFilter=t),this.fetchingredientList()},chnageSortUsingVat(){this.vatSort=this.vatSort==="desc"?"asc":"desc",this.fetchingredientList()},async fetchingredientList(){this.skeletonEffect=!0,this.ingredientList=[];var t=new FormData;t.append("search",""),t.append("page",this.currentPage),t.append("filter_by_supplier",this.selectedFilter),t.append("purchase_price_with_vat_sort",this.vatSort);const s=await w("ingredient-list",t);s&&s.data.length!==0?(this.ingredientList=s.data.ingredient_lists,this.skeletonEffect=!1,this.totalPages=s.data.total_pages):(this.ingredientList=[],this.skeletonEffect=!1)},closeDeleteModal(){this.deleteModal=!1,this.ingredientId=""},async deleteIngredient(){if(this.ingredientId){var t=new FormData;t.append("ingredient_id",this.ingredientId),await N("ingredient-remove",t)?(this.fetchingredientList(),this.ingredientId="",this.closeDeleteModal()):this.closeDeleteModal()}},async fetchUnitsList(){var t=new FormData;const s=await w("units-list",t);s&&s.data.length!==0?this.unitsList=s.data:this.unitsList=[]},async fetchSupplierListForForm(){var t=new FormData;t.append("search",""),t.append("page","all");const s=await w("supplier-list",t);s&&s.data.length!==0?this.supplierListForForm=s.data.supplier_lists:this.supplierListForForm=[]},async editIngredient(t){var s=new FormData;s.append("ingredient_id",t);const u=await w("ingredient-details",s);u?(this.ingredientData=u.data,this.openIngredientModal()):this.ingredientData=""}}},n=t=>(V("data-v-ca335f63"),t=t(),B(),t),$={class:"w-full custom-container mx-auto px-2.5 mt-4 pb-4"},ee={class:"w-full flex items-center justify-between gap-4"},te={class:"table costing--table ingredient--table"},se=n(()=>e("th",{class:"no"},"No.",-1)),ie=n(()=>e("th",{class:"item"},"Item",-1)),ne=n(()=>e("th",{class:"supplier"},"Supplier",-1)),oe=n(()=>e("th",{class:"wVat"},"Without VAT",-1)),ae={class:"flex-col inline-flex ml-2 -space-y-2"},le={width:"18",height:"18",class:"inline",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},re={width:"18",height:"18",class:"inline",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ce=n(()=>e("th",{class:"pack"},"Pack",-1)),de=n(()=>e("th",{class:"action"},"Action",-1)),pe=n(()=>e("td",{class:"no"},[e("div",{class:"effect"},[e("span",{class:"bg-base-color h-4 rounded-md w-[25px] mx-auto block"})])],-1)),he=n(()=>e("td",{class:"item"},[e("div",{class:"effect"},[e("span",{class:"bg-base-color h-4 rounded-md mx-auto w-[180px] block"})])],-1)),_e=n(()=>e("td",{class:"supplier"},[e("div",{class:"effect space-y-1 text-center"},[e("span",{class:"bg-base-color h-4 rounded-md mx-auto w-[120px] block"})])],-1)),ue=n(()=>e("td",{class:"wVat"},[e("div",{class:"effect space-y-1 text-center"},[e("span",{class:"bg-base-color h-4 rounded-md w-[50px] mx-auto block"})])],-1)),me=n(()=>e("td",{class:"purchase"},[e("div",{class:"effect space-y-1 text-center"},[e("span",{class:"bg-base-color h-4 rounded-md w-[50px] mx-auto block"})])],-1)),ge=n(()=>e("td",{class:"pack"},[e("div",{class:"effect space-y-1 text-center"},[e("span",{class:"bg-base-color h-4 rounded-md w-[50px] mx-auto block"})])],-1)),fe=n(()=>e("td",{class:"action"},[e("div",{class:"effect flex items-center justify-center flex-wrap gap-1.5"},[e("span",{class:"bg-base-color h-4 rounded-md w-[42px] block"})])],-1)),we=[pe,he,_e,ue,me,ge,fe],xe=["onClick"],Le={class:"no"},ke={class:"item"},be={class:"supplier"},ve={class:"wVat"},Fe={class:"purchase"},Ie={class:"pack"},ye={class:"action !p-0"},De=["onClick","disabled"],Me={key:1},Se=n(()=>e("td",{class:"!text-center",colspan:"8"},"No data Found!!",-1)),Pe=[Se],Ce={key:0,class:"flex items-center justify-center w-full mt-8"};function je(t,s,u,S,i,o){const g=c("ListPageHeader"),L=c("Filter"),k=c("Pagination"),b=c("IngredientForm"),r=c("DeleteModal"),y=c("LayoutWrraper");return a(),m(y,null,{default:h(()=>[e("div",$,[e("div",ee,[_(g,{componentName:"ingredient"}),_(L,{supplierList:i.supplierListForForm,onUpdate_filter:o.updateFilter},null,8,["supplierList","onUpdate_filter"])]),e("table",te,[e("tr",null,[se,ie,ne,oe,e("th",{class:"purchase cursor-pointer",onClick:s[0]||(s[0]=(...l)=>o.chnageSortUsingVat&&o.chnageSortUsingVat(...l))},[x(" Purchase Price with vat "),e("span",ae,[(a(),p("svg",le,[e("path",{d:"M4.5 15L12 7.5L19.5 15",class:D(["stroke-bottom-menu",{"opacity-25":this.vatSort==="desc"}]),"stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"},null,2)])),(a(),p("svg",re,[e("path",{d:"M19.5 9L12 16.5L4.5 9",class:D(["stroke-bottom-menu",{"opacity-25":this.vatSort==="asc"}]),"stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"},null,2)]))])]),ce,de]),i.skeletonEffect?(a(),p(I,{key:0},F(16,(l,f)=>e("tr",{class:"animate-pulse",key:f},we)),64)):v("",!0),(a(!0),p(I,null,F(i.ingredientList,(l,f)=>(a(),p("tr",{key:f,onClick:P=>o.editIngredient(l.ingredient_id),class:"cursor-pointer"},[e("td",Le,d(f+1),1),e("td",ke,d(l.ingredient_item),1),e("td",be,d(l.ingredient_supplier),1),e("td",ve,d(l.price_without_vat),1),e("td",Fe,d(l.ingredient_price_include_vat),1),e("td",Ie,d(l.ingredient_pack_weight),1),e("td",ye,[e("button",{onClick:j(P=>o.deleteItem(l.ingredient_id,l.ingredient_item),["stop"]),disabled:l.ingredient_used==1,class:"disabled:opacity-50 relative z-50 w-full h-full"}," Delete ",8,De)])],8,xe))),128)),!i.ingredientList||i.ingredientList.length===0?(a(),p("tr",Me,Pe)):v("",!0)]),i.ingredientList&&i.ingredientList.length!==0?(a(),p("div",Ce,[_(k,{currentPage:i.currentPage,totalPages:i.totalPages,onUpdate_page:o.updatePage},null,8,["currentPage","totalPages","onUpdate_page"])])):v("",!0)]),_(b,{isOpen:i.ingredientModal,onClose_modal:o.closeIngredientModal,packSizeList:this.unitsList,supplierList:this.supplierListForForm,ingredient:i.ingredientData},null,8,["isOpen","onClose_modal","packSizeList","supplierList","ingredient"]),_(r,{isDelete:i.deleteModal,item_name:i.itemNameforDelete,onClose_modal:o.closeDeleteModal,onDelete_item:o.deleteIngredient},null,8,["isDelete","item_name","onClose_modal","onDelete_item"])]),_:1})}const Qe=M(Z,[["render",je],["__scopeId","data-v-ca335f63"]]);export{Qe as default};
