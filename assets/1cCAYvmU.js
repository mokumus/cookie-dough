import{j as n,aC as l,a4 as e,x as o,as as t,aP as a,aQ as r,aR as u,aS as i,o as s,f as c,R as d}from"./EutKKzJP.js";import{p,k as g}from"./CSLOBVbX.js";import{u as h}from"./CVZksF4a.js";class m{constructor(n,l,e){this.property=n,this.normal=l,e&&(this.space=e)}}function f(n,l){const e={},o={};let t=-1;for(;++t<n.length;)Object.assign(e,n[t].property),Object.assign(o,n[t].normal);return new m(e,o,l)}function y(n){return n.toLowerCase()}m.prototype.property={},m.prototype.normal={},m.prototype.space=null;class v{constructor(n,l){this.property=n,this.attribute=l}}v.prototype.space=null,v.prototype.boolean=!1,v.prototype.booleanish=!1,v.prototype.overloadedBoolean=!1,v.prototype.number=!1,v.prototype.commaSeparated=!1,v.prototype.spaceSeparated=!1,v.prototype.commaOrSpaceSeparated=!1,v.prototype.mustUseProperty=!1,v.prototype.defined=!1;let b=0;const k=M(),S=M(),C=M(),x=M(),P=M(),w=M(),O=M();function M(){return 2**++b}const L=Object.freeze(Object.defineProperty({__proto__:null,boolean:k,booleanish:S,commaOrSpaceSeparated:O,commaSeparated:w,number:x,overloadedBoolean:C,spaceSeparated:P},Symbol.toStringTag,{value:"Module"})),D=Object.keys(L);class R extends v{constructor(n,l,e,o){let t=-1;if(super(n,l),A(this,"space",o),"number"==typeof e)for(;++t<D.length;){const n=D[t];A(this,D[t],(e&L[n])===L[n])}}}function A(n,l,e){e&&(n[l]=e)}R.prototype.defined=!0;const E={}.hasOwnProperty;function T(n){const l={},e={};let o;for(o in n.properties)if(E.call(n.properties,o)){const t=n.properties[o],a=new R(o,n.transform(n.attributes||{},o),t,n.space);n.mustUseProperty&&n.mustUseProperty.includes(o)&&(a.mustUseProperty=!0),l[o]=a,e[y(o)]=o,e[y(a.attribute)]=o}return new m(l,e,n.space)}const U=T({space:"xlink",transform:(n,l)=>"xlink:"+l.slice(5).toLowerCase(),properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),z=T({space:"xml",transform:(n,l)=>"xml:"+l.slice(3).toLowerCase(),properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function B(n,l){return l in n?n[l]:l}function j(n,l){return B(n,l.toLowerCase())}const I=T({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:j,properties:{xmlns:null,xmlnsXLink:null}}),H=T({transform:(n,l)=>"role"===l?l:"aria-"+l.slice(4).toLowerCase(),properties:{ariaActiveDescendant:null,ariaAtomic:S,ariaAutoComplete:null,ariaBusy:S,ariaChecked:S,ariaColCount:x,ariaColIndex:x,ariaColSpan:x,ariaControls:P,ariaCurrent:null,ariaDescribedBy:P,ariaDetails:null,ariaDisabled:S,ariaDropEffect:P,ariaErrorMessage:null,ariaExpanded:S,ariaFlowTo:P,ariaGrabbed:S,ariaHasPopup:null,ariaHidden:S,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:P,ariaLevel:x,ariaLive:null,ariaModal:S,ariaMultiLine:S,ariaMultiSelectable:S,ariaOrientation:null,ariaOwns:P,ariaPlaceholder:null,ariaPosInSet:x,ariaPressed:S,ariaReadOnly:S,ariaRelevant:null,ariaRequired:S,ariaRoleDescription:P,ariaRowCount:x,ariaRowIndex:x,ariaRowSpan:x,ariaSelected:S,ariaSetSize:x,ariaSort:null,ariaValueMax:x,ariaValueMin:x,ariaValueNow:x,ariaValueText:null,role:null}}),F=T({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:j,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:w,acceptCharset:P,accessKey:P,action:null,allow:null,allowFullScreen:k,allowPaymentRequest:k,allowUserMedia:k,alt:null,as:null,async:k,autoCapitalize:null,autoComplete:P,autoFocus:k,autoPlay:k,blocking:P,capture:null,charSet:null,checked:k,cite:null,className:P,cols:x,colSpan:null,content:null,contentEditable:S,controls:k,controlsList:P,coords:x|w,crossOrigin:null,data:null,dateTime:null,decoding:null,default:k,defer:k,dir:null,dirName:null,disabled:k,download:C,draggable:S,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:k,formTarget:null,headers:P,height:x,hidden:k,high:x,href:null,hrefLang:null,htmlFor:P,httpEquiv:P,id:null,imageSizes:null,imageSrcSet:null,inert:k,inputMode:null,integrity:null,is:null,isMap:k,itemId:null,itemProp:P,itemRef:P,itemScope:k,itemType:P,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:k,low:x,manifest:null,max:null,maxLength:x,media:null,method:null,min:null,minLength:x,multiple:k,muted:k,name:null,nonce:null,noModule:k,noValidate:k,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:k,optimum:x,pattern:null,ping:P,placeholder:null,playsInline:k,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:k,referrerPolicy:null,rel:P,required:k,reversed:k,rows:x,rowSpan:x,sandbox:P,scope:null,scoped:k,seamless:k,selected:k,shadowRootDelegatesFocus:k,shadowRootMode:null,shape:null,size:x,sizes:null,slot:null,span:x,spellCheck:S,src:null,srcDoc:null,srcLang:null,srcSet:null,start:x,step:null,style:null,tabIndex:x,target:null,title:null,translate:null,type:null,typeMustMatch:k,useMap:null,value:S,width:x,wrap:null,align:null,aLink:null,archive:P,axis:null,background:null,bgColor:null,border:x,borderColor:null,bottomMargin:x,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:k,declare:k,event:null,face:null,frame:null,frameBorder:null,hSpace:x,leftMargin:x,link:null,longDesc:null,lowSrc:null,marginHeight:x,marginWidth:x,noResize:k,noHref:k,noShade:k,noWrap:k,object:null,profile:null,prompt:null,rev:null,rightMargin:x,rules:null,scheme:null,scrolling:S,standby:null,summary:null,text:null,topMargin:x,valueType:null,version:null,vAlign:null,vLink:null,vSpace:x,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:k,disableRemotePlayback:k,prefix:null,property:null,results:x,security:null,unselectable:null}}),_=T({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:B,properties:{about:O,accentHeight:x,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:x,amplitude:x,arabicForm:null,ascent:x,attributeName:null,attributeType:null,azimuth:x,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:x,by:null,calcMode:null,capHeight:x,className:P,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:x,diffuseConstant:x,direction:null,display:null,dur:null,divisor:x,dominantBaseline:null,download:k,dx:null,dy:null,edgeMode:null,editable:null,elevation:x,enableBackground:null,end:null,event:null,exponent:x,externalResourcesRequired:null,fill:null,fillOpacity:x,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:w,g2:w,glyphName:w,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:x,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:x,horizOriginX:x,horizOriginY:x,id:null,ideographic:x,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:x,k:x,k1:x,k2:x,k3:x,k4:x,kernelMatrix:O,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:x,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:x,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:x,overlineThickness:x,paintOrder:null,panose1:null,path:null,pathLength:x,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:P,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:x,pointsAtY:x,pointsAtZ:x,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:O,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:O,rev:O,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:O,requiredFeatures:O,requiredFonts:O,requiredFormats:O,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:x,specularExponent:x,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:x,strikethroughThickness:x,string:null,stroke:null,strokeDashArray:O,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:x,strokeOpacity:x,strokeWidth:null,style:null,surfaceScale:x,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:O,tabIndex:x,tableValues:null,target:null,targetX:x,targetY:x,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:O,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:x,underlineThickness:x,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:x,values:null,vAlphabetic:x,vMathematical:x,vectorEffect:null,vHanging:x,vIdeographic:x,version:null,vertAdvY:x,vertOriginX:x,vertOriginY:x,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:x,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),q=/^data[-\w.:]+$/i,V=/-[a-z]/g,W=/[A-Z]/g;function K(n){return"-"+n.toLowerCase()}function N(n){return n.charAt(1).toUpperCase()}const X=f([z,U,I,H,F],"html");f([z,U,I,H,_],"svg");const Y=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"],$="default",Z=/^@|^v-on:/,J=/^:|^v-bind:/,G=/^v-model/,Q=["select","textarea","input"],nn=Object.fromEntries(["p","a","blockquote","code","pre","code","em","h1","h2","h3","h4","h5","h6","hr","img","ul","ol","li","strong","table","thead","tbody","td","th","tr","script"].map((n=>[n,`prose-${n}`]))),ln=n({name:"MDCRenderer",props:{body:{type:Object,required:!0},data:{type:Object,default:()=>({})},tag:{type:[String,Boolean],default:void 0},prose:{type:Boolean,default:void 0},components:{type:Object,default:()=>({})}},async setup(n){var t,a,r,u,i,s,c,d;const p=null==(r=null==(a=null==(t=l())?void 0:t.appContext)?void 0:a.app)?void 0:r.$nuxt,g=(null==p?void 0:p.$route)||(null==p?void 0:p._route),{mdc:h}=(null==(u=null==p?void 0:p.$config)?void 0:u.public)||{},m={...(null==(i=null==h?void 0:h.components)?void 0:i.prose)&&!1!==n.prose?nn:{},...(null==(s=null==h?void 0:h.components)?void 0:s.map)||{},...e((null==(d=null==(c=n.data)?void 0:c.mdc)?void 0:d.components)||{}),...n.components},f=o((()=>{var l;const e=((null==(l=n.body)?void 0:l.children)||[]).map((n=>n.tag||n.type)).filter((n=>!Y.includes(n)));return Array.from(new Set(e)).sort().join(".")}));return await async function(n,l){if(!n)return;const e=Array.from(new Set(o(n,l)));function o(n,l){const e=n.tag;if("text"===n.type||"binding"===e||"comment"===n.type)return[];const t=rn(n,l.tags),a=[];"root"===n.type||Y.includes(t)||a.push(t);for(const r of n.children||[])a.push(...o(r,l));return a}await Promise.all(e.map((async n=>{if((null==n?void 0:n.render)||(null==n?void 0:n.ssrRender)||(null==n?void 0:n.__ssrInlineRender))return;const l=tn(n);(null==l?void 0:l.__asyncLoader)&&!l.__asyncResolved&&await l.__asyncLoader()})))}(n.body,{tags:m}),{tags:m,contentKey:f,route:g}},render(n){var l,e,o;const{tags:a,tag:r,body:u,data:i,contentKey:s,route:c}=n;if(!u)return null;const d={...i,tags:a,$route:c},p=!1!==r?tn(r||(null==(l=d.component)?void 0:l.name)||d.component||"div"):void 0,g=on(u,t,d,d);return p?t(p,{...null==(e=d.component)?void 0:e.props,...this.$attrs,key:s},g):null==(o=g.default)?void 0:o.call(g)}});function en(n,l,e,o={}){if("text"===n.type)return l(r,n.value);if("comment"===n.type)return l(u,null,n.value);const t=n.tag,a=rn(n,e.tags);if("binding"===n.tag)return function(n,l,e,o={}){var t,a;const u={...o,$document:e,$doc:e},i=/\.|\[(\d+)\]/,s=null==(t=n.props)?void 0:t.value.trim().split(i).filter(Boolean),c=s.reduce(((n,l)=>{if(n&&l in n)return"function"==typeof n[l]?n[l]():n[l]}),u),d=null==(a=n.props)?void 0:a.defaultValue;return l(r,c??d??"")}(n,l,e,o);const i=tn(a);"object"==typeof i&&(i.tag=t);const s=function(n,l){const{tag:e="",props:o={}}=n;return Object.keys(o).reduce((function(n,t){if("__ignoreMap"===t)return n;const a=o[t];if(G.test(t)&&!Q.includes(e))return function(n,l,e,o){const t=n=>+n,a=n=>n.trim(),r=n=>n,u=n.replace(G,"").split(".").filter((n=>n)).reduce(((n,l)=>(n[l]=!0,n)),{}),i="value",s=u.lazy?"change":"input",c=u.number?t:u.trim?a:r;return e[i]=an(l,o),e.on=e.on||{},e.on[s]=n=>o[l]=c(n),e}(t,a,n,l);if("v-bind"===t)return function(n,l,e,o){const t=an(l,o);return e=Object.assign(e,t),e}(0,a,n,l);if(Z.test(t))return function(n,l,e,o){return n=n.replace(Z,""),e.on=e.on||{},e.on[n]=()=>an(l,o),e}(t,a,n,l);if(J.test(t))return function(n,l,e,o){return n=n.replace(J,""),e[n]=an(l,o),e}(t,a,n,l);const{attribute:r}=function(n,l){const e=y(l);let o=l,t=v;if(e in n.normal)return n.property[n.normal[e]];if(e.length>4&&"data"===e.slice(0,4)&&q.test(l)){if("-"===l.charAt(4)){const n=l.slice(5).replace(V,N);o="data"+n.charAt(0).toUpperCase()+n.slice(1)}else{const n=l.slice(4);if(!V.test(n)){let e=n.replace(W,K);"-"!==e.charAt(0)&&(e="-"+e),l="data"+e}}t=R}return new t(o,l)}(X,t);return Array.isArray(a)&&a.every((n=>"string"==typeof n))?(n[r]=a.join(" "),n):(n[r]=a,n)}),{})}(n,e);return l(i,s,on(n,l,e,{...o,...s}))}function on(n,l,e,o){const t=(n.children||[]).reduce(((n,l)=>{if(!function(n){return"template"===n.tag}(l))return n[$].push(l),n;const e=function(n){let l="";for(const e of Object.keys(n.props||{}))if(e.startsWith("#")||e.startsWith("v-slot:")){l=e.split(/[:#]/,2)[1];break}return l||$}(l);return n[e]=n[e]||[],"element"===l.type&&n[e].push(...l.children||[]),n}),{[$]:[]}),a=Object.entries(t).reduce(((n,[t,a])=>a.length?(n[t]=()=>function(n){const l=[];for(const e of n){const n=l[l.length-1];e.type===r&&(null==n?void 0:n.type)===r?n.children=n.children+e.children:l.push(e)}return l}(a.map((n=>en(n,l,e,o)))),n):n),{});return a}const tn=n=>{if(!Y.includes(n)&&!(null==n?void 0:n.render)&&!(null==n?void 0:n.ssrRender)){const l=a(p(n),!1);if("object"==typeof l)return l}return n};function an(n,l){const e=n.split(".").reduce(((n,l)=>"object"==typeof n?n[l]:void 0),l);return void 0===e?i(n):e}function rn(n,l){var e;const o=n.tag;return o&&void 0===(null==(e=n.props)?void 0:e.__ignoreMap)&&(l[o]||l[p(o)]||l[g(n.tag)])||o}const un=n({__name:"ContentRendererMarkdown",props:{value:{type:Object,required:!0},excerpt:{type:Boolean,default:!1},tag:{type:String,default:"div"},components:{type:Object,default:()=>({})},data:{type:Object,default:()=>({})}},setup(n){const l=n,e=h().isEnabled(),t=o((()=>{let n=l.value.body||l.value;return l.excerpt&&l.value.excerpt&&(n=l.value.excerpt),n})),a=o((()=>{const{body:n,excerpt:e,...o}=l.value;return{...o,...l.data}})),r=o((()=>({...l.components,...a.value._components||{}})));return(l,o)=>{const u=ln;return s(),c(u,{body:t.value,data:a.value,tag:n.tag,components:r.value,"data-content-id":d(e)?n.value._id:void 0},null,8,["body","data","tag","components","data-content-id"])}}});export{un as _};
