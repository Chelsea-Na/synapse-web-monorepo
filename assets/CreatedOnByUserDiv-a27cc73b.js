import{_ as u}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import{_ as b}from"./createTheme-d609db80.js";import{c as v,u as g}from"./ThemeProvider-ab8de9d2.js";import{R as a,r as E}from"./index-76fb7be0.js";import{c as d}from"./createWithBsPrefix-cb6f0557.js";import{a as x,j as $}from"./jsx-runtime-9dc53467.js";import{a as j}from"./UserBadge-dfc06976.js";import{f as H}from"./DateFormatter-6b0e1c17.js";import{d as O}from"./dayjs.min-f79c4412.js";const N=function(e){return a.forwardRef(function(t,o){return a.createElement("div",u({},t,{ref:o,className:v(t.className,e)}))})};var P=a.createContext(null);P.displayName="CardContext";const R=P;var S=["bsPrefix","className","variant","as"],T={variant:null},f=a.forwardRef(function(e,t){var o=e.bsPrefix,l=e.className,s=e.variant,n=e.as,c=n===void 0?"img":n,m=b(e,S),i=g(o,"card-img");return a.createElement(c,u({ref:t,className:v(s?i+"-"+s:i,l)},m))});f.displayName="CardImg";f.defaultProps=T;const U=f;var _=["bsPrefix","className","bg","text","border","body","children","as"],k=N("h5"),w=N("h6"),h=d("card-body"),L=d("card-title",{Component:k}),W=d("card-subtitle",{Component:w}),q=d("card-link",{Component:"a"}),A=d("card-text",{Component:"p"}),F=d("card-header"),V=d("card-footer"),M=d("card-img-overlay"),z={body:!1},r=a.forwardRef(function(e,t){var o=e.bsPrefix,l=e.className,s=e.bg,n=e.text,c=e.border,m=e.body,i=e.children,C=e.as,I=C===void 0?"div":C,B=b(e,_),p=g(o,"card"),D=E.useMemo(function(){return{cardHeaderBsPrefix:p+"-header"}},[p]);return a.createElement(R.Provider,{value:D},a.createElement(I,u({ref:t},B,{className:v(l,p,s&&"bg-"+s,n&&"text-"+n,c&&"border-"+c)}),m?a.createElement(h,null,i):i))});r.displayName="Card";r.defaultProps=z;r.Img=U;r.Title=L;r.Subtitle=W;r.Body=h;r.Link=q;r.Text=A;r.Header=F;r.Footer=V;r.ImgOverlay=M;const ae=r;function y(e){const{userId:t,date:o}=e;return x("div",{className:"created-on",children:[x("span",{children:["Created on ",H(O(o))," by "]}),$(j,{userId:t})]})}try{y.displayName="CreatedOnByUserDiv",y.__docgenInfo={description:"",displayName:"CreatedOnByUserDiv",props:{userId:{defaultValue:null,description:"",name:"userId",required:!0,type:{name:"string"}},date:{defaultValue:null,description:"",name:"date",required:!0,type:{name:"Date"}}}}}catch{}export{ae as C,y as a};
