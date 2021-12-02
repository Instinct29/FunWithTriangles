const quizForm = document.querySelector(".questionss");
const submitbutton = document.querySelector("#submit-btn");
const output2 = document.querySelector("#output-text");
const ans = ["90°","Right angled","obtuse triangle","acute triangle"];

submitbutton.addEventListener('click',clickHandler);
function clickHandler(){
    console.log("clicked");
    let score1 = 0;
    let index1 = 0;

    const correctAns = new FormData(quizForm);

    for(let value of correctAns.values()){
        if(value === ans[index1]){
            score1++;
        }
        index1++;
    }
    output2.textContent = "Your score is  " + score1;
}