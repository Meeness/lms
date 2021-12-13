document.querySelectorAll(".toggle-collapse").forEach(e => {
    e.addEventListener("click", () => {
        e.classList.toggle("uncollapsed")
        document.querySelector(".extended-content").classList.toggle("show-content")
    })
})



document.querySelectorAll(".btnHandIn").forEach(e => {
    e.preventDefault;
    e.addEventListener("click", (e) => {
        e.preventDefault;
        console.log("handed in")
    })
})
document.querySelectorAll(".btnFile").forEach(e => {
    e.addEventListener("click", () =>{
        document.querySelector(".input-file").click();
    })
})
document.querySelector(".input-file").addEventListener("change", () => {
    const textVal = document.querySelector(".input-file")
    document.querySelector(".input-file-text").textContent = textVal.value;
})
