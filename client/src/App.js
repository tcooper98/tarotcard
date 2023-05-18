import logo from './logo.svg';
import './App.css';
import { Home } from './pages/home';
import "./fonts/AnyConv.com__Arnhem.eot"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Game } from './pages/game';
import { Info } from './pages/info';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<Game />} />
      <Route path="/info" element={<Info />} />
    </Routes>
  </Router>
  );
}

export default App;
