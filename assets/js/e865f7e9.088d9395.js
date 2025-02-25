"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[42427],{16770:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>p,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>c,default:()=>g,frontMatter:()=>a,metadata:()=>o,toc:()=>m});var s=r(85893),n=r(11151),d=r(67294);const a={id:"reserve-product-items-batch-input",title:"ReserveProductItemsBatchInput"},c=void 0,o={id:"graphql/inventory/types/inputs/reserve-product-items-batch-input",title:"ReserveProductItemsBatchInput",description:"The input to reserve a batch of product items",source:"@site/docs/graphql/inventory/types/inputs/reserve-product-items-batch-input.mdx",sourceDirName:"graphql/inventory/types/inputs",slug:"/graphql/inventory/types/inputs/reserve-product-items-batch-input",permalink:"/docs/graphql/inventory/types/inputs/reserve-product-items-batch-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"reserve-product-items-batch-input",title:"ReserveProductItemsBatchInput"},sidebar:"graphqlSidebar",previous:{title:"ProductItemOrder",permalink:"/docs/graphql/inventory/types/inputs/product-item-order"},next:{title:"UpdateProductItemInput",permalink:"/docs/graphql/inventory/types/inputs/update-product-item-input"}},i={},l=()=>{const e={span:"span",...(0,n.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,n.a)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,n.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(t.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:t,children:r,startOpen:a=!1})=>{const c={details:"details",summary:"summary",...(0,n.a)()},[o,i]=(0,d.useState)(a);return(0,s.jsxs)(c.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(c.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:o?e:t}),o&&r]})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>ReserveProductItemsBatchInput.<b>productVariantId</b></code><Bullet></Bullet><code>UUID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"reserveproductitemsbatchinputproductvariantiduuid--",level:4},{value:'<code>ReserveProductItemsBatchInput.<b>number</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"reserveproductitemsbatchinputnumberint--",level:4},{value:'<code>ReserveProductItemsBatchInput.<b>orderId</b></code><Bullet></Bullet><code>UUID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"reserveproductitemsbatchinputorderiduuid--",level:4},{value:"Member Of",id:"member-of",level:3}];function b(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"The input to reserve a batch of product items"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:"input ReserveProductItemsBatchInput {\n  productVariantId: UUID!\n  number: Int!\n  orderId: UUID!\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(t.h4,{id:"reserveproductitemsbatchinputproductvariantiduuid--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["ReserveProductItemsBatchInput.",(0,s.jsx)("b",{children:"productVariantId"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(t.a,{href:"/docs/graphql/inventory/types/scalars/uuid",children:(0,s.jsx)(t.code,{children:"UUID!"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"The product variant id of the product item"}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"reserveproductitemsbatchinputnumberint--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["ReserveProductItemsBatchInput.",(0,s.jsx)("b",{children:"number"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(t.a,{href:"/docs/graphql/inventory/types/scalars/int",children:(0,s.jsx)(t.code,{children:"Int!"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"The number of product items to reserve"}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"reserveproductitemsbatchinputorderiduuid--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["ReserveProductItemsBatchInput.",(0,s.jsx)("b",{children:"orderId"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(t.a,{href:"/docs/graphql/inventory/types/scalars/uuid",children:(0,s.jsx)(t.code,{children:"UUID!"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"The order id that reserves the product items"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/graphql/inventory/api/mutations/reserve-product-item-batch",children:(0,s.jsx)(t.code,{children:"reserveProductItemBatch"})}),"  ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"mutation"})]})]})}function g(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>c,a:()=>a});var s=r(67294);const n={},d=s.createContext(n);function a(e){const t=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);