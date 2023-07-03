function sendcode(code) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'injectCode', code: code }, function(response) {
            if (response && response.success) {
                // Handle a successful response from content.js if needed
            }
        });
    });
}

function openurl(url) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'openUrl', url: url }, function(response) {
            if (response && response.success) {
                // Handle a successful response from content.js if needed
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    var injectButton = document.getElementById('injectButton');
    var exportButton = document.getElementById('exportButton');
  
    // Add event listeners to handle button clicks
    injectButton.addEventListener('click', injectCode);
    exportButton.addEventListener('click', exportFiles);
  
    function injectCode() {
        alert("hi")
        let code = "console.log(\"hello\")";
        sendcode(code);
    }
  
    function exportFiles() {
        openurl(chrome.extension.getURL('options.html'));
    }
});