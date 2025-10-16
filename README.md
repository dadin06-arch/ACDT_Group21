# ACDT_Group21
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Do Countries with Higher SIGI Tend to Have Higher Female Victimization Rates?</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f8fafc; /* Slate-50 */
        }
        /* Styles for Scrollytelling: Progressive Disclosure */
        .data-step {
            opacity: 0;
            transform: translateY(40px);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
            transition-delay: 0.1s;
        }
        .data-step.is-visible {
            opacity: 1;
            transform: translateY(0);
        }
        /* Sticky element for scroll position context */
        .sticky-context {
            top: 0;
            height: 100vh;
            pointer-events: none;
            z-index: 10;
        }
        /* Ensure canvas is responsive */
        #regressionCanvas {
            width: 100%;
            height: 300px;
        }
    </style>
</head>
<body class="antialiased">

    <!-- Header -->
    <header class="bg-indigo-700 text-white shadow-xl py-8 mb-12 sticky top-0 z-50">
        <div class="max-w-5xl mx-auto px-6">
            <h1 class="text-4xl font-extrabold mb-2">Do Countries with Higher SIGI Tend to Have Higher Female Victimization Rates?</h1>
            <p class="text-indigo-200 text-xl font-light">Re-examining the influence of the Gender Inequality Index (SIGI) on Reported Victimization Rates</p>
        </div>
    </header>

    <main class="max-w-5xl mx-auto px-6 pb-20 space-y-20">

        <!-- Scrollytelling/Progressive Disclosure Sections -->

        <!-- STEP 1: DATA DESCRIPTION -->
        <section id="step-1" class="data-step pt-16 border-l-4 border-indigo-500 pl-6 bg-white p-8 rounded-xl shadow-lg">
            <p class="text-sm font-semibold text-indigo-500 mb-2">Phase 1: Data Description</p>
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Challenging the Conventional Wisdom</h2>

            <div class="space-y-4 text-lg text-gray-700">
                <p>
                    Our analysis investigates the hypothesis that a higher level of gender discrimination (measured by SIGI) leads to a higher female crime victimization rate.
                </p>
                <ul class="list-disc list-inside space-y-2 ml-4">
                    <li>**Independent Variable (X):** $\log(\text{SIGI})$ — Social Institutions and Gender Index. A higher value indicates greater inequality.</li>
                    <li>**Dependent Variable (Y):** $\log(\text{Female/Male Victim Ratio})$ — The standardized relative female victimization rate.</li>
                    <li>**Control Variables:** Education Rate, Government Effectiveness, and GDP.</li>
                </ul>
            </div>
            <div class="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h3 class="text-xl font-semibold mb-2 text-gray-700">Data Preparation Note</h3>
                <p class="text-gray-600">Both SIGI and the Victim Ratio were **Log-Transformed** to normalize distributions, ensuring robustness for OLS linear regression models.</p>
            </div>
        </section>

        <!-- STEP 2: ANALYSIS RESULTS -->
        <section id="step-2" class="data-step pt-16 border-l-4 border-indigo-500 pl-6 bg-white p-8 rounded-xl shadow-lg">
            <p class="text-sm font-semibold text-indigo-500 mb-2">Phase 2: Statistical Analysis (OLS Regression)</p>
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Model C1: The Counter-Intuitive Finding</h2>

            <!-- Model C1 -->
            <div class="mb-8 border-b pb-4">
                <h3 class="text-2xl font-bold text-gray-800 mb-3">Model C1: Simple Regression</h3>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center bg-indigo-50 p-4 rounded-lg">
                    <div>
                        <p class="text-sm text-gray-600">R-squared</p>
                        <p class="text-2xl font-extrabold text-indigo-600">0.257</p>
                    </div>
                    <div>
                        <p class="text-sm text-gray-600">Log(SIGI) Coefficient</p>
                        <p class="text-2xl font-extrabold text-red-600">-0.9805</p>
                    </div>
                    <div>
                        <p class="text-sm text-gray-600">P-value</p>
                        <p class="text-2xl font-extrabold text-indigo-600">0.003</p>
                    </div>
                    <div class="col-span-2 md:col-span-1 flex flex-col justify-center">
                        <p class="text-sm text-gray-600">Key Observation</p>
                        <p class="text-lg font-bold text-red-700 mt-1">Significant **Negative Correlation**</p>
                    </div>
                </div>
                <p class="text-lg mt-4 text-gray-700">
                    **Interpretation:** As Gender Inequality (SIGI) increases, the **reported** Female Victim Ratio decreases. This directly contradicts the initial hypothesis.
                </p>
            </div>

            <!-- Model Progression -->
            <div class="space-y-6">
                <h3 class="text-2xl font-bold text-gray-800 mb-3">Confounder Analysis (C2, C3)</h3>
                
                <!-- C2 -->
                <div class="p-4 border border-gray-200 rounded-lg bg-yellow-50">
                    <p class="text-xl font-semibold text-gray-800">C2: Education Rate (Significant Contributor)</p>
                    <p class="text-lg mt-2">**Result:** Education Rate showed a significant **Positive Coefficient** (+0.0284).</p>
                    <p class="text-base text-gray-600">**Implication:** Higher education levels correlate with a **higher reported** ratio, suggesting education improves awareness and the likelihood of reporting.</p>
                </div>
                
                <!-- C3 -->
                <div class="p-4 border border-gray-200 rounded-lg bg-green-50">
                    <p class="text-xl font-semibold text-gray-800">C3: Government Effectiveness</p>
                    <p class="text-lg mt-2">**Result:** Government Effectiveness showed a significant **Negative Coefficient** (-0.0173).</p>
                    <p class="text-base text-gray-600">**Implication:** Better governance likely strengthens institutional protection, potentially leading to a reduction in **actual** crime risk.</p>
                </div>
            </div>
        </section>

        <!-- STEP 3: KEY INSIGHT -->
        <section id="step-3" class="data-step pt-16 border-l-4 border-indigo-500 pl-6 bg-white p-8 rounded-xl shadow-lg">
            <p class="text-sm font-semibold text-indigo-500 mb-2">Phase 3: Key Insight</p>
            <h2 class="text-3xl font-bold text-gray-800 mb-6">The Paradox of Hidden Violence</h2>

            <p class="text-xl font-bold text-red-700 mb-6">
                "Gender inequality does not reduce violence itself; it reduces the **Visibility** of violence."
            </p>

            <h3 class="text-2xl font-semibold text-gray-800 mb-3 border-b pb-2">The Underreporting Hypothesis</h3>
            <p class="text-lg mb-4 text-gray-700">
                The low reported victimization rates in high-SIGI countries are attributed to widespread **underreporting** stemming from systemic barriers in unequal societies.
            </p>

            <ul class="list-disc list-outside space-y-3 ml-6 text-lg text-gray-700">
                <li>**Fear and Stigma:** Victims fear social backlash and societal stigma associated with reporting.</li>
                <li>**Distrust of the System:** Lack of confidence in law enforcement and the justice system, which may be rooted in gender-biased institutions.</li>
            </ul>
        </section>

        <!-- STEP 4: CONCLUSION -->
        <section id="step-4" class="data-step pt-16 border-l-4 border-indigo-500 pl-6 bg-white p-8 rounded-xl shadow-lg">
            <p class="text-sm font-semibold text-indigo-500 mb-2">Phase 4: Conclusion</p>
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Summary and Policy Implications</h2>

            <div class="bg-indigo-100 p-6 rounded-lg mb-6">
                <p class="text-xl font-bold text-indigo-800">
                    Conclusion: The reported Female Victimization Rate is a measure of society's **'Willingness and Ability to Report and Track'** rather than the actual level of violence.
                </p>
            </div>

            <h3 class="text-2xl font-semibold text-gray-800 mb-3 border-b pb-2">Policy Recommendations</h3>
            <div class="space-y-4 text-lg text-gray-700">
                <div class="flex items-start space-x-3">
                    <span class="text-2xl text-green-600 font-bold">1.</span>
                    <p>
                        **Increase Visibility:** Leverage the positive effect of education to promote public awareness and encourage reporting, breaking down social barriers that fuel stigma.
                    </p>
                </div>
                <div class="flex items-start space-x-3">
                    <span class="text-2xl text-green-600 font-bold">2.</span>
                    <p>
                        **Strengthen Protection:** Improve Government Effectiveness and the legal system to reinforce institutional safeguards, thereby reducing actual crime risk and building public trust.
                    </p>
                </div>
            </div>
        </section>


    <!-- ===============================
