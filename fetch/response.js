let header=document.querySelector("h4");
header.textContent="Todos";

fetch("https://dummyjson.com/todos").then(function(Response){
    return Response.json();
}).then(function(folan){
    folan.todos.forEach(function(comment){
        renderTodo(comment);
    });  
});

let container=document.querySelector(".container");
function renderTodo(comment){

    let input_element=document.createElement("input");
    input_element.classList.add("check");
    input_element.setAttribute("type","checkbox");
    input_element.checked=comment.completed;
  
    let todo=document.createElement("p");
    todo.textContent=comment.todo;

    container.appendChild(input_element);
    container.appendChild(todo);   
};

