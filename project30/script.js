const taskinput = document.querySelector("#task-input")
const addbtn = document.querySelector("#add-btn")
const filterButtons = document.querySelectorAll(".filter-btn")
const summarytext = document.querySelector("#summary-text")
const completedbtn = document.querySelector("#clear-completed-btn")
const tasklist = document.querySelector("#task-list")

let tasks = []

addbtn.addEventListener("click", function () {

  if (taskinput.value === "") {
    return
  }

  const task = {
    text: taskinput.value,
    completed: false
  }

  tasks.push(task)

  taskinput.value = ""

  showTasks()
})


function showTasks() {

  tasklist.innerHTML = ""

  tasks.forEach(function (task) {

    const li = document.createElement("li")

    li.classList.add("task-item")

    li.innerHTML = `
      <button class="task-checkbox">
        ${task.completed ? "✓" : ""}
      </button>

      <span class="task-text">${task.text}</span>

      <button class="delete-btn">×</button>
    `

    const checkbox = li.querySelector(".task-checkbox")
    const tasktext = li.querySelector(".task-text")

    if (task.completed === true) {
      tasktext.style.textDecoration = "line-through"
      checkbox.style.color = "violet"
      checkbox.style.fontWeight = "bold"
      checkbox.style.fontSize = "20px"
    }

    checkbox.addEventListener("click", function () {

      task.completed = !task.completed

      showTasks()
    })


    const deletebtn = li.querySelector(".delete-btn")

    deletebtn.addEventListener("click", function () {

      li.remove()

    })


    tasklist.appendChild(li)
  })

  summarytext.textContent = tasks.length + " tasks"
}


filterButtons.forEach(function (button) {

  button.addEventListener("click", function () {

    filterButtons.forEach(function (btn) {
      btn.classList.remove("active")
    })

    button.classList.add("active")

    const filter = button.dataset.filter

    if (filter === "all") {
      showTasks()
    }

    if (filter === "active") {

      tasklist.innerHTML = ""

      tasks.forEach(function (task) {

        if (task.completed === false) {

          const li = document.createElement("li")

          li.classList.add("task-item")

          li.textContent = task.text

          li.style.color = "red"

          tasklist.appendChild(li)
        }
      })
    }

    if (filter === "completed") {

      tasklist.innerHTML = ""

      tasks.forEach(function (task) {

        if (task.completed === true) {

          const li = document.createElement("li")

          li.classList.add("task-item")

          li.textContent = task.text

          li.style.color = "green"

          tasklist.appendChild(li)
        }
      })
    }
  })
})


completedbtn.addEventListener("click", function () {

  tasks = tasks.filter(function (task) {
    return task.completed === false
  })

  showTasks()
})