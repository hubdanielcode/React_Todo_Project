import "./Input.css";

const Input = ({ newTask, setNewTask, setInputError }) => {
  return (
    <input
      className="todo__input"
      onChange={(e) => {
        setInputError(null);
        setNewTask(e.target.value);
      }}
      onClick={(e) => e.stopPropagation()}
      type="text"
      value={newTask}
      placeholder="Adicione uma nova tarefa..."
    />
  );
};

export { Input };
