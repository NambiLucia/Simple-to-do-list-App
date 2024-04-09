let input=document.querySelector('input');
let button=document.querySelector('button');
let container=document.querySelector('ul');

function createTask(){

    if(input.value===""){
        alert("Please fill in task")
        
    }
    else{
let task=input.value;
let list=document.createElement('li');
list.innerText=task;
container.appendChild(list);


let span=document.createElement('span')
list.appendChild(span)

let completeIcon=document.createElement('input');
completeIcon.setAttribute('type','checkbox')
span.appendChild(completeIcon);

let editIcon =document.createElement('i');
editIcon.classList.add('bx','bxs-edit-alt');
span.appendChild(editIcon);

let deleteIcon = document.createElement('i');
deleteIcon.classList.add('bx','bxs-trash');
span.appendChild(deleteIcon);



input.value="";

 // add event listeners to the icons

deleteIcon.addEventListener('click',(e)=>{
    list.style.padding = "5px 10px"
    list.remove();
})

completeIcon.addEventListener('click',(e)=>{
if(e.target.checked===true){
    list.style.textDecoration ="line-through"
    list.style.padding = "5px 10px"
}
else{
    list.style.textDecoration ="none"
}

})
editIcon.addEventListener('click',(e)=>{
    list.contentEditable = true
    list.style.padding = "5px 10px"
    list.focus()

    
})


    }


}







//addevent listeners





