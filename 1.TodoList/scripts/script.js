const input = document.querySelector("input");
const addBtn = document.getElementById("add");
const tasksBox = document.querySelector("#tasks");
const tasksEmpty = document.querySelector(".tasks-empty");

const colors = ["#eaf5f6", "#fff9eb", "#efefff", "#fde6eaff"];
let isEditing = false;
let editTaskBox = null;
let taskArray = [];

addBtn.addEventListener("click", () => {
  if (!isEditing) {
    if (input.value.trim()) {
      taskArray.push(input.value.trim());

      tasksEmpty.classList.toggle("hidden", taskArray.length !== 0);

      const randomColor = colors[Math.floor(Math.random() * colors.length)];

      tasksBox.innerHTML += `<div style="background-color: ${randomColor}" class="task-box">
      <p>${input.value}</p>
      <button class="edit">Edit</button>
    </div>`;
    } else {
      alert("Please enter a task before trying to add.");
      return;
    }
    input.value = "";
  } else {
    if (input.value.trim()) {
      for (let i = 0; i < taskArray.length; i++) {
        if (
          taskArray[i] === editTaskBox.querySelector(".input-value").textContent
        ) {
          taskArray[i] = input.value;
          editTaskBox.querySelector(".input-value").textContent = input.value;
          console.log(taskArray);
        }
      }
    } else {
      alert("Please enter a task before trying to add.");
      return;
    }
    input.value = "";
    addBtn.textContent = "Add Task";
    isEditing = false;
  }
});

tasksBox.addEventListener("click", (e) => {
  if (!e.target.classList.contains("edit")) return;

  handleEdit(e);
});

function handleEdit(e) {
  input.focus();
  isEditing = true;
  editTaskBox = e.target.parentElement;
  input.value = editTaskBox.querySelector(".input-value").textContent;
  addBtn.textContent = "Save";
  console.log(editTaskBox);
}
