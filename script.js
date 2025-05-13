window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const mainContent = document.getElementById("main-content");

  setTimeout(() => {
    loader.style.display = "none";
    mainContent.classList.remove("hidden");
  }, 2000); // 2 second loading animation
});
