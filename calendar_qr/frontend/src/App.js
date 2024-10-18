import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VideoPage from './pages/VideoPage';
import NotAvailablePage from './pages/NotAvailablePage';
import HomePage from './pages/HomePage';  // Импорт главной страницы

function App() {
  return (
    <Router>
      <Routes>
        {/* Маршрут для главной страницы */}
        <Route path="/" element={<HomePage />} />
        {/* Маршрут для просмотра видео по неделям */}
        <Route path="/week/:weekNumber" element={<VideoPage />} />
        {/* Маршрут для страницы "Видео недоступно" */}
        <Route path="/not-available" element={<NotAvailablePage />} />
      </Routes>
    </Router>
  );
}

export default App;
