"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[45691],{69744:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>h,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var i=s(85893),d=s(11151),t=s(4106);const r={},h="Shipment Service",l={id:"docs/dev-manuals/services/shipment",title:"Shipment Service",description:"The shipment service provides the bounded context Shipment.",source:"@site/docs/docs/dev-manuals/services/shipment.mdx",sourceDirName:"docs/dev-manuals/services",slug:"/docs/dev-manuals/services/shipment",permalink:"/docs/docs/dev-manuals/services/shipment",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Review Service",permalink:"/docs/docs/dev-manuals/services/review"},next:{title:"ShoppingCart Service",permalink:"/docs/docs/dev-manuals/services/shoppingcart"}},c={},a=[{value:"Domain Model",id:"domain-model",level:2},{value:"API",id:"api",level:2},{value:"REST API",id:"rest-api",level:3},{value:"POST <code>/shipment/{id}/status</code>",id:"post-shipmentidstatus",level:4},{value:"Technology Stack",id:"technology-stack",level:2},{value:"Repository Structure",id:"repository-structure",level:2},{value:"Defined Events",id:"defined-events",level:2},{value:"Type Definitions",id:"type-definitions",level:3},{value:"Published Defined Events",id:"published-defined-events",level:3},{value:"shipment/shipment/created",id:"shipmentshipmentcreated",level:4},{value:"shipment/shipment/creation-failed",id:"shipmentshipmentcreation-failed",level:4},{value:"shipment/shipment/status-updated",id:"shipmentshipmentstatus-updated",level:4},{value:"shipment/shipment-method/created",id:"shipmentshipment-methodcreated",level:4},{value:"shipment/shipment-method/archived",id:"shipmentshipment-methodarchived",level:4},{value:"Subscribed Defined Events",id:"subscribed-defined-events",level:3},{value:"Imported Events",id:"imported-events",level:2},{value:"Published Imported Events",id:"published-imported-events",level:3},{value:"Subscribed Imported Events",id:"subscribed-imported-events",level:3},{value:"Important ADRs",id:"important-adrs",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"shipment-service",children:"Shipment Service"}),"\n",(0,i.jsxs)(n.p,{children:["The shipment service provides the bounded context ",(0,i.jsx)(n.code,{children:"Shipment"}),".\nIt is responsible for managing shipments and their state, and interacts with an external shipment provider to do so."]}),"\n",(0,i.jsx)(n.h2,{id:"domain-model",children:"Domain Model"}),"\n",(0,i.jsx)(t.Z,{path:"/renderedDiagrams/shipmentDomainModel",width:"1720",height:"403.375"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"Imported entities from other bounded contexts are marked with a dashed border."})}),"\n",(0,i.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,i.jsxs)(n.p,{children:["The service provides a GraphQL API, which is documented in the ",(0,i.jsx)(n.a,{href:"/docs/graphql/shipment",children:"GraphQL API documentation"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"rest-api",children:"REST API"}),"\n",(0,i.jsx)(n.p,{children:"The service provides a REST API which is used by the external shipment provider to inform about shipment status changes."}),"\n",(0,i.jsxs)(n.h4,{id:"post-shipmentidstatus",children:["POST ",(0,i.jsx)(n.code,{children:"/shipment/{id}/status"})]}),"\n",(0,i.jsx)(n.p,{children:"Updates the status of a shipment."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Body"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"{\n  status: ShipmentStatus;\n}\n\nenum ShipmentStatus {\n  PENDING,\n  IN_PROGRESS,\n  DELIVERED,\n  FAILED\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"technology-stack",children:"Technology Stack"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Language"}),": Kotlin"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Framework"}),": Spring Boot"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"GraphQL Library"}),": GraphQL Kotlin"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Database"}),": PostgreSQL"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Schema Management"}),": Flyway"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"repository-structure",children:"Repository Structure"}),"\n",(0,i.jsx)(n.p,{children:"The repository is structured as follows:"}),"\n",(0,i.jsx)("div",{className:"repository-structure",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"/src/main/"}),": Source code of the service","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"kotlin/org/misarch/shipment/"}),": Kotlin source code","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"event/"}),": Dapr event handling","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"model/"}),": Event DTOs"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"graphql/"}),": GraphQL API","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"dataloader/"}),": Data loaders for efficient data fetching"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"federation/"}),": Apollo Federation entity resolvers"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"input/"}),": Input types for mutations"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"model/"}),": GraphQL types","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"connection/"}),": Connection types and logic for paginated queries"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"persistance/"}),": Database entities and repositories","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"model/"}),": R2DBC entities"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"repository/"}),": Spring Data R2DBC repositories"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"provider/"}),": REST API for external shipment provider, configuration"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"service/"}),": Service logic"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"resources/"}),": Spring Boot application configuration and SQL schema migration files","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"db/migration/"}),": Flyway SQL schema migration files"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,i.jsx)(n.h2,{id:"defined-events",children:"Defined Events"}),"\n",(0,i.jsx)(n.p,{children:"This section lists events that are defined by the shipment service and can be used by other services."}),"\n",(0,i.jsx)(n.h3,{id:"type-definitions",children:"Type Definitions"}),"\n",(0,i.jsx)(n.p,{children:"The following types are used in the defined events:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"enum ShipmentStatus {\n  PENDING,\n  IN_PROGRESS,\n  DELIVERED,\n  FAILED\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"published-defined-events",children:"Published Defined Events"}),"\n",(0,i.jsx)(n.h4,{id:"shipmentshipmentcreated",children:"shipment/shipment/created"}),"\n",(0,i.jsx)(n.p,{children:"This event is published when a new shipment is created."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"{\n  id: string,\n  orderId?: string,\n  returnId?: string,\n  status: ShipmentStatus,\n  orderItemIds: string[],\n  shipmentMethodId: string,\n  shipmentAddressId: string\n}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"shipmentshipmentcreation-failed",children:"shipment/shipment/creation-failed"}),"\n",(0,i.jsx)(n.p,{children:"This event is published when the creation of a shipment failed."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"{\n  orderId?: string,\n  returnId?: string,\n  orderItemIds: string[],\n  shipmentMethodId: string,\n  shipmentAddressId: string,\n  reason: string\n}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"shipmentshipmentstatus-updated",children:"shipment/shipment/status-updated"}),"\n",(0,i.jsx)(n.p,{children:"This event is published when the status of a shipment is updated."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"{\n  id: string,\n  orderId?: string,\n  returnId?: string,\n  status: ShipmentStatus,\n  orderItemIds: string[],\n}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"shipmentshipment-methodcreated",children:"shipment/shipment-method/created"}),"\n",(0,i.jsx)(n.p,{children:"This event is published when a new shipment method is created."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"{\n  id: string,\n  name: string,\n  description: string,\n  ref: string,\n  baseFees: number,\n  feesPerItem: number,\n  feesPerKg: number\n}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"shipmentshipment-methodarchived",children:"shipment/shipment-method/archived"}),"\n",(0,i.jsx)(n.p,{children:"This event is published when a shipment method is archived."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"{\n  id: string;\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"subscribed-defined-events",children:"Subscribed Defined Events"}),"\n",(0,i.jsx)(n.p,{children:"n/a"}),"\n",(0,i.jsx)(n.h2,{id:"imported-events",children:"Imported Events"}),"\n",(0,i.jsx)(n.p,{children:"This section lists events defined by other services that are used by the shipment service."}),"\n",(0,i.jsx)(n.h3,{id:"published-imported-events",children:"Published Imported Events"}),"\n",(0,i.jsx)(n.p,{children:"n/a"}),"\n",(0,i.jsx)(n.h3,{id:"subscribed-imported-events",children:"Subscribed Imported Events"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/docs/dev-manuals/services/payment#paymentpaymentpayment-enabled",children:"payment/payment/payment-enabled"}),": Used to create new shipments for an order when the order and associated payment is validated successfully."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/docs/dev-manuals/services/address#addressuser-addresscreated",children:"address/user-address/created"}),": Used to import ",(0,i.jsx)(n.code,{children:"UserAddress"})," from the ",(0,i.jsx)(n.code,{children:"Address"})," bounded context."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/docs/dev-manuals/services/address#addressvendor-addresscreated",children:"address/vendor-address/created"}),": Used to import ",(0,i.jsx)(n.code,{children:"VendorAddress"})," from the ",(0,i.jsx)(n.code,{children:"Address"})," bounded context."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/docs/dev-manuals/services/catalog#catalogproduct-variant-versioncreated",children:"catalog/product-variant-version/created"}),": Used to import ",(0,i.jsx)(n.code,{children:"ProductVariantVersion"})," from the ",(0,i.jsx)(n.code,{children:"Catalog"})," bounded context."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/docs/dev-manuals/services/return#returnreturncreated",children:"return/return/created"}),": Used to create a shipment for a return."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"important-adrs",children:"Important ADRs"}),"\n",(0,i.jsx)(n.p,{children:"n/a"})]})}function p(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},4106:(e,n,s)=>{s.d(n,{Z:()=>a});var i=s(92949),d=s(44996),t=s(67294),r=s(99276),h=s(85893);function l(e){let{image:n}=e;const i=(0,t.useId)();return(0,t.useEffect)((()=>{let e=new r.Z({gallery:"#"+CSS.escape(i),children:"a",pswpModule:()=>s.e(15826).then(s.bind(s,15826))});return e.init(),()=>{e.destroy(),e=null}}),[]),(0,h.jsx)("div",{className:"pswp-gallery",id:i,children:(0,h.jsx)("a",{href:n.url,"data-pswp-width":n.width,"data-pswp-height":n.height,target:"_blank",rel:"noreferrer",children:(0,h.jsx)("img",{src:n.url,alt:n.alt})},i+"-0")})}var c=s(91262);function a(e){let{path:n,extension:s,alt:t,width:r,height:a}=e;const{colorMode:o}=(0,i.I)(),p={url:(0,d.Z)(`${n}-${o}.${s??"svg"}`),alt:t,width:r,height:a};return(0,h.jsx)(c.Z,{children:()=>(0,h.jsx)(l,{image:p})})}}}]);