📊 Interactive Regression Calculator
Based on C1–C3 Models
==================================-->
<section id="regression-calculator" class="bg-white p-8 rounded-xl shadow-xl border-l-4 border-[#0033A0]">
  <h2 class="text-3xl font-bold text-gray-800 mb-6">📈 Interactive OLS Regression Calculator</h2>
  <p class="text-gray-600 mb-6">
    Test how <b>SIGI</b>, <b>Education Rate</b>, and <b>Government Effectiveness</b> affect the Female/Male Victim Ratio.<br>
    Choose a model (C1–C3), enter data arrays, and compute regression results instantly.
  </p>

  <!-- Model Selector -->
  <div class="mb-4">
    <label class="block text-sm font-semibold text-gray-700 mb-2">Select Model</label>
    <select id="modelSelect" class="border border-gray-300 p-2 rounded-lg w-full">
      <option value="C1">C1: log_Y ~ log_X (SIGI only)</option>
      <option value="C2">C2: log_Y ~ log_X + Education</option>
      <option value="C3">C3: log_Y ~ log_X + Education + GovEffectiveness</option>
    </select>
  </div>

  <!-- Input Data -->
  <div class="grid md:grid-cols-2 gap-4 mb-6">
    <div>
      <label class="block text-sm font-semibold mb-2 text-gray-700">log(SIGI)</label>
      <textarea id="xInput" rows="3" class="w-full p-2 border border-gray-300 rounded-lg" placeholder="e.g. 0.3, 0.5, 0.9, 1.2, 1.5"></textarea>
    </div>
    <div>
      <label class="block text-sm font-semibold mb-2 text-gray-700">log(Female/Male Victim Ratio)</label>
      <textarea id="yInput" rows="3" class="w-full p-2 border border-gray-300 rounded-lg" placeholder="e.g. 0.7, 0.6, 0.5, 0.4, 0.3"></textarea>
    </div>
  </div>

  <div id="extraInputs" class="hidden space-y-4">
    <div>
      <label class="block text-sm font-semibold mb-2 text-gray-700">Education Rate</label>
      <textarea id="eduInput" rows="2" class="w-full p-2 border border-gray-300 rounded-lg" placeholder="e.g. 80, 85, 88, 90, 92"></textarea>
    </div>
    <div id="govBox" class="hidden">
      <label class="block text-sm font-semibold mb-2 text-gray-700">Government Effectiveness</label>
      <textarea id="govInput" rows="2" class="w-full p-2 border border-gray-300 rounded-lg" placeholder="e.g. -0.5, 0.1, 0.3, 0.5, 0.8"></textarea>
    </div>
  </div>

  <button id="runRegression"
    class="bg-[#0033A0] text-white px-5 py-3 rounded-lg font-semibold mt-6 hover:bg-blue-900 transition">
    Run Regression
  </button>

  <div id="regResult" class="mt-8 hidden">
    <h3 class="text-2xl font-bold text-gray-800 mb-4">Results</h3>
    <pre id="resultText" class="bg-gray-50 border border-gray-200 rounded-lg p-4 text-gray-800 text-sm"></pre>
    <canvas id="regCanvas" class="w-full border mt-4 bg-gray-50 rounded-lg" height="300"></canvas>
  </div>
