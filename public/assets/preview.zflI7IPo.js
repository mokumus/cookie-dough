import{a9 as e,C as o}from"./entry.BKjk9qEO.js";const r=()=>({isEnabled:()=>{const r=o().query;return!(Object.prototype.hasOwnProperty.call(r,"preview")&&!r.preview)&&(!(!r.preview&&!e("previewToken").value)||!!sessionStorage.getItem("previewToken"))},getPreviewToken:()=>e("previewToken").value||sessionStorage.getItem("previewToken")||void 0,setPreviewToken:r=>{e("previewToken").value=r,o().query.preview=r||"",r?sessionStorage.setItem("previewToken",r):sessionStorage.removeItem("previewToken"),window.location.reload()}});export{r as u};
