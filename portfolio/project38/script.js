const nameInput = document.querySelector("#name-input")
const addBtn = document.querySelector("#add-btn")
const selectAll = document.querySelector("#select-all")
const deleteSelected = document.querySelector("#delete-selected")
const undoBtn = document.querySelector("#undo-btn")
const number = document.querySelector("#number")
const nameList = document.querySelector("#name-list")


let names = []

let lastDeleted = []

addBtn.addEventListener("click", function () {

  if (nameInput.value.trim() === "") {
    return
  }

  const name = {
    text: nameInput.value,
    selected: false
  }

  names.push(name)
  nameInput.value = ""
  showNames()
})



function showNames() {

  nameList.innerHTML = ""


  if (names.length === 0) {

    nameList.innerHTML = `
      <p class="empty-msg">
        Add names to get started
      </p>
    `
    updateNumber()

    return
  }

  names.forEach(function (name, index) {
    const li = document.createElement("li")
    li.classList.add("name-item")
    li.innerHTML = `
      <input
        type="checkbox"
        class="name-checkbox"
        ${name.selected ? "checked" : ""}
      >
      <span class="name-text">
        ${name.text}
      </span>
      <button class="delete-btn">
        ×
     </button>
    `
    const checkbox = li.querySelector(".name-checkbox")
    checkbox.addEventListener("change", function () {
      name.selected = checkbox.checked
      updateNumber()
      updateSelectAll()
    })
      const deleteBtn = li.querySelector(".delete-btn")

    deleteBtn.addEventListener("click", function () {
      lastDeleted = [name]
      names.splice(index, 1)
      showNames()
    })
    nameList.appendChild(li)
  })
  updateNumber()
  updateSelectAll()
}
function updateNumber() {
  let selectedCount = 0
  names.forEach(function (name) {
    if (name.selected) {
      selectedCount++
    }
  })
  number.textContent =
    `${names.length} names — ${selectedCount} selected`
}
selectAll.addEventListener("change", function () {
  names.forEach(function (name) {
    name.selected = selectAll.checked
  })
  showNames()
})
function updateSelectAll() {
  if (names.length === 0) {
    selectAll.checked = false
    return
  }
  let allSelected = true
  names.forEach(function (name) {
    if (!name.selected) {
      allSelected = false
    }
  })

  selectAll.checked = allSelected
}
deleteSelected.addEventListener("click", function () {
  lastDeleted = []
  const remainingNames = []
  names.forEach(function (name) {
    if (name.selected) {
      lastDeleted.push(name)
    } else {
      remainingNames.push(name)
    }
  })
  names = remainingNames
  showNames()
})
undoBtn.addEventListener("click", function () {
  if (lastDeleted.length === 0) {
    return
  }
  lastDeleted.forEach(function (name) {
    names.push(name)
  })
  lastDeleted = []
  showNames()
})