import{m as e,u as t,a,J as l,b as n,y as s,V as r,x as i,j as d,g as o,k as p,G as u,K as c,N as v,l as y,n as f,i as g,R as m,p as b,q as S,c as C,h as k,r as I,H as A,O as V,P as h,s as j,v as x,Q as N,L as $,w}from"./CDddlprc.js";import{h as B,A as O,b as _,g as L,I as R,F as G,m as q,i as E,x as H,H as J,J as T,ao as F,ap as K,aq as P}from"./UZsxL62c.js";const Q=B()({name:"VCardActions",props:e(),setup(e,a){let{slots:l}=a;return O({VBtn:{slim:!0,variant:"text"}}),t((()=>{var t;return _("div",{class:["v-card-actions",e.class],style:e.style},[null==(t=l.default)?void 0:t.call(l)])})),{}}}),W=L({opacity:[Number,String],...e(),...a()},"VCardSubtitle"),z=B()({name:"VCardSubtitle",props:W(),setup(e,a){let{slots:l}=a;return t((()=>_(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},l))),{}}}),D=l("v-card-title"),M=L({appendAvatar:String,appendIcon:R,prependAvatar:String,prependIcon:R,subtitle:[String,Number],title:[String,Number],...e(),...n()},"VCardItem"),U=B()({name:"VCardItem",props:M(),setup(e,a){let{slots:l}=a;return t((()=>{var t;const a=!(!e.prependAvatar&&!e.prependIcon),n=!(!a&&!l.prepend),d=!(!e.appendAvatar&&!e.appendIcon),o=!(!d&&!l.append),p=!(null==e.title&&!l.title),u=!(null==e.subtitle&&!l.subtitle);return _("div",{class:["v-card-item",e.class],style:e.style},[n&&_("div",{key:"prepend",class:"v-card-item__prepend"},[l.prepend?_(i,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},l.prepend):_(G,null,[e.prependAvatar&&_(s,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&_(r,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),_("div",{class:"v-card-item__content"},[p&&_(D,{key:"title"},{default:()=>{var t;return[(null==(t=l.title)?void 0:t.call(l))??e.title]}}),u&&_(z,{key:"subtitle"},{default:()=>{var t;return[(null==(t=l.subtitle)?void 0:t.call(l))??e.subtitle]}}),null==(t=l.default)?void 0:t.call(l)]),o&&_("div",{key:"append",class:"v-card-item__append"},[l.append?_(i,{key:"append-defaults",disabled:!d,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},l.append):_(G,null,[e.appendIcon&&_(r,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&_(s,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])})),{}}}),X=L({opacity:[Number,String],...e(),...a()},"VCardText"),Y=B()({name:"VCardText",props:X(),setup(e,a){let{slots:l}=a;return t((()=>_(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},l))),{}}}),Z=L({appendAvatar:String,appendIcon:R,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:R,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...d(),...e(),...n(),...o(),...p(),...u(),...c(),...v(),...y(),...f(),...a(),...q(),...g({variant:"elevated"})},"VCard"),ee=B()({name:"VCard",directives:{Ripple:m},props:Z(),setup(e,a){let{attrs:l,slots:n}=a;const{themeClasses:s}=E(e),{borderClasses:r}=b(e),{colorClasses:d,colorStyles:o,variantClasses:p}=S(e),{densityClasses:u}=C(e),{dimensionStyles:c}=k(e),{elevationClasses:v}=I(e),{loaderClasses:y}=A(e),{locationStyles:f}=V(e),{positionClasses:g}=h(e),{roundedClasses:m}=j(e),B=x(e,l),O=H((()=>!1!==e.link&&B.isLink.value)),L=H((()=>!e.disabled&&!1!==e.link&&(e.link||B.isClickable.value)));return t((()=>{const t=O.value?"a":e.tag,a=!(!n.title&&null==e.title),l=!(!n.subtitle&&null==e.subtitle),b=a||l,S=!!(n.append||e.appendAvatar||e.appendIcon),C=!!(n.prepend||e.prependAvatar||e.prependIcon),k=!(!n.image&&!e.image),I=b||C||S,A=!(!n.text&&null==e.text);return J(_(t,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":L.value},s.value,r.value,d.value,u.value,v.value,y.value,g.value,m.value,p.value,e.class],style:[o.value,c.value,f.value,e.style],href:B.href.value,onClick:L.value&&B.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var t;return[k&&_("div",{key:"image",class:"v-card__image"},[n.image?_(i,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},n.image):_(N,{key:"image-img",cover:!0,src:e.image},null)]),_($,{name:"v-card",active:!!e.loading,color:"boolean"==typeof e.loading?void 0:e.loading},{default:n.loader}),I&&_(U,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:n.item,prepend:n.prepend,title:n.title,subtitle:n.subtitle,append:n.append}),A&&_(Y,{key:"text"},{default:()=>{var t;return[(null==(t=n.text)?void 0:t.call(n))??e.text]}}),null==(t=n.default)?void 0:t.call(n),n.actions&&_(Q,null,{default:n.actions}),w(L.value,"v-card")]}}),[[T("ripple"),L.value&&e.ripple]])})),{}}}),te=F.reduce(((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e)),{}),ae=F.reduce(((e,t)=>(e["offset"+K(t)]={type:[String,Number],default:null},e)),{}),le=F.reduce(((e,t)=>(e["order"+K(t)]={type:[String,Number],default:null},e)),{}),ne={col:Object.keys(te),offset:Object.keys(ae),order:Object.keys(le)};function se(e,t,a){let l=e;if(null!=a&&!1!==a){if(t){l+=`-${t.replace(e,"")}`}return"col"===e&&(l="v-"+l),"col"!==e||""!==a&&!0!==a?(l+=`-${a}`,l.toLowerCase()):l.toLowerCase()}}const re=["auto","start","end","center","baseline","stretch"],ie=L({cols:{type:[Boolean,String,Number],default:!1},...te,offset:{type:[String,Number],default:null},...ae,order:{type:[String,Number],default:null},...le,alignSelf:{type:String,default:null,validator:e=>re.includes(e)},...e(),...a()},"VCol"),de=B()({name:"VCol",props:ie(),setup(e,t){let{slots:a}=t;const l=H((()=>{const t=[];let a;for(a in ne)ne[a].forEach((l=>{const n=e[l],s=se(a,l,n);s&&t.push(s)}));const l=t.some((e=>e.startsWith("v-col-")));return t.push({"v-col":!l||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),t}));return()=>{var t;return P(e.tag,{class:[l.value,e.class],style:e.style},null==(t=a.default)?void 0:t.call(a))}}}),oe=["start","end","center"],pe=["space-between","space-around","space-evenly"];function ue(e,t){return F.reduce(((a,l)=>(a[e+K(l)]=t(),a)),{})}const ce=[...oe,"baseline","stretch"],ve=e=>ce.includes(e),ye=ue("align",(()=>({type:String,default:null,validator:ve}))),fe=[...oe,...pe],ge=e=>fe.includes(e),me=ue("justify",(()=>({type:String,default:null,validator:ge}))),be=[...oe,...pe,"stretch"],Se=e=>be.includes(e),Ce=ue("alignContent",(()=>({type:String,default:null,validator:Se}))),ke={align:Object.keys(ye),justify:Object.keys(me),alignContent:Object.keys(Ce)},Ie={align:"align",justify:"justify",alignContent:"align-content"};function Ae(e,t,a){let l=Ie[e];if(null!=a){if(t){l+=`-${t.replace(e,"")}`}return l+=`-${a}`,l.toLowerCase()}}const Ve=L({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:ve},...ye,justify:{type:String,default:null,validator:ge},...me,alignContent:{type:String,default:null,validator:Se},...Ce,...e(),...a()},"VRow"),he=B()({name:"VRow",props:Ve(),setup(e,t){let{slots:a}=t;const l=H((()=>{const t=[];let a;for(a in ke)ke[a].forEach((l=>{const n=e[l],s=Ae(a,l,n);s&&t.push(s)}));return t.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),t}));return()=>{var t;return P(e.tag,{class:["v-row",l.value,e.class],style:e.style},null==(t=a.default)?void 0:t.call(a))}}});export{Y as V,ee as a,he as b,de as c,D as d,z as e,Q as f};