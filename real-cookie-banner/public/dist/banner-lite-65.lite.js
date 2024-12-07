"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[65],{3769:(e,t,r)=>{r.d(t,{A:()=>n});const n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"}},8489:(e,t,r)=>{r.d(t,{A:()=>n});const n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"minus",theme:"outlined"}},1503:(e,t,r)=>{r.d(t,{Q:()=>o});var n=function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},n.apply(this,arguments)},a={primaryColor:"#333",secondaryColor:"#E6E6E6"};function o(e,t){if(void 0===t&&(t={}),"function"==typeof e.icon){var r=t.placeholders||a;return c(e.icon(r.primaryColor,r.secondaryColor),t)}return c(e.icon,t)}function c(e,t){var r="svg"===e.tag?n(n({},e.attrs),t.extraSVGAttrs||{}):e.attrs,a=Object.keys(r).reduce((function(e,t){var n=t,a=r[n],o="".concat(n,'="').concat(a,'"');return e.push(o),e}),[]),o=a.length?" "+a.join(" "):"",s=(e.children||[]).map((function(e){return c(e,t)})).join("");return s&&s.length?"<".concat(e.tag).concat(o,">").concat(s,"</").concat(e.tag,">"):"<".concat(e.tag).concat(o," />")}},8552:(e,t,r)=>{r.d(t,{y:()=>h});var n,a=r(7936),o=["bottom","height","left","right","top","width"],c=new Map,s=function e(){var t=[];c.forEach((function(e,r){var n,a,c=r.getBoundingClientRect();n=c,a=e.rect,void 0===n&&(n={}),void 0===a&&(a={}),o.some((function(e){return n[e]!==a[e]}))&&(e.rect=c,t.push(e))})),t.forEach((function(e){e.callbacks.forEach((function(t){return t(e.rect)}))})),n=window.requestAnimationFrame(e)};const i=function(e,t){return{observe:function(){var r=0===c.size;c.has(e)?c.get(e).callbacks.push(t):c.set(e,{rect:void 0,hasRectChanged:!1,callbacks:[t]}),r&&s()},unobserve:function(){var r=c.get(e);if(r){var a=r.callbacks.indexOf(t);a>=0&&r.callbacks.splice(a,1),r.callbacks.length||c.delete(e),c.size||cancelAnimationFrame(n)}}}};function u(e){return"boolean"==typeof e}function l(e){return!(!e||"[object Function]"!={}.toString.call(e))}var d="undefined"!=typeof window&&window.document&&window.document.createElement?a.Nf:a.vJ;function h(e,t,r){let n,o;u(t)?n=t:(n=t?.observe??!0,o=t?.onChange),l(r)&&(o=r),a.vJ((()=>{u(t)&&console.warn("Passing `observe` as the second argument to `useRect` is deprecated and will be removed in a future version of Reach UI. Instead, you can pass an object of options with an `observe` property as the second argument (`useRect(ref, { observe })`).\nSee https://reach.tech/rect#userect-observe")}),[t]),a.vJ((()=>{l(r)&&console.warn("Passing `onChange` as the third argument to `useRect` is deprecated and will be removed in a future version of Reach UI. Instead, you can pass an object of options with an `onChange` property as the second argument (`useRect(ref, { onChange })`).\nSee https://reach.tech/rect#userect-onchange")}),[r]);let[c,s]=a.J0(e.current),h=a.li(!1),p=a.li(!1),[g,b]=a.J0(null),f=a.li(o);return d((()=>{f.current=o,e.current!==c&&s(e.current)})),d((()=>{c&&!h.current&&(h.current=!0,b(c.getBoundingClientRect()))}),[c]),d((()=>{if(!n)return;let t=c;if(p.current||(p.current=!0,t=e.current),!t)return void console.warn("You need to place the ref");let r=i(t,(e=>{f.current?.(e),b(e)}));return r.observe(),()=>{r.unobserve()}}),[n,c,e]),g}},5790:(e,t,r)=>{r.d(t,{S1:()=>c});var n,a=" daum[ /]| deusu/| yadirectfetcher|(?:^|[^g])news(?!sapphire)|(?<! (?:channel/|google/))google(?!(app|/google| pixel))|(?<! cu)bot(?:[^\\w]|_|$)|(?<!(?: ya| yandex|^job|inapp;) ?)search|(?<!(?:lib))http|(?<![hg]m)score|@[a-z][\\w-]+\\.|\\(\\)|\\.com|\\b\\d{13}\\b|^12345|^<|^[\\w \\.\\-\\(?:\\):]+(?:/v?\\d+(?:\\.\\d+)?(?:\\.\\d{1,10})*?)?(?:,|$)|^[^ ]{50,}$|^\\w+/[\\w\\(\\)]*$|^active|^ad muncher|^amaya|^avsdevicesdk/|^biglotron|^bot|^bw/|^clamav[ /]|^client/|^cobweb/|^custom|^ddg[_-]android|^discourse|^dispatch/\\d|^downcast/|^duckduckgo|^facebook|^getright/|^gozilla/|^hobbit|^hotzonu|^hwcdn/|^jeode/|^jetty/|^jigsaw|^microsoft bits|^movabletype|^mozilla/\\d\\.\\d \\(compatible;?\\)$|^mozilla/\\d\\.\\d \\w*$|^navermailapp|^netsurf|^offline explorer|^postman|^python|^rank|^read|^reed|^rest|^rss|^serf|^snapchat|^space bison|^svn|^swcd |^taringa|^thumbor/|^track|^valid|^w3c|^webbandit/|^webcopier|^wget|^whatsapp|^wordpress|^xenu link sleuth|^yahoo|^yandex|^zdm/\\d|^zoom marketplace/|^{{.*}}$|analyzer|archive|ask jeeves/teoma|bit\\.ly/|bluecoat drtr|browsex|burpcollaborator|capture|catch|check|chrome-lighthouse|chromeframe|classifier|cloud|crawl|cypress/|dareboost|datanyze|dejaclick|detect|dmbrowser|download|evc-batch/|feed|firephp|gomezagent|headless|httrack|hubspot marketing grader|hydra|ibisbrowser|images|insight|inspect|iplabel|ips-agent|java(?!;)|library|mail\\.ru/|manager|measure|neustar wpm|node|nutch|offbyone|optimize|pageburst|parser|perl|phantomjs|pingdom|powermarks|preview|proxy|ptst[ /]\\d|reputation|resolver|retriever|rexx;|rigor|robot|rss\\b|scan|scrape|server|sogou|sparkler/|speedcurve|spider|splash|statuscake|supercleaner|synapse|synthetic|tools|torrent|trace|transcoder|url|virtuoso|wappalyzer|watch|webglance|webkit2png|whatcms/|zgrab",o=/bot|spider|crawl|http|lighthouse/i;function c(e){return Boolean(e)&&function(){if(n instanceof RegExp)return n;try{n=new RegExp(a,"i")}catch(e){n=o}return n}().test(e)}}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/5.0.5/d8c6cf0da714303b9b8a6caa935ebd5f/banner-lite-65.lite.js.map
