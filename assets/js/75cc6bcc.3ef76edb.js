"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[71454],{52961:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>p,Bullet:()=>c,Details:()=>f,SpecifiedBy:()=>m,assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var a=t(85893),r=t(11151),i=t(67294);const s={id:"payment-informations",title:"paymentInformations"},o=void 0,l={id:"graphql/payment/api/queries/payment-informations",title:"paymentInformations",description:"Retrieves all payment informations matching the filter",source:"@site/docs/graphql/payment/api/queries/payment-informations.mdx",sourceDirName:"graphql/payment/api/queries",slug:"/graphql/payment/api/queries/payment-informations",permalink:"/docs/graphql/payment/api/queries/payment-informations",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"payment-informations",title:"paymentInformations"},sidebar:"graphqlSidebar",previous:{title:"_entities",permalink:"/docs/graphql/payment/api/queries/entities"},next:{title:"payments",permalink:"/docs/graphql/payment/api/queries/payments"}},d={},c=()=>{const e={span:"span",...(0,r.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},m=e=>{const n={a:"a",...(0,r.a)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const n={span:"span",...(0,r.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.span,{className:e.class,children:e.text})})},f=({dataOpen:e,dataClose:n,children:t,startOpen:s=!1})=>{const o={details:"details",summary:"summary",...(0,r.a)()},[l,d]=(0,i.useState)(s);return(0,a.jsxs)(o.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(o.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:l?e:n}),l&&t]})},h=[{value:"Arguments",id:"arguments",level:3},{value:'<code>paymentInformations.<b>skip</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"paymentinformationsskipint-",level:4},{value:'<code>paymentInformations.<b>first</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"paymentinformationsfirstint-",level:4},{value:'<code>paymentInformations.<b>orderBy</b></code><Bullet></Bullet><code>PaymentInformationOrder</code> <Badge class="badge badge--secondary"></Badge>',id:"paymentinformationsorderbypaymentinformationorder-",level:4},{value:'<code>paymentInformations.<b>filter</b></code><Bullet></Bullet><code>PaymentInformationFilter</code> <Badge class="badge badge--secondary"></Badge>',id:"paymentinformationsfilterpaymentinformationfilter-",level:4},{value:"Type",id:"type",level:3},{value:'<code>PaymentInformationConnection</code> <Badge class="badge badge--secondary"></Badge>',id:"paymentinformationconnection-",level:4}];function y(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Retrieves all payment informations matching the filter"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"paymentInformations(\n  skip: Int = 0\n  first: Int = 2147483647\n  orderBy: PaymentInformationOrder\n  filter: PaymentInformationFilter\n): PaymentInformationConnection!\n"})}),"\n",(0,a.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,a.jsxs)(n.h4,{id:"paymentinformationsskipint-",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["paymentInformations.",(0,a.jsx)("b",{children:"skip"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(n.a,{href:"/docs/graphql/payment/types/scalars/int",children:(0,a.jsx)(n.code,{children:"Int"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Number of items to skip"}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"paymentinformationsfirstint-",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["paymentInformations.",(0,a.jsx)("b",{children:"first"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(n.a,{href:"/docs/graphql/payment/types/scalars/int",children:(0,a.jsx)(n.code,{children:"Int"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Number of items to return"}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"paymentinformationsorderbypaymentinformationorder-",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["paymentInformations.",(0,a.jsx)("b",{children:"orderBy"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(n.a,{href:"/docs/graphql/payment/types/inputs/payment-information-order",children:(0,a.jsx)(n.code,{children:"PaymentInformationOrder"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Ordering"}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"paymentinformationsfilterpaymentinformationfilter-",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["paymentInformations.",(0,a.jsx)("b",{children:"filter"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(n.a,{href:"/docs/graphql/payment/types/inputs/payment-information-filter",children:(0,a.jsx)(n.code,{children:"PaymentInformationFilter"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Filtering"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"type",children:"Type"}),"\n",(0,a.jsxs)(n.h4,{id:"paymentinformationconnection-",children:[(0,a.jsx)(n.a,{href:"/docs/graphql/payment/types/objects/payment-information-connection",children:(0,a.jsx)(n.code,{children:"PaymentInformationConnection"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"A connection of payment informations"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(y,{...e})}):y(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>s});var a=t(67294);const r={},i=a.createContext(r);function s(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);