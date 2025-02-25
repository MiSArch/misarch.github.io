"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[89447],{65911:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>h,Bullet:()=>i,Details:()=>p,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>a,default:()=>b,frontMatter:()=>d,metadata:()=>r,toc:()=>g});var o=t(85893),c=t(11151),s=t(67294);const d={id:"product-connection",title:"ProductConnection"},a=void 0,r={id:"graphql/discount/types/objects/product-connection",title:"ProductConnection",description:"A connection to a list of Product values.",source:"@site/docs/graphql/discount/types/objects/product-connection.mdx",sourceDirName:"graphql/discount/types/objects",slug:"/graphql/discount/types/objects/product-connection",permalink:"/docs/graphql/discount/types/objects/product-connection",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"product-connection",title:"ProductConnection"},sidebar:"graphqlSidebar",previous:{title:"DiscountsForProductVariant",permalink:"/docs/graphql/discount/types/objects/discounts-for-product-variant"},next:{title:"ProductVariantConnection",permalink:"/docs/graphql/discount/types/objects/product-variant-connection"}},l={},i=()=>{const e={span:"span",...(0,c.a)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,c.a)()};return(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const n={span:"span",...(0,c.a)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(n.span,{className:e.class,children:e.text})})},p=({dataOpen:e,dataClose:n,children:t,startOpen:d=!1})=>{const a={details:"details",summary:"summary",...(0,c.a)()},[r,l]=(0,s.useState)(d);return(0,o.jsxs)(a.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)(a.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:r?e:n}),r&&t]})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>ProductConnection.<b>hasNextPage</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"productconnectionhasnextpageboolean--",level:4},{value:'<code>ProductConnection.<b>nodes</b></code><Bullet></Bullet><code>[Product!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"productconnectionnodesproduct--",level:4},{value:'<code>ProductConnection.<b>totalCount</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"productconnectiontotalcountint--",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["A connection to a list of ",(0,o.jsx)(n.code,{children:"Product"})," values."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-graphql",children:"type ProductConnection {\n  hasNextPage: Boolean!\n  nodes: [Product!]!\n  totalCount: Int!\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(n.h4,{id:"productconnectionhasnextpageboolean--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["ProductConnection.",(0,o.jsx)("b",{children:"hasNextPage"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(n.a,{href:"/docs/graphql/discount/types/scalars/boolean",children:(0,o.jsx)(n.code,{children:"Boolean!"})})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Whether this connection has a next page"}),"\n"]}),"\n",(0,o.jsxs)(n.h4,{id:"productconnectionnodesproduct--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["ProductConnection.",(0,o.jsx)("b",{children:"nodes"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(n.a,{href:"/docs/graphql/discount/types/objects/product",children:(0,o.jsx)(n.code,{children:"[Product!]!"})})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"The resulting items."}),"\n"]}),"\n",(0,o.jsxs)(n.h4,{id:"productconnectiontotalcountint--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["ProductConnection.",(0,o.jsx)("b",{children:"totalCount"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(n.a,{href:"/docs/graphql/discount/types/scalars/int",children:(0,o.jsx)(n.code,{children:"Int!"})})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"The total amount of items in this connection"}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/graphql/discount/types/objects/discount",children:(0,o.jsx)(n.code,{children:"Discount"})}),"  ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function b(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(x,{...e})}):x(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>d});var o=t(67294);const c={},s=o.createContext(c);function d(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);