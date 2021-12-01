const quizForm = document.querySelector(".questions");
const submitbutton = document.querySelector("#submit-btn");
const output2 = document.querySelector("#output-text");
const ans = ["90°","Right angled","obtuse triangle","acute triangle"];

submitbutton.addEventListener('click',checkans);

function checkans(){
    let score = 0;
    let index = 0;
    let formResults = new FormData(quizForm);

    for(let value of formResults.values()){
        if( value === ans[index]){
            score++;
        }
        index++;
    }
    output2.innerText = "Your score is"+" "+ score;
  
}
