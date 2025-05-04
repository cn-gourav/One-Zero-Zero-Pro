const bar = document.getElementById("bar");
const list = document.getElementById("list");
const cross = document.getElementById("cross");
bar.addEventListener("click", () => {
  list.classList.toggle("navlist-active");
  cross.classList.toggle("fa-xmark");
});
