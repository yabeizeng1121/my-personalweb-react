// RippleEffect.js
import React, { useEffect } from 'react';
import $ from 'jquery';
import gsap from 'gsap';
import 'jquery.ripples';
import './RippleEffect.css';

function RippleEffect({ onRippleComplete }) {
  useEffect(() => {
    // Initialize ripple effect
    $(document).ready(function() {
      $('.ripple-container').ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.04,
      });
    });
  }, []);

  const triggerRippleEffect = (event) => {
    const ripple = document.querySelector('.ripple');
    const x = event.clientX;
    const y = event.clientY;

    // Trigger the ripple effect
    $('.ripple-container').ripples('drop', x, y, 20, 0.04);

    gsap.timeline()
      .to(ripple, {
        scale: 20, // Ripple expands to cover the screen
        duration: 1.5,
        ease: 'power2.out',
        onComplete: onRippleComplete, // Callback after ripple animation
      });
  };

  return (
    <div className="ripple-container" onClick={triggerRippleEffect}>
      <div className="ripple"></div>
      <canvas id="ripple-canvas"></canvas>
    </div>
  );
}

export default RippleEffect;
