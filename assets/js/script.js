const toggleButton = document.getElementById("darkModeToggle");
    
        if (localStorage.getItem("theme") === "dark") {
            document.body.setAttribute("data-bs-theme", "dark");
            toggleButton.textContent = "☀️";
        }
    
        toggleButton.addEventListener("click", function () {
            if (document.body.hasAttribute("data-bs-theme")) {
                document.body.removeAttribute("data-bs-theme");
                localStorage.setItem("theme", "light");
                toggleButton.textContent = "🌙";
            } else {
                document.body.setAttribute("data-bs-theme", "dark");
                localStorage.setItem("theme", "dark");
                toggleButton.textContent = "☀️";
            }
        });