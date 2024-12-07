"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[853],{50874:(e,s,t)=>{t.r(s),t.d(s,{TcfVendorConfigurationForm:()=>ce});var n=t(3713),r=t(41594),i=t(57922),a=t(19117),o=t(75792),l=t(18197),d=t(91386),c=t(60971),u=t(71951),p=t(69665),h=t(36069),f=t(8140),m=t(3820),v=t(59726),g=t(55285),x=t(52113);const j=Symbol(),y=()=>(0,x.NV)(j);var b=t(41220),C=t(38994),A=t(9551);const S=()=>{const{__:e}=(0,v.s)(),{vendor:{id:s,name:t}}=y();return(0,n.jsx)(d.A.Item,{label:e("Provider"),children:(0,n.jsx)(A.A,{value:t,readOnly:!0,addonAfter:e("Vendor ID: %d",s)})})};var k=t(81533);const I=()=>{const{__:e}=(0,v.s)();return(0,n.jsxs)(d.A.Item,{label:e("Status"),required:!0,children:[(0,n.jsx)(d.A.Item,{name:"status",noStyle:!0,rules:[{required:!0,message:e("Please choose a status!")}],children:(0,n.jsxs)(k.Ay.Group,{children:[(0,n.jsx)(k.Ay.Button,{value:"publish",children:e("Enabled")}),(0,n.jsx)(k.Ay.Button,{value:"private",children:e("Disabled")}),(0,n.jsx)(k.Ay.Button,{value:"draft",children:e("Draft")})]})}),(0,n.jsx)("p",{className:"description",children:e('Vendor configurations with the status "Draft" or "Disabled" are not visible to the public. In addition, a draft is highlighted in the table of vendor configurations so that you do not forget to complete it.')})]})},P=()=>{const{__:e}=(0,v.s)(),{vendor:{additionalInformation:s}}=y();return(0,n.jsx)(d.A.Item,{label:e("Legal address"),children:(0,n.jsx)(A.A.TextArea,{value:(null==s?void 0:s.legalAddress.split(";").join("\n"))||"",readOnly:!0,autoSize:!0})})},w=()=>{const{__:e}=(0,v.s)(),{vendor:{urls:s}}=y(),{privacy:t,legIntClaim:r}=(null==s?void 0:s[0])||{langId:"",privacy:"",legIntClaim:""};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.A.Item,{label:e("Privacy policy of the provider"),children:(0,n.jsx)(A.A,{value:t,readOnly:!0})}),(0,n.jsx)(d.A.Item,{label:e("Explanation of the legitimate interest"),children:(0,n.jsx)(A.A,{value:r,readOnly:!0})})]})};var T=t(6196),O=t(19393);const _=()=>{const{__:e}=(0,v.s)(),{iso3166OneAlpha2:s,vendor:{additionalInformation:t}}=y();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(d.A.Item,{label:e("Territorial scope"),children:[(0,n.jsx)(T.A,{mode:"multiple",disabled:!0,value:(null==t?void 0:t.territorialScope)?[...t.territorialScope]:[],children:Object.keys(s).map((e=>(0,n.jsx)(T.A.Option,{value:e,children:s[e]},e)))}),(0,n.jsx)("p",{className:"description",children:e("The EU/EEA/EFTA/UK jurisdictions where the vendor operates in the context of its TCF registration. Note that this is different from the place of establishment.")}),(0,n.jsx)(O.A,{checked:null==t?void 0:t.internationalTransfers,disabled:!0}),(0,n.jsxs)("span",{children:["  ",e("This vendor transfers data outside EU/EEA")]})]}),(null==t?void 0:t.internationalTransfers)&&(0,n.jsx)(d.A.Item,{label:e("Transfer mechanism"),children:(0,n.jsxs)(T.A,{mode:"multiple",disabled:!0,value:(null==t?void 0:t.transferMechanisms)?[...t.transferMechanisms]:[],children:[(0,n.jsx)(T.A.Option,{value:"Adequacy decision",children:e("Adequacy decision")}),(0,n.jsx)(T.A.Option,{value:"SCCs",children:e("Standard contractual clauses")}),(0,n.jsx)(T.A.Option,{value:"BCRs",children:e("Binding corporate rules")}),(0,n.jsx)(T.A.Option,{value:"Other",children:e("Other")})]})})]})},N=()=>{const{__:e}=(0,v.s)(),{iso3166OneAlpha2:s}=y();return(0,n.jsxs)(d.A.Item,{label:e("Data processing in countries"),children:[(0,n.jsx)(d.A.Item,{name:"dataProcessingInCountries",noStyle:!0,children:(0,n.jsx)(T.A,{mode:"multiple",showSearch:!0,optionFilterProp:"children",maxTagCount:"responsive",children:Object.keys(s).map((e=>(0,n.jsx)(T.A.Option,{value:e,children:s[e]},e)))})}),(0,n.jsx)("p",{className:"description",children:e("Data is usually processed in the countries where the vendor has its headquarter or servers. You should check with your service provider where your users' data is processed.")})]})};var D=t(64715),F=t(45854),L=t(94349),E=t(69810),V=t(85360),B=t(21917);const R=()=>{const{__:e,_i:s}=(0,v.s)(),{iso3166OneAlpha2:t,territorialLegalBasis:r,predefinedDataProcessingInSafeCountriesLists:i,vendor:{additionalInformation:a}}=y(),o=(0,L.o)({__:e,_i:s,predefinedDataProcessingInSafeCountriesLists:i,iso3166OneAlpha2:t,territorialLegalBasis:r}),{dataProcessingInUnsafeCountriesArticles:l,dataProcessingInUnsafeCountriesArticlesLinks:c}=(0,E.j)({predefinedDataProcessingInSafeCountriesLists:i,iso3166OneAlpha2:t})(r);return(0,n.jsx)(d.A.Item,{noStyle:!0,shouldUpdate:(e,s)=>JSON.stringify(e.dataProcessingInCountries)!==JSON.stringify(s.dataProcessingInCountries)||JSON.stringify(e.dataProcessingInCountriesSpecialTreatments)!==JSON.stringify(s.dataProcessingInCountriesSpecialTreatments),children:u=>{let{getFieldValue:p}=u;const h=p("dataProcessingInCountries"),f=p("dataProcessingInCountriesSpecialTreatments"),{unsafeCountries:m,allowedSpecialTreatments:v}=(0,B.F)({territorialLegalBasis:r,predefinedDataProcessingInSafeCountriesLists:i,service:{dataProcessingInCountries:h,dataProcessingInCountriesSpecialTreatments:f}}),x=o.filter((e=>{let{value:s}=e;return v.indexOf(s)>-1})).map((s=>{var t;const r=(null==a||null==(t=a.transferMechanisms)?void 0:t.indexOf("SCCs"))>-1;return s.value===g.ak.StandardContractualClauses?{...s,disabled:r,label:r?(0,n.jsx)(D.A,{title:e("The vendor states that standard contractual clauses must be concluded with it in any case. Please make sure that you have a corresponding contract with him!"),overlayStyle:{maxWidth:500},placement:"bottomLeft",children:s.label}):s.label}:s}));return(0,n.jsxs)(d.A.Item,{label:e("Safety mechanisms for data transmission"),style:{display:0===x.length?"none":void 0},children:[(0,n.jsx)("p",{className:"description",style:{margin:"0px 0px 10px 0px"},children:s(e("You have selected countries which are considered as unsafe (%s). If you activate one of this safety mechanisms, you do not ask for consent according to {{article/}}, if this kind of consent is activated at all in the settings.",m.map((e=>t[e])).join(", ")),{article:(0,V.i)(l.map(((e,s)=>(0,n.jsx)("a",{href:c[s],target:"_blank",rel:"noreferrer",children:e},e))),e(" or "))})}),(0,n.jsx)(d.A.Item,{name:"dataProcessingInCountriesSpecialTreatments",noStyle:!0,children:(0,n.jsx)(F.A.Group,{options:x})})]})}})},J=6,M=()=>{const{__:e}=(0,v.s)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(C.r,{offset:J,children:e("General vendor configuration")}),(0,n.jsx)(S,{}),(0,n.jsx)(I,{}),(0,n.jsx)(P,{}),(0,n.jsx)(w,{}),(0,n.jsx)(_,{}),(0,n.jsx)(N,{}),(0,n.jsx)(R,{})]})};var q=t(91502),$=t(73491);var G=t(19488);const{Column:z}=q.A,U={labelCol:{span:0},wrapperCol:{span:24},style:{margin:0}},Y=250,W=()=>{const{__:e,_i:s,_n:t}=(0,v.s)(),{vendor:i,declarations:{purposes:a,specialPurposes:o}}=y(),{dataRetention:l}=i,c=(0,r.useMemo)((()=>Object.values(a).map((e=>i.purposes.indexOf(e.id)>-1||i.legIntPurposes.indexOf(e.id)>-1?{purpose:e,type:"normal"}:void 0)).concat(Object.values(o).map((e=>i.specialPurposes.indexOf(e.id)>-1?{purpose:e,type:"special"}:void 0))).filter(Boolean)),[i,a,o]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(C.r,{offset:J,description:s(e('The vendor specifies for which defined purposes he wants to process (personal) data of your visitors and use cookies. These can be deselected if consent should not be obtained for certain purposes. The vendor specifies the legal basis for data processing in according to  {{aGdpr}}Art. 6 GDPR{{/aGdpr}} and whether you as the website operator can change this. "Legitimate Interest" means that this purpose is pre-selected on the basis of a legally designated legitimate interest, and the visitor to your website must actively object to it, if an objection is possible. "Consent" means that your visitors must explicitly agree to this purpose. The default settings are provided by the vendor, but do not have to match how you use the vendor on your website. In particular, you may need to make adjustments, if possible, in the "Legal basis" column. {{strong}}A legitimate interest exists only in a very few cases. If you are not sure, it is better to obtain consent.{{/strong}}'),{strong:(0,n.jsx)("strong",{}),aGdpr:(0,n.jsx)("a",{href:e("https://gdpr-text.com/read/article-6/"),target:"_blank",rel:"noreferrer"})}),children:e("Purposes and special purposes")}),(0,n.jsxs)(q.A,{dataSource:c,rowKey:e=>{let{purpose:{id:s},type:t}=e;return`${t}${s}`},size:"small",bordered:!0,pagination:!1,style:{marginBottom:25},children:[(0,n.jsx)(z,{width:Y,title:e("Name"),dataIndex:"name",render:(e,s)=>{let{purpose:{name:t}}=s;return t}},"name"),(0,n.jsx)(z,{title:e("Enabled"),dataIndex:"enabled",render:(e,s)=>{let{purpose:{id:t},type:r}=s;return(0,n.jsx)(d.A.Item,{...U,name:"special"===r?void 0:["restrictivePurposes",r,t.toString(),"enabled"],valuePropName:"checked",children:(0,n.jsx)(O.A,{size:"small",disabled:"normal"!==r,defaultChecked:"special"===r||void 0})})}},"enabled"),(0,n.jsx)(z,{title:e("Legal basis"),dataIndex:"name",render:(s,t)=>{let{purpose:{id:r},type:a}=t;return(0,n.jsx)(d.A.Item,{noStyle:!0,shouldUpdate:(e,s)=>{var t,n;return(null==(t=e.restrictivePurposes[a])?void 0:t[r].enabled)!==(null==(n=s.restrictivePurposes[a])?void 0:n[r].enabled)},children:s=>{let{getFieldValue:t}=s;return(0,n.jsx)(d.A.Item,{...U,name:"special"===a?void 0:["restrictivePurposes",a,r.toString(),"legInt"],children:(0,n.jsxs)(T.A,{size:"small",disabled:-1===i.flexiblePurposes.indexOf(r)||!t(["restrictivePurposes",a,r.toString(),"enabled"]),defaultValue:"special"===a?"no":void 0,children:[(0,n.jsx)(T.A.Option,{value:"yes",children:e("Legitimate interest")}),(0,n.jsx)(T.A.Option,{value:"no",children:e("Consent")})]})})}})}},"name"),(0,n.jsx)(z,{title:e("Description"),dataIndex:"description",render:(s,t)=>{let{purpose:{description:r,illustrations:i},type:a}=t;return(0,n.jsxs)(D.A,{title:i.length>0&&(0,n.jsxs)("div",{children:[(0,n.jsxs)("strong",{children:[e("Illustrations"),": "]}),(0,n.jsx)("ul",{children:i.map((e=>(0,n.jsx)("li",{children:e},e)))})]}),placement:"bottomLeft",overlayInnerStyle:{width:500},children:[(0,n.jsx)(G.A,{style:{cursor:"pointer",opacity:.5}})," ",r," ","special"===a&&(0,n.jsx)($.A,{color:"warning",children:e("Special purpose")})]})}},"description"),(0,n.jsx)(z,{title:e("Data retention period"),dataIndex:"dataRetention",render:(s,n)=>{let{purpose:{id:r},type:i}=n;const a=function(e,s,t){return e?e[t?"specialPurposes":"purposes"][`${s}`]||e.stdRetention:void 0}(l,r,"special"===i);return a?t("%d day","%d days",a,a):e("Not defined")}},"dataRetention")]})]})};var K,H,X,Q=t(28101),Z=t(96077);!function(e){e.v2="v2",e.v3="v3"}(K||(K={})),function(e){e.Cookie="cookie",e.Web="web",e.App="app"}(H||(H={})),function(e){e.Bulgarian="bg",e.Catalan="ca",e.Czech="cs",e.Danish="da",e.German="de",e.Greek="el",e.Spanish="es",e.Estonian="et",e.Basque="eus",e.Finnish="fi",e.French="fr",e.Galician="gl",e.Croatian="hr",e.Hungarian="hu",e.Italian="it",e.Japanese="ja",e.Lithuanian="lt",e.Latvian="lv",e.Maltese="mt",e.Dutch="nl",e.Norwegian="no",e.Polish="pl",e.Portuguese="pt",e.Romanian="ro",e.SerbianCyrillic="sr-Cyrl",e.SerbianLatin="sr-Latn",e.Russian="ru",e.Slovak="sk",e.Slovenian="sl",e.Swedish="sv",e.Turkish="tr",e.Chinese="zh"}(X||(X={}));const{Column:ee}=q.A,se=()=>{const{__:e,_i:s,_n:t}=(0,v.s)(),{vendor:{usesCookies:i,usesNonCookieAccess:a,cookieMaxAgeSeconds:o,cookieRefresh:l,deviceStorageDisclosureUrl:d,deviceStorageDisclosureViolation:c,deviceStorageDisclosure:u},declarations:{purposes:p}}=y(),h=(0,r.useMemo)((()=>{const e=(null==u?void 0:u.disclosures.length)?[...u.disclosures]:[];return a&&e.unshift({type:H.Web,identifier:"*",purposes:void 0,cookieRefresh:void 0,domain:"*",maxAgeSeconds:null}),i&&e.unshift({type:H.Cookie,identifier:"*",purposes:void 0,cookieRefresh:l,domain:"*",maxAgeSeconds:o}),e}),[a,i,o,l,u]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(C.r,{offset:J,description:s(e("It should be specified all cookies, which are used by using a service of a TCF vendor. There are several types of cookies and that the {{aEprivacy}}ePrivacy Directive (Directive 2009/136/EC) Rectial 66{{/aEprivacy}} requires that you inform your visitors not only about (HTTP) cookies, but also about cookie-like information. This data, if specified, is given by the TCF Vendor and is not mutable. If the information is incomplete, you will need to contact the TCF vendor to request the information be completed."),{aEprivacy:(0,n.jsx)("a",{href:e("https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex:32009L0136"),target:"_blank",rel:"noreferrer"})}),children:[e("Device Storage Disclosure")," (",e("Technical cookie information"),")"]}),c?(0,n.jsxs)("div",{className:"notice notice-error inline below-h2 notice-alt",style:{margin:"10px 0"},children:[(0,n.jsx)("p",{children:s(e('TCF vendors must disclose their cookies, among other things, in accordance with the {{a}}"Vendor Device Storage & Operational Disclosures"{{/a}} specification. However, this vendor fails to comply with the specification, so that the mandatory information for obtaining informed consent as defined by the GDPR cannot be read. You as a website operator can therefore not obtain valid consent for this vendor.'),{a:(0,n.jsx)("a",{href:"https://github.com/InteractiveAdvertisingBureau/GDPR-Transparency-and-Consent-Framework/blob/7c79f48b033f783d98da922152430657097f5ab2/TCFv2/Vendor%20Device%20Storage%20&%20Operational%20Disclosures.md",target:"_blank",rel:"noreferrer"})})}),(0,n.jsx)("p",{children:s(e("You can find the vendor's faulty device storage disclosure at {{a}}%s{{/a}}. Please contact the vendor and ask for a standard compliant device disclosures!",d),{a:(0,n.jsx)("a",{href:d,target:"_blank",rel:"noreferrer"})})}),(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:e("Problem:")})," ",e("no-disclosures"===c?"The vendor does not provide any disclosures.":"disclosure-no-domains"===c?"The vendor does not specify for one or multiple cookies for which domains they are valid.":"disclosure-no-purposes"===c?"The vendor does not specify the purpose for one or multiple cookies.":"disclosure-no-cookie-refresh"===c?"The vendor does not specify for one or multiple cookies if the cookie does refresh.":"disclosure-no-max-age-seconds"===c?"The vendor does not specify the age in seconds for one or multiple cookies.":"The vendor provides a technically non-machine-readable variant of the data, which differs significantly from the defined standard.")]})]}):(0,n.jsxs)(q.A,{locale:{emptyText:(0,n.jsx)(Q.A,{description:e("This vendor does not provide any device storage disclosure.")})},dataSource:h,pagination:{pageSize:15,showTotal:(e,s)=>`${s[0]}-${s[1]} / ${e}`,showSizeChanger:!1},rowKey:e=>{let{identifier:s,type:t}=e;return`${t}${s}`},size:"small",bordered:!0,children:[(0,n.jsx)(ee,{width:Y,title:e("Cookie type"),dataIndex:"cookieType",render:(e,s)=>{let{type:t}=s;return function(e){switch(e){case"cookie":return"HTTP Cookie";case"web":return"LocalStorage, Session Storage, IndexDB";case"app":return"App";default:return e}}(t)}},"cookieType"),(0,n.jsx)(ee,{title:e("Identifier"),dataIndex:"identifier",render:(s,t)=>{let{identifier:r}=t;return r?(0,n.jsx)("code",{children:r}):e("Not defined")}},"identifier"),(0,n.jsx)(ee,{title:e("Domain"),dataIndex:"domain",render:(s,t)=>{let{domains:r,domain:i}=t;return r?(0,n.jsx)("code",{children:r.join(",")}):i?(0,n.jsx)("code",{children:i}):e("Not defined")}},"domain"),(0,n.jsx)(ee,{title:e("Duration"),dataIndex:"duration",render:(s,t)=>{let{maxAgeSeconds:r,cookieRefresh:i}=t;return null!==r?(0,n.jsxs)(n.Fragment,{children:[r<=0?(0,n.jsx)(D.A,{title:e("This cookie is active as long as the session is active"),children:(0,n.jsx)("span",{children:e("Session")})}):(0,n.jsxs)("span",{children:[r," ",e("second(s)")]}),i&&(0,n.jsx)($.A,{icon:(0,n.jsx)(Z.A,{}),style:{marginLeft:10},children:e("Refresh")})]}):e("Not defined")}},"duration"),(0,n.jsx)(ee,{title:e("Purposes"),dataIndex:"purposes",render:(s,r)=>{let{purposes:i}=r;return i?i.length?(0,n.jsx)(D.A,{title:(0,n.jsx)("ul",{style:{margin:0,padding:0},children:i.map((e=>(0,n.jsx)("li",{children:p[e].name},e)))}),children:t("%d purpose","%d purposes",i.length,i.length)}):e("None"):e("Unknown")}},"purposes")]})]})},{Column:te}=q.A,ne=()=>{const{__:e}=(0,v.s)(),{vendor:s,declarations:{features:t,specialFeatures:i}}=y(),a=(0,r.useMemo)((()=>Object.values(t).map((e=>s.features.indexOf(e.id)>-1?{feature:e,isSpecial:!1}:void 0)).concat(Object.values(i).map((e=>s.specialFeatures.indexOf(e.id)>-1?{feature:e,isSpecial:!0}:void 0))).filter(Boolean)),[s,t,i]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(C.r,{offset:J,description:e("Features are specified by the vendor and are immutable. They describe the characteristics of how personal data is processed in order to achieve one or more purposes."),children:e("Features and special features")}),(0,n.jsxs)(q.A,{locale:{emptyText:(0,n.jsx)(Q.A,{description:e("This vendor has not listed any used features.")})},dataSource:a,rowKey:e=>{let{feature:{id:s},isSpecial:t}=e;return`${s}-${t}`},size:"small",bordered:!0,pagination:!1,style:{marginBottom:25},children:[(0,n.jsx)(te,{width:Y,title:e("Name"),dataIndex:"name",render:(e,s)=>{let{feature:{name:t}}=s;return t}},"name"),(0,n.jsx)(te,{title:e("Description"),dataIndex:"description",render:(s,t)=>{let{feature:{description:r,illustrations:i},isSpecial:a}=t;return(0,n.jsxs)(D.A,{title:i.length>0&&(0,n.jsxs)("div",{children:[(0,n.jsxs)("strong",{children:[e("Illustrations"),": "]}),(0,n.jsx)("ul",{children:i.map((e=>(0,n.jsx)("li",{children:e},e)))})]}),placement:"bottomLeft",overlayInnerStyle:{width:500},children:[(0,n.jsx)(G.A,{style:{cursor:"pointer",opacity:.5}})," ",r," ",a&&(0,n.jsx)($.A,{color:"warning",children:e("Special feature")})]})}},"description")]})]})},{Column:re}=q.A,ie=()=>{const{__:e}=(0,v.s)(),{vendor:s,declarations:{dataCategories:t}}=y(),i=(0,r.useMemo)((()=>Object.values(t).filter((e=>s.dataDeclaration.indexOf(e.id)>-1))),[s,t]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(C.r,{offset:J,description:e("Data categories are specified by the vendor and are immutable. They describe the characteristics of which personal data is processed."),children:e("Data categories")}),(0,n.jsxs)(q.A,{locale:{emptyText:(0,n.jsx)(Q.A,{description:e("This vendor has not listed any data categories.")})},dataSource:i,rowKey:"id",size:"small",bordered:!0,pagination:!1,children:[(0,n.jsx)(re,{width:Y,title:e("Name"),dataIndex:"name"},"name"),(0,n.jsx)(re,{title:e("Description"),dataIndex:"description"},"description")]})]})};var ae=t(67993);const oe=()=>{const{__:e,_x:s}=(0,v.s)(),{isEdit:t}=y();return!t&&(0,n.jsx)(d.A.Item,{name:"templateCheck",valuePropName:"checked",required:!0,rules:[{type:"boolean",required:!0,transform:e=>e||void 0,message:e("Please confirm that you have checked the contents of the service.")}],wrapperCol:{offset:b.sN.labelCol.span},children:(0,n.jsxs)(F.A,{children:[s("I have checked the information in the TCF vendor configuration myself and corrected any information that does not fit to my use case.","legal-text")," ",(0,n.jsx)(ae.Y,{url:e("https://devowl.io/knowledge-base/is-real-cookie-banner-legally-compliant/")})]})})},le=()=>{const{__:e}=(0,v.s)(),s=(0,r.useRef)();return(0,n.jsxs)("div",{ref:s,children:[(0,n.jsx)(M,{}),(0,n.jsx)(se,{}),(0,n.jsx)(W,{}),(0,n.jsx)(ne,{}),(0,n.jsx)(ie,{}),(0,n.jsxs)(d.A.Item,{className:"rcb-antd-form-sticky-submit",labelCol:{span:0},wrapperCol:{span:24},children:[(0,n.jsx)(oe,{}),(0,n.jsx)(d.A.Item,{wrapperCol:{offset:J},children:(0,n.jsx)("div",{style:{textAlign:"center"},children:(0,n.jsx)("input",{type:"submit",className:"button button-primary",value:e("Save")})})})]})]})};var de=t(40164);const ce=(0,i.PA)((e=>{let{vendor:s,navigateAfterCreation:t=!0,scrollToTop:i=!0,onCreated:y}=e;const{message:C}=a.A.useApp(),{vendorConfiguration:A,id:S,queried:k,fetched:I,link:P}=(0,h.E)(),w=(0,p.useNavigate)(),{tcfStore:T,optionStore:{territorialLegalBasis:O,others:{iso3166OneAlpha2:_,frontend:{predefinedDataProcessingInSafeCountriesLists:N}}}}=(0,u.g)(),{vendorConfigurations:D,declarations:F}=T,[L,E]=(0,r.useState)(s),{prompt:V,form:B,isBusy:R,defaultValues:J,overrideValues:M,onFinish:q,onFinishFailed:$,onValuesChange:G,contextValue:z}=function(e){const{__:s}=(0,v.s)(),{attributes:t,template:n,vendor:r,declarations:i,isEdit:a}=e,o={status:"publish",restrictivePurposes:{normal:{}},dataProcessingInCountries:[],dataProcessingInCountriesSpecialTreatments:[],templateCheck:!1,...t||{}};if(r&&i)for(const e of[...r.legIntPurposes,...r.purposes].filter(Boolean))o.restrictivePurposes.normal[e.toString()]={enabled:!0,legInt:r.legIntPurposes.indexOf(e)>-1&&-1===r.specialPurposes.indexOf(e)?"yes":"no"};return{...(0,m.S)({...e,handleSave:async t=>{if(0===Object.values(t.restrictivePurposes.normal).filter((e=>{let{enabled:s}=e;return s})).length+r.specialPurposes.length)throw s("You need to enable at least one purpose!");return await e.handleSave(t)},defaultValues:o,i18n:{successMessage:s("You have successfully saved the TCF vendor configuration."),validationError:s("The TCF vendor configuration could not be saved due to missing/invalid form values."),unloadConfirm:s("You have unsaved changes. If you leave this page, your changes will be discarded.")}}),defaultValues:o,overrideValues:e=>{var s,t;return(null==r||null==(t=r.additionalInformation)||null==(s=t.transferMechanisms)?void 0:s.indexOf("SCCs"))>-1&&e.dataProcessingInCountriesSpecialTreatments.push(g.ak.StandardContractualClauses),e},contextValue:{isEdit:a,vendor:r,declarations:i,defaultTemplateValues:n?o:{}}}}({isEdit:I,handleSave:async e=>{const{status:s,restrictivePurposes:n={normal:{}},dataProcessingInCountries:r,dataProcessingInCountriesSpecialTreatments:i,...a}=e;try{const e={...a,vendorId:L.data.id,restrictivePurposes:JSON.stringify(n),dataProcessingInCountries:JSON.stringify(r),dataProcessingInCountriesSpecialTreatments:JSON.stringify(i)};if(delete e.templateCheck,k)A.setStatus(s),A.setMeta(e),await A.patch();else{const t=new f.p(D,{status:s,meta:{...e}});await t.persist(),null==y||y(t)}return()=>t&&w(P.slice(1))}catch(e){throw C.error(e.responseJSON.message),e}},declarations:F,vendor:null==L?void 0:L.data}),U=M(I?{status:A.data.status,restrictivePurposes:JSON.parse(JSON.stringify(A.restrictivePurposes)),dataProcessingInCountries:JSON.parse(JSON.stringify(A.dataProcessingInCountries)),dataProcessingInCountriesSpecialTreatments:JSON.parse(JSON.stringify(A.dataProcessingInCountriesSpecialTreatments)),templateCheck:!0}:J);(0,r.useEffect)((()=>{A.vendorModel&&E(A.vendorModel)}),[A]),(0,r.useEffect)((()=>{k&&!I&&D.getSingle({params:{id:S,context:"edit"}})}),[k,I]),(0,r.useEffect)((()=>{i&&(0,c.V)(0)}),[]);const Y=k&&!I||!L||!F,[W,K]=function(){for(var e=arguments.length,s=new Array(e),t=0;t<e;t++)s[t]=arguments[t];return(0,x.gm)(j,...s)}({...z,territorialLegalBasis:O,iso3166OneAlpha2:_,predefinedDataProcessingInSafeCountriesLists:N},{},{inherit:["vendor"],deps:[Y]});return Y?(0,n.jsx)(de.e,{maxWidth:"fixed",children:(0,n.jsx)(o.A,{active:!0,paragraph:{rows:8}})}):(0,n.jsx)(de.e,{maxWidth:"fixed",children:(0,n.jsx)(W,{value:K,children:(0,n.jsxs)(l.A,{spinning:R,children:[V,(0,n.jsx)(d.A,{name:`tcf-vendor-${S}`,form:B,...b.sN,initialValues:U,onFinish:q,onFinishFailed:$,onValuesChange:G,scrollToFirstError:{behavior:"smooth",block:"center"},labelWrap:!0,children:(0,n.jsx)(le,{})})]})})})}))},36920:(e,s,t)=>{t.d(s,{t:()=>o});var n=t(69665),r=t(71951),i=t(41594),a=t(44227);const o=()=>{const e=(0,n.useParams)(),{cookieStore:s}=(0,r.g)(),t=+e.blocker,o=isNaN(+t)?0:+t,l=!!t,d=s.blockers.entries.get(o)||new a.g(s.blockers,{id:0}),c=(0,i.useCallback)((e=>{let{key:s}=e;return`#/blocker/edit/${s}`}),[d]);return{blocker:d,id:o,queried:l,fetched:0!==d.key,link:"#/blocker",editLink:c,addLink:"#/blocker/new"}}},36069:(e,s,t)=>{t.d(s,{E:()=>o});var n=t(69665),r=t(71951),i=t(41594),a=t(8140);const o=()=>{const{tcfStore:e}=(0,r.g)(),s=+(0,n.useParams)().vendorConfiguration,t=isNaN(+s)?0:+s,o=!!s,l=e.vendorConfigurations.entries.get(t)||new a.p(e.vendorConfigurations,{id:0}),d=(0,i.useCallback)((e=>{let{key:s}=e;return`#/cookies/tcf-vendors/edit/${s}`}),[l]);return{vendorConfiguration:l,id:t,queried:o,fetched:0!==l.key,link:"#/cookies/tcf-vendors",editLink:d,addLink:"#/cookies/tcf-vendors/new"}}}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/5.0.5/6421a4ea4de19349a0367a14ab6a7cde/853.lite.js.map
