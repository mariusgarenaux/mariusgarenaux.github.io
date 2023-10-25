import { Pasc_Triangle } from "./pascal_triangle.js";

window.onload = function() {
    let canvas = document.getElementById('canvas1');
    var translatePos = {
      x: 0,
      y: 0,
    };

    var scale = 1.0;
    var scaleMultiplier = 0.8;
    var startDragOffset = {};
    var mouseDown = false;

    // add button event listeners
    document.getElementById('btn').addEventListener('click', function() {
      draw(scale, translatePos);
    }, false);

    document.getElementById("plus").addEventListener("click", function() {
      scale /= scaleMultiplier;
      draw(scale, translatePos);
    }, false);

    document.getElementById("minus").addEventListener("click", function() {
      scale *= scaleMultiplier;
      draw(scale, translatePos);
    }, false);

    // add event listeners to handle screen drag
    canvas.addEventListener("mousedown", function(evt) {
      mouseDown = true;
      startDragOffset.x = evt.clientX - translatePos.x;
      startDragOffset.y = evt.clientY - translatePos.y;
    });

    canvas.addEventListener("mouseup", function(evt) {
      mouseDown = false;
    });

    canvas.addEventListener("mouseover", function(evt) {
      mouseDown = false;
    });

    canvas.addEventListener("mouseout", function(evt) {
      mouseDown = false;
    });

    canvas.addEventListener("mousemove", function(evt) {
      if (mouseDown) {
        translatePos.x = evt.clientX - startDragOffset.x;
        translatePos.y = evt.clientY - startDragOffset.y;
        draw(scale, translatePos);
      }
    });

    draw(scale, translatePos);
  };

function draw(scale, translatePos) {
    var canvas = document.getElementById("canvas1");
    var context = canvas.getContext("2d");

    // clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    //draw the triangle
    context.save();
    context.translate(translatePos.x, translatePos.y);
    context.scale(scale, scale);
    let n = parseInt(document.getElementById('n').value);
    let size = 800/(2*n); //size of balls
    let modulo = parseInt(document.getElementById('modulo').value); //we will watch pascal's triangle modulo this number
    let Pasc_Triangle_1 = new Pasc_Triangle(size, n, modulo);
    Pasc_Triangle_1.create(); //compute values and coordinates of each element;
    context.clearRect(0, 0, canvas.width, canvas.height);
    Pasc_Triangle_1.draw(context); //draw the triangle
    context.restore();
  }