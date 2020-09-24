import React, { useEffect, useRef } from 'react'

const DllCanvas = ({
  nodes
}) => {
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

    draw(ctx, nodes, canvasWidth, canvasHeight);
  }, [nodes]);

  const draw = (ctx, nodes, canvasWidth, canvasHeight) => {
    // define rectangle's width and height with respect to the canvas' size
    let rectWidth;
    let rectHeight;
    let startingPointX;
    let startingPointY;
    let horizArrowLen; // horizontal arrow's length
    let vertArrowLen; // vertical arrow's length
    let fontSize;
    let lineHeightOfData = 20; // line height of data inside of each nodes
    if (canvasWidth >= 1408) { // 1440px wide
      rectWidth = canvasWidth * 0.17;
      rectHeight = canvasHeight * 0.2;
      startingPointX = canvasWidth * 0.01;
      startingPointY = canvasHeight * 0.05;
      horizArrowLen = canvasWidth * 0.1;
      vertArrowLen = canvasHeight * 0.15;
      lineHeightOfData = 22;
      fontSize = 24;
    }
    else if (canvasWidth >= 992) { // 1024px wide
      rectWidth = canvasWidth * 0.1682;
      rectHeight = canvasHeight * 0.1748;
      startingPointX = canvasWidth * 0.01;
      startingPointY = canvasHeight * 0.05;
      horizArrowLen = canvasWidth * 0.1024;
      vertArrowLen = canvasHeight * 0.1878;
      fontSize = 22;

    }
    else if (canvasWidth >= 736) { // 768px wide
      rectWidth = canvasWidth * 0.1502;
      rectHeight = canvasHeight * 0.1748;
      startingPointX = canvasWidth * 0.01;
      startingPointY = canvasHeight * 0.05;
      horizArrowLen = canvasWidth * 0.1264;
      vertArrowLen = canvasHeight * 0.1878;
      fontSize = 18;
    }
    else if (canvasWidth <= 393) { // 425px wide
      rectWidth = canvasWidth * 0.1799;
      rectHeight = canvasHeight * 0.19;
      startingPointX = canvasWidth * 0.01;
      startingPointY = canvasHeight * 0.05;
      horizArrowLen = canvasWidth * 0.0868;
      vertArrowLen = canvasHeight * 0.165;
      fontSize = 16;
    }
    else { // narrow than 425px
      rectWidth = canvasWidth * 0.1883;
      rectHeight = canvasHeight * 0.1934;
      startingPointX = canvasWidth * 0.01;
      startingPointY = canvasHeight * 0.05;
      horizArrowLen = canvasWidth * 0.0756;
      vertArrowLen = canvasHeight * 0.1599;
      fontSize = 14;
    }

    const nodeLength = nodes.length;
    const maxWidthOfData = rectWidth * 0.8;  // maximum width of data inside of each nodes
    nodes.forEach((nodeData, i) => {
      ctx.strokeStyle = '#003FFF';
      ctx.fillStyle = '#000';
      ctx.textAlign = 'start';
      ctx.shadowBlur = 2;
      ctx.font = `normal ${fontSize}px sans-serif`;

      if (i < 4) {
        // x, y point of a rectangle, respectively
        const rectX = startingPointX + (rectWidth + horizArrowLen) * i;
        const rectY = startingPointY;
        // x, y point of print, respectively
        const printX = (startingPointX + rectWidth * 0.1) + (rectWidth + horizArrowLen) * i;
        const printY = startingPointY + (rectHeight * 0.25);

        ctx.strokeRect(rectX, rectY, rectWidth, rectHeight);
        printData(ctx, nodeData, printX, printY, lineHeightOfData, maxWidthOfData);

        // print "head" text
        ctx.fillStyle = "red";
        if (i === 0) {
          const headTextWidth = ctx.measureText('head').width;
          const headTextX = startingPointX + (rectWidth - headTextWidth) / 2; // x point of "head" text
          const headTextY = startingPointY * 0.8 // y point of "head" text
          ctx.fillText('head', headTextX, headTextY);
        }
        if (i !== 0) {
          // both arrows' "from" x point
          const arrowFromX = (startingPointX + rectWidth) + (horizArrowLen + rectWidth) * (i - 1);
          // y point of forward arrow (-->)
          const fArrowY = startingPointY + (rectHeight * 0.333);
          // both arrows' "to" x point
          const arrowToX = startingPointX + (rectWidth + horizArrowLen) * i;
          // y point of backward arrow (<--)
          const bArrowY = startingPointY + (rectHeight * 0.667);

          drawForwardArrow(ctx, arrowFromX, fArrowY, arrowToX, fArrowY);
          drawBackwardArrow(ctx, arrowFromX, bArrowY, arrowToX, bArrowY);
        }
        if (i === nodeLength - 1) { // if the last node, print "tail" text
          ctx.fillStyle = "red";
          const tailTextWidth = ctx.measureText('tail').width;
          // x point of "tail" text
          const tailTextX = startingPointX + (rectWidth - tailTextWidth) / 2 + (rectWidth + horizArrowLen) * i
          // y point of "tail" text
          const tailTextY = (startingPointY * 1.65) + rectHeight;

          ctx.fillText("tail", tailTextX, tailTextY);
        }
      }
      else if (i >= 4 && i < 8) {
        // x, y point of a rectangle, respectively
        const rectX = canvasWidth - (startingPointX + rectWidth) - (horizArrowLen + rectWidth) * (i - 4);
        const rectY = startingPointY + rectHeight + vertArrowLen;
        // x, y point of print, respectively
        const printX = canvasWidth - (startingPointX + rectWidth * 0.9) - (horizArrowLen + rectWidth) * (i - 4);
        const printY = startingPointY + rectHeight * 1.25 + vertArrowLen;

        ctx.strokeRect(rectX, rectY, rectWidth, rectHeight);
        printData(ctx, nodeData, printX, printY, lineHeightOfData, maxWidthOfData);

        if (i !== 4) {
          // both arrows' "from" x point
          const arrowFromX = canvasWidth - startingPointX - (rectWidth + horizArrowLen) * (i - 4);
          // "from" y point of forward arrow (-->)
          const fArrowY = startingPointY + rectHeight * 1.333 + vertArrowLen;
          // both arrows' "to" x point
          const arrowToX = canvasWidth - (startingPointX + rectWidth) - (horizArrowLen + rectWidth) * (i - 5);
          // y point of backward arrow (<--)
          const bArrowY = startingPointY + rectHeight * 1.667 + vertArrowLen;

          drawForwardArrow(ctx, arrowFromX, fArrowY, arrowToX, fArrowY);
          drawBackwardArrow(ctx, arrowFromX, bArrowY, arrowToX, bArrowY);
        }
        else { // vertical arrow
          // vertical forward arrow's (v) x point
          const vertFwArrowX = canvasWidth - startingPointX - (rectWidth * 0.667);
          // vertical backward arrow's (^) x point
          const vertBwArrowX = canvasWidth - startingPointX - (rectWidth * 0.333);
          // vertical arrows' "from" y point
          const vertArrowFromY = startingPointY + rectHeight;
          // vertical arrow's "to" y point
          const vertArrowToY = startingPointY + rectHeight + vertArrowLen;

          drawForwardArrow(ctx, vertFwArrowX, vertArrowFromY, vertFwArrowX, vertArrowToY);
          drawBackwardArrow(ctx, vertBwArrowX, vertArrowFromY, vertBwArrowX, vertArrowToY);
        }
        if (i === nodeLength - 1) { // if the last node, print "tail" text
          ctx.fillStyle = "red";
          const tailTextWidth = ctx.measureText('tail').width;
          // x point of "tail" text
          const tailTextX = canvasWidth - startingPointX - tailTextWidth - (rectWidth - tailTextWidth) / 2 - (rectWidth + horizArrowLen) * (i - 4);
          // y point of "tail" text
          const tailTextY = (startingPointY * 1.8) + rectHeight * 2 + vertArrowLen;

          ctx.fillText("tail", tailTextX, tailTextY);
        }
      }
      else if (i >= 8) {
        // x, y point of a rectangle, respectively
        const rectX = startingPointX + (rectWidth + horizArrowLen) * (i - 8);
        const rectY = startingPointY + rectHeight * 2 + vertArrowLen * 2;
        // x, y point of print, respectively
        const printX = (startingPointX + rectWidth * 0.1) + (rectWidth + horizArrowLen) * (i - 8);
        const printY = canvasHeight - (startingPointY + rectHeight * 0.75);

        ctx.strokeRect(rectX, rectY, rectWidth, rectHeight);
        printData(ctx, nodeData, printX, printY, lineHeightOfData, maxWidthOfData);
        if (i !== 8) {
          // both arrows' "from" x point
          const arrowFromX = (startingPointX + rectWidth) + (horizArrowLen + rectWidth) * (i - 9);
          // y point of forward arrow (-->)
          const fArrowY = canvasHeight - (startingPointY + rectHeight * 0.667);
          // both arrows' "to" x point
          const arrowToX = startingPointX + (rectWidth + horizArrowLen) * (i - 8);
          // y point of backward arrow (<--)
          const bArrowY = canvasHeight - (startingPointY + rectHeight * 0.333);

          drawForwardArrow(ctx, arrowFromX, fArrowY, arrowToX, fArrowY);
          drawBackwardArrow(ctx, arrowFromX, bArrowY, arrowToX, bArrowY);
        }
        else { // vertical arrow
          // vertical forward arrow's (v) x point
          const vertFwArrowX = startingPointX + rectWidth * 0.333;
          // vertical backward arrow's (^) x point
          const vertBwArrowX = startingPointX + rectWidth * 0.667;
          // vertical arrows' "from" y point
          const vertArrowFromY = canvasHeight - (startingPointY + rectHeight + vertArrowLen);
          // vertical arrow's "to" y point
          const vertArrowToY = canvasHeight - (startingPointY + rectHeight);

          drawForwardArrow(ctx, vertFwArrowX, vertArrowFromY, vertFwArrowX, vertArrowToY);
          drawBackwardArrow(ctx, vertBwArrowX, vertArrowFromY, vertBwArrowX, vertArrowToY);
        }
        if (i === nodeLength - 1) { // if the last node, print "tail" text
          ctx.fillStyle = "red";
          const tailTextWidth = ctx.measureText('tail').width;
          // x point of "tail" text
          const tailTextX = startingPointX + (rectWidth - tailTextWidth) / 2 + (rectWidth + horizArrowLen) * (i - 8);
          // y point of "tail" text
          const tailTextY = (startingPointY * 1.65) + rectHeight * 3 + vertArrowLen * 2;

          ctx.fillText("tail", tailTextX, tailTextY);
        }
      }
    });
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

  function printData(context, text, x, y, lineHeight, fitWidth = 0, lineNum = 0) {
    // if text's width is 0, no need to wrap data
    if (fitWidth <= 0) {
      context.fillText(text, x, y);
      return;
    }

    // divide data until the substring's width is longer than the specified width
    for (let i = 1; i <= text.length; i++) {
      let str = text.substr(0, i);
      if (context.measureText(str).width > fitWidth) {
        if (lineNum < 5) { // truncate data from line number 6
          context.fillText(text.substr(0, i - 1), x, y);
        }
        else {
          context.fillText('', x, y);
        }
        printData(context, text.substr(i - 1), x, y + lineHeight, lineHeight, fitWidth, lineNum + 1);
        return;
      }
    }
    if (lineNum < 5) { // truncate data from line number 6
      context.fillText(text, x, y);
    }
    else {
      context.fillText('', x, y);
    }
  }

  return (
    <canvas ref={canvasRef}></canvas>
  );
}

export default DllCanvas;
