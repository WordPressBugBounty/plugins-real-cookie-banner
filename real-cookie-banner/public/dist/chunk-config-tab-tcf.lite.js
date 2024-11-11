"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[763],{96596:(e,t,n)=>{n.d(t,{m:()=>B});var o=n(3713),r=n(41594),s=n(91502),i=n(6099),a=n(92453),d=n(78915),l=n(9551),c=n(28101),u=n(24262),h=n(19991),v=n(64715),g=n(73491),m=n(75792),f=n(59726),p=n(36305),x=n(85360),y=n(97276);function C(){const{__:e}=(0,f.s)(),[t,n]=(0,r.useState)(),[s,i]=(0,r.useState)(),a=(0,r.useCallback)((e=>{let{total:t,title:o}=e,r=0;const s=new AbortController;let a;const d=new Promise((e=>a=e));return n(0),i({total:t,title:o,abortController:s}),[()=>{r++,r>=t?(n(void 0),i(void 0),a()):n(r)},s.signal,d]}),[]);return[a,"number"==typeof t&&s?(0,o.jsx)(c.A,{style:{clear:"both"},description:(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{children:s.title})}),image:(0,o.jsx)(y.A,{type:"circle",width:100,percent:+(t/s.total*100).toFixed(0),format:e=>(0,o.jsxs)(o.Fragment,{children:[e," %",(0,o.jsx)("br",{}),(0,o.jsxs)("span",{style:{fontSize:10},children:[t," / ",s.total]})]})}),children:(0,o.jsx)("button",{className:"button button-primary",onClick:()=>{s.abortController.abort(),n(void 0),i(void 0)},children:e("Cancel")})}):void 0]}var w=n(17312),b=n(27465),j=n(18197),k=n(65824),A=n(81533),T=n(45854);const S=e=>{const t=(0,p.l)(),{view:n,rows:s}=t,{__:i,_n:a}=(0,f.s)(),{name:d,description:l,provider:c,lists:h,hasRealTimeApi:v,updatedAt:m,createContentBlockerForVendorId:x,onCreateOrEditContentBlocker:y,onCreate:C}=e,[w,b]=(0,r.useState)((()=>{var e;return null==(e=h.filter((e=>{let{isRecommended:t,name:n}=e;return t&&n}))[0])?void 0:e.name})),j=(0,r.useMemo)((()=>"vendors"===n?s.filter((e=>{let{vendor:{id:t},blocker:n}=e;return t===x&&!1!==n}))[0]:void 0),[n,s,x]),[S,I]=(0,r.useState)(!!y&&!j),{lang:F}=document.documentElement,[N]=h.filter((e=>{let{name:t}=e;return t===w}));return(0,o.jsxs)(k.A,{direction:"vertical",children:[(0,o.jsxs)("p",{className:"description",children:[l,(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),i("Only advertising partners to whom your website visits have consented can participate in the auction. For advertising partners who require consent in accordance with the TCF standard, the respective TCF vendors must be configured."),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),i("You can automatically import these lists of TCF vendor configurations:")]}),(0,o.jsx)(A.Ay.Group,{value:w,onChange:e=>b(e.target.value),children:(0,o.jsx)(k.A,{direction:"vertical",children:h.map((e=>{let{name:t,description:n,isRecommended:r,vendorIds:{length:s}}=e;return(0,o.jsxs)(A.Ay,{value:t,children:[(0,o.jsxs)("div",{children:[t," (",a("%d TCF vendor","%d TCF vendors",s,s),")"," ",r&&(0,o.jsx)(g.A,{color:"blue",children:i("Recommended")})]}),(0,o.jsx)("p",{className:"description",children:n})]},t)}))})}),(0,o.jsx)("p",{className:"description",children:(0,o.jsxs)("i",{children:[i("Last updated: %s",new Date(m).toLocaleDateString(F))," • ",!v&&i("%s does not offer an API for real-time updates.",c)]})}),y&&!j&&(0,o.jsx)(T.A,{checked:S,onChange:e=>I(e.target.checked),children:i('Create content blocker for %s (blocks scripts until consent for purpose "Store and/or access information on a device" is given for this TCF vendors)',d)}),(0,o.jsx)("div",{style:{textAlign:"right"},children:N&&(0,o.jsx)(u.A,{title:(0,o.jsxs)(o.Fragment,{children:[i("After activating the TCF vendors, I will check the information for each activated TCF vendor in the TCF vendor configuration myself and correct any information that does not match my use case."),S&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),i("In addition, I'll checked the information in the content blocker  myself for correctness and completeness and add missing information or corrected information that does not fit my use case. I am aware that the manufacturer of Real Cookie Banner cannot take any liability in this respect.")]})]}),overlayInnerStyle:{maxWidth:300},placement:"bottomLeft",onConfirm:async()=>{await C({adNetwork:e,list:N}),S&&!j&&setTimeout((()=>{y()}),0)},okText:i("Create"),cancelText:i("Cancel"),children:(0,o.jsx)("a",{className:"button button-primary",children:i("Create TCF vendor configurations")})})})]})},{Panel:I}=b.A,F=e=>{let{onCreate:t}=e;const n=(0,p.l)(),{adNetworks:r,view:s}=n,i=("vendors"===s?n.defaultCreateAdNetworkIdentifier:void 0)||r[0].identifier;return 0===n.rows.length?(0,o.jsx)(j.A,{spinning:!0}):(0,o.jsx)(b.A,{accordion:!0,defaultActiveKey:i,children:r.map((e=>{const{name:n,identifier:r,logo:s}=e;return(0,o.jsx)(I,{header:n,extra:(0,o.jsx)("img",{src:s,style:{height:"1em"}}),children:(0,o.jsx)(S,{...e,onCreate:t})},r)}))})},{Column:N}=s.A,B=()=>{const{__:e,_i:t}=(0,f.s)(),n=(0,p.l)(),{busy:y,vendorCount:b,view:j,rows:k}=n,[A,T]=(0,r.useState)({vendor:""}),[S,I]=(0,r.useState)([]),[B,_]=C(),[V,P]=(0,r.useState)((()=>"vendors"===j&&!!n.defaultCreateAdNetworkIdentifier)),O=(0,r.useMemo)((()=>n.adNetworks.map((e=>({network:e,vendorIds:e.lists.map((e=>{let{vendorIds:t}=e;return t})).flat()})))),[n.adNetworks]),R=(0,r.useMemo)((()=>[...k].sort(((e,t)=>{let{vendor:n}=e,{vendor:o}=t;if(!n||!o)return-1;const{name:r}=n,{name:s}=o;return r<s?-1:r>s?1:0})).filter((e=>{let{vendor:t}=e;const{vendor:n}=A;if(t&&n){const e=n.toLowerCase();return t.id.toString()===e||t.name.toLowerCase().indexOf(e)>-1}return!0}))),[k,k.length,A]),L=(0,r.useCallback)((e=>R.filter((t=>{let{configuration:n,vendor:o}=t;return e.indexOf("boolean"==typeof n?o.id:n.id)>-1&&!0!==n}))),[R]),E=e("Create TCF vendor configuration");return _||(b||"vendors"===j?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(i.A,{justify:"end",gutter:10,children:["vendors"===j&&(0,o.jsxs)(a.A,{children:[(0,o.jsx)(d.A,{open:V,title:e("Add vendors from ad networks"),onCancel:()=>P(!1),footer:null,width:800,children:(0,o.jsx)(F,{onCreate:async t=>{let{list:{vendorIds:o}}=t;P(!1);const r=L(o).map((e=>{let{vendor:t}=e;return t})),[s,i,a]=B({title:e("Creating vendors..."),total:r.length});await n.onBulkCreate(r,s,i,a)}})}),(0,o.jsx)("a",{onClick:()=>P(!0),className:"button right",style:{marginBottom:10},children:t(e("Add vendors from ad networks (e.g. {{img/}} Google Adsense)"),{img:(0,o.jsx)("img",{style:{height:"1em"},src:"https://assets.devowl.io/in-app/wp-real-cookie-banner/logos/google-a-dsense.svg"})})})]}),(0,o.jsx)(a.A,{style:{width:400},children:(0,o.jsx)(l.A.Search,{autoFocus:!0,style:{maxWidth:400},placeholder:e("Search vendor by name or ID..."),onChange:e=>T((t=>({...t,vendor:e.target.value})))})}),"vendor-configurations"===j&&(0,o.jsx)(a.A,{children:(0,o.jsx)("a",{onClick:n.onSwitchToVendorView,className:"button button-primary right",style:{marginBottom:10},children:E})})]}),(0,o.jsx)("div",{style:{textAlign:"right",marginBottom:15}}),(0,o.jsxs)(s.A,{pagination:{pageSize:50,showTotal:(e,t)=>`${t[0]}-${t[1]} / ${e}`,showSizeChanger:!1},locale:{emptyText:(0,o.jsx)(c.A,{description:e("No data")})},loading:y,dataSource:R,rowKey:e=>{let{vendor:t,configuration:n}=e;return"boolean"==typeof n?t.id:n.id},size:"small",bordered:!0,rowSelection:{type:"checkbox",getCheckboxProps:e=>{let{configuration:t}=e;return{disabled:"vendors"===j&&!0===t}},selectedRowKeys:S,onChange:(e,t,n)=>{let{type:o}=n;I("all"===o?S.length>0?[]:R.map((e=>{let{configuration:t,vendor:n}=e;return"boolean"==typeof t?t?0:n.id:t.id})).filter(Boolean):e)}},children:[(0,o.jsx)(N,{title:(0,x.i)([...S.length>0?[(0,o.jsx)("span",{children:e("%d selected",S.length)},"bulk"),"vendors"===j&&(0,o.jsx)(u.A,{title:(0,o.jsxs)(o.Fragment,{children:[e("Please note that selecting more vendors than you actually use may lead to ineffective consent. Therefore, only activate the vendors that you actually actively work with!"),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),e("After activating the TCF vendors, I will check the information for each activated TCF vendor in the TCF vendor configuration myself and correct any information that does not match my use case.")]}),overlayInnerStyle:{maxWidth:300},placement:"bottomLeft",onConfirm:()=>{const[t,o,r]=B({title:e("Creating vendors..."),total:S.length});n.onBulkCreate(L(S).map((e=>{let{vendor:t}=e;return t})),t,o,r),I([])},okText:e("Create"),cancelText:e("Cancel"),children:(0,o.jsx)("a",{children:e("Create all selected vendors")})},"bulk-create"),"vendor-configurations"===j&&(0,o.jsx)(u.A,{title:e("Are you sure you want to delete this vendors?"),placement:"bottomLeft",onConfirm:()=>{const[t,o,r]=B({title:e("Deleting vendors..."),total:S.length});n.onBulkDelete(L(S).map((e=>{let{configuration:t}=e;return t})),t,o,r),I([])},okText:e("Delete all"),cancelText:e("Cancel"),children:(0,o.jsx)("a",{children:e("Delete all")})},"bulk-delete")]:[],(0,o.jsx)("span",{children:e("Vendor")},"title")],(0,o.jsx)(h.A,{type:"vertical"})),dataIndex:"vendor",render:(t,n)=>{const{vendor:r,configuration:s}=n;return(0,o.jsxs)("span",{children:[r?(0,o.jsxs)(o.Fragment,{children:[r.name," ",(0,o.jsxs)("span",{style:{opacity:.5},children:["#",r.id]})," "]}):"boolean"!=typeof s&&(0,o.jsxs)(v.A,{title:e("This vendor is no longer available and/or has been removed from the list of available vendors by the GVL. For this vendor, you can no longer request a consent from your visitors."),children:[(0,o.jsxs)("span",{style:{opacity:.5},children:["#",s.vendorId]})," ",(0,o.jsx)(g.A,{color:"error",children:e("Abandoned")})]}),"vendors"===j&&!0===s&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(g.A,{children:e("Already created")}),!1!==n.blocker&&(0,o.jsx)(g.A,{children:e("Content Blocker")})]})]})}},"vendor"),(0,o.jsx)(N,{title:e("Used in ad networks"),dataIndex:"adNetworks",render:(e,t)=>{let{vendor:n}=t;if(!n)return null;const{id:r}=n,s=O.map((e=>{let{network:t,vendorIds:n}=e;return n.indexOf(r)>-1?t:void 0})).filter(Boolean);return s.map((e=>{let{name:t,logo:n}=e;return(0,o.jsxs)("span",{children:[(0,o.jsx)("img",{src:n,style:{height:"1em"}})," ",t]},t)}))}},"adNetworks"),(0,o.jsx)(N,{title:e("Privacy policy"),dataIndex:"privacyPolicy",render:(e,t)=>{let{vendor:n}=t;if(!(null==n?void 0:n.urls))return null;const{urls:[{privacy:r}]}=n;return r&&(0,o.jsx)("a",{href:r,target:"_blank",rel:"noreferrer",children:new URL(r).origin})}},"privacyPolicy"),(0,o.jsx)(N,{title:e("Actions"),dataIndex:"actions",render:(t,r)=>{const{configuration:s,vendor:i}=r;return(0,x.i)(["vendor-configurations"===j&&"boolean"!=typeof s&&r.languages&&(0,o.jsx)(w.r,{recordId:r.configuration.id,languages:r.languages,onClick:r.languageOnClick,wrapperProps:{wrapperClassName:"alignleft"}},"multilingual"),"vendors"===j&&!0!==s&&(0,o.jsx)("a",{onClick:()=>n.onCreate(i),children:e("Create")},"create"),"vendor-configurations"===j&&"boolean"!=typeof s&&i&&(0,o.jsx)("a",{onClick:()=>n.onCreateOrEditContentBlocker(s,i),children:s.blocker?e("Edit Content Blocker"):e("Create Content Blocker")},"contentBlocker"),"vendor-configurations"===j&&"boolean"!=typeof s&&i&&(0,o.jsx)("a",{onClick:()=>n.onEdit(s,i),children:e("Edit")},"edit"),"vendor-configurations"===j&&"boolean"!=typeof s&&(0,o.jsx)(u.A,{title:e("Are you sure you want to delete this vendor?"),placement:"bottomRight",onConfirm:()=>n.onDelete(s),okText:e("Delete"),cancelText:e("Cancel"),overlayStyle:{maxWidth:350},children:(0,o.jsx)("a",{children:e("Delete")})},"delete")],(0,o.jsx)(h.A,{type:"vertical"}))}},"actions")]})]}):y?(0,o.jsx)(m.A,{loading:!0,active:!0,paragraph:{rows:1}}):(0,o.jsx)(c.A,{description:e("You have not yet created a TCF vendor configuration."),children:(0,o.jsx)("a",{className:"button button-primary",onClick:n.onSwitchToVendorView,children:E})}))}},36305:(e,t,n)=>{n.d(t,{g:()=>i,l:()=>s});var o=n(52113);const r=Symbol(),s=()=>(0,o.NV)(r),i=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,o.gm)(r,...t)}},57759:(e,t,n)=>{n.r(t),n.d(t,{TcfLayout:()=>c});var o=n(3713),r=n(41594),s=n(57922),i=n(69665),a=n(71951),d=n(18197),l=n(89657);const c=(0,s.PA)((()=>{const{tcfStore:e}=(0,a.g)(),{purposes:t}=e;return(0,r.useEffect)((()=>{e.fetchDeclarations()}),[]),0===t.size?(0,o.jsx)(d.A,{style:{margin:"auto",marginTop:15}}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.Outlet,{}),(0,o.jsx)(l.b,{identifier:"tcf-vendor"})]})}))},55117:(e,t,n)=>{n.r(t),n.d(t,{TcfVendorConfigurationList:()=>x});var o=n(3713),r=n(41594),s=n(57922),i=n(36069),a=n(36920),d=n(53603),l=n(71951),c=n(70884),u=n(40164),h=n(36305),v=n(96596),g=n(44227),m=n(32150),f=n(19117),p=n(44497);const x=(0,s.PA)((()=>{const{message:e}=f.A.useApp(),[t,n]=(0,r.useState)(!1),{addLink:s,editLink:x}=(0,i.E)(),{addLink:y,editLink:C}=(0,a.t)(),{tcfStore:w,optionStore:b}=(0,l.g)(),{vendorConfigurations:j,vendorConfigurationCount:k}=w,{busy:A,entries:T}=j,S=(0,d.m)("tcf-vendor"),I=(0,c.useTcfVendorAdNetworks)();(0,r.useEffect)((()=>{k>0&&!t&&(w.fetchVendorConfigurations(),n(!0))}),[k,t]);const[F,N]=(0,h.g)({busy:A,vendorCount:k,adNetworks:I,rows:Array.from(T.values()).map((t=>{var n;const{key:o,restrictivePurposes:r,data:{status:s,meta:{vendorId:i},blocker:a,multilingual:d}}=t;return{busy:!1,configuration:{id:o,vendorId:i,blocker:a,restrictivePurposes:r,status:s},vendor:null==(n=t.vendorModel)?void 0:n.data,languages:d,languageOnClick:async(t,n)=>{let{code:o,id:r}=n;try{const e=!1===r?(await(0,m.C)("rcb-tcf-vendor-conf",t,o)).id:r,n=new URL(window.location.href);n.hash=`#/cookies/tcf-vendors/edit/${e}`,n.searchParams.set("lang",o),window.location.href=n.toString()}catch(t){var s;if(!(null==(s=t.responseJSON)?void 0:s.message))throw t;e.error(t.responseJSON.message)}}}})),view:"vendor-configurations",onSwitchToVendorView:()=>window.location.hash=s,onEdit:e=>window.location.hash=x(T.get(e.id)),onDelete:async t=>{try{await T.get(t.id).delete({force:!0})}catch(t){e.error(t.responseJSON.message)}},onCreateOrEditContentBlocker:(e,t)=>{let{id:n,blocker:o}=e,{name:r}=t;return window.location.hash=o?C(new g.g(void 0,{id:o})):`${y}?force=scratch&attributes=${JSON.stringify({name:r,tcfVendors:[n],criteria:"tcfVendors"})}`},onBulkDelete:async(t,n,o,r)=>{for(const{id:s}of t)T.get(s).delete({force:!0},{allowBatchRequest:{onQueueItemFinished:n,waitForPromise:r},settings:{signal:o}}).catch((t=>e.error(t.responseJSON.message)));await r,(0,p.runInAction)((()=>{for(const{id:e}of t)T.delete(e)})),b.fetchCurrentRevision()}},{},{inherit:["busy","vendorCount","rows"]});return(0,o.jsxs)(u.e,{children:[(0,o.jsx)(F,{value:N,children:(0,o.jsx)(v.m,{})}),(0,o.jsx)("p",{className:"description",style:{maxWidth:800,margin:"30px auto 0",textAlign:"center"},children:S})]})}))},70884:(e,t,n)=>{n.r(t),n.d(t,{TcfVendorSelector:()=>y,useTcfVendorAdNetworks:()=>x});var o=n(3713),r=n(41594),s=n(57922),i=n(40164),a=n(8140),d=n(50874),l=n(36305),c=n(96596),u=n(71951),h=n(19117),v=n(44497),g=n(36069),m=n(76576),f=n(69665),p=n(30617);function x(){return[{identifier:"google-adsense",name:"Google AdSense",description:(0,p.__)("Google Adsense displays advertisements from various advertising partners (ad servers) on your website by integrating just one AdSense scripts. A complex bidding system decides which advertising partner receives the advertising slot in the end."),provider:"Google",logo:"https://assets.devowl.io/in-app/wp-real-cookie-banner/logos/google-a-dsense.svg",hasRealTimeApi:!1,updatedAt:"2024-07-10T14:31:24.791Z",createContentBlockerForVendorId:755,onCreateOrEditContentBlocker:()=>{window.location.href=`#/blocker/new?force=google-adsense-tcf&navigateAfterCreation=${encodeURIComponent("#/cookies/tcf-vendors")}`},lists:[{name:(0,p.__)("Google Advertising Products only"),description:(0,p.__)("Only Google can display ads booked e.g. via Google Ads. This means that you obtain less consent from your website visitors, but will not generate the optimum revenue."),vendorIds:[755]},{name:(0,p.__)("Commonly used ad partners"),description:(0,p.__)("Consent is requested for all advertising partners who display a particularly large amount of advertising via Adsense (list provided by Google). This increases your revenue and at the same time you obtain consent from a manageable number of TCF vendors."),vendorIds:"1,4,9,10,11,12,13,15,16,22,23,24,25,27,28,34,37,39,42,44,50,59,60,68,69,71,72,73,76,77,81,82,84,85,91,93,95,97,98,109,110,115,122,126,129,130,132,136,139,140,147,156,161,163,168,192,195,213,226,228,241,243,246,253,264,273,275,278,281,284,293,294,304,308,312,315,317,328,345,373,381,384,388,394,397,402,409,415,416,447,452,468,506,512,544,559,587,606,631,657,667,734,755,758,759,762,767,772,793,806,827,832,853,929,1050,1296,1301,1334".split(",").map(Number),isRecommended:!0},{name:(0,p.__)("All ad partners using Google Adsense"),description:(0,p.__)("Consent is obtained for all advertising partners who display advertising via Adsense. This leads to maximum revenue, but data protectionists could question the effectiveness of the consent due to the excessive number of vendors."),vendorIds:"1,2,4,8,9,10,11,12,13,14,15,16,20,22,23,24,25,26,27,28,29,30,31,33,34,37,39,42,44,44,46,47,48,50,53,55,56,58,59,60,61,62,66,68,69,71,72,73,75,76,77,80,81,82,83,84,85,90,91,92,93,94,95,97,97,98,100,101,104,108,109,110,111,115,115,120,122,122,126,127,129,130,130,131,132,133,134,136,138,139,140,141,142,143,147,147,148,150,151,153,154,155,156,157,159,160,161,163,168,173,174,178,184,185,192,193,194,195,196,199,203,203,205,206,211,213,215,216,217,224,226,227,228,231,232,235,237,238,239,241,242,243,244,246,248,249,251,252,253,254,255,259,263,264,270,273,274,275,276,278,279,280,281,282,284,285,293,293,294,297,298,301,304,308,311,312,314,315,316,317,318,319,321,323,325,326,328,329,331,333,336,337,343,345,347,350,350,354,358,361,368,371,373,374,377,378,380,381,382,384,387,388,394,397,402,409,410,412,413,415,416,418,422,424,427,430,434,434,435,436,438,440,444,447,448,450,452,454,459,468,469,471,473,475,479,486,488,490,491,493,495,496,497,498,501,502,506,507,508,509,511,512,516,517,519,524,527,528,531,534,535,536,539,541,544,546,549,550,551,553,554,556,559,561,568,569,570,571,572,573,580,581,584,587,591,591,596,597,598,601,606,606,610,612,615,617,618,620,621,624,625,626,628,631,639,644,646,647,648,649,652,653,655,656,657,658,662,663,665,666,667,671,673,674,676,677,681,682,683,684,685,687,690,697,699,702,706,707,708,709,712,713,714,715,716,717,718,719,721,723,724,725,726,727,728,729,730,731,732,733,734,736,736,737,738,740,742,742,744,745,746,748,749,750,751,754,755,756,758,759,762,765,766,767,768,769,770,771,772,773,774,775,776,778,779,780,781,783,784,786,788,790,793,794,795,796,797,798,799,800,801,803,804,806,806,808,810,811,812,814,815,816,819,819,820,821,822,825,827,828,831,832,833,834,835,835,838,839,840,842,844,845,848,849,850,851,853,854,855,856,857,858,860,861,862,864,865,867,869,870,870,871,872,874,875,876,877,878,880,881,881,882,883,884,885,888,889,891,891,892,893,894,896,898,900,902,903,907,910,911,911,915,919,920,922,925,927,929,930,930,931,934,935,936,937,938,941,943,944,946,950,950,951,952,953,954,955,956,957,958,959,961,962,963,964,965,966,967,968,969,970,972,973,975,976,978,982,987,990,991,993,994,995,996,997,998,999,1001,1002,1003,1004,1005,1006,1009,1013,1014,1015,1016,1017,1019,1020,1021,1022,1024,1025,1026,1027,1028,1029,1029,1030,1031,1036,1037,1038,1039,1040,1041,1043,1044,1045,1047,1048,1049,1050,1051,1055,1057,1058,1059,1060,1060,1061,1062,1063,1064,1064,1067,1068,1069,1070,1071,1072,1073,1075,1076,1078,1079,1080,1081,1082,1083,1084,1085,1087,1090,1094,1097,1098,1100,1101,1103,1104,1106,1107,1108,1110,1111,1112,1113,1116,1116,1119,1120,1121,1122,1124,1126,1127,1129,1130,1132,1133,1134,1136,1137,1138,1139,1140,1141,1142,1144,1146,1147,1149,1151,1153,1154,1155,1155,1156,1157,1159,1160,1162,1162,1163,1164,1165,1167,1168,1169,1170,1171,1172,1173,1174,1174,1175,1176,1177,1178,1180,1181,1182,1183,1184,1185,1187,1188,1189,1190,1193,1195,1195,1196,1198,1199,1200,1201,1201,1202,1203,1204,1205,1206,1207,1208,1209,1210,1211,1212,1213,1214,1215,1216,1217,1218,1219,1220,1221,1222,1222,1224,1225,1226,1226,1227,1228,1229,1230,1231,1232,1234,1234,1235,1236,1238,1240,1241,1242,1243,1244,1245,1246,1247,1248,1249,1250,1251,1252,1253,1254,1255,1255,1256,1257,1258,1259,1260,1261,1262,1263,1263,1264,1265,1266,1267,1268,1268,1269,1270,1271,1272,1273,1274,1275,1276,1277,1278,1278,1279,1280,1280,1281,1282,1282,1283,1284,1285,1286,1287,1288,1289,1290,1291,1292,1293,1294,1295,1296,1296,1297,1297,1298,1299,1300,1301,1301,1302,1303,1304,1305,1306,1307,1308,1310,1310,1311,1311,1312,1313,1314,1315,1316,1317,1318,1319,1320,1321,1322,1323,1325,1326,1327,1328,1329,1330,1330,1331,1332,1333,1334,1334,1335,1336,1337,1338,1339,1340,1341,1342,1343,1344,1345,1346,1347".split(",").map(Number)}]}]}const y=(0,s.PA)((()=>{const{message:e}=h.A.useApp(),{tcfStore:t,optionStore:n}=(0,u.g)(),{busyVendors:s,fetchedAllVendorConfigurations:p,vendorConfigurations:y,vendors:C}=t,[w,b]=(0,r.useState)(),{link:j}=(0,g.E)(),{adNetwork:k}=(0,m.f)(),A=x(),T=(0,f.useNavigate)();(0,r.useEffect)((()=>{t.fetchedAllVendorConfigurations||t.fetchVendorConfigurations(),t.fetchVendors()}),[]);const[S,I]=(0,l.g)({busy:s||0===C.size||!p,vendorCount:C.size,rows:Array.from(C.values()).map((e=>{const{vendorConfiguration:t}=e;return{busy:!1,configuration:!!t,vendor:e.data,blocker:!!t&&t.data.blocker}})),view:"vendors",defaultCreateAdNetworkIdentifier:k,adNetworks:A,onCreate:e=>{let{id:t}=e;return b(C.get(t.toString()))},onBulkCreate:async(t,o,r,s)=>{const i=[],d=[];for(const{id:n}of t){const t=new a.p(y,{status:"publish",meta:{dataProcessingInCountries:"[]",dataProcessingInCountriesSpecialTreatments:"[]",restrictivePurposes:"[]",vendorId:n}});i.push(t),d.push(t.persist(void 0,{allowBatchRequest:{onQueueItemFinished:o,waitForPromise:s},settings:{signal:r}}).catch((t=>e.error(t.responseJSON.message))))}await Promise.allSettled(d),(0,v.runInAction)((()=>{for(const e of i)e.key&&e.collection.entries.set(e.key,e)})),await n.fetchCurrentRevision(),setTimeout((()=>T(j.slice(1))),0)}},{},{inherit:["busy","vendorCount","rows"]});return void 0===w?(0,o.jsx)(i.e,{children:(0,o.jsx)(S,{value:I,children:(0,o.jsx)(c.m,{})})}):(0,o.jsx)(i.e,{maxWidth:"fixed",children:(0,o.jsx)(d.TcfVendorConfigurationForm,{vendor:w})})}))},96077:(e,t,n)=>{n.d(t,{A:()=>d});var o=n(2464),r=n(41594);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z"}}]},name:"reload",theme:"outlined"};var i=n(4679),a=function(e,t){return r.createElement(i.A,(0,o.A)({},e,{ref:t,icon:s}))};const d=r.forwardRef(a)}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/5.0.1/656e1b1625cfc4462bc8883657bbf539/chunk-config-tab-tcf.lite.js.map
