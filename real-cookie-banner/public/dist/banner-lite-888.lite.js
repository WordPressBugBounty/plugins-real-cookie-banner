"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[888],{6545:(e,t,n)=>{n.d(t,{U:()=>o});const o=e=>{let{width:t,color:o,tooltipText:i,framed:r,renderInContainer:s,tooltipAlways:l,onClick:a,thickness:c=1}=e;const{closeIcon:{framed:d,closeIcon:u,notPortalIcon:p,portalIcon:h,portalPlaceholder:g}}=(0,n(8700).o)().extend(...n(6546).h),f=(0,n(7936).li)(),m=(0,n(8552).y)(f,{observe:!!s}),b=u({color:o,width:t,thickness:c,...(null==m?void 0:m.y)>0?{rectX:m.x,rectY:m.y}:{}}),y=(0,n(6425).Y)(n(9161).m,{"aria-hidden":!0,title:i,onClick:a,position:s?(null==m?void 0:m.y)>50?"top-left":"left":"top-left",always:l,className:`${s?h:p} ${r?d:""}`,style:b,children:(0,n(6425).FD)("span",{"aria-hidden":!0,children:[(0,n(6425).Y)("span",{}),(0,n(6425).Y)("span",{})]})});return s?(0,n(6425).FD)(n(7936).FK,{children:[(0,n(6425).Y)("div",{className:g,style:b,ref:f}),(null==m?void 0:m.y)>0&&(0,n(6425).Y)(n(3558).Z,{renderInContainer:s,children:y})]}):y}},5750:(e,t,n)=>{n.d(t,{X:()=>a});var o=n(6425),i=n(7936);const r=[Symbol("extendTeachingStylesheet"),(e,t)=>{let{jsx:n,boolIf:o}=e,{individualLayout:i,design:r,bodyDesign:s,boolLargeOrMobile:l,layout:a}=t;const[c,d]=n("p",{classNames:"teaching",all:"unset",display:"block",marginTop:"7px",textAlign:o(s.teachingsInheritTextAlign,"inherit",s.teachingsTextAlign()),color:o(s.teachingsInheritFontColor,"inherit",s.teachingsFontColor()),fontSize:o(s.teachingsInheritFontSize,"inherit",l(s.teachingsFontSize,o))}),[u]=n("div",{classNames:"description",lineHeight:1.5,textAlign:i.descriptionTextAlign(),fontSize:o(s.descriptionInheritFontSize,l(r.fontSize,o),l(s.descriptionFontSize,o)),pseudos:{[`> p:not(${d})`]:{all:"unset"}," a:not([aria-expanded])":{all:"unset",cursor:"pointer",color:"inherit",textDecoration:r.linkTextDecoration()}," a:not([aria-expanded]):hover":{textDecoration:r.linkTextDecoration()}}}),[p]=n("div",{classNames:"teaching-separator",display:o(s.teachingsSeparatorActive,"block","none"),pseudos:{":after":{content:"''",marginTop:"7px",display:"inline-block",maxWidth:"100%",borderRadius:a.borderRadius(),width:s.teachingsSeparatorWidth(),height:s.teachingsSeparatorHeight(),background:s.teachingsSeparatorColor()}}},{"aria-hidden":!0});return{DescriptionContainer:u,Teaching:c,TeachingSeparator:p}}];var s=n(8700),l=n(5922);const a=e=>{let{description:t,nl2br:n,teachings:a,isPostamble:c,children:d,...u}=e;const{individualPrivacyOpen:p}=(0,l.b)(),{DescriptionContainer:h,Teaching:g,TeachingSeparator:f}=(0,s.o)().extend(...r);return(0,o.FD)(h,{style:[!0,void 0].indexOf(p)>-1?void 0:{textAlign:"inherit"},children:[d,!!t&&(0,o.Y)("p",{role:"presentation",...u,dangerouslySetInnerHTML:{__html:n?t.replace(/\n/gm,'<br aria-hidden="true" />'):t}}),(null==a?void 0:a.length)>0&&(0,o.FD)(i.FK,{children:[(!!t||c)&&(0,o.Y)(f,{}),a.map((e=>"string"==typeof e?(0,o.Y)(g,{style:{marginBottom:c?7:0},dangerouslySetInnerHTML:{__html:e}},e):e))]})]})}},6812:(e,t,n)=>{n.d(t,{$:()=>c});var o=n(6425),i=n(7114),r=n(7936),s=n(8700);const l=e=>{let{ms:t=100,chars:n=["&#9719;","&#9718;","&#9717;","&#9716;"]}=e;const[i,s]=(0,r.J0)(1);return(0,r.vJ)((()=>{const e=setInterval((()=>{s(i+1)}),t);return()=>clearInterval(e)}),[i]),(0,o.Y)("span",{dangerouslySetInnerHTML:{__html:n[i%4]}})};var a=n(5922);const c=e=>{let{type:t,children:n,busyOnClick:c=!0,forceShow:d,onClick:u,framed:p,sticky:h,order:g,className:f,...m}=e;const{buttons:{[t]:b},framed:y,stickyButton:v,forceShowButton:x}=(0,s.o)().extend(...i.R),{decision:S,saveButton:$}=(0,a.b)(),w="save"===t?$.type:S[t],[k,C]=(0,r.J0)(!1),D=(0,r.hb)((e=>{k||(e.preventDefault(),c&&C(!0),null==u||u(e))}),[u,k,c]);return(0,o.Y)(b,{onClick:D,className:[p?y:void 0,h?v:void 0,d?x:void 0,f].filter(Boolean).join(" "),style:{order:g},"data-order":g,role:"button"===w?"button":void 0,...m,children:(0,o.Y)("span",{children:k?(0,o.Y)(l,{}):n})})}},3558:(e,t,n)=>{n.d(t,{Z:()=>o});const o=e=>{let{active:t=!0,children:o,className:i,tag:r="div",renderInContainer:s}=e;const[l]=(0,n(7936).J0)((()=>{const e=document.createElement(r);return i&&e.classList.add(...i.split(" ")),e}));return(0,n(7936).vJ)((()=>(document.body.appendChild(l),()=>{document.body.removeChild(l)})),[]),t?(0,n(7936).d5)(o,s||l):(0,n(6425).Y)(n(7936).FK,{children:o})}},9161:(e,t,n)=>{n.d(t,{m:()=>s});var o=n(6425),i=n(9136);const r=e=>{let{title:t,position:o,color:r,size:s,always:l,rounded:a,noAnimate:c,bounce:d,className:u}=e;return Promise.all([n.e(261),n.e(477),n.e(671),n.e(4)]).then(n.t.bind(n,7386,17)).then((e=>{let{default:t}=e;return(0,i.fX)(t,{id:"hint-css",overwrite:!1})})),{"aria-label":t,className:`hint--${o} hint--${s} ${r?`hint--${r}`:""} ${l?"hint--always":""} ${a?"hint--rounded":""} ${c?"hint--no-animate":""} ${d?"hint--bounce":""} ${u||""}`}},s=(0,n(7936).Rf)(((e,t)=>{let{children:n,title:i,position:s,color:l,size:a,always:c,rounded:d,noAnimate:u,bounce:p,className:h,...g}=e;return(0,o.Y)("div",{ref:t,...g,...r({title:i,always:c,position:s,color:l,size:a,rounded:d,noAnimate:u,bounce:p,className:h}),children:n})}))},9387:(e,t,n)=>{n.d(t,{D:()=>p});var o=n(6425),i=n(7936),r=n(5922),s=n(6546),l=n(8700);const a=e=>{let{children:t,...n}=e;const{FooterLink:i}=(0,l.o)().extend(...s.h);return(0,o.Y)(i,{...n,children:t})};var c=n(9161);const d=e=>{let{poweredLink:t,affiliate:n}=e;return(0,o.FD)(a,{href:n?n.link:t.href,target:t.target,children:[(0,o.Y)("span",{dangerouslySetInnerHTML:{__html:t.innerHTML}}),n&&(0,o.FD)(c.m,{title:n.description,position:"top-left",children:[" ",n.labelBehind]})]},"powered-by")};function u(e,t){const n=e.filter(Boolean);return 0===n.length?null:n.reduce(((e,n,r)=>e.length?[...e,(0,o.Y)(i.FK,{children:t},r),n]:[n]),[])}function p(e){let{onClose:t,putPoweredByLinkInRow:n,row1:s,row1End:l}=void 0===e?{}:e;const{i18n:{close:c},footerDesign:{poweredByLink:p},poweredLink:h,links:g=[],affiliate:f}=(0,r.b)(),m={target:"_blank",rel:"noopener"},b=[[t&&(0,o.Y)(a,{href:"#",onClick:t,"interaction-player-skip":"1",children:(0,o.Y)("strong",{children:c})},"close"),...s||[],...g.map(((e,t)=>{let{label:n,url:i,isTargetBlank:r}=e;return!!n&&!!i&&(0,o.Y)(a,{href:i,...void 0===r||r?m:{},children:n},`${t.toString()}-links`)})),...l||[]].filter(Boolean),[]];h&&p&&b[n||0].push((0,o.Y)(d,{poweredLink:h,affiliate:f},"poweredBy"));const y=(0,i.hb)((e=>u(e.map((e=>e.length?(0,o.Y)(i.FK,{children:u(e,(0,o.Y)(i.FK,{children:" • "}))},e[0].key):null)),(0,o.Y)("br",{"aria-hidden":!0}))),[]);return{rows:b,render:y}}},2655:(e,t,n)=>{function o(){return{updateGcmConsentTypeChecked:(e,t,n)=>{let{gcmConsent:o}=e}}}n.d(t,{u:()=>o})},8639:(e,t,n)=>{n.d(t,{N:()=>f});var o=n(7936),i=n(9136);const r=(e,t,n)=>{const r=(0,o.Kr)((()=>(0,i.TI)(e,t)),[]),{updater:s}=r;if(n&&s)for(const e in s){const t=(0,o.li)(!0);(0,o.vJ)((()=>{var o;t.current?t.current=!1:null==(o=s[e])||o.call(s,n[e])}),[n[e]])}return(0,o.vJ)((()=>(r.toggle(!0),()=>!(null==t?void 0:t.reuse)&&r.toggle(!1))),[]),r};var s=n(1685),l=n.n(s),a=n(5914),c=n(6256),d=n(1476);let u;function p(e,t,n){void 0===t&&(t=""),clearTimeout(u),u=setTimeout((()=>{const o=t.replace(/\.rcb-([A-Za-z0-9_-]+)/g,((t,n)=>`.${e[`rcb-${n}`]||t.substring(1)}`));(0,i.fX)(o,`custom-css-${n}`,!0)}),0)}const h=function(e,t,n){for(var o=arguments.length,i=new Array(o>3?o-3:0),r=3;r<o;r++)i[r-3]=arguments[r];let[s,l,{mainElement:a}]=i;if(s.length){const o=`rcb-${s[0]}`;t?s[0]=o:s.splice(0,1),a[o]=l,p(a,n,e)}};var g=n(5922);function f(){var e;const t=(0,g.b)(),{customCss:{css:n,antiAdBlocker:i}}=t,s=null==(e=window.wp)?void 0:e.customize,u=r((e=>function(e,t){let{rule:n,computed:o,variable:i,vars:r,meta:s,className:u,plugin:p}=t;p("modifyRule",(e=>{const{pseudos:t,forceSelector:n}=e,o=":focus-visible",i=".wheir-focus-visible";"string"==typeof n&&(null==n?void 0:n.indexOf(o))>-1&&(e.forceSelector+=`,${n.replace(new RegExp(o,"g"),i)}`);for(const e in t)e.indexOf(o)>-1&&(t[e.replace(new RegExp(o,"g"),i)]=t[e])}));const{pageRequestUuid4:h}=e,g=i(e.isTcf),f=u();n({background:"none",padding:"0px",margin:"0px",border:"none",maxWidth:"initial",maxHeight:"initial",position:"fixed",outline:"none !important",pseudos:{"::backdrop":{all:"unset"}},forceSelector:`.${f}`});const m=u();n({position:"absolute",clip:"rect(1px, 1px, 1px, 1px)",padding:"0px",border:"0px",height:"1px",width:"1px",overflow:"hidden",display:"block",forceSelector:`.${m}`});const b={outline:{outline:"black auto 1px !important",outlineOffset:"3px !important"},text:{textDecoration:"underline dashed !important",textUnderlineOffset:"3px !important"}};n({...b.outline,forceSelector:`.${s.id} :focus-visible, .${s.id}:focus-visible, .${s.id} *:has(+ .${m}:focus-visible)`});const y=u(),v=u(),[x,S]=r(e.mobile,{maxHeight:a.dD,alignment:(0,a.$S)(e.mobile.alignment,["bottom","center","top"])}),{isMobile:$,isMobileWidth:w,update:k}=o([x.enabled],(e=>{let[t]=e;const{body:{classList:n}}=document,o=document.getElementById(h),{innerWidth:i}=window,r=((null==o?void 0:o.clientWidth)||i)<=d.X5,s=t&&r;return s?n.add(y):n.remove(y),{isMobile:s,isMobileWidth:r}}),"mobile","raf");n({forceSelector:`.${y} .${v}`,display:"none"});const[{x:C,y:D}]=r({x:`calc(${x.scalePercent()} / 100)`,y:`calc((${x.scalePercent()} + ${x.scalePercentVertical()}) / 100)`}),A=e=>t=>{const n=(0,a.g$)(t),o=(t,n)=>`calc(${t}*${e.indexOf(n)>-1?D():C()})`,i={l:n,m:n.map(o)};for(let e=0;e<n.length;e++){const t=n[e];i[`l${e}`]=t,i[`m${e}`]=o(t,e)}return i},T=A([0,2]),F=A([]),z=e=>{const t=(0,a.dD)(e);return{l:t,m:`calc(${t}*${C()})`}},[B,I]=r(e.decision,{acceptAll:(0,a.$S)(e.decision.acceptAll,["button","link","hide"]),acceptEssentials:(0,a.$S)(e.decision.acceptAll,["button","link","hide"]),acceptIndividual:(0,a.$S)(e.decision.acceptAll,["button","link","hide"])}),[E,R]=r(e.layout,{maxHeight:a.dD,dialogPosition:(0,a.$S)(e.layout.dialogPosition,["middleCenter"]),bannerPosition:(0,a.$S)(e.layout.bannerPosition,["top","bottom"]),borderRadius:a.dD,dialogMargin:a.g$,dialogBorderRadius:a.dD,dialogMaxWidth:a.dD,overlayBg:c.E,overlayBlur:a.dD,bannerMaxWidth:a.dD}),[P,O]=r(e.sticky,{alignment:(0,a.$S)(e.sticky.alignment,["left","center","right"]),bubbleBorderRadius:(0,a.tD)("%"),bubblePadding:z,bubbleMargin:F,bubbleBorderWidth:a.dD,iconSize:z,boxShadowBlurRadius:a.dD,boxShadowOffsetX:a.dD,boxShadowOffsetY:a.dD,boxShadowSpreadRadius:a.dD,boxShadowColor:a.Kn,boxShadowColorAlpha:(0,a.tD)("%"),menuBorderRadius:a.dD,menuFontSize:z,menuItemSpacing:z,menuItemPadding:F}),[N,W]=r({accordionMargin:[0,0,0,0],accordionPadding:[0,0,0,0],accordionArrowType:"none",accordionArrowColor:"white",accordionBg:"white",accordionActiveBg:"white",accordionHoverBg:"white",accordionBorderWidth:0,accordionBorderColor:"white",accordionTitleFontSize:0,accordionTitleFontColor:"white",accordionTitleFontWeight:"white",accordionDescriptionMargin:[0,0,0,0],accordionDescriptionFontSize:0,accordionDescriptionFontColor:"white",accordionDescriptionFontWeight:"white",...e.bodyDesign},{padding:T,descriptionFontSize:z,teachingsFontSize:z,teachingsSeparatorWidth:a.dD,teachingsSeparatorHeight:a.dD,dottedGroupsFontSize:z,acceptAllFontSize:z,acceptAllPadding:T,acceptAllBorderWidth:z,acceptAllTextAlign:(0,a.$S)(e.bodyDesign.acceptAllTextAlign,["center","right"]),acceptEssentialsFontSize:z,acceptEssentialsPadding:T,acceptEssentialsBorderWidth:z,acceptEssentialsTextAlign:(0,a.$S)(e.bodyDesign.acceptEssentialsTextAlign,["center","right"]),acceptIndividualFontSize:z,acceptIndividualPadding:T,acceptIndividualBorderWidth:z,acceptIndividualTextAlign:(0,a.$S)(e.bodyDesign.acceptIndividualTextAlign,["center","right"]),accordionMargin:T,accordionTitleFontSize:z,accordionBorderWidth:z,accordionPadding:T,accordionDescriptionFontSize:z,accordionDescriptionMargin:T}),[L,M]=r(e.saveButton,{type:(0,a.$S)(e.saveButton.type,["button","link"]),fontSize:z,padding:T,borderWidth:z,textAlign:(0,a.$S)(e.saveButton.textAlign,["center","right"])}),[Y,j]=r(e.design,{fontColor:a.Kn,fontSize:z,borderWidth:z,textAlign:(0,a.$S)(e.design.textAlign,["center","right"]),boxShadowBlurRadius:a.dD,boxShadowOffsetX:a.dD,boxShadowOffsetY:a.dD,boxShadowSpreadRadius:a.dD,boxShadowColor:a.Kn,boxShadowColorAlpha:(0,a.tD)("%")}),[H,_]=r(e.headerDesign,{fontSize:z,borderWidth:z,padding:T,textAlign:(0,a.$S)(e.headerDesign.textAlign,["center","right"]),logoPosition:(0,a.$S)(e.headerDesign.logoPosition,["left","right"]),logo:(0,a.a$)(!1),logoMargin:T}),[J,K]=r(e.footerDesign,{borderWidth:z,padding:T,fontSize:z}),[X,V]=r(e.texts,{...(0,a.gJ)(e.texts,a.xj),headline:(0,a.a$)()}),[U,Z]=r(e.individualLayout,{dialogMaxWidth:a.dD,bannerMaxWidth:a.dD}),[q,G]=r(e.group,{headlineFontSize:z,descriptionFontSize:z,groupPadding:T,groupBorderRadius:a.dD,groupBorderWidth:z,groupSpacing:z,checkboxBorderWidth:z}),Q=document.getElementById(h);return Q&&l().mutate((()=>{Q.className=s.id})),{customize:e,unsetDialogStyles:f,a11yFocusStyle:b,scaleHorizontal:C,scaleVertical:D,isTcf:g,dispatchResize:k,registerWindowResize:()=>(window.addEventListener("resize",k),()=>window.removeEventListener("resize",k)),boolLargeOrMobile:(e,t,n)=>t($,e("number"==typeof n?`m${n}`:"m"),e("number"==typeof n?`l${n}`:"l")),isMobile:$,isMobileWidth:w,isMobileClass:y,hideOnMobileClass:v,screenReaderOnlyClass:m,updater:{decision:I,layout:R,design:j,bodyDesign:W,headerDesign:_,footerDesign:K,texts:V,mobile:S,sticky:O,individualLayout:Z,group:G,saveButton:M},decision:B,layout:E,design:Y,bodyDesign:N,headerDesign:H,footerDesign:J,individualLayout:U,group:q,saveButton:L,texts:X,mobile:x,sticky:P}}(t,e)),{reuse:"react-cookie-banner",createElement:o.n,forwardRef:o.Rf,filterClassName:function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];h(u.className,"n"===i||s,n,...t)}},t),f=(0,o.Kr)((()=>Symbol(u.functions.className())),[]);return u.specify(f.description),u.specify(`${f.description}-o`),(0,o.vJ)((()=>{const{element:e,className:t}=u;p(e,n,t)}),[n]),{...u,reactRootSymbol:f}}},1476:(e,t,n)=>{n.d(t,{X5:()=>o});const o=700},7114:(e,t,n)=>{n.d(t,{R:()=>o});const o=[Symbol("extendCommonButtonsStylesheet"),(e,t)=>{let{className:n,jsx:o,boolIf:i,boolSwitch:r,boolOr:s}=e,{screenReaderOnlyClass:l,isTcf:a,decision:c,layout:d,saveButton:u,bodyDesign:p,design:h,boolLargeOrMobile:g}=t;const f=n(),m=n(),b=n(),[y,v,x,S]=["acceptAll","acceptEssentials","acceptIndividual","save"].map((e=>{const t="save"===e,n=t?u.type:c[e],l=t?u.bg:p[`${e}Bg`],y=t?u.hoverBg:p[`${e}HoverBg`],v=t?u.padding:p[`${e}Padding`],x=t?u.fontSize:p[`${e}FontSize`],S=t?u.textAlign:p[`${e}TextAlign`],$=t?u.fontWeight:p[`${e}FontWeight`],w=t?u.fontColor:p[`${e}FontColor`],k=t?u.hoverFontColor:p[`${e}HoverFontColor`],C=t?u.borderColor:p[`${e}BorderColor`],D=t?u.hoverBorderColor:p[`${e}HoverBorderColor`],A=t?u.borderWidth:p[`${e}BorderWidth`],T=g(x,i),F=s([a,p.acceptAllOneRowLayout]),[z]=o("a",{classNames:`btn-${e.replace(/[A-Z]/g,(e=>`-${e.toLowerCase()}`))}`,all:"unset",display:"flex",...t?{}:{display:i(n("is-hide"),"none","flex")},borderRadius:d.borderRadius(),overflow:"hidden",textAlign:S("val"),color:w(),transition:"background-color 250ms, color 250ms, border-color 250ms",cursor:i(n("is-button"),"pointer"),textDecoration:i(n("is-link"),"underline"),backgroundColor:i(n("is-button"),l()),borderStyle:"solid",borderColor:C(),borderWidth:i(n("is-button"),g(A,i),"0px"),flex:"1 1 100%",alignItems:"center",justifyContent:r([[S("is-right"),"flex-end"],[S("is-center"),"center"]],"left"),pointerEvents:i(n("is-link"),"none"),...["acceptEssentials","save"].indexOf(e)>-1?{fontSize:i(F,g(p.acceptAllFontSize,i),T),fontWeight:i(F,p.acceptAllFontWeight(),$()),padding:i(F,p.acceptAllPadding("l"),v("l"))}:{fontSize:T,fontWeight:$(),padding:v("l")},pseudos:{[`.${m}`]:{display:"block"},">span":{cursor:i(n("is-link"),"pointer"),pointerEvents:i(n("is-link"),"all"),color:w()},":hover>span":{color:k()},[`.${f}`]:{outline:"rgb(255, 94, 94) solid 5px"},[`.${b}`]:{position:"sticky",bottom:"6px",boxShadow:`0px 10px 0px 0px ${h.bg()}, 0px -10px 0px ${h.bg()}`},":hover":{color:k(),backgroundColor:i(n("is-button"),y()),borderColor:D()}}},{href:"#"});return z})),[$]=o("a",{classNames:["skip-to",l],pseudos:{":focus-visible":{clip:"initial",width:"initial",height:"initial",zIndex:10,left:"10px",top:"10px",padding:"5px 10px",background:"black",color:"white",fontSize:"14px"}}},{onClick:e=>{e.preventDefault(),document.getElementById(e.target.getAttribute("href").substr(1)).focus()}});return{A11ySkipToLink:$,framed:f,stickyButton:b,forceShowButton:m,buttons:{acceptAll:y,acceptEssentials:v,acceptIndividual:x,save:S}}}]},6546:(e,t,n)=>{n.d(t,{h:()=>o});const o=[Symbol("extendCommonContentStylesheet"),(e,t)=>{let{className:o,rule:i,boolIf:r,control:s,jsx:l}=e,{boolLargeOrMobile:a,design:c,headerDesign:d,footerDesign:u}=t;const p=o(),[h,[g,f,m,b]]=s({color:"#000000",width:10,thickness:1,rectX:0,rectY:0},{width:n(5914).dD,thickness:n(5914).dD,rectX:n(5914).dD,rectY:n(5914).dD},(e=>{let{color:t,width:n,thickness:r,rectX:s,rectY:l}=e;const a=o(),[c,d]=i({display:"block"}),[u,p]=i({position:"fixed !important",zIndex:99,top:l(),left:s()}),[h,g]=i({display:"block"});return i({forceSelector:`${c},${h}`,position:"absolute",top:"50%",right:"0px",display:"block",pointerEvents:"none",marginTop:`calc(${n()} / 2 * -1)`}),i({forceSelector:`${h},${u}`,cursor:"pointer",pointerEvents:"all",pseudos:{[`.${a}`]:{outline:"rgb(255, 94, 94) solid 5px"},":after":{width:"auto !important"},">span>span":{position:"absolute",top:"50%",left:"50%",transform:"rotate(45deg) translate(-50%, -50%)",transformOrigin:"top left",transition:"all 420ms",opacity:"0.5",pointerEvents:"none",backgroundColor:t(),width:r(),height:n()},">span>span:nth-child(1)":{transform:"rotate(-45deg) translate(-50%, -50%)"},":hover>span>span":{opacity:1,width:`calc(${r()} + 1px)`}}}),i({forceSelector:`${h},${u},${c}`,width:n(),aspectRatio:"1/1"}),[a,d,p,g]})),[y]=l("div",{classNames:"headline",all:"unset",color:d.fontColor(),lineHeight:1.8,fontSize:a(d.fontSize,r),fontFamily:r(d.fontInheritFamily,"inherit",d.fontFamily()),fontWeight:d.fontWeight(),pseudos:{[`.${p}`]:{paddingRight:"20px"}}},{role:"heading","aria-level":"3"}),v=c.linkTextDecoration(),[x]=l("a",{classNames:"footer-link",textDecoration:v,fontSize:a(u.fontSize,r),color:u.fontColor(),fontFamily:r(u.fontInheritFamily,"inherit",u.fontFamily()),padding:"0 5px",pseudos:{":hover":{color:u.hoverFontColor(),textDecoration:v}}}),S=a(u.fontSize,r),[$]=l("span",{padding:"0 5px",position:"relative",cursor:"pointer",pseudos:{">select":{all:"unset",background:"transparent",border:0,fontSize:S,color:u.fontColor(),fontFamily:r(u.fontInheritFamily,"inherit",u.fontFamily()),textDecoration:"underline",paddingRight:"15px"},'[data-flag="true"]>select':{paddingLeft:"23px"}," option":{background:c.bg()},"::after":{position:"absolute",content:"''",border:`solid ${u.fontColor()}`,borderWidth:"0 2px 2px 0",display:"inline-block",padding:"2px",transform:"rotate(45deg) translate(-50%, -50%)",right:"8px",top:"50%",pointerEvents:"none"}," span":{position:"absolute",left:"6px",top:"0px",bottom:"0px",width:"17px",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"contain",pointerEvents:"none"}}});return{hasCloseIcon:p,closeIcon:{framed:g,closeIcon:h,portalPlaceholder:f,portalIcon:m,notPortalIcon:b},HeaderTitle:y,FooterLink:x,FooterLanguageSwitcherSelect:$}}]},5780:(e,t,n)=>{n.d(t,{v:()=>c});const o=3,i=5,r="<äßæ>";class s{constructor(){this.items=[],this.selectors=[]}createReplay(){this.garbageCollect();const{items:e}=this,t=[];for(let n=0;n<e.length;n++){const[o,,...i]=e[n];t.push([o,...i])}const n=function(e){if(!e[0]||1==e.length)return e[0]||"";let t=0;for(;e[0][t]&&e.every((n=>n[t]===e[0][t]));)t++;return e[0].substr(0,t)}(this.selectors),o={v:1,selectorsPrefix:n,selectors:this.selectors.map((e=>e.substr(n.length))),items:t.map((e=>e.map((e=>"number"==typeof e?e:`${r}${JSON.stringify(e)}${r}`)).join(","))).join(" ")};return this.items=[],this.selectors=[],o}addCustom(e,t){this.items.push([10,(new Date).getTime(),this.calculateMillisecondsToPrevious(),e,t])}toggle(e){this.items.push([e?1:9,(new Date).getTime(),this.calculateMillisecondsToPrevious()])}addClick(e){const t=this.calculateMillisecondsToPrevious((e=>{let[t]=e;return[o,i].indexOf(t)>-1&&2}),(()=>{}));t>-1&&this.items.push([o,(new Date).getTime(),t,this.ensureSelector(e)]),this.garbageCollect()}addFocusIn(e){this.items.push([i,(new Date).getTime(),this.calculateMillisecondsToPrevious(),this.ensureSelector(e)]),this.garbageCollect()}addScroll(e,t){const n=this.ensureSelector(e),o=this.calculateMillisecondsToPrevious(((e,o)=>{let[i,,,r,s]=e;if(2!==i||r!==n)return!1;if(!o)return 50;const[l,,,a,c]=o;return 2===l&&r===a&&(t>s==s>c&&50)}),(e=>e[4]=t));o>-1&&this.items.push([2,(new Date).getTime(),o,n,t]),this.garbageCollect()}addResize(e,t){const n=this.calculateMillisecondsToPrevious((n=>{let[o,,,i,r]=n;return 4===o&&(i===e&&r===t||400)}),(n=>{n[3]=e,n[4]=t}));n>-1&&this.items.push([4,(new Date).getTime(),n,e,t]),this.garbageCollect()}ensureSelector(e){const{selectors:t}=this,n=t.indexOf(e);return-1===n?t.push(e)-1:n}calculateMillisecondsToPrevious(e,t){const{items:n}=this;if(0===n.length)return 0;const o=n[n.length-1],i=n[n.length-2],[,r]=o,s=(new Date).getTime()-r,l=null==e?void 0:e(o,i);return l&&("number"!=typeof l||s<l)?(o[1]+=s,t(o),-1):s}garbageCollect(){const{items:e}=this;for(let t=0;t<e.length;t++)t<e.length-2&&(e[t][1]=0)}}const l="interaction-player-uqid",a=(e,t)=>{if(void 0===t&&(t=document.body),e===t||!(null==e?void 0:e.parentElement))return!1;const n=[];for(;e!==t&&e;){const o=e.getAttribute(l);if(o){n.unshift(`[${l}="${o}"]`);break}let i=1,r=e;for(;r.previousElementSibling;r=r.previousElementSibling,i++);if("HTML"===e.tagName)return!1;if(n.unshift(`${e.tagName}:nth-child(${i})`),(e=e.parentElement)===t)break}return n.join(">").toLowerCase()};class c{constructor(e){this.interactionScroll=e=>{const t=e.target;if([document,document.body].indexOf(t)>-1)return;const n=a(t,this.element);n&&this.records.addScroll(n,t.scrollTop)},this.interactionClick=e=>{const t=e.target,n=a(t,this.element);n&&this.records.addClick(n)},this.interactionFocusIn=e=>{const t=e.target,n=a(t,this.element);n&&this.records.addFocusIn(n)},this.interactionResize=()=>{const{innerWidth:e,innerHeight:t}=window;this.records.addResize(e,t)},this.element=e,this.records=new s}restart(){this.records=new s,this.toggle(!0)}createReplay(){return this.toggle(!1),this.records.createReplay()}toggle(e){const{element:{addEventListener:t,removeEventListener:n},records:o}=this;o.toggle(e),e?(setTimeout((()=>this.interactionResize()),0),t("scroll",this.interactionScroll,!0),t("click",this.interactionClick,!0),t("touch",this.interactionClick,!0),t("resize",this.interactionResize,!0),t("focusin",this.interactionFocusIn,!0)):(n("scroll",this.interactionScroll,!0),n("click",this.interactionClick,!0),n("touch",this.interactionClick,!0),n("resize",this.interactionResize,!0),n("focusin",this.interactionFocusIn,!0))}getRecords(){return this.records}}},9136:(e,t,n)=>{n.d(t,{TI:()=>b,fX:()=>y,lw:()=>m});var o=n(1685),i=n.n(o);const r=e=>{const t=new Uint8Array(e/2);return window.crypto.getRandomValues(t),`a${Array.from(t,(e=>`0${e.toString(16)}`.slice(-2))).join("")}`};var s=n(8084),l=n(5914);const a=e=>Object.keys(e).reduce(((t,n)=>{let o=e[n];if(o="function"==typeof o?o():o,"string"==typeof o&&o.indexOf("function () {")>-1)throw new Error(`${n} contains a serialized function ("${o}").`);return t[(e=>{const[t]=e;return t.toUpperCase()===t.toLowerCase()||e.indexOf("-")>-1?e:e.replace(/[A-Z]/g,(e=>`-${e.toLowerCase()}`))})(n)]=o,t}),{}),c=(e,t)=>{let{vars:n}=t;const{id:o,specifiedIds:i}=e,{runPlugin:r}=e,s=t=>((e,t)=>(void 0===t&&(t=!1),`${e.className.substr(t?0:1)}-${e.inc++}`))(e,t),l=t=>{r("modifyRule",t);const{classNames:n,pseudos:l,forceSelector:c,...d}=t,u=Array.isArray(c)?c.join(" "):c,p=Array.isArray(n)?n:n?n.split(" "):[],h=u||s(!0);if(e.rules.set(m(o,i,h),a(d)),l){const t=h.split(",");for(const n in l){const r=n.split(","),s=t.map((e=>r.map((t=>e===t?void 0:t.startsWith("<")?`${t.substr(1)}${e}`:`${e}${t}`)))).flat().filter(Boolean).join(",");e.rules.set(m(o,i,s),a(l[n]))}}const g=[h.substr(1)];return c||(r("filterClassName",p,g[0],e),g.push(...p)),[h,c?void 0:g.join(" ")]};return{className:s,rule:l,control:(e,t,o)=>{const[i,,r]=n(e,t,!1);return[r,o(i),i,Object.keys(e)]},variant:t=>{const n=s(!0);return[l(t.reduce(((e,t)=>{let[n,o]=t;return e[` ${n(!1)}`]=o,e}),{forceSelector:`${e.className}${n}`}))[0],n.substr(1)]}}};var d=n(3511),u=n(7996);function p(e,t){void 0===t&&(t=1);const n=" ".repeat(4*t);return[...e.keys()].map((o=>{const i=e.get(o);return`${o} {\n${Object.keys(i).map((e=>{const o=i[e];if("object"==typeof o){const i=new Map;return i.set(e,o),`${n}${p(i,t+1)}\n`}return`${n}${e}:${" ".repeat(1)}${o};\n`})).join("")}${t>1?" ".repeat(4*(t-1)):""}}`})).join("\n")}const h={};function g(e){const{className:t,element:n,extend:o,functions:i,meta:r,toggle:s,specify:l,...a}=e;return a}const f=/,(?![^(]*\))/;function m(e,t,n){const o=-1===n.indexOf(",")?[n]:n.split(f),i=[];for(const n of o)if(i.push(n),n.startsWith(`.${e}`))for(const e of t)i.push(`#${e} ${n}`);return i.join(",")}const b=(e,t,n)=>{void 0===t&&(t={});let{element:o,id:a,inc:f,varsVal:y,extended:v,specifiedIds:x,plugins:S,toggle:$,specify:w,detached:k}=void 0===n?{}:n;const{reuse:C}=t;if(C&&!a&&h[C])return h[C];const D=v||{},A=x||[],T=a?`${a}-ext-${Object.getOwnPropertySymbols(D).length}`:r(4),F=document.createElement("style");F.setAttribute("skip-rucss","true");const z={inc:f||1,id:T,varsVal:y||new Map,settings:t,plugins:S||{filterClassName:[t.filterClassName].filter(Boolean),modifyRule:[t.modifyRule].filter(Boolean)},runPlugin:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];for(const t of z.plugins[e])t(...n)},className:`.${T}`,rules:new Map,isExtension:!!a,element:F,mainElement:o||F,specifiedIds:A,extended:D},B=$||(e=>i().mutate((()=>{const{element:t}=z,[n]=document.getElementsByTagName("head"),o=[t,...Object.getOwnPropertySymbols(D).map((e=>D[e].element))];for(const t of o)document.dispatchEvent(new CustomEvent(s.kt,{detail:{stylesheet:z,active:e}})),e?n.appendChild(t):n.removeChild(t)}))),I=w||(e=>{A.indexOf(e)>-1||(A.push(e),i().mutate((()=>{const t=new RegExp(`^[ ]*(\\.${T}.*) {`,"gm"),n=(t,n)=>`${m(T,[e],n)} {`;for(const e of[z.mainElement,...Object.getOwnPropertySymbols(D).map((e=>D[e].element))]){const{textContent:o}=e;e.textContent=o.replace(t,n)}})))}),E=(0,l.yq)(z,k),R=c(z,E),P=(0,d.G)(z,E),O=((e,t)=>(n,o)=>{const i=new Map,{rule:r}=c({...e,rules:i},t);for(const e in o)r({forceSelector:e,...o[e]});e.rules.set(n,Object.fromEntries(i))})(z,E),N=(0,u.s)(z,E),W=((e,t)=>{let{settings:{createElement:n,forwardRef:o}}=e,{rule:i}=t;const r=(e,t,r)=>{if(!n)throw new Error("No createElement function passed.");let s,l;if(Array.isArray(t))[s,l]=t;else{const[e,n]=i(t);s=e,l=n}const a="function"==typeof o,c=(t,o)=>{let{children:i,className:s,...c}=t;const d=[l,s].filter(Boolean),{modifyProps:u,...p}=r||{},h={className:d.join(" "),...a?{ref:o}:{},...p,...c};return null==u||u(h),n(e,h,i)};return[a?o(c):c,s,l]};return{jsx:r,jsxControl:(e,t,n)=>{let[o,i,,s]=t;const{modifyProps:l,...a}=n||{},[c]=r(e,[void 0,i],{...a,modifyProps:e=>{e.style={...o(e),...e.style||{}};const t={};for(const n of s)t[n]=e[n],delete e[n];null==l||l(e,t)}});return c}}})(z,R),L={...R,...E,...N,...W,nestedQuery:O,computed:P,plugin:(e,t)=>{z.plugins[e].push(t)}},M=e({meta:z,...L});i().mutate((()=>{F.textContent=p(z.rules);for(const e of[F,document])e.dispatchEvent(new CustomEvent(s.Iy,{detail:{stylesheet:z}}))}));const Y=z.inc,j=function(e,n,o,i){void 0===i&&(i=[]);const{extended:r,mainElement:s}=z,l=Object.assign({_chain:i},M,...i.map((e=>g(r[e]))));if(!r[e]){r[e]=b((e=>n(e,l)),t,{toggle:B,detached:o||!1,...z,inc:o?Y:z.inc});const i=Object.keys(l);for(const t of Object.keys(g(r[e])))i.indexOf(t)>-1&&console.warn(`"${t}" detected in multiple stylesheets. This will lead to side effects.`);s.isConnected&&B(!0)}return-1===i.indexOf(e)&&i.push(e),{...l,...r[e],extend:(e,t,n)=>j(e,t,n,i)}},H={...M,meta:z,element:z.element,className:z.id,specify:I,toggle:B,extend:j,functions:L};return C&&!a&&(h[C]=H),H},y=(e,t,n)=>{void 0===n&&(n=!1);const{id:o,overwrite:s=!0}="string"==typeof t?{id:t}:t||{},l=`pure-css-stylesheet-${o||r(5)}`;let a=document.getElementById(l);if(a){if(!s)return a.remove}else a=document.createElement("style"),a.setAttribute("skip-rucss","true"),a.style.type="text/css",a.id=l,i().mutate((()=>{document.getElementsByTagName(n?"body":"head")[0].appendChild(a)}));return a.innerHTML=e,a.remove}},2767:(e,t,n)=>{n.d(t,{A:()=>o});const o=e=>{let{isPro:t,isLicensed:o,isDevLicense:i,i18n:{noLicense:r,devLicense:s,devLicenseLearnMore:l,devLicenseLink:a}}=e;if(!t)return null;const c={fontSize:13,color:"#c95252",fontWeight:"bold",order:9};let d="";return i?d=s:o||(d=r),d?(0,n(6425).FD)("div",{style:c,children:[d,i&&(0,n(6425).FD)(n(7936).FK,{children:[" (",(0,n(6425).Y)("a",{href:a,rel:"noreferrer",target:"_blank",style:c,children:l}),")"]})]}):null}},7513:(e,t,n)=>{n.d(t,{x:()=>o});const o=async e=>{let{consent:t,gcmConsent:o,markAsDoNotTrack:i=!1,buttonClicked:r,blocker:s=0,blockerThumbnail:l,tcfString:a,recorderJsonString:c,uiView:d}=e;const{clientWidth:u,clientHeight:p}=document.documentElement;let h;a&&(h=a(),await(0,n(6399).P)()),await(0,n(3114).C)().persistConsent({decision:t,gcmConsent:o,markAsDoNotTrack:i,buttonClicked:r,viewPortWidth:u,viewPortHeight:p,blocker:s,blockerThumbnail:l,tcfString:h,recorderJsonString:c,uiView:d})}}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/4.7.15/042a29caa5378c1d160780cc960dca82/banner-lite-888.lite.js.map
