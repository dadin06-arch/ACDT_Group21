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
  <p class="text-sm font-semibold text-indigo-500 mb-2">Phase 2: Statistical Analysis</p>
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
      Higher Government Effectiveness are associated with higher reported female victim ratios.
    </p>
  </div>
</section>


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
        src="https://via.placeholder.com/689x547.png?text=Model+Mod1+%28GDP+Moderator%29"
        src="https://github.com/user-attachments/assets/48ca929a-688f-4289-905c-510db88ba11b"
        alt="Regression plot for Model Mod1 (GDP as moderator with interaction)"
        width="689" height="547" loading="lazy" class="mx-auto rounded-lg"
      />
      <figcaption class="mt-3 text-sm text-gray-600">
        Regression Visualization: Regression Visualization: The graph itself is not log-transformed, but the values used are log-transformed.
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
          <td class="text-gray-600">The overall model is statistically significant.</td>
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

 <!-- STEP 4: CONCLUSION (CORRECTED SECTION) -->
    <section id="step-4" class="data-step pt-16 border-l-4 border-indigo-500 pl-6 bg-white p-8 rounded-xl shadow-lg mb-12">
      <p class="text-sm font-semibold text-indigo-500 mb-2">Phase 3: Conclusion</p>
      <h2 class="text-3xl font-bold text-gray-800 mb-6">Conclusion and Implications</h2>

      <div class="bg-indigo-100 p-6 rounded-lg mb-6">
        <p class="text-xl font-bold text-indigo-800">
          <strong>Conclusion:</strong> Across all models (C1–C3 and Mod1), gender inequality (SIGI) exhibits a statistically significant relationship with the female/male victim ratio, yet in the opposite direction of the conventional belief: nations with higher gender inequality tend to report lower female victimization ratios.
        </p>
      </div>

      <h3 class="text-2xl font-semibold text-gray-800 mb-3 border-b pb-2">Policy Recommendations</h3>
      <div class="space-y-4 text-lg text-gray-700">
        <!-- Recommendation 1 -->
        <div class="flex items-start space-x-3">
          <span class="text-2xl text-green-600 font-bold">1.</span>
          <p>
            <strong>The Paradox of Gender Inequality:</strong> SIGI is associated with lower reported female victimization, suggesting underreporting rather than lower crime rates.
          </p>
        </div>
        <!-- Recommendation 2 -->
        <div class="flex items-start space-x-3">
          <span class="text-2xl text-green-600 font-bold">2.</span>
          <p>
            <strong>Institutional and Social Effects:</strong> Higher education improves reporting visibility, while stronger government effectiveness reduces actual risks by ensuring better protection systems.
          </p>
        </div>
        <!-- Recommendation 3 (Fixed numbering and closed tag) -->
        <div class="flex items-start space-x-3">
          <span class="text-2xl text-green-600 font-bold">3.</span> <!-- Changed from 2. to 3. -->
          <p>
            <strong>Weak Economic Influence:</strong> GDP shows no significant moderation effect, implying that economic development alone does not guarantee gender safety.
          </p> <!-- <--- TAG WAS MISSING HERE! NOW FIXED. -->
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
            <p class="text-lg"><strong>Correlation Coefficient (R):</strong> <span id="correlationR" class="font-bold text-indigo-600"></span> <span class="text-sm text-gray-500 ml-2">(R close to $-1$ indicates a strong negative linear relationship.)</span></p>
            <p class="text-lg"><strong>Regression Model:</strong> <code class="bg-gray-100 p-1 rounded font-mono text-xl text-green-700">Y = <span id="slopeM"></span>X + <span id="interceptB"></span></code> <span class="text-sm text-gray-500 ml-2">(Linear Model: $Y = mX + b$)</span></p>
          </div>

          <!-- Canvas -->
          <h4 class="text-xl font-semibold text-gray-700 mb-2">Regression Plot ($Y$ vs. $X$)</h4>
          <div class="border border-gray-300 rounded-lg overflow-hidden bg-white p-2">
            <canvas id="regressionCanvas" width="500" height="300" class="w-full"></canvas>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. DOWNLOADABLE RESOURCES -->
    <section class="mt-24 pt-16">
      <h2 class="text-3xl font-bold text-gray-800 mb-6">📥 Downloadable Resources</h2>
      <p class="text-gray-600 mb-8">Download the raw mock data and the full analysis report for reproducibility and sharing.</p>

      <div class="flex flex-col sm:flex-row gap-4">
        <button id="downloadCsvBtn" class="flex-1 flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg shadow-lg transition duration-200 transform hover:scale-[1.01]">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
          Download Data (Mock CSV)
        </button>
        <button id="downloadPdfBtn" class="flex-1 flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg shadow-lg transition duration-200 transform hover:scale-[1.01]">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
          Export Report (PDF Mock)
        </button>
      </div>
    </section>

  </main>

  <!-- MathJax for LaTeX rendering -->
  <script>
    window.MathJax = { tex: { inlineMath: [['$', '$'], ['\\(', '\\)']] } };
  </script>
  <script async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

  <script>
    document.addEventListener('DOMContentLoaded', () => {
      // 1) Scrollytelling
      const steps = document.querySelectorAll('.data-step');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('is-visible'); });
      }, { rootMargin: '0px 0px -20% 0px', threshold: 0.1 });
      steps.forEach(step => observer.observe(step));

      // 2) Calculator + Plot
      const xDataInput = document.getElementById('xData');
      const yDataInput = document.getElementById('yData');
      const calculateBtn = document.getElementById('calculateBtn');
      const resultsDiv = document.getElementById('results');
      const errorMsg = document.getElementById('errorMsg');
      const canvas = document.getElementById('regressionCanvas');
      const ctx = canvas.getContext('2d');

      // Defaults (negative correlation)
      xDataInput.value = "2.0, 2.3, 2.6, 2.9, 3.2, 3.5";
      yDataInput.value = "0.8, 0.4, 0.1, -0.2, -0.6, -1.0";

      function parseData(s){ return s.split(',').map(v=>v.trim()).filter(v=>v.length>0).map(Number).filter(n=>!isNaN(n)); }
      function mean(a){ return a.reduce((s,v)=>s+v,0)/a.length; }

      function calculateStats(x, y){
        const n = x.length;
        if(n < 2) throw new Error('Data must contain at least two pairs of values.');
        const mx = mean(x), my = mean(y);
        let sxy=0,sxx=0,syy=0;
        for(let i=0;i<n;i++){ const xd=x[i]-mx, yd=y[i]-my; sxy+=xd*yd; sxx+=xd*xd; syy+=yd*yd; }
        const m = sxx!==0 ? sxy/sxx : NaN;
        const b = my - m*mx;
        const r = (sxx!==0 && syy!==0) ? (sxy/Math.sqrt(sxx*syy)) : 0;
        return { n, r:r.toFixed(4), m:m.toFixed(4), b:b.toFixed(4) };
      }

      function drawScatterPlotWithRegressionLine(x, y, m, b){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        const pad=35, w=canvas.width-2*pad, h=canvas.height-2*pad;
        const minX=Math.min(...x), maxX=Math.max(...x), minY=Math.min(...y), maxY=Math.max(...y);
        const rangeX=maxX-minX, rangeY=maxY-minY;
        if(rangeX===0 && rangeY===0){ ctx.fillStyle='#ef4444'; ctx.font='14px Inter'; ctx.fillText('Cannot plot: X and Y data are constant.', 10, canvas.height/2); return; }
        const bufX = rangeX===0 ? 1 : rangeX*0.1;
        const bufY = rangeY===0 ? 1 : rangeY*0.1;
        const pMinX=minX-bufX*0.5, pMaxX=maxX+bufX*0.5, pMinY=minY-bufY*0.5, pMaxY=maxY+bufY*0.5;
        const rX=pMaxX-pMinX, rY=pMaxY-pMinY;

        const sx = (x)=> pad + (x - pMinX)/rX * w;
        const sy = (y)=> pad + h - (y - pMinY)/rY * h;

        // Axes
        ctx.strokeStyle='#9ca3af'; ctx.lineWidth=1;
        ctx.beginPath(); ctx.moveTo(pad, pad+h); ctx.lineTo(pad+w, pad+h); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(pad, pad+h); ctx.lineTo(pad, pad); ctx.stroke();

        // Points
        ctx.fillStyle='#4f46e5';
        for(let i=0;i<x.length;i++){ ctx.beginPath(); ctx.arc(sx(x[i]), sy(y[i]), 4, 0, Math.PI*2, true); ctx.fill(); }

        // Regression line
        if(!isNaN(m) && isFinite(m)){
          ctx.strokeStyle='#dc2626'; ctx.lineWidth=2;
          const x1=pMinX, y1=m*x1+b, x2=pMaxX, y2=m*x2+b;
          ctx.beginPath(); ctx.moveTo(sx(x1), sy(y1)); ctx.lineTo(sx(x2), sy(y2)); ctx.stroke();
        } else {
          ctx.fillStyle='#ef4444'; ctx.font='14px Inter'; ctx.fillText('Cannot draw regression line: X values are identical.', 10, canvas.height/2);
        }

        // Tick labels
        ctx.fillStyle='#374151'; ctx.font='10px Inter';
        ctx.fillText(minX.toFixed(1), pad, pad+h+15);
        ctx.fillText(maxX.toFixed(1), pad+w-15, pad+h+15);
        ctx.fillText(minY.toFixed(1), 5, pad+h-5);
        ctx.fillText(maxY.toFixed(1), 5, pad+10);

        // Axis titles
        ctx.font='bold 12px Inter';
        ctx.save(); ctx.textAlign='center';
        ctx.fillText('X Value (Independent: Log SIGI)', pad + w/2, canvas.height - 5);
        ctx.restore();

        ctx.save(); ctx.translate(15, canvas.height/2); ctx.rotate(-Math.PI/2);
        ctx.textAlign='center'; ctx.fillText('Y Value (Dependent: Log Victim Ratio)', 0, 0);
        ctx.restore();
      }

      function calculateAndPlot(){
        errorMsg.classList.add('hidden');
        const x=parseData(xDataInput.value), y=parseData(yDataInput.value);
        ctx.clearRect(0,0,canvas.width,canvas.height);
        if(x.length===0 || y.length===0){ errorMsg.textContent='Error: Please enter data for both X and Y datasets.'; errorMsg.classList.remove('hidden'); resultsDiv.classList.add('hidden'); return; }
        if(x.length!==y.length){ errorMsg.textContent='Error: X and Y datasets must have the same number of data points.'; errorMsg.classList.remove('hidden'); resultsDiv.classList.add('hidden'); return; }
        try{
          const s=calculateStats(x,y);
          document.getElementById('nValue').textContent=s.n;
          document.getElementById('correlationR').textContent=s.r;
          document.getElementById('slopeM').textContent=s.m;
          document.getElementById('interceptB').textContent=s.b;
          drawScatterPlotWithRegressionLine(x,y,parseFloat(s.m),parseFloat(s.b));
          resultsDiv.classList.remove('hidden');
        }catch(e){
          errorMsg.textContent='Calculation Error: ' + e.message;
          errorMsg.classList.remove('hidden');
          resultsDiv.classList.add('hidden');
        }
      }

      calculateBtn.addEventListener('click', calculateAndPlot);
      calculateAndPlot(); // initial plot

    
      // 3) Downloads
      const downloadCsvBtn=document.getElementById('downloadCsvBtn');
      const downloadPdfBtn=document.getElementById('downloadPdfBtn');

      function downloadFile(filename, content, mime){ const blob=new Blob([content],{type:mime}); const url=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download=filename; document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url); }

      downloadCsvBtn.addEventListener('click', ()=>{
        const csv="Country,Log_SIGI,Log_Victim_Ratio,Education_Rate,Gov_Effectiveness\nA,2.0,0.8,0.85,1.2\nB,2.5,0.4,0.60,0.5\nC,3.0,0.1,0.45,-0.1\nD,3.5,-0.2,0.30,-0.8\nE,4.0,-0.6,0.15,-1.2";
        downloadFile("SIGI_Analysis_Data.csv", csv, "text/csv");
      });

      downloadPdfBtn.addEventListener('click', ()=>{
        const txt="Analysis Report: SIGI and Female Victimization Rates\n\nConclusion:\nThe analysis showed that a higher SIGI index (greater inequality) correlates with a lower reported female victimization ratio. This counter-intuitive finding is interpreted as evidence of widespread underreporting in highly unequal societies, not lower actual violence.\n\nPolicy Focus: Increase Visibility (Education) and Strengthen Protection (Government Effectiveness).\n\nR-squared (Model C1): 0.257 | F-statistic: 10.40 (p=0.00304)";
        downloadFile("SIGI_Analysis_Report_Mock.pdf", txt, "text/plain"); // mock text "pdf"
      });
    });
  </script>
</body>
</html>

