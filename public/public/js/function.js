// EA on a Page — Function view
// Depends on: data.js

/* ═══ FUNCTION ═══ */
let functionRendered = false;
function renderFunction() {
  if (functionRendered) return;
  functionRendered = true;
  const c = $('function-content');

  const tiers = [
    {
      label: 'One-Tier Function',
      title: 'Small Functions',
      size: 'One to several architects',
      roles: [
        {title:'Enterprise Architects', color:'#4a6d8a', note:'Mix responsibilities of Enterprise Architects and Solution Architects in different proportions, driving all three processes.'},
      ],
    },
    {
      label: 'Two-Tier Function (classic)',
      title: 'Simple Functions',
      size: 'Several to a couple of dozen architects',
      roles: [
        {title:'Enterprise Architects', color:'#4a6d8a', note:'Driving Strategic Planning and Technology Optimisation.'},
        {supervise: true},
        {title:'Solution Architects', color:'#7a5f99', note:'Driving Project Implementation for individual IT projects.'},
      ],
    },
    {
      label: 'Three-Tier Function',
      title: 'Sophisticated Functions',
      size: 'A few dozen to a couple of hundred architects',
      roles: [
        {title:'Strategy-Level Enterprise Architects', color:'#4a6d8a', note:'Driving global Strategic Planning and Technology Optimisation for their domains and business areas.'},
        {supervise: true},
        {title:'Program-Level Enterprise Architects', color:'#4a6d8a', note:'Driving local Strategic Planning and Technology Optimisation for their sub-domains and sub-areas.'},
        {supervise: true},
        {title:'Solution Architects', color:'#7a5f99', note:'Driving Project Implementation for individual IT projects.'},
      ],
    },
  ];

  const govBodies = [
    {title:'Strategy Committee', governs:'All Considerations and Visions', proc:'Strategic Planning', color:'#b45630'},
    {title:'Technology Committee', governs:'All Standards and Landscapes', proc:'Technology Optimisation', color:'#4a6d8a'},
    {title:'Investment Committee', governs:'All Outlines', proc:'Project Implementation (Initiation)', color:'#7a5f99'},
    {title:'Design Committee', governs:'All Designs', proc:'Project Implementation (Realization)', color:'#a6882e'},
  ];

  const govProcs = [
    {title:'Approval', desc:'Endorsement of changes in approved EA artifacts.'},
    {title:'Amendment', desc:'Official endorsement of new EA artifacts.'},
    {title:'Exemption', desc:'Endorsement of EA artifacts deviating from plans.'},
    {title:'Escalation', desc:'Delegating endorsement to higher-level committees.'},
  ];

  const domains = ['Business','Applications','Data','Integration','Security','Infrastructure'];

  let h = '';

  // Architecture Tiers
  h += `<div class="fn-section">
    <div class="fn-section-title">Architecture Tiers</div>
    <div class="fn-section-sub">The structure of the EA function depends on organisational size and complexity. In larger, more specialised functions the architecture positions are more strongly aligned with domains or business areas.</div>
    <div class="fn-tiers">`;
  tiers.forEach(t => {
    h += `<div class="fn-tier">
      <div class="fn-tier-hd">
        <div class="fn-tier-label">${t.label}</div>
        <div class="fn-tier-title">${t.title}</div>
        <div style="font-size:11px;color:var(--tx3);margin-top:2px">${t.size}</div>
      </div>
      <div class="fn-tier-body">`;
    t.roles.forEach(r => {
      if(r.supervise) {
        h += `<div class="fn-supervise">Supervise ↓</div>`;
      } else {
        h += `<div class="fn-role" style="background:${r.color}18;color:${r.color}">${r.title}</div>`;
        if(r.note) h += `<div class="fn-role-sub">${r.note}</div>`;
      }
    });
    h += `</div></div>`;
  });
  h += `</div></div>`;

  // Governance Bodies
  h += `<div class="fn-section">
    <div class="fn-section-title">Governance Bodies</div>
    <div class="fn-section-sub">Committees govern the creation, approval, amendment and exemption of EA artifacts. In smaller organisations these may be combined into fewer committees; in larger ones each may be replicated across domains, areas or zones.</div>
    <div class="fn-govs">`;
  govBodies.forEach(g => {
    h += `<div class="fn-gov" style="border-top:3px solid ${g.color}">
      <div class="fn-gov-title" style="color:${g.color}">${g.title}</div>
      <div class="fn-gov-label">Governs</div>
      <div class="fn-gov-governs">${g.governs}</div>
      <div class="fn-gov-label">EA Process</div>
      <div style="font-size:11px;color:var(--tx2)">${g.proc}</div>
    </div>`;
  });
  h += `</div></div>`;

  // Governance Procedures
  h += `<div class="fn-section">
    <div class="fn-section-title">Governance Procedures</div>
    <div class="fn-section-sub">Four formal procedures govern how committees interact with EA artifacts.</div>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px">`;
  govProcs.forEach(p => {
    h += `<div style="background:var(--sf);border:1px solid var(--bd);border-radius:8px;padding:12px 14px">
      <div style="font-weight:700;font-size:13px;color:var(--tx);margin-bottom:4px">${p.title}</div>
      <div style="font-size:12px;color:var(--tx2);line-height:1.5">${p.desc}</div>
    </div>`;
  });
  h += `</div></div>`;

  // Architecture Domains
  h += `<div class="fn-section">
    <div class="fn-section-title">Architecture Domains</div>
    <div class="fn-section-sub">Architecture positions are typically structured across some or all of these six domains. In more centralised organisations positions align with domains; in federated organisations they align with business areas.</div>
    <div style="display:flex;flex-wrap:wrap;gap:6px">`;
  domains.forEach((d,i) => {
    const cs=['#b45630','#7a5f99','#4a6d8a','#6a7b4f','#995566','#a6882e'];
    h += `<span style="padding:6px 14px;border-radius:6px;font-size:12px;font-weight:600;background:${cs[i]}18;color:${cs[i]};border:1px solid ${cs[i]}33">${d} Domain</span>`;
  });
  h += `</div></div>`;

  // Architect ratio
  h += `<div class="fn-section">
    <div style="background:var(--sf);border:1px solid var(--bd);border-radius:9px;padding:16px 20px">
      <div style="font-size:13px;font-weight:700;color:var(--tx);margin-bottom:4px">Architect Ratio</div>
      <div style="font-size:13px;color:var(--tx2);line-height:1.6">On average, architects constitute about <strong>4–5%</strong> of the total IT staff — for example, 4–5 architects per 100 IT staff, 16–20 per 400, 32–40 per 800, and 64–80 per 1600.</div>
    </div>
  </div>`;

  c.innerHTML = h;
}

