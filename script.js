
let resetButton = document.querySelector("#reset");
let container = document.getElementById("container");
let squaresPerSide = 0;
resetButton.addEventListener("click", (e)=>{
    squaresPerSide= window.prompt("How many spares per side?");
    resetGrid();
    creategrid(squaresPerSide);
})

function changeSquareColor(e){
    let colors = e.target.style.backgroundColor;

    if (colors == "")
        e.target.style.backgroundColor="#"+Math.floor((Math.random() * 0xffffff)).toString(16);
    else{
        colors=colors.split(",");
        let red = parseInt(colors[0].slice(4),10);
        let green = parseInt(colors[1],10);
        let blue = parseInt(colors[2].slice(0,-1),10);
        e.target.style.backgroundColor = "rgb( "+(red-(red*0.2))+","+(green-green*0.2)+","+(blue-blue*0.2)+")";
    }
}

function resetGrid(){
    container.innerHTML = "";
    //while (container.hasChildNodes())
      //  container.removeChild(container.childNodes[0]);
}

function creategrid(squaresNumber){
    
    let square;

    for(let i = 0;i < squaresNumber;i++)
    {
        for(let j = 0;j < squaresNumber;j++)
        {
            square = document.createElement('div');
            square.className= "grid_square";
            square.addEventListener("mouseover", changeSquareColor);
            container.appendChild(square);
        }
    }
    
    container.style.gridTemplateRows = "repeat("+squaresNumber.toString()+", 1fr)";
    container.style.gridTemplateColumns = "repeat("+squaresNumber.toString()+", 1fr)";
}
creategrid(16);