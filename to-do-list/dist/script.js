function header() {
  const dateHeader = document.getElementById("date");
  dateHeader.innerHTML = new Date().toGMTString().slice(0, -4);
}

function deleteTask(el) {
  let task_card = el.parentElement;
  task_card.remove();
}

function generateId(n) {
  let id = "";
  const alphabet =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < n; i++) {
    id = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
  }
  return id;
}

function finishTask(el) {
  let task_card = el.parentElement;
  task_card.classList.toggle("to-do-content-finish");
  task_card.firstElementChild.classList.toggle(
    "to-do-content-card-checkbox-complete"
  );
  if (
    task_card.firstElementChild.classList.contains(
      "to-do-content-card-checkbox-complete"
    )
  ) {
    task_card.firstElementChild.innerHTML = "✔";
  } else {
    task_card.firstElementChild.innerHTML = "";
  }
}

function cardElements(title) {
  const id = generateId(15);
  const time = new Date().toGMTString().slice(0, -4);
  return `
    <div taskId="${id}" class="to-do-content-cards">
        <button onclick="finishTask(this);" class="to-do-content-card-checkbox"></button>
        <div class="to-do-content-cards-info">
          <h3 class="to-do-content-card-task">${title}</h3>
          <p class="time">${time}</p>
        </div>
        <button onclick="deleteTask(this);" class="to-do-content-card-delete-btn">❌</button>
      </div>
  `;
}

function createTask() {
  el = document.querySelector(".to-do-input");
  task_sec = document.querySelector(".to-do-content");
  input_value = el.value;
  task_sec.innerHTML += cardElements(input_value);
  el.value = "";
}

function clearAllTask() {
  task_sec = document.querySelector(".to-do-content");
  task_sec.innerHTML = "";
}

window.onload = () => {
  try {
    document.querySelector(".to-do-input-submit").onclick = () => createTask();
    document.querySelector(".to-do-input").onkeypress = () =>
      event.keyCode === 13 ? createTask() : null;
  } catch (error) {
    console.log(error);
  }

  try {
    const dateHeader = document.querySelector(".to-do-header-date");
    dateHeader.innerHTML = new Date().toGMTString().slice(0, -13);
  } catch (error) {
    console.log(error);
  }
};