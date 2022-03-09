
function adaptive(){
    let path = window.location.href + "#card"
   // window.location.pathname = path
    window.location.href=path
}




if(window.innerWidth<1000){
    adaptive()
}
