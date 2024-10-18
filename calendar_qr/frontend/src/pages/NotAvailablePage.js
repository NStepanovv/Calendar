import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './NotAvailablePage.css';

function NotAvailablePage() {
  const [lastAvailableVideo, setLastAvailableVideo] = useState(null);

  useEffect(() => {
    // Запрашиваем последнее доступное видео
    axios.get('/api/last-available-video/')
      .then(response => {
        setLastAvailableVideo(response.data);
      })
      .catch(error => {
        console.error('Error fetching last available video:', error);
      });
  }, []);

  return (
    <div className="not-available-page">

      <div className="header">
        <img src="../../media/deco_logo.png" alt="Company Logo" className="logo" />
      </div>

      {/* Основной контент */}
      <div className="message-container">
      <h2>Это видео пока не доступно</h2>
      <p>Пожалуйста, вернитесь позже или посмотрите последнее доступное видео.</p>
      

      {/* Если последнее доступное видео найдено, показать ссылку на него */}
        <div className="button-group">
        {lastAvailableVideo ? (
          <>
            <Link to={`/week/${lastAvailableVideo.week_number}`} className="custom-button">Последнее доступное видео</Link>
            <Link to="/" className="custom-button">Вернуться на главную</Link>
          </>
        ) : (
          <p>No previous videos are available.</p>
        )}
        </div>
      </div>
    </div>
  );
}

export default NotAvailablePage;