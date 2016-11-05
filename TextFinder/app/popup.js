
function onWindowLoad() {
}
window.onload = onWindowLoad;
document.addEventListener('DOMContentLoaded', function () {
 
});
chrome.runtime.onMessage.addListener(function (request, sender) {
    if (request.action == "sendData") {
    }
});

