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
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive OLS Regression Calculator for SIGI Models</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f0f4f8; /* Light blue-gray background */
        }
        textarea {
            resize: none;
        }
    </style>
    <!-- Math.js for Matrix Operations (MUST be loaded before script) -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/11.8.0/math.min.js"></script>
</head>
<body class="p-8 md:p-12">

    <!-- ===============================
    📊 Interactive Regression Calculator
    Based on C1–C3 Models
    ==================================-->
    <section id="regression-calculator" class="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-2xl border-l-4 border-[#0033A0]">
        <h2 class="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[#0033A0] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.5 9c-.1.08-.2.17-.3.25-.7.54-1.4.92-2.1.92s-1.4-.38-2.1-.92c-.1-.08-.2-.17-.3-.25m4.8 0c.2.16.4.32.6.48.9.7 1.8 1.1 2.7 1.1s1.8-.4 2.7-1.1c.2-.16.4-.32.6-.48m-9.6 0v2.5M12 9v4m-3.6-4.5h2.5M9.9 9.9c-.2.2-.4.4-.6.6" />
            </svg>
            Interactive OLS Regression Calculator
        </h2>
        <p class="text-gray-600 mb-6 border-b pb-4">
            Test how **SIGI** (log\_X), **Education Rate**, and **Government Effectiveness** affect the Female/Male Victim Ratio (log\_Y). Select a model (C1–C3), enter data arrays, and run the regression.
        </p>

        <!-- Model Selector -->
        <div class="mb-6">
            <label for="modelSelect" class="block text-sm font-semibold text-gray-700 mb-2">Select Analysis Model</label>
            <select id="modelSelect" class="border border-gray-300 p-3 rounded-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition">
                <option value="C1">C1: log_Y ~ log_X (SIGI Simple Regression)</option>
                <option value="C2">C2: log_Y ~ log_X + Education (Controlling for Education)</option>
                <option value="C3">C3: log_Y ~ log_X + Education + GovEffectiveness (Controlling for Education & Governance)</option>
            </select>
        </div>

        <!-- Error Message Display (Replaces Alert) -->
        <div id="errorMsg" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4 hidden" role="alert">
            <strong class="font-bold">Error:</strong>
            <span id="errorText" class="block sm:inline"></span>
        </div>

        <!-- Input Data -->
        <div class="grid md:grid-cols-2 gap-6 mb-6">
            <div>
                <label for="xInput" class="block text-sm font-semibold mb-2 text-gray-700">log(SIGI) [X]</label>
                <textarea id="xInput" rows="3" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#0033A0] focus:border-[#0033A0]" placeholder="e.g. 0.3, 0.5, 0.9, 1.2, 1.5"></textarea>
            </div>
            <div>
                <label for="yInput" class="block text-sm font-semibold mb-2 text-gray-700">log(Female/Male Victim Ratio) [Y]</label>
                <textarea id="yInput" rows="3" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#0033A0] focus:border-[#0033A0]" placeholder="e.g. 0.7, 0.5, 0.3, 0.1, -0.1"></textarea>
            </div>
        </div>

        <!-- Extra Inputs for C2/C3 -->
        <div id="extraInputs" class="hidden space-y-4 mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div>
                <label for="eduInput" class="block text-sm font-semibold mb-2 text-gray-700">Education Rate</label>
                <textarea id="eduInput" rows="2" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500" placeholder="e.g. 80, 85, 88, 90, 92 (Required for C2, C3)"></textarea>
            </div>
            <div id="govBox" class="hidden">
                <label for="govInput" class="block text-sm font-semibold mb-2 text-gray-700">Government Effectiveness</label>
                <textarea id="govInput" rows="2" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500" placeholder="e.g. -0.5, 0.1, 0.3, 0.5, 0.8 (Required for C3)"></textarea>
            </div>
        </div>

        <button id="runRegression"
            class="w-full bg-[#0033A0] text-white px-5 py-3 rounded-lg font-bold shadow-md hover:bg-blue-900 transition duration-200 transform hover:scale-[1.005]">
            Run Regression
        </button>

        <!-- Results Display -->
        <div id="regResult" class="mt-8 pt-6 border-t border-gray-200 hidden">
            <h3 class="text-2xl font-bold text-gray-800 mb-4">Regression Results</h3>
            <pre id="resultText" class="bg-gray-100 border border-gray-200 rounded-lg p-4 text-gray-800 text-sm overflow-x-auto whitespace-pre-wrap"></pre>

            <h4 class="text-xl font-semibold text-gray-700 mt-6 mb-2">Visualization (SIGI [X] vs. Ratio [Y])</h4>
            <div class="p-2 border border-gray-300 rounded-lg bg-white">
                 <!-- Canvas for plotting X vs Y (primary relationship) -->
                <canvas id="regCanvas" class="w-full" height="300" width="500"></canvas>
            </div>
            <p id="plotNote" class="text-xs text-gray-500 mt-2">
                *For models C2 and C3, the plot only visualizes the simple linear relationship between **SIGI and the Victim Ratio** (C1 baseline). Refer to the result text for the multi-variable coefficients.
            </p>
        </div>
    </section>

    <script>
        // === Utility Functions ===
        // Calculates the arithmetic mean of an array.
        const mean = arr => arr.reduce((a, b) => a + b, 0) / arr.length;
        
        // Helper to display errors instead of using alert()
        function displayError(message) {
            document.getElementById("errorText").textContent = message;
            document.getElementById("errorMsg").classList.remove("hidden");
            document.getElementById("regResult").classList.add("hidden");
        }

        // Helper to hide errors
        function hideError() {
            document.getElementById("errorMsg").classList.add("hidden");
        }

        // Parses comma-separated string input into a filtered number array.
        const parseInput = id => document.getElementById(id).value.split(',')
            .map(v => parseFloat(v.trim())).filter(v => !isNaN(v));

        // Simple Linear Regression (OLS for C1)
        function ols(X, Y) {
            const n = X.length;
            const meanX = mean(X), meanY = mean(Y);
            const cov = X.map((x, i) => (x - meanX) * (Y[i] - meanY)).reduce((a, b) => a + b);
            const varX = X.map(x => (x - meanX) ** 2).reduce((a, b) => a + b);
            
            if (varX === 0) {
                 return { error: "X values are identical, slope cannot be calculated." };
            }

            const b1 = cov / varX;
            const b0 = meanY - b1 * meanX;
            const yhat = X.map(x => b0 + b1 * x);
            const ssr = yhat.map((y, i) => (y - meanY) ** 2).reduce((a, b) => a + b);
            const sse = Y.map((y, i) => (y - yhat[i]) ** 2).reduce((a, b) => a + b);
            const r2 = ssr / (ssr + sse);
            
            return { b0, b1, r2, error: null };
        }
        
        // Multiple Regression (OLS using Matrix Math for C2, C3)
        function olsMulti(X_matrix, Y_vector) {
            try {
                // Check if mathjs is available
                if (typeof math === 'undefined' || !math.inv) {
                    return { error: "Matrix library (math.js) is not loaded or available." };
                }

                const Xt = math.transpose(X_matrix);
                const XtX = math.multiply(Xt, X_matrix);
                const XtX_inv = math.inv(XtX); // (X'X)^-1
                const XtY = math.multiply(Xt, Y_vector);
                const betas = math.multiply(XtX_inv, XtY); // (X'X)^-1 X'Y = Beta

                // R-squared Calculation
                const n = Y_vector.length;
                const meanY = mean(Y_vector);
                
                // Calculate Yhat (Predicted Y)
                const Yhat = Y_vector.map((_, i) => {
                    let y_hat_i = 0;
                    for (let j = 0; j < betas.length; j++) {
                        // Access matrix element correctly
                        y_hat_i += X_matrix[i][j] * betas.get([j]); // Use .get() for math.js Matrix object
                    }
                    return y_hat_i;
                });

                const ssr = Yhat.map(y => (y - meanY) ** 2).reduce((a, b) => a + b); // Sum of Squares Regression
                const sse = Y_vector.map((y, i) => (y - Yhat[i]) ** 2).reduce((a, b) => a + b); // Sum of Squares Error
                const r2 = ssr / (ssr + sse);

                return { betas: betas.toArray(), r2, error: null };

            } catch (e) {
                console.error("Matrix Calculation Error:", e);
                return { error: "Matrix calculation error occurred. Please check data for collinearity or singularity." };
            }
        }

        // Function to draw the plot
        function drawScatterPlot(X, Y, b0, b1) {
            const canvas = document.getElementById("regCanvas");
            const ctx = canvas.getContext("2d");
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const padding = 35;
            const width = canvas.width - 2 * padding;
            const height = canvas.height - 2 * padding;

            if (X.length < 2) return;

            // Determine data range
            const minX = Math.min(...X);
            const maxX = Math.max(...X);
            const minY = Math.min(...Y);
            const maxY = Math.max(...Y);

            const rangeX = maxX - minX;
            const rangeY = maxY - minY;

            // Scaling functions (with buffer)
            const bufferX = rangeX * 0.1 || 1;
            const bufferY = rangeY * 0.1 || 1;

            const plotMinX = minX - bufferX * 0.5;
            const plotMaxX = maxX + bufferX * 0.5;
            const plotMinY = minY - bufferY * 0.5;
            const plotMaxY = maxY + bufferY * 0.5;

            const plotRangeX = plotMaxX - plotMinX;
            const plotRangeY = plotMaxY - plotMinY;

            const sx = v => padding + (v - plotMinX) / plotRangeX * width;
            const sy = v => padding + height - (v - plotMinY) / plotRangeY * height;

            // 1. Draw Axes
            ctx.strokeStyle = '#9ca3af'; 
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(padding, padding + height); // X-Axis start
            ctx.lineTo(padding + width, padding + height); // X-Axis end
            ctx.moveTo(padding, padding); // Y-Axis start
            ctx.lineTo(padding, padding + height); // Y-Axis end
            ctx.stroke();

            // 2. Draw Data Points (Scatter)
            ctx.fillStyle = '#0033A0'; // Blue dot
            X.forEach((x, i) => {
                ctx.beginPath();
                ctx.arc(sx(x), sy(Y[i]), 4, 0, 2 * Math.PI);
                ctx.fill();
            });

            // 3. Draw Regression Line (using b0, b1 from C1)
            ctx.strokeStyle = '#DC2626'; // Red line
            ctx.lineWidth = 2;
            ctx.beginPath();
            
            const lineX1 = plotMinX;
            const lineY1 = b0 + b1 * lineX1;
            const lineX2 = plotMaxX;
            const lineY2 = b0 + b1 * lineX2;
            
            ctx.moveTo(sx(lineX1), sy(lineY1));
            ctx.lineTo(sx(lineX2), sy(lineY2));
            ctx.stroke();

            // 4. Draw Labels
            ctx.fillStyle = '#374151';
            ctx.font = '10px Inter';
            ctx.textAlign = 'center';
            ctx.fillText(minX.toFixed(2), sx(minX), padding + height + 15);
            ctx.fillText(maxX.toFixed(2), sx(maxX), padding + height + 15);
            ctx.textAlign = 'right';
            ctx.fillText(minY.toFixed(2), padding - 5, sy(minY));
            ctx.fillText(maxY.toFixed(2), padding - 5, sy(maxY));
            ctx.textAlign = 'left';
        }

        // =======================================================
        // EVENT LISTENERS
        // =======================================================
        
        // Set initial default data (Negative Correlation, matching SIGI analysis)
        document.getElementById("xInput").value = "0.3, 0.6, 0.9, 1.2, 1.5, 1.8"; 
        document.getElementById("yInput").value = "0.7, 0.5, 0.3, 0.1, -0.1, -0.3"; 
        document.getElementById("eduInput").value = "80, 85, 88, 90, 92, 95"; 
        document.getElementById("govInput").value = "-0.5, 0.1, 0.3, 0.5, 0.8, 1.0"; 

        // Model Selector Logic
        document.getElementById("modelSelect").addEventListener("change", e => {
            const val = e.target.value;
            const extra = document.getElementById("extraInputs");
            const govBox = document.getElementById("govBox");
            
            if (val === "C1") {
                extra.classList.add("hidden");
                govBox.classList.add("hidden");
            } else {
                extra.classList.remove("hidden");
                govBox.classList.toggle("hidden", val !== "C3");
            }
            hideError();
            document.getElementById("regResult").classList.add("hidden");
        });

        // Regression Button Click Handler
        document.getElementById("runRegression").addEventListener("click", () => {
            hideError();
            const model = document.getElementById("modelSelect").value;
            const X = parseInput("xInput");
            const Y = parseInput("yInput");

            // 1. Basic Data Validation
            if (X.length !== Y.length || X.length < 2) {
                displayError("The length of the X and Y data arrays must match, and at least 2 data points are required.");
                return;
            }

            let text = "";
            let c1Result = ols(X, Y); // C1 result is always calculated for plotting baseline

            if (c1Result.error) {
                displayError("C1 Simple Regression Calculation Error: " + c1Result.error);
                return;
            }
            
            let finalResult = c1Result; // Default to C1

            if (model === "C1") {
                // Use Simple OLS Result
                text = 
                    `*** Model: C1 (log_Y ~ log_X) ***\n` +
                    `Regression Equation: Y = ${c1Result.b1.toFixed(4)} * X + ${c1Result.b0.toFixed(4)}\n` +
                    `SIGI Coefficient (β₁): ${c1Result.b1.toFixed(4)} (A negative value suggests a decrease in victim ratio as SIGI increases)\n` +
                    `Intercept (β₀): ${c1Result.b0.toFixed(4)}\n` +
                    `R² (Explained Variance): ${c1Result.r2.toFixed(4)}\n\n` +
                    `Interpretation: For a one-unit increase in SIGI, the Victim Ratio changes linearly by β₁.`;
            } 
            else if (model === "C2") {
                const Edu = parseInput("eduInput");
                if (Edu.length !== X.length) {
                    displayError("For the C2 model, the length of the Education Rate data must match X and Y.");
                    return;
                }
                // Prepare X matrix for multiple regression: [1, SIGI, Education]
                const X2 = X.map((x, i) => [1, x, Edu[i]]); 
                finalResult = olsMulti(X2, Y);

                if (finalResult.error) { displayError("C2 Model Calculation Error: " + finalResult.error); return; }

                const [b0, b1, b2] = finalResult.betas;
                text = 
                    `*** Model: C2 (log_Y ~ log_X + Education) ***\n` +
                    `Regression Equation: Y = ${b0.toFixed(4)} + ${b1.toFixed(4)} * SIGI + ${b2.toFixed(4)} * Education\n\n` +
                    `SIGI Coefficient (β₁): ${b1.toFixed(4)}\n` +
                    `Education Coefficient (β₂): ${b2.toFixed(4)} (A positive value suggests education increases reporting)\n` +
                    `Intercept (β₀): ${b0.toFixed(4)}\n` +
                    `R² (Explained Variance): ${finalResult.r2.toFixed(4)}\n\n` +
                    `Interpretation: This model shows the individual effects of SIGI and Education when controlling for both.`;
            } 
            else if (model === "C3") {
                const Edu = parseInput("eduInput");
                const Gov = parseInput("govInput");
                if (Edu.length !== X.length || Gov.length !== X.length) {
                    displayError("For the C3 model, the lengths of Education Rate and Government Effectiveness data must match X and Y.");
                    return;
                }
                // Prepare X matrix for multiple regression: [1, SIGI, Education, GovEffectiveness]
                const X3 = X.map((x, i) => [1, x, Edu[i], Gov[i]]); 
                finalResult = olsMulti(X3, Y);

                if (finalResult.error) { displayError("C3 Model Calculation Error: " + finalResult.error); return; }

                const [b0, b1, b2, b3] = finalResult.betas;
                text = 
                    `*** Model: C3 (log_Y ~ log_X + Education + GovEff) ***\n` +
                    `Regression Equation: Y = ${b0.toFixed(4)} + ${b1.toFixed(4)} * SIGI + ${b2.toFixed(4)} * Education + ${b3.toFixed(4)} * GovEff\n\n` +
                    `SIGI Coefficient (β₁): ${b1.toFixed(4)}\n` +
                    `Education Coefficient (β₂): ${b2.toFixed(4)} (Suggests increased reporting)\n` +
                    `Gov. Effectiveness Coefficient (β₃): ${b3.toFixed(4)} (Suggests reduced actual risk or improved institutional protection)\n` +
                    `Intercept (β₀): ${b0.toFixed(4)}\n` +
                    `R² (Explained Variance): ${finalResult.r2.toFixed(4)}\n\n` +
                    `Interpretation: Shows the individual effect of each variable when controlling for the others in a multi-factor environment.`;
            }

            document.getElementById("regResult").classList.remove("hidden");
            document.getElementById("resultText").textContent = text;
            
            // Draw Plot only using C1 coefficients (for visualization baseline)
            drawScatterPlot(X, Y, c1Result.b0, c1Result.b1);
        });
        
        // Initial setup for C1 display and calculation on load
        document.getElementById("modelSelect").dispatchEvent(new Event('change')); 
        document.getElementById("runRegression").click(); 
    </script>
</body>
</html>


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
