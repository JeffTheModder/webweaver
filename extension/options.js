var codeEditor = CodeMirror.fromTextArea(document.getElementById('codeEditor'), {
    mode: 'javascript', // Set the programming language mode
    theme: 'default', // Set the editor theme
    lineNumbers: true, // Enable line numbers
    // Additional options...
});