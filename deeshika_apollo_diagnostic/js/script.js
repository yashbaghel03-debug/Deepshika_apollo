// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const header = document.querySelector('.site-header');

if (navToggle && header) {
  navToggle.addEventListener('click', () => {
    header.classList.toggle('is-open');
  });

  document.querySelectorAll('.nav a').forEach((link) => {
    link.addEventListener('click', () => header.classList.remove('is-open'));
  });
}

// Animate the sample report values counting up when scrolled into view
const reportCard = document.getElementById('reportCard');

function animateReportCard() {
  const rows = reportCard.querySelectorAll('.report-card__row[data-target]');
  rows.forEach((row) => {
    const target = parseFloat(row.dataset.target);
    const valueEl = row.querySelector('.report-card__value');
    const duration = 1100;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = (target * eased).toFixed(1);
      valueEl.textContent = current;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}

if (reportCard && 'IntersectionObserver' in window) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    reportCard.querySelectorAll('.report-card__row[data-target]').forEach((row) => {
      row.querySelector('.report-card__value').textContent = row.dataset.target;
    });
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateReportCard();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(reportCard);
  }
}
