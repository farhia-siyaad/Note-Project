const button = document.querySelector("#btn")
const model = document.querySelector("#model")
const close = document.querySelector("#closebtn")
const notebtn = document.querySelector("#noteparent")
const savebtn = document.querySelector("#savebtn")
const title = document.querySelector("#title")
const description = document.querySelector("#description")
//show button hide model

button.addEventListener("click", function(){
model.style.display = "block"

})

//closs button hide model
close.addEventListener("click", function(){
    model.style.display = "none"
    
    })


    savebtn.addEventListener("click",function(){
     if(title.value != "" && description.value != "") {
          const newDiv = document.createElement("div")
          newDiv.innerHTML = title.value
          newDiv.innerHTML  += `<br> ${description.value}`
          notebtn.appendChild(newDiv)
          newDiv.style.backgroundColor = "blue"
          newDiv.style.padding = "15px"
          newDiv.style.color = "white"
          model.style.display = "none"
     }
     
          

    })
    
    