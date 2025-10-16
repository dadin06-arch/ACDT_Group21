# ACDT_Group21
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Group 21: Gender Inequality and Victimization Analysis</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
    body {
      font-family: 'Inter', sans-serif;
      background-color: #f8fafc;
    }
    .data-step { opacity: 0; transform: translateY(40px);
      transition: opacity 0.8s ease-out, transform 0.8s ease-out; }
    .data-step.is-visible { opacity: 1; transform: translateY(0); }
  </style>
</head>
<body class="antialiased">

  <!-- Header -->
  <header class="bg-[#0033A0] text-white py-8 shadow-lg sticky top-0 z-50">
    <div class="max-w-5xl mx-auto px-6 text-center">
      <h1 class="text-4xl font-extrabold">Group 21 | Gender Inequality & Victimization</h1>
      <p class="text-indigo-100 text-lg mt-2">Hanyang Intercollege | Data-driven Social Analysis</p>
    </div>
  </header>

  <main class="max-w-5xl mx-auto px-6 py-16 space-y-20">
    <!-- Intro -->
    <section class="data-step bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#0033A0]">
      <p class="text-sm text-[#0033A0] font-semibold mb-2">Phase 1: Overview</p>
      <h2 class="text-3xl font-bold mb-4 text-gray-800">Research Focus</h2>
      <p class="text-lg text-gray-700">
        This analysis explores whether higher gender inequality (SIGI) correlates with higher female victimization rates.
        However, findings reveal an **inverse relationship**, suggesting that inequality may suppress reporting rather than violence itself.
      </p>
    </section>

    <!-- Chart & Calculator -->
    <section class="data-step bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#0033A0]">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">📊 Upload CSV & Analyze</h2>
      <p class="text-gray-600 mb-4">
        Upload a CSV file containing two columns: <code>SIGI</code> and <code>Victim_Ratio</code>.
        The system will compute correlation and fit a regression line automatically.
      </p>
      <input type="file" id="csvFile" accept=".csv" class="mb-4 border border-gray-300 rounded p-2 w-full" />
      <button id="analyzeBtn" class="bg-[#0033A0] text-white px-4 py-2 rounded-lg shadow hover:bg-blue-800 transition">Analyze Data</button>

      <div id="results" class="hidden mt-6">
        <h3 class="text-xl font-bold text-gray-800 mb-2">Results</h3>
        <p><b>Correlation (r):</b> <span id="rValue" class="text-[#0033A0] font-bold"></span></p>
        <p><b>Regression:</b> <code>Y = <span id="mValue"></span>X + <span id="bValue"></span></code></p>
        <canvas id="chartCanvas" class="mt-6 border rounded w-full bg-gray-50" height="300"></canvas>
      </div>
    </section>

    <!-- Key Insight -->
    <section class="data-step bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#0033A0]">
      <p class="text-sm font-semibold text-[#0033A0] mb-2">Phase 3: Interpretation</p>
      <h2 class="text-3xl font-bold text-gray-800 mb-4">The Paradox of Hidden Violence</h2>
      <p class="text-lg text-gray-700 mb-4">
        The data suggest that **gender inequality reduces visibility, not violence**.  
        In societies with high SIGI, systemic bias, stigma, and distrust in institutions lead to underreporting.
      </p>
      <ul class="list-disc ml-6 text-gray-700 space-y-2">
        <li>Higher education increases awareness and reporting.</li>
        <li>Government effectiveness lowers actual crime risk.</li>
      </ul>
    </section>
  </main>

  <footer class="text-center py-8 text-gray-500 border-t mt-16">
    © 2025 Group 21 | Hanyang Intercollege | Built with Tailwind + JS
  </footer>

  <script>
    // Fade-in on scroll
    const steps = document.querySelectorAll('.data-step');
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('is-visible'); });
    }, { threshold: 0.2 });
    steps.forEach(s=>io.observe(s));

    // CSV Upload + Analysis
    document.getElementById('analyzeBtn').addEventListener('click', ()=>{
      const file = document.getElementById('csvFile').files[0];
      if(!file){ alert("Please upload a CSV file first."); return; }
      const reader = new FileReader();
      reader.onload = (e)=>{
        const rows = e.target.result.trim().split(/\r?\n/).slice(1);
        const x=[], y=[];
        rows.forEach(r=>{
          const [a,b] = r.split(',').map(Number);
          if(!isNaN(a)&&!isNaN(b)){ x.push(a); y.push(b); }
        });
        if(x.length<2){ alert("Not enough valid data."); return; }

        const n=x.length;
        const mx=x.reduce((a,b)=>a+b)/n, my=y.reduce((a,b)=>a+b)/n;
        let num=0, denX=0, denY=0;
        for(let i=0;i<n;i++){ const dx=x[i]-mx, dy=y[i]-my; num+=dx*dy; denX+=dx*dx; denY+=dy*dy; }
        const r=num/Math.sqrt(denX*denY);
        const m=num/denX, b=my-m*mx;

        document.getElementById('results').classList.remove('hidden');
        document.getElementById('rValue').textContent=r.toFixed(3);
        document.getElementById('mValue').textContent=m.toFixed(3);
        document.getElementById('bValue').textContent=b.toFixed(3);

        const ctx=document.getElementById('chartCanvas').getContext('2d');
        ctx.clearRect(0,0,500,300);
        const minX=Math.min(...x), maxX=Math.max(...x);
        const minY=Math.min(...y), maxY=Math.max(...y);
        const sx=v=>50+(v-minX)/(maxX-minX)*400;
        const sy=v=>250-(v-minY)/(maxY-minY)*200;

        // scatter
        ctx.fillStyle="#0033A0";
        x.forEach((xi,i)=>{ ctx.beginPath(); ctx.arc(sx(xi),sy(y[i]),4,0,Math.PI*2); ctx.fill(); });
        // regression
        ctx.strokeStyle="#DC2626";
        ctx.lineWidth=2;
        ctx.beginPath();
        const x1=minX, x2=maxX;
        ctx.moveTo(sx(x1),sy(m*x1+b));
        ctx.lineTo(sx(x2),sy(m*x2+b));
        ctx.stroke();
      };
      reader.readAsText(file);
    });
  </script>
</body>
</html>

