const inputBox = document.querySelector('#input-box')
const listContainer = document.querySelector('#list-container')
const addTaskBtn = document.querySelector('#addTaskBtn')

const addTask = () => {
    if(inputBox.value === ''){
        alert("You must write something!")
    }
    else{
        // add li task 
        let li = document.createElement('li')
        li.innerText = inputBox.value
        listContainer.appendChild(li)
        
        // add cross icon to li 
        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        li.appendChild(span)
    }
    inputBox.value = ""
    saveData()
}

addTaskBtn.addEventListener('click', addTask)

const handleClick = (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
    } else {
        e.target.parentElement.remove()
    }
    saveData()
}

listContainer.addEventListener("click", handleClick)

const saveData = () => {
    localStorage.setItem('data', listContainer.innerHTML)
}

const showTask = (() => {
    listContainer.innerHTML = localStorage.getItem('data')
})()
