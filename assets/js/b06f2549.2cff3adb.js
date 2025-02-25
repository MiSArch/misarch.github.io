"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[85695],{70489:(e,n,s)=>{s.r(n),s.d(n,{Badge:()=>u,Bullet:()=>o,Details:()=>h,SpecifiedBy:()=>p,assets:()=>r,contentTitle:()=>c,default:()=>f,frontMatter:()=>d,metadata:()=>l,toc:()=>b});var t=s(85893),a=s(11151),i=s(67294);const d={id:"find-applicable-discounts-input",title:"FindApplicableDiscountsInput"},c=void 0,l={id:"graphql/schema/types/inputs/find-applicable-discounts-input",title:"FindApplicableDiscountsInput",description:"Input for the findApplicableDiscounts query.",source:"@site/docs/graphql/schema/types/inputs/find-applicable-discounts-input.mdx",sourceDirName:"graphql/schema/types/inputs",slug:"/graphql/schema/types/inputs/find-applicable-discounts-input",permalink:"/docs/graphql/schema/types/inputs/find-applicable-discounts-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"find-applicable-discounts-input",title:"FindApplicableDiscountsInput"},sidebar:"graphqlSupergraphSidebar",previous:{title:"DiscountUsageOrderInput",permalink:"/docs/graphql/schema/types/inputs/discount-usage-order-input"},next:{title:"FindApplicableDiscountsProductVariantInput",permalink:"/docs/graphql/schema/types/inputs/find-applicable-discounts-product-variant-input"}},r={},o=()=>{const e={span:"span",...(0,a.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const n={a:"a",...(0,a.a)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,a.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:n,children:s,startOpen:d=!1})=>{const c={details:"details",summary:"summary",...(0,a.a)()},[l,r]=(0,i.useState)(d);return(0,t.jsxs)(c.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(c.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:l?e:n}),l&&s]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>FindApplicableDiscountsInput.<b>orderAmount</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"findapplicablediscountsinputorderamountint--",level:4},{value:'<code>FindApplicableDiscountsInput.<b>productVariants</b></code><Bullet></Bullet><code>[FindApplicableDiscountsProductVariantInput!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"findapplicablediscountsinputproductvariantsfindapplicablediscountsproductvariantinput--",level:4},{value:'<code>FindApplicableDiscountsInput.<b>userId</b></code><Bullet></Bullet><code>UUID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"findapplicablediscountsinputuseriduuid--",level:4},{value:"Member Of",id:"member-of",level:3}];function g(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Input for the findApplicableDiscounts query."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"input FindApplicableDiscountsInput {\n  orderAmount: Int!\n  productVariants: [FindApplicableDiscountsProductVariantInput!]!\n  userId: UUID!\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(n.h4,{id:"findapplicablediscountsinputorderamountint--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["FindApplicableDiscountsInput.",(0,t.jsx)("b",{children:"orderAmount"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(n.a,{href:"/docs/graphql/schema/types/scalars/int",children:(0,t.jsx)(n.code,{children:"Int!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"The order amount, used to filter applicable discounts."}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"findapplicablediscountsinputproductvariantsfindapplicablediscountsproductvariantinput--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["FindApplicableDiscountsInput.",(0,t.jsx)("b",{children:"productVariants"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(n.a,{href:"/docs/graphql/schema/types/inputs/find-applicable-discounts-product-variant-input",children:(0,t.jsx)(n.code,{children:"[FindApplicableDiscountsProductVariantInput!]!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"The list of product variants for which discounts should be computed."}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"findapplicablediscountsinputuseriduuid--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["FindApplicableDiscountsInput.",(0,t.jsx)("b",{children:"userId"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(n.a,{href:"/docs/graphql/schema/types/scalars/uuid",children:(0,t.jsx)(n.code,{children:"UUID!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"The user id for which discounts should be computed."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/graphql/schema/api/queries/find-applicable-discounts",children:(0,t.jsx)(n.code,{children:"findApplicableDiscounts"})}),"  ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"query"})]})]})}function f(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>d});var t=s(67294);const a={},i=t.createContext(a);function d(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);