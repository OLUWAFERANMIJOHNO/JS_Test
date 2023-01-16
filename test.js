let form = document.getElementById("form");
let subBtn = document.getElementById("button");
subBtn.addEventListener("click", gatherUserInput);
let displayPane = document.getElementById("display");
let taskArray;

if (localStorage.getItem("dataTask") != null){
    taskArray = JSON.parse(localStorage.getItem("dataTask"));
}else{
    taskArray = [];
}


function gatherUserInput(){
    let task = form.task.value;
    let element =  document.createElement("h3");
    element.innerHTML = task;
    document.body.appendChild(element);
    taskArray.push(task);
    localStorage.setItem("dataTask", JSON.stringify(taskArray));
    console.log(JSON.parse(localStorage.getItem("dataTask")));
    form.task.value = "";
};

