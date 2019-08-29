const wrapper = document.querySelector('.wrapper');
const canvasButton = document.querySelectorAll('.createCanvasSection button');
const canvas = document.querySelector('canvas');


canvasButton.forEach((button)=>{
  let widthInput = document.querySelector('.createCanvasSection .width');
  let heightInput = document.querySelector('.createCanvasSection .height');
  let headerSection = document.querySelectorAll('header div');


  button.addEventListener('click', function(){
    if(event.target.className === 'createCanvas'){
      canvas.width = widthInput.value;
      canvas.height = heightInput.value;
      widthInput.value = '';
      heightInput.value = '';

      headerSection.forEach((section) =>{
        section.style.display = "block";
      });
    }
    else {
      canvas.width = 0;
      canvas.height = 0;
    }
    
  })
});