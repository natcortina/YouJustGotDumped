document.addEventListener("DOMContentLoaded",function(){

    document.querySelector("#name").addEventListener("keyup",function(){

        let val = this.value;
      //  console.log(val)

       localStorage.setItem("name", val)

    })

        document.querySelector("#bff").addEventListener("keyup",function(){

        let val = this.value;
        console.log(val)

       localStorage.setItem("bff", val)

    })

        document.querySelector("#food").addEventListener("keyup",function(){

        let val = this.value;

       localStorage.setItem("food", val)

    })


     document.querySelector("#hobbie").addEventListener("keyup",function(){

        let val = this.value;

       localStorage.setItem("hobbie", val)

    })

})

//  document.querySelector("#AorB").addEventListener('contextmenu', (event) => {
     
     //let 

 // console.log(event.button)


//})












