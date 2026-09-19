console.log("Hello World");
let headline = document.getElementById("headline-1");
console.log(headline);

let correctBtn = document.getElementById("correct-btn");
let tryAgainBtn = document.getElementById("try-again-btn");
let almostBtn = document.getElementById("almost-btn");
let result = document.getElementById("result");

//event listeners
correctBtn.addEventListener('click', function(){
  result.textContent = "You are Correct!"
})

tryAgainBtn.addEventListener('click', function(){
  result.textContent = "Wrong, Try Again!"
})

almostBtn.addEventListener('click', function(){
  result.textContent = "Almost there!"
})