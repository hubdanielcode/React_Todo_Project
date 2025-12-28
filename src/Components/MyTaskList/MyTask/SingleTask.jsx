import { FaRegTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { useState } from "react";
import "./SingleTask.css";

const SingleTask = ({ task, handleComplete, handleEdit, handleDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const saveChanges = () => {
    if (!newTitle.trim() || newTitle.trim() === "") {
      setIsEditing(false);
      return;
    }
    handleEdit(task.id, newTitle);
    setIsEditing(false);
  };
  return (
    <li className="individual__task">
      <div className="task__line__wrapper">
        <input
          className="input__checkbox"
          type="checkbox"
          onChange={() => handleComplete(task.id, task.complete)}
          checked={task.complete}
        />
        {isEditing ? (
          <input
            className="edittask__input"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            autoFocus
            onBlur={saveChanges}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                saveChanges();
              }
              if (e.key === "Escape") {
                setNewTitle(task.title);
                setIsEditing(false);
                return;
              }
            }}
          />
        ) : (
          <label
            style={
              task.complete
                ? { textDecoration: "line-through", color: "#8585858e" }
                : null
            }
          >
            {task.title}
          </label>
        )}
        <FiEdit
          className="edit__icon"
          role="button"
          cursor="pointer"
          onClick={(e) => {
            e.preventDefault();
            setNewTitle(task.title);
            setIsEditing(true);
          }}
        />
        <FaRegTrashAlt
          className="trash__icon"
          role="button"
          cursor="pointer"
          onClick={() => handleDelete(task.id)}
        />
      </div>
    </li>
  );
};
export { SingleTask };
