"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[650],{34650:(e,t,i)=>{i.d(t,{A:()=>M});var n=i(18539),a=i(41594),l=i.n(a),r=i(65924),o=i.n(r),s=i(82868),c=i(5944),d=i(80840),m=i(84017),g=i(31754),p=i(86173),$=i(58678),u=i(86310),f=i(18197);const h=l().createContext({});h.Consumer;var y=i(79045),v=i(78315),S=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i};const x=l().forwardRef(((e,t)=>{const{prefixCls:i,children:n,actions:r,extra:s,styles:c,className:m,classNames:g,colStyle:p}=e,$=S(e,["prefixCls","children","actions","extra","styles","className","classNames","colStyle"]),{grid:u,itemLayout:f}=(0,a.useContext)(h),{getPrefixCls:x,list:b}=(0,a.useContext)(d.QO),z=e=>{var t,i;return o()(null===(i=null===(t=null==b?void 0:b.item)||void 0===t?void 0:t.classNames)||void 0===i?void 0:i[e],null==g?void 0:g[e])},C=e=>{var t,i;return Object.assign(Object.assign({},null===(i=null===(t=null==b?void 0:b.item)||void 0===t?void 0:t.styles)||void 0===i?void 0:i[e]),null==c?void 0:c[e])},E=x("list",i),O=r&&r.length>0&&l().createElement("ul",{className:o()(`${E}-item-action`,z("actions")),key:"actions",style:C("actions")},r.map(((e,t)=>l().createElement("li",{key:`${E}-item-action-${t}`},e,t!==r.length-1&&l().createElement("em",{className:`${E}-item-action-split`}))))),k=u?"div":"li",A=l().createElement(k,Object.assign({},$,u?{}:{ref:t},{className:o()(`${E}-item`,{[`${E}-item-no-flex`]:!("vertical"===f?s:!(()=>{let e;return a.Children.forEach(n,(t=>{"string"==typeof t&&(e=!0)})),e&&a.Children.count(n)>1})())},m)}),"vertical"===f&&s?[l().createElement("div",{className:`${E}-item-main`,key:"content"},n,O),l().createElement("div",{className:o()(`${E}-item-extra`,z("extra")),key:"extra",style:C("extra")},s)]:[n,O,(0,y.Ob)(s,{key:"extra"})]);return u?l().createElement(v.A,{ref:t,flex:1,style:p},A):A})),b=x;b.Meta=e=>{var{prefixCls:t,className:i,avatar:n,title:r,description:s}=e,c=S(e,["prefixCls","className","avatar","title","description"]);const{getPrefixCls:m}=(0,a.useContext)(d.QO),g=m("list",t),p=o()(`${g}-item-meta`,i),$=l().createElement("div",{className:`${g}-item-meta-content`},r&&l().createElement("h4",{className:`${g}-item-meta-title`},r),s&&l().createElement("div",{className:`${g}-item-meta-description`},s));return l().createElement("div",Object.assign({},c,{className:p}),n&&l().createElement("div",{className:`${g}-item-meta-avatar`},n),(r||s)&&$)};const z=b;var C=i(78052),E=i(71094),O=i(52146),k=i(63829);const A=e=>{const{listBorderedCls:t,componentCls:i,paddingLG:n,margin:a,itemPaddingSM:l,itemPaddingLG:r,marginLG:o,borderRadiusLG:s}=e;return{[`${t}`]:{border:`${(0,C.zA)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:s,[`${i}-header,${i}-footer,${i}-item`]:{paddingInline:n},[`${i}-pagination`]:{margin:`${(0,C.zA)(a)} ${(0,C.zA)(o)}`}},[`${t}${i}-sm`]:{[`${i}-item,${i}-header,${i}-footer`]:{padding:l}},[`${t}${i}-lg`]:{[`${i}-item,${i}-header,${i}-footer`]:{padding:r}}}},N=e=>{const{componentCls:t,screenSM:i,screenMD:n,marginLG:a,marginSM:l,margin:r}=e;return{[`@media screen and (max-width:${n}px)`]:{[`${t}`]:{[`${t}-item`]:{[`${t}-item-action`]:{marginInlineStart:a}}},[`${t}-vertical`]:{[`${t}-item`]:{[`${t}-item-extra`]:{marginInlineStart:a}}}},[`@media screen and (max-width: ${i}px)`]:{[`${t}`]:{[`${t}-item`]:{flexWrap:"wrap",[`${t}-action`]:{marginInlineStart:l}}},[`${t}-vertical`]:{[`${t}-item`]:{flexWrap:"wrap-reverse",[`${t}-item-main`]:{minWidth:e.contentWidth},[`${t}-item-extra`]:{margin:`auto auto ${(0,C.zA)(r)}`}}}}}},B=e=>{const{componentCls:t,antCls:i,controlHeight:n,minHeight:a,paddingSM:l,marginLG:r,padding:o,itemPadding:s,colorPrimary:c,itemPaddingSM:d,itemPaddingLG:m,paddingXS:g,margin:p,colorText:$,colorTextDescription:u,motionDurationSlow:f,lineWidth:h,headerBg:y,footerBg:v,emptyTextPadding:S,metaMarginBottom:x,avatarMarginRight:b,titleMarginBottom:z,descriptionFontSize:O}=e,k={};return["start","center","end"].forEach((e=>{k[`&-align-${e}`]={textAlign:e}})),{[`${t}`]:Object.assign(Object.assign({},(0,E.dF)(e)),{position:"relative","*":{outline:"none"},[`${t}-header`]:{background:y},[`${t}-footer`]:{background:v},[`${t}-header, ${t}-footer`]:{paddingBlock:l},[`${t}-pagination`]:Object.assign(Object.assign({marginBlockStart:r},k),{[`${i}-pagination-options`]:{textAlign:"start"}}),[`${t}-spin`]:{minHeight:a,textAlign:"center"},[`${t}-items`]:{margin:0,padding:0,listStyle:"none"},[`${t}-item`]:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:s,color:$,[`${t}-item-meta`]:{display:"flex",flex:1,alignItems:"flex-start",maxWidth:"100%",[`${t}-item-meta-avatar`]:{marginInlineEnd:b},[`${t}-item-meta-content`]:{flex:"1 0",width:0,color:$},[`${t}-item-meta-title`]:{margin:`0 0 ${(0,C.zA)(e.marginXXS)} 0`,color:$,fontSize:e.fontSize,lineHeight:e.lineHeight,"> a":{color:$,transition:`all ${f}`,"&:hover":{color:c}}},[`${t}-item-meta-description`]:{color:u,fontSize:O,lineHeight:e.lineHeight}},[`${t}-item-action`]:{flex:"0 0 auto",marginInlineStart:e.marginXXL,padding:0,fontSize:0,listStyle:"none","& > li":{position:"relative",display:"inline-block",padding:`0 ${(0,C.zA)(g)}`,color:u,fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"center","&:first-child":{paddingInlineStart:0}},[`${t}-item-action-split`]:{position:"absolute",insetBlockStart:"50%",insetInlineEnd:0,width:h,height:e.calc(e.fontHeight).sub(e.calc(e.marginXXS).mul(2)).equal(),transform:"translateY(-50%)",backgroundColor:e.colorSplit}}},[`${t}-empty`]:{padding:`${(0,C.zA)(o)} 0`,color:u,fontSize:e.fontSizeSM,textAlign:"center"},[`${t}-empty-text`]:{padding:S,color:e.colorTextDisabled,fontSize:e.fontSize,textAlign:"center"},[`${t}-item-no-flex`]:{display:"block"}}),[`${t}-grid ${i}-col > ${t}-item`]:{display:"block",maxWidth:"100%",marginBlockEnd:p,paddingBlock:0,borderBlockEnd:"none"},[`${t}-vertical ${t}-item`]:{alignItems:"initial",[`${t}-item-main`]:{display:"block",flex:1},[`${t}-item-extra`]:{marginInlineStart:r},[`${t}-item-meta`]:{marginBlockEnd:x,[`${t}-item-meta-title`]:{marginBlockStart:0,marginBlockEnd:z,color:$,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG}},[`${t}-item-action`]:{marginBlockStart:o,marginInlineStart:"auto","> li":{padding:`0 ${(0,C.zA)(o)}`,"&:first-child":{paddingInlineStart:0}}}},[`${t}-split ${t}-item`]:{borderBlockEnd:`${(0,C.zA)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderBlockEnd:"none"}},[`${t}-split ${t}-header`]:{borderBlockEnd:`${(0,C.zA)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`},[`${t}-split${t}-empty ${t}-footer`]:{borderTop:`${(0,C.zA)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`},[`${t}-loading ${t}-spin-nested-loading`]:{minHeight:n},[`${t}-split${t}-something-after-last-item ${i}-spin-container > ${t}-items > ${t}-item:last-child`]:{borderBlockEnd:`${(0,C.zA)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`},[`${t}-lg ${t}-item`]:{padding:m},[`${t}-sm ${t}-item`]:{padding:d},[`${t}:not(${t}-vertical)`]:{[`${t}-item-no-flex`]:{[`${t}-item-action`]:{float:"right"}}}}},j=(0,O.OF)("List",(e=>{const t=(0,k.h1)(e,{listBorderedCls:`${e.componentCls}-bordered`,minHeight:e.controlHeightLG});return[B(t),A(t),N(t)]}),(e=>({contentWidth:220,itemPadding:`${(0,C.zA)(e.paddingContentVertical)} 0`,itemPaddingSM:`${(0,C.zA)(e.paddingContentVerticalSM)} ${(0,C.zA)(e.paddingContentHorizontal)}`,itemPaddingLG:`${(0,C.zA)(e.paddingContentVerticalLG)} ${(0,C.zA)(e.paddingContentHorizontalLG)}`,headerBg:"transparent",footerBg:"transparent",emptyTextPadding:e.padding,metaMarginBottom:e.padding,avatarMarginRight:e.padding,titleMarginBottom:e.paddingSM,descriptionFontSize:e.fontSize})));function w(e){var t,{pagination:i=!1,prefixCls:l,bordered:r=!1,split:y=!0,className:v,rootClassName:S,style:x,children:b,itemLayout:z,loadMore:C,grid:E,dataSource:O=[],size:k,header:A,footer:N,loading:B=!1,rowKey:w,renderItem:M,locale:P}=e,L=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i}(e,["pagination","prefixCls","bordered","split","className","rootClassName","style","children","itemLayout","loadMore","grid","dataSource","size","header","footer","loading","rowKey","renderItem","locale"]);const I=i&&"object"==typeof i?i:{},[H,W]=a.useState(I.defaultCurrent||1),[G,T]=a.useState(I.defaultPageSize||10),{getPrefixCls:X,renderEmpty:F,direction:R,list:D}=a.useContext(d.QO),Q=e=>(t,n)=>{var a;W(t),T(n),i&&i[e]&&(null===(a=null==i?void 0:i[e])||void 0===a||a.call(i,t,n))},V=Q("onChange"),J=Q("onShowSizeChange"),K=X("list",l),[_,q,Y]=j(K);let U=B;"boolean"==typeof U&&(U={spinning:U});const Z=U&&U.spinning;let ee="";switch((0,g.A)(k)){case"large":ee="lg";break;case"small":ee="sm"}const te=o()(K,{[`${K}-vertical`]:"vertical"===z,[`${K}-${ee}`]:ee,[`${K}-split`]:y,[`${K}-bordered`]:r,[`${K}-loading`]:Z,[`${K}-grid`]:!!E,[`${K}-something-after-last-item`]:!!(C||i||N),[`${K}-rtl`]:"rtl"===R},null==D?void 0:D.className,v,S,q,Y),ie=(0,s.A)({current:1,total:0},{total:O.length,current:H,pageSize:G},i||{}),ne=Math.ceil(ie.total/ie.pageSize);ie.current>ne&&(ie.current=ne);const ae=i?a.createElement("div",{className:o()(`${K}-pagination`,`${K}-pagination-align-${null!==(t=null==ie?void 0:ie.align)&&void 0!==t?t:"end"}`)},a.createElement(u.A,Object.assign({},ie,{onChange:V,onShowSizeChange:J}))):null;let le=(0,n.A)(O);i&&O.length>(ie.current-1)*ie.pageSize&&(le=(0,n.A)(O).splice((ie.current-1)*ie.pageSize,ie.pageSize));const re=Object.keys(E||{}).some((e=>["xs","sm","md","lg","xl","xxl"].includes(e))),oe=(0,$.A)(re),se=a.useMemo((()=>{for(let e=0;e<c.ye.length;e+=1){const t=c.ye[e];if(oe[t])return t}}),[oe]),ce=a.useMemo((()=>{if(!E)return;const e=se&&E[se]?E[se]:E.column;return e?{width:100/e+"%",maxWidth:100/e+"%"}:void 0}),[JSON.stringify(E),se]);let de=Z&&a.createElement("div",{style:{minHeight:53}});if(le.length>0){const e=le.map(((e,t)=>((e,t)=>{if(!M)return null;let i;return i="function"==typeof w?w(e):w?e[w]:e.key,i||(i=`list-item-${t}`),a.createElement(a.Fragment,{key:i},M(e,t))})(e,t)));de=E?a.createElement(p.A,{gutter:E.gutter},a.Children.map(e,(e=>a.createElement("div",{key:null==e?void 0:e.key,style:ce},e)))):a.createElement("ul",{className:`${K}-items`},e)}else b||Z||(de=a.createElement("div",{className:`${K}-empty-text`},P&&P.emptyText||(null==F?void 0:F("List"))||a.createElement(m.A,{componentName:"List"})));const me=ie.position||"bottom",ge=a.useMemo((()=>({grid:E,itemLayout:z})),[JSON.stringify(E),z]);return _(a.createElement(h.Provider,{value:ge},a.createElement("div",Object.assign({style:Object.assign(Object.assign({},null==D?void 0:D.style),x),className:te},L),("top"===me||"both"===me)&&ae,A&&a.createElement("div",{className:`${K}-header`},A),a.createElement(f.A,Object.assign({},U),de,b),N&&a.createElement("div",{className:`${K}-footer`},N),C||("bottom"===me||"both"===me)&&ae)))}w.Item=z;const M=w}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/5.0.3/7df6601622f257a72a5f66abc59e5e40/650.lite.js.map
