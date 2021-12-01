const baseAndHeight = document.querySelectorAll(".fields");
const areaButton = document.querySelector("#calculate-area");
const output4 =  document.querySelector("#output-4")
function getarea(a,b){
    const area = (a*b)/2;
    return area;
}
areaButton.addEventListener("click",()=>{
    if(baseAndHeight[0].value >=0 && baseAndHeight[1].value >=0){
    const area = getarea(baseAndHeight[0].value,baseAndHeight[1].value);
    output4.innerText = "The area of Triangle 📐 is " + area;
    }else{output4.innerText = "Invalid Inputs"}
    
})