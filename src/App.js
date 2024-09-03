import React, { useState, useEffect } from 'react';
import './App.css'; // 引入样式
import HomeIcon from './HomeIcon';
import HamburgerIcon from './HamburgerIcon';
import RippleEffect from './RippleEffect';
import { useNavigate } from 'react-router-dom';


function App() {
  const [animationClass, setAnimationClass] = useState('text-enter');
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationClass('text-entered');
    }, 500); // 延迟使动画更平滑
    return () => clearTimeout(timer);
  }, []);

  const handleTextClick = () => {
    setAnimationClass('text-exit');
    setTimeout(() => {
      navigate('/introduction');
    }, 1000); // 设置1秒的延迟，确保离场动画完成
  };

  return (
    <div className="app-container">
      <HomeIcon />
      <HamburgerIcon />
      <RippleEffect onRippleComplete={() => console.log('Ripple effect completed')} />
      <h1 className={animationClass} onClick={handleTextClick}>YABEI ZENG</h1>
      <p className={animationClass}>Aspiring data scientist driven by curiosity and a passion for uncovering insights.</p>
      <p className={animationClass}>Click My Name To Start.</p>
      <div className= "app-bottom-text">
        <p>For best experience, please use laptop or desktop to browse</p>
      </div>
    </div>
  );
}

export default App;
