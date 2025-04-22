import React from 'react';
import './BuildingPage.css';

const BuildingPage = () => {
  const copyToClipboard = () => {
    const email = "lastdayrulessurvival@gmail.com";
    navigator.clipboard.writeText(email)
      .then(() => {
        alert("Адрес почты скопирован!");
      })
      .catch((err) => {
        alert("Не удалось скопировать адрес: " + err);
      });
  };

  return (
    <div className="admins-page">
      <header className="header">Контакты Разработчиков</header>
      <main className="main-content">
        <h2>Last island of Survival</h2>
        <div className="admins-container">
          <div className="admin-card">
            <img
              src={`${process.env.PUBLIC_URL}/images/game.jpg`}
              alt="Основатель проекта"
              className="admin-image"
            />
            <h3 className="admin-name">Официальный сайт</h3>
            <a
              href="https://lios.herogame.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="telegram-button"
            >
              Перейти
            </a>
          </div>
          <div className="admin-card">
            <img
              src={`${process.env.PUBLIC_URL}/images/hero.png`}
              alt="Официальный донат"
              className="admin-image"
            />
            <h3 className="admin-name">Официальный донат</h3>
            <a
              href="https://web.telegram.org/a/#6008153078"
              target="_blank"
              rel="noopener noreferrer"
              className="telegram-button"
            >
              Перейти
            </a>
          </div>
          <div className="admin-card">
            <img
              src={`${process.env.PUBLIC_URL}/images/discord.jpg`}
              alt="Официальный Discord"
              className="admin-image"
            />
            <h3 className="admin-name">Официальный Discord</h3>
            <a
              href="https://discord.com/channels/900537413640810506/@home"
              target="_blank"
              rel="noopener noreferrer"
              className="telegram-button"
            >
              Перейти
            </a>
          </div>
          <div className="admin-card">
            <img
              src={`${process.env.PUBLIC_URL}/images/mail.png`}
              alt="Почта разработчиков"
              className="admin-image"
            />
            <h3 className="admin-name">Почта разработчиков</h3>
            <p className="admin-email">lastdayrulessurvival@gmail.com</p>
            <button className="telegram-button" onClick={copyToClipboard}>
              Скопировать адрес
            </button>
          </div>
        </div>
      </main>
      <footer className="footer">
        <button
          className="menu-button"
          onClick={() => window.location.href = '/'}
        >
          Главное меню
        </button>
      </footer>
    </div>
  );
};

export default BuildingPage;
