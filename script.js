// let textv=document.getElementById("textnum");
// let laber=document.getElementById("result");

// document.getElementById("mysubmit").onclick=function (event){
// event.preventDefault();

// if(textv.value==10){
//     laber.textContent="Yes you guessed  it correct";
// }
// else{
//     laber.textContent="you are wrong";
// }
// }
const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;



let attempts = 0;
let guess;
let submit=document.getElementById("mysubmit");
let result=document.getElementById("result");

submit.onclick=function(){
    
guess=document.getElementById("textnum").value;
guess=Number(guess);

if(isNaN(guess)){
    result.textContent="😒Enter a number😒";
}
else if(guess>maxNum||guess<minNum){
    result.textContent="Please enter a valid number";
}
else{
    attempts++;
    if(guess<answer){
        result.textContent="TOO LOW! TRY AGAIN!";
    }
    else if(guess>answer){
        result.textContent="TOO HIGH! TRY AGAIN!";
    }
    else{
        attempts++;
        result.textContent=` 🎉You guessed it correct🎉.It took you ${attempts} attempts to guess it`;
        
    }
}

    }

// let running = false;

// while(running){
    
//     guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
//     guess = Number(guess);
    
//     if(isNaN(guess)){
//         window.alert("Please enter a valid number");
//     }
//     else if(guess < minNum || guess > maxNum){
//         window.alert("Please enter a valid number");
//     }
//     else{
//         attempts++;
//         if(guess < answer){
//             window.alert("TOO LOW! TRY AGAIN!");
//         }
//         else if(guess > answer){
//             window.alert("TOO HIGH! TRY AGAIN!");
//         }
//         else{
//             window.alert(`CORRECT! The answer was ${answer}. It took you ${attempts} attempts`);
//             running = false;
//         }
//     }
// }
