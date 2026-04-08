// EA on a Page — App shell v2 (History API)
// Navigation, theme, font size, History API
console.log("[EA on a Page] app.js v2 loaded — History API active");
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

/* ═══ NAV + HISTORY API ═══ */
let curV   = 'home';
let curTab = 'map';  // active artifact tab: map | grid | chooser
let _historyNavigation = false; // flag: are we responding to popstate?

const ARTIFACT_TABS = ['map', 'grid', 'chooser'];

// ── URL helpers ──────────────────────────────────────────────────────────────
function stateToHash(state) {
  if (state.v === 'detail')     return `#artifact/${state.id}`;
  if (state.v === 'artifacts')  return `#artifacts/${state.tab || 'map'}`;
  return `#${state.v}`;
}

function hashToState(hash) {
  hash = (hash || '').replace(/^#/, '');
  if (!hash || hash === 'home')           return {v:'home'};
  if (hash === 'practice')                return {v:'practice'};
  if (hash === 'function')                return {v:'function'};
  if (hash === 'maturity')                return {v:'maturity'};
  if (hash.startsWith('artifacts/'))      return {v:'artifacts', tab: hash.split('/')[1] || 'map'};
  if (hash.startsWith('artifact/'))       return {v:'detail', id: hash.split('/')[1]};
  return {v:'home'};
}

// ── Core render (no history push — used by popstate restore) ─────────────────
function _render(state) {
  const {v, tab, id} = state;
  const effectiveV = (ARTIFACT_TABS.includes(v) || v === 'artifacts') ? 'artifacts' : v;
  const activeTab  = tab || (v === 'detail' ? curTab : 'map');

  // Switch visible view
  document.querySelectorAll('.v').forEach(x => x.classList.remove('on'));
  const vEl = $('v-' + (v === 'detail' ? 'detail' : effectiveV));
  if (vEl) vEl.classList.add('on');

  // Main nav highlight
  document.querySelectorAll('.nb').forEach(b => b.classList.remove('on'));
  const mainNavMap = {home:'nh', practice:'npr', function:'nfu', maturity:'nma', artifacts:'nart'};
  const navId = mainNavMap[effectiveV] || mainNavMap[v];
  if (navId) { const btn = $(navId); if(btn) btn.classList.add('on'); }

  // Artifact tabs
  if (effectiveV === 'artifacts' && v !== 'detail') {
    curTab = activeTab;
    _switchTabUI(activeTab);
    _renderTab(activeTab);
  }

  // Detail view
  if (v === 'detail' && id) {
    selId = id; cmpId = null;
    rd();
    // Update back button to reflect where we came from (the previous history entry)
    _updateBackBtn();
  }

  // Other sections
  if (v === 'practice') renderPractice();
  if (v === 'function')  renderFunction();
  if (v === 'maturity')  renderMaturity();

  curV = v === 'detail' ? 'detail' : effectiveV;
  window.scrollTo(0, 0);
}

// ── Public nav — pushes history ───────────────────────────────────────────────
function nav(v, opts) {
  const isTab      = ARTIFACT_TABS.includes(v);
  const effectiveV = isTab ? 'artifacts' : v;
  const tab        = isTab ? v : (opts && opts.tab) || curTab;

  const state = {v: isTab ? 'artifacts' : v, tab};
  const hash  = stateToHash(state);

  history.pushState(state, '', hash);
  _render(state);
}

// Called by od() in artifacts.js with the artifact id
function navDetail(id) {
  const state = {v:'detail', id, fromTab: curTab};
  history.pushState(state, '', `#artifact/${id}`);
  selId = id; cmpId = null;
  _render(state);
}

// ── Tab UI helpers (don't push history) ──────────────────────────────────────
function _switchTabUI(tab) {
  ['map','grid','chooser'].forEach(t => {
    const btn = $('atab-' + t);
    if (btn) btn.classList.toggle('art-tab-on', t === tab);
  });
}

function _renderTab(tab) {
  const panel = $('art-panel'); if(!panel) return;
  if (tab === 'map')     renderMap();
  if (tab === 'grid')    rg();
  if (tab === 'chooser') { cProc = null; cRef = null; renderCh(); }
}

// switchTab is called from onclick in HTML tab buttons
function switchTab(tab, scroll) {
  curTab = tab;
  const state = {v:'artifacts', tab};
  history.pushState(state, '', stateToHash(state));
  _switchTabUI(tab);
  _renderTab(tab);
  if (scroll !== false) window.scrollTo(0, 0);
}

// ── Back button ───────────────────────────────────────────────────────────────
function _updateBackBtn() {
  const bkBtn = $('bk-btn');
  if (!bkBtn) return;
  // Look at the previous history entry's state
  // We can't read previous state directly, but we stored fromTab in detail state
  const state = history.state || {};
  const fromTab = state.fromTab || curTab;
  const tabLabels = {map:'← Map', grid:'← Explore', chooser:'← Find'};
  bkBtn.textContent = tabLabels[fromTab] || '← Artifacts';
}

function navBack() {
  // Use the browser's own history — this is now always correct
  history.back();
}

// ── Browser back/forward ──────────────────────────────────────────────────────
window.addEventListener('popstate', (e) => {
  const state = e.state || hashToState(location.hash);
  _render(state);
});

/* ═══ INIT ═══ */
(function(){
  // Populate home page artifact family list
  const ac2 = $('ac2'); if(ac2) ac2.textContent = DA.length;
  let h = '';
  Object.entries(FM).forEach(([k, fm]) => {
    const ct = DA.filter(a => a.f === k).length;
    h += `<div class="fi"><div class="fb" style="background:${fm.c}"></div><div><div class="fn">${fm.l}</div><div class="fd">${fm.d} · ${ct} artifact${ct > 1 ? 's' : ''}</div></div></div>`;
  });
  const fl = $('flist'); if(fl) fl.innerHTML = h;
  ua();
  setFs(130);

  // Parse URL hash on first load — enables deep linking and page refresh
  const initState = hashToState(location.hash);
  // Replace (not push) the initial state so back doesn't loop
  history.replaceState(initState, '', stateToHash(initState));
  _render(initState);
})();
