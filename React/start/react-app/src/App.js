// 'logo.svg' 파일을 가져옵니다.
import logo from './logo.svg';
// 'App.css' 스타일 파일을 가져옵니다.
import './App.css';

// 함수형 컴포넌트인 App을 정의합니다.
function App() {
  // 컴포넌트의 JSX 구조를 반환합니다.
  return (
    <div className="App">
      {/* 애플리케이션의 헤더 부분을 나타냅니다. */}
      <header className="App-header">
        {/* 로고 이미지를 표시합니다. */}
        <img src={logo} className="App-logo" alt="logo" />
        {/* 텍스트 내용을 표시하고, 수정 시 리로드 안내를 제공합니다. */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* React 공식 웹사이트로 이동하는 링크를 제공합니다. */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// App 컴포넌트를 모듈로 내보냅니다.
export default App;