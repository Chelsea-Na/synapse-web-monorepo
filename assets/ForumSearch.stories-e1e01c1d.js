import{j as t,a as n,F as N}from"./jsx-runtime-9dc53467.js";import{r as a}from"./index-76fb7be0.js";import{h as M,a$ as P,b0 as F,b1 as O,b2 as C,b3 as q,b4 as E,j as L}from"./ApplicationSessionManager-7277f631.js";import{d as A}from"./dayjs.min-f79c4412.js";import{I as _}from"./IconSvg-b557d255.js";import{S as K}from"./SkeletonTable-3361182b.js";import{P as B}from"./getEndpoint-ac94413e.js";import{f as G}from"./DateFormatter-6b0e1c17.js";import{a as z}from"./UserBadge-dfc06976.js";import{R as H}from"./Row-3bc5f961.js";import{C as U}from"./Col-d85ccfcb.js";import{S as J}from"./Skeleton-2007774f.js";import{T as g}from"./Typography-f217f607.js";import{s as Q}from"./NoSearchResults-37a4f967.js";import{d as W}from"./ToastMessage-3dbe47cb.js";import{B as X}from"./Button-065a21d4.js";import"./_commonjsHelpers-de833af9.js";import"./SynapseConstants-88879587.js";import"./OrientationBanner-450e6652.js";import"./FullWidthAlert-149d754f.js";import"./Alert-fd45ce28.js";import"./createTheme-d609db80.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./styled-bb145c31.js";import"./createSvgIcon-b657d91b.js";import"./Paper-35c12a01.js";import"./IconButton-9b53499e.js";import"./ButtonBase-0719e676.js";import"./emotion-react.browser.esm-ca9fe929.js";import"./TransitionGroupContext-e6fd87c7.js";import"./useForkRef-8feb2ebf.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./useIsFocusVisible-18cd238e.js";import"./Stack-9fb6382b.js";import"./extendSxProp-7fb4e09f.js";import"./Box-f6adec47.js";import"./AlertTitle-9139c2ff.js";import"./useTheme-a28bb397.js";import"./Grow-2f9de6a4.js";import"./isHostComponent-fa76b8d9.js";import"./index-d3ea75b5.js";import"./utils-19a63403.js";import"./ClickAwayListener-3b20c94f.js";import"./Tooltip-248f4fe4.js";import"./tinycolor-ea5bcbb6.js";import"./InfoTwoTone-aaf78040.js";import"./CheckCircleTwoTone-6570b572.js";import"./inputBaseClasses-8d4a6788.js";import"./Fade-05777e49.js";import"./Link-5cdd275a.js";import"./_getTag-b87d0382.js";import"./_Map-92f6da1c.js";import"./isArray-5e3f9107.js";import"./StringUtils-2ea3ab4d.js";import"./index-41d58426.js";import"./index-9d475cdf.js";import"./tiny-invariant-dd7d57d2.js";import"./ErrorOutlined-5d3a6347.js";import"./GetAppTwoTone-6e3519f9.js";import"./InfoOutlined-aa78e498.js";import"./times-8d386772.js";import"./_baseTimes-8715be3e.js";import"./identity-46f208ab.js";import"./toInteger-5bb233f4.js";import"./isSymbol-7c514724.js";import"./timezone-f53425a4.js";import"./Menu-fd3efe37.js";import"./index-c71daf5e.js";import"./Modal-38359b46.js";import"./Backdrop-3c9a13b0.js";import"./getScrollbarSize-ac846fe6.js";import"./ownerWindow-2c76219e.js";import"./createChainedFunction-0bab83cf.js";import"./MenuList-acf5f616.js";import"./List-81115ae1.js";import"./cloneDeep-10deac57.js";import"./_baseClone-d4db307e.js";import"./_Uint8Array-df44b265.js";import"./_initCloneObject-c3239c20.js";import"./_getAllKeys-af1012ce.js";import"./Divider-f85fbd3b.js";import"./dividerClasses-ed167313.js";import"./MenuItem-9dd34ee5.js";import"./Card-116c8a68.js";import"./Avatar-e1ef2d77.js";import"./ThemeProvider-ab8de9d2.js";import"./CSSTransition-e180c3db.js";import"./hasClass-ec9efd32.js";import"./uniqueId-4d05949d.js";import"./toString-cc90cb98.js";const T=async r=>(await fetch(r,{method:"GET",headers:{Accept:"*/*","Access-Control-Request-Headers":"authorization","Content-Type":"text/plain; charset=utf-8"}})).text(),x=r=>{const{threadId:d,replyId:c}=r,{accessToken:s}=M(),[o,m]=a.useState(),[h,f]=a.useState(""),[i,p]=a.useState(),[I,S]=a.useState(),[y,v]=a.useState(!1),b=async()=>{let u;const e=await P(d,s);if(v(!0),c){const l=await F(c,s);u=await O(l.messageKey,s),S(await C(l.createdBy)),p(l)}else S(await C(e.createdBy)),u=await q(e.messageKey,s);f(await T(u.messageUrl)),m(e),v(!1)};return a.useEffect(()=>{b()},[]),t("div",{className:"bootstrap-4-backport search-result-container",children:n(H,{children:[t(U,{xs:1,children:y?t(J,{variant:"circular",width:"40px",height:"40px"}):c?t(_,{icon:"replyTwoTone"}):t(_,{icon:"chatTwoTone"})}),t(U,{xs:11,children:y?t(K,{numCols:1,numRows:4}):n(N,{children:[t(g,{variant:"headline3",children:t("a",{className:"link",href:((u,e,l)=>{let k=`${B.PORTAL}#!Synapse:${e}/discussion/threadId=${u}`;return l&&(k+=`&replyId=${l}`),k})(o==null?void 0:o.id,o==null?void 0:o.projectId,i==null?void 0:i.id),children:o==null?void 0:o.title})}),t("div",{className:"truncated",children:t(g,{variant:"body1",children:h})}),n("div",{className:"search-result-footer",children:[c?"Reply":"Thread"," by"," ",t(z,{userId:I==null?void 0:I.ownerId})," ",G(A(i==null?void 0:i.createdOn))]})]})})]})})};try{T.displayName="getMessage",T.__docgenInfo={description:"",displayName:"getMessage",props:{}}}catch{}try{x.displayName="DiscussionSearchResult",x.__docgenInfo={description:"",displayName:"DiscussionSearchResult",props:{threadId:{defaultValue:null,description:"",name:"threadId",required:!0,type:{name:"string"}},replyId:{defaultValue:null,description:"",name:"replyId",required:!1,type:{name:"string"}}}}}catch{}const w=r=>{const{onSearchResultsVisible:d}=r,{accessToken:c}=M(),[s,o]=a.useState(""),[m,h]=a.useState(),[f,i]=a.useState(),[p,I]=a.useState(),[S,y]=a.useState(!1),v=async()=>{d&&d(!0);try{h(void 0),y(!1);const e=await E({searchString:s,nextPageToken:void 0},r.forumId,c);e.matches.length==0&&y(!0),h(e),i(e.matches)}catch(e){W(e.reason,"danger")}},b=()=>{d&&d(!1),o(""),h(void 0),y(!1),i(void 0)};a.useEffect(()=>{(async()=>{if(r.projectId){const l=await L(c,r.projectId);I(l)}})()},[c,r.projectId]);const j=()=>n("div",{className:"text-center",children:[Q,t(g,{variant:"body1",children:"No results with this query"}),t(g,{variant:"body1Italic",children:"Search the full text of posts, replies, and titles"})]}),u=async()=>{const e=await E({searchString:s,nextPageToken:m==null?void 0:m.nextPageToken},r.forumId,c);h(e),f&&i([...f,...e.matches])};return n("div",{className:"ForumSearch",children:[n("div",{children:[t("span",{className:"SearchIcon",children:t(_,{icon:"search"})}),t("input",{role:"textbox",type:"search",className:`SearchBar  ${m?"SearchBarResult":""}`,placeholder:"Search discussions",value:s,onChange:e=>{o(e.target.value)},onKeyDown:e=>{e.key==="Enter"&&v()}}),s&&t("button",{className:"ClearSearchIcon",onClick:()=>{b()},children:t(_,{icon:"clear"})})]}),S&&n(N,{children:[r.projectId&&n(g,{variant:"body1Italic",className:"NoResultsText",children:['No results for "',s,'" in ',p==null?void 0:p.name]}),t(j,{})]}),f&&n(N,{children:[r.projectId&&!S&&n(g,{variant:"body1Italic",className:"ResultsText",children:['Results for "',s,'" in ',p==null?void 0:p.name]}),f.map(e=>t("div",{children:t(x,{threadId:e.threadId,replyId:e.replyId})},`${e.forumId}-${e.threadId}-${e.replyId}`))]}),(m==null?void 0:m.nextPageToken)&&t("div",{className:"text-center",children:t(X,{variant:"contained",color:"primary",onClick:()=>{u()},children:"Load more"})})]})};try{w.displayName="ForumSearch",w.__docgenInfo={description:"",displayName:"ForumSearch",props:{forumId:{defaultValue:null,description:"",name:"forumId",required:!0,type:{name:"string"}},projectId:{defaultValue:null,description:"",name:"projectId",required:!1,type:{name:"string"}},onSearchResultsVisible:{defaultValue:null,description:"",name:"onSearchResultsVisible",required:!1,type:{name:"((visible: boolean) => void)"}}}}}catch{}const Dt={title:"Synapse/ForumSearch",component:w},R={args:{forumId:"1032",onSearchResultsVisible:r=>alert(`Is visible? ${r}`)}};var $,V,D;R.parameters={...R.parameters,docs:{...($=R.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    forumId: '1032',
    onSearchResultsVisible: visible => alert(\`Is visible? \${visible}\`)
  }
}`,...(D=(V=R.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};const Mt=["Demo"];export{R as Demo,Mt as __namedExportsOrder,Dt as default};
