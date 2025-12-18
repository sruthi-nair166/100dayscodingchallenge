const input = document.querySelector("input");
const addBtn = document.getElementById("add");
const tasksBox = document.querySelector("#tasks");
const tasksEmpty = document.querySelector(".tasks-empty");

let taskArray = [];

addBtn.addEventListener("click", () => {
  if (input.value.trim()) {
    taskArray.push(input.value.trim());

    tasksEmpty.classList.toggle("hidden", taskArray.length !== 0);

    tasksBox.innerHTML += `<div class="task-box">
      <p>${input.value}</p>
      <button>Edit</button>
    </div>`;
  } else {
    alert("Please enter a task before trying to add.");
    return;
  }
  input.value = "";
});
