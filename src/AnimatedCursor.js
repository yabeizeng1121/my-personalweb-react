import React, { useEffect, useRef, useState, useCallback } from 'react';
import './AnimatedCursor.css';

function useEventListener(eventName, handler, element = document) {
  const savedHandler = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;

    const eventListener = (event) => savedHandler.current(event);

    element.addEventListener(eventName, eventListener);

    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
}

function AnimatedCursor({
  color = '100, 150, 255',  // Soft blue color
  outerAlpha = 0.4,
  innerSize = 8,
  outerSize = 8,
  outerScale = 5,
  innerScale = 0.7,
}) {
  const cursorOuterRef = useRef();
  const cursorInnerRef = useRef();
  const requestRef = useRef();
  const previousTimeRef = useRef();
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [isActiveClickable, setIsActiveClickable] = useState(false);
  let endX = useRef(0);
  let endY = useRef(0);

  const onMouseMove = useCallback(({ clientX, clientY }) => {
    setCoords({ x: clientX, y: clientY });
    if (cursorInnerRef.current) {
      cursorInnerRef.current.style.top = clientY + 'px';
      cursorInnerRef.current.style.left = clientX + 'px';
    }
    endX.current = clientX;
    endY.current = clientY;
  }, []);

  const animateOuterCursor = useCallback(
    (time) => {
      if (previousTimeRef.current !== undefined) {
        coords.x += (endX.current - coords.x) / 8;
        coords.y += (endY.current - coords.y) / 8;
        if (cursorOuterRef.current) {
          cursorOuterRef.current.style.top = coords.y + 'px';
          cursorOuterRef.current.style.left = coords.x + 'px';
        }
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animateOuterCursor);
    },
    [coords]
  );

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateOuterCursor);
  }, [animateOuterCursor]);

  const onMouseDown = useCallback(() => {
    setIsActive(true);
    if (cursorInnerRef.current && cursorOuterRef.current) {
      cursorInnerRef.current.style.transform = `scale(${innerScale})`;
      cursorOuterRef.current.style.transform = `scale(${outerScale})`;
    }
  }, [innerScale, outerScale]);

  const onMouseUp = useCallback(() => setIsActive(false), []);

  const onMouseEnter = useCallback(() => setIsVisible(true), []);
  
  const onMouseLeave = useCallback(() => setIsVisible(false), []);

  useEventListener('mousemove', onMouseMove, document);
  useEventListener('mousedown', onMouseDown, document);
  useEventListener('mouseup', onMouseUp, document);
  useEventListener('mouseenter', onMouseEnter, document);
  useEventListener('mouseleave', onMouseLeave, document);

  useEffect(() => {
    if (isActive) {
      if (cursorInnerRef.current) cursorInnerRef.current.style.transform = `scale(${innerScale})`;
      if (cursorOuterRef.current) cursorOuterRef.current.style.transform = `scale(${outerScale})`;
    } else {
      if (cursorInnerRef.current) cursorInnerRef.current.style.transform = 'scale(1)';
      if (cursorOuterRef.current) cursorOuterRef.current.style.transform = 'scale(1)';
    }
  }, [innerScale, outerScale, isActive]);

  useEffect(() => {
    if (isActiveClickable) {
      if (cursorInnerRef.current) cursorInnerRef.current.style.transform = `scale(${innerScale * 1.3})`;
      if (cursorOuterRef.current) cursorOuterRef.current.style.transform = `scale(${outerScale * 1.4})`;
    }
  }, [innerScale, outerScale, isActiveClickable]);

  useEffect(() => {
    if (isVisible) {
      if (cursorInnerRef.current) cursorInnerRef.current.style.opacity = 1;
      if (cursorOuterRef.current) cursorOuterRef.current.style.opacity = 1;
    } else {
      if (cursorInnerRef.current) cursorInnerRef.current.style.opacity = 0;
      if (cursorOuterRef.current) cursorOuterRef.current.style.opacity = 0;
    }
  }, [isVisible]);

  return (
    <>
      <div ref={cursorOuterRef} id="cursor-dot-outline" />
      <div ref={cursorInnerRef} id="cursor-dot" />
    </>
  );
}

export default AnimatedCursor;
