const url = chrome.runtime.getURL('data/blacklist.json');

let patternBack = [];

chrome.runtime.onInstalled.addListener(function () {
    fetch(url)
        .then((response) => response.json())
        .then((json) => doSomething(json));
});

function doSomething(json) {
    patternBack = Object.values(json);
    chrome.storage.local.set({"pattern": patternBack}, function () {
    });
}