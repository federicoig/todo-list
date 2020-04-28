let toDoList = document.querySelector("#to-do-list")
let paragraph = document.createElement("p")
paragraph.className = "to-do"

function addAnimation(button){
    button.classList.add("clicked-button")
    setTimeout(function(){removeAnimation(button)}, 550)
    button.classList.remove("unclick-button")
}

function removeAnimation(button){
    button.classList.remove("clicked-button")
    button.classList.add("unclick-button")
}

function addActivities(button){
    let activity = document.querySelector("#activity")
    toDoList.appendChild(paragraph)
    paragraph.innerHTML = activitie.innerHTML
}

