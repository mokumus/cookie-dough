import{a as e,q as t}from"./Dmk9-xbV.js";import{j as r,aF as a,x as l,av as u,X as i,aD as n,aw as o,as as d}from"./BYATdpZN.js";import"./KJUPIZoA.js";const s=r({name:"ContentQuery",props:{path:{type:String,required:!1,default:void 0},only:{type:Array,required:!1,default:void 0},without:{type:Array,required:!1,default:void 0},where:{type:Object,required:!1,default:void 0},sort:{type:Object,required:!1,default:void 0},limit:{type:Number,required:!1,default:void 0},skip:{type:Number,required:!1,default:void 0},locale:{type:String,required:!1,default:void 0},find:{type:String,required:!1,default:void 0}},async setup(r){const{path:o,only:d,without:s,where:v,sort:p,limit:f,skip:h,locale:y,find:c}=a(r),m=l((()=>{var e;return null==(e=o.value)?void 0:e.includes("/_")})),w=!u().public.content.experimental.advanceQuery;i((()=>r),(()=>b()),{deep:!0});const q=e=>w?(null==e?void 0:e.surround)?e.surround:(null==e?void 0:e._id)||Array.isArray(e)?e:null==e?void 0:e.result:e.result,{data:g,refresh:b}=await e(`content-query-${n(r)}`,(()=>{let e;return e=o.value?t(o.value):t(),d.value&&(e=e.only(d.value)),s.value&&(e=e.without(s.value)),v.value&&(e=e.where(v.value)),p.value&&(e=e.sort(p.value)),f.value&&(e=e.limit(f.value)),h.value&&(e=e.skip(h.value)),y.value&&(e=e.where({_locale:y.value})),"one"===c.value?e.findOne().then(q):"surround"===c.value&&o.value?w?e.findSurround(o.value):e.withSurround(o.value).findOne().then(q):e.find().then(q)}));return{isPartial:m,data:g,refresh:b}},render(e){var t;const r=o(),{data:a,refresh:l,isPartial:u,path:i,only:n,without:s,where:v,sort:p,limit:f,skip:h,locale:y,find:c}=e,m={path:i,only:n,without:s,where:v,sort:p,limit:f,skip:h,locale:y,find:c};if("one"===m.find){if(!a&&(null==r?void 0:r["not-found"]))return r["not-found"]({props:m,...this.$attrs});if((null==r?void 0:r.empty)&&"markdown"===(null==a?void 0:a._type)&&!(null==(t=null==a?void 0:a.body)?void 0:t.children.length))return r.empty({props:m,...this.$attrs})}else if((!a||!a.length)&&(null==r?void 0:r["not-found"]))return r["not-found"]({props:m,...this.$attrs});if(null==r?void 0:r.default)return r.default({data:a,refresh:l,isPartial:u,props:m,...this.$attrs});return w="default",q={data:a,props:m,isPartial:u},d("pre",null,JSON.stringify({message:"You should use slots with <ContentQuery>!",slot:w,data:q},null,2));var w,q}});export{s as default};