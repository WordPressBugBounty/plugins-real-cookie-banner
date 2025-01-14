"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[406],{36:(e,o,t)=>{t.r(o),t.d(o,{WebsiteBlocker:()=>U});var r=t(6425),n=t(7936),i=t(9521),l=t(3114),a=t(7513),s=t(6546);const c=[Symbol("extendBlockerContentStylesheet"),(e,o)=>{let{jsx:t,boolIf:r,boolSwitch:n}=e,{boolLargeOrMobile:i,blockerOverwrites:{borderColor:l,borderWidth:a},isDialog:s,design:{bg:c,textAlign:d},layout:{dialogBorderRadius:p},footerDesign:u,headerDesign:h}=o;const b=i(h.borderWidth,r),[g]=t("div",{classNames:"header-container",position:"relative",background:r(h.inheritBg,c(),h.bg()),borderRadius:r(s,`${p()} ${p()} 0 0`),padding:i(h.padding,r),paddingBottom:`calc(${b} + ${i(h.padding,r,2)})`,borderWidth:a(),borderStyle:"solid",borderColor:l(),borderBottom:"unset",pseudos:{":after":{content:"''",display:"block",position:"absolute",left:"0px",right:"0px",bottom:"0px",background:h.borderColor(),height:b},">div":{margin:"auto",display:"flex",alignItems:"center",position:"relative",textAlign:r(h.inheritTextAlign,d("val"),h.textAlign("val")),justifyContent:r(h.inheritTextAlign,n([[d("is-center"),"center"],[d("is-right"),"flex-end"]]),n([[h.textAlign("is-center"),"center"],[h.textAlign("is-right"),"flex-end"]]))}}}),v=i(u.borderWidth,r),[f]=t("div",{classNames:"footer-container",fontWeight:u.fontWeight(),color:u.fontColor(),position:"relative",padding:i(u.padding,r),paddingTop:`calc(${v} + ${i(u.padding,r,0)})`,background:r(u.inheritBg,c(),u.bg()),fontSize:i(u.fontSize,r),textAlign:r(u.inheritTextAlign,d("val"),u.textAlign()),borderRadius:r(s,`0 0 ${p()} ${p()}`),borderWidth:a(),borderStyle:"solid",borderColor:l(),borderTop:"unset",pseudos:{":after":{content:"''",display:"block",position:"absolute",left:"0px",right:"0px",top:"0px",background:u.borderColor(),height:v},">div":{margin:"auto",lineHeight:"1.8"}}});return{HeaderContainer:g,FooterContainer:f}}];var d=t(5914);const p=[Symbol("extendBlockerStylesheet"),(e,o)=>{let{jsx:t,boolIf:r,computed:n}=e,{layout:{dialogBorderRadius:i,type:l},design:{textAlign:a,fontFamily:s,fontInheritFamily:c,fontColor:p,borderWidth:u,borderColor:h},headerDesign:{borderWidth:b,borderColor:g},footerDesign:{borderWidth:v,borderColor:f},blocker:x,isMobile:m}=o;const{isDialog:k,isBanner:y}=n([l],(e=>{let[o]=e;return{type:o,isDialog:"dialog"===o,isBanner:"banner"===o}})),C=x.visualType("is-wrapped"),w=n([u,h,b,g,v,f,p],(e=>{let[o,t,r,n,i,l,a]=e;return{borderWidth:(0,d.dD)(o||1),borderColor:0===o?r>0?n:i>0?l:a:t}})),[B]=t("div",{classNames:"inner",textAlign:a("val"),fontFamily:r(c,"inherit",s()),color:p("hex"),borderRadius:r(k,i()),border:`${w.borderWidth()} solid ${w.borderColor()}`,position:"relative",padding:r({when:C,then:{when:m,then:"20px 30px",or:"30px 50px"}}),overflow:r(C,"hidden")}),[S]=t("div",{classNames:"content",boxShadow:r(C,"#0000004d 0px 0px 100px 30px, 0px 2px 5px 2px #0000001c"),borderRadius:r({when:C,then:{when:k,then:i()}}),position:"relative"}),[I]=t("img",{classNames:"inner-bg",objectFit:"cover",position:"absolute",top:0,left:0,width:"100%",height:"100%",filter:`blur(${x.visualBlur()})`},{loading:"lazy"});return{isDialog:k,isBanner:y,Inner:B,Content:S,InnerBackground:I,blockerOverwrites:w}}];var u=t(1208),h=t(8700);function b(e){const{blocker:o}=(0,u.K)(),t=e||(0,h.o)();return t.extend(...((e,o)=>{let{presetId:t,isVisualDarkMode:r,visualBlur:n,visualContentType:i,visualType:l,visualThumbnail:a}=o;return[e,e=>{let{className:o,vars:s,variable:c,meta:{id:p}}=e;const u={firstButton:o()},[h]=s({isVisualDarkMode:r,visualBlur:n,visualContentType:i,visualType:l,presetId:t},{visualType:(0,d.$S)(l,["wrapped"]),visualContentType:(0,d.$S)(i,["audio-player","video-player"]),visualBlur:d.dD,presetId:(0,d.$S)(t,["youtube","vimeo"])}),b=a||{},{forceRatio:g,hide:v,titleType:f,width:x,height:m}=b,[k]=s({hide:v||[],forceRatio:g||0,titleType:f||"top",width:x,height:m},{titleType:(0,d.$S)(null==a?void 0:a.titleType,["center","top"]),hide:(0,d.g9)(null==a?void 0:a.hide,["overlay","title"])});return{a11yIds:u,blocker:h,visualThumbnail:{...k,forceRatioIsset:c(g,d.tZ)},individualBlockerClassName:p}}]})(t.reactRootSymbol,o),!0).extend(...p)}const g=[Symbol("extendBlockerBodyStylesheet"),(e,o)=>{let{jsx:t,rule:r,boolIf:n,className:i}=e,{isDialog:l,isMobile:a,blockerOverwrites:{borderWidth:s,borderColor:c},design:{bg:d,fontSize:p},layout:{dialogBorderRadius:u},bodyDesign:{padding:h,descriptionFontSize:b,descriptionInheritFontSize:g},boolLargeOrMobile:v}=o;const f=i(),[x]=t("div",{classNames:"body-container",background:d(),padding:v(h,n),lineHeight:"1.4",borderStyle:"solid",borderColor:c(),borderWidth:s(),borderTopWidth:"0px",borderRadius:n(l,`0 0 ${u()} ${u()}`),pseudos:{">div":{margin:"auto"},[`<.${f} `]:{borderBottom:"0px",borderRadius:"0px"},">div>div,>div>a:last-of-type":{marginBottom:n(a,"10px","15px")}}}),[m]=t("div",r({classNames:"cookie-scroll",fontSize:n(g,v(p,n),v(b,n)),textAlign:"left",marginBottom:"10px",maxHeight:"400px",overflowY:"scroll",paddingRight:"10px"}));return{Container:x,showFooter:f,CookieScroll:m}}];var v=t(7140);function f(){const{blocker:{services:e},consent:o,groups:t}=(0,u.K)();return(0,n.Kr)((()=>{const r=[],n=[];for(const e of Object.values(o))n.push(...e);for(const{items:o}of t)for(const t of o)e.indexOf(t.id)>-1&&-1===n.indexOf(t.id)&&r.push(t);return r}),[t,e,o])}var x=t(1477),m=t(5750),k=t(6812),y=t(998);const C=(0,y.g)(Promise.all([t.e(261),t.e(452),t.e(671),t.e(4)]).then(t.bind(t,9694)).then((e=>{let{Cookie:o}=e;return o})));var w=t(3963),B=t(7114);const S=10,I=(0,y.g)(Promise.resolve((e=>{let{closeIcon:o}=e;const{hasCloseIcon:t,HeaderTitle:n,HeaderContainer:i}=b().extend(...s.h).extend(...c),l=(0,u.K)(),{blocker:{name:a},texts:{blockerHeadline:d},keepVariablesInTexts:p}=l;return(0,r.Y)(i,{children:(0,r.FD)("div",{children:[(0,r.Y)(n,{className:o?t:void 0,children:p?d:d.replace(/{{name}}/gi,a)}),o]})})}))),T=(0,y.g)(Promise.resolve((()=>{const{Container:e,CookieScroll:o,a11yIds:{firstButton:t}}=b().extend(...g),i=(0,u.K)(),l=(0,v.p)(),[a,s]=(0,n.J0)(!1),{texts:{blockerLoadButton:c,blockerLinkShowMissing:d,blockerAcceptInfo:p},onUnblock:h,productionNotice:y,isConsentRecord:w,i18n:{close:B}}=i,S=f(),{description:I,teachings:T}=(0,x.bM)({services:S,disableListServicesNotice:!0,disableTcfPurposes:!0});return(0,r.Y)(e,{children:(0,r.FD)("div",{children:[(0,r.Y)(m.X,{description:I,teachings:[...T,p],nl2br:!0}),(0,r.Y)(k.$,{id:t,type:"acceptIndividual",onClick:()=>s(!a),forceShow:!0,busyOnClick:!1,"aria-expanded":a,"aria-controls":l,children:a?B:d}),(0,r.Y)(o,{children:a&&S.map((e=>(0,r.Y)(C,{cookie:e,checked:!0,disabled:!0},e.id)))}),(0,r.Y)(k.$,{type:"acceptAll",onClick:e=>h(e),forceShow:!0,sticky:!0,busyOnClick:!w,children:c}),y]})})}))),N=(0,y.g)(Promise.resolve((()=>{const{FooterContainer:e}=b().extend(...c),{rows:o,render:t}=(0,w.D)({putPoweredByLinkInRow:1});return(0,r.Y)(e,{children:(0,r.Y)("div",{children:t(o)})})}))),Y=e=>{let{closeIcon:o,...t}=e;const i=(0,u.K)(),{designVersion:l=S,blocker:{visualType:a,visualThumbnail:s,name:c},texts:{blockerHeadline:d},i18n:{skipToConsentChoices:p}}=i,{Inner:h,Content:g,InnerBackground:v,A11ySkipToLink:f,a11yIds:{firstButton:x}}=b().extend(...B.R),m=(0,n.li)();return(0,r.FD)(h,{ref:m,className:"wp-exclude-emoji",...t,children:[(0,r.Y)(f,{href:`#${x}`,"aria-label":`${d.replace(/{{name}}/gi,c)}, ${p}`,children:p}),"wrapped"===a&&(0,r.Y)(v,{src:s.url,alt:s.title,"aria-hidden":!0}),(0,r.FD)(g,{children:[(0,r.Y)(I,{closeIcon:o}),(0,r.Y)(T,{}),1===l&&(0,r.Y)(N,{})]})]})},D=999999999,$=[Symbol("extendBlockerHeroStylesheet"),(e,o)=>{let{jsx:t,jsxControl:r,control:n,boolIf:i,boolNot:l,boolSwitch:a,boolOr:s,rule:c,varName:p,nestedQuery:u,className:h}=e,{unsetDialogStyles:b,isMobile:g,visualThumbnail:{width:v,height:f,forceRatioIsset:x,forceRatio:m,hide:k,titleType:y},blocker:{visualContentType:C,visualBlur:w,isVisualDarkMode:B,presetId:S},bodyDesign:{acceptAllBg:I}}=o;const T=C("is-audio-player"),N=[C("is-video-player"),S("is-vimeo"),y("is-top")],[Y]=t("div",{classNames:"hero-wrapper",aspectRatio:i({when:l(T),then:{when:x("is-set"),then:`1 / calc(${m()} / 100)`,or:`${v()} / ${f()}`}}),position:"relative",height:i(T,"100px"),background:i(B,"linear-gradient(315deg, #2f3237 1%, #5e5e5e 100%)","linear-gradient(hsla(0, 0%, 89%, 1) 1%, hsla(0, 0%, 97%, 1) 100%)")}),[$]=t("div",{classNames:"hero-bg-wrapper",width:i(T,"100px","100%"),overflow:i(T,"hidden"),position:"absolute",inset:"0px"}),[R]=t("img",{classNames:"hero-bg",objectFit:"cover",position:"absolute",inset:"0px",width:"100%",height:"100%",filter:`blur(${w()})`},{loading:"lazy"}),[O]=t("div",{display:i(k("has-title"),"none"),classNames:"hero-title",padding:"5px 10px",maxWidth:"calc(100% - 140px)",fontSize:"15px",overflow:"hidden",textDecoration:"none",textOverflow:"ellipsis",whiteSpace:"nowrap",position:i(y("is-top"),"absolute"),textAlign:i(y("is-center"),"center"),color:a([[T,i(B,"white","black")],[N,"rgb(0, 173, 239)"]],"white"),textShadow:a([[T,i(B,"1px 1px 1px black","1px 1px 1px white")],[N,"none"]],"1px 1px 1px black"),fontWeight:i(N,"bold"),top:i(N,"20px","10px"),background:a([[T,"none"],[y("is-center"),"#0000007d"],[N,"#00000059"]],"none"),left:a([[T,"110px"],[N,"20px"]],"10px"),marginBottom:i(y("is-center"),"15px")}),[A]=t("div",{classNames:"hero-container",cursor:"pointer",position:"absolute",top:"0px",left:"0px",width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:i(s([k("has-overlay"),T]),"none","rgb(0 0 0 / 38%)"),boxShadow:i(s([k("has-title"),y("is-center"),T]),"none","inset 0 115px 60px -60px rgb(0 0 0 / 77%)")}),[,W]=c({classNames:"hero-button",flex:"none !important",boxShadow:"rgb(0 0 0 / 15%) 0px 0px 100px 30px, rgb(0 0 0 / 40%) 0px 2px 5px 1px",zIndex:9}),F=p(),[H]=t("div",{classNames:"hero-play-wrapper",cursor:"pointer",zIndex:9,borderRadius:i(T,"99px","5px"),position:i(T,"absolute"),left:i(T,"120px"),top:i(T,"49px"),padding:i(T,"10px 10px 10px 13px","15px 30px"),background:a([[T,i(B,"#111213",I())],[N,"rgb(0 0 0 / 70%)"]],I()),[F]:i(T,"0.2","0.3"),pseudos:{":hover":{background:"rgb(26 183 234 / 100%)"},":after":{content:'""',display:"block",background:"transparent",boxSizing:"border-box",width:"0px",height:`calc(60px * var(${F}))`,borderColor:"transparent transparent transparent white",transition:"100ms all ease",cursor:"pointer",borderStyle:"solid",borderWidth:`calc(40px * var(${F})) 0 calc(40px * var(${F})) calc(60px * var(${F}))`}}}),L=p().substr(2);u(`@keyframes ${L}`,{from:{opacity:0},to:{opacity:1}});const[j]=t("div",{classNames:"hero-db-overlay",position:"fixed",inset:"0px",minHeight:"100vh",zIndex:D,background:"#000000cf",animation:`${L} 0.3s`}),z=h(),P=r("dialog",n({rectTop:0,rectLeft:0,rectWidth:0},{rectTop:d.dD,rectLeft:d.dD,rectWidth:d.dD},(e=>{let{rectLeft:o,rectTop:t,rectWidth:r}=e;const[,n]=c({classNames:["hero-db-container",b],position:"absolute",left:o(),top:t(),padding:i(g,"20px 5px","20px 30px"),boxSizing:"border-box",zIndex:D,animation:`${L} 0.3s`,display:"flex",width:r(),pseudos:{[`.${z}`]:{width:"450px",left:"50%",maxWidth:"calc(100vw - 40px)",transform:"translateX(-50%)"}}});return n})),{tabIndex:0,modifyProps:(e,o)=>{let{rectWidth:t}=o;e.className+=t<=450?` ${z}`:""}});return{HeroWrapper:Y,HeroBackgroundWrapper:$,HeroBackground:R,HeroTitle:O,HeroContainer:A,heroButton:W,HeroPlayButton:H,HeroOverlay:j,HeroOverlayBlocker:P}}],R=e=>{let{text:o}=e;const{blocker:{isVisualDarkMode:t},bodyDesign:{acceptAllBg:i}}=(0,u.K)(),l=(0,n.Kr)((()=>{let e=[];o.split("").forEach((o=>o.charCodeAt(0).toString().split("").map(Number).forEach((o=>e.push(o))))),e=e.map((e=>0===e?1:e)),e=e.map(((o,t)=>t>0?e[t-1]!==o&&o:o)).filter(Boolean),e=e.map(((o,t)=>(0===t||t===e.length-1||!(Math.abs(e[t-1]-o)>=4&&Math.abs(e[t+1]-o)))&&o)).filter(Boolean);for(let o=0;o<100&&!(e.length>500);o++)e=[...e,...e];return e}),[o]);return(0,r.Y)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",position:"absolute",left:170,top:44,right:20,height:46,overflow:"hidden"},children:l.map(((e,o)=>(0,r.Y)("div",{style:{height:10*e+"%",background:t?"white":i,paddingLeft:2,marginLeft:0===o?0:2}},o)))})},O=e=>{let{svgProps:o={},fill:t}=e;return(0,r.FD)("svg",{"aria-hidden":!0,width:68,height:48,version:"1.1",enableBackground:"new 0 0 595.3 420.2",viewBox:"0 0 595.3 420.2",...o,style:{cursor:"pointer",zIndex:9},children:[(0,r.Y)("path",{d:"m582.3 67.8c-6.8-25.6-17.8-47.4-43.4-54.2-46.5-12.5-241.3-13.6-241.3-13.6s-194.7 1.1-241.2 13.6c-25.6 6.8-36.5 28.5-43.4 54.2-12.5 46.4-13 142.3-13 142.3s.5 95.9 13 142.3c6.8 25.6 17.8 47.4 43.4 54.2 46.5 12.4 241.2 13.6 241.2 13.6s194.8-1.1 241.2-13.6c25.6-6.8 36.6-28.5 43.4-54.2 12.4-46.5 13-142.3 13-142.3s-.4-95.9-12.9-142.3z",fill:t}),(0,r.Y)("path",{d:"m401.8 210.1-173.3-96.3v192.6",fill:"#fff"})]})};var A=t(8552),W=t(3558),F=t(6545),H=t(9522);const L=e=>{let{blockerClassName:o,blockerOverlayId:t,heroContainerRef:i}=e;const l=b(),{HeroOverlay:a,HeroOverlayBlocker:s,A11ySkipToLink:c,screenReaderOnlyClass:d}=l.extend(...$).extend(...B.R),p=(0,u.K)(),{headerDesign:{fontSize:h,fontColor:g},i18n:{close:v},blockedNode:f}=p,x=(0,n.li)(),[m,k]=(0,n.J0)(!!(null==f?void 0:f.hasAttribute(H.q8))),y=(0,A.y)(i,{observe:m}),C=(0,n.li)(),w=(0,n.hb)((e=>{var o;m&&[C.current,null==(o=C.current)?void 0:o.nextElementSibling].indexOf(e.target)>-1&&k(!1)}),[m,C.current]),S=e=>{var o;e.preventDefault(),k(!1),null==(o=x.current)||o.focus()};return(0,n.vJ)((()=>{if(i.current){const e=e=>{x.current=document.activeElement;const o=e.target.classList.contains(d);return i.current&&(i.current.consentDelegateClick={element:x.current}),k(!0),setTimeout((()=>{var e;o&&(null==(e=C.current)?void 0:e.nextElementSibling.querySelector('a[href^="#a"]')).focus()}),50),e.preventDefault(),e.stopImmediatePropagation(),!1};return i.current.addEventListener("click",e,!0),()=>{var o;return null==(o=i.current)?void 0:o.removeEventListener("click",e,!0)}}return()=>{}}),[i.current]),m&&y?(0,r.Y)(W.Z,{renderInContainer:document.body,children:(0,r.FD)(n.FK,{children:[(0,r.Y)(a,{ref:C,onClick:w}),(0,r.FD)(s,{id:t,rectLeft:y.left+window.scrollX,rectTop:y.top+window.scrollY,rectWidth:y.width,className:o,onClick:w,"interaction-player-uqid":m?"blocker":void 0,children:[(0,r.Y)(c,{href:"#",onFocus:S,children:" "}),(0,r.Y)(n.tY,{fallback:null,children:(0,r.Y)(Y,{closeIcon:(0,r.Y)(F.U,{tooltipText:v,width:h,color:g,thickness:2,onClick:()=>k(!1)})})}),(0,r.Y)(c,{href:"#",onFocus:S,children:" "})]})]})}):null};var j=t(8639);const z=(0,y.g)(Promise.resolve(Y));(0,y.g)(Promise.resolve((e=>{let{blockerClassName:o,blockerOverlayId:t,...i}=e;const l=b(),{HeroWrapper:a,HeroBackgroundWrapper:s,HeroBackground:c,HeroTitle:d,HeroContainer:p,heroButton:h,HeroPlayButton:g,screenReaderOnlyClass:v}=l.extend(...$).extend(...B.R),f=(0,u.K)(),{texts:{blockerHeadline:x},blocker:{presetId:m,name:y,visualHeroButtonText:C,visualContentType:w,visualThumbnail:S}}=f,I=(0,n.li)(),T=(0,n.li)(),[N,Y]=(0,n.J0)(!1),{url:D}=S,A=S.title||y,W=x.replace(/{{name}}/gi,y),F=`${S.title||W}ThiS iS jUst ANother TEXT TO reACh minIMum length`,H=["video-player","audio-player"].indexOf(w)>-1;return(0,r.FD)(n.FK,{children:[(0,r.FD)(a,{ref:I,...i,children:[(0,r.Y)(s,{"aria-hidden":!0,children:(0,r.Y)(c,{src:D,alt:A})}),(0,r.FD)(p,{role:"presentation",onMouseEnter:()=>Y(!0),onMouseLeave:()=>Y(!1),ref:T,children:[(0,r.Y)(d,{"aria-hidden":!0,children:A}),(0,r.Y)("a",{href:"#",className:v,"aria-label":`${W}, ${A}`,children:A}),"audio-player"===w&&(0,r.Y)(R,{text:F}),C&&-1===["audio-player","video-player"].indexOf(w)?(0,r.FD)(k.$,{type:"acceptAll",forceShow:!0,busyOnClick:!1,className:h,children:["  ",C,"  "]}):H&&("youtube"===m&&"video-player"===w?(0,r.Y)(O,{fill:N?"#ff0808":"rgb(0 0 0 / 70%)"}):(0,r.Y)(g,{}))]})]}),(0,r.Y)(L,{blockerClassName:o,blockerOverlayId:t,heroContainerRef:T})]})})));var P=t(2655),M=t(9408),E=t(7177),K=t(5780),V=t(2767);const J=(0,y.g)(Promise.resolve((e=>{let{skipInitialConsent:o}=e;const t=(0,j.N)(),{description:i}=t.reactRootSymbol,{recorder:l,isGcm:a,blocker:{visualType:s,visualThumbnail:c},blockedNode:d,createBefore:p,updateGcmConsentTypeChecked:x}=(0,u.K)(),[m,k]=(0,h.d)(t),y=(e=>{const{individualBlockerClassName:o,showFooter:t}=b(e).extend(...g),{designVersion:r=S}=(0,u.K)();return[1===r?t:void 0,e.className,o].filter(Boolean).join(" ")})(t),C=(0,v.p)(t);f(),(0,n.vJ)((()=>{}),[a,o]),(0,n.vJ)((()=>l?(l.restart(),()=>{l.toggle(!1)}):()=>{}),[]);const w={id:C},B={blockerClassName:y,blockerOverlayId:`${i}-o`};return(0,r.Y)(m,{value:k,children:(null==d?void 0:d.hasAttribute(H.Wu))?(0,r.Y)(L,{...B,heroContainerRef:{current:p||d}}):(0,r.Y)("div",{className:y,id:i,children:(0,r.Y)(z,{...w})})})}))),U=e=>{let{container:o,blockedNode:t,createBefore:s,poweredLink:c,blocker:d,paintMode:p,setVisualAsLastClickedVisual:h}=e;const{frontend:b,customizeValuesBanner:g,iso3166OneAlpha2:v,bannerDesignVersion:f,bannerI18n:x,isPro:m,isLicensed:k,isDevLicense:y,affiliate:C,isCurrentlyInTranslationEditorPreview:w}=(0,i.j)(),B=(0,l.C)(),S=B.getUserDecision(!0),I=(0,n.Kr)((()=>new K.v(o)),[]),T=(0,P.u)(),{onUnblock:N}=(Y=B.getOptions(),{onUnblock:(e,o)=>{let{onPersistConsent:t,onApplyConsent:r,groups:n,blocker:i,recorder:l,isGcm:a,gcmConsent:s}=e;const{decisionCookieName:c,tcfCookieName:d,gcmCookieName:p}=Y,{services:u,visualThumbnail:h,id:b}=i,g=(0,M.y)(c),v=n.find((e=>{let{isEssential:o}=e;return o})),f=!1===g?{[v.id]:v.items.map((e=>{let{id:o}=e;return o}))}:g.consent;for(const{id:e,items:o}of n)for(const{id:t}of o)if(u.indexOf(t)>-1){var x;if((null==(x=f[e])?void 0:x.indexOf(t))>-1)continue;f[e]=f[e]||[],f[e].push(t)}t({consent:f,gcmConsent:void 0,buttonClicked:"unblock",blocker:b,blockerThumbnail:(null==h?void 0:h.embedId)?`${h.embedId}-${h.fileMd5}`:void 0,tcfString:()=>E.A.get(d),recorderJsonString:l?JSON.stringify(l.createReplay()):void 0,uiView:"initial",event:o}).then((()=>r()))}});var Y;const[D,$]=(0,u.t)({recorder:I,container:o,blockedNode:t,createBefore:s,...g,...b,productionNotice:(0,r.Y)(V.A,{isPro:m,isLicensed:k,isDevLicense:y,i18n:x}),paintMode:p,poweredLink:c,iso3166OneAlpha2:v,gcmConsent:[],blocker:d,designVersion:f,i18n:x,keepVariablesInTexts:w,affiliate:C,consent:{...!1===S?{}:S.consent},onPersistConsent:a.x,onApplyConsent:()=>(0,l.C)().applyCookies({type:"consent"})},{...T,onUnblock:(e,o)=>{N(e,o),h(o)}});return(0,r.Y)(D,{value:$,children:(0,r.Y)(n.tY,{fallback:null,children:(0,r.Y)(J,{})})})}},8489:(e,o,t)=>{t.d(o,{A:()=>r});const r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"minus",theme:"outlined"}},1503:(e,o,t)=>{t.d(o,{Q:()=>i});var r=function(){return r=Object.assign||function(e){for(var o,t=1,r=arguments.length;t<r;t++)for(var n in o=arguments[t])Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);return e},r.apply(this,arguments)},n={primaryColor:"#333",secondaryColor:"#E6E6E6"};function i(e,o){if(void 0===o&&(o={}),"function"==typeof e.icon){var t=o.placeholders||n;return l(e.icon(t.primaryColor,t.secondaryColor),o)}return l(e.icon,o)}function l(e,o){var t="svg"===e.tag?r(r({},e.attrs),o.extraSVGAttrs||{}):e.attrs,n=Object.keys(t).reduce((function(e,o){var r=o,n=t[r],i="".concat(r,'="').concat(n,'"');return e.push(i),e}),[]),i=n.length?" "+n.join(" "):"",a=(e.children||[]).map((function(e){return l(e,o)})).join("");return a&&a.length?"<".concat(e.tag).concat(i,">").concat(a,"</").concat(e.tag,">"):"<".concat(e.tag).concat(i," />")}},8552:(e,o,t)=>{t.d(o,{y:()=>u});var r,n=t(7936),i=["bottom","height","left","right","top","width"],l=new Map,a=function e(){var o=[];l.forEach((function(e,t){var r,n,l=t.getBoundingClientRect();r=l,n=e.rect,void 0===r&&(r={}),void 0===n&&(n={}),i.some((function(e){return r[e]!==n[e]}))&&(e.rect=l,o.push(e))})),o.forEach((function(e){e.callbacks.forEach((function(o){return o(e.rect)}))})),r=window.requestAnimationFrame(e)};const s=function(e,o){return{observe:function(){var t=0===l.size;l.has(e)?l.get(e).callbacks.push(o):l.set(e,{rect:void 0,hasRectChanged:!1,callbacks:[o]}),t&&a()},unobserve:function(){var t=l.get(e);if(t){var n=t.callbacks.indexOf(o);n>=0&&t.callbacks.splice(n,1),t.callbacks.length||l.delete(e),l.size||cancelAnimationFrame(r)}}}};function c(e){return"boolean"==typeof e}function d(e){return!(!e||"[object Function]"!={}.toString.call(e))}var p="undefined"!=typeof window&&window.document&&window.document.createElement?n.Nf:n.vJ;function u(e,o,t){let r,i;c(o)?r=o:(r=o?.observe??!0,i=o?.onChange),d(t)&&(i=t),n.vJ((()=>{c(o)&&console.warn("Passing `observe` as the second argument to `useRect` is deprecated and will be removed in a future version of Reach UI. Instead, you can pass an object of options with an `observe` property as the second argument (`useRect(ref, { observe })`).\nSee https://reach.tech/rect#userect-observe")}),[o]),n.vJ((()=>{d(t)&&console.warn("Passing `onChange` as the third argument to `useRect` is deprecated and will be removed in a future version of Reach UI. Instead, you can pass an object of options with an `onChange` property as the second argument (`useRect(ref, { onChange })`).\nSee https://reach.tech/rect#userect-onchange")}),[t]);let[l,a]=n.J0(e.current),u=n.li(!1),h=n.li(!1),[b,g]=n.J0(null),v=n.li(i);return p((()=>{v.current=i,e.current!==l&&a(e.current)})),p((()=>{l&&!u.current&&(u.current=!0,g(l.getBoundingClientRect()))}),[l]),p((()=>{if(!r)return;let o=l;if(h.current||(h.current=!0,o=e.current),!o)return void console.warn("You need to place the ref");let t=s(o,(e=>{v.current?.(e),g(e)}));return t.observe(),()=>{t.unobserve()}}),[r,l,e]),b}}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/5.0.7/041dd5b2eb31807ef293b2228a672fc4/banner-lite-blocker-ui.lite.js.map
