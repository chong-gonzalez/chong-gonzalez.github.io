const timelineEntries = [...document.querySelectorAll('.timeline-entry')];
const mapPins = [...document.querySelectorAll('.map-pin')];
const mapLabel = document.querySelector('.map-label');
const mapRegion = document.querySelector('.map-region');

timelineEntries.forEach((entry) => {
  entry.addEventListener('click', () => {
    timelineEntries.forEach((item) => { item.classList.remove('is-active'); item.setAttribute('aria-pressed', 'false'); });
    mapPins.forEach((pin) => pin.classList.remove('is-active'));
    entry.classList.add('is-active');
    entry.setAttribute('aria-pressed', 'true');
    document.querySelector(`[data-map-pin="${entry.dataset.pin}"]`).classList.add('is-active');
    mapLabel.textContent = entry.dataset.city;
    mapRegion.textContent = entry.dataset.region;
  });
});
