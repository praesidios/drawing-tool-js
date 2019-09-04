const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const [createCanvas, removeCanvas, createLineBut, createRectangleBut] = document.querySelectorAll('button');
const headerSection = document.querySelectorAll('header div');





const showHideSections = () => {
  headerSection.forEach((section) =>{
    section.style.display = (canvas.width && canvas.height) === 0 ? "none" : "block";
    headerSection[0].style.display = "block";
  });
};

createCanvas.addEventListener('click', function(){
  const [width, height] = document.querySelectorAll('.createCanvasSection input');
  canvas.width = width.value;
  canvas.height = height.value;
  showHideSections();
  [width.value, height.value] = "";
});


removeCanvas.addEventListener('click', function(){
  [canvas.width, canvas.height] = '0';
  showHideSections();
});
  
  



const createLine = () => {
  const [fromY, fromX, toY, toX] = document.querySelectorAll('.createLineSection input');

  context.beginPath();

  if((+fromX.value < +toX.value) && (+toX.value >= +toY.value)){
    for (let x = +fromX.value; x < +toX.value; x+=3) {
      context.fillText("=", x,  +fromY.value);
    }
  }
  else if((+fromY.value < +toY.value) && (+toY.value > +toX.value)){
    for (let y = +fromY.value; y < +toY.value; y += 3) {
      context.fillText("=", +fromX.value,  y);
    }
  }
  else if((+fromX.value > +toX.value) && (+toY.value <= +toX.value)){
    for (let x = +fromX.value; x > +toX.value; x-=3) {
      context.fillText("=", x,  +fromY.value);
    }
  }
  else if((+fromY.value > +toY.value) && (+toY.value > +toX.value)){
    for (let y = +fromY.value; y > +toY.value; y-= 3) {
      context.fillText("=", +fromX.value,  y);
    }
  }

  
  context.closePath();
  context.stroke();
}




const createRectangle = () => {
  const [upLeftCorY, upLeftCorX, lowRightCorY, lowRightCorX] = document.querySelectorAll('.createRectangleSection input');
  for(let x = +upLeftCorX.value; x < lowRightCorX.value; x+=5){
    context.fillText("x", x,  +upLeftCorY.value);
  }
  for(let y = +upLeftCorY.value; y < +lowRightCorY.value;  y+=5){
    context.fillText("x", +upLeftCorX.value,  y);
  }
  for(let x = +upLeftCorX.value; x < lowRightCorX.value; x+=5){
    context.fillText("x", x,  +lowRightCorY.value);
  }
  for(let y = +upLeftCorY.value; y < +lowRightCorY.value;  y+=5){
    context.fillText("x", +lowRightCorX.value, y);
  }
}



createLineBut.addEventListener('click', function(){
  createLine();
});

createRectangleBut.addEventListener('click', function(){
  createRectangle();
})
