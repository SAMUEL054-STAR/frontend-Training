const nameInput = document.querySelector("#c-name");
const phoneInput = document.querySelector("#c-phone");
const emailInput = document.querySelector("#c-email");
const categoryInput = document.querySelector("#c-cat");
const addBtn = document.querySelector("#add-btn");
const searchInput = document.querySelector("#search-input");
const contactCount = document.querySelector("#contact-count");
const contactList = document.querySelector("#contact-list");

let contacts = [];

addBtn.addEventListener("click", function () {
  let name = nameInput.value.trim();
  let phone = phoneInput.value.trim();
  let email = emailInput.value.trim();
  let category = categoryInput.value;

  if (name === "") {
    alert("Please enter a name");
    return;
  }

  let contact = {
    name: name,
    phone: phone,
    email: email,
    category: category
  };

  contacts.push(contact);

  nameInput.value = "";
  phoneInput.value = "";
  emailInput.value = "";

  displayContacts();
});

searchInput.addEventListener("input", function () {
  displayContacts();
});

function displayContacts() {
  let search = searchInput.value.toLowerCase();

  let filtered = contacts.filter(function (contact) {
    return (
      contact.name.toLowerCase().includes(search) ||
      contact.phone.includes(search) ||
      contact.email.toLowerCase().includes(search)
    );
  });

  contactCount.textContent = filtered.length + " contacts";

  contactList.innerHTML = "";

  if (filtered.length === 0) {
    contactList.innerHTML = `
      <p class="empty-msg">No contacts found.</p>
    `;
    return;
  }

  filtered.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });

  let groups = {};

  filtered.forEach(function (contact) {
    let letter = contact.name[0].toUpperCase();

    if (!groups[letter]) {
      groups[letter] = [];
    }

    groups[letter].push(contact);
  });

  for (let letter in groups) {
    let group = document.createElement("div");
    group.className = "letter-group";

    group.innerHTML = `
      <div class="letter-heading">${letter}</div>
    `;

    groups[letter].forEach(function (contact) {
      let card = document.createElement("div");
      card.className = "contact-card";

      let initials = contact.name
        .split(" ")
        .map(word => word[0])
        .join("")
        .toUpperCase();

      card.innerHTML = `
        <div class="avatar cat-${contact.category}">
          ${initials}
        </div>

        <div class="contact-info">
          <div class="contact-name">${contact.name}</div>
          <div class="contact-phone">${contact.phone}</div>
          <div class="contact-email">${contact.email}</div>
        </div>

        <span class="contact-cat-badge">
          ${contact.category}
        </span>

        <button class="contact-delete">✕</button>
      `;

      card.querySelector(".contact-delete").addEventListener("click", function () {
        contacts = contacts.filter(function (item) {
          return item !== contact;
        });

        displayContacts();
      });

      group.appendChild(card);
    });

    contactList.appendChild(group);
  }
}