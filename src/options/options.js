function initMonacoEditor() {
    var editor = monaco.editor.create(document.getElementById('editor-container'), {
        value: "",
        language: 'javascript'
    });
}