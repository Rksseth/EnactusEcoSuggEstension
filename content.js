
// Get product title from Amazon product page
let productTitle = document.getElementById("productTitle").innerText;
chrome.storage.sync.set({product: productTitle}, function() {
    console.log('color is ' + productTitle);
});