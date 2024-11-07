"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[493],{4509:(e,n,a)=>{a.d(n,{A:()=>c});var o=a(2464),t=a(41594);const r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M300 276.5a56 56 0 1056-97 56 56 0 00-56 97zm0 284a56 56 0 1056-97 56 56 0 00-56 97zM640 228a56 56 0 10112 0 56 56 0 00-112 0zm0 284a56 56 0 10112 0 56 56 0 00-112 0zM300 844.5a56 56 0 1056-97 56 56 0 00-56 97zM640 796a56 56 0 10112 0 56 56 0 00-112 0z"}}]},name:"holder",theme:"outlined"};var i=a(4679),l=function(e,n){return t.createElement(i.A,(0,o.A)({},e,{ref:n,icon:r}))};const c=t.forwardRef(l)},27465:(e,n,a)=>{a.d(n,{A:()=>Q});var o=a(41594),t=a.n(o),r=a(52066),i=a(65924),l=a.n(i),c=a(2464),d=a(18539),s=a(61129),p=a(81188),u=a(74188),m=a(33717),f=a(4105),g=a(51963),b=a(21483),v=a(88816),h=a(81739),$=t().forwardRef((function(e,n){var a=e.prefixCls,o=e.forceRender,r=e.className,i=e.style,c=e.children,d=e.isActive,p=e.role,u=t().useState(d||o),m=(0,s.A)(u,2),f=m[0],g=m[1];return t().useEffect((function(){(o||d)&&g(!0)}),[o,d]),f?t().createElement("div",{ref:n,className:l()("".concat(a,"-content"),(0,b.A)((0,b.A)({},"".concat(a,"-content-active"),d),"".concat(a,"-content-inactive"),!d),r),style:i,role:p},t().createElement("div",{className:"".concat(a,"-content-box")},c)):null}));$.displayName="PanelContent";const x=$;var A=["showArrow","headerClass","isActive","onItemClick","forceRender","className","prefixCls","collapsible","accordion","panelKey","extra","header","expandIcon","openMotion","destroyInactivePanel","children"];const y=t().forwardRef((function(e,n){var a=e.showArrow,o=void 0===a||a,r=e.headerClass,i=e.isActive,d=e.onItemClick,s=e.forceRender,p=e.className,u=e.prefixCls,m=e.collapsible,g=e.accordion,$=e.panelKey,y=e.extra,C=e.header,I=e.expandIcon,k=e.openMotion,N=e.destroyInactivePanel,P=e.children,w=(0,f.A)(e,A),E="disabled"===m,S="header"===m,O="icon"===m,M=null!=y&&"boolean"!=typeof y,z=function(){null==d||d($)},R="function"==typeof I?I(e):t().createElement("i",{className:"arrow"});R&&(R=t().createElement("div",{className:"".concat(u,"-expand-icon"),onClick:["header","icon"].includes(m)?z:void 0},R));var B=l()((0,b.A)((0,b.A)((0,b.A)({},"".concat(u,"-item"),!0),"".concat(u,"-item-active"),i),"".concat(u,"-item-disabled"),E),p),j={className:l()(r,(0,b.A)((0,b.A)((0,b.A)({},"".concat(u,"-header"),!0),"".concat(u,"-header-collapsible-only"),S),"".concat(u,"-icon-collapsible-only"),O)),"aria-expanded":i,"aria-disabled":E,onKeyDown:function(e){"Enter"!==e.key&&e.keyCode!==h.A.ENTER&&e.which!==h.A.ENTER||z()}};return S||O||(j.onClick=z,j.role=g?"tab":"button",j.tabIndex=E?-1:0),t().createElement("div",(0,c.A)({},w,{ref:n,className:B}),t().createElement("div",j,o&&R,t().createElement("span",{className:"".concat(u,"-header-text"),onClick:"header"===m?z:void 0},C),M&&t().createElement("div",{className:"".concat(u,"-extra")},y)),t().createElement(v.Ay,(0,c.A)({visible:i,leavedClassName:"".concat(u,"-content-hidden")},k,{forceRender:s,removeOnLeave:N}),(function(e,n){var a=e.className,o=e.style;return t().createElement(x,{ref:n,prefixCls:u,className:a,style:o,isActive:i,forceRender:s,role:g?"tabpanel":void 0},P)})))}));var C=["children","label","key","collapsible","onItemClick","destroyInactivePanel"];var I=a(35658);function k(e){var n=e;if(!Array.isArray(n)){var a=(0,p.A)(n);n="number"===a||"string"===a?[n]:[]}return n.map((function(e){return String(e)}))}var N=t().forwardRef((function(e,n){var a=e.prefixCls,o=void 0===a?"rc-collapse":a,r=e.destroyInactivePanel,i=void 0!==r&&r,p=e.style,b=e.accordion,v=e.className,h=e.children,$=e.collapsible,x=e.openMotion,A=e.expandIcon,N=e.activeKey,P=e.defaultActiveKey,w=e.onChange,E=e.items,S=l()(o,v),O=(0,u.A)([],{value:N,onChange:function(e){return null==w?void 0:w(e)},defaultValue:P,postState:k}),M=(0,s.A)(O,2),z=M[0],R=M[1];(0,m.Ay)(!h,"[rc-collapse] `children` will be removed in next major version. Please use `items` instead.");var B=function(e,n,a){return Array.isArray(e)?function(e,n){var a=n.prefixCls,o=n.accordion,r=n.collapsible,i=n.destroyInactivePanel,l=n.onItemClick,d=n.activeKey,s=n.openMotion,p=n.expandIcon;return e.map((function(e,n){var u,m=e.children,g=e.label,b=e.key,v=e.collapsible,h=e.onItemClick,$=e.destroyInactivePanel,x=(0,f.A)(e,C),A=String(null!=b?b:n),I=null!=v?v:r,k=null!=$?$:i;return u=o?d[0]===A:d.indexOf(A)>-1,t().createElement(y,(0,c.A)({},x,{prefixCls:a,key:A,panelKey:A,isActive:u,accordion:o,openMotion:s,expandIcon:p,header:g,collapsible:I,onItemClick:function(e){"disabled"!==I&&(l(e),null==h||h(e))},destroyInactivePanel:k}),m)}))}(e,a):(0,g.A)(n).map((function(e,n){return function(e,n,a){if(!e)return null;var o,r=a.prefixCls,i=a.accordion,l=a.collapsible,c=a.destroyInactivePanel,d=a.onItemClick,s=a.activeKey,p=a.openMotion,u=a.expandIcon,m=e.key||String(n),f=e.props,g=f.header,b=f.headerClass,v=f.destroyInactivePanel,h=f.collapsible,$=f.onItemClick;o=i?s[0]===m:s.indexOf(m)>-1;var x=null!=h?h:l,A={key:m,panelKey:m,header:g,headerClass:b,isActive:o,prefixCls:r,destroyInactivePanel:null!=v?v:c,openMotion:p,accordion:i,children:e.props.children,onItemClick:function(e){"disabled"!==x&&(d(e),null==$||$(e))},expandIcon:u,collapsible:x};return"string"==typeof e.type?e:(Object.keys(A).forEach((function(e){void 0===A[e]&&delete A[e]})),t().cloneElement(e,A))}(e,n,a)}))}(E,h,{prefixCls:o,accordion:b,openMotion:x,expandIcon:A,collapsible:$,destroyInactivePanel:i,onItemClick:function(e){return R((function(){return b?z[0]===e?[]:[e]:z.indexOf(e)>-1?z.filter((function(n){return n!==e})):[].concat((0,d.A)(z),[e])}))},activeKey:z});return t().createElement("div",(0,c.A)({ref:n,className:S,style:p,role:b?"tablist":void 0},(0,I.A)(e,{aria:!0,data:!0})),B)}));const P=Object.assign(N,{Panel:y}),w=P;P.Panel;var E=a(15220),S=a(17826),O=a(79045),M=a(80840),z=a(31754);const R=o.forwardRef(((e,n)=>{const{getPrefixCls:a}=o.useContext(M.QO),{prefixCls:t,className:r,showArrow:i=!0}=e,c=a("collapse",t),d=l()({[`${c}-no-arrow`]:!i},r);return o.createElement(w.Panel,Object.assign({ref:n},e,{prefixCls:c,className:d}))}));var B=a(78052),j=a(71094),H=a(81170),K=a(52146),L=a(63829);const T=e=>{const{componentCls:n,contentBg:a,padding:o,headerBg:t,headerPadding:r,collapseHeaderPaddingSM:i,collapseHeaderPaddingLG:l,collapsePanelBorderRadius:c,lineWidth:d,lineType:s,colorBorder:p,colorText:u,colorTextHeading:m,colorTextDisabled:f,fontSizeLG:g,lineHeight:b,lineHeightLG:v,marginSM:h,paddingSM:$,paddingLG:x,paddingXS:A,motionDurationSlow:y,fontSizeIcon:C,contentPadding:I,fontHeight:k,fontHeightLG:N}=e,P=`${(0,B.zA)(d)} ${s} ${p}`;return{[n]:Object.assign(Object.assign({},(0,j.dF)(e)),{backgroundColor:t,border:P,borderRadius:c,"&-rtl":{direction:"rtl"},[`& > ${n}-item`]:{borderBottom:P,"&:last-child":{[`\n            &,\n            & > ${n}-header`]:{borderRadius:`0 0 ${(0,B.zA)(c)} ${(0,B.zA)(c)}`}},[`> ${n}-header`]:{position:"relative",display:"flex",flexWrap:"nowrap",alignItems:"flex-start",padding:r,color:m,lineHeight:b,cursor:"pointer",transition:`all ${y}, visibility 0s`,[`> ${n}-header-text`]:{flex:"auto"},"&:focus":{outline:"none"},[`${n}-expand-icon`]:{height:k,display:"flex",alignItems:"center",paddingInlineEnd:h},[`${n}-arrow`]:Object.assign(Object.assign({},(0,j.Nk)()),{fontSize:C,transition:`transform ${y}`,svg:{transition:`transform ${y}`}}),[`${n}-header-text`]:{marginInlineEnd:"auto"}},[`${n}-icon-collapsible-only`]:{cursor:"unset",[`${n}-expand-icon`]:{cursor:"pointer"}}},[`${n}-content`]:{color:u,backgroundColor:a,borderTop:P,[`& > ${n}-content-box`]:{padding:I},"&-hidden":{display:"none"}},"&-small":{[`> ${n}-item`]:{[`> ${n}-header`]:{padding:i,paddingInlineStart:A,[`> ${n}-expand-icon`]:{marginInlineStart:e.calc($).sub(A).equal()}},[`> ${n}-content > ${n}-content-box`]:{padding:$}}},"&-large":{[`> ${n}-item`]:{fontSize:g,lineHeight:v,[`> ${n}-header`]:{padding:l,paddingInlineStart:o,[`> ${n}-expand-icon`]:{height:N,marginInlineStart:e.calc(x).sub(o).equal()}},[`> ${n}-content > ${n}-content-box`]:{padding:x}}},[`${n}-item:last-child`]:{borderBottom:0,[`> ${n}-content`]:{borderRadius:`0 0 ${(0,B.zA)(c)} ${(0,B.zA)(c)}`}},[`& ${n}-item-disabled > ${n}-header`]:{"\n          &,\n          & > .arrow\n        ":{color:f,cursor:"not-allowed"}},[`&${n}-icon-position-end`]:{[`& > ${n}-item`]:{[`> ${n}-header`]:{[`${n}-expand-icon`]:{order:1,paddingInlineEnd:0,paddingInlineStart:h}}}}})}},G=e=>{const{componentCls:n}=e,a=`> ${n}-item > ${n}-header ${n}-arrow`;return{[`${n}-rtl`]:{[a]:{transform:"rotate(180deg)"}}}},X=e=>{const{componentCls:n,headerBg:a,paddingXXS:o,colorBorder:t}=e;return{[`${n}-borderless`]:{backgroundColor:a,border:0,[`> ${n}-item`]:{borderBottom:`1px solid ${t}`},[`\n        > ${n}-item:last-child,\n        > ${n}-item:last-child ${n}-header\n      `]:{borderRadius:0},[`> ${n}-item:last-child`]:{borderBottom:0},[`> ${n}-item > ${n}-content`]:{backgroundColor:"transparent",borderTop:0},[`> ${n}-item > ${n}-content > ${n}-content-box`]:{paddingTop:o}}}},D=e=>{const{componentCls:n,paddingSM:a}=e;return{[`${n}-ghost`]:{backgroundColor:"transparent",border:0,[`> ${n}-item`]:{borderBottom:0,[`> ${n}-content`]:{backgroundColor:"transparent",border:0,[`> ${n}-content-box`]:{paddingBlock:a}}}}}},F=(0,K.OF)("Collapse",(e=>{const n=(0,L.h1)(e,{collapseHeaderPaddingSM:`${(0,B.zA)(e.paddingXS)} ${(0,B.zA)(e.paddingSM)}`,collapseHeaderPaddingLG:`${(0,B.zA)(e.padding)} ${(0,B.zA)(e.paddingLG)}`,collapsePanelBorderRadius:e.borderRadiusLG});return[T(n),X(n),D(n),G(n),(0,H.A)(n)]}),(e=>({headerPadding:`${e.paddingSM}px ${e.padding}px`,headerBg:e.colorFillAlter,contentPadding:`${e.padding}px 16px`,contentBg:e.colorBgContainer}))),q=o.forwardRef(((e,n)=>{const{getPrefixCls:a,direction:t,collapse:i}=o.useContext(M.QO),{prefixCls:c,className:d,rootClassName:s,style:p,bordered:u=!0,ghost:m,size:f,expandIconPosition:b="start",children:v,expandIcon:h}=e,$=(0,z.A)((e=>{var n;return null!==(n=null!=f?f:e)&&void 0!==n?n:"middle"})),x=a("collapse",c),A=a(),[y,C,I]=F(x),k=o.useMemo((()=>"left"===b?"start":"right"===b?"end":b),[b]),N=null!=h?h:null==i?void 0:i.expandIcon,P=o.useCallback((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const n="function"==typeof N?N(e):o.createElement(r.A,{rotate:e.isActive?90:void 0});return(0,O.Ob)(n,(()=>{var e;return{className:l()(null===(e=null==n?void 0:n.props)||void 0===e?void 0:e.className,`${x}-arrow`)}}))}),[N,x]),R=l()(`${x}-icon-position-${k}`,{[`${x}-borderless`]:!u,[`${x}-rtl`]:"rtl"===t,[`${x}-ghost`]:!!m,[`${x}-${$}`]:"middle"!==$},null==i?void 0:i.className,d,s,C,I),B=Object.assign(Object.assign({},(0,S.A)(A)),{motionAppear:!1,leavedClassName:`${x}-content-hidden`}),j=o.useMemo((()=>v?(0,g.A)(v).map(((e,n)=>{var a,o;if(null===(a=e.props)||void 0===a?void 0:a.disabled){const a=null!==(o=e.key)&&void 0!==o?o:String(n),{disabled:t,collapsible:r}=e.props,i=Object.assign(Object.assign({},(0,E.A)(e.props,["disabled"])),{key:a,collapsible:null!=r?r:t?"disabled":void 0});return(0,O.Ob)(e,i)}return e})):null),[v]);return y(o.createElement(w,Object.assign({ref:n,openMotion:B},(0,E.A)(e,["rootClassName"]),{expandIcon:P,prefixCls:x,className:R,style:Object.assign(Object.assign({},null==i?void 0:i.style),p)}),j))})),Q=Object.assign(q,{Panel:R})}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/5.0.0/bd99a6ceadc602c54a9728cb4f55cf2e/493.lite.js.map
