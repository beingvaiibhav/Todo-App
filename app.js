let mainContainer = document.querySelector('.main-container');
let addNewTask = document.querySelector('.add-new-task');
let addButton = document.querySelector('.add-button');
let taskField = document.querySelector('.task-field'); 
let dateField = document.querySelector('.date-field'); 
let descField = document.querySelector('.desc-field'); 
let todoField = document.querySelector('.todo-list');


let data = [];

let openTodoMenu = ()=>{
    addNewTask.style.visibility='visible';
    mainContainer.style.setProperty('visibility', 'hidden');
    mainContainer.style.setProperty('position', 'absolute');
}

let closeButton = ()=>{
    addNewTask.style.visibility='hidden';
    mainContainer.style.setProperty('visibility', 'visible');
    mainContainer.style.setProperty('position', 'relative');

}

let submitBotton = ()=>{
    if(taskField.value ===""){
            document.querySelector('.text-warning').innerHTML =  "Task Field Can't be Blank" ;       
    }else{
        document.querySelector('.text-warning').innerHTML =  "" ;  
       
        dataPush();
        resetField();
        closeButton();
        showData();
    }
}

let dataPush = ()=>{
    data.push({
        text:taskField.value,
        date:dateField.value,
        desc:descField.value
    })
    // localStorage.setItem("data", JSON.stringify(data));
    // console.log(data);
}

let resetField = ()=>{
    taskField.value='';
    dateField.value='';
    descField.value='';
}

let showData = ()=>{
    todoField.innerHTML = "";
    data.map((x,y)=>{

        // console.log(x.text);
        // console.log(x.date);
        // console.log(x.desc);

        
        return(
           todoField.innerHTML += `
           <ul class="items">
           <li>   
               <div class="todo-container">
                   <div class="text-container">
                        <p class="x-text" >${x.text}</p>
                        <p class="x-data">${x.date}</p>
                   </div> 
                   <div class="edit-container">
                        <p>📝</p>
                        <p >🗑️</p>
                   </div>
               </div>
               
               <p style="font-size: 15px;">${x.desc}</p>
           </li>
           
       
          

       </ul>
           `
        )


        
    })
}

