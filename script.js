// const addInput = document.querySelector('.input-add__task');
// const addBtn = document.querySelector('.input-add__btn');
// const delTaskBtn = document.querySelector('.input-del__btn');
// const textarea = document.querySelector('.input-task__textarea');
// const newTasks = document.querySelector('.new-tasks');

// const LOCALSTORAGE_KEY = 'tasks';

// savedFormData();

// delTaskBtn.addEventListener('click', () => {
//     addInput.value = '';
//     textarea.value = '';
// });

// addBtn.addEventListener('click', () => {
//     let todo = addInput.value.trim();
//     let texter = textarea.value.trim();
    
//     if (todo === '' && texter === '') {
//         alert('No Task is added!');
//     } else {
//         const id = Date.now().toString(); // Унікальний ідентифікатор
//         addTodo(id, todo, texter);
//         saveTasks(id, todo, texter);
//         addInput.value = '';
//         textarea.value = '';
//     }
// });

// function addTodo(id, todo, texter, completed = false) {
//     let todoTask = ` 
//         <div class="task" data-id="${id}">
//             <div class="task-input__h">
//                 <input type="text" name='todo' disabled value="${todo}" class="${completed ? 'completed' : ''}">
//                 <div class="flex-button">
//                     <button type="button" title='complete task' class="complete-task">✔️</button>
//                     <button type="button" title='rename task' class="rename-task">✏️</button>
//                     <button type="button" title='delete task' class="del-task">❌</button>
//                 </div>
//             </div>
//             <textarea name="textarea" disabled rows="10" cols="30" class="input-task__textarea" maxLength="120">${texter}</textarea>
//         </div>
//     `;
//     newTasks.innerHTML += todoTask;
// }

// function saveTasks(id, todo, texter, completed = false) {
//     let tasks = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || [];
//     tasks.push({ id, todo, texter, completed });
//     localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(tasks));
// }

// function loadTasks() {
//     let tasks = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || [];
//     tasks.forEach(task => {
//         addTodo(task.id, task.todo, task.texter, task.completed);
//     });
// }

// function savedFormData() {
//     loadTasks();
// }

// newTasks.addEventListener('click', (e) => {
//     const t = e.target.closest('.task');
//     if (!t) return;

//     const id = t.dataset.id;

//     if (e.target.classList.contains('rename-task')) {
//         const input = t.querySelector('input');
//         const textarea = t.querySelector('textarea');
        
//         if (input.disabled && textarea.disabled) {
//             input.disabled = false;
//             textarea.disabled = false;
//         } else {
//             input.disabled = true;
//             textarea.disabled = true;
//             updateTaskInLocalStorage(id, input.value, textarea.value);
//         }
//     } else if (e.target.classList.contains('del-task')) {
//         t.classList.add('fall');
//         t.addEventListener('transitionend', () => {
//             t.remove();
//             removeTaskFromLocalStorage(id);
//         });
//     } else if (e.target.classList.contains('complete-task')) {
//         const input = t.querySelector('input');
//         input.classList.toggle('completed');
//         toggleTaskCompletionInLocalStorage(id, input.classList.contains('completed'));
//     }
// });

// function updateTaskInLocalStorage(id, updatedTodo, updatedTexter) {
//     let tasks = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || [];
//     tasks = tasks.map(task => {
//         if (task.id === id) {
//             return { id, todo: updatedTodo, texter: updatedTexter, completed: task.completed };
//         }
//         return task;
//     });
//     localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(tasks));
// }

// function toggleTaskCompletionInLocalStorage(id, completed) {
//     let tasks = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || [];
//     tasks = tasks.map(task => {
//         if (task.id === id) {
//             return { ...task, completed };
//         }
//         return task;
//     });
//     localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(tasks));
// }

// function removeTaskFromLocalStorage(id) {
//     let tasks = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || [];
//     tasks = tasks.filter(task => task.id !== id);
//     localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(tasks));
// }



const addInput = document.querySelector('.input-add__task');
const addBtn = document.querySelector('.input-add__btn');
const delTaskBtn = document.querySelector('.input-del__btn');
const textarea = document.querySelector('.input-task__textarea');
const newTasks = document.querySelector('.new-tasks');

const LOCALSTORAGE_KEY = 'tasks';

savedFormData();

delTaskBtn.addEventListener('click', () => {
    addInput.value = '';
    textarea.value = '';
});

addBtn.addEventListener('click', () => {
    let todo = addInput.value.trim();
    let texter = textarea.value.trim();
    
    if (todo === '' && texter === '') {
        alert('No Task is added!');
    } else {
        const id = Date.now().toString(); // Унікальний ідентифікатор
        addTodo(id, todo, texter);
        saveTasks(id, todo, texter);
        addInput.value = '';
        textarea.value = '';
    }
});

function addTodo(id, todo, texter, completed = false) {
    let todoTask = ` 
        <div class="task" data-id="${id}">
            <div class="task-input__h">
                <input type="text" name='todo' disabled value="${todo}" class="${completed ? 'default-input' : ''}">
                <div class="flex-buttons">
                    <button type="button" title='complete task' class="complete-task">✔️</button>
                    <button type="button" title='rename task' class="rename-task">✏️</button>
                    <button type="button" title='delete task' class="del-task">❌</button>
                </div>
            </div>
            <textarea name="textarea" disabled rows="10" cols="30" class="input-task__textarea" maxLength="120">${texter}</textarea>
        </div>
    `;
    newTasks.innerHTML += todoTask;
}

function saveTasks(id, todo, texter, completed = false) {
    let tasks = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || [];
    tasks.push({ id, todo, texter, completed });
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || [];
    tasks.forEach(task => {
        addTodo(task.id, task.todo, task.texter, task.completed);
    });
}

function savedFormData() {
    loadTasks();
}

newTasks.addEventListener('click', (e) => {
    const t = e.target.closest('.task');
    if (!t) return;

    const id = t.dataset.id;

    if (e.target.classList.contains('rename-task')) {
        const input = t.querySelector('input');
        const textarea = t.querySelector('textarea');
        
        if (input.disabled && textarea.disabled) {
            input.disabled = false;
            textarea.disabled = false;
        } else {
            input.disabled = true;
            textarea.disabled = true;
            updateTaskInLocalStorage(id, input.value, textarea.value);
        }
    } else if (e.target.classList.contains('del-task')) {
        t.classList.add('fall');
        t.addEventListener('transitionend', () => {
            t.remove();
            removeTaskFromLocalStorage(id);
        });
    } else if (e.target.classList.contains('complete-task')) {
        e.preventDefault();
        const input = t.querySelector('input');
         input.classList.toggle('default-input');
         toggleTaskCompletionInLocalStorage(id, input.classList.contains('default-input'));
    }
});

function updateTaskInLocalStorage(id, updatedTodo, updatedTexter) {
    let tasks = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || [];
    tasks = tasks.map(task => {
        if (task.id === id) {
            return { id, todo: updatedTodo, texter: updatedTexter, completed: task.completed };
        }
        return task;
    });
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(tasks));
}

function toggleTaskCompletionInLocalStorage(id, completed) {
    let tasks = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || [];
    tasks = tasks.map(task => {
        if (task.id === id) {
            return { ...task, completed };
        }
        return task;
    });
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(tasks));
}

function removeTaskFromLocalStorage(id) {
    let tasks = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || [];
    tasks = tasks.filter(task => task.id !== id);
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(tasks));
}
