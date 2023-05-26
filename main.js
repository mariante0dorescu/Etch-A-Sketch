"use strict";

const sketchContainer = document.querySelector('.sketch');
const gridSize = document.getElementById('myRange');
const gridSizeInput = document.getElementById('grid__size--input');
let isMouse = false;

document.addEventListener('mousedown', (e) => {
  isMouse = true;
  console.log(isMouse)
})
document.addEventListener('mouseup', (e) => {
  isMouse = false;
  console.log(isMouse)
})


function createGrid() {
  for (let i = 0; i < 4096; i++) {
    const div = document.createElement("div");
    div.classList.add("box");
    sketchContainer.appendChild(div);
    gridSizeInput.innerText = gridSize.value;
  }
}

function getRandomRgb() {
  const num = Math.round(0xffffff * Math.random());
  const r = num >> 16;
  const g = num >> 8 & 255;
  const b = num & 255;
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

createGrid();

function updateGrid(size){
  sketchContainer.innerHTML = "";
  sketchContainer.style.setProperty(
    "grid-template-columns",
    `repeat(${size}, 2fr)`
  );
  sketchContainer.style.setProperty(
    "grid-template-rows",
    `repeat(${size}, 2fr)`
  );
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList.add("box");
    sketchContainer.appendChild(div);
  }
}

gridSize.addEventListener("change", (e) => {
  updateGrid(e.target.value)
  gridSizeInput.innerText = e.target.value;
  draw()
})


function draw(){
  const boxes = document.querySelectorAll('.box');
  boxes.forEach((box) => {
    box.addEventListener("mouseover", (e) => {
     if(isMouse) {
      e.target.style.background =  getRandomRgb();
     }
    })
  })
}

draw();
