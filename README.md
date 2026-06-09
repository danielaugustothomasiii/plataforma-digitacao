# 🚀 Digita — Plataforma de Teste de Digitação

Projeto acadêmico desenvolvido para a disciplina **Fábrica de Software - 1º SEM. 2026** da **UNISAGRADO**.

O **Digita** é uma plataforma web completa para prática e medição de velocidade de digitação, com ranking global em tempo real, múltiplos modos de jogo e perfil de usuário personalizável.

---

## 📦 Tecnologias

### Frontend
**Linguagens**
- HTML5, CSS3 e JavaScript (vanilla)

**Fontes**
- Google Fonts — Righteous e DM Mono

**Bibliotecas**
- Socket.IO Client (v4.7.5) — atualização do ranking em tempo real

**Recursos nativos do browser**
- Canvas API — gráfico de WPM ao longo do tempo
- sessionStorage e localStorage — preferências e dados do usuário
- Web Audio API — som de tecla durante a digitação
- CSS Custom Properties, animações e backdrop-filter

---

### Backend
**Runtime**
- Node.js (>=18.0.0)

**Frameworks e bibliotecas**
- Express.js — servidor HTTP e rotas REST
- Socket.IO — comunicação em tempo real via WebSocket
- pg — driver PostgreSQL para Node.js
- CORS — liberação de requisições entre origens

**Banco de dados**
- PostgreSQL — três tabelas: `results`, `daily_best` e `users`

**Infraestrutura**
- HTTP nativo do Node integrando Express + Socket.IO no mesmo servidor
- Vídeos de fundo externos via CDN (Pixabay e Videezy)

---

## ⚙️ Funcionalidades

- ✅ Registro de resultados de digitação
- 🏆 Ranking global (all-time)
- 📅 Ranking diário
- 🕐 Feed de resultados recentes
- ⚡ Atualização em tempo real (WebSocket)
- 👥 Controle de usuários (limite configurável)
- 📊 Estatísticas gerais e por modo de jogo
- 🎮 7 modos de jogo (Sprint, Rápido, Clássico, Resistência, Maratona, Números e Sem Tempo)
- 🎨 Perfil personalizável (avatar, cores, nome)
- 🌓 Tema claro e escuro
- 🔊 Som de tecla com toggle

---

## 📁 Estrutura do Projeto

```
📦 digita
 ┣ 📄 server.js           ← servidor Node.js (Express + Socket.IO)
 ┣ 📄 index.html          ← interface principal
 ┣ 📄 digita.js           ← lógica do frontend
 ┣ 📄 digita.css          ← estilos
 ┣ 📄 package.json
 ┣ 📁 imagens/            ← logos e ícones
 ┣ 📁 Imagens/            ← imagens das dicas e avatares
 ┗ 📁 Som/                ← áudio de tecla
```

---

## 🛠️ Instalação local

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/digita.git

# Entre na pasta
cd digita

# Instale as dependências
npm install
```

---

## ▶️ Executando localmente

```bash
node server.js
```

O servidor iniciará em:
```
http://localhost:3000
```

> **Atenção:** para rodar localmente é necessário ter o PostgreSQL instalado e configurado, ou usar a versão com SQLite (better-sqlite3).

---

## 🌐 Rotas da API

### 🔹 Health Check
```
GET /api/health
```
Retorna status do servidor e quantidade de usuários cadastrados.

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
GET /api/ranking/mode/30s
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

### 🔹 Reset do banco (admin)
```
DELETE /api/admin/reset
```
**Header obrigatório:**
```
x-admin-key: SUA_ADMIN_KEY
```

---

## ⚡ WebSocket (Socket.IO)

| Evento | Direção | Descrição |
|---|---|---|
| `ranking_update` | Servidor → Cliente | Atualização automática do ranking |
| `request_ranking` | Cliente → Servidor | Solicita atualização manual |

---

## 🗄️ Banco de Dados

### 📊 Tabela `results`
Armazena todos os testes realizados com WPM, precisão, erros, modo e data.

### 🏆 Tabela `daily_best`
Melhor resultado diário por usuário e por modo de jogo.

### 👤 Tabela `users`
Controle de usuários cadastrados com limite configurável.

---

## ⚙️ Configurações

```js
// server.js
const MAX_USERS = 1000; // limite máximo de usuários
```

---

## 📡 Deploy (Render)

### Variáveis de ambiente necessárias:

| Variável | Descrição |
|---|---|
| `DATABASE_URL` | URL de conexão do PostgreSQL (Internal URL do Render) |
| `NODE_ENV` | `production` |
| `ADMIN_KEY` | Senha para a rota de reset do banco |

### Configuração do Web Service:

| Campo | Valor |
|---|---|
| Runtime | Node |
| Build Command | `npm install` |
| Start Command | `npm start` |

> ⚠️ O banco PostgreSQL gratuito do Render expira após 30 dias. Para uso contínuo, considere o plano pago ou recrie o banco próximo à data de apresentação.

---

## 🎮 Modos de Jogo

| Modo | Duração | Descrição |
|---|---|---|
| ⚡ Sprint | 15s | Teste explosivo de velocidade |
| 🔥 Rápido | 30s | Equilíbrio entre velocidade e controle |
| 🎯 Clássico | 1min | O modo padrão da maioria dos testes |
| 💪 Resistência | 15min | Teste de fôlego e consistência |
| 🏋️ Maratona | 30min | Desafio máximo de tempo |
| 🔢 Números | Variável | Sequências numéricas aleatórias |
| ∞ Sem Tempo | Livre | Sem cronômetro, foco na precisão |

---

## 🔒 Observações de segurança

- A rota `/api/admin/reset` é protegida por chave de acesso via variável de ambiente `ADMIN_KEY`
- Nunca exponha credenciais do banco em repositórios públicos
- Use sempre a **Internal Database URL** do Render (não a External) para comunicação interna

---

## 👨‍💻 Autor

Desenvolvido por **Daniel Augusto Thomasi** 😎

---

## 🎓 Créditos Acadêmicos

**Disciplina:** Fábrica de Software - 1º SEM. 2026  
**Professores:** Prof. Dr. Elvio Gilberto da Silva · Prof. Me. Luis Felipe Grael Tinós · Profª Esp. Camila Pellizon Floret  
**Instituição:** UNISAGRADO

---

## 📄 Licença

MIT
