import t from"./D4DLNw5B.js";import{j as a,at as e,aq as l}from"./UZsxL62c.js";import"./ix5jFaZy.js";import"./C_f5IWa1.js";const o=(t,a)=>l("pre",null,JSON.stringify({message:"You should use slots with <ContentList>",slot:t,data:a},null,2)),d=a({name:"ContentList",props:{path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0}},render(a){const d=e(),{path:r,query:u}=a,n={...u||{},path:r||(null==u?void 0:u.path)||"/"};return l(t,n,{default:(null==d?void 0:d.default)?({data:t,refresh:a,isPartial:e})=>d.default({list:t,refresh:a,isPartial:e,...this.$attrs}):t=>o("default",t.data),empty:t=>(null==d?void 0:d.empty)?d.empty(t):o("default",null==t?void 0:t.data),"not-found":t=>{var a;return(null==d?void 0:d["not-found"])?null==(a=null==d?void 0:d["not-found"])?void 0:a.call(d,t):o("not-found",null==t?void 0:t.data)}})}});export{d as default};