"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[853],{50874:(e,s,t)=>{t.r(s),t.d(s,{TcfVendorConfigurationForm:()=>oe});var r=t(3713),n=t(41594),i=t(57922),o=t(19117),a=t(75792),l=t(18197),d=t(91386),c=t(60971),u=t(71951),p=t(69665),h=t(36069),f=t(8140),m=t(3820),v=t(59726),x=t(52113);const g=Symbol(),j=()=>(0,x.NV)(g);var y=t(41220),b=t(38994),A=t(9551);const k=()=>{const{__:e}=(0,v.s)(),{vendor:{id:s,name:t}}=j();return(0,r.jsx)(d.A.Item,{label:e("Provider"),children:(0,r.jsx)(A.A,{value:t,readOnly:!0,addonAfter:e("Vendor ID: %d",s)})})};var C=t(81533);const S=()=>{const{__:e}=(0,v.s)();return(0,r.jsxs)(d.A.Item,{label:e("Status"),required:!0,children:[(0,r.jsx)(d.A.Item,{name:"status",noStyle:!0,rules:[{required:!0,message:e("Please choose a status!")}],children:(0,r.jsxs)(C.Ay.Group,{children:[(0,r.jsx)(C.Ay.Button,{value:"publish",children:e("Enabled")}),(0,r.jsx)(C.Ay.Button,{value:"private",children:e("Disabled")}),(0,r.jsx)(C.Ay.Button,{value:"draft",children:e("Draft")})]})}),(0,r.jsx)("p",{className:"description",children:e('Vendor configurations with the status "Draft" or "Disabled" are not visible to the public. In addition, a draft is highlighted in the table of vendor configurations so that you do not forget to complete it.')})]})},I=()=>{const{__:e}=(0,v.s)(),{vendor:{additionalInformation:s}}=j();return(0,r.jsx)(d.A.Item,{label:e("Legal address"),children:(0,r.jsx)(A.A.TextArea,{value:(null==s?void 0:s.legalAddress.split(";").join("\n"))||"",readOnly:!0,autoSize:!0})})},w=()=>{const{__:e}=(0,v.s)(),{vendor:{urls:s}}=j(),{privacy:t,legIntClaim:n}=(null==s?void 0:s[0])||{langId:"",privacy:"",legIntClaim:""};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.A.Item,{label:e("Privacy policy of the provider"),children:(0,r.jsx)(A.A,{value:t,readOnly:!0})}),(0,r.jsx)(d.A.Item,{label:e("Explanation of the legitimate interest"),children:(0,r.jsx)(A.A,{value:n,readOnly:!0})})]})};var T=t(6196),P=t(19393);const O=()=>{const{__:e}=(0,v.s)(),{iso3166OneAlpha2:s,vendor:{additionalInformation:t}}=j();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(d.A.Item,{label:e("Territorial scope"),children:[(0,r.jsx)(T.A,{mode:"multiple",disabled:!0,value:(null==t?void 0:t.territorialScope)?[...t.territorialScope]:[],children:Object.keys(s).map((e=>(0,r.jsx)(T.A.Option,{value:e,children:s[e]},e)))}),(0,r.jsx)("p",{className:"description",children:e("The EU/EEA/EFTA/UK jurisdictions where the vendor operates in the context of its TCF registration. Note that this is different from the place of establishment.")}),(0,r.jsx)(P.A,{checked:null==t?void 0:t.internationalTransfers,disabled:!0}),(0,r.jsxs)("span",{children:["  ",e("This vendor transfers data outside EU/EEA")]})]}),(null==t?void 0:t.internationalTransfers)&&(0,r.jsx)(d.A.Item,{label:e("Transfer mechanism"),children:(0,r.jsxs)(T.A,{mode:"multiple",disabled:!0,value:(null==t?void 0:t.transferMechanisms)?[...t.transferMechanisms]:[],children:[(0,r.jsx)(T.A.Option,{value:"Adequacy decision",children:e("Adequacy decision")}),(0,r.jsx)(T.A.Option,{value:"SCCs",children:e("Standard contractual clauses")}),(0,r.jsx)(T.A.Option,{value:"BCRs",children:e("Binding corporate rules")}),(0,r.jsx)(T.A.Option,{value:"Other",children:e("Other")})]})})]})},_=()=>{const{__:e}=(0,v.s)(),{iso3166OneAlpha2:s}=j();return(0,r.jsxs)(d.A.Item,{label:e("Data processing in countries"),children:[(0,r.jsx)(d.A.Item,{name:"dataProcessingInCountries",noStyle:!0,children:(0,r.jsx)(T.A,{mode:"multiple",showSearch:!0,optionFilterProp:"children",maxTagCount:"responsive",children:Object.keys(s).map((e=>(0,r.jsx)(T.A.Option,{value:e,children:s[e]},e)))})}),(0,r.jsx)("p",{className:"description",children:e("Data is usually processed in the countries where the vendor has its headquarter or servers. You should check with your service provider where your users' data is processed.")})]})};var N=t(45854),F=t(94349);const D=()=>{const{__:e,_i:s}=(0,v.s)(),{iso3166OneAlpha2:t,dataProcessingInUnsafeCountriesSafeCountries:n,territorialLegalBasis:i}=j(),{bySelectedCountries:o}=(0,F.o)({__:e,_i:s});return(0,r.jsx)(d.A.Item,{noStyle:!0,shouldUpdate:(e,s)=>JSON.stringify(e.dataProcessingInCountries)!==JSON.stringify(s.dataProcessingInCountries),children:a=>{let{getFieldValue:l}=a;const c=l("dataProcessingInCountries"),{specialTreatmentOptions:u,unsafeCountries:p}=o(c,n);return(0,r.jsxs)(d.A.Item,{label:e("Special treatment for unsafe countries"),style:{display:0===u.length?"none":void 0},children:[(0,r.jsxs)("p",{className:"description",style:{margin:"0px 0px 10px 0px"},children:[s(e("You have selected countries which are considered as unsafe (%s). If you activate one of this special treatment options, you do not ask for consent according to {{a}}Art. 49 GDPR{{/a}}, if this kind of consent is activated at all in the settings.",p.map((e=>t[e])).join(", ")),{a:(0,r.jsx)("a",{href:e("https://gdpr-info.eu/art-49-gdpr/"),rel:"noreferrer",target:"_blank"})})," ",i.indexOf("dsg-switzerland")>-1&&(0,r.jsx)("strong",{children:e("Please note that standard contractual clauses do not exist in Switzerland and the Trans-Atlantic Data Privacy Framework is not set into force. Therefore, you should leave the following checkboxes empty when addressing Swiss website visitors.")})]}),(0,r.jsx)(d.A.Item,{name:"dataProcessingInCountriesSpecialTreatments",noStyle:!0,children:(0,r.jsx)(N.A.Group,{options:u})})]})}})},E=6,L=()=>{const{__:e}=(0,v.s)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(b.r,{offset:E,children:e("General vendor configuration")}),(0,r.jsx)(k,{}),(0,r.jsx)(S,{}),(0,r.jsx)(I,{}),(0,r.jsx)(w,{}),(0,r.jsx)(O,{}),(0,r.jsx)(_,{}),(0,r.jsx)(D,{})]})};var V=t(91502),B=t(64715),R=t(73491);var q=t(19488);const{Column:z}=V.A,G={labelCol:{span:0},wrapperCol:{span:24},style:{margin:0}},J=250,$=()=>{const{__:e,_i:s,_n:t}=(0,v.s)(),{vendor:i,declarations:{purposes:o,specialPurposes:a}}=j(),{dataRetention:l}=i,c=(0,n.useMemo)((()=>Object.values(o).map((e=>i.purposes.indexOf(e.id)>-1||i.legIntPurposes.indexOf(e.id)>-1?{purpose:e,type:"normal"}:void 0)).concat(Object.values(a).map((e=>i.specialPurposes.indexOf(e.id)>-1?{purpose:e,type:"special"}:void 0))).filter(Boolean)),[i,o,a]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(b.r,{offset:E,description:s(e('The vendor specifies for which defined purposes he wants to process (personal) data of your visitors and use cookies. These can be deselected if consent should not be obtained for certain purposes. The vendor specifies the legal basis for data processing in according to  {{aGdpr}}Art. 6 GDPR{{/aGdpr}} and whether you as the website operator can change this. "Legitimate Interest" means that this purpose is pre-selected on the basis of a legally designated legitimate interest, and the visitor to your website must actively object to it, if an objection is possible. "Consent" means that your visitors must explicitly agree to this purpose. The default settings are provided by the vendor, but do not have to match how you use the vendor on your website. In particular, you may need to make adjustments, if possible, in the "Legal basis" column. {{strong}}A legitimate interest exists only in a very few cases. If you are not sure, it is better to obtain consent.{{/strong}}'),{strong:(0,r.jsx)("strong",{}),aGdpr:(0,r.jsx)("a",{href:e("https://gdpr-text.com/read/article-6/"),target:"_blank",rel:"noreferrer"})}),children:e("Purposes and special purposes")}),(0,r.jsxs)(V.A,{dataSource:c,rowKey:e=>{let{purpose:{id:s},type:t}=e;return`${t}${s}`},size:"small",bordered:!0,pagination:!1,style:{marginBottom:25},children:[(0,r.jsx)(z,{width:J,title:e("Name"),dataIndex:"name",render:(e,s)=>{let{purpose:{name:t}}=s;return t}},"name"),(0,r.jsx)(z,{title:e("Enabled"),dataIndex:"enabled",render:(e,s)=>{let{purpose:{id:t},type:n}=s;return(0,r.jsx)(d.A.Item,{...G,name:"special"===n?void 0:["restrictivePurposes",n,t.toString(),"enabled"],valuePropName:"checked",children:(0,r.jsx)(P.A,{size:"small",disabled:"normal"!==n,defaultChecked:"special"===n||void 0})})}},"enabled"),(0,r.jsx)(z,{title:e("Legal basis"),dataIndex:"name",render:(s,t)=>{let{purpose:{id:n},type:o}=t;return(0,r.jsx)(d.A.Item,{noStyle:!0,shouldUpdate:(e,s)=>{var t,r;return(null==(t=e.restrictivePurposes[o])?void 0:t[n].enabled)!==(null==(r=s.restrictivePurposes[o])?void 0:r[n].enabled)},children:s=>{let{getFieldValue:t}=s;return(0,r.jsx)(d.A.Item,{...G,name:"special"===o?void 0:["restrictivePurposes",o,n.toString(),"legInt"],children:(0,r.jsxs)(T.A,{size:"small",disabled:-1===i.flexiblePurposes.indexOf(n)||!t(["restrictivePurposes",o,n.toString(),"enabled"]),defaultValue:"special"===o?"no":void 0,children:[(0,r.jsx)(T.A.Option,{value:"yes",children:e("Legitimate interest")}),(0,r.jsx)(T.A.Option,{value:"no",children:e("Consent")})]})})}})}},"name"),(0,r.jsx)(z,{title:e("Description"),dataIndex:"description",render:(s,t)=>{let{purpose:{description:n,illustrations:i},type:o}=t;return(0,r.jsxs)(B.A,{title:i.length>0&&(0,r.jsxs)("div",{children:[(0,r.jsxs)("strong",{children:[e("Illustrations"),": "]}),(0,r.jsx)("ul",{children:i.map((e=>(0,r.jsx)("li",{children:e},e)))})]}),placement:"bottomLeft",overlayInnerStyle:{width:500},children:[(0,r.jsx)(q.A,{style:{cursor:"pointer",opacity:.5}})," ",n," ","special"===o&&(0,r.jsx)(R.A,{color:"warning",children:e("Special purpose")})]})}},"description"),(0,r.jsx)(z,{title:e("Data retention period"),dataIndex:"dataRetention",render:(s,r)=>{let{purpose:{id:n},type:i}=r;const o=function(e,s,t){return e?e[t?"specialPurposes":"purposes"][`${s}`]||e.stdRetention:void 0}(l,n,"special"===i);return o?t("%d day","%d days",o,o):e("Not defined")}},"dataRetention")]})]})};var M,U,Y,K=t(28101),W=t(96077);!function(e){e.v2="v2",e.v3="v3"}(M||(M={})),function(e){e.Cookie="cookie",e.Web="web",e.App="app"}(U||(U={})),function(e){e.Bulgarian="bg",e.Catalan="ca",e.Czech="cs",e.Danish="da",e.German="de",e.Greek="el",e.Spanish="es",e.Estonian="et",e.Basque="eus",e.Finnish="fi",e.French="fr",e.Galician="gl",e.Croatian="hr",e.Hungarian="hu",e.Italian="it",e.Japanese="ja",e.Lithuanian="lt",e.Latvian="lv",e.Maltese="mt",e.Dutch="nl",e.Norwegian="no",e.Polish="pl",e.Portuguese="pt",e.Romanian="ro",e.SerbianCyrillic="sr-Cyrl",e.SerbianLatin="sr-Latn",e.Russian="ru",e.Slovak="sk",e.Slovenian="sl",e.Swedish="sv",e.Turkish="tr",e.Chinese="zh"}(Y||(Y={}));const{Column:H}=V.A,X=()=>{const{__:e,_i:s,_n:t}=(0,v.s)(),{vendor:{usesCookies:i,usesNonCookieAccess:o,cookieMaxAgeSeconds:a,cookieRefresh:l,deviceStorageDisclosureUrl:d,deviceStorageDisclosureViolation:c,deviceStorageDisclosure:u},declarations:{purposes:p}}=j(),h=(0,n.useMemo)((()=>{const e=(null==u?void 0:u.disclosures.length)?[...u.disclosures]:[];return o&&e.unshift({type:U.Web,identifier:"*",purposes:void 0,cookieRefresh:void 0,domain:"*",maxAgeSeconds:null}),i&&e.unshift({type:U.Cookie,identifier:"*",purposes:void 0,cookieRefresh:l,domain:"*",maxAgeSeconds:a}),e}),[o,i,a,l,u]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(b.r,{offset:E,description:s(e("It should be specified all cookies, which are used by using a service of a TCF vendor. There are several types of cookies and that the {{aEprivacy}}ePrivacy Directive (Directive 2009/136/EC) Art. 66{{/aEprivacy}} requires that you inform your visitors not only about (HTTP) cookies, but also about cookie-like information. This data, if specified, is given by the TCF Vendor and is not mutable. If the information is incomplete, you will need to contact the TCF vendor to request the information be completed."),{aEprivacy:(0,r.jsx)("a",{href:e("https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex:32009L0136"),target:"_blank",rel:"noreferrer"})}),children:[e("Device Storage Disclosure")," (",e("Technical cookie information"),")"]}),c?(0,r.jsxs)("div",{className:"notice notice-error inline below-h2 notice-alt",style:{margin:"10px 0"},children:[(0,r.jsx)("p",{children:s(e('TCF vendors must disclose their cookies, among other things, in accordance with the {{a}}"Vendor Device Storage & Operational Disclosures"{{/a}} specification. However, this vendor fails to comply with the specification, so that the mandatory information for obtaining informed consent as defined by the GDPR cannot be read. You as a website operator can therefore not obtain valid consent for this vendor.'),{a:(0,r.jsx)("a",{href:"https://github.com/InteractiveAdvertisingBureau/GDPR-Transparency-and-Consent-Framework/blob/7c79f48b033f783d98da922152430657097f5ab2/TCFv2/Vendor%20Device%20Storage%20&%20Operational%20Disclosures.md",target:"_blank",rel:"noreferrer"})})}),(0,r.jsx)("p",{children:s(e("You can find the vendor's faulty device storage disclosure at {{a}}%s{{/a}}. Please contact the vendor and ask for a standard compliant device disclosures!",d),{a:(0,r.jsx)("a",{href:d,target:"_blank",rel:"noreferrer"})})}),(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:e("Problem:")})," ",e("no-disclosures"===c?"The vendor does not provide any disclosures.":"disclosure-no-domains"===c?"The vendor does not specify for one or multiple cookies for which domains they are valid.":"disclosure-no-purposes"===c?"The vendor does not specify the purpose for one or multiple cookies.":"disclosure-no-cookie-refresh"===c?"The vendor does not specify for one or multiple cookies if the cookie does refresh.":"disclosure-no-max-age-seconds"===c?"The vendor does not specify the age in seconds for one or multiple cookies.":"The vendor provides a technically non-machine-readable variant of the data, which differs significantly from the defined standard.")]})]}):(0,r.jsxs)(V.A,{locale:{emptyText:(0,r.jsx)(K.A,{description:e("This vendor does not provide any device storage disclosure.")})},dataSource:h,pagination:{pageSize:15,showTotal:(e,s)=>`${s[0]}-${s[1]} / ${e}`,showSizeChanger:!1},rowKey:e=>{let{identifier:s,type:t}=e;return`${t}${s}`},size:"small",bordered:!0,children:[(0,r.jsx)(H,{width:J,title:e("Cookie type"),dataIndex:"cookieType",render:(e,s)=>{let{type:t}=s;return function(e){switch(e){case"cookie":return"HTTP Cookie";case"web":return"LocalStorage, Session Storage, IndexDB";case"app":return"App";default:return e}}(t)}},"cookieType"),(0,r.jsx)(H,{title:e("Identifier"),dataIndex:"identifier",render:(s,t)=>{let{identifier:n}=t;return n?(0,r.jsx)("code",{children:n}):e("Not defined")}},"identifier"),(0,r.jsx)(H,{title:e("Domain"),dataIndex:"domain",render:(s,t)=>{let{domains:n,domain:i}=t;return n?(0,r.jsx)("code",{children:n.join(",")}):i?(0,r.jsx)("code",{children:i}):e("Not defined")}},"domain"),(0,r.jsx)(H,{title:e("Duration"),dataIndex:"duration",render:(s,t)=>{let{maxAgeSeconds:n,cookieRefresh:i}=t;return null!==n?(0,r.jsxs)(r.Fragment,{children:[n<=0?(0,r.jsx)(B.A,{title:e("This cookie is active as long as the session is active"),children:(0,r.jsx)("span",{children:e("Session")})}):(0,r.jsxs)("span",{children:[n," ",e("second(s)")]}),i&&(0,r.jsx)(R.A,{icon:(0,r.jsx)(W.A,{}),style:{marginLeft:10},children:e("Refresh")})]}):e("Not defined")}},"duration"),(0,r.jsx)(H,{title:e("Purposes"),dataIndex:"purposes",render:(s,n)=>{let{purposes:i}=n;return i?i.length?(0,r.jsx)(B.A,{title:(0,r.jsx)("ul",{style:{margin:0,padding:0},children:i.map((e=>(0,r.jsx)("li",{children:p[e].name},e)))}),children:t("%d purpose","%d purposes",i.length,i.length)}):e("None"):e("Unknown")}},"purposes")]})]})},{Column:Q}=V.A,Z=()=>{const{__:e}=(0,v.s)(),{vendor:s,declarations:{features:t,specialFeatures:i}}=j(),o=(0,n.useMemo)((()=>Object.values(t).map((e=>s.features.indexOf(e.id)>-1?{feature:e,isSpecial:!1}:void 0)).concat(Object.values(i).map((e=>s.specialFeatures.indexOf(e.id)>-1?{feature:e,isSpecial:!0}:void 0))).filter(Boolean)),[s,t,i]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(b.r,{offset:E,description:e("Features are specified by the vendor and are immutable. They describe the characteristics of how personal data is processed in order to achieve one or more purposes."),children:e("Features and special features")}),(0,r.jsxs)(V.A,{locale:{emptyText:(0,r.jsx)(K.A,{description:e("This vendor has not listed any used features.")})},dataSource:o,rowKey:e=>{let{feature:{id:s},isSpecial:t}=e;return`${s}-${t}`},size:"small",bordered:!0,pagination:!1,style:{marginBottom:25},children:[(0,r.jsx)(Q,{width:J,title:e("Name"),dataIndex:"name",render:(e,s)=>{let{feature:{name:t}}=s;return t}},"name"),(0,r.jsx)(Q,{title:e("Description"),dataIndex:"description",render:(s,t)=>{let{feature:{description:n,illustrations:i},isSpecial:o}=t;return(0,r.jsxs)(B.A,{title:i.length>0&&(0,r.jsxs)("div",{children:[(0,r.jsxs)("strong",{children:[e("Illustrations"),": "]}),(0,r.jsx)("ul",{children:i.map((e=>(0,r.jsx)("li",{children:e},e)))})]}),placement:"bottomLeft",overlayInnerStyle:{width:500},children:[(0,r.jsx)(q.A,{style:{cursor:"pointer",opacity:.5}})," ",n," ",o&&(0,r.jsx)(R.A,{color:"warning",children:e("Special feature")})]})}},"description")]})]})},{Column:ee}=V.A,se=()=>{const{__:e}=(0,v.s)(),{vendor:s,declarations:{dataCategories:t}}=j(),i=(0,n.useMemo)((()=>Object.values(t).filter((e=>s.dataDeclaration.indexOf(e.id)>-1))),[s,t]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(b.r,{offset:E,description:e("Data categories are specified by the vendor and are immutable. They describe the characteristics of which personal data is processed."),children:e("Data categories")}),(0,r.jsxs)(V.A,{locale:{emptyText:(0,r.jsx)(K.A,{description:e("This vendor has not listed any data categories.")})},dataSource:i,rowKey:"id",size:"small",bordered:!0,pagination:!1,children:[(0,r.jsx)(ee,{width:J,title:e("Name"),dataIndex:"name"},"name"),(0,r.jsx)(ee,{title:e("Description"),dataIndex:"description"},"description")]})]})};var te=t(67993);const re=()=>{const{__:e,_x:s}=(0,v.s)(),{isEdit:t}=j();return!t&&(0,r.jsx)(d.A.Item,{name:"templateCheck",valuePropName:"checked",required:!0,rules:[{type:"boolean",required:!0,transform:e=>e||void 0,message:e("Please confirm that you have checked the contents of the service.")}],wrapperCol:{offset:y.sN.labelCol.span},children:(0,r.jsxs)(N.A,{children:[s("I have checked the information in the TCF vendor configuration myself and corrected any information that does not fit to my use case.","legal-text")," ",(0,r.jsx)(te.Y,{url:e("https://devowl.io/knowledge-base/is-real-cookie-banner-legally-compliant/")})]})})},ne=()=>{const{__:e}=(0,v.s)(),s=(0,n.useRef)();return(0,r.jsxs)("div",{ref:s,children:[(0,r.jsx)(L,{}),(0,r.jsx)(X,{}),(0,r.jsx)($,{}),(0,r.jsx)(Z,{}),(0,r.jsx)(se,{}),(0,r.jsxs)(d.A.Item,{className:"rcb-antd-form-sticky-submit",labelCol:{span:0},wrapperCol:{span:24},children:[(0,r.jsx)(re,{}),(0,r.jsx)(d.A.Item,{wrapperCol:{offset:E},children:(0,r.jsx)("div",{style:{textAlign:"center"},children:(0,r.jsx)("input",{type:"submit",className:"button button-primary",value:e("Save")})})})]})]})};var ie=t(40164);const oe=(0,i.PA)((e=>{let{vendor:s,navigateAfterCreation:t=!0,scrollToTop:i=!0,onCreated:j}=e;const{message:b}=o.A.useApp(),{vendorConfiguration:A,id:k,queried:C,fetched:S,link:I}=(0,h.E)(),w=(0,p.useNavigate)(),{tcfStore:T,optionStore:{dataProcessingInUnsafeCountriesSafeCountriesResolvedLists:P,territorialLegalBasis:O,others:{iso3166OneAlpha2:_}}}=(0,u.g)(),{vendorConfigurations:N,declarations:F}=T,[D,E]=(0,n.useState)(s),{prompt:L,form:V,isBusy:B,defaultValues:R,onFinish:q,onFinishFailed:z,onValuesChange:G,contextValue:J}=function(e){const{__:s}=(0,v.s)(),{attributes:t,template:r,vendor:n,declarations:i,isEdit:o}=e,a={status:"publish",restrictivePurposes:{normal:{}},dataProcessingInCountries:[],dataProcessingInCountriesSpecialTreatments:[],templateCheck:!1,...t||{}};if(n&&i)for(const e of[...n.legIntPurposes,...n.purposes].filter(Boolean))a.restrictivePurposes.normal[e.toString()]={enabled:!0,legInt:n.legIntPurposes.indexOf(e)>-1&&-1===n.specialPurposes.indexOf(e)?"yes":"no"};return{...(0,m.S)({...e,handleSave:async t=>{if(0===Object.values(t.restrictivePurposes.normal).filter((e=>{let{enabled:s}=e;return s})).length+n.specialPurposes.length)throw s("You need to enable at least one purpose!");return await e.handleSave(t)},defaultValues:a,i18n:{successMessage:s("You have successfully saved the TCF vendor configuration."),validationError:s("The TCF vendor configuration could not be saved due to missing/invalid form values."),unloadConfirm:s("You have unsaved changes. If you leave this page, your changes will be discarded.")}}),defaultValues:a,contextValue:{isEdit:o,vendor:n,declarations:i,defaultTemplateValues:r?a:{}}}}({isEdit:S,handleSave:async e=>{const{status:s,restrictivePurposes:r={normal:{}},dataProcessingInCountries:n,dataProcessingInCountriesSpecialTreatments:i,...o}=e;try{const e={...o,vendorId:D.data.id,restrictivePurposes:JSON.stringify(r),dataProcessingInCountries:JSON.stringify(n),dataProcessingInCountriesSpecialTreatments:JSON.stringify(i)};if(delete e.templateCheck,C)A.setStatus(s),A.setMeta(e),await A.patch();else{const t=new f.p(N,{status:s,meta:{...e}});await t.persist(),null==j||j(t)}return()=>t&&w(I.slice(1))}catch(e){throw b.error(e.responseJSON.message),e}},declarations:F,vendor:null==D?void 0:D.data}),$=S?{status:A.data.status,restrictivePurposes:JSON.parse(JSON.stringify(A.restrictivePurposes)),dataProcessingInCountries:JSON.parse(JSON.stringify(A.dataProcessingInCountries)),dataProcessingInCountriesSpecialTreatments:JSON.parse(JSON.stringify(A.dataProcessingInCountriesSpecialTreatments)),templateCheck:!0}:R;(0,n.useEffect)((()=>{A.vendorModel&&E(A.vendorModel)}),[A]),(0,n.useEffect)((()=>{C&&!S&&N.getSingle({params:{id:k,context:"edit"}})}),[C,S]),(0,n.useEffect)((()=>{i&&(0,c.V)(0)}),[]);const M=C&&!S||!D||!F,[U,Y]=function(){for(var e=arguments.length,s=new Array(e),t=0;t<e;t++)s[t]=arguments[t];return(0,x.gm)(g,...s)}({...J,territorialLegalBasis:O,dataProcessingInUnsafeCountriesSafeCountries:[...P],iso3166OneAlpha2:_},{},{inherit:["vendor"],deps:[M]});return M?(0,r.jsx)(ie.e,{maxWidth:"fixed",children:(0,r.jsx)(a.A,{active:!0,paragraph:{rows:8}})}):(0,r.jsx)(ie.e,{maxWidth:"fixed",children:(0,r.jsx)(U,{value:Y,children:(0,r.jsxs)(l.A,{spinning:B,children:[L,(0,r.jsx)(d.A,{name:`tcf-vendor-${k}`,form:V,...y.sN,initialValues:$,onFinish:q,onFinishFailed:z,onValuesChange:G,scrollToFirstError:{behavior:"smooth",block:"center"},labelWrap:!0,children:(0,r.jsx)(ne,{})})]})})})}))},36920:(e,s,t)=>{t.d(s,{t:()=>a});var r=t(69665),n=t(71951),i=t(41594),o=t(44227);const a=()=>{const e=(0,r.useParams)(),{cookieStore:s}=(0,n.g)(),t=+e.blocker,a=isNaN(+t)?0:+t,l=!!t,d=s.blockers.entries.get(a)||new o.g(s.blockers,{id:0}),c=(0,i.useCallback)((e=>{let{key:s}=e;return`#/blocker/edit/${s}`}),[d]);return{blocker:d,id:a,queried:l,fetched:0!==d.key,link:"#/blocker",editLink:c,addLink:"#/blocker/new"}}},36069:(e,s,t)=>{t.d(s,{E:()=>a});var r=t(69665),n=t(71951),i=t(41594),o=t(8140);const a=()=>{const{tcfStore:e}=(0,n.g)(),s=+(0,r.useParams)().vendorConfiguration,t=isNaN(+s)?0:+s,a=!!s,l=e.vendorConfigurations.entries.get(t)||new o.p(e.vendorConfigurations,{id:0}),d=(0,i.useCallback)((e=>{let{key:s}=e;return`#/cookies/tcf-vendors/edit/${s}`}),[l]);return{vendorConfiguration:l,id:t,queried:a,fetched:0!==l.key,link:"#/cookies/tcf-vendors",editLink:d,addLink:"#/cookies/tcf-vendors/new"}}}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/4.7.15/03a06c178f968ebde20903b2ad1f9966/853.lite.js.map
