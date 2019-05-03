// ==UserScript==
// @name         Golem
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        https://www.golem.de/*
// @grant        none
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @updateURL    https://github.com/sgaertner/monkey-scripts/raw/master/golem.user.js
// ==/UserScript==

(function() {
    'use strict';

    function removeAds() {
        $('.iqadtile-space-b').remove();
        $('.iqlabel').remove();
        $('.iqdSiteAlign').remove();
        $('.sdgSlotContainer').remove();
        $('.adsbygoogle').remove();
//        $('.iqadmarker').parent().remove();
        $('#iqdSitebar').remove();
        $('.plista_widget_underArticle').remove();

        $('section#comments').remove();
    }

    $(removeAds);
    for (var i = 1; i <= 4; i++) {
        window.setTimeout(removeAds, i * 200 - 100);
        window.setTimeout(removeAds, i * 200);
        window.setTimeout(removeAds, i * 1000);
    }
    $(window).scroll( function() {
        removeAds();
        console.log('scrl');
    });
})();
