const menuButton = document.getElementById('menuButton');
const navLinks = document.getElementById('navLinks');
if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
}
