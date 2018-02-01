var app = function(){
  var canvas = document.querySelector('#main-canvas');
  var context = canvas.getContext('2d');
  var colourPicker = document.querySelector('#input-color');
  var changeColour = function(){
    context.fillStyle = this.value;
  }

  colourPicker.addEventListener('change', changeColour);
  canvas.addEventListener('click', function(event){
    drawCircle(event.layerX, event.layerY, context);
  });
}

var drawCircle = function(x, y, context){
  context.beginPath();
  context.arc(x, y, 6, 0, 2 * Math.PI);
  context.fill();
}


window.addEventListener('load', app);
