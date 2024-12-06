"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[462],{66732:(e,t,s)=>{s.d(t,{X:()=>a});var n=s(12719),i=s(59726);function a(){const{__:e}=(0,i.s)();return(0,n.W)({title:e("Want a better integrated visual content blocker for your website?"),testDrive:!0,feature:"visual-content-blocker",assetName:e("pro-modal/visual-content-blocker.webp"),description:e("Instead of a lot of text, you can offer your visitor a more pleasant way to view blocked content. For example, you can replace your video embeds with a privacy-compliant dummy player with thumbnail, or an embedded map with a preview map.")})}},210:(e,t,s)=>{s.r(t),s.d(t,{BlockerEditForm:()=>ke});var n=s(3713),i=s(41594),a=s(57922),r=s(68588),o=s(75792),l=s(18197),c=s(91386),d=s(78915),u=s(24985),h=s(30617),p=s(71951),m=s(69665),v=s(36920),f=s(44227),x=s(5406),b=s(75432);const y=(0,a.PA)((e=>{let{nonExistingServices:t,onCreated:s}=e;const[a,r]=(0,i.useState)(),o=(0,p.g)().cookieStore.groups.sortedGroups.map((e=>{let{data:{id:t,name:s}}=e;return{id:t,name:s}})),[l,c]=(0,i.useState)([]),u=(t||[]).filter((e=>{let{identifier:t}=e;return-1===l.indexOf(t)})),m=null==t?void 0:t.map((e=>{const{identifier:t,version:i}=e;return(0,n.jsx)(d.A,{open:a===t,title:(0,h.__)("Add service"),width:"calc(100% - 50px)",bodyStyle:{paddingBottom:0},footer:null,onCancel:()=>r(void 0),children:(0,n.jsx)(x.CookieEditForm,{overwriteAttributes:(0,b.r)(e,{groups:o}),navigateAfterCreation:!1,scrollToTop:!1,template:{identifier:t,version:i},onCreated:e=>{r(void 0),c([...l,a]),s(e)}})},t)}));return(0,n.jsxs)(n.Fragment,{children:[m,0===u.length?null:(0,n.jsxs)("div",{className:"notice notice-warning below-h2 notice-alt",children:[(0,n.jsx)("p",{children:(0,h.__)("Some services from the template could not be found. Please select (or create if not already exist) the following services:",u.join(", "))}),(0,n.jsx)("ul",{style:{margin:"0 0 10px"},children:u.map((e=>{let{identifier:t,name:s,subHeadline:i}=e;return(0,n.jsxs)("li",{children:[(0,n.jsxs)("strong",{children:[s,i?` (${i})`:""]})," • ",(0,n.jsx)("a",{onClick:e=>{r(t),e.preventDefault()},children:(0,h.__)("Create now")})]},t)}))})]})]})}));var g=s(50874);const j=(0,a.PA)((e=>{let{nonExistingTcfVendors:t,onCreated:s}=e;const[a,r]=(0,i.useState)(),{tcfStore:o}=(0,p.g)(),{vendorListVersion:c,vendors:u}=o,[m,v]=(0,i.useState)([]),f=(t||[]).filter((e=>{let{vendorId:t}=e;return-1===m.indexOf(t)}));if((0,i.useEffect)((()=>{t.length>0&&!c&&o.fetchVendors()}),[t,c]),!c&&t.length>0)return(0,n.jsx)(l.A,{spinning:!0});const x=null==t?void 0:t.map((e=>{let{vendorId:t}=e;return(0,n.jsx)(d.A,{open:a===t,title:(0,h.__)("Add TCF vendor configuration"),width:"calc(100% - 50px)",bodyStyle:{paddingBottom:0},footer:null,onCancel:()=>r(void 0),children:(0,n.jsx)(g.TcfVendorConfigurationForm,{navigateAfterCreation:!1,scrollToTop:!1,vendor:u.get(`${t}`),onCreated:e=>{r(void 0),v([...m,a]),s(e)}})},t)}));return(0,n.jsxs)(n.Fragment,{children:[x,0===f.length?null:(0,n.jsxs)("div",{className:"notice notice-warning below-h2 notice-alt",children:[(0,n.jsx)("p",{children:(0,h.__)("Some TCF vendors from the template could not be found. Please select (or create if not already exist) the following TCF vendors:",f.join(", "))}),(0,n.jsx)("ul",{style:{margin:"0 0 10px"},children:f.map((e=>{let{vendorId:t,createAdNetwork:s}=e;return(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:u.get(`${t}`).data.name})," • ",(0,n.jsx)("a",{onClick:e=>{s?window.location.href=`#/cookies/tcf-vendors/new?adNetwork=${encodeURIComponent(s)}`:r(t),e.preventDefault()},children:(0,h.__)("Create now")})]},t)}))})]})]})}));var k=s(40164),w=s(68789),A=s(43244),C=s(79521),T=s(42090);let S=!1;const V=e=>{let{attachmentId:t,title:s,allowedTypes:a,render:r,onChange:o}=e;const c=t||void 0,{data:d,error:u,fetching:h}=function(e){const[t,s]=(0,i.useState)(!1),[n,a]=(0,i.useState)(),[r,o]=(0,i.useState)(),l=(0,i.useCallback)((async e=>{s(!0);const{currentLanguage:t}=(0,C.j)();try{const s=await(0,T.E)({location:{path:"/media/:id",method:w.RouteHttpVerb.GET,namespace:"wp/v2"},params:{id:e,_dataLocale:t}});a(s),o(void 0)}catch(e){a(void 0),o(e)}finally{s(!1)}}),[]);return(0,i.useEffect)((()=>{e?l(e):(a(void 0),o(void 0))}),[e]),{fetching:t,data:n,fetch:l,error:r}}(c),p=null==d?void 0:d.source_url;(0,i.useEffect)((()=>{var e;"rest_post_invalid_id"===(null==u||null==(e=u.responseJSON)?void 0:e.code)&&o(void 0,void 0)}),[u]);const m=function(){const{addFilter:e}=A.hooks,{MediaUpload:t}=A.mediaUtils;return S||(S=!0,e("editor.MediaUpload","core/edit-post/components/media-upload/replace-media-upload",(()=>t))),t}();return(0,n.jsx)(l.A,{spinning:h,children:(0,n.jsx)(m,{onSelect:e=>{null==o||o(null==e?void 0:e.id,e)},title:s,allowedTypes:a,value:c,render:e=>{let{open:t}=e;return r({open:t,reset:()=>o(void 0,void 0),attachmentId:c,url:p})}})})};var _=s(27114),I=s(20931);const F={labelCol:{span:6},wrapperCol:{span:16}};var P=s(9551),N=s(59726),D=s(18137);const B=()=>{const{__:e}=(0,N.s)(),[t,s]=(0,i.useState)();return(0,n.jsxs)(c.A.Item,{label:e("Name"),required:!0,children:[(0,n.jsx)(c.A.Item,{name:"name",noStyle:!0,rules:[{required:!0,message:e("Please provide a name!")}],children:(0,n.jsx)(P.A,{})}),(0,n.jsxs)("p",{className:"description",ref:s,children:[(0,n.jsx)(D.E,{form:"blocker",valueName:"name",widthOfRef:t,renderDiff:e=>(0,n.jsx)(P.A,{value:e,readOnly:!0})}),e('Each content blocker should have a descriptive name that is understandable to a non-professional user, e.g. "Google Maps".')]})]})};var E=s(81533);const U=()=>{const{__:e}=(0,N.s)();return(0,n.jsxs)(c.A.Item,{label:e("Status"),required:!0,children:[(0,n.jsx)(c.A.Item,{name:"status",noStyle:!0,rules:[{required:!0,message:e("Please choose an option!")}],children:(0,n.jsxs)(E.Ay.Group,{children:[(0,n.jsx)(E.Ay.Button,{value:"publish",children:e("Enabled")}),(0,n.jsx)(E.Ay.Button,{value:"private",children:e("Disabled")}),(0,n.jsx)(E.Ay.Button,{value:"draft",children:e("Draft")})]})}),(0,n.jsx)("p",{className:"description",children:e('Content Blockers with the status "Draft" or "Disabled" are not visible to the public. In addition, a draft will be highlighted in the content blocker table so that you do not forget to configure it.')})]})},R=()=>{const{__:e}=(0,N.s)();return(0,n.jsxs)(c.A.Item,{label:e("Description"),children:[(0,n.jsx)(c.A.Item,{name:"description",noStyle:!0,children:(0,n.jsx)(P.A.TextArea,{autoSize:{minRows:3}})}),(0,n.jsx)("p",{className:"description",children:e("You can give your visitors further explanations why a content has been blocked or, for example, how they can contact you alternatively instead of agreeing to load the contact form. The description is displayed only in visual content blockers.")})]})};var M=s(38994),q=s(67993);const O=()=>{const{__:e}=(0,N.s)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(M.r,{offset:F.labelCol.span,children:[e("General content blocker configuration")," ",(0,n.jsx)(q.Y,{url:e("https://devowl.io/knowledge-base/real-cookie-banner-create-individual-content-blocker/")})]}),(0,n.jsx)(B,{}),(0,n.jsx)(U,{}),(0,n.jsx)(R,{})]})};var L=s(32041);const $=()=>{const{__:e,_i:t}=(0,N.s)(),{openDialog:s}=(0,L.g)(),[a,r]=(0,i.useState)();return(0,n.jsxs)(c.A.Item,{label:e("URLs / Elements to block"),required:!0,children:[(0,n.jsx)(c.A.Item,{name:"rules",noStyle:!0,rules:[{required:!0,message:e("Please provide at least one URL/element!")}],children:(0,n.jsx)(P.A.TextArea,{autoSize:{minRows:3,maxRows:15}})}),(0,n.jsxs)("p",{className:"description",ref:r,children:[(0,n.jsx)(D.E,{form:"blocker",valueName:"rules",widthOfRef:a,difference:(e,t)=>{const s=e.split("\n"),n=t.split("\n").filter((e=>!s.includes(e)));return n.length>0?n:void 0},apply:(e,t,s)=>t({rules:s.split("\n").concat(e).join("\n")}),newValueText:e("Missing entries:"),renderDiff:(e,t)=>(0,n.jsx)(P.A.TextArea,{value:t.join("\n"),readOnly:!0,autoSize:{minRows:3,maxRows:15}})}),t(e("Enter one rule per line to replace content with a content blocker. You can block all available URLs or HTML tags on your website including videos, iframes, scripts, inline scripts and stylesheets. Please use an asterisk ({{code}}*{{/code}}) as a wildcard (placeholder)."),{code:(0,n.jsx)("code",{})})," • ",!!s&&(0,n.jsx)("button",{type:"button",className:"button-link",onClick:s,children:e("Can't handle it? Let a Cookie Expert help you!")}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),t(e('{{strong}}Pro tip:{{/strong}} Look up all available syntaxes like {{code}}div[class*="my-embed"]{{/code}} in our knowledge base to block content perfectly.'),{strong:(0,n.jsx)("strong",{}),code:(0,n.jsx)("code",{})})," ",(0,n.jsx)(q.Y,{url:e("https://devowl.io/knowledge-base/real-cookie-banner-create-individual-content-blocker/")})]})]})},G=()=>{const{__:e}=(0,N.s)(),{isTcf:t}=(0,I.j)();return(0,n.jsxs)(c.A.Item,{label:e("Block by"),required:!0,style:{display:t?void 0:"none"},children:[(0,n.jsx)(c.A.Item,{name:"criteria",noStyle:!0,rules:[{required:!0,message:e("Please choose an option!")}],children:(0,n.jsxs)(E.Ay.Group,{children:[(0,n.jsx)(E.Ay.Button,{value:"services",children:e("Services")}),(0,n.jsx)(E.Ay.Button,{value:"tcfVendors",children:e("TCF Vendors")})]})}),(0,n.jsx)("p",{className:"description",children:e("You can block content through non-standard services or TCF vendors. If you want to block it through TCF vendors, then the visual content blocker cannot be displayed because TCF is usually used to obtain consent for ad networks. Moreover, after the initial consents in the cookie banner, users will probably never consent to the ad.")})]})},J=e=>{let{dropdown:t,children:s}=e;const{__:i,_i:a}=(0,N.s)();return(0,n.jsx)(c.A.Item,{noStyle:!0,shouldUpdate:(e,t)=>e.criteria!==t.criteria,children:e=>{let{getFieldValue:r}=e;return"services"===r("criteria")&&(0,n.jsxs)(c.A.Item,{label:i("Connected services"),required:!0,children:[(0,n.jsx)(c.A.Item,{name:"services",noStyle:!0,rules:[{type:"array",required:!0,message:i("Please provide at least one service!")}],children:t}),(0,n.jsx)("p",{className:"description",children:a(i("A content blocker is displayed until the user has agreed to {{strong}}all{{/strong}} necessary services that would be used by loading the content. You must define all services that are loaded as soon as the user wants to see the blocked content."),{strong:(0,n.jsx)("strong",{})})}),s]})}})};var Y=s(45854),z=s(6099),H=s(92453);const W=e=>{let{dropdownVendors:t,children:s}=e;const{__:i,_i:a}=(0,N.s)(),{tcfPurposes:r=[]}=(0,I.j)();return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(c.A.Item,{noStyle:!0,shouldUpdate:(e,t)=>e.criteria!==t.criteria,children:e=>{let{getFieldValue:o}=e;return"tcfVendors"===o("criteria")&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(c.A.Item,{label:i("Connected TCF Vendors"),required:!0,children:[(0,n.jsx)(c.A.Item,{name:"tcfVendors",noStyle:!0,rules:[{type:"array",required:!0,message:i("Please provide at least one vendor!")}],children:t}),(0,n.jsx)("p",{className:"description",children:a(i("A content blocker is displayed until the user has agreed to {{strong}}all{{/strong}} necessary TCF vendors and purposes that would be used by loading the content. You must define all TCF vendors and purposes that are loaded based on legitimate interest or consent as soon as the user wants to see the blocked content."),{strong:(0,n.jsx)("strong",{})})}),s]}),(0,n.jsxs)(c.A.Item,{label:i("Required TCF purposes"),required:!0,children:[(0,n.jsx)(c.A.Item,{noStyle:!0,name:"tcfPurposes",rules:[{type:"array",required:!0,message:i("Please provide at least one purpose!")}],children:(0,n.jsx)(Y.A.Group,{style:{marginTop:6},children:(0,n.jsx)(z.A,{children:r.map((e=>{let{name:t,id:s}=e;return(0,n.jsx)(H.A,{span:12,children:(0,n.jsx)(Y.A,{value:s,children:t})},`purpose-${s}`)}))})})}),(0,n.jsx)("p",{className:"description",style:{marginTop:10},children:i('Defined which purposes of all connected TCF vendors must be allowed (by consent or legitimate interest) for the content blocker to unblock the content. At a minimum, "Store and/or access information on a device" should be given if cookies or similar information are read/written. In terms of data economy according to the GDPR, you should specify further purposes if, for example, only personalized advertising is displayed and therefore unblocking without consent/legitimate interest to this purpose has no practical use.')})]})]})}})})};var X=s(41220),K=s(39795);const Q=e=>{let{servicesFieldProps:t,tcfVendorsFieldProps:s}=e;const{__:i}=(0,N.s)(),{template:a}=(0,I.j)(),r=[{message:null==a?void 0:a.ruleNotice,severity:"info"}].filter(Boolean).filter((e=>{let{message:t}=e;return t}));return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(M.r,{offset:F.labelCol.span,children:i("Technical Definition")}),r.length>0&&(0,n.jsx)(c.A.Item,{wrapperCol:{offset:X.sN.labelCol.span,span:X.sN.wrapperCol.span},style:{marginBottom:0},children:(0,n.jsx)(K.q,{notices:r})}),(0,n.jsx)($,{}),(0,n.jsx)(G,{}),(0,n.jsx)(c.A.Item,{noStyle:!0,shouldUpdate:(e,t)=>e.criteria!==t.criteria,children:e=>{let{getFieldValue:i}=e;switch(i("criteria")){case"services":return(0,n.jsx)(J,{...t});case"tcfVendors":return(0,n.jsx)(W,{...s});default:return null}}})]})};var Z=s(19393);const ee=()=>{const{__:e}=(0,N.s)();return(0,n.jsx)(c.A.Item,{wrapperCol:{offset:F.labelCol.span},children:(0,n.jsxs)("span",{children:[(0,n.jsx)(c.A.Item,{name:"isVisual",valuePropName:"checked",noStyle:!0,children:(0,n.jsx)(Z.A,{})}),(0,n.jsxs)("span",{children:["  ",e("Show the visual content blocker, if possible")]})]})})};var te=s(43799),se=s(24325),ne=s(66732);const ie=()=>{const{__:e}=(0,N.s)(),{isPro:t}=(0,se.J)(),{modal:s,tag:a}=(0,ne.X)(),r=(0,i.useMemo)((()=>({default:{title:e("Textbox"),description:e("Plain text with button")},wrapped:{title:e("Wrapped"),description:e("Image surrounding the content blocker")},hero:{title:e("Hero"),description:e("Image with content blocker on click")}})),[e]);return(0,n.jsx)(c.A.Item,{noStyle:!0,shouldUpdate:(e,t)=>e.isVisual!==t.isVisual,children:i=>{let{getFieldValue:o}=i;return!!o("isVisual")&&(0,n.jsx)(c.A.Item,{wrapperCol:{offset:F.labelCol.span},style:{paddingBottom:10},children:(0,n.jsx)("span",{children:(0,n.jsx)(c.A.Item,{name:"visualType",noStyle:!0,rules:t?[]:[{required:!0,type:"enum",enum:["default"],message:e("This type of visual content blocker is available only in the PRO version of the plugin. Please choose a textbox content blocker!")}],children:(0,n.jsx)(E.Ay.Group,{size:"large",buttonStyle:"solid",className:"rcb-antd-radio-button-card",style:{marginBottom:10},children:Object.keys(r).map((e=>{const{description:t,title:i}=r[e];return(0,n.jsx)(E.Ay.Button,{value:e,children:(0,n.jsx)(te.A,{style:{width:300},bordered:!1,cover:(0,n.jsx)("img",{style:{height:168.75},src:`https://assets.devowl.io/in-app/wp-real-cookie-banner/visual-content-blocker-preview/${e}.png`}),children:(0,n.jsx)(te.A.Meta,{title:(0,n.jsxs)(n.Fragment,{children:[s,i," ","default"!==e&&a]}),description:t})})},e)}))})})})})}})},ae=()=>{const{__:e}=(0,N.s)(),{isPro:t}=(0,se.J)(),{modal:s,tag:a}=(0,ne.X)(),r=(0,i.useMemo)((()=>({map:e("Map"),"audio-player":e("Audio player"),"video-player":e("Video player"),"feed-text":e("Feed (text)"),"feed-video":e("Feed (image/video)"),generic:e("None of these")})),[e]);return(0,n.jsxs)(n.Fragment,{children:[s,(0,n.jsx)(c.A.Item,{noStyle:!0,shouldUpdate:(e,t)=>e.isVisualDarkMode!==t.isVisualDarkMode||e.isVisual!==t.isVisual||e.visualType!==t.visualType,children:s=>{let{getFieldValue:i}=s;const o=i("isVisual"),l=i("visualType");return!!o&&"default"!==l&&(0,n.jsx)(c.A.Item,{label:e("Content type"),required:!0,extra:a,children:(0,n.jsx)(c.A.Item,{name:"visualContentType",rules:[{required:!0,message:e("Please choose an option!")}],children:(0,n.jsx)(E.Ay.Group,{size:"large",buttonStyle:"solid",className:"rcb-antd-radio-button-card",children:Object.keys(r).map((e=>{const s=r[e];return(0,n.jsx)(E.Ay.Button,{value:e,disabled:!t,children:(0,n.jsx)(te.A,{style:{width:240},bordered:!1,size:"small",cover:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("img",{style:{display:i("isVisualDarkMode")?"none":void 0},src:`https://assets.devowl.io/in-app/wp-real-cookie-banner/visual-content-blocker-preview/${e}-light.png`}),(0,n.jsx)("img",{style:{display:i("isVisualDarkMode")?void 0:"none"},src:`https://assets.devowl.io/in-app/wp-real-cookie-banner/visual-content-blocker-preview/${e}-dark.png`})]}),children:(0,n.jsx)(te.A.Meta,{title:s})})},e)}))})})})}})]})},re=()=>{const{__:e}=(0,N.s)(),{isPro:t}=(0,se.J)();return t&&(0,n.jsx)(c.A.Item,{noStyle:!0,shouldUpdate:(e,t)=>e.isVisual!==t.isVisual||e.visualType!==t.visualType,children:t=>{let{getFieldValue:s}=t;const i=s("isVisual"),a=s("visualType");return!!i&&"default"!==a&&(0,n.jsx)(c.A.Item,{wrapperCol:{offset:F.labelCol.span},children:(0,n.jsxs)("span",{children:[(0,n.jsx)(c.A.Item,{name:"isVisualDarkMode",valuePropName:"checked",noStyle:!0,children:(0,n.jsx)(Z.A,{})}),"  ",e("Enable dark mode"),(0,n.jsx)("p",{className:"description",children:e("As soon as no image is found for the content blocker, a default image is automatically used. You can also specify whether the image should be displayed light or dark.")})]})})}})};var oe=s(24262);const le=()=>{const{__:e}=(0,N.s)(),{isPro:t}=(0,se.J)();return t&&(0,n.jsx)(c.A.Item,{noStyle:!0,shouldUpdate:(e,t)=>e.visualDownloadThumbnail!==t.visualDownloadThumbnail||e.isVisual!==t.isVisual||e.visualType!==t.visualType,children:t=>{let{getFieldValue:s,setFieldsValue:i}=t;const a=s("visualDownloadThumbnail"),r=s("isVisual"),o=s("visualType");return!!r&&"default"!==o&&(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(c.A.Item,{label:e("Automatic preview image"),children:[(0,n.jsx)(c.A.Item,{noStyle:!0,name:"visualDownloadThumbnail",required:!0,rules:[{required:!0,type:"boolean",message:e("Please choose an option!")}],children:(0,n.jsxs)(E.Ay.Group,{style:{display:a?void 0:"none"},children:[(0,n.jsx)(E.Ay.Button,{value:!0,children:e("Download preview image and serve locally")}),(0,n.jsx)(E.Ay.Button,{value:!1,children:e("Image from media library")})]})}),!a&&(0,n.jsxs)(E.Ay.Group,{value:a,children:[(0,n.jsx)(oe.A,{title:e("I confirm that I have the required rights to embedded content and its thumbnails can be copied to my servers without e.g. copyright infringement."),cancelText:e("Cancel"),okText:e("Activate now"),overlayStyle:{maxWidth:450},onCancel:()=>i({visualDownloadThumbnail:!1}),onConfirm:()=>i({visualDownloadThumbnail:!0}),placement:"bottomLeft",children:(0,n.jsx)(E.Ay.Button,{value:!0,children:e("Download preview image and serve locally")})}),(0,n.jsx)(E.Ay.Button,{value:!1,onClick:()=>i({visualDownloadThumbnail:!1}),children:e("Image from media library")})]}),(0,n.jsx)("p",{className:"description",children:e("If you block an external URL, this option will try to download an image for this URL using different mechanisms (oEmbed, OpenGraph, ...), saves it locally and use it as background image.")})]})})}})},ce=e=>{let{children:t}=e;const{__:s}=(0,N.s)(),{isPro:i}=(0,se.J)();return i&&(0,n.jsx)(c.A.Item,{noStyle:!0,shouldUpdate:(e,t)=>e.visualDownloadThumbnail!==t.visualDownloadThumbnail||e.isVisual!==t.isVisual||e.visualType!==t.visualType||e.visualContentType!==t.visualContentType,children:e=>{let{getFieldValue:i}=e;const a=i("isVisual"),r=i("visualType"),o=i("visualContentType"),l=i("visualDownloadThumbnail");return!!a&&"default"!==r&&(0,n.jsx)(c.A.Item,{label:s(l||"generic"===o?"Fallback preview image":"Preview image"),name:"visualMediaThumbnail",valuePropName:"attachmentId",style:{display:void 0===l?"none":void 0},children:t})}})};var de=s(7643);const ue=()=>{const{__:e}=(0,N.s)(),{isPro:t}=(0,se.J)();return t&&(0,n.jsx)(c.A.Item,{noStyle:!0,shouldUpdate:(e,t)=>e.isVisual!==t.isVisual||e.visualType!==t.visualType,children:t=>{let{getFieldValue:s}=t;const i=s("isVisual"),a=s("visualType");return!!i&&"default"!==a&&(0,n.jsxs)(c.A.Item,{label:e("Blur image"),children:[(0,n.jsx)(c.A.Item,{name:"visualBlur",noStyle:!0,children:(0,n.jsx)(de.A,{min:0,max:20,marks:{0:e("Disabled"),5:"5%",10:"10%",15:"15%",20:"20%"},tooltip:{open:!1},style:{marginLeft:40}})}),(0,n.jsx)("p",{className:"description",children:e("You can apply an additional blur to the background image. This can be useful e.g. for blocked contact forms to show it only schematically.")})]})}})},he=()=>{const{__:e}=(0,N.s)(),{isPro:t}=(0,se.J)();return t&&(0,n.jsx)(c.A.Item,{noStyle:!0,shouldUpdate:(e,t)=>e.isVisual!==t.isVisual||e.visualType!==t.visualType,children:t=>{let{getFieldValue:s}=t;const i=s("isVisual"),a=s("visualType");return!!i&&"default"!==a&&(0,n.jsx)(c.A.Item,{noStyle:!0,shouldUpdate:(e,t)=>e.visualContentType!==t.visualContentType,children:t=>{let{getFieldValue:s}=t;const i=s("visualContentType"),a=s("visualType");return(0,n.jsxs)(c.A.Item,{label:e("Button text"),style:{display:["audio-player","video-player"].indexOf(i)>-1||"hero"!==a?"none":void 0},children:[(0,n.jsx)(c.A.Item,{name:"visualHeroButtonText",noStyle:!0,children:(0,n.jsx)(P.A,{})}),(0,n.jsx)("p",{className:"description",children:e("If you specify a button text, a button with this text will be centered in the image and only when you click on this button the content blocker will be opened. Otherwise, clicking on the image itself will open the Content Blocker.")})]})}})}})},pe=()=>{const{__:e}=(0,N.s)();return(0,n.jsx)(c.A.Item,{noStyle:!0,shouldUpdate:(e,t)=>e.isVisual!==t.isVisual,children:t=>{let{getFieldValue:s}=t;return!!s("isVisual")&&(0,n.jsx)(c.A.Item,{wrapperCol:{offset:F.labelCol.span},children:(0,n.jsxs)("span",{children:[(0,n.jsx)(c.A.Item,{name:"shouldForceToShowVisual",valuePropName:"checked",noStyle:!0,children:(0,n.jsx)(Z.A,{})}),"  ",e("Force visual content blocker for hidden elements"),(0,n.jsx)("p",{className:"description",children:e("In rare cases, visual content blockers are not displayed because the main element of the blocked content is not visible either. Enable this option if this is the case and you want to force to display a content blocker for non-visible elements.")})]})})}})},me=e=>{let{visualMediaThumbnailPicker:t}=e;const{__:s}=(0,N.s)();return(0,n.jsx)(c.A.Item,{noStyle:!0,shouldUpdate:(e,t)=>e.criteria!==t.criteria,children:e=>{let{getFieldValue:i}=e;return"services"===i("criteria")&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(M.r,{offset:F.labelCol.span,description:s("For each content blocker it can be defined if it should be visually visible. This means that if the user has not agreed to the respective services, a box with a button is displayed to adjust the privacy settings so that the actual content can be loaded. The design of the box is copied from the cookie banner."),children:s("Visual")}),(0,n.jsx)(ee,{}),(0,n.jsx)(ie,{}),(0,n.jsx)(ae,{}),(0,n.jsx)(re,{}),(0,n.jsx)(le,{}),(0,n.jsx)(ce,{children:t}),(0,n.jsx)(ue,{}),(0,n.jsx)(he,{}),(0,n.jsx)(pe,{})]})}})},ve=()=>{const{__:e,_x:t}=(0,N.s)(),{templateCheck:s,isTemplateUpdate:i}=(0,I.j)();return!(!s&&!i)&&(0,n.jsx)(c.A.Item,{name:"templateCheck",valuePropName:"checked",required:!0,rules:[{type:"boolean",required:!0,transform:e=>e||void 0,message:e("Please confirm that you have checked the content of the content blocker.")}],children:(0,n.jsxs)(Y.A,{children:[t("I have checked the information in the content blocker template myself for correctness and completeness and have added missing information or corrected information that does not fit my use case. I am aware that the manufacturer of Real Cookie Banner cannot take any liability in this respect.","legal-text")," ",(0,n.jsx)(q.Y,{url:e("https://devowl.io/knowledge-base/is-real-cookie-banner-legally-compliant/")})]})})};var fe=s(74865),xe=s(93842),be=s(30503),ye=s(92454);const ge=e=>{let{technicalProps:t,visualProps:s}=e;const{__:a}=(0,N.s)(),r=(0,i.useRef)(),o=(0,i.useRef)();return(0,n.jsxs)("div",{ref:r,children:[(0,n.jsx)(fe.g,{containerRef:r,resetButton:o,resetButtonEvent:xe.U,form:"blocker"}),(0,n.jsx)(be.o,{form:"blocker"}),(0,n.jsx)(O,{}),(0,n.jsx)(Q,{...t}),(0,n.jsx)(me,{...s}),(0,n.jsx)(ye.h,{type:"blocker"}),(0,n.jsxs)(c.A.Item,{className:"rcb-antd-form-sticky-submit",colon:!1,labelAlign:"left",label:(0,n.jsx)(xe.T,{anchorRef:o}),children:[(0,n.jsx)(ve,{}),(0,n.jsx)("div",{style:{textAlign:"center",margin:"10px 0"},children:(0,n.jsx)("input",{type:"submit",className:"button button-primary",value:a("Save")})})]})]})};var je=s(60971);const ke=(0,a.PA)((e=>{let{template:t,overwriteAttributes:s,navigateAfterCreation:a=!0,comingFromServiceCreation:b=!1}=e;var g,w;const{blocker:A,id:C,queried:T,fetched:S,link:P}=(0,v.t)(),N=(0,m.useNavigate)(),[D,B]=(0,i.useState)(!1),{cookieStore:E,tcfStore:U,optionStore:{isTcf:R,others:{isPro:M}}}=(0,p.g)(),q=(null==A?void 0:A.templateModel)||E.templatesBlocker.get(null==t?void 0:t.identifier),{declarations:O}=U,{prompt:L,form:$,isBusy:G,defaultValues:J,nonExistingServices:Y,nonExistingTcfVendors:z,onFinish:H,onFinishFailed:W,onValuesChange:X,contextValue:K}=(0,_.z)({attributes:s,isTcf:R,isEdit:S,entityTemplateVersion:null==A||null==(w=A.data)||null==(g=w.meta)?void 0:g.presetVersion,template:null==q?void 0:q.use,initialHasChanges:b,handleSave:async e=>{try{var t,s,n;const{name:i,status:r,description:o,succeessorDeletionCheck:l,...c}=e,d={...c,visualMediaThumbnail:c.visualMediaThumbnail||0,criteria:c.criteria,tcfVendors:(null==(t=c.tcfVendors)?void 0:t.join(","))||"",tcfPurposes:(null==(s=c.tcfPurposes)?void 0:s.join(","))||"",services:(null==(n=c.services)?void 0:n.join(","))||"",isVisual:"services"===c.criteria&&c.isVisual,presetId:null==q?void 0:q.data.identifier,presetVersion:null==q?void 0:q.data.version};if(delete d.templateCheck,T)A.setName(i),A.setStatus(r),A.setDescription(o),A.setMeta(d),await A.patch();else{const e=new f.g(te,{title:{raw:i},content:{raw:o,protected:!1},status:r,meta:d});if(await e.persist(),l){const e=q.data.consumerData.successorOf.map((e=>{let{id:t}=e;return t})),t=[...E.blockers.entries.values()],s=e.map((e=>t.find((t=>{let{key:s}=t;return s===e}))||new f.g(E.blockers,{id:e})));await Promise.allSettled(s.map((e=>e.delete())))}}return()=>a&&("string"==typeof a?window.location.href=a:N(P.slice(1)))}catch(e){throw e.responseJSON.message}}}),Q=T&&!S||q&&!q.use,[Z,ee]=(0,I.k)({...K,tcfPurposes:Object.values((null==O?void 0:O.purposes)||[])},{},{deps:[Q]}),{blockers:te,essentialGroup:se}=E,ne=S?{name:A.data.title.raw,status:A.data.status,description:A.data.content.raw,criteria:A.data.meta.criteria,rules:A.data.meta.rules,tcfVendors:A.tcfVendors,tcfPurposes:A.tcfPurposes,services:A.services,isVisual:A.data.meta.isVisual,visualType:M?A.data.meta.visualType:"default",visualMediaThumbnail:A.data.meta.visualMediaThumbnail,visualContentType:A.data.meta.visualContentType,isVisualDarkMode:A.data.meta.isVisualDarkMode,visualBlur:A.data.meta.visualBlur,visualDownloadThumbnail:A.data.meta.visualDownloadThumbnail,visualHeroButtonText:A.data.meta.visualHeroButtonText,shouldForceToShowVisual:A.data.meta.shouldForceToShowVisual,templateCheck:void 0,succeessorDeletionCheck:void 0}:J,ie=(0,i.useCallback)((e=>{$.setFieldsValue({services:[...$.getFieldValue("services"),e.key]})}),[$]),ae=(0,i.useCallback)((e=>{$.setFieldsValue({tcfVendors:[...$.getFieldValue("tcfVendors"),e.key]})}),[$]);return(0,i.useEffect)((()=>{T&&!S&&te.getSingle({params:{id:C,context:"edit"}})}),[T,S]),(0,i.useEffect)((()=>{!q||q.use||q.busy||q.fetchUse()}),[q]),(0,i.useEffect)((()=>{(0,je.V)(0),se||E.fetchGroups()}),[]),(0,i.useEffect)((()=>{!O&&R&&U.fetchDeclarations()}),[R,O]),Q?(0,n.jsx)(k.e,{maxWidth:"fixed",children:(0,n.jsx)(o.A,{active:!0,paragraph:{rows:8}})}):(0,n.jsx)(k.e,{maxWidth:"fixed",children:(0,n.jsx)(Z,{value:ee,children:(0,n.jsxs)(l.A,{spinning:G||(null==q?void 0:q.busy)||!1,children:[L,(0,n.jsx)(c.A,{name:`blocker-${C}`,form:$,...F,initialValues:ne,onFinish:H,onFinishFailed:W,onValuesChange:X,scrollToFirstError:{behavior:"smooth",block:"center"},labelWrap:!0,children:(0,n.jsx)(ge,{technicalProps:{servicesFieldProps:{dropdown:(0,n.jsx)(r.D,{postType:["rcb-cookie"],multiple:!0,filter:e=>e["rcb-cookie-group"][0]!==(null==se?void 0:se.key)}),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("button",{type:"button",className:"button",onClick:()=>B(!0),children:(0,h.__)("Create new service")}),(0,n.jsx)(d.A,{open:D,title:(0,h.__)("Add service"),width:"calc(100% - 50px)",bodyStyle:{paddingBottom:0},footer:null,onCancel:()=>B(!1),children:(0,n.jsx)(x.CookieEditForm,{navigateAfterCreation:!1,scrollToTop:!1,onCreated:e=>{B(!1),ie(e)}})},C),(0,n.jsx)(y,{nonExistingServices:Y,onCreated:ie})]})},tcfVendorsFieldProps:{dropdownVendors:(0,n.jsx)(r.D,{postType:["rcb-tcf-vendor-conf"],multiple:!0,titleRender:e=>{let{vendor:{name:t}}=e;return t}}),children:(0,n.jsx)(j,{nonExistingTcfVendors:z,onCreated:ae})}},visualProps:{visualMediaThumbnailPicker:(0,n.jsx)(V,{title:(0,h.__)("Select preview image"),allowedTypes:["image"],render:e=>{let{open:t,reset:s,attachmentId:i,url:a}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("p",{style:{marginTop:0},children:[(0,n.jsx)("a",{className:"button",onClick:t,children:i?(0,h.__)("Replace image"):(0,h.__)("Select from media library")})," ",i&&(0,n.jsx)("a",{className:"button",onClick:s,children:(0,h.__)("Remove image")})]}),a&&(0,n.jsx)(u.A,{width:272,src:a})]})}})}})})]})})})}))},22923:(e,t,s)=>{s.r(t),s.d(t,{BlockerList:()=>I});var n=s(3713),i=s(41594),a=s(57922),r=s(71951),o=s(36920),l=s(53603),c=s(52113);const d=Symbol(),u=()=>(0,c.NV)(d);var h=s(34650),p=s(75792),m=s(28101),v=s(59726),f=s(24262),x=s(18197),b=s(36086),y=s(73491),g=s(64715),j=s(52066),k=s(55924),w=s(24325),A=s(17312);const C=e=>{let{busy:t,attributes:{id:s,name:a,description:r,status:o,criteria:l,services:c,tcfVendors:d,rules:p,isVisual:m,presetId:C},avatarUrl:T,isUpdateAvailable:S,languages:V,languageOnClick:_}=e;const{__:I}=(0,v.s)(),{isLicensed:F}=(0,w.J)(),{onEdit:P,onDelete:N}=u(),[D,B]=(0,i.useState)(!1),E=(0,i.useMemo)((()=>{if(r){const e=document.createElement("div");return e.innerHTML=r,e.textContent}return""}),[r]);return(0,n.jsx)(h.A.Item,{itemID:s.toString(),actions:[(0,n.jsx)("a",{onClick:()=>P(s),children:I(S?"Edit and update":"Edit")},"edit"),(0,n.jsx)(f.A,{title:I("Are you sure that you want to delete this content blocker?"),placement:"bottomRight",onConfirm:()=>N(s),okText:I("Delete"),cancelText:I("Cancel"),overlayStyle:{maxWidth:350},children:(0,n.jsx)("a",{children:I("Delete")})},"delete"),(null==V?void 0:V.length)&&(0,n.jsx)(A.r,{recordId:s,languages:V,onClick:_},"languages")].filter(Boolean),children:(0,n.jsx)(x.A,{spinning:t,children:(0,n.jsx)(h.A.Item.Meta,{avatar:T?(0,n.jsx)(b.A,{size:"large",src:T,shape:"square"}):(0,n.jsx)(b.A,{size:"large",shape:"circle",children:a.toUpperCase()[0]}),title:(0,n.jsxs)("span",{children:[a," ","draft"===o?(0,n.jsx)(y.A,{color:"orange",children:I("Draft")}):"private"===o?(0,n.jsx)(y.A,{color:"red",children:I("Disabled")}):null,"services"===l&&0===c.length&&(0,n.jsxs)(y.A,{color:"red",children:[I("No connected services defined")," ",(0,n.jsx)(j.A,{})," ",I("Disabled")]}),"tcfVendors"===l&&0===d.length&&(0,n.jsxs)(y.A,{color:"red",children:[I("No connected TCF Vendors defined")," ",(0,n.jsx)(j.A,{})," ",I("Disabled")]}),!!C&&(0,n.jsx)(y.A,{children:I("Created from template")}),!!C&&!T&&(0,n.jsx)(g.A,{title:I(F?"There is no longer a content blocker template for this service. Probably the service has been discontinued. Please look for alternatives!":"This content blocker was created from a template. As you do not have a license activated at the moment, updates that are potentially available cannot be downloaded."),children:(0,n.jsx)(y.A,{color:"red",children:I(F?"No longer supported":"Possibly outdated")})}),!!S&&(0,n.jsx)(g.A,{title:I("The blocker template has been updated to provide current legal and technical information."),children:(0,n.jsx)(y.A,{color:"green",children:I("Update available")})})]}),description:(0,n.jsxs)("div",{children:[!!E&&(0,n.jsx)("div",{children:(0,k.g)(E)}),(0,n.jsxs)("div",{style:{paddingTop:5},children:[I("URLs / Elements to block"),":"," ",p.slice(0,D?p.length:5).map(((e,t)=>(0,n.jsx)(y.A,{children:e},`${e}-${t}`))),p.length>5&&!D&&(0,n.jsx)(y.A,{onClick:()=>B(!0),children:I("Show all")})]}),(0,n.jsxs)("div",{style:{paddingTop:5},children:[I("Visual Content Blocker"),":"," ",(0,n.jsx)(y.A,{children:I(m?"Yes, if possible":"No")})]})]})})})})},T=()=>{const{__:e}=(0,v.s)(),{busy:t,serviceCount:s,contentBlockerCount:a,rows:r,onCreate:o}=u(),l=(0,i.useMemo)((()=>{const e=[];for(let t=0;t<a;t++)e.push({key:t});return e}),[a]),c=e("Add content blocker");return a?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"wp-clearfix",children:(0,n.jsx)("a",{onClick:o,className:"button button-primary right",style:{marginBottom:10},children:c})}),t?(0,n.jsx)(h.A,{dataSource:l,renderItem:()=>(0,n.jsx)(h.A.Item,{children:(0,n.jsx)(p.A,{loading:!0,active:!0,paragraph:{rows:1}})})}):(0,n.jsx)(h.A,{children:r.map((e=>(0,i.createElement)(C,{...e,key:e.attributes.id.toString()})))})]}):(0,n.jsx)(m.A,{description:e(s>0?"You have not yet created a content blocker.":"Because a content blocker must be associated with a service, you must create a service first."),children:(0,n.jsx)("a",{className:"button button-primary",onClick:o,children:c})})};var S=s(19117),V=s(32150),_=s(40164);const I=(0,a.PA)((()=>{const{message:e}=S.A.useApp(),{addLink:t,editLink:s}=(0,o.t)(),{cookieStore:a}=(0,r.g)(),{blockers:u,cookiesCount:h,blockersCount:p}=a,{busy:m,sortedBlockers:v,entries:f}=u,x=(0,l.m)("blocker");(0,i.useEffect)((()=>{a.fetchBlockers(),a.fetchGroups()}),[]);const[b,y]=function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,c.gm)(d,...t)}({busy:m,serviceCount:h,contentBlockerCount:p,rows:v.map((t=>{const{key:s,busy:n,data:i,rules:a,services:r,tcfVendors:o,templateModel:l,isUpdateAvailable:c}=t,{title:{raw:d},content:{raw:u},status:h,meta:{criteria:p,presetId:m,isVisual:v}}=i;return{busy:n,attributes:{id:s,criteria:p,description:u,name:d,isVisual:v,rules:a,services:r,status:h,tcfVendors:o,presetId:m},avatarUrl:null==l?void 0:l.data.logoUrl,isUpdateAvailable:c,languages:i.multilingual,languageOnClick:async(t,s)=>{let{code:n,id:i}=s;try{const e=!1===i?(await(0,V.C)("rcb-blocker",t,n)).id:i,s=new URL(window.location.href);s.hash=`#/blocker/edit/${e}`,s.searchParams.set("lang",n),window.location.href=s.toString()}catch(t){var a;if(!(null==(a=t.responseJSON)?void 0:a.message))throw t;e.error(t.responseJSON.message)}}}}))},{onDelete:(e,t)=>f.get(t).delete({force:!0}),onEdit:(e,t)=>{window.location.href=s(f.get(t))},onCreate:()=>{window.location.href=t}},{inherit:["busy","contentBlockerCount","serviceCount","rows"]});return(0,n.jsxs)(_.e,{children:[(0,n.jsx)(b,{value:y,children:(0,n.jsx)(T,{})}),(0,n.jsx)("p",{className:"description",style:{maxWidth:800,margin:"30px auto 0",textAlign:"center"},children:x})]})}))},88663:(e,t,s)=>{s.r(t),s.d(t,{BlockerTemplateCenter:()=>h});var n=s(3713),i=s(41594),a=s(57922),r=s(93859),o=s(62789),l=s(71951),c=s(40164),d=s(76576),u=s(210);const h=(0,a.PA)((()=>{const{cookieStore:e,optionStore:{isTcf:t}}=(0,l.g)(),[s,a]=(0,i.useState)(!1),[h,p]=(0,i.useState)(),{force:m,comingFromServiceCreation:v,attributes:f,navigateAfterCreation:x=!0}=(0,d.f)(),b=(0,i.useCallback)((async()=>{s||(a(!0),await e.fetchTemplatesBlocker());const t=Array.from(e.templatesBlocker.values()).map((e=>{let{data:t}=e;return t}));return t.sort(((e,t)=>e.headline.localeCompare(t.headline))),t}),[s]),[y,g]=(0,r.m)({type:"content-blocker",quickLinks:["blocker-individual","service-scanner","cookie-experts"],enableLocalFilter:!0,syncTemplates:()=>e.fetchTemplatesBlocker({storage:"redownload"}),fetchTemplates:b,fetchUse:async t=>(await b(),e.templatesBlocker.get(t).fetchUse()),initialSelection:m,onSelect:(e,s)=>{(null==e?void 0:e.tcfVendorIds.length)>0&&!t?window.location.href=`#/settings/tcf?tcfIntegrationItem=${encodeURIComponent(e.name)}&navigateAfterTcfActivation=${encodeURIComponent(`#/blocker/new?force=${e.identifier}`)}`:p({identifier:null==e?void 0:e.identifier,version:null==e?void 0:e.version,overwriteAttributes:s&&f?JSON.parse(f):void 0})}},{});return void 0===h?(0,n.jsx)(c.e,{children:(0,n.jsx)(y,{value:g,children:(0,n.jsx)(o.q,{})})}):(0,n.jsx)(c.e,{maxWidth:"fixed",children:(0,n.jsx)(u.BlockerEditForm,{comingFromServiceCreation:"1"===v,template:h.identifier?{identifier:h.identifier,version:h.version}:void 0,overwriteAttributes:h.overwriteAttributes,navigateAfterCreation:x})})}))},68588:(e,t,s)=>{s.d(t,{D:()=>v});var n=s(3713),i=s(41594),a=s(6196),r=s(18197),o=s(51192),l=s(79521),c=s(42090),d=s(30617),u=s(68789),h=s(84200),p=s(24513);function m(e){var t;return(0,h.g)(e)&&!(0,p.j)(e)?null==(t=(new DOMParser).parseFromString(`<a href="${e}"></a>`,"text/html").querySelector("a"))?void 0:t.href:(new DOMParser).parseFromString(e,"text/html").documentElement.textContent}const v=e=>{let{postType:t,postStatus:s=["draft","publish","private"],perPage:h=10,value:p,multiple:v,disabled:f,forceDefaultLanguage:x,onChange:b,titleRender:y=(e=>null==e?void 0:e.title.rendered),applyTitleRenderOnSelectOption:g,filter:j=(()=>!0)}=e;const[k,w]=(0,i.useState)(!1),[A,C]=(0,i.useState)(p),[T,S]=(0,i.useState)(!1),[V,_]=(0,i.useState)([]),I=(0,i.useCallback)((async(e,n)=>{void 0===n&&(n=!0),S(!0);const{defaultLanguage:i,currentLanguage:a}=(0,l.j)(),r=(await(0,c.E)({location:{path:"/search",method:u.RouteHttpVerb.GET,namespace:"wp/v2"},request:{status:e.include?["draft","publish","private"]:s,...t?{subtype:t.join(",")}:{},...e},params:{_dataLocale:x?i:a,_embed:"self",_rcbExtendSearchResult:!0}})).map((e=>{let{_embedded:{self:[t]}}=e;return t}));return n&&_(r),S(!1),r}),[]);!function(e,t,s,n){const[a,r]=(0,i.useState)(e);(0,i.useEffect)((()=>{const s=setTimeout((()=>{r(e)}),t);return null==n||n(e),()=>{clearTimeout(s)}}),[e]),(0,i.useEffect)((()=>{var e;!1!==(e=a)&&I({search:e,per_page:e.length?50:h})}),[a])}(k,""===k?0:800,0,(e=>{!1!==e&&S(!0),_([])})),(0,i.useEffect)((()=>{const e=e=>(void 0===e&&(e=!0),"number"==typeof A&&A>0||Array.isArray(A)&&A.length>0?I({include:Array.isArray(A)?A:[A]},e):Promise.resolve([])),t=async()=>{if("visible"===document.visibilityState){const[t]=await e(!1);t&&_((e=>e.map((e=>e.id===t.id?t:e))))}};return e(),document.addEventListener("visibilitychange",t),()=>{document.removeEventListener("visibilitychange",t)}}),[]),(0,i.useEffect)((()=>{JSON.stringify(A)!==JSON.stringify(p)&&("number"==typeof p&&p>0||Array.isArray(p)&&p.length>0)&&(C(p),I({include:Array.isArray(p)?p:[p]}))}),[p,A]);const F=Array.isArray(A)?A:[A].filter(Boolean),P=`— ${(0,d.__)("Select")} —`;return(0,n.jsxs)(a.A,{mode:v?"multiple":void 0,disabled:f,showSearch:!0,value:A,placeholder:(0,d.__)("Search..."),notFoundContent:T?(0,n.jsx)(r.A,{size:"small"}):null,onClick:()=>w(""),onSearch:w,onChange:e=>{const t=Array.isArray(e)?e.map(Number):+e;C(t),null==b||b(t)},filterOption:!1,loading:T,labelRender:e=>{let{label:t}=e;return(0,i.isValidElement)(t)?t.props["data-label"]:t},children:[!v&&!T&&(0,n.jsx)(a.A.Option,{value:0,children:m(g&&y(void 0,F)||P)}),V.map((e=>{const s=m(y(e,F)),i=e.type_singular&&((null==t?void 0:t.length)>1||!t)?e.type_singular:void 0;return(0,n.jsx)(a.A.Option,{value:e.id,style:{display:j(e)?void 0:"none"},children:(0,n.jsxs)(o.A,{justify:"space-between",align:"center","data-label":`${s}${i?` (${i})`:""}`,children:[(0,n.jsx)("span",{children:s}),i&&(0,n.jsx)("span",{style:{opacity:.7,paddingLeft:5,paddingRight:5},children:i})]})},e.id)}))]})}}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/5.0.4/63b5a6111c9d18a00c52415612331893/chunk-config-tab-blocker.lite.js.map
