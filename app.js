const button = document.querySelector("form.button")
const todoList = document.querySelector(".todo-list")

function addAnimation(button){
    button.classList.remove("button:hover")
    button.classList.add("clicked-button")
    setTimeout(function(){removeAnimation(button)}, 450)
}

function removeAnimation(button){
    button.classList.remove("clicked-button")
}

function addActivities(){
    let activity = document.querySelector("#activity")
    if (activity.value === ""){
        console.log("ERROR")
    }
    else if (!activity.value.trim().length){
        console.log("ERROR")
        activity.value = ""
    }
    else {
        //Todo DIV
        const todoDiv = document.createElement("div")
        todoDiv.classList.add("todo")
        //Create li
        const newTodo = document.createElement("li")
        newTodo.classList.add("newTodo")
        newTodo.innerText = activity.value
        todoDiv.appendChild(newTodo)
        //Check button
        const completeButton = document.createElement("i")
        completeButton.innerHTML = "<i class='fas fa-check x2'></i>"
        completeButton.classList.add("complete-button")
        todoDiv.appendChild(completeButton)
        //Delete button
        const deleteButton = document.createElement("i")
        deleteButton.innerHTML = "<i class='fas fa-trash x2'></i>"
        deleteButton.classList.add("delete-button")
        todoDiv.appendChild(deleteButton)    
        //append everything
        todoList.appendChild(todoDiv)
        activity.value = ""
    }
}

todoList.addEventListener("click", deleteActivity)

function deleteActivity(event){
    const item = event.target
    if (item.classList[0] === "delete-button"){
        const activity = item.parentElement
        activity.style.opacity = "0"
        setTimeout(function(){activity.remove();}, 700);
    }
}

todoList.addEventListener("click", completeActivity)

function completeActivity(event){
    const item = event.target
    if (item.classList[0] === "complete-button"){
        const activity = item.previousSibling
        activity.style.transition = "0.3s ease-in-out"
        activity.style.backgroundColor = "#00c853"
        activity.style.textDecoration = "line-through"
    }
}

let activity = document.querySelector("#activity")
activity.addEventListener("keydown", addButton)

function addButton(event){
    if (event.keyCode === 13){
        addActivities()
        event.preventDefault() 
    }   
}

