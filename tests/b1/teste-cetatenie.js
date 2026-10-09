'use strict';
document.querySelectorAll('.quiz').forEach(form => {
  const section = form.closest('.chapter');
  const items = [...form.querySelectorAll('fieldset')];
  const result = form.querySelector('.feedback');
  const counter = section.querySelector('.progress span');
  function clearResults() {
    items.forEach(item => {
      item.classList.remove('is-correct', 'is-wrong');
      item.querySelector('.answer').hidden = true;
      item.querySelectorAll('input').forEach(input => input.removeAttribute('aria-invalid'));
    });
    result.textContent = '';
  }
  form.addEventListener('change', () => {
    clearResults();
    counter.textContent = items.filter(item => item.querySelector('input:checked')).length;
  });
  form.addEventListener('submit', event => {
    event.preventDefault();
    let correct = 0, answered = 0;
    items.forEach(item => {
      const chosen = item.querySelector('input:checked');
      const ok = Boolean(chosen && chosen.value === item.dataset.answer);
      if (chosen) answered++;
      if (ok) correct++;
      item.classList.toggle('is-correct', ok);
      item.classList.toggle('is-wrong', !ok);
      item.querySelector('.verdict').textContent = ok ? 'Corect.' : chosen ? 'Răspuns incorect.' : 'Fără răspuns.';
      item.querySelector('.answer').hidden = false;
      item.querySelectorAll('input').forEach(input => input.setAttribute('aria-invalid', String(!ok)));
    });
    result.textContent = 'Rezultat: ' + correct + ' / ' + items.length + ' puncte (' + Math.round(correct / items.length * 100) + '%). ' + (items.length - answered) + ' întrebări fără răspuns. ' + (correct === items.length ? 'Ai rezolvat corect tot testul. Continuă cu partea orală.' : 'Recitește explicațiile și reia întrebările greșite.');
    result.focus();
  });
  form.addEventListener('reset', () => {
    clearResults();
    counter.textContent = '0';
    section.querySelectorAll('.oral textarea').forEach(area => area.value = '');
    section.querySelectorAll('.oral details').forEach(detail => detail.open = false);
  });
});

