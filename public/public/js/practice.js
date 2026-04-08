// EA on a Page — Practice view
// Depends on: data.js

/* ═══ PRACTICE ═══ */
const PRACTICE_DATA = [
  {
    id: 'strategic',
    meaning: 'Strategy-to-portfolio',
    title: 'Strategic Planning',
    question: 'How is the business environment changing and what should we do to react to these changes?',
    goal: 'Articulate the desired joint future course of action for business and IT.',
    focus: 'Long-term and mid-term future, usually up to 3–5 years ahead.',
    structure: 'Continuous and largely unstructured, irreducible to any sequential steps.',
    integration: 'Integrated with regular strategic management activities, e.g. environmental analysis, identification of competitive advantages and formulation of business goals.',
    timing: 'Aligned with the annual business planning cycle, important dates, periods and events, e.g. fiscal years, budgeting cycles, board meetings or updates of business strategy.',
    content: 'Development of rules and directions for business and IT and their explicit documentation in Considerations and Visions.',
    activities: 'Informal discussions, meetings, presentations and workshops, as well as periodic formal approvals and sign-offs.',
    administration: 'Weakly formalized administratively, occurs mainly informally.',
    engagement: 'Mostly unofficial, induced by the desire of business leaders to collaborate.',
    enabler: 'The reputation of Enterprise Architects as helpful business partners.',
    instances: 'Single but federated, aligned with the business structure, e.g. functions, divisions or geographies.',
    input: 'Fundamental factors of the external business environment.',
    output: 'High-level plans for business and IT reflected in Considerations and Visions.',
    artifacts: ['considerations','visions'],
    color: '#b45630',
    lifecycle: [
      {artifact:'Considerations', color:'#b45630', text:'Periodically updated to align with current business strategy and reapproved by business stakeholders and possibly by governance bodies, e.g. strategy committees.'},
      {artifact:'Visions', color:'#6a7b4f', text:'Continuously updated to align with current business priorities and reapproved by business stakeholders and possibly by governance bodies, e.g. strategy committees.'},
    ]
  },
  {
    id: 'optimisation',
    meaning: 'Structure-to-rationalization',
    title: 'Technology Optimisation',
    question: 'What is wrong with the current IT landscape and what should we do to improve it?',
    goal: 'Improve the overall quality of the corporate IT landscape.',
    focus: 'Current situation with some future outlook, often for an indefinite horizon.',
    structure: 'Continuous and largely unstructured, irreducible to any sequential steps.',
    integration: 'Independent, not integrated strongly with any regular organisational processes or activities.',
    timing: 'Can be carried out without a systematic schedule, often on an as-necessary basis or even opportunistically, e.g. in the absence of other higher-priority tasks.',
    content: 'Analysis of the existing IT landscape, update of Standards, maintenance of Landscapes and formulation of rationalization proposals.',
    activities: 'Informal discussions, documentation reviews, group meetings and some periodic formal approvals.',
    administration: 'Partly formalized administratively, occurs largely informally.',
    engagement: 'Little or no engagement with other organisational actors.',
    enabler: 'The decree of senior IT leadership to perform the respective activities.',
    instances: 'Single and centralized, can be aligned with the organisational structure, e.g. autonomous units.',
    input: 'Current structure of the organisational IT landscape.',
    output: 'Rationalization suggestions reflected in Standards and Landscapes.',
    artifacts: ['standards','landscapes'],
    color: '#4a6d8a',
    lifecycle: [
      {artifact:'Standards', color:'#995566', text:'Continually updated to keep up with technology progress and industry best practices and reapproved by IT stakeholders and possibly by governance bodies, e.g. technology committees.'},
      {artifact:'Landscapes', color:'#4a6d8a', text:'Constantly updated to reflect changes in the landscape structure and, when relevant, reapproved by IT stakeholders and possibly by governance bodies, e.g. technology committees.'},
    ]
  },
  {
    id: 'delivery',
    meaning: 'Need-to-solution',
    title: 'Project Implementation',
    question: 'What is the best way to address the requested need and all the associated requirements?',
    goal: 'Implement optimal IT solutions for specific needs.',
    focus: 'Short-term and immediate future, usually up to 1–2 years ahead.',
    structure: 'Sequential with two inherent steps: Initiation (concept → decision) and Realization (design → delivery).',
    integration: 'Closely integrated with regular project management activities, e.g. scoping, estimating, scheduling, resourcing and monitoring.',
    timing: 'Linked to the established project lifecycle phases and control gates, e.g. scope, evaluate, plan, build, test and deploy.',
    content: 'Initiation: Analysis of possible solution implementation options, their explicit documentation in Outlines and official endorsement. Realization: Development of Designs based on Outlines and then their actual technical construction, at once or incrementally.',
    activities: 'Initiation: Frequent discussions, presentations and approvals. Realization: Daily collaborative work.',
    administration: 'Defined and assisted administratively, occurs in a formal manner.',
    engagement: 'Mostly official, enforced by the institutionalized administrative mechanisms.',
    enabler: 'The decree of senior IT leadership to follow the proper process.',
    instances: 'Multiple, one instance for each active IT project.',
    input: 'Specific business, and sometimes technical, needs.',
    output: 'New working IT solutions.',
    artifacts: ['outlines','designs'],
    color: '#7a5f99',
    lifecycle: [
      {artifact:'Outlines', color:'#7a5f99', text:'Created during the initiation step of IT projects, approved by business stakeholders and governance bodies (e.g. investment committees), support decision-making and then archived.'},
      {artifact:'Designs', color:'#a6882e', text:'Created during the realization step of IT projects, approved by project stakeholders and governance bodies (e.g. design committees), support delivery efforts and then archived.'},
    ]
  },
];

