chrome.storage.local.get(['onboarded'], function(result) {
    if (!result.onboarded) {
      chrome.tabs.create({
        url: chrome.runtime.getURL("./assets/html/welcome.html")
      });
    }
  });