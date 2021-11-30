const list = document.querySelector(".display-li");
const entry = document.querySelector(".entry-text");

document.querySelector(".add-btn").addEventListener("click", function () {
  list.textContent = entry.value;
});
