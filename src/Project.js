import React, { useEffect } from 'react';
import './Project.css';  // Import the Project CSS file
import Dashboard from './Dashboard';
import AnimatedText from './AnimatedText';
import HomeIcon from './HomeIcon';
import HamburgerIcon from './HamburgerIcon';
import gsap from 'gsap';

function Project() {
  useEffect(() => {
    gsap.set('.animated-text-wrapper', { display: 'grid' }); // 确保动画前显示
  
    gsap.to('.animated-text-wrapper', {
      opacity: 0,
      duration: 0.5,
      delay: 0.5,
      ease: 'power2.out',
      onComplete: () => {
        gsap.set('.animated-text-wrapper', { display: 'none' });
      }
    });
  }, []);
  
  

  return (
    <div className="project-container">
      <HomeIcon />
      <HamburgerIcon />

      {/* AnimatedText as a cover overlay */}
      <div className="animated-text-wrapper">
        <AnimatedText word="Project" />
      </div> 
      
      <div className="dashboard-container">
        <Dashboard />  {/* Render the CardSection component */}
      </div>
      
      <div style={{ height: '1500px', backgroundColor: '#111' }}>
      </div>
    </div>
  );
}

export default Project;
