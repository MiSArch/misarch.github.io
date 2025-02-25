"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[75091],{81893:(e,s,a)=>{a.r(s),a.d(s,{Badge:()=>g,Bullet:()=>o,Details:()=>b,SpecifiedBy:()=>h,assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>x});var d=a(85893),r=a(11151),n=a(67294);const t={id:"review",title:"Review"},c=void 0,i={id:"graphql/review/types/objects/review",title:"Review",description:"The review of a user.",source:"@site/docs/graphql/review/types/objects/review.mdx",sourceDirName:"graphql/review/types/objects",slug:"/graphql/review/types/objects/review",permalink:"/docs/graphql/review/types/objects/review",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"review",title:"Review"},sidebar:"graphqlSidebar",previous:{title:"ReviewConnection",permalink:"/docs/graphql/review/types/objects/review-connection"},next:{title:"User",permalink:"/docs/graphql/review/types/objects/user"}},l={},o=()=>{const e={span:"span",...(0,r.a)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const s={a:"a",...(0,r.a)()};return(0,d.jsxs)(d.Fragment,{children:["Specification",(0,d.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const s={span:"span",...(0,r.a)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(s.span,{className:e.class,children:e.text})})},b=({dataOpen:e,dataClose:s,children:a,startOpen:t=!1})=>{const c={details:"details",summary:"summary",...(0,r.a)()},[i,l]=(0,n.useState)(t);return(0,d.jsxs)(c.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,d.jsx)(c.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:i?e:s}),i&&a]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>Review.<b>id</b></code><Bullet></Bullet><code>UUID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"reviewiduuid--",level:4},{value:'<code>Review.<b>user</b></code><Bullet></Bullet><code>User!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"reviewuseruser--",level:4},{value:'<code>Review.<b>productVariant</b></code><Bullet></Bullet><code>ProductVariant!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"reviewproductvariantproductvariant--",level:4},{value:'<code>Review.<b>body</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"reviewbodystring--",level:4},{value:'<code>Review.<b>rating</b></code><Bullet></Bullet><code>Rating!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"reviewratingrating--",level:4},{value:'<code>Review.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"reviewcreatedatdatetime--",level:4},{value:'<code>Review.<b>lastUpdatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"reviewlastupdatedatdatetime--",level:4},{value:'<code>Review.<b>isVisible</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"reviewisvisibleboolean--",level:4},{value:"Returned By",id:"returned-by",level:3},{value:"Member Of",id:"member-of",level:3}];function j(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.p,{children:"The review of a user."}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-graphql",children:"type Review {\n  id: UUID!\n  user: User!\n  productVariant: ProductVariant!\n  body: String!\n  rating: Rating!\n  createdAt: DateTime!\n  lastUpdatedAt: DateTime!\n  isVisible: Boolean!\n}\n"})}),"\n",(0,d.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,d.jsxs)(s.h4,{id:"reviewiduuid--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Review.",(0,d.jsx)("b",{children:"id"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/docs/graphql/review/types/scalars/uuid",children:(0,d.jsx)(s.code,{children:"UUID!"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"review UUID."}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"reviewuseruser--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Review.",(0,d.jsx)("b",{children:"user"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/docs/graphql/review/types/objects/user",children:(0,d.jsx)(s.code,{children:"User!"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"User."}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"reviewproductvariantproductvariant--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Review.",(0,d.jsx)("b",{children:"productVariant"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/docs/graphql/review/types/objects/product-variant",children:(0,d.jsx)(s.code,{children:"ProductVariant!"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"Product variant that review is about."}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"reviewbodystring--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Review.",(0,d.jsx)("b",{children:"body"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/docs/graphql/review/types/scalars/string",children:(0,d.jsx)(s.code,{children:"String!"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"Body of review."}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"reviewratingrating--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Review.",(0,d.jsx)("b",{children:"rating"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/docs/graphql/review/types/enums/rating",children:(0,d.jsx)(s.code,{children:"Rating!"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"Rating of review in 1-5 stars."}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"reviewcreatedatdatetime--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Review.",(0,d.jsx)("b",{children:"createdAt"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/docs/graphql/review/types/scalars/date-time",children:(0,d.jsx)(s.code,{children:"DateTime!"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"Timestamp when review was created."}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"reviewlastupdatedatdatetime--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Review.",(0,d.jsx)("b",{children:"lastUpdatedAt"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/docs/graphql/review/types/scalars/date-time",children:(0,d.jsx)(s.code,{children:"DateTime!"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"Timestamp when review was created."}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"reviewisvisibleboolean--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Review.",(0,d.jsx)("b",{children:"isVisible"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/docs/graphql/review/types/scalars/boolean",children:(0,d.jsx)(s.code,{children:"Boolean!"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"Flag if review is visible,"}),"\n"]}),"\n",(0,d.jsx)(s.h3,{id:"returned-by",children:"Returned By"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.a,{href:"/docs/graphql/review/api/mutations/create-review",children:(0,d.jsx)(s.code,{children:"createReview"})}),"  ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"mutation"}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/docs/graphql/review/api/queries/review",children:(0,d.jsx)(s.code,{children:"review"})}),"  ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"query"}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/docs/graphql/review/api/mutations/update-review",children:(0,d.jsx)(s.code,{children:"updateReview"})}),"  ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"mutation"})]}),"\n",(0,d.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.a,{href:"/docs/graphql/review/types/objects/review-connection",children:(0,d.jsx)(s.code,{children:"ReviewConnection"})}),"  ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"object"})]})]})}function u(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(j,{...e})}):j(e)}},11151:(e,s,a)=>{a.d(s,{Z:()=>c,a:()=>t});var d=a(67294);const r={},n=d.createContext(r);function t(e){const s=d.useContext(n);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),d.createElement(n.Provider,{value:s},e.children)}}}]);