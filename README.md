Este projeto é uma aplicação de Lista de Tarefas (Todo List) desenvolvida em React, com consumo de API REST, paginação, edição inline, marcação de tarefas como concluídas e persistência de dados utilizando um backend simulado com JSON Server.

O foco do projeto é praticar conceitos fundamentais de React, como hooks, componentização, estado, efeitos colaterais, requisições HTTP, além de boas práticas de organização de código e estilização responsiva.

<h1> 🚀 Funcionalidades: </h1>
<br>

 <ul>
   <li> ✅ Buscar tarefas da API ao carregar a aplicação   </li>
   <li> ➕ Adicionar novas tarefas   </li>
   <li> ✏️ Editar o título de uma tarefa diretamente na lista   </li>
   <li> ✔️ Marcar tarefas como concluídas ou pendentes   </li>
   <li> 🗑️ Excluir tarefas   </li>
   <li> 📄 Paginação da lista de tarefas   </li>
   <li> ⚠️ Tratamento de erros de requisição   </li> 
   <li> ⏳ Indicador de carregamento   </li>
   <li> 📱 Layout totalmente responsivo (desktop, tablet e mobile)   </li>
</ul>

<h1> 🛠️ Tecnologias Utilizadas: </h1>
<br> 

<ul>
  <li> React (Vite ou React DOM Client)   </li>
  <li> JavaScript (ES6+)   </li>
  <li> CSS puro com variáveis globais   </li>
  <li> React Icons   </li>
  <li> JSON Server (API fake)   </li>
  <li> Fetch API   </li>
  <li> UUID (crypto.randomUUID)   </li>
</ul>

<h1> 🔗 API (Backend): </h1>
<br> 

A aplicação consome uma API REST simulada usando JSON Server.

<h2> Endpoint principal: </h2>
<br>

http://localhost:3500/tasks


 <h2> Estrutura dos dados: </h2>
 <br>


```json
{
    "id": "uuid",
  "complete": false,
  "title": "Descrição da tarefa"
}


<h3> ▶️ Como Executar o Projeto? </h3>

1️⃣ Clonar o repositório:

git clone <url-do-repositorio>
cd nome-do-projeto

2️⃣ Instalar as dependências:

npm install

3️⃣ Rodar o JSON Server:

Crie um arquivo db.json na raiz do projeto com o conteúdo das tarefas e execute:
npx json-server --watch db.json --port 3500

4️⃣ Rodar a aplicação React:

npm run dev

Acesse no navegador:

http://localhost:517 (ou a porta exibida no terminal)

<h3>⚙️ Principais Conceitos Aplicados: </h3>

<ul>
   <li> useState: controle de estados (tarefas, paginação, erros, loading)   </li>
   <li> useEffect: requisição inicial de dados e efeitos globais   </li>
   <li> Componentização: separação clara de responsabilidades   </li>
   <li> Requisições HTTP: GET, POST, PATCH e DELETE   </li>
   <li> Paginação manual no frontend   </li>
   <li> Validação de input   </li>
   <li> CSS com variáveis globais   </li>
   <li> Responsividade com Media Queries   </li>    
</ul> 

<h3> 🎨 Estilização: </h3>
<ul>
   <li> Uso de CSS Variables para cores, fontes e sombras   </li>
   <li> Layout com Flexbox   </li>
   <li> Gradientes personalizados   </li>
   <li> Estados visuais para botões, páginas ativas e tarefas concluídas   </li>
   <li> Design adaptável para desktop, tablet e celular   </li>
</ul>
<h3> 📌 Observações: </h3>

O projeto utiliza atualização otimista: a interface é atualizada antes da resposta da API. <br>
Em caso de erro na requisição, uma mensagem de erro é exibida. <br>
A paginação é recalculada automaticamente ao adicionar ou remover tarefas. <br>

 <h3> 📄 Licença: </h3>

Este projeto é livre para estudo e aprendizado.
