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
    let fontSize = 16;

    if (canvasWidth >= 1408) { // 1440px wide of display
      startingPointX = canvasWidth * 0.1;
      startingPointY = canvasHeight * 0.1;
      containerWidth = canvasWidth * 0.8;
      containerHeight = canvasHeight * 0.5;
    }
    else if (canvasWidth >= 992) { // 1024px wide of display
      startingPointX = canvasWidth * 0.08;
      startingPointY = canvasHeight * 0.1;
      containerWidth = canvasWidth * 0.84;
      containerHeight = canvasHeight * 0.5;
    }
    else if (canvasWidth >= 736) { // 768px wide of display
      startingPointX = canvasWidth * 0.06;
      startingPointY = canvasHeight * 0.1;
      containerWidth = canvasWidth * 0.88;
      containerHeight = canvasHeight * 0.5;
    }
    else if (canvasWidth >= 393) { // 425px wide of display
      startingPointX = canvasWidth * 0.03;
      startingPointY = canvasHeight * 0.1;
      containerWidth = canvasWidth * 0.94;
      containerHeight = canvasHeight * 0.5;
    }
    else { // narrower than 425px wide
      startingPointX = canvasWidth * 0.02;
      startingPointY = canvasHeight * 0.1;
      containerWidth = canvasWidth * 0.96;
      containerHeight = canvasHeight * 0.5;
    }

    const queueSize = queueItems.length - 1;
    queueItems.forEach((queueData, i) => {
      ctx.textAlign = 'start';
      ctx.font = `normal ${fontSize}px sans-serif`;

      // each queue item's size property
      const queueItemGap = containerWidth * 0.01;
      const queueItemWidth = containerWidth * 0.091;
      const queueItemHeight = containerHeight * 0.86;

      // "staring x, y point of each queue item"
      const queueItemStartX = startingPointX + (queueItemGap + queueItemWidth) * i;
      const queueItemStartY = startingPointY + containerHeight * 0.07;

      if (i === 0) { // draw container only if it's first time to render
        drawQueueContainer(ctx, startingPointX, startingPointY, containerWidth, containerHeight);
        // draw 'front' text above the container
        drawFrontText(ctx, startingPointX, startingPointY - 10, queueItemWidth);
      }

      drawQueueItem(ctx, queueItemWidth, queueItemHeight, queueItemStartX, queueItemStartY);

      const printX = startingPointX + queueItemWidth * 0.07 + (queueItemGap + queueItemWidth) * i;
      const printY = startingPointY + containerHeight * 0.15;
      const maxWidthOfData = queueItemWidth * 0.9;  // maximum width of data inside of each nodes

      printData(ctx, queueData, printX, printY, 18, maxWidthOfData);

      if (i === queueSize) {
        // draw 'rear' text below the container
        drawRearText(ctx, startingPointX, startingPointY, queueItemWidth, queueItemGap, containerHeight, i);
      }
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

  const drawQueueItem = (ctx, queueItemWidth, queueItemHeight, queueItemStartX, queueItemStartY) => {
    ctx.fillStyle = "#F18677";
    ctx.fillRect(queueItemStartX, queueItemStartY, queueItemWidth, queueItemHeight);
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
        if (lineNum < 15) { // truncate data from line number 15
          context.fillText(text.substr(0, i - 1), x, y);
        }
        else {
          context.fillText('', x, y);
        }
        printData(context, text.substr(i - 1), x, y + lineHeight, lineHeight, fitWidth, lineNum + 1);
        return;
      }
    }
    if (lineNum < 15) { // truncate data from line number 15
      context.fillText(text, x, y);
    }
    else {
      context.fillText('', x, y);
    }
  }

  const drawFrontText = (ctx, startX, startY, itemWidth) => {
    ctx.fillStyle = 'red';

    const frontTextWidth = ctx.measureText('front').width;
    const frontX = startX + (itemWidth - frontTextWidth) / 2;
    const frontY = startY;
    ctx.fillText('Front', frontX, frontY);
  }

  const drawRearText = (ctx, startX, startY, itemWidth, itemGap, containerHeight, index) => {
    ctx.fillStyle = 'red';

    const rearTextWidth = ctx.measureText('Rear').width;
    const rearX = startX + (itemWidth - rearTextWidth) / 2 + (itemGap + itemWidth) * index;
    const rearY = startY + containerHeight + 20;

    ctx.fillText('Rear', rearX, rearY);
  }

  return (
    <canvas ref={canvasRef}></canvas>
  )
}

export default QueueCanvas;
