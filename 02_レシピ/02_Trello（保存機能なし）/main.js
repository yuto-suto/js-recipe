const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")
addButton.onclick = function () {
  const text = inputElement.value

  const card = document.createElement("div")
  card.className = "card"

  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text
  card.append(todo)

  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  deleteButton.onclick = function () {
    card.remove()
  }
  card.appennd(deleteButton)

  container.append(card)

  inputElement.value = ""
}
