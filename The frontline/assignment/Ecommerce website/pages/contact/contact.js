const column = heading.parentElement;
const contentItems = column.querySelectorAll(".footer-list, .footer-form, p");

heading.addEventListener("click", function () {
  const isOpen = heading.classList.contains("open");

  document.querySelectorAll(".footer-heading").forEach((h) => {
    h.classList.remove("open");
    const allItems = h.parentElement.querySelectorAll(".footer-list, .footer-form, p");
    allItems.forEach((item) => (item.style.display = "none"));
    h.querySelector(".toggle-icon").textContent = "+";
  });

  if (!isOpen) {
    heading.classList.add("open");
    contentItems.forEach((item) => (item.style.display = "block"));
    heading.querySelector(".toggle-icon").textContent = "−";
  } else {
    heading.classList.remove("open");
    contentItems.forEach((item) => (item.style.display = "none"));
    heading.querySelector(".toggle-icon").textContent = "+";
  }
});


//Responsive//////////////////////////////////////

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}