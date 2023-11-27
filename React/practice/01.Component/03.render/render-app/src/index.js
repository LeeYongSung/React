import React from 'react';                        // React 라이브러리 import
import ReactDOM from 'react-dom/client';          // ReactDOM 클라이언트 라이브러리 import
import './index.css';                             // 애플리케이션 전반의 초기화 css 파일 import
import App from './App';                          // App 컴포넌트 import
import reportWebVitals from './reportWebVitals';  // 웹 성능 추적을 위한 reportWebVitals 함수 import

// ✅ ReactDOM.createRoot() 메소드를 호출하여, React의 루트 요소를 생성
// - id 가 'root' 인 React 루트 요소를 렌더링할 실제 DOM 요소를 지정
const root = ReactDOM.createRoot(document.getElementById('root'));

// Strict Mode 를 활성화하여 App 컴포넌트를 렌더링
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 앱의 성능을 측정하려면 결과를 기록할 함수를 전달합니다.
// (예: reportWebVitals(console.log))
// 또는 결과를 분석하는 분석 도구에 전달합니다. 자세한 내용은 https://bit.ly/CRA-vitals를 참조하세요.
reportWebVitals( console.log() );
