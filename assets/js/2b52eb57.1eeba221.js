"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[58566],{28857:(e,c,r)=>{r.r(c),r.d(c,{Badge:()=>h,Bullet:()=>i,Details:()=>x,SpecifiedBy:()=>g,assets:()=>l,contentTitle:()=>n,default:()=>p,frontMatter:()=>d,metadata:()=>o,toc:()=>y});var t=r(85893),a=r(11151),s=r(67294);const d={id:"category",title:"Category"},n=void 0,o={id:"graphql/catalog/types/objects/category",title:"Category",description:"A category",source:"@site/docs/graphql/catalog/types/objects/category.mdx",sourceDirName:"graphql/catalog/types/objects",slug:"/graphql/catalog/types/objects/category",permalink:"/docs/graphql/catalog/types/objects/category",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"category",title:"Category"},sidebar:"graphqlSidebar",previous:{title:"CategoryConnection",permalink:"/docs/graphql/catalog/types/objects/category-connection"},next:{title:"MediaConnection",permalink:"/docs/graphql/catalog/types/objects/media-connection"}},l={},i=()=>{const e={span:"span",...(0,a.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const c={a:"a",...(0,a.a)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(c.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const c={span:"span",...(0,a.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(c.span,{className:e.class,children:e.text})})},x=({dataOpen:e,dataClose:c,children:r,startOpen:d=!1})=>{const n={details:"details",summary:"summary",...(0,a.a)()},[o,l]=(0,s.useState)(d);return(0,t.jsxs)(n.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(n.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:o?e:c}),o&&r]})},y=[{value:"Fields",id:"fields",level:3},{value:'<code>Category.<b>characteristics</b></code><Bullet></Bullet><code>CategoryCharacteristicConnection!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"categorycharacteristicscategorycharacteristicconnection--",level:4},{value:'<code>Category.characteristics.<b>first</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"categorycharacteristicsfirstint-",level:5},{value:'<code>Category.characteristics.<b>orderBy</b></code><Bullet></Bullet><code>CategoryCharacteristicOrderInput</code> <Badge class="badge badge--secondary"></Badge>',id:"categorycharacteristicsorderbycategorycharacteristicorderinput-",level:5},{value:'<code>Category.characteristics.<b>skip</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"categorycharacteristicsskipint-",level:5},{value:'<code>Category.<b>description</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"categorydescriptionstring--",level:4},{value:'<code>Category.<b>id</b></code><Bullet></Bullet><code>UUID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"categoryiduuid--",level:4},{value:'<code>Category.<b>name</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"categorynamestring--",level:4},{value:'<code>Category.<b>products</b></code><Bullet></Bullet><code>ProductConnection!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"categoryproductsproductconnection--",level:4},{value:'<code>Category.products.<b>filter</b></code><Bullet></Bullet><code>ProductFilterInput</code> <Badge class="badge badge--secondary"></Badge>',id:"categoryproductsfilterproductfilterinput-",level:5},{value:'<code>Category.products.<b>first</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"categoryproductsfirstint-",level:5},{value:'<code>Category.products.<b>orderBy</b></code><Bullet></Bullet><code>ProductOrderInput</code> <Badge class="badge badge--secondary"></Badge>',id:"categoryproductsorderbyproductorderinput-",level:5},{value:'<code>Category.products.<b>skip</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"categoryproductsskipint-",level:5},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Node</code> <Badge class="badge badge--secondary"></Badge>',id:"node-",level:4},{value:"Returned By",id:"returned-by",level:3},{value:"Member Of",id:"member-of",level:3},{value:"Implemented By",id:"implemented-by",level:3}];function j(e){const c={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.p,{children:"A category"}),"\n",(0,t.jsx)(c.pre,{children:(0,t.jsx)(c.code,{className:"language-graphql",children:"type Category implements Node {\n  characteristics(\n    first: Int\n    orderBy: CategoryCharacteristicOrderInput\n    skip: Int\n  ): CategoryCharacteristicConnection!\n  description: String!\n  id: UUID!\n  name: String!\n  products(\n    filter: ProductFilterInput\n    first: Int\n    orderBy: ProductOrderInput\n    skip: Int\n  ): ProductConnection!\n}\n"})}),"\n",(0,t.jsx)(c.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(c.h4,{id:"categorycharacteristicscategorycharacteristicconnection--",children:[(0,t.jsx)(c.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Category.",(0,t.jsx)("b",{children:"characteristics"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(c.a,{href:"/docs/graphql/catalog/types/objects/category-characteristic-connection",children:(0,t.jsx)(c.code,{children:"CategoryCharacteristicConnection!"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(c.blockquote,{children:["\n",(0,t.jsx)(c.p,{children:"Get characteristics for the category"}),"\n",(0,t.jsxs)(c.h5,{id:"categorycharacteristicsfirstint-",children:[(0,t.jsx)(c.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Category.characteristics.",(0,t.jsx)("b",{children:"first"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(c.a,{href:"/docs/graphql/catalog/types/scalars/int",children:(0,t.jsx)(c.code,{children:"Int"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(c.p,{children:"Number of items to return"}),"\n"]}),"\n",(0,t.jsxs)(c.h5,{id:"categorycharacteristicsorderbycategorycharacteristicorderinput-",children:[(0,t.jsx)(c.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Category.characteristics.",(0,t.jsx)("b",{children:"orderBy"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(c.a,{href:"/docs/graphql/catalog/types/inputs/category-characteristic-order-input",children:(0,t.jsx)(c.code,{children:"CategoryCharacteristicOrderInput"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,t.jsxs)(c.blockquote,{children:["\n",(0,t.jsx)(c.p,{children:"Ordering"}),"\n"]}),"\n",(0,t.jsxs)(c.h5,{id:"categorycharacteristicsskipint-",children:[(0,t.jsx)(c.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Category.characteristics.",(0,t.jsx)("b",{children:"skip"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(c.a,{href:"/docs/graphql/catalog/types/scalars/int",children:(0,t.jsx)(c.code,{children:"Int"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(c.blockquote,{children:["\n",(0,t.jsx)(c.p,{children:"Number of items to skip"}),"\n"]}),"\n",(0,t.jsxs)(c.h4,{id:"categorydescriptionstring--",children:[(0,t.jsx)(c.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Category.",(0,t.jsx)("b",{children:"description"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(c.a,{href:"/docs/graphql/catalog/types/scalars/string",children:(0,t.jsx)(c.code,{children:"String!"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(c.blockquote,{children:["\n",(0,t.jsx)(c.p,{children:"The description of the category."}),"\n"]}),"\n",(0,t.jsxs)(c.h4,{id:"categoryiduuid--",children:[(0,t.jsx)(c.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Category.",(0,t.jsx)("b",{children:"id"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(c.a,{href:"/docs/graphql/catalog/types/scalars/uuid",children:(0,t.jsx)(c.code,{children:"UUID!"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(c.blockquote,{children:["\n",(0,t.jsx)(c.p,{children:"The ID of the node."}),"\n"]}),"\n",(0,t.jsxs)(c.h4,{id:"categorynamestring--",children:[(0,t.jsx)(c.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Category.",(0,t.jsx)("b",{children:"name"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(c.a,{href:"/docs/graphql/catalog/types/scalars/string",children:(0,t.jsx)(c.code,{children:"String!"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(c.blockquote,{children:["\n",(0,t.jsx)(c.p,{children:"The name of the category."}),"\n"]}),"\n",(0,t.jsxs)(c.h4,{id:"categoryproductsproductconnection--",children:[(0,t.jsx)(c.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Category.",(0,t.jsx)("b",{children:"products"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(c.a,{href:"/docs/graphql/catalog/types/objects/product-connection",children:(0,t.jsx)(c.code,{children:"ProductConnection!"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(c.blockquote,{children:["\n",(0,t.jsx)(c.p,{children:"Get all associated products"}),"\n",(0,t.jsxs)(c.h5,{id:"categoryproductsfilterproductfilterinput-",children:[(0,t.jsx)(c.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Category.products.",(0,t.jsx)("b",{children:"filter"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(c.a,{href:"/docs/graphql/catalog/types/inputs/product-filter-input",children:(0,t.jsx)(c.code,{children:"ProductFilterInput"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,t.jsx)(c.p,{children:"Filtering"}),"\n"]}),"\n",(0,t.jsxs)(c.h5,{id:"categoryproductsfirstint-",children:[(0,t.jsx)(c.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Category.products.",(0,t.jsx)("b",{children:"first"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(c.a,{href:"/docs/graphql/catalog/types/scalars/int",children:(0,t.jsx)(c.code,{children:"Int"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(c.blockquote,{children:["\n",(0,t.jsx)(c.p,{children:"Number of items to return"}),"\n"]}),"\n",(0,t.jsxs)(c.h5,{id:"categoryproductsorderbyproductorderinput-",children:[(0,t.jsx)(c.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Category.products.",(0,t.jsx)("b",{children:"orderBy"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(c.a,{href:"/docs/graphql/catalog/types/inputs/product-order-input",children:(0,t.jsx)(c.code,{children:"ProductOrderInput"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,t.jsxs)(c.blockquote,{children:["\n",(0,t.jsx)(c.p,{children:"Ordering"}),"\n"]}),"\n",(0,t.jsxs)(c.h5,{id:"categoryproductsskipint-",children:[(0,t.jsx)(c.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Category.products.",(0,t.jsx)("b",{children:"skip"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(c.a,{href:"/docs/graphql/catalog/types/scalars/int",children:(0,t.jsx)(c.code,{children:"Int"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(c.blockquote,{children:["\n",(0,t.jsx)(c.p,{children:"Number of items to skip"}),"\n"]}),"\n",(0,t.jsx)(c.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,t.jsxs)(c.h4,{id:"node-",children:[(0,t.jsx)(c.a,{href:"/docs/graphql/catalog/types/interfaces/node",children:(0,t.jsx)(c.code,{children:"Node"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,t.jsxs)(c.blockquote,{children:["\n",(0,t.jsx)(c.p,{children:"An object with an ID."}),"\n"]}),"\n",(0,t.jsx)(c.h3,{id:"returned-by",children:"Returned By"}),"\n",(0,t.jsxs)(c.p,{children:[(0,t.jsx)(c.a,{href:"/docs/graphql/catalog/api/queries/category",children:(0,t.jsx)(c.code,{children:"category"})}),"  ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"query"}),(0,t.jsx)(i,{}),(0,t.jsx)(c.a,{href:"/docs/graphql/catalog/api/mutations/create-category",children:(0,t.jsx)(c.code,{children:"createCategory"})}),"  ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"mutation"})]}),"\n",(0,t.jsx)(c.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(c.p,{children:[(0,t.jsx)(c.a,{href:"/docs/graphql/catalog/types/objects/categorical-category-characteristic",children:(0,t.jsx)(c.code,{children:"CategoricalCategoryCharacteristic"})}),"  ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(i,{}),(0,t.jsx)(c.a,{href:"/docs/graphql/catalog/types/interfaces/category-characteristic",children:(0,t.jsx)(c.code,{children:"CategoryCharacteristic"})}),"  ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"interface"}),(0,t.jsx)(i,{}),(0,t.jsx)(c.a,{href:"/docs/graphql/catalog/types/objects/category-connection",children:(0,t.jsx)(c.code,{children:"CategoryConnection"})}),"  ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(i,{}),(0,t.jsx)(c.a,{href:"/docs/graphql/catalog/types/objects/numerical-category-characteristic",children:(0,t.jsx)(c.code,{children:"NumericalCategoryCharacteristic"})}),"  ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(c.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,t.jsxs)(c.p,{children:[(0,t.jsx)(c.a,{href:"/docs/graphql/catalog/types/unions/entity",children:(0,t.jsx)(c.code,{children:"_Entity"})}),"  ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"union"})]})]})}function p(e={}){const{wrapper:c}={...(0,a.a)(),...e.components};return c?(0,t.jsx)(c,{...e,children:(0,t.jsx)(j,{...e})}):j(e)}},11151:(e,c,r)=>{r.d(c,{Z:()=>n,a:()=>d});var t=r(67294);const a={},s=t.createContext(a);function d(e){const c=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(c):{...c,...e}}),[c,e])}function n(e){let c;return c=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),t.createElement(s.Provider,{value:c},e.children)}}}]);