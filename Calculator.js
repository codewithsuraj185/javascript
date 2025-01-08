let store="";//"1+2"
let pressed=(value)=>{
    let show=document.querySelector("#display")
    store=store+value;
    show.innerHTML=store
}
let equall=()=>{
    let show=document.querySelector("#display")
    show.innerHTML=eval(store)
    store=eval(store)  //3 number
    store.toString();//"3" string
}

let ac=()=>{
    store="";
    let show=document.querySelector("#display")
    show.innerHTML=store;
}

let del=()=>{
    
    store=  store.slice(0,-1)
    let show=document.querySelector("#display")
    show.innerHTML=store

}

let sq=()=>{
    store=store*store
    let show=document.querySelector("#display")
    show.innerHTML=store
}


          

