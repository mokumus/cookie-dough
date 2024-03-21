import{D as e,a0 as n,U as l,X as t,af as s,ah as i,g as u,a5 as o,v as a,y as d,K as c,B as r,x as f,ag as v,u as p,V as g,s as m,L as h,bh as b,R as x}from"./EutKKzJP.js";function y(u){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"content";const a=e(),d=e();if(n){const e=new ResizeObserver((n=>{null==u||u(n,e),n.length&&(d.value="content"===o?n[0].contentRect:n[0].target.getBoundingClientRect())}));l((()=>{e.disconnect()})),t(a,((n,l)=>{l&&(e.unobserve(s(l)),d.value=void 0),n&&e.observe(s(n))}),{flush:"post"})}return{resizeRef:a,contentRect:i(d)}}const C=u({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),I=u({value:null,disabled:Boolean,selectedClass:String},"group-item");function S(e,n){let s=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const i=o("useGroupItem");if(!i)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const u=a();d(Symbol.for(`${n.description}:id`),u);const v=c(n,null);if(!v){if(!s)return v;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${n.description}`)}const p=r(e,"value"),g=f((()=>!(!v.disabled.value&&!e.disabled)));v.register({id:u,value:p,disabled:g},i),l((()=>{v.unregister(u)}));const m=f((()=>v.isSelected(u))),h=f((()=>m.value&&[v.selectedClass.value,e.selectedClass]));return t(m,(e=>{i.emit("group:selected",{value:e})}),{flush:"sync"}),{id:u,isSelected:m,toggle:()=>v.select(u,!m.value),select:e=>v.select(u,e),selectedClass:h,value:p,disabled:g,group:v}}function w(e,n){let t=!1;const s=v([]),i=p(e,"modelValue",[],(e=>null==e?[]:B(s,h(e))),(n=>{const l=function(e,n){const l=[];return n.forEach((n=>{const t=e.findIndex((e=>e.id===n));if(~t){const n=e[t];l.push(null!=n.value?n.value:t)}})),l}(s,n);return e.multiple?l:l[0]})),u=o("useGroup");function a(){const n=s.find((e=>!e.disabled));n&&"force"===e.mandatory&&!i.value.length&&(i.value=[n.id])}function c(n){if(e.multiple,i.value.length){const e=i.value[0],l=s.findIndex((n=>n.id===e));let t=(l+n)%s.length,u=s[t];for(;u.disabled&&t!==l;)t=(t+n)%s.length,u=s[t];if(u.disabled)return;i.value=[s[t].id]}else{const e=s.find((e=>!e.disabled));e&&(i.value=[e.id])}}g((()=>{a()})),l((()=>{t=!0}));const m={register:function(e,l){const t=e,i=Symbol.for(`${n.description}:id`),o=b(i,null==u?void 0:u.vnode).indexOf(l);null==x(t.value)&&(t.value=o),o>-1?s.splice(o,0,t):s.push(t)},unregister:function(e){if(t)return;a();const n=s.findIndex((n=>n.id===e));s.splice(n,1)},selected:i,select:function(n,l){const t=s.find((e=>e.id===n));if(!l||!(null==t?void 0:t.disabled))if(e.multiple){const t=i.value.slice(),s=t.findIndex((e=>e===n)),u=~s;if(l=l??!u,u&&e.mandatory&&t.length<=1)return;if(!u&&null!=e.max&&t.length+1>e.max)return;s<0&&l?t.push(n):s>=0&&!l&&t.splice(s,1),i.value=t}else{const t=i.value.includes(n);if(e.mandatory&&t)return;i.value=l??!t?[n]:[]}},disabled:r(e,"disabled"),prev:()=>c(s.length-1),next:()=>c(1),isSelected:e=>i.value.includes(e),selectedClass:f((()=>e.selectedClass)),items:f((()=>s)),getItemIndex:e=>function(e,n){const l=B(e,[n]);return l.length?e.findIndex((e=>e.id===l[0])):-1}(s,e)};return d(n,m),m}function B(e,n){const l=[];return n.forEach((n=>{const t=e.find((e=>m(n,e.value))),s=e[n];null!=(null==t?void 0:t.value)?l.push(t.id):null!=s&&l.push(s.id)})),l}export{I as a,S as b,y as c,C as m,w as u};