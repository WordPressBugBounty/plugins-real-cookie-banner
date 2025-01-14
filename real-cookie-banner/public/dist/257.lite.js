"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[257],{55285:(e,t,a)=>{var n,s,r,i;a.d(t,{ak:()=>r,iQ:()=>s,um:()=>i}),Object.freeze(["name","headline","subHeadline","providerNotice","groupNotice","legalBasisNotice","technicalHandlingNotice","createContentBlockerNotice","sccConclusionInstructionsNotice"]),Object.freeze(["codeOnPageLoad","codeOptIn","codeOptOut","createContentBlockerNotice","deleteTechnicalDefinitionsAfterOptOut","dynamicFields","executeCodeOptInWhenNoTagManagerConsentIsGiven","executeCodeOptOutWhenNoTagManagerConsentIsGiven","googleConsentModeConsentTypes","groupNotice","isProviderCurrentWebsite","legalBasis","legalBasisNotice","provider","providerContact","providerLegalNoticeUrl","providerNotice","providerPrivacyPolicyUrl","providerText","purposes","purposeText","shouldUncheckContentBlockerCheckbox","shouldUncheckContentBlockerCheckboxWhenOneOf","tagManagerOptInEventName","tagManagerOptOutEventName","technicalHandlingNotice"]),Object.freeze(["name","codeOnPageLoad","googleConsentModeConsentTypes","codeOptIn","codeOptOut","createContentBlockerNotice","dataProcessingInCountries","dataProcessingInCountriesSpecialTreatments","deleteTechnicalDefinitionsAfterOptOut","dynamicFields","executeCodeOptInWhenNoTagManagerConsentIsGiven","executeCodeOptOutWhenNoTagManagerConsentIsGiven","executePriority","group","groupNotice","isCdn","isEmbeddingOnlyExternalResources","isProviderCurrentWebsite","legalBasis","legalBasisNotice","provider","providerNotice","providerPrivacyPolicyUrl","providerLegalNoticeUrl","purposes","sccConclusionInstructionsNotice","shouldUncheckContentBlockerCheckbox","shouldUncheckContentBlockerCheckboxWhenOneOf","tagManagerOptInEventName","tagManagerOptOutEventName","technicalDefinitions","technicalHandlingNotice"]),function(e){e.Essential="essential",e.Functional="functional",e.Statistics="statistics",e.Marketing="marketing"}(n||(n={})),function(e){e.Consent="consent",e.LegitimateInterest="legitimate-interest",e.LegalRequirement="legal-requirement"}(s||(s={})),function(e){e.ContractualAssurancesWithSubProcessors="contractual-assurances-with-sub-processors",e.ProviderIsSelfCertifiedTransAtlanticDataPrivacyFramework="provider-is-self-certified-trans-atlantic-data-privacy-framework",e.StandardContractualClauses="standard-contractual-clauses",e.BindingCorporateRules="binding-corporate-rules"}(r||(r={})),function(e){e.AdStorage="ad_storage",e.AdUserData="ad_user_data",e.AdPersonalization="ad_personalization",e.AnalyticsStorage="analytics_storage",e.FunctionalityStorage="functionality_storage",e.PersonalizationStorage="personalization_storage",e.SecurityStorage="security_storage"}(i||(i={})),Object.freeze(["id","logo","logoId","release","releaseId","extends","next","nextId","pre","preId","extendsId","translationIds","extendedTemplateId","translationInfo","purposeIds","dynamicFieldIds","technicalDefinitionIds","translatableRequiredFields","translatedRequiredFields","translatableOptionalFields","translatedOptionalFields","translationFlaggedFields","version"])},17312:(e,t,a)=>{a.d(t,{r:()=>u});var n=a(3713),s=a(53029),r=a(96431),i=a(18197),o=a(6099),c=a(92453),l=a(36086),d=a(41594);const u=e=>{let{languages:t=[],recordId:a,onClick:u,children:p,wrapperProps:h={},...f}=e;const[g,C]=(0,d.useState)(!1),m=t.filter((e=>{let{id:t}=e;return!1!==t})),x=t.filter((e=>{let{id:t}=e;return!1===t})),A={size:13,shape:"square",style:{display:"block",width:"auto",borderRadius:5}},v={flex:"none",style:{textAlign:"center",paddingRight:5,fontSize:11,cursor:"pointer"}},y=(0,d.useCallback)((async e=>{if(!g){C(!0);try{u(a,e)}finally{C(!1)}}}),[g,u,a]);return(0,n.jsx)(i.A,{spinning:g,...h,children:(0,n.jsxs)(o.A,{align:"middle",...f,children:[m.map((e=>{const{code:t,flag:r,id:i}=e;return i===a?null:(0,n.jsxs)(c.A,{...v,onClick:()=>y(e),children:[(0,n.jsx)(l.A,{src:r,...A,children:t.toUpperCase()}),(0,n.jsx)(s.A,{})]},t)})),x.length>0&&x.map((e=>{const{code:t,flag:a}=e;return(0,n.jsxs)(c.A,{...v,onClick:()=>y(e),children:[(0,n.jsx)(l.A,{src:a,...A,children:t.toUpperCase()}),(0,n.jsx)(r.A,{})]},t)})),p]})})}},38994:(e,t,a)=>{a.d(t,{r:()=>i});var n=a(3713),s=a(91386),r=a(51192);const i=e=>{let{children:t,description:a,headlineExtra:i,extra:o,offset:c}=e;return(0,n.jsxs)(s.A.Item,{wrapperCol:{offset:c},style:{borderBottom:"1px solid #e7e7e7"},children:[(0,n.jsxs)(r.A,{justify:"space-between",align:"top",children:[(0,n.jsx)("h3",{style:{margin:`0 0 ${a?3:15}px 0`},children:t}),i]}),!!a&&(0,n.jsx)("p",{className:"description",style:{marginBottom:15},children:a}),o]})}},41220:(e,t,a)=>{a.d(t,{sN:()=>n});const n={labelCol:{span:6},wrapperCol:{span:16}}},3820:(e,t,a)=>{a.d(t,{S:()=>h});var n=a(3713),s=a(19117),r=a(91386),i=a(41594),o=a(84255),c=a(78915),l=a(55221),d=a(59726);const u=e=>{let{when:t,title:a}=e;const{__:s}=(0,d.s)(),[r,u=""]=(0,i.useMemo)((()=>a.split(".").map((e=>`${e.trim()}.`))),[a]);return(0,n.jsx)(o.Ay,{when:t,children:e=>{let{isActive:t,onConfirm:a,onCancel:i}=e;return(0,n.jsx)(c.A,{open:t,onCancel:i,onOk:a,centered:!0,okText:s("Leave"),cancelText:s("Cancel"),children:(0,n.jsx)(l.Ay,{status:"warning",title:r,subTitle:u})})}})};var p=a(66399);function h(e){let{isEdit:t,defaultValues:a,template:o,entityTemplateVersion:c,attributes:l,handleSave:d,i18n:h,initialHasChanges:f,trackFieldsDifferFromDefaultValues:g=[],unloadPromptWhen:C}=e;const{message:m}=s.A.useApp(),x={...a,...l||{}},[A]=r.A.useForm(),[v,y]=(0,i.useState)(!1),w=(0,i.useRef)(f||!1),k=!(!t||!o)&&c!==o.version,D=!!o&&(k||!t),O=[],S=(0,i.useCallback)((async e=>{y(!0);try{const t=await d(e);m.success(h.successMessage),(0,p.P)().then((()=>{A.resetFields(),"function"==typeof t&&t()})),w.current=!1}catch(e){m.error(e)}finally{y(!1)}}),[A,d]),b=(0,i.useCallback)((()=>{m.error(h.validationError)}),[A,h]),P=(0,n.jsx)(u,{when:e=>w.current&&(!C||C(e)),title:f&&h.unloadConfirmInitialActive?h.unloadConfirmInitialActive:h.unloadConfirm}),E=(0,i.useCallback)(((e,t)=>{if(g&&x){O.splice(0,O.length);for(const e of g)t[e]!==x[e]&&O.push(e)}w.current=!0}),[g,x]);return{defaultValues:x,template:o,isEdit:t,isTemplateUpdate:k,templateCheck:D,form:A,isBusy:v,setIsBusy:y,hasTrackedFieldDifferenceToDefaultValue:e=>O.indexOf(e)>-1,onFinish:S,onFinishFailed:b,prompt:P,onValuesChange:E}}},94349:(e,t,a)=>{a.d(t,{o:()=>l});var n=a(3713),s=a(55285),r=a(41594),i=a(64715),o=a(69810),c=a(55924);function l(e){let{__:t,_i:a,predefinedDataProcessingInSafeCountriesLists:l,iso3166OneAlpha2:d,territorialLegalBasis:u}=e;const p=(0,o.j)({predefinedDataProcessingInSafeCountriesLists:l,iso3166OneAlpha2:d}),{safeCountriesList:h}=p(u);return(0,r.useMemo)((()=>[{label:(0,n.jsxs)(n.Fragment,{children:[t("Trans-Atlantic Data Privacy Framework self-certified provider for secure data processing in the USA"),(0,n.jsx)("p",{className:"description",children:a(t('The adequacy decision for secure data processing only applies if the provider is self certified and included in the "Data Privacy Framework List". To find out which companies are certified, {{a}}visit the website of the US government{{/a}}.'),{a:(0,n.jsx)("a",{href:t("https://www.dataprivacyframework.gov/list"),rel:"noreferrer",target:"_blank"})})})]}),value:s.ak.ProviderIsSelfCertifiedTransAtlanticDataPrivacyFramework},{label:(0,n.jsxs)(n.Fragment,{children:[t("Standard contractual clauses concluded with the provider"),(0,n.jsx)("p",{className:"description",children:a(t("Did you sign a contract with the provider, e.g. when registering online? If so, the contract may contain {{a}}standard contractual clauses{{/a}} of the EU, which promise secure data processing in unsafe third countries."),{a:(0,n.jsx)("a",{href:t("https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_en"),rel:"noreferrer",target:"_blank"})})})]}),value:s.ak.StandardContractualClauses},{label:(0,n.jsxs)(n.Fragment,{children:[t("Standard contractual clauses concluded by the provider with sub-processors processing data in unsafe third countries, contractually assured"),(0,n.jsx)("p",{className:"description",children:a(t("Did you sign a contract with the provider {{ud}}{{t}}from a safe country{{/t}}{{/ud}}, e.g. when registering online? If so, the contract may contain information (e.g. in a data processing agreement) if the service provider has concluded {{a}}standard contractual clauses{{/a}} of the EU {{u}}with his own processors{{/u}}, which promise secure data processing in unsafe third countries."),{t:(0,n.jsx)(i.A,{title:(0,n.jsxs)(n.Fragment,{children:[t("Safe countries are those in which the given legal regulations apply or for which adequacy decisions exist. In your case, these are:"),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,c.g)(h.SAFE)]}),overlayStyle:{maxWidth:500}}),a:(0,n.jsx)("a",{href:t("https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_en"),rel:"noreferrer",target:"_blank"}),u:(0,n.jsx)("u",{}),ud:(0,n.jsx)("u",{style:{textDecorationStyle:"dashed"}})})})]}),value:s.ak.ContractualAssurancesWithSubProcessors}]),[])}},69810:(e,t,a)=>{a.d(t,{j:()=>r});var n=a(41594),s=a(59726);function r(e){let{predefinedDataProcessingInSafeCountriesLists:t,iso3166OneAlpha2:a}=e;const{_x:r,__:i}=(0,s.s)(),o=(0,n.useCallback)((e=>{const n=t[e].map((e=>a[e])).join(", ");return"ADEQUACY_EU"===e?i("Countries with an adequacy decision in EU: %s",n):"ADEQUACY_CH"===e?i("Countries with an adequacy decision in Switzerland: %s",n):"GDPR"===e?i("Countries where GDPR applies: %s",n):i("Countries where %s applies",e)}),[i,t,a]);return(0,n.useCallback)((e=>{const n=[],s=[],c=[],l={ADEQUACY_CH:o("ADEQUACY_CH"),ADEQUACY_EU:o("ADEQUACY_EU"),GDPR:o("GDPR"),SAFE:""},d=[],u=e.indexOf("gdpr-eprivacy")>-1,p=e.indexOf("dsg-switzerland")>-1,h=r("GDPR (EU/EEA)","legal-text"),f=r("DSG (Switzerland)","legal-text"),g=r("GDPR","legal-text"),C=r("Art. 49 (1) (a) GDPR (EU/EEA)","legal-text"),m=r("Art. 17 (1) (a) DSG (Switzerland)","legal-text"),x=r("Art. 49 (1) (a) GDPR","legal-text"),A=i("https://gdpr-text.com/read/article-49/"),v=i("https://www.fedlex.admin.ch/eli/cc/2022/491/en#art_17");if(p&&u){n.push(h,f),s.push(C,m),c.push(A,v),d.push(l.ADEQUACY_EU,l.ADEQUACY_CH);const e=t.GDPR.filter((e=>t.ADEQUACY_CH.includes(e)));-1===e.indexOf("CH")&&e.push("CH"),l.SAFE=e.map((e=>a[e])).join(", ")}else p?(n.push(f),s.push(m),c.push(v),d.push(l.ADEQUACY_CH),l.SAFE=l.ADEQUACY_CH):u&&(n.push(g),s.push(x),c.push(A),d.push(l.ADEQUACY_EU),l.SAFE=`${l.GDPR}\n\n${l.ADEQUACY_EU}`);return{legalBasis:n,dataProcessingInUnsafeCountriesArticles:s,dataProcessingInUnsafeCountriesArticlesLinks:c,isGdpr:u,isDsg:p,labelGdprEuEea:h,labelDsg:f,labelGdpr:g,safeCountriesList:l,adequacyCountriesLists:d}}),[r,i,o,o])}},21917:(e,t,a)=>{a.d(t,{F:()=>s});var n=a(55285);function s(e){let{predefinedDataProcessingInSafeCountriesLists:t,isDataProcessingInUnsafeCountries:a,territorialLegalBasis:s,service:r}=e,i=[];const o=s.indexOf("gdpr-eprivacy")>-1,c=s.indexOf("dsg-switzerland")>-1,{GDPR:l,DSG:d,"GDPR+DSG":u,ADEQUACY_CH:p,ADEQUACY_EU:h}=t;c&&o?i=u:o?i=l:c&&(i=d);let f=[];const g=[],C={};if(r){const{dataProcessingInCountries:e,dataProcessingInCountriesSpecialTreatments:t}=r;f=e.filter((e=>-1===i.indexOf(e)));const s=f.indexOf("US")>-1;if(s&&g.push(n.ak.ProviderIsSelfCertifiedTransAtlanticDataPrivacyFramework),f.length>0){const e=[...o?h:[],...c?p:[]];(f.filter((t=>-1===e.indexOf(t))).length>0||s)&&(g.push(n.ak.StandardContractualClauses),-1===t.indexOf(n.ak.StandardContractualClauses)&&g.push(n.ak.ContractualAssurancesWithSubProcessors));const r=t.indexOf(n.ak.StandardContractualClauses)>-1,i=!r&&t.indexOf(n.ak.ContractualAssurancesWithSubProcessors)>-1,u=s&&t.indexOf(n.ak.ProviderIsSelfCertifiedTransAtlanticDataPrivacyFramework)>-1,m=t.indexOf(n.ak.BindingCorporateRules)>-1,x=e=>!o&&!c||"US"!==e||u,A=r?"B":i?"C":m?"E":a?"D":void 0;for(const e of f){const t=[],a=h.filter(x).indexOf(e)>-1,n=p.filter(x).indexOf(e)>-1;c&&o?(-1===l.indexOf(e)&&t.push(a?"A-EU":"D"===A?"D-EU":A),-1===d.indexOf(e)&&t.push(n?"A-CH":"D"===A?"D-CH":A)):o?t.push(a?"A":A):c&&t.push(n?"A":A),C[e]=[...new Set(t.filter(Boolean))]}}}return{isGdpr:o,isDsg:c,safeCountries:i,unsafeCountries:f,allowedSpecialTreatments:g,result:C,filter:e=>Object.entries(C).map((t=>{let[a,n]=t;return n.some(e)?a:void 0})).filter(Boolean)}}},85360:(e,t,a)=>{a.d(t,{i:()=>r});var n=a(3713),s=a(41594);function r(e,t){const a=e.filter(Boolean);return 0===a.length?null:a.reduce(((e,a,r)=>e.length?[...e,(0,n.jsx)(s.Fragment,{children:t},r),a]:[a]),[])}},66399:(e,t,a)=>{a.d(t,{P:()=>n});const n=e=>new Promise((t=>setTimeout((()=>t(e)),0)))},32150:(e,t,a)=>{a.d(t,{C:()=>r});var n=a(68789);const s={path:"/:objectType/multilingual/copy",namespace:"wp/v2",method:n.RouteHttpVerb.POST};async function r(e,t,a){const{root:r,nonce:i}=window.wpApiSettings,{translations:o}=await(0,n.commonRequest)({location:s,options:{restRoot:r,restNonce:i,restNamespace:"wp/v2",restQuery:{}},request:{id:t,targetLocale:a},params:{objectType:e}});return o[a]}},40164:(e,t,a)=>{a.d(t,{e:()=>s});var n=a(3713);const s=e=>{let{children:t,maxWidth:a="auto",style:s={}}=e;return(0,n.jsx)("div",{className:"rcb-config-content",style:{maxWidth:"fixed"===a?1300:a,...s},children:t})}},76576:(e,t,a)=>{a.d(t,{f:()=>r});var n=a(69665),s=a(68789);function r(){return s.qs.parse((0,n.useLocation)().search)}}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/5.0.7/042cda19fda0d23b7c1d9bf5d7c0df63/257.lite.js.map
