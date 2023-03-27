console.log("Starting shopify detection")

if (document.documentElement.outerHTML.indexOf("var Shopify = Shopify || {}") > -1) {
  console.log("Shopify store detected!");
  chrome.runtime.sendMessage("isShopify");
}