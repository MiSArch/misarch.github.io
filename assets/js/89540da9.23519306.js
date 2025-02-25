"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[37859],{66307:(e,s,d)=>{d.r(s),d.d(s,{Badge:()=>g,Bullet:()=>i,Details:()=>x,SpecifiedBy:()=>h,assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>t,toc:()=>j});var a=d(85893),r=d(11151),c=d(67294);const n={id:"user-address",title:"UserAddress"},l=void 0,t={id:"graphql/schema/types/objects/user-address",title:"UserAddress",description:"A address associated with a user.",source:"@site/docs/graphql/schema/types/objects/user-address.mdx",sourceDirName:"graphql/schema/types/objects",slug:"/graphql/schema/types/objects/user-address",permalink:"/docs/graphql/schema/types/objects/user-address",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"user-address",title:"UserAddress"},sidebar:"graphqlSupergraphSidebar",previous:{title:"UserAddressConnection",permalink:"/docs/graphql/schema/types/objects/user-address-connection"},next:{title:"UserConnection",permalink:"/docs/graphql/schema/types/objects/user-connection"}},o={},i=()=>{const e={span:"span",...(0,r.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const s={a:"a",...(0,r.a)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const s={span:"span",...(0,r.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.span,{className:e.class,children:e.text})})},x=({dataOpen:e,dataClose:s,children:d,startOpen:n=!1})=>{const l={details:"details",summary:"summary",...(0,r.a)()},[t,o]=(0,c.useState)(n);return(0,a.jsxs)(l.details,{...t?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(l.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:t?e:s}),t&&d]})},j=[{value:"Fields",id:"fields",level:3},{value:'<code>UserAddress.<b>archivedAt</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge>',id:"useraddressarchivedatdatetime-",level:4},{value:'<code>UserAddress.<b>city</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"useraddresscitystring--",level:4},{value:'<code>UserAddress.<b>companyName</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"useraddresscompanynamestring-",level:4},{value:'<code>UserAddress.<b>country</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"useraddresscountrystring--",level:4},{value:'<code>UserAddress.<b>id</b></code><Bullet></Bullet><code>UUID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"useraddressiduuid--",level:4},{value:'<code>UserAddress.<b>isArchived</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"useraddressisarchivedboolean--",level:4},{value:'<code>UserAddress.<b>name</b></code><Bullet></Bullet><code>Name</code> <Badge class="badge badge--secondary"></Badge>',id:"useraddressnamename-",level:4},{value:'<code>UserAddress.<b>postalCode</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"useraddresspostalcodestring--",level:4},{value:'<code>UserAddress.<b>street1</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"useraddressstreet1string--",level:4},{value:'<code>UserAddress.<b>street2</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"useraddressstreet2string--",level:4},{value:'<code>UserAddress.<b>user</b></code><Bullet></Bullet><code>User!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"useraddressuseruser--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Address</code> <Badge class="badge badge--secondary"></Badge>',id:"address-",level:4},{value:'<code>Node</code> <Badge class="badge badge--secondary"></Badge>',id:"node-",level:4},{value:"Returned By",id:"returned-by",level:3},{value:"Member Of",id:"member-of",level:3}];function b(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"A address associated with a user."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-graphql",children:"type UserAddress implements Address, Node {\n  archivedAt: DateTime\n  city: String!\n  companyName: String\n  country: String!\n  id: UUID!\n  isArchived: Boolean!\n  name: Name\n  postalCode: String!\n  street1: String!\n  street2: String!\n  user: User!\n}\n"})}),"\n",(0,a.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(s.h4,{id:"useraddressarchivedatdatetime-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UserAddress.",(0,a.jsx)("b",{children:"archivedAt"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/docs/graphql/schema/types/scalars/date-time",children:(0,a.jsx)(s.code,{children:"DateTime"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"If this address is archived, the datetime it was archived."}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"useraddresscitystring--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UserAddress.",(0,a.jsx)("b",{children:"city"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/docs/graphql/schema/types/scalars/string",children:(0,a.jsx)(s.code,{children:"String!"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"The city part of the address"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"useraddresscompanynamestring-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UserAddress.",(0,a.jsx)("b",{children:"companyName"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/docs/graphql/schema/types/scalars/string",children:(0,a.jsx)(s.code,{children:"String"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"The company name part of the address"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"useraddresscountrystring--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UserAddress.",(0,a.jsx)("b",{children:"country"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/docs/graphql/schema/types/scalars/string",children:(0,a.jsx)(s.code,{children:"String!"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"The country part of the address"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"useraddressiduuid--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UserAddress.",(0,a.jsx)("b",{children:"id"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/docs/graphql/schema/types/scalars/uuid",children:(0,a.jsx)(s.code,{children:"UUID!"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"The ID of the node."}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"useraddressisarchivedboolean--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UserAddress.",(0,a.jsx)("b",{children:"isArchived"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/docs/graphql/schema/types/scalars/boolean",children:(0,a.jsx)(s.code,{children:"Boolean!"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"If true, this address is archived and can no longer be used."}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"useraddressnamename-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UserAddress.",(0,a.jsx)("b",{children:"name"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/docs/graphql/schema/types/objects/name",children:(0,a.jsx)(s.code,{children:"Name"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"The name of the address"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"useraddresspostalcodestring--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UserAddress.",(0,a.jsx)("b",{children:"postalCode"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/docs/graphql/schema/types/scalars/string",children:(0,a.jsx)(s.code,{children:"String!"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"The postal code part of the address"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"useraddressstreet1string--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UserAddress.",(0,a.jsx)("b",{children:"street1"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/docs/graphql/schema/types/scalars/string",children:(0,a.jsx)(s.code,{children:"String!"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"The first part of the street part of the address"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"useraddressstreet2string--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UserAddress.",(0,a.jsx)("b",{children:"street2"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/docs/graphql/schema/types/scalars/string",children:(0,a.jsx)(s.code,{children:"String!"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"The second part of the street part of the address"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"useraddressuseruser--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UserAddress.",(0,a.jsx)("b",{children:"user"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/docs/graphql/schema/types/objects/user",children:(0,a.jsx)(s.code,{children:"User!"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"The user this address belongs to."}),"\n"]}),"\n",(0,a.jsx)(s.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,a.jsxs)(s.h4,{id:"address-",children:[(0,a.jsx)(s.a,{href:"/docs/graphql/schema/types/interfaces/address",children:(0,a.jsx)(s.code,{children:"Address"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"An address."}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"node-",children:[(0,a.jsx)(s.a,{href:"/docs/graphql/schema/types/interfaces/node",children:(0,a.jsx)(s.code,{children:"Node"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"An object with an ID."}),"\n"]}),"\n",(0,a.jsx)(s.h3,{id:"returned-by",children:"Returned By"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/docs/graphql/schema/api/mutations/archive-user-address",children:(0,a.jsx)(s.code,{children:"archiveUserAddress"})}),"  ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"mutation"}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/docs/graphql/schema/api/mutations/create-user-address",children:(0,a.jsx)(s.code,{children:"createUserAddress"})}),"  ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"mutation"})]}),"\n",(0,a.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/docs/graphql/schema/types/objects/invoice",children:(0,a.jsx)(s.code,{children:"Invoice"})}),"  ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/docs/graphql/schema/types/objects/order",children:(0,a.jsx)(s.code,{children:"Order"})}),"  ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/docs/graphql/schema/types/objects/user-address-connection",children:(0,a.jsx)(s.code,{children:"UserAddressConnection"})}),"  ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"object"})]})]})}function u(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(b,{...e})}):b(e)}},11151:(e,s,d)=>{d.d(s,{Z:()=>l,a:()=>n});var a=d(67294);const r={},c=a.createContext(r);function n(e){const s=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),a.createElement(c.Provider,{value:s},e.children)}}}]);