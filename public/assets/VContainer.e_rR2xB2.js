import{ak as re,k as C,al as Y,G as W,am as dt,K,x as O,an as Se,ao as vt,ap as A,n as c,aq as J,ar as Te,as as _e,at as ft,au as mt,av as gt,b as r,F as Le,v as ke,m as Q,g as L,l as Z,j as Re,U as T,aw as ht,ax as ze,ay as yt,az as bt,aA as $e,ac as Ct,aB as Ne,aC as St,aD as _t,aE as fe,Q as kt,aF as k,I as oe,aG as wt,aH as xt,a4 as pt,T as M,aI as me,H as It,aJ as ge,aK as Oe,aL as Bt,aM as we,z as Ae,aN as Vt,aO as xe,q as ue,r as De,i as Pt,V as Et,aP as Tt}from"./entry.GEXDcX1C.js";const Lt=["top","bottom"],Rt=["start","end","left","right"];function zt(e,t){let[a,n]=e.split(" ");return n||(n=re(Lt,a)?"start":re(Rt,a)?"top":"center"),{side:pe(a,t),align:pe(n,t)}}function pe(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}const $=C({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component");function R(e){const t=Y("useRender");t.render=e}function $t(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const a=W(),n=W();if(dt){const i=new ResizeObserver(s=>{e==null||e(s,i),s.length&&(t==="content"?n.value=s[0].contentRect:n.value=s[0].target.getBoundingClientRect())});K(()=>{i.disconnect()}),O(a,(s,l)=>{l&&(i.unobserve(Se(l)),n.value=void 0),s&&i.observe(Se(s))},{flush:"post"})}return{resizeRef:a,contentRect:vt(n)}}const He=C({border:[Boolean,Number,String]},"border");function Me(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:A();return{borderClasses:c(()=>{const n=J(e)?e.value:e.border,i=[];if(n===!0||n==="")i.push(`${t}--border`);else if(typeof n=="string"||n===0)for(const s of String(n).split(" "))i.push(`border-${s}`);return i})}}const Nt=[null,"default","comfortable","compact"],We=C({density:{type:String,default:"default",validator:e=>Nt.includes(e)}},"density");function je(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:A();return{densityClasses:c(()=>`${t}--density-${e.density}`)}}const Ge=C({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function Fe(e){return{elevationClasses:c(()=>{const a=J(e)?e.value:e.elevation,n=[];return a==null||n.push(`elevation-${a}`),n})}}const ae=C({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function se(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:A();return{roundedClasses:c(()=>{const n=J(e)?e.value:e.rounded,i=[];if(n===!0||n==="")i.push(`${t}--rounded`);else if(typeof n=="string"||n===0)for(const s of String(n).split(" "))i.push(`rounded-${s}`);return i})}}const j=C({tag:{type:String,default:"div"}},"tag");function he(e){return Te(()=>{const t=[],a={};if(e.value.background)if(_e(e.value.background)){if(a.backgroundColor=e.value.background,!e.value.text&&ft(e.value.background)){const n=mt(e.value.background);if(n.a==null||n.a===1){const i=gt(n);a.color=i,a.caretColor=i}}}else t.push(`bg-${e.value.background}`);return e.value.text&&(_e(e.value.text)?(a.color=e.value.text,a.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:a}})}function te(e,t){const a=c(()=>({text:J(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:i}=he(a);return{textColorClasses:n,textColorStyles:i}}function ce(e,t){const a=c(()=>({background:J(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:i}=he(a);return{backgroundColorClasses:n,backgroundColorStyles:i}}const Ot=["elevated","flat","tonal","outlined","text","plain"];function At(e,t){return r(Le,null,[e&&r("span",{key:"overlay",class:`${t}__overlay`},null),r("span",{key:"underlay",class:`${t}__underlay`},null)])}const qe=C({color:String,variant:{type:String,default:"elevated",validator:e=>Ot.includes(e)}},"variant");function Dt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:A();const a=c(()=>{const{variant:s}=ke(e);return`${t}--variant-${s}`}),{colorClasses:n,colorStyles:i}=he(c(()=>{const{variant:s,color:l}=ke(e);return{[["elevated","flat"].includes(s)?"background":"text"]:l}}));return{colorClasses:n,colorStyles:i,variantClasses:a}}const Ue=C({divided:Boolean,...He(),...$(),...We(),...Ge(),...ae(),...j(),...Q(),...qe()},"VBtnGroup"),Ie=L()({name:"VBtnGroup",props:Ue(),setup(e,t){let{slots:a}=t;const{themeClasses:n}=Z(e),{densityClasses:i}=je(e),{borderClasses:s}=Me(e),{elevationClasses:l}=Fe(e),{roundedClasses:v}=se(e);Re({VBtn:{height:"auto",color:T(e,"color"),density:T(e,"density"),flat:!0,variant:T(e,"variant")}}),R(()=>r(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},n.value,s.value,i.value,l.value,v.value,e.class],style:e.style},a))}}),Ht=C({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),Mt=C({value:null,disabled:Boolean,selectedClass:String},"group-item");function Wt(e,t){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const n=Y("useGroupItem");if(!n)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const i=ht();ze(Symbol.for(`${t.description}:id`),i);const s=yt(t,null);if(!s){if(!a)return s;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`)}const l=T(e,"value"),v=c(()=>!!(s.disabled.value||e.disabled));s.register({id:i,value:l,disabled:v},n),K(()=>{s.unregister(i)});const d=c(()=>s.isSelected(i)),f=c(()=>d.value&&[s.selectedClass.value,e.selectedClass]);return O(d,m=>{n.emit("group:selected",{value:m})}),{id:i,isSelected:d,toggle:()=>s.select(i,!d.value),select:m=>s.select(i,m),selectedClass:f,value:l,disabled:v,group:s}}function jt(e,t){let a=!1;const n=bt([]),i=$e(e,"modelValue",[],u=>u==null?[]:Xe(n,St(u)),u=>{const o=Ft(n,u);return e.multiple?o:o[0]}),s=Y("useGroup");function l(u,o){const S=u,y=Symbol.for(`${t.description}:id`),w=_t(y,s==null?void 0:s.vnode).indexOf(o);w>-1?n.splice(w,0,S):n.push(S)}function v(u){if(a)return;d();const o=n.findIndex(S=>S.id===u);n.splice(o,1)}function d(){const u=n.find(o=>!o.disabled);u&&e.mandatory==="force"&&!i.value.length&&(i.value=[u.id])}Ct(()=>{d()}),K(()=>{a=!0});function f(u,o){const S=n.find(y=>y.id===u);if(!(o&&(S!=null&&S.disabled)))if(e.multiple){const y=i.value.slice(),p=y.findIndex(g=>g===u),w=~p;if(o=o??!w,w&&e.mandatory&&y.length<=1||!w&&e.max!=null&&y.length+1>e.max)return;p<0&&o?y.push(u):p>=0&&!o&&y.splice(p,1),i.value=y}else{const y=i.value.includes(u);if(e.mandatory&&y)return;i.value=o??!y?[u]:[]}}function m(u){if(e.multiple,i.value.length){const o=i.value[0],S=n.findIndex(w=>w.id===o);let y=(S+u)%n.length,p=n[y];for(;p.disabled&&y!==S;)y=(y+u)%n.length,p=n[y];if(p.disabled)return;i.value=[n[y].id]}else{const o=n.find(S=>!S.disabled);o&&(i.value=[o.id])}}const b={register:l,unregister:v,selected:i,select:f,disabled:T(e,"disabled"),prev:()=>m(n.length-1),next:()=>m(1),isSelected:u=>i.value.includes(u),selectedClass:c(()=>e.selectedClass),items:c(()=>n),getItemIndex:u=>Gt(n,u)};return ze(t,b),b}function Gt(e,t){const a=Xe(e,[t]);return a.length?e.findIndex(n=>n.id===a[0]):-1}function Xe(e,t){const a=[];return t.forEach(n=>{const i=e.find(l=>Ne(n,l.value)),s=e[n];(i==null?void 0:i.value)!=null?a.push(i.id):s!=null&&a.push(s.id)}),a}function Ft(e,t){const a=[];return t.forEach(n=>{const i=e.findIndex(s=>s.id===n);if(~i){const s=e[i];a.push(s.value!=null?s.value:i)}}),a}const Ye=Symbol.for("vuetify:v-btn-toggle"),qt=C({...Ue(),...Ht()},"VBtnToggle");L()({name:"VBtnToggle",props:qt(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;const{isSelected:n,next:i,prev:s,select:l,selected:v}=jt(e,Ye);return R(()=>{const d=Ie.filterProps(e);return r(Ie,fe({class:["v-btn-toggle",e.class]},d,{style:e.style}),{default:()=>{var f;return[(f=a.default)==null?void 0:f.call(a,{isSelected:n,next:i,prev:s,select:l,selected:v})]}})}),{next:i,prev:s,select:l}}});const Ut=C({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),ie=L(!1)({name:"VDefaultsProvider",props:Ut(),setup(e,t){let{slots:a}=t;const{defaults:n,disabled:i,reset:s,root:l,scoped:v}=kt(e);return Re(n,{reset:s,root:l,scoped:v,disabled:i}),()=>{var d;return(d=a.default)==null?void 0:d.call(a)}}}),Xt=["x-small","small","default","large","x-large"],ye=C({size:{type:[String,Number],default:"default"}},"size");function be(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:A();return Te(()=>{let a,n;return re(Xt,e.size)?a=`${t}--size-${e.size}`:e.size&&(n={width:k(e.size),height:k(e.size)}),{sizeClasses:a,sizeStyles:n}})}const Yt=C({color:String,start:Boolean,end:Boolean,icon:oe,...$(),...ye(),...j({tag:"i"}),...Q()},"VIcon"),le=L()({name:"VIcon",props:Yt(),setup(e,t){let{attrs:a,slots:n}=t;const i=W(),{themeClasses:s}=Z(e),{iconData:l}=wt(c(()=>i.value||e.icon)),{sizeClasses:v}=be(e),{textColorClasses:d,textColorStyles:f}=te(T(e,"color"));return R(()=>{var b,u;const m=(b=n.default)==null?void 0:b.call(n);return m&&(i.value=(u=xt(m).filter(o=>o.type===pt&&o.children&&typeof o.children=="string")[0])==null?void 0:u.children),r(l.value.component,{tag:e.tag,icon:l.value.icon,class:["v-icon","notranslate",s.value,v.value,d.value,{"v-icon--clickable":!!a.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[v.value?void 0:{fontSize:k(e.size),height:k(e.size),width:k(e.size)},f.value,e.style],role:a.onClick?"button":void 0,"aria-hidden":!a.onClick},{default:()=>[m]})}),{}}});function Ke(e,t){const a=W(),n=M(!1);if(me){const i=new IntersectionObserver(s=>{e==null||e(s,i),n.value=!!s.find(l=>l.isIntersecting)},t);K(()=>{i.disconnect()}),O(a,(s,l)=>{l&&(i.unobserve(l),n.value=!1),s&&i.observe(s)},{flush:"post"})}return{intersectionRef:a,isIntersecting:n}}const Kt=C({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...$(),...ye(),...j({tag:"div"}),...Q()},"VProgressCircular"),Jt=L()({name:"VProgressCircular",props:Kt(),setup(e,t){let{slots:a}=t;const n=20,i=2*Math.PI*n,s=W(),{themeClasses:l}=Z(e),{sizeClasses:v,sizeStyles:d}=be(e),{textColorClasses:f,textColorStyles:m}=te(T(e,"color")),{textColorClasses:b,textColorStyles:u}=te(T(e,"bgColor")),{intersectionRef:o,isIntersecting:S}=Ke(),{resizeRef:y,contentRect:p}=$t(),w=c(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),g=c(()=>Number(e.width)),_=c(()=>d.value?Number(e.size):p.value?p.value.width:Math.max(g.value,32)),B=c(()=>n/(1-g.value/_.value)*2),V=c(()=>g.value/_.value*B.value),N=c(()=>k((100-w.value)/100*i));return It(()=>{o.value=s.value,y.value=s.value}),R(()=>r(e.tag,{ref:s,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":S.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},l.value,v.value,f.value,e.class],style:[d.value,m.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:w.value},{default:()=>[r("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${B.value} ${B.value}`},[r("circle",{class:["v-progress-circular__underlay",b.value],style:u.value,fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":V.value,"stroke-dasharray":i,"stroke-dashoffset":0},null),r("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":V.value,"stroke-dasharray":i,"stroke-dashoffset":N.value},null)]),a.default&&r("div",{class:"v-progress-circular__content"},[a.default({value:w.value})])]})),{}}}),Je=C({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Qe(e){return{dimensionStyles:c(()=>({height:k(e.height),maxHeight:k(e.maxHeight),maxWidth:k(e.maxWidth),minHeight:k(e.minHeight),minWidth:k(e.minWidth),width:k(e.width)}))}}const Be={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Ze=C({location:String},"location");function et(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2?arguments[2]:void 0;const{isRtl:n}=ge();return{locationStyles:c(()=>{if(!e.location)return{};const{side:s,align:l}=zt(e.location.split(" ").length>1?e.location:`${e.location} center`,n.value);function v(f){return a?a(f):0}const d={};return s!=="center"&&(t?d[Be[s]]=`calc(100% - ${v(s)}px)`:d[s]=0),l!=="center"?t?d[Be[l]]=`calc(100% - ${v(l)}px)`:d[l]=0:(s==="center"?d.top=d.left="50%":d[{top:"left",bottom:"left",left:"top",right:"top"}[s]]="50%",d.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[s]),d})}}const Qt=C({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...$(),...Ze({location:"top"}),...ae(),...j(),...Q()},"VProgressLinear"),Zt=L()({name:"VProgressLinear",props:Qt(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;const n=$e(e,"modelValue"),{isRtl:i,rtlClasses:s}=ge(),{themeClasses:l}=Z(e),{locationStyles:v}=et(e),{textColorClasses:d,textColorStyles:f}=te(e,"color"),{backgroundColorClasses:m,backgroundColorStyles:b}=ce(c(()=>e.bgColor||e.color)),{backgroundColorClasses:u,backgroundColorStyles:o}=ce(e,"color"),{roundedClasses:S}=se(e),{intersectionRef:y,isIntersecting:p}=Ke(),w=c(()=>parseInt(e.max,10)),g=c(()=>parseInt(e.height,10)),_=c(()=>parseFloat(e.bufferValue)/w.value*100),B=c(()=>parseFloat(n.value)/w.value*100),V=c(()=>i.value!==e.reverse),N=c(()=>e.indeterminate?"fade-transition":"slide-x-transition"),D=c(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function G(I){if(!y.value)return;const{left:z,right:H,width:h}=y.value.getBoundingClientRect(),x=V.value?h-I.clientX+(H-h):I.clientX-z;n.value=Math.round(x/h*w.value)}return R(()=>r(e.tag,{ref:y,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&p.value,"v-progress-linear--reverse":V.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},S.value,l.value,s.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?k(g.value):0,"--v-progress-linear-height":k(g.value),...v.value},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:B.value,onClick:e.clickable&&G},{default:()=>[e.stream&&r("div",{key:"stream",class:["v-progress-linear__stream",d.value],style:{...f.value,[V.value?"left":"right"]:k(-g.value),borderTop:`${k(g.value/2)} dotted`,opacity:D.value,top:`calc(50% - ${k(g.value/4)})`,width:k(100-_.value,"%"),"--v-progress-linear-stream-to":k(g.value*(V.value?1:-1))}},null),r("div",{class:["v-progress-linear__background",m.value],style:[b.value,{opacity:D.value,width:k(e.stream?_.value:100,"%")}]},null),r(Oe,{name:N.value},{default:()=>[e.indeterminate?r("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(I=>r("div",{key:I,class:["v-progress-linear__indeterminate",I,u.value],style:o.value},null))]):r("div",{class:["v-progress-linear__determinate",u.value],style:[o.value,{width:k(B.value,"%")}]},null)]}),a.default&&r("div",{class:"v-progress-linear__content"},[a.default({value:B.value,buffer:_.value})])]})),{}}}),en=C({loading:[Boolean,String]},"loader");function tn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:A();return{loaderClasses:c(()=>({[`${t}--loading`]:e.loading}))}}function pn(e,t){var n;let{slots:a}=t;return r("div",{class:`${e.name}__loader`},[((n=a.default)==null?void 0:n.call(a,{color:e.color,isActive:e.active}))||r(Zt,{absolute:e.absolute,active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const nn=["static","relative","fixed","absolute","sticky"],an=C({position:{type:String,validator:e=>nn.includes(e)}},"position");function sn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:A();return{positionClasses:c(()=>e.position?`${t}--${e.position}`:void 0)}}function ln(){const e=Y("useRoute");return c(()=>{var t;return(t=e==null?void 0:e.proxy)==null?void 0:t.$route})}function rn(e,t){const a=Bt("RouterLink"),n=c(()=>!!(e.href||e.to)),i=c(()=>(n==null?void 0:n.value)||we(t,"click")||we(e,"click"));if(typeof a=="string")return{isLink:n,isClickable:i,href:T(e,"href")};const s=e.to?a.useLink(e):void 0,l=ln();return{isLink:n,isClickable:i,route:s==null?void 0:s.route,navigate:s==null?void 0:s.navigate,isActive:s&&c(()=>{var v,d,f;return e.exact?l.value?((f=s.isExactActive)==null?void 0:f.value)&&Ne(s.route.value.query,l.value.query):(d=s.isExactActive)==null?void 0:d.value:(v=s.isActive)==null?void 0:v.value}),href:c(()=>e.to?s==null?void 0:s.route.value.href:e.href)}}const on=C({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");function un(e,t){O(()=>{var a;return(a=e.isActive)==null?void 0:a.value},a=>{e.isLink.value&&a&&t&&Ae(()=>{t(!0)})},{immediate:!0})}const de=Symbol("rippleStop"),cn=80;function Ve(e,t){e.style.transform=t,e.style.webkitTransform=t}function ve(e){return e.constructor.name==="TouchEvent"}function tt(e){return e.constructor.name==="KeyboardEvent"}const dn=function(e,t){var b;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=0,i=0;if(!tt(e)){const u=t.getBoundingClientRect(),o=ve(e)?e.touches[e.touches.length-1]:e;n=o.clientX-u.left,i=o.clientY-u.top}let s=0,l=.3;(b=t._ripple)!=null&&b.circle?(l=.15,s=t.clientWidth/2,s=a.center?s:s+Math.sqrt((n-s)**2+(i-s)**2)/4):s=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const v=`${(t.clientWidth-s*2)/2}px`,d=`${(t.clientHeight-s*2)/2}px`,f=a.center?v:`${n-s}px`,m=a.center?d:`${i-s}px`;return{radius:s,scale:l,x:f,y:m,centerX:v,centerY:d}},ne={show(e,t){var o;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((o=t==null?void 0:t._ripple)!=null&&o.enabled))return;const n=document.createElement("span"),i=document.createElement("span");n.appendChild(i),n.className="v-ripple__container",a.class&&(n.className+=` ${a.class}`);const{radius:s,scale:l,x:v,y:d,centerX:f,centerY:m}=dn(e,t,a),b=`${s*2}px`;i.className="v-ripple__animation",i.style.width=b,i.style.height=b,t.appendChild(n);const u=window.getComputedStyle(t);u&&u.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),i.classList.add("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--visible"),Ve(i,`translate(${v}, ${d}) scale3d(${l},${l},${l})`),i.dataset.activated=String(performance.now()),setTimeout(()=>{i.classList.remove("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--in"),Ve(i,`translate(${f}, ${m}) scale3d(1,1,1)`)},0)},hide(e){var s;if(!((s=e==null?void 0:e._ripple)!=null&&s.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const a=t[t.length-1];if(a.dataset.isHiding)return;a.dataset.isHiding="true";const n=performance.now()-Number(a.dataset.activated),i=Math.max(250-n,0);setTimeout(()=>{a.classList.remove("v-ripple__animation--in"),a.classList.add("v-ripple__animation--out"),setTimeout(()=>{var v;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((v=a.parentNode)==null?void 0:v.parentNode)===e&&e.removeChild(a.parentNode)},300)},i)}};function nt(e){return typeof e>"u"||!!e}function U(e){const t={},a=e.currentTarget;if(!(!(a!=null&&a._ripple)||a._ripple.touched||e[de])){if(e[de]=!0,ve(e))a._ripple.touched=!0,a._ripple.isTouch=!0;else if(a._ripple.isTouch)return;if(t.center=a._ripple.centered||tt(e),a._ripple.class&&(t.class=a._ripple.class),ve(e)){if(a._ripple.showTimerCommit)return;a._ripple.showTimerCommit=()=>{ne.show(e,a,t)},a._ripple.showTimer=window.setTimeout(()=>{var n;(n=a==null?void 0:a._ripple)!=null&&n.showTimerCommit&&(a._ripple.showTimerCommit(),a._ripple.showTimerCommit=null)},cn)}else ne.show(e,a,t)}}function Pe(e){e[de]=!0}function P(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{P(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),ne.hide(t)}}function at(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let X=!1;function st(e){!X&&(e.keyCode===xe.enter||e.keyCode===xe.space)&&(X=!0,U(e))}function it(e){X=!1,P(e)}function lt(e){X&&(X=!1,P(e))}function rt(e,t,a){const{value:n,modifiers:i}=t,s=nt(n);if(s||ne.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=s,e._ripple.centered=i.center,e._ripple.circle=i.circle,Vt(n)&&n.class&&(e._ripple.class=n.class),s&&!a){if(i.stop){e.addEventListener("touchstart",Pe,{passive:!0}),e.addEventListener("mousedown",Pe);return}e.addEventListener("touchstart",U,{passive:!0}),e.addEventListener("touchend",P,{passive:!0}),e.addEventListener("touchmove",at,{passive:!0}),e.addEventListener("touchcancel",P),e.addEventListener("mousedown",U),e.addEventListener("mouseup",P),e.addEventListener("mouseleave",P),e.addEventListener("keydown",st),e.addEventListener("keyup",it),e.addEventListener("blur",lt),e.addEventListener("dragstart",P,{passive:!0})}else!s&&a&&ot(e)}function ot(e){e.removeEventListener("mousedown",U),e.removeEventListener("touchstart",U),e.removeEventListener("touchend",P),e.removeEventListener("touchmove",at),e.removeEventListener("touchcancel",P),e.removeEventListener("mouseup",P),e.removeEventListener("mouseleave",P),e.removeEventListener("keydown",st),e.removeEventListener("keyup",it),e.removeEventListener("dragstart",P),e.removeEventListener("blur",lt)}function vn(e,t){rt(e,t,!1)}function fn(e){delete e._ripple,ot(e)}function mn(e,t){if(t.value===t.oldValue)return;const a=nt(t.oldValue);rt(e,t,a)}const gn={mounted:vn,unmounted:fn,updated:mn},hn=C({active:{type:Boolean,default:void 0},symbol:{type:null,default:Ye},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:oe,appendIcon:oe,block:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...He(),...$(),...We(),...Je(),...Ge(),...Mt(),...en(),...Ze(),...an(),...ae(),...on(),...ye(),...j({tag:"button"}),...Q(),...qe({variant:"elevated"})},"VBtn"),In=L()({name:"VBtn",directives:{Ripple:gn},props:hn(),emits:{"group:selected":e=>!0},setup(e,t){let{attrs:a,slots:n}=t;const{themeClasses:i}=Z(e),{borderClasses:s}=Me(e),{colorClasses:l,colorStyles:v,variantClasses:d}=Dt(e),{densityClasses:f}=je(e),{dimensionStyles:m}=Qe(e),{elevationClasses:b}=Fe(e),{loaderClasses:u}=tn(e),{locationStyles:o}=et(e),{positionClasses:S}=sn(e),{roundedClasses:y}=se(e),{sizeClasses:p,sizeStyles:w}=be(e),g=Wt(e,e.symbol,!1),_=rn(e,a),B=c(()=>{var I;return e.active!==void 0?e.active:_.isLink.value?(I=_.isActive)==null?void 0:I.value:g==null?void 0:g.isSelected.value}),V=c(()=>(g==null?void 0:g.disabled.value)||e.disabled),N=c(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),D=c(()=>{if(!(e.value===void 0||typeof e.value=="symbol"))return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function G(I){var z;V.value||_.isLink.value&&(I.metaKey||I.ctrlKey||I.shiftKey||I.button!==0||a.target==="_blank")||((z=_.navigate)==null||z.call(_,I),g==null||g.toggle())}return un(_,g==null?void 0:g.select),R(()=>{var E,F;const I=_.isLink.value?"a":e.tag,z=!!(e.prependIcon||n.prepend),H=!!(e.appendIcon||n.append),h=!!(e.icon&&e.icon!==!0),x=(g==null?void 0:g.isSelected.value)&&(!_.isLink.value||((E=_.isActive)==null?void 0:E.value))||!g||((F=_.isActive)==null?void 0:F.value);return ue(r(I,{type:I==="a"?void 0:"button",class:["v-btn",g==null?void 0:g.selectedClass.value,{"v-btn--active":B.value,"v-btn--block":e.block,"v-btn--disabled":V.value,"v-btn--elevated":N.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--slim":e.slim,"v-btn--stacked":e.stacked},i.value,s.value,x?l.value:void 0,f.value,b.value,u.value,S.value,y.value,p.value,d.value,e.class],style:[x?v.value:void 0,m.value,o.value,w.value,e.style],disabled:V.value||void 0,href:_.href.value,onClick:G,value:D.value},{default:()=>{var q;return[At(!0,"v-btn"),!e.icon&&z&&r("span",{key:"prepend",class:"v-btn__prepend"},[n.prepend?r(ie,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},n.prepend):r(le,{key:"prepend-icon",icon:e.prependIcon},null)]),r("span",{class:"v-btn__content","data-no-activator":""},[!n.default&&h?r(le,{key:"content-icon",icon:e.icon},null):r(ie,{key:"content-defaults",disabled:!h,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var Ce;return[((Ce=n.default)==null?void 0:Ce.call(n))??e.text]}})]),!e.icon&&H&&r("span",{key:"append",class:"v-btn__append"},[n.append?r(ie,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},n.append):r(le,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&r("span",{key:"loader",class:"v-btn__loader"},[((q=n.loader)==null?void 0:q.call(n))??r(Jt,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[De("ripple"),!V.value&&e.ripple,null]])}),{group:g}}});function yn(e){return{aspectStyles:c(()=>{const t=Number(e.aspectRatio);return t?{paddingBottom:String(1/t*100)+"%"}:void 0})}}const ut=C({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...$(),...Je()},"VResponsive"),Ee=L()({name:"VResponsive",props:ut(),setup(e,t){let{slots:a}=t;const{aspectStyles:n}=yn(e),{dimensionStyles:i}=Qe(e);return R(()=>{var s;return r("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[i.value,e.style]},[r("div",{class:"v-responsive__sizer",style:n.value},null),(s=a.additional)==null?void 0:s.call(a),a.default&&r("div",{class:["v-responsive__content",e.contentClass]},[a.default()])])}),{}}}),bn=C({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),ee=(e,t)=>{let{slots:a}=t;const{transition:n,disabled:i,...s}=e,{component:l=Oe,...v}=typeof n=="object"?n:{};return Pt(l,fe(typeof n=="string"?{name:i?"":n}:v,s,{disabled:i}),a)};function Cn(e,t){if(!me)return;const a=t.modifiers||{},n=t.value,{handler:i,options:s}=typeof n=="object"?n:{handler:n,options:{}},l=new IntersectionObserver(function(){var b;let v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],d=arguments.length>1?arguments[1]:void 0;const f=(b=e._observe)==null?void 0:b[t.instance.$.uid];if(!f)return;const m=v.some(u=>u.isIntersecting);i&&(!a.quiet||f.init)&&(!a.once||m||f.init)&&i(m,v,d),m&&a.once?ct(e,t):f.init=!0},s);e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:l},l.observe(e)}function ct(e,t){var n;const a=(n=e._observe)==null?void 0:n[t.instance.$.uid];a&&(a.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const Sn={mounted:Cn,unmounted:ct},_n=Sn,kn=C({alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...ut(),...$(),...ae(),...bn()},"VImg"),Bn=L()({name:"VImg",directives:{intersect:_n},props:kn(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,t){let{emit:a,slots:n}=t;const{backgroundColorClasses:i,backgroundColorStyles:s}=ce(T(e,"color")),{roundedClasses:l}=se(e),v=Y("VImg"),d=M(""),f=W(),m=M(e.eager?"loading":"idle"),b=M(),u=M(),o=c(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),S=c(()=>o.value.aspect||b.value/u.value||0);O(()=>e.src,()=>{y(m.value!=="idle")}),O(S,(h,x)=>{!h&&x&&f.value&&B(f.value)}),Et(()=>y());function y(h){if(!(e.eager&&h)&&!(me&&!h&&!e.eager)){if(m.value="loading",o.value.lazySrc){const x=new Image;x.src=o.value.lazySrc,B(x,null)}o.value.src&&Ae(()=>{var x;a("loadstart",((x=f.value)==null?void 0:x.currentSrc)||o.value.src),setTimeout(()=>{var E;if(!v.isUnmounted)if((E=f.value)!=null&&E.complete){if(f.value.naturalWidth||w(),m.value==="error")return;S.value||B(f.value,null),m.value==="loading"&&p()}else S.value||B(f.value),g()})})}}function p(){var h;v.isUnmounted||(g(),B(f.value),m.value="loaded",a("load",((h=f.value)==null?void 0:h.currentSrc)||o.value.src))}function w(){var h;v.isUnmounted||(m.value="error",a("error",((h=f.value)==null?void 0:h.currentSrc)||o.value.src))}function g(){const h=f.value;h&&(d.value=h.currentSrc||h.src)}let _=-1;K(()=>{clearTimeout(_)});function B(h){let x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const E=()=>{if(clearTimeout(_),v.isUnmounted)return;const{naturalHeight:F,naturalWidth:q}=h;F||q?(b.value=q,u.value=F):!h.complete&&m.value==="loading"&&x!=null?_=window.setTimeout(E,x):(h.currentSrc.endsWith(".svg")||h.currentSrc.startsWith("data:image/svg+xml"))&&(b.value=1,u.value=1)};E()}const V=c(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),N=()=>{var E;if(!o.value.src||m.value==="idle")return null;const h=r("img",{class:["v-img__img",V.value],style:{objectPosition:e.position},src:o.value.src,srcset:o.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:f,onLoad:p,onError:w},null),x=(E=n.sources)==null?void 0:E.call(n);return r(ee,{transition:e.transition,appear:!0},{default:()=>[ue(x?r("picture",{class:"v-img__picture"},[x,h]):h,[[Tt,m.value==="loaded"]])]})},D=()=>r(ee,{transition:e.transition},{default:()=>[o.value.lazySrc&&m.value!=="loaded"&&r("img",{class:["v-img__img","v-img__img--preload",V.value],style:{objectPosition:e.position},src:o.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),G=()=>n.placeholder?r(ee,{transition:e.transition,appear:!0},{default:()=>[(m.value==="loading"||m.value==="error"&&!n.error)&&r("div",{class:"v-img__placeholder"},[n.placeholder()])]}):null,I=()=>n.error?r(ee,{transition:e.transition,appear:!0},{default:()=>[m.value==="error"&&r("div",{class:"v-img__error"},[n.error()])]}):null,z=()=>e.gradient?r("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,H=M(!1);{const h=O(S,x=>{x&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{H.value=!0})}),h())})}return R(()=>{const h=Ee.filterProps(e);return ue(r(Ee,fe({class:["v-img",{"v-img--booting":!H.value},i.value,l.value,e.class],style:[{width:k(e.width==="auto"?b.value:e.width)},s.value,e.style]},h,{aspectRatio:S.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>r(Le,null,[r(N,null,null),r(D,null,null),r(z,null,null),r(G,null,null),r(I,null,null)]),default:n.default}),[[De("intersect"),{handler:y,options:e.options},null,{once:!0}]])}),{currentSrc:d,image:f,state:m,naturalWidth:b,naturalHeight:u}}}),wn=C({fluid:{type:Boolean,default:!1},...$(),...j()},"VContainer"),Vn=L()({name:"VContainer",props:wn(),setup(e,t){let{slots:a}=t;const{rtlClasses:n}=ge();return R(()=>r(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},n.value,e.class],style:e.style},a)),{}}});export{sn as A,rn as B,In as C,Vn as D,$t as E,ce as F,te as G,pn as L,gn as R,Bn as V,We as a,ae as b,ye as c,j as d,qe as e,Dt as f,je as g,se as h,be as i,le as j,At as k,ie as l,$ as m,He as n,Je as o,Ge as p,en as q,Ze as r,an as s,on as t,R as u,Me as v,Qe as w,Fe as x,tn as y,et as z};
