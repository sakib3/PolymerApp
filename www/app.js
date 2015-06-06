// The <paper-tabs> element fires a core-select event when you select a tab. 
//You can interact with the element just like a built-in element.
//Right now there's nothing to switch; you'll finish hooking it up later.
var tabs = document.querySelector('paper-tabs');

tabs.addEventListener('core-select', function(event) {
  console.log("Selected: " + tabs.selected);
  console.log(event.detail);
});