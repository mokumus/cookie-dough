import{g as e,K as t,x as l,D as a,ag as o,a5 as s,C as u,V as n,y as r,bh as i,ab as v,v as d,aA as c,aB as m,U as p,h,b as f,m as g,B as y,i as b,Y as S,A as x,a2 as I,X as w,u as V,W as C,ac as _,q as T,_ as k,j as B,o as $,f as R,w as z,d as H,t as N,a as A,c as L,F as M,r as j,aV as U,aU as E}from"./EutKKzJP.js";import{V as F}from"./Cv-cSm91.js";import{m as q,a as Y,u as D,h as O,i as Q,j as X,e as Z,n as K,p as P,q as W,H as G,v as J}from"./BtpHT14_.js";import{c as ee,u as te,d as le}from"./DA49uXWe.js";import{c as ae}from"./BtwYjHKx.js";import{V as oe}from"./BP1sIroA.js";const se=Symbol.for("vuetify:layout"),ue=Symbol.for("vuetify:layout-item"),ne=e({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),re=e({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function ie(e){const a=t(se);if(!a)throw new Error("[Vuetify] Could not find injected layout");const o=e.id??`layout-item-${d()}`,n=s("useLayoutItem");r(ue,{id:o});const i=u(!1);c((()=>i.value=!0)),m((()=>i.value=!1));const{layoutItemStyles:v,layoutItemScrimStyles:h}=a.register(n,{...e,active:l((()=>!i.value&&e.active.value)),id:o});return p((()=>a.unregister(o))),{layoutItemStyles:v,layoutRect:a.layoutRect,layoutItemScrimStyles:h}}function ve(e){const d=t(se,null),c=l((()=>d?d.rootZIndex.value-100:1e3)),m=a([]),p=o(new Map),h=o(new Map),f=o(new Map),g=o(new Map),y=o(new Map),{resizeRef:b,contentRect:S}=ae(),x=l((()=>{const t=new Map,l=e.overlaps??[];for(const e of l.filter((e=>e.includes(":")))){const[l,a]=e.split(":");if(!m.value.includes(l)||!m.value.includes(a))continue;const o=p.get(l),s=p.get(a),u=h.get(l),n=h.get(a);o&&s&&u&&n&&(t.set(a,{position:o.value,amount:parseInt(u.value,10)}),t.set(l,{position:s.value,amount:-parseInt(n.value,10)}))}return t})),I=l((()=>{const e=[...new Set([...f.values()].map((e=>e.value)))].sort(((e,t)=>e-t)),t=[];for(const l of e){const e=m.value.filter((e=>{var t;return(null==(t=f.get(e))?void 0:t.value)===l}));t.push(...e)}return((e,t,l,a)=>{let o={top:0,left:0,right:0,bottom:0};const s=[{id:"",layer:{...o}}];for(const u of e){const e=t.get(u),n=l.get(u),r=a.get(u);if(!e||!n||!r)continue;const i={...o,[e.value]:parseInt(o[e.value],10)+(r.value?parseInt(n.value,10):0)};s.push({id:u,layer:i}),o=i}return s})(t,p,h,g)})),w=l((()=>!Array.from(y.values()).some((e=>e.value)))),V=l((()=>I.value[I.value.length-1].layer)),C=l((()=>({"--v-layout-left":v(V.value.left),"--v-layout-right":v(V.value.right),"--v-layout-top":v(V.value.top),"--v-layout-bottom":v(V.value.bottom),...w.value?void 0:{transition:"none"}}))),_=l((()=>I.value.slice(1).map(((e,t)=>{let{id:l}=e;const{layer:a}=I.value[t],o=h.get(l),s=p.get(l);return{id:l,...a,size:Number(o.value),position:s.value}})))),T=e=>_.value.find((t=>t.id===e)),k=s("createLayout"),B=u(!1);n((()=>{B.value=!0})),r(se,{register:(e,t)=>{let{id:a,order:o,position:s,layoutSize:u,elementSize:n,active:r,disableTransitions:v,absolute:d}=t;f.set(a,o),p.set(a,s),h.set(a,u),g.set(a,r),v&&y.set(a,v);const b=i(ue,null==k?void 0:k.vnode).indexOf(e);b>-1?m.value.splice(b,0,a):m.value.push(a);const S=l((()=>_.value.findIndex((e=>e.id===a)))),V=l((()=>c.value+2*I.value.length-2*S.value));return{layoutItemStyles:l((()=>{const e="left"===s.value||"right"===s.value,t="right"===s.value,l="bottom"===s.value,o={[s.value]:0,zIndex:V.value,transform:`translate${e?"X":"Y"}(${(r.value?0:-110)*(t||l?-1:1)}%)`,position:d.value||1e3!==c.value?"absolute":"fixed",...w.value?void 0:{transition:"none"}};if(!B.value)return o;const u=_.value[S.value];if(!u)throw new Error(`[Vuetify] Could not find layout item "${a}"`);const i=x.value.get(a);return i&&(u[i.position]+=i.amount),{...o,height:e?`calc(100% - ${u.top}px - ${u.bottom}px)`:n.value?`${n.value}px`:void 0,left:t?void 0:`${u.left}px`,right:t?`${u.right}px`:void 0,top:"bottom"!==s.value?`${u.top}px`:void 0,bottom:"top"!==s.value?`${u.bottom}px`:void 0,width:e?n.value?`${n.value}px`:void 0:`calc(100% - ${u.left}px - ${u.right}px)`}})),layoutItemScrimStyles:l((()=>({zIndex:V.value-1}))),zIndex:V}},unregister:e=>{f.delete(e),p.delete(e),h.delete(e),g.delete(e),y.delete(e),m.value=m.value.filter((t=>t!==e))},mainRect:V,mainStyles:C,getLayoutItem:T,items:_,layoutRect:S,rootZIndex:c});return{layoutClasses:l((()=>["v-layout",{"v-layout--full-height":e.fullHeight}])),layoutStyles:l((()=>({zIndex:d?c.value:void 0,position:d?"relative":void 0,overflow:d?"hidden":void 0}))),getLayoutItem:T,items:_,layoutRect:S,layoutRef:b}}const de=e({text:String,...q(),...Y()},"VToolbarTitle"),ce=h()({name:"VToolbarTitle",props:de(),setup(e,t){let{slots:l}=t;return D((()=>{const t=!!(l.default||l.text||e.text);return f(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var a;return[t&&f("div",{class:"v-toolbar-title__placeholder"},[l.text?l.text():e.text,null==(a=l.default)?void 0:a.call(l)])]}})})),{}}}),me=[null,"prominent","default","comfortable","compact"],pe=e({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>me.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...O(),...q(),...Q(),...X(),...Y({tag:"header"}),...g()},"VToolbar"),he=h()({name:"VToolbar",props:pe(),setup(e,t){var a;let{slots:o}=t;const{backgroundColorClasses:s,backgroundColorStyles:n}=Z(y(e,"color")),{borderClasses:r}=K(e),{elevationClasses:i}=P(e),{roundedClasses:d}=W(e),{themeClasses:c}=b(e),{rtlClasses:m}=S(),p=u(!(!e.extended&&!(null==(a=o.extension)?void 0:a.call(o)))),h=l((()=>parseInt(Number(e.height)+("prominent"===e.density?Number(e.height):0)-("comfortable"===e.density?8:0)-("compact"===e.density?16:0),10))),g=l((()=>p.value?parseInt(Number(e.extensionHeight)+("prominent"===e.density?Number(e.extensionHeight):0)-("comfortable"===e.density?4:0)-("compact"===e.density?8:0),10):0));return x({VBtn:{variant:"text"}}),D((()=>{var t;const l=!(!e.title&&!o.title),a=!(!o.image&&!e.image),u=null==(t=o.extension)?void 0:t.call(o);return p.value=!(!e.extended&&!u),f(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},s.value,r.value,i.value,d.value,c.value,m.value,e.class],style:[n.value,e.style]},{default:()=>[a&&f("div",{key:"image",class:"v-toolbar__image"},[o.image?f(J,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},o.image):f(G,{key:"image-img",cover:!0,src:e.image},null)]),f(J,{defaults:{VTabs:{height:v(h.value)}}},{default:()=>{var t,a,s;return[f("div",{class:"v-toolbar__content",style:{height:v(h.value)}},[o.prepend&&f("div",{class:"v-toolbar__prepend"},[null==(t=o.prepend)?void 0:t.call(o)]),l&&f(ce,{key:"title",text:e.title},{text:o.title}),null==(a=o.default)?void 0:a.call(o),o.append&&f("div",{class:"v-toolbar__append"},[null==(s=o.append)?void 0:s.call(o)])])]}}),f(J,{defaults:{VTabs:{height:v(g.value)}}},{default:()=>[f(ee,null,{default:()=>[p.value&&f("div",{class:"v-toolbar__extension",style:{height:v(g.value)}},[u])]})]})]})})),{contentHeight:h,extensionHeight:g}}}),fe=e({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");const ge=e({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...pe(),...re(),...fe(),height:{type:[Number,String],default:64}},"VAppBar"),ye=h()({name:"VAppBar",props:ge(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:o}=t;const s=a(),r=V(e,"modelValue"),i=l((()=>{var t;const l=new Set((null==(t=e.scrollBehavior)?void 0:t.split(" "))??[]);return{hide:l.has("hide"),inverted:l.has("inverted"),collapse:l.has("collapse"),elevate:l.has("elevate"),fadeImage:l.has("fade-image")}})),v=l((()=>{const e=i.value;return e.hide||e.inverted||e.collapse||e.elevate||e.fadeImage||!r.value})),{currentScroll:d,scrollThreshold:c,isScrollingUp:m,scrollRatio:h}=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{canScroll:o}=t;let s=0;const r=a(null),i=u(0),v=u(0),d=u(0),c=u(!1),m=u(!1),h=l((()=>Number(e.scrollThreshold))),f=l((()=>I((h.value-i.value)/h.value||0))),g=()=>{const e=r.value;!e||o&&!o.value||(s=i.value,i.value="window"in e?e.pageYOffset:e.scrollTop,m.value=i.value<s,d.value=Math.abs(i.value-h.value))};return w(m,(()=>{v.value=v.value||i.value})),w(c,(()=>{v.value=0})),n((()=>{w((()=>e.scrollTarget),(e=>{var t;const l=e?document.querySelector(e):window;l&&l!==r.value&&(null==(t=r.value)||t.removeEventListener("scroll",g),r.value=l,r.value.addEventListener("scroll",g,{passive:!0}))}),{immediate:!0})})),p((()=>{var e;null==(e=r.value)||e.removeEventListener("scroll",g)})),o&&w(o,g,{immediate:!0}),{scrollThreshold:h,currentScroll:i,currentThreshold:d,isScrollActive:c,scrollRatio:f,isScrollingUp:m,savedScroll:v}}(e,{canScroll:v}),g=l((()=>e.collapse||i.value.collapse&&(i.value.inverted?h.value>0:0===h.value))),b=l((()=>e.flat||i.value.elevate&&(i.value.inverted?d.value>0:0===d.value))),S=l((()=>i.value.fadeImage?i.value.inverted?1-h.value:h.value:void 0)),x=l((()=>{var e,t;if(i.value.hide&&i.value.inverted)return 0;return((null==(e=s.value)?void 0:e.contentHeight)??0)+((null==(t=s.value)?void 0:t.extensionHeight)??0)}));C(l((()=>!!e.scrollBehavior)),(()=>{_((()=>{i.value.hide?i.value.inverted?r.value=d.value>c.value:r.value=m.value||d.value<c.value:r.value=!0}))}));const{ssrBootStyles:k}=te(),{layoutItemStyles:B}=ie({id:e.name,order:l((()=>parseInt(e.order,10))),position:y(e,"location"),layoutSize:x,elementSize:u(void 0),active:r,absolute:y(e,"absolute")});return D((()=>{const t=he.filterProps(e);return f(he,T({ref:s,class:["v-app-bar",{"v-app-bar--bottom":"bottom"===e.location},e.class],style:[{...B.value,"--v-toolbar-image-opacity":S.value,height:void 0,...k.value},e.style]},t,{collapse:g.value,flat:b.value}),o)})),{}}}),be=h()({name:"VAppBarTitle",props:de(),setup(e,t){let{slots:l}=t;return D((()=>f(ce,T(e,{class:"v-app-bar-title"}),l))),{}}});const Se=k(B({props:{theme:{type:String,required:!0}}}),[["render",function(e,t,l,a,o,s){return $(),R(ye,{elevation:2,app:"",density:"compact",absolute:"",color:"primary"},{prepend:z((()=>[f(F,{variant:"tonal",to:"/"},{default:z((()=>[H("Ana Sayfa")])),_:1})])),append:z((()=>[f(F,{icon:"light"===e.theme?"mdi-weather-sunny":"mdi-weather-night",onClick:t[0]||(t[0]=t=>e.$emit("updateTheme"))},null,8,["icon"])])),default:z((()=>[f(be,{class:"font-weight-bold"},{default:z((()=>[H(N(e.$t("title")),1)])),_:1})])),_:1})}]]),xe=e({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...O(),...q(),...Q(),...re(),...X(),...Y({tag:"footer"}),...g()},"VFooter"),Ie=h()({name:"VFooter",props:xe(),setup(e,t){let{slots:a}=t;const{themeClasses:o}=b(e),{backgroundColorClasses:s,backgroundColorStyles:n}=Z(y(e,"color")),{borderClasses:r}=K(e),{elevationClasses:i}=P(e),{roundedClasses:d}=W(e),c=u(32),{resizeRef:m}=ae((e=>{e.length&&(c.value=e[0].target.clientHeight)})),p=l((()=>"auto"===e.height?c.value:parseInt(e.height,10))),{layoutItemStyles:h}=ie({id:e.name,order:l((()=>parseInt(e.order,10))),position:l((()=>"bottom")),layoutSize:p,elementSize:l((()=>"auto"===e.height?void 0:p.value)),active:l((()=>e.app)),absolute:y(e,"absolute")});return D((()=>f(e.tag,{ref:m,class:["v-footer",o.value,s.value,r.value,i.value,d.value,e.class],style:[n.value,e.app?h.value:{height:v(e.height)},e.style]},a))),{}}}),we={data:()=>({items:[{icon:"mdi-linkedin",href:"https://www.linkedin.com/in/muhammed-okumu%C5%9F-26b5b71aa/"},{icon:"mdi-github",href:"https://github.com/mokumus/cookie-dough"}],randomQuote:null})},Ve=A("strong",null,"mokumus",-1);const Ce=k(we,[["render",function(e,t,l,a,o,s){return $(),R(Ie,{class:"text-center d-flex flex-column",app:"",absolute:"",color:"primary"},{default:z((()=>[A("div",null,[($(!0),L(M,null,j(e.items,(e=>($(),R(F,{key:e.icon,class:"mx-4",icon:e.icon,variant:"text",href:e.href,target:"_blank"},null,8,["icon","href"])))),128))]),f(le),A("div",null,[H(N((new Date).getFullYear())+" — ",1),Ve])])),_:1})}]]),_e=e({...q(),...ne({fullHeight:!0}),...g()},"VApp"),Te=h()({name:"VApp",props:_e(),setup(e,t){let{slots:l}=t;const a=b(e),{layoutClasses:o,getLayoutItem:s,items:u,layoutRef:n}=ve(e),{rtlClasses:r}=S();return D((()=>{var t;return f("div",{ref:n,class:["v-application",a.themeClasses.value,o.value,r.value,e.class],style:[e.style]},[f("div",{class:"v-application__wrap"},[null==(t=l.default)?void 0:t.call(l)])])})),{getLayoutItem:s,items:u,theme:a}}}),ke=e({scrollable:Boolean,...q(),...Y({tag:"main"})},"VMain"),Be=h()({name:"VMain",props:ke(),setup(e,l){let{slots:a}=l;const{mainStyles:o}=function(){const e=t(se);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}(),{ssrBootStyles:s}=te();return D((()=>f(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[o.value,s.value,e.style]},{default:()=>{var t,l;return[e.scrollable?f("div",{class:"v-main__scroller"},[null==(t=a.default)?void 0:t.call(a)]):null==(l=a.default)?void 0:l.call(a)]}}))),{}}});const $e=k(B({data:()=>({theme:"light"}),mounted(){window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(this.theme="dark")},methods:{updateTheme(){this.theme="light"===this.theme?"dark":"light"}}}),[["render",function(e,t,l,a,o,s){const u=Se,n=Ce;return $(),R(Te,{theme:e.theme},{default:z((()=>[f(u,{theme:e.theme,onUpdateTheme:e.updateTheme,style:U({background:e.$vuetify.theme.themes[e.theme].background})},null,8,["theme","onUpdateTheme","style"]),f(Be,null,{default:z((()=>[f(oe,null,{default:z((()=>[E(e.$slots,"default")])),_:3})])),_:3}),f(n)])),_:3},8,["theme"])}]]);export{$e as default};
