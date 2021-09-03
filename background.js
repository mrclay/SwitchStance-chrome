function switchStance() {
  const b = document.body;

  if (typeof b.dataset.switchStance === 'undefined') {
    b.dataset.switchStance = 1;
  }
  b.dataset.switchStance *= -1;

  const videos = b.querySelectorAll("video");
  videos.forEach(v => {
    v.style.webkitTransform =
    v.style.mozTransform =
    v.style.transform = `scaleX(${b.dataset.switchStance})`;
  });
  if (!videos.length) {
    alert("No video elements found.");
  }
}

chrome.action.onClicked.addListener(tab => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: switchStance
  });
});
