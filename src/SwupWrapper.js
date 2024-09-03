// src/SwupWrapper.js
import React, { useEffect } from 'react';
import Swup from 'swup';

const SwupWrapper = ({ children }) => {
  useEffect(() => {
    const swup = new Swup();
  }, []);

  return <div id="swup">{children}</div>;
};

export default SwupWrapper;
