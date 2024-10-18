import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './VideoPage.css';  // Подключение стилей

function VideoPage() {
  const { weekNumber } = useParams();  // Получение номера недели из URL
  const [videoData, setVideoData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Запрос данных о видео по номеру недели
    axios.get(`/api/video/${weekNumber}/`)
      .then(response => {
        setVideoData(response.data);
        if (!response.data.is_available) {
          navigate('/not-available');  // Перенаправление, если видео не доступно
        }
      })
      .catch(error => {
        console.error('Error fetching video data', error);
        navigate('/not-available');  // Перенаправление при ошибке
      });
  }, [weekNumber, navigate]);

  if (!videoData) {
    return <p>Loading...</p>;  // Пока данные загружаются
  }
  
  if (!videoData.is_available) {
    return <p>This video is not available.</p>; // Если видео недоступно
  }

  return (
    <div className="video-page">
      <div className="header">
        <img src="../../media/deco_logo.png" alt="Company Logo" className="logo" />
      </div>

      <div className="video-container">
        <h1>Video for Week {videoData.week_number}</h1>

        {videoData.video_file ? (
          <video src={videoData.video_file} controls preload="auto" />
        ) : (
          <p>No video available for this week.</p>
        )}
      </div>

      {/* Отдельная рамка для описания видео */}
      <div className="description-container">
        <p className="video-description"> Описание видео</p>
      </div>
    </div>
  );
}

export default VideoPage;