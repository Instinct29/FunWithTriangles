const sides = document.querySelectorAll(".height");

const calculateButton = document.querySelector("#hypo-btn");
const output3 = document.querySelector("#output-3")
function gethypo(numb1,numb2){
    const hpo = (numb1*numb1)+(numb2*numb2);
    return hpo;
}
calculateButton.addEventListener("click",()=>{
    const hypo = gethypo(sides[0].value,sides[1].value);
    output3.innerText = "The Hypotenuse is  "+ (Math.sqrt(hypo));
})