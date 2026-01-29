
let tasksTable = document.getElementById('taskstable');
let inputTask = document.getElementById('inputtask');
let addTaskBtn = document.getElementById('addtask');
let deleteAllBtn = document.getElementById('deleteall');
let tbody = document.querySelector('tbody');

function updateSrNumbers() {
    let rows = tbody.querySelectorAll('tr');
    rows.forEach((row, index) => {
        row.children[0].textContent = index + 1;
    });
}



addTaskBtn.addEventListener('click', ()  => {
    if(inputTask.value.trim() === '') return;

   

    let taskValue = inputTask.value;
    
    let trElement = document.createElement('tr');
    let srtd = document.createElement('td');
    srtd.textContent = tbody.children.length + 1;
    let tasktd = document.createElement('td');
    tasktd.textContent = taskValue;
    /////////////////////////////////////////////////
    let statustd = document.createElement('td');
    let checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    statustd.className = 'text-center'
    
    checkBox.addEventListener('change', () => {
        
        if(checkBox.checked ) {
            tasktd.style.textDecoration = 'line-through'
        }else{
            tasktd.style.textDecoration = 'none';
        };
    });
    statustd.appendChild(checkBox);    
    //////////////////////////////////////////////////
    let edittd = document.createElement('td');
    let editBtn = document.createElement('button');
    editBtn.className = 'btn btn-primary';
    editBtn.textContent = 'Edit';
    edittd.appendChild(editBtn);

    editBtn.addEventListener('click', ()=>{
        let editTask = prompt('SURE YOU WANT TO EDIT THE BELOW TASK :  \n' + tasktd.textContent);
        tasktd.textContent = editTask;       
        
    });

    //////////////////////////////////////////////////

    let deletetd = document.createElement('td')
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-primary';
    deleteBtn.textContent = 'Delete';
    deletetd.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', ()=>{
        alert('SURE YOU WANT TO DELETE THE TAKS')
        trElement.remove()
        updateSrNumbers();
    });

    deleteAllBtn.addEventListener('click', ()=>{
        tbody.innerHTML = '';
    })


    trElement.append(srtd, tasktd, statustd, edittd, deletetd );    
    tbody.appendChild(trElement);

    inputTask.value = ''; // clear input
    inputTask.focus();

});

