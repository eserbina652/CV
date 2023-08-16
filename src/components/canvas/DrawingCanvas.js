import React, { useRef, useEffect, useState } from 'react';
import './index.css';
import useScreenSIze from '../../hooks/useScreenSIze';
const DrawingCanvas = () => {
  const isMobile = useScreenSIze();
  const canvasRef = useRef(null);
  const [shouldErase, setShouldErase] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let draw_with = isMobile ? '7' : '15';
    let is_drawing = false;

    const getMousePos = (canvas, event) => {
      const rect = canvas.getBoundingClientRect();
      return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
    };

    const gradient = context.createLinearGradient(
      0,
      0,
      canvas.width,
      canvas.height
    );
    gradient.addColorStop(0, 'red');
    gradient.addColorStop(0.2, 'purple');
    gradient.addColorStop(0.3, 'yellow');
    gradient.addColorStop(0.4, 'orange');
    gradient.addColorStop(0.6, 'deeppink');
    gradient.addColorStop(0.8, 'blue');
    gradient.addColorStop(1, 'green');

    const start = (event) => {
      is_drawing = true;
      const { x, y } = getMousePos(canvas, event);
      context.beginPath();
      context.moveTo(x, y);
    };

    const draw = (event) => {
      if (!is_drawing) return;

      const { x, y } = getMousePos(canvas, event);
      if (shouldErase) {
        context.clearRect(
          event.x,
          event.y,
          window.innerWidth,
          window.innerHeight
        );
      } else {
        context.lineTo(x, y);
        context.strokeStyle = gradient;
        context.lineWidth = draw_with;
        context.lineCap = 'round';
        context.lineJoin = 'round';
        context.stroke();
      }
    };

    const stop = () => {
      if (is_drawing) {
        context.closePath();
        is_drawing = false;
      }
    };

    canvas.addEventListener('touchstart', start, false);
    canvas.addEventListener('touchmove', draw, false);
    canvas.addEventListener(
      'mousedown',
      (event) => {
        start(event);
        setShouldErase(true);
      },
      false
    );
    canvas.addEventListener('mousemove', draw, false);

    canvas.addEventListener('touchend', stop, false);
    canvas.addEventListener(
      'mouseup',
      () => {
        stop();
        setShouldErase(false);
      },
      false
    )
    canvas.addEventListener('mouseout', stop, false);
  }, []);

  return <canvas ref={canvasRef} id="canvas"></canvas>;
};

export default DrawingCanvas;
