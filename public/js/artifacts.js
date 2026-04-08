// EA on a Page — Artifacts (Explore, Map, Find, Detail)
// Depends on: data.js, viz.js

// Shared helpers (depend on data.js being loaded first)
const $=id=>document.getElementById(id);
const ga=id=>DA.find(a=>a.id===id);
const fl=fo=>fo==='both'?'Business + IT':fo==='business'?'Business':'IT';
const esClass=es=>`es-${es}`;

// Render a Lucide icon with family colour
function lucideIcon(name, color, size=20) {
  return `<i data-lucide="${name}" style="width:${size}px;height:${size}px;stroke:${color};stroke-width:1.75;stroke-linecap:round;stroke-linejoin:round;fill:none;flex-shrink:0"></i>`;
}

// Refresh Lucide icons in a container (or whole page)
function refreshIcons(container) {
  if(typeof lucide !== 'undefined') {
    lucide.createIcons({nameAttr:'data-lucide', attrs:{class:'lucide-icon'}, node: container || document.body});
  }
}

// Artifact view state
let selId = null;
let cmpId = null;
let cProc = null;
let cRef = null;

/* ═══ GRID ═══ */
function rg(){
  const sq=$('si').value.toLowerCase(),ff=$('ff').value,fe=$('fe').value,flv=$('flc').value;
  const fa=DA.filter(a=>{
    if(ff!=='all'&&a.fo!==ff&&a.fo!=='both')return false;
    if(fe!=='all'&&a.es!==fe)return false;
    if(flv!=='all'&&a.lc!==flv)return false;
    if(sq)return a.n.toLowerCase().includes(sq)||a.s.toLowerCase().includes(sq)||a.q.toLowerCase().includes(sq)||a.de.some(d=>d.toLowerCase().includes(sq));
    return true;
  });
  $('cnt').textContent=fa.length+' artifact'+(fa.length!==1?'s':'')+(sq?' matching "'+sq+'"':'');
  let h='';
  Object.entries(FM).forEach(([fk,fm])=>{
    const items=fa.filter(a=>a.f===fk);if(!items.length)return;
    h+=`<div class="gs"><div class="gh"><div class="gd" style="background:${fm.c}"></div><h2>${fm.l}</h2><span>${fm.d}</span></div><div class="cg">`;
    const ES_ORD={essential:0,popular:1,common:2,uncommon:3};
    items.sort((a,b)=>(ES_ORD[a.es]??9)-(ES_ORD[b.es]??9));
    items.forEach(a=>{const fc=FM[a.f];h+=`<div class="cd" onclick="od('${a.id}')"><div class="tp"><span class="ic">${lucideIcon(a.ic, fm.c, 32)}</span><span class="lb ${esClass(a.es)}">${a.es}</span></div><h3>${a.n}</h3><p>${a.s}</p><div class="mt"><span class="lb lb-f" style="color:${fc.c};border-color:${fc.c}44">${fc.l}</span><span class="lb lb-m">${fl(a.fo)}</span></div></div>`});
    h+='</div></div>';
  });
  $('gc').innerHTML=h;
  refreshIcons($('gc'));
}


/* ═══ MAP ═══ */
function renderMap(){
  // 2×3 grid of EA artifact FAMILIES:
  // Row 0 (Business-focused): Considerations | Visions    | Outlines
  // Row 1 (IT-focused):       Standards      | Landscapes | Designs
  // X-axis: Rules → Structures → Solutions

  const ROW_LABELS = ['Business-focused', 'IT-focused'];

  // Hardcoded family placement: [familyKey, row, col]
  const LAYOUT = [
    ['considerations', 0, 0],
    ['visions',        0, 1],
    ['outlines',       0, 2],
    ['standards',      1, 0],
    ['landscapes',     1, 1],
    ['designs',        1, 2],
  ];

  // Build the 2×3 grid
  const grid = [[null,null,null],[null,null,null]];
  LAYOUT.forEach(([fk, r, c]) => { grid[r][c] = fk; });

  function chipHtml(a, familyColor) {
    const proc = (a.proc||[]).join(',');
    return `<div class="fwm-chip" onclick="od('${a.id}')" style="border-left-color:${familyColor}"
      data-es="${a.es}" data-proc="${proc}" data-fo="${a.fo}" data-lc="${a.lc}"
      onmouseover="if(!this.classList.contains('dim')){this.style.background='var(--sf)';this.style.transform='translateX(2px)'}"
      onmouseout="this.style.background='var(--sf2)';this.style.transform='none'">
      <span class="fwm-chip-ic">${lucideIcon(a.ic, familyColor, 14)}</span>
      <span class="fwm-chip-name">${a.n}</span>
      <span class="lb ${esClass(a.es)} fwm-chip-es" style="font-size:9px">${a.es}</span>
    </div>`;
  }

  function cellHtml(fKey) {
    const fm = FM[fKey];
    const ES_ORDER = {essential:0,popular:1,common:2,uncommon:3};
    const artifacts = DA.filter(a => a.f === fKey).sort((a,b) => (ES_ORDER[a.es]??9)-(ES_ORDER[b.es]??9));
    const chips = artifacts.map(a => chipHtml(a, fm.c)).join('');
    return `<div class="fwm-cell" style="border-top:3px solid ${fm.c}">
      <div>
        <div class="fwm-cell-name" style="color:${fm.c}">${fm.l}</div>
        <div class="fwm-cell-desc">${fm.d}</div>
      </div>
      <div class="fwm-cell-divider"></div>
      <div style="display:flex;flex-direction:column;gap:4px">${chips}</div>
    </div>`;
  }

  let h = `<div class="fwm">
    <div class="fwm-yaxis">
      <span class="fwm-yaxis-lbl">Business</span>
      <div class="fwm-yaxis-line"></div>
      <span class="fwm-yaxis-mid">How EA Artifacts Describe</span>
      <div class="fwm-yaxis-line"></div>
      <span class="fwm-yaxis-lbl">IT</span>
    </div>
    <div class="fwm-body">

      ${[0,1].map(r => `
      <div class="fwm-row">
        <div class="fwm-row-lbl"><span class="fwm-row-lbl-txt">${ROW_LABELS[r]}</span></div>
        ${[0,1,2].map(c => `<div>${cellHtml(grid[r][c])}</div>`).join('')}
      </div>`).join('')}
      <div class="fwm-xaxis">
        <span class="fwm-xaxis-lbl">← Generic</span>
        <div class="fwm-xaxis-line"></div>
        <span class="fwm-xaxis-lbl" style="opacity:.45">What EA Artifacts Describe</span>
        <div class="fwm-xaxis-line"></div>
        <span class="fwm-xaxis-lbl">Specific →</span>
      </div>
    </div>
  </div>`;

  $('map-grid').innerHTML = h;
  refreshIcons($('map-grid'));
}




