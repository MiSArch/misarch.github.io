"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[83141],{45942:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>g,Bullet:()=>d,Details:()=>y,SpecifiedBy:()=>h,assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>x});var c=a(85893),n=a(11151),o=a(67294);const r={id:"category-characteristic-connection",title:"CategoryCharacteristicConnection"},s=void 0,i={id:"graphql/catalog/types/objects/category-characteristic-connection",title:"CategoryCharacteristicConnection",description:"A connection to a list of CategoryCharacteristic values.",source:"@site/docs/graphql/catalog/types/objects/category-characteristic-connection.mdx",sourceDirName:"graphql/catalog/types/objects",slug:"/graphql/catalog/types/objects/category-characteristic-connection",permalink:"/docs/graphql/catalog/types/objects/category-characteristic-connection",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"category-characteristic-connection",title:"CategoryCharacteristicConnection"},sidebar:"graphqlSidebar",previous:{title:"CategoricalCategoryCharacteristic",permalink:"/docs/graphql/catalog/types/objects/categorical-category-characteristic"},next:{title:"CategoryCharacteristicValueConnection",permalink:"/docs/graphql/catalog/types/objects/category-characteristic-value-connection"}},l={},d=()=>{const e={span:"span",...(0,n.a)()};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const t={a:"a",...(0,n.a)()};return(0,c.jsxs)(c.Fragment,{children:["Specification",(0,c.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const t={span:"span",...(0,n.a)()};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(t.span,{className:e.class,children:e.text})})},y=({dataOpen:e,dataClose:t,children:a,startOpen:r=!1})=>{const s={details:"details",summary:"summary",...(0,n.a)()},[i,l]=(0,o.useState)(r);return(0,c.jsxs)(s.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,c.jsx)(s.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:i?e:t}),i&&a]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>CategoryCharacteristicConnection.<b>hasNextPage</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"categorycharacteristicconnectionhasnextpageboolean--",level:4},{value:'<code>CategoryCharacteristicConnection.<b>nodes</b></code><Bullet></Bullet><code>[CategoryCharacteristic!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"categorycharacteristicconnectionnodescategorycharacteristic--",level:4},{value:'<code>CategoryCharacteristicConnection.<b>totalCount</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"categorycharacteristicconnectiontotalcountint--",level:4},{value:"Member Of",id:"member-of",level:3}];function p(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(t.p,{children:["A connection to a list of ",(0,c.jsx)(t.code,{children:"CategoryCharacteristic"})," values."]}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-graphql",children:"type CategoryCharacteristicConnection {\n  hasNextPage: Boolean!\n  nodes: [CategoryCharacteristic!]!\n  totalCount: Int!\n}\n"})}),"\n",(0,c.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,c.jsxs)(t.h4,{id:"categorycharacteristicconnectionhasnextpageboolean--",children:[(0,c.jsx)(t.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CategoryCharacteristicConnection.",(0,c.jsx)("b",{children:"hasNextPage"})]})}),(0,c.jsx)(d,{}),(0,c.jsx)(t.a,{href:"/docs/graphql/catalog/types/scalars/boolean",children:(0,c.jsx)(t.code,{children:"Boolean!"})})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(t.blockquote,{children:["\n",(0,c.jsx)(t.p,{children:"Whether this connection has a next page"}),"\n"]}),"\n",(0,c.jsxs)(t.h4,{id:"categorycharacteristicconnectionnodescategorycharacteristic--",children:[(0,c.jsx)(t.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CategoryCharacteristicConnection.",(0,c.jsx)("b",{children:"nodes"})]})}),(0,c.jsx)(d,{}),(0,c.jsx)(t.a,{href:"/docs/graphql/catalog/types/interfaces/category-characteristic",children:(0,c.jsx)(t.code,{children:"[CategoryCharacteristic!]!"})})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,c.jsxs)(t.blockquote,{children:["\n",(0,c.jsx)(t.p,{children:"The resulting items."}),"\n"]}),"\n",(0,c.jsxs)(t.h4,{id:"categorycharacteristicconnectiontotalcountint--",children:[(0,c.jsx)(t.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CategoryCharacteristicConnection.",(0,c.jsx)("b",{children:"totalCount"})]})}),(0,c.jsx)(d,{}),(0,c.jsx)(t.a,{href:"/docs/graphql/catalog/types/scalars/int",children:(0,c.jsx)(t.code,{children:"Int!"})})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(t.blockquote,{children:["\n",(0,c.jsx)(t.p,{children:"The total amount of items in this connection"}),"\n"]}),"\n",(0,c.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.a,{href:"/docs/graphql/catalog/types/objects/category",children:(0,c.jsx)(t.code,{children:"Category"})}),"  ",(0,c.jsx)(g,{class:"badge badge--secondary",text:"object"})]})]})}function u(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(p,{...e})}):p(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>s,a:()=>r});var c=a(67294);const n={},o=c.createContext(n);function r(e){const t=c.useContext(o);return c.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),c.createElement(o.Provider,{value:t},e.children)}}}]);