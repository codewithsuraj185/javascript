let set=()=>{
    
    localStorage.setItem("Name","Suraj")
     localStorage.setItem("age",20)


    }


    let show=document.querySelector("#datashow")

    // show.innerHTML=localStorage.getItem("name")
    let localname=localStorage.getItem("name")
    let localname=localStorage.getItem("age")


    show.innerHTML=`Hello ${localname}and you age is ${localage}`
 
    let remove=()=>{

        // localStorage.removeItem("name");

        localStorage.clear()
    }