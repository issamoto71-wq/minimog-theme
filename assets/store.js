/* Hearth store behaviours
   - highlights today's row in any opening-hours table
   - counts numbers up in "Numbers & stats" sections when they scroll into view
   Vanilla JS, no dependencies. Safe to load on every page. */
(function () {
  'use strict';

  var DAY_NAMES = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

  function highlightToday(root) {
    var today = DAY_NAMES[new Date().getDay()];
    var tables = (root || document).querySelectorAll('[data-hth-hours]');
    Array.prototype.forEach.call(tables, function (table) {
      var rows = table.querySelectorAll('tr[data-day]');
      Array.prototype.forEach.call(rows, function (row) {
        var day = (row.getAttribute('data-day') || '').toLowerCase();
        // Match full names ("monday") and short names ("mon").
        var isToday = day === today || (day.length >= 3 && today.indexOf(day) === 0);
        row.classList.toggle('is-today', isToday);
      });
    });
  }

  function formatNumber(value, decimals) {
    return value.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  }

  function animateNumber(el) {
    var raw = el.getAttribute('data-hth-target');
    var target = parseFloat(raw);
    if (isNaN(target)) return;
    var decimals = (String(raw).split('.')[1] || '').length;
    var duration = 1600;
    var start = null;

    function step(ts) {
      if (start === null) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = formatNumber(target * eased, decimals);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        el.textContent = formatNumber(target, decimals);
      }
    }
    window.requestAnimationFrame(step);
  }

  function initCountUp(root) {
    var sections = (root || document).querySelectorAll('[data-hth-count-up]');
    Array.prototype.forEach.call(sections, function (section) {
      if (section.__hthCounted) return;
      var numbers = section.querySelectorAll('[data-hth-target]');
      if (!numbers.length) return;
      section.__hthCounted = true;

      var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce || !('IntersectionObserver' in window) || (window.Shopify && window.Shopify.designMode)) {
        // show final values straight away (also keeps the theme editor stable)
        Array.prototype.forEach.call(numbers, function (el) {
          var t = parseFloat(el.getAttribute('data-hth-target'));
          if (!isNaN(t)) el.textContent = formatNumber(t, (String(el.getAttribute('data-hth-target')).split('.')[1] || '').length);
        });
        return;
      }

      Array.prototype.forEach.call(numbers, function (el) { el.textContent = '0'; });
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);
          Array.prototype.forEach.call(entry.target.querySelectorAll('[data-hth-target]'), animateNumber);
        });
      }, { threshold: 0.35 });
      observer.observe(section);
    });
  }

  function init(root) {
    highlightToday(root);
    initCountUp(root);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { init(document); });
  } else {
    init(document);
  }

  // Re-run when sections are added/changed in the theme editor.
  document.addEventListener('shopify:section:load', function (event) { init(event.target); });
})();
