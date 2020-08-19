
// Button 'new task', 'add li' and 'remove input' 
document.querySelector('#btn-add').addEventListener('click', () =>{
    const todoList = document.querySelector('#todo-list');
    const inputAdd = document.querySelector('#input-add');

    // check if there is a new click event in the button
    if(inputAdd){
        inputAdd.remove();
    }
    todoList.innerHTML += '<input type="text" class="input-add" id="input-add" placeholder="Insira um novo item">'
    document.querySelector('#input-add').addEventListener('keydown', (e) =>{
        if(e.key === 'Enter'){
            todoList.innerHTML += `<li>  <input type="checkbox" class="check"> <span>${e.target.value}</span> <i class="fas fa-trash-alt"></i> </li>`;
            document.querySelector('#input-add').remove();

            // checkbox input
            const checkBoxInput = document.querySelectorAll('.check');
            checkBoxInput.forEach((box) =>{
                box.addEventListener('click', () =>{
                    box.nextElementSibling.classList.toggle('did');     
                });
            });
            
            // delete li
            const fasArr = document.querySelectorAll('.fas');
            fasArr.forEach((fas) =>{
                fas.addEventListener('click', () =>{
                    fas.parentElement.remove();
                });
            });
        }
    });
});
