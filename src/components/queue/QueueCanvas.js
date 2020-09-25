import React, { useEffect, useRef } from 'react'

const QueueCanvas = ({ queueItems }) => {
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

  }, [queueItems]);

  const draw = (ctx, canvasWidth, canvasHeight) => {
    let startingPointX;
    let startingPointY;
    let containerWidth;
    let containerHeight;
    let fontSize = 14;

    if (canvasWidth >= 1408) { // 1440px wide of display
      startingPointX = canvasWidth * 0.15;
      startingPointY = canvasHeight * 0.25;
      containerWidth = canvasWidth * 0.7;
      containerHeight = canvasHeight * 0.5;
      // fontSize = 20;
    }
    else if (canvasWidth >= 992) { // 1024px wide of display
      startingPointX = canvasWidth * 0.15;
      startingPointY = canvasHeight * 0.25;
      containerWidth = canvasWidth * 0.7;
      containerHeight = canvasHeight * 0.5;
    }
    else if (canvasWidth >= 736) { // 768px wide of display
      startingPointX = canvasWidth * 0.20;
      startingPointY = canvasHeight * 0.025;
      containerWidth = canvasWidth * 0.6;
      containerHeight = canvasHeight * 0.95;
    }
    else if (canvasWidth >= 393) { // 425px wide of display
      startingPointX = canvasWidth * 0.17;
      startingPointY = canvasHeight * 0.025;
      containerWidth = canvasWidth * 0.66;
      containerHeight = canvasHeight * 0.95;
    }
    else { // narrower than 425px wide
      startingPointX = canvasWidth * 0.13;
      startingPointY = canvasHeight * 0.025;
      containerWidth = canvasWidth * 0.74;
      containerHeight = canvasHeight * 0.95;
    }

    queueItems.forEach((stackData, i) => {
      ctx.textAlign = 'start';
      ctx.font = `normal ${fontSize}px sans-serif`;

      if (i === 0) { // draw container only if it's first time to render
        drawQueueContainer(ctx, startingPointX, startingPointY, containerWidth, containerHeight);
      }

      // each stack item's size property
      const stackItemGap = containerHeight * 0.01;
      const stackItemWidth = containerWidth * 0.88;
      const stackItemHeight = containerHeight * 0.09;

      // "staring x, y point of each stack item"
      const stackItemStartX = startingPointX + containerWidth * 0.06;
      const stackItemStartY = canvasHeight - startingPointY - (stackItemGap + stackItemHeight) * (i + 1);
      // drawQueueItem(ctx, stackItemWidth, stackItemHeight, stackItemStartX, stackItemStartY);

      const printX = startingPointX + containerWidth * 0.1;
      const printY = canvasHeight - startingPointY - (stackItemGap + stackItemHeight * 0.7) - (stackItemGap + stackItemHeight) * i;
      const maxWidthOfData = stackItemWidth * 0.9;  // maximum width of data inside of each nodes

      printData(ctx, stackData, printX, printY, 18, maxWidthOfData);
    });
  }

  const drawQueueContainer = (ctx, startX, startY, containerWidth, containerHeight) => {
    ctx.lineWidth = 7;
    // upper side of the queue container
    ctx.moveTo(startX, startY);
    ctx.lineTo(startX + containerWidth, startY);

    // bottom side of the queue container
    ctx.moveTo(startX, startY + containerHeight);
    ctx.lineTo(startX + containerWidth, startY + containerHeight);

    ctx.stroke();
  }

  const drawQueueItem = (ctx, stackItemWidth, stackItemHeight, stackItemStartX, stackItemStartY) => {
    ctx.fillStyle = "#F18677";
    ctx.fillRect(stackItemStartX, stackItemStartY, stackItemWidth, stackItemHeight);
  }

  function printData(context, text, x, y, lineHeight, fitWidth = 0, lineNum = 0) {
    context.fillStyle = "#000";

    // if text's width is 0, no need to wrap data
    if (fitWidth <= 0) {
      context.fillText(text, x, y);
      return;
    }

    // divide data until the substring's width is longer than the specified width
    for (let i = 1; i <= text.length; i++) {
      let str = text.substr(0, i);
      if (context.measureText(str).width > fitWidth) {
        if (lineNum < 3) { // truncate data from line number 6
          context.fillText(text.substr(0, i - 1), x, y);
        }
        else {
          context.fillText('', x, y);
        }
        printData(context, text.substr(i - 1), x, y + lineHeight, lineHeight, fitWidth, lineNum + 1);
        return;
      }
    }
    if (lineNum < 3) { // truncate data from line number 6
      context.fillText(text, x, y);
    }
    else {
      context.fillText('', x, y);
    }
  }

  return (
    <canvas ref={canvasRef}></canvas>
  )
}

export default QueueCanvas;
