chrome.action.onClicked.addListener(function (tab) {
    chrome.tabs.create({ url: "main-page/dist/index.html" });
});
