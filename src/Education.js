import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import './Education.css';
import AnimatedText from './AnimatedText';
import HomeIcon from './HomeIcon';
import HamburgerIcon from './HamburgerIcon';

const Education = () => {
    const [animate, setAnimate] = useState(false);
    const [isNext, setIsNext] = useState(true);

    useEffect(() => {
        gsap.set('.animated-text-wrapper', { display: 'grid' }); // Ensure it is displayed before animation
      
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

    const handleButtonClick = () => {
        if (isNext) {
            // Next button functionality
            setAnimate(true);
    
            // Rotate layer1 to the left with the bottom-left corner as the origin
            gsap.to('.education-layer1', {
                rotation: -100,
                duration: 0.5,
                ease: 'power2.out',
                transformOrigin: '0% 100%'
            });
    
            // Move layer2 down by 55%
            gsap.to('.education-layer2', {
                y: '55%',
                duration: 0.5,
                ease: 'power2.out'
            });
    
            // Fade out and slide the text container to the right
            gsap.to('.education-text-container', {
                x: '100%',
                opacity: 0,
                duration: 1,
                ease: 'power2.out',
                onComplete: () => {
                    // Swap the text content after fading out
                    const paragraphs = document.querySelectorAll('.education-text-container p');
                    if (paragraphs.length >= 3) {
                        paragraphs[0].innerText = 'University of California - Santa Barbara, Santa Barbara, CA';
                        paragraphs[0].classList.add('header-style');
                        paragraphs[1].innerText = 'Bachelor of Statistics and Data Science, Minor in Earth Science (Aug 2019 – Jun 2023)';
                        paragraphs[1].classList.add('subheader-style');
                        paragraphs[2].classList.add('content-style');
                        paragraphs[2].innerText = 
                            'At UC Santa Barbara, I built a solid grounding in statistical theory and data analysis. My studies included Regression Analysis, Machine Learning, and Computational Statistics, which allowed me to develop a deep understanding of data-driven decision-making. Additionally, courses in Earth Science enriched my ability to apply statistical methods to environmental data. This combination of skills has provided me with the tools necessary to perform rigorous data analysis and contribute valuable insights across various domains.';
                    }
                    
                    // Bring the container back into view with the new text
                    gsap.fromTo('.education-text-container', 
                        { x: '100%', opacity: 0 }, // Start from the left side with opacity 0
                        { x: '0%', opacity: 1, duration: 1, ease: 'power2.out' } // Slide back into place with full opacity
                    );
                }
            });
    
            // Show the new images
            gsap.fromTo('.new-layer1', 
                {
                    transformOrigin: '0% 100%',
                    rotation: -100, // Initial rotation of -100 degrees
                    opacity: 0
                }, 
                {
                    rotation: 0,
                    opacity: 1,
                    duration: 0.5,
                    delay: 1,
                    ease: 'power2.out'
            });
    
            gsap.fromTo('.new-layer2', 
                {
                    y: '55%',
                    opacity: 0
                },
                {
                    y: '0%',
                    opacity: 1,
                    duration: 0.5,
                    delay: 1,
                    ease: 'power2.out'
                }
            );
    
            setIsNext(false);
        } else {
            // Previous button functionality (reverse the animations)
            gsap.to('.education-text-container', {
                x: '100%',
                opacity: 0,
                duration: 1,
                ease: 'power2.out',
                onComplete: () => {
                    // Swap back to the original text
                    const paragraphs = document.querySelectorAll('.education-text-container p');
                    if (paragraphs.length >= 3) {
                        paragraphs[0].innerText = 'Duke University, Durham, NC';
                        paragraphs[0].classList.add('header-style');
                        paragraphs[1].innerText = 'Master in Interdisciplinary Data Science (Expected May 2025)';
                        paragraphs[2].classList.add('content-style');
                        paragraphs[1].classList.add('subheader-style');
                        paragraphs[2].innerText = 
                            'At Duke University, I am deepening my expertise in data science through an interdisciplinary approach. My coursework spans essential topics such as Data Analysis and Modeling, Statistical Modeling, and Big Data Analytics. I’ve gained practical experience in applying machine learning principles and natural language processing to solve complex problems. This program has equipped me with a strong foundation in both the theoretical and practical aspects of data science, preparing me to tackle real-world data challenges with advanced analytical techniques and ethical considerations.';
                    }
    
                    // Bring the container back into view with the original text
                    gsap.fromTo('.education-text-container', 
                        { x: '100%', opacity: 0 }, // Start from the right side with opacity 0
                        { x: '0%', opacity: 1, duration: 1, ease: 'power2.out' } // Slide back into place with full opacity
                    );
                }
            });
    
            // Reverse the layer animations
            gsap.to('.education-layer1', {
                rotation: 0,
                duration: 0.5,
                ease: 'power2.out',
                delay:1,
                transformOrigin: '0% 100%'
            });
    
            gsap.to('.education-layer2', {
                y: '0%',
                duration: 0.5,
                delay:1,
                ease: 'power2.out'
            });
    
            // Hide the new layers
            gsap.to('.new-layer1', {
                rotation: -100,
                opacity: 0,
                duration: 0.5,
                ease: 'power2.out'
            });
    
            gsap.to('.new-layer2', {
                y: '55%',
                opacity: 0,
                duration: 0.5,
                ease: 'power2.out'
            });
    
            setIsNext(true);
        }
    };
    

    return (
        <div className="education-container">
            <HomeIcon />
            <HamburgerIcon/>
            {/* AnimatedText as a cover overlay */}
            <div className="animated-text-wrapper">
                <AnimatedText word="Education" />
            </div>
            <div className="education-image-container">
                <img 
                    src="https://imagesforkaya.s3.amazonaws.com/dukeuniveristy-removebg-preview.png" 
                    alt="Duke University"
                    className="education-layer1"
                />
                <img 
                    src="https://imagesforkaya.s3.amazonaws.com/vege-removebg-preview.png" 
                    alt="Vegetables"
                    className="education-layer2"
                />
                <img 
                    src="https://imagesforkaya.s3.amazonaws.com/UCSB-removebg-preview.png" 
                    alt="UCSB"
                    className="new-layer1"
                    style={{ opacity: 0, transform: 'rotate(-100deg)' }} // Set initial rotation to -100 degrees
                />
                <img 
                    src="https://imagesforkaya.s3.amazonaws.com/palmtree-removebg-preview.png" 
                    alt="Palm Tree"
                    className="new-layer2"
                    style={{ opacity: 0, transform: 'translateY(55%)' }} // Set initial translation to 55% down
                />
            </div>
            <div className="education-text-container">
                <p>Duke University, Durham, NC</p>
                <p>Master in Interdisciplinary Data Science (Expected May 2025)</p>
                <p>
                    At Duke University, I am deepening my expertise in data science through an interdisciplinary approach. My coursework spans essential topics such as Data Analysis and Modeling, Statistical Modeling, and Big Data Analytics. I’ve gained practical experience in applying machine learning principles and natural language processing to solve complex problems. This program has equipped me with a strong foundation in both the theoretical and practical aspects of data science, preparing me to tackle real-world data challenges with advanced analytical techniques and ethical considerations.
                </p>
            </div>
            <button className="education-button" onClick={handleButtonClick}>
                {isNext ? 'Next' : 'Previous'}
            </button>
        </div>
    );
};

export default Education;
