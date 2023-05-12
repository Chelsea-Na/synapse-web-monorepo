import{_ as K}from"./objectWithoutPropertiesLoose-4f48578a.js";import{_ as r}from"./extends-98964cd2.js";import{r as f}from"./index-8db94870.js";import{a as X,g as Y,s as c,x as i,u as z,b as g,e as H}from"./styled-f64e11ba.js";import{b as V}from"./DialogContent-a988373b.js";import{u as q}from"./utils-b5103c3b.js";import{j as s}from"./jsx-runtime-095bf462.js";import{B as G}from"./Backdrop-0957daa2.js";import{M as J}from"./Modal-d3a57dd4.js";import{P}from"./Paper-2b624eab.js";import{a as O}from"./Tooltip-525f62fe.js";import{F as Q}from"./Fade-64781e78.js";function Z(a){return Y("MuiDialog",a)}const oo=X("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),W=oo,ao=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],eo=c(G,{name:"MuiDialog",slot:"Backdrop",overrides:(a,o)=>o.backdrop})({zIndex:-1}),ro=a=>{const{classes:o,scroll:e,maxWidth:l,fullWidth:n,fullScreen:d}=a,u={root:["root"],container:["container",`scroll${i(e)}`],paper:["paper",`paperScroll${i(e)}`,`paperWidth${i(String(l))}`,n&&"paperFullWidth",d&&"paperFullScreen"]};return H(u,Z,o)},io=c(J,{name:"MuiDialog",slot:"Root",overridesResolver:(a,o)=>o.root})({"@media print":{position:"absolute !important"}}),lo=c("div",{name:"MuiDialog",slot:"Container",overridesResolver:(a,o)=>{const{ownerState:e}=a;return[o.container,o[`scroll${i(e.scroll)}`]]}})(({ownerState:a})=>r({height:"100%","@media print":{height:"auto"},outline:0},a.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},a.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),to=c(P,{name:"MuiDialog",slot:"Paper",overridesResolver:(a,o)=>{const{ownerState:e}=a;return[o.paper,o[`scrollPaper${i(e.scroll)}`],o[`paperWidth${i(String(e.maxWidth))}`],e.fullWidth&&o.paperFullWidth,e.fullScreen&&o.paperFullScreen]}})(({theme:a,ownerState:o})=>r({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},o.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},o.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!o.maxWidth&&{maxWidth:"calc(100% - 64px)"},o.maxWidth==="xs"&&{maxWidth:a.breakpoints.unit==="px"?Math.max(a.breakpoints.values.xs,444):`${a.breakpoints.values.xs}${a.breakpoints.unit}`,[`&.${W.paperScrollBody}`]:{[a.breakpoints.down(Math.max(a.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},o.maxWidth&&o.maxWidth!=="xs"&&{maxWidth:`${a.breakpoints.values[o.maxWidth]}${a.breakpoints.unit}`,[`&.${W.paperScrollBody}`]:{[a.breakpoints.down(a.breakpoints.values[o.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},o.fullWidth&&{width:"calc(100% - 64px)"},o.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${W.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),so=f.forwardRef(function(o,e){const l=z({props:o,name:"MuiDialog"}),n=q(),d={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{"aria-describedby":u,"aria-labelledby":B,BackdropComponent:M,BackdropProps:S,children:$,className:w,disableEscapeKeyDown:k=!1,fullScreen:F=!1,fullWidth:T=!1,maxWidth:R="sm",onBackdropClick:C,onClose:m,open:D,PaperComponent:N=P,PaperProps:y={},scroll:A="paper",TransitionComponent:_=Q,transitionDuration:v=d,TransitionProps:j}=l,E=K(l,ao),p=r({},l,{disableEscapeKeyDown:k,fullScreen:F,fullWidth:T,maxWidth:R,scroll:A}),h=ro(p),x=f.useRef(),I=t=>{x.current=t.target===t.currentTarget},L=t=>{x.current&&(x.current=null,C&&C(t),m&&m(t,"backdropClick"))},b=O(B),U=f.useMemo(()=>({titleId:b}),[b]);return s(io,r({className:g(h.root,w),closeAfterTransition:!0,components:{Backdrop:eo},componentsProps:{backdrop:r({transitionDuration:v,as:M},S)},disableEscapeKeyDown:k,onClose:m,open:D,ref:e,onClick:L,ownerState:p},E,{children:s(_,r({appear:!0,in:D,timeout:v,role:"presentation"},j,{children:s(lo,{className:g(h.container),onMouseDown:I,ownerState:p,children:s(to,r({as:N,elevation:24,role:"dialog","aria-describedby":u,"aria-labelledby":b},y,{className:g(h.paper,y.className),ownerState:p,children:s(V.Provider,{value:U,children:$})}))})}))}))}),Co=so;export{Co as M,W as d};
//# sourceMappingURL=Dialog-e09095a0.js.map
