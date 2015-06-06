// The <paper-tabs> element fires a core-select event when you select a tab. 
//You can interact with the element just like a built-in element.
//Right now there's nothing to switch; you'll finish hooking it up later.
var tabs = document.querySelector('paper-tabs');
var list = document.querySelector('post-list');
tabs.addEventListener('core-select', function(event) {
  console.log("Selected: " + tabs.selected);
  console.log(event.detail);
  list.show = tabs.selected
});