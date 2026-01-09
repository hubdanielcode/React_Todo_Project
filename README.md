# ✅ Task List – Gerenciador de Tarefas

Aplicação web desenvolvida em **React** para gerenciamento de tarefas, consumindo uma **API REST simulada** com JSON Server.

O projeto simula o funcionamento de um sistema real de **CRUD** utilizado em aplicações corporativas.

---

## 🚀 Funcionalidades

- 📥 Carregar tarefas da API
- ➕ Criar tarefas
- ✏️ Editar tarefas
- ✔️ Marcar como concluídas
- 🗑️ Remover tarefas
- 📄 Paginação
- ⚠️ Tratamento de erros
- ⏳ Loading
- 📱 Layout responsivo

---

## 🛠️ Tecnologias Utilizadas

- React (Vite)
- JavaScript (ES6+)
- CSS
- Fetch API
- JSON Server
- React Icons
- UUID

---

## 🔗 API (Backend)

http://localhost:3500/tasks

---

## ▶️ Como executar o projeto

1️⃣ Clonar o repositório:

git clone <url-do-repositorio>
cd nome-do-projeto

2️⃣ Instalar as dependências:

npm install

3️⃣ Rodar o JSON Server:

Crie um arquivo db.json na raiz do projeto com o conteúdo das tarefas e execute:
npx json-server -p 3500 -w data/db.json

4️⃣ Rodar a aplicação React:

npm run dev

Acesse no navegador:

http://localhost:517 (ou a porta exibida no terminal)

## ⚙️ Conceitos aplicados

- useState, useEffect
- CRUD com API REST
- Paginação
- Atualização otimista
- Validação de input
- Componentização

---

## 📌 Observações

A interface é atualizada antes da resposta da API para melhorar a experiência do usuário.

 ## 📄 Licença

Este projeto é livre para estudo e aprendizado.
