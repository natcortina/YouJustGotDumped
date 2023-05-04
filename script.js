document.addEventListener("DOMContentLoaded",function(){

    document.querySelector("#name").addEventListener("keyup",function(){

        let val = this.value;

       localStorage.setItem("name", val)

    })

        document.querySelector("#bff").addEventListener("keyup",function(){

        let val = this.value;

       localStorage.setItem("bff", val)

    })

         document.querySelector("#hobbie").addEventListener("keyup",function(){

        let val = this.value;

       localStorage.setItem("hobbie", val)

    })

})


document.addEventListener("DOMContentLoaded",function(){

    document.querySelector("#name").innerHTML = localStorage.getItem("name")
    
    document.querySelector("#bff").innerHTML = localStorage.getItem("bff")

        document.querySelector("#hobbie").innerHTML = localStorage.getItem("hobbie")

})

