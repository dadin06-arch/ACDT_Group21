// script.js - AI StyleMate Logic (Final Version with Dual Mode and Low Confidence Guidance)

// ----------------------------------------------------
// 1. MODEL PATHS, CONSTANTS & DATA DEFINITION
// ----------------------------------------------------
const URL_MODEL_1 = "./models/model_1/"; 
const URL_MODEL_2 = "./models/model_2/"; 

// 💡 신뢰도 임계값: 가장 높은 확률이 60% (0.60) 미만일 경우 경고 메시지 출력
const CONFIDENCE_THRESHOLD = 0.60; 

let model1, model2, webcam;
let labelContainer = document.getElementById("label-container");
let currentModel = 0; 
let requestID; // window.requestAnimationFrame의 ID 저장용
let isRunning = false; // 웹캠 실시간 분석 상태 (Webcam Mode 전용)
let isInitialized = false; // 모델 및 웹캠 초기화 여부
let currentSource = 'webcam'; // 현재 입력 소스: 'webcam' 또는 'image'


// ===============================================
// 2. Event Listeners and Setup
// ===============================================

document.addEventListener("DOMContentLoaded", () => {
    // 버튼 연결
    document.getElementById("start-button").addEventListener("click", toggleAnalysis);
    
    // 모델 전환 버튼 연결 (handleModelChange 함수 사용)
    document.getElementById("model1-btn").addEventListener("click", () => handleModelChange(1));
    document.getElementById("model2-btn").addEventListener("click", () => handleModelChange(2));
    
    // 모드 전환 버튼 연결
    document.getElementById("mode-webcam").addEventListener("click", () => switchMode('webcam'));
    document.getElementById("mode-upload").addEventListener("click", () => switchMode('image'));

    // 이미지 업로드 및 처리 버튼 연결
    document.getElementById("image-upload").addEventListener("change", handleImageUpload);
    document.getElementById("process-image-btn").addEventListener("click", processUploadedImage);
    
    // 초기 모드 설정
    switchMode('webcam'); 
});


// ===============================================
// 3. Mode Switching Logic
// ===============================================

function switchMode(mode) {
    if (currentSource === mode) return;

    if (isRunning) {
        toggleAnalysis(); 
    }
    
    const webcamContainer = document.getElementById("webcam-container");
    webcamContainer.innerHTML = '';
    
    currentSource = mode;
    
    // 활성화된 모드 버튼 스타일 변경
    document.getElementById("mode-webcam").classList.remove('active');
    document.getElementById("mode-upload").classList.remove('active');
    
    const webcamControls = document.getElementById("webcam-controls");
    const uploadControls = document.getElementById("upload-controls");

    if (mode === 'webcam') {
        document.getElementById("mode-webcam").classList.add('active');
        webcamControls.style.display = 'block';
        uploadControls.style.display = 'none';
        
        if(webcam && webcam.canvas) {
            webcamContainer.appendChild(webcam.canvas);
        } else {
            webcamContainer.innerHTML = '<p id="initial-message">분석을 시작하려면 "분석 시작" 버튼을 클릭하세요.</p>';
        }

    } else if (mode === 'image') {
        document.getElementById("mode-upload").classList.add('active');
        webcamControls.style.display = 'none';
        uploadControls.style.display = 'block';
        webcamContainer.innerHTML = '<p id="initial-message">분석할 이미지를 업로드해 주세요.</p>';
        
        if(webcam) {
            webcam.pause();
        }
    }
    
    // 모드 전환 시 결과 영역 초기화
    labelContainer.innerHTML = (mode === 'webcam' && isRunning) ? '실시간 분석 중...' : '분석 대기 중...';
}

function handleImageUpload(event) {
    const file = event.target.files[0];
    const processBtn = document.getElementById("process-image-btn");
    const webcamContainer = document.getElementById("webcam-container");

    if (file && file.type.startsWith('image/')) {
        // 이미지 미리보기를 위한 FileReader 사용
        const reader = new FileReader();
        reader.onload = (e) => {
            webcamContainer.innerHTML = `<img id="uploaded-img" src="${e.target.result}" alt="Uploaded Image" style="width: 100%; height: auto; border-radius: 10px;">`;
            processBtn.disabled = false;
        };
        reader.readAsDataURL(file);
    } else {
        // 💡 유효하지 않은 파일 오류 처리
        webcamContainer.innerHTML = `
            <div class="error-message">
                <i class="fas fa-times-circle"></i>
                <h3>🚫 파일 오류: 유효하지 않은 파일입니다.</h3>
                <p>이미지 파일(JPG, PNG 등)만 업로드할 수 있습니다.</p>
            </div>
        `;
        processBtn.disabled = true;
    }
}

