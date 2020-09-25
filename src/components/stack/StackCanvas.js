import React, { useEffect, useRef } from 'react'

const StackCanvas = ({ stackItems }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const canvasWidth = canvas.offsetWidth;
    const canvasHeight = canvas.offsetHeight;
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    draw(ctx, canvasWidth, canvasHeight);

  }, [stackItems]);

  const draw = (ctx, canvasWidth, canvasHeight) => {
    let startingPointX;
    let startingPointY;
    let containerWidth;
    let containerHeight;

    if (canvasWidth >= 1408) { // 1440px wide of display
      startingPointX = canvasWidth * 0.35;
      startingPointY = canvasHeight * 0.05;
      containerWidth = canvasWidth * 0.3;
      containerHeight = canvasHeight * 0.9;
    }

    drawStackContainer(ctx, startingPointX, startingPointY, containerWidth, containerHeight);
  }

  const drawStackContainer = (ctx, startX, startY, containerWidth, containerHeight) => {
    ctx.lineWidth = 7;
    // left side of the stack container
    ctx.moveTo(startX, startY);
    ctx.lineTo(startX, startY + containerHeight);

    // bottom of the stack container
    // to fill the gap at the bottom left & right corner of the container, +- 3.5
    ctx.moveTo(startX - 3.5, startY + containerHeight);
    ctx.lineTo(startX + containerWidth + 3.5, startY + containerHeight);

    // right side of the stack container
    ctx.moveTo(startX + containerWidth, startY + containerHeight);
    ctx.lineTo(startX + containerWidth, startY);

    ctx.stroke();
  }


  return (
    <canvas ref={canvasRef}></canvas>
  )
}

export default StackCanvas;
