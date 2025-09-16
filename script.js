const list = document.querySelector('#todo-list')

const li = document.createElement("li")

li.textContent = "Estudar JS"

list.append(li)

list.addEventListener("click", event => {
    const li = event.target.closest("li")

    if (!li) return

    li.classList.toggle("done")
})