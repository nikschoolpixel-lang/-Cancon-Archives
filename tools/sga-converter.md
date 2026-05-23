<style>
  .sga-converter {
    background: #121318;
    color: #f5f5f7;
    padding: 20px;
    border-radius: 8px;
    font-family: Arial, sans-serif;
    max-width: 800px;
    margin: 0 auto;
  }
  .sga-converter textarea {
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #333;
    border-radius: 4px;
    background: #0b0c0f;
    color: #f5f5f7;
    resize: vertical;
  }
  .sga-converter button {
    background: #ff4500;
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 10px 5px 10px 0;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
  }
  .sga-converter button:hover {
    background: #e03d00;
  }
  .sga-converter .status {
    color: #ff4500;
    margin-left: 10px;
  }
  .sga-converter hr {
    border-color: #333;
    margin: 20px 0;
  }
</style>

<div class="sga-converter">
  <h3>🔮 SGA Конвертер для Minecraft</h3>

  <label>📝 English → Галактический алфавит</label><br>
  <textarea id="engInput" rows="3" placeholder="Введи английский текст..."></textarea><br>
  <button onclick="engToSga()">✨ Конвертировать → SGA & Копировать</button>
  <span id="engStatus" class="status"></span><br>
  <textarea id="sgaOutput" rows="3" readonly placeholder="SGA появится здесь"></textarea>

  <hr>

  <label>🔍 Галактический алфавит → English</label><br>
  <textarea id="sgaInput" rows="3" placeholder="Вставь SGA текст из книги..."></textarea><br>
  <button onclick="sgaToEng()">🔄 Конвертировать → English & Копировать</button>
  <span id="sgaStatus" class="status"></span><br>
  <textarea id="engOutput" rows="3" readonly placeholder="English появится здесь"></textarea>

  <p style="color:#888; font-size:0.9em;">💡 Копируй текст из книги (Ctrl+A → Ctrl+C) → вставь в поле → жми кнопку → Ctrl+V куда нужно!</p>
</div>

<script>
  const sgaMap = {
    'a': 'ᔑ', 'b': 'ʖ', 'c': 'ᓵ', 'd': '↸', 'e': 'ᒷ', 'f': '⎓', 'g': '⊣',
    'h': '⍑', 'i': '╎', 'j': '⋮', 'k': 'ꖌ', 'l': 'ꖎ', 'm': 'ᒲ', 'n': 'リ',
    'o': '𝙹', 'p': '!¡', 'q': 'ᑑ', 'r': '∷', 's': 'ᓭ', 't': 'ℸ̣', 'u': '⚍',
    'v': '⍊', 'w': '∴', 'x': '̇/', 'y': '||', 'z': '⨅'
  };

  // Обратный маппинг: сортируем по длине ключа (убывание), чтобы правильно разбирать составные символы
  const reverseSgaMap = {};
  for (const [eng, sga] of Object.entries(sgaMap)) {
    reverseSgaMap[sga] = eng;
  }
  const sortedSgaKeys = Object.keys(reverseSgaMap).sort((a, b) => b.length - a.length);

  function copyToClipboard(text, statusId, successMessage) {
    navigator.clipboard.writeText(text).then(() => {
      document.getElementById(statusId).textContent = successMessage;
    }).catch(err => {
      document.getElementById(statusId).textContent = 'Ошибка копирования';
      console.error(err);
    });
  }

  function engToSga() {
    const input = document.getElementById('engInput').value.toLowerCase();
    let result = '';
    for (const char of input) {
      result += sgaMap[char] || char;
    }
    document.getElementById('sgaOutput').value = result;
    copyToClipboard(result, 'engStatus', '✅ SGA скопировано! (Ctrl+V в книгу)');
  }

  function sgaToEng() {
    const input = document.getElementById('sgaInput').value;
    let result = '';
    let i = 0;
    while (i < input.length) {
      let found = false;
      for (const sgaSeq of sortedSgaKeys) {
        if (input.startsWith(sgaSeq, i)) {
          result += reverseSgaMap[sgaSeq];
          i += sgaSeq.length;
          found = true;
          break;
        }
      }
      if (!found) {
        result += input[i];
        i++;
      }
    }
    document.getElementById('engOutput').value = result.toLowerCase();
    copyToClipboard(result, 'sgaStatus', '✅ Английский скопировано! (для чтения)');
  }
</script>
