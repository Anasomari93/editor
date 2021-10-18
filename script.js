var code = document.getElementById("code");
var result= document.getElementById("Result")
var run= document.getElementById("run")
var remove =document.getElementById("remove")
run.addEventListener("click", ()=>{
    result.innerHTML=code.value;
    localStorage.setItem("code",code.value)

})
remove.onclick=()=>{
    result.innerHTML=""
}
onload=()=>{
    code.value=localStorage.getItem("code")
}