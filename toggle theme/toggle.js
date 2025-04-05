const toggleButton = document.getElementById("themetoggle");

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
});