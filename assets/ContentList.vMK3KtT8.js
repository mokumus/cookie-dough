import t from"./ContentQuery.hFpbJEUj.js";import{an as e,av as a,ar as l}from"./entry.vXfoXMQC.js";import"./query.XmldYQwD.js";import"./preview.6eFYDD73.js";const r=(t,e)=>l("pre",null,JSON.stringify({message:"You should use slots with <ContentList>",slot:t,data:e},null,2)),o=e({name:"ContentList",props:{path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0}},render(e){const o=a(),{path:n,query:u}=e,d={...u||{},path:n||(null==u?void 0:u.path)||"/"};return l(t,d,{default:(null==o?void 0:o.default)?({data:t,refresh:e,isPartial:a})=>o.default({list:t,refresh:e,isPartial:a,...this.$attrs}):t=>r("default",t.data),empty:t=>(null==o?void 0:o.empty)?o.empty(t):r("default",null==t?void 0:t.data),"not-found":t=>{var e;return(null==o?void 0:o["not-found"])?null==(e=null==o?void 0:o["not-found"])?void 0:e.call(o,t):r("not-found",null==t?void 0:t.data)}})}});export{o as default};
