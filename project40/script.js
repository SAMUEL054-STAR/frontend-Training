const colorInput = document.querySelector('input[type="color"]');
const nameInput = document.querySelector('input[type="text"]');
const addBtn = document.querySelector(".input-area button");
const palette = document.querySelector(".palette");
const clearBtn = document.querySelector(".bottom button:last-child");
const exportBtn = document.querySelector(".bottom button:first-child");
const presetButtons = document.querySelectorAll(".presets button");

let colors = [
  { name: "Deep Ocean", color: "#0077B6" },
  { name: "Sky Blue", color: "#00B4D8" },
  { name: "Light Blue", color: "#90E0EF" },
  { name: "Pale Blue", color: "#CAF0F8" },
  { name: "Navy", color: "#023E8A" },
];

function displayColors() {
  palette.innerHTML = "";

  colors.forEach(function (item, index) {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class="color" style="background: ${item.color}"></div>

      <div class="card-info">
        <h3>${item.name}</h3>
        <p>${item.color}</p>

        <div>
          <button onclick="copyColor(${index})">Copy</button>
          <button onclick="deleteColor(${index})">Del</button>
        </div>
      </div>
    `;

    palette.appendChild(card);
  });
}

addBtn.addEventListener("click", function () {
  const name = nameInput.value.trim();

  if (name === "") {
    alert("Please enter a color name");
    return;
  }

  colors.push({
    name: name,
    color: colorInput.value,
  });

  nameInput.value = "";

  displayColors();
});

function copyColor(index) {
  navigator.clipboard.writeText(colors[index].color);
  alert("Color copied!");
}

function deleteColor(index) {
  colors.splice(index, 1);
  displayColors();
}

clearBtn.addEventListener("click", function () {
  colors = [];
  displayColors();
});

exportBtn.addEventListener("click", function () {
  let css = ":root {\n";

  colors.forEach(function (item) {
    let name = item.name.toLowerCase().replace(/\s+/g, "-");

    css += `  --${name}: ${item.color};\n`;
  });

  css += "}";

  navigator.clipboard.writeText(css);

  alert("CSS variables copied!");
});

const presets = {
  ocean: [
    ["Deep Ocean", "#0077B6"],
    ["Sky Blue", "#00B4D8"],
    ["Light Blue", "#90E0EF"],
    ["Pale Blue", "#CAF0F8"],
    ["Navy", "#023E8A"],
  ],

  sunset: [
    ["Red", "#FF4D4D"],
    ["Orange", "#FF7A00"],
    ["Yellow", "#FFC107"],
    ["Pink", "#FF6B81"],
    ["Purple", "#8E44AD"],
  ],

  forest: [
    ["Dark Green", "#1B4332"],
    ["Forest", "#2D6A4F"],
    ["Green", "#52B788"],
    ["Mint", "#95D5B2"],
    ["Light Green", "#D8F3DC"],
  ],

  mono: [
    ["Black", "#000000"],
    ["Dark", "#333333"],
    ["Mid", "#666666"],
    ["Light", "#999999"],
    ["White", "#FFFFFF"],
  ],
};

presetButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const text = button.textContent;

    if (text.includes("Ocean")) {
      loadPreset("ocean");
    }

    if (text.includes("Sunset")) {
      loadPreset("sunset");
    }

    if (text.includes("Forest")) {
      loadPreset("forest");
    }

    if (text.includes("Mono")) {
      loadPreset("mono");
    }
  });
});

function loadPreset(type) {
  colors = presets[type].map(function (item) {
    return {
      name: item[0],
      color: item[1],
    };
  });

  displayColors();
}

displayColors();
