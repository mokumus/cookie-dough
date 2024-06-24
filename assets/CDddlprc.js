import{b0 as e,g as t,h as a,ap as l,b1 as n,aq as r,R as o,aC as s,A as i,a6 as u,b2 as c,b3 as d,b4 as v,b5 as p,x as g,b6 as m,Q as f,a7 as h,I as b,m as y,D as _,i as S,b7 as C,B as w,b8 as x,aN as k,b as L,q as $,b9 as E,T,ba as B,C as N,Y as z,U as V,N as O,V as R,H as I,J as j,F as H,a5 as W,S as A,$ as P,u as F,a8 as q,bb as X,bc as M,s as Y,a3 as D,z as U,bd as J,be as K}from"./UZsxL62c.js";const Q=["top","bottom"],G=["start","end","left","right"];function Z(t,a){let[l,n]=t.split(" ");return n||(n=e(Q,l)?"start":e(G,l)?"top":"center"),{side:ee(l,a),align:ee(n,a)}}function ee(e,t){return"start"===e?t?"right":"left":"end"===e?t?"left":"right":e}function te(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function ae(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function le(e){return{side:e.align,align:e.side}}function ne(t){return e(Q,t.side)?"y":"x"}const re=t({class:[String,Array,Object],style:{type:[String,Array,Object],default:null}},"component");function oe(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"div",o=arguments.length>2?arguments[2]:void 0;return a()({name:o??l(n(e.replace(/__/g,"-"))),props:{tag:{type:String,default:t},...re()},setup(t,a){let{slots:l}=a;return()=>{var a;return r(t.tag,{class:[e,t.class],style:t.style},null==(a=l.default)?void 0:a.call(l))}}})}function se(e){o("useRender").render=e}const ie=t({tag:{type:String,default:"div"}},"tag"),ue=t({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),ce=a(!1)({name:"VDefaultsProvider",props:ue(),setup(e,t){let{slots:a}=t;const{defaults:l,disabled:n,reset:r,root:o,scoped:u}=s(e);return i(l,{reset:r,root:o,scoped:u,disabled:n}),()=>{var e;return null==(e=a.default)?void 0:e.call(a)}}});function de(e){return u((()=>{const t=[],a={};if(e.value.background)if(c(e.value.background)){if(a.backgroundColor=e.value.background,!e.value.text&&d(e.value.background)){const t=v(e.value.background);if(null==t.a||1===t.a){const e=p(t);a.color=e,a.caretColor=e}}}else t.push(`bg-${e.value.background}`);return e.value.text&&(c(e.value.text)?(a.color=e.value.text,a.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:a}}))}function ve(e,t){const a=g((()=>({text:m(e)?e.value:t?e[t]:null}))),{colorClasses:l,colorStyles:n}=de(a);return{textColorClasses:l,textColorStyles:n}}function pe(e,t){const a=g((()=>({background:m(e)?e.value:t?e[t]:null}))),{colorClasses:l,colorStyles:n}=de(a);return{backgroundColorClasses:l,backgroundColorStyles:n}}const ge=["x-small","small","default","large","x-large"],me=t({size:{type:[String,Number],default:"default"}},"size");function fe(t){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f();return u((()=>{let l,n;return e(ge,t.size)?l=`${a}--size-${t.size}`:t.size&&(n={width:h(t.size),height:h(t.size)}),{sizeClasses:l,sizeStyles:n}}))}const he=t({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:b,...re(),...me(),...ie({tag:"i"}),...y()},"VIcon"),be=a()({name:"VIcon",props:he(),setup(e,t){let{attrs:a,slots:l}=t;const n=_(),{themeClasses:r}=S(e),{iconData:o}=C(g((()=>n.value||e.icon))),{sizeClasses:s}=fe(e),{textColorClasses:i,textColorStyles:u}=ve(w(e,"color"));return se((()=>{var t,c;const d=null==(t=l.default)?void 0:t.call(l);d&&(n.value=null==(c=x(d).filter((e=>e.type===k&&e.children&&"string"==typeof e.children))[0])?void 0:c.children);const v=!(!a.onClick&&!a.onClickOnce);return L(o.value.component,{tag:e.tag,icon:o.value.icon,class:["v-icon","notranslate",r.value,s.value,i.value,{"v-icon--clickable":v,"v-icon--disabled":e.disabled,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[s.value?void 0:{fontSize:h(e.size),height:h(e.size),width:h(e.size)},u.value,e.style],role:v?"button":void 0,"aria-hidden":!v,tabindex:v?e.disabled?-1:0:void 0},{default:()=>[d]})})),{}}}),ye=t({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function _e(e){return{dimensionStyles:g((()=>{const t={},a=h(e.height),l=h(e.maxHeight),n=h(e.maxWidth),r=h(e.minHeight),o=h(e.minWidth),s=h(e.width);return null!=a&&(t.height=a),null!=l&&(t.maxHeight=l),null!=n&&(t.maxWidth=n),null!=r&&(t.minHeight=r),null!=o&&(t.minWidth=o),null!=s&&(t.width=s),t}))}}const Se=t({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...re(),...ye()},"VResponsive"),Ce=a()({name:"VResponsive",props:Se(),setup(e,t){let{slots:a}=t;const{aspectStyles:l}=function(e){return{aspectStyles:g((()=>{const t=Number(e.aspectRatio);return t?{paddingBottom:String(1/t*100)+"%"}:void 0}))}}(e),{dimensionStyles:n}=_e(e);return se((()=>{var t;return L("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[n.value,e.style]},[L("div",{class:"v-responsive__sizer",style:l.value},null),null==(t=a.additional)?void 0:t.call(a),a.default&&L("div",{class:["v-responsive__content",e.contentClass]},[a.default()])])})),{}}}),we=t({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function xe(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f();return{roundedClasses:g((()=>{const a=m(e)?e.value:e.rounded,l=m(e)?e.value:e.tile,n=[];if(!0===a||""===a)n.push(`${t}--rounded`);else if("string"==typeof a||0===a)for(const e of String(a).split(" "))n.push(`rounded-${e}`);else(l||!1===a)&&n.push("rounded-0");return n}))}}const ke=t({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>!0!==e}},"transition"),Le=(e,t)=>{let{slots:a}=t;const{transition:l,disabled:n,group:o,...s}=e,{component:i=(o?E:T),...u}="object"==typeof l?l:{};return r(i,$("string"==typeof l?{name:n?"":l}:u,"string"==typeof l?{}:Object.fromEntries(Object.entries({disabled:n,group:o}).filter((e=>{let[t,a]=e;return void 0!==a}))),s),a)};function $e(e,t){var a;const l=null==(a=e._observe)?void 0:a[t.instance.$.uid];l&&(l.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const Ee={mounted:function(e,t){if(!B)return;const a=t.modifiers||{},l=t.value,{handler:n,options:r}="object"==typeof l?l:{handler:l,options:{}},o=new IntersectionObserver((function(){var l;let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],o=arguments.length>1?arguments[1]:void 0;const s=null==(l=e._observe)?void 0:l[t.instance.$.uid];if(!s)return;const i=r.some((e=>e.isIntersecting));!n||a.quiet&&!s.init||a.once&&!i&&!s.init||n(i,r,o),i&&a.once?$e(e,t):s.init=!0}),r);e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:o},o.observe(e)},unmounted:$e},Te=t({alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...Se(),...re(),...we(),...ke()},"VImg"),Be=a()({name:"VImg",directives:{intersect:Ee},props:Te(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,t){let{emit:a,slots:l}=t;const{backgroundColorClasses:n,backgroundColorStyles:r}=pe(w(e,"color")),{roundedClasses:s}=xe(e),i=o("VImg"),u=N(""),c=_(),d=N(e.eager?"loading":"idle"),v=N(),p=N(),m=g((()=>e.src&&"object"==typeof e.src?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)})),f=g((()=>m.value.aspect||v.value/p.value||0));function b(t){if((!e.eager||!t)&&(!B||t||e.eager)){if(d.value="loading",m.value.lazySrc){const e=new Image;e.src=m.value.lazySrc,k(e,null)}m.value.src&&O((()=>{var e;a("loadstart",(null==(e=c.value)?void 0:e.currentSrc)||m.value.src),setTimeout((()=>{var e;if(!i.isUnmounted)if(null==(e=c.value)?void 0:e.complete){if(c.value.naturalWidth||S(),"error"===d.value)return;f.value||k(c.value,null),"loading"===d.value&&y()}else f.value||k(c.value),C()}))}))}}function y(){var e;i.isUnmounted||(C(),k(c.value),d.value="loaded",a("load",(null==(e=c.value)?void 0:e.currentSrc)||m.value.src))}function S(){var e;i.isUnmounted||(d.value="error",a("error",(null==(e=c.value)?void 0:e.currentSrc)||m.value.src))}function C(){const e=c.value;e&&(u.value=e.currentSrc||e.src)}z((()=>e.src),(()=>{b("idle"!==d.value)})),z(f,((e,t)=>{!e&&t&&c.value&&k(c.value)})),V((()=>b()));let x=-1;function k(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;const a=()=>{if(clearTimeout(x),i.isUnmounted)return;const{naturalHeight:l,naturalWidth:n}=e;l||n?(v.value=n,p.value=l):e.complete||"loading"!==d.value||null==t?(e.currentSrc.endsWith(".svg")||e.currentSrc.startsWith("data:image/svg+xml"))&&(v.value=1,p.value=1):x=window.setTimeout(a,t)};a()}R((()=>{clearTimeout(x)}));const E=g((()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover}))),T=()=>{var t;if(!m.value.src||"idle"===d.value)return null;const a=L("img",{class:["v-img__img",E.value],style:{objectPosition:e.position},src:m.value.src,srcset:m.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:c,onLoad:y,onError:S},null),n=null==(t=l.sources)?void 0:t.call(l);return L(Le,{transition:e.transition,appear:!0},{default:()=>[I(n?L("picture",{class:"v-img__picture"},[n,a]):a,[[W,"loaded"===d.value]])]})},A=()=>L(Le,{transition:e.transition},{default:()=>[m.value.lazySrc&&"loaded"!==d.value&&L("img",{class:["v-img__img","v-img__img--preload",E.value],style:{objectPosition:e.position},src:m.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),P=()=>l.placeholder?L(Le,{transition:e.transition,appear:!0},{default:()=>[("loading"===d.value||"error"===d.value&&!l.error)&&L("div",{class:"v-img__placeholder"},[l.placeholder()])]}):null,F=()=>l.error?L(Le,{transition:e.transition,appear:!0},{default:()=>["error"===d.value&&L("div",{class:"v-img__error"},[l.error()])]}):null,q=()=>e.gradient?L("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,X=N(!1);{const e=z(f,(t=>{t&&(requestAnimationFrame((()=>{requestAnimationFrame((()=>{X.value=!0}))})),e())}))}return se((()=>{const t=Ce.filterProps(e);return I(L(Ce,$({class:["v-img",{"v-img--booting":!X.value},n.value,s.value,e.class],style:[{width:h("auto"===e.width?v.value:e.width)},r.value,e.style]},t,{aspectRatio:f.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>L(H,null,[L(T,null,null),L(A,null,null),L(q,null,null),L(P,null,null),L(F,null,null)]),default:l.default}),[[j("intersect"),{handler:b,options:e.options},null,{once:!0}]])})),{currentSrc:u,image:c,state:d,naturalWidth:v,naturalHeight:p}}}),Ne=[null,"default","comfortable","compact"],ze=t({density:{type:String,default:"default",validator:e=>Ne.includes(e)}},"density");function Ve(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f();return{densityClasses:g((()=>`${t}--density-${e.density}`))}}const Oe=["elevated","flat","tonal","outlined","text","plain"];function Re(e,t){return L(H,null,[e&&L("span",{key:"overlay",class:`${t}__overlay`},null),L("span",{key:"underlay",class:`${t}__underlay`},null)])}const Ie=t({color:String,variant:{type:String,default:"elevated",validator:e=>Oe.includes(e)}},"variant");function je(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f();const a=g((()=>{const{variant:a}=A(e);return`${t}--variant-${a}`})),{colorClasses:l,colorStyles:n}=de(g((()=>{const{variant:t,color:a}=A(e);return{[["elevated","flat"].includes(t)?"background":"text"]:a}})));return{colorClasses:l,colorStyles:n,variantClasses:a}}const He=t({start:Boolean,end:Boolean,icon:b,image:String,text:String,...re(),...ze(),...we(),...me(),...ie(),...y(),...Ie({variant:"flat"})},"VAvatar"),We=a()({name:"VAvatar",props:He(),setup(e,t){let{slots:a}=t;const{themeClasses:l}=S(e),{colorClasses:n,colorStyles:r,variantClasses:o}=je(e),{densityClasses:s}=Ve(e),{roundedClasses:i}=xe(e),{sizeClasses:u,sizeStyles:c}=fe(e);return se((()=>L(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},l.value,n.value,s.value,i.value,u.value,o.value,e.class],style:[r.value,c.value,e.style]},{default:()=>[a.default?L(ce,{key:"content-defaults",defaults:{VImg:{cover:!0,image:e.image},VIcon:{icon:e.icon}}},{default:()=>[a.default()]}):e.image?L(Be,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?L(be,{key:"icon",icon:e.icon},null):e.text,Re(!1,"v-avatar")]}))),{}}}),Ae=t({border:[Boolean,Number,String]},"border");function Pe(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f();return{borderClasses:g((()=>{const a=m(e)?e.value:e.border,l=[];if(!0===a||""===a)l.push(`${t}--border`);else if("string"==typeof a||0===a)for(const e of String(a).split(" "))l.push(`border-${e}`);return l}))}}const Fe=t({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function qe(e){return{elevationClasses:g((()=>{const t=m(e)?e.value:e.elevation,a=[];return null==t||a.push(`elevation-${t}`),a}))}}function Xe(e,t){const a=_(),l=N(!1);if(B){const n=new IntersectionObserver((t=>{null==e||e(t,n),l.value=!!t.find((e=>e.isIntersecting))}),t);R((()=>{n.disconnect()})),z(a,((e,t)=>{t&&(n.unobserve(t),l.value=!1),e&&n.observe(e)}),{flush:"post"})}return{intersectionRef:a,isIntersecting:l}}const Me={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Ye=t({location:String},"location");function De(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2?arguments[2]:void 0;const{isRtl:l}=P();return{locationStyles:g((()=>{if(!e.location)return{};const{side:n,align:r}=Z(e.location.split(" ").length>1?e.location:`${e.location} center`,l.value);function o(e){return a?a(e):0}const s={};return"center"!==n&&(t?s[Me[n]]=`calc(100% - ${o(n)}px)`:s[n]=0),"center"!==r?t?s[Me[r]]=`calc(100% - ${o(r)}px)`:s[r]=0:("center"===n?s.top=s.left="50%":s[{top:"left",bottom:"left",left:"top",right:"top"}[n]]="50%",s.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[n]),s}))}}const Ue=t({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},bufferColor:String,bufferOpacity:[Number,String],clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},opacity:[Number,String],reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...re(),...Ye({location:"top"}),...we(),...ie(),...y()},"VProgressLinear"),Je=a()({name:"VProgressLinear",props:Ue(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;const l=F(e,"modelValue"),{isRtl:n,rtlClasses:r}=P(),{themeClasses:o}=S(e),{locationStyles:s}=De(e),{textColorClasses:i,textColorStyles:u}=ve(e,"color"),{backgroundColorClasses:c,backgroundColorStyles:d}=pe(g((()=>e.bgColor||e.color))),{backgroundColorClasses:v,backgroundColorStyles:p}=pe(g((()=>e.bufferColor||e.bgColor||e.color))),{backgroundColorClasses:m,backgroundColorStyles:f}=pe(e,"color"),{roundedClasses:b}=xe(e),{intersectionRef:y,isIntersecting:_}=Xe(),C=g((()=>parseFloat(e.max))),w=g((()=>parseFloat(e.height))),x=g((()=>q(parseFloat(e.bufferValue)/C.value*100,0,100))),k=g((()=>q(parseFloat(l.value)/C.value*100,0,100))),$=g((()=>n.value!==e.reverse)),E=g((()=>e.indeterminate?"fade-transition":"slide-x-transition"));function B(e){if(!y.value)return;const{left:t,right:a,width:n}=y.value.getBoundingClientRect(),r=$.value?n-e.clientX+(a-n):e.clientX-t;l.value=Math.round(r/n*C.value)}return se((()=>L(e.tag,{ref:y,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&_.value,"v-progress-linear--reverse":$.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},b.value,o.value,r.value,e.class],style:[{bottom:"bottom"===e.location?0:void 0,top:"top"===e.location?0:void 0,height:e.active?h(w.value):0,"--v-progress-linear-height":h(w.value),...e.absolute?s.value:{}},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:k.value,onClick:e.clickable&&B},{default:()=>[e.stream&&L("div",{key:"stream",class:["v-progress-linear__stream",i.value],style:{...u.value,[$.value?"left":"right"]:h(-w.value),borderTop:`${h(w.value/2)} dotted`,opacity:parseFloat(e.bufferOpacity),top:`calc(50% - ${h(w.value/4)})`,width:h(100-x.value,"%"),"--v-progress-linear-stream-to":h(w.value*($.value?1:-1))}},null),L("div",{class:["v-progress-linear__background",c.value],style:[d.value,{opacity:parseFloat(e.bgOpacity),width:e.stream?0:void 0}]},null),L("div",{class:["v-progress-linear__buffer",v.value],style:[p.value,{opacity:parseFloat(e.bufferOpacity),width:h(x.value,"%")}]},null),L(T,{name:E.value},{default:()=>[e.indeterminate?L("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map((e=>L("div",{key:e,class:["v-progress-linear__indeterminate",e,m.value],style:f.value},null)))]):L("div",{class:["v-progress-linear__determinate",m.value],style:[f.value,{width:h(k.value,"%")}]},null)]}),a.default&&L("div",{class:"v-progress-linear__content"},[a.default({value:k.value,buffer:x.value})])]}))),{}}}),Ke=t({loading:[Boolean,String]},"loader");function Qe(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f();return{loaderClasses:g((()=>({[`${t}--loading`]:e.loading})))}}function Ge(e,t){var a;let{slots:l}=t;return L("div",{class:`${e.name}__loader`},[(null==(a=l.default)?void 0:a.call(l,{color:e.color,isActive:e.active}))||L(Je,{absolute:e.absolute,active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const Ze=["static","relative","fixed","absolute","sticky"],et=t({position:{type:String,validator:e=>Ze.includes(e)}},"position");function tt(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f();return{positionClasses:g((()=>e.position?`${t}--${e.position}`:void 0))}}function at(){var e,t;return null==(t=null==(e=o("useRouter"))?void 0:e.proxy)?void 0:t.$router}function lt(e,t){var a,l;const n=X("RouterLink"),r=g((()=>!(!e.href&&!e.to))),s=g((()=>(null==r?void 0:r.value)||M(t,"click")||M(e,"click")));if("string"==typeof n||!("useLink"in n))return{isLink:r,isClickable:s,href:w(e,"href")};const i=g((()=>({...e,to:w((()=>e.to||""))}))),u=n.useLink(i.value),c=g((()=>e.to?u:void 0)),d=function(){const e=o("useRoute");return g((()=>{var t;return null==(t=null==e?void 0:e.proxy)?void 0:t.$route}))}();return{isLink:r,isClickable:s,route:null==(a=c.value)?void 0:a.route,navigate:null==(l=c.value)?void 0:l.navigate,isActive:g((()=>{var t,a,l;return!!c.value&&(e.exact?d.value?(null==(l=c.value.isExactActive)?void 0:l.value)&&Y(c.value.route.value.query,d.value.query):(null==(a=c.value.isExactActive)?void 0:a.value)??!1:(null==(t=c.value.isActive)?void 0:t.value)??!1)})),href:g((()=>{var t;return e.to?null==(t=c.value)?void 0:t.route.value.href:e.href}))}}const nt=t({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let rt=!1;function ot(e,t){let a,l,n=!1;function r(e){var t;(null==(t=e.state)?void 0:t.replaced)||(n=!0,setTimeout((()=>n=!1)))}D&&(O((()=>{window.addEventListener("popstate",r),a=null==e?void 0:e.beforeEach(((e,a,l)=>{rt?n?t(l):l():setTimeout((()=>n?t(l):l())),rt=!0})),l=null==e?void 0:e.afterEach((()=>{rt=!1}))})),U((()=>{window.removeEventListener("popstate",r),null==a||a(),null==l||l()})))}const st=Symbol("rippleStop"),it=80;function ut(e,t){e.style.transform=t,e.style.webkitTransform=t}function ct(e){return"TouchEvent"===e.constructor.name}function dt(e){return"KeyboardEvent"===e.constructor.name}const vt={show(e,t){var a;let l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!(null==(a=null==t?void 0:t._ripple)?void 0:a.enabled))return;const n=document.createElement("span"),r=document.createElement("span");n.appendChild(r),n.className="v-ripple__container",l.class&&(n.className+=` ${l.class}`);const{radius:o,scale:s,x:i,y:u,centerX:c,centerY:d}=function(e,t){var a;let l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=0,r=0;if(!dt(e)){const a=t.getBoundingClientRect(),l=ct(e)?e.touches[e.touches.length-1]:e;n=l.clientX-a.left,r=l.clientY-a.top}let o=0,s=.3;(null==(a=t._ripple)?void 0:a.circle)?(s=.15,o=t.clientWidth/2,o=l.center?o:o+Math.sqrt((n-o)**2+(r-o)**2)/4):o=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const i=(t.clientWidth-2*o)/2+"px",u=(t.clientHeight-2*o)/2+"px";return{radius:o,scale:s,x:l.center?i:n-o+"px",y:l.center?u:r-o+"px",centerX:i,centerY:u}}(e,t,l),v=2*o+"px";r.className="v-ripple__animation",r.style.width=v,r.style.height=v,t.appendChild(n);const p=window.getComputedStyle(t);p&&"static"===p.position&&(t.style.position="relative",t.dataset.previousPosition="static"),r.classList.add("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--visible"),ut(r,`translate(${i}, ${u}) scale3d(${s},${s},${s})`),r.dataset.activated=String(performance.now()),setTimeout((()=>{r.classList.remove("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--in"),ut(r,`translate(${c}, ${d}) scale3d(1,1,1)`)}),0)},hide(e){var t;if(!(null==(t=null==e?void 0:e._ripple)?void 0:t.enabled))return;const a=e.getElementsByClassName("v-ripple__animation");if(0===a.length)return;const l=a[a.length-1];if(l.dataset.isHiding)return;l.dataset.isHiding="true";const n=performance.now()-Number(l.dataset.activated),r=Math.max(250-n,0);setTimeout((()=>{l.classList.remove("v-ripple__animation--in"),l.classList.add("v-ripple__animation--out"),setTimeout((()=>{var t;1===e.getElementsByClassName("v-ripple__animation").length&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),(null==(t=l.parentNode)?void 0:t.parentNode)===e&&e.removeChild(l.parentNode)}),300)}),r)}};function pt(e){return void 0===e||!!e}function gt(e){const t={},a=e.currentTarget;if((null==a?void 0:a._ripple)&&!a._ripple.touched&&!e[st]){if(e[st]=!0,ct(e))a._ripple.touched=!0,a._ripple.isTouch=!0;else if(a._ripple.isTouch)return;if(t.center=a._ripple.centered||dt(e),a._ripple.class&&(t.class=a._ripple.class),ct(e)){if(a._ripple.showTimerCommit)return;a._ripple.showTimerCommit=()=>{vt.show(e,a,t)},a._ripple.showTimer=window.setTimeout((()=>{var e;(null==(e=null==a?void 0:a._ripple)?void 0:e.showTimerCommit)&&(a._ripple.showTimerCommit(),a._ripple.showTimerCommit=null)}),it)}else vt.show(e,a,t)}}function mt(e){e[st]=!0}function ft(e){const t=e.currentTarget;if(null==t?void 0:t._ripple){if(window.clearTimeout(t._ripple.showTimer),"touchend"===e.type&&t._ripple.showTimerCommit)return t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,void(t._ripple.showTimer=window.setTimeout((()=>{ft(e)})));window.setTimeout((()=>{t._ripple&&(t._ripple.touched=!1)})),vt.hide(t)}}function ht(e){const t=e.currentTarget;(null==t?void 0:t._ripple)&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let bt=!1;function yt(e){bt||e.keyCode!==K.enter&&e.keyCode!==K.space||(bt=!0,gt(e))}function _t(e){bt=!1,ft(e)}function St(e){bt&&(bt=!1,ft(e))}function Ct(e,t,a){const{value:l,modifiers:n}=t,r=pt(l);if(r||vt.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=r,e._ripple.centered=n.center,e._ripple.circle=n.circle,J(l)&&l.class&&(e._ripple.class=l.class),r&&!a){if(n.stop)return e.addEventListener("touchstart",mt,{passive:!0}),void e.addEventListener("mousedown",mt);e.addEventListener("touchstart",gt,{passive:!0}),e.addEventListener("touchend",ft,{passive:!0}),e.addEventListener("touchmove",ht,{passive:!0}),e.addEventListener("touchcancel",ft),e.addEventListener("mousedown",gt),e.addEventListener("mouseup",ft),e.addEventListener("mouseleave",ft),e.addEventListener("keydown",yt),e.addEventListener("keyup",_t),e.addEventListener("blur",St),e.addEventListener("dragstart",ft,{passive:!0})}else!r&&a&&wt(e)}function wt(e){e.removeEventListener("mousedown",gt),e.removeEventListener("touchstart",gt),e.removeEventListener("touchend",ft),e.removeEventListener("touchmove",ht),e.removeEventListener("touchcancel",ft),e.removeEventListener("mouseup",ft),e.removeEventListener("mouseleave",ft),e.removeEventListener("keydown",yt),e.removeEventListener("keyup",_t),e.removeEventListener("dragstart",ft),e.removeEventListener("blur",St)}const xt={mounted:function(e,t){Ct(e,t,!1)},unmounted:function(e){delete e._ripple,wt(e)},updated:function(e,t){if(t.value===t.oldValue)return;Ct(e,t,pt(t.oldValue))}};export{te as A,ae as B,le as C,ne as D,at as E,ot as F,Ke as G,Qe as H,Ee as I,oe as J,Ye as K,Ge as L,Le as M,et as N,De as O,tt as P,Be as Q,xt as R,Xe as S,ee as T,be as V,ie as a,ze as b,Ve as c,ve as d,pe as e,ke as f,ye as g,_e as h,Ie as i,Ae as j,Fe as k,we as l,re as m,nt as n,me as o,Pe as p,je as q,qe as r,xe as s,fe as t,se as u,lt as v,Re as w,ce as x,We as y,Z as z};