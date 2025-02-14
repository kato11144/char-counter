document.getElementById('text-box').addEventListener('input', function() {
    const textWithoutNewlines = this.value.replace(/[\r\n]/g, '');
    const charCount = textWithoutNewlines.length;
    document.getElementById('char-count').textContent = charCount;
});
