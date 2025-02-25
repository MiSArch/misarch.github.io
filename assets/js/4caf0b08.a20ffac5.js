"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[32523],{19746:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>h,Bullet:()=>l,Details:()=>p,SpecifiedBy:()=>m,assets:()=>d,contentTitle:()=>r,default:()=>x,frontMatter:()=>c,metadata:()=>i,toc:()=>y});var a=t(85893),o=t(11151),s=t(67294);const c={id:"payment-information-connection",title:"PaymentInformationConnection"},r=void 0,i={id:"graphql/schema/types/objects/payment-information-connection",title:"PaymentInformationConnection",description:"A connection of payment informations",source:"@site/docs/graphql/schema/types/objects/payment-information-connection.mdx",sourceDirName:"graphql/schema/types/objects",slug:"/graphql/schema/types/objects/payment-information-connection",permalink:"/docs/graphql/schema/types/objects/payment-information-connection",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"payment-information-connection",title:"PaymentInformationConnection"},sidebar:"graphqlSupergraphSidebar",previous:{title:"PaymentConnection",permalink:"/docs/graphql/schema/types/objects/payment-connection"},next:{title:"PaymentInformation",permalink:"/docs/graphql/schema/types/objects/payment-information"}},d={},l=()=>{const e={span:"span",...(0,o.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},m=e=>{const n={a:"a",...(0,o.a)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const n={span:"span",...(0,o.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.span,{className:e.class,children:e.text})})},p=({dataOpen:e,dataClose:n,children:t,startOpen:c=!1})=>{const r={details:"details",summary:"summary",...(0,o.a)()},[i,d]=(0,s.useState)(c);return(0,a.jsxs)(r.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(r.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:i?e:n}),i&&t]})},y=[{value:"Fields",id:"fields",level:3},{value:'<code>PaymentInformationConnection.<b>nodes</b></code><Bullet></Bullet><code>[PaymentInformation!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"paymentinformationconnectionnodespaymentinformation--",level:4},{value:'<code>PaymentInformationConnection.<b>totalCount</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"paymentinformationconnectiontotalcountint--",level:4},{value:'<code>PaymentInformationConnection.<b>hasNextPage</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"paymentinformationconnectionhasnextpageboolean--",level:4},{value:"Returned By",id:"returned-by",level:3},{value:"Member Of",id:"member-of",level:3}];function f(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"A connection of payment informations"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"type PaymentInformationConnection {\n  nodes: [PaymentInformation!]\n  totalCount: Int!\n  hasNextPage: Boolean!\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(n.h4,{id:"paymentinformationconnectionnodespaymentinformation--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["PaymentInformationConnection.",(0,a.jsx)("b",{children:"nodes"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/docs/graphql/schema/types/objects/payment-information",children:(0,a.jsx)(n.code,{children:"[PaymentInformation!]"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"The resulting items"}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"paymentinformationconnectiontotalcountint--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["PaymentInformationConnection.",(0,a.jsx)("b",{children:"totalCount"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/docs/graphql/schema/types/scalars/int",children:(0,a.jsx)(n.code,{children:"Int!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"The total amount of items in this connection"}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"paymentinformationconnectionhasnextpageboolean--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["PaymentInformationConnection.",(0,a.jsx)("b",{children:"hasNextPage"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/docs/graphql/schema/types/scalars/boolean",children:(0,a.jsx)(n.code,{children:"Boolean!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Whether this connection has a next page"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"returned-by",children:"Returned By"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/graphql/schema/api/queries/payment-informations",children:(0,a.jsx)(n.code,{children:"paymentInformations"})}),"  ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"query"})]}),"\n",(0,a.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/graphql/schema/types/objects/user",children:(0,a.jsx)(n.code,{children:"User"})}),"  ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>c});var a=t(67294);const o={},s=a.createContext(o);function c(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);