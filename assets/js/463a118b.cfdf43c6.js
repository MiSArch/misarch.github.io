"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[56638],{32012:(e,n,o)=>{o.r(n),o.d(n,{Badge:()=>g,Bullet:()=>i,Details:()=>x,SpecifiedBy:()=>h,assets:()=>l,contentTitle:()=>c,default:()=>b,frontMatter:()=>d,metadata:()=>a,toc:()=>p});var r=o(85893),s=o(11151),t=o(67294);const d={id:"order-connection",title:"OrderConnection"},c=void 0,a={id:"graphql/order/types/objects/order-connection",title:"OrderConnection",description:"A connection of orders.",source:"@site/docs/graphql/order/types/objects/order-connection.mdx",sourceDirName:"graphql/order/types/objects",slug:"/graphql/order/types/objects/order-connection",permalink:"/docs/graphql/order/types/objects/order-connection",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"order-connection",title:"OrderConnection"},sidebar:"graphqlSidebar",previous:{title:"Discount",permalink:"/docs/graphql/order/types/objects/discount"},next:{title:"OrderItemConnection",permalink:"/docs/graphql/order/types/objects/order-item-connection"}},l={},i=()=>{const e={span:"span",...(0,s.a)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const n={a:"a",...(0,s.a)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const n={span:"span",...(0,s.a)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(n.span,{className:e.class,children:e.text})})},x=({dataOpen:e,dataClose:n,children:o,startOpen:d=!1})=>{const c={details:"details",summary:"summary",...(0,s.a)()},[a,l]=(0,t.useState)(d);return(0,r.jsxs)(c.details,{...a?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(c.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:a?e:n}),a&&o]})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>OrderConnection.<b>nodes</b></code><Bullet></Bullet><code>[Order!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"orderconnectionnodesorder--",level:4},{value:'<code>OrderConnection.<b>hasNextPage</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"orderconnectionhasnextpageboolean--",level:4},{value:'<code>OrderConnection.<b>totalCount</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"orderconnectiontotalcountint--",level:4},{value:"Member Of",id:"member-of",level:3}];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"A connection of orders."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"type OrderConnection {\n  nodes: [Order!]!\n  hasNextPage: Boolean!\n  totalCount: Int!\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(n.h4,{id:"orderconnectionnodesorder--",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["OrderConnection.",(0,r.jsx)("b",{children:"nodes"})]})}),(0,r.jsx)(i,{}),(0,r.jsx)(n.a,{href:"/docs/graphql/order/types/objects/order",children:(0,r.jsx)(n.code,{children:"[Order!]!"})})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"The resulting entities."}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"orderconnectionhasnextpageboolean--",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["OrderConnection.",(0,r.jsx)("b",{children:"hasNextPage"})]})}),(0,r.jsx)(i,{}),(0,r.jsx)(n.a,{href:"/docs/graphql/order/types/scalars/boolean",children:(0,r.jsx)(n.code,{children:"Boolean!"})})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Whether this connection has a next page."}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"orderconnectiontotalcountint--",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["OrderConnection.",(0,r.jsx)("b",{children:"totalCount"})]})}),(0,r.jsx)(i,{}),(0,r.jsx)(n.a,{href:"/docs/graphql/order/types/scalars/int",children:(0,r.jsx)(n.code,{children:"Int!"})})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"The total amount of items in this connection."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/graphql/order/types/objects/user",children:(0,r.jsx)(n.code,{children:"User"})}),"  ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"object"})]})]})}function b(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>c,a:()=>d});var r=o(67294);const s={},t=r.createContext(s);function d(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);