chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message === "isShopify") {
    chrome.action.setIcon({tabId: sender.tab.id, path: "shopify.png"});
  }
})
