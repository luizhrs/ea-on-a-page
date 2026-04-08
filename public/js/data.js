// EA on a Page — Data
// All artifact and framework data from Kotusev's EA on a Page (v2.2)


/* ═══════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════ */
const FM={
  considerations:{l:"Considerations",c:"#b45630",d:"Strategic inputs that shape direction"},
  visions:{l:"Visions",c:"#6a7b4f",d:"Desired future states at various scopes"},
  landscapes:{l:"Landscapes",c:"#4a6d8a",d:"Current state maps of what exists"},
  outlines:{l:"Outlines",c:"#7a5f99",d:"High-level implementation plans"},
  designs:{l:"Designs",c:"#a6882e",d:"Detailed specs for specific solutions"},
  standards:{l:"Standards",c:"#995566",d:"Rules and reference materials for governance"}
};

// Two-axis map position: col = 0-5 (Rules→Solutions), row = 0-1 (Business→IT)
// col: 0=considerations, 1=visions, 2=landscapes/outlines, 3=landscapes/outlines, 4=designs, 5=standards
// row: 0=business-focused, 1=it-focused
const DA=[
  /* ── CONSIDERATIONS ── */
  {id:"principles",n:"Principles",f:"considerations",
   s:"Overarching rules that guide all IT-related decisions across the organisation.",
   q:"What fundamental rules should guide our technology and architecture decisions?",
   au:["CIO","IT Leadership","Enterprise Architects"],fo:"both",lc:"permanent",es:"essential",
   fm:"Numbered list with rationale and implications",
   de:["Technology direction","Investment priorities","Governance approach"],
   rl:{t:["policies","target_state"],fr:["analytical_reports"],cf:["policies"]},
   nt:"Keep to 10–20 principles. More than that and they stop being memorable.",ic:"scale",vz:"rows",
   proc:["strategic"],mx:{col:0,row:0}},

  {id:"policies",n:"Policies",f:"considerations",
   s:"Specific prescriptive rules derived from principles, mandating or prohibiting certain practices.",
   q:"What specific rules must everyone follow when making IT decisions?",
   au:["IT Staff","Project Teams","Vendors"],fo:"it",lc:"permanent",es:"common",
   fm:"Structured rules with scope, rationale and exceptions",
   de:["Compliance checks","Vendor selection","Project governance"],
   rl:{t:["technology_standards","guidelines"],fr:["principles"],cf:["principles","it_principles"]},
   nt:"Policies without enforcement mechanisms become shelfware fast.",ic:"shield-check",vz:"doc",
   proc:["strategic","optimisation"],mx:{col:0,row:1}},

  

  {id:"arch_strategies",n:"Architecture Strategies",f:"considerations",
   s:"Abstract conceptual directions for the organisation in terms of the relationship between business and IT.",
   q:"What is our overarching direction for how IT should serve the business?",
   au:["CIO","Enterprise Architects","Business Leaders"],fo:"both",lc:"permanent",es:"popular",
   fm:"One-page strategy document with drivers, decisions and target direction",
   de:["Domain-level direction","Investment framing","Architecture roadmap"],
   rl:{t:["target_state","roadmaps"],fr:["principles","analytical_reports"],cf:["target_state"]},
   nt:"Often produced per domain (e.g. a data strategy or cloud strategy) rather than as one monolith.",ic:"compass",vz:"arrow",
   proc:["strategic"],mx:{col:0,row:0}},

  {id:"analytical_reports",n:"Analytical Reports",f:"considerations",
   s:"Executive-level analyses of relevant technology trends and their potential impact on the organisation.",
   q:"What technology or market trends should inform our planning decisions?",
   au:["CIO","EA Team","Strategy Office"],fo:"both",lc:"temporary",es:"uncommon",
   fm:"Report or briefing document with findings and recommendations",
   de:["Strategic planning input","Horizon scanning","Investment justification"],
   rl:{t:["principles","arch_strategies"],fr:[],cf:["arch_strategies"]},
   nt:"Often triggered by a specific event (new regulation, market shift, technology disruption) rather than produced on a schedule.",ic:"bar-chart-2",vz:"report",
   proc:["strategic"],mx:{col:0,row:0}},

  {id:"conceptual_data",n:"Conceptual Data Models",f:"considerations",
   s:"Abstract definitions of the key data entities vital for the business and their relationships.",
   q:"What are the core data concepts our business works with, and how do they relate?",
   au:["CDO","Data Architects","Business Analysts"],fo:"both",lc:"permanent",es:"common",
   fm:"Entity-relationship diagram (business level, no technical types)",
   de:["Data governance","Master data strategy","Data ownership"],
   rl:{t:["logical_data"],fr:["business_capability"],cf:["logical_data"]},
   nt:"This is business-language modelling — avoid database notation. Customer, Order, Product: not rows and columns.",ic:"git-branch",vz:"erd_conceptual",
   proc:["strategic","optimisation"],mx:{col:0,row:0}},

  /* ── VISIONS ── */
  {id:"business_capability",n:"Business Capability Models",f:"visions",
   s:"Structured graphical views of organisational business capabilities, their relationship and hierarchy.",
   q:"What are the core capabilities our business needs to operate and compete?",
   au:["CxO","Business Leaders","Enterprise Architects"],fo:"business",lc:"permanent",es:"essential",
   fm:"Hierarchical capability map or heat map",
   de:["Investment targeting","Capability gap analysis","M&A assessment"],
   rl:{t:["target_state","landscape_business"],fr:["principles"],cf:["target_state"]},
   nt:"Resist mapping capabilities to org structure — capabilities are stable when org charts change.",ic:"building-2",vz:"grid",
   proc:["strategic"],mx:{col:1,row:0}},

  {id:"target_state",n:"Target States",f:"visions",
   s:"High-level descriptions of the desired future state for the organisation in terms of business and IT.",
   q:"What should our business and IT landscape look like in 3–5 years?",
   au:["CIO","Business Leaders","Enterprise Architects"],fo:"both",lc:"permanent",es:"essential",
   fm:"One-page diagram with narrative showing current → target architecture",
   de:["Strategic programme definition","Investment roadmap","Transformation scope"],
   rl:{t:["roadmaps","solution_overview"],fr:["principles","business_capability"],cf:["landscape_diag"]},
   nt:"This is the single most political artifact — get executive sign-off early.",ic:"crosshair",vz:"arrow",
   proc:["strategic"],mx:{col:1,row:0}},

  {id:"roadmaps",n:"Roadmaps",f:"visions",
   s:"Structured graphical views of IT initiatives having direct business value for the organisation.",
   q:"In what order and timing should we execute changes to reach our target state?",
   au:["CIO","Programme Managers","Business Leaders"],fo:"both",lc:"temporary",es:"essential",
   fm:"Gantt-style timeline or swim-lane roadmap showing initiatives by capability area",
   de:["Sequencing","Resource allocation","Dependency management"],
   rl:{t:["solution_brief"],fr:["target_state","landscape_diag"],cf:["it_roadmaps"]},
   nt:"A roadmap without clear dependencies is just a wish list with dates.",ic:"map",vz:"gantt",
   proc:["strategic","delivery"],mx:{col:1,row:0}},

  {id:"process_maps",n:"Process Maps",f:"visions",
   s:"Structured graphical views of high-level business processes, their relationship and hierarchy.",
   q:"How does our business actually operate today, and how should it operate in future?",
   au:["Business Leaders","Enterprise Architects","Analysts"],fo:"business",lc:"permanent",es:"popular",
   fm:"Process hierarchy diagram with improvement status (run/improve/redefine)",
   de:["Process improvement","Automation targeting","Redundancy identification"],
   rl:{t:["target_state"],fr:["business_capability"],cf:["landscape_business"]},
   nt:"Keep it at one level of detail — if you try to map everything, you'll never finish.",ic:"layout-dashboard",vz:"flow",
   proc:["optimisation"],mx:{col:1,row:0}},

  {id:"value_chains",n:"Value Chains",f:"visions",
   s:"Structured graphical representations of the added value chain of the organisation or its lines of business.",
   q:"How do we create value for our customers, end to end?",
   au:["Business Leaders","Enterprise Architects","Strategy Office"],fo:"business",lc:"permanent",es:"uncommon",
   fm:"Porter's value chain or custom value stream diagram",
   de:["Value stream optimisation","Digital transformation scope","Partnership strategy"],
   rl:{t:["target_state","process_maps"],fr:["business_capability"],cf:["process_maps"]},
   nt:"Most useful for understanding cross-functional dependencies that don't appear in org charts.",ic:"arrow-right-left",vz:"chain",
   proc:["strategic","optimisation"],mx:{col:1,row:0}},

  /* ── LANDSCAPES ── */
  {id:"landscape_diag",n:"Landscape Diagrams",f:"landscapes",
   s:"High-level graphical descriptions of the specific state of the organisation in terms of business and IT.",
   q:"What does our current business and IT landscape actually look like?",
   au:["Enterprise Architects","CTO","IT Leaders"],fo:"both",lc:"permanent",es:"essential",
   fm:"One-page architecture diagram (often ArchiMate) showing systems, integrations and business context",
   de:["Current state baseline","Gap analysis","Change impact assessment"],
   rl:{t:["target_state","it_roadmaps"],fr:["landscape_maps","sys_portfolio"],cf:["target_state"]},
   nt:"The most impactful landscape diagrams are the ones simple enough that a business leader can read them.",ic:"layers",vz:"layers",
   proc:["optimisation"],mx:{col:2,row:0}},

  {id:"landscape_maps",n:"Landscape Maps",f:"landscapes",
   s:"Structured high-level mappings of core information systems to relevant business capabilities or organisational areas.",
   q:"Which systems support which capabilities, and how well?",
   au:["IT Architects","Enterprise Architects","CTO"],fo:"it",lc:"permanent",es:"popular",
   fm:"Matrix mapping systems to business capabilities with fit ratings (weak/medium/strong)",
   de:["Rationalisation","Capability investment","Gap analysis"],
   rl:{t:["landscape_diag","sys_portfolio"],fr:["business_capability"],cf:["sys_portfolio"]},
   nt:"Often lives in a repository tool (LeanIX, Ardoq) rather than a standalone document.",ic:"map-pin",vz:"heatmap",
   proc:["optimisation"],mx:{col:2,row:1}},

  {id:"sys_portfolio",n:"System Portfolio Models",f:"landscapes",
   s:"Structured high-level mappings of key IT systems to relevant functional and organisational areas.",
   q:"What systems do we have, who uses them, and how strategic are they?",
   au:["IT Architects","Engineering","CTO"],fo:"it",lc:"permanent",es:"popular",
   fm:"Application portfolio matrix (strategic/active/legacy) mapped to business areas",
   de:["Rationalisation","Integration planning","Technical debt assessment"],
   rl:{t:["landscape_diag","it_roadmaps"],fr:[],cf:["landscape_maps","asset_inv"]},
   nt:"Needs a clear owner per system — without accountability it becomes stale very fast.",ic:"layout-grid",vz:"portfolio",
   proc:["optimisation"],mx:{col:2,row:1}},

  {id:"asset_inv",n:"Asset Inventories",f:"landscapes",
   s:"Structured catalogs of IT assets with their essential properties, attributes and features.",
   q:"What technology assets do we own, and what are their key attributes?",
   au:["IT Operations","CTO","IT Architects"],fo:"it",lc:"permanent",es:"uncommon",
   fm:"Structured catalog or CMDB export with owner, cost, version, lifecycle status",
   de:["License management","Capacity planning","Procurement decisions"],
   rl:{t:["asset_roadmaps"],fr:["sys_portfolio"],cf:["tech_inv"]},
   nt:"This goes stale quickly — tie it to automated discovery or CMDB data wherever possible.",ic:"clipboard-list",vz:"table",
   proc:["optimisation"],mx:{col:2,row:1}},

  {id:"it_roadmaps",n:"IT Roadmaps",f:"landscapes",
   s:"Structured graphical views of IT initiatives of a purely technical nature having no visible business impact.",
   q:"What infrastructure and platform changes do we need, and when?",
   au:["Infrastructure Teams","CTO","IT Architects"],fo:"it",lc:"temporary",es:"common",
   fm:"Swim-lane roadmap by technology domain with initiative status",
   de:["Platform consolidation","Cloud migration","Capacity planning"],
   rl:{t:["tech_roadmaps"],fr:["landscape_diag","tech_inv"],cf:["roadmaps"]},
   nt:"The key distinction from business Roadmaps: IT Roadmaps have no direct business visibility — they're internal plumbing.",ic:"calendar-days",vz:"gantt",
   proc:["optimisation"],mx:{col:3,row:1}},

  {id:"asset_roadmaps",n:"Asset Roadmaps",f:"landscapes",
   s:"Structured graphical views of the lifecycles of IT assets with their milestones.",
   q:"When should we upgrade, migrate, or retire our current systems and infrastructure?",
   au:["IT Architects","Infrastructure Teams","Operations"],fo:"it",lc:"temporary",es:"uncommon",
   fm:"Timeline showing asset lifecycle phases (development/production/withdrawal) with milestone markers",
   de:["Migration sequencing","End-of-life planning","Budget forecasting"],
   rl:{t:[],fr:["asset_inv","sys_portfolio"],cf:["it_roadmaps","tech_roadmaps"]},
   nt:"Most useful when combined with cost data — lifecycle planning without financial visibility is incomplete.",ic:"calendar",vz:"lifecycle",
   proc:["optimisation"],mx:{col:3,row:1}},

  /* ── OUTLINES ── */
  {id:"solution_brief",n:"Solution Briefs",f:"outlines",
   s:"Very high-level sketches of IT solutions emphasising their business contribution to the organisation.",
   q:"What are we roughly going to build or buy, and what business value will it deliver?",
   au:["Solution Architects","Project Sponsors","IT Leadership"],fo:"both",lc:"temporary",es:"essential",
   fm:"One-page document: summary, goals, benefits, scope, rough sketch, preliminary estimate",
   de:["Build vs buy","Scope definition","Architecture approval gate"],
   rl:{t:["solution_overview"],fr:["roadmaps","target_state"],cf:["solution_overview"]},
   nt:"Often the first document reviewed at an architecture review board. Keep it scannable.",ic:"file-text",vz:"brief",
   proc:["delivery"],mx:{col:3,row:0}},

  {id:"solution_overview",n:"Solution Overviews",f:"outlines",
   s:"High-level descriptions of IT solutions with their logical components highlighting their business aspects.",
   q:"How will this solution work at a high level, and how does it fit the business context?",
   au:["Solution Architects","Business Managers","Project Teams"],fo:"both",lc:"temporary",es:"essential",
   fm:"Multi-section document: overview, scope, requirements, business benefits, architecture overview, estimations",
   de:["Funding approval","Architecture review","Solution scoping"],
   rl:{t:["prelim_design"],fr:["solution_brief","target_state"],cf:["solution_brief","prelim_design"]},
   nt:"This is where business and IT alignment gets tested — both sides need to recognise their language in it.",ic:"file-search",vz:"context",
   proc:["delivery"],mx:{col:3,row:0}},

  {id:"solution_options",n:"Solution Options",f:"outlines",
   s:"Lists of possible high-level implementation options for IT solutions with their pros and cons.",
   q:"What are the different ways we could implement this solution, and what are the trade-offs?",
   au:["Solution Architects","Decision Makers","Project Sponsors"],fo:"both",lc:"temporary",es:"uncommon",
   fm:"Scored comparison table: options, time/cost estimates, advantages, disadvantages, risks",
   de:["Option selection","Risk appetite","Investment decision"],
   rl:{t:["solution_overview"],fr:["solution_brief"],cf:["solution_brief","solution_overview"]},
   nt:"Three options is usually optimal — fewer feels like no real choice, more creates decision paralysis.",ic:"list-checks",vz:"options",
   proc:["delivery"],mx:{col:3,row:0}},

  /* ── STANDARDS ── */
  {id:"technology_standards",n:"Technology Reference Models",f:"standards",
   s:"Structured graphical representations of the technology portfolio of the organisation.",
   q:"Which technologies should we adopt, trial, assess, or retire?",
   au:["IT Architects","Engineering Leads","CTO"],fo:"it",lc:"permanent",es:"essential",
   fm:"Technology radar (adopt/trial/assess/hold) or lifecycle matrix",
   de:["Technology selection","Legacy retirement","Vendor strategy"],
   rl:{t:["prelim_design","solution_design"],fr:["it_principles"],cf:["tech_inv","guidelines"]},
   nt:"A technology radar format (adopt/trial/assess/hold) is more useful than a flat list.",ic:"target",vz:"radar",
   proc:["optimisation"],mx:{col:5,row:1}},

  {id:"guidelines",n:"Guidelines",f:"standards",
   s:"Recommended (non-mandatory) practices for development, integration, security and operations.",
   q:"What should teams aim for even when it's not strictly required?",
   au:["Development Teams","Operations","IT Staff"],fo:"it",lc:"permanent",es:"common",
   fm:"Wiki pages, internal documentation, checklists with optional/recommended/mandatory tags",
   de:["Code quality","Operational standards","Security practices"],
   rl:{t:[],fr:["policies","patterns"],cf:["policies","it_principles"]},
   nt:"The line between a guideline and a policy is enforcement.",ic:"book-open",vz:"check",
   proc:["optimisation"],mx:{col:5,row:1}},

  {id:"patterns",n:"Patterns",f:"standards",
   s:"Generic reusable solutions to commonly occurring problems in the design of information systems.",
   q:"What proven patterns should teams follow for common architectural challenges?",
   au:["Solution Architects","Development Teams","Platform Teams"],fo:"it",lc:"permanent",es:"popular",
   fm:"Pattern catalogue with name, context, problem, solution and diagram",
   de:["Solution consistency","Onboarding speed","Reuse vs build decisions"],
   rl:{t:["solution_design"],fr:["technology_standards"],cf:["technology_standards","guidelines"]},
   nt:"Patterns nobody knows about are useless — invest in socialising them.",ic:"puzzle",vz:"pattern",
   proc:["optimisation","delivery"],mx:{col:5,row:1}},

  {id:"it_principles_std",n:"IT Principles",f:"standards",
   s:"Global high-level IT-centric guidelines relevant to all IT-related decisions and plans.",
   q:"What global technical norms apply to every system we build or buy?",
   au:["IT Architects","Engineering Leads","CTO"],fo:"it",lc:"permanent",es:"common",
   fm:"Numbered list grouped by domain with description and rationale",
   de:["Architecture governance","Engineering standards","Platform decisions"],
   rl:{t:["technology_standards","guidelines"],fr:["policies"],cf:["guidelines","policies"]},
   nt:"Often duplicated with Considerations-family IT Principles — make sure these are the same artifact with one owner.",ic:"cpu",vz:"rows",
   proc:["strategic","optimisation"],mx:{col:5,row:1}},

  {id:"logical_data",n:"Logical Data Models",f:"standards",
   s:"Logical or even physical platform-specific definitions of common data entities and their relationships.",
   q:"What are the canonical data structures that all systems should conform to?",
   au:["Data Architects","DBAs","Solution Architects"],fo:"it",lc:"permanent",es:"common",
   fm:"ER diagram with typed attributes, cardinality, and platform notes",
   de:["Database design","Data integration approach","Data quality rules"],
   rl:{t:["solution_design"],fr:["conceptual_data"],cf:["conceptual_data"]},
   nt:"Always clarify data ownership before designing data flows — the model is only as good as its governance.",ic:"database",vz:"erd",
   proc:["optimisation","delivery"],mx:{col:5,row:1}},

  {id:"tech_inv",n:"Technology Inventories",f:"standards",
   s:"Structured catalogs of technologies with their key properties, attributes and features.",
   q:"What technologies does our organisation currently use, with what versions and status?",
   au:["IT Architects","Engineering Leads","CTO"],fo:"it",lc:"permanent",es:"uncommon",
   fm:"Table: technology, vendor, versions, category, function, lifecycle status",
   de:["License tracking","Vendor management","Upgrade planning"],
   rl:{t:["tech_roadmaps","technology_standards"],fr:["technology_standards"],cf:["asset_inv","technology_standards"]},
   nt:"Best maintained as a living register rather than a point-in-time document.",ic:"package",vz:"table",
   proc:["optimisation"],mx:{col:5,row:1}},

  {id:"tech_roadmaps",n:"Technology Roadmaps",f:"standards",
   s:"Structured graphical views of the lifecycles of technologies with their phases.",
   q:"When are specific technologies being phased in, endorsed, or phased out?",
   au:["IT Architects","CTO","Engineering Leads"],fo:"it",lc:"temporary",es:"uncommon",
   fm:"Timeline with technology rows and lifecycle phase markers (phasing in/endorsed/phasing out)",
   de:["Technology standardisation","Migration planning","Vendor negotiation"],
   rl:{t:[],fr:["tech_inv","technology_standards"],cf:["it_roadmaps","asset_roadmaps"]},
   nt:"Works best when visually aligned with IT Roadmaps so teams can see both the 'what' and 'when' together.",ic:"trending-up",vz:"tech_lifecycle",
   proc:["optimisation"],mx:{col:5,row:1}},

  /* ── DESIGNS ── */
  {id:"prelim_design",n:"Preliminary Solution Designs",f:"designs",
   s:"High-level technical and functional descriptions of IT systems with their physical components.",
   q:"How will this solution be structured technically, and what are the key risks?",
   au:["Solution Architects","Project Teams","IT Leadership"],fo:"it",lc:"temporary",es:"popular",
   fm:"Document with brief overview, goals, scope, requirements, key technologies, architecture diagram, risk log",
   de:["Implementation approach","Technology choices","Risk identification"],
   rl:{t:["solution_design"],fr:["solution_overview","technology_standards"],cf:["solution_overview","solution_design"]},
   nt:"This is where 'roughly right' is the goal — don't over-engineer the design before the project is approved.",ic:"pencil-ruler",vz:"prelim",
   proc:["delivery"],mx:{col:4,row:1}},

  {id:"solution_design",n:"Solution Designs",f:"designs",
   s:"Detailed technical and functional specifications of IT systems with their physical components.",
   q:"Exactly how will this solution work at a technical level, in sufficient detail to build it?",
   au:["Development Teams","Solution Architects","QA"],fo:"it",lc:"temporary",es:"essential",
   fm:"Full document: overview, requirements, data architecture, application architecture, infrastructure architecture",
   de:["Implementation approach","Technology choices","Integration patterns"],
   rl:{t:[],fr:["prelim_design","technology_standards","patterns"],cf:["prelim_design"]},
   nt:"Focus on the parts with the most uncertainty or highest integration risk — not everything needs the same level of detail.",ic:"code-2",vz:"design",
   proc:["delivery"],mx:{col:4,row:1}},
];

// Remove duplicate IT Principles (standards version is separate from considerations version)
// Merge them into a single entry for the considerations family
// (The DA array above correctly has it_principles in considerations and it_principles_std in standards)

const PROCS=[
  ["strategic","Strategic Planning","Set long-term direction using Considerations and Visions. Integrated with regular strategic management — answering: how is the business changing and what should we do?","Considerations, Visions, Roadmaps"],
  ["optimisation","Technology Optimisation","Maintain and rationalise the IT landscape using Landscapes and Standards. An ongoing process run largely within the architecture function.","Landscapes, Standards"],
  ["delivery","Initiative Delivery","Deliver specific IT solutions using Outlines and Designs. A sequential process (initiation → implementation) tied to project lifecycles.","Outlines, Designs, Patterns"]
];
const REFINE=[["business","Business-focused"],["it","IT-focused"],["permanent","Permanent"],["temporary","Temporary"],["essential","Essential only"]];

let curV='home',prevV='home',selId=null,cmpId=null,cProc=null,cRef=null;
const ga=id=>DA.find(a=>a.id===id);
const fl=fo=>fo==='both'?'Business + IT':fo==='business'?'Business':'IT';
const esClass=es=>`es-${es}`;

