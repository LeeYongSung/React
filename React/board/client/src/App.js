import logo from './logo.svg';
import './App.css';

function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/boards" element={ <BoardListContainer /> } />
          <Route path="/boards/:no" element={ <BoardReadContainer /> } />
          <Route path="/boards/insert" element={ <BoardInsertContainer /> } />
          <Route path="/boards/update/:no" element={ <BoardUpdateContainer /> } />
        </Routes>
      </BrowserRouter>
    );
}

export default App;
