const header = document.querySelector('.site-header');
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
menu?.addEventListener('click', () => {
  const isOpen = header.classList.toggle('open');
  menu.setAttribute('aria-expanded', isOpen);
  menu.querySelector('.sr-only').textContent = isOpen ? 'Close menu' : 'Open menu';
});
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  header.classList.remove('open');
  menu?.setAttribute('aria-expanded', 'false');
}));
document.querySelector('#year').textContent = new Date().getFullYear();
const filter = document.querySelector('.filter-button');
filter?.addEventListener('click', () => {
  const active = filter.getAttribute('aria-pressed') === 'true';
  filter.setAttribute('aria-pressed', String(!active));
  filter.innerHTML = active ? 'Show all <span>+</span>' : 'Selected research <span>×</span>';
  document.querySelectorAll('.project:not(.featured)').forEach((project) => project.hidden = !active);
});
