let patternBack = [];

chrome.runtime.onInstalled.addListener(function () {
    let url = chrome.runtime.getURL('data/blacklist_normal.json');
    fetch(url)
        .then((response) => response.json())
        .then((json) => doSomething(json));
});

function doSomething(json) {
    patternBack = Object.values(json);
    chrome.storage.local.set({"pattern": patternBack}, function () {
    });
}