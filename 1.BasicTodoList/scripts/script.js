const input = document.querySelector("input");
const addBtn = document.getElementById("add");
const tasksBox = document.querySelector("#tasks");

addBtn.addEventListener("click", () => {
  tasksBox.innerHTML += `<div class="task-box">
      <p>${input.value}<p>
      <button>Edit</button>
    </div>`;
});
