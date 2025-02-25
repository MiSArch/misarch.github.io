"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[26527],{50852:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>h,Bullet:()=>o,Details:()=>m,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>c,default:()=>x,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var s=n(85893),a=n(11151),r=n(67294);const l={id:"payment-status",title:"PaymentStatus"},c=void 0,d={id:"graphql/schema/types/enums/payment-status",title:"PaymentStatus",description:"The status of an payment of an invoice or return",source:"@site/docs/graphql/schema/types/enums/payment-status.mdx",sourceDirName:"graphql/schema/types/enums",slug:"/graphql/schema/types/enums/payment-status",permalink:"/docs/graphql/schema/types/enums/payment-status",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"payment-status",title:"PaymentStatus"},sidebar:"graphqlSupergraphSidebar",previous:{title:"PaymentOrderField",permalink:"/docs/graphql/schema/types/enums/payment-order-field"},next:{title:"ProductItemOrderField",permalink:"/docs/graphql/schema/types/enums/product-item-order-field"}},i={},o=()=>{const e={span:"span",...(0,a.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,a.a)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const t={span:"span",...(0,a.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(t.span,{className:e.class,children:e.text})})},m=({dataOpen:e,dataClose:t,children:n,startOpen:l=!1})=>{const c={details:"details",summary:"summary",...(0,a.a)()},[d,i]=(0,r.useState)(l);return(0,s.jsxs)(c.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(c.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:d?e:t}),d&&n]})},p=[{value:"Values",id:"values",level:3},{value:"<code>PaymentStatus.<b>OPEN</b></code>",id:"paymentstatusopen",level:4},{value:"<code>PaymentStatus.<b>PENDING</b></code>",id:"paymentstatuspending",level:4},{value:"<code>PaymentStatus.<b>SUCCEEDED</b></code>",id:"paymentstatussucceeded",level:4},{value:"<code>PaymentStatus.<b>FAILED</b></code>",id:"paymentstatusfailed",level:4},{value:"<code>PaymentStatus.<b>INKASSO</b></code>",id:"paymentstatusinkasso",level:4},{value:"Member Of",id:"member-of",level:3}];function y(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"The status of an payment of an invoice or return"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:"enum PaymentStatus {\n  OPEN\n  PENDING\n  SUCCEEDED\n  FAILED\n  INKASSO\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"values",children:"Values"}),"\n",(0,s.jsx)(t.h4,{id:"paymentstatusopen",children:(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["PaymentStatus.",(0,s.jsx)("b",{children:"OPEN"})]})})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"The payment was created but not yet processed"}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"paymentstatuspending",children:(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["PaymentStatus.",(0,s.jsx)("b",{children:"PENDING"})]})})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"The payment is currently being processed"}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"paymentstatussucceeded",children:(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["PaymentStatus.",(0,s.jsx)("b",{children:"SUCCEEDED"})]})})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"The payment was successfully processed and the amount was transfered"}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"paymentstatusfailed",children:(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["PaymentStatus.",(0,s.jsx)("b",{children:"FAILED"})]})})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"The payment processing failed indefinetely"}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"paymentstatusinkasso",children:(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["PaymentStatus.",(0,s.jsx)("b",{children:"INKASSO"})]})})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"The payment was sold to external inkasso service"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/graphql/schema/types/objects/payment",children:(0,s.jsx)(t.code,{children:"Payment"})}),"  ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(o,{}),(0,s.jsx)(t.a,{href:"/docs/graphql/schema/types/inputs/payment-filter",children:(0,s.jsx)(t.code,{children:"PaymentFilter"})}),"  ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"input"})]})]})}function x(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(y,{...e})}):y(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>l});var s=n(67294);const a={},r=s.createContext(a);function l(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);