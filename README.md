<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Do Countries with Higher SIGI Tend to Have Higher Female Victimization Rates?</title>
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
    body { font-family: 'Inter', sans-serif; background-color: #f8fafc; }
    .data-step { opacity: 0; transform: translateY(40px); transition: opacity .8s ease-out, transform .8s ease-out; transition-delay: .1s; }
    .data-step.is-visible { opacity: 1; transform: translateY(0); }
    #regressionCanvas { width: 100%; height: 300px; }
  </style>
</head>
<body class="antialiased">

  <!-- Header -->
  <header class="bg-indigo-700 text-white shadow-xl py-8 mb-12 sticky top-0 z-50">
    <div class="max-w-5xl mx-auto px-6">
      <h1 class="text-4xl font-extrabold mb-2">Revisiting the Conventional Wisdom: SIGI and Victimization</h1>
      <p class="text-indigo-200 text-xl font-light">An OLS Regression Analysis on Gender Inequality and Reported Female Victimization Rates</p>
    </div>
  </header>

  <main class="max-w-5xl mx-auto px-6 pb-20 space-y-20">

    <!-- STEP 1: DATA DESCRIPTION -->
    <section id="step-1" class="data-step pt-16 border-l-4 border-indigo-500 pl-6 bg-white p-8 rounded-xl shadow-lg">
      <p class="text-sm font-semibold text-indigo-500 mb-2">Phase 1: Data Description</p>
      <h2 class="text-3xl font-bold text-gray-800 mb-6">Challenging the Initial Hypothesis</h2>

      <div class="space-y-4 text-lg text-gray-700 mb-10">
        <p>
          Our analysis investigates the hypothesis that countries with higher Social Institutions and Gender Index (SIGI) tend to have higher female victimization rates.
        </p>
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li>Independent Variable (X): Social Institutions and Gender Index (SIGI)</li>
          <li>Dependent Variable (Y): Female victimization rate</li>
          <li>Other Variables: Education Rate, Government Effectiveness, and GDP</li>
        </ul>
      </div>

      <!-- DATA SOURCES -->
      <section aria-labelledby="data-sources">
        <div class="mt-10 pt-4 border-t border-gray-200">
          <h3 id="data-sources" class="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="text-indigo-600 mr-2">🔗</span> Data Sources
          </h3>
          <div class="p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-inner">
            <ul class="space-y-3 text-base">
              <li><span class="font-semibold">Victims by Gender:</span> <a href="https://dataunodc.un.org/" target="_blank" class="text-blue-600 hover:underline">UNODC Data Portal</a></li>
              <li><span class="font-semibold">SIGI:</span> <a href="https://www.oecd.org/en/data/dashboards/social-institutions-gender-index.html" target="_blank" class="text-blue-600 hover:underline">OECD</a></li>
              <li><span class="font-semibold">GDP:</span> <a href="https://data.worldbank.org/" target="_blank" class="text-blue-600 hover:underline">World Bank</a></li>
              <li><span class="font-semibold">Education Level:</span> <a href="https://www.oecd.org/en/data/indicators.html" target="_blank" class="text-blue-600 hover:underline">OECD</a></li>
              <li><span class="font-semibold">Government Effectiveness:</span> <a href="https://info.worldbank.org/governance/wgi/" target="_blank" class="text-blue-600 hover:underline">World Bank (WGI)</a></li>
            </ul>
          </div>
        </div>
      </section>
    </section>

<!-- ===================== -->
<!-- STEP 2: MODEL C1 -->
<!-- ===================== -->
<section id="step-2" class="data-step pt-16 border-l-4 border-indigo-500 pl-6 bg-white p-8 rounded-xl shadow-lg">
  <p class="text-sm font-semibold text-indigo-500 mb-2">Phase 2.1: Statistical Analysis</p>
  <h2 class="text-3xl font-bold text-gray-800 mb-6">Model C1: Simple Regression</h2>

  <h3 class="text-2xl font-bold text-gray-800 mb-4">Model C1: Simple Regression</h3>
  <p class="text-lg mb-6 text-gray-700">
    Model: <span class="font-mono">log(Female/Male Victim Ratio) = β₀ + β₁ · log(SIGI)</span>
  </p>

  <figure class="mb-8 border border-gray-200 rounded-xl p-4 shadow-inner text-center">
    <img src="https://github.com/user-attachments/assets/1916fb2a-fe63-4a6b-ab5b-18578efea53d" alt="Scatter of log(SIGI) vs log(Victim Ratio)" width="689" height="547" class="mx-auto rounded-lg"/>
    <figcaption class="mt-3 text-sm text-gray-600">Regression Visualization: OLS fit on log–log scale (Model C1)</figcaption>
  </figure>

  <table class="min-w-full bg-white rounded-lg shadow">
    <thead><tr class="bg-indigo-50"><th>Metric</th><th>Value</th><th>Interpretation</th></tr></thead>
    <tbody>
      <tr><td class="font-semibold">R-squared</td><td class="font-bold text-indigo-600">0.257</td><td>SIGI explains about 25.7% of the variance in the victim ratio.</td></tr>
      <tr><td class="font-semibold">Adj. R-squared</td><td>0.233</td><td>The model maintains a reasonable fit even with one predictor.</td></tr>
      <tr><td class="font-semibold">F-statistic</td><td>10.40</td><td>The overall model is statistically significant.</td></tr>
      <tr><td class="font-semibold">Prob (F-statistic)</td><td class="font-bold text-red-600">0.00304</td><td class="text-red-700 font-medium">The relationship is statistically significant.</td></tr>
    </tbody>
  </table>

  <div class="mt-6 p-4 border border-red-300 rounded-lg bg-red-50">
    <p class="text-lg font-bold text-red-700 mb-2">Key Finding (Model C1)</p>
    <p>Higher SIGI is significantly associated with a lower female victim ratio.</p>
  </div>
</section>

<!-- ===================== -->
<!-- STEP 3: MODEL C2 -->
<!-- ===================== -->
<section id="step-3" class="data-step pt-16 border-l-4 border-indigo-500 pl-6 bg-white p-8 rounded-xl shadow-lg">
  <p class="text-sm font-semibold text-indigo-500 mb-2">Phase 2.2: Confounder Analysis</p>
  <h2 class="text-3xl font-bold text-gray-800 mb-6">Model C2: Confounder — Education</h2>

  <figure class="mb-8 border border-gray-200 rounded-xl p-4 shadow-inner text-center">
    <img src="https://github.com/user-attachments/assets/168429df-5dbb-4c74-a074-ed2241527f7a" width="689" height="547" class="mx-auto rounded-lg"/>
    <figcaption class="mt-3 text-sm text-gray-600">Regression Visualization: values are log-transformed.</figcaption>
  </figure>

  <table class="min-w-full bg-white rounded-lg shadow">
    <thead><tr class="bg-indigo-50"><th>Metric</th><th>Value</th><th>Interpretation</th></tr></thead>
    <tbody>
      <tr><td class="font-semibold">R-squared</td><td class="font-bold text-indigo-600">0.366</td><td>Adding Education increases the explained variance to 36.6%.</td></tr>
      <tr><td class="font-semibold">Adj. R-squared</td><td>0.322</td><td>Good fit after including two predictors.</td></tr>
      <tr><td class="font-semibold">F-statistic</td><td>8.376</td><td>The overall model is statistically significant.</td></tr>
      <tr><td class="font-semibold">Prob (F-statistic)</td><td class="font-bold text-red-600">0.00135</td><td class="text-red-700 font-medium">Statistically significant relationship.</td></tr>
    </tbody>
  </table>

  <div class="mt-6 p-4 border border-green-300 rounded-lg bg-green-50">
    <p class="text-lg font-bold text-green-700 mb-2">Key Finding (Model C2)</p>
    <p>Higher education levels are associated with higher reported female victim ratios.</p>
  </div>
</section>

<!-- ===================== -->
<!-- STEP 4: MODEL C3 -->
<!-- ===================== -->
<section id="step-4" class="data-step pt-16 border-l-4 border-indigo-500 pl-6 bg-white p-8 rounded-xl shadow-lg">
  <p class="text-sm font-semibold text-indigo-500 mb-2">Phase 2.3: Confounder Analysis</p>
  <h2 class="text-3xl font-bold text-gray-800 mb-6">Model C3: Confounder — Government Effectiveness</h2>

  <figure class="mb-8 border border-gray-200 rounded-xl p-4 shadow-inner text-center">
    <img src="https://github.com/user-attachments/assets/fe84909a-526c-43dd-a988-ac125c217cd0" width="689" height="547" class="mx-auto rounded-lg"/>
    <figcaption class="mt-3 text-sm text-gray-600">Regression Visualization: values are log-transformed.</figcaption>
  </figure>

  <table class="min-w-full bg-white rounded-lg shadow">
    <thead><tr class="bg-indigo-50"><th>Metric</th><th>Value</th><th>Interpretation</th></tr></thead>
    <tbody>
      <tr><td class="font-semibold">R-squared</td><td class="font-bold text-indigo-600">0.366</td><td>Including Government Effectiveness raises explained variance to 36.6%.</td></tr>
      <tr><td class="font-semibold">Adj. R-squared</td><td>0.322</td><td>Good model fit.</td></tr>
      <tr><td class="font-semibold">F-statistic</td><td>8.378</td><td>The model is statistically significant.</td></tr>
      <tr><td class="font-semibold">Prob (F-statistic)</td><td class="font-bold text-red-600">0.00134</td><td class="text-red-700 font-medium">Statistically significant.</td></tr>
    </tbody>
  </table>

  <div class="mt-6 p-4 border border-yellow-300 rounded-lg bg-yellow-50">
    <p class="text-lg font-bold text-yellow-700 mb-2">Key Finding (Model C3)</p>
    <p>Higher government effectiveness is associated with higher reported female victim ratios.</p>
  </div>
</section>

<!-- ===================== -->
<!-- STEP 5: MODEL Mod1 -->
<!-- ===================== -->
<section id="step-5" class="data-step pt-16 border-l-4 border-indigo-500 pl-6 bg-white p-8 rounded-xl shadow-lg">
  <p class="text-sm font-semibold text-indigo-500 mb-2">Phase 2.4: Moderator Analysis</p>
  <h2 class="text-3xl font-bold text-gray-800 mb-6">Model Mod1: Moderator — GDP</h2>

  <figure class="mb-8 border border-gray-200 rounded-xl p-4 shadow-inner text-center">
    <img src="https://github.com/user-attachments/assets/48ca929a-688f-4289-905c-510db88ba11b" width="689" height="547" class="mx-auto rounded-lg"/>
    <figcaption class="mt-3 text-sm text-gray-600">Regression Visualization: values are log-transformed.</figcaption>
  </figure>

  <table class="min-w-full bg-white rounded-lg shadow">
    <thead><tr class="bg-indigo-50"><th>Metric</th><th>Value</th><th>Interpretation</th></tr></thead>
    <tbody>
      <tr><td class="font-semibold">R-squared</td><td class="font-bold text-indigo-600">0.299</td><td>The model explains about 29.9% of variance.</td></tr>
      <tr><td class="font-semibold">Adj. R-squared</td><td>0.224</td><td>Moderate explanatory power after adjustment.</td></tr>
      <tr><td class="font-semibold">F-statistic</td><td>3.975</td><td>Overall model significance.</td></tr>
      <tr><td class="font-semibold">Prob (F-statistic)</td><td class="font-bold text-red-600">0.0177</td><td class="text-red-700 font-medium">Significant at 5% level (p < 0.05).</td></tr>
    </tbody>
  </table>

  <div class="mt-6 p-4 border border-blue-300 rounded-lg bg-blue-50">
    <p class="text-lg font-bold text-blue-700 mb-2">Key Finding (Model Mod1)</p>
    <p>The GDP × log(SIGI) interaction is not statistically significant, meaning GDP does not alter the relationship between gender inequality and female victimization.</p>
  </div>
</section>

<!-- ===================== -->
<!-- STEP 6: CONCLUSION -->
<!-- ===================== -->
<section id="step-6" class="data-step pt-16 border-l-4 border-indigo-500 pl-6 bg-white p-8 rounded-xl shadow-lg">
  <p class="text-sm font-semibold text-indigo-500 mb-2">Phase 3: Conclusion</p>
  <h2 class="text-3xl font-bold text-gray-800 mb-6">Conclusion and Implications</h2>

  <div class="bg-indigo-100 p-6 rounded-lg mb-6">
    <p class="text-xl font-bold text-indigo-800">
      <strong>Conclusion:</strong> Across all models (C1–C3 and Mod1), gender inequality (SIGI) exhibits a statistically significant relationship with the female/male victim ratio, yet in the opposite direction of the conventional belief.
    </p>
  </div>

  <h3 class="text-2xl font-semibold text-gray-800 mb-3 border-b pb-2">Implications</h3>
  <div class="space-y-4 text-lg text-gray-700">
    <div class="flex items-start space-x-3">
      <span class="text-2xl text-green-600 font-bold">1.</span>
      <p><strong>The Paradox of Gender Inequality:</strong> SIGI is associated with lower reported female victimization, suggesting underreporting rather than lower crime rates.</p>
    </div>
    <div class="flex items-start space-x-3">
      <span class="text-2xl text-green-600 font-bold">2.</span>
      <p><strong>Institutional and Social Effects:</strong> Higher education improves reporting visibility, while stronger government effectiveness reduces actual risks by ensuring better protection systems.</p>
    </div>
    <div class="flex items-start space-x-3">
      <span class="text-2xl text-green-600 font-bold">3.</span>
      <p><strong>Weak Economic Influence:</strong> GDP shows no significant moderation effect, implying that economic development alone does not guarantee gender safety.</p>
    </div>
  </div>
</section>

<!-- ===================== -->
<!-- DOWNLOADABLE RESOURCES -->
<!-- ===================== -->
<section class="mt-24 pt-16">
  <h2 class="text-3xl font-bold text-gray-800 mb-6">📥 Downloadable Resources</h2>
  <p class="text-gray-600 mb-8">Download the dataset and report used in this analysis.</p>

  <div class="flex flex-col sm:flex-row gap-4">
    <a href="Group21.csv" download="Group21.csv" class="flex-1 flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg shadow-lg">
      Download Dataset (Group21.csv)
    </a>
    <a href="Groups 21 ACDT summary ..pdf" download="Groups 21 ACDT summary ..pdf" class="flex-1 flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg shadow-lg">
      Download Full Report (Groups 21 ACDT summary.pdf)
    </a>
  </div>
</section>

  </main>

  <!-- MathJax -->
  <script>
    window.MathJax = { tex: { inlineMath: [['$', '$'], ['\\(', '\\)
