"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[89499],{32115:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>t});var r=n(85893),s=n(11151);const c={},a="Experiment Config Service",l={id:"docs/dev-manuals/other-repositories/experiment-config",title:"Experiment Config Service",description:"The Experiment Config Service stores all available services and their replicas in memory.",source:"@site/docs/docs/dev-manuals/other-repositories/experiment-config.mdx",sourceDirName:"docs/dev-manuals/other-repositories",slug:"/docs/dev-manuals/other-repositories/experiment-config",permalink:"/docs/docs/dev-manuals/other-repositories/experiment-config",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Experiment Config Frontend",permalink:"/docs/docs/dev-manuals/other-repositories/experiment-config-frontend"},next:{title:"Kubernetes setup",permalink:"/docs/docs/dev-manuals/other-repositories/infrastructure-k8s"}},o={},t=[{value:"REST API",id:"rest-api",level:2},{value:"Common Types",id:"common-types",level:4},{value:"Service Level Endpoints",id:"service-level-endpoints",level:3},{value:"GET <code>/configuration/</code>",id:"get-configuration",level:4},{value:"GET <code>/configuration/names</code>",id:"get-configurationnames",level:4},{value:"GET <code>/configuration/{service}/defined-variables</code>",id:"get-configurationservicedefined-variables",level:4},{value:"GET <code>configuration/{service}/variables</code>",id:"get-configurationservicevariables",level:4},{value:"GET <code>configuration/{service}/replicas</code>",id:"get-configurationservicereplicas",level:4},{value:"GET <code>configuration/{service}/variables/{variable}</code>",id:"get-configurationservicevariablesvariable",level:4},{value:"PUT <code>configuration/{service}/variables</code>",id:"put-configurationservicevariables",level:4},{value:"PUT <code>configuration/{service}/variables/{variable}</code>",id:"put-configurationservicevariablesvariable",level:4},{value:"Replica Level Endpoints",id:"replica-level-endpoints",level:3},{value:"GET <code>/configuration/{service}/replicas/{replica}/variables</code>",id:"get-configurationservicereplicasreplicavariables",level:4},{value:"GET <code>/configuration/{service}/replicas/{replica}/variables/{variable}</code>",id:"get-configurationservicereplicasreplicavariablesvariable",level:4},{value:"PUT <code>configuration/{service}/replicas/{replica}/variables</code>",id:"put-configurationservicereplicasreplicavariables",level:4},{value:"PUT <code>configuration/{service}/replicas/{replica}/variables/{variable}</code>",id:"put-configurationservicereplicasreplicavariablesvariable",level:4},{value:"Technology Stack",id:"technology-stack",level:2},{value:"Repository Structure",id:"repository-structure",level:2},{value:"Subscribed Imported Events",id:"subscribed-imported-events",level:3},{value:"Important ADRs",id:"important-adrs",level:2}];function d(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h1,{id:"experiment-config-service",children:"Experiment Config Service"}),"\n",(0,r.jsxs)(i.p,{children:["The Experiment Config Service stores all available services and their replicas in memory.\nIt additionally queries each service's sidecar for variable definitions - in ",(0,r.jsx)(i.a,{href:"https://json-schema.org/",children:"JSONSchema"}),".\nIt enables the configuration of the whole MisArch system."]}),"\n",(0,r.jsx)(i.h2,{id:"rest-api",children:"REST API"}),"\n",(0,r.jsxs)(i.p,{children:["The service provides a REST API over which configurations can be queried and made.\nThe API is also used by the ",(0,r.jsx)(i.a,{href:"https://github.com/MiSArch/experiment-config-frontend",children:"Experiment Config Frontend"})]}),"\n",(0,r.jsx)(i.h4,{id:"common-types",children:"Common Types"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"ServiceConfiguration"})}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-tsx",children:"  name: string;\n  replicas: ServiceReplica[];\n  globalVariables: ConfigurationVariable[];\n  variableDefinitions: ConfigurationVariableDefinition[];\n"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"ServiceReplica"})}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-tsx",children:"  id: string;\n  replicaVariables: ConfigurationVariable[];\n  lastSeen?: Date;\n"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"ConfigurationVariable"})}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-tsx",children:"key: string;\nvalue: any;\n"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"ConfigurationVariableDefinition"})}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-tsx",children:"key: string;\ntype: JSONSchemaType<any>;\ndefaultValue: any;\n"})}),"\n",(0,r.jsx)(i.h3,{id:"service-level-endpoints",children:"Service Level Endpoints"}),"\n",(0,r.jsxs)(i.h4,{id:"get-configuration",children:["GET ",(0,r.jsx)(i.code,{children:"/configuration/"})]}),"\n",(0,r.jsxs)(i.p,{children:["Returns all current ",(0,r.jsx)(i.code,{children:"ServiceConfiguration"}),"'s."]}),"\n",(0,r.jsxs)(i.h4,{id:"get-configurationnames",children:["GET ",(0,r.jsx)(i.code,{children:"/configuration/names"})]}),"\n",(0,r.jsx)(i.p,{children:"Returns the names of all current services."}),"\n",(0,r.jsxs)(i.h4,{id:"get-configurationservicedefined-variables",children:["GET ",(0,r.jsx)(i.code,{children:"/configuration/{service}/defined-variables"})]}),"\n",(0,r.jsxs)(i.p,{children:["Returns all ",(0,r.jsx)(i.code,{children:"ConfigurationVariableDefinition"}),"'s of the service with the name ",(0,r.jsx)(i.code,{children:"{service}"}),"."]}),"\n",(0,r.jsxs)(i.h4,{id:"get-configurationservicevariables",children:["GET ",(0,r.jsx)(i.code,{children:"configuration/{service}/variables"})]}),"\n",(0,r.jsxs)(i.p,{children:["Returns the current values of all service ",(0,r.jsx)(i.code,{children:"ConfigurationVariable"}),"'s"]}),"\n",(0,r.jsxs)(i.h4,{id:"get-configurationservicereplicas",children:["GET ",(0,r.jsx)(i.code,{children:"configuration/{service}/replicas"})]}),"\n",(0,r.jsxs)(i.p,{children:["Returns the ",(0,r.jsx)(i.code,{children:"ServiceReplica"}),"'s of the service with the name ",(0,r.jsx)(i.code,{children:"{service}"}),"."]}),"\n",(0,r.jsxs)(i.h4,{id:"get-configurationservicevariablesvariable",children:["GET ",(0,r.jsx)(i.code,{children:"configuration/{service}/variables/{variable}"})]}),"\n",(0,r.jsxs)(i.p,{children:["Returns the ",(0,r.jsx)(i.code,{children:"ConfigurationVariable"})," ",(0,r.jsx)(i.code,{children:"{variable}"})," for the service with the name ",(0,r.jsx)(i.code,{children:"{service}"})]}),"\n",(0,r.jsxs)(i.h4,{id:"put-configurationservicevariables",children:["PUT ",(0,r.jsx)(i.code,{children:"configuration/{service}/variables"})]}),"\n",(0,r.jsxs)(i.p,{children:["Batch updates the global configuration of the service with the name ",(0,r.jsx)(i.code,{children:"{service}"}),"\nand overwrites all replica configurations with the global configuration."]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Body"})}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-tsx",children:"{\n  variables: ConfigurationVariable[];\n}\n"})}),"\n",(0,r.jsxs)(i.h4,{id:"put-configurationservicevariablesvariable",children:["PUT ",(0,r.jsx)(i.code,{children:"configuration/{service}/variables/{variable}"})]}),"\n",(0,r.jsxs)(i.p,{children:["Updates the configuration with the key ",(0,r.jsx)(i.code,{children:"{variable}"})," of the service with the name ",(0,r.jsx)(i.code,{children:"{service}"}),"\nand overwrites all replica configurations with the global configuration."]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Body"})}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-tsx",children:"{\n  value: any;\n}\n"})}),"\n",(0,r.jsx)(i.h3,{id:"replica-level-endpoints",children:"Replica Level Endpoints"}),"\n",(0,r.jsxs)(i.h4,{id:"get-configurationservicereplicasreplicavariables",children:["GET ",(0,r.jsx)(i.code,{children:"/configuration/{service}/replicas/{replica}/variables"})]}),"\n",(0,r.jsxs)(i.p,{children:["Returns all ",(0,r.jsx)(i.code,{children:"ConfigurationVariable"}),"'s of the replica with the ID ",(0,r.jsx)(i.code,{children:"{replica}"}),"\nof the service with the name ",(0,r.jsx)(i.code,{children:"{service}"})]}),"\n",(0,r.jsxs)(i.h4,{id:"get-configurationservicereplicasreplicavariablesvariable",children:["GET ",(0,r.jsx)(i.code,{children:"/configuration/{service}/replicas/{replica}/variables/{variable}"})]}),"\n",(0,r.jsxs)(i.p,{children:["Returns the ",(0,r.jsx)(i.code,{children:"ConfigurationVariable"})," with the key ",(0,r.jsx)(i.code,{children:"{variable}"})," of the replica with the ID ",(0,r.jsx)(i.code,{children:"{replica}"}),"\nof the service with the name ",(0,r.jsx)(i.code,{children:"{service}"})]}),"\n",(0,r.jsxs)(i.h4,{id:"put-configurationservicereplicasreplicavariables",children:["PUT ",(0,r.jsx)(i.code,{children:"configuration/{service}/replicas/{replica}/variables"})]}),"\n",(0,r.jsxs)(i.p,{children:["Batch updates configuration of the relica with the ID ",(0,r.jsx)(i.code,{children:"{replica}"}),"\nof the service with the name ",(0,r.jsx)(i.code,{children:"{service}"}),"."]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Body"})}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-tsx",children:"{\n  variables: ConfigurationVariable[];\n}\n"})}),"\n",(0,r.jsxs)(i.h4,{id:"put-configurationservicereplicasreplicavariablesvariable",children:["PUT ",(0,r.jsx)(i.code,{children:"configuration/{service}/replicas/{replica}/variables/{variable}"})]}),"\n",(0,r.jsxs)(i.p,{children:["Updates the configuration with the key ",(0,r.jsx)(i.code,{children:"{variable}"}),"\nof the replica with the ID ",(0,r.jsx)(i.code,{children:"{replica}"})," of the service with the name ",(0,r.jsx)(i.code,{children:"{service}"}),"."]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Body"})}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-tsx",children:"{\n  value: any;\n}\n"})}),"\n",(0,r.jsx)(i.h2,{id:"technology-stack",children:"Technology Stack"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Language"}),": TypeScript"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Framework"}),": NestJS"]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"repository-structure",children:"Repository Structure"}),"\n",(0,r.jsx)(i.p,{children:"The repository is structured as follows:"}),"\n",(0,r.jsx)("div",{className:"repository-structure",children:(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"/src/"}),": Source code of the service","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"configuration/"}),": Internal simulation of event processing out of the queue","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"dto/"}),": Event DTOs to send back to services"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"entities/"}),": Event DTOs to send back to services"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"event/"}),": Module for Registering and manually updating payments","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"dto"}),": Payment Registering and updating DTOs"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"shared/"}),": Shared Code between different modules","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"logger"}),": Logging Configuration"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"pipes"}),": Internal Pipes"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"health/"}),": Module application healthchecks."]}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,r.jsx)(i.h3,{id:"subscribed-imported-events",children:"Subscribed Imported Events"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"heartbeat: Registers available replicas."}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"important-adrs",children:"Important ADRs"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"/docs/docs/dev-manuals/adr/health-endpoint",children:"Service Health Endpoint"})}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,i,n)=>{n.d(i,{Z:()=>l,a:()=>a});var r=n(67294);const s={},c=r.createContext(s);function a(e){const i=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(c.Provider,{value:i},e.children)}}}]);