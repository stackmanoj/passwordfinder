
function onWindowLoad() {
}
window.onload = onWindowLoad;
document.addEventListener('DOMContentLoaded', function () {
 
});
chrome.runtime.onMessage.addListener(function (request, sender) {
    if (request.action == "sendData") {
        //var xhttp = new XMLHttpRequest();
        //xhttp.onreadystatechange = function () {
        //    if (xhttp.readyState == 4 && xhttp.status == 200) {
        //    }
        //};
        //xhttp.open("POST", "http://10.0.1.11:81/api/values", true);
        //xhttp.setRequestHeader('Access-Control-Allow-Origin', '*');
        //xhttp.setRequestHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
        //xhttp.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Range, Content-Disposition, Content-Description');
        //xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        //xhttp.send(request.data);
    }
});

