import{d as l,r as p,w as S,o as $,a as d,c as f,b as i,t as q,n as M,h as T,e as _,f as D,g as I,i as v,j as y,u as h,k as B,l as g}from"./index-BZw8KBWc.js";/* empty css                                                      */import{_ as m}from"./plugin-vueexport-helper-DlAUqK2U.js";const w=(a=1e3)=>new Promise(e=>setTimeout(e,a)),x=500,E=l({__name:"message-method",props:{id:{},content:{},offset:{},closeTime:{},onOpen:{type:Function},onDestroy:{type:Function},onClose:{type:Function}},setup(a){const e=a,n=p(),o=p({top:0,transition:`${x/1e3}s`,opacity:1});S(()=>e.offset,t=>{o.value.top=`${t}px`},{immediate:!0});const s=async()=>{var t,c;n.value&&(o.value.top=0,o.value.opacity=0,(t=e.onClose)==null||t.call(e),await w(x),(c=e.onDestroy)==null||c.call(e))};return $(async()=>{await w(e.closeTime??2e3),s()}),(t,c)=>(d(),f("div",{class:"message",style:M(o.value),ref_key:"divRef",ref:n},[i("p",null,q(e.content),1)],4))}}),F=m(E,[["__scopeId","data-v-c8a8ba39"]]),b=16,r=[];let N=0;const O=a=>{let e=N++;const n=document.createElement("div");document.body.appendChild(n);const o=()=>{_(null,n),n.remove()},s=()=>{R(e)};let t=20;r.forEach(k=>{var u;t+=(((u=k.el)==null?void 0:u.offsetHeight)??0)+b});const c=T(F,{...a,id:e,offset:t,onClose:s,onDestroy:o});return _(c,n),r.push(c),{onClose:()=>{s()}}},R=a=>{const e=r.findIndex(s=>s.component.props.id===a);if(e===-1||(r.splice(e,1),r.length===0))return;let o=20;r.forEach(s=>{var t;s.component.props.offset=o,o+=(((t=s.el)==null?void 0:t.offsetHeight)??0)+b})},V=["type"],H=l({__name:"wmq-flat-button",props:{type:{default:"button"}},emits:["click"],setup(a,{emit:e}){const n=e;return(o,s)=>(d(),f("button",{type:o.type,class:"wmq-flat-buttom",onClick:s[0]||(s[0]=t=>n("click",t))},[D(o.$slots,"default",{},void 0)],8,V))}}),C=m(H,[["__scopeId","data-v-3d652fd3"]]),W={class:"home-w"},j={class:"home-container"},z=l({__name:"index",setup(a){const e=B(),n=()=>{e.push("/no-server")},o=()=>{O({content:"服务器模式未开发",closeTime:1e3})};return(s,t)=>(d(),f("div",W,[i("div",j,[i("form",{class:"form-one",onSubmit:t[0]||(t[0]=I(()=>{},["prevent"]))},[v(h(C),{onClick:n},{default:y(()=>t[1]||(t[1]=[g("无服务器模式")])),_:1}),v(h(C),{onClick:o},{default:y(()=>t[2]||(t[2]=[g(" 有服务器模式 ")])),_:1})],32)])]))}}),G=m(z,[["__scopeId","data-v-9f86fd4b"]]);export{G as default};
