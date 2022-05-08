import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home/home';
import Leaderboard from './components/Leaderboard/leaderboard';
import NewGame from './components/NewGame/newGame';
import NavBar from './components/common/navBar';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} index />
        <Route path="leaderboard" element={<Leaderboard />} />
        <Route path="New" element={<NewGame />} />
      </Routes>
    </div>
  );
}

export default App;