const PRACTICE_QUESTIONS = {
  considerations: ['What role should IT play in our organisation?','Where should we go from the standpoint of using IT?','Which IT capabilities should be provided organisation-wide?','What IT-related policies should be complied with?','What level of business continuity and security is required?','Which IT-based business innovations should be adopted?'],
  visions: ['What should IT provide to the business in the long run?','Where should future IT investments go?','What business areas should be enhanced with IT?','What types of IT projects should be implemented?','When should IT projects be implemented?','In what sequence should IT projects be launched?'],
  standards: ['What technologies and vendor products are used?','What approaches and best practices are adopted?','Which technologies and products are redundant or duplicated?','Which technologies, products or approaches cause troubles?','Do the current technologies and approaches meet our needs?','When should technologies and approaches be replaced?'],
  landscapes: ['What IT resources are maintained by our organisation?','How are different landscape components interconnected?','Which IT assets are no longer used or supported by vendors?','Which IT resources may become problematic in the future?','Are the existing IT assets fit for our general business needs?','When should IT assets be upgraded or decommissioned?'],
  outlines: ['What does the proposed IT solution look like?','What is the tactical and strategic value of the IT solution?','How will the IT solution modify our business processes?','What is the overall business impact of the IT solution?','What are the costs and timelines of the IT solution?','What risks are associated with the IT solution?'],
  designs: ['What business requirements should be addressed?','What new software should be developed or installed?','Which data types and entities should be used?','What servers and hardware should be deployed?','What security means and measures should be applied?','How should new IT systems interact with the existing ones?'],
};

let practiceRendered = false;
function renderPractice() {
  if (practiceRendered) return;
  practiceRendered = true;
  const c = $('practice-content');
  let h = '';

  PRACTICE_DATA.forEach(p => {
    const famColors = {considerations:'#b45630',visions:'#6a7b4f',outlines:'#7a5f99',standards:'#995566',landscapes:'#4a6d8a',designs:'#a6882e'};
    const artTags = p.artifacts.map(a => `<span class="proc-artifact-tag" style="color:${famColors[a]};border-color:${famColors[a]}44;background:${famColors[a]}0d">${FM[a]?.l||a}</span>`).join('');

    const rows = [
      ['Goal', p.goal],
      ['Focus', p.focus],
      ['Structure', p.structure],
      ['Integration', p.integration],
      ['Timing', p.timing],
      ['Content', p.content],
      ['Activities', p.activities],
      ['Administration', p.administration],
      ['Engagement', p.engagement],
      ['Enabler', p.enabler],
      ['Instances', p.instances],
    ];

    const lifecycleHtml = p.lifecycle.map(l =>
      `<div class="proc-lifecycle-row"><div class="proc-lifecycle-dot" style="background:${l.color}"></div><div><strong>${l.artifact}:</strong> ${l.text}</div></div>`
    ).join('');

    // Questions for each artifact family
    const qHtml = p.artifacts.map(a => {
      const qs = PRACTICE_QUESTIONS[a] || [];
      return `<div style="margin-bottom:12px">
        <div class="proc-lifecycle-title" style="color:${famColors[a]}">${FM[a]?.l||a}</div>
        ${qs.map(q=>`<div style="font-size:11px;color:var(--tx2);line-height:1.5;margin-bottom:3px;padding-left:2px">· ${q}</div>`).join('')}
      </div>`;
    }).join('');

    h += `<div class="proc-card" style="border-top:3px solid ${p.color}">
      <div class="proc-card-hd">
        <div class="proc-card-meaning" style="color:${p.color}">${p.meaning}</div>
        <div class="proc-card-title">${p.title}</div>
        <div class="proc-card-q">${p.question}</div>
      </div>
      <div class="proc-card-body">
        ${rows.map(([l,v])=>`<div class="proc-row"><span class="proc-label">${l}</span><span class="proc-val">${v}</span></div>`).join('')}
        <div class="proc-io">
          <div class="proc-io-box"><div class="proc-io-label">Input</div><div class="proc-io-val">${p.input}</div></div>
          <div class="proc-io-box"><div class="proc-io-label">Output</div><div class="proc-io-val">${p.output}</div></div>
        </div>
        <div class="proc-lifecycle">
          <div class="proc-lifecycle-title">EA Artifacts produced and used</div>
          <div class="proc-artifacts">${artTags}</div>
          <div style="margin-top:12px">${lifecycleHtml}</div>
        </div>
        <div class="proc-lifecycle" style="margin-top:12px">
          <div class="proc-lifecycle-title">Questions these artifacts answer</div>
          ${qHtml}
        </div>
      </div>
    </div>`;
  });

  c.innerHTML = `<div class="proc-cards">${h}</div>`;
}

