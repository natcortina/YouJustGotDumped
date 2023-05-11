document.addEventListener("DOMContentLoaded",function(){



    if ( document.querySelector("#bff") != null){
  document.querySelector("#bff").innerHTML = localStorage.getItem("bff")
}
    

    if ( document.querySelector("#name") != undefined){
    document.querySelector("#name").innerHTML = localStorage.getItem("name")
}


    if ( document.querySelector("#hobbie") != undefined){

  document.querySelector("#hobbie").innerHTML = localStorage.getItem("hobbie")
}
    

    if ( document.querySelector("#food") != undefined){
    document.querySelector("#food").innerHTML = localStorage.getItem("food")
}
})

