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
                   Our analysis investigates the hypothesis that Countries with higher Social Institutions and Gender Index(SIGI) tend to have higher female victimization rates.
                </p>
                <ul class="list-disc list-inside space-y-2 ml-4">
                    <li>**Independent Variable (X): Social Institutions and Gender Index(SIGI)</li>
                    <li>**Dependent Variable (Y): Female victimization rate.</li>
                    <li>**Variables: Education Rate, Government Effectiveness, and GDP.</li>
                </ul>
            </div>
            
            <!-- DATA SOURCES -->
            <div class="mt-10 pt-4 border-t border-gray-200">
                <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <span class="text-indigo-600 mr-2">🔗</span> Data Sources
                </h3>
                <p class="text-base text-gray-600 mb-4">
                    Note: Both SIGI and the Victim Ratio were **Log-Transformed** to normalize distributions and ensure model robustness.
                </p>
                <div class="p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-inner">
                    <ul class="space-y-3 text-base">
                        <li class="flex flex-col sm:flex-row items-start sm:items-baseline">
                            <span class="text-gray-700 font-semibold w-64 shrink-0">Victims by Gender:</span>
                            <a href="https://dataunodc.un.org/" target="_blank" class="text-blue-600 hover:text-blue-800 hover:underline transition ml-0 sm:ml-4 mt-1 sm:mt-0">UNODC Data Portal</a>
                        </li>
                        <li class="flex flex-col sm:flex-row items-start sm:items-baseline">
                            <span class="text-gray-700 font-semibold w-64 shrink-0">Social Institutions and Gender Index (SIGI):</span>
                            <a href="https://www.oecd.org/en/data/dashboards/social-institutions-gender-index.html" target="_blank" class="text-blue-600 hover:text-blue-800 hover:underline transition ml-0 sm:ml-4 mt-1 sm:mt-0">OECD SIGI Dashboard</a>
                        </li>
                        <li class="flex flex-col sm:flex-row items-start sm:items-baseline">
                            <span class="text-gray-700 font-semibold w-64 shrink-0">GDP:</span>
                            <a href="https://www.worldbank.org/ext/en/home" target="_blank" class="text-blue-600 hover:text-blue-800 hover:underline transition ml-0 sm:ml-4 mt-1 sm:mt-0">OECD SIGI Dashboard</a>/span>
                        </li>
                        <li class="flex flex-col sm:flex-row items-start sm:items-baseline">
                            <span class="text-gray-700 font-semibold w-64 shrink-0">Education level:</span>
                            <a href="https://www.oecd.org/en/data/indicators.html?orderBy=mostRelevant&page=0" target="_blank" class="text-blue-600 hover:text-blue-800 hover:underline transition ml-0 sm:ml-4 mt-1 sm:mt-0">OECD SIGI Dashboard</a>/span>
                            </li>
                            <li class="flex flex-col sm:flex-row items-start sm:items-baseline">
                            <span class="text-gray-700 font-semibold w-64 shrink-0">Government Effectiveness:</span>
                            <a href="https://www.worldbank.org/ext/en/home " target="_blank" class="text-blue-600 hover:text-blue-800 hover:underline transition ml-0 sm:ml-4 mt-1 sm:mt-0">OECD SIGI Dashboard</a>/span>
                             </li>
                    </ul>
                </div>
            </div>
            <!-- END DATA SOURCES -->
        </section>

        <!-- STEP 2: ANALYSIS RESULTS (UPDATED) -->
        <section id="step-2" class="data-step pt-16 border-l-4 border-indigo-500 pl-6 bg-white p-8 rounded-xl shadow-lg">
            <p class="text-sm font-semibold text-indigo-500 mb-2">Phase 2: Statistical Analysis (OLS Regression)</p>
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Model C1: Simple Regression Finding</h2>

            <!-- Model C1 Image and Table (Updated) -->
            <div class="mb-10">
                <h3 class="text-2xl font-bold text-gray-800 mb-4">Model C1: Simple Regression (X = $\log(\text{SIGI})$)</h3>
                <p class="text-lg mb-6 text-gray-700">
                    Model: $\log(\text{Female/Male Victim Ratio}) = \beta_0 + \beta_1 \cdot \log(\text{SIGI})$
                </p>

                <!-- Regression Plot Image -->
                <div class="mb-8 border border-gray-200 rounded-xl p-4 shadow-inner text-center">
                    <h4 class="text-xl font-semibold text-gray-800 mb-4">Regression Visualization: $\log(\text{SIGI})$ vs $\log(\text{Victim Ratio})$</h4>
                    
                </div>
                
                <!-- OLS Regression Table - Summary Metrics ONLY -->
                <h4 class="text-xl font-semibold text-gray-800 mb-3 mt-8">OLS Regression Summary Metrics (Model C1)</h4>
                <div class="overflow-x-auto">
                    <table class="min-w-full bg-white rounded-lg shadow ols-table">
                        <thead>
                            <tr class="bg-indigo-50">
                                <th class="w-1/4">Metric</th>
                                <th class="w-1/4">Value</th>
                                <th class="w-1/2">Interpretation of Fit</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="font-semibold">R-squared ($R^2$)</td>
                                <td class="font-bold text-indigo-600">0.257</td>
                                <td class="text-gray-600">$R^2$ indicates that $\log(\text{SIGI})$ explains 25.7% of the variance in the Victim Ratio.</td>
                            </tr>
                            <tr>
                                <td class="font-semibold">Adj. R-squared (Adjusted $R^2$)</td>
                                <td>0.233</td>
                                <td class="text-gray-600">The model remains reasonably fit after adjusting for the number of variables (which is only one in this simple model).</td>
                            </tr>
                            <tr>
                                <td class="font-semibold">F-statistic</td>
                                <td>10.40</td>
                                <td class="text-gray-600">The overall model is statistically significant.</td>
                            </tr>
                            <tr>
                                <td class="font-semibold">Prob (F-statistic) ($p$-value)</td>
                                <td class="font-bold text-red-600">0.00304</td>
                                <td class="text-red-700 font-medium">This low $p$-value confirms that the relationship between SIGI and the Victim Ratio is statistically significant.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Interpretation -->
                <div class="mt-6 p-4 border border-red-300 rounded-lg bg-red-50">
                    <p class="text-lg font-bold text-red-700 mb-2">Key Finding (Model C1)</p>
                    <p class="text-base text-gray-800">
                        The coefficient for $\log(\text{SIGI})$ was found to be **significantly negative** (approx. -0.9805).
                    </p>
                    <p class="text-base text-gray-800 mt-2">
                        **Interpretation:** Contrary to the initial hypothesis, the simple regression suggests that countries with higher gender inequality (higher $\log(\text{SIGI})$) tend to have a **lower reported** Female/Male Victim Ratio. This counter-intuitive result points toward a major confounding factor, likely **underreporting**.
                    </p>
                </div>
            </div>

            <!-- Confounder Analysis (Remaining C2, C3) -->
            <div class="space-y-6">
                <h3 class="text-2xl font-bold text-gray-800 mb-3 border-t pt-6">Follow-up Analysis (Confounder Effects)</h3>
                
                <!-- C2 -->
                <div class="p-4 border border-gray-200 rounded-lg bg-yellow-50">
                    <p class="text-xl font-semibold text-gray-800">C2: Education Rate</p>
                    <p class="text-lg mt-2">**Result:** Education Rate was found to have a significant **Positive Coefficient** (+0.0284) in the multiple regression model.</p>
                    <p class="text-base text-gray-600">**Implication:** Higher education levels correlate with a **higher reported** ratio, suggesting that education improves public awareness and the likelihood of victims reporting crimes.</p>
                </div>
                
                <!-- C3 -->
                <div class="p-4 border border-gray-200 rounded-lg bg-green-50">
                    <p class="text-xl font-semibold text-gray-800">C3: Government Effectiveness</p>
                    <p class="text-lg mt-2">**Result:** Government Effectiveness showed a significant **Negative Coefficient** (-0.0173).</p>
                    <p class="text-base text-gray-600">**Implication:** Better governance likely strengthens institutional protection and reduces distrust in the legal system, potentially leading to a reduction in **actual** crime risk (or better mechanisms for prevention).</p>
                </div>
            </div>
        </section>

        <!-- STEP 3: KEY INSIGHT -->
        <section id="step-3" class="data-step pt-16 border-l-4 border-indigo-500 pl-6 bg-white p-8 rounded-xl shadow-lg">
            <p class="text-sm font-semibold text-indigo-500 mb-2">Phase 3: Key Insight</p>
            <h2 class="text-3xl font-bold text-gray-800 mb-6">The Paradox of Hidden Violence</h2>

            <p class="text-xl font-bold text-red-700 mb-6">
                "Gender inequality does not lower violence itself; it lowers the **Visibility** of violence."
            </p>

            <h3 class="text-2xl font-semibold text-gray-800 mb-3 border-b pb-2">The Underreporting Hypothesis</h3>
            <p class="text-lg mb-4 text-gray-700">
                The unexpectedly low reported victimization rates in high-SIGI countries are attributed to widespread **underreporting** stemming from systemic barriers and cultural norms in unequal societies.
            </p>

            <ul class="list-disc list-outside space-y-3 ml-6 text-lg text-gray-700">
                <li>**Fear and Stigma:** Victims fear social backlash and societal stigma associated with reporting, especially in patriarchal societies.</li>
                <li>**Distrust of the System:** Lack of confidence in law enforcement and the justice system, which may be rooted in gender-biased institutions.</li>
            </ul>
        </section>

        <!-- STEP 4: CONCLUSION -->
        <section id="step-4" class="data-step pt-16 border-l-4 border-indigo-500 pl-6 bg-white p-8 rounded-xl shadow-lg">
            <p class="text-sm font-semibold text-indigo-500 mb-2">Phase 4: Conclusion</p>
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Summary and Policy Implications</h2>

            <div class="bg-indigo-100 p-6 rounded-lg mb-6">
                <p class="text-xl font-bold text-indigo-800">
                    Conclusion: The reported Female Victimization Rate serves as a proxy for a society's **'Willingness and Ability to Report and Track'** crime, rather than the actual prevalence of violence.
                </p>
            </div>

            <h3 class="text-2xl font-semibold text-gray-800 mb-3 border-b pb-2">Policy Recommendations</h3>
            <div class="space-y-4 text-lg text-gray-700">
                <div class="flex items-start space-x-3">
                    <span class="text-2xl text-green-600 font-bold">1.</span>
                    <p>
                        **Increase Visibility:** Leverage the positive effect of education to promote public awareness and encourage reporting, breaking down social and cultural barriers that fuel stigma.
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


        <!-- 5. EMBEDDED STATISTICAL CALCULATOR -->
        <section class="mt-24 pt-16">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">📊 Embedded Statistical Calculator</h2>
            <p class="text-gray-600 mb-8">
                Input two datasets (X and Y) to calculate the Correlation Coefficient ($R$) and the Linear Regression Model ($Y = mX + b$). Enter data points separated by commas (e.g., 10, 20, 30, 40).
            </p>

            <div class="bg-white p-8 rounded-xl shadow-2xl border border-gray-100">
                <!-- Input Fields -->
                <div class="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                        <label for="xData" class="block text-sm font-medium text-gray-700 mb-2">X Dataset (Independent Variable: $\log(\text{SIGI})$)</label>
                        <!-- Default data set to reflect negative correlation found in SIGI analysis -->
                        <textarea id="xData" rows="4" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" placeholder="e.g., 2.0, 2.5, 3.0, 3.5, 4.0 (Higher SIGI means more inequality)"></textarea>
                    </div>
                    <div>
                        <label for="yData" class="block text-sm font-medium text-gray-700 mb-2">Y Dataset (Dependent Variable: $\log(\text{Victim Ratio})$)</label>
                        <!-- Default data set to reflect negative correlation found in SIGI analysis -->
                        <textarea id="yData" rows="4" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" placeholder="e.g., 0.8, 0.4, 0.0, -0.4, -0.8 (Lower ratio means less reported victimization)"></textarea>
                    </div>
                </div>

                <button id="calculateBtn" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md transition duration-200 transform hover:scale-[1.01]">
                    Calculate & Plot Statistics
                </button>

                <!-- Results Display -->
                <div id="results" class="mt-8 pt-6 border-t border-gray-200 hidden">
                    <h3 class="text-2xl font-semibold text-gray-800 mb-4">Calculation Results and Visualization</h3>

                    <div id="errorMsg" class="text-red-600 bg-red-50 p-3 rounded-lg border border-red-300 mb-4 hidden"></div>

                    <div id="statResults" class="space-y-4 mb-8">
                        <p class="text-lg">
                            **Sample Size (N):** <span id="nValue" class="font-bold text-indigo-600"></span>
                        </p>
                        <p class="text-lg">
                            **Correlation Coefficient (R):** <span id="correlationR" class="font-bold text-indigo-600"></span>
                            <span class="text-sm text-gray-500 ml-2">(R close to -1 indicates a strong negative linear relationship.)</span>
                        </p>
                        <p class="text-lg">
                            **Regression Model:** <code class="bg-gray-100 p-1 rounded font-mono text-xl text-green-700">Y = <span id="slopeM"></span>X + <span id="interceptB"></span></code>
                            <span class="text-sm text-gray-500 ml-2">(Linear Model: Y = mX + b)</span>
                        </p>
                    </div>

                    <!-- Canvas for the plot -->
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
                    }
                });
            }, {
                rootMargin: '0px 0px -20% 0px', 
                threshold: 0.1 
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

            // Set default mock data for negative correlation, matching SIGI analysis 
            xDataInput.value = "2.0, 2.3, 2.6, 2.9, 3.2, 3.5"; 
            yDataInput.value = "0.8, 0.4, 0.1, -0.2, -0.6, -1.0"; 

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
                    ctx.fillText('Cannot plot: X and Y data are constant.', 10, canvas.height / 2);
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
                    ctx.fillText('Cannot draw regression line: X values are identical.', 10, canvas.height / 2);
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

                // ** Axis Title Labels **
                ctx.font = '12px Inter bold';
                // X Axis Label
                ctx.save();
                ctx.textAlign = 'center';
                ctx.fillText('X Value (Independent: Log SIGI)', padding + width / 2, canvas.height - 5);
                ctx.restore();
                // Y Axis Label
                ctx.save();
                ctx.translate(15, canvas.height / 2);
                ctx.rotate(-Math.PI / 2);
                ctx.textAlign = 'center';
                ctx.fillText('Y Value (Dependent: Log Victim Ratio)', 0, 0);
                ctx.restore();
            }

            // New wrapper function to handle calculation and plotting
            function calculateAndPlot() {
                errorMsg.classList.add('hidden');
                
                const xData = parseData(xDataInput.value);
                const yData = parseData(yDataInput.value);
                
                // Clear canvas on new calculation
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                // Validation
                if (xData.length === 0 || yData.length === 0) {
                    errorMsg.textContent = "Error: Please enter data for both X and Y datasets.";
                    errorMsg.classList.remove('hidden');
                    resultsDiv.classList.add('hidden');
                    return;
                }

                if (xData.length !== yData.length) {
                    errorMsg.textContent = "Error: X and Y datasets must have the same number of data points.";
                    errorMsg.classList.remove('hidden');
                    resultsDiv.classList.add('hidden');
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
                    errorMsg.textContent = "Calculation Error: " + error.message;
                    errorMsg.classList.remove('hidden');
                    resultsDiv.classList.add('hidden'); // Hide results on fatal error
                }
            }


            calculateBtn.addEventListener('click', calculateAndPlot);
            
            // ** Initial calculation and plot on load with default data **
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
                    "A,2.0,0.8,0.85,1.2\n" +
                    "B,2.5,0.4,0.60,0.5\n" +
                    "C,3.0,0.1,0.45,-0.1\n" +
                    "D,3.5,-0.2,0.30,-0.8\n" +
                    "E,4.0,-0.6,0.15,-1.2"; // Mock data showing negative trend between SIGI and Reported Ratio
                downloadFile("SIGI_Analysis_Data.csv", csvContent, 'text/csv');
            });

            // PDF Download handler (Mock Content - Text)
            downloadPdfBtn.addEventListener('click', () => {
                const pdfMockContent = 
                    "Analysis Report: SIGI and Female Victimization Rates\n\n" +
                    "Conclusion:\n" +
                    "The analysis showed that a higher SIGI index (greater inequality) correlates with a lower reported female victimization ratio. This counter-intuitive finding is interpreted as evidence of widespread underreporting in highly unequal societies, not lower actual violence.\n\n" +
                    "Policy Focus: Increase Visibility (Education) and Strengthen Protection (Government Effectiveness).\n\n" +
                    "R-squared (Model C1): 0.257 | F-statistic: 10.40 (p=0.00304)";
                
                // This generates a text file with a .pdf extension as a placeholder mock.
                downloadFile("SIGI_Analysis_Report_Mock.pdf", pdfMockContent, 'text/plain'); 
            });
        });
    </script>
</body>
</html>
