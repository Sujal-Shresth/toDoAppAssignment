// array to list the task
var theList =[];

var task = document.getElementById("input");
const button = document.getElementById("button");
const list = document.getElementById("todolist");

// submit function
button.addEventListener('click',() => {
    if(task.value){
        console.log(theList);
    theList.push(task.value);
    task.value = "";
    display();
    }
})

// display list function
function display(){
    list.innerHTML = "";
    theList.forEach((task,index) => {
        list.innerHTML +=
      "<li>"+task+ "<span onclick='edit("+index+")'>Edit&nbsp;&nbsp;</span> <span onclick='remove("+index+")'>X | </span></li>";
    }) 
}

// edit task function
function edit(index) {
    var newTask = prompt("Please insert your new value");
    if(newTask){
        theList.splice(index, 1, newTask);
        display();
    }
}

//remove task function
function remove(index) {
    theList.splice(index, 1);
    display();
}