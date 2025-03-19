"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[668],{66732:(e,t,s)=>{s.d(t,{X:()=>o});var a=s(12719),n=s(59726);function o(){const{__:e}=(0,n.s)();return(0,a.W)({title:e("Want a better integrated visual content blocker for your website?"),testDrive:!0,feature:"visual-content-blocker",assetName:e("pro-modal/visual-content-blocker.webp"),description:e("Instead of a lot of text, you can offer your visitor a more pleasant way to view blocked content. For example, you can replace your video embeds with a privacy-compliant dummy player with thumbnail, or an embedded map with a preview map.")})}},84200:(e,t,s)=>{function a(e){return e.indexOf(".")>-1&&!!/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/.test(e)}s.d(t,{g:()=>a})},37682:(e,t,s)=>{s.d(t,{y:()=>n});var a=s(3713);const n=(0,s(57922).PA)((()=>(0,a.jsx)("div",{})))},63581:(e,t,s)=>{s.r(t),s.d(t,{DashboardCards:()=>W});var a=s(3713),n=s(41594),o=s(57922),r=s(43799),i=s(18197),l=s(6099),c=s(92453),d=s(30617),u=s(71951),h=s(33146),m=s(73491);const p="#/settings",_="#/cookies",g=(0,o.PA)((()=>{const{optionStore:e,cookieStore:{groups:t}}=(0,u.g)(),{isTcf:s,isBannerActive:n,isBlockerActive:o,busySettings:r,cookieCounts:l,isOnlyRcbCookieCreated:c,tcfVendorConfigurationCounts:g}=e,x=n&&o;return(0,a.jsxs)(i.A,{spinning:t.busy||r,children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(h.A,{status:n?"success":"error",text:(0,d._i)(n?(0,d.__)("Cookie Banner is {{strong}}activated{{/strong}}"):(0,d.__)("Cookie Banner is {{strong}}deactivated{{/strong}}"),{strong:(0,a.jsx)("strong",{})})}),(0,a.jsx)("p",{className:"description",children:(0,d._i)((0,d.__)("You can enable and disable the cookie banner in the {{a}}settings page{{/a}}."),{a:(0,a.jsx)("a",{href:p})})})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(h.A,{status:x?"success":"error",text:(0,d._i)(x?(0,d.__)("Content Blocker is {{strong}}activated{{/strong}}"):(0,d.__)("Content Blocker is {{strong}}deactivated{{/strong}}"),{strong:(0,a.jsx)("strong",{})})}),(0,a.jsx)("p",{className:"description",children:(0,d._i)((0,d.__)("You can enable and disable the content blocker in the {{a}}settings page{{/a}}."),{a:(0,a.jsx)("a",{href:p})})})]}),(0,a.jsxs)("p",{children:[(0,d.__)("Available service groups:")," ",t.sortedGroups.map((e=>{let{data:{name:t,id:s}}=e;return(0,a.jsx)(m.A,{children:t},s)})),"• ",(0,a.jsx)("a",{href:_,children:(0,d.__)("Manage")})]}),(0,a.jsxs)("p",{children:[(0,d._i)((0,d.__)("You have defined {{strong}}%d enabled{{/strong}}, %d disabled and %d draft services.",c?0:l.publish,c?0:l.private,c?0:l.draft),{strong:(0,a.jsx)("strong",{})}),"  •  ",(0,a.jsx)("a",{href:_,children:(0,d.__)("Manage")})]}),s&&g&&(0,a.jsxs)("p",{children:[(0,d._i)((0,d.__)("You have defined {{strong}}%d enabled{{/strong}}, %d disabled and %d draft TCF vendors.",g.publish,g.draft,g.private),{strong:(0,a.jsx)("strong",{})}),"  •  ",(0,a.jsx)("a",{href:"#/cookies/tcf-vendors",children:(0,d.__)("Manage")})]})]})}));var x=s(42090),f=s(19117),b=s(34650),y=s(24262),v=s(24985),j=s(23110),w=s(41415),k=s(84200),A=(s(59627),s(12719));var C=s(66732);const S=(0,o.PA)((()=>{const{message:e}=f.A.useApp(),[t,s]=(0,n.useState)(!1),{optionStore:{dashboardMigration:{id:o,description:r,actions:l},others:{isPro:c}}}=(0,u.g)(),[h,m]=(0,n.useState)({}),[p,_]=(0,n.useState)([]),g=(0,A.W)({title:(0,d.__)("Want to optimize the cookie banner for mobile users?"),testDrive:!0,feature:"mobile-experience",assetName:(0,d.__)("pro-modal/mobile-optimization.png"),description:(0,d.__)("Cookie banners are a necessary evil that takes up a lot of space, especially on smartphones. With mobile optimization you can customize the cookie banner so that it is more discreet and at the same time easy to read on smartphones.")}),S=(0,C.X)(),T=(0,n.useCallback)((async t=>{let{id:a,callback:n}=t;if("string"==typeof n&&(0,k.g)(n))window.location.href=n;else{s(!0);try{const{success:t,redirect:s,message:n,overrideAction:r}=await(0,x.E)({location:j.a,params:{migration:o,action:a}});t&&(s?window.location.href=s:(e.success(n||(0,d.__)("Successfully saved changes!")),r&&(m((e=>({...e,[a]:r}))),_((e=>[...e,a])))))}catch(e){}finally{s(!1)}}}),[]);return(0,a.jsxs)(i.A,{spinning:t,children:[(0,a.jsx)("p",{className:"description",dangerouslySetInnerHTML:{__html:r}}),(0,a.jsx)(b.A,{itemLayout:"vertical",size:"small",dataSource:Object.values(l),renderItem:e=>{const{id:t,title:s,description:n,linkText:o,linkClasses:r,linkDisabled:i,confirmText:l,previewImage:u,performed:m,performedLabel:_,needsPro:x,info:f}={...e,...h[e.id]||{},...p.indexOf(e.id)>-1?{performed:!0}:{}},j=(0,a.jsx)("button",{className:r,onClick:()=>!l&&T(e),disabled:i,children:o},"apply-link");return(0,a.jsx)(b.A.Item,{actions:[o&&(l?(0,a.jsx)(y.A,{title:(0,a.jsx)("span",{dangerouslySetInnerHTML:{__html:l}}),placement:"bottomLeft",onConfirm:()=>T(e),cancelText:(0,d.__)("Cancel"),okText:o,overlayStyle:{maxWidth:450},transitionName:null,children:j}):j),m&&(!x||c)&&(0,a.jsxs)("span",{style:{verticalAlign:"middle"},children:[(0,a.jsx)(w.A,{})," ",_||(0,d.__)("Already applied")]}),x&&!c&&(()=>{let e,s;switch(t){case"visual-content-blocker":({modal:e,tag:s}=S);break;case"mobile-experience":({modal:e,tag:s}=g);break;default:return null}return(0,a.jsxs)(a.Fragment,{children:[e," ",(0,a.jsx)("span",{style:{position:"absolute",top:3},children:s})]})})()].filter(Boolean),children:(0,a.jsx)(b.A.Item.Meta,{title:s,description:(0,a.jsxs)(a.Fragment,{children:[u?u.endsWith(".webm")?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,src:u,style:{marginLeft:15,width:272,height:"auto",float:"right",cursor:"pointer"},onClick:e=>e.target.nextElementSibling.click(),children:(0,a.jsx)("source",{src:u,type:"video/webm"})}),(0,a.jsx)(v.A,{width:272,wrapperStyle:{display:"none"},preview:{imageRender:()=>(0,a.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,src:u,children:(0,a.jsx)("source",{src:u,type:"video/webm"})})}})]}):(0,a.jsx)(v.A,{width:272,src:u,wrapperStyle:{marginLeft:15,float:"right"}}):null,(0,a.jsx)("p",{className:"description",dangerouslySetInnerHTML:{__html:n}}),!!f&&(0,a.jsx)("div",{className:"notice notice-info below-h2 notice-alt",style:{marginTop:10},children:(0,a.jsx)("p",{className:"description",dangerouslySetInnerHTML:{__html:f}})})]})})},t)}})]})}));var T=s(42837);const N=(0,o.PA)((e=>{let{description:t,links:s,logo:n}=e;return(0,a.jsxs)(a.Fragment,{children:[!!n&&(0,a.jsx)("img",{src:n,style:{maxWidth:"100%",maxHeight:"80px",display:"block",margin:"0 0 10px"}}),!!t&&(0,a.jsx)("p",{className:"description",dangerouslySetInnerHTML:{__html:t}}),null==s?void 0:s.map((e=>{let{link:t,linkText:s}=e;return(0,a.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",className:"button",style:{marginTop:13,marginRight:10},children:s},t)}))]})}));var L=s(64715),M=s(2464);const F={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M168 504.2c1-43.7 10-86.1 26.9-126 17.3-41 42.1-77.7 73.7-109.4S337 212.3 378 195c42.4-17.9 87.4-27 133.9-27s91.5 9.1 133.8 27A341.5 341.5 0 01755 268.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.7 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c0-6.7-7.7-10.5-12.9-6.3l-56.4 44.1C765.8 155.1 646.2 92 511.8 92 282.7 92 96.3 275.6 92 503.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8zm756 7.8h-60c-4.4 0-7.9 3.5-8 7.8-1 43.7-10 86.1-26.9 126-17.3 41-42.1 77.8-73.7 109.4A342.45 342.45 0 01512.1 856a342.24 342.24 0 01-243.2-100.8c-9.9-9.9-19.2-20.4-27.8-31.4l60.2-47a8 8 0 00-3-14.1l-175.7-43c-5-1.2-9.9 2.6-9.9 7.7l-.7 181c0 6.7 7.7 10.5 12.9 6.3l56.4-44.1C258.2 868.9 377.8 932 512.2 932c229.2 0 415.5-183.7 419.8-411.8a8 8 0 00-8-8.2z"}}]},name:"sync",theme:"outlined"};var P=s(4679),Y=function(e,t){return n.createElement(P.A,(0,M.A)({},e,{ref:t,icon:F}))};const D=n.forwardRef(Y),I=(0,o.PA)((()=>{const{message:e}=f.A.useApp(),{cookieStore:t,optionStore:s}=(0,u.g)(),{busySettings:o,others:{isPro:r,isLicensed:i},cloudReleaseInfo:{blocker:l,service:c}}=s,[h,m]=(0,n.useState)(!1),p=(0,n.useCallback)((async()=>{if(!h){m(!0);try{await t.fetchTemplatesServices({storage:"redownload"}),await t.fetchTemplatesBlocker(),await s.fetchCurrentRevision(),e.success("Template database successfully updated. You can see the latest templates now!")}catch(t){e.error(t.responseJSON.message)}finally{m(!1)}}}),[h]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{className:"description",children:(0,d.__)("Templates for hundreds of services that you could be running on your website must be downloaded from Real Cookie Banner's Service Cloud. The data will be downloaded locally to your server, so your website visitors will not need to connect to the cloud.")}),i?(0,a.jsxs)(a.Fragment,{children:[l?(0,a.jsx)("p",{className:"description",children:(0,d._i)((0,d.__)("You have downloaded the service templates the last time on {{u/}}"),{u:(0,a.jsx)(L.A,{title:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("strong",{children:(0,d.__)("Services")}),(0,a.jsx)("br",{}),(0,d.__)("Release ID"),": ",null==c?void 0:c.releaseId,(0,a.jsx)("br",{}),(0,d.__)("Pre-release"),":"," ",(null==c?void 0:c.isPreReleaseEnabled)?(0,d.__)("Yes"):(0,d.__)("No"),(0,a.jsx)("br",{}),(0,a.jsx)("strong",{children:(0,d.__)("Content Blocker")}),(0,a.jsx)("br",{}),(0,d.__)("Release ID"),": ",null==l?void 0:l.releaseId,(0,a.jsx)("br",{}),(0,d.__)("Pre-release"),":"," ",(null==l?void 0:l.isPreReleaseEnabled)?(0,d.__)("Yes"):(0,d.__)("No")]}),children:(0,a.jsx)("u",{style:{textDecoration:"none",borderBottom:"1px dotted #000",cursor:"help"},children:new Date(l.downloadTime).toLocaleString(document.documentElement.lang)})})})}):o?null:(0,a.jsx)("div",{className:"notice notice-error inline below-h2 notice-alt",style:{margin:"10px 0"},children:(0,a.jsx)("p",{className:"description",children:(0,d.__)('An error occurred when trying to download the templates from the Service Cloud for the first time. This means that the scanner will currently not be able to suggest scan results for service templates. The download will be performed again automatically in a few minutes, or click "Update templates" below.')})}),(0,a.jsx)("p",{children:(0,a.jsx)(L.A,{title:(0,d.__)('The template database is downloaded to your WordPress and is updated daily. Click "Update templates" to download the latest version now!'),placement:"bottom",children:(0,a.jsxs)("a",{type:"button",className:"button "+(h?"button-disabled":""),onClick:p,children:[(0,a.jsx)(D,{spin:h})," ",(0,d.__)("Update templates")]})})})]}):o?null:(0,a.jsx)("div",{className:"notice notice-warning inline below-h2 notice-alt",style:{margin:"10px 0"},children:(0,a.jsxs)("p",{className:"description",children:[(0,d.__)("This functionality is only available with a valid license, as the service templates must be downloaded regularly from our cloud service.")," ","•"," ",(0,a.jsx)("a",{href:`#/licensing?navigateAfterActivation=${encodeURIComponent(window.location.href)}`,children:r?(0,d.__)("Activate license"):(0,d.__)("Activate free license")})]})})]})})),B=(0,o.PA)((()=>{const{optionStore:{others:{cachePlugins:e}}}=(0,u.g)(),t=Object.values(e).join(", ");return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{className:"description",children:(0,d.__)("Real Cookie Banner can empty your page cache automatically as soon as a page cache is detected. This means that you do not have to manually clear your page cache if you make changes to the cookie banner via the customizer or if you ask for a new consent.")}),t?(0,a.jsx)(h.A,{status:"success",text:(0,d._i)((0,d.__)("We have detected {{strong}}%s{{/strong}} as your page cache.",t),{strong:(0,a.jsx)("strong",{})})}):(0,a.jsx)(h.A,{status:"default",text:(0,d._i)((0,d.__)("We did {{strong}}not detect{{/strong}} any page cache on your site."),{strong:(0,a.jsx)("strong",{})})})]})}));var E=s(37682),R=s(52624),z=s(23291);const W=(0,o.PA)((()=>{const{statsStore:e,optionStore:t,cookieStore:s,checklistStore:o}=(0,u.g)(),{others:{isPro:h,assetsUrl:m,hints:{dashboardTile:p}},dashboardMigration:_}=t,{filters:{dates:x}}=e,[f,b]=(0,n.useState)();(0,n.useEffect)((()=>{s.groups.get(),t.fetchCurrentRevision()}),[]);const y=o.completed.length<3||_?.5:1,v=(0,n.useMemo)((()=>(0,a.jsx)(r.A,{style:{margin:10,opacity:y},title:(0,d.__)("General"),className:"rcb-dashboard-card-focus",children:(0,a.jsx)(g,{})})),[y]),j=(0,n.useMemo)((()=>_?(0,a.jsx)(r.A,{style:{margin:10},title:_.headline,extra:(0,a.jsx)("a",{href:"#",onClick:()=>t.dismissMigration(),children:(0,d.__)("Dismiss this info")}),children:(0,a.jsx)(S,{})}):null),[_,t]),w=(0,n.useMemo)((()=>(0,a.jsx)(r.A,{style:{margin:10,opacity:_?y:void 0},title:(0,d.__)("Set up the cookie banner"),extra:o.done?null:(0,a.jsx)("a",{href:"#",onClick:()=>o.toggleChecklistItem("all",!0),children:(0,d.__)("I have already done all the steps")}),children:(0,a.jsx)(T.y,{})})),[o.done,_]),k=(0,n.useMemo)((()=>p.map((e=>{let{title:t,...s}=e;return(0,a.jsx)(r.A,{style:{margin:10,opacity:y},title:t,className:"rcb-dashboard-card-focus",children:(0,a.jsx)(N,{...s})},t)}))),[p,y]);return 0===o.items.length?(0,a.jsx)(i.A,{spinning:!0,style:{marginTop:15}}):(0,a.jsx)(i.A,{spinning:o.busyChecklist,style:{marginTop:15},children:(0,a.jsxs)(l.A,{children:[(0,a.jsxs)(c.A,{xl:16,sm:16,xs:24,children:[j,o.done?v:w,(0,a.jsx)(r.A,{style:{margin:10,opacity:y},className:"rcb-dashboard-card-focus",title:(0,d.__)("Statistics"),extra:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("a",{href:"#/consent",children:(0,d.__)("More statistics")}),"  •  ",(0,a.jsx)(R.U,{value:x,disabled:!0})]}),children:h?(0,a.jsx)(E.y,{}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(z.X,{title:(0,d.__)("Want to see detailed statistics about the consents of your visitors?"),inContainer:!0,inContainerElement:f,testDrive:!0,feature:"dashboard-stats",description:(0,d.__)("You can get several statistics about how your users use the cookie banner. This helps you to calculate the total number of users who do not want to be tracked, for example, by extrapolating data from Google Analytics."),showHints:!1,showFomoCouponCounter:o.done}),(0,a.jsx)("div",{ref:b,className:"rcb-antd-modal-mount",style:{height:600,backgroundImage:`url('${m}dashboard-statistics-blured.png')`}})]})})]}),(0,a.jsxs)(c.A,{xl:8,sm:8,xs:24,children:[o.done?w:v,k,(0,a.jsx)(r.A,{style:{margin:10,opacity:y},title:(0,d.__)("Service Cloud"),className:"rcb-dashboard-card-focus",children:(0,a.jsx)(I,{})}),(0,a.jsx)(r.A,{style:{margin:10,opacity:y},title:(0,d.__)("Cache"),className:"rcb-dashboard-card-focus",children:(0,a.jsx)(B,{})})]})]})})}))},52624:(e,t,s)=>{s.d(t,{U:()=>u});var a=s(3713),n=s(30617),o=s(38123),r=s.n(o),i=s(32386),l=s(16983);const c=i.A.generatePicker(l.A),{RangePicker:d}=c,u=e=>{const t=r().localeData();return(0,a.jsx)(d,{locale:{lang:{locale:r().locale(),placeholder:(0,n.__)("Select date"),rangePlaceholder:[(0,n.__)("Start date"),(0,n.__)("End date")],today:(0,n.__)("Today"),now:(0,n.__)("Now"),backToToday:(0,n.__)("Back to today"),ok:(0,n.__)("OK"),clear:(0,n.__)("Clear"),month:(0,n.__)("Month"),year:(0,n.__)("Year"),timeSelect:(0,n.__)("Select time"),dateSelect:(0,n.__)("Select date"),monthSelect:(0,n.__)("Choose a month"),yearSelect:(0,n.__)("Choose a year"),decadeSelect:(0,n.__)("Choose a decade"),yearFormat:"YYYY",dateFormat:t.longDateFormat("LL"),dayFormat:"D",dateTimeFormat:t.longDateFormat("LLL"),monthFormat:"MMMM",monthBeforeYear:!0,previousMonth:(0,n.__)("Previous month (PageUp)"),nextMonth:(0,n.__)("Next month (PageDown)"),previousYear:(0,n.__)("Last year (Control + left)"),nextYear:(0,n.__)("Next year (Control + right)"),previousDecade:(0,n.__)("Last decade"),nextDecade:(0,n.__)("Next decade"),previousCentury:(0,n.__)("Last century"),nextCentury:(0,n.__)("Next century")},timePickerLocale:{placeholder:(0,n.__)("Select time")},dateFormat:t.longDateFormat("LL"),dateTimeFormat:t.longDateFormat("LLL"),weekFormat:"YYYY-wo",monthFormat:"YYYY-MM"},...e})}},16741:(e,t,s)=>{s.d(t,{A:()=>o});var a=s(75206),n=s.n(a);function o(e,t,s,a){var o=n().unstable_batchedUpdates?function(e){n().unstable_batchedUpdates(s,e)}:s;return null!=e&&e.addEventListener&&e.addEventListener(t,o,a),{remove:function(){null!=e&&e.removeEventListener&&e.removeEventListener(t,o,a)}}}},23797:(e,t,s)=>{function a(){return{width:document.documentElement.clientWidth,height:window.innerHeight||document.documentElement.clientHeight}}function n(e){var t=e.getBoundingClientRect(),s=document.documentElement;return{left:t.left+(window.pageXOffset||s.scrollLeft)-(s.clientLeft||document.body.clientLeft||0),top:t.top+(window.pageYOffset||s.scrollTop)-(s.clientTop||document.body.clientTop||0)}}s.d(t,{A3:()=>n,XV:()=>a})}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/5.0.15/c2d90802bc705d5c820b2b64fc7f4948/chunk-config-tab-dashboard.lite.js.map
