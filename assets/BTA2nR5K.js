function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./WuAbW4Hj.js","./BYATdpZN.js","./entry.C20eVz5Z.css","./Dmk9-xbV.js","./KJUPIZoA.js","./CSLOBVbX.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{q as a,w as t,e,s as n,j as r,u as i,a as s}from"./Dmk9-xbV.js";import{av as o,aD as u,aE as l,j as p,aF as v,x as m,aG as c,aw as d,as as f}from"./BYATdpZN.js";import{u as g}from"./KJUPIZoA.js";import{_ as y}from"./cxFq_MnQ.js";const j=p({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(p){const{query:d}=v(p),f=m((()=>{var a;return"function"==typeof(null==(a=d.value)?void 0:a.params)?d.value.params():d.value}));if(!f.value&&c("dd-navigation").value){const{navigation:a}=i();return{navigation:a}}const{data:y}=await s(`content-navigation-${u(f.value)}`,(()=>(async i=>{const{content:s}=o().public;"function"!=typeof(null==i?void 0:i.params)&&(i=a(i));const p=i.params(),v=s.experimental.stripQueryParameters?t(`/navigation/${u(p)}.${s.integrity}/${e(p)}.json`):t(`/navigation/${u(p)}.${s.integrity}.json`);if(n())return(await l((()=>import("./WuAbW4Hj.js")),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then((a=>a.generateNavigation)))(p);const m=await $fetch(v,{method:"GET",responseType:"json",params:s.experimental.stripQueryParameters?void 0:{_params:r(p),previewToken:g().getPreviewToken()}});if("string"==typeof m&&m.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return m})(f.value)));return{navigation:y}},render(a){const t=d(),{navigation:e}=a,n=a=>f(y,{to:a._path},(()=>a.title)),r=(a,t)=>f("ul",t?{"data-level":t}:null,a.map((a=>a.children?f("li",null,[n(a),r(a.children,t+1)]):f("li",null,n(a)))));return(null==t?void 0:t.default)?t.default({navigation:e,...this.$attrs}):r(e,0)}});export{j as default};