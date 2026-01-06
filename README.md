Este projeto é uma aplicação de Lista de Tarefas (Todo List) desenvolvida em React, com consumo de API REST, paginação, edição inline, marcação de tarefas como concluídas e persistência de dados utilizando um backend simulado com JSON Server.

O foco do projeto é praticar conceitos fundamentais de React, como hooks, componentização, estado, efeitos colaterais, requisições HTTP, além de boas práticas de organização de código e estilização responsiva.

🚀 Funcionalidades

✅ Buscar tarefas da API ao carregar a aplicação

➕ Adicionar novas tarefas

✏️ Editar o título de uma tarefa diretamente na lista

✔️ Marcar tarefas como concluídas ou pendentes

🗑️ Excluir tarefas

📄 Paginação da lista de tarefas

⚠️ Tratamento de erros de requisição

⏳ Indicador de carregamento

📱 Layout totalmente responsivo (desktop, tablet e mobile)

🛠️ Tecnologias Utilizadas

React (Vite ou React DOM Client)

JavaScript (ES6+)

CSS puro com variáveis globais

React Icons

JSON Server (API fake)

Fetch API

UUID (crypto.randomUUID)

📂 Estrutura do Projeto
src/
├── Assets/
│   └── Icons/
│       └── tasklisticon.png
│
├── Components/
│   ├── Button/
│   │   ├── Button.jsx
│   │   └── Button.css
│   │
│   ├── Header/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   └── Input/
│   │       ├── Input.jsx
│   │       └── Input.css
│   │
│   └── MyTaskList/
│       ├── MyTaskList.jsx
│       ├── MyTaskList.css
│       └── MyTask/
│           ├── SingleTask.jsx
│           └── SingleTask.css
│
├── RequestAPI/
│   └── RequestAPI.js
│
├── Style/
│   └── Variables.css
│
├── App.jsx
└── main.jsx

🔗 API (Backend)

A aplicação consome uma API REST simulada usando JSON Server.

Endpoint principal:
http://localhost:3500/tasks

Estrutura dos dados:
{
  "id": "uuid",
  "complete": false,
  "title": "Descrição da tarefa"
}

▶️ Como Executar o Projeto
1️⃣ Clonar o repositório
git clone <url-do-repositorio>
cd nome-do-projeto

2️⃣ Instalar as dependências
npm install

3️⃣ Rodar o JSON Server

Crie um arquivo db.json na raiz do projeto com o conteúdo das tarefas e execute:

npx json-server --watch db.json --port 3500

4️⃣ Rodar a aplicação React
npm run dev


Acesse no navegador:

http://localhost:5173


(ou a porta exibida no terminal)

⚙️ Principais Conceitos Aplicados

useState: controle de estados (tarefas, paginação, erros, loading)

useEffect: requisição inicial de dados e efeitos globais

Componentização: separação clara de responsabilidades

Requisições HTTP: GET, POST, PATCH e DELETE

Paginação manual no frontend

Validação de input

CSS com variáveis globais

Responsividade com Media Queries

🎨 Estilização

Uso de CSS Variables para cores, fontes e sombras

Layout com Flexbox

Gradientes personalizados

Estados visuais para botões, páginas ativas e tarefas concluídas

Design adaptável para desktop, tablet e celular

📌 Observações

O projeto utiliza atualização otimista: a interface é atualizada antes da resposta da API.

Em caso de erro na requisição, uma mensagem de erro é exibida.

A paginação é recalculada automaticamente ao adicionar ou remover tarefas.

📄 Licença

Este projeto é livre para estudo e aprendizado.
