// Content script

// Function to inject custom code into the web page
function injectCode(code) {
    var script = document.createElement('script');
    script.textContent = code;
    document.documentElement.appendChild(script);
}
console.log("hi")
  
// Example code to listen for messages from the background script or popup
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    console.log(message)
    switch (message.action) {
        case 'injectCode':
            // Handle code injection request
            var codeToInject = message.code;
            injectCode(codeToInject);
            // Optionally, send a response back to the background script or popup
            // sendResponse({ success: true });
            break;
        case 'openUrl':
            window.open(message.url);
            break;
    }
});
  
// Example code to interact with the DOM of the web page
// document.addEventListener('DOMContentLoaded', function() {
//     // Perform DOM manipulation, event handling, or other operations
//     // ...
// });
  