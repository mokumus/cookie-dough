import{m as e,u as a,b as t,c as l,d as n,a as s,e as r,f as i,g as d,h as o,i as u,j as p,k as c,l as v,n as y,o as f,p as g,q as m,r as b,s as C,t as S,v as k,R as A,w as I,x as h,y as V,z as j,A as x,B,C as N,L as $}from"./VContainer.SeKVYE8z.js";import{h as w,l as _,q as O,s as L,u as z,b as R,g as q,I as E,m as G,i as F,F as M,v as W,x as D,y as H,z as J}from"./entry.BKjk9qEO.js";function K(a){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"div",l=arguments.length>2?arguments[2]:void 0;return w()({name:l??_(O(a.replace(/__/g,"-"))),props:{tag:{type:String,default:t},...e()},setup(e,t){let{slots:l}=t;return()=>{var t;return L(e.tag,{class:[a,e.class],style:e.style},null==(t=l.default)?void 0:t.call(l))}}})}const P=w()({name:"VCardActions",props:e(),setup(e,t){let{slots:l}=t;return z({VBtn:{slim:!0,variant:"text"}}),a((()=>{var a;return R("div",{class:["v-card-actions",e.class],style:e.style},[null==(a=l.default)?void 0:a.call(l)])})),{}}}),Q=K("v-card-subtitle"),T=K("v-card-title"),U=q({start:Boolean,end:Boolean,icon:E,image:String,text:String,...e(),...t(),...l(),...n(),...s(),...G(),...r({variant:"flat"})},"VAvatar"),X=w()({name:"VAvatar",props:U(),setup(e,t){let{slots:l}=t;const{themeClasses:n}=F(e),{colorClasses:s,colorStyles:r,variantClasses:y}=i(e),{densityClasses:f}=d(e),{roundedClasses:g}=o(e),{sizeClasses:m,sizeStyles:b}=u(e);return a((()=>R(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},n.value,s.value,f.value,g.value,m.value,y.value,e.class],style:[r.value,b.value,e.style]},{default:()=>{var a;return[e.image?R(p,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?R(c,{key:"icon",icon:e.icon},null):(null==(a=l.default)?void 0:a.call(l))??e.text,v(!1,"v-avatar")]}}))),{}}}),Y=q({appendAvatar:String,appendIcon:E,prependAvatar:String,prependIcon:E,subtitle:[String,Number],title:[String,Number],...e(),...t()},"VCardItem"),Z=w()({name:"VCardItem",props:Y(),setup(e,t){let{slots:l}=t;return a((()=>{var a;const t=!(!e.prependAvatar&&!e.prependIcon),n=!(!t&&!l.prepend),s=!(!e.appendAvatar&&!e.appendIcon),r=!(!s&&!l.append),i=!(null==e.title&&!l.title),d=!(null==e.subtitle&&!l.subtitle);return R("div",{class:["v-card-item",e.class],style:e.style},[n&&R("div",{key:"prepend",class:"v-card-item__prepend"},[l.prepend?R(y,{key:"prepend-defaults",disabled:!t,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},l.prepend):R(M,null,[e.prependAvatar&&R(X,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&R(c,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),R("div",{class:"v-card-item__content"},[i&&R(T,{key:"title"},{default:()=>{var a;return[(null==(a=l.title)?void 0:a.call(l))??e.title]}}),d&&R(Q,{key:"subtitle"},{default:()=>{var a;return[(null==(a=l.subtitle)?void 0:a.call(l))??e.subtitle]}}),null==(a=l.default)?void 0:a.call(l)]),r&&R("div",{key:"append",class:"v-card-item__append"},[l.append?R(y,{key:"append-defaults",disabled:!s,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},l.append):R(M,null,[e.appendIcon&&R(c,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&R(X,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])})),{}}}),ee=K("v-card-text"),ae=q({appendAvatar:String,appendIcon:E,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:E,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...f(),...e(),...t(),...g(),...m(),...b(),...C(),...S(),...l(),...k(),...s(),...G(),...r({variant:"elevated"})},"VCard"),te=w()({name:"VCard",directives:{Ripple:A},props:ae(),setup(e,t){let{attrs:l,slots:n}=t;const{themeClasses:s}=F(e),{borderClasses:r}=I(e),{colorClasses:u,colorStyles:c,variantClasses:f}=i(e),{densityClasses:g}=d(e),{dimensionStyles:m}=h(e),{elevationClasses:b}=V(e),{loaderClasses:C}=j(e),{locationStyles:S}=x(e),{positionClasses:k}=B(e),{roundedClasses:A}=o(e),w=N(e,l),_=W((()=>!1!==e.link&&w.isLink.value)),O=W((()=>!e.disabled&&!1!==e.link&&(e.link||w.isClickable.value)));return a((()=>{const a=_.value?"a":e.tag,t=!(!n.title&&null==e.title),l=!(!n.subtitle&&null==e.subtitle),i=t||l,d=!!(n.append||e.appendAvatar||e.appendIcon),o=!!(n.prepend||e.prependAvatar||e.prependIcon),I=!(!n.image&&!e.image),h=i||o||d,V=!(!n.text&&null==e.text);return D(R(a,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":O.value},s.value,r.value,u.value,g.value,b.value,C.value,k.value,A.value,f.value,e.class],style:[c.value,m.value,S.value,e.style],href:w.href.value,onClick:O.value&&w.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var a;return[I&&R("div",{key:"image",class:"v-card__image"},[n.image?R(y,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},n.image):R(p,{key:"image-img",cover:!0,src:e.image},null)]),R($,{name:"v-card",active:!!e.loading,color:"boolean"==typeof e.loading?void 0:e.loading},{default:n.loader}),h&&R(Z,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:n.item,prepend:n.prepend,title:n.title,subtitle:n.subtitle,append:n.append}),V&&R(ee,{key:"text"},{default:()=>{var a;return[(null==(a=n.text)?void 0:a.call(n))??e.text]}}),null==(a=n.default)?void 0:a.call(n),n.actions&&R(P,null,{default:n.actions}),v(O.value,"v-card")]}}),[[H("ripple"),O.value&&e.ripple]])})),{}}}),le=J.reduce(((e,a)=>(e[a]={type:[Boolean,String,Number],default:!1},e)),{}),ne=J.reduce(((e,a)=>(e["offset"+_(a)]={type:[String,Number],default:null},e)),{}),se=J.reduce(((e,a)=>(e["order"+_(a)]={type:[String,Number],default:null},e)),{}),re={col:Object.keys(le),offset:Object.keys(ne),order:Object.keys(se)};function ie(e,a,t){let l=e;if(null!=t&&!1!==t){if(a){l+=`-${a.replace(e,"")}`}return"col"===e&&(l="v-"+l),"col"!==e||""!==t&&!0!==t?(l+=`-${t}`,l.toLowerCase()):l.toLowerCase()}}const de=["auto","start","end","center","baseline","stretch"],oe=q({cols:{type:[Boolean,String,Number],default:!1},...le,offset:{type:[String,Number],default:null},...ne,order:{type:[String,Number],default:null},...se,alignSelf:{type:String,default:null,validator:e=>de.includes(e)},...e(),...s()},"VCol"),ue=w()({name:"VCol",props:oe(),setup(e,a){let{slots:t}=a;const l=W((()=>{const a=[];let t;for(t in re)re[t].forEach((l=>{const n=e[l],s=ie(t,l,n);s&&a.push(s)}));const l=a.some((e=>e.startsWith("v-col-")));return a.push({"v-col":!l||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),a}));return()=>{var a;return L(e.tag,{class:[l.value,e.class],style:e.style},null==(a=t.default)?void 0:a.call(t))}}}),pe=["start","end","center"],ce=["space-between","space-around","space-evenly"];function ve(e,a){return J.reduce(((t,l)=>(t[e+_(l)]=a(),t)),{})}const ye=[...pe,"baseline","stretch"],fe=e=>ye.includes(e),ge=ve("align",(()=>({type:String,default:null,validator:fe}))),me=[...pe,...ce],be=e=>me.includes(e),Ce=ve("justify",(()=>({type:String,default:null,validator:be}))),Se=[...pe,...ce,"stretch"],ke=e=>Se.includes(e),Ae=ve("alignContent",(()=>({type:String,default:null,validator:ke}))),Ie={align:Object.keys(ge),justify:Object.keys(Ce),alignContent:Object.keys(Ae)},he={align:"align",justify:"justify",alignContent:"align-content"};function Ve(e,a,t){let l=he[e];if(null!=t){if(a){l+=`-${a.replace(e,"")}`}return l+=`-${t}`,l.toLowerCase()}}const je=q({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:fe},...ge,justify:{type:String,default:null,validator:be},...Ce,alignContent:{type:String,default:null,validator:ke},...Ae,...e(),...s()},"VRow"),xe=w()({name:"VRow",props:je(),setup(e,a){let{slots:t}=a;const l=W((()=>{const a=[];let t;for(t in Ie)Ie[t].forEach((l=>{const n=e[l],s=Ve(t,l,n);s&&a.push(s)}));return a.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),a}));return()=>{var a;return L(e.tag,{class:["v-row",l.value,e.class],style:e.style},null==(a=t.default)?void 0:a.call(t))}}});export{ee as V,te as a,ue as b,xe as c,T as d,Q as e,P as f};
