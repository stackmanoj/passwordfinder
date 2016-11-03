chrome.tabs.onUpdated.addListener(function (tabId, info) {
    if (info.status == "complete") {
        console.log(tabId)
        console.log(info)
        chrome.tabs.executeScript(null, {
            file: "content.js"
        }, function () {
            if (chrome.runtime.lastError) {
            }
        });
    }
});
