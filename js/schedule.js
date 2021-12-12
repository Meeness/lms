window.addEventListener("DOMContentLoaded", start)

function start(){
    document.querySelectorAll(".schedule__choose p").forEach(type=>chooseType(type))
}

function chooseType(type){
    type.addEventListener("click", function(){
        document.querySelectorAll(".schedule__choose p").forEach(p=>{
            p.classList.remove("active")
        })
        type.classList.add("active")

        if(type.dataset.type == "week"){
            document.querySelector(".schedule__day").style.display = "none"
            document.querySelector(".schedule__week").style.display = "flex"
        } else{
            document.querySelector(".schedule__day").style.display = "flex"
            document.querySelector(".schedule__week").style.display = "none"
        }
    })
}