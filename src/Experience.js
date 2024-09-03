import React, { useEffect } from 'react';
import './Experience.css';  // Import the Experience CSS file
import CardSection from './CardSection';  // Import CardSection if you're using it
import AnimatedText from './AnimatedText';
import HomeIcon from './HomeIcon';
import HamburgerIcon from './HamburgerIcon';
import gsap from 'gsap';

function Experience() {
  useEffect(() => {
    // Scroll to the top of the page when the component is loaded
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera

    gsap.set('.animated-text-wrapper', { display: 'grid' });

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
    <div className="experience-container">
      <HomeIcon />
      <HamburgerIcon />

      {/* AnimatedText as a cover overlay */}
      <div className="animated-text-wrapper">
        <AnimatedText word="Experience" />
      </div> 
      
      <div className="card-container">
        <CardSection />  {/* Render the CardSection component */}
      </div>
      
      <div id="thumbs" style={{ height: '1500px', backgroundColor: '#111' }}>
        {/* Content inside thumbs */}
      </div>
    </div>
  );
}

export default Experience;
