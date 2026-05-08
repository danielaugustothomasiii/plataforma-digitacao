# ⌨️ TypeRush — Teste de Digitação

Projeto completo de teste de digitação com frontend moderno (HTML/CSS/JS) e backend em Python puro (sem dependências externas).

---

## 📁 Estrutura

```
typing-test/
├── index.html   # Interface principal
├── style.css    # Estilos (tema escuro/claro, layout responsivo)
├── app.js       # Lógica do teste + integração com API
├── server.py    # Servidor HTTP + API REST + banco SQLite
└── results.db   # Criado automaticamente ao iniciar o servidor
```

---

## 🚀 Como usar

### Sem servidor (só frontend)
Abra o `index.html` diretamente no navegador. Tudo funciona — apenas o salvamento de resultados fica desativado.

### Com servidor Python
```bash
python server.py
```
Acesse: **http://localhost:8080**

---

## 🎮 Funcionalidades

| Feature | Descrição |
|---|---|
| **4 modos** | 15s · 30s · 60s · Infinito (texto completo) |
| **Métricas ao vivo** | WPM, Precisão, Tempo, Erros |
| **Resultado detalhado** | Rating, gráfico WPM/tempo, 6 estatísticas |
| **Tema escuro/claro** | Toggle no header |
| **Teclado** | `Tab` reinicia · `Space` avança palavra |
| **Responsivo** | Funciona em desktop e mobile |

---

## 🔌 API REST (Python)

| Método | Endpoint | Descrição |
|---|---|---|
| `GET` | `/api/health` | Status do servidor |
| `GET` | `/api/stats` | Estatísticas agregadas |
| `GET` | `/api/results?limit=20&mode=30s` | Últimos resultados |
| `POST` | `/api/results` | Salvar novo resultado |

### Exemplo de POST
```json
{
  "wpm": 72,
  "accuracy": 97.3,
  "errors": 2,
  "chars": 312,
  "words": 64,
  "duration": 30,
  "mode": "30s"
}
```

---

## 🛠️ Tecnologias

- **Frontend**: HTML5, CSS3 (variáveis, grid, animações), JavaScript vanilla
- **Backend**: Python 3 stdlib — `http.server`, `sqlite3`, `json`
- **Fonte**: Space Mono + Syne (Google Fonts)
- **Banco**: SQLite (arquivo local `results.db`)

> Sem dependências externas! Apenas Python 3.7+ necessário.
