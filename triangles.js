const inputs = document.querySelectorAll(".angle-1");
const checkBtn = document.querySelector(".is-triangle-btn")
const output = document.querySelector(".output ");
checkBtn.addEventListener("click", isTriangle);
function isTriangle(){
    const checksum = checkTriangleAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
    // console.log(checksum);
    if(checksum === 180 ){
        output.innerText = "Angles form a triangle"
    }
    else {
        output.innerText = " Oops Angles does not form a triangle"
    }
    
}
function checkTriangleAngles(angle1,angle2,angle3){
    const sum = angle1+angle2+angle3;
    return sum;
}
 