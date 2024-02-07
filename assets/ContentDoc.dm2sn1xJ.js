import{z as t,A as e,B as n,C as o,D as i,f as r,E as l,G as a,q as d}from"./entry.btmDj1qq.js";import{u}from"./vue.f36acd1f.g0t0TElU.js";import s from"./ContentRenderer.IherbNBu.js";import p from"./ContentQuery.TGe5Jzac.js";import"./ContentRendererMarkdown.vue.ikN_Z-8Q.js";import"./index.i7YNNebO.js";import"./preview.6bv6fd7V.js";import"./query.8akhJlxK.js";const c=(r,l=n())=>{const a=t(r),d=i();e((()=>t(r)),((t=a)=>{if(!l.path||!t)return;const e=Object.assign({},(null==t?void 0:t.head)||{});e.meta=[...e.meta||[]],e.link=[...e.link||[]];const n=e.title||(null==t?void 0:t.title);n&&(e.title=n),d.public.content.host;const i=(null==e?void 0:e.description)||(null==t?void 0:t.description);i&&0===e.meta.filter((t=>"description"===t.name)).length&&e.meta.push({name:"description",content:i}),(null==e?void 0:e.image)||null==t||t.image,o((()=>u(e)))}),{immediate:!0})},m=r({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:void 0}},render(t){const{contentHead:e}=i().public.content,o=l(),{tag:r,excerpt:u,path:m,query:f,head:v}=t,h=void 0===v?e:v,y={...f||{},path:m||(null==f?void 0:f.path)||a(n().path),find:"one"};return d(p,y,{default:(null==o?void 0:o.default)?({data:t,refresh:e,isPartial:n})=>{var i;return h&&c(t),null==(i=o.default)?void 0:i.call(o,{doc:t,refresh:e,isPartial:n,excerpt:u,...this.$attrs})}:({data:t})=>(h&&c(t),d(s,{value:t,excerpt:u,tag:r,...this.$attrs},{empty:e=>(null==o?void 0:o.empty)?o.empty(e):((t,e)=>d("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:t,data:e},null,2)))("default",t)})),empty:t=>{var e;return(null==(e=null==o?void 0:o.empty)?void 0:e.call(o,t))||d("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":t=>{var e;return(null==(e=null==o?void 0:o["not-found"])?void 0:e.call(o,t))||d("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}});export{m as default};