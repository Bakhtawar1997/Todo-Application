// add list
var list = document.getElementById('list')


// call add item
function todoApp(){
    var todo = document.getElementById('toDo')
    if(todo.value == ''){
        alert('Enter any words')
    }else{

/// li
    var li = document.createElement('li')
    var liText = document.createTextNode(todo.value)
    li.appendChild(liText)

// delete button
    var delBtn = document.createElement('button')
    delBtn.innerHTML="<i class='fa fa-close'></i>"
    delBtn.classList.add("delBtn"); 
    delBtn.setAttribute('class','del-btn')
    delBtn.setAttribute("onclick","dltBtn(this)")
    li.appendChild(delBtn)


var editBtn = document.createElement('button')
editBtn.innerHTML="<i class='fa fa-edit'></i>"
editBtn.classList.add("editBtn");       
editBtn.setAttribute('class','edit-btn')
editBtn.setAttribute("onclick","editBtn(this)")
li.appendChild(editBtn)
console.log(editBtn)

list.appendChild(li)
    todo.value = ""
    
}
}

function dltBtn(e){
    e.parentNode.remove()
}
function editBtn(e){
    var val = e.parentNode.firstChild.nodeValue;
    var input = prompt('Enter Update Value',e.parentNode.firstChild.nodeValue )
    e.parentNode.firstChild.nodeValue = input

}
function allDelete(){
    list.innerHTML = ""
}
