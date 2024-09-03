import React, { useEffect} from 'react';
import './Introduction.css';
import AnimatedText from './AnimatedText';
import HomeIcon from './HomeIcon';
import HamburgerIcon from './HamburgerIcon';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Introduction() {
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

    // GSAP ScrollTrigger for Sun
    gsap.to('.sun', {
      y: '-10%',
      scrollTrigger: {
        trigger: '.introduction-container',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    });

    gsap.to('.scrollicon', {
      y: '60%',
      scrollTrigger: {
        trigger: '.introduction-container',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    });
    // GSAP ScrollTrigger for Mountain
    gsap.to('.mountain', {
      y: '20%',
      scrollTrigger: {
        trigger: '.introduction-container',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    });

    // gsap.to('.chevron', {
    //   y: '30%',
    //   scrollTrigger: {
    //     trigger: '.introduction-container',
    //     start: 'top top',
    //     end: 'bottom top',
    //     scrub: true,
    //   }
    // });

    // GSAP ScrollTrigger for Tree, Grass, and Top-layer
    gsap.to('.tree, .grass, .top-layer', {
      y: '30%',
      scrollTrigger: {
        trigger: '.introduction-container',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    });

  }, []);

  return (
      <div className="introduction-container">
          <img src="https://imagesforkaya.s3.amazonaws.com/background.png" alt="Background" className="background" />
          <img src="https://imagesforkaya.s3.amazonaws.com/sun.png" alt="Sun" className="sun" />
          <img src="https://imagesforkaya.s3.amazonaws.com/scroll.png" alt="Scroll" className="scrollicon" />
          <img src="https://imagesforkaya.s3.amazonaws.com/moutain.png" alt="Mountain" className="mountain" />
          <img src="https://imagesforkaya.s3.amazonaws.com/grass.png" alt="Grass" className="grass" />
          <img src="https://imagesforkaya.s3.amazonaws.com/tree.png" alt="Tree" className="tree" />
          <img src="https://imagesforkaya.s3.amazonaws.com/toplayer.png" alt="Top Layer" className="top-layer" />
        
          
  
      
          <HomeIcon />
          <HamburgerIcon/>
          
          {/* AnimatedText as a cover overlay */}
          <div className="animated-text-wrapper">
            <AnimatedText word="ABOUT ME" />
          </div> 
         
          <div class="introduction-text-section">
        
            <div class="introduction-header">
              <p>
              "A good decision is based on knowledge and not numbers"
              </p>
            </div>
   
            
          
            <div class="introduction-columns">
                <div class="introduction-column">
                    <p>From a young age, I have been fascinated by the stories that numbers can tell. Growing up, I was the person who always sought patterns in everyday occurrences, whether it was tracking the weather, analyzing game statistics, or even observing the dynamics of interactions around me. This innate curiosity is what eventually led me to pursue a career in data science.</p>
                    <p>My interest in data science was sparked during my undergraduate studies at the University of California, Santa Barbara, where I majored in Statistics and Data Science with a minor in Earth Science. There, I was introduced to the power of data in understanding complex systems—whether it was predicting climate patterns using LSTM models or analyzing real estate markets with regression techniques. This experience not only honed my technical skills but also deepened my appreciation for the role data plays in decision-making processes.</p>
                    <p>As I advanced into my graduate studies at Duke University, my focus shifted towards integrating machine learning with data science to tackle more intricate challenges. The interdisciplinary nature of my studies has provided me with a robust toolkit, enabling me to approach problems from multiple angles and devise innovative solutions. </p>
                </div>
                <div class="introduction-column">
                    <p>My academic journey has been a continuous exploration of how data, when properly harnessed, can drive impactful insights.</p>
                    <p>In a team setting, I am known for my collaborative spirit and critical thinking. I believe that the best ideas emerge when diverse minds come together, and I thrive in environments where open communication and constructive feedback are encouraged. My approach to teamwork is rooted in empathy, understanding that each member brings unique strengths to the table. I am meticulous in managing time and resources, ensuring that projects are not only completed efficiently but also with the highest quality.</p>
                    <p>My contribution to any team is my ability to merge technical expertise with strategic thinking. I am motivated by the desire to make a tangible difference, whether it’s through developing a predictive model, optimizing processes, or creating tools that enhance decision-making. What drives me is the knowledge that data science is more than just algorithms and code—it’s about solving problems that matter, improving systems, and ultimately, making the world a better place.</p>
                </div>
            </div>
        </div>
        
      </div>
  );
}

export default Introduction;
