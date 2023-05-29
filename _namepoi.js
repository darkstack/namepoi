// ==UserScript==
// @name     _name-poipoi
// @version  55
// @grant    none
// @run-at   document-end
// @match    https://play.gikopoi.com/*
// ==/UserScript==

document.querySelector('head').appendChild(document.createElement('script').appendChild(document.createTextNode('(' + async function inject2() {
  
  var autoComplete = function (e){
    console.log(this.name);
    if(e.keyCode == 9){
      var input = document.getElementById('input-textbox');
      var text = input.value.split(' ');
      var lastWord = text[text.length - 1];
      for (const [key, value] of Object.entries(vueApp.users)){
         console.log(`${key}: ${value.name}`);
         if(value.name.indexOf(lastWord)== 0){
           input.value = input.value + value.name.substring(lastWord.length)+' ';
           e.preventDefault()
           return;
         }
			}
    }
  }
  
  
  console.log("OK");
  
  var check = function(changes, observer) {
    	console.log('obs');
      var el = document.getElementById('input-textbox')
      if(el) {
        	console.log("Adios");
        	el.addEventListener("keydown", (e)=>{autoComplete(e)}, false);
          observer.disconnect();
      }
  }
  
  var observer = new MutationObserver(check);
  
  observer.observe(document, {childList: true, subtree: true});
	console.log(observer);
	
  
}+')()')).parentNode);
