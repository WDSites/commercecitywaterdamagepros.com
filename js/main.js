(function () {
  var toggle = document.getElementById('mob-toggle');
  var drawer = document.getElementById('mob-drawer');
  var overlay = document.getElementById('mob-overlay');
  var closeBtn = document.getElementById('mob-close');
  var root = document.documentElement;
  function setOpen(open) {
    if (!drawer) return;
    drawer.classList.toggle('open', open);
    overlay.classList.toggle('open', open);
    drawer.setAttribute('aria-hidden', open ? 'false' : 'true');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    root.classList.toggle('menu-open', open);
    if (open && closeBtn) closeBtn.focus();
    if (!open && toggle) toggle.focus();
  }
  if (toggle && drawer) {
    toggle.addEventListener('click', function () { setOpen(true); });
    closeBtn.addEventListener('click', function () { setOpen(false); });
    overlay.addEventListener('click', function () { setOpen(false); });
    drawer.addEventListener('click', function (e) { if (e.target.tagName === 'A') setOpen(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
    var mq = window.matchMedia('(min-width: 901px)');
    var onChange = function () { if (mq.matches) setOpen(false); };
    if (mq.addEventListener) mq.addEventListener('change', onChange);
  }
  var floatBtn = document.getElementById('float-call');
  var foot = document.querySelector('.site-footer');
  if (floatBtn && foot && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      floatBtn.classList.toggle('hide', entries[0].isIntersecting);
    }, { threshold: 0 }).observe(foot);
  }
})();
