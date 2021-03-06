const changeThemeCheckbox = document.getElementById("change-theme-checkbox");
const linkToTheme = document.getElementById("link-to-theme");

changeThemeCheckbox.addEventListener("change", changeTheme);
const lightTheme = "css/light.css";
const darkTheme = "css/dark.css";


function changeTheme() {
  let currentTheme = linkToTheme.getAttribute("href");

  if (currentTheme == lightTheme) {
    currentTheme = darkTheme;
  } else {
    currentTheme = lightTheme;
  }

  linkToTheme.setAttribute("href", currentTheme);
}
