
const divContainer = document.querySelector(".container");
const resetBtn = document.querySelector(".reset");
const newGridBtn = document.querySelector(".new-grid");

const HEIGHT_OF_DIV = divContainer.clientHeight;
const WIDTH_OF_DIV = divContainer.clientWidth;
let x = 10;
// enter # of rows, generate rows & same amount of columns
function createDivs(height, width=height){

    let idCount = 0;

    for(let i = 0; i<height; i++){

        const row = document.createElement("div");
        row.id=`row${i}`;
        row.classList.add("row");

        for(let j=0; j<width; j++){
            const square = document.createElement("div");
            square.id = idCount;
            square.classList.add("square");
            square.style.width = `${WIDTH_OF_DIV/width}px`;
            square.style.height = `${HEIGHT_OF_DIV/height}px`;

            row.appendChild(square);
            idCount++;
        }
        divContainer.appendChild(row);
    }
}

divContainer.addEventListener("mouseover",(e)=>{
    if(e.target.className=="square") e.target.style.background="black";
})



function resetGrid(){
    const rows = divContainer.children;
    for(let i = 0; i<rows.length; i++){
        let temp = rows[i].children
        for(let j = 0; j<temp.length; j++){
            temp[j].style.background = "white";
        }
    } 
}
resetBtn.addEventListener("click", resetGrid);



newGridBtn.addEventListener("click", ()=> {
    let newSize = prompt("What size of grid do you want");
    if(newSize<0){
        alert("Size must be larger than 0");
    }    
    else if(newSize>100){
           alert("Size must be less than 100")
    }
        else{
            divContainer.innerHTML="";
            createDivs(newSize);
    }
})

createDivs(x);