/* ═══ DETAIL ═══ */
function od(id,from){selId=id;cmpId=null;nav('detail');rd()}
function oc(id){cmpId=id;rd()}
function rd(){
  const a=ga(selId);if(!a)return;
  let h=dc(a,false);
  if(cmpId){const b=ga(cmpId);if(b)h+=`<div class="vb"><div class="ln"></div><span>vs</span><div class="ln"></div></div>`+dc(b,true)}
  $('dr').innerHTML=h;
  refreshIcons($('dr'));
}
function dc(a,iC){
  const fm=FM[a.f];
  const to=(a.rl.t||[]).map(ga).filter(Boolean),fr=(a.rl.fr||[]).map(ga).filter(Boolean),cf=(a.rl.cf||[]).map(ga).filter(Boolean);
  let h=`<div class="dt">`;
  if(iC)h+=`<button class="dx" onclick="cmpId=null;rd()">✕</button>`;
  h+=`<div class="dtp"><span class="ic">${lucideIcon(a.ic, fm.c, 32)}</span><div><div class="dnm">${a.n}</div><div class="dtg">
    <span class="lb lb-f" style="color:${fm.c};border-color:${fm.c}44">${fm.l}</span>
    <span class="lb ${esClass(a.es)}">${a.es}</span>
    <span class="lb lb-m">${a.lc}</span><span class="lb lb-m">${fl(a.fo)}</span>
  </div></div></div>`;
  h+=bv(a.vz,fm.c);
  h+=`<div class="ds"><div class="dl">Question answered</div><p class="dq">${a.q}</p></div>`;
  h+=`<div class="ds"><div class="dl">Summary</div><p class="dp">${a.s}</p></div>`;
  h+=`<div class="ds"><div class="dl">Format</div><p class="dp">${a.fm}</p></div>`;
  h+=`<div class="ds"><div class="dl">Audience</div><div>${a.au.map(x=>`<span class="tg">${x}</span>`).join('')}</div></div>`;
  h+=`<div class="ds"><div class="dl">Decisions supported</div><div>${a.de.map(x=>`<span class="tg">${x}</span>`).join('')}</div></div>`;
  h+=`<div class="ds"><div class="dl">Practical note</div><p class="dp" style="font-style:italic;opacity:.7">${a.nt}</p></div>`;
  if(to.length)h+=`<div class="ds"><div class="dl">Leads to →</div><div>${to.map(r=>`<span class="ch" onclick="od('${r.id}')">${lucideIcon(r.ic,FM[r.f].c,14)} ${r.n}</span>`).join('')}</div></div>`;
  if(fr.length)h+=`<div class="ds"><div class="dl">Informed by ←</div><div>${fr.map(r=>`<span class="ch" onclick="od('${r.id}')">${lucideIcon(r.ic,FM[r.f].c,14)} ${r.n}</span>`).join('')}</div></div>`;
  if(cf.length)h+=`<div class="ds"><div class="dl">Often confused with</div><div>${cf.map(r=>`<span class="ch cf" onclick="${iC?`od('${r.id}')`:`oc('${r.id}')`}">${lucideIcon(r.ic,FM[r.f].c,14)} ${r.n}${iC?'':'<span style="font-size:10px;opacity:.4;margin-left:3px">compare</span>'}</span>`).join('')}</div></div>`;
  return h+'</div>';
}


