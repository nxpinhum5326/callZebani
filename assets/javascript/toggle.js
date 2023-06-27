var themeToggle = document.getElementById("theme-toggle");
var sunIcon = document.getElementById("sun-icon");
var moonIcon = document.getElementById("moon-icon");
var body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  moonIcon.style.display = "none";
} else {
  body.classList.add("light");
  sunIcon.style.display = "none";
  localStorage.setItem("theme", "light"); // Varsayılan olarak aydınlık temayı ayarla
}

themeToggle.addEventListener("click", function() {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    body.classList.add("light");
    sunIcon.style.display = "none";
    moonIcon.style.display = "inline-block";
    localStorage.setItem("theme", "light");
  } else {
    body.classList.remove("light");
    body.classList.add("dark");
    moonIcon.style.display = "none";
    sunIcon.style.display = "inline-block";
    localStorage.setItem("theme", "dark");
  }
});
