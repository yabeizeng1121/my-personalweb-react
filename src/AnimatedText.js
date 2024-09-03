import React from 'react';
import './AnimatedText.css';  // Make sure this path is correct

function AnimatedText({ word }) {
  const upperText = word.toUpperCase();
  return (
    <section className="animated-text-wrapper">
      <div className="animated-text-div top">{upperText}</div>
      <div className="animated-text-div bottom" aria-hidden="true">{upperText}</div>
    </section>
  );
}

export default AnimatedText;
