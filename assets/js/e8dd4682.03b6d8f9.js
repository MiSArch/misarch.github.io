"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[58066],{27698:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(85893),s=n(11151),i=n(69019);const o={id:"schema",slug:"/graphql/wishlist",title:"Wishlist Service GraphQL API",sidebar_position:1,pagination_prev:null,sidebar_class_name:"navbar__toggle"},a=void 0,c={id:"graphql/wishlist/schema",title:"Wishlist Service GraphQL API",description:"This is the documentation for the Wishlist Service GraphQL API.",source:"@site/docs/graphql/wishlist/generated.md",sourceDirName:"graphql/wishlist",slug:"/graphql/wishlist",permalink:"/docs/graphql/wishlist",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"schema",slug:"/graphql/wishlist",title:"Wishlist Service GraphQL API",sidebar_position:1,pagination_prev:null,sidebar_class_name:"navbar__toggle"},sidebar:"graphqlSidebar",next:{title:"Api",permalink:"/docs/category/api-15"}},l={},u=[];function h(e){const t={a:"a",p:"p",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["This is the documentation for the Wishlist Service GraphQL API.\nThis documentation has been automatically generated from the GraphQL schema.\nThe documentation for the service can be found ",(0,r.jsx)(t.a,{href:"/docs/docs/dev-manuals/services/wishlist",children:"here"})]}),"\n",(0,r.jsx)(i.Z,{})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},63361:(e,t,n)=>{n.d(t,{Z:()=>Z});var r=n(67294),s=n(90512),i=n(52802),o=n(33692),a=n(52263);const c=["zero","one","two","few","many","other"];function l(e){return c.filter((t=>e.includes(t)))}const u={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function h(){const{i18n:{currentLocale:e}}=(0,a.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),u}}),[e])}function d(){const e=h();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=n.select(t),i=n.pluralForms.indexOf(s);return r[Math.min(i,r.length-1)]}(n,t,e)}}var m=n(13919),p=n(95999),f=n(92503);const g={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var x=n(85893);function v(e){let{href:t,children:n}=e;return(0,x.jsx)(o.Z,{href:t,className:(0,s.Z)("card padding--lg",g.cardContainer),children:n})}function j(e){let{href:t,icon:n,title:r,description:i}=e;return(0,x.jsxs)(v,{href:t,children:[(0,x.jsxs)(f.Z,{as:"h2",className:(0,s.Z)("text--truncate",g.cardTitle),title:r,children:[n," ",r]}),i&&(0,x.jsx)("p",{className:(0,s.Z)("text--truncate",g.cardDescription),title:i,children:i})]})}function b(e){let{item:t}=e;const n=(0,i.LM)(t),r=function(){const{selectMessage:e}=d();return t=>e(t,(0,p.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,x.jsx)(j,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function w(e){let{item:t}=e;const n=(0,m.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.xz)(t.docId??void 0);return(0,x.jsx)(j,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function _(e){let{item:t}=e;switch(t.type){case"link":return(0,x.jsx)(w,{item:t});case"category":return(0,x.jsx)(b,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const n=(0,i.jA)();return(0,x.jsx)(Z,{items:n.items,className:t})}function Z(e){const{items:t,className:n}=e;if(!t)return(0,x.jsx)(y,{...e});const r=(0,i.MN)(t);return(0,x.jsx)("section",{className:(0,s.Z)("row",n),children:r.map(((e,t)=>(0,x.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,x.jsx)(_,{item:e})},t)))})}},69019:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(63361),s=n(52802),i=n(85893);function o(){const e=(0,s.jA)();return(0,i.jsx)(r.Z,{items:e.items.find((e=>"Api"==e.label)).items.filter((e=>"Directives"!=e.label))})}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var r=n(67294);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);