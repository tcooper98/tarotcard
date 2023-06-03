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
      <Route exact path="/" element={<Home />} />
      <Route exact path="/game" element={<Game />} />
      <Route exact path="/info" element={<Info />} />
    </Routes>
  </Router>
  );
}

export default App;
