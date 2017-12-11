// ==UserScript==
// @name         UONET - poprawki
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Poprawki ułatwiające korzystanie z witryny
// @author       You
// @match        https://uonetplus.edu.gdansk.pl/gdansk/Start.mvc/Index
// @grant        none
// --@require      http://code.jquery.com/jquery-1.9.1.min.js
// ==/UserScript==

(function() {
    'use strict';

    // Ułatwiamy nawigację po uczniach
    $('#idAppUczen > a > span:contains(\'SP1\')').text("SP1 - Michał");
    $('#idAppUczen > a > span:contains(\'SP2\')').text("SP2 - Adam");
    $('#idAppUczen > a > span:contains(\'ZKPG20\')').text("Archiwum Michał klasa III (ZKPG20)");
})();
