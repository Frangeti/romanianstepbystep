ObjC.import('Foundation');

const base = '/Users/raluca/Workspace/romanianstepbystep/lessons/a1/';
const stems = [
  'lectia-01-primul-contact',
  'lectia-02-date-personale',
  'lectia-03-familia-si-persoanele'
];
const suffixes = ['', '-germana', '-engleza'];
const oldHeader = '<header class="topbar"><a class="brand" href="../../index.html">Romanian <span>Step by Step</span></a><nav class="topnav"><a href="../../index.html">Acasă</a><a href="../../manuale/cuprins-manual-a1.html">Programa A1</a><a href="../../index.html#contact">Contact</a></nav></header>';
const siteHeader = '<header class="lesson-site-topbar"><a class="lesson-site-logo" href="../../index.html">Romanian <span>Step by Step</span></a><nav class="lesson-site-nav" aria-label="Meniu principal"><a class="lesson-site-link" href="../../index.html#acasa">Home</a><div class="lesson-nav-dropdown"><button class="lesson-site-link lesson-menu-button is-active" type="button" aria-haspopup="true">Lessons</button><div class="lesson-nav-dropdown-menu" aria-label="Lessons languages"><a class="lesson-site-link lesson-dropdown-link" href="../../index.html#lectii">Romanian</a><a class="lesson-site-link lesson-dropdown-link" href="../../index.html#a1-germana">German</a><a class="lesson-site-link lesson-dropdown-link" href="../../index.html#a1-engleza">English</a></div></div><a class="lesson-site-link" href="../../flashcards.html">Flashcards</a><a class="lesson-site-link" href="../../index.html#romana-a1-incepator">Books</a><a class="lesson-site-link" href="../../index.html#romana-lectii">Classes</a><a class="lesson-site-link" href="../../index.html#contact">Contact</a><button class="lesson-site-link" type="button">Sign in</button></nav></header>';

function read(path) {
  return ObjC.unwrap($.NSString.stringWithContentsOfFileEncodingError($(path), $.NSUTF8StringEncoding, null));
}
function write(path, content) {
  $(content).writeToFileAtomicallyEncodingError($(path), true, $.NSUTF8StringEncoding, null);
}

for (const stem of stems) {
  for (const suffix of suffixes) {
    const path = `${base}${stem}${suffix}.html`;
    let html = read(path);
    if (!html.includes('lesson-shell.css')) {
      html = html.replace('<link rel="stylesheet" href="../../assets/css/a1-core-lessons.css">', '<link rel="stylesheet" href="../../assets/css/a1-core-lessons.css"><link rel="stylesheet" href="../../assets/lesson-shell.css">');
    }
    html = html.replace(oldHeader, siteHeader);
    write(path, html);
  }
}
