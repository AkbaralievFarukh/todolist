const list = document.querySelector('#list')
const btnAdd = document.querySelector('#btn-add')
const inputDo = document.querySelector('#todo-input')


let todos = [
    {
        id: 1,
        text: 'Learn JS',
        completed: true
    },
    {
        id: 2,
        text: 'Learn React',
        completed: false
    }
]

let allToDo = () => {
    list.innerHTML = `
    ${todos.map(todo => {
        return `
        <li>
            <input class="list-checkbox" type="checkbox" ${todo.completed ? 'checked': ''}>
            <span>${todo.text}</span>
        </li>
        `
    })}
`
    const listChekcbox = document.querySelectorAll('.list-checkbox')
    listChekcbox.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            todos.completed = !todos.completed
        });
    });
}

btnAdd.addEventListener('click', () => {
    let id = todos.length
    let newDo = { id: id++, text: inputDo.value, completed: false };
    console.log(newDo)
    todos = [...todos, newDo]
    allToDo()
    inputDo.value = ''
})

allToDo()

console.log(todos)