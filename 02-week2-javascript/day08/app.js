const form = document.getElementById("todoForm");
const input = document.getElementById("todoInput");
const listEl = document.getElementById("todoList");

let todos = []; // TODO: array of { id, title, done }

function render() {
  // TODO: clear listEl and re-render from todos
   listEl.innerHTML = "";
   todos.forEach(todo => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = todo.title;
    span.style.textDecoration = todo.done ? "line-through" : "none";

    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "✔";
    toggleBtn.addEventListener("click", () => {
      toggleTodo(todo.id);
      render();
    });

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "❌";
    removeBtn.addEventListener("click", () => {
      removeTodo(todo.id);
      render();
    });

    li.appendChild(span);
    li.appendChild(toggleBtn);
    li.appendChild(removeBtn);

    listEl.appendChild(li);
  });
}

function addTodo(title) {
  // TODO
   const newTodo = {
    id: Date.now(), // simple unique id
    title: title,
    done: false
  };

  todos.push(newTodo);
}

function toggleTodo(id) {
  // TODO
  todos = todos.map(todo =>
    todo.id === id ? { ...todo, done: !todo.done } : todo
  );
}

function removeTodo(id) {
  // TODO
   todos = todos.filter(todo => todo.id !== id);
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
