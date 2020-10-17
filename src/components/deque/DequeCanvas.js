import React, { useEffect, useRef } from 'react'

const DequeCanvas = ({ dequeItems }) => {
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
  }, [dequeItems]);

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

    const queueSize = dequeItems.length - 1;

    dequeItems.forEach((dequeData, i) => {
      ctx.textAlign = 'start';
      ctx.font = `normal ${fontSize}px sans-serif`;

      // each queue item's size property
      const dequeItemGap = containerWidth * 0.01;
      const dequeItemWidth = containerWidth * 0.091;
      const dequeItemHeight = containerHeight * 0.86;

      // "staring x, y point of each queue item"
      const dequeItemStartX = startingPointX + (dequeItemGap + dequeItemWidth) * i;
      const dequeItemStartY = startingPointY + containerHeight * 0.07;

      const leftForwardArrowX = 30;
      const rightForwardArrowX = startingPointX + containerWidth + 30;
      const forwardArrowY = startingPointY + containerHeight / 3;
      const backwardArrowY = startingPointY + containerHeight / 3 * 2;

      if (i === 0) { // draw container only if it's first time to render
        if (canvasWidth >= 1408) {
          // forward arrow (->) at the left side
          drawForwardArrow(ctx, leftForwardArrowX, forwardArrowY, leftForwardArrowX + 60, forwardArrowY);
          // forward arrow (->) at the right side
          drawForwardArrow(ctx, rightForwardArrowX, forwardArrowY, rightForwardArrowX + 60, forwardArrowY)
          // backward arrow (<-) at the left side
          drawBackwardArrow(ctx, leftForwardArrowX, backwardArrowY, leftForwardArrowX + 60, backwardArrowY);
          // backward arrow (<-) at the right side
          drawBackwardArrow(ctx, rightForwardArrowX, backwardArrowY, rightForwardArrowX + 60, backwardArrowY);
        }

        drawDequeContainer(ctx, startingPointX, startingPointY, containerWidth, containerHeight);
        // draw 'front' text above the container
        drawFrontText(ctx, startingPointX, startingPointY - 10, dequeItemWidth);
      }

      drawDequeItem(ctx, dequeItemWidth, dequeItemHeight, dequeItemStartX, dequeItemStartY);

      const printX = startingPointX + dequeItemWidth * 0.07 + (dequeItemGap + dequeItemWidth) * i;
      const printY = startingPointY + containerHeight * 0.15;
      const maxWidthOfData = dequeItemWidth * 0.9;  // maximum width of data inside of each nodes

      printData(ctx, dequeData, printX, printY, 18, maxWidthOfData);

      if (i === queueSize) {
        // draw 'back' text below the container
        drawBackText(ctx, startingPointX, startingPointY, dequeItemWidth, dequeItemGap, containerHeight, i);
      }
    });
  }

  const drawDequeContainer = (ctx, startX, startY, containerWidth, containerHeight) => {
    ctx.lineWidth = 7;
    // upper side of the queue container
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(startX + containerWidth, startY);

    // bottom side of the queue container
    ctx.moveTo(startX, startY + containerHeight);
    ctx.lineTo(startX + containerWidth, startY + containerHeight);

    ctx.stroke();
  }

  const drawDequeItem = (ctx, dequeItemWidth, dequeItemHeight, dequeItemStartX, dequeItemStartY) => {
    ctx.fillStyle = "#F18677";
    ctx.fillRect(dequeItemStartX, dequeItemStartY, dequeItemWidth, dequeItemHeight);
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

  const drawBackText = (ctx, startX, startY, itemWidth, itemGap, containerHeight, index) => {
    ctx.fillStyle = 'red';

    const rearTextWidth = ctx.measureText('Back').width;
    const rearX = startX + (itemWidth - rearTextWidth) / 2 + (itemGap + itemWidth) * index;
    const rearY = startY + containerHeight + 20;

    ctx.fillText('Back', rearX, rearY);
  }

  const drawForwardArrow = (ctx, fromX, fromY, toX, toY) => {
    ctx.beginPath();
    let headlen = 9; // length of head in pixels
    let dx = toX - fromX;
    let dy = toY - fromY;
    let angle = Math.atan2(dy, dx);
    ctx.strokeStyle = "#000";
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(toX, toY);
    ctx.lineTo(toX - headlen * Math.cos(angle - Math.PI / 6), toY - headlen * Math.sin(angle - Math.PI / 6));
    ctx.moveTo(toX, toY);
    ctx.lineTo(toX - headlen * Math.cos(angle + Math.PI / 6), toY - headlen * Math.sin(angle + Math.PI / 6));
    ctx.stroke();
    ctx.closePath();
  }

  const drawBackwardArrow = (ctx, fromX, fromY, toX, toY) => {
    ctx.beginPath();
    let headlen = 9; // length of head in pixels
    let dx = fromX - toX;
    let dy = fromY - toY;
    let angle = Math.atan2(dy, dx);
    ctx.strokeStyle = "#000";
    ctx.moveTo(toX, toY);
    ctx.lineTo(fromX, fromY);
    ctx.lineTo(fromX - headlen * Math.cos(angle - Math.PI / 6), fromY - headlen * Math.sin(angle - Math.PI / 6));
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(fromX - headlen * Math.cos(angle + Math.PI / 6), fromY - headlen * Math.sin(angle + Math.PI / 6));
    ctx.stroke();
  }

  return (
    <canvas ref={canvasRef}></canvas>
  )
}

export default DequeCanvas;
