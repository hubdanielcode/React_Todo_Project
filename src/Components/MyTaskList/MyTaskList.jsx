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
  hasMore,
  pages,
  page,
  setPage,
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
          text={
            <span>
              <IoMdArrowDropleft />
            </span>
          }
        />
        {pages.map((pageNumber) => (
          <span
            key={pageNumber}
            onClick={() => setPage(pageNumber)}
            role="button"
            className={`page__number ${pageNumber === page ? "active" : ""}`}
          >
            {pageNumber}
          </span>
        ))}

        <Button
          className={`next__page ${!hasMore ? "disabled" : ""}`}
          onClick={handleNext}
          text={
            <span>
              <IoMdArrowDropright />
            </span>
          }
          disabled={!hasMore}
        />
      </div>
    </ul>
  );
};
export { MyTaskList };
