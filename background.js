chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "searchByImage",
      title: "Search by Image",
      contexts: ["image"]
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "searchByImage") {
      const imageUrl = info.srcUrl;
      const searchUrls = [
        `https://www.google.com/searchbyimage?image_url=${encodeURIComponent(imageUrl)}`,
        `https://www.bing.com/images/search?q=imgurl:${encodeURIComponent(imageUrl)}&view=detailv2`,
        `https://yandex.com/images/search?rpt=imageview&url=${encodeURIComponent(imageUrl)}`
      ];
  
      searchUrls.forEach(url => {
        chrome.tabs.create({ url: url });
      });
    }
  });
  