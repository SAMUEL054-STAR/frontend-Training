const hireBtn = document.querySelector("#hire-btn");
const viewBtn = document.querySelector("#view-btn");
const contactBtn = document.querySelector("#contact-btn");

const home = document.querySelector("#home");
const about = document.querySelector("#about");
const projects = document.querySelector("#projects");
const skills = document.querySelector("#skills");
const contact = document.querySelector("#contact");

const navLinks = document.querySelectorAll("nav a");


hireBtn.addEventListener("click", () => {
  contact.scrollIntoView({ behavior: "smooth" });
});

viewBtn.addEventListener("click", () => {
  projects.scrollIntoView({ behavior: "smooth" });
});

contactBtn.addEventListener("click", () => {
  contact.scrollIntoView({ behavior: "smooth" });
});

navLinks[0].addEventListener("click", (e) => {
  e.preventDefault();
  home.scrollIntoView({ behavior: "smooth" });
});

navLinks[1].addEventListener("click", (e) => {
  e.preventDefault();
  about.scrollIntoView({ behavior: "smooth" });
});

navLinks[2].addEventListener("click", (e) => {
  e.preventDefault();
  projects.scrollIntoView({ behavior: "smooth" });
});

navLinks[3].addEventListener("click", (e) => {
  e.preventDefault();
  skills.scrollIntoView({ behavior: "smooth" });
});

navLinks[4].addEventListener("click", (e) => {
  e.preventDefault();
  contact.scrollIntoView({ behavior: "smooth" });
});