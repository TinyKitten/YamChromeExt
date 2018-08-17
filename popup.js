window.onload = () => {
  chrome.tabs.getSelected(window.id, function(tab) {
    var urlElem = document.getElementById('url');
    urlElem.innerText = `${tab.title} - ${tab.url}`;
    var btn = document.getElementById('submit');
    btn.onclick = () => {
      openYam(tab.title, tab.url);
    };  
  });
};
function openYam(title, url) {
  chrome.tabs.create({url: `https://yam.tinykitten.me/post?text=${title} - ${url}`});
}
