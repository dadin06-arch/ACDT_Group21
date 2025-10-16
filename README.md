# ACDT_Group21
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Group21 — Scrollytelling Report</title>
<style>
  :root { --bg:#0b1020; --panel:#111731; --text:#e9eef7; --muted:#9aa7bd; --border:#1d2747; }
  * { box-sizing: border-box; }
  body { margin:0; font-family:system-ui,Segoe UI,Arial,sans-serif; color:var(--text); background:linear-gradient(180deg,#0a0f20,#0e1530); }
  header, section, footer { max-width: 1100px; margin: 0 auto; padding: 60px 20px; }
  .hero { min-height: 60vh; display:flex; flex-direction:column; justify-content:center; gap:16px; }
  .kpi { display:grid; gap:14px; grid-template-columns:repeat(3,minmax(0,1fr)); }
  .card { background:var(--panel); border:1px solid var(--border); border-radius:16px; padding:16px; box-shadow:0 8px 24px rgba(0,0,0,.25); }
  .muted { color:var(--muted);}
  .grid { display:grid; gap:20px; grid-template-columns: 1.1fr .9fr; }
  .sticky { position:sticky; top:16px; }
  .step { margin:52px 0; opacity:.35; transform:translateY(6px); transition:.35s ease; }
  .step.active { opacity:1; transform:none; }
  canvas { width:100%; height:340px; background:#0c1226; border:1px solid var(--border); border-radius:12px; }
  .disclosure { margin-top:12px; }
  .disclosure .details { display:none; }
  .disclosure.open .details { display:block; }
  .btn { cursor:pointer; color:var(--text); background:#1b2350; border:1px solid var(--border); padding:10px 14px; border-radius:12px; }
  .btn.ghost { background:transparent; }
  .calc { display:grid; gap:12px; grid-template-columns: repeat(2,minmax(0,1fr)); }
  input, textarea { width:100%; padding:10px; border-radius:10px; border:1px solid var(--border); background:#0b1124; color:var(--text); }
  .downloads a { display:inline-block; margin-right:10px; padding:10px 14px; border:1px solid var(--border); border-radius:12px; color:var(--text); text-decoration:none; }
  code { background:#0c132a; padding:2px 6px; border-radius:6px; }
  footer { color:var(--muted); }
  @media (max-width: 880px) { .grid { grid-template-columns: 1fr; } .sticky{position:static;} .kpi { grid-template-columns:1fr; } }
</style>
</head>
<body>

<header class="hero">
  <h1>From Skewed to Insight — Group21 Scrollytelling</h1>
  <p class="muted">SIGI ↔ Victim Ratio • Progressive Disclosure • Live Stats Calculators • Downloads</p>
  <div class="kpi">
    <div class="card"><b>Countries</b><div id="kpi1" class="muted">28</div></div>
    <div class="card"><b>Top Model</b><div id="kpi2" class="muted">C2 (Adj. R² highest)</div></div>
    <div class="card"><b>Key Pattern</b><div id="kpi3" class="muted">Negative SIGI–Ratio</div></div>
  </div>
</header>

<section class="grid">
  <!-- Left: sticky “stage” (chart/visual) -->
  <div class="sticky">
    <div class="card">
      <h2 style="margin-top:0">Visual Stage</h2>
      <p class="muted" style="margin-top:-6px">Scroll the right column — this canvas updates per step.</p>
      <canvas id="stage"></canvas>
    </div>
  </div>

  <!-- Right: scrollytelling steps -->
  <div>
    <article class="card step" data-step="1">
      <h3>1) Distributions → Normality via Log Transform</h3>
      <p>Both <b>SIGI</b> and the <b>female-to-male victim ratio</b> were right-skewed; log transforms made them approximately normal and ready for OLS.</p>
      <div class="disclosure">
        <button class="btn ghost toggle">Show details</button>
        <div class="details">
          <ul class="muted">
            <li>Motivation: linear models prefer ~normal residuals.</li>
            <li>Effect: compress tails & reduce outlier influence.</li>
          </ul>
        </div>
      </div>
    </article>

    <article class="card step" data-step="2">
      <h3>2) Core Relationship (log–log)</h3>
      <p>A <b>consistent negative</b> slope between <code>log(SIGI)</code> and <code>log(Female/Male Ratio)</code> — countries with higher inequality report lower female ratios (opposite to the initial hypothesis).</p>
    </article>

    <article class="card step" data-step="3">
      <h3>3) Model Comparison</h3>
      <p><b>C2</b> (controlling for Education) achieved the <b>highest adjusted R²</b>; GDP moderation was weak, and institutional variables (education, gov. effectiveness) aligned with higher reporting.</p>
    </article>

    <article class="card step" data-step="4">
      <h3>4) Takeaways</h3>
      <ul class="muted">
        <li>Inverse SIGI–ratio relationship overall.</li>
        <li>Education & government effectiveness matter most.</li>
        <li>Strong institutions can mute inequality’s impact.</li>
      </ul>
    </article>
  </div>
</section>

<section>
  <h2>Embedded Statistical Calculators</h2>
  <p class="muted">Quick checks without leaving the page.</p>

  <div class="card" style="margin-top:14px">
    <h3>① Correlation Significance (r, n → p)</h3>
    <div class="calc">
      <label>Correlation r<br><input id="r" type="number" step="0.001" value="-0.31"></label>
      <label>Sample size n<br><input id="n" type="number" value="28"></label>
    </div>
    <button id="btnP" class="btn" style="margin-top:10px">Compute p-value</button>
    <p id="pOut" class="muted"></p>
  </div>

  <div class="card" style="margin-top:14px">
    <h3>② Simple OLS (paste arrays)</h3>
    <div class="calc">
      <label>X values (comma-separated)<br><textarea id="xArr" rows="3">1,2,3,4,5,6</textarea></label>
      <label>Y values (comma-separated)<br><textarea id="yArr" rows="3">2,3,4,5,4,6</textarea></label>
    </div>
    <button id="btnOLS" class="btn" style="margin-top:10px">Fit OLS</button>
    <p id="olsOut" class="muted"></p>
  </div>
</section>

<section>
  <h2>Downloadable Resources</h2>
  <p class="muted">Provide data, code, or a PDF handout.</p>
  <div class="downloads">
    <!-- 파일을 저장소에 추가하면 자동 다운로드 가능 -->
    <a href="data/sample.csv" download>Download Data (CSV)</a>
    <a href="data/report.pdf" download>Export Report (PDF)</a>
  </div>
</section>

<footer>
  <p>© Group21 — Deployed on GitHub Pages</p>
</footer>

<script>
// Progressive disclosure toggles
document.querySelectorAll('.toggle').forEach(btn=>{
  btn.addEventListener('click', e=>{
    const box = e.target.closest('.disclosure');
    box.classList.toggle('open');
    btn.textContent = box.classList.contains('open') ? 'Hide details' : 'Show details';
  });
});

// Scrollytelling: IntersectionObserver
const steps = document.querySelectorAll('.step');
const stage = document.getElementById('stage');
const ctx = stage.getContext('2d');

function draw(step){
  const w = stage.width, h = stage.height;
  ctx.clearRect(0,0,w,h);
  ctx.fillStyle = "#e9eef7";
  ctx.font = "16px system-ui";

  // title per step
  const t = {
    1:"Log Transforms → Normality",
    2:"Negative log(SIGI) ~ log(Ratio)",
    3:"Model Comparison (C2 best)",
    4:"Key Takeaways"
  }[step] || "Scrollytelling";

  ctx.fillText(t, 16, 28);
  ctx.strokeStyle = "#3b82f6";
  ctx.lineWidth = 2;

  // Simple illustrative strokes (placeholder visuals)
  ctx.beginPath();
  if(step===2){         // negative slope
    ctx.moveTo(30,60); ctx.lineTo(w-30,h-60);
  } else if(step===3){  // bars
    const x=40,y=h-80, bw=36, vals=[120,180,150,90];
    vals.forEach((vh,i)=>{ ctx.strokeRect(x+i*(bw+18), y-vh, bw, vh); });
  } else if(step===4){  // bullets
    ctx.fillText("• Inverse relationship confirmed", 24, 70);
    ctx.fillText("• Institutions & education matter", 24, 95);
    ctx.fillText("• GDP moderation weak", 24, 120);
  } else {              // transform arrow
    ctx.moveTo(40,h-100); ctx.lineTo(w-140,h-160);
    ctx.moveTo(w-160,h-170); ctx.lineTo(w-130,h-160); ctx.lineTo(w-150,h-140);
  }
  ctx.stroke();
}

const io = new IntersectionObserver((entries)=>{
  entries.forEach(en=>{
    if(en.isIntersecting){
      steps.forEach(s=>s.classList.remove('active'));
      en.target.classList.add('active');
      draw(Number(en.target.dataset.step));
    }
  });
},{threshold:0.55});
steps.forEach(s=>io.observe(s));
draw(1);

// Calculator ①: r,n → p-value (two-tailed)
function gammaln(z){ const g=7,p=[0.99999999999980993,676.5203681218851,-1259.1392167224028,771.32342877765313,-176.61502916214059,12.507343278686905,-0.13857109526572012,9.9843695780195716e-6,1.5056327351493116e-7];
  if(z<0.5) return Math.log(Math.PI)-Math.log(Math.sin(Math.PI*z))-gammaln(1-z);
  z-=1; let x=p[0]; for(let i=1;i<g+2;i++) x+=p[i]/(z+i);
  const t=z+g+0.5; return 0.5*Math.log(2*Math.PI)+(z+0.5)*Math.log(t)-t+Math.log(x)-Math.log(z+1);
}
function studentPdf(x,df){ return Math.exp(gammaln((df+1)/2)-gammaln(df/2))/Math.sqrt(df*Math.PI)*Math.pow(1+x*x/df,-(df+1)/2); }
function pFromT(t,df){ // simple numeric integrate 0..|t|
  const a=0,b=Math.abs(t),N=1200,h=(b-a)/N; let s=studentPdf(a,df)+studentPdf(b,df);
  for(let i=1;i<N;i++) s+=studentPdf(a+i*h,df)*(i%2?4:2);
  const oneTail = 0.5 - (s*h/3); return Math.max(0, Math.min(1, 2*oneTail));
}
document.getElementById('btnP').onclick = ()=>{
  const r=parseFloat(document.getElementById('r').value), n=parseInt(document.getElementById('n').value,10);
  if(!isFinite(r)||!isFinite(n)||n<3||Math.abs(r)>=1){ document.getElementById('pOut').textContent='Invalid input'; return; }
  const t = r*Math.sqrt((n-2)/(1-r*r)); const p = pFromT(t,n-2);
  document.getElementById('pOut').textContent = `t = ${t.toFixed(3)}, df = ${n-2}, p ≈ ${p.toExponential(2)} (two-tailed)`;
};

// Calculator ②: simple OLS for arrays
document.getElementById('btnOLS').onclick = ()=>{
  const x=document.getElementById('xArr').value.split(',').map(v=>parseFloat(v.trim())).filter(v=>!isNaN(v));
  const y=document.getElementById('yArr').value.split(',').map(v=>parseFloat(v.trim())).filter(v=>!isNaN(v));
  if(x.length!==y.length||x.length<2){ document.getElementById('olsOut').textContent='Provide same-length numeric arrays.'; return; }
  const n=x.length, mean=a=>a.reduce((s,v)=>s+v,0)/a.length; const mx=mean(x), my=mean(y);
  let num=0, den=0, sst=0, sse=0; for(let i=0;i<n;i++){ num+=(x[i]-mx)*(y[i]-my); den+=(x[i]-mx)**2; }
  const b1=num/den, b0=my-b1*mx; for(let i=0;i<n;i++){ const yh=b0+b1*x[i]; sst+=(y[i]-my)**2; sse+=(y[i]-yh)**2; }
  const r2=1-sse/sst; document.getElementById('olsOut').textContent=`ŷ = ${b0.toFixed(3)} + ${b1.toFixed(3)}x,  R² = ${r2.toFixed(3)}`;
};
</script>
</body>
</html>
