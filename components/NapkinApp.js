import { useEffect, useRef } from 'react';

const NapkinApp = props => {
  const canvasRef = useRef(null);
  var canvasCtx = null;
  var mouse = {x: 0, y: 0};
  var isDrawing = false;
  
  useEffect(() => {
    canvasCtx = canvasRef.current.getContext('2d');
    canvasCtx.canvas.width = 800;
    canvasCtx.canvas.height = 600;
    canvasCtx.fillStyle = '#fff';   
    canvasCtx.fillRect(0, 0, canvasCtx.canvas.width, canvasCtx.canvas.height);
    canvasCtx.lineJoin = 'round';
    canvasCtx.lineCap = 'round';
    canvasCtx.lineWidth = 3;
    canvasCtx.canvas.style.cursor = 'pointer';
  }, [])

  const trackMousePos = (e) => {
    mouse.x = e.pageX - e.currentTarget.offsetLeft;
    mouse.y = e.pageY - e.currentTarget.offsetTop;

    if (isDrawing) {
      canvasCtx.lineTo(mouse.x, mouse.y);
      canvasCtx.stroke();
    }
  };

  const startDrawing = () => {
    canvasCtx.beginPath();
    canvasCtx.moveTo(mouse.x, mouse.y);
    isDrawing = true;
  };

  const stopDrawing = () => {
    isDrawing = false;
  };

  const clear = () => {
    canvasCtx.fillRect(0, 0, canvasCtx.canvas.width, canvasCtx.canvas.height);
  };

  const saveImage = (e) => {
    var image = null;

    if (e.currentTarget.getAttribute('data-filetype') === 'png') {
      image = canvasCtx.canvas.toDataURL();
      e.currentTarget.href = image;
    }
    if (e.currentTarget.getAttribute('data-filetype') === 'jpg') {
      image = canvasCtx.canvas.toDataURL('image/jpeg');
      e.currentTarget.href = image;
    }
  };

  const changeLineSize = (e) => {
    const size = e.target.getAttribute('data-size');

    // find and clear the current active button
    document.getElementsByClassName('btn-active')[0].classList.remove('btn-active'); 

    if (size === 'small') {
      canvasCtx.lineWidth = 3;
    }
    if (size === 'medium') {
      canvasCtx.lineWidth = 7;
    }
    if (size === 'large') {
      canvasCtx.lineWidth = 13;
    }
    
    e.currentTarget.classList.add('btn-active');
  };
  
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-indigo-200">
        <label>Line size</label>
        <div className="btn-group">
          <button onClick={changeLineSize} data-size="small" className="btn btn-outline btn-active">Small</button> 
          <button onClick={changeLineSize} data-size="medium" className="btn btn-outline">Medium</button> 
          <button onClick={changeLineSize} data-size="large" className="btn btn-outline">Large</button> 
        </div>
        <canvas 
          ref={canvasRef} {...props} 
          onMouseDown={startDrawing}
          onMouseMove={trackMousePos}
          onMouseUp={stopDrawing}
          className="m-2 border-2 border-purple-500" 
        />
      
        <div style={{"width": "800px"}}>
          <a onClick={saveImage} data-filetype="png" href="" download="drawing.png"><button className="btn btn-primary" >Save to PNG</button></a>&nbsp;
          <a onClick={saveImage} data-filetype="jpg" href="" download="drawing.jpg"><button className="btn btn-primary" >Save to JPG</button></a>
          <button onClick={clear} className="float-right btn btn-secondary">Clear</button>
        </div>
      </div>
    </>
  );
}

export default NapkinApp
