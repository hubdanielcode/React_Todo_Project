import { useState, useEffect } from "react";
import { Header } from "./Components/Header/Header";
import { MyTaskList } from "./Components/MyTaskList/MyTaskList";
import { RequestAPI } from "./RequestAPI/RequestAPI";
import "./Style/Variables.css";

const App = () => {
  const myAPI = "http://localhost:3500/tasks";

  const [fetchError, setFetchError] = useState(null);
  const [inputError, setInputError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [page, setPage] = useState(1);

  const pageLimit = 5;
  const totalPages = Math.ceil(tasks.length / pageLimit);
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  const indexStart = (page - 1) * pageLimit;
  const indexEnd = indexStart + pageLimit;
  const paginatedTasks = tasks.slice(indexStart, indexEnd);

  /* - Fetch: Acontece uma única vez, no momento em que a página é carregada pela primeira vez. - */

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(myAPI);
        if (!response.ok) {
          throw new Error(
            "Falha ao buscar os dados. Por favor, tente novamente!",
          );
        }
        const result = await response.json();
        setTasks(result);
        if (page > totalPages) {
          setPage(totalPages || 1);
        }
      } catch (error) {
        setFetchError("Falha ao buscar os dados. Por favor, tente novamente!");
      } finally {
        setIsLoading(false);
      }
    };
    fetchTasks();
  }, []);

  /* - Adicionando uma nova task na lista ao clicar no botão. - */

  const handleAdd = async (e) => {
    e.stopPropagation();
    if (!newTask.trim() || newTask.trim() === "") {
      setInputError("Digite uma tarefa antes de adicionar.");
      return;
    }

    const myNewTask = {
      id: crypto.randomUUID(),
      complete: false,
      title: newTask,
    };

    const updatedTaskList = [...tasks, myNewTask];
    setTasks(updatedTaskList);
    setNewTask("");

    const postObject = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(myNewTask),
    };

    const result = await RequestAPI(myAPI, postObject);
    if (result) {
      setFetchError(result);
    }
  };

  /* - Editando o texto de uma tarefa da lista ao clicar no botão. - */

  const handleEdit = async (id, newTitle) => {
    const newTaskList = tasks.map((task) =>
      task.id === id ? { ...task, title: newTitle } : task,
    );
    setTasks(newTaskList);
    const updateObject = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newTitle }),
    };
    const requestURL = `${myAPI}/${id}`;
    const result = await RequestAPI(requestURL, updateObject);
    setTasks(newTaskList);
    if (result) {
      setFetchError(result);
    }
  };

  /* - Marcando uma task da lista como feita ao clicar no botão. - */

  const handleComplete = async (id) => {
    const newTaskList = tasks.map((task) =>
      task.id === id ? { ...task, complete: !task.complete } : task,
    );
    setTasks(newTaskList);

    const completeTask = newTaskList.filter((task) => task.id === id);
    const updateObject = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ complete: completeTask[0].complete }),
    };
    const requestURL = `${myAPI}/${id}`;
    const result = await RequestAPI(requestURL, updateObject);
    if (result) {
      setFetchError(result);
    }
  };

  /* - Deletando uma task da lista ao clicar no botão. - */

  const handleDelete = async (id) => {
    const newTaskList = tasks.filter((task) => task.id !== id);
    setTasks(newTaskList);

    const deleteObject = {
      method: "DELETE",
    };

    const requestURL = `${myAPI}/${id}`;
    const result = await RequestAPI(requestURL, deleteObject);
    if (result) {
      setFetchError(result);
    }
  };

  /* - Entendendo e removendo o erro ao adicionar uma tarefa - */

  useEffect(() => {
    const handleClickScreen = () => {
      setInputError(null);
    };

    document.addEventListener("click", handleClickScreen);

    return () => {
      document.removeEventListener("click", handleClickScreen);
    };
  }, []);

  /* - Trocando de página na lista de tarefas - */

  const handlePrevious = () => {
    setPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="app__container">
      <Header
        handleAdd={handleAdd}
        inputError={inputError}
        newTask={newTask}
        setInputError={setInputError}
        setNewTask={setNewTask}
      />
      {isLoading && !fetchError && (
        <p className="loading__list"> Carregando...</p>
      )}
      {!isLoading && !fetchError && (
        <MyTaskList
          tasks={paginatedTasks}
          handleEdit={handleEdit}
          handleComplete={handleComplete}
          handleDelete={handleDelete}
          handlePrevious={handlePrevious}
          handleNext={handleNext}
          pages={pages}
          page={page}
          setPage={setPage}
        />
      )}
    </div>
  );
};

export default App;
