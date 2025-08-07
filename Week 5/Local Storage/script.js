const inputEl = document.getElementById("input-el");
const addBtn = document.getElementById("add-btn");
const clearBtn = document.getElementById("clear-btn");
const container = document.getElementById("wisdom-container");

let wisdom = JSON.parse(localStorage.getItem("wisdom")) || [];

function renderWisdom() {
  container.innerHTML = "";
  for (let item of wisdom) {
    const div = document.createElement("div");
    div.className = "wisdom";
    div.innerHTML = `
      <span>${item.text}</span>
      <span class="delete-btn" data-id="${item.id}">x</span>
    `;
    container.appendChild(div);
  }
}

function saveWisdom() {
  localStorage.setItem("wisdom", JSON.stringify(wisdom));
}

addBtn.addEventListener("click", () => {
  const text = inputEl.value.trim();
  if (text === "") return;

  const wisdomItem = {
    id: Date.now(),
    text: text
  };

  wisdom.push(wisdomItem);
  renderWisdom();
  inputEl.value = "";

  if (wisdom.length % 2 === 0) {
    saveWisdom();
  }
});

clearBtn.addEventListener("click", () => {
  localStorage.removeItem("wisdom");
  wisdom = [];
  renderWisdom();
});

container.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    const idToDelete = Number(e.target.getAttribute("data-id"));
    wisdom = wisdom.filter(item => item.id !== idToDelete);
    saveWisdom();
    renderWisdom();
  }
});

renderWisdom();