</section>

<script>
  // === Utility Functions ===
  const mean = arr => arr.reduce((a,b)=>a+b,0)/arr.length;
  const parseInput = id => document.getElementById(id).value.split(',')
    .map(v=>parseFloat(v.trim())).filter(v=>!isNaN(v));

  function ols(X, Y) {
    const n = X.length;
    const meanX = mean(X), meanY = mean(Y);
    const cov = X.map((x,i)=>(x-meanX)*(Y[i]-meanY)).reduce((a,b)=>a+b);
    const varX = X.map(x=>(x-meanX)**2).reduce((a,b)=>a+b);
    const b1 = cov / varX;
    const b0 = meanY - b1*meanX;
    const yhat = X.map(x=>b0+b1*x);
    const ssr = yhat.map((y,i)=>(y-meanY)**2).reduce((a,b)=>a+b);
    const sse = Y.map((y,i)=>(y-yhat[i])**2).reduce((a,b)=>a+b);
    const r2 = ssr/(ssr+sse);
    return {b0,b1,r2};
  }

  document.getElementById("modelSelect").addEventListener("change", e=>{
    const val = e.target.value;
    const extra = document.getElementById("extraInputs");
    const govBox = document.getElementById("govBox");
    extra.classList.toggle("hidden", val==="C1");
    govBox.classList.toggle("hidden", val!=="C3");
  });

  document.getElementById("runRegression").addEventListener("click", ()=>{
    const model = document.getElementById("modelSelect").value;
    const X = parseInput("xInput");
    const Y = parseInput("yInput");
    if(X.length!==Y.length || X.length<2){ alert("Please provide same-length X and Y data."); return; }

    let text="", result={};
    const ctx = document.getElementById("regCanvas").getContext("2d");
    ctx.clearRect(0,0,500,300);

    if(model==="C1"){
      result = ols(X,Y);
      text = `Model: C1 (log_Y ~ log_X)\nβ₀=${result.b0.toFixed(3)}, β₁=${result.b1.toFixed(3)}, R²=${result.r2.toFixed(3)}\nInterpretation: As SIGI increases, victim ratio changes linearly with slope β₁.`;
    }
    else if(model==="C2"){
      const Edu = parseInput("eduInput");
      if(Edu.length!==X.length){ alert("Education array length must match."); return; }
      // partial regression with two predictors (simplified)
      const X2 = X.map((x,i)=>[1,x,Edu[i]]);
      const Xt = math.transpose(X2);
      const XtX = math.multiply(Xt,X2);
      const XtY = math.multiply(Xt,Y);
      const betas = math.multiply(math.inv(XtX),XtY);
      const [b0,b1,b2] = betas;
      const Yhat = X.map((_,i)=>b0+b1*X[i]+b2*Edu[i]);
      const ssr = Yhat.map((y,i)=>(y-mean(Y))**2).reduce((a,b)=>a+b);
      const sse = Y.map((y,i)=>(y-Yhat[i])**2).reduce((a,b)=>a+b);
      const r2 = ssr/(ssr+sse);
      text = `Model: C2 (log_Y ~ log_X + Edu)\nβ₀=${b0.toFixed(3)}, β(SIGI)=${b1.toFixed(3)}, β(Edu)=${b2.toFixed(3)}, R²=${r2.toFixed(3)}\nInterpretation: Higher education increases reported ratios.`;
    }
    else {
      const Edu=parseInput("eduInput"), Gov=parseInput("govInput");
      if(Edu.length!==X.length||Gov.length!==X.length){ alert("Arrays must have same length."); return; }
      const X3 = X.map((x,i)=>[1,x,Edu[i],Gov[i]]);
      const Xt = math.transpose(X3);
      const XtX = math.multiply(Xt,X3);
      const XtY = math.multiply(Xt,Y);
      const betas = math.multiply(math.inv(XtX),XtY);
      const [b0,b1,b2,b3] = betas;
      const Yhat = X.map((_,i)=>b0+b1*X[i]+b2*Edu[i]+b3*Gov[i]);
      const ssr = Yhat.map((y,i)=>(y-mean(Y))**2).reduce((a,b)=>a+b);
      const sse = Y.map((y,i)=>(y-Yhat[i])**2).reduce((a,b)=>a+b);
      const r2 = ssr/(ssr+sse);
      text = `Model: C3 (log_Y ~ log_X + Edu + GovEff)\nβ₀=${b0.toFixed(3)}, β(SIGI)=${b1.toFixed(3)}, β(Edu)=${b2.toFixed(3)}, β(GovEff)=${b3.toFixed(3)}, R²=${r2.toFixed(3)}\nInterpretation: Education ↑ increases reporting, GovEff ↑ reduces risk.`;
    }

    document.getElementById("regResult").classList.remove("hidden");
    document.getElementById("resultText").textContent = text;

    // scatter & regression line
    ctx.strokeStyle="#0033A0";
    ctx.fillStyle="#0033A0";
    const minX=Math.min(...X), maxX=Math.max(...X);
    const minY=Math.min(...Y), maxY=Math.max(...Y);
    const sx=v=>40+(v-minX)/(maxX-minX)*420;
    const sy=v=>260-(v-minY)/(maxY-minY)*220;
    X.forEach((x,i)=>{ctx.beginPath();ctx.arc(sx(x),sy(Y[i]),4,0,2*Math.PI);ctx.fill();});
    ctx.strokeStyle="#DC2626"; ctx.lineWidth=2;
    ctx.beginPath(); ctx.moveTo(sx(minX),sy(result.b0+result.b1*minX));
    ctx.lineTo(sx(maxX),sy(result.b0+result.b1*maxX)); ctx.stroke();
  });
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/11.8.0/math.min.js"></script>

        <!-- 6. DOWNLOADABLE RESOURCES -->
        <section class="mt-24 pt-16">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">📥 Downloadable Resources</h2>
            <p class="text-gray-600 mb-8">
                Download the raw mock data and the full analysis report for reproducibility and sharing.
            </p>

            <div class="flex flex-col sm:flex-row gap-4">
                <button id="downloadCsvBtn" class="flex-1 flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg shadow-lg transition duration-200 transform hover:scale-[1.01]">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download Data (Mock CSV)
                </button>
                <button id="downloadPdfBtn" class="flex-1 flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg shadow-lg transition duration-200 transform hover:scale-[1.01]">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Export Report (PDF Mock)
                </button>
            </div>
        </section>

    </main>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            // =======================================================
            // 1. Scrollytelling (Progressive Disclosure) Logic
            // =======================================================
            const steps = document.querySelectorAll('.data-step');

            // Set up Intersection Observer
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Element is in view, make it visible
                        entry.target.classList.add('is-visible');
                        // Optional: stop observing once visible to save resources
                        // observer.unobserve(entry.target); 
                    } else {
                        // Optional: remove class when it leaves the viewport (for re-triggering on scroll up)
                        // entry.target.classList.remove('is-visible');
                    }
                });
            }, {
                rootMargin: '0px 0px -20% 0px', // Trigger when 80% of the element is in view
                threshold: 0.1 // Trigger when 10% of the element is visible
            });

            // Observe each narrative step
            steps.forEach(step => {
                observer.observe(step);
            });


            // =======================================================
            // 2. Statistical Calculator Logic (with Plotting)
            // =======================================================

            const xDataInput = document.getElementById('xData');
            const yDataInput = document.getElementById('yData');
            const calculateBtn = document.getElementById('calculateBtn');
            const resultsDiv = document.getElementById('results');
            const errorMsg = document.getElementById('errorMsg');
            const canvas = document.getElementById('regressionCanvas');
            const ctx = canvas.getContext('2d');

            // Default mock data based on the provided analysis's structure (positive slope)
            xDataInput.value = "10, 12, 14, 16, 18, 20";
            yDataInput.value = "50, 55, 63, 68, 70, 75";

            // Helper function to parse input strings into number arrays
            function parseData(dataString) {
                return dataString.split(',')
                    .map(s => s.trim())
                    .filter(s => s.length > 0)
                    .map(Number)
                    .filter(n => !isNaN(n));
            }

            // Function to calculate Mean
            function calculateMean(data) {
                return data.reduce((sum, value) => sum + value, 0) / data.length;
            }

            // Function to calculate Correlation (R) and Regression (m, b)
            function calculateStats(xArray, yArray) {
                const n = xArray.length;

                // 1. Check for valid data
                if (n < 2) {
                    throw new Error("Data must contain at least two pairs of values.");
                }

                // 2. Calculate Means
                const meanX = calculateMean(xArray);
                const meanY = calculateMean(yArray);

                // 3. Calculate necessary sums for R and Regression
                let sumXMinusMeanXTimesYMinusMeanY = 0;
                let sumXMinusMeanXSquared = 0;
                let sumYMinusMeanYSquared = 0;

                for (let i = 0; i < n; i++) {
                    const xDiff = xArray[i] - meanX;
                    const yDiff = yArray[i] - meanY;

                    sumXMinusMeanXTimesYMinusMeanY += xDiff * yDiff;
                    sumXMinusMeanXSquared += xDiff * xDiff;
                    sumYMinusMeanYSquared += yDiff * yDiff;
                }

                // 4. Calculate Regression Slope (m)
                let m = 0;
                if (sumXMinusMeanXSquared !== 0) {
                    m = sumXMinusMeanXTimesYMinusMeanY / sumXMinusMeanXSquared;
                } else {
                    // Vertical line case (all X values are the same)
                    m = NaN;
                }

                // 5. Calculate Regression Intercept (b)
                let b = meanY - m * meanX;
                
                // 6. Calculate Correlation Coefficient (R)
                let r = 0;
                const denominatorR = Math.sqrt(sumXMinusMeanXSquared * sumYMinusMeanYSquared);
                if (denominatorR !== 0) {
                    r = sumXMinusMeanXTimesYMinusMeanY / denominatorR;
                } else {
                     r = 0;
                }

                return {
                    n,
                    r: r.toFixed(4),
                    m: m.toFixed(4),
                    b: b.toFixed(4)
                };
            }

            // Function to draw the plot
            function drawScatterPlotWithRegressionLine(xArray, yArray, m, b) {
                // Clear the canvas
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                const padding = 35;
                const width = canvas.width - 2 * padding;
                const height = canvas.height - 2 * padding;

                // --- Scaling Data ---
                const minX = Math.min(...xArray);
                const maxX = Math.max(...xArray);
                const minY = Math.min(...yArray);
                const maxY = Math.max(...yArray);

                const rangeX = maxX - minX;
                const rangeY = maxY - minY;

                // Simple check for constant data
                if (rangeX === 0 && rangeY === 0) {
                    ctx.fillStyle = '#ef4444'; // Red-600
                    ctx.font = '14px Inter';
                    ctx.fillText('플롯 불가: X, Y 데이터가 일정합니다. (Cannot plot: X and Y data are constant).', 10, canvas.height / 2);
                    return;
                }
                
                // Add a small buffer to ranges to prevent division by zero and for better visualization
                const bufferX = rangeX === 0 ? 1 : rangeX * 0.1;
                const bufferY = rangeY === 0 ? 1 : rangeY * 0.1;

                const plotMinX = minX - bufferX * 0.5;
                const plotMaxX = maxX + bufferX * 0.5;
                const plotMinY = minY - bufferY * 0.5;
                const plotMaxY = maxY + bufferY * 0.5;

                const plotRangeX = plotMaxX - plotMinX;
                const plotRangeY = plotMaxY - plotMinY;


                // Scale function for X
                const scaleX = (x) => padding + (x - plotMinX) / plotRangeX * width;
                // Scale function for Y (inverted for canvas coordinates)
                const scaleY = (y) => padding + height - (y - plotMinY) / plotRangeY * height;

                // --- Draw Axes ---
                ctx.strokeStyle = '#9ca3af'; // Gray-400
                ctx.lineWidth = 1;
                
                // X-Axis
                ctx.beginPath();
                ctx.moveTo(padding, padding + height);
                ctx.lineTo(padding + width, padding + height);
                ctx.stroke();

                // Y-Axis
                ctx.beginPath();
                ctx.moveTo(padding, padding + height);
                ctx.lineTo(padding, padding);
                ctx.stroke();
                
                // --- Draw Data Points (Scatter) ---
                ctx.fillStyle = '#4f46e5'; // Indigo-600
                for (let i = 0; i < xArray.length; i++) {
                    const x = scaleX(xArray[i]);
                    const y = scaleY(yArray[i]);

                    ctx.beginPath();
                    ctx.arc(x, y, 4, 0, Math.PI * 2, true); // Draw circle
                    ctx.fill();
                }

                // --- Draw Regression Line ---
                if (!isNaN(m) && isFinite(m)) {
                    ctx.strokeStyle = '#dc2626'; // Red-600
                    ctx.lineWidth = 2;
                    
                    // Calculate line endpoints based on plot min/max X values
                    const x1 = plotMinX;
                    const y1 = m * x1 + b;
                    const x2 = plotMaxX;
                    const y2 = m * x2 + b;
                    
                    // Scale endpoints for drawing
                    const scaledX1 = scaleX(x1);
                    const scaledY1 = scaleY(y1);
                    const scaledX2 = scaleX(x2);
                    const scaledY2 = scaleY(y2);

                    ctx.beginPath();
                    ctx.moveTo(scaledX1, scaledY1);
                    ctx.lineTo(scaledX2, scaledY2);
                    ctx.stroke();
                } else {
                    // Handle vertical line case (all X are the same)
                    ctx.fillStyle = '#ef4444'; 
                    ctx.font = '14px Inter';
                    ctx.fillText('회귀선 플롯 불가: X 값이 모두 같습니다. (Cannot draw regression line: X values are identical).', 10, canvas.height / 2);
                }
                
                // --- Draw Labels (min/max) ---
                ctx.fillStyle = '#374151'; // Gray-700
                ctx.font = '10px Inter';

                // X-axis min/max
                ctx.fillText(minX.toFixed(1), padding, padding + height + 15);
                ctx.fillText(maxX.toFixed(1), padding + width - 15, padding + height + 15);

                // Y-axis min/max
                ctx.fillText(minY.toFixed(1), 5, padding + height - 5);
                ctx.fillText(maxY.toFixed(1), 5, padding + 10);

                // ** NEW: Axis Title Labels **
                ctx.font = '12px Inter bold';
                // X Axis Label
                ctx.save();
                ctx.textAlign = 'center';
                ctx.fillText('X Value (Independent)', padding + width / 2, canvas.height - 5);
                ctx.restore();
                // Y Axis Label
                ctx.save();
                ctx.translate(15, canvas.height / 2);
                ctx.rotate(-Math.PI / 2);
                ctx.textAlign = 'center';
                ctx.fillText('Y Value (Dependent)', 0, 0);
                ctx.restore();
            }

            // New wrapper function to handle calculation and plotting
            function calculateAndPlot() {
                errorMsg.classList.add('hidden');
                // Don't hide resultsDiv on error, but ensure it's hidden before successful calculation
                if (xDataInput.value.length === 0 || yDataInput.value.length === 0) {
                     resultsDiv.classList.add('hidden');
                }


                const xData = parseData(xDataInput.value);
                const yData = parseData(yDataInput.value);
                
                // Clear canvas on new calculation
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                // Validation
                if (xData.length === 0 || yData.length === 0) {
                    errorMsg.textContent = "오류: X 및 Y 데이터셋 모두에 데이터를 입력해주세요. (Error: Please enter data for both X and Y datasets.)";
                    errorMsg.classList.remove('hidden');
                    return;
                }

                if (xData.length !== yData.length) {
                    errorMsg.textContent = "오류: X 및 Y 데이터셋의 데이터 포인트 수가 일치해야 합니다. (Error: X and Y datasets must have the same number of data points.)";
                    errorMsg.classList.remove('hidden');
                    return;
                }

                try {
                    const stats = calculateStats(xData, yData);

                    // Update Text Results
                    document.getElementById('nValue').textContent = stats.n;
                    document.getElementById('correlationR').textContent = stats.r;
                    document.getElementById('slopeM').textContent = stats.m;
                    document.getElementById('interceptB').textContent = stats.b;

                    // Draw Plot
                    drawScatterPlotWithRegressionLine(xData, yData, parseFloat(stats.m), parseFloat(stats.b));

                    resultsDiv.classList.remove('hidden');

                } catch (error) {
                    errorMsg.textContent = "계산 오류: " + error.message;
                    errorMsg.classList.remove('hidden');
                    resultsDiv.classList.add('hidden'); // Hide results on fatal error
                }
            }


            calculateBtn.addEventListener('click', calculateAndPlot);
            
            // ** 1. Initial calculation and plot on load with default data **
            calculateAndPlot(); 


            // =======================================================
            // 3. Downloadable Resources Logic
            // =======================================================
            const downloadCsvBtn = document.getElementById('downloadCsvBtn');
            const downloadPdfBtn = document.getElementById('downloadPdfBtn');

            // General download function using Blob
            function downloadFile(filename, content, mimeType) {
                const blob = new Blob([content], { type: mimeType });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = filename;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url); // Clean up
            }

            // CSV Download handler (Mock Data)
            downloadCsvBtn.addEventListener('click', () => {
                const csvContent =
                    "Country,Log_SIGI,Log_Victim_Ratio,Education_Rate,Gov_Effectiveness\n" +
                    "A,0.5,0.7,0.85,1.2\n" +
                    "B,1.2,0.4,0.60,0.5\n" +
                    "C,1.8,0.2,0.45,-0.1\n" +
                    "D,0.3,0.9,0.92,1.5\n" +
                    "E,2.1,0.1,0.30,-0.8"; // Mock data showing negative trend between SIGI and Reported Ratio
                downloadFile("SIGI_Analysis_Data.csv", csvContent, 'text/csv');
            });

            // PDF Download handler (Mock Content - Text)
            downloadPdfBtn.addEventListener('click', () => {
                const pdfMockContent = 
                    "Analysis Report: SIGI and Female Victimization Rates\n\n" +
                    "Conclusion:\n" +
                    "The analysis showed that a higher SIGI index (greater inequality) correlates with a lower reported female victimization ratio. This counter-intuitive finding is interpreted as evidence of widespread underreporting in highly unequal societies, not lower actual violence.\n\n" +
                    "Policy Focus: Increase Visibility (Education) and Strengthen Protection (Government Effectiveness).\n\n" +
                    "R-squared (Model C1): 0.257 | SIGI Coeff: -0.9805";
                
                // Note: Actual PDF generation requires external libraries (not allowed here).
                // This generates a text file with a .pdf extension as a placeholder mock.
                downloadFile("SIGI_Analysis_Report_Mock.pdf", pdfMockContent, 'text/plain'); 
            });
        });
    </script>
</body>
</html>
