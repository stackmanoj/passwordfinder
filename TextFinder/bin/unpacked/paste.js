chrome.runtime.sendMessage({
    action: "clickPaste",
    source: clickPaste(document)
});
function clickPaste(contentDoc) {
    chrome.extension.sendRequest("getStorageData", function (response) {
        var data = JSON.parse(response);
        for (var i = 0; i < data.length; i++) {
            if (data[i].key == 'FirstName') {
                var loginField = contentDoc.getElementById('ctl00_phFolderContent_PatientFirstName');
                loginField.value = data[i].value;
            }
            else if (data[i].key == 'LastName') {
                var loginField = contentDoc.getElementById('ctl00_phFolderContent_PatientLastName');
                loginField.value = data[i].value;
            }
        }
    });
}
