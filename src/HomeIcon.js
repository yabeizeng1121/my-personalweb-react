import React from 'react';
import { useNavigate } from 'react-router-dom';
import homeIcon from './HomeIcon.png'; // 确保你的 home icon 图片在 src 文件夹中
import './HomeIcon.css'; // 引入 HomeIcon 的样式

function HomeIcon() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <div className="home-icon" onClick={handleHomeClick}>
      <img src={homeIcon} alt="Home" />
    </div>
  );
}

export default HomeIcon;
