/* empty css                                                      */import{d as r,i as p,o as u,c as o,e as _,F as v,j as h,n as k,t as C,k as L,l as w,b as l,g as f,m as g,p as I,u as b}from"./index-CL20cr0g.js";import{_ as m}from"./plugin-vueexport-helper-DlAUqK2U.js";const q={class:"wmq-menu-ul_ul"},x=["data-id"],y=r({name:"wmq-menu-ul",__name:"index",props:{isOpen:{type:Boolean,default:!1},dataId:{default:""},menuList:{}},setup(a){const s=t=>[a.dataId,t.value].filter(Boolean).join("_");return(t,i)=>{const e=p("wmq-menu-ul");return u(),o("div",{class:k(["wmq-menu-ul_div",t.isOpen?"":"wmq-menu-ul_div--hidden"])},[_("ul",q,[(u(!0),o(v,null,h(t.menuList,n=>(u(),o("li",{key:n.value},[_("p",{class:"wmq-menu-ul_p","data-id":s(n)},C(n.label),9,x),n.children?(u(),L(e,{key:0,isOpen:n.isOpen,menuList:n.children,dataId:s(n)},null,8,["isOpen","menuList","dataId"])):w("",!0)]))),128))])],2)}}}),O=r({__name:"index",props:{menuList:{}},emits:["menuClick"],setup(a,{emit:s}){const t=s,i=e=>{var c;const n=e.target;if(n.tagName==="P"){const d=((c=n.dataset.id)==null?void 0:c.split("_"))??[];t("menuClick",d)}};return(e,n)=>(u(),o("div",{class:"wmq-menu-w",onClick:i},[l(y,{menuList:e.menuList,isOpen:""},null,8,["menuList"])]))}}),$=m(O,[["__scopeId","data-v-90a8954a"]]),B={class:"left-side"},S=r({__name:"index",props:{menuList:{}},emits:["menuClick"],setup(a,{emit:s}){const t=s,i=e=>{t("menuClick",e)};return(e,n)=>(u(),o("div",B,[l(f($),{menuList:e.menuList,onMenuClick:i},null,8,["menuList"])]))}}),V=m(S,[["__scopeId","data-v-0488b4e2"]]),M={},N={class:"right-view"};function R(a,s){const t=p("RouterView");return u(),o("div",N,[l(t)])}const j=m(M,[["render",R],["__scopeId","data-v-c3a3ccd5"]]),D=g("menuStore",()=>{const a=I([{label:"仙尊语录",value:"immortal-saying"},{label:"我的音乐",value:"my-music"},{label:"Don't click on it!!!",value:"my-game",children:[{label:"井字棋",value:"my-tictactoe"},{label:"游戏2",value:"game-2"},{label:"游戏3",value:"game-3"}]}]);return{menuList:a,menuClick:t=>{let i=a.value,e,n=[...t];for(;n.length>0;){const c=n.shift();if(c){if(e=i.find(d=>d.value===c),!e)break;i=e.children??[]}}return e&&e.children&&(e.isOpen=!e.isOpen),e}}}),F={class:"no-server"},z=r({__name:"index",setup(a){const s=D(),t=b(),i=e=>{const n=s.menuClick(e);n&&(n.children||t.push(`/${["no-server",...e].join("/")}`))};return(e,n)=>(u(),o("div",F,[l(V,{"menu-list":f(s).menuList,onMenuClick:i},null,8,["menu-list"]),l(j)]))}}),A=m(z,[["__scopeId","data-v-1d1752e2"]]);export{A as default};
