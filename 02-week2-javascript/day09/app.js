const statusEl = document.getElementById("status");
const listEl = document.getElementById("list");
const detailsEl = document.getElementById("details");

let items = [];
let selectedId = null;

function setStatus(text) {
  statusEl.textContent = text;
}

function renderList() {
  listEl.innerHTML = "";
  for (const item of items) {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.textContent = item.title;
    btn.addEventListener("click", () => {
      selectedId = item.id;
      renderDetails();
    });
    li.appendChild(btn);
    listEl.appendChild(li);
  }
}

function renderDetails() {
  const item = items.find((x) => x.id === selectedId);
  if (!item) {
    detailsEl.innerHTML = "<h2>Details</h2><p>Select an item.</p>";
    return;
  }
  detailsEl.innerHTML = `<h2>${item.title}</h2><p>${item.body}</p>`;
}

async function load() {
  try {
    setStatus("Loading...");
    // TODO:
    // 1) fetch posts from a public JSON placeholder API (search: JSONPlaceholder posts)
    // 2) set items = fetched array
    // 3) setStatus("")
    // 4) renderList() + renderDetails()
  } catch (err) {
    console.error(err);
    setStatus("Error loading data.");
  }
}

load();
