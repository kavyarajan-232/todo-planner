function addTask() {
  const task = document.getElementById("task").value;
  const li = document.createElement("li");
  li.innerText = task;
  document.getElementById("list").appendChild(li);
  document.getElementById("task").value = "";
}
