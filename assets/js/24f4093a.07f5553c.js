"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7174],{37832:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>o,Details:()=>h,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>d,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var a=n(85893),r=n(11151),s=n(67294);const i={id:"place-order-input",title:"PlaceOrderInput"},d=void 0,c={id:"graphql/schema/types/inputs/place-order-input",title:"PlaceOrderInput",description:"No description",source:"@site/docs/graphql/schema/types/inputs/place-order-input.mdx",sourceDirName:"graphql/schema/types/inputs",slug:"/graphql/schema/types/inputs/place-order-input",permalink:"/docs/graphql/schema/types/inputs/place-order-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"place-order-input",title:"PlaceOrderInput"},sidebar:"graphqlSupergraphSidebar",previous:{title:"PaymentOrder",permalink:"/docs/graphql/schema/types/inputs/payment-order"},next:{title:"ProductFilterInput",permalink:"/docs/graphql/schema/types/inputs/product-filter-input"}},l={},o=()=>{const e={span:"span",...(0,r.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const t={a:"a",...(0,r.a)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,r.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:t,children:n,startOpen:i=!1})=>{const d={details:"details",summary:"summary",...(0,r.a)()},[c,l]=(0,s.useState)(i);return(0,a.jsxs)(d.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(d.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:t}),c&&n]})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>PlaceOrderInput.<b>id</b></code><Bullet></Bullet><code>UUID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"placeorderinputiduuid--",level:4},{value:'<code>PlaceOrderInput.<b>paymentAuthorization</b></code><Bullet></Bullet><code>PaymentAuthorizationInput</code> <Badge class="badge badge--secondary"></Badge>',id:"placeorderinputpaymentauthorizationpaymentauthorizationinput-",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"No description"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"input PlaceOrderInput {\n  id: UUID!\n  paymentAuthorization: PaymentAuthorizationInput\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(t.h4,{id:"placeorderinputiduuid--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["PlaceOrderInput.",(0,a.jsx)("b",{children:"id"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/docs/graphql/schema/types/scalars/uuid",children:(0,a.jsx)(t.code,{children:"UUID!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"UUID of order to place."}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"placeorderinputpaymentauthorizationpaymentauthorizationinput-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["PlaceOrderInput.",(0,a.jsx)("b",{children:"paymentAuthorization"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/docs/graphql/schema/types/inputs/payment-authorization-input",children:(0,a.jsx)(t.code,{children:"PaymentAuthorizationInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Optional payment authorization data."}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/docs/graphql/schema/api/mutations/place-order",children:(0,a.jsx)(t.code,{children:"placeOrder"})}),"  ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"mutation"})]})]})}function g(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>i});var a=n(67294);const r={},s=a.createContext(r);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);