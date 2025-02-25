"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[64520],{71859:(e,n,s)=>{s.r(n),s.d(n,{Badge:()=>p,Bullet:()=>o,Details:()=>g,SpecifiedBy:()=>h,assets:()=>c,contentTitle:()=>a,default:()=>x,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var r=s(85893),l=s(11151),t=s(67294);const i={id:"link",title:"link"},a=void 0,d={id:"graphql/shipment/types/directives/link",title:"link",description:"No description",source:"@site/docs/graphql/shipment/types/directives/link.mdx",sourceDirName:"graphql/shipment/types/directives",slug:"/graphql/shipment/types/directives/link",permalink:"/docs/graphql/shipment/types/directives/link",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"link",title:"link"},sidebar:"graphqlSidebar",previous:{title:"key",permalink:"/docs/graphql/shipment/types/directives/key"},next:{title:"shareable",permalink:"/docs/graphql/shipment/types/directives/shareable"}},c={},o=()=>{const e={span:"span",...(0,l.a)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const n={a:"a",...(0,l.a)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const n={span:"span",...(0,l.a)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(n.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:n,children:s,startOpen:i=!1})=>{const a={details:"details",summary:"summary",...(0,l.a)()},[d,c]=(0,t.useState)(i);return(0,r.jsxs)(a.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(a.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:d?e:n}),d&&s]})},u=[{value:"Arguments",id:"arguments",level:3},{value:'<code>link.<b>url</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"linkurlstring-",level:4},{value:'<code>link.<b>as</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"linkasstring-",level:4},{value:'<code>link.<b>for</b></code><Bullet></Bullet><code>link__Purpose</code> <Badge class="badge badge--secondary"></Badge>',id:"linkforlink__purpose-",level:4},{value:'<code>link.<b>import</b></code><Bullet></Bullet><code>[link__Import]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"linkimportlink__import--",level:4}];function m(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"No description"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"directive @link(\n  url: String\n  as: String\n  for: link__Purpose\n  import: [link__Import]\n) on SCHEMA\n"})}),"\n",(0,r.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,r.jsxs)(n.h4,{id:"linkurlstring-",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["link.",(0,r.jsx)("b",{children:"url"})]})}),(0,r.jsx)(o,{}),(0,r.jsx)(n.a,{href:"/docs/graphql/shipment/types/scalars/string",children:(0,r.jsx)(n.code,{children:"String"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsx)(n.blockquote,{children:"\n"}),"\n",(0,r.jsxs)(n.h4,{id:"linkasstring-",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["link.",(0,r.jsx)("b",{children:"as"})]})}),(0,r.jsx)(o,{}),(0,r.jsx)(n.a,{href:"/docs/graphql/shipment/types/scalars/string",children:(0,r.jsx)(n.code,{children:"String"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsx)(n.blockquote,{children:"\n"}),"\n",(0,r.jsxs)(n.h4,{id:"linkforlink__purpose-",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["link.",(0,r.jsx)("b",{children:"for"})]})}),(0,r.jsx)(o,{}),(0,r.jsx)(n.a,{href:"/docs/graphql/shipment/types/enums/link-purpose",children:(0,r.jsx)(n.code,{children:"link__Purpose"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,r.jsx)(n.blockquote,{children:"\n"}),"\n",(0,r.jsxs)(n.h4,{id:"linkimportlink__import--",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["link.",(0,r.jsx)("b",{children:"import"})]})}),(0,r.jsx)(o,{}),(0,r.jsx)(n.a,{href:"/docs/graphql/shipment/types/scalars/link-import",children:(0,r.jsx)(n.code,{children:"[link__Import]"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsx)(n.blockquote,{children:"\n"})]})}function x(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>i});var r=s(67294);const l={},t=r.createContext(l);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);