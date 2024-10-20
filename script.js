const value = document.getElementById("value");
const minusButton = document.getElementById("minusButton");
const plusButton = document.getElementById("plusButton");
const resetButton = document.getElementById("resetButton");
let counterValue = 0;

function plus(){
    // const tempValue = parseInt(value.innerHTML);
    counterValue++;
    value.innerHTML = counterValue ;
    // value.innerHTML = tempValue + 1 ;
}
function minus(){
    if(counterValue>0){
        counterValue--;
        value.innerHTML = counterValue ;
    }
    // const tempValue = parseInt(value.innerHTML);
    // value.innerHTML = tempValue - 1 ;
}
function reset(){
    counterValue = 0;
    value.innerHTML = counterValue ;
}

plusButton.addEventListener("click",plus);
minusButton.addEventListener("click",minus);
resetButton.addEventListener("click",reset);