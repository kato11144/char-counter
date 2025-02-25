function updateCharCount() {
    const inputText = document.getElementById('text-box').value;
    const cleanedText = inputText.replace(/[\r\n\t]/g, '');
    const charCount = cleanedText.length;
    document.getElementById('char-count').textContent = charCount;
}

function handleTabInput(event) {
    if (event.key !== 'Tab') return;

    event.preventDefault();
    const textBox = event.target;
    const { selectionStart, selectionEnd, value } = textBox;
    textBox.value = `${value.slice(0, selectionStart)}\t${value.slice(selectionEnd)}`;
    textBox.selectionStart = textBox.selectionEnd = selectionStart + 1;
}

function moveCursorLine(event) {
    if (!(event.altKey) || !['ArrowUp', 'ArrowDown'].includes(event.key)) return;

    event.preventDefault();
    const textBox = event.target;
    const lines = textBox.value.split('\n');
    const cursorLine = textBox.value.slice(0, textBox.selectionStart).split('\n').length - 1;
    const swapIndex = event.key === 'ArrowUp' ? cursorLine - 1 : cursorLine + 1;

    if (swapIndex < 0 || swapIndex >= lines.length) return;
    [lines[cursorLine], lines[swapIndex]] = [lines[swapIndex], lines[cursorLine]];

    textBox.value = lines.join('\n');
    textBox.selectionStart = textBox.selectionEnd = lines.slice(0, swapIndex).join('\n').length + (swapIndex ? 1 : 0);
}

const textBox = document.getElementById('text-box');
textBox.addEventListener('input', updateCharCount);
textBox.addEventListener('keydown', handleTabInput);
textBox.addEventListener('keydown', moveCursorLine);
