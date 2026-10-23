(function () {
    'use strict';

    var root = document.documentElement;
    var systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
    var savedTheme;
    var toggle;

    try {
        savedTheme = window.localStorage.getItem('theme');
    } catch (error) {
        // Theme switching still works when browser storage is unavailable.
    }

    if (savedTheme !== 'light' && savedTheme !== 'dark') {
        savedTheme = null;
    }

    function applyTheme(theme) {
        var isDark = theme === 'dark';
        root.setAttribute('data-theme', theme);

        if (toggle) {
            toggle.setAttribute('aria-pressed', String(isDark));
            toggle.setAttribute('title', isDark ? 'Switch to light mode' : 'Switch to dark mode');
        }
    }

    // Run in the head, before styles load, to avoid a flash of the wrong theme.
    applyTheme(savedTheme || (systemTheme.matches ? 'dark' : 'light'));

    document.addEventListener('DOMContentLoaded', function () {
        toggle = document.getElementById('theme-toggle');
        if (!toggle) return;

        applyTheme(root.getAttribute('data-theme'));
        toggle.hidden = false;
        toggle.addEventListener('click', function () {
            savedTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            applyTheme(savedTheme);

            try {
                window.localStorage.setItem('theme', savedTheme);
            } catch (error) {
                // Keep the selection for this page even if it cannot be saved.
            }
        });
    });

    function followSystemTheme(event) {
        if (!savedTheme) applyTheme(event.matches ? 'dark' : 'light');
    }

    if (systemTheme.addEventListener) {
        systemTheme.addEventListener('change', followSystemTheme);
    } else if (systemTheme.addListener) {
        systemTheme.addListener(followSystemTheme);
    }
}());
