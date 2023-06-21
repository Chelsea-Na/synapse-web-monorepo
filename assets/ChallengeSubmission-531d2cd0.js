import{a as C,F as ie,j as e}from"./jsx-runtime-095bf462.js";import{R as de,r as n}from"./index-8db94870.js";import{u as $,am as fe,S as F,an as Ce,bT as re,bS as se,E as D,aM as ye,I as Ne,bf as me,G as A,b1 as Ee,aN as xe,bm as qe,b$ as Ie}from"./SynapseClient-8589b807.js";import{f as we,i as Me,g as _e,h as Pe,j as Le,k as Be,l as Oe}from"./useEntity-b5a34353.js";import{u as Ae}from"./useGetEntityChallenge-952c4fb5.js";import"./OrientationBanner-64c90f6a.js";import{g as pe,B as ce}from"./getEndpoint-ac94413e.js";import{u as Fe}from"./useGetUserTeams-497edbd2.js";import{a as oe}from"./RadioGroup-eb876a69.js";import{L as Z}from"./react-router-dom-bec1baac.js";import{O as De,a as Ge}from"./ConfirmationDialog-9744149e.js";import{f as he}from"./DateFormatter-72085c71.js";import{d as Se}from"./dayjs.min-8d4ef725.js";import{T as ke,d as He}from"./ToastMessage-bb65120b.js";import{I as be}from"./IconSvg-152a0feb.js";import{B as N}from"./Box-079b1034.js";import{I as je}from"./IconButton-055a3ecb.js";import{F as Ue}from"./FileUpload-885baf89.js";import{T as z}from"./Typography-bbc222e1.js";import{B as ze}from"./Button-6910d769.js";import{D as ue}from"./DataGrid-6d9ffcb0.js";import{S as We}from"./StepperDialog-39aa346b.js";import{T as Ye}from"./TextField-d56502c1.js";import{A as Qe}from"./AlertTitle-1c4986af.js";function $e(l,r){const{accessToken:m,keyFactory:i}=$();return fe(i.getTeamQueryKey(l),()=>F.getTeam(l,m),r)}const ee=({value:l,size:r=16,...m})=>{const[i,u]=de.useState(!1),p=de.createRef();return C(ie,{children:[e(ke,{text:"Successfully copied to clipboard",show:i,autohide:!0}),e(N,{display:"flex",ref:p,...m,children:e(je,{onClick:((s,b)=>v=>{v.preventDefault(),navigator.clipboard.writeText(b).then(()=>{u(!0),setTimeout(()=>{u(!1)},4e3)})})(p,l),children:e(be,{icon:"contentCopy",wrap:!1,sx:{width:`${r}px`,height:`${r}px`}})})})]})};try{ee.displayName="CopyToClipboardIcon",ee.__docgenInfo={description:"",displayName:"CopyToClipboardIcon",props:{p:{defaultValue:null,description:"",name:"p",required:!1,type:{name:"ResponsiveStyleValue<Padding<string | number> | NonNullable<Padding<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"ResponsiveStyleValue<string[] | Color> | ((theme: Theme) => ResponsiveStyleValue<string[] | Color>)"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:'ResponsiveStyleValue<number | "hidden" | (string & {}) | "inset" | "inherit" | "medium" | "none" | "grey" | "initial" | "-moz-initial" | "revert" | "revert-layer" | "unset" | "aliceblue" | "antiquewhite" | ... 184 more ...> | ((theme: Theme) => ResponsiveStyleValue<...>)'}},boxShadow:{defaultValue:null,description:"",name:"boxShadow",required:!1,type:{name:"ResponsiveStyleValue<number | BoxShadow> | ((theme: Theme) => ResponsiveStyleValue<number | BoxShadow>)"}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:"ResponsiveStyleValue<string | (string & {}) | (number & {})> | ((theme: Theme) => ResponsiveStyleValue<string | (string & {}) | (number & {})>)"}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!1,type:{name:"ResponsiveStyleValue<string | (string & {}) | (number & {})> | ((theme: Theme) => ResponsiveStyleValue<string | (string & {}) | (number & {})>)"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"ResponsiveStyleValue<string[] | AlignContent> | ((theme: Theme) => ResponsiveStyleValue<string[] | AlignContent>)"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"ResponsiveStyleValue<string[] | AlignItems> | ((theme: Theme) => ResponsiveStyleValue<string[] | AlignItems>)"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"ResponsiveStyleValue<string[] | AlignSelf> | ((theme: Theme) => ResponsiveStyleValue<string[] | AlignSelf>)"}},bottom:{defaultValue:null,description:"",name:"bottom",required:!1,type:{name:"ResponsiveStyleValue<Bottom<string | number> | NonNullable<Bottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},boxSizing:{defaultValue:null,description:"",name:"boxSizing",required:!1,type:{name:"ResponsiveStyleValue<BoxSizing | NonNullable<BoxSizing>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},columnGap:{defaultValue:null,description:"",name:"columnGap",required:!1,type:{name:"ResponsiveStyleValue<ColumnGap<string | number> | NonNullable<ColumnGap<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:"ResponsiveStyleValue<string[] | Display> | ((theme: Theme) => ResponsiveStyleValue<string[] | Display>)"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"ResponsiveStyleValue<FlexBasis<string | number> | NonNullable<FlexBasis<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"ResponsiveStyleValue<FlexDirection | NonNullable<FlexDirection>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"ResponsiveStyleValue<FlexGrow | NonNullable<FlexGrow>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"ResponsiveStyleValue<FlexShrink | NonNullable<FlexShrink>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"ResponsiveStyleValue<FlexWrap | NonNullable<FlexWrap>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},fontFamily:{defaultValue:null,description:"",name:"fontFamily",required:!1,type:{name:"ResponsiveStyleValue<string[] | FontFamily> | ((theme: Theme) => ResponsiveStyleValue<string[] | FontFamily>)"}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"ResponsiveStyleValue<FontSize<string | number> | NonNullable<FontSize<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},fontStyle:{defaultValue:null,description:"",name:"fontStyle",required:!1,type:{name:"ResponsiveStyleValue<string[] | FontStyle> | ((theme: Theme) => ResponsiveStyleValue<string[] | FontStyle>)"}},gridAutoColumns:{defaultValue:null,description:"",name:"gridAutoColumns",required:!1,type:{name:"ResponsiveStyleValue<GridAutoColumns<string | number> | NonNullable<GridAutoColumns<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},gridAutoFlow:{defaultValue:null,description:"",name:"gridAutoFlow",required:!1,type:{name:"ResponsiveStyleValue<string[] | GridAutoFlow> | ((theme: Theme) => ResponsiveStyleValue<string[] | GridAutoFlow>)"}},gridAutoRows:{defaultValue:null,description:"",name:"gridAutoRows",required:!1,type:{name:"ResponsiveStyleValue<GridAutoRows<string | number> | NonNullable<GridAutoRows<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},gridTemplateAreas:{defaultValue:null,description:"",name:"gridTemplateAreas",required:!1,type:{name:"ResponsiveStyleValue<string[] | GridTemplateAreas> | ((theme: Theme) => ResponsiveStyleValue<string[] | GridTemplateAreas>)"}},gridTemplateColumns:{defaultValue:null,description:"",name:"gridTemplateColumns",required:!1,type:{name:"ResponsiveStyleValue<GridTemplateColumns<string | number> | NonNullable<GridTemplateColumns<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},gridTemplateRows:{defaultValue:null,description:"",name:"gridTemplateRows",required:!1,type:{name:"ResponsiveStyleValue<GridTemplateRows<string | number> | NonNullable<GridTemplateRows<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"ResponsiveStyleValue<Height<string | number> | NonNullable<Height<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"ResponsiveStyleValue<string[] | JustifyContent> | ((theme: Theme) => ResponsiveStyleValue<string[] | JustifyContent>)"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"ResponsiveStyleValue<string[] | JustifyItems> | ((theme: Theme) => ResponsiveStyleValue<string[] | JustifyItems>)"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"ResponsiveStyleValue<string[] | JustifySelf> | ((theme: Theme) => ResponsiveStyleValue<string[] | JustifySelf>)"}},left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:"ResponsiveStyleValue<Left<string | number> | NonNullable<Left<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},letterSpacing:{defaultValue:null,description:"",name:"letterSpacing",required:!1,type:{name:"ResponsiveStyleValue<LetterSpacing<string | number> | NonNullable<LetterSpacing<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},lineHeight:{defaultValue:null,description:"",name:"lineHeight",required:!1,type:{name:"ResponsiveStyleValue<LineHeight<string | number> | NonNullable<LineHeight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginBottom:{defaultValue:null,description:"",name:"marginBottom",required:!1,type:{name:"ResponsiveStyleValue<MarginBottom<string | number> | NonNullable<MarginBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginLeft:{defaultValue:null,description:"",name:"marginLeft",required:!1,type:{name:"ResponsiveStyleValue<MarginLeft<string | number> | NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginRight:{defaultValue:null,description:"",name:"marginRight",required:!1,type:{name:"ResponsiveStyleValue<MarginRight<string | number> | NonNullable<MarginRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginTop:{defaultValue:null,description:"",name:"marginTop",required:!1,type:{name:"ResponsiveStyleValue<MarginTop<string | number> | NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"ResponsiveStyleValue<MaxHeight<string | number> | NonNullable<MaxHeight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"ResponsiveStyleValue<MaxWidth<string | number> | NonNullable<MaxWidth<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"ResponsiveStyleValue<MinHeight<string | number> | NonNullable<MinHeight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"ResponsiveStyleValue<MinWidth<string | number> | NonNullable<MinWidth<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},order:{defaultValue:null,description:"",name:"order",required:!1,type:{name:"ResponsiveStyleValue<Order | NonNullable<Order>[]> | ((theme: Theme) => ResponsiveStyleValue<Order | NonNullable<...>[] | undefined>)"}},paddingBottom:{defaultValue:null,description:"",name:"paddingBottom",required:!1,type:{name:"ResponsiveStyleValue<PaddingBottom<string | number> | NonNullable<PaddingBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingLeft:{defaultValue:null,description:"",name:"paddingLeft",required:!1,type:{name:"ResponsiveStyleValue<PaddingLeft<string | number> | NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingRight:{defaultValue:null,description:"",name:"paddingRight",required:!1,type:{name:"ResponsiveStyleValue<PaddingRight<string | number> | NonNullable<PaddingRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingTop:{defaultValue:null,description:"",name:"paddingTop",required:!1,type:{name:"ResponsiveStyleValue<PaddingTop<string | number> | NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:"ResponsiveStyleValue<Position | NonNullable<Position>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},right:{defaultValue:null,description:"",name:"right",required:!1,type:{name:"ResponsiveStyleValue<Right<string | number> | NonNullable<Right<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},rowGap:{defaultValue:null,description:"",name:"rowGap",required:!1,type:{name:"ResponsiveStyleValue<RowGap<string | number> | NonNullable<RowGap<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},textAlign:{defaultValue:null,description:"",name:"textAlign",required:!1,type:{name:"ResponsiveStyleValue<TextAlign | NonNullable<TextAlign>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},textOverflow:{defaultValue:null,description:"",name:"textOverflow",required:!1,type:{name:"ResponsiveStyleValue<string[] | TextOverflow> | ((theme: Theme) => ResponsiveStyleValue<string[] | TextOverflow>)"}},textTransform:{defaultValue:null,description:"",name:"textTransform",required:!1,type:{name:"ResponsiveStyleValue<TextTransform | NonNullable<TextTransform>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},top:{defaultValue:null,description:"",name:"top",required:!1,type:{name:"ResponsiveStyleValue<Top<string | number> | NonNullable<Top<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},visibility:{defaultValue:null,description:"",name:"visibility",required:!1,type:{name:"ResponsiveStyleValue<Visibility | NonNullable<Visibility>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},whiteSpace:{defaultValue:null,description:"",name:"whiteSpace",required:!1,type:{name:"ResponsiveStyleValue<WhiteSpace | NonNullable<WhiteSpace>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"ResponsiveStyleValue<Width<string | number> | NonNullable<Width<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},borderBottom:{defaultValue:null,description:"",name:"borderBottom",required:!1,type:{name:"ResponsiveStyleValue<BorderBottom<string | number> | NonNullable<BorderBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"ResponsiveStyleValue<string[] | BorderColor> | ((theme: Theme) => ResponsiveStyleValue<string[] | BorderColor>)"}},borderLeft:{defaultValue:null,description:"",name:"borderLeft",required:!1,type:{name:"ResponsiveStyleValue<BorderLeft<string | number> | NonNullable<BorderLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"ResponsiveStyleValue<BorderRadius<string | number> | NonNullable<BorderRadius<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},borderRight:{defaultValue:null,description:"",name:"borderRight",required:!1,type:{name:"ResponsiveStyleValue<BorderRight<string | number> | NonNullable<BorderRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},borderTop:{defaultValue:null,description:"",name:"borderTop",required:!1,type:{name:"ResponsiveStyleValue<BorderTop<string | number> | NonNullable<BorderTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"ResponsiveStyleValue<Flex<string | number> | NonNullable<Flex<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"ResponsiveStyleValue<Gap<string | number> | NonNullable<Gap<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},gridArea:{defaultValue:null,description:"",name:"gridArea",required:!1,type:{name:"ResponsiveStyleValue<GridArea | NonNullable<GridArea>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},gridColumn:{defaultValue:null,description:"",name:"gridColumn",required:!1,type:{name:"ResponsiveStyleValue<GridColumn | NonNullable<GridColumn>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},gridRow:{defaultValue:null,description:"",name:"gridRow",required:!1,type:{name:"ResponsiveStyleValue<GridRow | NonNullable<GridRow>[]> | ((theme: Theme) => ResponsiveStyleValue<GridRow | NonNullable<...>[] | undefined>)"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"ResponsiveStyleValue<Margin<string | number> | NonNullable<Margin<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:"ResponsiveStyleValue<string[] | Overflow> | ((theme: Theme) => ResponsiveStyleValue<string[] | Overflow>)"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"ResponsiveStyleValue<Padding<string | number> | NonNullable<Padding<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},bgcolor:{defaultValue:null,description:"",name:"bgcolor",required:!1,type:{name:"ResponsiveStyleValue<string[] | BackgroundColor> | ((theme: Theme) => ResponsiveStyleValue<string[] | BackgroundColor>)"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveStyleValue<Margin<string | number> | NonNullable<Margin<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveStyleValue<MarginTop<string | number> | NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveStyleValue<MarginRight<string | number> | NonNullable<MarginRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveStyleValue<MarginBottom<string | number> | NonNullable<MarginBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveStyleValue<MarginLeft<string | number> | NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:"ResponsiveStyleValue<MarginLeft<string | number> | NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginX:{defaultValue:null,description:"",name:"marginX",required:!1,type:{name:"ResponsiveStyleValue<MarginLeft<string | number> | NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveStyleValue<MarginTop<string | number> | NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginY:{defaultValue:null,description:"",name:"marginY",required:!1,type:{name:"ResponsiveStyleValue<MarginTop<string | number> | NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},pt:{defaultValue:null,description:"",name:"pt",required:!1,type:{name:"ResponsiveStyleValue<PaddingTop<string | number> | NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},pr:{defaultValue:null,description:"",name:"pr",required:!1,type:{name:"ResponsiveStyleValue<PaddingRight<string | number> | NonNullable<PaddingRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},pb:{defaultValue:null,description:"",name:"pb",required:!1,type:{name:"ResponsiveStyleValue<PaddingBottom<string | number> | NonNullable<PaddingBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},pl:{defaultValue:null,description:"",name:"pl",required:!1,type:{name:"ResponsiveStyleValue<PaddingLeft<string | number> | NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},px:{defaultValue:null,description:"",name:"px",required:!1,type:{name:"ResponsiveStyleValue<PaddingLeft<string | number> | NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingX:{defaultValue:null,description:"",name:"paddingX",required:!1,type:{name:"ResponsiveStyleValue<PaddingLeft<string | number> | NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},py:{defaultValue:null,description:"",name:"py",required:!1,type:{name:"ResponsiveStyleValue<PaddingTop<string | number> | NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingY:{defaultValue:null,description:"",name:"paddingY",required:!1,type:{name:"ResponsiveStyleValue<PaddingTop<string | number> | NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},typography:{defaultValue:null,description:"",name:"typography",required:!1,type:{name:"ResponsiveStyleValue<string> | ((theme: Theme) => ResponsiveStyleValue<string>)"}},displayPrint:{defaultValue:null,description:"",name:"displayPrint",required:!1,type:{name:"ResponsiveStyleValue<string[] | Display> | ((theme: Theme) => ResponsiveStyleValue<string[] | Display>)"}},component:{defaultValue:null,description:`The component used for the root node.
Either a string to use a HTML element or a component.`,name:"component",required:!1,type:{name:"ElementType<any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},size:{defaultValue:{value:"16"},description:"",name:"size",required:!1,type:{name:"number"}}}}}catch{}function te({pageSize:l,challengeProjectId:r,entityType:m,onItemSelected:i}){const u=Ce(),{accessToken:p,keyFactory:S}=$(),[s,b]=n.useState(0),[v,y]=n.useState(),[h,V]=n.useState(),[a,E]=n.useState(),[R,M]=n.useState([]),[H,P]=n.useState(null),[W,j]=n.useState(!1),[Q,B]=n.useState(!1),[x,Y]=n.useState(),_=l,O=50,U=`${pe(ce.PORTAL_ENDPOINT)}#!Synapse:${r}`,L={parentId:r,nextPageToken:W?H:null,includeTypes:[m],includeTotalChildCount:!0,sortBy:re.MODIFIED_ON,sortDirection:se.DESC},{data:o,refetch:T}=De(L,{enabled:!!r,useErrorBoundary:!0,onSuccess:t=>{const f=[...R],w=Math.floor((s+1)*_/O)*O;f.splice(w,w+O,...t.page),M(f),j(!1),P(t.nextPageToken)}});function q(){const t=s*_;return R.slice(t,t+_)}function g(){V(void 0),E(void 0),M([]),P(null),j(!1),T()}n.useEffect(()=>{g()},[m,l]);const{isLoading:J,data:K}=we(q()),c=async t=>{E(!1);const f=K.find(d=>(d==null?void 0:d.id)===t);if(f){if(y(f),m===D.DOCKER_REPO){let d;try{d=await F.getDockerTag(f.id,p,0,1)}catch(w){return V(w.message)}if(d.totalNumberOfResults===0)return V("No commits have been made to this repository. Please select a repository with at least one commit.")}E(!0),V(void 0)}},I=[{field:"radiobutton",headerName:"",width:25,sortable:!1,filterable:!1,hideable:!1,disableColumnMenu:!0,renderCell:t=>e(oe,{value:t.id,currentValue:v==null?void 0:v.id,onChange:f=>{c(f)},label:"",groupId:"radiogroup",style:{marginBottom:"16px"}})},{field:"name",headerName:m===D.DOCKER_REPO?"Docker Repository":"File Name",flex:1,filterable:!1,hideable:!1,disableColumnMenu:!0,renderCell:t=>e(Z,{to:{pathname:`${pe(ce.PORTAL_ENDPOINT)}#!Synapse:${t.row.id}`},target:"_blank",children:t.row.name})},{field:"modifiedOn",headerName:"Updated On",width:100,filterable:!1,hideable:!1,disableColumnMenu:!0},{field:"id",headerName:"ID",width:200,filterable:!1,hideable:!1,disableColumnMenu:!0}],G=t=>{const f=[];return t.forEach(d=>{f.push({id:d.id,name:m===D.DOCKER_REPO?d.repositoryName??d.name:d.name,modifiedOn:he(Se(d.modifiedOn),"MM/DD/YY")})}),f},X=t=>{Math.min((o==null?void 0:o.totalChildCount)??0,(t+1)*_)>R.length&&j(!0),b(t)},Ve=()=>{i(v)};function ve(t){if(!t)return;const{fileHandleId:f,fileName:d}=t,w={parentId:r,name:d,concreteType:me,dataFileHandleId:f};F.createEntity(w,p).then(()=>{g()}).catch(k=>{V(k.reason)})}async function Re(){if(!x)return;const{fileHandleId:t,entityId:f}=x;if(!f)return V("Error: missing entityId. Please try again.");let d;try{d=await F.getEntity(p,f)}catch{return V(`The entity ${f} could not be retrieved.`)}const w={id:d.id,name:d.name,dataFileHandleId:t,concreteType:me,parentId:d.parentId,etag:d.etag,modifiedOn:d.modifiedOn};try{const k=await F.updateEntity(w,p,!0);await Me(u,S,k.id),u.setQueryData(S.getEntityQueryKey(k.id),k),g()}catch(k){V(k.reason)}}const Te=async t=>{if(t.success&&t.resp){const{fileName:f}=t.resp,d={entityName:f,parentId:r};try{const w=await F.lookupChildEntity(d,p);w&&(Y({...t.resp,entityId:w.id}),B(!0))}catch{Y(void 0),ve(t.resp)}}else!t.success&&t.error?V(t.error.reason):V("An unknown error occurred. Please try again.")};return C(N,{children:[C(N,{sx:{display:"flex",backgroundColor:"#FBFBFC",padding:"10px",justifyContent:"space-between"},children:[e(z,{variant:"h6",sx:{fontSize:"18px",lineHeight:"20px",fontWeight:700},children:"Your Submission Directory"}),C(N,{sx:{display:"flex"},children:[C(z,{variant:"body1",sx:{fontSize:"14px",color:"#71767F"},children:["Project SynID:","  ",e(Z,{to:{pathname:U},target:"_blank",children:r})]}),e(ee,{value:U,sx:{marginTop:"-4px"}})]})]}),e(N,{children:e(ue,{initialState:{pagination:{page:s}},loading:J,columns:I,rows:G(K),pageSize:_,rowCount:(o==null?void 0:o.totalChildCount)??0,page:s,pagination:!0,paginationMode:"server",onPageChange:t=>X(t),density:"compact",autoHeight:!0,rowsPerPageOptions:[_],sx:{fontSize:"14px",border:"none",height:"100%","& .MuiDataGrid-columnHeader":{backgroundColor:"#F1F3F5"},"& .Mui-odd":{backgroundColor:"#FBFBFC"},".MuiDataGrid-columnHeaderTitleContainer":{justifyContent:"space-between"}},getRowClassName:t=>t.indexRelativeToCurrentPage%2===0?"Mui-even":"Mui-odd"})}),h&&e(ye,{error:h}),C(N,{display:"flex",justifyContent:"space-between",children:[m===D.FILE&&e(Ue,{label:"Upload File",buttonProps:{variant:"outlined",endIcon:e(be,{icon:"upload"}),sx:{lineHeight:1}},onComplete:t=>{Te(t)}}),e(ze,{color:"primary",variant:"contained",onClick:Ve,disabled:!a,children:"Submit Selection"})]}),m===D.DOCKER_REPO&&C(N,{mt:4,display:"flex",children:[e(Ne,{sx:{width:"16px",height:"16px",verticalAlign:"text-bottom"}}),C(N,{ml:2,children:["To learn more about how to create and submit the Docker containers using command line, see our"," ",e(Z,{to:{pathname:"https://github.com/Sage-Bionetworks-Challenges/sample-model-templates#build-your-model"},target:"_blank",children:"Docker model submission guide"}),"."]})]}),e(Ge,{open:Q,title:"File exists",content:C(z,{variant:"body1",sx:{fontSize:"16px"},children:['A file named "',x==null?void 0:x.fileName,'" (',x==null?void 0:x.entityId,") already exists in this location. Do you want to update the existing file and create a new version?"]}),onCancel:()=>B(!1),onConfirm:()=>{Re(),B(!1)}})]})}try{te.displayName="SubmissionDirectoryList",te.__docgenInfo={description:"",displayName:"SubmissionDirectoryList",props:{pageSize:{defaultValue:null,description:"",name:"pageSize",required:!0,type:{name:"number"}},challengeProjectId:{defaultValue:null,description:"",name:"challengeProjectId",required:!0,type:{name:"string"}},entityType:{defaultValue:null,description:"",name:"entityType",required:!0,type:{name:"enum",value:[{value:'"file"'},{value:'"dockerrepo"'}]}},onItemSelected:{defaultValue:null,description:"",name:"onItemSelected",required:!0,type:{name:"(selected: EntityItem) => void"}}}}}catch{}function Ke(l,r=0,m=20,i=re.CREATED_ON,u=se.DESC,p){const{accessToken:S,keyFactory:s}=$();return fe(s.getPaginatedDockerTagQueryKey(l,r.toString(),m.toString(),i,u),()=>F.getDockerTag(l,S,r,m,i,u),p)}function ne({repository:l,selectedCommit:r,onCommitChanged:m}){const[i,u]=n.useState(0),p=10,{isLoading:S,data:s}=Ke(l.id,i*p,p,re.CREATED_ON,se.DESC),b=a=>{const R=((s==null?void 0:s.results)??[]).find(M=>M.digest===a);R&&m(R)},v=[{field:"radiobutton",headerName:"",width:25,sortable:!1,filterable:!1,hideable:!1,disableColumnMenu:!0,renderCell:a=>e(oe,{value:a.id,currentValue:r==null?void 0:r.digest,onChange:b,label:"",groupId:"radiogroup",style:{marginBottom:"16px"}})},{field:"tag",headerName:"Tag",flex:1,filterable:!1,hideable:!1,disableColumnMenu:!0},{field:"createdOn",headerName:"Created On",width:100,filterable:!1,hideable:!1,disableColumnMenu:!0},{field:"digest",headerName:"Digest",width:200,filterable:!1,hideable:!1,disableColumnMenu:!0}],y=a=>{const E=[];return a.forEach(R=>{E.push({id:R.digest,tag:R.tag,digest:R.digest,createdOn:he(Se(R.createdOn),"MM/DD/YY")})}),E},h=()=>y((s==null?void 0:s.results)??[]),V=a=>{u(a)};return C(N,{children:[e(N,{sx:{display:"flex",backgroundColor:"#FBFBFC",padding:"10px",justifyContent:"space-between"},children:C(z,{variant:"h6",sx:{fontSize:"18px",lineHeight:"20px",fontWeight:700},children:["Available commits for ",l.repositoryName]})}),e(N,{children:e(ue,{initialState:{pagination:{page:i}},loading:S,columns:v,rows:h(),pageSize:p,rowCount:(s==null?void 0:s.totalNumberOfResults)??0,page:i,pagination:!0,paginationMode:"server",onPageChange:a=>V(a),density:"compact",autoHeight:!0,rowsPerPageOptions:[p],sx:{fontSize:"14px",border:"none",height:"100%","& .MuiDataGrid-columnHeader":{backgroundColor:"#F1F3F5"},"& .Mui-odd":{backgroundColor:"#FBFBFC"},".MuiDataGrid-columnHeaderTitleContainer":{justifyContent:"space-between"}},getRowClassName:a=>a.indexRelativeToCurrentPage%2===0?"Mui-even":"Mui-odd"})})]})}try{ne.displayName="SubmissionCommitList",ne.__docgenInfo={description:"",displayName:"SubmissionCommitList",props:{repository:{defaultValue:null,description:"",name:"repository",required:!0,type:{name:"EntityItem"}},selectedCommit:{defaultValue:null,description:"",name:"selectedCommit",required:!0,type:{name:"DockerCommit | undefined"}},onCommitChanged:{defaultValue:null,description:"",name:"onCommitChanged",required:!0,type:{name:"(value: DockerCommit) => void"}}}}}catch{}function ae({projectId:l,submissonName:r,selectedEvaluation:m,onSubmissionNameChange:i,onEvaluationChange:u,submissionError:p}){const{isLoading:S,data:s}=_e(l,{activeOnly:!0,accessType:A.SUBMIT});return C(N,{children:[e(N,{sx:{display:"flex",backgroundColor:"#FBFBFC",padding:"10px"},children:e(z,{variant:"h6",sx:{fontSize:"18px",lineHeight:"20px",fontWeight:700},children:"Your Submission Directory"})}),e(ue,{columns:[{field:"radiobutton",width:25,sortable:!1,filterable:!1,hideable:!1,disableColumnMenu:!0,renderCell:y=>e(oe,{value:y.id,currentValue:m,onChange:u,label:"",groupId:"radiogroup",style:{marginBottom:"16px"}})},{field:"name",flex:1,filterable:!1,hideable:!1,disableColumnMenu:!0}],rows:(()=>{var y;return(y=s??[])==null?void 0:y.map(h=>({id:h.id,name:h.name}))})(),hideFooter:!0,density:"compact",autoHeight:!0,loading:S,components:{Header:()=>null,Toolbar:()=>null},sx:{fontSize:"14px",border:"none",height:"100%","& .MuiDataGrid-columnHeaders":{display:"none"},"& .MuiDataGrid-virtualScroller":{marginTop:"0px !important"},"& .Mui-odd":{backgroundColor:"#FBFBFC"},".MuiDataGrid-columnHeaderTitleContainer":{justifyContent:"space-between"}},getRowClassName:y=>y.indexRelativeToCurrentPage%2===0?"Mui-even":"Mui-odd"}),C(N,{mt:3,children:[e(z,{variant:"body1",children:"Submission Name (optional)"}),e(Ye,{id:"submissionName",name:"submissionName",fullWidth:!0,onChange:y=>i(y.target.value),value:r}),p&&e(N,{mt:1,children:e(Qe,{severity:"error",children:p})})]})]})}try{ae.displayName="EvaluationQueueList",ae.__docgenInfo={description:"",displayName:"EvaluationQueueList",props:{projectId:{defaultValue:null,description:"",name:"projectId",required:!0,type:{name:"string"}},submissonName:{defaultValue:null,description:"",name:"submissonName",required:!0,type:{name:"string"}},selectedEvaluation:{defaultValue:null,description:"",name:"selectedEvaluation",required:!0,type:{name:"string | undefined"}},onSubmissionNameChange:{defaultValue:null,description:"",name:"onSubmissionNameChange",required:!0,type:{name:"(value: string) => void"}},onEvaluationChange:{defaultValue:null,description:"",name:"onEvaluationChange",required:!0,type:{name:"(value: string) => void"}},submissionError:{defaultValue:null,description:"",name:"submissionError",required:!1,type:{name:"string"}}}}}catch{}const Je={SELECT_COMMIT:{id:"SELECT_COMMIT",title:"Select Commit for Submission",nextStep:"SELECT_EVALUATION",nextEnabled:!1},SELECT_EVALUATION:{id:"SELECT_EVALUATION",title:"Select Evaluation Queue",previousStep:"SELECT_COMMIT",confirmStep:"SUBMISSION_SUCCESS",confirmButtonText:"Submit"},SUBMISSION_SUCCESS:{id:"SUBMISSION_SUCCESS",title:"Submission Successful!",confirmButtonText:"Close",confirmEnabled:!0}},Xe={SELECT_COMMIT:{id:"SELECT_COMMIT",title:""},SELECT_EVALUATION:{id:"SELECT_EVALUATION",title:"Select Evaluation Queue",confirmStep:"SUBMISSION_SUCCESS",confirmButtonText:"Submit"},SUBMISSION_SUCCESS:{id:"SUBMISSION_SUCCESS",title:"Submission Successful!",confirmButtonText:"Close",confirmEnabled:!0}},Ze=l=>l===D.DOCKER_REPO?Je:Xe;function le({projectId:l,userId:r,teamId:m,entity:i,entityType:u,isShowingModal:p,onClose:S}){const{accessToken:s}=$(),b=Ze(u),v=u===D.DOCKER_REPO?b.SELECT_COMMIT:b.SELECT_EVALUATION,[y,h]=n.useState(v),[V,a]=n.useState(),[E,R]=n.useState(),[M,H]=n.useState(""),[P,W]=n.useState(),[j,Q]=n.useState(!1),B=()=>{a(void 0),R(void 0),H(""),W(void 0),Q(!1),S(),h(v)};function x(o){!o||!b[o]||(a(void 0),h(b[o]))}async function Y(){if(!P)return a("Please select an evaluation.");try{return await F.getSubmissionEligibility(P,m,s)}catch(o){return a(o.message)}}async function _(o){if(!i.id||u===D.DOCKER_REPO&&!E)return a("Error: Invalid entity or commit.");const T=o.membersEligibility.filter(g=>!g.hasConflictingSubmission&&g.isEligible&&!g.isQuotaFilled&&g.isRegistered).map(g=>({principalId:g.principalId.toString()})),q={userId:r,evaluationId:P,entityId:i.id,versionNumber:i.versionNumber??-1,teamId:m,contributors:T};u===D.DOCKER_REPO&&(q.dockerRepositoryName=i.repositoryName,q.dockerDigest=E.digest),M!==""&&(q.name=M);try{await F.submitToEvaluation(s,q,i.etag,o.eligibilityStateHash),He("Submitted successfully!","success"),B()}catch(g){a(g.message)}}const O=async()=>{const o=await Y();o&&await _(o)},U=o=>{R(o),h({...y,nextEnabled:!0})};function L(){switch(y.id){case"SELECT_COMMIT":return e(ne,{repository:i,selectedCommit:E,onCommitChanged:U});case"SELECT_EVALUATION":return e(ae,{projectId:l,submissonName:M,onSubmissionNameChange:H,selectedEvaluation:P,onEvaluationChange:o=>{h({...y,confirmEnabled:!0}),W(o)}});case"SUBMISSION_SUCCESS":return e(z,{variant:"body1",sx:{fontSize:"16px"},children:"Your submission will be scored and results posted to the Challenge Leaderboard."});default:return e(ie,{})}}return e(We,{errorMessage:V,onCancel:B,onStepChange:x,open:p,onConfirm:O,confirming:j,step:y,content:L(),loading:!1})}try{le.displayName="ChallengeSubmissionStepper",le.__docgenInfo={description:"",displayName:"ChallengeSubmissionStepper",props:{projectId:{defaultValue:null,description:"",name:"projectId",required:!0,type:{name:"string"}},userId:{defaultValue:null,description:"",name:"userId",required:!0,type:{name:"string"}},teamId:{defaultValue:null,description:"",name:"teamId",required:!0,type:{name:"string"}},entity:{defaultValue:null,description:"",name:"entity",required:!0,type:{name:"EntityItem"}},entityType:{defaultValue:null,description:"",name:"entityType",required:!0,type:{name:"enum",value:[{value:'"file"'},{value:'"dockerrepo"'}]}},isShowingModal:{defaultValue:null,description:"",name:"isShowingModal",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}}}catch{}function ge({entityType:l,projectId:r,pageSize:m=10}){const{accessToken:i}=$(),u=!!i,[p,S]=n.useState(!0),[s,b]=n.useState(),[v,y]=n.useState(),[h,V]=n.useState(),[a,E]=n.useState(),[R,M]=n.useState(),[H,P]=n.useState(),{mutate:W}=Pe(),[j,Q]=n.useState(!1),[B,x]=n.useState(),[Y,_]=n.useState(!1),O="",U=(c,I)=>{const G=`Challenge Submission Project-${c.projectId}-${I.id}`,X=G.replace(/\s+/g,"_").replace(/-+/g,"_").toLowerCase();return{name:G,alias:X,concreteType:qe,description:`This Project was automatically created for Team "${I.name}" for Challenge "${c.id}"`}},{data:L,isLoading:o}=Ee({enabled:u,onError:()=>{S(!1),b("Error: Could not retrieve user profile")}}),{data:T}=Ae(r,{enabled:u&&!!r,refetchInterval:1/0,useErrorBoundary:!0}),{data:q}=Fe((T==null?void 0:T.id)??O,2);n.useEffect(()=>{if(u&&T&&q){if(!(q.results.length>0))return b("Error: Please join a Submission Team before continuing."),S(!1);if(q.results.length>1)return b("Error: You are a member of more than one Submission Team. You may only belong to one Submission Team per Challenge."),S(!1);y(q.results[0])}},[T,u,q]);const{data:g}=$e(v,{enabled:!!v,refetchInterval:1/0,useErrorBoundary:!0});Le((a==null?void 0:a.alias)??O,{enabled:a!==void 0&&!!T&&!!g,onSettled:(c,I)=>{c&&(P(!0),V(c.id)),I&&P(!1)}}),Be(h??O,{enabled:!!h&&R===!0,refetchInterval:1/0,useErrorBoundary:!0,onSettled:c=>{if(c){const I={principalId:Number(g.id),accessType:[A.CHANGE_PERMISSIONS,A.CHANGE_SETTINGS,A.CREATE,A.DELETE,A.DOWNLOAD,A.MODERATE,A.READ,A.UPDATE]};W({...c,resourceAccess:[...c.resourceAccess,I]}),M(!1)}}}),Oe(h,{enabled:!!h,refetchInterval:1/0,onSettled:(c,I)=>{c&&c.canView&&c.canAddChild&&Q(!0),I&&b("You do not have permission to submit for this challenge team."),S(!1)}}),n.useEffect(()=>{!u&&(L||!o)&&(S(!1),b("Please login to continue."))},[u,L,o]),n.useEffect(()=>{if(i&&g&&T&&!a){const c=U(T,g);E(c)}},[i,g,T,a]),n.useEffect(()=>{async function c(){const I=U(T,g),G=await Ie(I,i);G&&G.id&&(V(G.id),M(!0))}i&&g&&T&&a&&H===!1&&c()},[i,g,T,a,H]);const J=c=>{x(c),_(!0)},K=()=>{_(!1)};return C(xe,{children:[p&&e("span",{"data-testid":"SpinnerButton-spinner",className:"spinner"}),j&&C(ie,{children:[e(te,{entityType:l,pageSize:m,challengeProjectId:h,onItemSelected:J}),L&&B&&e(le,{projectId:r,userId:L==null?void 0:L.ownerId,teamId:v,entity:B,entityType:l,isShowingModal:Y,onClose:K})]}),s&&e(ye,{error:s})]})}try{ge.displayName="ChallengeSubmission",ge.__docgenInfo={description:"",displayName:"ChallengeSubmission",props:{entityType:{defaultValue:null,description:"",name:"entityType",required:!0,type:{name:"enum",value:[{value:'"file"'},{value:'"dockerrepo"'}]}},pageSize:{defaultValue:{value:"10"},description:"",name:"pageSize",required:!1,type:{name:"number"}},projectId:{defaultValue:null,description:"",name:"projectId",required:!0,type:{name:"string"}}}}}catch{}export{ge as C};
//# sourceMappingURL=ChallengeSubmission-531d2cd0.js.map
