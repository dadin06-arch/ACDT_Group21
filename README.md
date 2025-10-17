\<!DOCTYPE html>
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
    .sticky-context { top: 0; height: 100vh; pointer-events: none; z-index: 10; }
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
  <p class="text-sm font-semibold text-indigo-500 mb-2">Phase 2.1: Statistical Analysis</p>
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
          <td>0.322</td>
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
          <td class="text-red-700 font-medium">The relationship remains statistically significant.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Interpretation -->
  <div class="mt-6 p-4 border border-green-300 rounded-lg bg-green-50">
    <p class="text-lg font-bold text-green-700 mb-2">Key Finding (Model C2)</p>
    <p class="text-base text-gray-800">
      Higher education levels are associated with higher reported female victim ratios.
    </p>
  </div>
</section>

<!-- ===================== -->
<!-- STEP 5: MODEL Mod1 (GDP AS Moderator) -->
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
        src="https://github.com/user-attachments/assets/fe84909a-526c-43dd-a988-ac125c217cd0"
        alt="Regression plot for Model C3 (Government Effectiveness as a confounder)"
        width="689" height="547" loading="lazy" class="mx-auto rounded-lg"
      />
      <figcaption class="mt-3 text-sm text-gray-600">
        Regression Visualization: The graph itself is not log-transformed, but the values used are log-transformed.
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
          <td class="font-bold text-indigo-600">0.366</td>
          <td class="text-gray-600">Including Government Effectiveness raises explained variance to 36.6%.</td>
        </tr>
        <tr>
          <td class="font-semibold">Adj. R-squared</td>
          <td>0.322</td>
          <td class="text-gray-600">The model maintains a good fit after including two predictors.</td>
        </tr>
        <tr>
          <td class="font-semibold">F-statistic</td>
          <td>8.378</td>
          <td class="text-gray-600">The overall model is statistically significant.</td>
        </tr>
        <tr>
          <td class="font-semibold">Prob (F-statistic)</td>
          <td class="font-bold text-red-600">0.00134</td>
          <td class="text-red-700 font-medium">The relationship remains statistically significant.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Interpretation -->
  <div class="mt-6 p-4 border border-yellow-300 rounded-lg bg-yellow-50">
    <p class="text-lg font-bold text-yellow-700 mb-2">Key Finding (Model C3)</p>
    <p class="text-base text-gray-800">
      Higher education levels are associated with higher reported female victim ratios.
    </p>
  </div>
</section>

<!-- ===================== -->
<!-- MathJax for LaTeX rendering (optional; remove if not needed) -->
<!-- ===================== -->
<script>
  window.MathJax = { tex: { inlineMath: [['$', '$'], ['\\(', '\\)']] } };
</script>
<script async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

<!-- ===================== -->
<!-- STEP 5: MODEL Mod1 (GDP AS MODERATOR) -->
<!-- ===================== -->
<section id="step-5" class="data-step pt-16 border-l-4 border-indigo-500 pl-6 bg-white p-8 rounded-xl shadow-lg">
  <p class="text-sm font-semibold text-indigo-500 mb-2">Phase 2.4: Moderator Analysis</p>
  <h2 class="text-3xl font-bold text-gray-800 mb-6">Model Mod1: Moderator — GDP</h2>

  <!-- Model Mod1 Image and Text -->
  <div class="mb-10">
    <h3 class="text-2xl font-bold text-gray-800 mb-4">
      Model Mod1: $\log(\text{Victim Ratio}) \sim \log(\text{SIGI}) + \text{GDP} + \log(\text{SIGI}) \times \text{GDP}$
    </h3>

    <p class="text-lg mb-6 text-gray-700">
      Model: $\log(\text{Y}) = \beta_0 + \beta_1 \cdot \log(\text{SIGI}) + \beta_2 \cdot \text{GDP} + \beta_3 \cdot \big(\log(\text{SIGI}) \times \text{GDP}\big)$
      <br/>
      <span class="text-sm text-gray-500">
        (Tip: Consider mean-centering GDP to reduce multicollinearity before creating the interaction term.)
      </span>
    </p>

    <!-- Regression Plot Image -->
    <figure class="mb-8 border border-gray-200 rounded-xl p-4 shadow-inner text-center">
      <img
        src="https://github.com/user-attachments/assets/48ca929a-688f-4289-905c-510db88ba11b"
        alt="Regression plot for Model Mod1 (GDP as moderator with interaction)"
        width="689" height="547" loading="lazy" class="mx-auto rounded-lg"
      />
      <figcaption class="mt-3 text-sm text-gray-600">
        Regression Visualization: The graph itself is not log-transformed, but the values used are log-transformed.
      </figcaption>
    </figure>
  </div>

  <!-- OLS Regression Table - Summary Metrics ONLY -->
  <h4 class="text-xl font-semibold text-gray-800 mb-3 mt-8">OLS Regression Summary Metrics (Model Mod1)</h4>
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
          <td class="font-bold text-indigo-600">0.299</td>
          <td class="text-gray-600">The model explains about 29.9% of the variance in the victim ratio when including GDP and its interaction with SIGI.</td>
        </tr>
        <tr>
          <td class="font-semibold">Adj. R-squared</td>
          <td>0.224</td>
          <td class="text-gray-600">After adjusting for predictors, the model maintains moderate explanatory power.</td>
        </tr>
        <tr>
          <td class="font-semibold">F-statistic</td>
          <td>3.975</td>
          <td class="text-gray-600">Overall model significance.</td>
        </tr>
        <tr>
          <td class="font-semibold">Prob (F-statistic)</td>
          <td class="font-bold text-red-600">0.0177</td>
          <td class="text-red-700 font-medium">The overall model is significant at the 5% level (p < 0.05).</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Interpretation -->
  <div class="mt-6 p-4 border border-blue-300 rounded-lg bg-blue-50">
    <p class="text-lg font-bold text-blue-700 mb-2">Key Finding (Model Mod1)</p>
    <p class="text-base text-gray-800">
      The GDP × log(SIGI) interaction is not statistically significant, meaning GDP does not change the relationship between gender inequality and female victimization.
    </p>
  </div>
