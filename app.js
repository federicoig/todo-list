let toDoList = document.querySelector("#to-do-list")
let buttons = document.querySelector(".buttons")
let paragraph = document.createElement("p")
let checkButton = document.createElement("i")
checkButton.setAttribute("onclick", "done()")
let deleteButton = document.createElement("i")
checkButton.className = "fas fa-check fa-2x"
deleteButton.className = "fas fa-trash fa-2x"
paragraph.className = "to-do"
let activities = []

function addAnimation(button){
    button.classList.add("clicked-button")
    setTimeout(function(){removeAnimation(button)}, 400)
    button.classList.remove("unclick-button")
}
    function removeAnimation(button){
        button.classList.remove("clicked-button")
        button.classList.add("unclick-button")
    }

function addActivities(){
    let activity = document.querySelector("#activity")
    if (activity.value === ""){
        console.log("ERROR")
    }
    else {
        paragraph.innerHTML = activity.value
        activities.push(paragraph)
        toDoList.appendChild(paragraph.cloneNode(true))
        toDoList.appendChild(checkButton.cloneNode(true))
        toDoList.appendChild(deleteButton.cloneNode(true))
        activity.value = ""
    }
}

function done(){
    let toDo = document.querySelectorAll(".to-do")
    toDo.style.backgroundColor = "#00c853"
    toDo.style.transition = "0.3s ease-in"
    toDo.style.textDecoration = "line-through"
}

