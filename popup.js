document.addEventListener('DOMContentLoaded', documentEvents  , false);

function documentEvents() {
    document.getElementById("options").addEventListener('change', (event) => {
        chrome.storage.local.set({"difficulty": document.getElementById("options").value}, function () {
            chrome.runtime.reload();
        });
    });
}