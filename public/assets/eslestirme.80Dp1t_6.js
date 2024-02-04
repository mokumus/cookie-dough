import{_ as e,o as t,f as a,w as s,b as l,a as r,n as i,g as d,t as n,h as m,m as c,i as u,j as o,k as h,c as f,r as p,F as y,d as g}from"./entry.Fj1OsSkh.js";import{V as M,a as S,b as k,c as v}from"./VRow.g-uTY9D4.js";import{m as b,a as T,V as A}from"./VContainer.lRkv_v2V.js";import{m as Y,u as V,a as C,b as _,V as z}from"./VBtn.lXH8e0cS.js";const w=e({props:{item:{type:Object,required:!0},lang:{type:String,required:!0},isMatched:{type:Boolean,required:!1}},data:()=>({isMobile:!1}),mounted(){window.addEventListener("resize",this.handleResize)},beforeDestroy(){window.removeEventListener("resize",this.handleResize)},computed:{color(){return this.isMatched?"green":"yellow"},height(){return this.isMobile,"120"},customClass(){return this.isMobile?"ar"===this.lang?"text-center":"text-left":(this.lang,"text-center")},fontSize(){return"ar"===this.lang?"44px":"20px"}},methods:{handleResize(){this.isMobile=window.innerWidth<960}}},[["render",function(e,m,c,u,o,h){return t(),a(S,{class:"ma-2",height:h.height,width:"400",color:h.color},{default:s((()=>[l(M,null,{default:s((()=>[r("p",{class:i(h.customClass),style:d(`font-size: ${h.fontSize}`)},n(c.item[c.lang]),7)])),_:1})])),_:1},8,["height","color"])}]]),x=[{tr:"Yardım etti",ar:"نَصَرَ",id:1},{tr:"Yardım ediyor, edecek, eder",ar:"يَنْصُرُ",id:2},{tr:"Yardım etmek",ar:"نَصْرًا",id:3},{tr:"Yardım eden",ar:"نَاصِرٌ",id:4},{tr:"Yardım olunan",ar:"مَنْصُورٌ",id:5},{tr:"Yardım etmedi",ar:"لَمْيَنْصُرْ",id:6},{tr:"Henüz yardım etmedi",ar:"لَمَّيَنْصُرْ",id:7},{tr:"Yardım etmiyor",ar:"مَايَنْصُرُ",id:8},{tr:"Yardım etmeyecek",ar:"لَيَنْصُرُ",id:9},{tr:"Elbette yardım etmeyecek",ar:"لَنْيَنْصُرَ",id:10},{tr:"Yardım etsin",ar:"لِيَنْصُرْ",id:11},{tr:"Yardım etmesin",ar:"لَيَنْصُر",id:12},{tr:"Yardım et",ar:"اُنْصُرْ",id:13},{tr:"Yardım etme",ar:"لاَتَنْصُرْ",id:14},{tr:"Yardım etme mekanı, yardım etme zamanı, yardım etmek",ar:"مَنْصَرُنٌ",id:15},{tr:"Yardım aleti",ar:"مِنْصَرُنٌ",id:16},{tr:"Bir kere yardım etmek",ar:"نَصْرَةً",id:17},{tr:"Bir türlü yardım etmek",ar:"نِصْرَةً",id:18},{tr:"Yardım etmecik",ar:"نُصَيْرٌ",id:19},{tr:"Yardıma mensup",ar:"نَصْرِىٌّ ",id:20},{tr:"Çok çok yardım eden",ar:"نَصّارٌ ",id:21},{tr:"Ziyade yardım edici",ar:"اَنْصَرُ ",id:22},{tr:"Acayip yardım etti",ar:"مَا اَنْصَرَهُ ",id:23},{tr:"Ne acayip yardım etti",ar:"وَاَنْصِرْ بِهِ ",id:24}],j=Symbol.for("vuetify:v-item-group"),I=m({...b(),...Y({selectedClass:"v-item--selected"}),...T(),...c()},"VItemGroup"),B=u()({name:"VItemGroup",props:I(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;const{themeClasses:s}=o(e),{isSelected:r,select:i,next:d,prev:n,selected:m}=V(e,j);return()=>l(e.tag,{class:["v-item-group",s.value,e.class],style:e.style},{default:()=>{var e;return[null==(e=a.default)?void 0:e.call(a,{isSelected:r,select:i,next:d,prev:n,selected:m.value})]}})}}),N=u()({name:"VItem",props:C(),emits:{"group:selected":e=>!0},setup(e,t){let{slots:a}=t;const{isSelected:s,select:l,toggle:r,selectedClass:i,value:d,disabled:n}=_(e,j);return()=>{var e;return null==(e=a.default)?void 0:e.call(a,{isSelected:s.value,selectedClass:i.value,select:l,toggle:r,value:d.value,disabled:n.value})}}});const O=e(h({data:()=>({data:x,shuffledSampleTr:[],shuffledSampleAr:[],currentMatches:[],itemTr:null,itemAr:null,selectionTr:null,selectionAr:null}),mounted(){this.shuffle()},methods:{shuffle(){this.shuffledSampleTr=this.data.sort((()=>Math.random()-.5)).slice(0,6),this.shuffledSampleAr=JSON.parse(JSON.stringify(this.shuffledSampleTr)).sort((()=>Math.random()-.5)),this.currentMatches=[],this.itemTr=null,this.itemAr=null,this.selectionTr=null,this.selectionAr=null},handleMatch(e,t){"tr"===t?this.itemTr=parseInt(this.shuffledSampleTr.find((t=>t.id===e)).id):this.itemAr=parseInt(this.shuffledSampleAr.find((t=>t.id===e)).id),this.itemTr&&this.itemAr&&(this.itemTr===this.itemAr?(this.currentMatches.push(this.itemTr),this.selectionTr=null,this.selectionAr=null):(this.itemTr=null,this.itemAr=null,this.selectionTr=null,this.selectionAr=null))},isMatched(e){return this.currentMatches.includes(e)}}}),[["render",function(e,r,d,n,m,c){const u=w;return t(),a(A,null,{default:s((()=>[l(v,null,{default:s((()=>[l(k,{cols:"6"},{default:s((()=>[l(B,{"selected-class":"bg-primary",modelValue:e.selectionAr,"onUpdate:modelValue":r[0]||(r[0]=t=>e.selectionAr=t)},{default:s((()=>[(t(!0),f(y,null,p(e.shuffledSampleAr,(r=>(t(),a(v,{key:r.id,justify:"end",align:"end"},{default:s((()=>[l(N,{disabled:e.isMatched(r.id)},{default:s((({isSelected:t,selectedClass:a,toggle:s})=>[l(u,{item:r,lang:"ar",onClick:t=>(s(),e.handleMatch(r.id,"ar")),class:i(["d-flex align-center",a]),isSelected:t,isMatched:e.isMatched(r.id)},null,8,["item","onClick","class","isSelected","isMatched"])])),_:2},1032,["disabled"])])),_:2},1024)))),128))])),_:1},8,["modelValue"])])),_:1}),l(k,{cols:"6"},{default:s((()=>[l(B,{"selected-class":"bg-primary",modelValue:e.selectionTr,"onUpdate:modelValue":r[1]||(r[1]=t=>e.selectionTr=t)},{default:s((()=>[(t(!0),f(y,null,p(e.shuffledSampleTr,(r=>(t(),a(v,{key:r.id,justify:"start",align:"start"},{default:s((()=>[l(N,{disabled:e.isMatched(r.id)},{default:s((({isSelected:t,selectedClass:a,toggle:s})=>[l(u,{item:r,lang:"tr",onClick:t=>(s(),e.handleMatch(r.id,"tr")),class:i(["d-flex align-center",a]),isSelected:t,isMatched:e.isMatched(r.id)},null,8,["item","onClick","class","isSelected","isMatched"])])),_:2},1032,["disabled"])])),_:2},1024)))),128))])),_:1},8,["modelValue"])])),_:1})])),_:1}),l(v,{class:"mt-5",justify:"center",align:"center"},{default:s((()=>[l(z,{color:"primary",size:"large",onClick:e.shuffle},{default:s((()=>[g("Yenile")])),_:1},8,["onClick"])])),_:1})])),_:1})}]]);export{O as default};
