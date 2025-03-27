const input=document.getElementById('tasks');
const container=document.querySelector('.works');






function Todolist(content){
    const taskBox=document.createElement('div');
    taskBox.classList.add('note');
    const delBtn=document.createElement('button');
    const checkBtn=document.createElement('button');
    const doing=document.createElement('p');
    doing.innerText=content;
    checkBtn.innerHTML=`<i class='bx bx-check'></i>`;
    delBtn.innerHTML=`<i class='bx bxs-trash' ></i>`;
    taskBox.appendChild(doing);
    taskBox.appendChild(delBtn);
    taskBox.appendChild(checkBtn);
    container.appendChild(taskBox);

    delBtn.addEventListener('click',()=>{
        container.removeChild(taskBox);
        removeTasksFromLocalStorage(content);
       

    })

    checkBtn.addEventListener('click',()=>{
        doing.classList.toggle('done');
    })
}

function saveTasksToLocalstorage(tasks){
    localStorage.setItem('tasks',JSON.stringify(tasks));

}

function removeTasksFromLocalStorage(taskContent){
    let tasks=JSON.parse(localStorage.getItem('tasks')) || [];
   tasks = tasks.filter(task=>task!==taskContent);
   saveTasksToLocalstorage(tasks);
  
}


function loadToDisplay(){
    const tasks=JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task=> Todolist(task));
}




document.addEventListener('keydown',(occur)=>{
    if(occur.key==='Enter'){
        if(input.value!=''){
            let content=input.value;
            let tasks=JSON.parse(localStorage.getItem('tasks')) || [];
            tasks.push(content);
            saveTasksToLocalstorage(tasks);
            Todolist(content);
            input.value="";
            

           
            


        }

    }

})


window.addEventListener('load',loadToDisplay);