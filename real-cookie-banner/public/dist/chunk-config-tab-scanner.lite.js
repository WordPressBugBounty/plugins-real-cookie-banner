"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[362],{77421:(e,t,n)=>{var r,s,a,o,i,l;n.d(t,{FX:()=>a}),function(e){e.Append="append",e.Overwrite="overwrite",e.Clear="clear",e.Keep="keep"}(r||(r={})),function(e){e.Draft="draft",e.Published="published"}(s||(s={})),function(e){e.Free="free",e.Pro="pro"}(a||(a={})),function(e){e.IsWordPressPluginOrThemeActive="is-wordpress-plugin-or-theme-active"}(o||(o={})),function(e){e.Initial="initial",e.Update="update",e.Notify="notify",e.Removed="removed",e.NeverReleased="never-released"}(i||(i={})),function(e){e.CreatedAt="createdAt",e.EnabledWhenOneOf="enabledWhenOneOf",e.Extends="extends",e.ExtendedMergeStrategies="extendedMergeStrategies",e.ExtendedTemplateId="extendedTemplateId",e.ExtendsId="extendsId",e.ExtendsIdentifier="extendsIdentifier",e.Headline="headline",e.Id="id",e.Identifier="identifier",e.IsDeleted="isDeleted",e.IsExtendingMetaData="isExtendingMetaData",e.IsFavourite="isFavourite",e.MachineTranslationStatus="machineTranslationStatus",e.IsHidden="isHidden",e.LastEditedBy="lastEditedBy",e.Logo="logo",e.LogoId="logoId",e.MinRequiredRcbVersion="minRequiredRcbVersion",e.Name="name",e.NameTranslationFlags="nameTranslationFlags",e.Next="next",e.NextId="nextId",e.Pre="pre",e.PreId="preId",e.RecommendedWhenOneOf="recommendedWhenOneOf",e.ReleaseStatus="releaseStatus",e.SubHeadline="subHeadline",e.Status="status",e.SuccessorOfIdentifier="successorOfIdentifier",e.SuccessorOfIdentifierInfo="successorOfIdentifierInfo",e.Tier="tier",e.TranslationInfo="translationInfo",e.Version="version"}(l||(l={}))},58025:(e,t,n)=>{n.d(t,{X:()=>y});var r=n(3713),s=n(41594),a=n(77421),o=n(43799),i=n(19117),l=n(19991),c=n(27465),d=n(64715),u=n(33146),m=n(73491),h=n(59726),p=n(24325),f=n(12719);const{Meta:g}=o.A;function x(e){let{template:t,renderActions:n,renderTags:s,onSelect:x,grayOutAlreadyExisting:b,onAcknowledgementClick:y}=e;const{__:k,_i:w}=(0,h.s)(),{modal:j}=i.A.useApp(),{isPro:_,isDemoEnv:v}=(0,p.J)(),{headline:A,subHeadline:C,logoUrl:S,tier:I,consumerData:{tags:T,isDisabled:$,isCreated:E,isIgnored:R,acknowledgement:U}}=t,{technicalHandlingIntegration:P}=t.consumerData,N=k("Disabled"),D=I===a.FX.Pro&&(!_||v),{open:O,modal:L}=(0,f.W)({title:k("Want to use %s template?",A),feature:"preset",description:`${k("Only a limited number of templates for services and content blockers are available in the %s version of Real Cookie Banner. Get the PRO version now and create a service or content blocker from this template with just one click!",k(v?"Demo":"Free").toLowerCase())}${v?"":`\n\n${k("You can create this service yourself in the free version without any restrictions and research the necessary information.")}`}`},!v&&void 0),B=e=>{if(e.target.closest(".rcb-antd-card,.rcb-template-card-create-link"))if(U){const{paragraphs:e,accordion:n,buttonAction:s,buttonLabel:a}=U,o=j.info({icon:null,width:800,closable:!0,okButtonProps:{style:{display:"none"}},content:(0,r.jsxs)("div",{style:{textAlign:"center"},children:[(0,r.jsx)("img",{src:t.logoUrl,style:{display:"block",paddingTop:15,margin:"auto",height:176}}),(0,r.jsx)("h3",{style:{margin:"10px 0 0"},children:t.headline}),(0,r.jsx)("p",{style:{marginTop:0},children:t.subHeadline}),(0,r.jsx)(l.A,{children:k("Special circumstances for this service")}),e.map((e=>(0,r.jsx)("p",{style:{textAlign:"left"},children:w(e,{strong:(0,r.jsx)("strong",{}),u:(0,r.jsx)("u",{style:{textDecorationStyle:"dashed"}})})},e))),n&&(0,r.jsx)(c.A,{style:{textAlign:"left"},defaultActiveKey:Object.keys(n)[0],items:Object.keys(n).map((e=>({key:e,label:e,children:(0,r.jsx)("p",{style:{margin:0},dangerouslySetInnerHTML:{__html:n[e]}})})))}),y&&(0,r.jsx)("div",{style:{marginTop:10},children:(0,r.jsx)("button",{className:"button button-large button-primary",onClick:()=>{o.destroy(),null==y||y(s,t)},children:a})})]})})}else D?O():$||null==x||x(t)},F=(0,r.jsx)("img",{style:{width:"90%"},src:S}),H=s?s({...T},t):T;return(0,r.jsxs)(r.Fragment,{children:[L,(0,r.jsx)(d.A,{title:$?(0,r.jsx)("span",{dangerouslySetInnerHTML:{__html:T[N]}}):void 0,children:(0,r.jsx)(o.A,{className:"rcb-antd-template-card",hoverable:!$,style:{opacity:$||b&&(E||R)?.6:1},onClick:B,cover:P?(0,r.jsx)(u.A.Ribbon,{text:(0,r.jsx)(d.A,{title:w(k("The {{strong}}%s{{/strong}} plugin is recommending this service.",P.name),{strong:(0,r.jsx)("strong",{})}),children:(0,r.jsx)("div",{children:k("Integration")})}),children:F}):F,actions:n?n(t,B):[],children:(0,r.jsx)(g,{title:(0,r.jsxs)("span",{children:[D&&(0,r.jsx)(m.A,{color:f.Q,children:"PRO"}),!!T&&Object.keys(H).map((e=>(0,r.jsx)(d.A,{title:e!==N&&T[e]?(0,r.jsx)("span",{dangerouslySetInnerHTML:{__html:T[e]}}):void 0,children:(0,r.jsx)(m.A,{children:e})},e))),(0,r.jsx)("br",{}),A]}),description:C||(0,r.jsx)("i",{children:k("No description")})})})})]})}var b=n(18197);function y(e){let{templates:t,showHidden:n,showDisabled:a=!0,...o}=e;const[i,l]=(0,s.useState)(!1);return(0,s.useEffect)((()=>{!i&&t.length>0&&l(!0)}),[i,t.length]),t.length>0||i?(0,r.jsx)(r.Fragment,{children:t.filter((e=>{let{isHidden:t}=e;return!!n||!t})).filter((e=>{let{consumerData:{isDisabled:t}}=e;return!!a||!t})).map((e=>(0,r.jsx)(x,{template:e,...o},e.identifier)))}):(0,r.jsx)(b.A,{spinning:!0,style:{marginTop:10}})}},66399:(e,t,n)=>{n.d(t,{P:()=>r});const r=e=>new Promise((t=>setTimeout((()=>t(e)),0)))},95122:(e,t,n)=>{n.d(t,{r:()=>i});var r=n(3713),s=n(41594),a=n(43244),o=n.n(a);const i=e=>{let{settings:t={},value:n="",onChange:a}=e;const i=(0,s.useRef)(),l=(0,s.useRef)(),{codeEditor:c}=o();(0,s.useEffect)((()=>{if(c){const{codemirror:e}=c.initialize(i.current,t);l.current=e,e.on("change",(e=>{null==a||a(e.getValue())}))}}),[]);const d=(0,s.useCallback)((()=>{}),[]);return(0,s.useEffect)((()=>{"string"==typeof n&&i.current&&l.current&&i.current.value!==l.current.getValue()&&l.current.setValue(i.current.value)}),[n]),(0,r.jsx)("textarea",{ref:i,value:n,onChange:c?d:e=>{let{target:{value:t}}=e;return a(t)},style:{width:"100%"}})}},40164:(e,t,n)=>{n.d(t,{e:()=>s});var r=n(3713);const s=e=>{let{children:t,maxWidth:n="auto",style:s={}}=e;return(0,r.jsx)("div",{className:"rcb-config-content",style:{maxWidth:"fixed"===n?1300:n,...s},children:t})}},73481:(e,t,n)=>{n.r(t),n.d(t,{ScannerList:()=>fe});var r=n(3713),s=n(41594),a=n(57922),o=n(18197),i=n(28101),l=n(97276),c=n(30617),d=n(14383),u=n(71951),m=n(19117),h=n(98348);const p=/.+?:\/\/.+?(\/.+?)(?:#|\?(.*)|$)/;function f(e,t,n){var r;void 0===n&&(n="");const s=(null==(r=e.match(p))?void 0:r[1])||"/",a=t.match(p);if(a){const[,t,r]=a,o=r?`?${r}${n?`?${n}`:""}`:n?`?${n}`:"";return`${e}${t.substr(s.length)}${o}`}return!1}const g="robots.txt";async function x(e,t){try{const n=t?`${t}=1`:"",r=await fetch(`${e}${g}${n?`?${n}`:""}`);if(!r.ok)return!1;const s=[...(await r.text()).matchAll(/^sitemap:(.*)$/gim)].map((e=>{let[,t]=e;return t.trim()}));let a=[];for(const t of s){const r=f(e,t,n);if(r){const e=await fetch(r);if(!e.ok)continue;const t=await e.text();if(!/<(?:sitemap|urlset)/gm.test(t))continue;a.push(r)}}return a=[...new Set(a)],!!a.length&&a}catch(e){return!1}}const b=["sitemap.xml","sitemap_index.xml","sitemap-index.xml","sitemap/","post-sitemap.xml","sitemap/sitemap.xml","sitemap/index.xml","sitemapindex.xml","sitemap.php","sitemap.txt","index.php/sitemap_index.xml","index.php?xml_sitemap=params=","glossar/sitemap.xml"];async function y(e,t){void 0===t&&(t=b);const n=t.map((t=>fetch(`${e}${t}`,{mode:"no-cors"})));for(const e of n)try{const t=await e,n=await t.text();if(n.indexOf("<sitemapindex")>-1||n.indexOf("<urlset")>-1)return t.url}catch(e){}return!1}const k="https://base";async function w(e,t,n){if(n)try{const r=await async function(e){const t=await fetch(e),n=await t.text();return(new DOMParser).parseFromString(n.trim(),"application/xml")}(t),{protocol:s}=new URL(t,k),a=r.querySelector("sitemapindex");if(a){const t=Array.from(a.children).map((e=>{var t;return null==(t=e.querySelector("loc"))?void 0:t.textContent})).filter(Boolean);for(const r of t){const t=f(e,r)||r;await w(e,t,n)}}const o=r.querySelector("urlset");if(o){const e=Array.from(o.children).map((e=>{var t;return null==(t=e.querySelector("loc"))?void 0:t.textContent})).filter(Boolean).map((e=>{try{const t=new URL(e,k);return"http:"===t.protocol&&(t.protocol=s),t.toString()}catch(t){return e}}));n.push(...e)}}catch(e){console.error(`Error occurred during "crawl('${t}')":\n\r Error: ${e}`)}else try{return(await w(e,t,[])).sort(((e,t)=>e.length-t.length))}catch(e){return console.error(e),[]}return[...new Set(n)]}async function j(e){const t=(0,c.__)('If you think a sitemap exists but you get this error, please <a href="%s" target="_blank" />contact our support</a> and we will look individually where the problem is in your WordPress installation.',(0,c.__)("https://devowl.io/support/"));let n=window.realCookieBannerQueue.originalHomeUrl;[n]=n.split("?",2),null==e||e("find-sitemap");const r=await function(e,t,n){return new Promise(((r,s)=>{const a=e=>setTimeout((()=>r(e)),100);(async()=>{try{const r=await x(e);if(r)return void a(r);const s=await y(e);if(s)return void a([s]);if(t){const n=await x(e,t);if(n)return void a(n)}if(n){const t=await y(e,n);if(t)return void a([t])}a(!1)}catch(e){s(e)}})()}))}(n,"rcb-force-sitemap",["?sitemap=index&rcb-force-sitemap=1"]);if(!1===r)throw new Error(`${(0,c.__)("We didn't find a sitemap on your website. We need it to scan all the subpages of your website. Do you have this feature disabled in your WordPress?")} ${t}`);null==e||e("collect-sitemap");let s=[];try{s=await async function(e,t){return[...new Set((await Promise.all(t.map((t=>w(e,t))))).flat())]}(n,r)}catch(e){throw new Error(`${(0,c.__)("The sitemap could not be parsed. Therefore, we cannot check for services on your website.")} ${t}`)}if(0===s.length)throw new Error(`${(0,c.__)("The sitemap is empty. So, we could not add any URLs to the scanner.")} ${t}`);return s}var _=n(76576),v=n(35207),A=n(2464);const C={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M464 688a48 48 0 1096 0 48 48 0 10-96 0zm72-112c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48zm400-188h-59.3c-2.6 0-5 1.2-6.5 3.3L763.7 538.1l-49.9-68.8a7.92 7.92 0 00-6.5-3.3H648c-6.5 0-10.3 7.4-6.5 12.7l109.2 150.7a16.1 16.1 0 0026 0l165.8-228.7c3.8-5.3 0-12.7-6.5-12.7zm-44 306h-64.2c-5.5 0-10.6 2.9-13.6 7.5a352.2 352.2 0 01-49.8 62.2A355.92 355.92 0 01651.1 840a355 355 0 01-138.7 27.9c-48.1 0-94.8-9.4-138.7-27.9a355.92 355.92 0 01-113.3-76.3A353.06 353.06 0 01184 650.5c-18.6-43.8-28-90.5-28-138.5s9.4-94.7 28-138.5c17.9-42.4 43.6-80.5 76.4-113.2 32.8-32.7 70.9-58.4 113.3-76.3a355 355 0 01138.7-27.9c48.1 0 94.8 9.4 138.7 27.9 42.4 17.9 80.5 43.6 113.3 76.3 19 19 35.6 39.8 49.8 62.2 2.9 4.7 8.1 7.5 13.6 7.5H892c6 0 9.8-6.3 7.2-11.6C828.8 178.5 684.7 82 517.7 80 278.9 77.2 80.5 272.5 80 511.2 79.5 750.1 273.3 944 512.4 944c169.2 0 315.6-97 386.7-238.4A8 8 0 00892 694z"}}]},name:"issues-close",theme:"outlined"};var S=n(4679),I=function(e,t){return s.createElement(S.A,(0,A.A)({},e,{ref:t,icon:C}))};const T=s.forwardRef(I);var $=n(12719);const E=(0,a.PA)((()=>{const{optionStore:{others:{isPro:e}},scannerStore:{canShowResults:t,foundScanResultsCount:n,needsAttentionCount:a}}=(0,u.g)(),[p,f]=(0,s.useState)(void 0),{status:g,currentJob:x,total:b,percent:y,remaining:k,cancelling:w,handleStart:A,handleCancel:C,step:S,stepText:I}=function(e,t){const{modal:n}=m.A.useApp(),[a,o]=(0,s.useState)("idle"),{remaining:i,...l}=(0,h.X)(e,"rcb-scan-list",(0,s.useCallback)((()=>{o("idle")}),[])),{scannerStore:p,checklistStore:f}=(0,u.g)(),g=(0,s.useCallback)((async()=>{try{const e=await j(o);o("add-to-queue"),await p.addUrlsToQueue({urls:e,purgeUnused:!0}),await Promise.all([p.fetchResultExternals(),p.fetchResultTemplates(),(0,d.refreshQueue)()]),o("done"),f.fetchChecklist()}catch(e){e instanceof Error&&n.error({title:(0,c.__)("Whoops!"),content:(0,r.jsx)("span",{dangerouslySetInnerHTML:{__html:e.message}})}),o("idle")}}),[]);(0,s.useEffect)((()=>{(0,d.fetchStatus)(!0)}),[]);const x=(0,s.useMemo)((()=>{switch(a){case"idle":return(0,c.__)("Scan complete website");case"find-sitemap":return(0,c.__)("Find your website sitemap...");case"collect-sitemap":return(0,c.__)("Collect all scannable URLs...");case"add-to-queue":case"done":return(0,c.__)("Add URLs to queue...")}return""}),[a]);return{handleStart:g,step:a,stepText:x,setStep:o,remaining:i,...l}}(p),E="idle"!==S,{isLicensed:R,modal:U,open:P}=(0,$.W)({title:(0,c.__)("Scanner requires up-to-date search data from the Service Cloud"),description:(0,c.__)("The scanner can automatically search your website for used services. To do this, it needs an up-to-date database of search data for services, which must be downloaded from Real Cookie Banner's Service Cloud. The data will be downloaded locally to your server, so your website visitors will not need to connect to the cloud.")+(e?"":` ${(0,c.__)("You can activate your free licence at any time, without any costs.")}`),mode:"license-activation",feature:"scanner",assetName:"service-cloud.svg",assetMaxHeight:200}),N=(0,s.useCallback)((()=>{R?A():P()}),[A,R,P]),{start:D}=(0,_.f)();return(0,s.useEffect)((()=>{D&&N()}),[]),(0,s.useEffect)((()=>{f(k>0&&x&&b?5e3:void 0)}),[k,x,b]),void 0===k?(0,r.jsx)(o.A,{style:{display:"block"}}):(0,r.jsxs)("div",{className:"wp-clearfix",children:[U,t&&(0,r.jsx)("div",{style:{float:"left",margin:"5px 10px"},children:0===a?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(v.A,{twoToneColor:"#52c41a"})," ",(0,c.__)("All recommendations applied")]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(T,{style:{color:"#dba617"}})," ",(0,c.__)("%d of %d recommendations applied",n-a,n)]})}),"failed"===g?(0,r.jsx)(i.A,{style:{clear:"both"},description:(0,c.__)("Scan failed"),image:(0,r.jsx)(l.A,{type:"circle",width:100,percent:100,status:"exception"})}):"done"===g?(0,r.jsx)(i.A,{style:{clear:"both"},description:(0,c.__)("Scan completed"),image:(0,r.jsx)(l.A,{type:"circle",width:100,percent:100})}):k>0&&x&&b?(0,r.jsx)(i.A,{style:{clear:"both"},description:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{children:(0,c._i)((0,c.__)("Currently scanning {{code}}%s{{/code}} (%d of %d pages scanned)...",x.data.url,b-k,b),{code:(0,r.jsx)("code",{})})}),(0,r.jsx)("div",{className:"notice notice-info inline below-h2 notice-alt",style:{margin:"10px 0 0 0",display:"inline-block"},children:(0,r.jsx)("p",{children:(0,c.__)("You can add already found services, edit your website or have a coffee in the meantime. The scanner runs in the background.")})})]}),image:(0,r.jsx)(l.A,{type:"circle",width:100,percent:y}),children:(0,r.jsx)("button",{className:"button button-primary",onClick:C,disabled:w,children:(0,c.__)("Cancel scan")})}):t?(0,r.jsx)("button",{id:"rcb-btn-scan-start",className:"button button-primary alignright",onClick:N,disabled:E,style:{marginBottom:10,display:"done"!==S?void 0:"none"},children:I}):(0,r.jsx)(i.A,{description:(0,c.__)("Scan your website for services that may set cookies or process personal data to obtain consent."),children:(0,r.jsx)("button",{className:"button button-primary",onClick:N,disabled:E,children:I})})]})}));var R=n(40164),U=n(19991),P=n(60531),N=n(95962),D=n(65824),O=n(58025),L=n(59726);const B=e=>{let{templates:t,onSelect:n,dropdownItems:a=(()=>[]),isTcf:o,onIgnoreToggle:i}=e;const{modal:l}=m.A.useApp(),{__:c}=(0,L.s)(),d=(0,s.useCallback)(((e,t)=>{"ignore"===e&&i(t,!0)}),[i]),u=(0,s.useCallback)((e=>{const{tcfVendorIds:t,name:r,consumerData:{createAdNetwork:s}}=e;(null==t?void 0:t.length)>0&&!o?window.location.href=`#/settings/tcf?tcfIntegrationItem=${encodeURIComponent(r)}&navigateAfterTcfActivation=${encodeURIComponent(s?`#/cookies/tcf-vendors/new?adNetwork=${encodeURIComponent(s)}`:"#/scanner")}`:n(e)}),[n]);return(0,r.jsx)(O.X,{showHidden:!0,grayOutAlreadyExisting:!0,templates:t,onSelect:u,onAcknowledgementClick:d,renderTags:(0,s.useCallback)(((e,t)=>{const{isIgnored:n,acknowledgement:r}=t.consumerData;return n&&(e[c(r?"Acknowledged":"Ignored")]=""),e}),[]),renderActions:(0,s.useCallback)(((e,t)=>{const{tcfVendorIds:n,consumerData:{isDisabled:s,isIgnored:d,acknowledgement:u}}=e,m=(null==n?void 0:n.length)>0&&!o,h=c(u?"Show explanation":m?"Activate TCF":"Create now"),p=c(d?"Show recommendation again":u?"Acknowledge recommendation":"Ignore recommendation");return[!s&&(0,r.jsx)(N.A,{menu:{items:[{key:"create",label:(0,r.jsx)("a",{className:"rcb-template-card-create-link",children:h})},...a(e,t),!e.consumerData.isCreated&&{key:"ignore",label:(0,r.jsx)("a",{onClick:()=>{const t=()=>i(e,!d);d||u?t():l.confirm({title:c("Are you sure that you want to ignore this recommendation?"),onOk:t,okText:c("Ignore recommendation"),cancelText:c("Cancel")})},children:p})}].filter(Boolean)},children:(0,r.jsxs)(D.A,{children:[h,(0,r.jsx)(P.A,{})]})},"dropdown")].filter(Boolean)}),[])})};var F=n(91502),H=n(55221),M=n(73491),W=n(64715),q=n(12548),V=n(33631),Q=n(78915),Y=n(95122),X=n(43244),z=n.n(X);const J=(0,a.PA)((e=>{let{record:t}=e;const{message:n}=m.A.useApp(),[a,i]=(0,s.useState)(!1),{data:{id:l},markup:u,store:h}=t,p=(0,s.useMemo)((()=>u?{...window.cm_settings,codemirror:{...z().codeEditor.defaultSettings.codemirror,mode:u.mime,lint:!1,readOnly:!0}}:{}),[u]),f=(0,s.useCallback)((()=>{a?i(!1):(i(!0),h.fetchMarkup(l))}),[a]),g=(0,s.useCallback)((async()=>{h.addUrlsToQueue({urls:[t.data.sourceUrl],purgeUnused:!1}),Promise.all([h.fetchResultExternals(),h.fetchResultTemplates(),(0,d.refreshQueue)()]),n.info((0,c.__)("Page is scheduled for scanning again..."))}),[]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Q.A,{title:(0,c.__)("Element found by markup"),open:a,width:700,bodyStyle:{paddingBottom:0},okButtonProps:{style:{display:"none"}},onCancel:f,cancelText:(0,c.__)("Close"),children:(0,r.jsx)(o.A,{spinning:!u,children:u&&(0,r.jsx)(Y.r,{settings:p,value:u.markup})})}),(0,r.jsx)(N.A.Button,{onClick:f,menu:{items:[{key:"scan-again",onClick:g,label:(0,c.__)("Scan again")}]},children:(0,c.__)("Open markup")})]})})),{Column:G}=F.A,K=(0,a.PA)((e=>{let{instance:t,style:n,reloadDependencies:a=[],reload:o=!0,tableProps:l={}}=e;const{scannerStore:d}=(0,u.g)(),{identifier:m,busy:p}=t,f=d.resultAllExternalUrls.get(m),g=(0,s.useCallback)((e=>{let{data:{id:t}}=e;return t}),[]),{remaining:x}=(0,h.X)(),[b,y]=(0,s.useState)("");return(0,s.useEffect)((()=>{!async function(){if(o)try{await d.fetchResultAllExternals(t),y("")}catch(t){var e;y((null==(e=t.responseJSON)?void 0:e.message)||t.message)}}()}),[t,o,...a]),(0,r.jsxs)(r.Fragment,{children:[x>0&&(0,r.jsx)("div",{className:"notice notice-info below-h2 notice-alt",style:{margin:"0 0 10px"},children:(0,r.jsx)("p",{children:(0,c.__)("Since the scanner is currently still running, the table may be refreshed.")})}),(0,r.jsxs)(F.A,{locale:{emptyText:b?(0,r.jsx)(H.Ay,{title:(0,c.__)("Something went wrong."),subTitle:b,status:"500"}):(0,r.jsx)(i.A,{description:(0,c.__)("No external URL found")})},dataSource:Array.from(f?f.values():[]),rowKey:g,size:"small",bordered:!0,style:n,loading:(!f||0===f.size)&&p,...l,children:[(0,r.jsx)(G,{title:(0,c.__)("Last scanned"),defaultSortOrder:"descend",sorter:(e,t)=>new Date(e.data.lastScanned).getTime()-new Date(t.data.lastScanned).getTime(),dataIndex:["data","lastScanned"],render:(e,t)=>{let{data:{lastScanned:n}}=t;return new Date(n).toLocaleString(document.documentElement.lang)}},"created"),(0,r.jsx)(G,{title:(0,c.__)("HTML Tag"),dataIndex:["data","tag"],render:(e,t)=>{let{data:{tag:n}}=t;return(0,r.jsx)(M.A,{children:`<${n} />`})}},"tag"),(0,r.jsx)(G,{title:(0,r.jsx)(W.A,{title:(0,c.__)("This status shows you if the URL was blocked by a content blocker you defined."),children:(0,r.jsxs)("span",{children:[(0,c.__)("Blocked?")," ",(0,r.jsx)(q.A,{style:{color:"#9a9a9a"}})]})}),sorter:(e,t)=>e.data.blocked===t.data.blocked?0:e.data.blocked?-1:1,dataIndex:["data","blocked"],render:(e,t)=>{let{data:{blocked:n}}=t;return n?(0,r.jsx)(v.A,{twoToneColor:"#52c41a"}):(0,r.jsx)(V.A,{twoToneColor:"#eb2f96"})}},"blocked"),(0,r.jsx)(G,{title:(0,c.__)("Blocked URL"),dataIndex:["data","blockedUrl"],render:(e,t)=>{let{blockedUrlTruncate:n,data:{blockedUrl:s}}=t;return(0,r.jsx)("a",{href:s,target:"_blank",rel:"noreferrer",title:s,children:n})}},"blockedUrl"),(0,r.jsx)(G,{title:(0,c.__)("Found on this URL"),sorter:(e,t)=>e.data.sourceUrl.localeCompare(t.data.sourceUrl),dataIndex:["data","sourceUrl"],render:(e,t)=>{let{sourceUrlTruncate:n,data:{sourceUrl:s}}=t;return(0,r.jsx)("a",{href:s,target:"_blank",rel:"noreferrer",children:n})}},"sourceUrl"),(0,r.jsx)(G,{title:(0,c.__)("Actions"),dataIndex:["data","markup"],render:(e,t)=>t.data.markup?(0,r.jsx)(J,{record:t}):""},"markup")]})]})})),Z=(0,a.PA)((e=>{let{template:t,onVisibleChange:n}=e;const{message:a}=m.A.useApp(),{scannerStore:o}=(0,u.g)(),i=[],{data:{identifier:l,name:h,consumerData:{scan:p}}}=t,[f,g]=(0,s.useState)(!1),x=(0,s.useCallback)((()=>{null==n||n(!f),g(!f)}),[l,f]),b=(0,s.useCallback)((async()=>{const e=o.resultAllExternalUrls.get(l),t=Array.from(e?e.values():[]);for(const e of t)i.push(e.data.sourceUrl);await o.addUrlsToQueue({urls:i,purgeUnused:!1}),a.info((0,c.__)("Pages are scheduled for scanning again...")),await Promise.all([o.fetchResultExternals(),o.fetchResultTemplates(),(0,d.refreshQueue)()])}),[]),y=!1===p?0:p.foundOnSitesCount;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Q.A,{title:h,open:f,width:1400,bodyStyle:{paddingBottom:0},onCancel:x,cancelText:(0,c.__)("Close"),cancelButtonProps:{style:{float:"right",marginLeft:"10px"}},okButtonProps:{type:"default"},onOk:b,okText:(0,c.__)("Scan these pages again"),children:(0,r.jsx)(K,{instance:t,reload:f&&y>0,reloadDependencies:[f,y]})}),(0,r.jsx)("a",{onClick:e=>{e.preventDefault(),x()},children:(0,c._n)("Embeds found on %d page","Embeds found on %d pages",y,y)})]})}));var ee=n(66399);const te=(0,a.PA)((()=>{const[e,t]=(0,s.useState)(!1),{scannerStore:n,cookieStore:a,optionStore:{isTcf:i}}=(0,u.g)(),{sortedTemplates:l,resultTemplates:d,busyResultTemplates:m}=n,{remaining:p}=(0,h.X)(),{essentialGroup:f}=a,[g,x]=(0,s.useState)(!1),b=(0,s.useCallback)((async r=>{if(g||!r||e)return;t(!0);const{identifier:s,isHidden:a,name:o}=r,l=n.resultTemplates.get(s),{type:c,templateModel:d}=l,u=`navigateAfterCreation=${encodeURIComponent("#scanner")}`;if("service"===c)(0,ee.P)().then((()=>window.location.href=`#/cookies/${null==f?void 0:f.key}/new?force=${s}&${u}`));else{const e=d;await e.fetchUse();const{use:{consumerData:{serviceTemplates:t,createAdNetwork:n}}}=e,r=t.filter((e=>{let{identifier:t}=e;return t===s}))[0]||t[0];let l="";if(r)if(!r.consumerData.isCreated||a){if(a)l=`#/cookies/${null==f?void 0:f.key}/new?force=${s}&${u}`;else if(!r.consumerData.isCreated){var m;l=`#/cookies/${null==f?void 0:f.key}/new?force=${r.identifier}&attributes=${JSON.stringify({createContentBlocker:(null==(m=r.group)?void 0:m.toLowerCase())!==(null==f?void 0:f.data.name.toLowerCase()),createContentBlockerId:s})}&${u}`}}else l=`#/blocker/new?force=${s}&${u}`;else n&&(l=i?`#/cookies/tcf-vendors/new?adNetwork=${encodeURIComponent(n)}`:`#/settings/tcf?tcfIntegrationItem=${encodeURIComponent(o)}&navigateAfterTcfActivation=${encodeURIComponent(`#/cookies/tcf-vendors/new?adNetwork=${encodeURIComponent(n)}`)}`);l&&(0,ee.P)().then((()=>window.location.href=l))}t(!1)}),[e,g,f]);return(0,r.jsxs)(R.e,{style:{textAlign:"center"},children:[(0,r.jsx)(U.A,{children:(0,c.__)("Services, for which you should obtain consent")}),(0,r.jsx)(o.A,{spinning:m&&!p||e,children:(0,r.jsx)(B,{templates:l.map((e=>{let{data:t}=e;return t})),onSelect:b,dropdownItems:e=>{let{identifier:t,consumerData:{scan:n}}=e;return[n&&{key:"table",label:(0,r.jsx)(Z,{template:d.get(t),onVisibleChange:x},"table")}]},onIgnoreToggle:(e,t)=>n.resultTemplates.get(e.identifier).ignore(t),isTcf:i})})]})}));var ne=n(34650),re=n(75792);const se=e=>{let{count:t}=e;const n=(0,s.useMemo)((()=>{const e=[];for(let n=0;n<t;n++)e.push({key:n});return e}),[t]);return(0,r.jsx)(ne.A,{dataSource:n,renderItem:()=>(0,r.jsx)(ne.A.Item,{children:(0,r.jsx)(re.A,{loading:!0,active:!0,avatar:!1,paragraph:{rows:1}})})})};var ae=n(24262),oe=n(57333),ie=n(30338),le=n(36920),ce=n(32041);const de=(0,a.PA)((e=>{let{item:t}=e;const[n,a]=(0,s.useState)(!1),{cookieStore:{essentialGroup:o}}=(0,u.g)(),{openDialog:i}=(0,ce.g)(),{data:{host:l}}=t,{addLink:d}=(0,le.t)(),m=(0,s.useCallback)((()=>{a(!n)}),[n]),h=(0,s.useCallback)((()=>{a(!1),i()}),[i]),p=`navigateAfterCreation=${encodeURIComponent(window.location.href)}`;return(0,r.jsx)(ie.A,{open:n,content:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:(0,r.jsx)("strong",{children:(0,c._i)((0,c.__)("Does {{i}}%s{{/i}} belong to an essential service without which your website would technically no longer work?",l),{i:(0,r.jsx)("i",{})})})}),(0,r.jsxs)("p",{children:[(0,r.jsx)("a",{className:"button button-primary",href:`${d}?force=scratch&attributes=${JSON.stringify({rules:`*${l}*`})}&${p}`,children:(0,c.__)("No")})," ",(0,r.jsx)("a",{className:"button",href:`#/cookies/${null==o?void 0:o.key}/new?force=scratch&${p}`,children:(0,c.__)("Yes")})," ",(0,r.jsx)("button",{className:"button",onClick:h,children:(0,c.__)("I do not know")})]}),(0,r.jsx)("p",{className:"description",children:(0,c._i)((0,c.__)("{{strong}}No:{{/strong}} Non-essential services that process personal data (e.g. IP address in some countries) or set cookies may only be loaded after consent. You should block them using a content blocker until consent is given. {{i}}Examples would be iframes, YouTube and similar embeddings or tracking tools.{{/i}}"),{strong:(0,r.jsx)("strong",{}),i:(0,r.jsx)("i",{})})}),(0,r.jsx)("p",{className:"description",children:(0,c._i)((0,c.__)("{{strong}}Yes (rare cases):{{/strong}} You should inform your users about the use of the service in the essential services group. You do not need to create a content blocker, as the service can be loaded without consent. {{i}}Examples are privacy-friendly spam protection tools or security tools.{{/i}}"),{strong:(0,r.jsx)("strong",{}),i:(0,r.jsx)("i",{})})}),(0,r.jsx)("p",{children:(0,r.jsx)("button",{className:"button",onClick:m,children:(0,c.__)("Close")})})]}),placement:"right",overlayStyle:{maxWidth:350},children:(0,r.jsx)("a",{onClick:m,children:(0,c.__)("Handle external URL")})})})),ue=(0,a.PA)((e=>{let{item:t}=e;const[n,a]=(0,s.useState)(!1),{data:{host:i,foundOnSitesCount:l,tags:m,ignored:h},inactive:p,blockedStatus:f,blockedStatusText:g,busy:x}=t,{scannerStore:b}=(0,u.g)(),y=(0,s.useCallback)((()=>{a(!n)}),[i,n]),k=(0,s.useCallback)((async()=>{const e=[];try{await b.fetchResultAllExternals(t),b.resultAllExternalUrls.get(t.data.host).forEach((t=>{e.push(t.data.sourceUrl)})),await b.addUrlsToQueue({urls:e,purgeUnused:!1}),await Promise.all([b.fetchResultExternals(),(0,d.refreshQueue)()])}catch(e){e instanceof Error&&console.log(e)}}),[t]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(ne.A.Item,{itemID:i,actions:[(0,r.jsx)(de,{item:t},"handle"),h&&(0,r.jsx)("a",{onClick:()=>{t.ignore(!1),a(!1)},children:(0,c.__)("Show recommendation again")}),!p&&(0,r.jsx)(ae.A,{title:(0,c.__)("Are you sure that you want to ignore this recommendation?"),placement:"bottomRight",onConfirm:()=>{t.ignore(!0),a(!1)},okText:(0,c.__)("Ignore recommendation"),cancelText:(0,c.__)("Cancel"),overlayStyle:{maxWidth:350},children:(0,r.jsx)("a",{children:(0,c.__)("Ignore recommendation")})},"delete")].filter(Boolean),style:{opacity:p&&!n?.6:1},children:(0,r.jsx)(o.A,{spinning:x,children:(0,r.jsx)(ne.A.Item.Meta,{title:(0,r.jsxs)("span",{children:[i," ",m.map((e=>(0,r.jsx)(M.A,{children:`<${e} />`},e))),h&&(0,r.jsx)(M.A,{children:(0,c.__)("Ignored")}),"none"!==f&&(0,r.jsx)(M.A,{color:"partial"===f?"warning":"success",children:g})]}),description:(0,r.jsx)("button",{className:"button-link",onClick:y,children:n?(0,c.__)("Close"):(0,c._n)("Embeds found on %d page","Embeds found on %d pages",l,l)})})})}),n&&(0,r.jsx)(K,{instance:t,reload:n&&l>0,reloadDependencies:[n,l],style:{marginTop:"-6px"},tableProps:{footer:()=>(0,r.jsx)("div",{style:{textAlign:"right"},children:(0,r.jsx)(oe.Ay,{onClick:k,children:(0,c.__)("Scan these pages again")})})}})]})}));var me=n(53603),he=n(70697),pe=n(89657);const fe=(0,a.PA)((()=>{const{scannerStore:e,cookieStore:t}=(0,u.g)(),{currentJob:n}=(0,h.X)(),{templatesCount:a,externalUrlsCount:o,busyExternalUrls:i,sortedExternalUrls:l,canShowResults:d}=e,m=(0,me.m)("scanner");return(0,s.useEffect)((()=>{e.fetchResultTemplates(),e.fetchResultExternals(),t.fetchGroups()}),[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(he.k,{style:{margin:"10px 0 0 0"}}),(0,r.jsxs)(R.e,{children:[(0,r.jsx)(E,{}),d&&a>0&&(0,r.jsx)(te,{}),d&&o>0&&(i&&!l.length&&void 0===n?(0,r.jsx)(se,{count:o}):(0,r.jsxs)("div",{children:[(0,r.jsx)(U.A,{children:(0,c.__)("Embeds of external URLs to be checked")}),(0,r.jsx)("div",{style:{maxWidth:800,margin:"0px auto 20px",textAlign:"center"},children:(0,r.jsx)("p",{className:"description",children:(0,c.__)("You are embedding scripts, styles, iframes or similar from the following third-party servers. We currently do not have service templates for these. Therefore, you may have to create a service and/or content blocker yourself after you have assessed the situation.")})}),(0,r.jsx)(ne.A,{children:l.map((e=>(0,r.jsx)(ue,{item:e},e.data.host)))})]})),(0,r.jsx)("div",{style:{maxWidth:800,margin:"30px auto 0",textAlign:"center"},children:m})]}),(0,r.jsx)(pe.b,{identifier:"scanner",title:(0,c.__)("What does the scanner find?"),width:900})]})}))},76576:(e,t,n)=>{n.d(t,{f:()=>a});var r=n(69665),s=n(68789);function a(){return s.qs.parse((0,r.useLocation)().search)}},36920:(e,t,n)=>{n.d(t,{t:()=>i});var r=n(69665),s=n(71951),a=n(41594),o=n(44227);const i=()=>{const e=(0,r.useParams)(),{cookieStore:t}=(0,s.g)(),n=+e.blocker,i=isNaN(+n)?0:+n,l=!!n,c=t.blockers.entries.get(i)||new o.g(t.blockers,{id:0}),d=(0,a.useCallback)((e=>{let{key:t}=e;return`#/blocker/edit/${t}`}),[c]);return{blocker:c,id:i,queried:l,fetched:0!==c.key,link:"#/blocker",editLink:d,addLink:"#/blocker/new"}}}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/5.0.15/39bead0aae7fde9f12e8c3b6737d5147/chunk-config-tab-scanner.lite.js.map
