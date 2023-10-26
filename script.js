var theList =[];

var task = document.getElementById("input");
const button = document.getElementById("button");
const list = document.getElementById("todolist");

button.onclick = () => {
    if(task.value){
    theList.push(task.value);
    task.value = "";
    display();
    }
}

function display(){
    list.innerHTML = "";
    theList.forEach((task,index) => {
        list.innerHTML +=
      "<li>"+task+ "<span onclick='edit("+index+")'>Edit&nbsp;&nbsp;</span> <span onclick='remove("+index+")'>X | </span></li>";
    }) 
}
function edit(index) {
    var newTask = prompt("Please insert your new value");
    theList.splice(index, 1, newTask);
    display();
}

function remove(index) {
    theList.splice(index, 1);
    display();
}