function processUploadedImage() {
    if (currentModel === 0) {
        labelContainer.innerHTML = `<div class="error-message"><h3>❌ 모델 오류: 분석을 시작하기 전에 모델을 선택해 주세요.</h3></div>`;
        return;
    }
    const uploadedImg = document.getElementById('uploaded-img');
    if (uploadedImg) {
        labelContainer.innerHTML = '이미지 분석 중... 잠시만 기다려 주세요.';
        predict(uploadedImg);
    } else {
        labelContainer.innerHTML = `<div class="error-message"><h3>❌ 오류: 업로드된 이미지를 찾을 수 없습니다. 파일을 다시 선택해 주세요.</h3></div>`;
    }
}


// ===============================================
// 4. Initialization, Webcam Loop Control (Enhanced Error Handling)
// ===============================================

async function init() {
    if (isInitialized) return;

    try {
        // 모델 로드
        model1 = await tmImage.load(URL_MODEL_1 + "model.json", URL_MODEL_1 + "metadata.json");
        model2 = await tmImage.load(URL_MODEL_2 + "model.json", URL_MODEL_2 + "metadata.json");
        isInitialized = true;
        
        // 초기 모델 설정 (기본 모델 1)
        handleModelChange(1); 
        
        // 웹캠 초기화 (캔버스 준비)
        const size = 400; // 캔버스 크기
        const flip = true; 
        
        // webcamContainer에 캔버스를 직접 추가하여 초기 메시지 제거
        const webcamContainer = document.getElementById("webcam-container");
        webcam = new tmImage.Webcam(size, size, flip); 
        await webcam.setup(); // 웹캠 스트림 요청
        webcamContainer.innerHTML = ''; // 초기 메시지 제거
        webcamContainer.appendChild(webcam.canvas); // 캔버스 삽입
        
        document.getElementById("start-button").textContent = '⏸️ Stop Analysis';
        isRunning = true;
        loop(); // 초기 루프 시작
        
        document.getElementById("initial-message")?.remove(); // 혹시 남아있을 경우 제거

    } catch (e) {
        console.error("Initialization error:", e);
        let errorMessage = "AI 모델 로드에 실패했거나 웹캠에 접근할 수 없습니다.";

        if (e.name === "NotAllowedError" || e.name === "PermissionDeniedError") {
            // 💡 웹캠 권한 거부 오류 처리
            errorMessage = `
                <i class="fas fa-video-slash"></i>
                <h3>🚫 권한 오류: 웹캠 사용이 거부되었습니다.</h3>
                <p>브라우저 설정에서 카메라 접근 권한을 **허용**해 주세요.</p>
            `;
        } else {
            // 💡 모델 로드 실패 및 기타 네트워크 오류 처리
             errorMessage = `
                <i class="fas fa-network-wired"></i>
                <h3>❌ 오류: AI 모델 로드 실패 또는 네트워크 문제</h3>
                <p>파일 경로(\`models/\`)를 확인하거나 네트워크 상태를 점검해 주세요. 자세한 내용은 콘솔을 확인하십시오.</p>
            `;
        }
        
        // 오류 메시지를 labelContainer에 표시
        labelContainer.innerHTML = `<div class="error-message">${errorMessage}</div>`;
        isInitialized = false;
        isRunning = false; 
    }
}

async function loop() {
    if (!isRunning || currentSource !== 'webcam') {
        return;
    }
    
    webcam.update(); 
    await predict(webcam.canvas); 
    
    requestID = window.requestAnimationFrame(loop);
}