</section>


    <!-- STEP 4: CONCLUSION -->
    <section id="step-4" class="data-step pt-16 border-l-4 border-indigo-500 pl-6 bg-white p-8 rounded-xl shadow-lg">
      <p class="text-sm font-semibold text-indigo-500 mb-2">Phase 3: Conclusion</p>
      <h2 class="text-3xl font-bold text-gray-800 mb-6">Conclusion and Implications</h2>

      <div class="bg-indigo-100 p-6 rounded-lg mb-6">
        <p class="text-xl font-bold text-indigo-800">
          <strong>Conclusion:</strong> Across all models (C1–C3 and Mod1), gender inequality (SIGI) exhibits a statistically significant relationship with the female/male victim ratio, yet in the opposite direction of the conventional belief: nations with higher gender inequality tend to report lower female victimization ratios.
        </p>
      </div>

      <h3 class="text-2xl font-semibold text-gray-800 mb-3 border-b pb-2">Implications</h3>
      <div class="space-y-4 text-lg text-gray-700">
        <div class="flex items-start space-x-3">
          <span class="text-2xl text-green-600 font-bold">1.</span>
          <p>
            <strong>The Paradox of Gender Inequality:</strong> SIGI is associated with lower reported female victimization, suggesting underreporting rather than lower crime rates.
          </p>
        </div>
        <div class="flex items-start space-x-3">
          <span class="text-2xl text-green-600 font-bold">2.</span>
          <p>
            <strong>Institutional and Social Effects:</strong> Higher education improves reporting visibility, while stronger government effectiveness reduces actual risks by ensuring better protection systems.
          </p>
        </div>
        <div class="flex items-start space-x-3">
          <span class="text-2xl text-green-600 font-bold">2.</span>
          <p>
            <strong>Weak Economic Influence:</strong> GDP shows no significant moderation effect, implying that economic development alone does not guarantee gender safety.
          </p>
         </div>  
      </div>
    </section>

    <!-- 5. EMBEDDED STATISTICAL CALCULATOR -->
    <section class="mt-24 pt-16">
      <h2 class="text-3xl font-bold text-gray-800 mb-6">📊 Embedded Statistical Calculator</h2>
      <p class="text-gray-600 mb-8">
        Input two datasets (X and Y) to calculate the Correlation Coefficient (R) and the Linear Regression Model (Y = mX + b). Enter data points separated by commas (e.g., 10, 20, 30, 40).
      </p>

      <div class="bg-white p-8 rounded-xl shadow-2xl border border-gray-100">
        <!-- Inputs -->
        <div class="grid md:grid-cols-2 gap-6 mb-8">
          <div>
            <label for="xData" class="block text-sm font-medium text-gray-700 mb-2">X Dataset (Independent Variable: $\log(\text{SIGI})$)</label>
            <textarea id="xData" rows="4" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" placeholder="e.g., 2.0, 2.5, 3.0, 3.5, 4.0 (Higher SIGI means more inequality)"></textarea>
          </div>
          <div>
            <label for="yData" class="block text-sm font-medium text-gray-700 mb-2">Y Dataset (Dependent Variable: $\log(\text{Victim Ratio})$)</label>
            <textarea id="yData" rows="4" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" placeholder="e.g., 0.8, 0.4, 0.0, -0.4, -0.8 (Lower ratio means less reported victimization)"></textarea>
          </div>
        </div>

        <button id="calculateBtn" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md transition duration-200 transform hover:scale-[1.01]">
          Calculate &amp; Plot Statistics
        </button>

        <!-- Results -->
        <div id="results" class="mt-8 pt-6 border-t border-gray-200 hidden">
          <h3 class="text-2xl font-semibold text-gray-800 mb-4">Calculation Results and Visualization</h3>

          <div id="errorMsg" class="text-red-600 bg-red-50 p-3 rounded-lg border border-red-300 mb-4 hidden"></div>

          <div id="statResults" class="space-y-4 mb-8">
            <p class="text-lg"><strong>Sample Size (N):</strong> <span id="nValue" class="font-bold text-indigo-600"></span></p>
            <p class="text-lg"><strong>Correlation Coefficient (R):</strong> <span id="correlationR" class="font-bold text-indigo-600"></span> <span class="text-sm text-gray-500 ml-2">(R close to −1 indicates a strong negative linear relationship.)</span></p>
            <p class="text-lg"><strong>Regression Model:</strong> <code class="bg-gray-100 p-1 rounded font-mono text-xl text-green-700">Y = <span id="slopeM"></span>X + <span id="interceptB"></span></code> <span class="text-sm text-gray-500 ml-2">(Linear Model: Y = mX + b)</span></p>
          </div>

          <!-- Canvas -->
          <h4 class="text-xl font-semibold text-gray-700 mb-2">Regression Plot ($Y$ vs. $X$)</h4>
          <div class="border border-gray-300 rounded-lg overflow-hidden bg-white p-2">
            <canvas id="regressionCanvas" width="500" height="300" class="w-full"></canvas>
          </div>
        </div>
      </div>
    </section>
