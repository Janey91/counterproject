// Counter program

const decreaseBtn = document.getElementById("deceaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
let count = 0;

increaseBtn.oneclick = function(){
    count++;
    countLabel.textContent = count;

}
decreaseBtn.oneclick = function(){
    count--;
    countLabel.textContent = count;
}
resetBtn.oneclick = function(){
    count++;
    countLabel.textContent = count;

}