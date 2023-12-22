const inputElement = document.getElementById("todo-input");
const todoBox = document.querySelector(".todo-box");

inputElement.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    Addtodo(this.value);
    this.value = "";
  }
});

const Addtodo = (item) => {
  let Newlist = document.createElement("li");
  Newlist.innerHTML = `${item} <i class="fa-solid fa-xmark"></i>`;

  Newlist.addEventListener("click", function () {
    this.classList.toggle("done");
  });
  Newlist.querySelector("i").addEventListener("click", function () {
    Newlist.remove();
  });
  todoBox.appendChild(Newlist);
};
