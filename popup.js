window.onload = () => {
  chrome.tabs.getSelected(window.id, function(tab) {
    var instanceElem = document.getElementById('instance');

    chrome.storage.local.get('lastInstance', (val) => instanceElem.value = val.lastInstance);

    var textElem = document.getElementById('text');
    textElem.value = `${tab.title} - ${tab.url}`;
    var btn = document.getElementById('submit');
    btn.onclick = () => {
      if (textElem.value !== '' && instanceElem.value !== '') {
        openYam(instanceElem.value, textElem.value);
        chrome.storage.local.set({'lastInstance': instanceElem.value});
      }
    };  
  });
};
function openYam(instance, body) {
  chrome.tabs.create({url: `https://yam.tinykitten.me/post?instance=${instance}&text=${encodeURIComponent(body)}`});
}
