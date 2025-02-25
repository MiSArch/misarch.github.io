"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[66163],{21404:(e,r,t)=>{t.r(r),t.d(r,{Badge:()=>u,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>o,default:()=>x,frontMatter:()=>a,metadata:()=>i,toc:()=>m});var d=t(85893),n=t(11151),s=t(67294);const a={id:"order-item-input",title:"OrderItemInput"},o=void 0,i={id:"graphql/order/types/inputs/order-item-input",title:"OrderItemInput",description:"No description",source:"@site/docs/graphql/order/types/inputs/order-item-input.mdx",sourceDirName:"graphql/order/types/inputs",slug:"/graphql/order/types/inputs/order-item-input",permalink:"/docs/graphql/order/types/inputs/order-item-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"order-item-input",title:"OrderItemInput"},sidebar:"graphqlSidebar",previous:{title:"CreateOrderInput",permalink:"/docs/graphql/order/types/inputs/create-order-input"},next:{title:"OrderOrderInput",permalink:"/docs/graphql/order/types/inputs/order-order-input"}},c={},l=()=>{const e={span:"span",...(0,n.a)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const r={a:"a",...(0,n.a)()};return(0,d.jsxs)(d.Fragment,{children:["Specification",(0,d.jsx)(r.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const r={span:"span",...(0,n.a)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(r.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:r,children:t,startOpen:a=!1})=>{const o={details:"details",summary:"summary",...(0,n.a)()},[i,c]=(0,s.useState)(a);return(0,d.jsxs)(o.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,d.jsx)(o.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:i?e:r}),i&&t]})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>OrderItemInput.<b>shoppingCartItemId</b></code><Bullet></Bullet><code>UUID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"orderiteminputshoppingcartitemiduuid--",level:4},{value:'<code>OrderItemInput.<b>shipmentMethodId</b></code><Bullet></Bullet><code>UUID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"orderiteminputshipmentmethodiduuid--",level:4},{value:'<code>OrderItemInput.<b>couponIds</b></code><Bullet></Bullet><code>[UUID!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"orderiteminputcouponidsuuid--",level:4},{value:"Member Of",id:"member-of",level:3}];function g(e){const r={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.p,{children:"No description"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-graphql",children:"input OrderItemInput {\n  shoppingCartItemId: UUID!\n  shipmentMethodId: UUID!\n  couponIds: [UUID!]!\n}\n"})}),"\n",(0,d.jsx)(r.h3,{id:"fields",children:"Fields"}),"\n",(0,d.jsxs)(r.h4,{id:"orderiteminputshoppingcartitemiduuid--",children:[(0,d.jsx)(r.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["OrderItemInput.",(0,d.jsx)("b",{children:"shoppingCartItemId"})]})}),(0,d.jsx)(l,{}),(0,d.jsx)(r.a,{href:"/docs/graphql/order/types/scalars/uuid",children:(0,d.jsx)(r.code,{children:"UUID!"})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsx)(r.p,{children:"UUID of shopping cart item associated with order item."}),"\n"]}),"\n",(0,d.jsxs)(r.h4,{id:"orderiteminputshipmentmethodiduuid--",children:[(0,d.jsx)(r.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["OrderItemInput.",(0,d.jsx)("b",{children:"shipmentMethodId"})]})}),(0,d.jsx)(l,{}),(0,d.jsx)(r.a,{href:"/docs/graphql/order/types/scalars/uuid",children:(0,d.jsx)(r.code,{children:"UUID!"})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsx)(r.p,{children:"UUID of shipment method to use with order item."}),"\n"]}),"\n",(0,d.jsxs)(r.h4,{id:"orderiteminputcouponidsuuid--",children:[(0,d.jsx)(r.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["OrderItemInput.",(0,d.jsx)("b",{children:"couponIds"})]})}),(0,d.jsx)(l,{}),(0,d.jsx)(r.a,{href:"/docs/graphql/order/types/scalars/uuid",children:(0,d.jsx)(r.code,{children:"[UUID!]!"})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsx)(r.p,{children:"UUIDs of coupons to use with order item."}),"\n"]}),"\n",(0,d.jsx)(r.h3,{id:"member-of",children:"Member Of"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.a,{href:"/docs/graphql/order/types/inputs/create-order-input",children:(0,d.jsx)(r.code,{children:"CreateOrderInput"})}),"  ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function x(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(g,{...e})}):g(e)}},11151:(e,r,t)=>{t.d(r,{Z:()=>o,a:()=>a});var d=t(67294);const n={},s=d.createContext(n);function a(e){const r=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),d.createElement(s.Provider,{value:r},e.children)}}}]);