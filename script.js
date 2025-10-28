// Tiny JS for the mobile nav and dynamic year
const btn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
btn?.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  btn.setAttribute('aria-expanded', open ? 'true' : 'false');
});
document.getElementById('year').textContent = new Date().getFullYear();
