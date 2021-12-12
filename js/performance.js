const marks = [
    11.5, 11.5, 10.8, 10.7, 10.6, 10.1, 9.7, 9.5, 9.0, 8.6, 8.4, 8.2, 8.0, 7.6, 7.5, 7.3, 7.2, 7.0, 4.0, 4.0
];

window.addEventListener("DOMContentLoaded", start)

function start(){
    marks.forEach(mark=>showMark(mark))

    document.querySelectorAll(".subjects .categories__inner__button").forEach(button=>selectSubjectButton(button))
    document.querySelectorAll(".otherCourses .categories__inner__button").forEach(button=>selectCourseButton(button))
}

const template = document.querySelector(".graph").content;
let counter = 0;

function showMark(mark){
    const clone = template.cloneNode(true);
    counter++;
    
    clone.querySelector("p").textContent = counter;
    clone.querySelector("h3").textContent = mark.toFixed(1);

    const width = mark / 12 * 100;
    clone.querySelector(".performance__inner__row__pillar div").style.width = `${width}%`

    document.querySelector(".performance__inner").appendChild(clone)
}

function selectSubjectButton(button){
    button.addEventListener("click", function(){
        button.classList.toggle("active")
        document.querySelectorAll(".otherCourses .categories__inner__button").forEach(course=>{
            course.classList.remove("active")
        })
    })
}

function selectCourseButton(button){
    button.addEventListener("click", function(){
        button.classList.toggle("active")
        document.querySelectorAll(".subjects .categories__inner__button").forEach(subject=>{
            subject.classList.remove("active")
        })
    })
}