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
const ARTIFACTS_VIEWS = ['grid', 'map', 'chooser', 'detail'];

function nav(v) {
  if (v !== 'detail') prevV = curV;

  // Switch visible view
  document.querySelectorAll('.v').forEach(x => x.classList.remove('on'));
  $('v-' + v).classList.add('on');

  // Clear all nav highlights
  document.querySelectorAll('.nb, .mnb').forEach(b => b.classList.remove('on'));

  // Highlight main nav
  const mainNavMap = {home:'nh', practice:'npr', function:'nfu', maturity:'nma'};
  if (mainNavMap[v]) $(mainNavMap[v]).classList.add('on');
  if (ARTIFACTS_VIEWS.includes(v)) {
    const nart = $('nart');
    if (nart) nart.classList.add('on');
  }

  // Show/hide inline artifact sub-nav
  const subnav = $('art-subnav');
  if (subnav) subnav.style.display = ARTIFACTS_VIEWS.includes(v) ? 'flex' : 'none';

  // Highlight sub-nav tab
  const subNavMap = {grid:'asn-grid', map:'asn-map', chooser:'asn-find'};
  if (subNavMap[v]) {
    const btn = $(subNavMap[v]);
    if (btn) btn.classList.add('on');
  }

  // Update back button label in detail view
  const bkBtn = $('bk-btn');
  if (bkBtn) {
    const labels = {
      grid: '← All artifacts',
      map: '← Framework map',
      chooser: '← Find',
      home: '← Home',
      practice: '← Practice',
      function: '← Function',
      maturity: '← Maturity',
    };
    bkBtn.textContent = labels[prevV] || '← Back';
  }

  // Render views on demand
  if (v === 'grid')     rg();
  if (v === 'map')      renderMap();
  if (v === 'chooser')  { cProc = null; cRef = null; renderCh(); }
  if (v === 'practice') renderPractice();
  if (v === 'function') renderFunction();
  if (v === 'maturity') renderMaturity();

  curV = v;
  window.scrollTo(0, 0);
}

function navBack() {
  nav(prevV && prevV !== 'detail' ? prevV : 'grid');
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
