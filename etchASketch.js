/* Create the grid container */

const body=document.querySelector('body');
const sketchGrid=document.createElement('div');

/* size of Grid */

const pixelGrid=960;

/* add grid class to sketchGrid */

sketchGrid.classList.add('grid');

/* initialize Grid */

fillGrid(16);

/* global variables to track user input */

let response;
let numValidate;

const button=document.querySelector('button');

/* clear button */

button.addEventListener('click', (e) => {
    numValidate=true;
    
    while (numValidate) {
        response=(prompt("How many boxes do you want?"));
            if (response==0||response>128||isNaN(response)) {
                alert("Invalid entry - between 1 and 128 please");
            }
            else {
                numValidate=false;
            }
        }
    fillGrid(response);
});

/* fillGrid function */

function fillGrid(numBox) {
    
    emptyGrid()

    let boxH=Math.floor(pixelGrid/numBox)+"px";
    let boxW=boxH;
    let clickCheck=false;
    
    for (i=0; i<Math.pow(numBox,2); i++) {
        let box=document.createElement('div');
        box.classList.add('box');
        box.style.height=boxH;
        box.style.width=boxW;
        sketchGrid.appendChild(box);
    }

    body.appendChild(sketchGrid);

    let boxes=document.querySelectorAll('.box');

        boxes.forEach((box)=> {
            box.addEventListener('mousedown', (e) =>{
                clickCheck=true;
                box.classList.add('draw');
            });
            box.addEventListener('mouseup', (e) =>{
                clickCheck=false;
            });
            box.addEventListener('mouseenter', (e) =>{
            if (clickCheck) {    
            box.classList.add('draw');
            }
    });
});

}

/* function to empty the Grid */

function emptyGrid() {
    var child=sketchGrid.lastElementChild;
    while (child) {
        sketchGrid.removeChild(child);
        child=sketchGrid.lastElementChild;
    }
}