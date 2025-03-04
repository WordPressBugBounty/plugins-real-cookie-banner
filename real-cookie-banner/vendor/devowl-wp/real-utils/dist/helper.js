var devowlWp_realUtils;(()=>{"use strict";var t={n:e=>{var s=e&&e.__esModule?()=>e.default:()=>e;return t.d(s,{a:s}),s},d:(e,s)=>{for(var o in s)t.o(s,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:s[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{RatingPointer:()=>d,isRatable:()=>n});const s=devowlWp_utils,o=()=>window[s.BaseOptions.getPureSlug("real-utils",!0)].others;function n(t){return o().canBeRated.indexOf(t)>-1}let r,i;const a=function(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return(i||(i=(0,s.createLocalizationFactory)("devowl-wp-real-utils"))).__(...e)},l=jQuery;var u=t.n(l);const c={path:"/rating/:slug/dismiss",method:s.RouteHttpVerb.DELETE};class d{constructor(t,e,s,o){this.slug=t,this.$handler=e,this.description=s,this.className=o,this.init()}close(t,e){if(t.preventDefault(),this.$handler.pointer("close"),this.$handler.pointer("destroy"),e){const t=o().rateLinks[this.slug];window.open(t,"_blank")}!function(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];(r||(r=(0,s.createRequestFactory)(window[s.BaseOptions.getPureSlug("real-utils",!0)]))).request(...e)}({location:c,params:{slug:this.slug,force:e}})}buttons(){const t=u()(`<a class="button" href="#">${a("Not now")}</a>`).click((t=>{this.close(t,!1)})),e=u()(`<a class="button button-primary" href="#">${a("Give it a rating")}</a>`).click((t=>{this.close(t,!0)}));return u()('<div class="real-utils-pointer-buttons" />').append(e,t)}init(){const{canBeRated:t}=o();t.splice(t.indexOf(this.slug),1);const e=a("Do us a favor!"),s=this.description||a("Awesome, you have just used a functionality of <strong>%s</strong>. Do you like it? Please do us a favor and rate us!",o().names[this.slug]);this.$handler.pointer({pointerClass:`wp-pointer real-utils-rate-pointer ${this.className?this.className:""}`,content:`<h3>${e}</h3><p>${s}</p>`,buttons:this.buttons.bind(this)}).pointer("open")}}devowlWp_realUtils=e})();
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/5.0.13/4cd1b27ec9270e30c671103f33c29f20/helper.js.map
