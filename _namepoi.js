// ==UserScript==
// @name     _name-poipoi
// @version  55
// @grant    none
// @run-at   document-end
// @match    https://play.gikopoi.com/*
// ==/UserScript==

document.querySelector('head').appendChild(document.createElement('script').appendChild(document.createTextNode('(' + async function inject2() {

  var vueAppTest = null;


  var usersList = function ()
  {
    if(!!vueAppTest.users){
     return Object.entries(vueAppTest.users).map(([key,value])=>{return {'id' : key,'name' :value.name}});Object.entries(vueApp.users).map(([key,value])=>{return {'id' : key,'name' :value.name}});
    }
    else{
     return vueAppTest.getUserListForListPopup();
    }
  }


  var autoComplete = function (e){
    console.log(this.name);
    if(e.keyCode == 9){
      var input = document.getElementById('input-textbox');
      var text = input.value.split(' ');
      var lastWord = text[text.length - 1];
      for (user of usersList()){
        if(user.name.indexOf(lastWord)== 0){
          input.value = input.value + user.name.substring(lastWord.length)+' ';
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
      if(location.host === 'gikopoipoi.net')
      {
        vueAppTest = vueApp._container._vnode.component.proxy;
      }
      else
      {
        vueAppTest = vueApp;
      }
      el.addEventListener("keydown", (e)=>{autoComplete(e)}, false);
      observer.disconnect();
      console.log("Hooked");
    }
  }

  var observer = new MutationObserver(check);

  observer.observe(document, {childList: true, subtree: true});
  console.log(observer);


}+')()')).parentNode);
