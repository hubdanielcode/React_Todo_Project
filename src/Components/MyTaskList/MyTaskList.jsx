import { Button } from "../Button/Button";
import { SingleTask } from "../MyTaskList/MyTask/SingleTask";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";

import "./MyTaskList.css";

const MyTaskList = ({
  tasks,
  handleEdit,
  handleDelete,
  handleComplete,
  handlePrevious,
  handleNext,
  pages,
  page,
  currentPage,
  setCurrentPage,
  totalPages,
}) => {
  return (
    <ul className="whole__tasklist">
      {tasks.map((task) => (
        <SingleTask
          key={task.id}
          task={task}
          handleComplete={handleComplete}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
      <div className="tasklist__buttons">
        <Button
          className="previous__page"
          onClick={handlePrevious}
          disabled={currentPage === 1}
          text={
            <span>
              <IoMdArrowDropleft />
            </span>
          }
        />
        {pages.map((pageNumber) => (
          <span
            key={pageNumber}
            onClick={() => setCurrentPage(pageNumber)}
            role="button"
            className={`page__number ${pageNumber === currentPage ? "active" : ""}`}
          >
            {pageNumber}
          </span>
        ))}

        <Button
          className="next__page"
          onClick={handleNext}
          text={
            <span>
              <IoMdArrowDropright />
            </span>
          }
          disabled={currentPage === totalPages}
        />
      </div>
    </ul>
  );
};
export { MyTaskList };
