"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[46161],{71545:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>h,Bullet:()=>i,Details:()=>x,SpecifiedBy:()=>g,assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>y});var a=t(85893),o=t(11151),c=t(67294);const s={id:"category-connection",title:"CategoryConnection"},r=void 0,l={id:"graphql/catalog/types/objects/category-connection",title:"CategoryConnection",description:"A connection to a list of Category values.",source:"@site/docs/graphql/catalog/types/objects/category-connection.mdx",sourceDirName:"graphql/catalog/types/objects",slug:"/graphql/catalog/types/objects/category-connection",permalink:"/docs/graphql/catalog/types/objects/category-connection",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"category-connection",title:"CategoryConnection"},sidebar:"graphqlSidebar",previous:{title:"CategoryCharacteristicValueConnection",permalink:"/docs/graphql/catalog/types/objects/category-characteristic-value-connection"},next:{title:"Category",permalink:"/docs/graphql/catalog/types/objects/category"}},d={},i=()=>{const e={span:"span",...(0,o.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const n={a:"a",...(0,o.a)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const n={span:"span",...(0,o.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.span,{className:e.class,children:e.text})})},x=({dataOpen:e,dataClose:n,children:t,startOpen:s=!1})=>{const r={details:"details",summary:"summary",...(0,o.a)()},[l,d]=(0,c.useState)(s);return(0,a.jsxs)(r.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(r.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:l?e:n}),l&&t]})},y=[{value:"Fields",id:"fields",level:3},{value:'<code>CategoryConnection.<b>hasNextPage</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"categoryconnectionhasnextpageboolean--",level:4},{value:'<code>CategoryConnection.<b>nodes</b></code><Bullet></Bullet><code>[Category!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"categoryconnectionnodescategory--",level:4},{value:'<code>CategoryConnection.<b>totalCount</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"categoryconnectiontotalcountint--",level:4},{value:"Returned By",id:"returned-by",level:3},{value:"Member Of",id:"member-of",level:3}];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["A connection to a list of ",(0,a.jsx)(n.code,{children:"Category"})," values."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"type CategoryConnection {\n  hasNextPage: Boolean!\n  nodes: [Category!]!\n  totalCount: Int!\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(n.h4,{id:"categoryconnectionhasnextpageboolean--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["CategoryConnection.",(0,a.jsx)("b",{children:"hasNextPage"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(n.a,{href:"/docs/graphql/catalog/types/scalars/boolean",children:(0,a.jsx)(n.code,{children:"Boolean!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Whether this connection has a next page"}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"categoryconnectionnodescategory--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["CategoryConnection.",(0,a.jsx)("b",{children:"nodes"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(n.a,{href:"/docs/graphql/catalog/types/objects/category",children:(0,a.jsx)(n.code,{children:"[Category!]!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"The resulting items."}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"categoryconnectiontotalcountint--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["CategoryConnection.",(0,a.jsx)("b",{children:"totalCount"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(n.a,{href:"/docs/graphql/catalog/types/scalars/int",children:(0,a.jsx)(n.code,{children:"Int!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"The total amount of items in this connection"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"returned-by",children:"Returned By"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/graphql/catalog/api/queries/categories",children:(0,a.jsx)(n.code,{children:"categories"})}),"  ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"query"})]}),"\n",(0,a.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/graphql/catalog/types/objects/product",children:(0,a.jsx)(n.code,{children:"Product"})}),"  ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var a=t(67294);const o={},c=a.createContext(o);function s(e){const n=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(c.Provider,{value:n},e.children)}}}]);