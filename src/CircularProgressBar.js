import React, { useEffect, useRef } from 'react';
import './CircularProgressBar.css';

const CircularProgressBar = ({ percentage, skillName }) => {
    const circleRef = useRef(null);

    useEffect(() => {
        const circle = circleRef.current;
        const radius = circle.r.baseVal.value;
        const circumference = radius * 2 * Math.PI;

        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = `${circumference}`;

        const offset = circumference - (percentage / 100) * circumference;
        circle.style.strokeDashoffset = offset;

        // Animation
        circle.animate([
            { strokeDashoffset: circumference },
            { strokeDashoffset: offset }
        ], {
            duration: 1000,
            easing: 'ease-out',
            fill: 'forwards'
        });
    }, [percentage]);

    return (
        <div className="circular-progress-bar">
            <svg className="progress-ring" width="120" height="120">
                <circle
                    ref={circleRef}
                    className="progress-ring__circle"
                    stroke="rgba(255, 94, 58, 1)" // Sunset color for the progress
                    strokeWidth="8"
                    fill="transparent"
                    r="54"
                    cx="60"
                    cy="60"
                />
            </svg>
            <div className="percentage-text">{percentage}%</div>
            <div className="skill-name">{skillName}</div>
        </div>
    );
};

export default CircularProgressBar;
