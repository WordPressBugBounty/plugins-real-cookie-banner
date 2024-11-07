"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[655],{23708:(e,t,r)=>{r.r(t),r.d(t,{ImportExportCards:()=>q});var n=r(3713),s=r(57922),a=r(6099),l=r(92453),o=r(43799),i=r(30617),c=r(41594),d=r(19117),u=r(91386),h=r(18197),p=r(9551),_=r(50777),m=r(6196),x=r(19393),j=r(81533),g=r(42090),y=r(71951),k=r(60789),A=r(19991);const b=(0,s.PA)((e=>{let{result:t}=e;const r=(0,c.useCallback)((e=>{let{fix:t,settingsTab:r,cookieDuplicate:s,cookie:a,blockerDuplicate:l,blocker:o,href:c,linkText:d}=e;switch(t){case"settings":return(0,n.jsx)("a",{href:`#/settings/${r}`,target:"_blank",rel:"noreferrer",children:(0,i.__)("Set manually")});case"cookieDuplicate":{const{original:[e,t],duplicate:[r,a]}=s;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("a",{href:`#/cookies/${e}/edit/${t}`,target:"_blank",rel:"noreferrer",children:(0,i.__)("Open original")})," ","•"," ",(0,n.jsx)("a",{href:`#/cookies/${r}/edit/${a}`,target:"_blank",rel:"noreferrer",children:(0,i.__)("Open newly created")})]})}case"cookie":{const[e,t]=a;return(0,n.jsx)("a",{href:`#/cookies/${e}/edit/${t}`,target:"_blank",rel:"noreferrer",children:(0,i.__)("Check manually")})}case"blockerDuplicate":{const{original:e,duplicate:t}=l;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("a",{href:`#/blocker/edit/${e}`,target:"_blank",rel:"noreferrer",children:(0,i.__)("Open original")})," ","•"," ",(0,n.jsx)("a",{href:`#/blocker/edit/${t}`,target:"_blank",rel:"noreferrer",children:(0,i.__)("Open newly created")})]})}case"blocker":return(0,n.jsx)("a",{href:`#/blocker/edit/${o}`,target:"_blank",rel:"noreferrer",children:(0,i.__)("Check manually")});case"link":return(0,n.jsx)("a",{href:c,rel:"noreferrer",children:d||(0,i.__)("Set manually")});default:return null}}),[]);return t?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(A.A,{style:{marginTop:0},children:(0,i.__)("Result")}),t.messages.map(((e,t)=>{let{message:s,severity:a,...l}=e;return(0,n.jsx)("div",{className:`notice notice-${a} inline below-h2 notice-alt`,style:{margin:"10px 0 0 0"},children:(0,n.jsxs)("p",{children:[(0,n.jsx)("span",{dangerouslySetInnerHTML:{__html:s}}),!!l.fix&&(0,n.jsxs)(n.Fragment,{children:[" • ",r(l)]})]})},t)}))]}):null}));var f=r(10099);const v={labelCol:{span:24},wrapperCol:{span:24}},S=(0,s.PA)((()=>{var e;const{message:t}=d.A.useApp(),{cookieStore:r,optionStore:s}=(0,y.g)(),{groups:a,busy:l}=r,[o]=u.A.useForm(),[A,S]=(0,c.useState)(!1),[C,I]=(0,c.useState)(void 0);(0,c.useEffect)((()=>{r.fetchGroups()}),[]);const F=(0,c.useCallback)((async e=>{S(!0);try{I(await(0,g.E)({location:k.h,request:{cookieGroup:0,cookieStatus:"keep",cookieSkipExisting:!0,blockerStatus:"keep",blockerSkipExisting:!0,tcfVendorConfigurationStatus:"keep",...e}})),s.fetchCurrentRevision(),s.fetchSettings(),s.fetchBannerLinks(),t.success((0,i.__)("Successfully imported!"))}catch(e){t.error(e.responseJSON.message)}finally{S(!1)}}),[]),w=(0,c.useCallback)((e=>{const t=new FileReader;return t.readAsText(e,"UTF-8"),t.onload=e=>o.setFieldsValue({json:e.target.result}),t.onerror=()=>o.setFieldsValue({json:(0,i.__)("File could not be read.")}),!1}),[o]),D=(0,c.useCallback)(((e,t)=>{try{const r=JSON.parse(e);return!t||!!r[t]}catch(e){return!1}}),[]);return(0,n.jsx)(h.A,{spinning:A||l,children:(0,n.jsxs)(u.A,{name:"import",form:o,...v,initialValues:{json:"",cookieStatus:"keep",cookieSkipExisting:!0,blockerStatus:"keep",blockerSkipExisting:!0,tcfVendorConfigurationStatus:"keep"},onFinish:F,labelWrap:!0,children:[(0,n.jsxs)(u.A.Item,{label:(0,i.__)("Content to import"),required:!0,children:[(0,n.jsx)(u.A.Item,{name:"json",rules:[{required:!0,message:(0,i.__)("Please provide a value!")}],extra:(0,i.__)("You can get the settings as JSON file or text if you export the settings in this or another WordPress installation."),children:(0,n.jsx)(p.A.TextArea,{rows:5})}),(0,n.jsx)("p",{className:"description",children:(0,i.__)("or select a file to upload:")}),(0,n.jsx)(_.A,{accept:"application/json",showUploadList:!1,beforeUpload:w,children:(0,n.jsxs)("a",{className:"button",children:[(0,n.jsx)(f.A,{})," ",(0,i.__)("Select File")]})})]}),(0,n.jsx)(u.A.Item,{noStyle:!0,shouldUpdate:(e,t)=>e.json!==t.json,children:e=>{let{getFieldValue:t}=e;return D(t("json"),"cookies")&&(0,n.jsxs)(u.A.Item,{label:(0,i.__)("Fallback service group"),required:!0,children:[(0,n.jsx)(u.A.Item,{name:"cookieGroup",noStyle:!0,rules:[{required:!0,message:(0,i.__)("Please provide a group!")}],children:(0,n.jsx)(m.A,{style:{width:"70%"},children:a.sortedGroups.map((e=>{let{data:{id:t,name:r}}=e;return(0,n.jsx)(m.A.Option,{value:t,children:r},t)}))})}),(0,n.jsx)("p",{className:"description",children:(0,i.__)("Select an alternative group to assign the service to if an imported service cannot be assigned to its original group.")})]})}}),(0,n.jsx)(u.A.Item,{noStyle:!0,shouldUpdate:(e,t)=>e.json!==t.json,children:e=>{let{getFieldValue:t}=e;return D(t("json"),"cookies")&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.A.Item,{children:(0,n.jsxs)("span",{children:[(0,n.jsx)(u.A.Item,{name:"cookieSkipExisting",valuePropName:"checked",noStyle:!0,children:(0,n.jsx)(x.A,{})}),(0,n.jsxs)("span",{children:["  ",(0,i.__)("Skip already existing services")]})]})}),(0,n.jsx)(u.A.Item,{label:(0,i.__)("Set service status"),name:"cookieStatus",rules:[{required:!0,message:(0,i.__)("Please choose a status!")}],children:(0,n.jsxs)(j.Ay.Group,{children:[(0,n.jsx)(j.Ay.Button,{value:"keep",children:(0,i.__)("Keep")}),(0,n.jsx)(j.Ay.Button,{value:"publish",children:(0,i.__)("Enabled")}),(0,n.jsx)(j.Ay.Button,{value:"private",children:(0,i.__)("Disabled")}),(0,n.jsx)(j.Ay.Button,{value:"draft",children:(0,i.__)("Draft")})]})})]})}}),(0,n.jsx)(u.A.Item,{noStyle:!0,shouldUpdate:(e,t)=>e.json!==t.json,children:e=>{let{getFieldValue:t}=e;return D(t("json"),"blocker")&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.A.Item,{children:(0,n.jsxs)("span",{children:[(0,n.jsx)(u.A.Item,{name:"blockerSkipExisting",valuePropName:"checked",noStyle:!0,children:(0,n.jsx)(x.A,{})}),(0,n.jsxs)("span",{children:["  ",(0,i.__)("Skip already existing content blocker")]})]})}),(0,n.jsx)(u.A.Item,{label:(0,i.__)("Set content blocker status"),name:"blockerStatus",rules:[{required:!0,message:(0,i.__)("Please choose a status!")}],children:(0,n.jsxs)(j.Ay.Group,{children:[(0,n.jsx)(j.Ay.Button,{value:"keep",children:(0,i.__)("Keep")}),(0,n.jsx)(j.Ay.Button,{value:"publish",children:(0,i.__)("Enabled")}),(0,n.jsx)(j.Ay.Button,{value:"private",children:(0,i.__)("Disabled")}),(0,n.jsx)(j.Ay.Button,{value:"draft",children:(0,i.__)("Draft")})]})})]})}}),(0,n.jsx)(u.A.Item,{noStyle:!0,shouldUpdate:(e,t)=>e.json!==t.json,children:e=>{let{getFieldValue:t}=e;return D(t("json"),"tcfVendorConfigurations")&&(0,n.jsx)(u.A.Item,{label:(0,i.__)("Set TCF Vendor configuration status"),name:"tcfVendorConfigurationStatus",rules:[{required:!0,message:(0,i.__)("Please choose a status!")}],children:(0,n.jsxs)(j.Ay.Group,{children:[(0,n.jsx)(j.Ay.Button,{value:"keep",children:(0,i.__)("Keep")}),(0,n.jsx)(j.Ay.Button,{value:"publish",children:(0,i.__)("Enabled")}),(0,n.jsx)(j.Ay.Button,{value:"private",children:(0,i.__)("Disabled")}),(0,n.jsx)(j.Ay.Button,{value:"draft",children:(0,i.__)("Draft")})]})})}}),(0,n.jsx)(u.A.Item,{children:(0,n.jsx)("input",{type:"submit",className:"button button-primary",style:{marginTop:10},value:(0,i.__)("Import")})}),(0,n.jsx)(u.A.Item,{style:{display:(null==C||null==(e=C.messages)?void 0:e.length)?"block":"none"},children:(0,n.jsx)(b,{result:C})})]})})}));var C=r(45854),I=r(62434),F=r(97745),w=r(55924);const D={labelCol:{span:24},wrapperCol:{span:24}},P=(0,s.PA)((()=>{const{message:e}=d.A.useApp(),{optionStore:{isTcf:t,others:{hints:{export:r}}}}=(0,y.g)(),[s]=u.A.useForm(),[a,l]=(0,c.useState)(!1),[o,_]=(0,c.useState)(""),m=(0,c.useCallback)((async e=>{l(!0);try{_(JSON.stringify(await(0,g.E)({location:I.A,params:e})))}finally{l(!1)}}),[]),x=(0,c.useCallback)((()=>{(0,F.l)(o),e.success((0,i.__)("Export successfully copied to the clipboard."))}),[o]),j=(0,c.useCallback)((e=>((async()=>{l(!0),window.location.href=(0,g.T)({location:I.A,params:{...s.getFieldsValue(),download:!0}}),l(!1)})(),e.preventDefault(),!1)),[l,s]);return(0,n.jsx)(h.A,{spinning:a,children:(0,n.jsxs)(u.A,{name:"export",form:s,...D,initialValues:{settings:!0,cookieGroups:!0,cookies:!0,blocker:!0,tcfVendorConfigurations:!0,customizeBanner:!0},onFinish:m,labelWrap:!0,children:[(0,n.jsxs)(u.A.Item,{label:(0,i.__)("Content to export"),children:[(0,n.jsx)("div",{children:(0,n.jsx)(u.A.Item,{name:"settings",noStyle:!0,valuePropName:"checked",children:(0,n.jsx)(C.A,{children:(0,i.__)("Settings")})})}),(0,n.jsx)("div",{children:(0,n.jsx)(u.A.Item,{name:"cookieGroups",noStyle:!0,valuePropName:"checked",children:(0,n.jsx)(C.A,{children:(0,i.__)("Service groups")})})}),(0,n.jsx)("div",{children:(0,n.jsx)(u.A.Item,{name:"cookies",noStyle:!0,valuePropName:"checked",children:(0,n.jsx)(C.A,{children:(0,i.__)("Services")})})}),(0,n.jsx)("div",{children:(0,n.jsx)(u.A.Item,{name:"blocker",noStyle:!0,valuePropName:"checked",children:(0,n.jsx)(C.A,{children:(0,i.__)("Content Blocker")})})}),t&&(0,n.jsx)("div",{children:(0,n.jsx)(u.A.Item,{name:"tcfVendorConfigurations",noStyle:!0,valuePropName:"checked",children:(0,n.jsx)(C.A,{children:(0,i.__)("TCF Vendor configurations")})})}),(0,n.jsx)("div",{children:(0,n.jsx)(u.A.Item,{name:"customizeBanner",noStyle:!0,valuePropName:"checked",children:(0,n.jsx)(C.A,{children:(0,i.__)("Cookie banner customization")})})})]}),(0,n.jsxs)(u.A.Item,{children:[(0,n.jsx)("input",{type:"submit",className:"button button-primary",style:{marginTop:10},value:(0,i.__)("Export")}),(0,n.jsx)("input",{onClick:j,type:"submit",className:"button",style:{margin:"10px 0 0 10px"},value:(0,i.__)("Download JSON")}),r.length>0&&(0,n.jsx)("div",{className:"notice notice-info inline below-h2 notice-alt",style:{margin:"10px 0 0 0"},children:(0,n.jsx)("p",{children:(0,w.g)(r.join("\n\n"))})})]}),(0,n.jsxs)(u.A.Item,{style:{display:o?"block":"none"},children:[(0,n.jsxs)(u.A.Item,{noStyle:!0,children:[(0,n.jsx)(A.A,{style:{marginTop:0},children:(0,i.__)("Result")}),(0,n.jsx)(p.A.TextArea,{onClick:x,value:o,readOnly:!0,rows:5})]}),(0,n.jsx)("p",{className:"description",children:(0,i.__)('Copy the exported content and paste it into the "Import" text area of your target WordPress installation.')})]})]})})}));var N=r(52624),Y=r(52135),T=r(38123),V=r.n(T);const B={labelCol:{span:24},wrapperCol:{span:24}},E=(0,s.PA)((()=>{const[e]=u.A.useForm(),[t,r]=(0,c.useState)(!1),[s,a]=(0,c.useState)(!1),l=(0,c.useCallback)((()=>{(async()=>{r(!0),a(!0);const{uuid:t,date:n}=e.getFieldsValue(),s=(0,g.T)({location:Y.R,params:{uuid:t||"",from:(null==n?void 0:n[0].format("YYYY-MM-DD"))||"",to:(null==n?void 0:n[1].format("YYYY-MM-DD"))||""}});window.open(s,"_blank"),r(!1)})()}),[r,a,e]);return(0,n.jsx)(h.A,{spinning:t,children:(0,n.jsxs)(u.A,{name:"export",form:e,...B,initialValues:{by:"",date:[],uuid:""},onFinish:l,labelWrap:!0,children:[(0,n.jsx)(u.A.Item,{label:(0,i.__)("Export by"),required:!0,children:(0,n.jsx)(u.A.Item,{name:"by",noStyle:!0,rules:[{required:!0,message:(0,i.__)("Please select an option!")}],children:(0,n.jsxs)(j.Ay.Group,{children:[(0,n.jsx)(j.Ay.Button,{value:"date",children:(0,i.__)("Date range")}),(0,n.jsx)(j.Ay.Button,{value:"uuid",children:(0,i.__)("UUID")})]})})}),(0,n.jsx)(u.A.Item,{noStyle:!0,shouldUpdate:(e,t)=>e.by!==t.by,children:e=>{let{getFieldValue:t}=e;return"date"===t("by")&&(0,n.jsx)(u.A.Item,{name:"date",label:(0,i.__)("Date range"),required:!0,rules:[{type:"array",required:!0,message:(0,i.__)("Please provide a valid date range!")}],children:(0,n.jsx)(N.U,{disabledDate:e=>!e||e.isAfter(V()())})})}}),(0,n.jsx)(u.A.Item,{noStyle:!0,shouldUpdate:(e,t)=>e.by!==t.by,children:e=>{let{getFieldValue:t}=e;return"uuid"===t("by")&&(0,n.jsx)(u.A.Item,{name:"uuid",label:(0,i.__)("UUID"),required:!0,rules:[{required:!0,pattern:/^\w{8}-\w{4}-\w{4}-\w{4}-\w{12}$/,message:(0,i.__)("Please provide a valid UUID!")}],children:(0,n.jsx)(p.A,{})})}}),(0,n.jsx)(u.A.Item,{children:(0,n.jsx)("input",{type:"submit",className:"button button-primary",style:{marginTop:10},value:(0,i.__)("Download CSV")})}),s&&(0,n.jsx)("div",{className:"notice notice-info inline below-h2 notice-alt",style:{margin:"10px 0 0 0"},children:(0,n.jsx)("p",{children:(0,i.__)("The CSV file can be very large because data in this format is redundant per line. In your WordPress database the consents are much smaller.")})})]})})}));var U=r(89657),L=r(53603);const q=(0,s.PA)((()=>{const e=(0,L.m)("import");return(0,n.jsxs)(a.A,{children:[(0,n.jsx)(l.A,{xl:16,sm:16,xs:24,children:(0,n.jsx)(o.A,{style:{margin:10},title:(0,i.__)("Import"),children:(0,n.jsx)(S,{})})}),(0,n.jsxs)(l.A,{xl:8,sm:8,xs:24,children:[(0,n.jsx)(o.A,{style:{margin:10},title:(0,i.__)("Export"),children:(0,n.jsx)(P,{})}),(0,n.jsx)(o.A,{style:{margin:10},title:(0,i.__)("Export consents"),children:(0,n.jsx)(E,{})})]}),(0,n.jsx)("p",{className:"description",style:{maxWidth:800,margin:"30px auto 0",textAlign:"center"},children:e}),(0,n.jsx)(U.b,{identifier:"import"})]})}))},52624:(e,t,r)=>{r.d(t,{U:()=>u});var n=r(3713),s=r(30617),a=r(38123),l=r.n(a),o=r(32386),i=r(16983);const c=o.A.generatePicker(i.A),{RangePicker:d}=c,u=e=>{const t=l().localeData();return(0,n.jsx)(d,{locale:{lang:{locale:l().locale(),placeholder:(0,s.__)("Select date"),rangePlaceholder:[(0,s.__)("Start date"),(0,s.__)("End date")],today:(0,s.__)("Today"),now:(0,s.__)("Now"),backToToday:(0,s.__)("Back to today"),ok:(0,s.__)("OK"),clear:(0,s.__)("Clear"),month:(0,s.__)("Month"),year:(0,s.__)("Year"),timeSelect:(0,s.__)("Select time"),dateSelect:(0,s.__)("Select date"),monthSelect:(0,s.__)("Choose a month"),yearSelect:(0,s.__)("Choose a year"),decadeSelect:(0,s.__)("Choose a decade"),yearFormat:"YYYY",dateFormat:t.longDateFormat("LL"),dayFormat:"D",dateTimeFormat:t.longDateFormat("LLL"),monthFormat:"MMMM",monthBeforeYear:!0,previousMonth:(0,s.__)("Previous month (PageUp)"),nextMonth:(0,s.__)("Next month (PageDown)"),previousYear:(0,s.__)("Last year (Control + left)"),nextYear:(0,s.__)("Next year (Control + right)"),previousDecade:(0,s.__)("Last decade"),nextDecade:(0,s.__)("Next decade"),previousCentury:(0,s.__)("Last century"),nextCentury:(0,s.__)("Next century")},timePickerLocale:{placeholder:(0,s.__)("Select time")},dateFormat:t.longDateFormat("LL"),dateTimeFormat:t.longDateFormat("LLL"),weekFormat:"YYYY-wo",monthFormat:"YYYY-MM"},...e})}}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/5.0.0/8bacc48ef3d44a23c462a5d32aebed4a/chunk-config-tab-import.lite.js.map
