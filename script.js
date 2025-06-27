// Toggle start menu
const startButton = document.getElementById("start-button");
const startMenu = document.getElementById("start-menu");

startButton.addEventListener("click", () => {
  startMenu.classList.toggle("hidden");
});

// My Computer popup
function openMyComputer() {
  const windowDiv = document.createElement("div");
  windowDiv.classList.add("window");
  windowDiv.innerHTML = `
    <div class="window-header">
      <span>My Computer</span>
      <button onclick="this.parentElement.parentElement.remove()">X</button>
    </div>
    <div class="window-content">
      <p>This is a simulated 'My Computer' window!</p>
    </div>
  `;
  document.body.appendChild(windowDiv);
}
