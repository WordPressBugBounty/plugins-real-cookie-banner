"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[716],{53029:(e,n,t)=>{t.d(n,{A:()=>o});var a=t(2464),i=t(41594);const r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"};var l=t(4679),c=function(e,n){return i.createElement(l.A,(0,a.A)({},e,{ref:n,icon:r}))};const o=i.forwardRef(c)},51192:(e,n,t)=>{t.d(n,{A:()=>w});var a=t(41594),i=t.n(a),r=t(65924),l=t.n(r),c=t(15220),o=t(82779),s=t(80840),d=t(52146),u=t(63829);const h=["wrap","nowrap","wrap-reverse"],g=["flex-start","flex-end","start","end","center","space-between","space-around","space-evenly","stretch","normal","left","right"],p=["center","start","end","flex-start","flex-end","self-start","self-end","baseline","normal","stretch"],m=e=>{const{componentCls:n}=e;return{[n]:{display:"flex","&-vertical":{flexDirection:"column"},"&-rtl":{direction:"rtl"},"&:empty":{display:"none"}}}},f=e=>{const{componentCls:n}=e;return{[n]:{"&-gap-small":{gap:e.flexGapSM},"&-gap-middle":{gap:e.flexGap},"&-gap-large":{gap:e.flexGapLG}}}},$=e=>{const{componentCls:n}=e,t={};return h.forEach((e=>{t[`${n}-wrap-${e}`]={flexWrap:e}})),t},b=e=>{const{componentCls:n}=e,t={};return p.forEach((e=>{t[`${n}-align-${e}`]={alignItems:e}})),t},k=e=>{const{componentCls:n}=e,t={};return g.forEach((e=>{t[`${n}-justify-${e}`]={justifyContent:e}})),t},S=(0,d.OF)("Flex",(e=>{const{paddingXS:n,padding:t,paddingLG:a}=e,i=(0,u.h1)(e,{flexGapSM:n,flexGap:t,flexGapLG:a});return[m(i),f(i),$(i),b(i),k(i)]}),(()=>({})),{resetStyle:!1});const v=i().forwardRef(((e,n)=>{const{prefixCls:t,rootClassName:a,className:r,style:d,flex:u,gap:m,children:f,vertical:$=!1,component:b="div"}=e,k=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)n.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]])}return t}(e,["prefixCls","rootClassName","className","style","flex","gap","children","vertical","component"]),{flex:v,direction:w,getPrefixCls:y}=i().useContext(s.QO),C=y("flex",t),[I,x,E]=S(C),O=null!=$?$:null==v?void 0:v.vertical,A=l()(r,a,null==v?void 0:v.className,C,x,E,function(e,n){return l()(Object.assign(Object.assign(Object.assign({},((e,n)=>{const t=!0===n.wrap?"wrap":n.wrap;return{[`${e}-wrap-${t}`]:t&&h.includes(t)}})(e,n)),((e,n)=>{const t={};return p.forEach((a=>{t[`${e}-align-${a}`]=n.align===a})),t[`${e}-align-stretch`]=!n.align&&!!n.vertical,t})(e,n)),((e,n)=>{const t={};return g.forEach((a=>{t[`${e}-justify-${a}`]=n.justify===a})),t})(e,n)))}(C,e),{[`${C}-rtl`]:"rtl"===w,[`${C}-gap-${m}`]:(0,o.X)(m),[`${C}-vertical`]:O}),M=Object.assign(Object.assign({},null==v?void 0:v.style),d);return u&&(M.flex=u),m&&!(0,o.X)(m)&&(M.gap=m),I(i().createElement(b,Object.assign({ref:n,className:A,style:M},(0,c.A)(k,["justify","wrap","align"])),f))})),w=v},19393:(e,n,t)=>{t.d(n,{A:()=>N});var a=t(41594),i=t(9066),r=t(65924),l=t.n(r),c=t(2464),o=t(21483),s=t(61129),d=t(4105),u=t(74188),h=t(81739),g=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],p=a.forwardRef((function(e,n){var t,i=e.prefixCls,r=void 0===i?"rc-switch":i,p=e.className,m=e.checked,f=e.defaultChecked,$=e.disabled,b=e.loadingIcon,k=e.checkedChildren,S=e.unCheckedChildren,v=e.onClick,w=e.onChange,y=e.onKeyDown,C=(0,d.A)(e,g),I=(0,u.A)(!1,{value:m,defaultValue:f}),x=(0,s.A)(I,2),E=x[0],O=x[1];function A(e,n){var t=E;return $||(O(t=e),null==w||w(t,n)),t}var M=l()(r,p,(t={},(0,o.A)(t,"".concat(r,"-checked"),E),(0,o.A)(t,"".concat(r,"-disabled"),$),t));return a.createElement("button",(0,c.A)({},C,{type:"button",role:"switch","aria-checked":E,disabled:$,className:M,ref:n,onKeyDown:function(e){e.which===h.A.LEFT?A(!1,e):e.which===h.A.RIGHT&&A(!0,e),null==y||y(e)},onClick:function(e){var n=A(!E,e);null==v||v(n,e)}}),b,a.createElement("span",{className:"".concat(r,"-inner")},a.createElement("span",{className:"".concat(r,"-inner-checked")},k),a.createElement("span",{className:"".concat(r,"-inner-unchecked")},S)))}));p.displayName="Switch";const m=p;var f=t(32398),$=t(80840),b=t(77648),k=t(31754),S=t(78052),v=t(26411),w=t(71094),y=t(52146),C=t(63829);const I=e=>{const{componentCls:n,trackHeightSM:t,trackPadding:a,trackMinWidthSM:i,innerMinMarginSM:r,innerMaxMarginSM:l,handleSizeSM:c,calc:o}=e,s=`${n}-inner`,d=(0,S.zA)(o(c).add(o(a).mul(2)).equal()),u=(0,S.zA)(o(l).mul(2).equal());return{[n]:{[`&${n}-small`]:{minWidth:i,height:t,lineHeight:(0,S.zA)(t),[`${n}-inner`]:{paddingInlineStart:l,paddingInlineEnd:r,[`${s}-checked, ${s}-unchecked`]:{minHeight:t},[`${s}-checked`]:{marginInlineStart:`calc(-100% + ${d} - ${u})`,marginInlineEnd:`calc(100% - ${d} + ${u})`},[`${s}-unchecked`]:{marginTop:o(t).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0}},[`${n}-handle`]:{width:c,height:c},[`${n}-loading-icon`]:{top:o(o(c).sub(e.switchLoadingIconSize)).div(2).equal(),fontSize:e.switchLoadingIconSize},[`&${n}-checked`]:{[`${n}-inner`]:{paddingInlineStart:r,paddingInlineEnd:l,[`${s}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${s}-unchecked`]:{marginInlineStart:`calc(100% - ${d} + ${u})`,marginInlineEnd:`calc(-100% + ${d} - ${u})`}},[`${n}-handle`]:{insetInlineStart:`calc(100% - ${(0,S.zA)(o(c).add(a).equal())})`}},[`&:not(${n}-disabled):active`]:{[`&:not(${n}-checked) ${s}`]:{[`${s}-unchecked`]:{marginInlineStart:o(e.marginXXS).div(2).equal(),marginInlineEnd:o(e.marginXXS).mul(-1).div(2).equal()}},[`&${n}-checked ${s}`]:{[`${s}-checked`]:{marginInlineStart:o(e.marginXXS).mul(-1).div(2).equal(),marginInlineEnd:o(e.marginXXS).div(2).equal()}}}}}}},x=e=>{const{componentCls:n,handleSize:t,calc:a}=e;return{[n]:{[`${n}-loading-icon${e.iconCls}`]:{position:"relative",top:a(a(t).sub(e.fontSize)).div(2).equal(),color:e.switchLoadingIconColor,verticalAlign:"top"},[`&${n}-checked ${n}-loading-icon`]:{color:e.switchColor}}}},E=e=>{const{componentCls:n,trackPadding:t,handleBg:a,handleShadow:i,handleSize:r,calc:l}=e,c=`${n}-handle`;return{[n]:{[c]:{position:"absolute",top:t,insetInlineStart:t,width:r,height:r,transition:`all ${e.switchDuration} ease-in-out`,"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:a,borderRadius:l(r).div(2).equal(),boxShadow:i,transition:`all ${e.switchDuration} ease-in-out`,content:'""'}},[`&${n}-checked ${c}`]:{insetInlineStart:`calc(100% - ${(0,S.zA)(l(r).add(t).equal())})`},[`&:not(${n}-disabled):active`]:{[`${c}::before`]:{insetInlineEnd:e.switchHandleActiveInset,insetInlineStart:0},[`&${n}-checked ${c}::before`]:{insetInlineEnd:0,insetInlineStart:e.switchHandleActiveInset}}}}},O=e=>{const{componentCls:n,trackHeight:t,trackPadding:a,innerMinMargin:i,innerMaxMargin:r,handleSize:l,calc:c}=e,o=`${n}-inner`,s=(0,S.zA)(c(l).add(c(a).mul(2)).equal()),d=(0,S.zA)(c(r).mul(2).equal());return{[n]:{[o]:{display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:r,paddingInlineEnd:i,transition:`padding-inline-start ${e.switchDuration} ease-in-out, padding-inline-end ${e.switchDuration} ease-in-out`,[`${o}-checked, ${o}-unchecked`]:{display:"block",color:e.colorTextLightSolid,fontSize:e.fontSizeSM,transition:`margin-inline-start ${e.switchDuration} ease-in-out, margin-inline-end ${e.switchDuration} ease-in-out`,pointerEvents:"none",minHeight:t},[`${o}-checked`]:{marginInlineStart:`calc(-100% + ${s} - ${d})`,marginInlineEnd:`calc(100% - ${s} + ${d})`},[`${o}-unchecked`]:{marginTop:c(t).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0}},[`&${n}-checked ${o}`]:{paddingInlineStart:i,paddingInlineEnd:r,[`${o}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${o}-unchecked`]:{marginInlineStart:`calc(100% - ${s} + ${d})`,marginInlineEnd:`calc(-100% + ${s} - ${d})`}},[`&:not(${n}-disabled):active`]:{[`&:not(${n}-checked) ${o}`]:{[`${o}-unchecked`]:{marginInlineStart:c(a).mul(2).equal(),marginInlineEnd:c(a).mul(-1).mul(2).equal()}},[`&${n}-checked ${o}`]:{[`${o}-checked`]:{marginInlineStart:c(a).mul(-1).mul(2).equal(),marginInlineEnd:c(a).mul(2).equal()}}}}}},A=e=>{const{componentCls:n,trackHeight:t,trackMinWidth:a}=e;return{[n]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,w.dF)(e)),{position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:a,height:t,lineHeight:`${(0,S.zA)(t)}`,verticalAlign:"middle",background:e.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:`all ${e.motionDurationMid}`,userSelect:"none",[`&:hover:not(${n}-disabled)`]:{background:e.colorTextTertiary}}),(0,w.K8)(e)),{[`&${n}-checked`]:{background:e.switchColor,[`&:hover:not(${n}-disabled)`]:{background:e.colorPrimaryHover}},[`&${n}-loading, &${n}-disabled`]:{cursor:"not-allowed",opacity:e.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}},[`&${n}-rtl`]:{direction:"rtl"}})}},M=(0,y.OF)("Switch",(e=>{const n=(0,C.h1)(e,{switchDuration:e.motionDurationMid,switchColor:e.colorPrimary,switchDisabledOpacity:e.opacityLoading,switchLoadingIconSize:e.calc(e.fontSizeIcon).mul(.75).equal(),switchLoadingIconColor:`rgba(0, 0, 0, ${e.opacityLoading})`,switchHandleActiveInset:"-30%"});return[A(n),O(n),E(n),x(n),I(n)]}),(e=>{const{fontSize:n,lineHeight:t,controlHeight:a,colorWhite:i}=e,r=n*t,l=a/2,c=r-4,o=l-4;return{trackHeight:r,trackHeightSM:l,trackMinWidth:2*c+8,trackMinWidthSM:2*o+4,trackPadding:2,handleBg:i,handleSize:c,handleSizeSM:o,handleShadow:`0 2px 4px 0 ${new v.q("#00230b").setAlpha(.2).toRgbString()}`,innerMinMargin:c/2,innerMaxMargin:c+2+4,innerMinMarginSM:o/2,innerMaxMarginSM:o+2+4}}));const j=a.forwardRef(((e,n)=>{const{prefixCls:t,size:r,disabled:c,loading:o,className:s,rootClassName:d,style:h,checked:g,value:p,defaultChecked:S,defaultValue:v,onChange:w}=e,y=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)n.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]])}return t}(e,["prefixCls","size","disabled","loading","className","rootClassName","style","checked","value","defaultChecked","defaultValue","onChange"]),[C,I]=(0,u.A)(!1,{value:null!=g?g:p,defaultValue:null!=S?S:v}),{getPrefixCls:x,direction:E,switch:O}=a.useContext($.QO),A=a.useContext(b.A),j=(null!=c?c:A)||o,z=x("switch",t),N=a.createElement("div",{className:`${z}-handle`},o&&a.createElement(i.A,{className:`${z}-loading-icon`})),[q,_,L]=M(z),D=(0,k.A)(r),H=l()(null==O?void 0:O.className,{[`${z}-small`]:"small"===D,[`${z}-loading`]:o,[`${z}-rtl`]:"rtl"===E},s,d,_,L),P=Object.assign(Object.assign({},null==O?void 0:O.style),h);return q(a.createElement(f.A,{component:"Switch"},a.createElement(m,Object.assign({},y,{checked:C,onChange:function(){I(arguments.length<=0?void 0:arguments[0]),null==w||w.apply(void 0,arguments)},prefixCls:z,className:H,style:P,disabled:j,ref:n,loadingIcon:N}))))})),z=j;z.__ANT_SWITCH=!0;const N=z},84255:(e,n,t)=>{t.d(n,{Ay:()=>d});var a,i=t(41594),r=t(69665),l={exports:{}},c={};l.exports=function(){if(a)return c;a=1;var e=i,n=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,l=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,a){var i,c={},s=null,d=null;for(i in void 0!==a&&(s=""+a),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(d=t.ref),t)r.call(t,i)&&!o.hasOwnProperty(i)&&(c[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===c[i]&&(c[i]=t[i]);return{$$typeof:n,type:e,key:s,ref:d,props:c,_owner:l.current}}return c.Fragment=t,c.jsx=s,c.jsxs=s,c}();var o=l.exports;const s=e=>{const n=function(e){const n=(0,r.useBlocker)(e);return(0,i.useEffect)((()=>{"blocked"===n.state&&!e&&n.reset()}),[n,e]),(0,r.useBeforeUnload)((0,i.useCallback)((n=>{("boolean"==typeof e&&!0===e||"function"==typeof e&&e())&&(n.preventDefault(),n.returnValue="Changes that you made may not be saved.")}),[e]),{capture:!0}),n}(e);return{isActive:"blocked"===n.state,onConfirm:()=>{"blocked"===n.state&&setTimeout(n.proceed,0)},resetConfirmation:()=>{"blocked"===n.state&&n.reset()}}};function d({when:e,children:n,beforeCancel:t,beforeConfirm:a}){const{isActive:r,onConfirm:l,resetConfirmation:c}=s(e),d=(0,i.useCallback)((async()=>{a&&await a(),l()}),[a,l]),u=(0,i.useCallback)((async()=>{t&&await t(),c()}),[t,c]);return r?o.jsx(o.Fragment,{children:n({isActive:!0,onConfirm:d,onCancel:u})}):null}}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/5.0.11/e6f1d8c7f6aafcab576ee948231b4c17/716.lite.js.map
