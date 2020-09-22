import React, { useEffect, useRef } from 'react'

const DllCanvas = ({
  nodes
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    draw(ctx, nodes);
    // canvas_arrow(ctx, 40, 0, 100, 10);
  }, [nodes]);

  const draw = (ctx, nodes) => {
    const nodeLength = nodes.length;
    nodes.forEach((nodeData, i) => {
      ctx.strokeStyle = '#003FFF';
      ctx.fillStyle = '#000';
      ctx.textAlign = 'start';
      ctx.shadowBlur = 2;
      ctx.font = 'normal 22px Roboto';

      if (i < 4) {
        ctx.strokeRect(30 + 400 * i, 20, 250, 120);
        printData(ctx, nodeData.data, 55 + 400 * i, 50, 20, 200);
        // print "head" text
        ctx.fillStyle = "red";
        if (i === 0) {
          ctx.fillText('head', 135, 16);
        }
        if (i !== 0) {
          drawForwardArrow(ctx, 280 + 400 * (i - 1), 65, 30 + 400 * i, 65);
          drawBackwardArrow(ctx, 280 + 400 * (i - 1), 85, 30 + 400 * i, 85);
        }
        if (i === nodeLength - 1) { // if the last node, print "tail" text
          ctx.fillStyle = "red";
          ctx.fillText("tail", 142 + 400 * i, 160);
        }
      }
      else if (i >= 4 && i < 8) {
        ctx.strokeRect(1230 - 400 * (i % 4), 250, 250, 120);
        printData(ctx, nodeData.data, 1255 - 400 * (i % 4), 280, 20, 200);
        if (i !== 4) {
          drawForwardArrow(ctx, 1230 - 400 * (i % 5), 295, 1480 - 400 * ((i + 1) % 5), 295);
          drawBackwardArrow(ctx, 1230 - 400 * (i % 5), 315, 1480 - 400 * ((i + 1) % 5), 315);
        }
        else {
          drawForwardArrow(ctx, 1340, 140, 1340, 250);
          drawBackwardArrow(ctx, 1360, 140, 1360, 250);
        }
        if (i === nodeLength - 1) { // if the last node, print "tail" text
          ctx.fillStyle = "red";
          ctx.fillText("tail", 1345 - 400 * (i % 4), 390);
        }
      }
      else if (i >= 8) {
        ctx.strokeRect(30 + 400 * (i % 8), 480, 250, 120);
        printData(ctx, nodeData.data, 55 + 400 * (i % 8), 510, 20, 200);
        if (i !== 8) {
          drawForwardArrow(ctx, 280 + 400 * ((i - 1) % 8), 525, 30 + 400 * (i % 8), 525);
          drawBackwardArrow(ctx, 280 + 400 * ((i - 1) % 8), 545, 30 + 400 * (i % 8), 545);
        }
        else {
          drawForwardArrow(ctx, 140, 370, 140, 480);
          drawBackwardArrow(ctx, 160, 370, 160, 480);
        }
        if (i === nodeLength - 1) { // if the last node, print "tail" text
          ctx.fillStyle = "red";
          ctx.fillText("tail", 142 + 400 * (i % 8), 620);
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
    <canvas
      ref={canvasRef}>
    </canvas>
  );
}

export default DllCanvas;
