(function () {
  function textFrom(selector) {
    var element = document.querySelector(selector);
    return element ? element.textContent.replace(/\s+/g, ' ').trim() : '';
  }

  function getLessonTitle() {
    return textFrom('.lesson-title-block h1') ||
      textFrom('body > .header h1') ||
      textFrom('.header h1') ||
      textFrom('h1') ||
      document.title.replace(/Romanian Step by Step|Rumänisch|Romanian|·|—/g, '').trim() ||
      'Lecție';
  }

  function getLessonSubtitle() {
    return textFrom('.lesson-title-block .subtitle') ||
      textFrom('body > .header p') ||
      textFrom('.header p') ||
      'În această lecție vom învăța vocabular, expresii și structuri utile pentru comunicare.';
  }

  function getLessonLevel() {
    var source = textFrom('.level-tag') || textFrom('.home-link') || document.title;
    var match = source.match(/\b(A1|A2|B1|B2|C1)\b/i);
    return match ? 'Nivel ' + match[1].toUpperCase() : 'Lecție';
  }

  function getActiveLanguage() {
    var languageParam = new URLSearchParams(window.location.search).get('lang');
    if (/^(romana|germana|engleza|spaniola)$/.test(languageParam || '')) {
      return languageParam;
    }

    var source = [
      document.querySelector('.home-link') ? document.querySelector('.home-link').getAttribute('href') : '',
      textFrom('.home-link'),
      document.title,
      window.location.search,
      window.location.pathname
    ].join(' ').toLowerCase();

    if (/german|germană|germana|deutsch|rumänisch|zurück/.test(source)) return 'germana';
    if (/englez|engleza|english/.test(source)) return 'engleza';
    if (/spaniol|spaniola|spanish/.test(source)) return 'spaniola';
    return 'romana';
  }

  function activeClass(language, activeLanguage) {
    return language === activeLanguage ? ' is-active' : '';
  }

  function escapeHtml(text) {
    return String(text || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function cleanTopicText(text, type) {
    var cleaned = (text || '')
      .replace(/[^A-Za-z0-9ăâîșțĂÂÎȘȚ\s&-]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    if (type === 'vocab') {
      cleaned = cleaned
        .replace(/^vocabular(?:\s+esențial|\s+cu\s+traducere)?\s*[-–:]?\s*/i, '')
        .replace(/^vocabulary\s*[-–:]?\s*/i, '');
    }

    if (type === 'grammar') {
      cleaned = cleaned
        .replace(/^gramatic[ăa]\s*[-–:]?\s*/i, '')
        .replace(/^grammar\s*[-–:]?\s*/i, '');
    }

    return cleaned || '';
  }

  function findTopic(type) {
    var pattern = type === 'vocab'
      ? /vocabular|vocabulary/i
      : /gramatic|grammar/i;

    var headings = Array.prototype.slice.call(document.querySelectorAll('h2, h3, h4, .section-title, .card-title, .tab, .nav-item'));
    for (var i = 0; i < headings.length; i++) {
      var text = headings[i].textContent.replace(/\s+/g, ' ').trim();
      if (pattern.test(text)) {
        var cleaned = cleanTopicText(text, type);
        if (cleaned) return cleaned;
      }
    }

    if (type === 'vocab') return getLessonTitle();
    return 'structuri și expresii utile';
  }

  function createTopbar() {
    if (document.querySelector('.lesson-site-topbar')) return;

    var activeLanguage = getActiveLanguage();
    var topbar = document.createElement('header');
    topbar.className = 'lesson-site-topbar';
    topbar.innerHTML = [
      '<a class="lesson-site-logo" href="../../index.html">Romanian <span>Step by Step</span></a>',
      '<nav class="lesson-site-nav" aria-label="Meniu principal">',
      '<a class="lesson-site-link' + activeClass('romana', activeLanguage) + '" href="../../index.html#acasa">Română</a>',
      '<a class="lesson-site-link' + activeClass('germana', activeLanguage) + '" href="../../index.html#a1-germana">Germană</a>',
      '<a class="lesson-site-link' + activeClass('engleza', activeLanguage) + '" href="../../index.html#a1-engleza">Engleză</a>',
      '<a class="lesson-site-link' + activeClass('spaniola', activeLanguage) + '" href="../../index.html#a1-spaniola">Spaniolă</a>',
      '<button class="lesson-login-link" type="button">Login</button>',
      '</nav>'
    ].join('');

    document.body.insertBefore(topbar, document.body.firstChild);
  }

  function createIntroCard() {
    if (document.querySelector('.lesson-universal-card')) return;

    var target = document.querySelector('.main') || document.querySelector('.container') || document.querySelector('.content') || document.querySelector('main');
    if (!target) return;

    var title = getLessonTitle();
    var subtitle = getLessonSubtitle();
    var vocabTopic = findTopic('vocab');
    var grammarTopic = findTopic('grammar');
    var card = document.createElement('section');
    card.className = 'lesson-universal-card';
    card.setAttribute('aria-label', 'Introducere lecție');

    card.innerHTML = [
      '<div class="lesson-hero-topline">',
      '<span class="lesson-universal-eyebrow">' + escapeHtml(getLessonLevel()) + '</span>',
      '<span class="lesson-universal-note">În această lecție vom învăța</span>',
      '</div>',
      '<h1>' + escapeHtml(title) + '</h1>',
      '<p>' + escapeHtml(subtitle) + '</p>',
      '<div class="lesson-hero-facts">',
      '<div class="lesson-hero-fact"><span>Vocabular despre</span><strong>' + escapeHtml(vocabTopic) + '</strong></div>',
      '<div class="lesson-hero-fact"><span>Gramatică despre</span><strong>' + escapeHtml(grammarTopic) + '</strong></div>',
      '</div>'
    ].join('');

    target.insertBefore(card, target.firstChild);
  }

  function initLessonShell() {
    document.body.classList.add('has-universal-lesson-shell');
    if (document.querySelector('.sidebar')) {
      document.body.classList.add('has-lesson-sidebar');
    }
    createTopbar();
    createIntroCard();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLessonShell);
  } else {
    initLessonShell();
  }
})();
