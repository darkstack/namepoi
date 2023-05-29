// ==UserScript==
// @name     namepoi
// @version  1
// @grant    none
// @run-at   document-end
// @match    https://gikopoipoi.net/*
// @match    https://play.gikopoi.com/*
// ==/UserScript==


(async function () {
  try {
    var script = document.createElement('script');
    script.textContent = await (await fetch('https://raw.githubusercontent.com/darkstack/namepoi/master/_namepoi.js?t=' + (new Date).getTime())).text();
    document.querySelector('head').append(script);
  } catch (err) {
    console.log(err);
  }
})();

