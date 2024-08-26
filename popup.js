document.getElementById('searchImage').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: triggerSearchByImage
      });
    });
  });
  
  function triggerSearchByImage() {
    const images = document.getElementsByTagName('img');
    if (images.length > 0) {
      const imageUrl = images[0].src;
      chrome.runtime.sendMessage({ imageUrl: imageUrl });
    }
  }
  