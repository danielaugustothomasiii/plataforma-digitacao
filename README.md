# 🚀 Digita Server (Node.js + SQLite)

Servidor backend do projeto **Digita**, responsável por armazenar resultados de digitação, rankings em tempo real e gerenciamento de usuários.

---

## 📦 Tecnologias

* Node.js
* Express
* SQLite (better-sqlite3)
* Socket.IO
* CORS

---

## ⚙️ Funcionalidades

* ✅ Registro de resultados de digitação
* 🏆 Ranking global (all-time)
* 📅 Ranking diário
* ⚡ Atualização em tempo real (WebSocket)
* 👥 Controle de usuários (limite configurável)
* 📊 Estatísticas gerais e por modo
* 🔍 Consulta de usuários

---

## 📁 Estrutura do Projeto

```
📦 digita-server
 ┣ 📄 server.js
 ┣ 📄 digita.db
 ┣ 📄 package.json
 ┗ 📁 public (frontend, se houver)
```

---

## 🛠️ Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/digita-server.git

# Entre na pasta
cd digita-server

# Instale as dependências
npm install
```

---

## ▶️ Executando o servidor

```bash
node server.js
```

O servidor iniciará em:

```
http://localhost:3000
```

---

## 🌐 Rotas da API

### 🔹 Health Check

```
GET /api/health
```

Retorna status do servidor e quantidade de usuários.

---

### 🔹 Enviar resultado

```
POST /api/results
```

**Body JSON:**

```json
{
  "name": "Daniel",
  "wpm": 85,
  "accuracy": 97,
  "errors": 2,
  "chars": 300,
  "words": 60,
  "duration": 15,
  "mode": "15s"
}
```

---

### 🔹 Ranking geral

```
GET /api/ranking
```

---

### 🔹 Ranking por modo

```
GET /api/ranking/mode/:mode
```

Exemplo:

```
/api/ranking/mode/30s
```

---

### 🔹 Lista de usuários

```
GET /api/users
```

---

### 🔹 Verificar usuário

```
GET /api/users/check/:name
```

---

## ⚡ WebSocket (Socket.IO)

### Eventos disponíveis:

* `ranking_update` → recebe atualização automática do ranking
* `request_ranking` → solicita atualização manual

---

## 🗄️ Banco de Dados

O banco SQLite (`digita.db`) contém:

### 📊 Tabela `results`

Armazena todos os testes realizados.

### 🏆 Tabela `daily_best`

Melhor resultado diário por usuário.

### 👤 Tabela `users`

Usuários cadastrados.

---

## ⚙️ Configurações

No código:

```js
const MAX_USERS = 1000;
```

Define o limite máximo de usuários.

---

## 📡 Deploy

Você pode rodar este servidor em:

* Render
* Railway
* VPS (Linux/Windows)
* Docker (recomendado para produção)

---

## 🔒 Observações

* O banco SQLite é local (arquivo `.db`)
* Ideal para projetos pequenos/médios
* Para alta escala, considere migrar para PostgreSQL

---

## 👨‍💻 Autor

Desenvolvido por você 😎

---

## 📄 Licença

MIT
