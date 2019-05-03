// ==UserScript==
// @name         Spiegel
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  try to take over the world!
// @author       You
// @match        *://www.spiegel.de/*
// @grant        none
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @updateURL    https://raw.githubusercontent.com/sgaertner/monkey-scripts/master/spon.user.js
// ==/UserScript==

(function() {
    'use strict';

    function plus() {
        var $l = $('.laterpay-under-overlay');
        if (!$l.length) {
            return;
        }
        var x = $l.next().children().children();
        x.first().remove();
        x.last().remove();
        x.attr('style', 'filter: none !important; opacity: 1 !important; user-select: inherit !important; pointer-events: inherit !important;');
        x.find('.js-spiegelplus-obfuscated-intro').remove();
        x.find('.obfuscated').find(':not(a)').addBack().contents().filter(function() { return this.nodeType == 3; }).each(function(index, v) {
            var t = v.nodeValue;
            var r = '';
            for(var i = 0; i < t.length; i++) {
                var c = t.charCodeAt(i);
                if (c != 32) {
                    c = c - 1;
                }
                r += String.fromCharCode(c);
            }
            v.nodeValue = r;
        });
    }

    function removeAds() {
        // remove ads
//        $('#spColumnAd').remove();
//        $('#spOasTop').remove();
        $('div.adition').remove();
        $('body').attr('style', '');
        $('#spRecommendations').remove();
        $('.gujAd').remove();
        //$('#page-overscroll-area').remove();

        // remove comments section
        $('.article-comments-box').remove();

        // mark Bento
        $('a[href^="http://www.bento.de/"]').find('*').andSelf().attr('style', 'color:#e167e5');
    }

    window.setTimeout(plus, 1000);
    $(removeAds);
    for (var i = 1; i <= 4; i++) {
        window.setTimeout(removeAds, i * 200 - 100);
        window.setTimeout(removeAds, i * 200);
        window.setTimeout(removeAds, i * 1000);
    }
})();
