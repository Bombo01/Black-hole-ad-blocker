let id = 0;
let __tabs = [];

let pattern = [];

chrome.storage.local.get(["pattern"], function (items) {
    pattern = items['pattern'];

    chrome.webRequest.onBeforeRequest.addListener(
        redirect,
        {urls: pattern},
        ["blocking"]
    );
});

function redirect(requestDetails) {
    console.log("%c " + requestDetails.url + " redirected", 'color: #00ff00');
    chrome.tabs.query({active: true}, function (tabs) {
        id = tabs[0].id;

        __tabs.push(id.toString())

        let count = 0;
        for (let i = 0; i < __tabs.length; i++) {
            if (__tabs[i].toString() === id.toString()) {
                count++;
            }
        }
        chrome.browserAction.setBadgeText({tabId: id, text: "" + count});
    });

    return {
        redirectUrl: "https://0.0.0.0/"
    };
}