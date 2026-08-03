const timelineEntries = [...document.querySelectorAll('.timeline-entry')];
const mapPins = [...document.querySelectorAll('.map-pin')];
const mapLabel = document.querySelector('.map-label');
const mapRegion = document.querySelector('.map-region');
const mapFigure = document.querySelector('.journey-map');
const mapImg = mapFigure?.querySelector('img');
const zoomToggle = document.querySelector('.map-zoom-toggle');

const setMapOrigin = (pin) => {
  if (!mapImg || !pin) return;
  const { x, y } = pin.dataset;
  if (x !== undefined && y !== undefined) {
    mapImg.style.transformOrigin = `${x}% ${y}%`;
  }
};

timelineEntries.forEach((entry) => {
  entry.addEventListener('click', () => {
    timelineEntries.forEach((item) => { item.classList.remove('is-active'); item.setAttribute('aria-pressed', 'false'); });
    mapPins.forEach((pin) => pin.classList.remove('is-active'));
    entry.classList.add('is-active');
    entry.setAttribute('aria-pressed', 'true');
    const activePin = document.querySelector(`[data-map-pin="${entry.dataset.pin}"]`);
    activePin?.classList.add('is-active');
    setMapOrigin(activePin);
    mapLabel.textContent = entry.dataset.city;
    mapRegion.textContent = entry.dataset.region;
  });
});

setMapOrigin(document.querySelector('.map-pin.is-active'));

zoomToggle?.addEventListener('click', () => {
  const zoomed = mapFigure.classList.toggle('is-zoomed');
  zoomToggle.setAttribute('aria-pressed', String(zoomed));
  zoomToggle.innerHTML = zoomed ? 'Zoom out <span>−</span>' : 'Zoom in <span>+</span>';
});
