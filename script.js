const link = document.querySelector("#palette");
const button = document.querySelector("#theme");

console.log(link);
console.log(button);

button.addEventListener("click", () => {
  const isDark = link.getAttribute("href") === "dark.css";
  link.setAttribute("href", dark ? "light.css" : "dark.css");
  if (isDark) {
    link.setAttribute("href", "light.css");
    button.textContent = "Dark Mode";
  } else {
    link.setAttribute("href", "dark.css");
    button.setAttribute = "Light Mode";
  }
});
