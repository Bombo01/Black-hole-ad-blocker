const url = chrome.runtime.getURL('data/blacklist.json');

fetch(url)
    .then((response) => response.json()) //assuming file contains json
    .then((json) => doSomething(json));

let pattern = [];

function doSomething(json) {
    pattern = Object.values(json);
    console.log(pattern);
    console.log(pattern.length);

    let redirection = 0;

    function redirect(requestDetails) {
        redirection++;
        if (redirection !== 0) {
            chrome.browserAction.setBadgeText({text: '' + redirection});
        }
        return {
            redirectUrl: "https://0.0.0.0/"
        };
    }

    chrome.webRequest.onBeforeRequest.addListener(
        redirect,
        {urls: pattern},
        ["blocking"]
    );
}