/* ═══ CHOOSER ═══ */
function renderCh(){
  let pp='';PROCS.forEach(([v,l])=>pp+=`<button class="pill${cProc===v?' on':''}" onclick="pickProc('${v}')">${l}</button>`);
  $('ppills').innerHTML=pp;
  if(cProc){
    const p=PROCS.find(x=>x[0]===cProc);
    $('pdesc').innerHTML=`${p[2]}<br><span style="font-size:11px;color:var(--tx4)">Typical artifact families: ${p[3]}</span>`;
  }else{$('pdesc').textContent=''}
  if(cProc){
    $('frow').style.display='block';
    let fp=`<button class="pill${!cRef?' on':''}" onclick="pickRef(null)">All</button>`;
    REFINE.forEach(([v,l])=>fp+=`<button class="pill${cRef===v?' on':''}" onclick="pickRef('${v}')">${l}</button>`);
    $('fpills').innerHTML=fp;
  }else{$('frow').style.display='none'}
  let res=DA;
  if(cProc)res=res.filter(a=>a.proc&&a.proc.includes(cProc));
  if(cRef){
    if(cRef==='business')res=res.filter(a=>a.fo==='business'||a.fo==='both');
    else if(cRef==='it')res=res.filter(a=>a.fo==='it'||a.fo==='both');
    else if(cRef==='permanent')res=res.filter(a=>a.lc==='permanent');
    else if(cRef==='temporary')res=res.filter(a=>a.lc==='temporary');
    else if(cRef==='essential')res=res.filter(a=>a.es==='essential');
  }
  let h='';
  if(!cProc){
    h=`<p style="color:var(--tx3);font-size:13px">Select an EA process above to see relevant artifacts.</p>`;
  }else{
    h+=`<div style="font-size:12px;color:var(--tx3);margin-bottom:12px">${res.length} artifact${res.length!==1?'s':''}</div>`;
    res.forEach(a=>{
      const fc=FM[a.f];
      h+=`<div class="ch-card" onclick="od('${a.id}')"><div class="ch-card-ic">${lucideIcon(a.ic, fc.c, 22)}</div><div><div class="ch-nm">${a.n}</div><div class="ch-sm">${a.s}</div><div style="margin-top:6px"><span class="lb lb-f" style="color:${fc.c};border-color:${fc.c}44">${fc.l}</span><span class="lb ${esClass(a.es)}" style="margin-left:4px">${a.es}</span><span class="lb lb-m" style="margin-left:4px">${fl(a.fo)}</span></div></div></div>`;
    });
    h+=`<button class="rst" onclick="cProc=null;cRef=null;renderCh()">Clear filters</button>`;
  }
  $('chres').innerHTML=h;
  refreshIcons($('chres'));
}
function pickProc(v){cProc=cProc===v?null:v;cRef=null;renderCh()}
function pickRef(v){cRef=v;renderCh()}


/* ═══ MAP FILTER ═══ */
// activeFilters: { es: Set, proc: Set, fo: Set, lc: Set }
// Within a dimension: OR logic (matching any selected value counts)
// Across dimensions: AND logic (must match all active dimensions)
const activeFilters = { es: new Set(), proc: new Set(), fo: new Set(), lc: new Set() };

function mapFilter(dim, val, btn) {
  // Toggle value in its dimension set
  if (activeFilters[dim].has(val)) {
    activeFilters[dim].delete(val);
    btn.classList.remove('active');
  } else {
    activeFilters[dim].add(val);
    btn.classList.add('active');
  }
  applyMapFilters();
}

function clearMapFilters() {
  Object.values(activeFilters).forEach(s => s.clear());
  document.querySelectorAll('.map-fpill').forEach(b => b.classList.remove('active'));
  applyMapFilters();
}

function applyMapFilters() {
  const chips = document.querySelectorAll('.fwm-chip');
  if (!chips.length) return;

  const anyActive = Object.values(activeFilters).some(s => s.size > 0);
  const clearBtn = document.getElementById('hl-clear-btn');
  if (clearBtn) clearBtn.style.opacity = anyActive ? '1' : '0.35';

  chips.forEach(chip => {
    if (!anyActive) { chip.classList.remove('dim'); return; }

    // Each active dimension must be satisfied (AND across dimensions)
    // Within a dimension, any selected value matches (OR within dimension)
    let match = true;

    if (activeFilters.es.size > 0) {
      match = match && activeFilters.es.has(chip.dataset.es);
    }
    if (activeFilters.proc.size > 0) {
      const chipProcs = (chip.dataset.proc || '').split(',');
      match = match && [...activeFilters.proc].some(p => chipProcs.includes(p));
    }
    if (activeFilters.fo.size > 0) {
      const chipFo = chip.dataset.fo || '';
      match = match && (activeFilters.fo.has(chipFo) || chipFo === 'both');
    }
    if (activeFilters.lc.size > 0) {
      match = match && activeFilters.lc.has(chip.dataset.lc);
    }

    chip.classList.toggle('dim', !match);
  });
}


