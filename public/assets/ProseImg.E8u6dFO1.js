import{j as t,v as s,a2 as r,H as a,E as e,a3 as i,o as h,c as n,A as l}from"./entry.BKjk9qEO.js";const u=["src","alt","width","height"],c=t({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(t){const c=t,d=s((()=>{var t;if((null==(t=c.src)?void 0:t.startsWith("/"))&&!c.src.startsWith("//")){const t=r(a(e().app.baseURL));if("/"!==t&&!c.src.startsWith(t))return i(t,c.src)}return c.src}));return(s,r)=>(h(),n("img",{src:l(d),alt:t.alt,width:t.width,height:t.height},null,8,u))}});export{c as default};
