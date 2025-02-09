const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value.trim() === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");
    li.textContent = inputBox.value;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";
    deleteBtn.classList.add("delete");
    deleteBtn.onclick = () => li.remove();

    li.appendChild(deleteBtn);
    li.onclick = () => li.classList.toggle("checked");

    listContainer.appendChild(li);
    inputBox.value = "";
}

inputBox.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
