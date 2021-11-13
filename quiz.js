const quizForm = document.querySelector(".questions");
const submitbutton = document.querySelector("#submit-btn");
const output2 = document.querySelector("#output-txt");
const ans = ["90°","Right angled"];

submitbutton.addEventListener('click',checkans);
function checkans(){
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
    console.log(value)
    }
}