function toggleAnalysis() {
    const startButton = document.getElementById("start-button");
    if (currentSource !== 'webcam') return;

    if (!isInitialized) {
        // 초기화 필요
        startButton.textContent = '모델 로드 중...';
        init();
        return;
    }

    if (isRunning) {
        // 분석 중지
        window.cancelAnimationFrame(requestID);
        webcam.pause();
        startButton.textContent = '🚀 Start Analysis';
        labelContainer.innerHTML = '분석이 중지되었습니다.';
    } else {
        // 분석 시작 (이미 초기화됨)
        webcam.play();
        startButton.textContent = '⏸️ Stop Analysis';
        isRunning = true;
        loop();
        labelContainer.innerHTML = '실시간 분석 중...';
    }
    isRunning = !isRunning;
}


// ===============================================
// 5. Model Switching
// ===============================================

function handleModelChange(modelId) {
    if (!isInitialized && modelId !== currentModel) {
        // 모델이 초기화되지 않은 상태에서 모델 전환 시도 -> 초기화 유도
        labelContainer.innerHTML = `<div class="warning-message">모델을 먼저 로드해 주세요. '분석 시작' 버튼을 눌러 초기화할 수 있습니다.</div>`;
        return;
    }
    currentModel = modelId;
    updateModelInfo();
    labelContainer.innerHTML = `모델 ${modelId} **(${modelId === 1 ? '얼굴형' : '퍼스널 톤'})**이 활성화되었습니다.`;
}

function updateModelInfo() {
    const infoElement = document.getElementById("current-model-info");
    const btn1 = document.getElementById("model1-btn");
    const btn2 = document.getElementById("model2-btn");

    if (currentModel === 1) {
        infoElement.innerHTML = "Active Model: **Face Type Analysis**";
        btn1.classList.add('active');
        btn2.classList.remove('active');
    } else if (currentModel === 2) {
        infoElement.innerHTML = "Active Model: **Personal Tone Analysis**";
        btn1.classList.remove('active');
        btn2.classList.add('active');
    } else {
        infoElement.innerHTML = "Active Model: **Not yet loaded**";
        btn1.classList.remove('active');
        btn2.classList.remove('active');
    }
}


// ===============================================
// 6. Prediction Logic (with Low Confidence Check)
// ===============================================

async function predict(element) {
    if (currentModel === 0) return; // 모델이 선택되지 않았을 경우
    
    const modelToUse = currentModel === 1 ? model1 : model2;
    const modelName = currentModel === 1 ? "Face Type Analysis" : "Personal Tone Analysis";
    
    // 💡 클래스 개수 불일치 오류 해결 로직 (핵심)
    const currentMaxPredictions = modelToUse.getTotalClasses(); 

    // 예측 수행 (캔버스 또는 이미지 사용)
    const prediction = await modelToUse.predict(element);

    // 💡 신뢰도 기반 피드백 및 안내 메시지 로직: Top-1 확률 확인
    const topPredictionProbability = prediction[0].probability;

    if (topPredictionProbability < CONFIDENCE_THRESHOLD) {
        // 신뢰도가 낮을 경우, 안내 메시지 출력
        labelContainer.innerHTML = `
            <div class="low-confidence-warning">
                <i class="fas fa-exclamation-triangle"></i>
                <h3>⚠️ 경고: 현재 이미지의 신뢰도가 낮습니다.</h3>
                <p>더 정확한 결과를 위해 **조명을 밝게 하거나, 얼굴을 정면으로 하고, 배경을 단순화**하여 다시 시도해 주세요.</p>
            </div>
        `;
        return; // 낮은 신뢰도일 경우, Top-K 표시를 건너뛰고 함수 종료
    }
    
    // 신뢰도가 높을 경우, 기존 Top-K 표시 로직 실행
    let resultHTML = `<div class=\"model-name-title\"><h3>${modelName} Results:</h3></div>`;
    
    // 동적으로 가져온 개수만큼만 반복하여 오류를 방지합니다.
    for (let i = 0; i < currentMaxPredictions; i++) {
        const classPrediction = 
            `<strong>${prediction[i].className}</strong>: ${(prediction[i].probability * 100).toFixed(1)}%`;
        
        // 최고 확률 항목은 강조
        const isTop = (i === 0);
        
        resultHTML += `<div class=\"prediction-item ${isTop ? 'top-prediction' : ''}\">${classPrediction}</div>`;
    }
    labelContainer.innerHTML = resultHTML;
}
