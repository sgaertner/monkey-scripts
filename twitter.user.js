// ==UserScript==
// @name         Twitter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://twitter.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=twitter.com
// @grant        none
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @updateURL    https://github.com/sgaertner/monkey-scripts/raw/master/twitter.user.js
// ==/UserScript==

(function() {
    'use strict';

    function preventBlock() {
        $('#layers').remove();
        $("html").css({"overflow": ""});
    }

    window.setInterval(preventBlock, 1000);
})();
