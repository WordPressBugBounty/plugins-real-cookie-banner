"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[508],{40164:(e,t,n)=>{n.d(t,{e:()=>i});var o=n(3713);const i=e=>{let{children:t,maxWidth:n="auto",style:i={}}=e;return(0,o.jsx)("div",{className:"rcb-config-content",style:{maxWidth:"fixed"===n?1300:n,...i},children:t})}},44591:(e,t,n)=>{n.r(t),n.d(t,{ConfigLicensing:()=>x});var o=n(3713),i=n(57922),s=n(37218),a=n(36086),r=n(43799),c=n(65824),l=n(91386),d=n(41594),u=n(67993),h=n(14383),m=n(76576),g=n(71951),p=n(30617);const f=(0,i.PA)((e=>{let{withinModal:t=!1}=e;const{pluginUpdateStore:{pluginUpdates:n}}=(0,s.useStores)(),{optionStore:i,checklistStore:f}=(0,g.g)(),{slug:v,others:{isPro:x,showLicenseFormImmediate:b},publicUrl:w}=i,y=n.get(v),{navigateAfterActivation:_}=(0,m.f)(),k=(0,d.useCallback)((()=>{f.fetchChecklist(),(0,h.refreshQueue)(),i.setShowLicenseFormImmediate(!1,!0),_&&(window.location.href=_)}),[f,i,_]),C=(0,d.useCallback)((()=>{f.fetchChecklist(),i.setShowLicenseFormImmediate(!1,!1)}),[f,i]),j=(0,d.useCallback)((()=>{i.setShowLicenseFormImmediate(!1,!1),y.skip()}),[y,i]);(0,d.useEffect)((()=>{b&&(null==y?void 0:y.hasInteractedWithFormOnce)&&j()}),[y,b,j]);const A=(0,p._i)((0,p.__)("Before we start configuring your cookie banner, you can {{strong}}obtain your free license to enjoy all the benefits{{/strong}} of the free version of Real Cookie Banner. The cookies are already waiting for you. Get started now!"),{strong:(0,o.jsx)("strong",{})});return(0,o.jsxs)(o.Fragment,{children:[b&&(0,o.jsxs)("div",{style:{maxWidth:650,textAlign:"center",margin:"0 auto"},children:[!t&&(0,o.jsx)(a.A,{src:`${w}images/logos/real-cookie-banner.svg`,shape:"square",size:130,style:{backgroundColor:"white",padding:25,borderRadius:999,marginBottom:10}}),!t&&!x&&(0,o.jsx)("p",{style:{fontSize:15,margin:"0 auto 20px"},children:A})]}),(0,o.jsx)(r.A,{title:t||!y?void 0:(0,o.jsxs)(o.Fragment,{children:[x||y.isLicensed?(0,p.__)("License activation"):(0,p.__)("Get your free license")," ",!x&&!b&&(0,o.jsx)(u.Y,{url:(0,p.__)("https://devowl.io/knowledge-base/real-cookie-banner-upgrade-free-to-pro-version/"),label:(0,p.__)("Upgrade to PRO version")})]}),bordered:!t,children:(0,o.jsxs)(c.A,{direction:"vertical",size:"large",children:[t&&!x&&(0,o.jsx)("p",{className:"description",style:{fontWeight:"bold"},children:A}),(0,o.jsx)(s.PluginUpdateEmbed,{formProps:{onSave:k,onFailure:b&&!x?j:void 0,footer:(0,o.jsx)(l.A.Item,{style:{margin:"25px 0 0",textAlign:b?"center":void 0},children:(0,o.jsx)("input",{type:"submit",className:"button button-primary",value:b?x?(0,p.__)("Activate license & continue"):(0,p.__)("Activate free license & Continue"):(0,p.__)("Save")})})},listProps:{onDeactivate:C},slug:v})]})}),y&&b&&(0,o.jsx)("div",{style:{textAlign:"center",marginBottom:20,marginTop:t?0:20},children:(0,o.jsx)("a",{className:"button-link",onClick:j,children:x?(0,p.__)("Continue without regular updates and without any support"):(0,p.__)("Continue without any support and without e.g. discount announcements")})})]})}));var v=n(40164);const x=(0,i.PA)((()=>(0,o.jsx)(v.e,{maxWidth:800,style:{margin:"auto"},children:(0,o.jsx)(s.Provider,{children:(0,o.jsx)(f,{})})})))},76576:(e,t,n)=>{n.d(t,{f:()=>s});var o=n(69665),i=n(68789);function s(){return i.qs.parse((0,o.useLocation)().search)}},12548:(e,t,n)=>{n.d(t,{A:()=>c});var o=n(2464),i=n(41594);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"question-circle",theme:"outlined"};var a=n(4679),r=function(e,t){return i.createElement(a.A,(0,o.A)({},e,{ref:t,icon:s}))};const c=i.forwardRef(r)},81170:(e,t,n)=>{n.d(t,{A:()=>o});const o=e=>({[e.componentCls]:{[`${e.antCls}-motion-collapse-legacy`]:{overflow:"hidden","&-active":{transition:`height ${e.motionDurationMid} ${e.motionEaseInOut},\n        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`}},[`${e.antCls}-motion-collapse`]:{overflow:"hidden",transition:`height ${e.motionDurationMid} ${e.motionEaseInOut},\n        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`}}})}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/5.1.0/b52f919c851de16fc86a64c5f40f82cf/chunk-config-tab-licensing.lite.js.map
