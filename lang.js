// One language at a time: the one in the address (#en or #it), otherwise
// the last one chosen, otherwise the browser's (Italian for Italian
// browsers, English for everyone else). Without this script both show.
(function () {
  var root = document.documentElement;
  var englishTitle = document.title;

  function fromHash() {
    var lang = location.hash.slice(1);
    return lang === 'en' || lang === 'it' ? lang : null;
  }

  function stored() {
    try { return localStorage.getItem('chorefox-lang'); } catch (e) { return null; }
  }

  function store(lang) {
    try { localStorage.setItem('chorefox-lang', lang); } catch (e) {}
  }

  function fromBrowser() {
    var langs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ''];
    return String(langs[0]).toLowerCase().indexOf('it') === 0 ? 'it' : 'en';
  }

  function show(lang) {
    root.classList.remove('show-en', 'show-it');
    root.classList.add('show-' + lang);
    root.lang = lang;
    document.title = (lang === 'it' && root.getAttribute('data-title-it')) || englishTitle;
  }

  var chosen = fromHash();
  if (chosen) store(chosen);
  show(chosen || stored() || fromBrowser());

  window.addEventListener('hashchange', function () {
    var lang = fromHash();
    if (!lang) return;
    store(lang);
    show(lang);
    window.scrollTo(0, 0);
  });
})();
