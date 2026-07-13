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
      '';
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

  var lessonSequences = [
    {
      language: 'germana',
      lessons: [
        { file: 'lectia-01-salutari.html', href: '../../lessons/a1/lectia-01-salutari.html', title: 'Lecția 1 · Salutări' },
        { file: 'lectia-02-ce-faci.html', href: '../../lessons/a1/lectia-02-ce-faci.html', title: 'Lecția 2 · Ce faci?' },
        { file: 'lectia-03-multumesc.html', href: '../../lessons/a1/lectia-03-multumesc.html', title: 'Lecția 3 · Mulțumesc' },
        { file: 'lectia-04-scuze.html', href: '../../lessons/a1/lectia-04-scuze.html', title: 'Lecția 4 · Scuze' },
        { file: 'lectia-05-persoane.html', href: '../../lessons/a1/lectia-05-persoane.html', title: 'Lecția 5 · Persoane' },
        { file: 'lectia-06-prezentari.html', href: '../../lessons/a1/lectia-06-prezentari.html', title: 'Lecția 6 · Prezentări' },
        { file: 'lectia-07-numerele.html', href: '../../lessons/a1/lectia-07-numerele.html', title: 'Lecția 7 · Numerele' },
        { file: 'lectia-08-de-unde-esti.html', href: '../../lessons/a1/lectia-08-de-unde-esti.html', title: 'Lecția 8 · De unde ești?' },
        { file: 'lectia-09-nationalitati.html', href: '../../lessons/a1/lectia-09-nationalitati.html', title: 'Lecția 9 · Naționalități' },
        { file: 'lectia-10-limbi.html', href: '../../lessons/a1/lectia-10-limbi.html', title: 'Lecția 10 · Limbi' }
      ]
    },
    {
      language: 'germana',
      lessons: [
        { file: 'lectie-pentru-copii.html', href: '../../lessons/a1/lectie-pentru-copii.html', title: 'Lecție pentru copii' },
        { file: 'lectie-copii-orasul.html', href: '../../lessons/a1/lectie-copii-orasul.html', title: 'Orașul' },
        { file: 'lectie-copii-animale-companie.html', href: '../../lessons/a1/lectie-copii-animale-companie.html', title: 'Animale de companie' }
      ]
    },
    {
      language: 'engleza',
      lessons: [
        { file: 'lectia-01-salutari-engleza.html', href: '../../lessons/a1/lectia-01-salutari-engleza.html', title: 'Lecția 1 · Salutări' },
        { file: 'la-aeroport-engleza.html', href: '../../lessons/b2/la-aeroport-engleza.html', title: 'B2 · La aeroport' },
        { file: 'robotizarea-in-romania-engleza.html', href: '../../lessons/b2/robotizarea-in-romania-engleza.html', title: 'B2 · Robotizarea în România' }
      ]
    }
  ];

  function currentFileName() {
    return window.location.pathname.split('/').pop() || '';
  }

  function findSequenceEntry() {
    var file = currentFileName();
    for (var i = 0; i < lessonSequences.length; i++) {
      var sequence = lessonSequences[i];
      var lessons = sequence.lessons;
      for (var j = 0; j < lessons.length; j++) {
        if (lessons[j].file === file) {
          return {
            language: sequence.language,
            lessons: lessons,
            index: j
          };
        }
      }
    }
    return null;
  }

  function sequenceItemHtml(item, direction) {
    var isNext = direction === 'next';
    var label = isNext ? 'Lecția următoare' : 'Lecția anterioară';
    var arrow = isNext ? '→' : '←';

    if (!item) {
      var emptyTitle = isNext ? 'Ultima lecție din serie' : 'Prima lecție din serie';
      return [
        '<div class="lesson-sequence-disabled ' + direction + '" aria-disabled="true">',
        isNext ? '' : '<span class="lesson-sequence-arrow" aria-hidden="true">' + arrow + '</span>',
        '<span><span class="lesson-sequence-label">' + label + '</span>',
        '<span class="lesson-sequence-title">' + emptyTitle + '</span></span>',
        isNext ? '<span class="lesson-sequence-arrow" aria-hidden="true">' + arrow + '</span>' : '',
        '</div>'
      ].join('');
    }

    return [
      '<a class="lesson-sequence-link ' + direction + '" href="' + escapeHtml(item.href || item.file) + '">',
      isNext ? '' : '<span class="lesson-sequence-arrow" aria-hidden="true">' + arrow + '</span>',
      '<span><span class="lesson-sequence-label">' + label + '</span>',
      '<span class="lesson-sequence-title">' + escapeHtml(item.title) + '</span></span>',
      isNext ? '<span class="lesson-sequence-arrow" aria-hidden="true">' + arrow + '</span>' : '',
      '</a>'
    ].join('');
  }

  function createSequenceNav() {
    if (document.querySelector('.lesson-sequence-nav')) return;

    var entry = findSequenceEntry();
    if (!entry) return;

    var target = document.querySelector('.lesson-universal-card');
    if (!target || !target.parentNode) return;

    var previous = entry.lessons[entry.index - 1] || null;
    var next = entry.lessons[entry.index + 1] || null;
    var nav = document.createElement('nav');
    nav.className = 'lesson-sequence-nav';
    nav.setAttribute('aria-label', 'Navigare între lecții');
    nav.innerHTML = sequenceItemHtml(previous, 'previous') + sequenceItemHtml(next, 'next');
    target.parentNode.insertBefore(nav, target.nextSibling);
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

    var topbar = document.createElement('header');
    topbar.className = 'lesson-site-topbar';
    topbar.innerHTML = [
      '<a class="lesson-site-logo" href="../../index.html">Romanian <span>Step by Step</span></a>',
      '<nav class="lesson-site-nav" aria-label="Meniu principal">',
      '<a class="lesson-site-link" href="../../index.html#acasa">Home</a>',
      '<div class="lesson-nav-dropdown">',
      '<button class="lesson-site-link lesson-menu-button is-active" type="button" aria-haspopup="true">Lessons</button>',
      '<div class="lesson-nav-dropdown-menu" aria-label="Lessons languages">',
      '<a class="lesson-site-link lesson-dropdown-link" href="../../index.html#lectii">Romanian</a>',
      '<a class="lesson-site-link lesson-dropdown-link" href="../../index.html#a1-germana">German</a>',
      '<a class="lesson-site-link lesson-dropdown-link" href="../../index.html#a1-engleza">English</a>',
      '</div>',
      '</div>',
      '<a class="lesson-site-link" href="../../flashcards.html">Flashcards</a>',
      '<a class="lesson-site-link" href="../../index.html#romana-a1-incepator">Books</a>',
      '<a class="lesson-site-link" href="../../index.html#romana-lectii">Classes</a>',
      '<a class="lesson-site-link" href="../../index.html#contact">Contact</a>',
      '<button class="lesson-site-link" type="button">Sign in</button>',
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
    var card = document.createElement('section');
    card.className = 'lesson-universal-card';
    card.setAttribute('aria-label', 'Introducere lecție');

    card.innerHTML = [
      '<div class="lesson-hero-topline">',
      '<span class="lesson-universal-eyebrow">' + escapeHtml(getLessonLevel()) + '</span>',
      '</div>',
      '<h1>' + escapeHtml(title) + '</h1>',
      subtitle ? '<p>' + escapeHtml(subtitle) + '</p>' : ''
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
    createSequenceNav();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLessonShell);
  } else {
    initLessonShell();
  }
})();
