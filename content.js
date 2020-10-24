// Get product title from Amazon product page
let productObj = document.getElementById("productTitle");
let productTitle = null;

if (productObj) {
    productTitle = productObj.innerText;
}
chrome.storage.sync.set({product: productTitle}, function() {
    console.log('title is ' + productTitle);
});