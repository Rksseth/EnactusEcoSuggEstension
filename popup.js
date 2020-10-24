let element = document.getElementById("product-name");

function updatePopup(){
  chrome.storage.sync.get(['product'], function(data) {
    element.innerText = data.product;

  });
}

document.addEventListener('DOMContentLoaded', updatePopup);