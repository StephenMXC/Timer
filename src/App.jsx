import React from 'react'
import Counter from './page/Counter/Counter';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Clock from './page/Clock/Clock';
import LandingPage from './page/LandingPage/LandingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/*" element={<h1>404 Page</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
