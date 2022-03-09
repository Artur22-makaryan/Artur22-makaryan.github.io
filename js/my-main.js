
function adaptive(){
    let path = window.location.href + "#card"
   // window.location.pathname = path
    window.location.href=path
}

console.log(window.location.href)


if(window.innerWidth<1000){
    adaptive()
}
