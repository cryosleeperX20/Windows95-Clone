function toggleStartMenu() {
  const menu = document.getElementById("startMenu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

function toggleGameMenu(event) {
  event.stopPropagation(); // Stops the click from closing start menu
  const submenu = document.getElementById('game-submenu');
  submenu.classList.toggle('hidden');
}

function openWormholeRunner() {
  const windowEl = document.getElementById('gameWindow');
  windowEl.classList.remove('hidden');
}
function closeGameWindow() {
  document.getElementById('gameWindow').classList.add('hidden');
}

// Optional: Hide submenu if clicked elsewhere
document.addEventListener('click', function () {
  document.getElementById('game-submenu')?.classList.add('hidden');
});

// Dragging logic for the game window
const gameWindow = document.getElementById('gameWindow');
const header = gameWindow?.querySelector('.window-header');

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

if (header) {
  header.addEventListener('mousedown', function (e) {
    isDragging = true;
    offsetX = e.clientX - gameWindow.offsetLeft;
    offsetY = e.clientY - gameWindow.offsetTop;
  });

  document.addEventListener('mouseup', () => isDragging = false);
  document.addEventListener('mousemove', function (e) {
    if (isDragging) {
      gameWindow.style.left = (e.clientX - offsetX) + 'px';
      gameWindow.style.top = (e.clientY - offsetY) + 'px';
    }
  });
}
