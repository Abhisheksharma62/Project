let h2 = document.getElementById("hi");
h2.innerText = "My Todo List";
h2.classList.add("text-light");

let p = document.getElementById("p");
p.innerText = "Organize your day,one task at a time";
p.classList.add("text-light");

function showText() {
  let input = document.getElementById("userInput");
  
  let ol = document.getElementById("myList");
  let task = input.value;
  let span = document.createElement("span");
  span.innerText = task;
  if (task === "") {
    return;
  }

  let li = document.createElement("li");
  li.classList.add("ms-2", "mb-2");
  li.classList.add("list-group-item", "d-flex", "align-items-center","gap-3");

  let btn = document.createElement("button");
  btn.innerText = "Delete";
  btn.classList.add("btn", "btn-warning", "ms-3");

  btn.onclick = () => li.remove();
  let btn1 = document.createElement("button");
  btn1.innerText = "Edit";
  btn1.classList.add("btn", "btn-primary", "ms-3");

  btn1.onclick = function () {
    input.value = span.innerText;
    input.focus();

    btn1.style.display = "none";
    saveBtn.style.display = "inline-block";
  };

  let saveBtn = document.createElement("button");
  saveBtn.innerText = "save";
  saveBtn.className = "btn btn-primary  ms-3";
  saveBtn.style.display = "none";

  saveBtn.onclick = function () {
    task = input.value.trim();
    if (task.trim() === "") return;
    span.innerText = task;
    input.value = "";
    saveBtn.style.display = "none";
    btn1.style.display = "inline-block";
  };
  let buttons = document.createElement("div");
  buttons.classList.add("d-flex","gap-2","ms-auto", "flex-shrink-0");
  buttons.append( btn1, saveBtn, btn);
 
span.classList.add("task-text");
  span.style.flexGrow = "1";
  span.style.overflowWrap = "anywhere";
  

  let checkbox=document.createElement("input");
  checkbox.type="checkbox";
  checkbox.classList.add("form-check-input","ms-2");
 li.append(checkbox,span,buttons);
//  li.prepend(checkbox);
  ol.appendChild(li);

  input.value = "";
}
