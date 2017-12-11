// ==UserScript==
// @name         Majsterkowo - walka z reklamami
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://majsterkowo.pl/*
// @grant        none
// @require      http://code.jquery.com/jquery-3.2.1.min.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    $('.pinfokonkurs').remove();
    $('.patronpod').remove();
    $('#sidebar-partner*').remove();
    $('#text-16').remove();
    $('.patron*').remove();
    $('*[class^="patron"]*').remove();
    $('*[href^="nettigo"]*').remove();
    $('#pat').attr('onclick','');
    /*
    $('a').each(function() {
        $(this).attr('href', '#');
    */
    });
})();
