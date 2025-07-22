// Region filter logic
document.querySelectorAll('.region').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.region').forEach(r => r.classList.remove('active'));
    btn.classList.add('active');
    const selectedRegion = btn.dataset.region;
    document.querySelectorAll('#destinations [data-region]').forEach(card => {
      card.style.display = selectedRegion === 'all' || card.dataset.region === selectedRegion ? 'block' : 'none';
    });
  });
});
