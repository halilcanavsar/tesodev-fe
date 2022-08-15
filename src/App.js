import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import ListPage from './pages/ListPage/ListPage';
import AddLinkPage from './pages/AddLinkPage/AddLinkPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/listpage" element={<ListPage />} />
          <Route path="/add-link" element={<AddLinkPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
