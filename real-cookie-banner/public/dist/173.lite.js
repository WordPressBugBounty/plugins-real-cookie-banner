(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[173],{19393:(n,e,i)=>{"use strict";i.d(e,{A:()=>H});var t=i(41594),a=i(9066),l=i(65924),r=i.n(l),c=i(2464),o=i(21483),d=i(61129),s=i(4105),u=i(74188),h=i(81739),g=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],m=t.forwardRef((function(n,e){var i,a=n.prefixCls,l=void 0===a?"rc-switch":a,m=n.className,$=n.checked,f=n.defaultChecked,k=n.disabled,p=n.loadingIcon,b=n.checkedChildren,S=n.unCheckedChildren,w=n.onClick,I=n.onChange,v=n.onKeyDown,C=(0,s.A)(n,g),y=(0,u.A)(!1,{value:$,defaultValue:f}),A=(0,d.A)(y,2),M=A[0],E=A[1];function z(n,e){var i=M;return k||(E(i=n),null==I||I(i,e)),i}var x=r()(l,m,(i={},(0,o.A)(i,"".concat(l,"-checked"),M),(0,o.A)(i,"".concat(l,"-disabled"),k),i));return t.createElement("button",(0,c.A)({},C,{type:"button",role:"switch","aria-checked":M,disabled:k,className:x,ref:e,onKeyDown:function(n){n.which===h.A.LEFT?z(!1,n):n.which===h.A.RIGHT&&z(!0,n),null==v||v(n)},onClick:function(n){var e=z(!M,n);null==w||w(e,n)}}),p,t.createElement("span",{className:"".concat(l,"-inner")},t.createElement("span",{className:"".concat(l,"-inner-checked")},b),t.createElement("span",{className:"".concat(l,"-inner-unchecked")},S)))}));m.displayName="Switch";const $=m;var f=i(32398),k=i(80840),p=i(77648),b=i(31754),S=i(78052),w=i(26411),I=i(71094),v=i(52146),C=i(63829);const y=n=>{const{componentCls:e,trackHeightSM:i,trackPadding:t,trackMinWidthSM:a,innerMinMarginSM:l,innerMaxMarginSM:r,handleSizeSM:c,calc:o}=n,d=`${e}-inner`,s=(0,S.zA)(o(c).add(o(t).mul(2)).equal()),u=(0,S.zA)(o(r).mul(2).equal());return{[e]:{[`&${e}-small`]:{minWidth:a,height:i,lineHeight:(0,S.zA)(i),[`${e}-inner`]:{paddingInlineStart:r,paddingInlineEnd:l,[`${d}-checked, ${d}-unchecked`]:{minHeight:i},[`${d}-checked`]:{marginInlineStart:`calc(-100% + ${s} - ${u})`,marginInlineEnd:`calc(100% - ${s} + ${u})`},[`${d}-unchecked`]:{marginTop:o(i).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0}},[`${e}-handle`]:{width:c,height:c},[`${e}-loading-icon`]:{top:o(o(c).sub(n.switchLoadingIconSize)).div(2).equal(),fontSize:n.switchLoadingIconSize},[`&${e}-checked`]:{[`${e}-inner`]:{paddingInlineStart:l,paddingInlineEnd:r,[`${d}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${d}-unchecked`]:{marginInlineStart:`calc(100% - ${s} + ${u})`,marginInlineEnd:`calc(-100% + ${s} - ${u})`}},[`${e}-handle`]:{insetInlineStart:`calc(100% - ${(0,S.zA)(o(c).add(t).equal())})`}},[`&:not(${e}-disabled):active`]:{[`&:not(${e}-checked) ${d}`]:{[`${d}-unchecked`]:{marginInlineStart:o(n.marginXXS).div(2).equal(),marginInlineEnd:o(n.marginXXS).mul(-1).div(2).equal()}},[`&${e}-checked ${d}`]:{[`${d}-checked`]:{marginInlineStart:o(n.marginXXS).mul(-1).div(2).equal(),marginInlineEnd:o(n.marginXXS).div(2).equal()}}}}}}},A=n=>{const{componentCls:e,handleSize:i,calc:t}=n;return{[e]:{[`${e}-loading-icon${n.iconCls}`]:{position:"relative",top:t(t(i).sub(n.fontSize)).div(2).equal(),color:n.switchLoadingIconColor,verticalAlign:"top"},[`&${e}-checked ${e}-loading-icon`]:{color:n.switchColor}}}},M=n=>{const{componentCls:e,trackPadding:i,handleBg:t,handleShadow:a,handleSize:l,calc:r}=n,c=`${e}-handle`;return{[e]:{[c]:{position:"absolute",top:i,insetInlineStart:i,width:l,height:l,transition:`all ${n.switchDuration} ease-in-out`,"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:t,borderRadius:r(l).div(2).equal(),boxShadow:a,transition:`all ${n.switchDuration} ease-in-out`,content:'""'}},[`&${e}-checked ${c}`]:{insetInlineStart:`calc(100% - ${(0,S.zA)(r(l).add(i).equal())})`},[`&:not(${e}-disabled):active`]:{[`${c}::before`]:{insetInlineEnd:n.switchHandleActiveInset,insetInlineStart:0},[`&${e}-checked ${c}::before`]:{insetInlineEnd:0,insetInlineStart:n.switchHandleActiveInset}}}}},E=n=>{const{componentCls:e,trackHeight:i,trackPadding:t,innerMinMargin:a,innerMaxMargin:l,handleSize:r,calc:c}=n,o=`${e}-inner`,d=(0,S.zA)(c(r).add(c(t).mul(2)).equal()),s=(0,S.zA)(c(l).mul(2).equal());return{[e]:{[o]:{display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:l,paddingInlineEnd:a,transition:`padding-inline-start ${n.switchDuration} ease-in-out, padding-inline-end ${n.switchDuration} ease-in-out`,[`${o}-checked, ${o}-unchecked`]:{display:"block",color:n.colorTextLightSolid,fontSize:n.fontSizeSM,transition:`margin-inline-start ${n.switchDuration} ease-in-out, margin-inline-end ${n.switchDuration} ease-in-out`,pointerEvents:"none",minHeight:i},[`${o}-checked`]:{marginInlineStart:`calc(-100% + ${d} - ${s})`,marginInlineEnd:`calc(100% - ${d} + ${s})`},[`${o}-unchecked`]:{marginTop:c(i).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0}},[`&${e}-checked ${o}`]:{paddingInlineStart:a,paddingInlineEnd:l,[`${o}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${o}-unchecked`]:{marginInlineStart:`calc(100% - ${d} + ${s})`,marginInlineEnd:`calc(-100% + ${d} - ${s})`}},[`&:not(${e}-disabled):active`]:{[`&:not(${e}-checked) ${o}`]:{[`${o}-unchecked`]:{marginInlineStart:c(t).mul(2).equal(),marginInlineEnd:c(t).mul(-1).mul(2).equal()}},[`&${e}-checked ${o}`]:{[`${o}-checked`]:{marginInlineStart:c(t).mul(-1).mul(2).equal(),marginInlineEnd:c(t).mul(2).equal()}}}}}},z=n=>{const{componentCls:e,trackHeight:i,trackMinWidth:t}=n;return{[e]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,I.dF)(n)),{position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:t,height:i,lineHeight:`${(0,S.zA)(i)}`,verticalAlign:"middle",background:n.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:`all ${n.motionDurationMid}`,userSelect:"none",[`&:hover:not(${e}-disabled)`]:{background:n.colorTextTertiary}}),(0,I.K8)(n)),{[`&${e}-checked`]:{background:n.switchColor,[`&:hover:not(${e}-disabled)`]:{background:n.colorPrimaryHover}},[`&${e}-loading, &${e}-disabled`]:{cursor:"not-allowed",opacity:n.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}},[`&${e}-rtl`]:{direction:"rtl"}})}},x=(0,v.OF)("Switch",(n=>{const e=(0,C.h1)(n,{switchDuration:n.motionDurationMid,switchColor:n.colorPrimary,switchDisabledOpacity:n.opacityLoading,switchLoadingIconSize:n.calc(n.fontSizeIcon).mul(.75).equal(),switchLoadingIconColor:`rgba(0, 0, 0, ${n.opacityLoading})`,switchHandleActiveInset:"-30%"});return[z(e),E(e),M(e),A(e),y(e)]}),(n=>{const{fontSize:e,lineHeight:i,controlHeight:t,colorWhite:a}=n,l=e*i,r=t/2,c=l-4,o=r-4;return{trackHeight:l,trackHeightSM:r,trackMinWidth:2*c+8,trackMinWidthSM:2*o+4,trackPadding:2,handleBg:a,handleSize:c,handleSizeSM:o,handleShadow:`0 2px 4px 0 ${new w.q("#00230b").setAlpha(.2).toRgbString()}`,innerMinMargin:c/2,innerMaxMargin:c+2+4,innerMinMarginSM:o/2,innerMaxMarginSM:o+2+4}}));const q=t.forwardRef(((n,e)=>{const{prefixCls:i,size:l,disabled:c,loading:o,className:d,rootClassName:s,style:h,checked:g,value:m,defaultChecked:S,defaultValue:w,onChange:I}=n,v=function(n,e){var i={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(i[t]=n[t]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(t=Object.getOwnPropertySymbols(n);a<t.length;a++)e.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(n,t[a])&&(i[t[a]]=n[t[a]])}return i}(n,["prefixCls","size","disabled","loading","className","rootClassName","style","checked","value","defaultChecked","defaultValue","onChange"]),[C,y]=(0,u.A)(!1,{value:null!=g?g:m,defaultValue:null!=S?S:w}),{getPrefixCls:A,direction:M,switch:E}=t.useContext(k.QO),z=t.useContext(p.A),q=(null!=c?c:z)||o,O=A("switch",i),H=t.createElement("div",{className:`${O}-handle`},o&&t.createElement(a.A,{className:`${O}-loading-icon`})),[N,T,j]=x(O),D=(0,b.A)(l),P=r()(null==E?void 0:E.className,{[`${O}-small`]:"small"===D,[`${O}-loading`]:o,[`${O}-rtl`]:"rtl"===M},d,s,T,j),R=Object.assign(Object.assign({},null==E?void 0:E.style),h);return N(t.createElement(f.A,{component:"Switch"},t.createElement($,Object.assign({},v,{checked:C,onChange:function(){y(arguments.length<=0?void 0:arguments[0]),null==I||I.apply(void 0,arguments)},prefixCls:O,className:P,style:R,disabled:q,ref:e,loadingIcon:H}))))})),O=q;O.__ANT_SWITCH=!0;const H=O},71685:function(n,e,i){var t;!function(e){"use strict";var a=function(){},l=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.msRequestAnimationFrame||function(n){return setTimeout(n,16)};function r(){var n=this;n.reads=[],n.writes=[],n.raf=l.bind(e),a("initialized",n)}function c(n){n.scheduled||(n.scheduled=!0,n.raf(o.bind(null,n)),a("flush scheduled"))}function o(n){a("flush");var e,i=n.writes,t=n.reads;try{a("flushing reads",t.length),n.runTasks(t),a("flushing writes",i.length),n.runTasks(i)}catch(n){e=n}if(n.scheduled=!1,(t.length||i.length)&&c(n),e){if(a("task errored",e.message),!n.catch)throw e;n.catch(e)}}function d(n,e){var i=n.indexOf(e);return!!~i&&!!n.splice(i,1)}r.prototype={constructor:r,runTasks:function(n){var e;for(a("run tasks");e=n.shift();)e()},measure:function(n,e){a("measure");var i=e?n.bind(e):n;return this.reads.push(i),c(this),i},mutate:function(n,e){a("mutate");var i=e?n.bind(e):n;return this.writes.push(i),c(this),i},clear:function(n){return a("clear",n),d(this.reads,n)||d(this.writes,n)},extend:function(n){if(a("extend",n),"object"!=typeof n)throw new Error("expected object");var e=Object.create(this);return function(n,e){for(var i in e)e.hasOwnProperty(i)&&(n[i]=e[i])}(e,n),e.fastdom=this,e.initialize&&e.initialize(),e},catch:null};var s=e.fastdom=e.fastdom||new r;void 0===(t=function(){return s}.call(s,i,s,n))||(n.exports=t)}("undefined"!=typeof window?window:void 0!==this?this:globalThis)}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/5.0.5/833e130f25c60903fbcf9922e1a1ec1c/173.lite.js.map
