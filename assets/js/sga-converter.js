// assets/js/sga-converter.js

const sgaMap = {
    'a': 'ᔑ', 'b': 'ʖ', 'c': 'ᓵ', 'd': '↸', 'e': 'ᒷ', 'f': '⎓', 'g': '⊣',
    'h': '⍑', 'i': '╎', 'j': '⋮', 'k': 'ꖌ', 'l': 'ꖎ', 'm': 'ᒲ', 'n': 'リ',
    'o': '𝙹', 'p': '!¡', 'q': 'ᑑ', 'r': '∷', 's': 'ᓭ', 't': 'ℸ̣', 'u': '⚍',
    'v': '⍊', 'w': '∴', 'x': '̇/', 'y': '||', 'z': '⨅'
};

const reverseSgaMap = {};
for (const [eng, sga] of Object.entries(sgaMap)) {
    reverseSgaMap[sga] = eng;
}
const sortedSgaKeys = Object.keys(reverseSgaMap).sort((a, b) => b.length - a.length);

function copyToClipboard(text, statusId, successMessage) {
    navigator.clipboard.writeText(text).then(() => {
        const el = document.getElementById(statusId);
        if (el) el.textContent = successMessage;
    }).catch(err => {
        const el = document.getElementById(statusId);
        if (el) el.textContent = 'Ошибка копирования';
        console.error(err);
    });
}

function engToSga() {
    const input = document.getElementById('engInput');
    const output = document.getElementById('sgaOutput');
    if (!input || !output) return;
    const text = input.value.toLowerCase();
    let result = '';
    for (const char of text) {
        result += sgaMap[char] || char;
    }
    output.value = result;
    copyToClipboard(result, 'engStatus', '✅ SGA скопировано! (Ctrl+V в книгу)');
}

function sgaToEng() {
    const input = document.getElementById('sgaInput');
    const output = document.getElementById('engOutput');
    if (!input || !output) return;
    const text = input.value;
    let result = '';
    let i = 0;
    while (i < text.length) {
        let found = false;
        for (const sgaSeq of sortedSgaKeys) {
            if (text.startsWith(sgaSeq, i)) {
                result += reverseSgaMap[sgaSeq];
                i += sgaSeq.length;
                found = true;
                break;
            }
        }
        if (!found) {
            result += text[i];
            i++;
        }
    }
    output.value = result.toLowerCase();
    copyToClipboard(result, 'sgaStatus', '✅ Английский скопировано! (для чтения)');
}