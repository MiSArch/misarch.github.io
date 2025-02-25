"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[35785],{44514:(e,r,t)=>{t.r(r),t.d(r,{Badge:()=>h,Bullet:()=>i,Details:()=>p,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>l,default:()=>x,frontMatter:()=>d,metadata:()=>o,toc:()=>m});var s=t(85893),n=t(11151),a=t(67294);const d={id:"order-status",title:"OrderStatus"},l=void 0,o={id:"graphql/schema/types/enums/order-status",title:"OrderStatus",description:"Describes if order is placed, or yet pending. An order can be rejected during its lifetime.",source:"@site/docs/graphql/schema/types/enums/order-status.mdx",sourceDirName:"graphql/schema/types/enums",slug:"/graphql/schema/types/enums/order-status",permalink:"/docs/graphql/schema/types/enums/order-status",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"order-status",title:"OrderStatus"},sidebar:"graphqlSupergraphSidebar",previous:{title:"OrderOrderField",permalink:"/docs/graphql/schema/types/enums/order-order-field"},next:{title:"PaymentInformationOrderField",permalink:"/docs/graphql/schema/types/enums/payment-information-order-field"}},c={},i=()=>{const e={span:"span",...(0,n.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const r={a:"a",...(0,n.a)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(r.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const r={span:"span",...(0,n.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(r.span,{className:e.class,children:e.text})})},p=({dataOpen:e,dataClose:r,children:t,startOpen:d=!1})=>{const l={details:"details",summary:"summary",...(0,n.a)()},[o,c]=(0,a.useState)(d);return(0,s.jsxs)(l.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(l.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:o?e:r}),o&&t]})},m=[{value:"Values",id:"values",level:3},{value:"<code>OrderStatus.<b>PENDING</b></code>",id:"orderstatuspending",level:4},{value:"<code>OrderStatus.<b>PLACED</b></code>",id:"orderstatusplaced",level:4},{value:"<code>OrderStatus.<b>REJECTED</b></code>",id:"orderstatusrejected",level:4},{value:"Member Of",id:"member-of",level:3}];function f(e){const r={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:"Describes if order is placed, or yet pending. An order can be rejected during its lifetime."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-graphql",children:"enum OrderStatus {\n  PENDING\n  PLACED\n  REJECTED\n}\n"})}),"\n",(0,s.jsx)(r.h3,{id:"values",children:"Values"}),"\n",(0,s.jsx)(r.h4,{id:"orderstatuspending",children:(0,s.jsx)(r.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["OrderStatus.",(0,s.jsx)("b",{children:"PENDING"})]})})}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:"Order is saved a a template, this status can only last for max. 1 hour."}),"\n"]}),"\n",(0,s.jsx)(r.h4,{id:"orderstatusplaced",children:(0,s.jsx)(r.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["OrderStatus.",(0,s.jsx)("b",{children:"PLACED"})]})})}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:"Order is placed, which means SAGA for payment, fullfill and other validity checks need to be triggered."}),"\n"]}),"\n",(0,s.jsx)(r.h4,{id:"orderstatusrejected",children:(0,s.jsx)(r.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["OrderStatus.",(0,s.jsx)("b",{children:"REJECTED"})]})})}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:"Something went wrong with the order and it was compensated in all relevant serivces."}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/graphql/schema/types/objects/order",children:(0,s.jsx)(r.code,{children:"Order"})}),"  ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},11151:(e,r,t)=>{t.d(r,{Z:()=>l,a:()=>d});var s=t(67294);const n={},a=s.createContext(n);function d(e){const r=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),s.createElement(a.Provider,{value:r},e.children)}}}]);