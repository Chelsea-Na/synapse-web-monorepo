import{_ as i}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import{_ as c,d as f,i as a}from"./createTheme-d609db80.js";const x=["sx"],m=t=>{var s,n;const o={systemProps:{},otherProps:{}},r=(s=t==null||(n=t.theme)==null?void 0:n.unstable_sxConfig)!=null?s:f;return Object.keys(t).forEach(e=>{r[e]?o.systemProps[e]=t[e]:o.otherProps[e]=t[e]}),o};function _(t){const{sx:s}=t,n=c(t,x),{systemProps:o,otherProps:r}=m(n);let e;return Array.isArray(s)?e=[o,...s]:typeof s=="function"?e=(...u)=>{const l=s(...u);return a(l)?i({},o,l):o}:e=i({},o,s),i({},r,{sx:e})}export{_ as e};
