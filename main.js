document.getElementById("shift").style.borderTopLeftRadius = "15px";
document.getElementById("onbutton").style.borderTopRightRadius = "15px"
document.getElementById("p&mbutton").style.borderBottomLeftRadius = "15px"
document.getElementById("mode").style.fontSize = "8px"
document.getElementById("shift").style.fontSize = "10px"
document.getElementById("mrbutton").style.borderBottomRightRadius = "15px"
document.getElementById("seven").style.borderTopLeftRadius = "15px";
document.getElementById("ac").style.borderTopRightRadius = "15px"
document.getElementById("ac").style.backgroundColor = "#F1C745"
document.getElementById("c").style.backgroundColor = "#F1C745"
document.getElementById("zero").style.borderBottomLeftRadius = "15px"
document.getElementById("m").style.borderBottomRightRadius = "15px"
function numadd(x){
    document.getElementById("input").value += x
}
function cclear(){
    document.getElementById("input").value= ""

}
function eevaluate(){
    document.getElementById("input").value =  eval(document.getElementById("input").value)
}
const sq= (x) => {
   document.getElementById("input").value =  x(document.getElementById("input").value)
}
function cos(x){
    let anglein = Math.PI / 180
  document.getElementById("input").value= x (  document.getElementById("input").value * anglein)
}
function poww(){
    document.getElementById("input").value= Math.pow(document.getElementById("input").value,2)

}
const logg = () =>{
    document.getElementById("input").value = Math.log10(document.getElementById("input").value)
}

function del(){

}
function On(){
    document.getElementById("input").value = ""
}
 



