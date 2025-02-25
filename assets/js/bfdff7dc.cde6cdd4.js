"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[82796],{13815:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>v,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var i=n(85893),r=n(11151),d=n(4106);const t={},c="Review Service",l={id:"docs/dev-manuals/services/review",title:"Review Service",description:"The review service provides the bounded context Review.",source:"@site/docs/docs/dev-manuals/services/review.mdx",sourceDirName:"docs/dev-manuals/services",slug:"/docs/dev-manuals/services/review",permalink:"/docs/docs/dev-manuals/services/review",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Return Service",permalink:"/docs/docs/dev-manuals/services/return"},next:{title:"Shipment Service",permalink:"/docs/docs/dev-manuals/services/shipment"}},a={},o=[{value:"Domain Model",id:"domain-model",level:2},{value:"API",id:"api",level:2},{value:"Technology Stack",id:"technology-stack",level:2},{value:"Repository Structure",id:"repository-structure",level:2},{value:"Defined Events",id:"defined-events",level:2},{value:"Published Defined Events",id:"published-defined-events",level:3},{value:"Subscribed Defined Events",id:"subscribed-defined-events",level:3},{value:"Imported Events",id:"imported-events",level:2},{value:"Published Imported Events",id:"published-imported-events",level:3},{value:"Subscribed Imported Events",id:"subscribed-imported-events",level:3},{value:"Important ADRs",id:"important-adrs",level:2}];function h(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"review-service",children:"Review Service"}),"\n",(0,i.jsxs)(s.p,{children:["The review service provides the bounded context ",(0,i.jsx)(s.code,{children:"Review"}),".\nIt is responsible for managing reviews of users."]}),"\n",(0,i.jsx)(s.h2,{id:"domain-model",children:"Domain Model"}),"\n",(0,i.jsx)(d.Z,{path:"/renderedDiagrams/reviewDomainModel",width:"955.875",height:"450.325"}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsx)(s.p,{children:"Imported entities from other bounded contexts are marked with a dashed border."})}),"\n",(0,i.jsx)(s.h2,{id:"api",children:"API"}),"\n",(0,i.jsxs)(s.p,{children:["The service provides a GraphQL API, which is documented in the ",(0,i.jsx)(s.a,{href:"/docs/graphql/review",children:"GraphQL API documentation"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"technology-stack",children:"Technology Stack"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Language"}),": Rust"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Framework"}),": ",(0,i.jsx)(s.a,{href:"https://docs.rs/axum/latest/axum/",children:"axum"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"GraphQL Library"}),": ",(0,i.jsx)(s.a,{href:"https://docs.rs/async-graphql/latest/async_graphql/",children:"async_graphql"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Database"}),": MongoDB"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"repository-structure",children:"Repository Structure"}),"\n",(0,i.jsx)(s.p,{children:"The repository is structured as follows:"}),"\n",(0,i.jsx)("div",{className:"repository-structure",children:(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"/src"}),": Source code of the service","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"/authorization.rs"}),": Header authorization logic of service"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"/event"}),": Dapr event handling","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"/http_event_service.rs"}),": Handling of incoming events"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"/graphql"}),": GraphQL API","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"/model"}),": GraphQL types","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"/connection"}),": GraphQL connection types","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"/base_connection.rs"}),": Generic GraphQL connection"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"/review_connection.rs"}),": GraphQL connection of review"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"/order_datatypes.rs"}),": GraphQL datatypes for connection element ordering"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"/product.rs"}),": GraphQL product foreign datatype with additional GraphQL field(s) provided by this service"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"/product_variant.rs"}),": GraphQL product variant foreign datatype with additional GraphQL field(s) provided by this service"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"/review.rs"}),": Review datatype"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"/user.rs"}),": GraphQL user foreign dataype with additional GraphQL field(s) provided by this service"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"/mutation_input_structs.rs"}),": GraphQL input datatypes for mutations"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"/mutation.rs"}),": GraphQL mutations and associated functions"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"/query.rs"}),": GraphQL queries and associated functions"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"/main.rs"}),": Service execution and schema generation"]}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,i.jsx)(s.h2,{id:"defined-events",children:"Defined Events"}),"\n",(0,i.jsx)(s.p,{children:"This section lists events that are defined by the review service and can be used by other services."}),"\n",(0,i.jsx)(s.h3,{id:"published-defined-events",children:"Published Defined Events"}),"\n",(0,i.jsx)(s.p,{children:"n/a"}),"\n",(0,i.jsx)(s.h3,{id:"subscribed-defined-events",children:"Subscribed Defined Events"}),"\n",(0,i.jsx)(s.p,{children:"n/a"}),"\n",(0,i.jsx)(s.h2,{id:"imported-events",children:"Imported Events"}),"\n",(0,i.jsx)(s.p,{children:"This section lists events defined by other services that are used by the review service."}),"\n",(0,i.jsx)(s.h3,{id:"published-imported-events",children:"Published Imported Events"}),"\n",(0,i.jsx)(s.p,{children:"n/a"}),"\n",(0,i.jsx)(s.h3,{id:"subscribed-imported-events",children:"Subscribed Imported Events"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/docs/docs/dev-manuals/services/user#userusercreated",children:"user/user/created"}),": Used to validate that reviews belong to an existing user"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/docs/docs/dev-manuals/services/catalog#catalogproduct-variantcreated",children:"catalog/product-variant/created"}),": Used to validate that product variants contained in reviews exist"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"important-adrs",children:"Important ADRs"}),"\n",(0,i.jsx)(s.p,{children:"n/a"})]})}function v(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},4106:(e,s,n)=>{n.d(s,{Z:()=>o});var i=n(92949),r=n(44996),d=n(67294),t=n(99276),c=n(85893);function l(e){let{image:s}=e;const i=(0,d.useId)();return(0,d.useEffect)((()=>{let e=new t.Z({gallery:"#"+CSS.escape(i),children:"a",pswpModule:()=>n.e(15826).then(n.bind(n,15826))});return e.init(),()=>{e.destroy(),e=null}}),[]),(0,c.jsx)("div",{className:"pswp-gallery",id:i,children:(0,c.jsx)("a",{href:s.url,"data-pswp-width":s.width,"data-pswp-height":s.height,target:"_blank",rel:"noreferrer",children:(0,c.jsx)("img",{src:s.url,alt:s.alt})},i+"-0")})}var a=n(91262);function o(e){let{path:s,extension:n,alt:d,width:t,height:o}=e;const{colorMode:h}=(0,i.I)(),v={url:(0,r.Z)(`${s}-${h}.${n??"svg"}`),alt:d,width:t,height:o};return(0,c.jsx)(a.Z,{children:()=>(0,c.jsx)(l,{image:v})})}}}]);