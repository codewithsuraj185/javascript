

let submitt=()=>{
    let name=document.querySelector("#name").value;
    let number=document.querySelector("#name").value;
    let email=document.querySelector("#email").value;
    let pass=document.querySelector("#pass").value;
    let cpass=document.querySelector("cpass").value;

    let errname=document.querySelector("#errname")
    let errenumber=document.querySelector("#errname1")
    let erremail=document.querySelector("#errname2")
    let errpass=document.querySelector("#errname3")
    let errcpass=document.querySelector("#errname4")

    if(name===""){
        errname.innerHTML="please enter your name";
        errname.style.color="red";
        return false;
    }
} 