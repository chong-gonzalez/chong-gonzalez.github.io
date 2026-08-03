const rotators = document.querySelectorAll('.portfolio-rotator');

rotators.forEach((rotator) => {
  const images = [...rotator.querySelectorAll('img')];
  const interval = Number(rotator.dataset.interval) || 4500;
  const previous = rotator.querySelector('.gallery-previous');
  const next = rotator.querySelector('.gallery-next');
  const count = rotator.querySelector('.gallery-count');
  let activeIndex = 0;

  const goTo = (index) => {
    images[activeIndex].classList.remove('is-active');
    activeIndex = (index + images.length) % images.length;
    images[activeIndex].classList.add('is-active');
    count.textContent = `${String(activeIndex + 1).padStart(2, '0')} / ${String(images.length).padStart(2, '0')}`;
  };

  previous.addEventListener('click', () => goTo(activeIndex - 1));
  next.addEventListener('click', () => goTo(activeIndex + 1));
  window.setInterval(() => goTo(activeIndex + 1), interval);
});
