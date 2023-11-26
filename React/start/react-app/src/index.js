import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 'root'라는 ID를 가진 DOM 요소를 찾아서 React Root를 생성합니다.
const root = ReactDOM.createRoot(document.getElementById('root'));

// React StrictMode를 사용하여 App 컴포넌트를 렌더링합니다.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 앱의 성능을 측정하려면 결과를 기록할 함수를 전달합니다.
// (예: reportWebVitals(console.log))
// 또는 결과를 분석하는 분석 도구에 전달합니다. 자세한 내용은 https://bit.ly/CRA-vitals를 참조하세요.
reportWebVitals();