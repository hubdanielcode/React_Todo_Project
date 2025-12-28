import { FaPen } from "react-icons/fa";
import { Input } from "../Header/Input/Input";
import { Button } from "../Button/Button";
import TaskListIcon from "../../Assets/Icons/tasklisticon.png";
import "./Header.css";
const Header = ({
  handleAdd,
  inputError,
  newTask,
  setInputError,
  setNewTask,
}) => {
  return (
    <header>
      <h1 className="todo__h1">
        Lista de Tarefas
        <img
          alt="tasklisticon.png"
          className="todo__icon"
          height="60px"
          src={TaskListIcon}
          width="60px"
        />
      </h1>
      <div className="todo__row__wrapper">
        <div className="todo__input__wrapper">
          <FaPen className="todo__input__icon" />
          <Input
            newTask={newTask}
            setNewTask={setNewTask}
            setInputError={setInputError}
          />
        </div>
        <Button
          className="todo__addbutton"
          text={
            <div>
              <span className="todo__addbutton__sign">+</span> Adicionar
            </div>
          }
          onClick={handleAdd}
        />
      </div>
      <div className="todo__inputerror__wrapper">
        {inputError && <p className="todo__inputerror">{inputError}</p>}
      </div>
    </header>
  );
};
export { Header };
