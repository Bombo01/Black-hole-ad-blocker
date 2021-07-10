let redirection = 0;

let pattern = [];
let tabs = [];

chrome.storage.local.get(["pattern"], function(items){
    pattern = items['pattern'];

    chrome.webRequest.onBeforeRequest.addListener(
        redirect,
        {urls: pattern},
        ["blocking"]
    );
});

function redirect(requestDetails) {
    console.log(requestDetails.url + " redirected");
    redirection++;

    if (redirection !== 0) {
        chrome.browserAction.setBadgeText({text: '' + redirection});
    }
    return {
        redirectUrl: "https://0.0.0.0/"
    };
}