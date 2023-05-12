import{y as h}from"./SynapseConstants-7100b9c0.js";import{j as e,a as l,F as U}from"./jsx-runtime-095bf462.js";import{u as V}from"./useShowDesktop-4eaeb2a6.js";import{U as S}from"./UserCardListRotate-7b3394e5.js";import{E}from"./ExpandableContent-4c55c7c8.js";import{r as q}from"./index-8db94870.js";import{B as C}from"./Button-5637ed55.js";import"./sqlFunctions-ff7f0897.js";import"./RegularExpressions-bc0adf55.js";import"./QueryFilter-85f4df7d.js";import"./EntityTypeUtils-5ee9d72b.js";import"./inheritsLoose-c82a83d4.js";import"./isArray-5e3f9107.js";import"./index-8ce4a492.js";import"./_commonjsHelpers-042e6b4d.js";import"./extends-98964cd2.js";import"./getEndpoint-ac94413e.js";import"./SvgIcon-4c933a0b.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./styled-f64e11ba.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-29d231ba.js";import"./IconSvg-6aae701c.js";import"./Tooltip-525f62fe.js";import"./utils-b5103c3b.js";import"./TransitionGroupContext-0df7f063.js";import"./useForkRef-f2aa3d66.js";import"./isHostComponent-fa76b8d9.js";import"./Clear-72bafe95.js";import"./Box-13f1aabd.js";import"./extendSxProp-29a14132.js";import"./Button-891a522f.js";import"./ButtonBase-4f599170.js";import"./emotion-react.browser.esm-4b1ddfee.js";import"./assertThisInitialized-081f9914.js";import"./Alert-d0a3c172.js";import"./createWithBsPrefix-f259edae.js";import"./index-58d3fd43.js";import"./use-deep-compare-effect.esm-cb3aaa60.js";import"./index-5d0cf067.js";import"./UserCardList-e74d6222.js";import"./UserCard-498ea8b7.js";import"./SkeletonTable-19c02e4c.js";import"./times-1b8d4cb5.js";import"./_baseTimes-8cccc40f.js";import"./isSymbol-7c514724.js";import"./Skeleton-3aad52b9.js";import"./ToastMessage-87394acb.js";import"./FullWidthAlert-be17d5a7.js";import"./Typography-0933b2f6.js";import"./hasClass-ec9efd32.js";import"./uniqueId-4d05949d.js";import"./toString-cc90cb98.js";import"./Popover-8e6d5500.js";import"./Modal-d3a57dd4.js";import"./Backdrop-0957daa2.js";import"./Fade-64781e78.js";import"./getScrollbarSize-ac846fe6.js";import"./ownerWindow-2c76219e.js";import"./createChainedFunction-0bab83cf.js";import"./Paper-2b624eab.js";import"./Link-2921f78c.js";import"./without-f32bc196.js";import"./_cacheHas-66884dbf.js";import"./_MapCache-5f14150a.js";import"./_baseRest-55193a5a.js";import"./isArrayLikeObject-eef7aba6.js";function p(t){const{columnName:a,facetValues:r,...s}=t;return e("div",{children:r==null?void 0:r.map((i,o)=>{const n=r[o],m=e(S,{...s,selectedFacets:[{columnName:a,facetValues:[n],concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest"}]});return e(E,{title:l(U,{children:[" ",n," "]}),content:m},`UserCardListGroup-Mobile-${o}`)})})}try{p.displayName="UserCardListGroupsMobile",p.__docgenInfo={description:"",displayName:"UserCardListGroupsMobile",props:{sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}},columnName:{defaultValue:null,description:"",name:"columnName",required:!0,type:{name:"string"}},facetValues:{defaultValue:null,description:"",name:"facetValues",required:!0,type:{name:"string[]"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"AVATAR"'},{value:'"SMALL USER CARD"'},{value:'"MEDIUM USER CARD"'},{value:'"LARGE USER CARD"'}]}},summaryLink:{defaultValue:null,description:"",name:"summaryLink",required:!1,type:{name:"string"}},summaryLinkText:{defaultValue:null,description:"",name:"summaryLinkText",required:!1,type:{name:"string"}},count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},useQueryResultUserData:{defaultValue:null,description:"",name:"useQueryResultUserData",required:!1,type:{name:"boolean"}}}}}catch{}function d(t){const[a,r]=q.useState(0),{columnName:s,facetValues:i,...o}=t,n={columnName:s,facetValues:[i[a]],concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest"};return l("div",{className:"control-container",children:[l("div",{className:"button-container",children:[i==null?void 0:i.map((c,m)=>e("button",{className:a===m?"isSelected":"",onClick:()=>r(m),children:c},c)),e("button",{className:"gap-fill"})]}),e("div",{className:"content-container",children:e(S,{...o,selectedFacets:[n]},`UserCardListGroup-${a}`)})]})}try{d.displayName="UserCardListGroupsDesktop",d.__docgenInfo={description:"",displayName:"UserCardListGroupsDesktop",props:{sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}},columnName:{defaultValue:null,description:"",name:"columnName",required:!0,type:{name:"string"}},facetValues:{defaultValue:null,description:"",name:"facetValues",required:!0,type:{name:"string[]"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"AVATAR"'},{value:'"SMALL USER CARD"'},{value:'"MEDIUM USER CARD"'},{value:'"LARGE USER CARD"'}]}},summaryLink:{defaultValue:null,description:"",name:"summaryLink",required:!1,type:{name:"string"}},summaryLinkText:{defaultValue:null,description:"",name:"summaryLinkText",required:!1,type:{name:"string"}},count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},useQueryResultUserData:{defaultValue:null,description:"",name:"useQueryResultUserData",required:!1,type:{name:"boolean"}}}}}catch{}function y(t){const{summaryLink:a,summaryLinkText:r,...s}=t,i=V();return e("div",{className:`bootstrap-4-backport UserCardListGroups${i?"__Desktop":""}`,children:l("div",{children:[i?e(d,{...s}):e(p,{...s}),a&&r&&e("div",{className:"UserCardListGroups__summary",children:e(C,{variant:"secondary",size:"lg",href:a,children:r})})]})})}try{y.displayName="UserCardListGroups",y.__docgenInfo={description:"",displayName:"UserCardListGroups",props:{sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}},columnName:{defaultValue:null,description:"",name:"columnName",required:!0,type:{name:"string"}},facetValues:{defaultValue:null,description:"",name:"facetValues",required:!0,type:{name:"string[]"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"AVATAR"'},{value:'"SMALL USER CARD"'},{value:'"MEDIUM USER CARD"'},{value:'"LARGE USER CARD"'}]}},summaryLink:{defaultValue:null,description:"",name:"summaryLink",required:!1,type:{name:"string"}},summaryLinkText:{defaultValue:null,description:"",name:"summaryLinkText",required:!1,type:{name:"string"}},count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},useQueryResultUserData:{defaultValue:null,description:"",name:"useQueryResultUserData",required:!1,type:{name:"boolean"}}}}}catch{}const Fe={title:"Home Page/UserCardListGroups",component:y},u={args:{sql:"SELECT * FROM syn21781196 WHERE isFeatured='true'",columnName:"Project Title",facetValues:["Somatic Mosaicism in the brain of Tourette syndrome","Somatic Mosaicism in Schizophrenia and Control Brains","1/3-Schizophrenia Genetics and Brain Somatic Mosaicism","2/3-Schizophrenia Genetics and Brain Somatic Mosaicism","Role of brain somatic mosaicism in autism, schizophrenia, and bipolar disorder","Mosaicism in focal cortical dysplasias spectrum seen in neuropsychiatric disease","1/2-Somatic mosaicism and autism spectrum disorder","2/2-Somatic mosaicism and autism spectrum disorder","3/3-Schizophrenia Genetics and Brain Somatic Mosaicism"],size:h,useQueryResultUserData:!1,summaryLinkText:"Explore All People",summaryLink:"/Explore/People",count:6}};var f,R,L;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    sql: "SELECT * FROM syn21781196 WHERE isFeatured='true'",
    columnName: 'Project Title',
    facetValues: ['Somatic Mosaicism in the brain of Tourette syndrome', 'Somatic Mosaicism in Schizophrenia and Control Brains', '1/3-Schizophrenia Genetics and Brain Somatic Mosaicism', '2/3-Schizophrenia Genetics and Brain Somatic Mosaicism', 'Role of brain somatic mosaicism in autism, schizophrenia, and bipolar disorder', 'Mosaicism in focal cortical dysplasias spectrum seen in neuropsychiatric disease', '1/2-Somatic mosaicism and autism spectrum disorder', '2/2-Somatic mosaicism and autism spectrum disorder', '3/3-Schizophrenia Genetics and Brain Somatic Mosaicism'],
    size: MEDIUM_USER_CARD,
    useQueryResultUserData: false,
    summaryLinkText: 'Explore All People',
    summaryLink: '/Explore/People',
    count: 6
  }
}`,...(L=(R=u.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};const Be=["Demo"];export{u as Demo,Be as __namedExportsOrder,Fe as default};
//# sourceMappingURL=UserCardListGroups.stories-243f6ec8.js.map
