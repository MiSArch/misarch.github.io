"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72975],{69322:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>h,Bullet:()=>c,Details:()=>p,SpecifiedBy:()=>m,assets:()=>i,contentTitle:()=>o,default:()=>x,frontMatter:()=>d,metadata:()=>l,toc:()=>y});var a=n(85893),s=n(11151),r=n(67294);const d={id:"payment-method",title:"PaymentMethod"},o=void 0,l={id:"graphql/payment/types/enums/payment-method",title:"PaymentMethod",description:"The supported payment methods",source:"@site/docs/graphql/payment/types/enums/payment-method.mdx",sourceDirName:"graphql/payment/types/enums",slug:"/graphql/payment/types/enums/payment-method",permalink:"/docs/graphql/payment/types/enums/payment-method",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"payment-method",title:"PaymentMethod"},sidebar:"graphqlSidebar",previous:{title:"PaymentInformationOrderField",permalink:"/docs/graphql/payment/types/enums/payment-information-order-field"},next:{title:"PaymentOrderField",permalink:"/docs/graphql/payment/types/enums/payment-order-field"}},i={},c=()=>{const e={span:"span",...(0,s.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},m=e=>{const t={a:"a",...(0,s.a)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const t={span:"span",...(0,s.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{className:e.class,children:e.text})})},p=({dataOpen:e,dataClose:t,children:n,startOpen:d=!1})=>{const o={details:"details",summary:"summary",...(0,s.a)()},[l,i]=(0,r.useState)(d);return(0,a.jsxs)(o.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(o.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:l?e:t}),l&&n]})},y=[{value:"Values",id:"values",level:3},{value:"<code>PaymentMethod.<b>INVOICE</b></code>",id:"paymentmethodinvoice",level:4},{value:"<code>PaymentMethod.<b>PREPAYMENT</b></code>",id:"paymentmethodprepayment",level:4},{value:"<code>PaymentMethod.<b>CREDIT_CARD</b></code>",id:"paymentmethodcredit_card",level:4},{value:"Member Of",id:"member-of",level:3}];function u(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"The supported payment methods"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"enum PaymentMethod {\n  INVOICE\n  PREPAYMENT\n  CREDIT_CARD\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"values",children:"Values"}),"\n",(0,a.jsx)(t.h4,{id:"paymentmethodinvoice",children:(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["PaymentMethod.",(0,a.jsx)("b",{children:"INVOICE"})]})})}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"The user pays after ordering the product"}),"\n"]}),"\n",(0,a.jsx)(t.h4,{id:"paymentmethodprepayment",children:(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["PaymentMethod.",(0,a.jsx)("b",{children:"PREPAYMENT"})]})})}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"The user pays before the product is shipped"}),"\n"]}),"\n",(0,a.jsx)(t.h4,{id:"paymentmethodcredit_card",children:(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["PaymentMethod.",(0,a.jsx)("b",{children:"CREDIT_CARD"})]})})}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"The amount is charged to the users credit card"}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/docs/graphql/payment/types/inputs/payment-filter",children:(0,a.jsx)(t.code,{children:"PaymentFilter"})}),"  ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/docs/graphql/payment/types/objects/payment-information",children:(0,a.jsx)(t.code,{children:"PaymentInformation"})}),"  ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/docs/graphql/payment/types/inputs/payment-information-filter",children:(0,a.jsx)(t.code,{children:"PaymentInformationFilter"})}),"  ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"input"})]})]})}function x(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>d});var a=n(67294);const s={},r=a.createContext(s);function d(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);