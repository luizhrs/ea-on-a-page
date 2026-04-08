// EA on a Page — App shell
// Navigation, theme, font size, init
// Depends on: data.js, artifacts.js, practice.js, maturity.js, function.js

/* ═══ THEME ═══ */
function tog(){
  document.body.classList.toggle('dark');
  $('tb').textContent = document.body.classList.contains('dark') ? '☀' : '◐';
  ua();
}

function setFs(v){
  document.querySelector('main').style.zoom = v/100;
  $('fsval').textContent = (v-30) + '%';
}

function ua(){
  const dk = document.body.classList.contains('dark');
  const a = encodeURIComponent(dk ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.35)');
  document.querySelectorAll('.sel').forEach(s =>
    s.style.backgroundImage = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='${a}'/%3E%3C/svg%3E")`
  );
}

/* ═══ NAV ═══ */
let curV = 'home', prevV = 'home';
let curTab = 'map'; // active artifact tab: map | grid | chooser
const ARTIFACT_TABS = ['map', 'grid', 'chooser'];

function nav(v) {
  const isTab = ARTIFACT_TABS.includes(v);
  const effectiveV = isTab ? 'artifacts' : v;

  if (effectiveV !== 'detail') prevV = curV;

  // Switch visible view
  document.querySelectorAll('.v').forEach(x => x.classList.remove('on'));
  const vEl = $('v-' + effectiveV);
  if (vEl) vEl.classList.add('on');

  // Clear all nav highlights
  document.querySelectorAll('.nb').forEach(b => b.classList.remove('on'));

  // Highlight main nav button
  const mainNavMap = {home:'nh', practice:'npr', function:'nfu', maturity:'nma', artifacts:'nart'};
  const navId = mainNavMap[effectiveV];
  if (navId) { const btn = $(navId); if(btn) btn.classList.add('on'); }

  // If navigating to an artifact tab, switch the tab
  if (isTab) switchTab(v, false);

  // Update back button label in detail view
  const bkBtn = $('bk-btn');
  if (bkBtn) {
    const tabLabels = {map:'← Map', grid:'← Explore', chooser:'← Find'};
    const labels = {
      artifacts: tabLabels[curTab] || '← Artifacts',
      home:'← Home', practice:'← Practice', function:'← Function', maturity:'← Maturity',
    };
    bkBtn.textContent = labels[prevV] || '← Back';
  }

  // Render sections on demand
  if (v === 'practice') renderPractice();
  if (v === 'function')  renderFunction();
  if (v === 'maturity')  renderMaturity();

  curV = effectiveV;
  window.scrollTo(0, 0);
}

// Switch between Map / Explore / Find tabs within the Artifacts section
function switchTab(tab, scroll) {
  curTab = tab;

  // Highlight the active tab button
  ['map','grid','chooser'].forEach(t => {
    const btn = $('atab-' + t);
    if (btn) btn.classList.toggle('art-tab-on', t === tab);
  });

  // Render into #art-panel
  const panel = $('art-panel');
  if (!panel) return;

  if (tab === 'map')     renderMap();
  if (tab === 'grid')    rg();
  if (tab === 'chooser') { cProc = null; cRef = null; renderCh(); }

  if (scroll !== false) window.scrollTo(0, 0);
}

function navBack() {
  if (prevV && prevV !== 'detail' && prevV !== 'artifacts') {
    nav(prevV);
  } else {
    nav('artifacts');
  }
}

/* ═══ INIT ═══ */
(function(){
  const ac2 = $('ac2'); if(ac2) ac2.textContent = DA.length;
  let h = '';
  Object.entries(FM).forEach(([k, fm]) => {
    const ct = DA.filter(a => a.f === k).length;
    h += `<div class="fi"><div class="fb" style="background:${fm.c}"></div><div><div class="fn">${fm.l}</div><div class="fd">${fm.d} · ${ct} artifact${ct > 1 ? 's' : ''}</div></div></div>`;
  });
  const fl = $('flist'); if(fl) fl.innerHTML = h;
  ua();
  setFs(130);
})();
