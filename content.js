console.log("Starting shopify detection")

if (document.documentElement.outerHTML.indexOf("var Shopify = Shopify || {}") > -1) {
  console.log("Shopify store detected!");
  chrome.action.setIcon({path: "shopify.png"});
  console.log("Icon set ");
  
}

// chrome.runtime.sendMessage("checkShopify", (response) => {

//   console.log("Response received: " );
//   console.log(response);
//   if (response.isShopify) {
//     chrome.action.setIcon({path: "shopify.png"});
//     console.log("Shopify store detected!");
//   } else {
//     console.log("No Shopify store detected!");
//     }

// });
// console.log("Sent message to background.js")
