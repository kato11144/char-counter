function updateCharCount() {
    const inputText = document.getElementById('text-box').value;
    const cleanedText = inputText.replace(/[\r\n\t]/g, '');
    const charCount = cleanedText.length;
    document.getElementById('char-count').textContent = charCount;
}

function handleTabInput(event) {
    if (event.key === 'Tab') {
        event.preventDefault();
        const textBox = document.getElementById('text-box');
        const { selectionStart, selectionEnd, value } = textBox;
        textBox.value = value.substring(0, selectionStart) + '\t' + value.substring(selectionEnd);
        textBox.selectionStart = textBox.selectionEnd = selectionStart + 1;
    }
}

const textBox = document.getElementById('text-box');
textBox.addEventListener('input', updateCharCount);
textBox.addEventListener('keydown', handleTabInput);
