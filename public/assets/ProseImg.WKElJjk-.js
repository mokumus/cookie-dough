import{j as t,u as s,a1 as r,G as a,D as e,a2 as i,o as h,c as n,z as u}from"./entry.GW-ca4eh.js";const l=["src","alt","width","height"],c=t({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(t){const c=t,d=s((()=>{var t;if((null==(t=c.src)?void 0:t.startsWith("/"))&&!c.src.startsWith("//")){const t=r(a(e().app.baseURL));if("/"!==t&&!c.src.startsWith(t))return i(t,c.src)}return c.src}));return(s,r)=>(h(),n("img",{src:u(d),alt:t.alt,width:t.width,height:t.height},null,8,l))}});export{c as default};