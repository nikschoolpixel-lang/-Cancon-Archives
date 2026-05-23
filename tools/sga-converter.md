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
