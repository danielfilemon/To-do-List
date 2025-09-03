const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  if (taskInput.value === "") return;

  const li = document.createElement("li");
  li.textContent = taskInput.value;

  
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.onclick = () => li.remove();

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
}
