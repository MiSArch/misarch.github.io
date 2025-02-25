"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[40322],{76943:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=r(85893),s=r(11151),o=r(69019);const i={id:"schema",slug:"/graphql/return",title:"Return Service GraphQL API",sidebar_position:1,pagination_prev:null,sidebar_class_name:"navbar__toggle"},a=void 0,c={id:"graphql/return/schema",title:"Return Service GraphQL API",description:"This is the documentation for the Return Service GraphQL API.",source:"@site/docs/graphql/return/generated.md",sourceDirName:"graphql/return",slug:"/graphql/return",permalink:"/docs/graphql/return",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"schema",slug:"/graphql/return",title:"Return Service GraphQL API",sidebar_position:1,pagination_prev:null,sidebar_class_name:"navbar__toggle"},sidebar:"graphqlSidebar",next:{title:"Api",permalink:"/docs/category/api-9"}},l={},u=[];function d(e){const t={a:"a",p:"p",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["This is the documentation for the Return Service GraphQL API.\nThis documentation has been automatically generated from the GraphQL schema.\nThe documentation for the service can be found ",(0,n.jsx)(t.a,{href:"/docs/docs/dev-manuals/services/return",children:"here"})]}),"\n",(0,n.jsx)(o.Z,{})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},63361:(e,t,r)=>{r.d(t,{Z:()=>Z});var n=r(67294),s=r(90512),o=r(52802),i=r(33692),a=r(52263);const c=["zero","one","two","few","many","other"];function l(e){return c.filter((t=>e.includes(t)))}const u={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function d(){const{i18n:{currentLocale:e}}=(0,a.Z)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),u}}),[e])}function h(){const e=d();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const s=r.select(t),o=r.pluralForms.indexOf(s);return n[Math.min(o,n.length-1)]}(r,t,e)}}var m=r(13919),p=r(95999),f=r(92503);const g={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var x=r(85893);function v(e){let{href:t,children:r}=e;return(0,x.jsx)(i.Z,{href:t,className:(0,s.Z)("card padding--lg",g.cardContainer),children:r})}function j(e){let{href:t,icon:r,title:n,description:o}=e;return(0,x.jsxs)(v,{href:t,children:[(0,x.jsxs)(f.Z,{as:"h2",className:(0,s.Z)("text--truncate",g.cardTitle),title:n,children:[r," ",n]}),o&&(0,x.jsx)("p",{className:(0,s.Z)("text--truncate",g.cardDescription),title:o,children:o})]})}function b(e){let{item:t}=e;const r=(0,o.LM)(t),n=function(){const{selectMessage:e}=h();return t=>e(t,(0,p.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,x.jsx)(j,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function _(e){let{item:t}=e;const r=(0,m.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,o.xz)(t.docId??void 0);return(0,x.jsx)(j,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return(0,x.jsx)(_,{item:t});case"category":return(0,x.jsx)(b,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function w(e){let{className:t}=e;const r=(0,o.jA)();return(0,x.jsx)(Z,{items:r.items,className:t})}function Z(e){const{items:t,className:r}=e;if(!t)return(0,x.jsx)(w,{...e});const n=(0,o.MN)(t);return(0,x.jsx)("section",{className:(0,s.Z)("row",r),children:n.map(((e,t)=>(0,x.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,x.jsx)(y,{item:e})},t)))})}},69019:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(63361),s=r(52802),o=r(85893);function i(){const e=(0,s.jA)();return(0,o.jsx)(n.Z,{items:e.items.find((e=>"Api"==e.label)).items.filter((e=>"Directives"!=e.label))})}},11151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>i});var n=r(67294);const s={},o=n.createContext(s);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);