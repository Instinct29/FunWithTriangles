const inputs = document.querySelectorAll(".angle-1");
const checkBtn = document.querySelector(".is-triangle-btn")
const output = document.querySelector(".output ");
checkBtn.addEventListener("click", isTriangle);
function isTriangle(){
    if (Number(inputs[0].value)>=0 && Number(inputs[1].value) >=0 && Number(inputs[2].value) >=0){
    const checksum = checkTriangleAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
    // console.log(checksum);
    if(checksum === 180 ){
        output.innerText = "Angles form a triangle"
    }
    else {
        output.innerText = " Oops Angles does not form a triangle"
    }
}else{
    output.innerText = "Invalid Inputs"
}
    
}
function checkTriangleAngles(angle1,angle2,angle3){
    const sum = angle1+angle2+angle3;
    return sum;
}
 