import React from 'react';
import './AdminsPage.css';
import '../style.css';

const AdminsPage = () => {
  return (
    <div className="admins-page">
      <header className="header">Наши Контакты</header>
      <main className="main-content">
        <h2>связь с нами</h2>
        <div className="admins-container">
          <div className="admin-card">
            <img
              src={`${process.env.PUBLIC_URL}/images/logo.jpg`}
              alt="Телеграм чат"
              className="admin-image"
            />
            <h3 className="admin-name">Телеграм чат</h3>
            <a
              href="https://web.telegram.org/a/#-1001883982658"
              target="_blank"
              rel="noopener noreferrer"
              className="telegram-button"
            >
              Перейти в чат
            </a>
          </div>
          <div className="admin-card">
            <img
              src={`${process.env.PUBLIC_URL}/images/yutub.jpg`}
              alt="Ютуб канал"
              className="admin-image"
            />
            <h3 className="admin-name">Ютуб канал</h3>
            <h4>Не забудь подписаться</h4>
            <a
              href="https://www.youtube.com/@Hantos63"
              target="_blank"
              rel="noopener noreferrer"
              className="telegram-button"
            >
              Перейти
            </a>
          </div>
          <div className="admin-card">
            <img
              src={`${process.env.PUBLIC_URL}/images/logo.jpg`}
              alt="Группа Вконтакте"
              className="admin-image"
            />
            <h3 className="admin-name">Группа Вконтакте</h3>
            <a
              href="https://vk.com/club163175940"
              target="_blank"
              rel="noopener noreferrer"
              className="telegram-button"
            >
              Перейти
            </a>
          </div>
          <div className="admin-card">
            <img
              src={`${process.env.PUBLIC_URL}/images/dragonlogo.jpg`}
              alt="Почта разработчиков"
              className="admin-image"
            />
            <h3 className="admin-name">Телеграм чат</h3>
            <h3 className="admin-name">Admin Dragon</h3>
            
            <a
              href="https://t.me/Dragon010101"
              target="_blank"
              rel="noopener noreferrer"
              className="telegram-button"
            >
              Перейти
            </a>
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

export default AdminsPage;

