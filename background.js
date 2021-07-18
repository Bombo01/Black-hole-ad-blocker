let patternBack = [];

chrome.runtime.onInstalled.addListener(function () {
    let url = chrome.runtime.getURL('data/blacklist_normal.json');
    chrome.storage.local.get(["difficulty"], function (items) {
        if (items['difficulty'] === undefined) {
            console.log("SET DIFFICULTY TO NORMAL")

            url = chrome.runtime.getURL('data/blacklist_normal.json');

            fetch(url)
                .then((response) => response.json())
                .then((json) => doSomething(json));
        } else {
            if (items['difficulty'].toString() === "0") {
                console.log("ADBLOCKER OFF");

                url = chrome.runtime.getURL('data/blacklist_off.json');

                fetch(url)
                    .then((response) => response.json())
                    .then((json) => doSomething(json));
            } else if (items['difficulty'].toString() === "1") {
                console.log("SET DIFFICULTY TO NORMAL");

                url = chrome.runtime.getURL('data/blacklist_normal.json');

                fetch(url)
                    .then((response) => response.json())
                    .then((json) => doSomething(json));
            } else if (items['difficulty'].toString() === "2") {
                console.log("SET DIFFICULTY TO AGGRESSIVE");

                url = chrome.runtime.getURL('data/blacklist_aggressive.json');

                fetch(url)
                    .then((response) => response.json())
                    .then((json) => doSomething(json));
            }
        }
    });
});

function doSomething(json) {
    patternBack = Object.values(json);
    chrome.storage.local.set({"pattern": patternBack}, function () {
    });
}