


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainMenu.css';




const MainMenu = () => {
  const menuItems = [
   
    { name: "Контакты Разработчиков", path: "/building" },
    { name: "Наши Контакты", path: "/admins" },
  ];

  const [activeItem, setActiveItem] = useState(null);
  const navigate = useNavigate();

  const handleMouseEnter = (index) => {
    setActiveItem(index);
  };

  const handleMouseLeave = () => {
    setActiveItem(null);
  };

  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <div>
      <header className="header">TheHanTos</header>
      <div className="main-menu">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleButtonClick(item.path)}
            className={`menu-button ${activeItem === index ? 'active' : ''}`}
          >
            {item.name}
          </button>
        ))}
      </div>
      <footer className="footer">
  <span className="footer-text">Dragon</span>
</footer>




    </div>
  );
};

export default MainMenu;

