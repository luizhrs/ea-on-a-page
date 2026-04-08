// EA on a Page — Maturity view
// Depends on: data.js

/* ═══ MATURITY ═══ */
const MATURITY_DATA = [
  {
    stage: 0,
    label: 'Stage Zero',
    title: 'No Architecture',
    desc: 'No architectural planning.',
    color: '#908a82',
    function: 'No Enterprise Architecture Function.',
    artifacts: [],
    processes: [],
    benefits: null,
    challenges: 'Arguably, no particular challenges.',
    newElements: null,
  },
  {
    stage: 1,
    label: 'Stage One',
    title: 'Only Solution Architecture',
    desc: 'Architectural planning of separate IT solutions in isolation.',
    color: '#a6882e',
    function: 'Solution Architects only.',
    artifacts: ['outlines','designs'],
    processes: ['Project Implementation'],
    benefits: 'Higher returns on IT investments, better predictability, improved quality and reduced risks of project delivery.',
    challenges: 'Overcoming the tensions between the landscape-wide interests of architects and the local interests of project teams.',
    newElements: 'Business cases for IT projects, consistent solution implementation methodology with the involvement of architects and a number of control gates informed by EA artifacts.',
  },
  {
    stage: 2,
    label: 'Stage Two',
    title: 'Just IT Architecture',
    desc: 'Architectural planning of separate IT solutions in the context of the entire IT landscape.',
    color: '#4a6d8a',
    function: 'Solution Architects and Enterprise Architects not covering the business domain.',
    artifacts: ['outlines','designs','standards','landscapes'],
    processes: ['Project Implementation','Technology Optimisation'],
    benefits: 'Lower costs, risks and complexity, higher asset utilisation, increased reuse and agility, reduced duplication and legacy, and faster initiative implementation.',
    challenges: 'Penetrating cultural barriers, finding a common language and building trusted partnership relationships between architects and business leaders.',
    newElements: 'Centralised selection of technologies, formal architectural reviews, architectural repository for capturing the landscape structure and funding of architectural initiatives.',
  },
  {
    stage: 3,
    label: 'Stage Three',
    title: 'True Enterprise Architecture',
    desc: 'Architectural planning of business and IT in concert at all corporate levels in the context of the whole organisation.',
    color: '#6a7b4f',
    function: 'Solution Architects and Enterprise Architects covering all domains.',
    artifacts: ['outlines','designs','standards','landscapes','considerations','visions'],
    processes: ['Project Implementation','Technology Optimisation','Strategic Planning'],
    benefits: 'Improved overall consistency between business and IT, better strategic alignment and higher effectiveness of IT investments.',
    challenges: 'Combines challenges from all previous stages.',
    newElements: 'Strategic dialog between business and IT, collective roadmapping exercises, joint prioritisation of future IT investments and executive-level architecture governance.',
  },
];

let maturityRendered = false;
function renderMaturity() {
  if (maturityRendered) return;
  maturityRendered = true;
  const c = $('maturity-content');
  const famColors = {considerations:'#b45630',visions:'#6a7b4f',outlines:'#7a5f99',standards:'#995566',landscapes:'#4a6d8a',designs:'#a6882e'};
  const procColors = {'Project Implementation':'#7a5f99','Technology Optimisation':'#4a6d8a','Strategic Planning':'#b45630'};

  let h = '<div class="maturity-stages">';
  MATURITY_DATA.forEach(s => {
    const artPills = s.artifacts.length
      ? s.artifacts.map(a=>`<span class="mat-artifact-pill" style="color:${famColors[a]};border-color:${famColors[a]}44;background:${famColors[a]}0d">${FM[a]?.l||a}</span>`).join('')
      : '<span style="font-size:12px;color:var(--tx4)">None</span>';
    const procPills = s.processes.length
      ? s.processes.map(p=>`<span class="mat-artifact-pill" style="color:${procColors[p]||'var(--tx3)'};border-color:${(procColors[p]||'#888')}44;background:${(procColors[p]||'#888')}0d">${p}</span>`).join('')
      : '<span style="font-size:12px;color:var(--tx4)">None</span>';

    h += `<div class="mat-stage">
      <div class="mat-stage-hd">
        <div class="mat-stage-num" style="background:${s.color}">${s.stage}</div>
        <div class="mat-stage-info">
          <div class="mat-stage-label">${s.label}</div>
          <div class="mat-stage-title">${s.title}</div>
          <div class="mat-stage-desc">${s.desc}</div>
        </div>
      </div>
      <div class="mat-stage-body">
        <div class="mat-section">
          <div class="mat-section-title">EA Function</div>
          <div class="mat-section-body">${s.function}</div>
        </div>
        <div class="mat-section">
          <div class="mat-section-title">EA Artifacts</div>
          <div class="mat-artifacts">${artPills}</div>
        </div>
        <div class="mat-section">
          <div class="mat-section-title">EA Processes</div>
          <div class="mat-artifacts">${procPills}</div>
        </div>
        ${s.benefits ? `<div class="mat-section">
          <div class="mat-section-title">Realized Benefits</div>
          <div class="mat-section-body">${s.benefits}</div>
        </div>` : ''}
        <div class="mat-section">
          <div class="mat-section-title">Associated Challenges</div>
          <div class="mat-section-body">${s.challenges}</div>
        </div>
        ${s.newElements ? `<div class="mat-section" style="grid-column:1/-1">
          <div class="mat-section-title">New Elements at this Stage</div>
          <div class="mat-new" style="border-color:${s.color}">${s.newElements}</div>
        </div>` : ''}
      </div>
    </div>`;
  });
  h += '</div>';
  c.innerHTML = h;
}

