
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  console.log("Message received: " + message + sender.tab.id)
//  // if (document.documentElement.outerHTML.indexOf("var Shopify") > -1) {
//   //   console.log("Found shopify")
//   //   sendResponse({isShopify: true});
//   // } else {
//   //   console.log("No shopify")
//   //   sendResponse({isShopify: false});
//   // }
  
//   if (message === "checkShopify") {
//     chrome.scripting.executeScript({
//       target: {tabId: sender.tab.id},
//       func: function() {
//         if (document.documentElement.outerHTML.indexOf("var Shopify") > -1) {
//           console.log("Shopify store detected!");
//           sendResponse({isShopify: true});
//           chrome.action.setIcon({path: "shopify.png", tabId: sender.tab.id});
//         } else {
//           console.log("Not a Shopify store.");
//           sendResponse({isShopify: false});
//         }
//       }
//     });
//   }
});
