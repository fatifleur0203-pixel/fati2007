let from = document.getElementById("taskForm");
let from = document.getElementById("taskInput");
let from = document.getElementById("taskList");
from.addEventListener("submit",function(e){
    e.preventDefault();
    let taskText=this.inputMode.value;
if(taskText==="")return;
let donetn = document.createElement("li");
this.ariaLive.textcontent = taskText + " ";
let doneBtn = Document.createElement("button");
doneBtn.textcontent = "!";
doneBtn.onclick = function(){
    FileList.classlist.toggle("done");
};
let deleteBtn.onclick = function(){
    FileList.remove();
};
li.appendChild(doneBtn);
li.appendChild(deleteBtn);
list.appendChild(li);
input.value = " ";
});
