"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[15258],{3645:(e,a,c)=>{c.r(a),c.d(a,{Badge:()=>g,Bullet:()=>l,Details:()=>y,SpecifiedBy:()=>h,assets:()=>o,contentTitle:()=>i,default:()=>b,frontMatter:()=>n,metadata:()=>d,toc:()=>x});var r=c(85893),s=c(11151),t=c(67294);const n={id:"category-characteristic",title:"CategoryCharacteristic"},i=void 0,d={id:"graphql/schema/types/interfaces/category-characteristic",title:"CategoryCharacteristic",description:"A characteristic of a Category.",source:"@site/docs/graphql/schema/types/interfaces/category-characteristic.mdx",sourceDirName:"graphql/schema/types/interfaces",slug:"/graphql/schema/types/interfaces/category-characteristic",permalink:"/docs/graphql/schema/types/interfaces/category-characteristic",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"category-characteristic",title:"CategoryCharacteristic"},sidebar:"graphqlSupergraphSidebar",previous:{title:"CategoryCharacteristicValue",permalink:"/docs/graphql/schema/types/interfaces/category-characteristic-value"},next:{title:"Node",permalink:"/docs/graphql/schema/types/interfaces/node"}},o={},l=()=>{const e={span:"span",...(0,s.a)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const a={a:"a",...(0,s.a)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const a={span:"span",...(0,s.a)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(a.span,{className:e.class,children:e.text})})},y=({dataOpen:e,dataClose:a,children:c,startOpen:n=!1})=>{const i={details:"details",summary:"summary",...(0,s.a)()},[d,o]=(0,t.useState)(n);return(0,r.jsxs)(i.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(i.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:d?e:a}),d&&c]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>CategoryCharacteristic.<b>category</b></code><Bullet></Bullet><code>Category!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"categorycharacteristiccategorycategory--",level:4},{value:'<code>CategoryCharacteristic.<b>description</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"categorycharacteristicdescriptionstring--",level:4},{value:'<code>CategoryCharacteristic.<b>id</b></code><Bullet></Bullet><code>UUID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"categorycharacteristiciduuid--",level:4},{value:'<code>CategoryCharacteristic.<b>name</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"categorycharacteristicnamestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Node</code> <Badge class="badge badge--secondary"></Badge>',id:"node-",level:4},{value:"Returned By",id:"returned-by",level:3},{value:"Member Of",id:"member-of",level:3},{value:"Implemented By",id:"implemented-by",level:3}];function j(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.p,{children:"A characteristic of a Category."}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-graphql",children:"interface CategoryCharacteristic implements Node {\n  category: Category!\n  description: String!\n  id: UUID!\n  name: String!\n}\n"})}),"\n",(0,r.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(a.h4,{id:"categorycharacteristiccategorycategory--",children:[(0,r.jsx)(a.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["CategoryCharacteristic.",(0,r.jsx)("b",{children:"category"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(a.a,{href:"/docs/graphql/schema/types/objects/category",children:(0,r.jsx)(a.code,{children:"Category!"})})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,r.jsxs)(a.blockquote,{children:["\n",(0,r.jsx)(a.p,{children:"The Category this item belongs to."}),"\n"]}),"\n",(0,r.jsxs)(a.h4,{id:"categorycharacteristicdescriptionstring--",children:[(0,r.jsx)(a.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["CategoryCharacteristic.",(0,r.jsx)("b",{children:"description"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(a.a,{href:"/docs/graphql/schema/types/scalars/string",children:(0,r.jsx)(a.code,{children:"String!"})})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(a.blockquote,{children:["\n",(0,r.jsx)(a.p,{children:"The description of the CategoryCharacteristic."}),"\n"]}),"\n",(0,r.jsxs)(a.h4,{id:"categorycharacteristiciduuid--",children:[(0,r.jsx)(a.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["CategoryCharacteristic.",(0,r.jsx)("b",{children:"id"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(a.a,{href:"/docs/graphql/schema/types/scalars/uuid",children:(0,r.jsx)(a.code,{children:"UUID!"})})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(a.blockquote,{children:["\n",(0,r.jsx)(a.p,{children:"The ID of the node."}),"\n"]}),"\n",(0,r.jsxs)(a.h4,{id:"categorycharacteristicnamestring--",children:[(0,r.jsx)(a.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["CategoryCharacteristic.",(0,r.jsx)("b",{children:"name"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(a.a,{href:"/docs/graphql/schema/types/scalars/string",children:(0,r.jsx)(a.code,{children:"String!"})})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(a.blockquote,{children:["\n",(0,r.jsx)(a.p,{children:"The name of the CategoryCharacteristic."}),"\n"]}),"\n",(0,r.jsx)(a.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,r.jsxs)(a.h4,{id:"node-",children:[(0,r.jsx)(a.a,{href:"/docs/graphql/schema/types/interfaces/node",children:(0,r.jsx)(a.code,{children:"Node"})})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,r.jsxs)(a.blockquote,{children:["\n",(0,r.jsx)(a.p,{children:"An object with an ID."}),"\n"]}),"\n",(0,r.jsx)(a.h3,{id:"returned-by",children:"Returned By"}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.a,{href:"/docs/graphql/schema/api/queries/category-characteristic",children:(0,r.jsx)(a.code,{children:"categoryCharacteristic"})}),"  ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"query"})]}),"\n",(0,r.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.a,{href:"/docs/graphql/schema/types/objects/categorical-category-characteristic-value",children:(0,r.jsx)(a.code,{children:"CategoricalCategoryCharacteristicValue"})}),"  ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"object"}),(0,r.jsx)(l,{}),(0,r.jsx)(a.a,{href:"/docs/graphql/schema/types/objects/category-characteristic-connection",children:(0,r.jsx)(a.code,{children:"CategoryCharacteristicConnection"})}),"  ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"object"}),(0,r.jsx)(l,{}),(0,r.jsx)(a.a,{href:"/docs/graphql/schema/types/interfaces/category-characteristic-value",children:(0,r.jsx)(a.code,{children:"CategoryCharacteristicValue"})}),"  ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"interface"}),(0,r.jsx)(l,{}),(0,r.jsx)(a.a,{href:"/docs/graphql/schema/types/objects/numerical-category-characteristic-value",children:(0,r.jsx)(a.code,{children:"NumericalCategoryCharacteristicValue"})}),"  ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,r.jsx)(a.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.a,{href:"/docs/graphql/schema/types/objects/categorical-category-characteristic",children:(0,r.jsx)(a.code,{children:"CategoricalCategoryCharacteristic"})}),"  ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"object"}),(0,r.jsx)(l,{}),(0,r.jsx)(a.a,{href:"/docs/graphql/schema/types/objects/numerical-category-characteristic",children:(0,r.jsx)(a.code,{children:"NumericalCategoryCharacteristic"})}),"  ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"object"})]})]})}function b(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(j,{...e})}):j(e)}},11151:(e,a,c)=>{c.d(a,{Z:()=>i,a:()=>n});var r=c(67294);const s={},t=r.createContext(s);function n(e){const a=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),r.createElement(t.Provider,{value:a},e.children)}}}]);