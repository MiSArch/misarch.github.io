"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7416],{633:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>l,contentTitle:()=>d,default:()=>o,frontMatter:()=>n,metadata:()=>c,toc:()=>h});var t=s(85893),r=s(11151);const n={sidebar_position:4},d="Domain Tradeoff Analysis",c={id:"docs/dev-manuals/architecture/domain-tradeoff-analysis",title:"Domain Tradeoff Analysis",description:'This document compares the three domains "Sonarcube Actions" (SA), "Shipping Container Service" (SCS) and ""Ticketing System" (TS) in terms of their suitability with regard to the requirements identified. The complete requirement descriptions can be found in the requirement docs file. Requirements, that are equally fullfillable by both domains are omitted from this comparison.',source:"@site/docs/docs/dev-manuals/architecture/domain-tradeoff-analysis.md",sourceDirName:"docs/dev-manuals/architecture",slug:"/docs/dev-manuals/architecture/domain-tradeoff-analysis",permalink:"/docs/docs/dev-manuals/architecture/domain-tradeoff-analysis",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Experiment configuration",permalink:"/docs/docs/dev-manuals/architecture/experiment-configuration"},next:{title:"Component Diagram",permalink:"/docs/docs/dev-manuals/architecture/component-diagram"}},l={},h=[{value:"Short Description SonarCube Actions",id:"short-description-sonarcube-actions",level:2},{value:"Short Description Shipping Container Service",id:"short-description-shipping-container-service",level:2},{value:"Ticket System",id:"ticket-system",level:2},{value:"E-Commerce",id:"e-commerce",level:2},{value:"Overview of Relevant Requirement Categories",id:"overview-of-relevant-requirement-categories",level:2},{value:"Constraints",id:"constraints",level:2},{value:"R-C-001: No external services",id:"r-c-001-no-external-services",level:4},{value:"Process",id:"process",level:2},{value:"EnPro Requirements",id:"enpro-requirements",level:3},{value:"R-E-001: At least 15 Microservices",id:"r-e-001-at-least-15-microservices",level:4},{value:"R-E-002: Microservice Patterns",id:"r-e-002-microservice-patterns",level:4},{value:"Software Artefacts",id:"software-artefacts",level:3},{value:"R-SArt-003: Clean and simple deployment",id:"r-sart-003-clean-and-simple-deployment",level:4},{value:"Product",id:"product",level:2},{value:"Usability Requirements",id:"usability-requirements",level:3},{value:"R-U-001: As realistic as possible",id:"r-u-001-as-realistic-as-possible",level:4},{value:"R-U-003: Configurations",id:"r-u-003-configurations",level:4},{value:"R-U-004: Experiments",id:"r-u-004-experiments",level:4},{value:"R-U-005: The RA must be <em>lightweight</em>",id:"r-u-005-the-ra-must-be-lightweight",level:4},{value:"R-U-008: Observability",id:"r-u-008-observability",level:4},{value:"R-U-011: Adding services",id:"r-u-011-adding-services",level:4},{value:"R-U-012: True to the term <em>Reference Architecture</em>",id:"r-u-012-true-to-the-term-reference-architecture",level:4},{value:"R-U-013: Deterioration in performance",id:"r-u-013-deterioration-in-performance",level:4},{value:"ToAdd Unexpected load",id:"toadd-unexpected-load",level:3},{value:"Design",id:"design",level:2},{value:"Architecture",id:"architecture",level:3},{value:"R-A-001: Extendability",id:"r-a-001-extendability",level:4},{value:"R-A-003: Distributed Transactions",id:"r-a-003-distributed-transactions",level:4},{value:"R-A-005: Loose Coupling",id:"r-a-005-loose-coupling",level:4},{value:"Microservice Patterns",id:"microservice-patterns",level:3},{value:"R-MP-001: Database per Service",id:"r-mp-001-database-per-service",level:4},{value:"R-MP-005: Saga",id:"r-mp-005-saga",level:4},{value:"Summary",id:"summary",level:2},{value:"Project Supervisor&#39; opinion:",id:"project-supervisor-opinion",level:2}];function a(e){const i={em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"domain-tradeoff-analysis",children:"Domain Tradeoff Analysis"}),"\n",(0,t.jsxs)(i.p,{children:['This document compares the three domains "Sonarcube Actions" (',(0,t.jsx)(i.strong,{children:"SA"}),'), "Shipping Container Service" (',(0,t.jsx)(i.strong,{children:"SCS"}),') and ""Ticketing System" (',(0,t.jsx)(i.strong,{children:"TS"}),") in terms of their suitability with regard to the requirements identified. The complete requirement descriptions can be found in the requirement docs file. Requirements, that are equally fullfillable by both domains are omitted from this comparison.\nIn the summary, the arguments from the developers perspective are compared to the supervisors feedback."]}),"\n",(0,t.jsx)(i.h2,{id:"short-description-sonarcube-actions",children:"Short Description SonarCube Actions"}),"\n",(0,t.jsxs)(i.p,{children:["SonarCube Actions allows developers to analyse their source code by assembling an individual processing pipeline. Users upload their code or connect their code-hosting service to the ",(0,t.jsx)(i.strong,{children:"SA"})," system. Possible pipeline steps are static code analysis, AI-driven summary, documentation services, or performance analysis. The results from all steps are put together and presented to the user when the pipeline is finished."]}),"\n",(0,t.jsx)(i.h2,{id:"short-description-shipping-container-service",children:"Short Description Shipping Container Service"}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.strong,{children:"SCS"})," system allows users to get cargo from one port to another. An important functionality is the preview functionality, which allows the user to know the cost and timeline of his shipping order beforehand, and choose between economic, ecological or fast options. The system handles the routing and scheduling for the simulated container ships and analyzes the event stream of GPS coordinates for anomalies. In the frontend, users can track their orders and operators can access business insights."]}),"\n",(0,t.jsx)(i.h2,{id:"ticket-system",children:"Ticket System"}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.strong,{children:"TS"})," domain was added after the requirements analysis to include a lightweight alternative."]}),"\n",(0,t.jsx)(i.p,{children:'Users (both internal and external) can create tickets, which are then handled by support employees. Like in Jira, tickets can have a workflow, which can involve manual, but also automatic steps. Tickets are handled like a sort-of chatbot: most importantly, they have an associated history. Entries in the timeline can for example be a form, text messages, automatic reminders, or button inputs. Doing entries can cause events, for example a message by the creator causes the "answered" event. These events can in be associated with state changes and thus transitions in the pipeline builder. As tickets also have manual steps, in these cases, work needs to be done by employees. Thus, there should be some sort of backlog of tickets which need to be handled by employees.'}),"\n",(0,t.jsx)(i.h2,{id:"e-commerce",children:"E-Commerce"}),"\n",(0,t.jsx)(i.p,{children:"Since the e-commerce domain is used in a variety of other reference architectures, it was included retrospectively in this comparison as a benchmark domain."}),"\n",(0,t.jsx)(i.h2,{id:"overview-of-relevant-requirement-categories",children:"Overview of Relevant Requirement Categories"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Constraints"}),"\n",(0,t.jsx)(i.li,{children:"Process"}),"\n",(0,t.jsx)(i.li,{children:"EnPro -- The project itself"}),"\n",(0,t.jsx)(i.li,{children:"Software Artefacts"}),"\n",(0,t.jsx)(i.li,{children:"Product"}),"\n",(0,t.jsx)(i.li,{children:"Usability"}),"\n",(0,t.jsx)(i.li,{children:"Design"}),"\n",(0,t.jsx)(i.li,{children:"Architecture"}),"\n",(0,t.jsx)(i.li,{children:"Microservice Patterns"}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"constraints",children:"Constraints"}),"\n",(0,t.jsx)(i.h4,{id:"r-c-001-no-external-services",children:"R-C-001: No external services"}),"\n",(0,t.jsx)(i.p,{children:"Both the SCS and SA domains include functionalities, that would benefit from external services (i.e. code summary for SA and routing, currency exchange for SCS). These functionalities can be implemented in the project with some effort."}),"\n",(0,t.jsx)(i.p,{children:"TS is less complex and therefore is not reliant on external services."}),"\n",(0,t.jsx)(i.h2,{id:"process",children:"Process"}),"\n",(0,t.jsx)(i.h3,{id:"enpro-requirements",children:"EnPro Requirements"}),"\n",(0,t.jsx)(i.h4,{id:"r-e-001-at-least-15-microservices",children:"R-E-001: At least 15 Microservices"}),"\n",(0,t.jsx)(i.p,{children:"The SCS and SA domains easily provide enough use cases to fulfil this requirement. However, due to the pipes-and-filters architecture of the SA domain, it might be easier to add additional, low-effort services."}),"\n",(0,t.jsx)(i.p,{children:"Since the TS domain is more lightweight, it will be more difficult to come up with 15 microservices."}),"\n",(0,t.jsx)(i.h4,{id:"r-e-002-microservice-patterns",children:"R-E-002: Microservice Patterns"}),"\n",(0,t.jsx)(i.p,{children:"A possible separation of concerns is essential for using the microservice pattern. Tight coupling between the services is one of the largest issues with modern microservice architectures. The SA architecture shares only the input between the different (non-core) services and therefore might be easier to support this pattern."}),"\n",(0,t.jsx)(i.p,{children:"Since the TS domain will be smaller, a logical seperation of the microservices might be harder."}),"\n",(0,t.jsx)(i.h3,{id:"software-artefacts",children:"Software Artefacts"}),"\n",(0,t.jsx)(i.h4,{id:"r-sart-003-clean-and-simple-deployment",children:"R-SArt-003: Clean and simple deployment"}),"\n",(0,t.jsx)(i.p,{children:"If AI services like a code summary service are implemented in the SA domain, the resulting system might be more difficult to deploy. Large Language Models need a lot of resources to operate."}),"\n",(0,t.jsx)(i.h2,{id:"product",children:"Product"}),"\n",(0,t.jsx)(i.h3,{id:"usability-requirements",children:"Usability Requirements"}),"\n",(0,t.jsx)(i.h4,{id:"r-u-001-as-realistic-as-possible",children:"R-U-001: As realistic as possible"}),"\n",(0,t.jsx)(i.p,{children:'Both domains allow for a realistic system, since similar - microservice-based - systems are in use today. The SA system might be more relevant after the project for the chair since it fits better to their research focus. Since the SCS system is built on top of a simulation, it is slightly less realistic. Since container ships are quite slow, a time speedup is needed.\nThe TS system will also need simulated "processing" of the tickets.'}),"\n",(0,t.jsx)(i.h4,{id:"r-u-003-configurations",children:"R-U-003: Configurations"}),"\n",(0,t.jsx)(i.p,{children:"Configuration is essential for the experiment-focused side of the reference architecture. The requirement R-U-003 also includes architecture-side configuration and different variants of the system which are indifferent between the domains. The following comparison focuses on the deployment configuration.\nThere are more configurable variables in the SCS domain since all shipping-related variables (like boat size, container size, number of boats, number of ports, frequency of location updates), that can be adjusted based on the researcher's needs."}),"\n",(0,t.jsx)(i.h4,{id:"r-u-004-experiments",children:"R-U-004: Experiments"}),"\n",(0,t.jsx)(i.p,{children:"While the SCS domain is more configurable (see R-U-003), it is more effort to make experiments deterministic. Since the system is stateful due to the current location of ships and containers, a well-defined starting state would need to be introduced."}),"\n",(0,t.jsxs)(i.h4,{id:"r-u-005-the-ra-must-be-lightweight",children:["R-U-005: The RA must be ",(0,t.jsx)(i.em,{children:"lightweight"})]}),"\n",(0,t.jsx)(i.p,{children:"Due to the reduced technical complexity of the TS domain, it can be considered the most lightweight."}),"\n",(0,t.jsx)(i.h4,{id:"r-u-008-observability",children:"R-U-008: Observability"}),"\n",(0,t.jsx)(i.p,{children:"The SCS domain might be more complicated to observe since actions and events are less user-input-driven than in the SA domain. For example, the metrics regarding one pipeline call can easily be measured and observed end-to-end, while a shipping request adds the order in the shipping queue and leads to a lot of follow-up calculations and optimizations, that are harder to link to one request."}),"\n",(0,t.jsx)(i.h4,{id:"r-u-011-adding-services",children:"R-U-011: Adding services"}),"\n",(0,t.jsx)(i.p,{children:"Due to the looser coupling of the SA domain, additional microservices should be easier to add as long as they do not influence the core services (like scheduling/pipelines)."}),"\n",(0,t.jsxs)(i.h4,{id:"r-u-012-true-to-the-term-reference-architecture",children:["R-U-012: True to the term ",(0,t.jsx)(i.em,{children:"Reference Architecture"})]}),"\n",(0,t.jsx)(i.p,{children:"See R-U-005: Since the TS system will be more lightweight and easy to understand, it has a slight edge over the other domains."}),"\n",(0,t.jsx)(i.h4,{id:"r-u-013-deterioration-in-performance",children:"R-U-013: Deterioration in performance"}),"\n",(0,t.jsx)(i.p,{children:"Both the SA and SCS domains allow for performance deterioration, although through different means. In the SA domain, heavy load can be put on the system by adding AI-driven steps. In the SCS domain, the routing and optimization for large orders and ships or data-intensive business intelligence queries can add load.\nThe TS system does not include similar - resource-intensive processes."}),"\n",(0,t.jsx)(i.h3,{id:"toadd-unexpected-load",children:"ToAdd Unexpected load"}),"\n",(0,t.jsx)(i.p,{children:"The TS domain includes somewhat unexpected load since tickets increase when systems are down or users are unhappy. The SCS domain includes unexpected load, when ships are delayed or shipping routes closed. The argument can be made, however, that ships are slow and therefore calculations not time-sensitive. The SA system can be hit with requests for very large repositories.\nThese do however not fulfil the definition regarding unexpected load completely."}),"\n",(0,t.jsx)(i.h2,{id:"design",children:"Design"}),"\n",(0,t.jsx)(i.h3,{id:"architecture",children:"Architecture"}),"\n",(0,t.jsx)(i.h4,{id:"r-a-001-extendability",children:"R-A-001: Extendability"}),"\n",(0,t.jsx)(i.p,{children:"See R-U-011"}),"\n",(0,t.jsx)(i.h4,{id:"r-a-003-distributed-transactions",children:"R-A-003: Distributed Transactions"}),"\n",(0,t.jsx)(i.p,{children:"Distributed Transactions might be easier in the SCS domain since one shipping order passes different process steps and later shipping ports."}),"\n",(0,t.jsx)(i.h4,{id:"r-a-005-loose-coupling",children:"R-A-005: Loose Coupling"}),"\n",(0,t.jsx)(i.p,{children:"See R-E-002"}),"\n",(0,t.jsx)(i.h3,{id:"microservice-patterns",children:"Microservice Patterns"}),"\n",(0,t.jsx)(i.h4,{id:"r-mp-001-database-per-service",children:"R-MP-001: Database per Service"}),"\n",(0,t.jsx)(i.p,{children:"In the TS domain, clearly separating the services will be harder (see R-E-002)."}),"\n",(0,t.jsx)(i.h4,{id:"r-mp-005-saga",children:"R-MP-005: Saga"}),"\n",(0,t.jsx)(i.p,{children:"See R-A-003"}),"\n",(0,t.jsx)(i.h2,{id:"summary",children:"Summary"}),"\n",(0,t.jsxs)(i.p,{children:["An ",(0,t.jsx)(i.strong,{children:"X"})," indicates, that the domain is better able to or easier to implement a requirement than domains without an X. ",(0,t.jsx)(i.strong,{children:"0"})," means, that the domain is neither beneficial nor hindering for the implementation of a requirement. An ",(0,t.jsx)(i.strong,{children:"empty field"})," means, that it is harder within the domain to fulfil the requirement."]}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Requirement"}),(0,t.jsx)(i.th,{children:"SA"}),(0,t.jsx)(i.th,{children:"SCS"}),(0,t.jsx)(i.th,{children:"TS"}),(0,t.jsx)(i.th,{children:"e-Commerce"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"R-E-001 (No external services)"}),(0,t.jsx)(i.td,{}),(0,t.jsx)(i.td,{}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{children:"F"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"R-E-002 (At least 15 microservices)"}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{}),(0,t.jsx)(i.td,{children:"X"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"R-SArt-003 (Clean/simple deployment)"}),(0,t.jsx)(i.td,{}),(0,t.jsx)(i.td,{children:"0"}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{children:"X"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"R-U-001 (As realistic as possible)"}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{children:"0"}),(0,t.jsx)(i.td,{children:"0"}),(0,t.jsx)(i.td,{children:"0"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"R-U-003 (Configurations)"}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{children:"0"}),(0,t.jsx)(i.td,{})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"R-U-003 (Conf. Arch)"}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{}),(0,t.jsx)(i.td,{children:"0"}),(0,t.jsx)(i.td,{})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"R-U-004 (Experiments)"}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{children:"X"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsxs)(i.td,{children:["R-U-005 (The RA must be ",(0,t.jsx)(i.em,{children:"lightweight"}),")"]}),(0,t.jsx)(i.td,{children:"0"}),(0,t.jsx)(i.td,{children:"0"}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{children:"X"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"R-U-008 (Observability)"}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{children:"X"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"R-U-011 (Adding services)"}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{children:"0"}),(0,t.jsx)(i.td,{children:"0"}),(0,t.jsx)(i.td,{children:"0"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsxs)(i.td,{children:["R-U-012 (True to the term ",(0,t.jsx)(i.em,{children:"Reference Architecture"}),")"]}),(0,t.jsx)(i.td,{children:"0"}),(0,t.jsx)(i.td,{children:"0"}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{children:"X"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"R-U-013 (Deterioration in performance)"}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{}),(0,t.jsx)(i.td,{children:"X"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Unexpected load"}),(0,t.jsx)(i.td,{children:"0"}),(0,t.jsx)(i.td,{}),(0,t.jsx)(i.td,{children:"0"}),(0,t.jsx)(i.td,{children:"X"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"R-A-003 (Distributed Transactions)"}),(0,t.jsx)(i.td,{children:"0"}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{}),(0,t.jsx)(i.td,{children:"X"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"R-MP-001 (Database per Service)"}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{}),(0,t.jsx)(i.td,{children:"X"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Rating"}),(0,t.jsx)(i.td,{children:"5"}),(0,t.jsx)(i.td,{children:"1"}),(0,t.jsx)(i.td,{children:"2"}),(0,t.jsx)(i.td,{children:"13"})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"project-supervisor-opinion",children:"Project Supervisor' opinion:"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Requirement"}),(0,t.jsx)(i.th,{children:"SA"}),(0,t.jsx)(i.th,{children:"SCS"}),(0,t.jsx)(i.th,{children:"TS"}),(0,t.jsx)(i.th,{children:"e-Commerce"}),(0,t.jsx)(i.th,{children:"Relevance"}),(0,t.jsx)(i.th,{children:"Comments"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"R-C-001 (No external services)"}),(0,t.jsx)(i.td,{children:"0"}),(0,t.jsx)(i.td,{children:"F"}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{children:"F"}),(0,t.jsx)(i.td,{children:"REL"}),(0,t.jsx)(i.td,{})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"R-E-001 (At least 15 microservices)"}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{children:"0"}),(0,t.jsx)(i.td,{children:"0"}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{children:"REL"}),(0,t.jsx)(i.td,{})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"R-E-002 (Suited for Microservices)"}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{children:"REL"}),(0,t.jsx)(i.td,{})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"R-SArt-003 (Clean/simple deployment)"}),(0,t.jsx)(i.td,{}),(0,t.jsx)(i.td,{children:"0"}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{children:"NTH"}),(0,t.jsx)(i.td,{})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"R-U-001 (Realisitic Usage possible)"}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{children:"0"}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{children:"0"}),(0,t.jsx)(i.td,{children:"NTH"}),(0,t.jsx)(i.td,{})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"R-U-001 (Realistic experiments possible)"}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{children:"0"}),(0,t.jsx)(i.td,{children:"F"}),(0,t.jsx)(i.td,{children:"F"}),(0,t.jsx)(i.td,{children:"NTH"}),(0,t.jsx)(i.td,{children:"F: more effort required"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"R-U-003 (Data Configurations)"}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{children:"NTH"}),(0,t.jsx)(i.td,{})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"R-U-003 (Conf. Arch)"}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{}),(0,t.jsx)(i.td,{children:"0"}),(0,t.jsx)(i.td,{}),(0,t.jsx)(i.td,{children:"NI"}),(0,t.jsx)(i.td,{children:"Only with chat pipeline? Then maybe 0 for e-Commerce"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"R-U-004 (Experiments)"}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{children:"0"}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{children:"REL"}),(0,t.jsx)(i.td,{children:"Stateless experiments?"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsxs)(i.td,{children:["R-U-005 (The RA must be ",(0,t.jsx)(i.em,{children:"lightweight"}),")"]}),(0,t.jsx)(i.td,{children:"0"}),(0,t.jsx)(i.td,{children:"0"}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{children:"REL"}),(0,t.jsx)(i.td,{children:"lightweight regarding domain understanding, etc."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"R-U-008 (Observability)"}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{children:"0"}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{children:"REL"}),(0,t.jsx)(i.td,{})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"R-U-011 (Adding services)"}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{children:"0"}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{children:"0"}),(0,t.jsx)(i.td,{children:"NTH"}),(0,t.jsx)(i.td,{children:"X for TS if services for chat"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsxs)(i.td,{children:["R-U-012 (True to the term ",(0,t.jsx)(i.em,{children:"Reference Architecture"}),")"]}),(0,t.jsx)(i.td,{children:"0"}),(0,t.jsx)(i.td,{children:"0"}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{children:"REL"}),(0,t.jsx)(i.td,{children:"Regarding education and benchmark system"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"R-U-013 (Deterioration in performance)"}),(0,t.jsx)(i.td,{children:"N"}),(0,t.jsx)(i.td,{children:"N"}),(0,t.jsx)(i.td,{children:"N"}),(0,t.jsx)(i.td,{children:"N"}),(0,t.jsx)(i.td,{children:"N"}),(0,t.jsx)(i.td,{children:"Removed because faking would be possible everywhere"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"R-Special (Unexpected load)"}),(0,t.jsx)(i.td,{children:"0"}),(0,t.jsx)(i.td,{}),(0,t.jsx)(i.td,{children:"0"}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{children:"REL"}),(0,t.jsx)(i.td,{})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"R-A-003 (Distributed Transactions)"}),(0,t.jsx)(i.td,{children:"0"}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{children:"0"}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{children:"NTH"}),(0,t.jsx)(i.td,{children:"Good if there are business processes including it and some without"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"R-MP-001 (Database per Service)"}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{children:"REL"}),(0,t.jsx)(i.td,{children:"Each service requiring a DB has its own"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"R-Special (Finding newcomers)"}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{}),(0,t.jsx)(i.td,{children:"0"}),(0,t.jsx)(i.td,{children:"X"}),(0,t.jsx)(i.td,{children:"REL"}),(0,t.jsx)(i.td,{})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Rating"}),(0,t.jsx)(i.td,{children:"8"}),(0,t.jsx)(i.td,{children:"2"}),(0,t.jsx)(i.td,{children:"11"}),(0,t.jsx)(i.td,{children:"11"}),(0,t.jsx)(i.td,{}),(0,t.jsx)(i.td,{})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Rating with relevance"}),(0,t.jsx)(i.td,{children:"15.5"}),(0,t.jsx)(i.td,{children:"3"}),(0,t.jsx)(i.td,{children:"18.75"}),(0,t.jsx)(i.td,{children:"21.25"}),(0,t.jsx)(i.td,{}),(0,t.jsx)(i.td,{})]})]})]}),"\n",(0,t.jsx)(i.p,{children:"X = 1, F = 0.5, 0 = 0, Nothing = -1"}),"\n",(0,t.jsx)(i.p,{children:"Factors: REL = 2, NTH = 1.5, NI = 1"}),"\n",(0,t.jsx)(i.p,{children:"Therefore, the decision is made for the E-Commerce Domain Model since it is preferrable in both ratings."})]})}function o(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},11151:(e,i,s)=>{s.d(i,{Z:()=>c,a:()=>d});var t=s(67294);const r={},n=t.createContext(r);function d(e){const i=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(n.Provider,{value:i},e.children)}}}]);