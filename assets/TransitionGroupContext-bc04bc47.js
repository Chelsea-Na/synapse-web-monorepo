import{r as u,R as c}from"./index-f1f749bf.js";import{a as f}from"./useForkRef-82d2a376.js";function T(e){const t=u.useRef(e);return f(()=>{t.current=e}),u.useCallback((...r)=>(0,t.current)(...r),[])}let i=!0,a=!1,l;const d={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function h(e){const{type:t,tagName:r}=e;return!!(r==="INPUT"&&d[t]&&!e.readOnly||r==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function b(e){e.metaKey||e.altKey||e.ctrlKey||(i=!0)}function s(){i=!1}function m(){this.visibilityState==="hidden"&&a&&(i=!0)}function y(e){e.addEventListener("keydown",b,!0),e.addEventListener("mousedown",s,!0),e.addEventListener("pointerdown",s,!0),e.addEventListener("touchstart",s,!0),e.addEventListener("visibilitychange",m,!0)}function E(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return i||h(t)}function v(){const e=u.useCallback(n=>{n!=null&&y(n.ownerDocument)},[]),t=u.useRef(!1);function r(){return t.current?(a=!0,window.clearTimeout(l),l=window.setTimeout(()=>{a=!1},100),t.current=!1,!0):!1}function o(n){return E(n)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:o,onBlur:r,ref:e}}const R=c.createContext(null);export{R as T,v as a,T as u};
//# sourceMappingURL=TransitionGroupContext-bc04bc47.js.map
