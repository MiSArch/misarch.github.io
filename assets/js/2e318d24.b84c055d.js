"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[56075],{55593:(e,n,a)=>{a.r(n),a.d(n,{Badge:()=>g,Bullet:()=>r,Details:()=>x,SpecifiedBy:()=>h,assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var t=a(85893),s=a(11151),d=a(67294);const o={id:"media-connection",title:"MediaConnection"},c=void 0,i={id:"graphql/media/types/objects/media-connection",title:"MediaConnection",description:"A connection of medias.",source:"@site/docs/graphql/media/types/objects/media-connection.mdx",sourceDirName:"graphql/media/types/objects",slug:"/graphql/media/types/objects/media-connection",permalink:"/docs/graphql/media/types/objects/media-connection",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"media-connection",title:"MediaConnection"},sidebar:"graphqlSidebar",previous:{title:"Objects",permalink:"/docs/category/objects-5"},next:{title:"Media",permalink:"/docs/graphql/media/types/objects/media"}},l={},r=()=>{const e={span:"span",...(0,s.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const n={a:"a",...(0,s.a)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const n={span:"span",...(0,s.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.span,{className:e.class,children:e.text})})},x=({dataOpen:e,dataClose:n,children:a,startOpen:o=!1})=>{const c={details:"details",summary:"summary",...(0,s.a)()},[i,l]=(0,d.useState)(o);return(0,t.jsxs)(c.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(c.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:i?e:n}),i&&a]})},u=[{value:"Fields",id:"fields",level:3},{value:'<code>MediaConnection.<b>nodes</b></code><Bullet></Bullet><code>[Media!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"mediaconnectionnodesmedia--",level:4},{value:'<code>MediaConnection.<b>hasNextPage</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"mediaconnectionhasnextpageboolean--",level:4},{value:'<code>MediaConnection.<b>totalCount</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"mediaconnectiontotalcountint--",level:4},{value:"Returned By",id:"returned-by",level:3}];function p(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"A connection of medias."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"type MediaConnection {\n  nodes: [Media!]!\n  hasNextPage: Boolean!\n  totalCount: Int!\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(n.h4,{id:"mediaconnectionnodesmedia--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaConnection.",(0,t.jsx)("b",{children:"nodes"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(n.a,{href:"/docs/graphql/media/types/objects/media",children:(0,t.jsx)(n.code,{children:"[Media!]!"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"The resulting entities."}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"mediaconnectionhasnextpageboolean--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaConnection.",(0,t.jsx)("b",{children:"hasNextPage"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(n.a,{href:"/docs/graphql/media/types/scalars/boolean",children:(0,t.jsx)(n.code,{children:"Boolean!"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Whether this connection has a next page."}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"mediaconnectiontotalcountint--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MediaConnection.",(0,t.jsx)("b",{children:"totalCount"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(n.a,{href:"/docs/graphql/media/types/scalars/int",children:(0,t.jsx)(n.code,{children:"Int!"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"The total amount of items in this connection."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"returned-by",children:"Returned By"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/graphql/media/api/queries/get-medias",children:(0,t.jsx)(n.code,{children:"getMedias"})}),"  ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"query"})]})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>c,a:()=>o});var t=a(67294);const s={},d=t.createContext(s);function o(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);