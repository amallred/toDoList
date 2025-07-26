//tutorial link: https://www.youtube.com/watch?v=G0jO8kUrg-I&ab_channel=GreatStack
//6.16.25 goals: add acknowledgement when item added; edit item option; give clear all items option; view cleared items (and clear this list) https://www.youtube.com/watch?v=3PHXvlpOkf4&t=22703s 

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//Add tasks */

function addTask(){
    if(inputBox.value === ''){
    alert("You must write something!");
    }
    else{ 
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

//Add check mark
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN")
        //Why are LI and SPAN capitalized here? It doesn't work if they're not
        {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

//Saves list to local machine
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML= localStorage.getItem("data");
}
showTask();

//new tutorial to allow button action when "Enter" button is hit https://www.youtube.com/watch?v=IV7hLZ2qDhM&ab_channel=KodeBase
let inputEl = document.querySelector("input")
let btnEl = document.querySelector("button");

inputEl.addEventListener("keypress",(e) => {
    if (e.key == "Enter") btnEl.click();
})

/*
adding edit task option https://www.geeksforgeeks.org/javascript/javascript-project-on-todo-list/ 

************
Has not been edited to be compatible with this project
************
*/
        // editbtn.addEventListener("click", function() {
        //     if (editbtn.innerText === 'Edit') {
        //         taskText.setAttribute('contenteditable', 'true'); // Enable editing
        //         taskText.focus(); // Focus on the text to start editing
        //         editbtn.innerText = 'Save'; // Change button text to 'Save'
        //     } else {
        //         taskText.setAttribute('contenteditable', 'false'); // Disable editing
        //         let updatedText = taskText.innerText.trim();
        //         if (updatedText !== "") {
        //             task = task.map(function(taskobj) {
        //                 if (taskobj.id === id) {
        //                     taskobj.text = updatedText;
        //                 }
        //                 return taskobj;
        //             });
        //             localStorage.setItem("task array", JSON.stringify(task));
        //         }
        //         editbtn.innerText = 'Edit'; // Change button text back to 'Edit'
        //     }
        // });