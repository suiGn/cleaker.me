// popup.js
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {message: "highlight_text"}, function(response) {
      console.log(response.message);
    });
  });