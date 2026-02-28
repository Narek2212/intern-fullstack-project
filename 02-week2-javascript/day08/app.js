const form = document.getElementById("todoForm");
const input = document.getElementById("todoInput");
const listEl = document.getElementById("todoList");

let todos = []; // TODO: array of { id, title, done }

function render() {
  // TODO: clear listEl and re-render from todos
}

function addTodo(title) {
  // TODO
}

function toggleTodo(id) {
  // TODO
}

function removeTodo(id) {
  // TODO
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = input.value.trim();
  if (!title) return;
  addTodo(title);
  input.value = "";
  render();
});

render();
