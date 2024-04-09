document.addEventListener("DOMContentLoaded", function() {
  // Canvas setup
  const canvas = document.getElementById('main');
  const ctx = canvas.getContext('2d');

  // Variables
  let isPainting = false;
  let brushColor = '#000000';
  let brushSize = 5;

  // Functions
  function startPainting(e) {
    isPainting = true;
    draw(e);
  }

  function stopPainting() {
    isPainting = false;
    ctx.beginPath();
  }

  function draw(e) {
    if (!isPainting) return;

    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.strokeStyle = brushColor;

    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  }

  function changeBrushColor(color) {
    brushColor = color;
  }

  function changeBrushSize(size) {
    brushSize = size;
    document.getElementById('brushSize').textContent = size;
  }

  function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  // Event Listeners
  canvas.addEventListener('mousedown', startPainting);
  canvas.addEventListener('mouseup', stopPainting);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseout', stopPainting);

  document.getElementById('black').addEventListener('click', () => changeBrushColor('#000000'));
  document.getElementById('pink').addEventListener('click', () => changeBrushColor('#F50057'));
  document.getElementById('blue').addEventListener('click', () => changeBrushColor('#2979FF'));
  document.getElementById('yellow').addEventListener('click', () => changeBrushColor('#FFD600'));

  document.getElementById('slider').addEventListener('input', (e) => changeBrushSize(e.target.value));

  document.getElementById('erase').addEventListener('click', () => changeBrushColor('#ffffff')); // White color acts as an eraser

  document.getElementById('new').addEventListener('click', clearCanvas);
});
