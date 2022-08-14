import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import ListPage from './pages/ListPage/ListPage';
import UserState from './contexts/UserState';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

function App() {
  return (
    <UserState>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/listpage" element={<ListPage />} />
          </Routes>
        </div>
      </Router>
    </UserState>
  );
}

export default App;
