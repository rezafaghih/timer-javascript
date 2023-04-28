
const digits = [];
timerStarted = false;
const span = document.querySelectorAll("#timer-container span")
var button = document.querySelector("button");



function startTimer(){
  if (timerStarted == false){
    digits['sec'] = 0;
    digits['min'] = 0;
    timerStarted = true;
  }
  
  countTime();
}

function digitGenerator(digit){
  if (digit < 10){
    digit = `0${digit}`;
  }else{
    digit = digit;
  }

  return digit;
}



function countTime(){
  if (digits['sec'] < 59){
    digits['sec']+=1;
  }else{
    digits['sec'] = 0;
    digits['min']+=1;
  }

  span[0].innerHTML = digitGenerator(digits['sec']);
  span[1].innerHTML = digitGenerator(digits['min']);
}

button.addEventListener("click", ()=>{
  if (timerStarted == false){
    setInterval(()=>{
      startTimer();
    }, 1000)
  }
})