import React from 'react';
import './HomePage.css';  // Подключаем стили

function HomePage() {
  return (
    <div className="home-page">
      {/* Логотип компании */}
      <header className="header">
        <img src="../../media/deco_logo.png" alt="Company Logo" className="logo" />
      </header>
      
      {/* Центральный блок с рамкой, текстом и изображением */}
      <div className="content-box">
        <h1>Приветствуем на сайте компании Деко-сервис</h1>
        <p>На наших календарях распечатаны QR-коды на каждую неделю 2025 года. Отсканировав QR-код, Вы попадете на страницу с видео, рассказывающем о нашей работе, новых продуктах и еще много всего интересного!</p>
        <img src="../../media/qrcodes/homepage.png" alt="Description Image" className="description-image" />
        <p>На каждую неделю будет свой QR-код и свое видео. Оно будет доступно только в течение 7 дней. Так что не упустите шанс лицезреть очередное интереснейшее видео!</p>
      </div>
    </div>
  );
}

export default HomePage;