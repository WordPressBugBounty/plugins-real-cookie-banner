"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[349],{53810:(e,t,n)=>{n.d(t,{Z:()=>i});var s=n(41594);function i(e,t){(0,s.useEffect)((()=>{const t=new AbortController,n=[()=>t.abort()];return(async()=>{try{const s=await e({abortController:t,aborted:()=>t.signal.aborted});"function"==typeof s&&n.push(s)}catch(e){if("AbortError"!==e.name)throw e}})(),()=>n.forEach((e=>e()))}),t)}},82706:(e,t,n)=>{n.r(t),n.d(t,{CookieGroupsTabLayout:()=>B});var s=n(3713),i=n(41594),r=n(57922),o=n(30617),a=n(18197),l=n(5190),c=n(30338),d=n(69665),u=n(71951),p=n(19117),g=n(91386),h=n(65216),m=n(3820),x=n(59726),v=n(52113);const f=Symbol(),j=()=>(0,v.NV)(f);var y=n(9551);const b=()=>{const{__:e}=(0,x.s)();return(0,s.jsx)(g.A.Item,{label:e("Name"),name:"name",required:!0,style:{marginBottom:12},rules:[{required:!0,message:e("Please enter a name!")}],children:(0,s.jsx)(y.A,{autoFocus:!0,onKeyDown:e=>e.stopPropagation()})})};var C=n(55531);const k=()=>{const{__:e}=(0,x.s)(),{defaultTemplateValues:{description:t}}=j();return(0,s.jsx)(g.A.Item,{label:(0,s.jsxs)(s.Fragment,{children:[e("Description"),!!t&&(0,s.jsx)(g.A.Item,{shouldUpdate:(e,t)=>e.name!==t.name,noStyle:!0,children:e=>{let{getFieldValue:n,setFieldsValue:i}=e;return n("description")!==t&&(0,s.jsx)("a",{style:{marginLeft:10},onClick:()=>i({description:t}),children:(0,s.jsx)(C.A,{})})}})]}),name:"description",required:!0,style:{marginBottom:12},rules:[{required:!0,message:e("Please enter a description!")}],children:(0,s.jsx)(y.A.TextArea,{autoSize:!0,onKeyDown:e=>e.stopPropagation()})})};var A=n(17312);const w=()=>{const{__:e}=(0,x.s)(),{onCancel:t,recordId:n,languages:i,languageOnClick:r}=j();return(0,s.jsxs)("div",{children:[(null==i?void 0:i.length)>0&&(0,s.jsx)(g.A.Item,{label:e("Translations"),style:{marginBottom:12},children:(0,s.jsx)(A.r,{recordId:n,languages:i,onClick:r})}),(0,s.jsx)(b,{}),(0,s.jsx)(k,{}),(0,s.jsxs)(g.A.Item,{children:[!!t&&(0,s.jsx)("button",{className:"button",onClick:e=>{e.preventDefault(),t()},children:e("Cancel")}),(0,s.jsx)("input",{type:"submit",className:"button button-primary right",value:e("Save")})]})]})};var O=n(32150);const S=(0,r.PA)((e=>{let{onClose:t,edit:n,navigateAfterCreation:i=!0}=e;const{message:r}=p.A.useApp(),l=(0,d.useNavigate)(),{cookieStore:c,optionStore:{others:{defaultCookieGroupTexts:{[(null==n?void 0:n.data.name)||""]:j}}}}=(0,u.g)(),y=null==n?void 0:n.data,{form:b,defaultValues:C,isBusy:k,onFinish:A,onFinishFailed:S,onValuesChange:N,contextValue:T}=function(e){const{__:t}=(0,x.s)(),{attributes:n,template:s}=e,i={name:(null==n?void 0:n.name)||(null==s?void 0:s.name)||"",description:(null==n?void 0:n.description)||(null==s?void 0:s.description)||""};return{...(0,m.S)({...e,defaultValues:i,i18n:{successMessage:t("You have successfully saved the service group."),validationError:t("The service group could not be saved due to missing/invalid form values."),unloadConfirm:t("You have unsaved changes. If you leave this page, your changes will be discarded.")}}),defaultValues:i,contextValue:{defaultTemplateValues:s?i:{}}}}({template:j?{identifier:"none",version:1,name:"",description:j}:void 0,handleSave:async e=>{try{if(n)return n.setName(e.name),n.setDescription(e.description),await n.patch(),()=>{};{const n=new h.r(c.groups,{name:e.name,description:e.description,meta:{order:c.groups.entries.size,isEssential:!1,isDefault:!1}});return await n.persist(),null==t||t(),()=>i&&l(`/cookies/${n.key.toString()}`)}}catch(e){const{code:t,...n}=e.responseJSON;throw["term_exists","duplicate_term_slug"].indexOf(t)>-1?(0,o.__)("The service group already exists!"):n.message}}}),I=n?{name:y.name,description:y.description}:C,[_,E]=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,v.gm)(f,...t)}({...T,recordId:null==y?void 0:y.id,languages:null==y?void 0:y.multilingual,languageOnClick:async(e,t)=>{let{code:n,id:s}=t;try{const t=!1===s?(await(0,O.C)("rcb-cookie-group",e,n)).id:s,i=new URL(window.location.href);i.hash=`#/cookies/${t}`,i.searchParams.set("lang",n),window.location.href=i.toString()}catch(e){var i;if(!(null==(i=e.responseJSON)?void 0:i.message))throw e;r.error(e.responseJSON.message)}},onCancel:t});return(0,s.jsx)(_,{value:E,children:(0,s.jsxs)(a.A,{spinning:k,children:[(0,s.jsx)("strong",{children:n?(0,o.__)("Edit service group"):(0,o.__)("Add new service group")}),(0,s.jsx)("hr",{}),(0,s.jsx)(g.A,{name:"edit-group-form",form:b,style:{width:300},layout:"vertical",initialValues:I,onFinish:A,onFinishFailed:S,onValuesChange:N,labelWrap:!0,children:(0,s.jsx)(w,{})})]})})}));var N=n(53029),T=n(43012),I=n(64715),_=n(24262),E=n(69609),D=n(55924);const G=(0,r.PA)((e=>{let{group:t}=e;const{optionStore:{others:{hints:{deleteCookieGroup:n}}},cookieStore:{essentialGroup:r}}=(0,u.g)(),{busy:l,data:{id:p,name:g,description:h}}=t,[m,x]=(0,i.useState)(!1),v=(0,E.K)().group.key===t.key,f=p===r.key,j=(0,d.useNavigate)(),y=(0,i.useCallback)((async()=>{await t.delete({force:!0}),j(`/cookies/${r.key.toString()}`,{replace:!0})}),[t,r,v]);return(0,s.jsxs)(a.A,{spinning:l,children:[(0,s.jsx)(I.A,{title:h,placement:"bottomLeft",children:(0,s.jsx)("span",{children:g})}),v&&(0,s.jsx)(c.A,{open:m,arrow:{pointAtCenter:!0},content:(0,s.jsx)(S,{edit:t,onClose:()=>x(!1)}),placement:"bottomLeft",children:(0,s.jsx)(N.A,{onClick:()=>x(!0),style:{margin:0,marginLeft:5}})}),v&&(f?(0,s.jsx)(I.A,{placement:"bottomLeft",arrow:{pointAtCenter:!0},overlay:(0,o.__)('The "%s" service group cannot be deleted.',g),children:(0,s.jsx)(T.A,{style:{margin:0,marginLeft:5,color:"#d2d2d2"}})}):(0,s.jsx)(_.A,{title:(0,D.g)([(0,o.__)("Are you sure you want to delete this service group? All services within this group will also be deleted. Consider moving them before you delete the service group."),...n].join("\n\n")),placement:"bottom",onConfirm:y,okText:(0,o.__)("Delete"),cancelText:(0,o.__)("Cancel"),overlayStyle:{maxWidth:350},onOpenChange:()=>x(!1),children:(0,s.jsx)(T.A,{style:{margin:0,marginLeft:5}})}))]})}));var L=n(41669),P=n.n(L),M=n(89657),F=n(53810);const B=(0,r.PA)((()=>{const{cookieStore:e,optionStore:t}=(0,u.g)(),{essentialGroup:n,groups:{sortedGroups:r}}=e,p=(0,d.useParams)(),{pathname:g}=(0,d.useLocation)(),h=g.indexOf("tcf-vendors")>-1,[m,x]=(0,i.useState)(!1),v=(h?"tcf-vendors":p.cookieGroup)||(null==n?void 0:n.key.toString()),f=!h&&!p.cookieGroup,j=(0,d.useNavigate)(),{isBannerActive:y,isOnlyRcbCookieCreated:b,isTcf:C}=t,{groups:k}=e,A=(e=>{const t=(0,i.useRef)(),{cookieStore:n}=(0,u.g)(),{groups:{entries:{size:s}},essentialGroup:r}=n;return(0,i.useLayoutEffect)((()=>{if(t.current&&e&&s>1){const e=P()(t.current).find(".rcb-antd-tabs-nav-wrap > div:first");return e.sortable({items:"> .rcb-antd-tabs-tab",helper:"clone",cancel:"",axis:"x",start:(e,t)=>{t.placeholder.height("auto")},update:()=>{const t=e.find("> div > [aria-controls]").toArray().map((e=>+e.getAttribute("aria-controls").split("-").pop()));n.groups.orderCookieGroups(t)}}),()=>e.sortable("destroy")}return()=>{}}),[t.current,s,n,r]),t})(!f),w=(0,i.useCallback)((()=>{f&&n&&j(C?"tcf-vendors":n.key.toString(),{replace:!0})}),[f,n,C]);return(0,F.Z)((async t=>{let{aborted:s}=t;n||(await e.fetchGroups(),s()||w())}),[n,w,C]),(0,i.useEffect)((()=>{w()}),[w]),f||0===r.length?(0,s.jsx)(a.A,{style:{margin:"auto",marginTop:15}}):(0,s.jsx)(a.A,{spinning:k.busy,children:(0,s.jsxs)("div",{ref:A,children:[!y&&!b&&(0,s.jsx)("div",{className:"notice notice-warning inline below-h2 notice-alt",style:{margin:"10px 0 0 0"},children:(0,s.jsxs)("p",{children:[(0,o.__)("The cookie banner is globally deactivated in the settings and is therefore not displayed on your website.")," ","• ",(0,s.jsx)("a",{href:"#/settings",children:(0,o.__)("Enable now")})]})}),(0,s.jsx)(l.A,{destroyInactiveTabPane:!0,activeKey:v,tabBarExtraContent:-1===["tcf-vendors"].indexOf(v)&&(0,s.jsx)(c.A,{open:m,content:(0,s.jsx)(S,{onClose:()=>x(!1)}),placement:"bottomRight",children:(0,s.jsx)("button",{className:"button button-primary button-large",style:{marginTop:6},onClick:()=>x(!m),children:(0,o.__)("Add group")})}),onTabClick:e=>{j(`/cookies/${e}`)},items:[C&&{key:"tcf-vendors",label:(0,o.__)("TCF Vendors"),children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.Outlet,{}),(0,s.jsx)(M.b,{identifier:"tcf-vendor"})]})},C&&{key:"tcf-vendors-split",label:(0,s.jsx)("span",{children:"•"}),disabled:!0,children:(0,s.jsx)("div",{})},...r.map((e=>({key:e.key.toString(),label:(0,s.jsx)(G,{group:e}),children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.Outlet,{}),(0,s.jsx)(M.b,{identifier:"cookie"})]})})))].filter(Boolean)})]})})}))},2493:(e,t,n)=>{n.r(t),n.d(t,{CookiesList:()=>B});var s=n(3713),i=n(41594),r=n(57922),o=n(53603),a=n(69609),l=n(71951),c=n(52113);const d=Symbol(),u=()=>(0,c.NV)(d);var p=n(34650),g=n(75792),h=n(28101),m=n(59726),x=n(74072),v=n(24262),f=n(64715),j=n(18197),y=n(36086),b=n(73491),C=n(19488),k=n(33210),A=n(43181),w=n(24325),O=n(39555),S=n(17312),N=n(55924);const{Paragraph:T}=x.A,I=e=>{let{busy:t,attributes:{isEssential:n,deleteHint:i,deletable:r,id:o,name:a,purpose:l,status:c,isEmbeddingOnlyExternalResources:d,uniqueName:g,technicalDefinitions:h,legalBasis:x,tagManagerOptInEventName:I,tagManagerOptOutEventName:_,executeCodeOptInWhenNoTagManagerConsentIsGiven:E,executeCodeOptOutWhenNoTagManagerConsentIsGiven:D,codeOptIn:G,codeOptOut:L,deleteTechnicalDefinitionsAfterOptOut:P,codeOnPageLoad:M,presetId:F},avatarUrl:B,isUpdateAvailable:R,languages:V,languageOnClick:U,dragHandle:W}=e;const{__:q}=(0,m.s)(),{isLicensed:$}=(0,w.J)(),{isConsentForwarding:z,onEdit:J,onDelete:H,setCookiesViaManager:K,isGcm:Y}=u(),Z=(0,A.G)(),X=null==h?void 0:h[0],{managerLabel:Q,serviceIsManager:ee,features:te}=(0,O.XR)(K,{isGcm:Y,presetId:F});return(0,s.jsx)(p.A.Item,{itemID:o.toString(),actions:[(0,s.jsx)("a",{onClick:()=>J(o),children:q(R?"Edit and update":"Edit")},"edit"),r?(0,s.jsx)(v.A,{title:(0,N.g)([q("Are you sure you want to delete this service?"),...i].join("\n\n")),placement:"bottomRight",onConfirm:()=>H(o),okText:q("Delete"),cancelText:q("Cancel"),overlayStyle:{maxWidth:350},children:(0,s.jsx)("a",{style:{cursor:"pointer"},children:q("Delete")})},"delete"):(0,s.jsx)(f.A,{placement:"topRight",arrow:{pointAtCenter:!0},overlay:q('The "%s" service cannot be deleted.',a),children:(0,s.jsx)("a",{style:{opacity:.5},children:q("Delete")})}),(null==V?void 0:V.length)&&(0,s.jsx)(S.r,{recordId:o,languages:V,onClick:U},"languages"),(0,s.jsx)("a",{children:W},"drag")].filter(Boolean),children:(0,s.jsx)(j.A,{spinning:t,children:(0,s.jsx)(p.A.Item.Meta,{avatar:B?(0,s.jsx)(y.A,{size:"large",src:B,shape:"square"}):(0,s.jsx)(y.A,{size:"large",style:{backgroundColor:d?"#4ea29a":Z[X.type].backgroundColor},children:d?q("None"):Z[X.type].abbr}),title:(0,s.jsxs)("span",{children:[a," ","draft"===c?(0,s.jsx)(b.A,{color:"orange",children:q("Draft")}):"private"===c?(0,s.jsx)(b.A,{color:"red",children:q("Disabled")}):null,!!d&&(0,s.jsx)(b.A,{children:q("No technical cookies")}),!n&&"legitimate-interest"===x&&(0,s.jsx)(b.A,{children:q("Legitimate interest (Opt-out)")}),n&&"legal-requirement"===x&&(0,s.jsx)(b.A,{children:q("Compliance with a legal obligation")}),!!F&&(0,s.jsx)(b.A,{children:q("Created from template")}),!!F&&!B&&(0,s.jsx)(f.A,{title:q($?"There is no longer a service template for this service. Probably the service has been discontinued. Please look for alternatives!":"This service was created from a template. As you do not have a license activated at the moment, updates that are potentially available cannot be downloaded."),children:(0,s.jsx)(b.A,{color:"red",children:q($?"No longer supported":"Possibly outdated")})}),!!R&&(0,s.jsx)(f.A,{title:q("The service template has been updated to provide current legal and technical information."),children:(0,s.jsx)(b.A,{color:"green",children:q("Update available")})})]}),description:(0,s.jsxs)("div",{children:[!!l&&(0,s.jsx)(T,{style:{color:"inherit",marginBottom:0},ellipsis:{rows:3},children:(0,N.g)(l)}),!!(G||L||M)&&(0,s.jsxs)("div",{style:{paddingTop:5},children:[q("Executes code on"),":"," ",!!G&&(0,s.jsxs)(b.A,{children:[q("Opt-in"),te.executeCodeWhenNoTagManagerConsentIsGiven&&E&&(0,s.jsx)(f.A,{title:q("Only run this script if the user has not consented to use %s",Q),children:(0,s.jsxs)("span",{children:[" ",(0,s.jsx)(C.A,{})]})})]}),(!!L||P)&&!n&&(0,s.jsxs)(b.A,{children:[q("Opt-out"),!1!==te.executeCodeWhenNoTagManagerConsentIsGiven&&D&&(0,s.jsx)(f.A,{title:q("Only run this script if the user has not consented to use %s",Q),children:(0,s.jsxs)("span",{children:[" ",(0,s.jsx)(C.A,{})]})}),P&&(0,s.jsx)(f.A,{title:q("Delete all first-party cookies after opt-out. First-party cookies are only cookies that are set by or for this domain."),children:(0,s.jsxs)("span",{children:[" ",(0,s.jsx)(k.A,{})]})})]}),!!M&&(0,s.jsx)(b.A,{children:q("Page load")})]}),!!Q&&(0,s.jsx)("div",{style:{paddingTop:5},children:ee?(0,s.jsxs)("span",{children:[q("Opt-in script loads"),": ",(0,s.jsx)(b.A,{children:Q})]}):te.events&&(0,s.jsxs)("span",{children:[q("%s Events",Q),":"," ",(0,s.jsxs)(b.A,{children:[(0,s.jsxs)("strong",{children:[q("Opt-in"),": "]}),I||q("None")]}),(0,s.jsxs)(b.A,{children:[(0,s.jsxs)("strong",{children:[q("Opt-out"),": "]}),_||q("None")]})]})}),z&&(0,s.jsxs)("div",{style:{paddingTop:5},children:[q("Consent Forwarding Unique Name"),": ",(0,s.jsx)(b.A,{children:g})]})]})})})})};var _=n(60111);const E=()=>{const{__:e,_i:t}=(0,m.s)(),{isEssential:n,isOnlyRealCookieBannerServiceCreated:r,busy:o,rows:a,onSort:l,onCreate:c,servicesCount:d,groupName:x}=u(),v=(0,i.useRef)(),{SortableContext:f,SortableRow:j,DragHandle:y}=(0,_.E)(),b=(0,i.useMemo)((()=>{const e=[];for(let t=0;t<d;t++)e.push({key:t});return e}),[d]),C=e("Add service"),k=n&&r?d>1:d>0,A=a.map((e=>{let{attributes:{id:t}}=e;return`${t}`}));return k?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"wp-clearfix",children:(0,s.jsx)("a",{onClick:c,className:"button button-primary right",style:{marginBottom:10},children:C})}),o?(0,s.jsx)(p.A,{dataSource:b,renderItem:()=>(0,s.jsx)(p.A.Item,{children:(0,s.jsx)(g.A,{loading:!0,active:!0,paragraph:{rows:1}})})}):(0,s.jsx)(f,{items:A,onDragEnd:e=>{let{active:t,over:n}=e;const s=a.findIndex((e=>e.attributes.id===+t.id)),i=a.findIndex((e=>e.attributes.id===+(null==n?void 0:n.id)));l(A.map(Number),s,i)},elementType:"div",children:(0,s.jsx)(p.A,{children:(0,s.jsx)("div",{ref:v,children:a.map(((e,t)=>(0,s.jsx)(j,{"data-row-key":`${e.attributes.id}`,children:(0,i.createElement)(I,{...e,key:e.attributes.id.toString(),dragHandle:(0,s.jsx)(y,{})})},e.attributes.id)))})})})]}):(0,s.jsx)(h.A,{description:t(e("You have not yet created a service in {{strong}}%s{{/strong}}.",x),{strong:(0,s.jsx)("strong",{})}),children:(0,s.jsx)("a",{className:"button button-primary",onClick:c,children:C})})};var D=n(32150),G=n(19117),L=n(95962),P=n(53573),M=n(30617),F=n(40164);const B=(0,r.PA)((()=>{const{message:e}=G.A.useApp(),{optionStore:{isOnlyRcbCookieCreated:t,isConsentForwarding:n,isDataProcessingInUnsafeCountries:r,setCookiesViaManager:u,isGcm:p,others:{hints:{deleteCookie:g}}},cookieStore:{unassignedCookies:h,essentialGroup:m}}=(0,l.g)(),x=(0,o.m)("cookie"),{group:v,addCookieLink:f,editLink:j}=(0,a.K)(),{cookies:y,cookiesCount:C,data:{name:k}}=v,{busy:A,sortedCookies:w,entries:O}=y;(0,i.useEffect)((()=>{v.fetchCookies()}),[]);const[S,N]=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,c.gm)(d,...t)}({isConsentForwarding:n,isDataProcessingInUnsafeCountries:r,isOnlyRealCookieBannerServiceCreated:t,isEssential:m.key===v.key,setCookiesViaManager:u,isGcm:p,groupName:k,busy:A,servicesCount:C,rows:w.map((t=>{const{key:n,busy:s,data:i,templateModel:r,technicalDefinitions:o,isUpdateAvailable:a}=t,{title:{raw:l},content:{raw:c},status:d,meta:{presetId:u,codeOptIn:p,codeOptOut:h,codeOnPageLoad:x,uniqueName:v,deleteTechnicalDefinitionsAfterOptOut:f,executeCodeOptInWhenNoTagManagerConsentIsGiven:j,executeCodeOptOutWhenNoTagManagerConsentIsGiven:y,isEmbeddingOnlyExternalResources:b,legalBasis:C,tagManagerOptInEventName:k,tagManagerOptOutEventName:A}}=i;return{busy:s,attributes:{id:n,name:l,purpose:c,status:d,codeOptIn:p,codeOptOut:h,codeOnPageLoad:x,uniqueName:v,deletable:"real-cookie-banner"!==u,deleteHint:g,deleteTechnicalDefinitionsAfterOptOut:f,executeCodeOptInWhenNoTagManagerConsentIsGiven:j,executeCodeOptOutWhenNoTagManagerConsentIsGiven:y,isEmbeddingOnlyExternalResources:b,isEssential:i["rcb-cookie-group"][0]===m.key,legalBasis:C,presetId:u,tagManagerOptInEventName:k,tagManagerOptOutEventName:A,technicalDefinitions:o},avatarUrl:null==r?void 0:r.data.logoUrl,isUpdateAvailable:a,languages:i.multilingual,languageOnClick:async(t,n)=>{let{code:s,id:i,taxonomies:r}=n;try{let e,n;if(!1===i){const{id:i,taxonomies:{"rcb-cookie-group":r}}=await(0,D.C)("rcb-cookie",t,s);e=i,[n]=r}else e=i,[n]=r["rcb-cookie-group"];const o=new URL(window.location.href);o.hash=`#/cookies/${n}/edit/${e}`,o.searchParams.set("lang",s),window.location.href=o.toString()}catch(t){var o;if(!(null==(o=t.responseJSON)?void 0:o.message))throw t;e.error(t.responseJSON.message)}}}}))},{onSort:(e,t,n,s)=>{!function(e,t,n){const{length:s}=e,i=t<0?s+t:t;if(i>=0&&i<s){const i=n<0?s+n:n,[r]=e.splice(t,1);e.splice(i,0,r)}}(t,n,s),v.cookies.orderCookies(t)},onDelete:(e,t)=>O.get(t).delete({force:!0}),onEdit:(e,t)=>{window.location.href=j(O.get(t))},onCreate:()=>{window.location.href=f}},{inherit:["busy","groupName","isEssential","isOnlyRealCookieBannerServiceCreated","rows","servicesCount"]});return(0,s.jsxs)(F.e,{children:[h.size>0&&(0,s.jsx)("div",{style:{textAlign:"center",marginBottom:15},children:(0,s.jsx)(L.A,{placement:"bottomRight",menu:{items:Array.from(h.values()).map((e=>{let{id:t,title:n}=e;return{key:t,label:(0,s.jsx)("a",{href:`#/cookies/${m.key}/edit/${t}`,children:n})}}))},children:(0,s.jsx)("a",{children:(0,s.jsxs)(b.A,{color:"red",children:[(0,s.jsx)(P.A,{})," ",(0,M._n)("One unassigned service","%d unassigned services",h.size,h.size)]})})})}),(0,s.jsx)(S,{value:N,children:(0,s.jsx)(E,{})}),(0,s.jsx)("p",{className:"description",style:{maxWidth:800,margin:"30px auto 0",textAlign:"center"},children:x})]})}))},41122:(e,t,n)=>{n.r(t),n.d(t,{CookieTemplateCenter:()=>p});var s=n(3713),i=n(41594),r=n(57922),o=n(93859),a=n(62789),l=n(71951),c=n(40164),d=n(76576),u=n(5406);const p=(0,r.PA)((()=>{const{cookieStore:e}=(0,l.g)(),[t,n]=(0,i.useState)(!1),[r,p]=(0,i.useState)(),{force:g,attributes:h,navigateAfterCreation:m=!0}=(0,d.f)(),x=(0,i.useCallback)((async()=>{t||(n(!0),await e.fetchTemplatesServices());const s=Array.from(e.templatesServices.values()).map((e=>{let{data:t}=e;return t}));return s.sort(((e,t)=>e.headline.localeCompare(t.headline))),s}),[t]),[v,f]=(0,o.m)({type:"service",quickLinks:["service-individual","service-scanner","cookie-experts"],enableLocalFilter:!0,syncTemplates:()=>e.fetchTemplatesServices({storage:"redownload"}),fetchTemplates:x,fetchUse:async t=>(await x(),e.templatesServices.get(t).fetchUse()),initialSelection:g,onSelect:(e,t)=>p({identifier:null==e?void 0:e.identifier,version:null==e?void 0:e.version,overwriteAttributes:t&&h?JSON.parse(h):void 0})});return void 0===r?(0,s.jsx)(c.e,{children:(0,s.jsx)(v,{value:f,children:(0,s.jsx)(a.q,{})})}):(0,s.jsx)(c.e,{maxWidth:"fixed",children:(0,s.jsx)(u.CookieEditForm,{template:r.identifier?{identifier:r.identifier,version:r.version}:void 0,navigateAfterCreation:m,overwriteAttributes:r.overwriteAttributes})})}))}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/5.0.3/e263cccfb1fd16b896eac7ed157428d0/chunk-config-tab-cookies.lite.js.map
