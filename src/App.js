import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MainMenu from './components/MainMenu';
import BuildingPage from './pages/BuildingPage';
import AdminsPage from './pages/AdminsPage';

function App() {
  return (
    <Router basename="/thehantos">
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/building" element={<BuildingPage />} />
        <Route path="/admins" element={<AdminsPage />} />
      </Routes>
    </Router>
  );
}

export default App;

