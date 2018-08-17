window.onload = () => {
  chrome.tabs.getSelected(window.id, function(tab) {
    var instanceElem = document.getElementById('instance');
    var textElem = document.getElementById('text');
    textElem.value = `${tab.title} - ${tab.url}`;
    var btn = document.getElementById('submit');
    btn.onclick = () => {
      if (textElem.value !== '' && instanceElem.value !== '') {
        openYam(instanceElem.value, tab.title, tab.url);
      }
    };  
  });
};
function openYam(instance, title, url) {
  chrome.tabs.create({url: `https://yam.tinykitten.me/post?instance=${instance}&text=${encodeURIComponent(title)} - ${encodeURIComponent(url)}`});
}
