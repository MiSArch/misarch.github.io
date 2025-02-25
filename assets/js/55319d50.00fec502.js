"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[50746],{54342:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>u,Bullet:()=>l,Details:()=>p,SpecifiedBy:()=>h,assets:()=>i,contentTitle:()=>r,default:()=>b,frontMatter:()=>s,metadata:()=>d,toc:()=>x});var a=t(85893),c=t(11151),o=t(67294);const s={id:"product-variant-connection",title:"ProductVariantConnection"},r=void 0,d={id:"graphql/schema/types/objects/product-variant-connection",title:"ProductVariantConnection",description:"A connection to a list of ProductVariant values.",source:"@site/docs/graphql/schema/types/objects/product-variant-connection.mdx",sourceDirName:"graphql/schema/types/objects",slug:"/graphql/schema/types/objects/product-variant-connection",permalink:"/docs/graphql/schema/types/objects/product-variant-connection",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"product-variant-connection",title:"ProductVariantConnection"},sidebar:"graphqlSupergraphSidebar",previous:{title:"ProductItem",permalink:"/docs/graphql/schema/types/objects/product-item"},next:{title:"ProductVariantVersionConnection",permalink:"/docs/graphql/schema/types/objects/product-variant-version-connection"}},i={},l=()=>{const e={span:"span",...(0,c.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const n={a:"a",...(0,c.a)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,c.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.span,{className:e.class,children:e.text})})},p=({dataOpen:e,dataClose:n,children:t,startOpen:s=!1})=>{const r={details:"details",summary:"summary",...(0,c.a)()},[d,i]=(0,o.useState)(s);return(0,a.jsxs)(r.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(r.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:d?e:n}),d&&t]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>ProductVariantConnection.<b>hasNextPage</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"productvariantconnectionhasnextpageboolean--",level:4},{value:'<code>ProductVariantConnection.<b>nodes</b></code><Bullet></Bullet><code>[ProductVariant!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"productvariantconnectionnodesproductvariant--",level:4},{value:'<code>ProductVariantConnection.<b>totalCount</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"productvariantconnectiontotalcountint--",level:4},{value:"Member Of",id:"member-of",level:3}];function g(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["A connection to a list of ",(0,a.jsx)(n.code,{children:"ProductVariant"})," values."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"type ProductVariantConnection {\n  hasNextPage: Boolean!\n  nodes: [ProductVariant!]!\n  totalCount: Int!\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(n.h4,{id:"productvariantconnectionhasnextpageboolean--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ProductVariantConnection.",(0,a.jsx)("b",{children:"hasNextPage"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/docs/graphql/schema/types/scalars/boolean",children:(0,a.jsx)(n.code,{children:"Boolean!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Whether this connection has a next page"}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"productvariantconnectionnodesproductvariant--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ProductVariantConnection.",(0,a.jsx)("b",{children:"nodes"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/docs/graphql/schema/types/objects/product-variant",children:(0,a.jsx)(n.code,{children:"[ProductVariant!]!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"The resulting items."}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"productvariantconnectiontotalcountint--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ProductVariantConnection.",(0,a.jsx)("b",{children:"totalCount"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/docs/graphql/schema/types/scalars/int",children:(0,a.jsx)(n.code,{children:"Int!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"The total amount of items in this connection"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/graphql/schema/types/objects/discount",children:(0,a.jsx)(n.code,{children:"Discount"})}),"  ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/docs/graphql/schema/types/objects/product",children:(0,a.jsx)(n.code,{children:"Product"})}),"  ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/docs/graphql/schema/types/objects/wishlist",children:(0,a.jsx)(n.code,{children:"Wishlist"})}),"  ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function b(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(g,{...e})}):g(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var a=t(67294);const c={},o=a.createContext(c);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);