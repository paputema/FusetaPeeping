// ==UserScript==
// @name         FusetaPeeping
// @namespace    http://chupacabrasmon.ddns.net
// @version      0.1
// @description  ツイッター上のふせったーへのカードをフレームに変更する
// @author       Chupa
// @match        https://twitter.com/*
// @grant        none
// ==/UserScript==


(function() {
    'use strict';

    // Your code here...
    var twitterCardCount = document.getElementsByClassName("js-openLink").length;
    var i;
    for(i=0;i<twitterCardCount;i++){
        var Card = document.getElementsByClassName("js-openLink")[i];
        var src = Card.getAttribute('href');
        var CardClass = Card.getAttribute('class');
        var iframe;
        iframe = document.createElement('iframe');
        iframe.setAttribute('src',src);
        iframe.setAttribute('class',CardClass);
        Card.parentNode.insertBefore(iframe, Card);
        Card.parentNode.removeChild(Card);
    }
})();
