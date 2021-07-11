let redirection = 0;
let id = 0;
let tabUrl = "sos";

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
    redirection++;

    chrome.tabs.query({active: true}, function(tabs){
        id = tabs[0].id;
        tabUrl = tabs[0].url;
    });

    return {
        redirectUrl: "https://0.0.0.0/"
    };
}