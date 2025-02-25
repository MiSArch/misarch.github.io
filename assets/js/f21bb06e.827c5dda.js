"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[29084],{2900:(e,n,s)=>{s.r(n),s.d(n,{Badge:()=>h,Bullet:()=>r,Details:()=>g,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>d,default:()=>b,frontMatter:()=>a,metadata:()=>i,toc:()=>x});var t=s(85893),o=s(11151),c=s(67294);const a={id:"discount-connection",title:"DiscountConnection"},d=void 0,i={id:"graphql/discount/types/objects/discount-connection",title:"DiscountConnection",description:"A connection to a list of Discount values.",source:"@site/docs/graphql/discount/types/objects/discount-connection.mdx",sourceDirName:"graphql/discount/types/objects",slug:"/graphql/discount/types/objects/discount-connection",permalink:"/docs/graphql/discount/types/objects/discount-connection",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"discount-connection",title:"DiscountConnection"},sidebar:"graphqlSidebar",previous:{title:"Coupon",permalink:"/docs/graphql/discount/types/objects/coupon"},next:{title:"DiscountUsageConnection",permalink:"/docs/graphql/discount/types/objects/discount-usage-connection"}},l={},r=()=>{const e={span:"span",...(0,o.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,o.a)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const n={span:"span",...(0,o.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:n,children:s,startOpen:a=!1})=>{const d={details:"details",summary:"summary",...(0,o.a)()},[i,l]=(0,c.useState)(a);return(0,t.jsxs)(d.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(d.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:i?e:n}),i&&s]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>DiscountConnection.<b>hasNextPage</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"discountconnectionhasnextpageboolean--",level:4},{value:'<code>DiscountConnection.<b>nodes</b></code><Bullet></Bullet><code>[Discount!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"discountconnectionnodesdiscount--",level:4},{value:'<code>DiscountConnection.<b>totalCount</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"discountconnectiontotalcountint--",level:4},{value:"Member Of",id:"member-of",level:3}];function p(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["A connection to a list of ",(0,t.jsx)(n.code,{children:"Discount"})," values."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"type DiscountConnection {\n  hasNextPage: Boolean!\n  nodes: [Discount!]!\n  totalCount: Int!\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(n.h4,{id:"discountconnectionhasnextpageboolean--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["DiscountConnection.",(0,t.jsx)("b",{children:"hasNextPage"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(n.a,{href:"/docs/graphql/discount/types/scalars/boolean",children:(0,t.jsx)(n.code,{children:"Boolean!"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Whether this connection has a next page"}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"discountconnectionnodesdiscount--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["DiscountConnection.",(0,t.jsx)("b",{children:"nodes"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(n.a,{href:"/docs/graphql/discount/types/objects/discount",children:(0,t.jsx)(n.code,{children:"[Discount!]!"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"The resulting items."}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"discountconnectiontotalcountint--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["DiscountConnection.",(0,t.jsx)("b",{children:"totalCount"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(n.a,{href:"/docs/graphql/discount/types/scalars/int",children:(0,t.jsx)(n.code,{children:"Int!"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"The total amount of items in this connection"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/graphql/discount/types/objects/category",children:(0,t.jsx)(n.code,{children:"Category"})}),"  ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(r,{}),(0,t.jsx)(n.a,{href:"/docs/graphql/discount/types/objects/product",children:(0,t.jsx)(n.code,{children:"Product"})}),"  ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(r,{}),(0,t.jsx)(n.a,{href:"/docs/graphql/discount/types/objects/product-variant",children:(0,t.jsx)(n.code,{children:"ProductVariant"})}),"  ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function b(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>a});var t=s(67294);const o={},c=t.createContext(o);function a(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);