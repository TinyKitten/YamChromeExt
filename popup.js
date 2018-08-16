window.onload = () => {
  chrome.tabs.getSelected(window.id, function(tab) {
    var url = document.createTextNode(tab.url);
    document.getElementById('url').appendChild(url);
    var btn = document.getElementById('submit');
    btn.onclick = () => {
      console.log(tab.url);
      openYam(tab.url);
    };  
  });
};
function openYam(url) {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    const tabID = tabs[0].id;
    if (tabID === undefined) {
      return;
    }
    chrome.tabs.update(tabID, {url: `https://yam.tinykitten.me/post?text=${url}`});
  });
}
