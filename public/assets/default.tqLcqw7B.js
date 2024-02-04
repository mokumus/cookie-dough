import{h as e,aN as t,v as l,K as a,aO as o,am as s,W as n,ad as i,aM as r,aP as u,au as v,aL as d,O as c,P as p,N as m,i as h,b as f,aS as y,ay as g,s as b,q as S,m as x,X as w,j as _,aB as I,u as B,aT as C,B as V,aK as T,aC as $,aU as k,ax as L,L as A,_ as N,k as H,o as R,f as z,w as M,d as E,t as F,a as j,c as q,F as O,r as P,aa as Q}from"./entry.s3HTkqTe.js";import{c as U,V as W}from"./VBtn.4egT7Eqy.js";import{m as D,a as Y,u as K,o as X,q as Z,c as G,F as J,w as ee,y as te,h as le,j as ae,n as oe,D as se,V as ne}from"./VContainer.z8SQNJon.js";const ie=Symbol.for("vuetify:layout"),re=Symbol.for("vuetify:layout-item"),ue=e({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),ve=e({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function de(e){const a=t(ie);if(!a)throw new Error("[Vuetify] Could not find injected layout");const o=e.id??`layout-item-${d()}`,i=s("useLayoutItem");r(re,{id:o});const u=n(!1);c((()=>u.value=!0)),p((()=>u.value=!1));const{layoutItemStyles:v,layoutItemScrimStyles:h}=a.register(i,{...e,active:l((()=>!u.value&&e.active.value)),id:o});return m((()=>a.unregister(o))),{layoutItemStyles:v,layoutRect:a.layoutRect,layoutItemScrimStyles:h}}function ce(e){const d=t(ie,null),c=l((()=>d?d.rootZIndex.value-100:1e3)),p=a([]),m=o(new Map),h=o(new Map),f=o(new Map),y=o(new Map),g=o(new Map),{resizeRef:b,contentRect:S}=U(),x=l((()=>{const t=new Map,l=e.overlaps??[];for(const e of l.filter((e=>e.includes(":")))){const[l,a]=e.split(":");if(!p.value.includes(l)||!p.value.includes(a))continue;const o=m.get(l),s=m.get(a),n=h.get(l),i=h.get(a);o&&s&&n&&i&&(t.set(a,{position:o.value,amount:parseInt(n.value,10)}),t.set(l,{position:s.value,amount:-parseInt(i.value,10)}))}return t})),w=l((()=>{const e=[...new Set([...f.values()].map((e=>e.value)))].sort(((e,t)=>e-t)),t=[];for(const l of e){const e=p.value.filter((e=>{var t;return(null==(t=f.get(e))?void 0:t.value)===l}));t.push(...e)}return((e,t,l,a)=>{let o={top:0,left:0,right:0,bottom:0};const s=[{id:"",layer:{...o}}];for(const n of e){const e=t.get(n),i=l.get(n),r=a.get(n);if(!e||!i||!r)continue;const u={...o,[e.value]:parseInt(o[e.value],10)+(r.value?parseInt(i.value,10):0)};s.push({id:n,layer:u}),o=u}return s})(t,m,h,y)})),_=l((()=>!Array.from(g.values()).some((e=>e.value)))),I=l((()=>w.value[w.value.length-1].layer)),B=l((()=>({"--v-layout-left":v(I.value.left),"--v-layout-right":v(I.value.right),"--v-layout-top":v(I.value.top),"--v-layout-bottom":v(I.value.bottom),..._.value?void 0:{transition:"none"}}))),C=l((()=>w.value.slice(1).map(((e,t)=>{let{id:l}=e;const{layer:a}=w.value[t],o=h.get(l),s=m.get(l);return{id:l,...a,size:Number(o.value),position:s.value}})))),V=e=>C.value.find((t=>t.id===e)),T=s("createLayout"),$=n(!1);i((()=>{$.value=!0})),r(ie,{register:(e,t)=>{let{id:a,order:o,position:s,layoutSize:n,elementSize:i,active:r,disableTransitions:v,absolute:d}=t;f.set(a,o),m.set(a,s),h.set(a,n),y.set(a,r),v&&g.set(a,v);const b=u(re,null==T?void 0:T.vnode).indexOf(e);b>-1?p.value.splice(b,0,a):p.value.push(a);const S=l((()=>C.value.findIndex((e=>e.id===a)))),I=l((()=>c.value+2*w.value.length-2*S.value));return{layoutItemStyles:l((()=>{const e="left"===s.value||"right"===s.value,t="right"===s.value,l="bottom"===s.value,o={[s.value]:0,zIndex:I.value,transform:`translate${e?"X":"Y"}(${(r.value?0:-110)*(t||l?-1:1)}%)`,position:d.value||1e3!==c.value?"absolute":"fixed",..._.value?void 0:{transition:"none"}};if(!$.value)return o;const n=C.value[S.value];if(!n)throw new Error(`[Vuetify] Could not find layout item "${a}"`);const u=x.value.get(a);return u&&(n[u.position]+=u.amount),{...o,height:e?`calc(100% - ${n.top}px - ${n.bottom}px)`:i.value?`${i.value}px`:void 0,left:t?void 0:`${n.left}px`,right:t?`${n.right}px`:void 0,top:"bottom"!==s.value?`${n.top}px`:void 0,bottom:"top"!==s.value?`${n.bottom}px`:void 0,width:e?i.value?`${i.value}px`:void 0:`calc(100% - ${n.left}px - ${n.right}px)`}})),layoutItemScrimStyles:l((()=>({zIndex:I.value-1}))),zIndex:I}},unregister:e=>{f.delete(e),m.delete(e),h.delete(e),y.delete(e),g.delete(e),p.value=p.value.filter((t=>t!==e))},mainRect:I,mainStyles:B,getLayoutItem:V,items:C,layoutRect:S,rootZIndex:c});return{layoutClasses:l((()=>["v-layout",{"v-layout--full-height":e.fullHeight}])),layoutStyles:l((()=>({zIndex:d?c.value:void 0,position:d?"relative":void 0,overflow:d?"hidden":void 0}))),getLayoutItem:V,items:C,layoutRect:S,layoutRef:b}}const pe=e({text:String,...D(),...Y()},"VToolbarTitle"),me=h()({name:"VToolbarTitle",props:pe(),setup(e,t){let{slots:l}=t;return K((()=>{const t=!!(l.default||l.text||e.text);return f(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var a;return[t&&f("div",{class:"v-toolbar-title__placeholder"},[l.text?l.text():e.text,null==(a=l.default)?void 0:a.call(l)])]}})})),{}}}),he=e({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function fe(e,t,l){return h()({name:e,props:he({mode:l,origin:t}),setup(t,l){let{slots:a}=l;const o={onBeforeEnter(e){t.origin&&(e.style.transformOrigin=t.origin)},onLeave(e){if(t.leaveAbsolute){const{offsetTop:t,offsetLeft:l,offsetWidth:a,offsetHeight:o}=e;e._transitionInitialStyles={position:e.style.position,top:e.style.top,left:e.style.left,width:e.style.width,height:e.style.height},e.style.position="absolute",e.style.top=`${t}px`,e.style.left=`${l}px`,e.style.width=`${a}px`,e.style.height=`${o}px`}t.hideOnLeave&&e.style.setProperty("display","none","important")},onAfterLeave(e){if(t.leaveAbsolute&&(null==e?void 0:e._transitionInitialStyles)){const{position:t,top:l,left:a,width:o,height:s}=e._transitionInitialStyles;delete e._transitionInitialStyles,e.style.position=t||"",e.style.top=l||"",e.style.left=a||"",e.style.width=o||"",e.style.height=s||""}}};return()=>{const l=t.group?y:g;return b(l,{name:t.disabled?"":e,css:!t.disabled,...t.group?void 0:{mode:t.mode},...t.disabled?{}:o},a.default)}}})}function ye(e,t){let l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out";return h()({name:e,props:{mode:{type:String,default:l},disabled:Boolean},setup(l,a){let{slots:o}=a;return()=>b(g,{name:l.disabled?"":e,css:!l.disabled,...l.disabled?{}:t},o.default)}})}function ge(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]?"width":"height",l=S(`offset-${t}`);return{onBeforeEnter(e){e._parent=e.parentNode,e._initialStyle={transition:e.style.transition,overflow:e.style.overflow,[t]:e.style[t]}},onEnter(a){const o=a._initialStyle;a.style.setProperty("transition","none","important"),a.style.overflow="hidden";const s=`${a[l]}px`;a.style[t]="0",a.offsetHeight,a.style.transition=o.transition,e&&a._parent&&a._parent.classList.add(e),requestAnimationFrame((()=>{a.style[t]=s}))},onAfterEnter:o,onEnterCancelled:o,onLeave(e){e._initialStyle={transition:"",overflow:e.style.overflow,[t]:e.style[t]},e.style.overflow="hidden",e.style[t]=`${e[l]}px`,e.offsetHeight,requestAnimationFrame((()=>e.style[t]="0"))},onAfterLeave:a,onLeaveCancelled:a};function a(t){e&&t._parent&&t._parent.classList.remove(e),o(t)}function o(e){const l=e._initialStyle[t];e.style.overflow=e._initialStyle.overflow,null!=l&&(e.style[t]=l),delete e._initialStyle}}fe("fab-transition","center center","out-in"),fe("dialog-bottom-transition"),fe("dialog-top-transition"),fe("fade-transition"),fe("scale-transition"),fe("scroll-x-transition"),fe("scroll-x-reverse-transition"),fe("scroll-y-transition"),fe("scroll-y-reverse-transition"),fe("slide-x-transition"),fe("slide-x-reverse-transition"),fe("slide-y-transition"),fe("slide-y-reverse-transition");const be=ye("expand-transition",ge());ye("expand-x-transition",ge("",!0));const Se=[null,"prominent","default","comfortable","compact"],xe=e({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Se.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...X(),...D(),...Z(),...G(),...Y({tag:"header"}),...x()},"VToolbar"),we=h()({name:"VToolbar",props:xe(),setup(e,t){var a;let{slots:o}=t;const{backgroundColorClasses:s,backgroundColorStyles:i}=J(w(e,"color")),{borderClasses:r}=ee(e),{elevationClasses:u}=te(e),{roundedClasses:d}=le(e),{themeClasses:c}=_(e),{rtlClasses:p}=I(),m=n(!(!e.extended&&!(null==(a=o.extension)?void 0:a.call(o)))),h=l((()=>parseInt(Number(e.height)+("prominent"===e.density?Number(e.height):0)-("comfortable"===e.density?8:0)-("compact"===e.density?16:0),10))),y=l((()=>m.value?parseInt(Number(e.extensionHeight)+("prominent"===e.density?Number(e.extensionHeight):0)-("comfortable"===e.density?4:0)-("compact"===e.density?8:0),10):0));return B({VBtn:{variant:"text"}}),K((()=>{var t;const l=!(!e.title&&!o.title),a=!(!o.image&&!e.image),n=null==(t=o.extension)?void 0:t.call(o);return m.value=!(!e.extended&&!n),f(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},s.value,r.value,u.value,d.value,c.value,p.value,e.class],style:[i.value,e.style]},{default:()=>[a&&f("div",{key:"image",class:"v-toolbar__image"},[o.image?f(oe,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},o.image):f(ae,{key:"image-img",cover:!0,src:e.image},null)]),f(oe,{defaults:{VTabs:{height:v(h.value)}}},{default:()=>{var t,a,s;return[f("div",{class:"v-toolbar__content",style:{height:v(h.value)}},[o.prepend&&f("div",{class:"v-toolbar__prepend"},[null==(t=o.prepend)?void 0:t.call(o)]),l&&f(me,{key:"title",text:e.title},{text:o.title}),null==(a=o.default)?void 0:a.call(o),o.append&&f("div",{class:"v-toolbar__append"},[null==(s=o.append)?void 0:s.call(o)])])]}}),f(oe,{defaults:{VTabs:{height:v(y.value)}}},{default:()=>[f(be,null,{default:()=>[m.value&&f("div",{class:"v-toolbar__extension",style:{height:v(y.value)}},[n])]})]})]})})),{contentHeight:h,extensionHeight:y}}}),_e=e({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Ie(){const e=n(!1);i((()=>{window.requestAnimationFrame((()=>{e.value=!0}))}));return{ssrBootStyles:l((()=>e.value?void 0:{transition:"none !important"})),isBooted:T(e)}}const Be=e({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...xe(),...ve(),..._e(),height:{type:[Number,String],default:64}},"VAppBar"),Ce=h()({name:"VAppBar",props:Be(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:o}=t;const s=a(),r=$(e,"modelValue"),u=l((()=>{var t;const l=new Set((null==(t=e.scrollBehavior)?void 0:t.split(" "))??[]);return{hide:l.has("hide"),inverted:l.has("inverted"),collapse:l.has("collapse"),elevate:l.has("elevate"),fadeImage:l.has("fade-image")}})),v=l((()=>{const e=u.value;return e.hide||e.inverted||e.collapse||e.elevate||e.fadeImage||!r.value})),{currentScroll:d,scrollThreshold:c,isScrollingUp:p,scrollRatio:h}=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{canScroll:o}=t;let s=0;const r=a(null),u=n(0),v=n(0),d=n(0),c=n(!1),p=n(!1),h=l((()=>Number(e.scrollThreshold))),f=l((()=>C((h.value-u.value)/h.value||0))),y=()=>{const e=r.value;!e||o&&!o.value||(s=u.value,u.value="window"in e?e.pageYOffset:e.scrollTop,p.value=u.value<s,d.value=Math.abs(u.value-h.value))};return V(p,(()=>{v.value=v.value||u.value})),V(c,(()=>{v.value=0})),i((()=>{V((()=>e.scrollTarget),(e=>{var t;const l=e?document.querySelector(e):window;l&&l!==r.value&&(null==(t=r.value)||t.removeEventListener("scroll",y),r.value=l,r.value.addEventListener("scroll",y,{passive:!0}))}),{immediate:!0})})),m((()=>{var e;null==(e=r.value)||e.removeEventListener("scroll",y)})),o&&V(o,y,{immediate:!0}),{scrollThreshold:h,currentScroll:u,currentThreshold:d,isScrollActive:c,scrollRatio:f,isScrollingUp:p,savedScroll:v}}(e,{canScroll:v}),y=l((()=>e.collapse||u.value.collapse&&(u.value.inverted?h.value>0:0===h.value))),g=l((()=>e.flat||u.value.elevate&&(u.value.inverted?d.value>0:0===d.value))),b=l((()=>u.value.fadeImage?u.value.inverted?1-h.value:h.value:void 0)),S=l((()=>{var e,t;if(u.value.hide&&u.value.inverted)return 0;return((null==(e=s.value)?void 0:e.contentHeight)??0)+((null==(t=s.value)?void 0:t.extensionHeight)??0)}));k(l((()=>!!e.scrollBehavior)),(()=>{A((()=>{u.value.hide?u.value.inverted?r.value=d.value>c.value:r.value=p.value||d.value<c.value:r.value=!0}))}));const{ssrBootStyles:x}=Ie(),{layoutItemStyles:_}=de({id:e.name,order:l((()=>parseInt(e.order,10))),position:w(e,"location"),layoutSize:S,elementSize:n(void 0),active:r,absolute:w(e,"absolute")});return K((()=>{const t=we.filterProps(e);return f(we,L({ref:s,class:["v-app-bar",{"v-app-bar--bottom":"bottom"===e.location},e.class],style:[{..._.value,"--v-toolbar-image-opacity":b.value,height:void 0,...x.value},e.style]},t,{collapse:y.value,flat:g.value}),o)})),{}}}),Ve=h()({name:"VAppBarTitle",props:pe(),setup(e,t){let{slots:l}=t;return K((()=>f(me,L(e,{class:"v-app-bar-title"}),l))),{}}});const Te=N(H({props:{theme:{type:String,required:!0}}}),[["render",function(e,t,l,a,o,s){return R(),z(Ce,{elevation:2,app:"",density:"compact",absolute:"",color:"primary"},{prepend:M((()=>[f(W,{variant:"tonal",to:"/"},{default:M((()=>[E("Ana Sayfa")])),_:1})])),append:M((()=>[f(W,{icon:"light"===e.theme?"mdi-weather-sunny":"mdi-weather-night",onClick:t[0]||(t[0]=t=>e.$emit("updateTheme"))},null,8,["icon"])])),default:M((()=>[f(Ve,{class:"font-weight-bold"},{default:M((()=>[E(F(e.$t("title")),1)])),_:1})])),_:1})}]]),$e=e({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...D(),...x()},"VDivider"),ke=h()({name:"VDivider",props:$e(),setup(e,t){let{attrs:a}=t;const{themeClasses:o}=_(e),{textColorClasses:s,textColorStyles:n}=se(w(e,"color")),i=l((()=>{const t={};return e.length&&(t[e.vertical?"maxHeight":"maxWidth"]=v(e.length)),e.thickness&&(t[e.vertical?"borderRightWidth":"borderTopWidth"]=v(e.thickness)),t}));return K((()=>f("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},o.value,s.value,e.class],style:[i.value,n.value,e.style],"aria-orientation":a.role&&"separator"!==a.role?void 0:e.vertical?"vertical":"horizontal",role:`${a.role||"separator"}`},null))),{}}}),Le=e({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...X(),...D(),...Z(),...ve(),...G(),...Y({tag:"footer"}),...x()},"VFooter"),Ae=h()({name:"VFooter",props:Le(),setup(e,t){let{slots:a}=t;const{themeClasses:o}=_(e),{backgroundColorClasses:s,backgroundColorStyles:i}=J(w(e,"color")),{borderClasses:r}=ee(e),{elevationClasses:u}=te(e),{roundedClasses:d}=le(e),c=n(32),{resizeRef:p}=U((e=>{e.length&&(c.value=e[0].target.clientHeight)})),m=l((()=>"auto"===e.height?c.value:parseInt(e.height,10))),{layoutItemStyles:h}=de({id:e.name,order:l((()=>parseInt(e.order,10))),position:l((()=>"bottom")),layoutSize:m,elementSize:l((()=>"auto"===e.height?void 0:m.value)),active:l((()=>e.app)),absolute:w(e,"absolute")});return K((()=>f(e.tag,{ref:p,class:["v-footer",o.value,s.value,r.value,u.value,d.value,e.class],style:[i.value,e.app?h.value:{height:v(e.height)},e.style]},a))),{}}}),Ne={data:()=>({items:[{icon:"mdi-linkedin",href:"https://www.linkedin.com/in/muhammed-okumu%C5%9F-26b5b71aa/"},{icon:"mdi-github",href:"https://github.com/mokumus/cookie-dough"}],randomQuote:null}),mounted(){this.randomQuote=this.fetchQuote()},methods:{async fetchQuote(){const e=await fetch("https://api.quotable.io/random");this.randomQuote=await e.json()}}},He=j("strong",null,"mokumus",-1);const Re=N(Ne,[["render",function(e,t,l,a,o,s){return R(),z(Ae,{class:"text-center d-flex flex-column",app:"",absolute:"",color:"primary"},{default:M((()=>[j("div",null,[(R(!0),q(O,null,P(e.items,(e=>(R(),z(W,{key:e.icon,class:"mx-4",icon:e.icon,variant:"text",href:e.href,target:"_blank"},null,8,["icon","href"])))),128))]),f(ke),j("div",null,[E(F((new Date).getFullYear())+" — ",1),He])])),_:1})}]]),ze=e({...D(),...ue({fullHeight:!0}),...x()},"VApp"),Me=h()({name:"VApp",props:ze(),setup(e,t){let{slots:l}=t;const a=_(e),{layoutClasses:o,getLayoutItem:s,items:n,layoutRef:i}=ce(e),{rtlClasses:r}=I();return K((()=>{var t;return f("div",{ref:i,class:["v-application",a.themeClasses.value,o.value,r.value,e.class],style:[e.style]},[f("div",{class:"v-application__wrap"},[null==(t=l.default)?void 0:t.call(l)])])})),{getLayoutItem:s,items:n,theme:a}}}),Ee=e({scrollable:Boolean,...D(),...Y({tag:"main"})},"VMain"),Fe=h()({name:"VMain",props:Ee(),setup(e,l){let{slots:a}=l;const{mainStyles:o}=function(){const e=t(ie);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}(),{ssrBootStyles:s}=Ie();return K((()=>f(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[o.value,s.value,e.style]},{default:()=>{var t,l;return[e.scrollable?f("div",{class:"v-main__scroller"},[null==(t=a.default)?void 0:t.call(a)]):null==(l=a.default)?void 0:l.call(a)]}}))),{}}});const je=N(H({data:()=>({theme:"light"}),mounted(){window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(this.theme="dark")},methods:{updateTheme(){this.theme="light"===this.theme?"dark":"light"}}}),[["render",function(e,t,l,a,o,s){const n=Te,i=Re;return R(),z(Me,{theme:e.theme},{default:M((()=>[f(n,{theme:e.theme,onUpdateTheme:e.updateTheme},null,8,["theme","onUpdateTheme"]),f(Fe,null,{default:M((()=>[f(ne,null,{default:M((()=>[Q(e.$slots,"default")])),_:3})])),_:3}),f(i)])),_:3},8,["theme"])}]]);export{je as default};
