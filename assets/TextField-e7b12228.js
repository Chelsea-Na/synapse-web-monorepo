import{j as o,a as i,F as c}from"./jsx-runtime-670450c2.js";import{r as l,R as p}from"./index-f1f749bf.js";import{u}from"./useTheme-dfe229ea.js";import{F as x,I as f}from"./FormControl-fe75ceb2.js";import{T as h}from"./Typography-81d78865.js";import{B as y}from"./Box-b7ffd230.js";function s(e){const t=l.useId(),{palette:n}=u(),{noWrapInFormControl:a,...d}=e,m=l.useMemo(()=>a?r=>o(p.Fragment,{children:r.children}):r=>o(x,{fullWidth:!0,sx:{my:1},children:r.children}),[a]);return i(m,{children:[e.label&&i(h,{component:"label",htmlFor:e.id||t,variant:"body1",sx:{fontWeight:700,mb:"4px"},children:[e.label,e.required?o(y,{component:"span",sx:{ml:"3px",color:"secondary.main"},children:"*"}):o(c,{})]}),o(f,{...d,id:e.id||t,sx:{backgroundColor:"grey.200",px:2,py:1,...e.sx,"&.Mui-focused":{backgroundColor:n.background.default,outline:`1px solid ${n.primary.main}`}}})]})}try{s.displayName="TextField",s.__docgenInfo={description:"A styled text field built using MUI components and designed to match the Sage Design System (SDS) input fields.",displayName:"TextField",props:{noWrapInFormControl:{defaultValue:null,description:"",name:"noWrapInFormControl",required:!1,type:{name:"boolean"}}}}}catch{}export{s as T};
//# sourceMappingURL=TextField-e7b12228.js.map
