const addForm = document.querySelector(".add-form > form");
const todoList = document.querySelector(".todo-list ol");

let tasks = []; // создаём массив в котором будум хранить список наших дел

// function checkTask(event) {
//     const li = event.target.parentNode;

//     if (event.target.checked) {
//         li.classList.add("checked");
//     } else {
//         li.classList.remove("checked");
//     }
// }

addForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const todoText = formData.get("text");
    event.target.reset();

    if (!todoText) {
        return;
    }

    let newTask = {
        text: todoText,
        checked: false
    }
    tasks = [...tasks, newTask];


    const newTodo = document.createElement("li");
    const input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    const span = document.createElement("span");
    span.innerHTML = `${todoText}`;
    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "delete-btn");
    deleteBtn.innerHTML = `<svg class="icon icon-bin2"><use xlink:href="#icon-bin2"></use></svg>`;
    deleteBtn.addEventListener("click", () => {
        todoList.removeChild(newTodo);
    })
    todoList.appendChild(newTodo);
    newTodo.appendChild(input);
    newTodo.appendChild(span);
    newTodo.appendChild(deleteBtn);
    


    /********
        // const newTodo = document.createElement("li");
        // newTodo.innerHTML = `<input type="checkbox" id = ${tasks.length - 1}><span>${todoText}</span><button class="delete-btn"><svg class="icon icon-bin2"><use xlink:href="#icon-bin2"></use></svg></button>`;
        // todoList.appendChild(newTodo);
    
    
        // //активен только первый элемент, удаляет все элементы при нажатии на первый. пррбовал через tasks.forEch, тоже самое
        // const deleteBtn = document.getElementsByClassName("delete-btn");
        // deleteBtn.addEventListener("click", () => {
        //     todoList.removeChild(newTodo);
        // });
    
        // const checkbox = document.getElementById(`${tasks.length - 1}`);
        // checkbox.addEventListener("change", checkTask);
    
    
    
    
    ***** */
});




