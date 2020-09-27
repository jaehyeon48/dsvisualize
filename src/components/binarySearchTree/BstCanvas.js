import React, { useEffect, useRef } from 'react';

const BstCanvas = ({ bstItems }) => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const canvasWidth = canvas.offsetWidth;
    const canvasHeight = canvas.offsetHeight;
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    bstItems.forEach((bstNode, i) => {
      // maximum number of nodes in the specific depth level
      let maxNumOfNode = 2 ** bstNode.depth;
      let radius

      if (canvasWidth >= 1408) {
        radius = 30;
      }
      else if (canvasWidth >= 992) {
        radius = 27;
      }
      else if (canvasWidth >= 736) {
        radius = 23;
      }

      let startingPointX = radius + (canvasWidth - radius * 2 * maxNumOfNode) / 2 ** (bstNode.depth + 1);
      let startingPointY = radius * 2 + 10;
      let depthHeight = radius + 120;
      let nodeGap = 0;


      if (i !== 0) { // except root
        nodeGap = (canvasWidth - startingPointX * 2) / (2 ** bstNode.depth - 1);
      }

      let circleX = startingPointX + nodeGap * bstNode.pos;
      let circleY = startingPointY + depthHeight * bstNode.depth;

      drawCircle(ctx, circleX, circleY, radius);
      drawText(ctx, bstNode.data, circleX, circleY + 3);

      if (bstNode.depth !== 0) {
        let lineFromX;
        let lineFromY = circleY - bstNode.depth * 5.8;
        let lineToX;
        let lineToY = circleY - depthHeight + bstNode.depth * 5.8;
        if (bstNode.pos % 2 === 0) {
          lineFromX = circleX + radius - bstNode.depth * 3;
          lineToX = circleX - radius + nodeGap / 2 + bstNode.depth * 5.2;
        }
        else {
          lineFromX = circleX - radius + bstNode.depth * 3;
          lineToX = circleX + radius - nodeGap / 2 - bstNode.depth * 5.2;
        }
        drawLine(ctx, lineFromX, lineFromY, lineToX, lineToY);
      }
    });
  }, [bstItems]);

  const drawCircle = (ctx, circleX, circleY, circleRadius) => {
    ctx.fillStyle = '#0F4D43';
    ctx.beginPath();
    ctx.arc(circleX, circleY, circleRadius, 0, 2 * Math.PI)
    ctx.closePath();
    ctx.fill();
  }

  const drawText = (ctx, text, textX, textY) => {
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'center';
    ctx.font = `normal 16px sans-serif`;

    ctx.fillText(text, textX, textY);
  }

  const drawLine = (ctx, fromX, fromY, toX, toY) => {
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(toX, toY);
    ctx.stroke();
  }

  return (
    <canvas ref={canvasRef}></canvas>
  );
}

export default BstCanvas;
