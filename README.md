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

    <!-- STEP 1: DATA DESCRIPTION & SOURCES -->
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
            <span class="text-indigo-600 mr-2" aria-hidden="true">🔗</span> Data Sources
          </h3>
          <div class="p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-inner">
            <ul class="space-y-3 text-base">
              <li class="flex flex-col sm:flex-row items-start sm:items-baseline">
                <span class="text-gray-700 font-semibold w-64 shrink-0">Victims by Gender:</span>
                <a href="https://dataunodc.un.org/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 hover:underline transition sm:ml-4 mt-1 sm:mt-0">UNODC Data Portal</a>
              </li>
              <li class="flex flex-col sm:flex-row items-start sm:items-baseline">
                <span class="text-gray-700 font-semibold w-64 shrink-0">Social Institutions and Gender Index (SIGI):</span>
                <a href="https://www.oecd.org/en/data/dashboards/social-institutions-gender-index.html" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 hover:underline transition sm:ml-4 mt-1 sm:mt-0">OECD</a>
              </li>
              <li class="flex flex-col sm:flex-row items-start sm:items-baseline">
                <span class="text-gray-700 font-semibold w-64 shrink-0">GDP:</span>
                <a href="https://data.worldbank.org/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 hover:underline transition sm:ml-4 mt-1 sm:mt-0">World Bank</a>
              </li>
              <li class="flex flex-col sm:flex-row items-start sm:items-baseline">
                <span class="text-gray-700 font-semibold w-64 shrink-0">Education Level:</span>
                <a href="https://www.oecd.org/en/data/indicators.html" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 hover:underline transition sm:ml-4 mt-1 sm:mt-0">OECD</a>
              </li>
              <li class="flex flex-col sm:flex-row items-start sm:items-baseline">
                <span class="text-gray-700 font-semibold w-64 shrink-0">Government Effectiveness:</span>
                <a href="https://info.worldbank.org/governance/wgi/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 hover:underline transition sm:ml-4 mt-1 sm:mt-0">World Bank (WGI)</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <!-- END DATA SOURCES -->
    </section>

    <!-- ===================== -->
    <!-- STEP 2: MODEL C1 (SIMPLE REGRESSION) -->
    <!-- ===================== -->
    <section id="step-2" class="data-step pt-16 border-l-4 border-indigo-500 pl-6 bg-white p-8 rounded-xl shadow-lg">
      <p class="text-sm font-semibold text-indigo-500 mb-2">Phase 2: Statistical Analysis</p>
      <h2 class="text-3xl font-bold text-gray-800 mb-6">Model C1: Simple Regression</h2>

      <!-- Model C1 Image and Text -->
      <div class="mb-10">
        <h3 class="text-2xl font-bold text-gray-800 mb-4">Model C1: Simple Regression</h3>
        <p class="text-lg mb-6 text-gray-700">
          Model: <span class="font-mono">log(Female/Male Victim Ratio) = β₀ + β₁ · log(SIGI)</span>
        </p>

        <!-- Regression Plot Image -->
        <figure class="mb-8 border border-gray-200 rounded-xl p-4 shadow-inner text-center">
          <img
            src="https://github.com/user-attachments/assets/1916fb2a-fe63-4a6b-ab5b-18578efea53d"
            alt="Scatter of log(SIGI) vs. log(Female/Male Victim Ratio) with fitted OLS line (Model C1)"
            width="689" height="547" loading="lazy" class="mx-auto rounded-lg"
          />
          <figcaption class="mt-3 text-sm text-gray-600">
            Regression Visualization: OLS fit on log–log scale (Model C1)
          </figcaption>
        </figure>
      </div>

      <!-- OLS Regression Table - Summary Metrics ONLY -->
      <h4 class="text-xl font-semibold text-gray-800 mb-3 mt-8">OLS Regression Summary Metrics (Model C1)</h4>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white rounded-lg shadow ols-table">
          <thead>
            <tr class="bg-indigo-50">
              <th class="w-1/4">Metric</th>
              <th class="w-1/4">Value</th>
              <th class="w-1/2">Interpretation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="font-semibold">R-squared</td>
              <td class="font-bold text-indigo-600">0.257</td>
              <td class="text-gray-600">SIGI explains about 25.7% of the variance in the victim ratio.</td>
            </tr>
            <tr>
              <td class="font-semibold">Adj. R-squared</td>
              <td>0.233</td>
              <td class="text-gray-600">The model maintains a reasonable fit even with one predictor.</td>
            </tr>
            <tr>
              <td class="font-semibold">F-statistic</td>
              <td>10.40</td>
              <td class="text-gray-600">The overall model is statistically significant.</td>
            </tr>
            <tr>
              <td class="font-semibold">Prob (F-statistic)</td>
              <td class="font-bold text-red-600">0.00304</td>
              <td class="text-red-700 font-medium">The relationship between SIGI and the victim ratio is statistically significant.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Interpretation -->
      <div class="mt-6 p-4 border border-red-300 rounded-lg bg-red-50">
        <p class="text-lg font-bold text-red-700 mb-2">Key Finding (Model C1)</p>
        <p class="text-base text-gray-800">
          Higher SIGI is significantly associated with a lower female victim ratio.
        </p>
      </div>
    </section>

    <!-- ===================== -->
    <!-- STEP 3: MODEL C2 (EDUCATION AS CONFOUNDER) -->
    <!-- ===================== -->
    <section id="step-3" class="data-step pt-16 border-l-4 border-indigo-500 pl-6 bg-white p-8 rounded-xl shadow-lg">
      <p class="text-sm font-semibold text-indigo-500 mb-2">Phase 2.2: Confounder Analysis</p>
      <h2 class="text-3xl font-bold text-gray-800 mb-6">Model C2: Confounder — Education</h2>

      <!-- Model C2 Image and Text -->
      <div class="mb-10">
        <h3 class="text-2xl font-bold text-gray-800 mb-4">
          Model C2: $\log(\text{Victim Ratio}) \sim \log(\text{SIGI}) + \text{Education Rate}$
        </h3>

        <p class="text-lg mb-6 text-gray-700">
          Model: $\log(\text{Y}) = \beta_0 + \beta_1 \cdot \log(\text{SIGI}) + \beta_2 \cdot \text{Education Rate}$
        </p>

        <!-- Regression Plot Image -->
        <figure class="mb-8 border border-gray-200 rounded-xl p-4 shadow-inner text-center">
          <img
            src="https://github.com/user-attachments/assets/168429df-5dbb-4c74-a074-ed2241527f7a"
            alt="Regression plot for Model C2 (Education as a confounder)"
            width="689" height="547" loading="lazy" class="mx-auto rounded-lg"
          />
          <figcaption class="mt-3 text-sm text-gray-600">
            Regression Visualization: The graph itself is not log-transformed, but the values used are log-transformed.
          </figcaption>
        </figure>
      </div>

      <!-- OLS Regression Table - Summary Metrics ONLY -->
      <h4 class="text-xl font-semibold text-gray-800 mb-3 mt-8">OLS Regression Summary Metrics (Model C2)</h4>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white rounded-lg shadow ols-table">
          <thead>
            <tr class="bg-indigo-50">
              <th class="w-1/4">Metric</th>
              <th class="w-1/4">Value</th>
              <th class="w-1/2">Interpretation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="font-semibold">R-squared</td>
              <td class="font-bold text-indigo-600">0.366</td>
              <td class="text-gray-600">Adding Education increases the explained variance to 36.6%.</td>
            </tr>
            <tr>
              <td class="font-semibold">Adj. R-squared</td>
              <td>0.326</td>
              <td class="text-gray-600">The model maintains a good fit after including two predictors.</td>
            </tr>
            <tr>
              <td class="font-semibold">F-statistic</td>
              <td>8.376</td>
              <td class="text-gray-600">The overall model is statistically significant.</td>
            </tr>
            <tr>
              <td class="font-semibold">Prob (F-statistic)</td>
              <td class="font-bold text-red-600">0.00135</td>
              <td class="text-red-700 font-medium">The relationship remains statistically significant ($p < 0.01$).</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Interpretation -->
      <div class="mt-6 p-4 border border-green-300 rounded-lg bg-green-50">
        <p class="text-lg font-bold text-green-700 mb-2">Key Finding (Model C2)</p>
        <p class="text-base text-gray-800">
          The coefficient for <strong>Education Rate</strong> is significantly positive (approx. +0.0284).
        </p>
        <p class="text-base text-gray-800 mt-2">
          <strong>Interpretation:</strong> Higher education levels are significantly associated with a higher <em>reported</em> Female/Male Victim Ratio, suggesting that education improves public awareness and reporting.
        </p>
      </div>
    </section>

    <!-- ===================== -->
    <!-- STEP 4: MODEL C3 (GOVERNMENT EFFECTIVENESS AS CONFOUNDER) -->
    <!-- ===================== -->
    <section id="step-4" class="data-step pt-16 border-l-4 border-indigo-500 pl-6 bg-white p-8 rounded-xl shadow-lg">
      <p class="text-sm font-semibold text-indigo-500 mb-2">Phase 2.3: Confounder Analysis</p>
      <h2 class="text-3xl font-bold text-gray-800 mb-6">Model C3: Confounder — Government Effectiveness</h2>

      <!-- Model C3 Image and Text -->
      <div class="mb-10">
        <h3 class="text-2xl font-bold text-gray-800 mb-4">
          Model C3: $\log(\text{Victim Ratio}) \sim \log(\text{SIGI}) + \text{Government Effectiveness}$
        </h3>

        <p class="text-lg mb-6 text-gray-700">
          Model: $\log(\text{Y}) = \beta_0 + \beta_1 \cdot \log(\text{SIGI}) + \beta_2 \cdot \text{Gov. Effectiveness}$
        </p>

        <!-- Regression Plot Image -->
        <figure class="mb-8 border border-gray-200 rounded-xl p-4 shadow-inner text-center">
          <img
            src="https://via.placeholder.com/689x547.png?text=Model+C3+Plot"
            alt="Regression plot for Model C3 (Government Effectiveness as a confounder)"
            width="689" height="547" loading="lazy" class="mx-auto rounded-lg"
          />
          <figcaption class="mt-3 text-sm text-gray-600">
            Regression Visualization: Gov. Effectiveness vs. log(Victim Ratio)
          </figcaption>
        </figure>
      </div>

      <!-- OLS Regression Table - Summary Metrics ONLY -->
      <h4 class="text-xl font-semibold text-gray-800 mb-3 mt-8">OLS Regression Summary Metrics (Model C3)</h4>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white rounded-lg shadow ols-table">
          <thead>
            <tr class="bg-indigo-50">
              <th class="w-1/4">Metric</th>
              <th class="w-1/4">Value</th>
              <th class="w-1/2">Interpretation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="font-semibold">R-squared</td>
              <td class="font-bold text-indigo-600">0.301</td>
              <td class="text-gray-600">Including Government Effectiveness raises explained variance to 30.1%.</td>
            </tr>
            <tr>
              <td class="font-semibold">Adj. R-squared</td>
              <td>0.274</td>
              <td class="text-gray-600">The model maintains a good fit after including two predictors.</td>
            </tr>
            <tr>
              <td class="font-semibold">F-statistic</td>
              <td>6.467</td>
              <td class="text-gray-600">The overall model is statistically significant.</td>
            </tr>
            <tr>
              <td class="font-semibold">Prob (F-statistic)</td>
              <td class="font-bold text-red-600">0.00521</td>
              <td class="text-red-700 font-medium">The relationship remains statistically significant ($p < 0.01$).</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Interpretation -->
      <div class="mt-6 p-4 border border-yellow-300 rounded-lg bg-yellow-50">
        <p class="text-lg font-bold text-yellow-700 mb-2">Key Finding (Model C3)</p>
        <p class="text-base text-gray-800">
          The coefficient for <strong>Government Effectiveness</strong> is reported as significantly negative (approx. −0.0173).
        </p>
        <p class="text-base text-gray-800 mt-2">
          <strong>Interpretation:</strong> Better governance likely strengthens institutional protection and reduces distrust in the legal system, potentially reducing actual crime risk or improving prevention mechanisms.
        </p>
      </div>
    </section>

  </main>

  <!-- MathJax for LaTeX rendering -->
  <script>
    window.MathJax = { tex: { inlineMath: [['$', '$'], ['\\(', '\\)']] } };
  </script>
  <script async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

  <!-- Reveal-on-scroll (IntersectionObserver) -->
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const steps = document.querySelectorAll('.data-step');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('is-visible'); });
      }, { rootMargin: '0px 0px -20% 0px', threshold: 0.1 });
      steps.forEach(step => observer.observe(step));
    });
  </script>
</body>
</html>
